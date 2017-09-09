"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
        return pe.isFunction(t) ? pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? pe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : Ee.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return pe.each(e.match(je) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, n) {
        var i;
        try {
            e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), pe.ready()
    }

    function d() {
        this.expando = pe.expando + d.uid++
    }

    function h(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }

    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = h(n)
                } catch (e) {}
                Ie.set(e, t, n)
            } else n = void 0;
        return n
    }

    function p(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== u && +l) && We.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do r = r || ".5", c /= r, pe.style(e, t, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Ue[i];
        return o ? o : (t = n.body.appendChild(n.createElement(i)), o = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ue[i] = o, o)
    }

    function m(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = ze.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Re(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", ze.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function v(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
    }

    function b(e, t, n, i, o) {
        for (var r, s, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if (r = e[f], r || 0 === r)
                if ("object" === pe.type(r)) pe.merge(h, r.nodeType ? [r] : r);
                else if (Ve.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Xe.exec(r) || ["", ""])[1].toLowerCase(), l = Ge[a] || Ge._default, s.innerHTML = l[1] + pe.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
            pe.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = h[f++];)
            if (i && pe.inArray(r, i) > -1) o && o.push(r);
            else if (u = pe.contains(r.ownerDocument, r), s = v(d.appendChild(r), "script"), u && y(s), n)
            for (c = 0; r = s[c++];) Qe.test(r.type || "") && n.push(r);
        return d
    }

    function x() {
        return !0
    }

    function w() {
        return !1
    }

    function S() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function C(e, t, n, i, o, r) {
        var s, a;
        if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) C(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = w;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return pe().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, o, i, n)
        })
    }

    function E(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function T(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, i, o, r, s, a, l, u;
        if (1 === t.nodeType) {
            if (ze.hasData(e) && (r = ze.access(e), s = ze.set(t, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)
                    for (n = 0, i = u[o].length; n < i; n++) pe.event.add(t, o, u[o][n])
            }
            Ie.hasData(e) && (a = Ie.access(e), l = pe.extend({}, a), Ie.set(t, l))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && $e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, i, o) {
        t = oe.apply([], t);
        var r, s, a, l, u, c, d = 0,
            h = e.length,
            f = h - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || h > 1 && "string" == typeof p && !he.checkClone && nt.test(p)) return e.each(function(n) {
            var r = e.eq(n);
            g && (t[0] = p.call(this, n, r.html())), P(r, t, i, o)
        });
        if (h && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = pe.map(v(r, "script"), k), l = a.length; d < h; d++) u = r, d !== f && (u = pe.clone(u, !0, !0), l && pe.merge(a, v(u, "script"))), i.call(e[d], u, d);
            if (l)
                for (c = a[a.length - 1].ownerDocument, pe.map(a, T), d = 0; d < l; d++) u = a[d], Qe.test(u.type || "") && !ze.access(u, "globalEval") && pe.contains(c, u) && (u.src ? pe._evalUrl && pe._evalUrl(u.src) : n(u.textContent.replace(ot, ""), c))
        }
        return e
    }

    function j(e, t, n) {
        for (var i, o = t ? pe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || pe.cleanData(v(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function L(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || pe.contains(e.ownerDocument, e) || (s = pe.style(e, t)), !he.pixelMarginRight() && st.test(s) && rt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function _(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if (e = dt[n] + t, e in ht) return e
    }

    function q(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function z(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += pe.css(e, n + Oe[r], !0, o)), i ? ("content" === n && (s -= pe.css(e, "padding" + Oe[r], !0, o)), "margin" !== n && (s -= pe.css(e, "border" + Oe[r] + "Width", !0, o))) : (s += pe.css(e, "padding" + Oe[r], !0, o), "padding" !== n && (s += pe.css(e, "border" + Oe[r] + "Width", !0, o)));
        return s
    }

    function I(e, t, n) {
        var i, o = !0,
            r = at(e),
            s = "border-box" === pe.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = L(e, t, r), (i < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
            o = s && (he.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + z(e, t, n || (s ? "border" : "content"), o, r) + "px"
    }

    function F(e, t, n, i, o) {
        return new F.prototype.init(e, t, n, i, o)
    }

    function M() {
        pt && (e.requestAnimationFrame(M), pe.fx.tick())
    }

    function H() {
        return e.setTimeout(function() {
            ft = void 0
        }), ft = pe.now()
    }

    function W(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Oe[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function O(e, t, n) {
        for (var i, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function R(e, t, n) {
        var i, o, r, s, a, l, u, c, d = "width" in t || "height" in t,
            h = this,
            f = {},
            p = e.style,
            g = e.nodeType && Re(e),
            v = ze.get(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, h.always(function() {
            h.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (o = t[i], gt.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    g = !0
                }
                f[i] = v && v[i] || pe.style(e, i)
            }
        if (l = !pe.isEmptyObject(t), l || !pe.isEmptyObject(f)) {
            d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = ze.get(e, "display")), c = pe.css(e, "display"), "none" === c && (u ? c = u : (m([e], !0), u = e.style.display || u, c = pe.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === pe.css(e, "float") && (l || (h.done(function() {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = ze.access(e, "fxshow", {
                display: u
            }), r && (v.hidden = !g), g && m([e], !0), h.done(function() {
                g || m([e]), ze.remove(e, "fxshow");
                for (i in f) pe.style(e, i, f[i])
            })), l = O(g ? v[i] : 0, i, h), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function B(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = pe.camelCase(n), o = t[i], r = e[n], pe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = pe.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function U(e, t, n) {
        var i, o, r = 0,
            s = U.prefilters.length,
            a = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ft || H(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]), r < 1 && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); r < s; r++)
            if (i = U.prefilters[r].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(c, O, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function $(e) {
        var t = e.match(je) || [];
        return t.join(" ")
    }

    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Q(e, t, n, i) {
        var o;
        if (pe.isArray(t)) pe.each(t, function(t, o) {
            n || Tt.test(e) ? i(e, o) : Q(e + "[" + ("object" === ("undefined" == typeof o ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (o in t) Q(e + "[" + o + "]", t[o], n, i)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(je) || [];
            if (pe.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function V(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, pe.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = e === Mt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function Y(e, t) {
        var n, i, o = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function K(e, t, n, i) {
        var o, r, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Z(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        oe = ee.concat,
        re = ee.push,
        se = ee.indexOf,
        ae = {},
        le = ae.toString,
        ue = ae.hasOwnProperty,
        ce = ue.toString,
        de = ce.call(Object),
        he = {},
        fe = "3.1.1",
        pe = function e(t, n) {
            return new e.fn.init(t, n)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: ee.sort,
        splice: ee.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) || pe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (pe.isPlainObject(i) || (o = pe.isArray(i))) ? (o ? (o = !1, r = n && pe.isArray(n) ? n : []) : r = n && pe.isPlainObject(n) ? n : {}, s[t] = pe.extend(u, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = pe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || (n = ue.call(t, "constructor") && t.constructor, "function" == typeof n && ce.call(n) === de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? ae[le.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e)
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, n) {
            var o, r, s = 0,
                a = [];
            if (i(e))
                for (o = e.length; s < o; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function e(t, n) {
            var i, o, e;
            if ("string" == typeof n && (i = t[n], n = t, t = i), pe.isFunction(t)) return o = ie.call(arguments, 2), e = function() {
                return t.apply(n || this, o.concat(ie.call(arguments)))
            }, e.guid = t.guid = t.guid || pe.guid++, e
        },
        now: Date.now,
        support: he
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, c, h = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : O) !== _ && N(t), t = t || _, z)) {
                if (11 !== p && (l = ve.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && H(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && S.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                    }
                if (S.qsa && !X[e + " "] && (!I || !I.test(e))) {
                    if (1 !== p) h = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, Se) : t.setAttribute("id", a = W), u = T(e), r = u.length; r--;) u[r] = "#" + a + " " + f(u[r]);
                        c = u.join(","), h = ye.test(e) && d(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, h.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        a === W && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[W] = !0, e
        }

        function o(e) {
            var t = _.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function h() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var u, c, d, h = [R, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (d = t[W] || (t[W] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[r]) && u[0] === R && u[1] === a) return h[2] = u[2];
                                if (c[r] = h, h[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function v(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), u && t.push(a)));
            return s
        }

        function y(e, t, n, o, r, s) {
            return o && !o[W] && (o = y(o)), r && !r[W] && (r = y(r, s)), i(function(i, s, a, l) {
                var u, c, d, h = [],
                    f = [],
                    p = s.length,
                    g = i || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? g : v(g, h, e, a, l),
                    b = n ? r || (i ? e : p || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (u = v(b, f), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            r(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = r ? ee(i, d) : h[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else b = v(b === s ? b.splice(p, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
        }

        function b(e) {
            for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = p(function(e) {
                    return e === t
                }, s, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var o = !r && (i || n !== P) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; a < o; a++)
                if (n = C.relative[e[a].type]) c = [p(g(c), n)];
                else {
                    if (n = C.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (i = ++a; i < o && !C.relative[e[i].type]; i++);
                        return y(a > 1 && g(c), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && b(e.slice(a, i)), i < o && b(e = e.slice(i)), i < o && f(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function x(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, d, h, f = 0,
                        p = "0",
                        g = i && [],
                        m = [],
                        y = P,
                        b = i || r && C.find.TAG("*", u),
                        x = R += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (P = s === _ || s || u); p !== w && null != (c = b[p]); p++) {
                        if (r && c) {
                            for (d = 0, s || c.ownerDocument === _ || (N(c), a = !z); h = e[d++];)
                                if (h(c, s || _, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = x)
                        }
                        o && ((c = !h && c) && f--, i && g.push(c))
                    }
                    if (f += p, o && p !== f) {
                        for (d = 0; h = n[d++];) h(g, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || m[p] || (m[p] = Y.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), u && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = x, P = y), g
                };
            return o ? i(s) : s
        }
        var w, S, C, E, k, T, D, A, P, j, L, N, _, q, z, I, F, M, H, W = "sizzle" + 1 * new Date,
            O = e.document,
            R = 0,
            B = 0,
            U = n(),
            $ = n(),
            X = n(),
            Q = function(e, t) {
                return e === t && (L = !0), 0
            },
            G = {}.hasOwnProperty,
            V = [],
            Y = V.pop,
            J = V.push,
            K = V.push,
            Z = V.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            he = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Se = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                N()
            },
            Ee = p(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(V = Z.call(O.childNodes), O.childNodes), V[O.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        S = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : O;
            return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, q = _.documentElement, z = !k(_), O !== _ && (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), S.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), S.getElementsByTagName = o(function(e) {
                return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
            }), S.getElementsByClassName = me.test(_.getElementsByClassName), S.getById = o(function(e) {
                return q.appendChild(e).id = W, !_.getElementsByName || !_.getElementsByName(W).length
            }), S.getById ? (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && z) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && z) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                            if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
                    }
                    return []
                }
            }), C.find.TAG = S.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : S.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, C.find.CLASS = S.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && z) return t.getElementsByClassName(e)
            }, F = [], I = [], (S.qsa = me.test(_.querySelectorAll)) && (o(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || I.push(".#.+[+~]")
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = _.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (S.matchesSelector = me.test(M = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) {
                S.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), F.push("!=", re)
            }), I = I.length && new RegExp(I.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(q.compareDocumentPosition), H = t || me.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Q = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !S.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === O && H(O, e) ? -1 : t === _ || t.ownerDocument === O && H(O, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === _ ? -1 : t === _ ? 1 : o ? -1 : r ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === O ? -1 : l[i] === O ? 1 : 0
            }, _) : _
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== _ && N(e), n = n.replace(ce, "='$1']"), S.matchesSelector && z && !X[n + " "] && (!F || !F.test(n)) && (!I || !I.test(n))) try {
                var i = M.call(e, n);
                if (i || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, _, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && N(e), H(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== _ && N(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !z) : void 0;
            return void 0 !== i ? i : S.attributes || !z ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(we, Se)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (L = !S.detectDuplicates, j = !S.sortStable && e.slice(0), e.sort(Q), L) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return j = null, e
        }, E = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += E(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (h = t; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (h = m, d = h[W] || (h[W] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], f = u[0] === R && u[1], b = f && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++b && h === t) {
                                        c[e] = [R, f, b];
                                        break
                                    }
                            } else if (y && (h = t, d = h[W] || (h[W] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), u = c[e] || [], f = u[0] === R && u[1], b = f), b === !1)
                                for (;
                                    (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[W] || (h[W] = {}), c = d[h.uniqueID] || (d[h.uniqueID] = {}), c[e] = [R, b]), h !== t)););
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[W] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = D(e.replace(ae, "$1"));
                    return o[W] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, xe),
                        function(t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = z ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = l(w);
        return h.prototype = C.filters = C.pseudos, C.setFilters = new h, T = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, u, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = C.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : $(e, l).slice(0)
        }, D = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = X[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = b(t[n]), r[W] ? i.push(r) : o.push(r);
                r = X(e, x(o, i)), r.selector = e
            }
            return r
        }, A = t.select = function(e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                c = !i && T(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && z && C.relative[r[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(be, xe), ye.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || D(e, c))(i, t, !z, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, S.sortStable = W.split("").sort(Q).join("") === W, S.detectDuplicates = !!L, N(), S.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), S.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = be, pe.expr = be.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = be.uniqueSort, pe.text = be.getText, pe.isXMLDoc = be.isXML, pe.contains = be.contains, pe.escapeSelector = be.escape;
    var xe = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && pe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Se = pe.expr.match.needsContext,
        Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, o[t], n);
            return i > 1 ? pe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Se.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var ke, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        De = pe.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || ke, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = te.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
        };
    De.prototype = pe.fn, ke = pe(te);
    var Ae = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (pe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && pe(e);
            if (!Se.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(pe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function e(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = pe.filter(i, o)), this.length > 1 && (Pe[e] || pe.uniqueSort(o), Ae.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : pe.extend({}, e);
        var t, n, i, o, r = [],
            a = [],
            l = -1,
            u = function() {
                for (o = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            },
            c = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1, a.push(n)), function t(n) {
                        pe.each(n, function(n, i) {
                            pe.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = a = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = a = [], n || t || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, pe.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                    ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return pe.Deferred(function(t) {
                            pe.each(n, function(n, i) {
                                var o = pe.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        function r(t, n, i, o) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < s)) {
                                            if (e = i.apply(u, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, pe.isFunction(d) ? o ? d.call(e, r(s, n, a, o), r(s, n, l, o)) : (s++, d.call(e, r(s, n, a, o), r(s, n, l, o), r(s, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [e]), (o || n.resolveWith)(u, c))
                                        }
                                    },
                                    h = o ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= s && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? h() : (pe.Deferred.getStackHook && (h.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(h))
                            }
                        }
                        var s = 0;
                        return pe.Deferred(function(e) {
                            n[0][3].add(r(0, e, pe.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(r(0, e, pe.isFunction(t) ? t : a)), n[2][3].add(r(0, e, pe.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, o) : o
                    }
                },
                r = {};
            return pe.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = ie.call(arguments),
                r = pe.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject), "pending" === r.state() || pe.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) u(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ne = pe.Deferred();
    pe.fn.ready = function(e) {
        return Ne.then(e).catch(function(e) {
            pe.readyException(e)
        }), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || Ne.resolveWith(te, [pe]))
        }
    }), pe.ready.then = Ne.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var _e = function e(t, n, i, o, r, s, a) {
            var l = 0,
                u = t.length,
                c = null == i;
            if ("object" === pe.type(i)) {
                r = !0;
                for (l in i) e(t, n, l, i[l], !0, s, a)
            } else if (void 0 !== o && (r = !0, pe.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(pe(e), n)
                })), n))
                for (; l < u; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
            return r ? t : c ? n.call(t) : u ? n(t[0], i) : s
        },
        qe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[pe.camelCase(t)] = n;
            else
                for (i in t) o[pe.camelCase(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t)
        }
    };
    var ze = new d,
        Ie = new d,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Ie.hasData(e) || ze.hasData(e)
        },
        data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        removeData: function(e, t) {
            Ie.remove(e, t)
        },
        _data: function(e, t, n) {
            return ze.access(e, t, n)
        },
        _removeData: function(e, t) {
            ze.remove(e, t)
        }
    }), pe.fn.extend({
        data: function e(t, n) {
            var i, o, e, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (e = Ie.get(r), 1 === r.nodeType && !ze.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (o = s[i].name, 0 === o.indexOf("data-") && (o = pe.camelCase(o.slice(5)), f(r, o, e[o])));
                    ze.set(r, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) ? this.each(function() {
                Ie.set(this, t)
            }) : _e(this, function(e) {
                var n;
                if (r && void 0 === e) {
                    if (n = Ie.get(r, t), void 0 !== n) return n;
                    if (n = f(r, t), void 0 !== n) return n
                } else this.each(function() {
                    Ie.set(this, t, e)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ie.remove(this, e)
            })
        }
    }), pe.extend({
        queue: function e(t, n, i) {
            var e;
            if (t) return n = (n || "fx") + "queue", e = ze.get(t, n), i && (!e || pe.isArray(i) ? e = ze.access(t, n, pe.makeArray(i)) : e.push(i)), e || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = pe._queueHooks(e, t),
                s = function() {
                    pe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ze.get(e, n) || ze.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    ze.remove(e, [t + "queue", n])
                })
            })
        }
    }), pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = pe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ze.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        We = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
        },
        Be = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Ue = {};
    pe.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? pe(this).show() : pe(this).hide()
            })
        }
    });
    var $e = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ve = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment(),
            t = e.appendChild(te.createElement("div")),
            n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement,
        Je = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, h, f, p, g, m = ze.get(e);
            if (m)
                for (n.handler && (r = n, n = r.handler, o = r.selector), o && pe.find.matchesSelector(Ye, o), n.guid || (n.guid = pe.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return "undefined" != typeof pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(je) || [""], u = t.length; u--;) a = Ze.exec(t[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (d = pe.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = pe.event.special[f] || {}, c = pe.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && pe.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && d.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), pe.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, h, f, p, g, m = ze.hasData(e) && ze.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(je) || [""], u = t.length; u--;)
                    if (a = Ze.exec(t[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = pe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) c = h[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || pe.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) pe.event.remove(e, f + t[u], n, i, !0);
                pe.isEmptyObject(l) && ze.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = pe.event.fix(e),
                l = new Array(arguments.length),
                u = (ze.get(this, "events") || {})[a.type] || [],
                c = pe.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                for (s = pe.event.handlers.call(this, a, u), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? pe(o, this).index(u) > -1 : pe.find(o, this, null, [u]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== S() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === S() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && pe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, pe.event.addProp), pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || pe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, i) {
            return C(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return C(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function e(t, n, i) {
            var o, r, s, a, e = t.cloneNode(!0),
                l = pe.contains(t.ownerDocument, t);
            if (!(he.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pe.isXMLDoc(t)))
                for (a = v(e), s = v(t), o = 0, r = s.length; o < r; o++) A(s[o], a[o]);
            if (n)
                if (i)
                    for (s = s || v(t), a = a || v(e), o = 0, r = s.length; o < r; o++) D(s[o], a[o]);
                else D(t, e);
            return a = v(e, "script"), a.length > 0 && y(a, !l && v(t, "script")), e
        },
        cleanData: function(e) {
            for (var t, n, i, o = pe.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (qe(n)) {
                    if (t = n[ze.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                        n[ze.expando] = void 0
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0)
                }
        }
    }), pe.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return _e(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return _e(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = [], o = pe(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), pe(o[s])[t](n), re.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/,
        st = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(s), a = null
            }
        }
        var n, i, o, r, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), pe.extend(he, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), r
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        ht = te.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function e(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, l = pe.camelCase(n),
                    e = t.style;
                return n = pe.cssProps[l] || (pe.cssProps[l] = _(l) || l), a = pe.cssHooks[n] || pe.cssHooks[l], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(t, !1, o)) ? r : e[n] : (s = "undefined" == typeof i ? "undefined" : _typeof(i), "string" === s && (r = We.exec(i)) && r[1] && (i = p(t, n, r), s = "number"), null != i && i === i && ("number" === s && (i += r && r[3] || (pe.cssNumber[l] ? "" : "px")), he.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (e[n] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, o)) || (e[n] = i)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = _(a) || a), s = pe.cssHooks[t] || pe.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = L(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !lt.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, t, i) : Be(e, ut, function() {
                    return I(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, r = i && at(e),
                    s = i && z(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, r), r);
                return s && (o = We.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), q(e, n, s)
            }
        }
    }), pe.cssHooks.marginLeft = N(he.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Oe[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, rt.test(e) || (pe.cssHooks[e + t].set = q)
    }), pe.fn.extend({
        css: function(e, t) {
            return _e(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (pe.isArray(t)) {
                    for (i = at(e), o = t.length; s < o; s++) r[t[s]] = pe.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), pe.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = F.prototype.init, pe.fx.step = {};
    var ft, pt, gt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    pe.Animation = pe.extend(U, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, We.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [R],
            prefilter: function(e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var i = e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return pe.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = pe.isEmptyObject(e),
                    r = pe.speed(t, n, i),
                    s = function() {
                        var t = U(this, pe.extend({}, e), r);
                        (o || ze.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = pe.timers,
                        s = ze.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && mt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ze.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = pe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
            }
        }), pe.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = 0,
                n = pe.timers;
            for (ft = pe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || pe.fx.stop(), ft = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
            e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", he.radioValue = "t" === e.value
        }();
    var vt, yt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return _e(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (o = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(je);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), vt = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || pe.find.attr;
        yt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = yt[s], yt[s] = o, o = null != n(e, t, i) ? s : null, yt[s] = r), o
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return _e(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e]
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, o = pe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), he.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), pe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, X(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (o = X(n), i = 1 === n.nodeType && " " + $(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = $(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (o = X(n), i = 1 === n.nodeType && " " + $(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = $(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = "undefined" == typeof e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = pe(this), r = e.match(je) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = X(this), t && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ze.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + $(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, pe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : $(pe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = pe.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = pe.inArray(pe.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, he.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var St = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, l, u, c, d, h = [i || te],
                f = ue.call(t, "type") ? t.type : t,
                p = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !pe.isWindow(i)) {
                    for (l = d.delegateType || f, St.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || te) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, c = (ze.get(s, "events") || {})[t.type] && ze.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && qe(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !qe(i) || u && pe.isFunction(i[f]) && !pe.isWindow(i) && (a = i[u], a && (i[u] = null), pe.event.triggered = f, i[f](), pe.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t)
        }
    }), pe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), he.focusin = "onfocusin" in e, he.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ze.access(i, t);
                o || i.addEventListener(e, n, !0), ze.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ze.access(i, t) - 1;
                o ? ze.access(i, t, o) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
            }
        }
    });
    var Ct = e.location,
        Et = pe.now(),
        kt = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Tt = /\[\]$/,
        Dt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = pe.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Q(n, e[n], t, o);
        return i.join("&")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && Pt.test(this.nodeName) && !At.test(e) && (this.checked || !$e.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        Lt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Ft = {},
        Mt = {},
        Ht = "*/".concat("*"),
        Wt = te.createElement("a");
    Wt.href = Ct.href, pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: qt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, pe.ajaxSettings), t) : Y(pe.ajaxSettings, e)
        },
        ajaxPrefilter: G(Ft),
        ajaxTransport: G(Mt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, h, f, x, w, S = n;
                c || (c = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (x = J(p, C, i)), x = K(p, x, C, u), u ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (pe.lastModified[r] = w), w = C.getResponseHeader("etag"), w && (pe.etag[r] = w)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, h = x.data, f = x.error, u = !f)) : (f = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || S) + "", u ? v.resolveWith(g, [h, S, C]) : v.rejectWith(g, [C, S, f]), C.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : f]), y.fireWith(g, [C, S]), d && (m.trigger("ajaxComplete", [C, p]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, u, c, d, h, f, p = pe.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
                v = pe.Deferred(),
                y = pe.Callbacks("once memory"),
                b = p.statusCode || {},
                x = {},
                w = {},
                S = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = _t.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (v.promise(C), p.url = ((t || p.url || Ct.href) + "").replace(It, Ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(je) || [""], null == p.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), V(Ft, p, n, C), c) return C;
            d = pe.event && p.global, d && 0 === pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), r = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (f = p.url.slice(r.length), p.data && (r += (kt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (r = r.replace(Nt, "$1"), f = (kt.test(r) ? "&" : "?") + "_=" + Et++ + f), p.url = r + f), p.ifModified && (pe.lastModified[r] && C.setRequestHeader("If-Modified-Since", pe.lastModified[r]), pe.etag[r] && C.setRequestHeader("If-None-Match", pe.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) C.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(g, C, p) === !1 || c)) return C.abort();
            if (S = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = V(Mt, p, n, C)) {
                if (C.readyState = 1, d && m.trigger("ajaxSend", [C, p]), c) return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, o.send(x, i)
                } catch (e) {
                    if (c) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, o) {
            return pe.isFunction(n) && (o = o || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                pe(this).replaceWith(this.childNodes)
            }), this
        }
    }), pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e)
    }, pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, pe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ot = {
            0: 200,
            1223: 204
        },
        Rt = pe.ajaxSettings.xhr();
    he.cors = !!Rt && "withCredentials" in Rt, he.ajax = Rt = !!Rt, pe.ajaxTransport(function(t) {
        var n, i;
        if (he.cors || Rt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ot[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || pe.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + o) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || pe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? pe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && pe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), he.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (he.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Ce.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && pe(r).remove(), pe.merge([], o.childNodes))
    }, pe.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = $(e.slice(a)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.pseudos.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, u, c = pe.css(e, "position"),
                d = pe(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i, o, r = this[0];
            if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = Z(o), t = o.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(i) {
            return _e(this, function(e, i, o) {
                var r = Z(e);
                return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = N(he.pixelPosition, function(e, n) {
            if (n) return n = L(e, t), st.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || r === !0 ? "margin" : "border");
                return _e(this, function(t, n, o) {
                    var r;
                    return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? pe.css(t, n, a) : pe.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var $t = e.jQuery,
        Xt = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = Xt), t && e.jQuery === pe && (e.jQuery = $t), pe
    }, t || (e.jQuery = e.$ = pe), pe
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t, n, i) {
    e.jribbble = {};
    var o = null,
        r = "https://api.dribbble.com/v1",
        s = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"],
        a = {
            token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
            singular: function(e) {
                return e.substr(0, e.length - 1)
            },
            idRequired: function(e) {
                return "Jribbble: You have to provide a " + this.singular(e) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, e)
            },
            subResource: function(e) {
                return "Jribbble: You have to provide a " + this.singular(e) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, e)
            },
            shotId: function(e) {
                return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, e)
            },
            commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
        },
        l = function(e, t) {
            if (e && "object" !== ("undefined" == typeof e ? "undefined" : _typeof(e))) return e;
            throw new Error(a.idRequired(t))
        },
        u = function(e) {
            var t = {};
            return e.forEach(function(e) {
                t[e] = p.call(this, e)
            }.bind(this)), t
        },
        c = function(t) {
            var n = e.param(t);
            return n ? "?" + n : ""
        },
        d = function(e) {
            if (0 !== e.length) {
                var t = e[0],
                    n = "undefined" == typeof t ? "undefined" : _typeof(t),
                    i = {};
                if ("number" === n || "string" === n) {
                    var o = s.indexOf(t);
                    o > -1 ? i.list = t : i.resource = t
                } else "object" === n && (i = t);
                return i
            }
        },
        h = function() {
            var t = e.extend({}, e.Deferred()),
                n = function() {
                    return this.methods = [], this.response = null, this.flushed = !1, this.add = function(e) {
                        this.flushed ? e(this.scope) : this.methods.push(e)
                    }, this.flush = function(e) {
                        if (!this.flushed) {
                            for (this.scope = e, this.flushed = !0; this.methods[0];) this.methods.shift()(e);
                            return e
                        }
                    }, this
                };
            return t.queue = new n, t.url = r, t.get = function() {
                return o ? (e.ajax({
                    type: "GET",
                    url: this.url,
                    beforeSend: function(e) {
                        e.setRequestHeader("Authorization", "Bearer " + o)
                    },
                    success: function(e) {
                        this.resolve(e)
                    }.bind(this),
                    error: function(e) {
                        this.reject(e)
                    }.bind(this)
                }), this) : (console.error(a.token), !1)
            }, t
        },
        f = function(t) {
            return function(n) {
                return e.extend(this, h()), this.queue.add(function(e) {
                    e.url += "/" + t + "/" + n
                }), setTimeout(function() {
                    this.queue.flush(this).get()
                }.bind(this)), this
            }
        },
        p = function(e) {
            return function(t) {
                return this.queue.add(function(n) {
                    n.url += "/" + e + "/" + c(t || {})
                }), this
            }
        };
    e.jribbble.shots = function(t, n) {
        var i = d([].slice.call(arguments)) || {},
            o = n || {},
            r = function(t) {
                return function(n, i) {
                    var o = d([].slice.call(arguments)) || {},
                        r = i || {};
                    return this.queue.add(function(n) {
                        if (!n.shotId) throw new Error(a.shotId(t));
                        n.url += "/" + t + "/", o.resource && (n.url += o.resource, delete o.resource), n.url += c(e.extend(o, r))
                    }), this
                }
            },
            s = function() {
                return e.extend(this, h()), this.url += "/shots/", this.queue.add(function(t) {
                    i.resource && (t.shotId = i.resource, t.url += i.resource, delete i.resource), t.url += c(e.extend(i, o))
                }), setTimeout(function() {
                    this.queue.flush(this).get()
                }.bind(this)), this
            };
        return s.prototype.attachments = r("attachments"), s.prototype.buckets = r("buckets"), s.prototype.likes = r("likes"), s.prototype.projects = r("projects"), s.prototype.rebounds = r("rebounds"), s.prototype.comments = function(t, n) {
            var i = d([].slice.call(arguments)) || {},
                o = n || {};
            return this.queue.add(function(t) {
                if (!t.shotId) throw new Error(a.shotId("comments"));
                t.url += "/comments/", i.resource && (t.commentId = i.resource, t.url += i.resource + "/", delete i.resource), t.url += c(e.extend(i, o))
            }), this.likes = function(e) {
                var t = e || {};
                return this.queue.add(function(e) {
                    if (!e.commentId) throw new Error(a.commentLikes);
                    e.url += "likes/" + c(t)
                }), this
            }, this
        }, new s
    }, e.jribbble.teams = function(e) {
        var t = "teams",
            n = l(e, t),
            i = f.call(this, t);
        return i.prototype = u.call(this, ["members", "shots"]), new i(n)
    }, e.jribbble.users = function(e) {
        var t = "users",
            n = l(e, t),
            i = f.call(this, t);
        return i.prototype = u.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), i.prototype.isFollowing = function(e) {
            return this.queue.add(function(t) {
                t.url += "/following/" + e
            }), this
        }, new i(n)
    }, e.jribbble.buckets = function(e) {
        var t = "buckets",
            n = l(e, t),
            i = f.call(this, t);
        return i.prototype = u.call(this, ["shots"]), new i(n)
    }, e.jribbble.projects = function(e) {
        var t = "projects",
            n = l(e, t),
            i = f.call(this, t);
        return i.prototype = u.call(this, ["shots"]), new i(n)
    }, e.jribbble.setToken = function(e) {
        return o = e, this
    }
}(jQuery, window, document);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function(e, t) {
    function n(n, r, a) {
        function l(e, t, i) {
            var o, r = "$()." + n + '("' + t + '")';
            return e.each(function(e, l) {
                var u = a.data(l, n);
                if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + r);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void s(r + " is not a valid method");
                var d = c.apply(u, i);
                o = void 0 === o ? d : o
            }), void 0 !== o ? o : e
        }

        function u(e, t) {
            e.each(function(e, i) {
                var o = a.data(i, n);
                o ? (o.option(t), o._init()) : (o = new r(i, t), a.data(i, n, o))
            })
        }
        a = a || t || e.jQuery, a && (r.prototype.option || (r.prototype.option = function(e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function(e) {
            if ("string" == typeof e) {
                var t = o.call(arguments, 1);
                return l(this, e, t)
            }
            return u(this, e), this
        }, i(a))
    }

    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var o = Array.prototype.slice,
        r = e.console,
        s = "undefined" == typeof r ? function() {} : function(e) {
            r.error(e)
        };
    return i(t || e.jQuery), n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : void 0, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return i.indexOf(t) == -1 && i.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {},
                i = n[e] = n[e] || {};
            return i[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return i != -1 && n.splice(i, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = 0,
                o = n[i];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var s = r && r[o];
                s && (this.off(e, o), delete r[o]), o.apply(this, t), i += s ? 0 : 1, o = n[i]
            }
            return this
        }
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return t()
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    function e(e) {
        var t = parseFloat(e),
            n = e.indexOf("%") == -1 && !isNaN(t);
        return n && t
    }

    function t() {}

    function n() {
        for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0; t < u; t++) {
            var n = l[t];
            e[n] = 0
        }
        return e
    }

    function i(e) {
        var t = getComputedStyle(e);
        return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }

    function o() {
        if (!c) {
            c = !0;
            var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var o = i(t);
            r.isBoxSizeOuter = s = 200 == e(o.width), n.removeChild(t)
        }
    }

    function r(t) {
        if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t.nodeType) {
            var r = i(t);
            if ("none" == r.display) return n();
            var a = {};
            a.width = t.offsetWidth, a.height = t.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == r.boxSizing, d = 0; d < u; d++) {
                var h = l[d],
                    f = r[h],
                    p = parseFloat(f);
                a[h] = isNaN(p) ? 0 : p
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                x = a.borderTopWidth + a.borderBottomWidth,
                w = c && s,
                S = e(r.width);
            S !== !1 && (a.width = S + (w ? 0 : g + b));
            var C = e(r.height);
            return C !== !1 && (a.height = C + (w ? 0 : m + x)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s, a = "undefined" == typeof console ? t : function(e) {
            console.error(e)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        c = !1;
    return r
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    var e = function() {
        var e = Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n],
                o = i + "MatchesSelector";
            if (e[o]) return o
        }
    }();
    return function(t, n) {
        return t[e](n)
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function(e, t) {
    var n = {};
    n.extend = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, n.modulo = function(e, t) {
        return (e % t + t) % t
    }, n.makeArray = function(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if (e && "number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }, n.removeFrom = function(e, t) {
        var n = e.indexOf(t);
        n != -1 && e.splice(n, 1)
    }, n.getParent = function(e, n) {
        for (; e != document.body;)
            if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function(e, i) {
        e = n.makeArray(e);
        var o = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement) {
                if (!i) return void o.push(e);
                t(e, i) && o.push(e);
                for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++) o.push(n[r])
            }
        }), o
    }, n.debounceMethod = function(e, t, n) {
        var i = e.prototype[t],
            o = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[o];
            e && clearTimeout(e);
            var t = arguments,
                r = this;
            this[o] = setTimeout(function() {
                i.apply(r, t), delete r[o]
            }, n || 100)
        }
    }, n.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    };
    var i = e.console;
    return n.htmlInit = function(t, o) {
        n.docReady(function() {
            var r = n.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                u = n.makeArray(a).concat(n.makeArray(l)),
                c = s + "-options",
                d = e.jQuery;
            u.forEach(function(e) {
                var n, r = e.getAttribute(s) || e.getAttribute(c);
                try {
                    n = r && JSON.parse(r)
                } catch (t) {
                    return void(i && i.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                d && d.data(e, o, a)
            })
        })
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize))
}(window, function(e, t) {
    function n(e, t) {
        this.element = e, this.parent = t, this.create()
    }
    var i = n.prototype;
    return i.create = function() {
        this.element.style.position = "absolute", this.x = 0, this.shift = 0
    }, i.destroy = function() {
        this.element.style.position = "";
        var e = this.parent.originSide;
        this.element.style[e] = ""
    }, i.getSize = function() {
        this.size = t(this.element)
    }, i.setPosition = function(e) {
        this.x = e, this.updateTarget(), this.renderPosition(e)
    }, i.updateTarget = i.setDefaultTarget = function() {
        var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign
    }, i.renderPosition = function(e) {
        var t = this.parent.originSide;
        this.element.style[t] = this.parent.getPositionValue(e)
    }, i.wrapShift = function(e) {
        this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e)
    }, i.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t())
}(window, function() {
    function e(e) {
        this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
    }
    var t = e.prototype;
    return t.addCell = function(e) {
        if (this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = e.x;
            var t = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = e.size[t]
        }
    }, t.updateTarget = function() {
        var e = this.isOriginLeft ? "marginRight" : "marginLeft",
            t = this.getLastCell(),
            n = t ? t.size[e] : 0,
            i = this.outerWidth - (this.firstMargin + n);
        this.target = this.x + this.firstMargin + i * this.parent.cellAlign
    }, t.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, t.select = function() {
        this.changeSelectedClass("add")
    }, t.unselect = function() {
        this.changeSelectedClass("remove")
    }, t.changeSelectedClass = function(e) {
        this.cells.forEach(function(t) {
            t.element.classList[e]("is-selected")
        })
    }, t.getCellElements = function() {
        return this.cells.map(function(e) {
            return e.element
        })
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.fizzyUIUtils))
}(window, function(e, t) {
    var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
        i = 0;
    n || (n = function(e) {
        var t = (new Date).getTime(),
            n = Math.max(0, 16 - (t - i)),
            o = setTimeout(e, n);
        return i = t + n, o
    });
    var o = {};
    o.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    }, o.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var e = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
            var t = this;
            n(function() {
                t.animate()
            })
        }
    };
    var r = function() {
        var e = document.documentElement.style;
        return "string" == typeof e.transform ? "transform" : "WebkitTransform"
    }();
    return o.positionSlider = function() {
        var e = this.x;
        this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), e += this.cursorPosition, e = this.options.rightToLeft && r ? -e : e;
        var n = this.getPositionValue(e);
        this.slider.style[r] = this.isAnimating ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
        var i = this.slides[0];
        if (i) {
            var o = -this.x - i.target,
                s = o / this.slidesWidth;
            this.dispatchEvent("scroll", null, [s, o])
        }
    }, o.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target, this.positionSlider())
    }, o.getPositionValue = function(e) {
        return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
    }, o.settle = function(e) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"))
    }, o.shiftWrapCells = function(e) {
        var t = this.cursorPosition + e;
        this._shiftCells(this.beforeShiftCells, t, -1);
        var n = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, n, 1)
    }, o._shiftCells = function(e, t, n) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i],
                r = t > 0 ? n : 0;
            o.wrapShift(r), t -= o.size.outerWidth
        }
    }, o._unshiftCells = function(e) {
        if (e && e.length)
            for (var t = 0; t < e.length; t++) e[t].wrapShift(0)
    }, o.integratePhysics = function() {
        this.x += this.velocity, this.velocity *= this.getFrictionFactor()
    }, o.applyForce = function(e) {
        this.velocity += e
    }, o.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }, o.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }, o.applyDragForce = function() {
        if (this.isPointerDown) {
            var e = this.dragX - this.x,
                t = e - this.velocity;
            this.applyForce(t)
        }
    }, o.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
            var e = this.selectedSlide.target * -1 - this.x,
                t = e * this.options.selectedAttraction;
            this.applyForce(t)
        }
    }, o
}),
function(e, t) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(n, i, o, r, s, a) {
        return t(e, n, i, o, r, s, a)
    });
    else if ("object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var n = e.Flickity;
        e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype)
    }
}(window, function(e, t, n, i, o, r, s) {
    function a(e, t) {
        for (e = i.makeArray(e); e.length;) t.appendChild(e.shift())
    }

    function l(e, t) {
        var n = i.getQueryElement(e);
        if (!n) return void(d && d.error("Bad element for Flickity: " + (n || e)));
        if (this.element = n, this.element.flickityGUID) {
            var o = f[this.element.flickityGUID];
            return o.option(t), o
        }
        u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t), this._create()
    }
    var u = e.jQuery,
        c = e.getComputedStyle,
        d = e.console,
        h = 0,
        f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, l.createMethods = [];
    var p = l.prototype;
    i.extend(p, t.prototype), p._create = function() {
        var t = this.guid = ++h;
        this.element.flickityGUID = t, f[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this), l.createMethods.forEach(function(e) {
            this[e]()
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, p.option = function(e) {
        i.extend(this.options, e)
    }, p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
            var e = this._filterFindCellElements(this.element.children);
            a(e, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
            var t, n = this.options.initialIndex;
            t = this.isInitActivated ? this.selectedIndex : void 0 !== n && this.cells[n] ? n : 0, this.select(t, !1, !0), this.isInitActivated = !0
        }
    }, p._createSlider = function() {
        var e = document.createElement("div");
        e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e
    }, p._filterFindCellElements = function(e) {
        return i.filterFindElements(e, this.options.cellSelector)
    }, p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, p._makeCells = function(e) {
        var t = this._filterFindCellElements(e),
            n = t.map(function(e) {
                return new o(e, this)
            }, this);
        return n
    }, p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }, p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, p._positionCells = function(e) {
        e = e || 0, this.maxCellHeight = e ? this.maxCellHeight || 0 : 0;
        var t = 0;
        if (e > 0) {
            var n = this.cells[e - 1];
            t = n.x + n.size.outerWidth
        }
        for (var i = this.cells.length, o = e; o < i; o++) {
            var r = this.cells[o];
            r.setPosition(t), t += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
    }, p._sizeCells = function(e) {
        e.forEach(function(e) {
            e.getSize()
        })
    }, p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var e = new r(this);
            this.slides.push(e);
            var t = "left" == this.originSide,
                n = t ? "marginRight" : "marginLeft",
                i = this._getCanCellFit();
            this.cells.forEach(function(t, o) {
                if (!e.cells.length) return void e.addCell(t);
                var s = e.outerWidth - e.firstMargin + (t.size.outerWidth - t.size[n]);
                i.call(this, o, s) ? e.addCell(t) : (e.updateTarget(), e = new r(this), this.slides.push(e), e.addCell(t))
            }, this), e.updateTarget(), this.updateSelectedSlide()
        }
    }, p._getCanCellFit = function() {
        var e = this.options.groupCells;
        if (!e) return function() {
            return !1
        };
        if ("number" == typeof e) {
            var t = parseInt(e, 10);
            return function(e) {
                return e % t !== 0
            }
        }
        var n = "string" == typeof e && e.match(/^(\d+)%$/),
            i = n ? parseInt(n[1], 10) / 100 : 1;
        return function(e, t) {
            return t <= (this.size.innerWidth + 1) * i
        }
    }, p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, p.getSize = function() {
        this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var e = g[this.options.cellAlign];
        this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = e + "px"
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var e = this.cursorPosition,
                t = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1)
        }
    }, p._getGapCells = function(e, t, n) {
        for (var i = []; e > 0;) {
            var o = this.cells[t];
            if (!o) break;
            i.push(o), t += n, e -= o.size.outerWidth
        }
        return i
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var e = this.options.rightToLeft,
                t = e ? "marginRight" : "marginLeft",
                n = e ? "marginLeft" : "marginRight",
                i = this.slideableWidth - this.getLastCell().size[n],
                o = i < this.size.innerWidth,
                r = this.cursorPosition + this.cells[0].size[t],
                s = i - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(e) {
                o ? e.target = i * this.cellAlign : (e.target = Math.max(e.target, r), e.target = Math.min(e.target, s))
            }, this)
        }
    }, p.dispatchEvent = function(e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), u && this.$element) {
            e += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var o = e;
            if (t) {
                var r = u.Event(t);
                r.type = e, o = r
            }
            this.$element.trigger(o, n)
        }
    }, p.select = function(e, t, n) {
        this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = i.modulo(e, this.slides.length)), this.slides[e] && (this.selectedIndex = e, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select"), this.dispatchEvent("cellSelect")))
    }, p._wrapSelect = function(e) {
        var t = this.slides.length,
            n = this.options.wrapAround && t > 1;
        if (!n) return e;
        var o = i.modulo(e, t),
            r = Math.abs(o - this.selectedIndex),
            s = Math.abs(o + t - this.selectedIndex),
            a = Math.abs(o - t - this.selectedIndex);
        !this.isDragSelect && s < r ? e += t : !this.isDragSelect && a < r && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth)
    }, p.previous = function(e, t) {
        this.select(this.selectedIndex - 1, e, t)
    }, p.next = function(e, t) {
        this.select(this.selectedIndex + 1, e, t)
    }, p.updateSelectedSlide = function() {
        var e = this.slides[this.selectedIndex];
        e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, p.selectCell = function(e, t, n) {
        var i;
        "number" == typeof e ? i = this.cells[e] : ("string" == typeof e && (e = this.element.querySelector(e)), i = this.getCell(e));
        for (var o = 0; i && o < this.slides.length; o++) {
            var r = this.slides[o],
                s = r.cells.indexOf(i);
            if (s != -1) return void this.select(o, t, n)
        }
    }, p.getCell = function(e) {
        for (var t = 0; t < this.cells.length; t++) {
            var n = this.cells[t];
            if (n.element == e) return n
        }
    }, p.getCells = function(e) {
        e = i.makeArray(e);
        var t = [];
        return e.forEach(function(e) {
            var n = this.getCell(e);
            n && t.push(n)
        }, this), t
    }, p.getCellElements = function() {
        return this.cells.map(function(e) {
            return e.element
        })
    }, p.getParentCell = function(e) {
        var t = this.getCell(e);
        return t ? t : (e = i.getParent(e, ".flickity-slider > *"), this.getCell(e))
    }, p.getAdjacentCellElements = function(e, t) {
        if (!e) return this.selectedSlide.getCellElements();
        t = void 0 === t ? this.selectedIndex : t;
        var n = this.slides.length;
        if (1 + 2 * e >= n) return this.getCellElements();
        for (var o = [], r = t - e; r <= t + e; r++) {
            var s = this.options.wrapAround ? i.modulo(r, n) : r,
                a = this.slides[s];
            a && (o = o.concat(a.getCellElements()))
        }
        return o
    }, p.uiChange = function() {
        this.emitEvent("uiChange")
    }, p.childUIPointerDown = function(e) {
        this.emitEvent("childUIPointerDown", [e])
    }, p.onresize = function() {
        this.watchCSS(), this.resize()
    }, i.debounceMethod(l, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var e = this.selectedElements && this.selectedElements[0];
            this.selectCell(e, !1, !0)
        }
    }, p.watchCSS = function() {
        var e = this.options.watchCSS;
        if (e) {
            var t = c(this.element, ":after").content;
            t.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
        }
    }, p.onkeydown = function(e) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
            if (37 == e.keyCode) {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            } else if (39 == e.keyCode) {
            var n = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[n]()
        }
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.cells.forEach(function(e) {
            e.destroy()
        }), this.unselectSelectedSlide(), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, p.destroy = function() {
        this.deactivate(), e.removeEventListener("resize", this), this.emitEvent("destroy"), u && this.$element && u.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
    }, i.extend(p, s), l.data = function(e) {
        e = i.getQueryElement(e);
        var t = e && e.flickityGUID;
        return t && f[t]
    }, i.htmlInit(l, "flickity"), u && u.bridget && u.bridget("flickity", l), l.Cell = o, l
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter)
}(window, function(e, t) {
    function n() {}

    function i() {}
    var o = i.prototype = Object.create(t.prototype);
    o.bindStartEvent = function(e) {
        this._bindStartEvent(e, !0)
    }, o.unbindStartEvent = function(e) {
        this._bindStartEvent(e, !1)
    }, o._bindStartEvent = function(t, n) {
        n = void 0 === n || !!n;
        var i = n ? "addEventListener" : "removeEventListener";
        e.navigator.pointerEnabled ? t[i]("pointerdown", this) : e.navigator.msPointerEnabled ? t[i]("MSPointerDown", this) : (t[i]("mousedown", this), t[i]("touchstart", this))
    }, o.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.getTouch = function(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.identifier == this.pointerIdentifier) return n
        }
    }, o.onmousedown = function(e) {
        var t = e.button;
        t && 0 !== t && 1 !== t || this._pointerDown(e, e)
    }, o.ontouchstart = function(e) {
        this._pointerDown(e, e.changedTouches[0])
    }, o.onMSPointerDown = o.onpointerdown = function(e) {
        this._pointerDown(e, e)
    }, o._pointerDown = function(e, t) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
    }, o.pointerDown = function(e, t) {
        this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
    };
    var r = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"],
        MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
    };
    return o._bindPostStartEvents = function(t) {
        if (t) {
            var n = r[t.type];
            n.forEach(function(t) {
                e.addEventListener(t, this)
            }, this), this._boundPointerEvents = n
        }
    }, o._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            e.removeEventListener(t, this)
        }, this), delete this._boundPointerEvents)
    }, o.onmousemove = function(e) {
        this._pointerMove(e, e)
    }, o.onMSPointerMove = o.onpointermove = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
    }, o.ontouchmove = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerMove(e, t)
    }, o._pointerMove = function(e, t) {
        this.pointerMove(e, t)
    }, o.pointerMove = function(e, t) {
        this.emitEvent("pointerMove", [e, t])
    }, o.onmouseup = function(e) {
        this._pointerUp(e, e)
    }, o.onMSPointerUp = o.onpointerup = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
    }, o.ontouchend = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerUp(e, t)
    }, o._pointerUp = function(e, t) {
        this._pointerDone(), this.pointerUp(e, t)
    }, o.pointerUp = function(e, t) {
        this.emitEvent("pointerUp", [e, t])
    }, o._pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
    }, o.pointerDone = n, o.onMSPointerCancel = o.onpointercancel = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
    }, o.ontouchcancel = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerCancel(e, t)
    }, o._pointerCancel = function(e, t) {
        this._pointerDone(), this.pointerCancel(e, t)
    }, o.pointerCancel = function(e, t) {
        this.emitEvent("pointerCancel", [e, t])
    }, i.getPointerPoint = function(e) {
        return {
            x: e.pageX,
            y: e.pageY
        }
    }, i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer)
}(window, function(e, t) {
    function n() {}

    function i() {}
    var o = i.prototype = Object.create(t.prototype);
    o.bindHandles = function() {
        this._bindHandles(!0)
    }, o.unbindHandles = function() {
        this._bindHandles(!1)
    };
    var r = e.navigator;
    return o._bindHandles = function(e) {
        e = void 0 === e || !!e;
        var t;
        t = r.pointerEnabled ? function(t) {
            t.style.touchAction = e ? "none" : ""
        } : r.msPointerEnabled ? function(t) {
            t.style.msTouchAction = e ? "none" : ""
        } : n;
        for (var i = e ? "addEventListener" : "removeEventListener", o = 0; o < this.handles.length; o++) {
            var s = this.handles[o];
            this._bindStartEvent(s, e), t(s), s[i]("click", this)
        }
    }, o.pointerDown = function(e, t) {
        if ("INPUT" == e.target.nodeName && "range" == e.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(e, t);
        var n = document.activeElement;
        n && n.blur && n.blur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
    }, o._dragPointerDown = function(e, n) {
        this.pointerDownPoint = t.getPointerPoint(n);
        var i = this.canPreventDefaultOnPointerDown(e, n);
        i && e.preventDefault()
    }, o.canPreventDefaultOnPointerDown = function(e) {
        return "SELECT" != e.target.nodeName
    }, o.pointerMove = function(e, t) {
        var n = this._dragPointerMove(e, t);
        this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n)
    }, o._dragPointerMove = function(e, n) {
        var i = t.getPointerPoint(n),
            o = {
                x: i.x - this.pointerDownPoint.x,
                y: i.y - this.pointerDownPoint.y
            };
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(e, n), o
    }, o.hasDragStarted = function(e) {
        return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
    }, o.pointerUp = function(e, t) {
        this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
    }, o._dragPointerUp = function(e, t) {
        this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
    }, o._dragStart = function(e, n) {
        this.isDragging = !0, this.dragStartPoint = t.getPointerPoint(n), this.isPreventingClicks = !0, this.dragStart(e, n)
    }, o.dragStart = function(e, t) {
        this.emitEvent("dragStart", [e, t])
    }, o._dragMove = function(e, t, n) {
        this.isDragging && this.dragMove(e, t, n)
    }, o.dragMove = function(e, t, n) {
        e.preventDefault(), this.emitEvent("dragMove", [e, t, n])
    }, o._dragEnd = function(e, t) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(e, t)
    }, o.dragEnd = function(e, t) {
        this.emitEvent("dragEnd", [e, t])
    }, o.onclick = function(e) {
        this.isPreventingClicks && e.preventDefault()
    }, o._staticClick = function(e, t) {
        if (!this.isIgnoringMouseUp || "mouseup" != e.type) {
            var n = e.target.nodeName;
            "INPUT" != n && "TEXTAREA" != n || e.target.focus(), this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 400))
        }
    }, o.staticClick = function(e, t) {
        this.emitEvent("staticClick", [e, t])
    }, i.getPointerPoint = t.getPointerPoint, i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(n, i, o) {
        return t(e, n, i, o)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils)
}(window, function(e, t, n, i) {
    function o() {
        return {
            x: e.pageXOffset,
            y: e.pageYOffset
        }
    }
    i.extend(t.defaults, {
        draggable: !0,
        dragThreshold: 3
    }), t.createMethods.push("_createDrag");
    var r = t.prototype;
    i.extend(r, n.prototype);
    var s = "createTouch" in document,
        a = !1;
    r._createDrag = function() {
        this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), s && !a && (e.addEventListener("touchmove", function() {}), a = !0)
    }, r.bindDrag = function() {
        this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
    }, r.unbindDrag = function() {
        this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound)
    }, r._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, r._childUIPointerDownDrag = function(e) {
        e.preventDefault(), this.pointerDownFocus(e)
    };
    var l = {
            TEXTAREA: !0,
            INPUT: !0,
            OPTION: !0
        },
        u = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
    r.pointerDown = function(t, n) {
        var i = l[t.target.nodeName] && !u[t.target.type];
        if (i) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(t, n);
        var r = document.activeElement;
        r && r.blur && r != this.element && r != document.body && r.blur(), this.pointerDownFocus(t), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this._bindPostStartEvents(t), this.pointerDownScroll = o(), e.addEventListener("scroll", this), this.dispatchEvent("pointerDown", t, [n])
    };
    var c = {
            touchstart: !0,
            MSPointerDown: !0
        },
        d = {
            INPUT: !0,
            SELECT: !0
        };
    return r.pointerDownFocus = function(t) {
        if (this.options.accessibility && !c[t.type] && !d[t.target.nodeName]) {
            var n = e.pageYOffset;
            this.element.focus(), e.pageYOffset != n && e.scrollTo(e.pageXOffset, n)
        }
    }, r.canPreventDefaultOnPointerDown = function(e) {
        var t = "touchstart" == e.type,
            n = e.target.nodeName;
        return !t && "SELECT" != n
    }, r.hasDragStarted = function(e) {
        return Math.abs(e.x) > this.options.dragThreshold
    }, r.pointerUp = function(e, t) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t)
    }, r.pointerDone = function() {
        e.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, r.dragStart = function(t, n) {
        this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [n])
    }, r.pointerMove = function(e, t) {
        var n = this._dragPointerMove(e, t);
        this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n)
    }, r.dragMove = function(e, t, n) {
        e.preventDefault(), this.previousDragX = this.dragX;
        var i = this.options.rightToLeft ? -1 : 1,
            o = this.dragStartPosition + n.x * i;
        if (!this.options.wrapAround && this.slides.length) {
            var r = Math.max(-this.slides[0].target, this.dragStartPosition);
            o = o > r ? .5 * (o + r) : o;
            var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            o = o < s ? .5 * (o + s) : o
        }
        this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [t, n])
    }, r.dragEnd = function(e, t) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var n = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var i = this.getRestingPosition();
            this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target
        } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
        delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t])
    }, r.dragEndRestingSelect = function() {
        var e = this.getRestingPosition(),
            t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
            n = this._getClosestResting(e, t, 1),
            i = this._getClosestResting(e, t, -1),
            o = n.distance < i.distance ? n.index : i.index;
        return o
    }, r._getClosestResting = function(e, t, n) {
        for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) {
                return e <= t
            } : function(e, t) {
                return e < t
            }; r(t, o) && (i += n, o = t, t = this.getSlideDistance(-e, i), null !== t);) t = Math.abs(t);
        return {
            distance: o,
            index: i - n
        }
    }, r.getSlideDistance = function(e, t) {
        var n = this.slides.length,
            o = this.options.wrapAround && n > 1,
            r = o ? i.modulo(t, n) : t,
            s = this.slides[r];
        if (!s) return null;
        var a = o ? this.slideableWidth * Math.floor(t / n) : 0;
        return e - (s.target + a)
    }, r.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
        var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
            t = this.previousDragX - this.dragX;
        return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0
    }, r.staticClick = function(e, t) {
        var n = this.getParentCell(e.target),
            i = n && n.element,
            o = n && this.cells.indexOf(n);
        this.dispatchEvent("staticClick", e, [t, i, o])
    }, r.onscroll = function() {
        var e = o(),
            t = this.pointerDownScroll.x - e.x,
            n = this.pointerDownScroll.y - e.y;
        (Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone()
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer)
}(window, function(e, t) {
    function n(e) {
        this.bindTap(e)
    }
    var i = n.prototype = Object.create(t.prototype);
    return i.bindTap = function(e) {
        e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0))
    }, i.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
    }, i.pointerUp = function(n, i) {
        if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
            var o = t.getPointerPoint(i),
                r = this.tapElement.getBoundingClientRect(),
                s = e.pageXOffset,
                a = e.pageYOffset,
                l = o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a;
            if (l && this.emitEvent("tap", [n, i]), "mouseup" != n.type) {
                this.isIgnoringMouseUp = !0;
                var u = this;
                setTimeout(function() {
                    delete u.isIgnoringMouseUp
                }, 400)
            }
        }
    }, i.destroy = function() {
        this.pointerDone(), this.unbindTap()
    }, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(n, i, o) {
        return t(e, n, i, o)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils)
}(window, function(e, t, n, i) {
    function o(e, t) {
        this.direction = e, this.parent = t, this._create()
    }

    function r(e) {
        return "string" == typeof e ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
    }
    var s = "http://www.w3.org/2000/svg";
    o.prototype = new n, o.prototype._create = function() {
        this.isEnabled = !0, this.isPrevious = this.direction == -1;
        var e = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == e;
        var t = this.element = document.createElement("button");
        t.className = "flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var n = this.createSVG();
        t.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, o.prototype.activate = function() {
        this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this)
    }, o.prototype.createSVG = function() {
        var e = document.createElementNS(s, "svg");
        e.setAttribute("viewBox", "0 0 100 100");
        var t = document.createElementNS(s, "path"),
            n = r(this.parent.options.arrowShape);
        return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e
    }, o.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var e = this.isPrevious ? "previous" : "next";
            this.parent[e]()
        }
    }, o.prototype.handleEvent = i.handleEvent, o.prototype.onclick = function() {
        var e = document.activeElement;
        e && e == this.element && this.onTap()
    }, o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, o.prototype.update = function() {
        var e = this.parent.slides;
        if (this.parent.options.wrapAround && e.length > 1) return void this.enable();
        var t = e.length ? e.length - 1 : 0,
            n = this.isPrevious ? 0 : t,
            i = this.parent.selectedIndex == n ? "disable" : "enable";
        this[i]()
    }, o.prototype.destroy = function() {
        this.deactivate()
    }, i.extend(t.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), t.createMethods.push("_createPrevNextButtons");
    var a = t.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o((-1), this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
    }, a.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, t.PrevNextButton = o, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(n, i, o) {
        return t(e, n, i, o)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.TapListener, e.fizzyUIUtils)
}(window, function(e, t, n, i) {
    function o(e) {
        this.parent = e, this._create()
    }
    o.prototype = new n, o.prototype._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, o.prototype.activate = function() {
        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
    }, o.prototype.setDots = function() {
        var e = this.parent.slides.length - this.dots.length;
        e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e)
    }, o.prototype.addDots = function(e) {
        for (var t = document.createDocumentFragment(), n = []; e;) {
            var i = document.createElement("li");
            i.className = "dot", t.appendChild(i), n.push(i), e--
        }
        this.holder.appendChild(t), this.dots = this.dots.concat(n)
    }, o.prototype.removeDots = function(e) {
        var t = this.dots.splice(this.dots.length - e, e);
        t.forEach(function(e) {
            this.holder.removeChild(e)
        }, this)
    }, o.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
    }, o.prototype.onTap = function(e) {
        var t = e.target;
        if ("LI" == t.nodeName) {
            this.parent.uiChange();
            var n = this.dots.indexOf(t);
            this.parent.select(n)
        }
    }, o.prototype.destroy = function() {
        this.deactivate()
    }, t.PageDots = o, i.extend(t.defaults, {
        pageDots: !0
    }), t.createMethods.push("_createPageDots");
    var r = t.prototype;
    return r._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, r.activatePageDots = function() {
        this.pageDots.activate()
    }, r.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }, r.updatePageDots = function() {
        this.pageDots.setDots()
    }, r.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, t.PageDots = o, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(e, n, i) {
        return t(e, n, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity)
}(window, function(e, t, n) {
    function i(e) {
        this.parent = e, this.state = "stopped", r && (this.onVisibilityChange = function() {
            this.visibilityChange()
        }.bind(this), this.onVisibilityPlay = function() {
            this.visibilityPlay()
        }.bind(this))
    }
    var o, r;
    "hidden" in document ? (o = "hidden", r = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", r = "webkitvisibilitychange"), i.prototype = Object.create(e.prototype), i.prototype.play = function() {
        if ("playing" != this.state) {
            var e = document[o];
            if (r && e) return void document.addEventListener(r, this.onVisibilityPlay);
            this.state = "playing", r && document.addEventListener(r, this.onVisibilityChange), this.tick()
        }
    }, i.prototype.tick = function() {
        if ("playing" == this.state) {
            var e = this.parent.options.autoPlay;
            e = "number" == typeof e ? e : 3e3;
            var t = this;
            this.clear(), this.timeout = setTimeout(function() {
                t.parent.next(!0), t.tick()
            }, e)
        }
    }, i.prototype.stop = function() {
        this.state = "stopped", this.clear(), r && document.removeEventListener(r, this.onVisibilityChange)
    }, i.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, i.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, i.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }, i.prototype.visibilityChange = function() {
        var e = document[o];
        this[e ? "pause" : "unpause"]()
    }, i.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener(r, this.onVisibilityPlay)
    }, t.extend(n.defaults, {
        pauseAutoPlayOnHover: !0
    }), n.createMethods.push("_createPlayer");
    var s = n.prototype;
    return s._createPlayer = function() {
        this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, s.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, s.playPlayer = function() {
        this.player.play()
    }, s.stopPlayer = function() {
        this.player.stop()
    }, s.pausePlayer = function() {
        this.player.pause()
    }, s.unpausePlayer = function() {
        this.player.unpause()
    }, s.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, s.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, s.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, n.Player = i, n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(n, i) {
        return t(e, n, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils)
}(window, function(e, t, n) {
    function i(e) {
        var t = document.createDocumentFragment();
        return e.forEach(function(e) {
            t.appendChild(e.element)
        }), t
    }
    var o = t.prototype;
    return o.insert = function(e, t) {
        var n = this._makeCells(e);
        if (n && n.length) {
            var o = this.cells.length;
            t = void 0 === t ? o : t;
            var r = i(n),
                s = t == o;
            if (s) this.slider.appendChild(r);
            else {
                var a = this.cells[t].element;
                this.slider.insertBefore(r, a)
            }
            if (0 === t) this.cells = n.concat(this.cells);
            else if (s) this.cells = this.cells.concat(n);
            else {
                var l = this.cells.splice(t, o - t);
                this.cells = this.cells.concat(n).concat(l)
            }
            this._sizeCells(n);
            var u = t > this.selectedIndex ? 0 : n.length;
            this._cellAddedRemoved(t, u)
        }
    }, o.append = function(e) {
        this.insert(e, this.cells.length)
    }, o.prepend = function(e) {
        this.insert(e, 0)
    }, o.remove = function(e) {
        var t, i, o = this.getCells(e),
            r = 0,
            s = o.length;
        for (t = 0; t < s; t++) {
            i = o[t];
            var a = this.cells.indexOf(i) < this.selectedIndex;
            r -= a ? 1 : 0
        }
        for (t = 0; t < s; t++) i = o[t], i.remove(), n.removeFrom(this.cells, i);
        o.length && this._cellAddedRemoved(0, r)
    }, o._cellAddedRemoved = function(e, t) {
        t = t || 0, this.selectedIndex += t, this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)), this.cellChange(e, !0), this.emitEvent("cellAddedRemoved", [e, t])
    }, o.cellSizeChange = function(e) {
        var t = this.getCell(e);
        if (t) {
            t.getSize();
            var n = this.cells.indexOf(t);
            this.cellChange(n)
        }
    }, o.cellChange = function(e, t) {
        var n = this.slideableWidth;
        if (this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [e]), this.options.freeScroll) {
            var i = n - this.slideableWidth;
            this.x += i * this.cellAlign, this.positionSlider()
        } else t && this.positionSliderAtSelected(), this.select(this.selectedIndex)
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(n, i) {
        return t(e, n, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils)
}(window, function(e, t, n) {
    function i(e) {
        if ("IMG" == e.nodeName && e.getAttribute("data-flickity-lazyload")) return [e];
        var t = e.querySelectorAll("img[data-flickity-lazyload]");
        return n.makeArray(t)
    }

    function o(e, t) {
        this.img = e, this.flickity = t, this.load()
    }
    t.createMethods.push("_createLazyload");
    var r = t.prototype;
    return r._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }, r.lazyLoad = function() {
        var e = this.options.lazyLoad;
        if (e) {
            var t = "number" == typeof e ? e : 0,
                n = this.getAdjacentCellElements(t),
                r = [];
            n.forEach(function(e) {
                var t = i(e);
                r = r.concat(t)
            }), r.forEach(function(e) {
                new o(e, this)
            }, this)
        }
    }, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
    }, o.prototype.onload = function(e) {
        this.complete(e, "flickity-lazyloaded")
    }, o.prototype.onerror = function(e) {
        this.complete(e, "flickity-lazyerror")
    }, o.prototype.complete = function(e, t) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var n = this.flickity.getParentCell(this.img),
            i = n && n.element;
        this.flickity.cellSizeChange(i), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, i)
    }, t.LazyLoader = o, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(e) {
    return e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils)
}(window, function(e, t) {
    function n(e, t, n) {
        return (t - e) * n + e
    }
    e.createMethods.push("_createAsNavFor");
    var i = e.prototype;
    return i._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var e = this.options.asNavFor;
        if (e) {
            var t = this;
            setTimeout(function() {
                t.setNavCompanion(e)
            })
        }
    }, i.setNavCompanion = function(n) {
        n = t.getQueryElement(n);
        var i = e.data(n);
        if (i && i != this) {
            this.navCompanion = i;
            var o = this;
            this.onNavCompanionSelect = function() {
                o.navCompanionSelect()
            }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
        }
    }, i.navCompanionSelect = function(e) {
        if (this.navCompanion) {
            var t = this.navCompanion.selectedCells[0],
                i = this.navCompanion.cells.indexOf(t),
                o = i + this.navCompanion.selectedCells.length - 1,
                r = Math.floor(n(i, o, this.navCompanion.cellAlign));
            if (this.selectCell(r, !1, e), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                var s = this.cells.slice(i, o + 1);
                this.navSelectedElements = s.map(function(e) {
                    return e.element
                }), this.changeNavSelectedClass("add")
            }
        }
    }, i.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }, i.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }, i.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, i.onNavStaticClick = function(e, t, n, i) {
        "number" == typeof i && this.navCompanion.selectCell(i)
    }, i.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }, i.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(n) {
        return t(e, n)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function i(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }

    function o(e, t, r) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = n({}, this.options), "function" == typeof t ? r = t : n(this.options, t), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(e, t, r)
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var a = e.jQuery,
        l = e.console;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var o = n[i];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (i = 0; i < r.length; i++) {
                    var s = r[i];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var o = i && i[2];
                o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var n = new s(e, t);
        this.images.push(n)
    }, o.prototype.check = function() {
        function e(e, n, i) {
            setTimeout(function() {
                t.progress(e, n, i)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(e, t) {
            var n = new o(this, e, t);
            return n.jqDeferred.promise(a(this))
        })
    }, o.makeJQueryPlugin(), o
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(n, i) {
        return t(e, n, i)
    }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded)
}(window, function(e, t, n) {
    t.createMethods.push("_createImagesLoaded");
    var i = t.prototype;
    return i._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, i.imagesLoaded = function() {
        function e(e, n) {
            var i = t.getParentCell(n.img);
            t.cellSizeChange(i && i.element), t.options.freeScroll || t.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var t = this;
            n(this.slider).on("progress", e)
        }
    }, t
}),
function() {
    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, e.prototype.disable = function() {
        return this.enabled = !1, this
    }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function() {
        return this.group.next(this)
    }, e.prototype.previous = function() {
        return this.group.previous(this)
    }, e.invokeAll = function(e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var o = 0, r = t.length; o < r; o++) t[o][e]()
    }, e.destroyAll = function() {
        e.invokeAll("destroy")
    }, e.disableAll = function() {
        e.invokeAll("disable")
    }, e.enableAll = function() {
        e.invokeAll("enable")
    }, e.refreshAll = function() {
        e.Context.refreshAll()
    }, e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),
function() {
    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }

    function t(e) {
        this.element = e, this.Adapter = o.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        o = window.Waypoint,
        r = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, t.prototype.handleScroll = function() {
        var e = {},
            t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in t) {
            var i = t[n],
                o = i.newScroll > i.oldScroll,
                r = o ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s],
                    l = i.oldScroll < a.triggerPoint,
                    u = i.newScroll >= a.triggerPoint,
                    c = l && u,
                    d = !l && !u;
                (c || d) && (a.queueTrigger(r), e[a.group.id] = a.group)
            }
        }
        for (var h in e) e[h].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }, t.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, t.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, o = e.length; i < o; i++) e[i].destroy()
    }, t.prototype.refresh = function() {
        var e, t = this.element == this.element.window,
            n = t ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in e) {
            var s = e[r];
            for (var a in this.waypoints[r]) {
                var l, u, c, d, h, f = this.waypoints[r][a],
                    p = f.options.offset,
                    g = f.triggerPoint,
                    m = 0,
                    v = null == g;
                f.element !== f.element.window && (m = f.adapter.offset()[s.offsetProp]), "function" == typeof p ? p = p.apply(f) : "string" == typeof p && (p = parseFloat(p), f.options.offset.indexOf("%") > -1 && (p = Math.ceil(s.contextDimension * p / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = m + l - p, u = g < s.oldScroll, c = f.triggerPoint >= s.oldScroll, d = u && c, h = !u && !c, !v && d ? (f.queueTrigger(s.backward), i[f.group.id] = f.group) : !v && h ? (f.queueTrigger(s.forward), i[f.group.id] = f.group) : v && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), i[f.group.id] = f.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var e in i) i[e].flushTriggers()
        }), this
    }, t.findOrCreateByElement = function(e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function() {
        for (var e in i) i[e].refresh()
    }, t.findByElement = function(e) {
        return i[e.waypointContextKey]
    }, window.onload = function() {
        r && r(), t.refreshAll()
    }, o.requestAnimationFrame = function(t) {
        var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
        n.call(window, t)
    }, o.Context = t
}(),
function() {
    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function n(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;
    n.prototype.add = function(e) {
        this.waypoints.push(e)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                o = "up" === n || "left" === n;
            i.sort(o ? t : e);
            for (var r = 0, s = i.length; r < s; r += 1) {
                var a = i[r];
                (a.options.continuous || r === i.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints),
            i = n === this.waypoints.length - 1;
        return i ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }, n.prototype.remove = function(e) {
        var t = o.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(e) {
        return i[e.axis][e.name] || new n(e)
    }, o.Group = n
}(),
function() {
    function e(e) {
        this.$element = t(e)
    }
    var t = window.jQuery,
        n = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, n) {
        e.prototype[n] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, e)
        }
    }), t.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
        e[i] = t[i]
    }), n.adapters.push({
        name: "jquery",
        Adapter: e
    }), n.Adapter = e
}(),
function() {
    function e(e) {
        return function() {
            var n = [],
                i = arguments[0];
            return e.isFunction(arguments[0]) && (i = e.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                var o = e.extend({}, i, {
                    element: this
                });
                "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]), n.push(new t(o))
            }), n
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function() {
    function e() {}

    function t(e) {
        this.options = n.Adapter.extend({}, t.defaults, e), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints()
    }
    var n = window.Waypoint;
    t.prototype.createWaypoints = function() {
        for (var e = {
                vertical: [{
                    down: "enter",
                    up: "exited",
                    offset: "100%"
                }, {
                    down: "entered",
                    up: "exit",
                    offset: "bottom-in-view"
                }, {
                    down: "exit",
                    up: "entered",
                    offset: 0
                }, {
                    down: "exited",
                    up: "enter",
                    offset: function() {
                        return -this.adapter.outerHeight()
                    }
                }],
                horizontal: [{
                    right: "enter",
                    left: "exited",
                    offset: "100%"
                }, {
                    right: "entered",
                    left: "exit",
                    offset: "right-in-view"
                }, {
                    right: "exit",
                    left: "entered",
                    offset: 0
                }, {
                    right: "exited",
                    left: "enter",
                    offset: function() {
                        return -this.adapter.outerWidth()
                    }
                }]
            }, t = 0, n = e[this.axis].length; t < n; t++) {
            var i = e[this.axis][t];
            this.createWaypoint(i)
        }
    }, t.prototype.createWaypoint = function(e) {
        var t = this;
        this.waypoints.push(new n({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: function(e) {
                return function(n) {
                    t.options[e[n]].call(t, n)
                }
            }(e),
            offset: e.offset,
            horizontal: this.options.horizontal
        }))
    }, t.prototype.destroy = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].destroy();
        this.waypoints = []
    }, t.prototype.disable = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].disable()
    }, t.prototype.enable = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].enable()
    }, t.defaults = {
        context: window,
        enabled: !0,
        enter: e,
        entered: e,
        exit: e,
        exited: e
    }, n.Inview = t
}(), $(function() {
    function e() {}

    function t() {
        h.fillStyle = "rgba(0,0,0,.5)", h.fillRect(0,0, p, g), f.forEach(function(e) {
            e.draw()
        }), v += 100, window.requestAnimationFrame(t)
    }

    function n(e) {
        m.x = e.touches ? e.touches[0].clientX : e.clientX, m.y = e.touches ? e.touches[0].clientY : e.clientY
    }

    function i() {
        for (var i = 0; i < c; i++) setTimeout(function() {
            var t = (new e).init();
            f.push(t)
        }, 10 * i);
        d.addEventListener("mousemove", n), d.addEventListener("touchmove", n), d.addEventListener("mouseleave", function() {
            m = {
                x: p / 2,
                y: g / 2
            }
        }), window.addEventListener("resize", function() {
            p = d.width = window.innerWidth, g = d.height = window.innerHeight, m = {
                x: p / 2,
                y: g / 2
            }
        }), t()
    }
    var o, r = Math.random,
        s = Math.atan2,
        a = Math.cos,
        l = Math.sin,
        u = Math.hypot,
        c = 200,
        d = document.querySelector("#teaserOverlay"),
        h = d.getContext("2d"),
		
        f = (document.body, []),
        p = d.width = window.innerWidth,
        g = d.height = window.innerHeight,
        m = {
            x: p / 2,
            y: g / 2
        },
        v = 0;
    e.prototype = {
        init: function() {
            return this.hue = v, this.alpha = 0, this.size = 1, this.x = this.random(123,p), this.y = this.random(0, g), this.velocity = .5 * this.size, this.changed = null, this.changedFrame = 0, this.maxChangedFrames = 50, this
        },
        draw: function() {
            h.fillStyle = "hsla(" + this.hue + ", 25%,10%, " + this.alpha + ")", h.beginPath(), h.arc(this.x, this.y, this.size, 0, 2 * Math.PI), h.fill(), this.update()
        },
        update: function() {
            if (this.changed) this.alpha *= .5, this.changedFrame++, this.changedFrame > this.maxChangedFrames && this.reset();
            else if (this.distance(m.x, m.y) < 10) this.changed = !0;
            else {
                var e = m.x - this.x,
                    t = m.y - this.y,
                    n = s(t, e);
                this.alpha += .01, this.x += this.velocity * a(n), this.y += this.velocity * l(n), this.velocity += .02
            }
        },
        reset: function() {
            this.init()
        },
        distance: function(e, t) {
            return u(e - this.x, t - this.y)
        },
        random: function(e, t) {
            return r() * (t - e) + e
        }
    }, i(), $.jribbble.setToken("2436518deac736cbcdf145c359fb78db1ea983e46701fbf01496df7476565866"), o = function() {
        return $.jribbble.users("ramesh").shots({
            per_page: 8
        }).then(function(e) {
            var t;
            return t = [], $.each(e, function(e, n) {
                return console.log(n), t.push("<li>"), t.push('<a href="' + n.html_url + '">'), t.push('<img src="' + n.images.teaser + '" '), t.push('alt="' + n.title + '"></a></li>'), t.push("</li>")
            }), $("#dribbble_shots").html(t.join(""))
        })
    }, $("[role=navigation] a, .teaser .button").click(function() {
        var e;
        return e = $("body").find($(this).attr("href").split("/").pop()), $("html, body").animate({
            scrollTop: e.offset().top
        }, 750), !1
    }), $(".contact-me .button").click(function() {
        return mixpanel.track("Contact button clicked")
    }), $("#btn_contact_submit").click(function() {
        return mixpanel.track("Contact form submitted")
    }), $(document).ready(function() {
        o();
     
        e("work", "index--work"), e("testimonials", "index--testimonials"), e("about", "index--about"), e("skills", "index--skills"), e("contact", "index--contact");
        return $("#testimonials_slider").flickity({
            contain: !0,
            parallax: !0,
            wrapAround: !0,
            adaptiveHeight: !0,
            prevNextButtons: !1
        })
    })
});