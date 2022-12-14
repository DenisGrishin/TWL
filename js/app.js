/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, s) {
          "use strict";
          var r = [],
            o = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            d = r.push,
            c = r.indexOf,
            u = {},
            p = u.toString,
            f = u.hasOwnProperty,
            h = f.toString,
            m = h.call(Object),
            g = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            w = i.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var i,
              s,
              r = (n = n || w).createElement("script");
            if (((r.text = e), t))
              for (i in b)
                (s = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  r.setAttribute(i, s);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.6.1",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function k(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: S,
              constructor: C,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: d,
              sort: r.sort,
              splice: r.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  s,
                  r,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  d = !1;
                for (
                  "boolean" == typeof o &&
                    ((d = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          o !== i &&
                          (d &&
                          i &&
                          (C.isPlainObject(i) || (s = Array.isArray(i)))
                            ? ((n = o[t]),
                              (r =
                                s && !Array.isArray(n)
                                  ? []
                                  : s || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (s = !1),
                              (o[t] = C.extend(d, r, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            C.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      h.call(n) === m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (k(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (k(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : d.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, s = e.length; i < n; i++)
                  e[s++] = t[i];
                return (e.length = s), e;
              },
              grep: function (e, t, n) {
                for (var i = [], s = 0, r = e.length, o = !n; s < r; s++)
                  !t(e[s], s) !== o && i.push(e[s]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  s,
                  r = 0,
                  o = [];
                if (k(e))
                  for (i = e.length; r < i; r++)
                    null != (s = t(e[r], r, n)) && o.push(s);
                else for (r in e) null != (s = t(e[r], r, n)) && o.push(s);
                return l(o);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = r[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var E = (function (e) {
            var t,
              n,
              i,
              s,
              r,
              o,
              a,
              l,
              d,
              c,
              u,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              w,
              b = "sizzle" + 1 * new Date(),
              x = e.document,
              T = 0,
              S = 0,
              C = le(),
              k = le(),
              E = le(),
              $ = le(),
              L = function (e, t) {
                return e === t && (u = !0), 0;
              },
              A = {}.hasOwnProperty,
              M = [],
              P = M.pop,
              O = M.push,
              D = M.push,
              N = M.slice,
              H = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              j =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              q = "[\\x20\\t\\r\\n\\f]",
              z =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              I =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                z +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                z +
                "))|)" +
                q +
                "*\\]",
              _ =
                ":(" +
                z +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
              B = new RegExp(q + "+", "g"),
              R = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              G = new RegExp(q + "|>"),
              V = new RegExp(_),
              X = new RegExp("^" + z + "$"),
              U = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + _),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              se = function (e, t) {
                return t
                  ? "\0" === e
                    ? "???"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                p();
              },
              oe = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((M = N.call(x.childNodes)), x.childNodes),
                M[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: M.length
                  ? function (e, t) {
                      O.apply(e, N.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, s) {
              var r,
                a,
                d,
                c,
                u,
                h,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!s && (p(t), (t = t || f), m)) {
                if (11 !== x && (u = Z.exec(e)))
                  if ((r = u[1])) {
                    if (9 === x) {
                      if (!(d = t.getElementById(r))) return i;
                      if (d.id === r) return i.push(d), i;
                    } else if (
                      y &&
                      (d = y.getElementById(r)) &&
                      w(t, d) &&
                      d.id === r
                    )
                      return i.push(d), i;
                  } else {
                    if (u[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (r = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(i, t.getElementsByClassName(r)), i;
                  }
                if (
                  n.qsa &&
                  !$[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (G.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(ie, se))
                          : t.setAttribute("id", (c = b))),
                        a = (h = o(e)).length;
                      a--;

                    )
                      h[a] = (c ? "#" + c : ":scope") + " " + we(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return D.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    $(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(R, "$1"), t, i, s);
            }
            function le() {
              var e = [];
              return function t(n, s) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = s)
                );
              };
            }
            function de(e) {
              return (e[b] = !0), e;
            }
            function ce(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), s = n.length; s--; )
                i.attrHandle[n[s]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return de(function (t) {
                return (
                  (t = +t),
                  de(function (n, i) {
                    for (var s, r = e([], n.length, t), o = r.length; o--; )
                      n[(s = r[o])] && (n[s] = !(i[s] = n[s]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (r = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  s,
                  o = e ? e.ownerDocument || e : x;
                return o != f && 9 === o.nodeType && o.documentElement
                  ? ((h = (f = o).documentElement),
                    (m = !r(f)),
                    x != f &&
                      (s = f.defaultView) &&
                      s.top !== s &&
                      (s.addEventListener
                        ? s.addEventListener("unload", re, !1)
                        : s.attachEvent && s.attachEvent("onunload", re)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !f.getElementsByName || !f.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              i,
                              s,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                s = t.getElementsByName(e), i = 0;
                                (r = s[i++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            s = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = r[s++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return r;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (g = []),
                    (n.qsa = K.test(f.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + j + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", _);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (w =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == x && w(x, e))
                                ? -1
                                : t == f || (t.ownerDocument == x && w(x, t))
                                ? 1
                                : c
                                ? H(c, e) - H(c, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            i = 0,
                            s = e.parentNode,
                            r = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!s || !r)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : s
                              ? -1
                              : r
                              ? 1
                              : c
                              ? H(c, e) - H(c, t)
                              : 0;
                          if (s === r) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i
                            ? pe(o[i], a[i])
                            : o[i] == x
                            ? -1
                            : a[i] == x
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  m &&
                  !$[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  $(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), w(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var s = i.attrHandle[t.toLowerCase()],
                r =
                  s && A.call(i.attrHandle, t.toLowerCase())
                    ? s(e, t, !m)
                    : void 0;
              return void 0 !== r
                ? r
                : n.attributes || !m
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, se);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                s = 0,
                r = 0;
              if (
                ((u = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(L),
                u)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (s = i.push(r));
                for (; s--; ) e.splice(i[s], 1);
              }
              return (c = null), e;
            }),
            (s = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;
                if (r) {
                  if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                  } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += s(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: de,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + q + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var s = ae.attr(i, e);
                      return null == s
                        ? "!=" === t
                        : !t ||
                            ((s += ""),
                            "=" === t
                              ? s === n
                              : "!=" === t
                              ? s !== n
                              : "^=" === t
                              ? n && 0 === s.indexOf(n)
                              : "*=" === t
                              ? n && s.indexOf(n) > -1
                              : "$=" === t
                              ? n && s.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + s.replace(B, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (s === n ||
                                  s.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, s) {
                    var r = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === s
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var d,
                            c,
                            u,
                            p,
                            f,
                            h,
                            m = r !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                          if (g) {
                            if (r) {
                              for (; m; ) {
                                for (p = t; (p = p[m]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [o ? g.firstChild : g.lastChild]), o && y)
                            ) {
                              for (
                                w =
                                  (f =
                                    (d =
                                      (c =
                                        (u = (p = g)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && d[1]) && d[2],
                                  p = f && g.childNodes[f];
                                (p =
                                  (++f && p && p[m]) || (w = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++w && p === t) {
                                  c[e] = [T, f, w];
                                  break;
                                }
                            } else if (
                              (y &&
                                (w = f =
                                  (d =
                                    (c =
                                      (u = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && d[1]),
                              !1 === w)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[m]) ||
                                  (w = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++w ||
                                  (y &&
                                    ((c =
                                      (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [T, w]),
                                  p !== t));

                              );
                            return (w -= s) === i || (w % i == 0 && w / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      s =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return s[b]
                      ? s(t)
                      : s.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? de(function (e, n) {
                              for (var i, r = s(e, t), o = r.length; o--; )
                                e[(i = H(e, r[o]))] = !(n[i] = r[o]);
                            })
                          : function (e) {
                              return s(e, 0, n);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: de(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(R, "$1"));
                    return i[b]
                      ? de(function (e, t, n, s) {
                          for (
                            var r, o = i(e, null, s, []), a = e.length;
                            a--;

                          )
                            (r = o[a]) && (e[a] = !(t[a] = r));
                        })
                      : function (e, s, r) {
                          return (
                            (t[0] = e),
                            i(t, null, r, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: de(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: de(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || s(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: de(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function we(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function be(e, t, n) {
              var i = t.dir,
                s = t.next,
                r = s || i,
                o = n && "parentNode" === r,
                a = S++;
              return t.first
                ? function (t, n, s) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, s);
                    return !1;
                  }
                : function (t, n, l) {
                    var d,
                      c,
                      u,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((c =
                              (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            s && s === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((d = c[r]) && d[0] === T && d[1] === a)
                              return (p[2] = d[2]);
                            if (((c[r] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var s = e.length; s--; ) if (!e[s](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, s) {
              for (
                var r, o = [], a = 0, l = e.length, d = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((n && !n(r, i, s)) || (o.push(r), d && t.push(a)));
              return o;
            }
            function Se(e, t, n, i, s, r) {
              return (
                i && !i[b] && (i = Se(i)),
                s && !s[b] && (s = Se(s, r)),
                de(function (r, o, a, l) {
                  var d,
                    c,
                    u,
                    p = [],
                    f = [],
                    h = o.length,
                    m =
                      r ||
                      (function (e, t, n) {
                        for (var i = 0, s = t.length; i < s; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || (!r && t) ? m : Te(m, p, e, a, l),
                    v = n ? (s || (r ? e : h || i) ? [] : o) : g;
                  if ((n && n(g, v, a, l), i))
                    for (d = Te(v, f), i(d, [], a, l), c = d.length; c--; )
                      (u = d[c]) && (v[f[c]] = !(g[f[c]] = u));
                  if (r) {
                    if (s || e) {
                      if (s) {
                        for (d = [], c = v.length; c--; )
                          (u = v[c]) && d.push((g[c] = u));
                        s(null, (v = []), d, l);
                      }
                      for (c = v.length; c--; )
                        (u = v[c]) &&
                          (d = s ? H(r, u) : p[c]) > -1 &&
                          (r[d] = !(o[d] = u));
                    }
                  } else (v = Te(v === o ? v.splice(h, v.length) : v)), s ? s(null, o, v, l) : D.apply(o, v);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  s,
                  r = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[" "],
                  l = o ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  u = be(
                    function (e) {
                      return H(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var s =
                        (!o && (i || n !== d)) ||
                        ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                      return (t = null), s;
                    },
                  ];
                l < r;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [be(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                    for (s = ++l; s < r && !i.relative[e[s].type]; s++);
                    return Se(
                      l > 1 && xe(p),
                      l > 1 &&
                        we(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(R, "$1"),
                      n,
                      l < s && Ce(e.slice(l, s)),
                      s < r && Ce((e = e.slice(s))),
                      s < r && we(e)
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var n,
                    s,
                    r,
                    o,
                    a,
                    l,
                    d,
                    c = k[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (a = e, l = [], d = i.preFilter; a; ) {
                    for (o in ((n && !(s = W.exec(a))) ||
                      (s && (a = a.slice(s[0].length) || a), l.push((r = []))),
                    (n = !1),
                    (s = F.exec(a)) &&
                      ((n = s.shift()),
                      r.push({ value: n, type: s[0].replace(R, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(s = U[o].exec(a)) ||
                        (d[o] && !(s = d[o](s))) ||
                        ((n = s.shift()),
                        r.push({ value: n, type: o, matches: s }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : k(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    s = [],
                    r = [],
                    a = E[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Ce(t[n]))[b] ? s.push(a) : r.push(a);
                    (a = E(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          s = e.length > 0,
                          r = function (r, o, a, l, c) {
                            var u,
                              h,
                              g,
                              v = 0,
                              y = "0",
                              w = r && [],
                              b = [],
                              x = d,
                              S = r || (s && i.find.TAG("*", c)),
                              C = (T += null == x ? 1 : Math.random() || 0.1),
                              k = S.length;
                            for (
                              c && (d = o == f || o || c);
                              y !== k && null != (u = S[y]);
                              y++
                            ) {
                              if (s && u) {
                                for (
                                  h = 0,
                                    o ||
                                      u.ownerDocument == f ||
                                      (p(u), (a = !m));
                                  (g = e[h++]);

                                )
                                  if (g(u, o || f, a)) {
                                    l.push(u);
                                    break;
                                  }
                                c && (T = C);
                              }
                              n && ((u = !g && u) && v--, r && w.push(u));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (g = t[h++]); ) g(w, b, o, a);
                              if (r) {
                                if (v > 0)
                                  for (; y--; )
                                    w[y] || b[y] || (b[y] = P.call(l));
                                b = Te(b);
                              }
                              D.apply(l, b),
                                c &&
                                  !r &&
                                  b.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return c && ((T = C), (d = x)), w;
                          };
                        return n ? de(r) : r;
                      })(r, s)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, s) {
                  var r,
                    l,
                    d,
                    c,
                    u,
                    p = "function" == typeof e && e,
                    f = !s && o((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (d = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(d.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      r = U.needsContext.test(e) ? 0 : l.length;
                      r-- && ((d = l[r]), !i.relative[(c = d.type)]);

                    )
                      if (
                        (u = i.find[c]) &&
                        (s = u(
                          d.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(r, 1), !(e = s.length && we(l))))
                          return D.apply(n, s), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, f))(
                      s,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(L).join("") === b),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(j, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (C.find = E),
            (C.expr = E.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = E.uniqueSort),
            (C.text = E.getText),
            (C.isXMLDoc = E.isXML),
            (C.contains = E.contains),
            (C.escapeSelector = E.escape);
          var $ = function (e, t, n) {
              for (
                var i = [], s = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (s && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = C.expr.match.needsContext;
          function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var P =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function O(e, t, n) {
            return v(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  s = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(s[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, s[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(O(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(O(this, e || [], !0));
              },
              is: function (e) {
                return !!O(
                  this,
                  "string" == typeof e && A.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, s;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : N.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : w,
                      !0
                    )
                  ),
                  P.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (s = w.getElementById(i[2])) &&
                  ((this[0] = s), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (D = C(w));
          var H = /^(?:parents|prev(?:Until|All))/,
            j = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                s = this.length,
                r = [],
                o = "string" != typeof e && C(e);
              if (!A.test(e))
                for (; i < s; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(C(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return $(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return $(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return $(e, "nextSibling");
                },
                prevAll: function (e) {
                  return $(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return $(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return $(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (M(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var s = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (s = C.filter(i, s)),
                    this.length > 1 &&
                      (j[e] || C.uniqueSort(s), H.test(e) && s.reverse()),
                    this.pushStack(s)
                  );
                };
              }
            );
          var z = /[^\x20\t\r\n\f]+/g;
          function I(e) {
            return e;
          }
          function _(e) {
            throw e;
          }
          function B(e, t, n, i) {
            var s;
            try {
              e && v((s = e.promise))
                ? s.call(e).done(t).fail(n)
                : e && v((s = e.then))
                ? s.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(z) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              s,
              r = [],
              o = [],
              a = -1,
              l = function () {
                for (s = s || e.once, i = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), s && (r = n ? [] : "");
              },
              d = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((a = r.length - 1), o.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && d.has(i)) || r.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (s = o = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (s = o = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, n) {
                  return (
                    s ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return d.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return d;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  s = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return s.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var s = v(e[i[4]]) && e[i[4]];
                          r[i[1]](function () {
                            var e = s && s.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, s ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, s) {
                      var r = 0;
                      function o(e, t, n, s) {
                        return function () {
                          var a = this,
                            l = arguments,
                            d = function () {
                              var i, d;
                              if (!(e < r)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (d =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(d)
                                    ? s
                                      ? d.call(i, o(r, t, I, s), o(r, t, _, s))
                                      : (r++,
                                        d.call(
                                          i,
                                          o(r, t, I, s),
                                          o(r, t, _, s),
                                          o(r, t, I, t.notifyWith)
                                        ))
                                    : (n !== I && ((a = void 0), (l = [i])),
                                      (s || t.resolveWith)(a, l));
                              }
                            },
                            c = s
                              ? d
                              : function () {
                                  try {
                                    d();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, c.stackTrace),
                                      e + 1 >= r &&
                                        (n !== _ && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? c()
                            : (C.Deferred.getStackHook &&
                                (c.stackTrace = C.Deferred.getStackHook()),
                              i.setTimeout(c));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(o(0, i, v(s) ? s : I, i.notifyWith)),
                          t[1][3].add(o(0, i, v(e) ? e : I)),
                          t[2][3].add(o(0, i, v(n) ? n : _));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, s) : s;
                    },
                  },
                  r = {};
                return (
                  C.each(t, function (e, i) {
                    var o = i[2],
                      a = i[5];
                    (s[i[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(i[3].fire),
                      (r[i[0]] = function () {
                        return (
                          r[i[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[i[0] + "With"] = o.fireWith);
                  }),
                  s.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  s = a.call(arguments),
                  r = C.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (s[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || r.resolveWith(i, s);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, r.done(o(n)).resolve, r.reject, !t),
                  "pending" === r.state() || v(s[n] && s[n].then))
                )
                  return r.then();
                for (; n--; ) B(s[n], o(n), r.reject);
                return r.promise();
              },
            });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              R.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = C.Deferred();
          function F() {
            w.removeEventListener("DOMContentLoaded", F),
              i.removeEventListener("load", F),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || W.resolveWith(w, [C]));
              },
            }),
            (C.ready.then = W.then),
            "complete" === w.readyState ||
            ("loading" !== w.readyState && !w.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (w.addEventListener("DOMContentLoaded", F),
                i.addEventListener("load", F));
          var G = function (e, t, n, i, s, r, o) {
              var a = 0,
                l = e.length,
                d = null == n;
              if ("object" === T(n))
                for (a in ((s = !0), n)) G(e, t, a, n[a], !0, r, o);
              else if (
                void 0 !== i &&
                ((s = !0),
                v(i) || (o = !0),
                d &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((d = t),
                      (t = function (e, t, n) {
                        return d.call(C(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return s ? e : d ? t.call(e) : l ? t(e[0], n) : r;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(V, "ms-").replace(X, U);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = C.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  s = this.cache(e);
                if ("string" == typeof t) s[Y(t)] = n;
                else for (i in t) s[Y(i)] = t[i];
                return s;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in i
                      ? [t]
                      : t.match(z) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  s,
                  r = this[0],
                  o = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((s = Z.get(r)),
                    1 === r.nodeType && !K.get(r, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = Y(i.slice(5))), ne(r, i, s[i]));
                    K.set(r, "hasDataAttrs", !0);
                  }
                  return s;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : G(
                      this,
                      function (t) {
                        var n;
                        if (r && void 0 === t)
                          return void 0 !== (n = Z.get(r, e)) ||
                            void 0 !== (n = ne(r, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = K.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = K.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  s = n.shift(),
                  r = C._queueHooks(e, t);
                "inprogress" === s && ((s = n.shift()), i--),
                  s &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    s.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      r
                    )),
                  !i && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  s = C.Deferred(),
                  r = this,
                  o = this.length,
                  a = function () {
                    --i || s.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = K.get(r[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), s.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            se = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            oe = w.documentElement,
            ae = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var de = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function ce(e, t, n, i) {
            var s,
              r,
              o = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              l = a(),
              d = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== d && +l)) &&
                se.exec(C.css(e, t));
            if (c && c[3] !== d) {
              for (l /= 2, d = d || c[3], c = +l || 1; o--; )
                C.style(e, t, c + d),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
                  (c /= r);
              (c *= 2), C.style(e, t, c + d), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (s = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = d), (i.start = c), (i.end = s))),
              s
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              s = ue[i];
            return (
              s ||
              ((t = n.body.appendChild(n.createElement(i))),
              (s = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === s && (s = "block"),
              (ue[i] = s),
              s)
            );
          }
          function fe(e, t) {
            for (var n, i, s = [], r = 0, o = e.length; r < o; r++)
              (i = e[r]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((s[r] = K.get(i, "display") || null),
                      s[r] || (i.style.display = "")),
                    "" === i.style.display && de(i) && (s[r] = pe(i)))
                  : "none" !== n && ((s[r] = "none"), K.set(i, "display", n)));
            for (r = 0; r < o; r++) null != s[r] && (e[r].style.display = s[r]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    de(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            me,
            ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = w.createDocumentFragment().appendChild(w.createElement("div"))),
            (me = w.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            he.appendChild(me),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var we = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && M(e, t)) ? C.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
            (we.th = we.td),
            g.option ||
              (we.optgroup = we.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Se(e, t, n, i, s) {
            for (
              var r,
                o,
                a,
                l,
                d,
                c,
                u = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((r = e[f]) || 0 === r)
                if ("object" === T(r)) C.merge(p, r.nodeType ? [r] : r);
                else if (Te.test(r)) {
                  for (
                    o = o || u.appendChild(t.createElement("div")),
                      a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                      l = we[a] || we._default,
                      o.innerHTML = l[1] + C.htmlPrefilter(r) + l[2],
                      c = l[0];
                    c--;

                  )
                    o = o.lastChild;
                  C.merge(p, o.childNodes),
                    ((o = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
            for (u.textContent = "", f = 0; (r = p[f++]); )
              if (i && C.inArray(r, i) > -1) s && s.push(r);
              else if (
                ((d = ae(r)),
                (o = be(u.appendChild(r), "script")),
                d && xe(o),
                n)
              )
                for (c = 0; (r = o[c++]); ) ye.test(r.type || "") && n.push(r);
            return u;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function ke() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function $e(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return w.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Le(e, t, n, i, s, r) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Le(e, a, n, i, t[a], r);
              return e;
            }
            if (
              (null == i && null == s
                ? ((s = n), (i = n = void 0))
                : null == s &&
                  ("string" == typeof n
                    ? ((s = i), (i = void 0))
                    : ((s = i), (i = n), (n = void 0))),
              !1 === s)
            )
              s = Ee;
            else if (!s) return e;
            return (
              1 === r &&
                ((o = s),
                (s = function (e) {
                  return C().off(e), o.apply(this, arguments);
                }),
                (s.guid = o.guid || (o.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, s, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (K.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      s,
                      r = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((r = a.call(arguments)),
                        K.set(this, t, r),
                        (i = n(this, t)),
                        this[t](),
                        r !== (s = K.get(this, t)) || i
                          ? K.set(this, t, !1)
                          : (s = {}),
                        r !== s)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          s && s.value
                        );
                    } else
                      r.length &&
                        (K.set(this, t, {
                          value: C.event.trigger(
                            C.extend(r[0], C.Event.prototype),
                            r.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && C.event.add(e, t, ke);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, s) {
              var r,
                o,
                a,
                l,
                d,
                c,
                u,
                p,
                f,
                h,
                m,
                g = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (r = n).handler), (s = r.selector)),
                    s && C.find.matchesSelector(oe, s),
                    n.guid || (n.guid = C.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (o = g.handle) ||
                      (o = g.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    d = (t = (t || "").match(z) || [""]).length;
                  d--;

                )
                  (f = m = (a = Ce.exec(t[d]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((u = C.event.special[f] || {}),
                      (f = (s ? u.delegateType : u.bindType) || f),
                      (u = C.event.special[f] || {}),
                      (c = C.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: s,
                          needsContext: s && C.expr.match.needsContext.test(s),
                          namespace: h.join("."),
                        },
                        r
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, i, h, o)) ||
                          (e.addEventListener && e.addEventListener(f, o))),
                      u.add &&
                        (u.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      s ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (C.event.global[f] = !0));
            },
            remove: function (e, t, n, i, s) {
              var r,
                o,
                a,
                l,
                d,
                c,
                u,
                p,
                f,
                h,
                m,
                g = K.hasData(e) && K.get(e);
              if (g && (l = g.events)) {
                for (d = (t = (t || "").match(z) || [""]).length; d--; )
                  if (
                    ((f = m = (a = Ce.exec(t[d]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      u = C.event.special[f] || {},
                        p =
                          l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = r = p.length;
                      r--;

                    )
                      (c = p[r]),
                        (!s && m !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (i &&
                            i !== c.selector &&
                            ("**" !== i || !c.selector)) ||
                          (p.splice(r, 1),
                          c.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, c));
                    o &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                        C.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) C.event.remove(e, f + t[d], n, i, !0);
                C.isEmptyObject(l) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                s,
                r,
                o,
                a = new Array(arguments.length),
                l = C.event.fix(e),
                d =
                  (K.get(this, "events") || Object.create(null))[l.type] || [],
                c = C.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, l))
              ) {
                for (
                  o = C.event.handlers.call(this, l, d), t = 0;
                  (s = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = s.elem, n = 0;
                    (r = s.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (i = (
                          (C.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(s.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                s,
                r,
                o,
                a = [],
                l = t.delegateCount,
                d = e.target;
              if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                for (; d !== this; d = d.parentNode || this)
                  if (
                    1 === d.nodeType &&
                    ("click" !== e.type || !0 !== d.disabled)
                  ) {
                    for (r = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(s = (i = t[n]).selector + " ")] &&
                        (o[s] = i.needsContext
                          ? C(s, this).index(d) > -1
                          : C.find(s, this, null, [d]).length),
                        o[s] && r.push(i);
                    r.length && a.push({ elem: d, handlers: r });
                  }
              return (
                (d = this),
                l < t.length && a.push({ elem: d, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click", ke),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      K.get(t, "click")) ||
                    M(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? ke
                      : Ee),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return Ae(this, e, $e), !1;
                },
                trigger: function () {
                  return Ae(this, e), !0;
                },
                _default: function (t) {
                  return K.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      s = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (s && (s === i || C.contains(i, s))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Le(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Le(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (s in e) this.off(s, t, e[s]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Me = /<script|<style|<link/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function De(e, t) {
            return (
              (M(e, "table") &&
                M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function Ne(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function He(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function je(e, t) {
            var n, i, s, r, o, a;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (a = K.get(e).events))
                for (s in (K.remove(t, "handle events"), a))
                  for (n = 0, i = a[s].length; n < i; n++)
                    C.event.add(t, s, a[s][n]);
              Z.hasData(e) &&
                ((r = Z.access(e)), (o = C.extend({}, r)), Z.set(t, o));
            }
          }
          function qe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function ze(e, t, n, i) {
            t = l(t);
            var s,
              r,
              o,
              a,
              d,
              c,
              u = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              m = v(h);
            if (
              m ||
              (p > 1 && "string" == typeof h && !g.checkClone && Pe.test(h))
            )
              return e.each(function (s) {
                var r = e.eq(s);
                m && (t[0] = h.call(this, s, r.html())), ze(r, t, n, i);
              });
            if (
              p &&
              ((r = (s = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === s.childNodes.length && (s = r),
              r || i)
            ) {
              for (a = (o = C.map(be(s, "script"), Ne)).length; u < p; u++)
                (d = s),
                  u !== f &&
                    ((d = C.clone(d, !0, !0)),
                    a && C.merge(o, be(d, "script"))),
                  n.call(e[u], d, u);
              if (a)
                for (
                  c = o[o.length - 1].ownerDocument, C.map(o, He), u = 0;
                  u < a;
                  u++
                )
                  (d = o[u]),
                    ye.test(d.type || "") &&
                      !K.access(d, "globalEval") &&
                      C.contains(c, d) &&
                      (d.src && "module" !== (d.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !d.noModule &&
                          C._evalUrl(
                            d.src,
                            { nonce: d.nonce || d.getAttribute("nonce") },
                            c
                          )
                        : x(d.textContent.replace(Oe, ""), d, c));
            }
            return e;
          }
          function Ie(e, t, n) {
            for (
              var i, s = t ? C.filter(t, e) : e, r = 0;
              null != (i = s[r]);
              r++
            )
              n || 1 !== i.nodeType || C.cleanData(be(i)),
                i.parentNode &&
                  (n && ae(i) && xe(be(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                s,
                r,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (o = be(a), i = 0, s = (r = be(e)).length; i < s; i++)
                  qe(r[i], o[i]);
              if (t)
                if (n)
                  for (
                    r = r || be(e), o = o || be(a), i = 0, s = r.length;
                    i < s;
                    i++
                  )
                    je(r[i], o[i]);
                else je(e, a);
              return (
                (o = be(a, "script")).length > 0 &&
                  xe(o, !l && be(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, s = C.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (i in t.events)
                        s[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return Ie(this, e, !0);
              },
              remove: function (e) {
                return Ie(this, e);
              },
              text: function (e) {
                return G(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return ze(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return ze(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return ze(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return ze(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return G(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Me.test(e) &&
                      !we[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return ze(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], s = C(e), r = s.length - 1, o = 0;
                    o <= r;
                    o++
                  )
                    (n = o === r ? this : this.clone(!0)),
                      C(s[o])[t](n),
                      d.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var _e = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Be = /^--/,
            Re = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            We = function (e, t, n) {
              var i,
                s,
                r = {};
              for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
              for (s in ((i = n.call(e)), t)) e.style[s] = r[s];
              return i;
            },
            Fe = new RegExp(re.join("|"), "i"),
            Ge = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g"
            );
          function Ve(e, t, n) {
            var i,
              s,
              r,
              o,
              a = Be.test(t),
              l = e.style;
            return (
              (n = n || Re(e)) &&
                ((o = n.getPropertyValue(t) || n[t]),
                a && (o = o.replace(Ge, "$1")),
                "" !== o || ae(e) || (o = C.style(e, t)),
                !g.pixelBoxStyles() &&
                  _e.test(o) &&
                  Fe.test(t) &&
                  ((i = l.width),
                  (s = l.minWidth),
                  (r = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = o),
                  (o = n.width),
                  (l.width = i),
                  (l.minWidth = s),
                  (l.maxWidth = r))),
              void 0 !== o ? o + "" : o
            );
          }
          function Xe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (d.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(d).appendChild(c);
                var e = i.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (s = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (r = 12 === t(c.offsetWidth / 3)),
                  oe.removeChild(d),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              s,
              r,
              o,
              a,
              l,
              d = w.createElement("div"),
              c = w.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
              C.extend(g, {
                boxSizingReliable: function () {
                  return e(), s;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, n, s;
                  return (
                    null == a &&
                      ((e = w.createElement("table")),
                      (t = w.createElement("tr")),
                      (n = w.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (s = i.getComputedStyle(t)),
                      (a =
                        parseInt(s.height, 10) +
                          parseInt(s.borderTopWidth, 10) +
                          parseInt(s.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ue = ["Webkit", "Moz", "ms"],
            Ye = w.createElement("div").style,
            Qe = {};
          function Je(e) {
            var t = C.cssProps[e] || Qe[e];
            return (
              t ||
              (e in Ye
                ? e
                : (Qe[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                        n--;

                      )
                        if ((e = Ue[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            et = { letterSpacing: "0", fontWeight: "400" };
          function tt(e, t, n) {
            var i = se.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function nt(e, t, n, i, s, r) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += C.css(e, n + re[o], !0, s)),
                i
                  ? ("content" === n &&
                      (l -= C.css(e, "padding" + re[o], !0, s)),
                    "margin" !== n &&
                      (l -= C.css(e, "border" + re[o] + "Width", !0, s)))
                  : ((l += C.css(e, "padding" + re[o], !0, s)),
                    "padding" !== n
                      ? (l += C.css(e, "border" + re[o] + "Width", !0, s))
                      : (a += C.css(e, "border" + re[o] + "Width", !0, s)));
            return (
              !i &&
                r >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, n) {
            var i = Re(e),
              s =
                (!g.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              r = s,
              o = Ve(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (_e.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!g.boxSizingReliable() && s) ||
                (!g.reliableTrDimensions() && M(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((s = "border-box" === C.css(e, "boxSizing", !1, i)),
                (r = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                nt(e, t, n || (s ? "border" : "content"), r, i, o) +
                "px"
            );
          }
          function st(e, t, n, i, s) {
            return new st.prototype.init(e, t, n, i, s);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                  r,
                  o,
                  a = Y(t),
                  l = Be.test(t),
                  d = e.style;
                if (
                  (l || (t = Je(a)),
                  (o = C.cssHooks[t] || C.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (s = o.get(e, !1, i))
                    ? s
                    : d[t];
                "string" === (r = typeof n) &&
                  (s = se.exec(n)) &&
                  s[1] &&
                  ((n = ce(e, t, s)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      l ||
                      (n += (s && s[3]) || (C.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (d[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? d.setProperty(t, n) : (d[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var s,
                r,
                o,
                a = Y(t);
              return (
                Be.test(t) || (t = Je(a)),
                (o = C.cssHooks[t] || C.cssHooks[a]) &&
                  "get" in o &&
                  (s = o.get(e, !0, n)),
                void 0 === s && (s = Ve(e, t, i)),
                "normal" === s && t in et && (s = et[t]),
                "" === n || n
                  ? ((r = parseFloat(s)), !0 === n || isFinite(r) ? r || 0 : s)
                  : s
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Ke.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, i)
                      : We(e, Ze, function () {
                          return it(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var s,
                    r = Re(e),
                    o = !g.scrollboxSize() && "absolute" === r.position,
                    a =
                      (o || i) && "border-box" === C.css(e, "boxSizing", !1, r),
                    l = i ? nt(e, t, i, a, r) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          nt(e, t, "border", !1, r) -
                          0.5
                      )),
                    l &&
                      (s = se.exec(n)) &&
                      "px" !== (s[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    tt(0, n, l)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Xe(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      We(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        s = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      s[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                    return s;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = tt);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return G(
                  this,
                  function (e, t, n) {
                    var i,
                      s,
                      r = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = Re(e), s = t.length; o < s; o++)
                        r[t[o]] = C.css(e, t[o], !1, i);
                      return r;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = st),
            (st.prototype = {
              constructor: st,
              init: function (e, t, n, i, s, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = s || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = r || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = st.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : st.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = st.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : st.propHooks._default.set(this),
                  this
                );
              },
            }),
            (st.prototype.init.prototype = st.prototype),
            (st.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (st.propHooks.scrollTop = st.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = st.prototype.init),
            (C.fx.step = {});
          var rt,
            ot,
            at = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
          function dt() {
            ot &&
              (!1 === w.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(dt)
                : i.setTimeout(dt, C.fx.interval),
              C.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              s = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              s["margin" + (n = re[i])] = s["padding" + n] = e;
            return t && (s.opacity = s.width = e), s;
          }
          function pt(e, t, n) {
            for (
              var i,
                s = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                r = 0,
                o = s.length;
              r < o;
              r++
            )
              if ((i = s[r].call(n, t, e))) return i;
          }
          function ft(e, t, n) {
            var i,
              s,
              r = 0,
              o = ft.prefilters.length,
              a = C.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (s) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, d.startTime + d.duration - t),
                    i = 1 - (n / d.duration || 0),
                    r = 0,
                    o = d.tweens.length;
                  r < o;
                  r++
                )
                  d.tweens[r].run(i);
                return (
                  a.notifyWith(e, [d, i, n]),
                  i < 1 && o
                    ? n
                    : (o || a.notifyWith(e, [d, 1, 0]),
                      a.resolveWith(e, [d]),
                      !1)
                );
              },
              d = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    d.opts,
                    t,
                    n,
                    d.opts.specialEasing[t] || d.opts.easing
                  );
                  return d.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? d.tweens.length : 0;
                  if (s) return this;
                  for (s = !0; n < i; n++) d.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t]))
                      : a.rejectWith(e, [d, t]),
                    this
                  );
                },
              }),
              c = d.props;
            for (
              !(function (e, t) {
                var n, i, s, r, o;
                for (n in e)
                  if (
                    ((s = t[(i = Y(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((s = r[1]), (r = e[n] = r[0])),
                    n !== i && ((e[i] = r), delete e[n]),
                    (o = C.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((r = o.expand(r)), delete e[i], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = s));
                  else t[i] = s;
              })(c, d.opts.specialEasing);
              r < o;
              r++
            )
              if ((i = ft.prefilters[r].call(d, e, c, d.opts)))
                return (
                  v(i.stop) &&
                    (C._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(c, pt, d),
              v(d.opts.start) && d.opts.start.call(e, d),
              d
                .progress(d.opts.progress)
                .done(d.opts.done, d.opts.complete)
                .fail(d.opts.fail)
                .always(d.opts.always),
              C.fx.timer(
                C.extend(l, { elem: e, anim: d, queue: d.opts.queue })
              ),
              d
            );
          }
          (C.Animation = C.extend(ft, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, se.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(z));
              for (var n, i = 0, s = e.length; i < s; i++)
                (n = e[i]),
                  (ft.tweeners[n] = ft.tweeners[n] || []),
                  ft.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  d,
                  c,
                  u = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && de(e),
                  g = K.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = C._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, C.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((s = t[i]), at.test(s))) {
                    if (
                      (delete t[i],
                      (r = r || "toggle" === s),
                      s === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== s || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || C.style(e, i);
                  }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (d = g && g.display) && (d = K.get(e, "display")),
                    "none" === (c = C.css(e, "display")) &&
                      (d
                        ? (c = d)
                        : (fe([e], !0),
                          (d = e.style.display || d),
                          (c = C.css(e, "display")),
                          fe([e]))),
                    ("inline" === c || ("inline-block" === c && null != d)) &&
                      "none" === C.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = d;
                        }),
                        null == d &&
                          ((c = h.display), (d = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = K.access(e, "fxshow", { display: d })),
                      r && (g.hidden = !m),
                      m && fe([e], !0),
                      p.done(function () {
                        for (i in (m || fe([e]), K.remove(e, "fxshow"), f))
                          C.style(e, i, f[i]);
                      })),
                      (l = pt(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(de)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var s = C.isEmptyObject(e),
                  r = C.speed(t, n, i),
                  o = function () {
                    var t = ft(this, C.extend({}, e), r);
                    (s || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      s = null != e && e + "queueHooks",
                      r = C.timers,
                      o = K.get(this);
                    if (s) o[s] && o[s].stop && i(o[s]);
                    else
                      for (s in o) o[s] && o[s].stop && lt.test(s) && i(o[s]);
                    for (s = r.length; s--; )
                      r[s].elem !== this ||
                        (null != e && r[s].queue !== e) ||
                        (r[s].anim.stop(n), (t = !1), r.splice(s, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      i = n[e + "queue"],
                      s = n[e + "queueHooks"],
                      r = C.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        s && s.stop && s.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, s) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, s);
              };
            }),
            C.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (rt = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              ot || ((ot = !0), dt());
            }),
            (C.fx.stop = function () {
              ot = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var s = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(s);
                  };
                })
              );
            }),
            (function () {
              var e = w.createElement("input"),
                t = w
                  .createElement("select")
                  .appendChild(w.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = w.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ht,
            mt = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return G(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === r && C.isXMLDoc(e)) ||
                        (s =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : s && "set" in s && void 0 !== (i = s.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : s && "get" in s && null !== (i = s.get(e, t))
                        ? i
                        : null == (i = C.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && M(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  s = t && t.match(z);
                if (s && 1 === e.nodeType)
                  for (; (n = s[i++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = mt[t] || C.find.attr;
              mt[t] = function (e, t, i) {
                var s,
                  r,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((r = mt[o]),
                    (mt[o] = s),
                    (s = null != n(e, t, i) ? o : null),
                    (mt[o] = r)),
                  s
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function yt(e) {
            return (e.match(z) || []).join(" ");
          }
          function wt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(z)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return G(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (s = C.propHooks[t])),
                    void 0 !== n
                      ? s && "set" in s && void 0 !== (i = s.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : s && "get" in s && null !== (i = s.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, i, s, r, o;
                return v(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, wt(this)));
                    })
                  : (t = bt(e)).length
                  ? this.each(function () {
                      if (
                        ((i = wt(this)),
                        (n = 1 === this.nodeType && " " + yt(i) + " "))
                      ) {
                        for (r = 0; r < t.length; r++)
                          (s = t[r]),
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        (o = yt(n)), i !== o && this.setAttribute("class", o);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, i, s, r, o;
                return v(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, wt(this)));
                    })
                  : arguments.length
                  ? (t = bt(e)).length
                    ? this.each(function () {
                        if (
                          ((i = wt(this)),
                          (n = 1 === this.nodeType && " " + yt(i) + " "))
                        ) {
                          for (r = 0; r < t.length; r++)
                            for (s = t[r]; n.indexOf(" " + s + " ") > -1; )
                              n = n.replace(" " + s + " ", " ");
                          (o = yt(n)), i !== o && this.setAttribute("class", o);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  i,
                  s,
                  r,
                  o = typeof e,
                  a = "string" === o || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, wt(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = bt(e)),
                    this.each(function () {
                      if (a)
                        for (r = C(this), s = 0; s < n.length; s++)
                          (i = n[s]),
                            r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
                      else
                        (void 0 !== e && "boolean" !== o) ||
                          ((i = wt(this)) && K.set(this, "__className__", i),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              i || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + yt(wt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                s = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var s;
                    1 === this.nodeType &&
                      (null == (s = i ? e.call(this, n, C(this).val()) : e)
                        ? (s = "")
                        : "number" == typeof s
                        ? (s += "")
                        : Array.isArray(s) &&
                          (s = C.map(s, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, s, "value")) ||
                        (this.value = s));
                  }))
                : s
                ? (t =
                    C.valHooks[s.type] ||
                    C.valHooks[s.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(s, "value"))
                  ? n
                  : "string" == typeof (n = s.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : yt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      s = e.options,
                      r = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? r + 1 : s.length;
                    for (i = r < 0 ? l : o ? r : 0; i < l; i++)
                      if (
                        ((n = s[i]).selected || i === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, s = e.options, r = C.makeArray(t), o = s.length;
                      o--;

                    )
                      ((i = s[o]).selected =
                        C.inArray(C.valHooks.option.get(i), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in i);
          var Tt = /^(?:focusinfocus|focusoutblur)$/,
            St = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, s) {
              var r,
                o,
                a,
                l,
                d,
                c,
                u,
                p,
                h = [n || w],
                m = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || w),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Tt.test(m + C.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (d = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(m, "object" == typeof e && e)).isTrigger = s
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (u = C.event.special[m] || {}),
                  s || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!s && !u.noBubble && !y(n)) {
                  for (
                    l = u.delegateType || m,
                      Tt.test(l + m) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    h.push(o), (a = o);
                  a === (n.ownerDocument || w) &&
                    h.push(a.defaultView || a.parentWindow || i);
                }
                for (r = 0; (o = h[r++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = r > 1 ? l : u.bindType || m),
                    (c =
                      (K.get(o, "events") || Object.create(null))[e.type] &&
                      K.get(o, "handle")) && c.apply(o, t),
                    (c = d && o[d]) &&
                      c.apply &&
                      Q(o) &&
                      ((e.result = c.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  s ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (d &&
                      v(n[m]) &&
                      !y(n) &&
                      ((a = n[d]) && (n[d] = null),
                      (C.event.triggered = m),
                      e.isPropagationStopped() && p.addEventListener(m, St),
                      n[m](),
                      e.isPropagationStopped() && p.removeEventListener(m, St),
                      (C.event.triggered = void 0),
                      a && (n[d] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      s = K.access(i, t);
                    s || i.addEventListener(e, n, !0),
                      K.access(i, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      s = K.access(i, t) - 1;
                    s
                      ? K.access(i, t, s)
                      : (i.removeEventListener(e, n, !0), K.remove(i, t));
                  },
                };
              });
          var Ct = i.location,
            kt = { guid: Date.now() },
            Et = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var $t = /\[\]$/,
            Lt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Pt(e, t, n, i) {
            var s;
            if (Array.isArray(t))
              C.each(t, function (t, s) {
                n || $t.test(e)
                  ? i(e, s)
                  : Pt(
                      e +
                        "[" +
                        ("object" == typeof s && null != s ? t : "") +
                        "]",
                      s,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (s in t) Pt(e + "[" + s + "]", t[s], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              s = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                s(this.name, this.value);
              });
            else for (n in e) Pt(n, e[n], t, s);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(Lt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Lt, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Dt = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            jt = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            zt = {},
            It = {},
            _t = "*/".concat("*"),
            Bt = w.createElement("a");
          function Rt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                s = 0,
                r = t.toLowerCase().match(z) || [];
              if (v(n))
                for (; (i = r[s++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Wt(e, t, n, i) {
            var s = {},
              r = e === It;
            function o(a) {
              var l;
              return (
                (s[a] = !0),
                C.each(e[a] || [], function (e, a) {
                  var d = a(t, n, i);
                  return "string" != typeof d || r || s[d]
                    ? r
                      ? !(l = d)
                      : void 0
                    : (t.dataTypes.unshift(d), o(d), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!s["*"] && o("*"));
          }
          function Ft(e, t) {
            var n,
              i,
              s = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (Bt.href = Ct.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": _t,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e);
              },
              ajaxPrefilter: Rt(zt),
              ajaxTransport: Rt(It),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  s,
                  r,
                  o,
                  a,
                  l,
                  d,
                  c,
                  u,
                  p,
                  f = C.ajaxSetup({}, t),
                  h = f.context || f,
                  m = f.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  g = C.Deferred(),
                  v = C.Callbacks("once memory"),
                  y = f.statusCode || {},
                  b = {},
                  x = {},
                  T = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (d) {
                        if (!o)
                          for (o = {}; (t = Ht.exec(r)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return d ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == d &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == d && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (d) S.always(e[S.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (g.promise(S),
                  (f.url = ((e || f.url || Ct.href) + "").replace(
                    qt,
                    Ct.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = w.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        Bt.protocol + "//" + Bt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = C.param(f.data, f.traditional)),
                  Wt(zt, f, t, S),
                  d)
                )
                  return S;
                for (u in ((c = C.event && f.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !jt.test(f.type)),
                (s = f.url.replace(Dt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Ot, "+"))
                  : ((p = f.url.slice(s.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((s += (Et.test(s) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((s = s.replace(Nt, "$1")),
                      (p = (Et.test(s) ? "&" : "?") + "_=" + kt.guid++ + p)),
                    (f.url = s + p)),
                f.ifModified &&
                  (C.lastModified[s] &&
                    S.setRequestHeader("If-Modified-Since", C.lastModified[s]),
                  C.etag[s] && S.setRequestHeader("If-None-Match", C.etag[s])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", f.contentType),
                S.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  S.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || d))
                  return S.abort();
                if (
                  ((T = "abort"),
                  v.add(f.complete),
                  S.done(f.success),
                  S.fail(f.error),
                  (n = Wt(It, f, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), c && m.trigger("ajaxSend", [S, f]), d)
                  )
                    return S;
                  f.async &&
                    f.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      S.abort("timeout");
                    }, f.timeout));
                  try {
                    (d = !1), n.send(b, k);
                  } catch (e) {
                    if (d) throw e;
                    k(-1, e);
                  }
                } else k(-1, "No Transport");
                function k(e, t, o, l) {
                  var u,
                    p,
                    w,
                    b,
                    x,
                    T = t;
                  d ||
                    ((d = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (r = l || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (b = (function (e, t, n) {
                        for (
                          var i, s, r, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (s in a)
                            if (a[s] && a[s].test(i)) {
                              l.unshift(s);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                              r = s;
                              break;
                            }
                            o || (o = s);
                          }
                          r = r || o;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(f, S, o)),
                    !u &&
                      C.inArray("script", f.dataTypes) > -1 &&
                      C.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (b = (function (e, t, n, i) {
                      var s,
                        r,
                        o,
                        a,
                        l,
                        d = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (o in e.converters)
                          d[o.toLowerCase()] = e.converters[o];
                      for (r = c.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = c.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(o = d[l + " " + r] || d["* " + r]))
                              for (s in d)
                                if (
                                  (a = s.split(" "))[1] === r &&
                                  (o = d[l + " " + a[0]] || d["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = d[s])
                                    : !0 !== d[s] &&
                                      ((r = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, b, S, u)),
                    u
                      ? (f.ifModified &&
                          ((x = S.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[s] = x),
                          (x = S.getResponseHeader("etag")) && (C.etag[s] = x)),
                        204 === e || "HEAD" === f.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (p = b.data), (u = !(w = b.error))))
                      : ((w = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || T) + ""),
                    u
                      ? g.resolveWith(h, [p, T, S])
                      : g.rejectWith(h, [S, T, w]),
                    S.statusCode(y),
                    (y = void 0),
                    c &&
                      m.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        S,
                        f,
                        u ? p : w,
                      ]),
                    v.fireWith(h, [S, T]),
                    c &&
                      (m.trigger("ajaxComplete", [S, f]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, s) {
                return (
                  v(n) && ((s = s || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: s, data: n, success: i },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Gt = { 0: 200, 1223: 204 },
            Vt = C.ajaxSettings.xhr();
          (g.cors = !!Vt && "withCredentials" in Vt),
            (g.ajax = Vt = !!Vt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Vt && !e.crossDomain))
                return {
                  send: function (s, r) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      s["X-Requested-With"] ||
                      (s["X-Requested-With"] = "XMLHttpRequest"),
                    s))
                      a.setRequestHeader(o, s[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? r(0, "error")
                              : r(a.status, a.statusText)
                            : r(
                                Gt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, s) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && s("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      w.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Xt,
            Ut = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Ut.pop() || C.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var s,
                r,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (s = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, "$1" + s))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                  (e.converters["script json"] = function () {
                    return o || C.error(s + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = i[s]),
                  (i[s] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? C(i).removeProp(s) : (i[s] = r),
                      e[s] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(s)),
                      o && v(r) && r(o[0]),
                      (o = r = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Xt = w.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Xt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          w.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = w.location.href),
                        t.head.appendChild(i))
                      : (t = w)),
                  (r = !n && []),
                  (s = P.exec(e))
                    ? [t.createElement(s[1])]
                    : ((s = Se([e], t, r)),
                      r && r.length && C(r).remove(),
                      C.merge([], s.childNodes)));
              var i, s, r;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                s,
                r,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (s = "POST"),
                o.length > 0 &&
                  C.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        o.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  s,
                  r,
                  o,
                  a,
                  l,
                  d = C.css(e, "position"),
                  c = C(e),
                  u = {};
                "static" === d && (e.style.position = "relative"),
                  (a = c.offset()),
                  (r = C.css(e, "top")),
                  (l = C.css(e, "left")),
                  ("absolute" === d || "fixed" === d) &&
                  (r + l).indexOf("auto") > -1
                    ? ((o = (i = c.position()).top), (s = i.left))
                    : ((o = parseFloat(r) || 0), (s = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, C.extend({}, a))),
                  null != t.top && (u.top = t.top - a.top + o),
                  null != t.left && (u.left = t.left - a.left + s),
                  "using" in t ? t.using.call(e, u) : c.css(u);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    s = { top: 0, left: 0 };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((s = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (s.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - s.top - C.css(i, "marginTop", !0),
                    left: t.left - s.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return G(
                    this,
                    function (e, i, s) {
                      var r;
                      if (
                        (y(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === s)
                      )
                        return r ? r[t] : e[i];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : s,
                            n ? s : r.pageYOffset
                          )
                        : (e[i] = s);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = Xe(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), _e.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  C.fn[i] = function (s, r) {
                    var o = arguments.length && (n || "boolean" != typeof s),
                      a = n || (!0 === s || !0 === r ? "margin" : "border");
                    return G(
                      this,
                      function (t, n, s) {
                        var r;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === s
                          ? C.css(t, n, a)
                          : C.style(t, n, s, a);
                      },
                      t,
                      o ? s : void 0,
                      o
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Qt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, s;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (s = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (s.guid = e.guid = e.guid || C.guid++),
                s
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = M),
            (C.isFunction = v),
            (C.isWindow = y),
            (C.camelCase = Y),
            (C.type = T),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Qt, "$1");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Jt = i.jQuery,
            Kt = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = Kt),
                e && i.jQuery === C && (i.jQuery = Jt),
                C
              );
            }),
            void 0 === s && (i.jQuery = i.$ = C),
            C
          );
        });
      },
      154: (e, t, n) => {
        var i, s, r;
        !(function (o) {
          "use strict";
          (s = [n(755)]),
            (i = function (e) {
              var t = window.Slick || {};
              ((t = (function () {
                var t = 0;
                function n(n, i) {
                  var s,
                    r = this;
                  (r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow:
                      '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow:
                      '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                      return e('<button type="button" />').text(n + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                  }),
                    (r.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1,
                    }),
                    e.extend(r, r.initials),
                    (r.activeBreakpoint = null),
                    (r.animType = null),
                    (r.animProp = null),
                    (r.breakpoints = []),
                    (r.breakpointSettings = []),
                    (r.cssTransitions = !1),
                    (r.focussed = !1),
                    (r.interrupted = !1),
                    (r.hidden = "hidden"),
                    (r.paused = !0),
                    (r.positionProp = null),
                    (r.respondTo = null),
                    (r.rowCount = 1),
                    (r.shouldClick = !0),
                    (r.$slider = e(n)),
                    (r.$slidesCache = null),
                    (r.transformType = null),
                    (r.transitionType = null),
                    (r.visibilityChange = "visibilitychange"),
                    (r.windowWidth = 0),
                    (r.windowTimer = null),
                    (s = e(n).data("slick") || {}),
                    (r.options = e.extend({}, r.defaults, i, s)),
                    (r.currentSlide = r.options.initialSlide),
                    (r.originalSettings = r.options),
                    void 0 !== document.mozHidden
                      ? ((r.hidden = "mozHidden"),
                        (r.visibilityChange = "mozvisibilitychange"))
                      : void 0 !== document.webkitHidden &&
                        ((r.hidden = "webkitHidden"),
                        (r.visibilityChange = "webkitvisibilitychange")),
                    (r.autoPlay = e.proxy(r.autoPlay, r)),
                    (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                    (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                    (r.changeSlide = e.proxy(r.changeSlide, r)),
                    (r.clickHandler = e.proxy(r.clickHandler, r)),
                    (r.selectHandler = e.proxy(r.selectHandler, r)),
                    (r.setPosition = e.proxy(r.setPosition, r)),
                    (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                    (r.dragHandler = e.proxy(r.dragHandler, r)),
                    (r.keyHandler = e.proxy(r.keyHandler, r)),
                    (r.instanceUid = t++),
                    (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    r.registerBreakpoints(),
                    r.init(!0);
                }
                return n;
              })()).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (t.prototype.addSlide = t.prototype.slickAdd =
                  function (t, n, i) {
                    var s = this;
                    if ("boolean" == typeof n) (i = n), (n = null);
                    else if (n < 0 || n >= s.slideCount) return !1;
                    s.unload(),
                      "number" == typeof n
                        ? 0 === n && 0 === s.$slides.length
                          ? e(t).appendTo(s.$slideTrack)
                          : i
                          ? e(t).insertBefore(s.$slides.eq(n))
                          : e(t).insertAfter(s.$slides.eq(n))
                        : !0 === i
                        ? e(t).prependTo(s.$slideTrack)
                        : e(t).appendTo(s.$slideTrack),
                      (s.$slides = s.$slideTrack.children(this.options.slide)),
                      s.$slideTrack.children(this.options.slide).detach(),
                      s.$slideTrack.append(s.$slides),
                      s.$slides.each(function (t, n) {
                        e(n).attr("data-slick-index", t);
                      }),
                      (s.$slidesCache = s.$slides),
                      s.reinit();
                  }),
                (t.prototype.animateHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                  }
                }),
                (t.prototype.animateSlide = function (t, n) {
                  var i = {},
                    s = this;
                  s.animateHeight(),
                    !0 === s.options.rtl &&
                      !1 === s.options.vertical &&
                      (t = -t),
                    !1 === s.transformsEnabled
                      ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                            { left: t },
                            s.options.speed,
                            s.options.easing,
                            n
                          )
                        : s.$slideTrack.animate(
                            { top: t },
                            s.options.speed,
                            s.options.easing,
                            n
                          )
                      : !1 === s.cssTransitions
                      ? (!0 === s.options.rtl &&
                          (s.currentLeft = -s.currentLeft),
                        e({ animStart: s.currentLeft }).animate(
                          { animStart: t },
                          {
                            duration: s.options.speed,
                            easing: s.options.easing,
                            step: function (e) {
                              (e = Math.ceil(e)),
                                !1 === s.options.vertical
                                  ? ((i[s.animType] =
                                      "translate(" + e + "px, 0px)"),
                                    s.$slideTrack.css(i))
                                  : ((i[s.animType] =
                                      "translate(0px," + e + "px)"),
                                    s.$slideTrack.css(i));
                            },
                            complete: function () {
                              n && n.call();
                            },
                          }
                        ))
                      : (s.applyTransition(),
                        (t = Math.ceil(t)),
                        !1 === s.options.vertical
                          ? (i[s.animType] =
                              "translate3d(" + t + "px, 0px, 0px)")
                          : (i[s.animType] =
                              "translate3d(0px," + t + "px, 0px)"),
                        s.$slideTrack.css(i),
                        n &&
                          setTimeout(function () {
                            s.disableTransition(), n.call();
                          }, s.options.speed));
                }),
                (t.prototype.getNavTarget = function () {
                  var t = this,
                    n = t.options.asNavFor;
                  return n && null !== n && (n = e(n).not(t.$slider)), n;
                }),
                (t.prototype.asNavFor = function (t) {
                  var n = this.getNavTarget();
                  null !== n &&
                    "object" == typeof n &&
                    n.each(function () {
                      var n = e(this).slick("getSlick");
                      n.unslicked || n.slideHandler(t, !0);
                    });
                }),
                (t.prototype.applyTransition = function (e) {
                  var t = this,
                    n = {};
                  !1 === t.options.fade
                    ? (n[t.transitionType] =
                        t.transformType +
                        " " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase)
                    : (n[t.transitionType] =
                        "opacity " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (t.prototype.autoPlay = function () {
                  var e = this;
                  e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow &&
                      (e.autoPlayTimer = setInterval(
                        e.autoPlayIterator,
                        e.options.autoplaySpeed
                      ));
                }),
                (t.prototype.autoPlayClear = function () {
                  var e = this;
                  e.autoPlayTimer && clearInterval(e.autoPlayTimer);
                }),
                (t.prototype.autoPlayIterator = function () {
                  var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                  e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                      (1 === e.direction &&
                      e.currentSlide + 1 === e.slideCount - 1
                        ? (e.direction = 0)
                        : 0 === e.direction &&
                          ((t = e.currentSlide - e.options.slidesToScroll),
                          e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
                }),
                (t.prototype.buildArrows = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (t.$nextArrow = e(t.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    t.slideCount > t.options.slidesToShow
                      ? (t.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.htmlExpr.test(t.options.prevArrow) &&
                          t.$prevArrow.prependTo(t.options.appendArrows),
                        t.htmlExpr.test(t.options.nextArrow) &&
                          t.$nextArrow.appendTo(t.options.appendArrows),
                        !0 !== t.options.infinite &&
                          t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : t.$prevArrow
                          .add(t.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (t.prototype.buildDots = function () {
                  var t,
                    n,
                    i = this;
                  if (
                    !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow
                  ) {
                    for (
                      i.$slider.addClass("slick-dotted"),
                        n = e("<ul />").addClass(i.options.dotsClass),
                        t = 0;
                      t <= i.getDotCount();
                      t += 1
                    )
                      n.append(
                        e("<li />").append(
                          i.options.customPaging.call(this, i, t)
                        )
                      );
                    (i.$dots = n.appendTo(i.options.appendDots)),
                      i.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (t.prototype.buildOut = function () {
                  var t = this;
                  (t.$slides = t.$slider
                    .children(t.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, n) {
                      e(n)
                        .attr("data-slick-index", t)
                        .data("originalStyling", e(n).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack =
                      0 === t.slideCount
                        ? e('<div class="slick-track"/>').appendTo(t.$slider)
                        : t.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (t.$list = t.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode &&
                      !0 !== t.options.swipeToSlide) ||
                      (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
                }),
                (t.prototype.buildRows = function () {
                  var e,
                    t,
                    n,
                    i,
                    s,
                    r,
                    o,
                    a = this;
                  if (
                    ((i = document.createDocumentFragment()),
                    (r = a.$slider.children()),
                    a.options.rows > 0)
                  ) {
                    for (
                      o = a.options.slidesPerRow * a.options.rows,
                        s = Math.ceil(r.length / o),
                        e = 0;
                      e < s;
                      e++
                    ) {
                      var l = document.createElement("div");
                      for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                          var c = e * o + (t * a.options.slidesPerRow + n);
                          r.get(c) && d.appendChild(r.get(c));
                        }
                        l.appendChild(d);
                      }
                      i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / a.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (t.prototype.checkResponsive = function (t, n) {
                  var i,
                    s,
                    r,
                    o = this,
                    a = !1,
                    l = o.$slider.width(),
                    d = window.innerWidth || e(window).width();
                  if (
                    ("window" === o.respondTo
                      ? (r = d)
                      : "slider" === o.respondTo
                      ? (r = l)
                      : "min" === o.respondTo && (r = Math.min(d, l)),
                    o.options.responsive &&
                      o.options.responsive.length &&
                      null !== o.options.responsive)
                  ) {
                    for (i in ((s = null), o.breakpoints))
                      o.breakpoints.hasOwnProperty(i) &&
                        (!1 === o.originalSettings.mobileFirst
                          ? r < o.breakpoints[i] && (s = o.breakpoints[i])
                          : r > o.breakpoints[i] && (s = o.breakpoints[i]));
                    null !== s
                      ? null !== o.activeBreakpoint
                        ? (s !== o.activeBreakpoint || n) &&
                          ((o.activeBreakpoint = s),
                          "unslick" === o.breakpointSettings[s]
                            ? o.unslick(s)
                            : ((o.options = e.extend(
                                {},
                                o.originalSettings,
                                o.breakpointSettings[s]
                              )),
                              !0 === t &&
                                (o.currentSlide = o.options.initialSlide),
                              o.refresh(t)),
                          (a = s))
                        : ((o.activeBreakpoint = s),
                          "unslick" === o.breakpointSettings[s]
                            ? o.unslick(s)
                            : ((o.options = e.extend(
                                {},
                                o.originalSettings,
                                o.breakpointSettings[s]
                              )),
                              !0 === t &&
                                (o.currentSlide = o.options.initialSlide),
                              o.refresh(t)),
                          (a = s))
                      : null !== o.activeBreakpoint &&
                        ((o.activeBreakpoint = null),
                        (o.options = o.originalSettings),
                        !0 === t && (o.currentSlide = o.options.initialSlide),
                        o.refresh(t),
                        (a = s)),
                      t || !1 === a || o.$slider.trigger("breakpoint", [o, a]);
                  }
                }),
                (t.prototype.changeSlide = function (t, n) {
                  var i,
                    s,
                    r = this,
                    o = e(t.currentTarget);
                  switch (
                    (o.is("a") && t.preventDefault(),
                    o.is("li") || (o = o.closest("li")),
                    (i =
                      r.slideCount % r.options.slidesToScroll != 0
                        ? 0
                        : (r.slideCount - r.currentSlide) %
                          r.options.slidesToScroll),
                    t.data.message)
                  ) {
                    case "previous":
                      (s =
                        0 === i
                          ? r.options.slidesToScroll
                          : r.options.slidesToShow - i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide - s, !1, n);
                      break;
                    case "next":
                      (s = 0 === i ? r.options.slidesToScroll : i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide + s, !1, n);
                      break;
                    case "index":
                      var a =
                        0 === t.data.index
                          ? 0
                          : t.data.index ||
                            o.index() * r.options.slidesToScroll;
                      r.slideHandler(r.checkNavigable(a), !1, n),
                        o.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (t.prototype.checkNavigable = function (e) {
                  var t, n;
                  if (
                    ((n = 0),
                    e > (t = this.getNavigableIndexes())[t.length - 1])
                  )
                    e = t[t.length - 1];
                  else
                    for (var i in t) {
                      if (e < t[i]) {
                        e = n;
                        break;
                      }
                      n = t[i];
                    }
                  return e;
                }),
                (t.prototype.cleanUpEvents = function () {
                  var t = this;
                  t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots)
                      .off("click.slick", t.changeSlide)
                      .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                      .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility &&
                      t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      (t.$prevArrow &&
                        t.$prevArrow.off("click.slick", t.changeSlide),
                      t.$nextArrow &&
                        t.$nextArrow.off("click.slick", t.changeSlide),
                      !0 === t.options.accessibility &&
                        (t.$prevArrow &&
                          t.$prevArrow.off("keydown.slick", t.keyHandler),
                        t.$nextArrow &&
                          t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off(
                      "touchstart.slick mousedown.slick",
                      t.swipeHandler
                    ),
                    t.$list.off(
                      "touchmove.slick mousemove.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility &&
                      t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .off("click.slick", t.selectHandler),
                    e(window).off(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      t.orientationChange
                    ),
                    e(window).off(
                      "resize.slick.slick-" + t.instanceUid,
                      t.resize
                    ),
                    e("[draggable!=true]", t.$slideTrack).off(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).off(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    );
                }),
                (t.prototype.cleanUpSlideEvents = function () {
                  var t = this;
                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    );
                }),
                (t.prototype.cleanUpRows = function () {
                  var e,
                    t = this;
                  t.options.rows > 0 &&
                    ((e = t.$slides.children().children()).removeAttr("style"),
                    t.$slider.empty().append(e));
                }),
                (t.prototype.clickHandler = function (e) {
                  !1 === this.shouldClick &&
                    (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault());
                }),
                (t.prototype.destroy = function (t) {
                  var n = this;
                  n.autoPlayClear(),
                    (n.touchObject = {}),
                    n.cleanUpEvents(),
                    e(".slick-cloned", n.$slider).detach(),
                    n.$dots && n.$dots.remove(),
                    n.$prevArrow &&
                      n.$prevArrow.length &&
                      (n.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.prevArrow) &&
                        n.$prevArrow.remove()),
                    n.$nextArrow &&
                      n.$nextArrow.length &&
                      (n.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.nextArrow) &&
                        n.$nextArrow.remove()),
                    n.$slides &&
                      (n.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          e(this).attr(
                            "style",
                            e(this).data("originalStyling")
                          );
                        }),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.detach(),
                      n.$list.detach(),
                      n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    (n.unslicked = !0),
                    t || n.$slider.trigger("destroy", [n]);
                }),
                (t.prototype.disableTransition = function (e) {
                  var t = this,
                    n = {};
                  (n[t.transitionType] = ""),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (t.prototype.fadeSlide = function (e, t) {
                  var n = this;
                  !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                      n.$slides
                        .eq(e)
                        .animate(
                          { opacity: 1 },
                          n.options.speed,
                          n.options.easing,
                          t
                        ))
                    : (n.applyTransition(e),
                      n.$slides
                        .eq(e)
                        .css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                        setTimeout(function () {
                          n.disableTransition(e), t.call();
                        }, n.options.speed));
                }),
                (t.prototype.fadeSlideOut = function (e) {
                  var t = this;
                  !1 === t.cssTransitions
                    ? t.$slides
                        .eq(e)
                        .animate(
                          { opacity: 0, zIndex: t.options.zIndex - 2 },
                          t.options.speed,
                          t.options.easing
                        )
                    : (t.applyTransition(e),
                      t.$slides
                        .eq(e)
                        .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                }),
                (t.prototype.filterSlides = t.prototype.slickFilter =
                  function (e) {
                    var t = this;
                    null !== e &&
                      ((t.$slidesCache = t.$slides),
                      t.unload(),
                      t.$slideTrack.children(this.options.slide).detach(),
                      t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                      t.reinit());
                  }),
                (t.prototype.focusHandler = function () {
                  var t = this;
                  t.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (n) {
                      n.stopImmediatePropagation();
                      var i = e(this);
                      setTimeout(function () {
                        t.options.pauseOnFocus &&
                          ((t.focussed = i.is(":focus")), t.autoPlay());
                      }, 0);
                    });
                }),
                (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
                  function () {
                    return this.currentSlide;
                  }),
                (t.prototype.getDotCount = function () {
                  var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                  if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else
                      for (; t < e.slideCount; )
                        ++i,
                          (t = n + e.options.slidesToScroll),
                          (n +=
                            e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
                  else if (!0 === e.options.centerMode) i = e.slideCount;
                  else if (e.options.asNavFor)
                    for (; t < e.slideCount; )
                      ++i,
                        (t = n + e.options.slidesToScroll),
                        (n +=
                          e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
                  else
                    i =
                      1 +
                      Math.ceil(
                        (e.slideCount - e.options.slidesToShow) /
                          e.options.slidesToScroll
                      );
                  return i - 1;
                }),
                (t.prototype.getLeft = function (e) {
                  var t,
                    n,
                    i,
                    s,
                    r = this,
                    o = 0;
                  return (
                    (r.slideOffset = 0),
                    (n = r.$slides.first().outerHeight(!0)),
                    !0 === r.options.infinite
                      ? (r.slideCount > r.options.slidesToShow &&
                          ((r.slideOffset =
                            r.slideWidth * r.options.slidesToShow * -1),
                          (s = -1),
                          !0 === r.options.vertical &&
                            !0 === r.options.centerMode &&
                            (2 === r.options.slidesToShow
                              ? (s = -1.5)
                              : 1 === r.options.slidesToShow && (s = -2)),
                          (o = n * r.options.slidesToShow * s)),
                        r.slideCount % r.options.slidesToScroll != 0 &&
                          e + r.options.slidesToScroll > r.slideCount &&
                          r.slideCount > r.options.slidesToShow &&
                          (e > r.slideCount
                            ? ((r.slideOffset =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                r.slideWidth *
                                -1),
                              (o =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                n *
                                -1))
                            : ((r.slideOffset =
                                (r.slideCount % r.options.slidesToScroll) *
                                r.slideWidth *
                                -1),
                              (o =
                                (r.slideCount % r.options.slidesToScroll) *
                                n *
                                -1))))
                      : e + r.options.slidesToShow > r.slideCount &&
                        ((r.slideOffset =
                          (e + r.options.slidesToShow - r.slideCount) *
                          r.slideWidth),
                        (o = (e + r.options.slidesToShow - r.slideCount) * n)),
                    r.slideCount <= r.options.slidesToShow &&
                      ((r.slideOffset = 0), (o = 0)),
                    !0 === r.options.centerMode &&
                    r.slideCount <= r.options.slidesToShow
                      ? (r.slideOffset =
                          (r.slideWidth * Math.floor(r.options.slidesToShow)) /
                            2 -
                          (r.slideWidth * r.slideCount) / 2)
                      : !0 === r.options.centerMode && !0 === r.options.infinite
                      ? (r.slideOffset +=
                          r.slideWidth *
                            Math.floor(r.options.slidesToShow / 2) -
                          r.slideWidth)
                      : !0 === r.options.centerMode &&
                        ((r.slideOffset = 0),
                        (r.slideOffset +=
                          r.slideWidth *
                          Math.floor(r.options.slidesToShow / 2))),
                    (t =
                      !1 === r.options.vertical
                        ? e * r.slideWidth * -1 + r.slideOffset
                        : e * n * -1 + o),
                    !0 === r.options.variableWidth &&
                      ((i =
                        r.slideCount <= r.options.slidesToShow ||
                        !1 === r.options.infinite
                          ? r.$slideTrack.children(".slick-slide").eq(e)
                          : r.$slideTrack
                              .children(".slick-slide")
                              .eq(e + r.options.slidesToShow)),
                      (t =
                        !0 === r.options.rtl
                          ? i[0]
                            ? -1 *
                              (r.$slideTrack.width() -
                                i[0].offsetLeft -
                                i.width())
                            : 0
                          : i[0]
                          ? -1 * i[0].offsetLeft
                          : 0),
                      !0 === r.options.centerMode &&
                        ((i =
                          r.slideCount <= r.options.slidesToShow ||
                          !1 === r.options.infinite
                            ? r.$slideTrack.children(".slick-slide").eq(e)
                            : r.$slideTrack
                                .children(".slick-slide")
                                .eq(e + r.options.slidesToShow + 1)),
                        (t =
                          !0 === r.options.rtl
                            ? i[0]
                              ? -1 *
                                (r.$slideTrack.width() -
                                  i[0].offsetLeft -
                                  i.width())
                              : 0
                            : i[0]
                            ? -1 * i[0].offsetLeft
                            : 0),
                        (t += (r.$list.width() - i.outerWidth()) / 2))),
                    t
                  );
                }),
                (t.prototype.getOption = t.prototype.slickGetOption =
                  function (e) {
                    return this.options[e];
                  }),
                (t.prototype.getNavigableIndexes = function () {
                  var e,
                    t = this,
                    n = 0,
                    i = 0,
                    s = [];
                  for (
                    !1 === t.options.infinite
                      ? (e = t.slideCount)
                      : ((n = -1 * t.options.slidesToScroll),
                        (i = -1 * t.options.slidesToScroll),
                        (e = 2 * t.slideCount));
                    n < e;

                  )
                    s.push(n),
                      (n = i + t.options.slidesToScroll),
                      (i +=
                        t.options.slidesToScroll <= t.options.slidesToShow
                          ? t.options.slidesToScroll
                          : t.options.slidesToShow);
                  return s;
                }),
                (t.prototype.getSlick = function () {
                  return this;
                }),
                (t.prototype.getSlideCount = function () {
                  var t,
                    n,
                    i = this;
                  return (
                    (n =
                      !0 === i.options.centerMode
                        ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
                        : 0),
                    !0 === i.options.swipeToSlide
                      ? (i.$slideTrack
                          .find(".slick-slide")
                          .each(function (s, r) {
                            if (
                              r.offsetLeft - n + e(r).outerWidth() / 2 >
                              -1 * i.swipeLeft
                            )
                              return (t = r), !1;
                          }),
                        Math.abs(
                          e(t).attr("data-slick-index") - i.currentSlide
                        ) || 1)
                      : i.options.slidesToScroll
                  );
                }),
                (t.prototype.goTo = t.prototype.slickGoTo =
                  function (e, t) {
                    this.changeSlide(
                      { data: { message: "index", index: parseInt(e) } },
                      t
                    );
                  }),
                (t.prototype.init = function (t) {
                  var n = this;
                  e(n.$slider).hasClass("slick-initialized") ||
                    (e(n.$slider).addClass("slick-initialized"),
                    n.buildRows(),
                    n.buildOut(),
                    n.setProps(),
                    n.startLoad(),
                    n.loadSlider(),
                    n.initializeEvents(),
                    n.updateArrows(),
                    n.updateDots(),
                    n.checkResponsive(!0),
                    n.focusHandler()),
                    t && n.$slider.trigger("init", [n]),
                    !0 === n.options.accessibility && n.initADA(),
                    n.options.autoplay && ((n.paused = !1), n.autoPlay());
                }),
                (t.prototype.initADA = function () {
                  var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter(function (e) {
                      return e >= 0 && e < t.slideCount;
                    });
                  t.$slides
                    .add(t.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                      (t.$slides
                        .not(t.$slideTrack.find(".slick-cloned"))
                        .each(function (n) {
                          var s = i.indexOf(n);
                          if (
                            (e(this).attr({
                              role: "tabpanel",
                              id: "slick-slide" + t.instanceUid + n,
                              tabindex: -1,
                            }),
                            -1 !== s)
                          ) {
                            var r = "slick-slide-control" + t.instanceUid + s;
                            e("#" + r).length &&
                              e(this).attr({ "aria-describedby": r });
                          }
                        }),
                      t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                          var r = i[s];
                          e(this).attr({ role: "presentation" }),
                            e(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + s,
                                "aria-controls":
                                  "slick-slide" + t.instanceUid + r,
                                "aria-label": s + 1 + " of " + n,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var s = t.currentSlide, r = s + t.options.slidesToShow;
                    s < r;
                    s++
                  )
                    t.options.focusOnChange
                      ? t.$slides.eq(s).attr({ tabindex: "0" })
                      : t.$slides.eq(s).removeAttr("tabindex");
                  t.activateADA();
                }),
                (t.prototype.initArrowEvents = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        e.changeSlide
                      ),
                    e.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility &&
                      (e.$prevArrow.on("keydown.slick", e.keyHandler),
                      e.$nextArrow.on("keydown.slick", e.keyHandler)));
                }),
                (t.prototype.initDotEvents = function () {
                  var t = this;
                  !0 === t.options.dots &&
                    t.slideCount > t.options.slidesToShow &&
                    (e("li", t.$dots).on(
                      "click.slick",
                      { message: "index" },
                      t.changeSlide
                    ),
                    !0 === t.options.accessibility &&
                      t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots &&
                      !0 === t.options.pauseOnDotsHover &&
                      t.slideCount > t.options.slidesToShow &&
                      e("li", t.$dots)
                        .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                        .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (t.prototype.initSlideEvents = function () {
                  var t = this;
                  t.options.pauseOnHover &&
                    (t.$list.on(
                      "mouseenter.slick",
                      e.proxy(t.interrupt, t, !0)
                    ),
                    t.$list.on(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    ));
                }),
                (t.prototype.initializeEvents = function () {
                  var t = this;
                  t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(
                      t.visibilityChange,
                      e.proxy(t.visibility, t)
                    ),
                    !0 === t.options.accessibility &&
                      t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    e(window).on(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      e.proxy(t.orientationChange, t)
                    ),
                    e(window).on(
                      "resize.slick.slick-" + t.instanceUid,
                      e.proxy(t.resize, t)
                    ),
                    e("[draggable!=true]", t.$slideTrack).on(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).on(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    ),
                    e(t.setPosition);
                }),
                (t.prototype.initUI = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.show(), e.$nextArrow.show()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.show();
                }),
                (t.prototype.keyHandler = function (e) {
                  var t = this;
                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                      ? t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === e.keyCode &&
                        !0 === t.options.accessibility &&
                        t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (t.prototype.lazyLoad = function () {
                  var t,
                    n,
                    i,
                    s = this;
                  function r(t) {
                    e("img[data-lazy]", t).each(function () {
                      var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        r =
                          e(this).attr("data-sizes") ||
                          s.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                      (o.onload = function () {
                        t.animate({ opacity: 0 }, 100, function () {
                          i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                            t
                              .attr("src", n)
                              .animate({ opacity: 1 }, 200, function () {
                                t.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            s.$slider.trigger("lazyLoaded", [s, t, n]);
                        });
                      }),
                        (o.onerror = function () {
                          t
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            s.$slider.trigger("lazyLoadError", [s, t, n]);
                        }),
                        (o.src = n);
                    });
                  }
                  if (
                    (!0 === s.options.centerMode
                      ? !0 === s.options.infinite
                        ? (i =
                            (n =
                              s.currentSlide +
                              (s.options.slidesToShow / 2 + 1)) +
                            s.options.slidesToShow +
                            2)
                        : ((n = Math.max(
                            0,
                            s.currentSlide - (s.options.slidesToShow / 2 + 1)
                          )),
                          (i =
                            s.options.slidesToShow / 2 +
                            1 +
                            2 +
                            s.currentSlide))
                      : ((n = s.options.infinite
                          ? s.options.slidesToShow + s.currentSlide
                          : s.currentSlide),
                        (i = Math.ceil(n + s.options.slidesToShow)),
                        !0 === s.options.fade &&
                          (n > 0 && n--, i <= s.slideCount && i++)),
                    (t = s.$slider.find(".slick-slide").slice(n, i)),
                    "anticipated" === s.options.lazyLoad)
                  )
                    for (
                      var o = n - 1,
                        a = i,
                        l = s.$slider.find(".slick-slide"),
                        d = 0;
                      d < s.options.slidesToScroll;
                      d++
                    )
                      o < 0 && (o = s.slideCount - 1),
                        (t = (t = t.add(l.eq(o))).add(l.eq(a))),
                        o--,
                        a++;
                  r(t),
                    s.slideCount <= s.options.slidesToShow
                      ? r(s.$slider.find(".slick-slide"))
                      : s.currentSlide >= s.slideCount - s.options.slidesToShow
                      ? r(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(0, s.options.slidesToShow)
                        )
                      : 0 === s.currentSlide &&
                        r(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(-1 * s.options.slidesToShow)
                        );
                }),
                (t.prototype.loadSlider = function () {
                  var e = this;
                  e.setPosition(),
                    e.$slideTrack.css({ opacity: 1 }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad &&
                      e.progressiveLazyLoad();
                }),
                (t.prototype.next = t.prototype.slickNext =
                  function () {
                    this.changeSlide({ data: { message: "next" } });
                  }),
                (t.prototype.orientationChange = function () {
                  var e = this;
                  e.checkResponsive(), e.setPosition();
                }),
                (t.prototype.pause = t.prototype.slickPause =
                  function () {
                    var e = this;
                    e.autoPlayClear(), (e.paused = !0);
                  }),
                (t.prototype.play = t.prototype.slickPlay =
                  function () {
                    var e = this;
                    e.autoPlay(),
                      (e.options.autoplay = !0),
                      (e.paused = !1),
                      (e.focussed = !1),
                      (e.interrupted = !1);
                  }),
                (t.prototype.postSlide = function (t) {
                  var n = this;
                  n.unslicked ||
                    (n.$slider.trigger("afterChange", [n, t]),
                    (n.animating = !1),
                    n.slideCount > n.options.slidesToShow && n.setPosition(),
                    (n.swipeLeft = null),
                    n.options.autoplay && n.autoPlay(),
                    !0 === n.options.accessibility &&
                      (n.initADA(),
                      n.options.focusOnChange &&
                        e(n.$slides.get(n.currentSlide))
                          .attr("tabindex", 0)
                          .focus()));
                }),
                (t.prototype.prev = t.prototype.slickPrev =
                  function () {
                    this.changeSlide({ data: { message: "previous" } });
                  }),
                (t.prototype.preventDefault = function (e) {
                  e.preventDefault();
                }),
                (t.prototype.progressiveLazyLoad = function (t) {
                  t = t || 1;
                  var n,
                    i,
                    s,
                    r,
                    o,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                  l.length
                    ? ((n = l.first()),
                      (i = n.attr("data-lazy")),
                      (s = n.attr("data-srcset")),
                      (r =
                        n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((o = document.createElement("img")).onload =
                        function () {
                          s && (n.attr("srcset", s), r && n.attr("sizes", r)),
                            n
                              .attr("src", i)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                            !0 === a.options.adaptiveHeight && a.setPosition(),
                            a.$slider.trigger("lazyLoaded", [a, n, i]),
                            a.progressiveLazyLoad();
                        }),
                      (o.onerror = function () {
                        t < 3
                          ? setTimeout(function () {
                              a.progressiveLazyLoad(t + 1);
                            }, 500)
                          : (n
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, n, i]),
                            a.progressiveLazyLoad());
                      }),
                      (o.src = i))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (t.prototype.refresh = function (t) {
                  var n,
                    i,
                    s = this;
                  (i = s.slideCount - s.options.slidesToShow),
                    !s.options.infinite &&
                      s.currentSlide > i &&
                      (s.currentSlide = i),
                    s.slideCount <= s.options.slidesToShow &&
                      (s.currentSlide = 0),
                    (n = s.currentSlide),
                    s.destroy(!0),
                    e.extend(s, s.initials, { currentSlide: n }),
                    s.init(),
                    t ||
                      s.changeSlide(
                        { data: { message: "index", index: n } },
                        !1
                      );
                }),
                (t.prototype.registerBreakpoints = function () {
                  var t,
                    n,
                    i,
                    s = this,
                    r = s.options.responsive || null;
                  if ("array" === e.type(r) && r.length) {
                    for (t in ((s.respondTo = s.options.respondTo || "window"),
                    r))
                      if (
                        ((i = s.breakpoints.length - 1), r.hasOwnProperty(t))
                      ) {
                        for (n = r[t].breakpoint; i >= 0; )
                          s.breakpoints[i] &&
                            s.breakpoints[i] === n &&
                            s.breakpoints.splice(i, 1),
                            i--;
                        s.breakpoints.push(n),
                          (s.breakpointSettings[n] = r[t].settings);
                      }
                    s.breakpoints.sort(function (e, t) {
                      return s.options.mobileFirst ? e - t : t - e;
                    });
                  }
                }),
                (t.prototype.reinit = function () {
                  var t = this;
                  (t.$slides = t.$slideTrack
                    .children(t.options.slide)
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount &&
                      0 !== t.currentSlide &&
                      (t.currentSlide =
                        t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow &&
                      (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
                }),
                (t.prototype.resize = function () {
                  var t = this;
                  e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                      (t.windowWidth = e(window).width()),
                        t.checkResponsive(),
                        t.unslicked || t.setPosition();
                    }, 50)));
                }),
                (t.prototype.removeSlide = t.prototype.slickRemove =
                  function (e, t, n) {
                    var i = this;
                    if (
                      ((e =
                        "boolean" == typeof e
                          ? !0 === (t = e)
                            ? 0
                            : i.slideCount - 1
                          : !0 === t
                          ? --e
                          : e),
                      i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
                    )
                      return !1;
                    i.unload(),
                      !0 === n
                        ? i.$slideTrack.children().remove()
                        : i.$slideTrack
                            .children(this.options.slide)
                            .eq(e)
                            .remove(),
                      (i.$slides = i.$slideTrack.children(this.options.slide)),
                      i.$slideTrack.children(this.options.slide).detach(),
                      i.$slideTrack.append(i.$slides),
                      (i.$slidesCache = i.$slides),
                      i.reinit();
                  }),
                (t.prototype.setCSS = function (e) {
                  var t,
                    n,
                    i = this,
                    s = {};
                  !0 === i.options.rtl && (e = -e),
                    (t =
                      "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (s[i.positionProp] = e),
                    !1 === i.transformsEnabled
                      ? i.$slideTrack.css(s)
                      : ((s = {}),
                        !1 === i.cssTransitions
                          ? ((s[i.animType] =
                              "translate(" + t + ", " + n + ")"),
                            i.$slideTrack.css(s))
                          : ((s[i.animType] =
                              "translate3d(" + t + ", " + n + ", 0px)"),
                            i.$slideTrack.css(s)));
                }),
                (t.prototype.setDimensions = function () {
                  var e = this;
                  !1 === e.options.vertical
                    ? !0 === e.options.centerMode &&
                      e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(
                        e.$slides.first().outerHeight(!0) *
                          e.options.slidesToShow
                      ),
                      !0 === e.options.centerMode &&
                        e.$list.css({
                          padding: e.options.centerPadding + " 0px",
                        })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                      ? ((e.slideWidth = Math.ceil(
                          e.listWidth / e.options.slidesToShow
                        )),
                        e.$slideTrack.width(
                          Math.ceil(
                            e.slideWidth *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === e.options.variableWidth
                      ? e.$slideTrack.width(5e3 * e.slideCount)
                      : ((e.slideWidth = Math.ceil(e.listWidth)),
                        e.$slideTrack.height(
                          Math.ceil(
                            e.$slides.first().outerHeight(!0) *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var t =
                    e.$slides.first().outerWidth(!0) -
                    e.$slides.first().width();
                  !1 === e.options.variableWidth &&
                    e.$slideTrack
                      .children(".slick-slide")
                      .width(e.slideWidth - t);
                }),
                (t.prototype.setFade = function () {
                  var t,
                    n = this;
                  n.$slides.each(function (i, s) {
                    (t = n.slideWidth * i * -1),
                      !0 === n.options.rtl
                        ? e(s).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          })
                        : e(s).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    n.$slides
                      .eq(n.currentSlide)
                      .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                }),
                (t.prototype.setHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                  }
                }),
                (t.prototype.setOption = t.prototype.slickSetOption =
                  function () {
                    var t,
                      n,
                      i,
                      s,
                      r,
                      o = this,
                      a = !1;
                    if (
                      ("object" === e.type(arguments[0])
                        ? ((i = arguments[0]),
                          (a = arguments[1]),
                          (r = "multiple"))
                        : "string" === e.type(arguments[0]) &&
                          ((i = arguments[0]),
                          (s = arguments[1]),
                          (a = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === e.type(arguments[1])
                            ? (r = "responsive")
                            : void 0 !== arguments[1] && (r = "single")),
                      "single" === r)
                    )
                      o.options[i] = s;
                    else if ("multiple" === r)
                      e.each(i, function (e, t) {
                        o.options[e] = t;
                      });
                    else if ("responsive" === r)
                      for (n in s)
                        if ("array" !== e.type(o.options.responsive))
                          o.options.responsive = [s[n]];
                        else {
                          for (t = o.options.responsive.length - 1; t >= 0; )
                            o.options.responsive[t].breakpoint ===
                              s[n].breakpoint &&
                              o.options.responsive.splice(t, 1),
                              t--;
                          o.options.responsive.push(s[n]);
                        }
                    a && (o.unload(), o.reinit());
                  }),
                (t.prototype.setPosition = function () {
                  var e = this;
                  e.setDimensions(),
                    e.setHeight(),
                    !1 === e.options.fade
                      ? e.setCSS(e.getLeft(e.currentSlide))
                      : e.setFade(),
                    e.$slider.trigger("setPosition", [e]);
                }),
                (t.prototype.setProps = function () {
                  var e = this,
                    t = document.body.style;
                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp
                      ? e.$slider.addClass("slick-vertical")
                      : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition &&
                      void 0 === t.MozTransition &&
                      void 0 === t.msTransition) ||
                      (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade &&
                      ("number" == typeof e.options.zIndex
                        ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                        : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform &&
                      ((e.animType = "OTransform"),
                      (e.transformType = "-o-transform"),
                      (e.transitionType = "OTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                      ((e.animType = "MozTransform"),
                      (e.transformType = "-moz-transform"),
                      (e.transitionType = "MozTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.MozPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                      ((e.animType = "webkitTransform"),
                      (e.transformType = "-webkit-transform"),
                      (e.transitionType = "webkitTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.msTransform &&
                      ((e.animType = "msTransform"),
                      (e.transformType = "-ms-transform"),
                      (e.transitionType = "msTransition"),
                      void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform &&
                      !1 !== e.animType &&
                      ((e.animType = "transform"),
                      (e.transformType = "transform"),
                      (e.transitionType = "transition")),
                    (e.transformsEnabled =
                      e.options.useTransform &&
                      null !== e.animType &&
                      !1 !== e.animType);
                }),
                (t.prototype.setSlideClasses = function (e) {
                  var t,
                    n,
                    i,
                    s,
                    r = this;
                  if (
                    ((n = r.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    r.$slides.eq(e).addClass("slick-current"),
                    !0 === r.options.centerMode)
                  ) {
                    var o = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(r.options.slidesToShow / 2)),
                      !0 === r.options.infinite &&
                        (e >= t && e <= r.slideCount - 1 - t
                          ? r.$slides
                              .slice(e - t + o, e + t + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((i = r.options.slidesToShow + e),
                            n
                              .slice(i - t + 1 + o, i + t + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === e
                          ? n
                              .eq(n.length - 1 - r.options.slidesToShow)
                              .addClass("slick-center")
                          : e === r.slideCount - 1 &&
                            n
                              .eq(r.options.slidesToShow)
                              .addClass("slick-center")),
                      r.$slides.eq(e).addClass("slick-center");
                  } else
                    e >= 0 && e <= r.slideCount - r.options.slidesToShow
                      ? r.$slides
                          .slice(e, e + r.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : n.length <= r.options.slidesToShow
                      ? n.addClass("slick-active").attr("aria-hidden", "false")
                      : ((s = r.slideCount % r.options.slidesToShow),
                        (i =
                          !0 === r.options.infinite
                            ? r.options.slidesToShow + e
                            : e),
                        r.options.slidesToShow == r.options.slidesToScroll &&
                        r.slideCount - e < r.options.slidesToShow
                          ? n
                              .slice(i - (r.options.slidesToShow - s), i + s)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : n
                              .slice(i, i + r.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== r.options.lazyLoad &&
                    "anticipated" !== r.options.lazyLoad) ||
                    r.lazyLoad();
                }),
                (t.prototype.setupInfinite = function () {
                  var t,
                    n,
                    i,
                    s = this;
                  if (
                    (!0 === s.options.fade && (s.options.centerMode = !1),
                    !0 === s.options.infinite &&
                      !1 === s.options.fade &&
                      ((n = null), s.slideCount > s.options.slidesToShow))
                  ) {
                    for (
                      i =
                        !0 === s.options.centerMode
                          ? s.options.slidesToShow + 1
                          : s.options.slidesToShow,
                        t = s.slideCount;
                      t > s.slideCount - i;
                      t -= 1
                    )
                      (n = t - 1),
                        e(s.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n - s.slideCount)
                          .prependTo(s.$slideTrack)
                          .addClass("slick-cloned");
                    for (t = 0; t < i + s.slideCount; t += 1)
                      (n = t),
                        e(s.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n + s.slideCount)
                          .appendTo(s.$slideTrack)
                          .addClass("slick-cloned");
                    s.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        e(this).attr("id", "");
                      });
                  }
                }),
                (t.prototype.interrupt = function (e) {
                  var t = this;
                  e || t.autoPlay(), (t.interrupted = e);
                }),
                (t.prototype.selectHandler = function (t) {
                  var n = this,
                    i = e(t.target).is(".slick-slide")
                      ? e(t.target)
                      : e(t.target).parents(".slick-slide"),
                    s = parseInt(i.attr("data-slick-index"));
                  s || (s = 0),
                    n.slideCount <= n.options.slidesToShow
                      ? n.slideHandler(s, !1, !0)
                      : n.slideHandler(s);
                }),
                (t.prototype.slideHandler = function (e, t, n) {
                  var i,
                    s,
                    r,
                    o,
                    a,
                    l = null,
                    d = this;
                  if (
                    ((t = t || !1),
                    !(
                      (!0 === d.animating && !0 === d.options.waitForAnimate) ||
                      (!0 === d.options.fade && d.currentSlide === e)
                    ))
                  )
                    if (
                      (!1 === t && d.asNavFor(e),
                      (i = e),
                      (l = d.getLeft(i)),
                      (o = d.getLeft(d.currentSlide)),
                      (d.currentLeft = null === d.swipeLeft ? o : d.swipeLeft),
                      !1 === d.options.infinite &&
                        !1 === d.options.centerMode &&
                        (e < 0 ||
                          e > d.getDotCount() * d.options.slidesToScroll))
                    )
                      !1 === d.options.fade &&
                        ((i = d.currentSlide),
                        !0 !== n && d.slideCount > d.options.slidesToShow
                          ? d.animateSlide(o, function () {
                              d.postSlide(i);
                            })
                          : d.postSlide(i));
                    else if (
                      !1 === d.options.infinite &&
                      !0 === d.options.centerMode &&
                      (e < 0 || e > d.slideCount - d.options.slidesToScroll)
                    )
                      !1 === d.options.fade &&
                        ((i = d.currentSlide),
                        !0 !== n && d.slideCount > d.options.slidesToShow
                          ? d.animateSlide(o, function () {
                              d.postSlide(i);
                            })
                          : d.postSlide(i));
                    else {
                      if (
                        (d.options.autoplay && clearInterval(d.autoPlayTimer),
                        (s =
                          i < 0
                            ? d.slideCount % d.options.slidesToScroll != 0
                              ? d.slideCount -
                                (d.slideCount % d.options.slidesToScroll)
                              : d.slideCount + i
                            : i >= d.slideCount
                            ? d.slideCount % d.options.slidesToScroll != 0
                              ? 0
                              : i - d.slideCount
                            : i),
                        (d.animating = !0),
                        d.$slider.trigger("beforeChange", [
                          d,
                          d.currentSlide,
                          s,
                        ]),
                        (r = d.currentSlide),
                        (d.currentSlide = s),
                        d.setSlideClasses(d.currentSlide),
                        d.options.asNavFor &&
                          (a = (a = d.getNavTarget()).slick("getSlick"))
                            .slideCount <= a.options.slidesToShow &&
                          a.setSlideClasses(d.currentSlide),
                        d.updateDots(),
                        d.updateArrows(),
                        !0 === d.options.fade)
                      )
                        return (
                          !0 !== n
                            ? (d.fadeSlideOut(r),
                              d.fadeSlide(s, function () {
                                d.postSlide(s);
                              }))
                            : d.postSlide(s),
                          void d.animateHeight()
                        );
                      !0 !== n && d.slideCount > d.options.slidesToShow
                        ? d.animateSlide(l, function () {
                            d.postSlide(s);
                          })
                        : d.postSlide(s);
                    }
                }),
                (t.prototype.startLoad = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
                }),
                (t.prototype.swipeDirection = function () {
                  var e,
                    t,
                    n,
                    i,
                    s = this;
                  return (
                    (e = s.touchObject.startX - s.touchObject.curX),
                    (t = s.touchObject.startY - s.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 &&
                      (i = 360 - Math.abs(i)),
                    (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
                      ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                      : i >= 135 && i <= 225
                      ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                      : !0 === s.options.verticalSwiping
                      ? i >= 35 && i <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (t.prototype.swipeEnd = function (e) {
                  var t,
                    n,
                    i = this;
                  if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
                    return (i.scrolling = !1), !1;
                  if (
                    ((i.interrupted = !1),
                    (i.shouldClick = !(i.touchObject.swipeLength > 10)),
                    void 0 === i.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === i.touchObject.edgeHit &&
                      i.$slider.trigger("edge", [i, i.swipeDirection()]),
                    i.touchObject.swipeLength >= i.touchObject.minSwipe)
                  ) {
                    switch ((n = i.swipeDirection())) {
                      case "left":
                      case "down":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                          : i.currentSlide + i.getSlideCount()),
                          (i.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                          : i.currentSlide - i.getSlideCount()),
                          (i.currentDirection = 1);
                    }
                    "vertical" != n &&
                      (i.slideHandler(t),
                      (i.touchObject = {}),
                      i.$slider.trigger("swipe", [i, n]));
                  } else
                    i.touchObject.startX !== i.touchObject.curX &&
                      (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                }),
                (t.prototype.swipeHandler = function (e) {
                  var t = this;
                  if (
                    !(
                      !1 === t.options.swipe ||
                      ("ontouchend" in document && !1 === t.options.swipe) ||
                      (!1 === t.options.draggable &&
                        -1 !== e.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((t.touchObject.fingerCount =
                        e.originalEvent && void 0 !== e.originalEvent.touches
                          ? e.originalEvent.touches.length
                          : 1),
                      (t.touchObject.minSwipe =
                        t.listWidth / t.options.touchThreshold),
                      !0 === t.options.verticalSwiping &&
                        (t.touchObject.minSwipe =
                          t.listHeight / t.options.touchThreshold),
                      e.data.action)
                    ) {
                      case "start":
                        t.swipeStart(e);
                        break;
                      case "move":
                        t.swipeMove(e);
                        break;
                      case "end":
                        t.swipeEnd(e);
                    }
                }),
                (t.prototype.swipeMove = function (e) {
                  var t,
                    n,
                    i,
                    s,
                    r,
                    o,
                    a = this;
                  return (
                    (r =
                      void 0 !== e.originalEvent
                        ? e.originalEvent.touches
                        : null),
                    !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                      ((t = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX =
                        void 0 !== r ? r[0].pageX : e.clientX),
                      (a.touchObject.curY =
                        void 0 !== r ? r[0].pageY : e.clientY),
                      (a.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                        )
                      )),
                      (o = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                        )
                      )),
                      !a.options.verticalSwiping && !a.swiping && o > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping &&
                            (a.touchObject.swipeLength = o),
                          (n = a.swipeDirection()),
                          void 0 !== e.originalEvent &&
                            a.touchObject.swipeLength > 4 &&
                            ((a.swiping = !0), e.preventDefault()),
                          (s =
                            (!1 === a.options.rtl ? 1 : -1) *
                            (a.touchObject.curX > a.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === a.options.verticalSwiping &&
                            (s =
                              a.touchObject.curY > a.touchObject.startY
                                ? 1
                                : -1),
                          (i = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                            ((0 === a.currentSlide && "right" === n) ||
                              (a.currentSlide >= a.getDotCount() &&
                                "left" === n)) &&
                            ((i =
                              a.touchObject.swipeLength *
                              a.options.edgeFriction),
                            (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical
                            ? (a.swipeLeft = t + i * s)
                            : (a.swipeLeft =
                                t + i * (a.$list.height() / a.listWidth) * s),
                          !0 === a.options.verticalSwiping &&
                            (a.swipeLeft = t + i * s),
                          !0 !== a.options.fade &&
                            !1 !== a.options.touchMove &&
                            (!0 === a.animating
                              ? ((a.swipeLeft = null), !1)
                              : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (t.prototype.swipeStart = function (e) {
                  var t,
                    n = this;
                  if (
                    ((n.interrupted = !0),
                    1 !== n.touchObject.fingerCount ||
                      n.slideCount <= n.options.slidesToShow)
                  )
                    return (n.touchObject = {}), !1;
                  void 0 !== e.originalEvent &&
                    void 0 !== e.originalEvent.touches &&
                    (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX =
                      void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY =
                      void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
                }),
                (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
                  function () {
                    var e = this;
                    null !== e.$slidesCache &&
                      (e.unload(),
                      e.$slideTrack.children(this.options.slide).detach(),
                      e.$slidesCache.appendTo(e.$slideTrack),
                      e.reinit());
                  }),
                (t.prototype.unload = function () {
                  var t = this;
                  e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                      t.htmlExpr.test(t.options.prevArrow) &&
                      t.$prevArrow.remove(),
                    t.$nextArrow &&
                      t.htmlExpr.test(t.options.nextArrow) &&
                      t.$nextArrow.remove(),
                    t.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (t.prototype.unslick = function (e) {
                  var t = this;
                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                }),
                (t.prototype.updateArrows = function () {
                  var e = this;
                  Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      !e.options.infinite &&
                      (e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === e.currentSlide
                        ? (e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : ((e.currentSlide >=
                            e.slideCount - e.options.slidesToShow &&
                            !1 === e.options.centerMode) ||
                            (e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode)) &&
                          (e.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (t.prototype.updateDots = function () {
                  var e = this;
                  null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                      .find("li")
                      .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (t.prototype.visibility = function () {
                  var e = this;
                  e.options.autoplay &&
                    (document[e.hidden]
                      ? (e.interrupted = !0)
                      : (e.interrupted = !1));
                }),
                (e.fn.slick = function () {
                  var e,
                    n,
                    i = this,
                    s = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    o = i.length;
                  for (e = 0; e < o; e++)
                    if (
                      ("object" == typeof s || void 0 === s
                        ? (i[e].slick = new t(i[e], s))
                        : (n = i[e].slick[s].apply(i[e].slick, r)),
                      void 0 !== n)
                    )
                      return n;
                  return i;
                });
            }),
            void 0 === (r = "function" == typeof i ? i.apply(t, s) : i) ||
              (e.exports = r);
        })();
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(n[0].trim())),
          (i.breakpoint = n[1] ? n[1].trim() : "767"),
          (i.place = n[2] ? n[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.??bjects.push(i);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          i = String.prototype.split.call(n, ","),
          s = window.matchMedia(i[0]),
          r = i[1],
          o = Array.prototype.filter.call(this.??bjects, function (e) {
            return e.breakpoint === r;
          });
        s.addListener(function () {
          e.mediaHandler(s, o);
        }),
          this.mediaHandler(s, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let i = (e, t = 500, n = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !n),
              !n && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !n && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      s = (e, t = 500, n = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            n && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = !0,
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    const l = document.querySelector(".menu-burger__body"),
      d = document.querySelector(".menu-burger__close"),
      c = document.querySelector(".menu-burger");
    document.querySelector(".header");
    d.addEventListener("click", function () {
      o(),
        document.documentElement.classList.remove("menu-open"),
        l.classList.add("menu-burger__body_close-body"),
        c.classList.add("menu-burger_b-c");
    });
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function p(e, t) {
      const n = Array.from(e).filter(function (e, n, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (n.length) {
        const e = [];
        n.forEach((n) => {
          const i = {},
            s = n.dataset[t].split(",");
          (i.value = s[0]),
            (i.type = s[1] ? s[1].trim() : "max"),
            (i.item = n),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        })(i);
        const s = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const n = t.split(","),
                i = n[1],
                r = n[2],
                o = window.matchMedia(n[0]),
                a = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              s.push({ itemsArray: a, matchMedia: o });
            }),
            s
          );
      }
    }
    let f = (e, t = !1, n = 500, i = 0) => {
      const s = document.querySelector(e);
      if (s) {
        let r = "",
          a = 0;
        t &&
          ((r = "header.header"), (a = document.querySelector(r).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: n,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (o(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(s, "", l);
        else {
          let e = s.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
        }
        u(`[gotoBlock]: ????????...???????? ?? ${e}`);
      } else u(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
    };
    function h(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function m(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : h(t[n]) && h(e[n]) && Object.keys(t[n]).length > 0 && m(e[n], t[n]);
      });
    }
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function v() {
      const e = "undefined" != typeof document ? document : {};
      return m(e, g), e;
    }
    const y = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function w() {
      const e = "undefined" != typeof window ? window : {};
      return m(e, y), e;
    }
    class b extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function x(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...x(e)) : t.push(e);
        }),
        t
      );
    }
    function T(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function S(e, t) {
      const n = w(),
        i = v();
      let s = [];
      if (!t && e instanceof b) return e;
      if (!e) return new b(s);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof b) return e;
        s = e;
      }
      return new b(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(s)
      );
    }
    S.fn = b.prototype;
    const C = "resize scroll".split(" ");
    function k(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            C.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : S(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    k("click"),
      k("blur"),
      k("focus"),
      k("focusin"),
      k("focusout"),
      k("keyup"),
      k("keydown"),
      k("keypress"),
      k("submit"),
      k("change"),
      k("mousedown"),
      k("mousemove"),
      k("mouseup"),
      k("mouseenter"),
      k("mouseleave"),
      k("mouseout"),
      k("mouseover"),
      k("touchstart"),
      k("touchend"),
      k("touchmove"),
      k("resize"),
      k("scroll");
    const E = {
      addClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        return (
          T(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = x(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, s] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), S(t).is(n))) i.apply(t, s);
          else {
            const e = S(t).parents();
            for (let t = 0; t < e.length; t += 1)
              S(e[t]).is(n) && i.apply(e[t], s);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, s] = e;
        "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!n && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, n.proxyListener, s),
                    o.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, n.proxyListener, s),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = w(),
          n = e[0].split(" "),
          i = e[1];
        for (let s = 0; s < n.length; s += 1) {
          const r = n[s];
          for (let n = 0; n < this.length; n += 1) {
            const s = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(n),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = w();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = w(),
            t = v(),
            n = this[0],
            i = n.getBoundingClientRect(),
            s = t.body,
            r = n.clientTop || s.clientTop || 0,
            o = n.clientLeft || s.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - r, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = w();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = w(),
          n = v(),
          i = this[0];
        let s, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (s = S(e), r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof b) {
          for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
            if (s[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return S([]);
        if (e < 0) {
          const n = t + e;
          return S(n < 0 ? [] : [this[n]]);
        }
        return S([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = v();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof b)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = v();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof b)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && S(this[0].nextElementSibling).is(e)
              ? S([this[0].nextElementSibling])
              : S([])
            : this[0].nextElementSibling
            ? S([this[0].nextElementSibling])
            : S([])
          : S([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return S([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? S(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return S(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && S(t.previousElementSibling).is(e)
              ? S([t.previousElementSibling])
              : S([])
            : t.previousElementSibling
            ? S([t.previousElementSibling])
            : S([]);
        }
        return S([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return S([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? S(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return S(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? S(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return S(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? S(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return S(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? S([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return S(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !S(i[n]).is(e)) || t.push(i[n]);
        }
        return S(t);
      },
      filter: function (e) {
        return S(T(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(E).forEach((e) => {
      Object.defineProperty(S.fn, e, { value: E[e], writable: !0 });
    });
    const $ = S;
    function L(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function A() {
      return Date.now();
    }
    function M(e, t) {
      void 0 === t && (t = "x");
      const n = w();
      let i, s, r;
      const o = (function (e) {
        const t = w();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((s = o.transform || o.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (s = n.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        s || 0
      );
    }
    function P(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function O(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function D() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != i && !O(i)) {
          const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = n.length; t < s; t += 1) {
            const s = n[t],
              r = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== r &&
              r.enumerable &&
              (P(e[s]) && P(i[s])
                ? i[s].__swiper__
                  ? (e[s] = i[s])
                  : D(e[s], i[s])
                : !P(e[s]) && P(i[s])
                ? ((e[s] = {}), i[s].__swiper__ ? (e[s] = i[s]) : D(e[s], i[s]))
                : (e[s] = i[s]));
          }
        }
      }
      return e;
    }
    function N(e, t, n) {
      e.style.setProperty(t, n);
    }
    function H(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const s = w(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(t.cssModeFrameID);
      const d = n > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (n - r);
          if ((c(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), c(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void s.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = s.requestAnimationFrame(u);
        };
      u();
    }
    let j, q, z;
    function I() {
      return (
        j ||
          (j = (function () {
            const e = w(),
              t = v();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        j
      );
    }
    function _(e) {
      return (
        void 0 === e && (e = {}),
        q ||
          (q = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = I(),
              i = w(),
              s = i.navigator.platform,
              r = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              l = i.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === s;
            let h = "MacIntel" === s;
            return (
              !c &&
                h &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              d && !f && ((o.os = "android"), (o.android = !0)),
              (c || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        q
      );
    }
    function B() {
      return (
        z ||
          (z = (function () {
            const e = w();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        z
      );
    }
    const R = {
      on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const s = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][s](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          t.apply(i, r);
        }
        return (s.__emitterProxy = t), i.on(e, s, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, s) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(s, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
          n.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          e
        );
      },
    };
    const W = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          { $wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = s.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let w = i.spaceBetween,
          b = -m,
          x = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * r),
          (e.virtualSize = -w),
          o
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (N(e.wrapperEl, "--swiper-centered-offset-before", ""),
            N(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const S = i.grid && i.grid.rows > 1 && e.grid;
        let C;
        S && e.grid.initSlides(u);
        const k =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < u; s += 1) {
          C = 0;
          const o = c.eq(s);
          if (
            (S && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              k && (c[s].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  i = n(r, "padding-right"),
                  s = n(r, "margin-left"),
                  a = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + s + a;
                else {
                  const { clientWidth: n, offsetWidth: r } = o[0];
                  C = e + t + i + s + a + (r - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (C = Math.floor(C));
            } else
              (C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (C = Math.floor(C)),
                c[s] && (c[s].style[t("width")] = `${C}px`);
            c[s] && (c[s].swiperSlideSize = C),
              h.push(C),
              i.centeredSlides
                ? ((b = b + C / 2 + x / 2 + w),
                  0 === x && 0 !== s && (b = b - r / 2 - w),
                  0 === s && (b = b - r / 2 - w),
                  Math.abs(b) < 0.001 && (b = 0),
                  i.roundLengths && (b = Math.floor(b)),
                  T % i.slidesPerGroup == 0 && p.push(b),
                  f.push(b))
                : (i.roundLengths && (b = Math.floor(b)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(b),
                  f.push(b),
                  (b = b + C + w)),
              (e.virtualSize += C + w),
              (x = C),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          S && e.grid.updateWrapperSize(C, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let s = p[n];
            i.roundLengths && (s = Math.floor(s)),
              p[n] <= e.virtualSize - r && t.push(s);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
            [n]: `${w}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          N(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            N(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (u !== d && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let s,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || $([])).each((e) => {
              n.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !i) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (s = 0; s < n.length; s += 1)
          if (void 0 !== n[s]) {
            const e = n[s].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: s, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        s && (o = e),
          i.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const d =
              (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            c =
              (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = s ? -d : d),
            (a.originalProgress = s ? -c : c);
        }
        t.visibleSlides = $(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === i
          ? ((s = 0), (r = !0), (o = !0))
          : ((s = (e - t.minTranslate()) / i), (r = s <= 0), (o = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: r, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: s,
            realIndex: r,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let d = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            d.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: s,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (c = e)
                : n >= i[e] && n < i[e + 1] && (c = e + 1)
              : n >= i[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (s.indexOf(n) >= 0) d = s.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= s.length && (d = s.length - 1), c === o))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: u,
          previousIndex: o,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = $(e).closest(`.${n.slideClass}`)[0];
        let s,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (s = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                $(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const F = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let r = M(s[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: s,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          d = 0,
          c = 0;
        n.isHorizontal() ? (d = i ? -e : e) : (c = e),
          s.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          s.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -d : -c)
            : s.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? d : c);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, i, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > l ? l : i && e < d ? d : e),
          r.updateProgress(c),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                H({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              n &&
                (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      n && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function G(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = i;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${s}`),
        n && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
        t.emit(`slideChangeTransition${s}`),
          "next" === a
            ? t.emit(`slideNextTransition${s}`)
            : t.emit(`slidePrevTransition${s}`);
      }
    }
    const V = {
      slideTo: function (e, t, n, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!h && !i && !s)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || a.initialSlide || 0) === (c || 0) &&
            n &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= n && t < i - (i - n) / 2
                ? (o = e)
                : t >= n && t < i && (o = e + 1)
              : t >= n && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(n, y), r.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                H({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(n, y),
          0 === t
            ? r.transitionEnd(n, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(n, y));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "string" == typeof e)
        ) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: s, enabled: r, params: o } = i;
        if (!r) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (s && o.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return o.rewind && i.isEnd
          ? i.slideTo(0, e, t, n)
          : i.slideTo(i.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: s,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: d,
          } = i;
        if (!d) return i;
        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(l ? i.translate : -i.translate),
          p = o.map((e) => c(e));
        let f = o[p.indexOf(u) - 1];
        if (void 0 === f && s.cssMode) {
          let e;
          o.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = a.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          s.rewind && i.isBeginning)
        ) {
          const s =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(s, e, t, n);
        }
        return i.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const s = this;
        let r = s.activeIndex;
        const o = Math.min(s.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[a]) {
          const e = s.snapGrid[a];
          l - e > (s.snapGrid[a + 1] - e) * i && (r += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[a - 1];
          l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, s.slidesGrid.length - 1)),
          s.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  L(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                L(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const X = {
      loopCreate: function () {
        const e = this,
          t = v(),
          { params: n, $wrapperEl: i } = e,
          s = i.children().length > 0 ? $(i.children()[0].parentNode) : i;
        s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = s.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = $(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              s.append(e);
            }
            r = s.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > r.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((e, t) => {
          $(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / r.length) * r.length;
          a.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0]);
        }
        for (let e = 0; e < a.length; e += 1)
          s.append($(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          s.prepend($(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: s,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -o[t] - e.getTranslate();
        if (t < i) {
          (l = n.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((a ? -e.translate : e.translate) - d);
        } else if (t >= n.length - i) {
          (l = -n.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((a ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function U(e) {
      const t = this,
        n = v(),
        i = w(),
        s = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = $(l.target);
      if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === l.type),
        !s.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!s.isTouchEvent && "button" in l && l.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (d = $(e.path[0]));
      const c = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  if (!n || n === v() || n === w()) return null;
                  n.assignedSlot && (n = n.assignedSlot);
                  const i = n.closest(e);
                  return i || n.getRootNode
                    ? i || t(n.getRootNode().host)
                    : null;
                })(t)
              );
            })(c, d[0])
          : d.closest(c)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        f = o.currentY,
        h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== h) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = f),
        (s.touchStartTime = A()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        d.is(s.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (s.isTouched = !1)),
          n.activeElement &&
            $(n.activeElement).is(s.focusableElements) &&
            n.activeElement !== d[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          d[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function Y(e) {
      const t = v(),
        n = this,
        i = n.touchEventsData,
        { params: s, touches: r, rtlTranslate: o, enabled: a } = n;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const d =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? d.pageX : l.pageX,
        u = "touchmove" === l.type ? d.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = c), void (r.startY = u);
      if (!n.allowTouchMove)
        return (
          $(l.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: c,
              startY: u,
              currentX: c,
              currentY: u,
            }),
            (i.touchStartTime = A()))
          )
        );
      if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (n.isVertical()) {
          if (
            (u < r.startY && n.translate <= n.maxTranslate()) ||
            (u > r.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (c < r.startX && n.translate <= n.maxTranslate()) ||
          (c > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        $(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = c), (r.currentY = u);
      const p = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        i.isMoved ||
          (s.loop && !s.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let h = n.isHorizontal() ? p : f;
      (r.diff = h),
        (h *= s.touchRatio),
        o && (h = -h),
        (n.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let m = !0,
        g = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (g = 0),
        h > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            s.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + h) ** g))
          : h < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            s.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - h) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(h) > s.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
          s.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          s.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: s,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = A(),
        c = d - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = A()),
        L(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      let h = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - o[p]) / f,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function J() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function K(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Z() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let ee = !1;
    function te() {}
    const ne = (e, t) => {
      const n = v(),
        {
          params: i,
          touchEvents: s,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        d = !!i.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[c](s.start, e.onTouchStart, t),
          r[c](
            s.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: d } : d
          ),
          r[c](s.end, e.onTouchEnd, t),
          s.cancel && r[c](s.cancel, e.onTouchEnd, t);
      } else
        r[c](s.start, e.onTouchStart, !1),
          n[c](s.move, e.onTouchMove, d),
          n[c](s.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[c]("click", e.onClick, !0),
        i.cssMode && o[c]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              J,
              !0
            )
          : e[u]("observerUpdate", J, !0);
    };
    const ie = {
        attachEvents: function () {
          const e = this,
            t = v(),
            { params: n, support: i } = e;
          (e.onTouchStart = U.bind(e)),
            (e.onTouchMove = Y.bind(e)),
            (e.onTouchEnd = Q.bind(e)),
            n.cssMode && (e.onScroll = Z.bind(e)),
            (e.onClick = K.bind(e)),
            i.touch && !ee && (t.addEventListener("touchstart", te), (ee = !0)),
            ne(e, "on");
        },
        detachEvents: function () {
          ne(this, "off");
        },
      },
      se = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const re = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: s,
            $el: r,
          } = e,
          o = s.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          d = se(e, s),
          c = se(e, l),
          u = s.enabled;
        d && !c
          ? (r.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              r.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = s[t] && s[t].enabled,
              i = l[t] && l[t].enabled;
            n && !i && e[t].disable(), !n && i && e[t].enable();
          });
        const p = l.direction && l.direction !== s.direction,
          f = s.loop && (l.slidesPerView !== s.slidesPerView || p);
        p && n && e.changeDirection(), D(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let i = !1;
        const s = w(),
          r = "window" === t ? s.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
            : a <= n.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const oe = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: s,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: i },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ae = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function le(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          s = n[i];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in s
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                D(t, n))
              : D(t, n))
          : D(t, n);
      };
    }
    const de = {
        eventsEmitter: R,
        update: W,
        translate: F,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              G({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                G({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: V,
        loop: X,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ie,
        breakpoints: re,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: oe,
        images: {
          loadImage: function (e, t, n, i, s, r) {
            const o = w();
            let a;
            function l() {
              r && r();
            }
            $(e).parent("picture")[0] || (e.complete && s)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ce = {};
    class ue {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
          i[s] = arguments[s];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = D({}, t)),
          e && !t.el && (t.el = e),
          t.el && $(t.el).length > 1)
        ) {
          const e = [];
          return (
            $(t.el).each((n) => {
              const i = D({}, t, { el: n });
              e.push(new ue(i));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = I()),
          (r.device = _({ userAgent: t.userAgent })),
          (r.browser = B()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: le(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = D({}, ae, o);
        return (
          (r.params = D({}, a, ce, t)),
          (r.originalParams = D({}, r.params)),
          (r.passedParams = D({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = $),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: A(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          s = (n.maxTranslate() - i) * e + i;
        n.translateTo(s, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: i,
          slidesGrid: s,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            s[a] - s[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || i()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = $(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = $(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(i()) : $(n).children(i());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = v().createElement("div");
          (s = $(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, $el: s, $wrapperEl: r, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        D(ce, e);
      }
      static get extendedDefaults() {
        return ce;
      }
      static get defaults() {
        return ae;
      }
      static installModule(e) {
        ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
        const t = ue.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ue.installModule(e)), ue)
          : (ue.installModule(e), ue);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        ue.prototype[t] = de[e][t];
      });
    }),
      ue.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const s = w();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = s.requestAnimationFrame(() => {
                    const { width: n, height: i } = t;
                    let s = n,
                      r = i;
                    e.forEach((e) => {
                      let { contentBoxSize: n, contentRect: i, target: o } = e;
                      (o && o !== t.el) ||
                        ((s = i ? i.width : (n[0] || n).inlineSize),
                        (r = i ? i.height : (n[0] || n).blockSize));
                    }),
                      (s === n && r === i) || a();
                  });
                })),
                r.observe(t.el))
              : (s.addEventListener("resize", a),
                s.addEventListener("orientationchange", l));
          }),
            n("destroy", () => {
              o && s.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                s.removeEventListener("resize", a),
                s.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: s } = e;
          const r = [],
            o = w(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const pe = ue;
    function fe(e, t, n, i) {
      const s = v();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!n[r] && !0 === n.auto) {
              let o = e.$el.children(`.${i[r]}`)[0];
              o ||
                ((o = s.createElement("div")),
                (o.className = i[r]),
                e.$el.append(o)),
                (n[r] = o),
                (t[r] = o);
            }
          }),
        n
      );
    }
    function he(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
      function r(e) {
        let n;
        return (
          e &&
            ((n = $(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function o(e, n) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function a() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        o(n, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), s("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), s("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = fe(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = r(e.nextEl),
          i = r(e.prevEl);
        n && n.length > 0 && n.on("click", d),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", l),
            n.removeClass(t.params.navigation.disabledClass));
      }
      n({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === t.params.navigation.enabled ? p() : (c(), a());
        }),
        i("toEdge fromEdge lock unlock", () => {
          a();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, n) => {
          const { $nextEl: i, $prevEl: r } = t.navigation,
            o = n.target;
          if (t.params.navigation.hideOnClick && !$(o).is(r) && !$(o).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              s(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        });
      const p = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass),
            c(),
            a();
        },
        disable: p,
        update: a,
        init: c,
        destroy: u,
      });
    }
    function me(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function ge(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
      const r = "swiper-pagination";
      let o;
      n({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function d(e, n) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
      }
      function c() {
        const e = t.rtl,
          n = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let c;
        const u = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((c = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              c > i - 1 - 2 * t.loopedSlides && (c -= i - 2 * t.loopedSlides),
              c > u - 1 && (c -= u),
              c < 0 && "bullets" !== t.params.paginationType && (c = u + c))
            : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === n.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let s, l, u;
          if (
            (n.dynamicBullets &&
              ((o = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                o * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((a += c - (t.previousIndex - t.loopedSlides || 0)),
                a > n.dynamicMainBullets - 1
                  ? (a = n.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (s = Math.max(c - a, 0)),
              (l = s + (Math.min(i.length, n.dynamicMainBullets) - 1)),
              (u = (l + s) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            i.each((e) => {
              const t = $(e),
                i = t.index();
              i === c && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (i >= s &&
                    i <= l &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  i === s && d(t, "prev"),
                  i === l && d(t, "next"));
            });
          else {
            const e = i.eq(c),
              r = e.index();
            if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const e = i.eq(s),
                o = i.eq(l);
              for (let e = s; e <= l; e += 1)
                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= i.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                  i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else d(e, "prev"), d(o, "next");
              else d(e, "prev"), d(o, "next");
            }
          }
          if (n.dynamicBullets) {
            const s = Math.min(i.length, n.dynamicMainBullets + 4),
              r = (o * s - o) / 2 - u * o,
              a = e ? "right" : "left";
            i.css(t.isHorizontal() ? a : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (r.find(me(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
            r.find(me(n.totalClass)).text(n.formatFractionTotal(u))),
          "progressbar" === n.type)
        ) {
          let e;
          e = n.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (c + 1) / u;
          let s = 1,
            o = 1;
          "horizontal" === e ? (s = i) : (o = i),
            r
              .find(me(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`)
              .transition(t.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (r.html(n.renderCustom(t, c + 1, u)), s("paginationRender", r[0]))
          : s("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let s = t.params.loop
            ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            s > n &&
            (s = n);
          for (let n = 0; n < s; n += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, n, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(r), (t.pagination.bullets = i.find(me(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== e.type && s("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = fe(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let n = $(e.el);
        0 !== n.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            n.length > 1 &&
            ((n = t.$el.find(e.el)),
            n.length > 1 &&
              (n = n.filter((e) => $(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
          n.addClass(e.modifierClass + e.type),
          n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (a = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            n.addClass(e.progressbarOppositeClass),
          e.clickable &&
            n.on("click", me(e.bulletClass), function (e) {
              e.preventDefault();
              let n = $(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides), t.slideTo(n);
            }),
          Object.assign(t.pagination, { $el: n, el: n[0] }),
          t.enabled || n.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        const n = t.pagination.$el;
        n.removeClass(e.hiddenClass),
          n.removeClass(e.modifierClass + e.type),
          n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && n.off("click", me(e.bulletClass));
      }
      i("init", () => {
        !1 === t.params.pagination.enabled ? h() : (p(), u(), c());
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && c();
        }),
        i("snapIndexChange", () => {
          t.params.loop || c();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (u(), c());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (u(), c());
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          c();
        }),
        i("click", (e, n) => {
          const i = n.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !$(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass),
          t.pagination.$el &&
            t.pagination.$el.addClass(
              t.params.pagination.paginationDisabledClass
            ),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.removeClass(
                t.params.pagination.paginationDisabledClass
              ),
            p(),
            u(),
            c();
        },
        disable: h,
        render: u,
        update: c,
        init: p,
        destroy: f,
      });
    }
    function ve(e) {
      let { swiper: t, extendParams: n, on: i, emit: s } = e;
      n({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let r = !1,
        o = !1;
      function a(e, n) {
        void 0 === n && (n = !0);
        const i = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          o = r.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !r.hasClass(i.elementClass) ||
          r.hasClass(i.loadedClass) ||
          r.hasClass(i.loadingClass) ||
          o.push(r[0]),
          0 !== o.length &&
            o.each((e) => {
              const o = $(e);
              o.addClass(i.loadingClass);
              const l = o.attr("data-background"),
                d = o.attr("data-src"),
                c = o.attr("data-srcset"),
                u = o.attr("data-sizes"),
                p = o.parent("picture");
              t.loadImage(o[0], d || l, c, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (c &&
                          (o.attr("srcset", c), o.removeAttr("data-srcset")),
                        u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = $(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        d && (o.attr("src", d), o.removeAttr("data-src"))),
                    o.addClass(i.loadedClass).removeClass(i.loadingClass),
                    r.find(`.${i.preloaderClass}`).remove(),
                    t.params.loop && n)
                  ) {
                    const e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      a(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      a(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  s("lazyImageReady", r[0], o[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                s("lazyImageLoad", r[0], o[0]);
            });
      }
      function l() {
        const { $wrapperEl: e, params: n, slides: i, activeIndex: s } = t,
          r = t.virtual && n.virtual.enabled,
          l = n.lazy;
        let d = n.slidesPerView;
        function c(t) {
          if (r) {
            if (
              e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (i[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? $(e).attr("data-swiper-slide-index") : $(e).index();
        }
        if (
          ("auto" === d && (d = 0), o || (o = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${n.slideVisibleClass}`).each((e) => {
            a(r ? $(e).attr("data-swiper-slide-index") : $(e).index());
          });
        else if (d > 1) for (let e = s; e < s + d; e += 1) c(e) && a(e);
        else a(s);
        if (l.loadPrevNext)
          if (d > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            const e = l.loadPrevNextAmount,
              t = Math.ceil(d),
              n = Math.min(s + t + Math.max(e, t), i.length),
              r = Math.max(s - Math.max(t, e), 0);
            for (let e = s + t; e < n; e += 1) c(e) && a(e);
            for (let e = r; e < s; e += 1) c(e) && a(e);
          } else {
            const t = e.children(`.${n.slideNextClass}`);
            t.length > 0 && a(u(t));
            const i = e.children(`.${n.slidePrevClass}`);
            i.length > 0 && a(u(i));
          }
      }
      function d() {
        const e = w();
        if (!t || t.destroyed) return;
        const n = t.params.lazy.scrollingElement
            ? $(t.params.lazy.scrollingElement)
            : $(e),
          i = n[0] === e,
          s = i ? e.innerWidth : n[0].offsetWidth,
          o = i ? e.innerHeight : n[0].offsetHeight,
          a = t.$el.offset(),
          { rtlTranslate: c } = t;
        let u = !1;
        c && (a.left -= t.$el[0].scrollLeft);
        const p = [
          [a.left, a.top],
          [a.left + t.width, a.top],
          [a.left, a.top + t.height],
          [a.left + t.width, a.top + t.height],
        ];
        for (let e = 0; e < p.length; e += 1) {
          const t = p[e];
          if (t[0] >= 0 && t[0] <= s && t[1] >= 0 && t[1] <= o) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const f = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (l(), n.off("scroll", d, f))
          : r || ((r = !0), n.on("scroll", d, f));
      }
      i("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        i("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : l());
        }),
        i("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            l();
        }),
        i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : l());
        }),
        i("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !o)) &&
            (t.params.lazy.checkInView ? d() : l());
        }),
        i("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? d() : l());
        }),
        i("slideChange", () => {
          const {
            lazy: e,
            cssMode: n,
            watchSlidesProgress: i,
            touchReleaseOnEdges: s,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (n || (i && (s || 0 === r))) && l();
        }),
        i("destroy", () => {
          t.$el &&
            t.$el
              .find(`.${t.params.lazy.loadingClass}`)
              .removeClass(t.params.lazy.loadingClass);
        }),
        Object.assign(t.lazy, { load: l, loadInSlide: a });
    }
    function ye(e) {
      let t,
        { swiper: n, extendParams: i, on: s, emit: r } = e;
      function o() {
        if (!n.size)
          return (n.autoplay.running = !1), void (n.autoplay.paused = !1);
        const e = n.slides.eq(n.activeIndex);
        let i = n.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
          clearTimeout(t),
          (t = L(() => {
            let e;
            n.params.autoplay.reverseDirection
              ? n.params.loop
                ? (n.loopFix(),
                  (e = n.slidePrev(n.params.speed, !0, !0)),
                  r("autoplay"))
                : n.isBeginning
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(
                      n.slides.length - 1,
                      n.params.speed,
                      !0,
                      !0
                    )),
                    r("autoplay"))
                : ((e = n.slidePrev(n.params.speed, !0, !0)), r("autoplay"))
              : n.params.loop
              ? (n.loopFix(),
                (e = n.slideNext(n.params.speed, !0, !0)),
                r("autoplay"))
              : n.isEnd
              ? n.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = n.slideTo(0, n.params.speed, !0, !0)), r("autoplay"))
              : ((e = n.slideNext(n.params.speed, !0, !0)), r("autoplay")),
              ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
          }, i));
      }
      function a() {
        return (
          void 0 === t &&
          !n.autoplay.running &&
          ((n.autoplay.running = !0), r("autoplayStart"), o(), !0)
        );
      }
      function l() {
        return (
          !!n.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (n.autoplay.running = !1),
          r("autoplayStop"),
          !0)
        );
      }
      function d(e) {
        n.autoplay.running &&
          (n.autoplay.paused ||
            (t && clearTimeout(t),
            (n.autoplay.paused = !0),
            0 !== e && n.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  n.$wrapperEl[0].addEventListener(e, u);
                })
              : ((n.autoplay.paused = !1), o())));
      }
      function c() {
        const e = v();
        "hidden" === e.visibilityState && n.autoplay.running && d(),
          "visible" === e.visibilityState &&
            n.autoplay.paused &&
            (o(), (n.autoplay.paused = !1));
      }
      function u(e) {
        n &&
          !n.destroyed &&
          n.$wrapperEl &&
          e.target === n.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          }),
          (n.autoplay.paused = !1),
          n.autoplay.running ? o() : l());
      }
      function p() {
        n.params.autoplay.disableOnInteraction
          ? l()
          : (r("autoplayPause"), d()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            n.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function f() {
        n.params.autoplay.disableOnInteraction ||
          ((n.autoplay.paused = !1), r("autoplayResume"), o());
      }
      (n.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (n.params.autoplay.enabled) {
            a();
            v().addEventListener("visibilitychange", c),
              n.params.autoplay.pauseOnMouseEnter &&
                (n.$el.on("mouseenter", p), n.$el.on("mouseleave", f));
          }
        }),
        s("beforeTransitionStart", (e, t, i) => {
          n.autoplay.running &&
            (i || !n.params.autoplay.disableOnInteraction
              ? n.autoplay.pause(t)
              : l());
        }),
        s("sliderFirstMove", () => {
          n.autoplay.running &&
            (n.params.autoplay.disableOnInteraction ? l() : d());
        }),
        s("touchEnd", () => {
          n.params.cssMode &&
            n.autoplay.paused &&
            !n.params.autoplay.disableOnInteraction &&
            o();
        }),
        s("destroy", () => {
          n.$el.off("mouseenter", p),
            n.$el.off("mouseleave", f),
            n.autoplay.running && l();
          v().removeEventListener("visibilitychange", c);
        }),
        Object.assign(n.autoplay, { pause: d, run: o, start: a, stop: l });
    }
    function we(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function be(e) {
      let { swiper: t, extendParams: n, on: i } = e;
      n({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: n,
          on: i,
          setTranslate: s,
          setTransition: r,
          overwriteParams: o,
          perspective: a,
          recreateShadows: l,
          getEffectParams: d,
        } = e;
        let c;
        i("beforeInit", () => {
          if (n.params.effect !== t) return;
          n.classNames.push(`${n.params.containerModifierClass}${t}`),
            a &&
              a() &&
              n.classNames.push(`${n.params.containerModifierClass}3d`);
          const e = o ? o() : {};
          Object.assign(n.params, e), Object.assign(n.originalParams, e);
        }),
          i("setTranslate", () => {
            n.params.effect === t && s();
          }),
          i("setTransition", (e, i) => {
            n.params.effect === t && r(i);
          }),
          i("transitionEnd", () => {
            if (n.params.effect === t && l) {
              if (!d || !d().slideShadows) return;
              n.slides.each((e) => {
                n.$(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .remove();
              }),
                l();
            }
          }),
          i("virtualUpdate", () => {
            n.params.effect === t &&
              (n.slides.length || (c = !0),
              requestAnimationFrame(() => {
                c && n.slides && n.slides.length && (s(), (c = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e } = t,
            n = t.params.fadeEffect;
          for (let i = 0; i < e.length; i += 1) {
            const e = t.slides.eq(i);
            let s = -e[0].swiperSlideOffset;
            t.params.virtualTranslate || (s -= t.translate);
            let r = 0;
            t.isHorizontal() || ((r = s), (s = 0));
            const o = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(e[0].progress), 0)
              : 1 + Math.min(Math.max(e[0].progress, -1), 0);
            we(n, e)
              .css({ opacity: o })
              .transform(`translate3d(${s}px, ${r}px, 0px)`);
          }
        },
        setTransition: (e) => {
          const { transformEl: n } = t.params.fadeEffect;
          (n ? t.slides.find(n) : t.slides).transition(e),
            (function (e) {
              let { swiper: t, duration: n, transformEl: i, allSlides: s } = e;
              const { slides: r, activeIndex: o, $wrapperEl: a } = t;
              if (t.params.virtualTranslate && 0 !== n) {
                let e,
                  n = !1;
                (e = s ? (i ? r.find(i) : r) : i ? r.eq(o).find(i) : r.eq(o)),
                  e.transitionEnd(() => {
                    if (n) return;
                    if (!t || t.destroyed) return;
                    (n = !0), (t.animating = !1);
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1) a.trigger(e[t]);
                  });
              }
            })({ swiper: t, duration: e, transformEl: n, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    function xe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      xe(),
        document.querySelector(".restaurant-info__slider") &&
          new pe(".restaurant-info__slider", {
            modules: [be, ye, ve],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            navigation: {
              nextEl: ".about__more .more__item_next",
              prevEl: ".about__more .more__item_prev",
            },
            on: {},
          }),
        (() => {
          if ((xe(), document.querySelector(".slider-team"))) {
            let e = new pe(".slider-team", {
              modules: [ye, he, ge, ve],
              autoplay: { delay: 6e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: "4",
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              initialSlide: 2,
              loop: !0,
              lazy: !0,
              pagination: {
                el: ".info-block__pagination-slider",
                type: "fraction",
              },
              navigation: {
                nextEl: ".info-block__nav-slider .info-block__item_next",
                prevEl: ".info-block__nav-slider .info-block__item_prev",
              },
              breakpoints: {
                320: { slidesPerView: 2, centeredSlides: !0 },
                568: { slidesPerView: 3, centeredSlides: !0 },
                768: { slidesPerView: 4, centeredSlides: !1 },
                992: { slidesPerView: 4 },
                1268: {},
              },
              on: {
                init: function () {
                  window.matchMedia("(min-width: 768px)").matches &&
                    document
                      .querySelector(".swiper-slide-next")
                      .nextElementSibling.classList.add("active");
                },
              },
            });
            window.matchMedia("(min-width: 768px)").matches &&
              e.on("slideChangeTransitionStart", function () {
                const e = document.querySelector(".swiper-slide-next");
                let t = e.nextElementSibling;
                t.classList.add("active"),
                  e.classList.contains("active") &&
                    e.classList.remove("active"),
                  t.classList.contains("active") &&
                    t.nextElementSibling.classList.remove("active");
              });
          }
        })();
    });
    let Te = !1;
    setTimeout(() => {
      if (Te) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var Se = n(755);
    n(154);
    document.addEventListener("DOMContentLoaded", function () {
      function e(e, t) {
        t &&
          t.addEventListener("input", function () {
            1 == t.checked
              ? (e.classList.remove("disabled"), e.removeAttribute("disabled"))
              : (e.setAttribute("disabled", "disabled"),
                e.classList.add("disabled"));
          });
      }
      Se(".tabs-nav li").click(function (e) {
        var t = Se(this),
          n = t.parents(".tabs"),
          i =
            (n.children(".tabs-nav").children("li"),
            n.children(".tabs-box").children("div"));
        t.hasClass("active") ||
          (t.addClass("active").siblings().removeClass("active"),
          i.eq(t.index()).addClass("active").siblings().removeClass("active")),
          e.preventDefault();
      }),
        (function (e) {
          const t = document.querySelectorAll(e),
            n = document.querySelectorAll(".desired-time-seclect__item");
          t &&
            n &&
            t.forEach((e) => {
              e.getElementsByClassName("show") &&
                e.addEventListener("click", function (e) {
                  n.forEach((e) => {
                    e.getElementsByClassName("active") &&
                      e.classList.remove("active");
                  });
                  let t = e.target;
                  t.closest(".desired-time-seclect__item") &&
                    t.classList.add("active");
                });
            });
        })(".step-one__select-time"),
        (function () {
          const t = document.querySelector(".step-one"),
            n = document.querySelector(".step-two"),
            i = document.querySelector(".step-one__bnt-next"),
            s = document.querySelector(".step-two__bnt-prev"),
            r = document.querySelector(".options_column"),
            o = document.querySelector(".calendar__body"),
            a = document.querySelector("#agree");
          e(i, a);
          let l = void (
              r &&
              r.addEventListener("change", function (e) {
                let t = e.target;
                if (t.closest(".radio-mune") && t.checked)
                  return r.classList.remove("alert-danger"), (l = !0);
              })
            ),
            d = void (
              o &&
              o.addEventListener("click", function (e) {
                if (e.target.closest(".calendar__day"))
                  return (
                    document.querySelector(".calendar__body .alert-danger") &&
                      document
                        .querySelector(".calendar__body .alert-danger")
                        .remove(),
                    (d = !0)
                  );
              })
            );
          i &&
            s &&
            (i.addEventListener("click", function () {
              l
                ? d
                  ? (t.classList.add("hidden"), n.classList.remove("hidden"))
                  : (function () {
                      if (
                        !document.querySelector(".calendar__body .alert-danger")
                      ) {
                        const e = document.querySelector(".calendar__body");
                        let t = document.createElement("div");
                        t.classList.add("alert-danger"),
                          (t.innerHTML = "You won't waste a day!"),
                          e.append(t);
                      }
                    })()
                : r.classList.add("alert-danger");
            }),
            s.addEventListener("click", function () {
              t.classList.remove("hidden"), n.classList.add("hidden");
            }));
        })(),
        (function () {
          const e = document.querySelector("#btn-lunch-dinner"),
            t = document.querySelectorAll(".options__item-dinner"),
            n = document.querySelectorAll(".options__item-lunch");
          e &&
            e.addEventListener("click", function (e) {
              let i = e.target;
              i.closest("#lunch") &&
                (t.forEach((e) => {
                  e.classList.add("hidden");
                }),
                n.forEach((e) => {
                  e.classList.remove("hidden");
                })),
                i.closest("#dinner") &&
                  (t.forEach((e) => {
                    e.classList.remove("hidden");
                  }),
                  n.forEach((e) => {
                    e.classList.add("hidden");
                  }));
            });
        })(),
        (function () {
          const e = document.querySelector('input[name="adults"]'),
            t = document.querySelector('select[name="children"]'),
            n = document.querySelector("#guests-num");
          if (e) {
            let i = 2;
            e.value || (e.value = i),
              n.addEventListener("change", function (n) {
                let s = n.target;
                s.closest('input[name="person"]') &&
                  ((i = s.value),
                  (function (e, t) {
                    0 != +t.value && (e.value = t.value);
                  })(e, s),
                  (t.innerHTML = ""),
                  (function (e, t) {
                    let n = t.options;
                    for (let t = 0; t < e; t++) n[t] = new Option(t, t, !0);
                  })(i, t));
              });
            let s = [];
            s.push(t.value),
              t.addEventListener("change", function () {
                (window.valueChildren = t.value),
                  s.push(window.valueChildren),
                  (function (e, t, n, i) {
                    let s = +i[i.length - 2];
                    +e.value
                      ? (t.value > s && (e.value = +e.value + +t.value),
                        n > t.value && (e.value = +n - +t.value),
                        +s == +t.value && (e.value = +n - +t.value))
                      : (e.value = +n);
                  })(e, t, i, s);
              });
          }
        })();
      var t = document.querySelectorAll("input[data-tel-input]"),
        n = function (e) {
          return e.value.replace(/\D/g, "");
        },
        i = function (e) {
          var t = e.target,
            i = n(t),
            s = e.clipboardData || window.clipboardData;
          if (s) {
            var r = s.getData("Text");
            if (/\D/g.test(r)) return void (t.value = i);
          }
        },
        s = function (e) {
          var t = e.target,
            i = n(t),
            s = t.selectionStart,
            r = "";
          if (!i) return (t.value = "");
          if (t.value.length == s) {
            if (["7", "8", "9"].indexOf(i[0]) > -1) {
              "9" == i[0] && (i = "7" + i);
              var o = "8" == i[0] ? "8" : "+7";
              (r = t.value = o + " "),
                i.length > 1 && (r += "(" + i.substring(1, 4)),
                i.length >= 5 && (r += ") " + i.substring(4, 7)),
                i.length >= 8 && (r += "-" + i.substring(7, 9)),
                i.length >= 10 && (r += "-" + i.substring(9, 11));
            } else r = "+" + i.substring(0, 16);
            t.value = r;
          } else e.data && /\D/g.test(e.data) && (t.value = i);
        },
        r = function (e) {
          var t = e.target.value.replace(/\D/g, "");
          8 == e.keyCode && 1 == t.length && (e.target.value = "");
        };
      for (var o of t)
        o.addEventListener("keydown", r),
          o.addEventListener("input", s, !1),
          o.addEventListener("paste", i, !1);
      !(function () {
        const e = document.querySelector(".data-user");
        e &&
          e.addEventListener("click", function (e) {
            let t = e.target;
            a.forEach((e) => {
              "" === e.value &&
                t.closest(".required") &&
                e.classList.remove("alert-danger");
            });
          });
      })();
      const a = document.querySelectorAll(".required"),
        l = document.getElementById("form-booking");
      if (l) {
        const t = document.querySelector(".data-user__submit"),
          n = document.querySelector("#privacy");
        e(t, n),
          l.addEventListener("submit", function (e) {
            e.preventDefault();
            const t = document.querySelectorAll(".calendar__day"),
              i = document.querySelector(".checkbox_privacy"),
              s = document.querySelector(".step-finish"),
              r = document.querySelector(".step-two");
            let o, l;
            t.forEach((e) => {
              e.matches(".active") && (o = e.innerHTML);
            }),
              a.forEach((e) => {
                "" === e.value
                  ? (e.classList.add("alert-danger"), (l = !1))
                  : (e.classList.remove("alert-danger"), (l = !0));
              }),
              l &&
                (n.checked
                  ? (document.querySelectorAll("form").forEach((e) => {
                      let t = new FormData(e);
                      t.append("change-day", o);
                      let n = {};
                      t.forEach((e, t) => {
                        n[t] = e;
                      }),
                        console.log(n),
                        (async function (e, t) {
                          let n = await fetch(`${e}`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(t),
                          });
                          if (!n.ok)
                            throw new Error(
                              `Could not fetch ${e}, status:${n.status} `
                            );
                          await n.json();
                        })("http://localhost:3000/posts", n);
                    }),
                    r.classList.add("hidden"),
                    s.classList.remove("hidden"))
                  : i.classList.add("alert-danger"));
          });
      }
    });
    const Ce = (e) => {
      function t(e, t) {
        let n = [];
        for (let i = e; i <= t; i++) n.push(i);
        return n;
      }
      function n(e, t) {
        let n = (function (e, t) {
          return new Date(e, t, 1).getDay();
        })(e, t);
        return s(n) - 1;
      }
      function i(e, t) {
        return new Date(e, t + 1, 0).getDate();
      }
      function s(e) {
        return 0 == e ? 7 : e;
      }
      e &&
        (function (e) {
          let r = new Date(),
            o = r.getFullYear(),
            a = r.getMonth(),
            l = { year: o, month: a, date: r.getDate() };
          const d = document.querySelector(".calendar__dates"),
            c = document.querySelector(".calendar__info"),
            u = document.querySelector(".calendar__prev"),
            p = document.querySelector(".calendar__next");
          f(o, a, l, e),
            u &&
              p &&
              d &&
              (u.addEventListener("click", function () {
                var t;
                (t = o),
                  (o = 0 == a ? t - 1 : t),
                  (a = (function (e, t, n) {
                    let i = new Date(),
                      s = i.getMonth(),
                      r = i.getFullYear();
                    e - 1 == s && t == r && n.classList.add("disabled");
                    if (e == s && t == r) return s;
                    return 0 == e ? 11 : e - 1;
                  })(a, o, u)),
                  f(o, a, l, e);
              }),
              p.addEventListener("click", function () {
                var t;
                (t = o),
                  (o = 11 == a ? t + 1 : t),
                  (a = (function (e, t) {
                    return 11 == e
                      ? 0
                      : (t.classList.remove("disabled"), e + 1);
                  })(a, u)),
                  f(o, a, l, e);
              }),
              d.addEventListener("click", function (e) {
                let t = e.target;
                document.querySelectorAll("span").forEach((e) => {
                  e.classList.contains("active") &&
                    e.classList.remove("active");
                }),
                  !t.closest("span") ||
                    t.classList.contains("inactive") ||
                    "" == t.innerHTML ||
                    t.classList.contains("weekends") ||
                    t.closest("span").classList.add("active");
              }));
          function f(e, r, o, a) {
            var l, u, p, f;
            !(function (e, r, o) {
              let a = [],
                l = 1,
                d = i(e, r),
                c = n(e, r),
                u = (function (e, t) {
                  return (
                    7 -
                    s(
                      (function (e, t) {
                        return new Date(e, t + 1, 0).getDay();
                      })(e, t)
                    )
                  );
                })(e, r);
              (a = t(l, d)),
                (a = (function (e, t, n) {
                  for (let i = 0; i < e; i++) n.unshift(t);
                  return n;
                })(c, "", a)),
                (a = (function (e, t, n) {
                  for (let i = 0; i < e; i++) n.push(t);
                  return n;
                })(u, "", a)),
                (a = (function (e, t) {
                  let n = [],
                    i = [],
                    s = t.length / e;
                  for (let r = 0; r < s; r++) (i = t.splice(0, e)), n.push(i);
                  return n;
                })(7, a)),
                o &&
                  ((function (e, t) {
                    if (t) {
                      t.innerHTML = "";
                      for (let n = 0; n < e.length; n++) {
                        let i = document.createElement("div");
                        i.setAttribute("class", "calendar__row-days");
                        for (let t = 0; t < e[n].length; t++) {
                          const s = document.createElement("span");
                          (s.innerHTML = e[n][t]),
                            s.setAttribute("class", "calendar__day"),
                            i.appendChild(s);
                        }
                        t.appendChild(i);
                      }
                    }
                  })(a, o),
                  (function (e, t) {
                    const n = t.querySelectorAll("span");
                    e.forEach((e, t, i) => {
                      n.forEach((e) => {
                        ((i[t][6] == e.innerHTML && "" != e.innerHTML) ||
                          (i[t][0] == e.innerHTML && "" != e.innerHTML)) &&
                          e.classList.add("weekends");
                      });
                    });
                  })(a, o));
            })(e, r, d),
              (l = e),
              (u = r),
              (p = c) &&
                (p.innerHTML = `${
                  ((f = u),
                  [
                    "JANUARY",
                    "FEBRUARY",
                    "MARCH",
                    "APRIL",
                    "MAY",
                    "JUNE",
                    "JULY",
                    "AUGUST",
                    "SEPTEMBER",
                    "OCTOBER",
                    "NOVEMBER",
                    "DECEMBER",
                  ][f])
                } ${l}`),
              (function (e, s, r, o) {
                let a = [],
                  l = 1,
                  d = i(e, s);
                if (((a = t(l, d)), o && e == r.year && s == r.month)) {
                  o.querySelectorAll("span").forEach((e) => {
                    if (e.innerHTML == r.date)
                      return (
                        e.classList.add("present-day"),
                        void (
                          e.classList.contains("weekends") &&
                          e.classList.remove("weekends")
                        )
                      );
                  }),
                    (function (e, t) {
                      let i = t.querySelectorAll("span"),
                        s = n(e.year, e.month),
                        r = e.date + s;
                      for (let e = s; e < r; e++)
                        i[e].classList.add("inactive");
                      i.forEach((e) => {
                        "" == e.innerHTML && e.classList.add("inactive");
                      });
                    })(r, o),
                    (function (e, t) {
                      t.querySelectorAll("span").forEach((e) => {
                        if (
                          "26" == e.innerHTML ||
                          "3" == e.innerHTML ||
                          "29" == e.innerHTML ||
                          "10" == e.innerHTML
                        ) {
                          if (e.classList.contains("weekends"))
                            return console.log(e);
                          if (e.classList.contains("inactive"))
                            return console.log(e);
                          e.classList.add("booked");
                        }
                      });
                    })(0, o);
                }
              })(e, r, o, d);
          }
        })(document.querySelector(e));
    };
    (window.FLS = !1),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      t.any() && document.documentElement.classList.add("touch"),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? o(e)
                  : a(e);
              })(),
              document.documentElement.classList.add("menu-open"),
              l.classList.remove("menu-burger__body_close-body"),
              c.classList.remove("menu-burger_b-c"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-showmore]");
        let t, n;
        function r(e) {
          e.forEach((e) => {
            o(e.itemsArray, e.matchMedia);
          });
        }
        function o(e, t) {
          e.forEach((e) => {
            !(function (e, t = !1) {
              const n = (e = t ? e.item : e).querySelector(
                  "[data-showmore-content]"
                ),
                r = e.querySelector("[data-showmore-button]"),
                o = a(e, n);
              (t.matches || !t) &&
              o <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let n = e.offsetHeight;
                  return (e.style.height = `${t}px`), n;
                })(n)
                ? (i(n, 0, o), (r.hidden = !1))
                : (s(n, 0, o), (r.hidden = !0));
            })(e, t);
          });
        }
        function a(e, t) {
          let n = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (let t = 1; t < i.length; t++) {
              if (((n += i[t - 1].offsetHeight), t === e)) break;
            }
          } else {
            n = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          }
          return n;
        }
        function l(e) {
          const l = e.target,
            d = e.type;
          if ("click" === d) {
            if (l.closest("[data-showmore-button]")) {
              const e = l
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                t = e.querySelector("[data-showmore-content]"),
                n = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                r = a(e, t);
              t.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? i(t, n, r)
                  : s(t, n, r),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === d && (t.length && o(t), n.length && r(n));
        }
        e.length &&
          ((t = Array.from(e).filter(function (e, t, n) {
            return !e.dataset.showmoreMedia;
          })),
          t.length && o(t),
          document.addEventListener("click", l),
          window.addEventListener("resize", l),
          (n = p(e, "showmoreMedia")),
          n &&
            n.length &&
            (n.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              });
            }),
            r(n)));
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                i = n.dataset.goto ? n.dataset.goto : "",
                s = !!n.hasAttribute("data-goto-header"),
                r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              f(i, s, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              n = t.target;
            if ("navigator" === n.dataset.watch) {
              const e = n.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        Te = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let s,
          r = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(s),
            a >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (s = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, n))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = a <= 0 ? 0 : a);
        });
      })(),
      Ce("#calendar");
  })();
})();
