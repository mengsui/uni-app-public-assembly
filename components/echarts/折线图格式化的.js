!
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
} (this,
function(t) {
    "use strict";
    function e(t) {
        var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);
        return i && (n.firefox = !0, n.version = i[1]),
        r && (n.ie = !0, n.version = r[1]),
        a && (n.edge = !0, n.version = a[1]),
        o && (n.weChat = !0),
        {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
            pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
            domSupported: "undefined" != typeof document
        }
    }
    function n(t, e) {
        "createCanvas" === t && (mf = null),
        gf[t] = e
    }
    function i(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t,
        n = lf.call(t);
        if ("[object Array]" === n) {
            if (!R(t)) {
                e = [];
                for (var r = 0,
                a = t.length; a > r; r++) e[r] = i(t[r])
            }
        } else if (sf[n]) {
            if (!R(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t);
                else {
                    e = new o(t.length);
                    for (var r = 0,
                    a = t.length; a > r; r++) e[r] = i(t[r])
                }
            }
        } else if (!of[n] && !R(t) && !I(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
        }
        return e
    }
    function r(t, e, n) {
        if (!M(e) || !M(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a],
            s = e[a]; ! M(s) || !M(o) || x(s) || x(o) || I(s) || I(o) || S(s) || S(o) || R(s) || R(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
        }
        return t
    }
    function a(t, e) {
        for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
        return n
    }
    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    function s(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }
    function l() {
        return mf || (mf = vf().getContext("2d")),
        mf
    }
    function u(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0,
            i = t.length; i > n; n++) if (t[n] === e) return n
        }
        return - 1
    }
    function h(t, e) {
        function n() {}
        var i = t.prototype;
        n.prototype = e.prototype,
        t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t,
        t.superClass = e
    }
    function c(t, e, n) {
        t = "prototype" in t ? t.prototype: t,
        e = "prototype" in e ? e.prototype: e,
        s(t, e, n)
    }
    function d(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length: void 0
    }
    function f(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === hf) t.forEach(e, n);
        else if (t.length === +t.length) for (var i = 0,
        r = t.length; r > i; i++) e.call(n, t[i], i, t);
        else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }
    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === ff) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }
    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === pf) return t.reduce(e, n, i);
            for (var r = 0,
            a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }
    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === cf) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }
    function m(t, e, n) {
        if (t && e) for (var i = 0,
        r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i]
    }
    function y(t, e) {
        var n = df.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(df.call(arguments)))
        }
    }
    function _(t) {
        var e = df.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(df.call(arguments)))
        }
    }
    function x(t) {
        return "[object Array]" === lf.call(t)
    }
    function w(t) {
        return "function" == typeof t
    }
    function b(t) {
        return "[object String]" === lf.call(t)
    }
    function M(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" === e
    }
    function S(t) {
        return !! of[lf.call(t)]
    }
    function T(t) {
        return !! sf[lf.call(t)]
    }
    function I(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }
    function C(t) {
        return t !== t
    }
    function k() {
        for (var t = 0,
        e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t]
    }
    function D(t, e) {
        return null != t ? t: e
    }
    function A(t, e, n) {
        return null != t ? t: null != e ? e: n
    }
    function L() {
        return Function.call.apply(df, arguments)
    }
    function P(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }
    function O(t, e) {
        if (!t) throw new Error(e)
    }
    function N(t) {
        return null == t ? null: "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    function E(t) {
        t[yf] = !0
    }
    function R(t) {
        return t[yf]
    }
    function B(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }
        var n = x(t);
        this.data = {};
        var i = this;
        t instanceof B ? t.each(e) : t && f(t, e)
    }
    function z(t) {
        return new B(t)
    }
    function F(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        var r = t.length;
        for (i = 0; i < e.length; i++) n[i + r] = e[i];
        return n
    }
    function V() {}
    function W(t, e) {
        var n = new xf(2);
        return null == t && (t = 0),
        null == e && (e = 0),
        n[0] = t,
        n[1] = e,
        n
    }
    function H(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t
    }
    function G(t) {
        var e = new xf(2);
        return e[0] = t[0],
        e[1] = t[1],
        e
    }
    function X(t, e, n) {
        return t[0] = e,
        t[1] = n,
        t
    }
    function Y(t, e, n) {
        return t[0] = e[0] + n[0],
        t[1] = e[1] + n[1],
        t
    }
    function q(t, e, n, i) {
        return t[0] = e[0] + n[0] * i,
        t[1] = e[1] + n[1] * i,
        t
    }
    function j(t, e, n) {
        return t[0] = e[0] - n[0],
        t[1] = e[1] - n[1],
        t
    }
    function Z(t) {
        return Math.sqrt(U(t))
    }
    function U(t) {
        return t[0] * t[0] + t[1] * t[1]
    }
    function $(t, e, n) {
        return t[0] = e[0] * n[0],
        t[1] = e[1] * n[1],
        t
    }
    function K(t, e, n) {
        return t[0] = e[0] / n[0],
        t[1] = e[1] / n[1],
        t
    }
    function Q(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }
    function J(t, e, n) {
        return t[0] = e[0] * n,
        t[1] = e[1] * n,
        t
    }
    function te(t, e) {
        var n = Z(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n),
        t
    }
    function ee(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }
    function ne(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }
    function ie(t, e) {
        return t[0] = -e[0],
        t[1] = -e[1],
        t
    }
    function re(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]),
        t[1] = e[1] + i * (n[1] - e[1]),
        t
    }
    function ae(t, e, n) {
        var i = e[0],
        r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4],
        t[1] = n[1] * i + n[3] * r + n[5],
        t
    }
    function oe(t, e, n) {
        return t[0] = Math.min(e[0], n[0]),
        t[1] = Math.min(e[1], n[1]),
        t
    }
    function se(t, e, n) {
        return t[0] = Math.max(e[0], n[0]),
        t[1] = Math.max(e[1], n[1]),
        t
    }
    function le() {
        this.on("mousedown", this._dragStart, this),
        this.on("mousemove", this._drag, this),
        this.on("mouseup", this._dragEnd, this),
        this.on("globalout", this._dragEnd, this)
    }
    function ue(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        }
    }
    function he(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)),
        e
    }
    function ce(t, e, n, i, r, a) {
        var o = t._$handlers;
        if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;
        n = he(t, n),
        o[e] || (o[e] = []);
        for (var s = 0; s < o[e].length; s++) if (o[e][s].h === i) return t;
        var l = {
            h: i,
            one: a,
            query: n,
            ctx: r || t,
            callAtLast: i.zrEventfulCallAtLast
        },
        u = o[e].length - 1,
        h = o[e][u];
        return h && h.callAtLast ? o[e].splice(u, 0, l) : o[e].push(l),
        t
    }
    function de(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }
    function fe(t, e, n, i) {
        return n = n || {},
        i || !af.canvasSupported ? pe(t, e, n) : af.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : pe(t, e, n),
        n
    }
    function pe(t, e, n) {
        var i = de(t);
        n.zrX = e.clientX - i.left,
        n.zrY = e.clientY - i.top
    }
    function ge(t, e, n) {
        if (e = e || window.event, null != e.zrX) return e;
        var i = e.type,
        r = i && i.indexOf("touch") >= 0;
        if (r) {
            var a = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            a && fe(t, a, e, n)
        } else fe(t, e, e, n),
        e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && Df.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        e
    }
    function ve(t, e, n) {
        kf ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }
    function me(t, e, n) {
        kf ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }
    function ye(t) {
        return 2 === t.which || 3 === t.which
    }
    function _e(t) {
        var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }
    function xe(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }
    function we(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: be
        }
    }
    function be() {
        Af(this.event)
    }
    function Me() {}
    function Se(t, e, n) {
        if (t[t.rectHover ? "rectContain": "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return ! 1;
                r.silent && (i = !0),
                r = r.parent
            }
            return i ? Of: !0
        }
        return ! 1
    }
    function Te() {
        var t = new Rf(6);
        return Ie(t),
        t
    }
    function Ie(t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t[4] = 0,
        t[5] = 0,
        t
    }
    function Ce(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t
    }
    function ke(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i,
        t[1] = r,
        t[2] = a,
        t[3] = o,
        t[4] = s,
        t[5] = l,
        t
    }
    function De(t, e, n) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4] + n[0],
        t[5] = e[5] + n[1],
        t
    }
    function Ae(t, e, n) {
        var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(n),
        h = Math.cos(n);
        return t[0] = i * h + o * u,
        t[1] = -i * u + o * h,
        t[2] = r * h + s * u,
        t[3] = -r * u + h * s,
        t[4] = h * a + u * l,
        t[5] = h * l - u * a,
        t
    }
    function Le(t, e, n) {
        var i = n[0],
        r = n[1];
        return t[0] = e[0] * i,
        t[1] = e[1] * r,
        t[2] = e[2] * i,
        t[3] = e[3] * r,
        t[4] = e[4] * i,
        t[5] = e[5] * r,
        t
    }
    function Pe(t, e) {
        var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
    }
    function Oe(t) {
        var e = Te();
        return Ce(e, t),
        e
    }
    function Ne(t) {
        return t > Ff || -Ff > t
    }
    function Ee(t) {
        this._target = t.target,
        this._life = t.life || 1e3,
        this._delay = t.delay || 0,
        this._initialized = !1,
        this.loop = null == t.loop ? !1 : t.loop,
        this.gap = t.gap || 0,
        this.easing = t.easing || "Linear",
        this.onframe = t.onframe,
        this.ondestroy = t.ondestroy,
        this.onrestart = t.onrestart,
        this._pausedTime = 0,
        this._paused = !1
    }
    function Re(t) {
        return t = Math.round(t),
        0 > t ? 0 : t > 255 ? 255 : t
    }
    function Be(t) {
        return t = Math.round(t),
        0 > t ? 0 : t > 360 ? 360 : t
    }
    function ze(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }
    function Fe(t) {
        return Re(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }
    function Ve(t) {
        return ze(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }
    function We(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1),
        1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e: 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    function He(t, e, n) {
        return t + (e - t) * n
    }
    function Ge(t, e, n, i, r) {
        return t[0] = e,
        t[1] = n,
        t[2] = i,
        t[3] = r,
        t
    }
    function Xe(t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
    }
    function Ye(t, e) {
        Jf && Xe(Jf, e),
        Jf = Qf.put(t, Jf || e.slice())
    }
    function qe(t, e) {
        if (t) {
            e = e || [];
            var n = Qf.get(t);
            if (n) return Xe(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in Kf) return Xe(e, Kf[i]),
            Ye(t, e),
            e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("),
                a = i.indexOf(")");
                if ( - 1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r),
                    s = i.substr(r + 1, a - (r + 1)).split(","),
                    l = 1;
                    switch (o) {
                    case "rgba":
                        if (4 !== s.length) return void Ge(e, 0, 0, 0, 1);
                        l = Ve(s.pop());
                    case "rgb":
                        return 3 !== s.length ? void Ge(e, 0, 0, 0, 1) : (Ge(e, Fe(s[0]), Fe(s[1]), Fe(s[2]), l), Ye(t, e), e);
                    case "hsla":
                        return 4 !== s.length ? void Ge(e, 0, 0, 0, 1) : (s[3] = Ve(s[3]), je(s, e), Ye(t, e), e);
                    case "hsl":
                        return 3 !== s.length ? void Ge(e, 0, 0, 0, 1) : (je(s, e), Ye(t, e), e);
                    default:
                        return
                    }
                }
                Ge(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) {
                    var u = parseInt(i.substr(1), 16);
                    return u >= 0 && 4095 >= u ? (Ge(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Ye(t, e), e) : void Ge(e, 0, 0, 0, 1)
                }
                if (7 === i.length) {
                    var u = parseInt(i.substr(1), 16);
                    return u >= 0 && 16777215 >= u ? (Ge(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Ye(t, e), e) : void Ge(e, 0, 0, 0, 1)
                }
            }
        }
    }
    function je(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = Ve(t[1]),
        r = Ve(t[2]),
        a = .5 >= r ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;
        return e = e || [],
        Ge(e, Re(255 * We(o, a, n + 1 / 3)), Re(255 * We(o, a, n)), Re(255 * We(o, a, n - 1 / 3)), 1),
        4 === t.length && (e[3] = t[3]),
        e
    }
    function Ze(t) {
        if (t) {
            var e, n, i = t[0] / 255,
            r = t[1] / 255,
            a = t[2] / 255,
            o = Math.min(i, r, a),
            s = Math.max(i, r, a),
            l = s - o,
            u = (s + o) / 2;
            if (0 === l) e = 0,
            n = 0;
            else {
                n = .5 > u ? l / (s + o) : l / (2 - s - o);
                var h = ((s - i) / 6 + l / 2) / l,
                c = ((s - r) / 6 + l / 2) / l,
                d = ((s - a) / 6 + l / 2) / l;
                i === s ? e = d - c: r === s ? e = 1 / 3 + h - d: a === s && (e = 2 / 3 + c - h),
                0 > e && (e += 1),
                e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]),
            f
        }
    }
    function Ue(t, e) {
        var n = qe(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0,
            n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return en(n, 4 === n.length ? "rgba": "rgb")
        }
    }
    function $e(t) {
        var e = qe(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }
    function Ke(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1),
            r = Math.floor(i),
            a = Math.ceil(i),
            o = e[r],
            s = e[a],
            l = i - r;
            return n[0] = Re(He(o[0], s[0], l)),
            n[1] = Re(He(o[1], s[1], l)),
            n[2] = Re(He(o[2], s[2], l)),
            n[3] = ze(He(o[3], s[3], l)),
            n
        }
    }
    function Qe(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1),
            r = Math.floor(i),
            a = Math.ceil(i),
            o = qe(e[r]),
            s = qe(e[a]),
            l = i - r,
            u = en([Re(He(o[0], s[0], l)), Re(He(o[1], s[1], l)), Re(He(o[2], s[2], l)), ze(He(o[3], s[3], l))], "rgba");
            return n ? {
                color: u,
                leftIndex: r,
                rightIndex: a,
                value: i
            }: u
        }
    }
    function Je(t, e, n, i) {
        return t = qe(t),
        t ? (t = Ze(t), null != e && (t[0] = Be(e)), null != n && (t[1] = Ve(n)), null != i && (t[2] = Ve(i)), en(je(t), "rgba")) : void 0
    }
    function tn(t, e) {
        return t = qe(t),
        t && null != e ? (t[3] = ze(e), en(t, "rgba")) : void 0
    }
    function en(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]),
            e + "(" + n + ")"
        }
    }
    function nn(t, e) {
        return t[e]
    }
    function rn(t, e, n) {
        t[e] = n
    }
    function an(t, e, n) {
        return (e - t) * n + t
    }
    function on(t, e, n) {
        return n > .5 ? e: t
    }
    function sn(t, e, n, i, r) {
        var a = t.length;
        if (1 === r) for (var o = 0; a > o; o++) i[o] = an(t[o], e[o], n);
        else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) i[o][l] = an(t[o][l], e[o][l], n)
    }
    function ln(t, e, n) {
        var i = t.length,
        r = e.length;
        if (i !== r) {
            var a = i > r;
            if (a) t.length = r;
            else for (var o = i; r > o; o++) t.push(1 === n ? e[o] : ip.call(e[o]))
        }
        for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
        else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
    }
    function un(t, e, n) {
        if (t === e) return ! 0;
        var i = t.length;
        if (i !== e.length) return ! 1;
        if (1 === n) {
            for (var r = 0; i > r; r++) if (t[r] !== e[r]) return ! 1
        } else for (var a = t[0].length, r = 0; i > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return ! 1;
        return ! 0
    }
    function hn(t, e, n, i, r, a, o, s, l) {
        var u = t.length;
        if (1 === l) for (var h = 0; u > h; h++) s[h] = cn(t[h], e[h], n[h], i[h], r, a, o);
        else for (var c = t[0].length, h = 0; u > h; h++) for (var d = 0; c > d; d++) s[h][d] = cn(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o)
    }
    function cn(t, e, n, i, r, a, o) {
        var s = .5 * (n - t),
        l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + ( - 3 * (e - n) - 2 * s - l) * a + s * r + e
    }
    function dn(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(ip.call(t[i]));
                return n
            }
            return ip.call(t)
        }
        return t
    }
    function fn(t) {
        return t[0] = Math.floor(t[0]),
        t[1] = Math.floor(t[1]),
        t[2] = Math.floor(t[2]),
        "rgba(" + t.join(",") + ")"
    }
    function pn(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1
    }
    function gn(t, e, n, i, r, a) {
        var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        u = i.length;
        if (u) {
            var h, c = i[0].value,
            f = d(c),
            p = !1,
            g = !1,
            v = f ? pn(i) : 0;
            i.sort(function(t, e) {
                return t.time - e.time
            }),
            h = i[u - 1].time;
            for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
                m.push(i[w].time / h);
                var b = i[w].value;
                if (f && un(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
                    var M = qe(b);
                    M ? (b = M, p = !0) : g = !0
                }
                y.push(b)
            }
            if (a || !x) {
                for (var S = y[u - 1], w = 0; u - 1 > w; w++) f ? ln(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);
                f && ln(o(t._target, r), S, v);
                var T, I, C, k, D, A, L = 0,
                P = 0;
                if (p) var O = [0, 0, 0, 0];
                var N = function(t, e) {
                    var n;
                    if (0 > e) n = 0;
                    else if (P > e) {
                        for (T = Math.min(L + 1, u - 1), n = T; n >= 0 && !(m[n] <= e); n--);
                        n = Math.min(n, u - 2)
                    } else {
                        for (n = L; u > n && !(m[n] > e); n++);
                        n = Math.min(n - 1, u - 2)
                    }
                    L = n,
                    P = e;
                    var i = m[n + 1] - m[n];
                    if (0 !== i) if (I = (e - m[n]) / i, l) if (k = y[n], C = y[0 === n ? n: n - 1], D = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) hn(C, k, D, A, I, I * I, I * I * I, o(t, r), v);
                    else {
                        var a;
                        if (p) a = hn(C, k, D, A, I, I * I, I * I * I, O, 1),
                        a = fn(O);
                        else {
                            if (g) return on(k, D, I);
                            a = cn(C, k, D, A, I, I * I, I * I * I)
                        }
                        s(t, r, a)
                    } else if (f) sn(y[n], y[n + 1], I, o(t, r), v);
                    else {
                        var a;
                        if (p) sn(y[n], y[n + 1], I, O, 1),
                        a = fn(O);
                        else {
                            if (g) return on(y[n], y[n + 1], I);
                            a = an(y[n], y[n + 1], I)
                        }
                        s(t, r, a)
                    }
                },
                E = new Ee({
                    target: t._target,
                    life: h,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: N,
                    ondestroy: n
                });
                return e && "spline" !== e && (E.easing = e),
                E
            }
        }
    }
    function vn(t, e, n, i, r, a, o, s) {
        function l() {
            h--,
            h || a && a()
        }
        b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500),
        t.stopAnimation(),
        mn(t, "", t, e, n, i, s);
        var u = t.animators.slice(),
        h = u.length;
        h || a && a();
        for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o)
    }
    function mn(t, e, n, i, r, a, o) {
        var s = {},
        l = 0;
        for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? M(i[u]) && !d(i[u]) ? mn(t, e ? e + "." + u: u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], yn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || yn(t, e, u, i[u]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
    }
    function yn(t, e, n, i) {
        if (e) {
            var r = {};
            r[e] = {},
            r[e][n] = i,
            t.attr(r)
        } else t.attr(n, i)
    }
    function _n(t, e, n, i) {
        0 > n && (t += n, n = -n),
        0 > i && (e += i, i = -i),
        this.x = t,
        this.y = e,
        this.width = n,
        this.height = i
    }
    function xn(t) {
        for (var e = 0; t >= vp;) e |= 1 & t,
        t >>= 1;
        return t + e
    }
    function wn(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
            bn(t, e, r)
        } else for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }
    function bn(t, e, n) {
        for (n--; n > e;) {
            var i = t[e];
            t[e++] = t[n],
            t[n--] = i
        }
    }
    function Mn(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1,
            r(o, t[a]) < 0 ? l = a: s = a + 1;
            var u = i - s;
            switch (u) {
            case 3:
                t[s + 3] = t[s + 2];
            case 2:
                t[s + 2] = t[s + 1];
            case 1:
                t[s + 1] = t[s];
                break;
            default:
                for (; u > 0;) t[s + u] = t[s + u - 1],
                u--
            }
            t[s] = o
        }
    }
    function Sn(t, e, n, i, r, a) {
        var o = 0,
        s = 0,
        l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l,
            l = (l << 1) + 1,
            0 >= l && (l = s);
            l > s && (l = s),
            o += r,
            l += r
        } else {
            for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l,
            l = (l << 1) + 1,
            0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l,
            l = r - u
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) > 0 ? o = h + 1 : l = h
        }
        return l
    }
    function Tn(t, e, n, i, r, a) {
        var o = 0,
        s = 0,
        l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l,
            l = (l << 1) + 1,
            0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l,
            l = r - u
        } else {
            for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l,
            l = (l << 1) + 1,
            0 >= l && (l = s);
            l > s && (l = s),
            o += r,
            l += r
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) < 0 ? l = h: o = h + 1
        }
        return l
    }
    function In(t, e) {
        function n(t, e) {
            l[c] = t,
            u[c] = e,
            c += 1
        }
        function i() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;
                else if (u[t] > u[t + 1]) break;
                a(t)
            }
        }
        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && u[t - 1] < u[t + 1] && t--,
                a(t)
            }
        }
        function a(n) {
            var i = l[n],
            r = u[n],
            a = l[n + 1],
            h = u[n + 1];
            u[n] = r + h,
            n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]),
            c--;
            var d = Tn(t[a], t, i, r, 0, e);
            i += d,
            r -= d,
            0 !== r && (h = Sn(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)))
        }
        function o(n, i, r, a) {
            var o = 0;
            for (o = 0; i > o; o++) d[o] = t[n + o];
            var s = 0,
            l = r,
            u = n;
            if (t[u++] = t[l++], 0 !== --a) {
                if (1 === i) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    return void(t[u + a] = d[s])
                }
                for (var c, f, p, g = h;;) {
                    c = 0,
                    f = 0,
                    p = !1;
                    do
                    if (e(t[l], d[s]) < 0) {
                        if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                            p = !0;
                            break
                        }
                    } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
                        p = !0;
                        break
                    }
                    while (g > (c | f));
                    if (p) break;
                    do {
                        if (c = Tn(t[l], d, s, i, 0, e), 0 !== c) {
                            for (o = 0; c > o; o++) t[u + o] = d[s + o];
                            if (u += c, s += c, i -= c, 1 >= i) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = t[l++], 0 === --a) {
                            p = !0;
                            break
                        }
                        if (f = Sn(d[s], t, l, a, 0, e), 0 !== f) {
                            for (o = 0; f > o; o++) t[u + o] = t[l + o];
                            if (u += f, l += f, a -= f, 0 === a) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = d[s++], 1 === --i) {
                            p = !0;
                            break
                        }
                        g--
                    } while ( c >= mp || f >= mp );
                    if (p) break;
                    0 > g && (g = 0),
                    g += 2
                }
                if (h = g, 1 > h && (h = 1), 1 === i) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    t[u + a] = d[s]
                } else {
                    if (0 === i) throw new Error;
                    for (o = 0; i > o; o++) t[u + o] = d[s + o]
                }
            } else for (o = 0; i > o; o++) t[u + o] = d[s + o]
        }
        function s(n, i, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) d[o] = t[r + o];
            var s = n + i - 1,
            l = a - 1,
            u = r + a - 1,
            c = 0,
            f = 0;
            if (t[u--] = t[s--], 0 !== --i) {
                if (1 === a) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    return void(t[u] = d[l])
                }
                for (var p = h;;) {
                    var g = 0,
                    v = 0,
                    m = !1;
                    do
                    if (e(d[l], t[s]) < 0) {
                        if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                            m = !0;
                            break
                        }
                    } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
                        m = !0;
                        break
                    }
                    while (p > (g | v));
                    if (m) break;
                    do {
                        if (g = i - Tn(d[l], t, n, i, i - 1, e), 0 !== g) {
                            for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
                            if (0 === i) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = d[l--], 1 === --a) {
                            m = !0;
                            break
                        }
                        if (v = a - Sn(t[s], d, 0, a, a - 1, e), 0 !== v) {
                            for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
                            if (1 >= a) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = t[s--], 0 === --i) {
                            m = !0;
                            break
                        }
                        p--
                    } while ( g >= mp || v >= mp );
                    if (m) break;
                    0 > p && (p = 0),
                    p += 2
                }
                if (h = p, 1 > h && (h = 1), 1 === a) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    t[u] = d[l]
                } else {
                    if (0 === a) throw new Error;
                    for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
                }
            } else for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }
        var l, u, h = mp,
        c = 0,
        d = [];
        l = [],
        u = [],
        this.mergeRuns = i,
        this.forceMergeRuns = r,
        this.pushRun = n
    }
    function Cn(t, e, n, i) {
        n || (n = 0),
        i || (i = t.length);
        var r = i - n;
        if (! (2 > r)) {
            var a = 0;
            if (vp > r) return a = wn(t, n, i, e),
            void Mn(t, n, i, n + a, e);
            var o = new In(t, e),
            s = xn(r);
            do {
                if (a = wn(t, n, i, e), s > a) {
                    var l = r;
                    l > s && (l = s),
                    Mn(t, n, n + l, n + a, e),
                    a = l
                }
                o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
            } while ( 0 !== r );
            o.forceMergeRuns()
        }
    }
    function kn(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2: t.z - e.z: t.zlevel - e.zlevel
    }
    function Dn(t, e, n) {
        var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;
        e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y),
        i = isNaN(i) ? 0 : i,
        r = isNaN(r) ? 1 : r,
        a = isNaN(a) ? 0 : a,
        o = isNaN(o) ? 0 : o;
        var s = t.createLinearGradient(i, a, r, o);
        return s
    }
    function An(t, e, n) {
        var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;
        e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
        var u = t.createRadialGradient(o, s, 0, o, s, l);
        return u
    }
    function Ln() {
        return ! 1
    }
    function Pn(t, e, n) {
        var i = vf(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)),
        i.width = r * n,
        i.height = a * n,
        i
    }
    function On(t) {
        if ("string" == typeof t) {
            var e = Lp.get(t);
            return e && e.image
        }
        return t
    }
    function Nn(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var a = Lp.get(t),
                o = {
                    hostEl: n,
                    cb: i,
                    cbPayload: r
                };
                return a ? (e = a.image, !Rn(e) && a.pending.push(o)) : (e = new Image, e.onload = e.onerror = En, Lp.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }), e.src = e.__zrImageSrc = t),
                e
            }
            return t
        }
        return e
    }
    function En() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e],
            i = n.cb;
            i && i(this, n.cbPayload),
            n.hostEl.dirty()
        }
        t.pending.length = 0
    }
    function Rn(t) {
        return t && t.width && t.height
    }
    function Bn(t, e) {
        e = e || Rp;
        var n = t + ":" + e;
        if (Pp[n]) return Pp[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Un(i[a], e).width, r);
        return Op > Np && (Op = 0, Pp = {}),
        Op++,
        Pp[n] = r,
        r
    }
    function zn(t, e, n, i, r, a, o, s) {
        return o ? Vn(t, e, n, i, r, a, o, s) : Fn(t, e, n, i, r, a, s)
    }
    function Fn(t, e, n, i, r, a, o) {
        var s = $n(t, e, r, a, o),
        l = Bn(t, e);
        r && (l += r[1] + r[3]);
        var u = s.outerHeight,
        h = Wn(0, l, n),
        c = Hn(0, u, i),
        d = new _n(h, c, l, u);
        return d.lineHeight = s.lineHeight,
        d
    }
    function Vn(t, e, n, i, r, a, o, s) {
        var l = Kn(t, {
            rich: o,
            truncate: s,
            font: e,
            textAlign: n,
            textPadding: r,
            textLineHeight: a
        }),
        u = l.outerWidth,
        h = l.outerHeight,
        c = Wn(0, u, n),
        d = Hn(0, h, i);
        return new _n(c, d, u, h)
    }
    function Wn(t, e, n) {
        return "right" === n ? t -= e: "center" === n && (t -= e / 2),
        t
    }
    function Hn(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e),
        t
    }
    function Gn(t, e, n) {
        var i = e.x,
        r = e.y,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = "left",
        u = "top";
        switch (t) {
        case "left":
            i -= n,
            r += s,
            l = "right",
            u = "middle";
            break;
        case "right":
            i += n + o,
            r += s,
            u = "middle";
            break;
        case "top":
            i += o / 2,
            r -= n,
            l = "center",
            u = "bottom";
            break;
        case "bottom":
            i += o / 2,
            r += a + n,
            l = "center";
            break;
        case "inside":
            i += o / 2,
            r += s,
            l = "center",
            u = "middle";
            break;
        case "insideLeft":
            i += n,
            r += s,
            u = "middle";
            break;
        case "insideRight":
            i += o - n,
            r += s,
            l = "right",
            u = "middle";
            break;
        case "insideTop":
            i += o / 2,
            r += n,
            l = "center";
            break;
        case "insideBottom":
            i += o / 2,
            r += a - n,
            l = "center",
            u = "bottom";
            break;
        case "insideTopLeft":
            i += n,
            r += n;
            break;
        case "insideTopRight":
            i += o - n,
            r += n,
            l = "right";
            break;
        case "insideBottomLeft":
            i += n,
            r += a - n,
            u = "bottom";
            break;
        case "insideBottomRight":
            i += o - n,
            r += a - n,
            l = "right",
            u = "bottom"
        }
        return {
            x: i,
            y: r,
            textAlign: l,
            textVerticalAlign: u
        }
    }
    function Xn(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = Yn(e, n, i, r);
        for (var o = 0,
        s = a.length; s > o; o++) a[o] = qn(a[o], r);
        return a.join("\n")
    }
    function Yn(t, e, n, i) {
        i = o({},
        i),
        i.font = e;
        var n = D(n, "...");
        i.maxIterations = D(i.maxIterations, 2);
        var r = i.minChar = D(i.minChar, 0);
        i.cnCharWidth = Bn("国", e);
        var a = i.ascCharWidth = Bn("a", e);
        i.placeholder = D(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
        var u = Bn(n, e);
        return u > s && (n = "", u = 0),
        s = t - u,
        i.ellipsis = n,
        i.ellipsisWidth = u,
        i.contentWidth = s,
        i.containerWidth = t,
        i
    }
    function qn(t, e) {
        var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;
        if (!n) return "";
        var a = Bn(t, i);
        if (n >= a) return t;
        for (var o = 0;; o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? jn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            t = t.substr(0, s),
            a = Bn(t, i)
        }
        return "" === t && (t = e.placeholder),
        t
    }
    function jn(t, e, n, i) {
        for (var r = 0,
        a = 0,
        o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? n: i
        }
        return a
    }
    function Zn(t) {
        return Bn("国", t)
    }
    function Un(t, e) {
        return Bp.measureText(t, e)
    }
    function $n(t, e, n, i, r) {
        null != t && (t += "");
        var a = D(i, Zn(e)),
        o = t ? t.split("\n") : [],
        s = o.length * a,
        l = s;
        if (n && (l += n[0] + n[2]), t && r) {
            var u = r.outerHeight,
            h = r.outerWidth;
            if (null != u && l > u) t = "",
            o = [];
            else if (null != h) for (var c = Yn(h - (n ? n[1] + n[3] : 0), e, r.ellipsis, {
                minChar: r.minChar,
                placeholder: r.placeholder
            }), d = 0, f = o.length; f > d; d++) o[d] = qn(o[d], c)
        }
        return {
            lines: o,
            height: s,
            outerHeight: l,
            lineHeight: a
        }
    }
    function Kn(t, e) {
        var n = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return n;
        for (var i, r = Ep.lastIndex = 0; null != (i = Ep.exec(t));) {
            var a = i.index;
            a > r && Qn(n, t.substring(r, a)),
            Qn(n, i[2], i[1]),
            r = Ep.lastIndex
        }
        r < t.length && Qn(n, t.substring(r, t.length));
        var o = n.lines,
        s = 0,
        l = 0,
        u = [],
        h = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;
        h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var _ = g.tokens[y],
                x = _.styleName && e.rich[_.styleName] || {},
                w = _.textPadding = x.textPadding,
                b = _.font = x.font || e.font,
                M = _.textHeight = D(x.textHeight, Zn(b));
                if (w && (M += w[0] + w[2]), _.height = M, _.lineHeight = A(x.textLineHeight, e.textLineHeight, M), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                _.textWidth = Bn(_.text, b);
                var S = x.textWidth,
                T = null == S || "auto" === S;
                if ("string" == typeof S && "%" === S.charAt(S.length - 1)) _.percentWidth = S,
                u.push(_),
                S = 0;
                else {
                    if (T) {
                        S = _.textWidth;
                        var I = x.textBackgroundColor,
                        C = I && I.image;
                        C && (C = On(C), Rn(C) && (S = Math.max(S, C.width * M / C.height)))
                    }
                    var k = w ? w[1] + w[3] : 0;
                    S += k;
                    var L = null != d ? d - m: null;
                    null != L && S > L && (!T || k > L ? (_.text = "", _.textWidth = S = 0) : (_.text = Xn(_.text, L - k, b, c.ellipsis, {
                        minChar: c.minChar
                    }), _.textWidth = Bn(_.text, b), S = _.textWidth + k))
                }
                m += _.width = S,
                x && (v = Math.max(v, _.lineHeight))
            }
            g.width = m,
            g.lineHeight = v,
            s += v,
            l = Math.max(l, m)
        }
        n.outerWidth = n.width = D(e.textWidth, l),
        n.outerHeight = n.height = D(e.textHeight, s),
        h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
        for (var p = 0; p < u.length; p++) {
            var _ = u[p],
            P = _.percentWidth;
            _.width = parseInt(P, 10) / 100 * l
        }
        return n
    }
    function Qn(t, e, n) {
        for (var i = "" === e,
        r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o],
            l = {
                styleName: n,
                text: s,
                isLineHolder: !s && !i
            };
            if (o) a.push({
                tokens: [l]
            });
            else {
                var u = (a[a.length - 1] || (a[0] = {
                    tokens: []
                })).tokens,
                h = u.length;
                1 === h && u[0].isLineHolder ? u[0] = l: (s || !h || i) && u.push(l)
            }
        }
    }
    function Jn(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && N(e) || t.textFont || t.font
    }
    function ti(t, e) {
        var n, i, r, a, o = e.x,
        s = e.y,
        l = e.width,
        u = e.height,
        h = e.r;
        0 > l && (o += l, l = -l),
        0 > u && (s += u, u = -u),
        "number" == typeof h ? n = i = r = a = h: h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c),
        r + a > l && (c = r + a, r *= l / c, a *= l / c),
        i + r > u && (c = i + r, i *= u / c, r *= u / c),
        n + a > u && (c = n + a, n *= u / c, a *= u / c),
        t.moveTo(o + n, s),
        t.lineTo(o + l - i, s),
        0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0),
        t.lineTo(o + l, s + u - r),
        0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2),
        t.lineTo(o + a, s + u),
        0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI),
        t.lineTo(o, s + n),
        0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }
    function ei(t) {
        return ni(t),
        f(t.rich, ni),
        t
    }
    function ni(t) {
        if (t) {
            t.font = Jn(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"),
            t.textAlign = null == e || Fp[e] ? e: "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"),
            t.textVerticalAlign = null == n || Vp[n] ? n: "top";
            var i = t.textPadding;
            i && (t.textPadding = P(t.textPadding))
        }
    }
    function ii(t, e, n, i, r, a) {
        i.rich ? ai(t, e, n, i, r, a) : ri(t, e, n, i, r, a)
    }
    function ri(t, e, n, i, r, a) {
        var o, s = ui(i),
        l = !1,
        u = e.__attrCachedBy === wp.PLAIN_TEXT;
        a !== bp ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? wp.NONE: wp.PLAIN_TEXT) : u && (e.__attrCachedBy = wp.NONE);
        var h = i.font || zp;
        l && h === (o.font || zp) || (e.font = h);
        var c = t.__computedFont;
        t.__styleFont !== h && (t.__styleFont = h, c = t.__computedFont = e.font);
        var d = i.textPadding,
        f = i.textLineHeight,
        p = t.__textCotentBlock; (!p || t.__dirtyText) && (p = t.__textCotentBlock = $n(n, c, d, f, i.truncate));
        var g = p.outerHeight,
        v = p.lines,
        m = p.lineHeight,
        y = di(g, i, r),
        _ = y.baseX,
        x = y.baseY,
        w = y.textAlign || "left",
        b = y.textVerticalAlign;
        si(e, i, r, _, x);
        var M = Hn(x, g, b),
        S = _,
        T = M;
        if (s || d) {
            var I = Bn(n, c),
            C = I;
            d && (C += d[1] + d[3]);
            var k = Wn(_, C, w);
            s && hi(t, e, i, k, M, C, g),
            d && (S = mi(_, w, d), T += d[0])
        }
        e.textAlign = w,
        e.textBaseline = "middle",
        e.globalAlpha = i.opacity || 1;
        for (var D = 0; D < Wp.length; D++) {
            var A = Wp[D],
            L = A[0],
            P = A[1],
            O = i[L];
            l && O === o[L] || (e[P] = xp(e, P, O || A[2]))
        }
        T += m / 2;
        var N = i.textStrokeWidth,
        E = l ? o.textStrokeWidth: null,
        R = !l || N !== E,
        B = !l || R || i.textStroke !== o.textStroke,
        z = pi(i.textStroke, N),
        F = gi(i.textFill);
        if (z && (R && (e.lineWidth = N), B && (e.strokeStyle = z)), F && (l && i.textFill === o.textFill || (e.fillStyle = F)), 1 === v.length) z && e.strokeText(v[0], S, T),
        F && e.fillText(v[0], S, T);
        else for (var D = 0; D < v.length; D++) z && e.strokeText(v[D], S, T),
        F && e.fillText(v[D], S, T),
        T += m
    }
    function ai(t, e, n, i, r, a) {
        a !== bp && (e.__attrCachedBy = wp.NONE);
        var o = t.__textCotentBlock; (!o || t.__dirtyText) && (o = t.__textCotentBlock = Kn(n, i)),
        oi(t, e, o, i, r)
    }
    function oi(t, e, n, i, r) {
        var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        u = di(s, i, r),
        h = u.baseX,
        c = u.baseY,
        d = u.textAlign,
        f = u.textVerticalAlign;
        si(e, i, r, h, c);
        var p = Wn(h, o, d),
        g = Hn(c, s, f),
        v = p,
        m = g;
        l && (v += l[3], m += l[0]);
        var y = v + a;
        ui(i) && hi(t, e, i, p, g, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, T = w.width, I = 0, C = v, k = y, D = M - 1; M > I && (x = b[I], !x.textAlign || "left" === x.textAlign);) li(t, e, x, i, S, m, C, "left"),
            T -= x.width,
            C += x.width,
            I++;
            for (; D >= 0 && (x = b[D], "right" === x.textAlign);) li(t, e, x, i, S, m, k, "right"),
            T -= x.width,
            k -= x.width,
            D--;
            for (C += (a - (C - v) - (y - k) - T) / 2; D >= I;) x = b[I],
            li(t, e, x, i, S, m, C + x.width / 2, "center"),
            C += x.width,
            I++;
            m += S
        }
    }
    function si(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y),
            t.translate(i, r),
            t.rotate( - e.textRotation),
            t.translate( - i, -r)
        }
    }
    function li(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var u = n.textVerticalAlign,
        h = a + r / 2;
        "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2),
        !n.isLineHolder && ui(l) && hi(t, e, l, "right" === s ? o - n.width: "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (o = mi(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2),
        fi(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)),
        fi(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"),
        fi(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)),
        fi(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)),
        fi(e, "textAlign", s),
        fi(e, "textBaseline", "middle"),
        fi(e, "font", n.font || zp);
        var d = pi(l.textStroke || i.textStroke, p),
        f = gi(l.textFill || i.textFill),
        p = D(l.textStrokeWidth, i.textStrokeWidth);
        d && (fi(e, "lineWidth", p), fi(e, "strokeStyle", d), e.strokeText(n.text, o, h)),
        f && (fi(e, "fillStyle", f), e.fillText(n.text, o, h))
    }
    function ui(t) {
        return !! (t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
    }
    function hi(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        u = n.textBorderColor,
        h = b(s);
        if (fi(e, "shadowBlur", n.textBoxShadowBlur || 0), fi(e, "shadowColor", n.textBoxShadowColor || "transparent"), fi(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), fi(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? ti(e, {
                x: i,
                y: r,
                width: a,
                height: o,
                r: c
            }) : e.rect(i, r, a, o),
            e.closePath()
        }
        if (h) if (fi(e, "fillStyle", s), null != n.fillOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = n.fillOpacity * n.opacity,
            e.fill(),
            e.globalAlpha = d
        } else e.fill();
        else if (M(s)) {
            var f = s.image;
            f = Nn(f, null, t, ci, s),
            f && Rn(f) && e.drawImage(f, i, r, a, o)
        }
        if (l && u) if (fi(e, "lineWidth", l), fi(e, "strokeStyle", u), null != n.strokeOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = n.strokeOpacity * n.opacity,
            e.stroke(),
            e.globalAlpha = d
        } else e.stroke()
    }
    function ci(t, e) {
        e.image = t
    }
    function di(t, e, n) {
        var i = e.x || 0,
        r = e.y || 0,
        a = e.textAlign,
        o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + vi(s[0], n.width),
            r = n.y + vi(s[1], n.height);
            else {
                var l = Gn(s, n, e.textDistance);
                i = l.x,
                r = l.y,
                a = a || l.textAlign,
                o = o || l.textVerticalAlign
            }
            var u = e.textOffset;
            u && (i += u[0], r += u[1])
        }
        return {
            baseX: i,
            baseY: r,
            textAlign: a,
            textVerticalAlign: o
        }
    }
    function fi(t, e, n) {
        return t[e] = xp(t, e, n),
        t[e]
    }
    function pi(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null: t.image || t.colorStops ? "#000": t
    }
    function gi(t) {
        return null == t || "none" === t ? null: t.image || t.colorStops ? "#000": t
    }
    function vi(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e: parseFloat(t) : t
    }
    function mi(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }
    function yi(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }
    function _i(t) {
        t = t || {},
        cp.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new Sp(t.style, this),
        this._rect = null,
        this.__clipPaths = []
    }
    function xi(t) {
        _i.call(this, t)
    }
    function wi(t) {
        return parseInt(t, 10)
    }
    function bi(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }
    function Mi(t, e, n) {
        return Zp.copy(t.getBoundingRect()),
        t.transform && Zp.applyTransform(t.transform),
        Up.width = e,
        Up.height = n,
        !Zp.intersect(Up)
    }
    function Si(t, e) {
        if (t === e) return ! 1;
        if (!t || !e || t.length !== e.length) return ! 0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return ! 0
    }
    function Ti(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e),
            e.beginPath(),
            i.buildPath(e, i.shape),
            e.clip(),
            i.restoreTransform(e)
        }
    }
    function Ii(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
        n
    }
    function Ci(t) {
        return "mousewheel" === t && af.browser.firefox ? "DOMMouseScroll": t
    }
    function ki(t) {
        t._touching = !0,
        clearTimeout(t._touchTimer),
        t._touchTimer = setTimeout(function() {
            t._touching = !1
        },
        700)
    }
    function Di(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }
    function Ai(t) {
        function e(t, e) {
            return function() {
                return e._touching ? void 0 : t.apply(e, arguments)
            }
        }
        f(tg,
        function(e) {
            t._handlers[e] = y(ig[e], t)
        }),
        f(ng,
        function(e) {
            t._handlers[e] = y(ig[e], t)
        }),
        f(Jp,
        function(n) {
            t._handlers[n] = e(ig[n], t)
        })
    }
    function Li(t) {
        function e(e, n) {
            f(e,
            function(e) {
                ve(t, Ci(e), n._handlers[e])
            },
            n)
        }
        Cf.call(this),
        this.dom = t,
        this._touching = !1,
        this._touchTimer,
        this._handlers = {},
        Ai(this),
        af.pointerEventsSupported ? e(ng, this) : (af.touchEventsSupported && e(tg, this), e(Jp, this))
    }
    function Pi(t, e) {
        var n = new ug(nf(), t, e);
        return sg[n.id] = n,
        n
    }
    function Oi(t) {
        if (t) t.dispose();
        else {
            for (var e in sg) sg.hasOwnProperty(e) && sg[e].dispose();
            sg = {}
        }
        return this
    }
    function Ni(t) {
        return sg[t]
    }
    function Ei(t, e) {
        og[t] = e
    }
    function Ri(t) {
        delete sg[t]
    }
    function Bi(t) {
        return t instanceof Array ? t: null == t ? [] : [t]
    }
    function zi(t, e, n) {
        if (t) {
            t[e] = t[e] || {},
            t.emphasis = t.emphasis || {},
            t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0,
            r = n.length; r > i; i++) {
                var a = n[i]; ! t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }
    function Fi(t) {
        return ! dg(t) || fg(t) || t instanceof Date ? t: t.value
    }
    function Vi(t) {
        return dg(t) && !(t instanceof Array)
    }
    function Wi(t, e) {
        e = (e || []).slice();
        var n = p(t || [],
        function(t) {
            return {
                exist: t
            }
        });
        return cg(e,
        function(t, i) {
            if (dg(t)) {
                for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t,
                void(e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (! (n[r].option || null != a.id && null != t.id || null == t.name || Xi(t) || Xi(a) || a.name !== t.name + "")) return n[r].option = t,
                    void(e[i] = null)
                }
            }
        }),
        cg(e,
        function(t) {
            if (dg(t)) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e].exist;
                    if (!n[e].option && !Xi(i) && null == t.id) {
                        n[e].option = t;
                        break
                    }
                }
                e >= n.length && n.push({
                    option: t
                })
            }
        }),
        n
    }
    function Hi(t) {
        var e = z();
        cg(t,
        function(t) {
            var n = t.exist;
            n && e.set(n.id, t)
        }),
        cg(t,
        function(t) {
            var n = t.option;
            O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)),
            n && null != n.id && e.set(n.id, t),
            !t.keyInfo && (t.keyInfo = {})
        }),
        cg(t,
        function(t, n) {
            var i = t.exist,
            r = t.option,
            a = t.keyInfo;
            if (dg(r)) {
                if (a.name = null != r.name ? r.name + "": i ? i.name: pg + n, i) a.id = i.id;
                else if (null != r.id) a.id = r.id + "";
                else {
                    var o = 0;
                    do a.id = "\x00" + a.name + "\x00" + o++;
                    while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }
    function Gi(t) {
        var e = t.name;
        return ! (!e || !e.indexOf(pg))
    }
    function Xi(t) {
        return dg(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
    }
    function Yi(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside: null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex,
        function(e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name,
        function(e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }
    function qi() {
        var t = "__\x00ec_inner_" + vg+++"_" + Math.random().toFixed(5);
        return function(e) {
            return e[t] || (e[t] = {})
        }
    }
    function ji(t, e, n) {
        if (b(e)) {
            var i = {};
            i[e + "Index"] = 0,
            e = i
        }
        var r = n && n.defaultMainType; ! r || Zi(e, r + "Index") || Zi(e, r + "Id") || Zi(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return cg(e,
        function(i, r) {
            var i = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
            s = o[1],
            l = (o[2] || "").toLowerCase();
            if (! (!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
                var h = {
                    mainType: s
                }; ("index" !== l || "all" !== i) && (h[l] = i);
                var c = t.queryComponents(h);
                a[s + "Models"] = c,
                a[s + "Model"] = c[0]
            }
        }),
        a
    }
    function Zi(t, e) {
        return t && t.hasOwnProperty(e)
    }
    function Ui(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }
    function $i(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }
    function Ki(t) {
        return "auto" === t ? af.domSupported ? "html": "richText": t || "html"
    }
    function Qi(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(mg), e.main = t[0] || "", e.sub = t[1] || ""),
        e
    }
    function Ji(t) {
        O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }
    function tr(t) {
        t.$constructor = t,
        t.extend = function(t) {
            var e = this,
            n = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(n.prototype, t),
            n.extend = this.extend,
            n.superCall = nr,
            n.superApply = ir,
            h(n, this),
            n.superClass = e,
            n
        }
    }
    function er(t) {
        var e = ["__\x00is_clz", _g++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0,
        t.isInstance = function(t) {
            return ! (!t || !t[e])
        }
    }
    function nr(t, e) {
        var n = L(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }
    function ir(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }
    function rr(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[yg] || (e = i[t.main] = {},
            e[yg] = !0),
            e
        }
        e = e || {};
        var i = {};
        if (t.registerClass = function(t, e) {
            if (e) if (Ji(e), e = Qi(e), e.sub) {
                if (e.sub !== yg) {
                    var r = n(e);
                    r[e.sub] = t
                }
            } else i[e.main] = t;
            return t
        },
        t.getClass = function(t, e, n) {
            var r = i[t];
            if (r && r[yg] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first.": t + ".type should be specified.");
            return r
        },
        t.getClassesByMainType = function(t) {
            t = Qi(t);
            var e = [],
            n = i[t.main];
            return n && n[yg] ? f(n,
            function(t, n) {
                n !== yg && e.push(t)
            }) : e.push(n),
            e
        },
        t.hasClass = function(t) {
            return t = Qi(t),
            !!i[t.main]
        },
        t.getAllClassMainTypes = function() {
            var t = [];
            return f(i,
            function(e, n) {
                t.push(n)
            }),
            t
        },
        t.hasSubTypes = function(t) {
            t = Qi(t);
            var e = i[t.main];
            return e && e[yg]
        },
        t.parseClassType = Qi, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function(e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }
    function ar(t) {
        return t > -Cg && Cg > t
    }
    function or(t) {
        return t > Cg || -Cg > t
    }
    function sr(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
    }
    function lr(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
    }
    function ur(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        u = t - r,
        h = s * s - 3 * o * l,
        c = s * l - 9 * o * u,
        d = l * l - 3 * s * u,
        f = 0;
        if (ar(h) && ar(c)) if (ar(s)) a[0] = 0;
        else {
            var p = -l / s;
            p >= 0 && 1 >= p && (a[f++] = p)
        } else {
            var g = c * c - 4 * h * d;
            if (ar(g)) {
                var v = c / h,
                p = -s / o + v,
                m = -v / 2;
                p >= 0 && 1 >= p && (a[f++] = p),
                m >= 0 && 1 >= m && (a[f++] = m)
            } else if (g > 0) {
                var y = Ig(g),
                _ = h * s + 1.5 * o * ( - c + y),
                x = h * s + 1.5 * o * ( - c - y);
                _ = 0 > _ ? -Tg( - _, Ag) : Tg(_, Ag),
                x = 0 > x ? -Tg( - x, Ag) : Tg(x, Ag);
                var p = ( - s - (_ + x)) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p)
            } else {
                var w = (2 * h * s - 3 * o * c) / (2 * Ig(h * h * h)),
                b = Math.acos(w) / 3,
                M = Ig(h),
                S = Math.cos(b),
                p = ( - s - 2 * M * S) / (3 * o),
                m = ( - s + M * (S + Dg * Math.sin(b))) / (3 * o),
                T = ( - s + M * (S - Dg * Math.sin(b))) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p),
                m >= 0 && 1 >= m && (a[f++] = m),
                T >= 0 && 1 >= T && (a[f++] = T)
            }
        }
        return f
    }
    function hr(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;
        if (ar(o)) {
            if (or(a)) {
                var u = -s / a;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = a * a - 4 * o * s;
            if (ar(h)) r[0] = -a / (2 * o);
            else if (h > 0) {
                var c = Ig(h),
                u = ( - a + c) / (2 * o),
                d = ( - a - c) / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u),
                d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }
    function cr(t, e, n, i, r, a) {
        var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u;
        a[0] = t,
        a[1] = o,
        a[2] = u,
        a[3] = c,
        a[4] = c,
        a[5] = h,
        a[6] = l,
        a[7] = i
    }
    function dr(t, e, n, i, r, a, o, s, l, u, h) {
        var c, d, f, p, g, v = .005,
        m = 1 / 0;
        Lg[0] = l,
        Lg[1] = u;
        for (var y = 0; 1 > y; y += .05) Pg[0] = sr(t, n, r, o, y),
        Pg[1] = sr(e, i, a, s, y),
        p = Sf(Lg, Pg),
        m > p && (c = y, m = p);
        m = 1 / 0;
        for (var _ = 0; 32 > _ && !(kg > v); _++) d = c - v,
        f = c + v,
        Pg[0] = sr(t, n, r, o, d),
        Pg[1] = sr(e, i, a, s, d),
        p = Sf(Pg, Lg),
        d >= 0 && m > p ? (c = d, m = p) : (Og[0] = sr(t, n, r, o, f), Og[1] = sr(e, i, a, s, f), g = Sf(Og, Lg), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return h && (h[0] = sr(t, n, r, o, c), h[1] = sr(e, i, a, s, c)),
        Ig(m)
    }
    function fr(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }
    function pr(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }
    function gr(t, e, n, i, r) {
        var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;
        if (ar(a)) {
            if (or(o)) {
                var u = -s / o;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = o * o - 4 * a * s;
            if (ar(h)) {
                var u = -o / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u)
            } else if (h > 0) {
                var c = Ig(h),
                u = ( - o + c) / (2 * a),
                d = ( - o - c) / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u),
                d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }
    function vr(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }
    function mr(t, e, n, i, r) {
        var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;
        r[0] = t,
        r[1] = a,
        r[2] = s,
        r[3] = s,
        r[4] = o,
        r[5] = n
    }
    function yr(t, e, n, i, r, a, o, s, l) {
        var u, h = .005,
        c = 1 / 0;
        Lg[0] = o,
        Lg[1] = s;
        for (var d = 0; 1 > d; d += .05) {
            Pg[0] = fr(t, n, r, d),
            Pg[1] = fr(e, i, a, d);
            var f = Sf(Lg, Pg);
            c > f && (u = d, c = f)
        }
        c = 1 / 0;
        for (var p = 0; 32 > p && !(kg > h); p++) {
            var g = u - h,
            v = u + h;
            Pg[0] = fr(t, n, r, g),
            Pg[1] = fr(e, i, a, g);
            var f = Sf(Pg, Lg);
            if (g >= 0 && c > f) u = g,
            c = f;
            else {
                Og[0] = fr(t, n, r, v),
                Og[1] = fr(e, i, a, v);
                var m = Sf(Og, Lg);
                1 >= v && c > m ? (u = v, c = m) : h *= .5
            }
        }
        return l && (l[0] = fr(t, n, r, u), l[1] = fr(e, i, a, u)),
        Ig(c)
    }
    function _r(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0],
            a = r[0],
            o = r[0],
            s = r[1],
            l = r[1];
            for (i = 1; i < t.length; i++) r = t[i],
            a = Ng(a, r[0]),
            o = Eg(o, r[0]),
            s = Ng(s, r[1]),
            l = Eg(l, r[1]);
            e[0] = a,
            e[1] = s,
            n[0] = o,
            n[1] = l
        }
    }
    function xr(t, e, n, i, r, a) {
        r[0] = Ng(t, n),
        r[1] = Ng(e, i),
        a[0] = Eg(t, n),
        a[1] = Eg(e, i)
    }
    function wr(t, e, n, i, r, a, o, s, l, u) {
        var h, c = hr,
        d = sr,
        f = c(t, n, r, o, Hg);
        for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
            var p = d(t, n, r, o, Hg[h]);
            l[0] = Ng(p, l[0]),
            u[0] = Eg(p, u[0])
        }
        for (f = c(e, i, a, s, Gg), h = 0; f > h; h++) {
            var g = d(e, i, a, s, Gg[h]);
            l[1] = Ng(g, l[1]),
            u[1] = Eg(g, u[1])
        }
        l[0] = Ng(t, l[0]),
        u[0] = Eg(t, u[0]),
        l[0] = Ng(o, l[0]),
        u[0] = Eg(o, u[0]),
        l[1] = Ng(e, l[1]),
        u[1] = Eg(e, u[1]),
        l[1] = Ng(s, l[1]),
        u[1] = Eg(s, u[1])
    }
    function br(t, e, n, i, r, a, o, s) {
        var l = vr,
        u = fr,
        h = Eg(Ng(l(t, n, r), 1), 0),
        c = Eg(Ng(l(e, i, a), 1), 0),
        d = u(t, n, r, h),
        f = u(e, i, a, c);
        o[0] = Ng(t, r, d),
        o[1] = Ng(e, a, f),
        s[0] = Eg(t, r, d),
        s[1] = Eg(e, a, f)
    }
    function Mr(t, e, n, i, r, a, o, s, l) {
        var u = oe,
        h = se,
        c = Math.abs(r - a);
        if (1e-4 > c % zg && c > 1e-4) return s[0] = t - n,
        s[1] = e - i,
        l[0] = t + n,
        void(l[1] = e + i);
        if (Fg[0] = Bg(r) * n + t, Fg[1] = Rg(r) * i + e, Vg[0] = Bg(a) * n + t, Vg[1] = Rg(a) * i + e, u(s, Fg, Vg), h(l, Fg, Vg), r %= zg, 0 > r && (r += zg), a %= zg, 0 > a && (a += zg), r > a && !o ? a += zg: a > r && o && (r += zg), o) {
            var d = a;
            a = r,
            r = d
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && (Wg[0] = Bg(f) * n + t, Wg[1] = Rg(f) * i + e, u(s, Wg, s), h(l, Wg, l))
    }
    function Sr(t, e, n, i, r, a, o) {
        if (0 === r) return ! 1;
        var s = r,
        l = 0,
        u = t;
        if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return ! 1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        l = (e - i) / (t - n),
        u = (t * i - n * e) / (t - n);
        var h = l * a - o + u,
        c = h * h / (l * l + 1);
        return s / 2 * s / 2 >= c
    }
    function Tr(t, e, n, i, r, a, o, s, l, u, h) {
        if (0 === l) return ! 1;
        var c = l;
        if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return ! 1;
        var d = dr(t, e, n, i, r, a, o, s, u, h, null);
        return c / 2 >= d
    }
    function Ir(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return ! 1;
        var u = o;
        if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return ! 1;
        var h = yr(t, e, n, i, r, a, s, l, null);
        return u / 2 >= h
    }
    function Cr(t) {
        return t %= iv,
        0 > t && (t += iv),
        t
    }
    function kr(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return ! 1;
        var u = o;
        s -= t,
        l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || n > h + u) return ! 1;
        if (Math.abs(i - r) % rv < 1e-4) return ! 0;
        if (a) {
            var c = i;
            i = Cr(r),
            r = Cr(c)
        } else i = Cr(i),
        r = Cr(r);
        i > r && (r += rv);
        var d = Math.atan2(l, s);
        return 0 > d && (d += rv),
        d >= i && r >= d || d + rv >= i && r >= d + rv
    }
    function Dr(t, e, n, i, r, a) {
        if (a > e && a > i || e > a && i > a) return 0;
        if (i === e) return 0;
        var o = e > i ? 1 : -1,
        s = (a - e) / (i - e); (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o: 0
    }
    function Ar(t, e) {
        return Math.abs(t - e) < sv
    }
    function Lr() {
        var t = uv[0];
        uv[0] = uv[1],
        uv[1] = t
    }
    function Pr(t, e, n, i, r, a, o, s, l, u) {
        if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
        var h = ur(e, i, a, s, u, lv);
        if (0 === h) return 0;
        for (var c, d, f = 0,
        p = -1,
        g = 0; h > g; g++) {
            var v = lv[g],
            m = 0 === v || 1 === v ? .5 : 1,
            y = sr(t, n, r, o, v);
            l > y || (0 > p && (p = hr(e, i, a, s, uv), uv[1] < uv[0] && p > 1 && Lr(), c = sr(e, i, a, s, uv[0]), p > 1 && (d = sr(e, i, a, s, uv[1]))), f += 2 === p ? v < uv[0] ? e > c ? m: -m: v < uv[1] ? c > d ? m: -m: d > s ? m: -m: v < uv[0] ? e > c ? m: -m: c > s ? m: -m)
        }
        return f
    }
    function Or(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
        var l = gr(e, i, a, s, lv);
        if (0 === l) return 0;
        var u = vr(e, i, a);
        if (u >= 0 && 1 >= u) {
            for (var h = 0,
            c = fr(e, i, a, u), d = 0; l > d; d++) {
                var f = 0 === lv[d] || 1 === lv[d] ? .5 : 1,
                p = fr(t, n, r, lv[d]);
                o > p || (h += lv[d] < u ? e > c ? f: -f: c > a ? f: -f)
            }
            return h
        }
        var f = 0 === lv[0] || 1 === lv[0] ? .5 : 1,
        p = fr(t, n, r, lv[0]);
        return o > p ? 0 : e > a ? f: -f
    }
    function Nr(t, e, n, i, r, a, o, s) {
        if (s -= e, s > n || -n > s) return 0;
        var l = Math.sqrt(n * n - s * s);
        lv[0] = -l,
        lv[1] = l;
        var u = Math.abs(i - r);
        if (1e-4 > u) return 0;
        if (1e-4 > u % ov) {
            i = 0,
            r = ov;
            var h = a ? 1 : -1;
            return o >= lv[0] + t && o <= lv[1] + t ? h: 0
        }
        if (a) {
            var l = i;
            i = Cr(r),
            r = Cr(l)
        } else i = Cr(i),
        r = Cr(r);
        i > r && (r += ov);
        for (var c = 0,
        d = 0; 2 > d; d++) {
            var f = lv[d];
            if (f + t > o) {
                var p = Math.atan2(s, f),
                h = a ? 1 : -1;
                0 > p && (p = ov + p),
                (p >= i && r >= p || p + ov >= i && r >= p + ov) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
            }
        }
        return c
    }
    function Er(t, e, n, i, r) {
        for (var a = 0,
        o = 0,
        s = 0,
        l = 0,
        u = 0,
        h = 0; h < t.length;) {
            var c = t[h++];
            switch (c === av.M && h > 1 && (n || (a += Dr(o, s, l, u, i, r))), 1 === h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
            case av.M:
                l = t[h++],
                u = t[h++],
                o = l,
                s = u;
                break;
            case av.L:
                if (n) {
                    if (Sr(o, s, t[h], t[h + 1], e, i, r)) return ! 0
                } else a += Dr(o, s, t[h], t[h + 1], i, r) || 0;
                o = t[h++],
                s = t[h++];
                break;
            case av.C:
                if (n) {
                    if (Tr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return ! 0
                } else a += Pr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                o = t[h++],
                s = t[h++];
                break;
            case av.Q:
                if (n) {
                    if (Ir(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return ! 0
                } else a += Or(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                o = t[h++],
                s = t[h++];
                break;
            case av.A:
                var d = t[h++],
                f = t[h++],
                p = t[h++],
                g = t[h++],
                v = t[h++],
                m = t[h++];
                h += 1;
                var y = 1 - t[h++],
                _ = Math.cos(v) * p + d,
                x = Math.sin(v) * g + f;
                h > 1 ? a += Dr(o, s, _, x, i, r) : (l = _, u = x);
                var w = (i - d) * g / p + d;
                if (n) {
                    if (kr(d, f, g, v, v + m, y, e, w, r)) return ! 0
                } else a += Nr(d, f, g, v, v + m, y, w, r);
                o = Math.cos(v + m) * p + d,
                s = Math.sin(v + m) * g + f;
                break;
            case av.R:
                l = o = t[h++],
                u = s = t[h++];
                var b = t[h++],
                M = t[h++],
                _ = l + b,
                x = u + M;
                if (n) {
                    if (Sr(l, u, _, u, e, i, r) || Sr(_, u, _, x, e, i, r) || Sr(_, x, l, x, e, i, r) || Sr(l, x, l, u, e, i, r)) return ! 0
                } else a += Dr(_, u, _, x, i, r),
                a += Dr(l, x, l, u, i, r);
                break;
            case av.Z:
                if (n) {
                    if (Sr(o, s, l, u, e, i, r)) return ! 0
                } else a += Dr(o, s, l, u, i, r);
                o = l,
                s = u
            }
        }
        return n || Ar(s, u) || (a += Dr(o, s, l, u, i, r) || 0),
        0 !== a
    }
    function Rr(t, e, n) {
        return Er(t, 0, !1, e, n)
    }
    function Br(t, e, n, i) {
        return Er(t, e, !0, n, i)
    }
    function zr(t) {
        _i.call(this, t),
        this.path = null
    }
    function Fr(t, e, n, i, r, a, o, s, l, u, h) {
        var c = l * (wv / 180),
        d = xv(c) * (t - n) / 2 + _v(c) * (e - i) / 2,
        f = -1 * _v(c) * (t - n) / 2 + xv(c) * (e - i) / 2,
        p = d * d / (o * o) + f * f / (s * s);
        p > 1 && (o *= yv(p), s *= yv(p));
        var g = (r === a ? -1 : 1) * yv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + n) / 2 + xv(c) * v - _v(c) * m,
        _ = (e + i) / 2 + _v(c) * v + xv(c) * m,
        x = Sv([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [( - 1 * d - v) / o, ( - 1 * f - m) / s],
        M = Sv(w, b);
        Mv(w, b) <= -1 && (M = wv),
        Mv(w, b) >= 1 && (M = 0),
        0 === a && M > 0 && (M -= 2 * wv),
        1 === a && 0 > M && (M += 2 * wv),
        h.addData(u, y, _, o, s, x, M, c, a)
    }
    function Vr(t) {
        if (!t) return new nv;
        for (var e, n = 0,
        i = 0,
        r = n,
        a = i,
        o = new nv,
        s = nv.CMD,
        l = t.match(Tv), u = 0; u < l.length; u++) {
            for (var h, c = l[u], d = c.charAt(0), f = c.match(Iv) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v;) {
                var m, y, _, x, w, b, M, S = n,
                T = i;
                switch (d) {
                case "l":
                    n += f[v++],
                    i += f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "L":
                    n = f[v++],
                    i = f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "m":
                    n += f[v++],
                    i += f[v++],
                    h = s.M,
                    o.addData(h, n, i),
                    r = n,
                    a = i,
                    d = "l";
                    break;
                case "M":
                    n = f[v++],
                    i = f[v++],
                    h = s.M,
                    o.addData(h, n, i),
                    r = n,
                    a = i,
                    d = "L";
                    break;
                case "h":
                    n += f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "H":
                    n = f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "v":
                    i += f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "V":
                    i = f[v++],
                    h = s.L,
                    o.addData(h, n, i);
                    break;
                case "C":
                    h = s.C,
                    o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]),
                    n = f[v - 2],
                    i = f[v - 1];
                    break;
                case "c":
                    h = s.C,
                    o.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i),
                    n += f[v - 2],
                    i += f[v - 1];
                    break;
                case "S":
                    m = n,
                    y = i;
                    var I = o.len(),
                    C = o.data;
                    e === s.C && (m += n - C[I - 4], y += i - C[I - 3]),
                    h = s.C,
                    S = f[v++],
                    T = f[v++],
                    n = f[v++],
                    i = f[v++],
                    o.addData(h, m, y, S, T, n, i);
                    break;
                case "s":
                    m = n,
                    y = i;
                    var I = o.len(),
                    C = o.data;
                    e === s.C && (m += n - C[I - 4], y += i - C[I - 3]),
                    h = s.C,
                    S = n + f[v++],
                    T = i + f[v++],
                    n += f[v++],
                    i += f[v++],
                    o.addData(h, m, y, S, T, n, i);
                    break;
                case "Q":
                    S = f[v++],
                    T = f[v++],
                    n = f[v++],
                    i = f[v++],
                    h = s.Q,
                    o.addData(h, S, T, n, i);
                    break;
                case "q":
                    S = f[v++] + n,
                    T = f[v++] + i,
                    n += f[v++],
                    i += f[v++],
                    h = s.Q,
                    o.addData(h, S, T, n, i);
                    break;
                case "T":
                    m = n,
                    y = i;
                    var I = o.len(),
                    C = o.data;
                    e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]),
                    n = f[v++],
                    i = f[v++],
                    h = s.Q,
                    o.addData(h, m, y, n, i);
                    break;
                case "t":
                    m = n,
                    y = i;
                    var I = o.len(),
                    C = o.data;
                    e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]),
                    n += f[v++],
                    i += f[v++],
                    h = s.Q,
                    o.addData(h, m, y, n, i);
                    break;
                case "A":
                    _ = f[v++],
                    x = f[v++],
                    w = f[v++],
                    b = f[v++],
                    M = f[v++],
                    S = n,
                    T = i,
                    n = f[v++],
                    i = f[v++],
                    h = s.A,
                    Fr(S, T, n, i, b, M, _, x, w, h, o);
                    break;
                case "a":
                    _ = f[v++],
                    x = f[v++],
                    w = f[v++],
                    b = f[v++],
                    M = f[v++],
                    S = n,
                    T = i,
                    n += f[v++],
                    i += f[v++],
                    h = s.A,
                    Fr(S, T, n, i, b, M, _, x, w, h, o)
                }
            } ("z" === d || "Z" === d) && (h = s.Z, o.addData(h), n = r, i = a),
            e = h
        }
        return o.toStatic(),
        o
    }
    function Wr(t, e) {
        var n = Vr(t);
        return e = e || {},
        e.buildPath = function(t) {
            if (t.setData) {
                t.setData(n.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                n.rebuildPath(e)
            }
        },
        e.applyTransform = function(t) {
            mv(n, t),
            this.dirty(!0)
        },
        e
    }
    function Hr(t, e) {
        return new zr(Wr(t, e))
    }
    function Gr(t, e) {
        return zr.extend(Wr(t, e))
    }
    function Xr(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var a = t[r];
            a.path || a.createPathProxy(),
            a.__dirtyPath && a.buildPath(a.path, a.shape, !0),
            n.push(a.path)
        }
        var o = new zr(e);
        return o.createPathProxy(),
        o.buildPath = function(t) {
            t.appendPath(n);
            var e = t.getContext();
            e && t.rebuildPath(e)
        },
        o
    }
    function Yr(t, e, n, i, r, a, o) {
        var s = .5 * (n - t),
        l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + ( - 3 * (e - n) - 2 * s - l) * a + s * r + e
    }
    function qr(t, e, n) {
        var i = e.points,
        r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = Nv(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length,
                s = 0; (n ? o: o - 1) > s; s++) {
                    var l = a[2 * s],
                    u = a[2 * s + 1],
                    h = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === r && (i = Ov(i, n)),
                t.moveTo(i[0][0], i[0][1]);
                for (var s = 1,
                c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }
    function jr(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x1,
            a = e.x2,
            o = e.y1,
            s = e.y2;
            Bv(2 * r) === Bv(2 * a) ? t.x1 = t.x2 = Ur(r, i, !0) : (t.x1 = r, t.x2 = a),
            Bv(2 * o) === Bv(2 * s) ? t.y1 = t.y2 = Ur(o, i, !0) : (t.y1 = o, t.y2 = s)
        }
    }
    function Zr(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x,
            a = e.y,
            o = e.width,
            s = e.height;
            t.x = Ur(r, i, !0),
            t.y = Ur(a, i, !0),
            t.width = Math.max(Ur(r + o, i, !1) - t.x, 0 === o ? 0 : 1),
            t.height = Math.max(Ur(a + s, i, !1) - t.y, 0 === s ? 0 : 1)
        }
    }
    function Ur(t, e, n) {
        var i = Bv(2 * t);
        return (i + Bv(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }
    function $r(t, e, n) {
        var i = t.cpx2,
        r = t.cpy2;
        return null === i || null === r ? [(n ? lr: sr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? lr: sr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? pr: fr)(t.x1, t.cpx1, t.x2, e), (n ? pr: fr)(t.y1, t.cpy1, t.y2, e)]
    }
    function Kr(t) {
        _i.call(this, t),
        this._displayables = [],
        this._temporaryDisplayables = [],
        this._cursor = 0,
        this.notClear = !0
    }
    function Qr(t) {
        return zr.extend(t)
    }
    function Jr(t, e) {
        return Gr(t, e)
    }
    function ta(t, e, n, i) {
        var r = Hr(t, e);
        return n && ("center" === i && (n = na(n, r.getBoundingRect())), ia(r, n)),
        r
    }
    function ea(t, e, n) {
        var i = new xi({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function(t) {
                if ("center" === n) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    i.setStyle(na(e, r))
                }
            }
        });
        return i
    }
    function na(t, e) {
        var n, i = e.width / e.height,
        r = t.height * i;
        r <= t.width ? n = t.height: (r = t.width, n = r / i);
        var a = t.x + t.width / 2,
        o = t.y + t.height / 2;
        return {
            x: a - r / 2,
            y: o - n / 2,
            width: r,
            height: n
        }
    }
    function ia(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(),
            i = n.calculateTransform(e);
            t.applyTransform(i)
        }
    }
    function ra(t) {
        var e = t.shape,
        n = t.style.lineWidth;
        return $v(2 * e.x1) === $v(2 * e.x2) && (e.x1 = e.x2 = oa(e.x1, n, !0)),
        $v(2 * e.y1) === $v(2 * e.y2) && (e.y1 = e.y2 = oa(e.y1, n, !0)),
        t
    }
    function aa(t) {
        var e = t.shape,
        n = t.style.lineWidth,
        i = e.x,
        r = e.y,
        a = e.width,
        o = e.height;
        return e.x = oa(e.x, n, !0),
        e.y = oa(e.y, n, !0),
        e.width = Math.max(oa(i + a, n, !1) - e.x, 0 === a ? 0 : 1),
        e.height = Math.max(oa(r + o, n, !1) - e.y, 0 === o ? 0 : 1),
        t
    }
    function oa(t, e, n) {
        var i = $v(2 * t);
        return (i + $v(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }
    function sa(t) {
        return null != t && "none" !== t
    }
    function la(t) {
        if ("string" != typeof t) return t;
        var e = nm.get(t);
        return e || (e = Ue(t, -.1), 1e4 > im && (nm.set(t, e), im++)),
        e
    }
    function ua(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void(t.__cachedNormalStl = t.__cachedNormalZ2 = null);
            var n = t.__cachedNormalStl = {};
            t.__cachedNormalZ2 = t.z2;
            var i = t.style;
            for (var r in e) null != e[r] && (n[r] = i[r]);
            n.fill = i.fill,
            n.stroke = i.stroke
        }
    }
    function ha(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.useHoverLayer;
            t.__highlighted = n ? "layer": "plain";
            var i = t.__zr;
            if (i || !n) {
                var r = t,
                a = t.style;
                n && (r = i.addHover(t), a = r.style),
                Aa(a),
                n || ua(r),
                a.extendFrom(e),
                ca(a, e, "fill"),
                ca(a, e, "stroke"),
                Da(a),
                n || (t.dirty(!1), t.z2 += tm)
            }
        }
    }
    function ca(t, e, n) { ! sa(e[n]) && sa(t[n]) && (t[n] = la(t[n]))
    }
    function da(t) {
        var e = t.__highlighted;
        if (e) if (t.__highlighted = !1, "layer" === e) t.__zr && t.__zr.removeHover(t);
        else if (e) {
            var n = t.style,
            i = t.__cachedNormalStl;
            i && (Aa(n), t.setStyle(i), Da(n));
            var r = t.__cachedNormalZ2;
            null != r && t.z2 - r === tm && (t.z2 = r)
        }
    }
    function fa(t, e) {
        t.isGroup ? t.traverse(function(t) { ! t.isGroup && e(t)
        }) : e(t)
    }
    function pa(t, e) {
        e = t.__hoverStl = e !== !1 && (e || {}),
        t.__hoverStlDirty = !0,
        t.__highlighted && (t.__cachedNormalStl = null, da(t), ha(t))
    }
    function ga(t) {
        return t && t.__isEmphasisEntered
    }
    function va(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && fa(this, ha)
    }
    function ma(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && fa(this, da)
    }
    function ya() {
        this.__isEmphasisEntered = !0,
        fa(this, ha)
    }
    function _a() {
        this.__isEmphasisEntered = !1,
        fa(this, da)
    }
    function xa(t, e, n) {
        t.isGroup ? t.traverse(function(t) { ! t.isGroup && pa(t, t.hoverStyle || e)
        }) : pa(t, t.hoverStyle || e),
        wa(t, n)
    }
    function wa(t, e) {
        var n = e === !1;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off": "on";
            t[i]("mouseover", va)[i]("mouseout", ma),
            t[i]("emphasis", ya)[i]("normal", _a),
            t.__hoverStyleTrigger = !n
        }
    }
    function ba(t, e, n, i, r, a, o) {
        r = r || Jv;
        var s, l = r.labelFetcher,
        u = r.labelDataIndex,
        h = r.labelDimIndex,
        c = n.getShallow("show"),
        d = i.getShallow("show"); (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
        var f = c ? s: null,
        p = d ? D(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null; (null != f || null != p) && (Ma(t, n, a, r), Ma(e, i, o, r, !0)),
        t.text = f,
        e.text = p
    }
    function Ma(t, e, n, i, r) {
        return Ta(t, e, i, r),
        n && o(t, n),
        t
    }
    function Sa(t, e, n) {
        var i, r = {
            isRectText: !0
        };
        n === !1 ? i = !0 : r.autoColor = n,
        Ta(t, e, r, i)
    }
    function Ta(t, e, n, i) {
        if (n = n || Jv, n.isRectText) {
            var r = e.getShallow("position") || (i ? null: "inside");
            "outside" === r && (r = "top"),
            t.textPosition = r,
            t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180),
            t.textRotation = a,
            t.textDistance = D(e.getShallow("distance"), i ? null: 5)
        }
        var o, s = e.ecModel,
        l = s && s.option.textStyle,
        u = Ia(e);
        if (u) {
            o = {};
            for (var h in u) if (u.hasOwnProperty(h)) {
                var c = e.getModel(["rich", h]);
                Ca(o[h] = {},
                c, l, n, i)
            }
        }
        return t.rich = o,
        Ca(t, e, l, n, i, !0),
        n.forceRich && !n.textStyle && (n.textStyle = {}),
        t
    }
    function Ia(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || Jv).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }
    function Ca(t, e, n, i, r, a) {
        n = !r && n || Jv,
        t.textFill = ka(e.getShallow("color"), i) || n.color,
        t.textStroke = ka(e.getShallow("textBorderColor"), i) || n.textBorderColor,
        t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth),
        t.insideRawTextPosition = t.textPosition,
        r || (a && (t.insideRollbackOpt = i, Da(t)), null == t.textFill && (t.textFill = i.autoColor)),
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle,
        t.fontWeight = e.getShallow("fontWeight") || n.fontWeight,
        t.fontSize = e.getShallow("fontSize") || n.fontSize,
        t.fontFamily = e.getShallow("fontFamily") || n.fontFamily,
        t.textAlign = e.getShallow("align"),
        t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"),
        t.textLineHeight = e.getShallow("lineHeight"),
        t.textWidth = e.getShallow("width"),
        t.textHeight = e.getShallow("height"),
        t.textTag = e.getShallow("tag"),
        a && i.disableBox || (t.textBackgroundColor = ka(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = ka(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")),
        t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor,
        t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur,
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX,
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }
    function ka(t, e) {
        return "auto" !== t ? t: e && e.autoColor ? e.autoColor: null
    }
    function Da(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var n, i = e.useInsideStyle,
            r = t.insideRawTextPosition,
            a = e.autoColor;
            i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            },
            t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {
                textFill: null
            },
            t.textFill = a),
            n && (t.insideRollback = n)
        }
    }
    function Aa(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }
    function La(t, e) {
        var n = e || e.getModel("textStyle");
        return N([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }
    function Pa(t, e, n, i, r, a) {
        "function" == typeof r && (a = r, r = null);
        var o = i && i.isAnimationEnabled();
        if (o) {
            var s = t ? "Update": "",
            l = i.getShallow("animationDuration" + s),
            u = i.getShallow("animationEasing" + s),
            h = i.getShallow("animationDelay" + s);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)),
            "function" == typeof l && (l = l(r)),
            l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
        } else e.stopAnimation(),
        e.attr(n),
        a && a()
    }
    function Oa(t, e, n, i, r) {
        Pa(!0, t, e, n, i, r)
    }
    function Na(t, e, n, i, r) {
        Pa(!1, t, e, n, i, r)
    }
    function Ea(t, e) {
        for (var n = Ie([]); t && t !== e;) ke(n, t.getLocalTransform(), n),
        t = t.parent;
        return n
    }
    function Ra(t, e, n) {
        return e && !d(e) && (e = Vf.getLocalTransform(e)),
        n && (e = Pe([], e)),
        ae([], t, e)
    }
    function Ba(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -i: "right" === t ? i: 0, "top" === t ? -r: "bottom" === t ? r: 0];
        return a = Ra(a, e, n),
        Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right": "left": a[1] > 0 ? "bottom": "top"
    }
    function za(t, e, n) {
        function i(t) {
            var e = {};
            return t.traverse(function(t) { ! t.isGroup && t.anid && (e[t.anid] = t)
            }),
            e
        }
        function r(t) {
            var e = {
                position: G(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = o({},
            t.shape)),
            e
        }
        if (t && e) {
            var a = i(t);
            e.traverse(function(t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)),
                        Oa(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }
    function Fa(t, e) {
        return p(t,
        function(t) {
            var n = t[0];
            n = Kv(n, e.x),
            n = Qv(n, e.x + e.width);
            var i = t[1];
            return i = Kv(i, e.y),
            i = Qv(i, e.y + e.height),
            [n, i]
        })
    }
    function Va(t, e) {
        var n = Kv(t.x, e.x),
        i = Qv(t.x + t.width, e.x + e.width),
        r = Kv(t.y, e.y),
        a = Qv(t.y + t.height, e.y + e.height);
        return i >= n && a >= r ? {
            x: n,
            y: r,
            width: i - n,
            height: a - r
        }: void 0
    }
    function Wa(t, e, n) {
        e = o({
            rectHover: !0
        },
        e);
        var i = e.style = {
            strokeNoScale: !0
        };
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        },
        t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new xi(e)) : ta(t.replace("path://", ""), e, n, "center") : void 0
    }
    function Ha(t, e, n) {
        this.parentModel = e,
        this.ecModel = n,
        this.option = t
    }
    function Ga(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
        return null == t && n && (t = n.get(e)),
        t
    }
    function Xa(t, e) {
        var n = hm(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }
    function Ya(t) {
        return [t || "", cm++, Math.random().toFixed(5)].join("_")
    }
    function qa(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function(t, n) {
            t = Qi(t),
            e[t.main] = n
        },
        t.determineSubType = function(n, i) {
            var r = i.type;
            if (!r) {
                var a = Qi(n).main;
                t.hasSubTypes(n) && e[a] && (r = e[a](i))
            }
            return r
        },
        t
    }
    function ja(t, e) {
        function n(t) {
            var n = {},
            a = [];
            return f(t,
            function(o) {
                var s = i(n, o),
                l = s.originalDeps = e(o),
                h = r(l, t);
                s.entryCount = h.length,
                0 === s.entryCount && a.push(o),
                f(h,
                function(t) {
                    u(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    u(e.successor, t) < 0 && e.successor.push(o)
                })
            }),
            {
                graph: n,
                noEntryList: a
            }
        }
        function i(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }),
            t[e]
        }
        function r(t, e) {
            var n = [];
            return f(t,
            function(t) {
                u(e, t) >= 0 && n.push(t)
            }),
            n
        }
        t.topologicalTravel = function(t, e, i, r) {
            function a(t) {
                l[t].entryCount--,
                0 === l[t].entryCount && u.push(t)
            }
            function o(t) {
                h[t] = !0,
                a(t)
            }
            if (t.length) {
                var s = n(e),
                l = s.graph,
                u = s.noEntryList,
                h = {};
                for (f(t,
                function(t) {
                    h[t] = !0
                }); u.length;) {
                    var c = u.pop(),
                    d = l[c],
                    p = !!h[c];
                    p && (i.call(r, c, d.originalDeps.slice()), delete h[c]),
                    f(d.successor, p ? o: a)
                }
                f(h,
                function() {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }
    function Za(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function Ua(t, e, n, i) {
        var r = e[1] - e[0],
        a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * a + n[0]
    }
    function $a(t, e) {
        switch (t) {
        case "center":
        case "middle":
            t = "50%";
            break;
        case "left":
        case "top":
            t = "0%";
            break;
        case "right":
        case "bottom":
            t = "100%"
        }
        return "string" == typeof t ? Za(t).match(/%$/) ? parseFloat(t) / 100 * e: parseFloat(t) : null == t ? 0 / 0 : +t
    }
    function Ka(t, e, n) {
        return null == e && (e = 10),
        e = Math.min(Math.max(0, e), 20),
        t = ( + t).toFixed(e),
        n ? t: +t
    }
    function Qa(t) {
        return t.sort(function(t, e) {
            return t - e
        }),
        t
    }
    function Ja(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1,
        n = 0; Math.round(t * e) / e !== t;) e *= 10,
        n++;
        return n
    }
    function to(t) {
        var e = t.toString(),
        n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return 0 > i ? -i: 0
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r
    }
    function eo(t, e) {
        var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max( - r + a, 0), 20);
        return isFinite(o) ? o: 20
    }
    function no(t, e, n) {
        if (!t[e]) return 0;
        var i = g(t,
        function(t, e) {
            return t + (isNaN(e) ? 0 : e)
        },
        0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = p(t,
        function(t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), o = 100 * r, s = p(a,
        function(t) {
            return Math.floor(t)
        }), l = g(s,
        function(t, e) {
            return t + e
        },
        0), u = p(a,
        function(t, e) {
            return t - s[e]
        }); o > l;) {
            for (var h = Number.NEGATIVE_INFINITY,
            c = null,
            d = 0,
            f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d); ++s[c],
            u[c] = 0,
            ++l
        }
        return s[e] / r
    }
    function io(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }
    function ro(t) {
        return t > -dm && dm > t
    }
    function ao(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = pm.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)),
                new Date(Date.UTC( + e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date( + e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }
    function oo(t) {
        return Math.pow(10, so(t))
    }
    function so(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }
    function lo(t, e) {
        var n, i = so(t),
        r = Math.pow(10, i),
        a = t / r;
        return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10,
        t = n * r,
        i >= -20 ? +t.toFixed(0 > i ? -i: 0) : t
    }
    function uo(t, e) {
        var n = (t.length - 1) * e + 1,
        i = Math.floor(n),
        r = +t[i - 1],
        a = n - i;
        return a ? r + a * (t[i] - r) : r
    }
    function ho(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
        }
        t.sort(function(t, n) {
            return e(t, n, 0) ? -1 : 1
        });
        for (var n = -1 / 0,
        i = 1,
        r = 0; r < t.length;) {
            for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i),
            n = a[s],
            i = o[s];
            a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }
    function co(t) {
        return t - parseFloat(t) >= 0
    }
    function fo(t) {
        return isNaN(t) ? "-": (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
    }
    function po(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g,
        function(t, e) {
            return e.toUpperCase()
        }),
        e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
        t
    }
    function go(t) {
        return null == t ? "": (t + "").replace(mm,
        function(t, e) {
            return ym[e]
        })
    }
    function vo(t, e, n) {
        x(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = _m[a];
            t = t.replace(xm(o), xm(o, 0))
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(xm(_m[l], s), n ? go(u) : u)
        }
        return t
    }
    function mo(t, e, n) {
        return f(e,
        function(e, i) {
            t = t.replace("{" + i + "}", n ? go(e) : e)
        }),
        t
    }
    function yo(t, e) {
        t = b(t) ? {
            color: t,
            extraCssText: e
        }: t || {};
        var n = t.color,
        i = t.type,
        e = t.extraCssText,
        r = t.renderMode || "html",
        a = t.markerId || "X";
        return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + go(n) + ";" + (e || "") + '"></span>': '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + go(n) + ";" + (e || "") + '"></span>': {
            renderMode: r,
            content: "{marker" + a + "|}  ",
            style: {
                color: n
            }
        }: ""
    }
    function _o(t, e) {
        return t += "",
        "0000".substr(0, e - t.length) + t
    }
    function xo(t, e, n) { ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = ao(e),
        r = n ? "UTC": "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        u = i["get" + r + "Minutes"](),
        h = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", _o(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", _o(s, 2)).replace("d", s).replace("hh", _o(l, 2)).replace("h", l).replace("mm", _o(u, 2)).replace("m", u).replace("ss", _o(h, 2)).replace("s", h).replace("SSS", _o(c, 3))
    }
    function wo(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }
    function bo(t) {
        return zn(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
    }
    function Mo(t, e, n, i, r, a, o, s) {
        return zn(t, e, n, i, r, s, a, o)
    }
    function So(t, e, n, i, r) {
        var a = 0,
        o = 0;
        null == i && (i = 1 / 0),
        null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, u) {
            var h, c, d = l.position,
            f = l.getBoundingRect(),
            p = e.childAt(u + 1),
            g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x: 0);
                h = a + v,
                h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
            } else {
                var m = f.height + (g ? -g.y + f.y: 0);
                c = o + m,
                c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n: o = c + n)
        })
    }
    function To(t, e, n) {
        n = vm(n || 0);
        var i = e.width,
        r = e.height,
        a = $a(t.left, i),
        o = $a(t.top, r),
        s = $a(t.right, i),
        l = $a(t.bottom, r),
        u = $a(t.width, i),
        h = $a(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;
        switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i: h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
        case "center":
            a = i / 2 - u / 2 - n[3];
            break;
        case "right":
            a = i - u - d
        }
        switch (t.top || t.bottom) {
        case "middle":
        case "center":
            o = r / 2 - h / 2 - n[0];
            break;
        case "bottom":
            o = r - h - c
        }
        a = a || 0,
        o = o || 0,
        isNaN(u) && (u = i - d - a - (s || 0)),
        isNaN(h) && (h = r - c - o - (l || 0));
        var p = new _n(a + n[3], o + n[0], u, h);
        return p.margin = n,
        p
    }
    function Io(t, e, n) {
        function i(n, i) {
            var o = {},
            l = 0,
            u = {},
            h = 0,
            c = 2;
            if (Mm(n,
            function(e) {
                u[e] = t[e]
            }), Mm(n,
            function(t) {
                r(e, t) && (o[t] = u[t] = e[t]),
                a(o, t) && l++,
                a(u, t) && h++
            }), s[i]) return a(e, n[1]) ? u[n[2]] = null: a(e, n[2]) && (u[n[1]] = null),
            u;
            if (h !== c && l) {
                if (l >= c) return o;
                for (var d = 0; d < n.length; d++) {
                    var f = n[d];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return u
        }
        function r(t, e) {
            return t.hasOwnProperty(e)
        }
        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }
        function o(t, e, n) {
            Mm(t,
            function(t) {
                e[t] = n[t]
            })
        } ! M(n) && (n = {});
        var s = n.ignoreSize; ! x(s) && (s = [s, s]);
        var l = i(Tm[0], 0),
        u = i(Tm[1], 1);
        o(Tm[0], t, l),
        o(Tm[1], t, u)
    }
    function Co(t) {
        return ko({},
        t)
    }
    function ko(t, e) {
        return e && t && Mm(Sm,
        function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }),
        t
    }
    function Do(t) {
        var e = [];
        return f(km.getClassesByMainType(t),
        function(t) {
            e = e.concat(t.prototype.dependencies || [])
        }),
        e = p(e,
        function(t) {
            return Qi(t).main
        }),
        "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"),
        e
    }
    function Ao(t, e) {
        for (var n = t.length,
        i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }
    function Lo(t) {
        var e = t.get("coordinateSystem"),
        n = {
            coordSysName: e,
            coordSysDims: [],
            axisMap: z(),
            categoryAxisMap: z()
        },
        i = Om[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
    }
    function Po(t) {
        return "category" === t.get("type")
    }
    function Oo(t) {
        this.fromDataset = t.fromDataset,
        this.data = t.data || (t.sourceFormat === Bm ? {}: []),
        this.sourceFormat = t.sourceFormat || zm,
        this.seriesLayoutBy = t.seriesLayoutBy || Vm,
        this.dimensionsDefine = t.dimensionsDefine,
        this.encodeDefine = t.encodeDefine && z(t.encodeDefine),
        this.startIndex = t.startIndex || 0,
        this.dimensionsDetectCount = t.dimensionsDetectCount
    }
    function No(t) {
        var e = t.option.source,
        n = zm;
        if (T(e)) n = Fm;
        else if (x(e)) {
            0 === e.length && (n = Em);
            for (var i = 0,
            r = e.length; r > i; i++) {
                var a = e[i];
                if (null != a) {
                    if (x(a)) {
                        n = Em;
                        break
                    }
                    if (M(a)) {
                        n = Rm;
                        break
                    }
                }
            }
        } else if (M(e)) {
            for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
                n = Bm;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        Hm(t).sourceFormat = n
    }
    function Eo(t) {
        return Hm(t).source
    }
    function Ro(t) {
        Hm(t).datasetMap = z()
    }
    function Bo(t) {
        var e = t.option,
        n = e.data,
        i = T(n) ? Fm: Nm,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = Go(t);
        if (l) {
            var u = l.option;
            n = u.source,
            i = Hm(l).sourceFormat,
            r = !0,
            a = a || u.seriesLayoutBy,
            null == o && (o = u.sourceHeader),
            s = s || u.dimensions
        }
        var h = zo(n, i, a, o, s),
        c = e.encode; ! c && l && (c = Ho(t, l, n, i, a, h)),
        Hm(t).source = new Oo({
            data: n,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: i,
            dimensionsDefine: h.dimensionsDefine,
            startIndex: h.startIndex,
            dimensionsDetectCount: h.dimensionsDetectCount,
            encodeDefine: c
        })
    }
    function zo(t, e, n, i, r) {
        if (!t) return {
            dimensionsDefine: Fo(r)
        };
        var a, o, s;
        if (e === Em)"auto" === i || null == i ? Vo(function(t) {
            null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
        },
        n, t, 10) : o = i ? 1 : 0,
        r || 1 !== o || (r = [], Vo(function(t, e) {
            r[e] = null != t ? t: ""
        },
        n, t)),
        a = r ? r.length: n === Wm ? t.length: t[0] ? t[0].length: null;
        else if (e === Rm) r || (r = Wo(t), s = !0);
        else if (e === Bm) r || (r = [], s = !0, f(t,
        function(t, e) {
            r.push(e)
        }));
        else if (e === Nm) {
            var l = Fi(t[0]);
            a = x(l) && l.length || 1
        }
        var u;
        return s && f(r,
        function(t, e) {
            "name" === (M(t) ? t.name: t) && (u = e)
        }),
        {
            startIndex: o,
            dimensionsDefine: Fo(r),
            dimensionsDetectCount: a,
            potentialNameDimIndex: u
        }
    }
    function Fo(t) {
        if (t) {
            var e = z();
            return p(t,
            function(t) {
                if (t = o({},
                M(t) ? t: {
                    name: t
                }), null == t.name) return t;
                t.name += "",
                null == t.displayName && (t.displayName = t.name);
                var n = e.get(t.name);
                return n ? t.name += "-" + n.count++:e.set(t.name, {
                    count: 1
                }),
                t
            })
        }
    }
    function Vo(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === Wm) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
        else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
    }
    function Wo(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]););
        if (e) {
            var i = [];
            return f(e,
            function(t, e) {
                i.push(e)
            }),
            i
        }
    }
    function Ho(t, e, n, i, r, a) {
        var o = Lo(t),
        s = {},
        l = [],
        u = [],
        h = t.subType,
        c = z(["pie", "map", "funnel"]),
        d = z(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(h)) {
            var p = t.ecModel,
            g = Hm(p).datasetMap,
            v = e.uid + "_" + r,
            m = g.get(v) || g.set(v, {
                categoryWayDim: 1,
                valueWayDim: 0
            });
            f(o.coordSysDims,
            function(t) {
                if (null == o.firstCategoryDimIndex) {
                    var e = m.valueWayDim++;
                    s[t] = e,
                    u.push(e)
                } else if (o.categoryAxisMap.get(t)) s[t] = 0,
                l.push(0);
                else {
                    var e = m.categoryWayDim++;
                    s[t] = e,
                    u.push(e)
                }
            })
        } else if (null != c.get(h)) {
            for (var y, _ = 0; 5 > _ && null == y; _++) Yo(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
                u.push(x),
                l.push(x)
            }
        }
        return l.length && (s.itemName = l),
        u.length && (s.seriesName = u),
        s
    }
    function Go(t) {
        var e = t.option,
        n = e.data;
        return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }
    function Xo(t, e) {
        return Yo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }
    function Yo(t, e, n, i, r, a) {
        function o(t) {
            return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
        }
        var s, l = 5;
        if (T(t)) return ! 1;
        var u;
        if (i && (u = i[a], u = M(u) ? u.name: u), e === Em) if (n === Wm) {
            for (var h = t[a], c = 0; c < (h || []).length && l > c; c++) if (null != (s = o(h[r + c]))) return s
        } else for (var c = 0; c < t.length && l > c; c++) {
            var d = t[r + c];
            if (d && null != (s = o(d[a]))) return s
        } else if (e === Rm) {
            if (!u) return;
            for (var c = 0; c < t.length && l > c; c++) {
                var f = t[c];
                if (f && null != (s = o(f[u]))) return s
            }
        } else if (e === Bm) {
            if (!u) return;
            var h = t[u];
            if (!h || T(h)) return ! 1;
            for (var c = 0; c < h.length && l > c; c++) if (null != (s = o(h[c]))) return s
        } else if (e === Nm) for (var c = 0; c < t.length && l > c; c++) {
            var f = t[c],
            p = Fi(f);
            if (!x(p)) return ! 1;
            if (null != (s = o(p[a]))) return s
        }
        return ! 1
    }
    function qo(t, e) {
        if (e) {
            var n = e.seiresIndex,
            i = e.seriesId,
            r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }
    function jo(t, e) {
        var n = t.color && !t.colorLayer;
        f(e,
        function(e, a) {
            "colorLayer" === a && n || km.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
        })
    }
    function Zo(t) {
        t = t,
        this.option = {},
        this.option[Gm] = 1,
        this._componentsMap = z({
            series: []
        }),
        this._seriesIndices,
        this._seriesIndicesMap,
        jo(t, this._theme.option),
        r(t, Am, !1),
        this.mergeOption(t)
    }
    function Uo(t, e) {
        x(e) || (e = e ? [e] : []);
        var n = {};
        return f(e,
        function(e) {
            n[e] = (t.get(e) || []).slice()
        }),
        n
    }
    function $o(t, e, n) {
        var i = e.type ? e.type: n ? n.subType: km.determineSubType(t, e);
        return i
    }
    function Ko(t, e) {
        t._seriesIndicesMap = z(t._seriesIndices = p(e,
        function(t) {
            return t.componentIndex
        }) || [])
    }
    function Qo(t, e) {
        return e.hasOwnProperty("subType") ? v(t,
        function(t) {
            return t.subType === e.subType
        }) : t
    }
    function Jo(t) {
        f(Ym,
        function(e) {
            this[e] = y(t[e], t)
        },
        this)
    }
    function ts() {
        this._coordinateSystems = []
    }
    function es(t) {
        this._api = t,
        this._timelineOptions = [],
        this._mediaList = [],
        this._mediaDefault,
        this._currentMediaIndices = [],
        this._optionBackup,
        this._newBaseOption
    }
    function ns(t, e, n) {
        var i, r, a = [],
        o = [],
        s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {},
        a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            jm(l,
            function(t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t),
        r.timeline || (r.timeline = s),
        jm([r].concat(a).concat(p(o,
        function(t) {
            return t.option
        })),
        function(t) {
            jm(e,
            function(e) {
                e(t, n)
            })
        }),
        {
            baseOption: r,
            timelineOptions: a,
            mediaDefault: i,
            mediaList: o
        }
    }
    function is(t, e, n) {
        var i = {
            width: e,
            height: n,
            aspectratio: e / n
        },
        r = !0;
        return f(t,
        function(t, e) {
            var n = e.match(Km);
            if (n && n[1] && n[2]) {
                var a = n[1],
                o = n[2].toLowerCase();
                rs(i[o], t, a) || (r = !1)
            }
        }),
        r
    }
    function rs(t, e, n) {
        return "min" === n ? t >= e: "max" === n ? e >= t: t === e
    }
    function as(t, e) {
        return t.join(",") === e.join(",")
    }
    function os(t, e) {
        e = e || {},
        jm(e,
        function(e, n) {
            if (null != e) {
                var i = t[n];
                if (km.hasClass(n)) {
                    e = Bi(e),
                    i = Bi(i);
                    var r = Wi(i, e);
                    t[n] = Um(r,
                    function(t) {
                        return t.option && t.exist ? $m(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = $m(i, e, !0)
            }
        })
    }
    function ss(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0,
        i = ty.length; i > n; n++) {
            var a = ty[n],
            o = e.normal,
            s = e.emphasis;
            o && o[a] && (t[a] = t[a] || {},
            t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null),
            s && s[a] && (t[a] = t[a] || {},
            t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
        }
    }
    function ls(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal,
            r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i),
            r && (t.emphasis = t.emphasis || {},
            t.emphasis[e] = r)
        }
    }
    function us(t) {
        ls(t, "itemStyle"),
        ls(t, "lineStyle"),
        ls(t, "areaStyle"),
        ls(t, "label"),
        ls(t, "labelLine"),
        ls(t, "upperLabel"),
        ls(t, "edgeLabel")
    }
    function hs(t, e) {
        var n = Jm(t) && t[e],
        i = Jm(n) && n.textStyle;
        if (i) for (var r = 0,
        a = gg.length; a > r; r++) {
            var e = gg[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }
    function cs(t) {
        t && (us(t), hs(t, "label"), t.emphasis && hs(t.emphasis, "label"))
    }
    function ds(t) {
        if (Jm(t)) {
            ss(t),
            us(t),
            hs(t, "label"),
            hs(t, "upperLabel"),
            hs(t, "edgeLabel"),
            t.emphasis && (hs(t.emphasis, "label"), hs(t.emphasis, "upperLabel"), hs(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (ss(e), cs(e));
            var n = t.markLine;
            n && (ss(n), cs(n));
            var i = t.markArea;
            i && cs(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !T(a)) for (var o = 0; o < a.length; o++) cs(a[o]);
                f(t.categories,
                function(t) {
                    us(t)
                })
            }
            if (r && !T(r)) for (var o = 0; o < r.length; o++) cs(r[o]);
            var e = t.markPoint;
            if (e && e.data) for (var s = e.data,
            o = 0; o < s.length; o++) cs(s[o]);
            var n = t.markLine;
            if (n && n.data) for (var l = n.data,
            o = 0; o < l.length; o++) x(l[o]) ? (cs(l[o][0]), cs(l[o][1])) : cs(l[o]);
            "gauge" === t.type ? (hs(t, "axisLabel"), hs(t, "title"), hs(t, "detail")) : "treemap" === t.type ? (ls(t.breadcrumb, "itemStyle"), f(t.levels,
            function(t) {
                us(t)
            })) : "tree" === t.type && us(t.leaves)
        }
    }
    function fs(t) {
        return x(t) ? t: t ? [t] : []
    }
    function ps(t) {
        return (x(t) ? t[0] : t) || {}
    }
    function gs(t, e) {
        e = e.split(",");
        for (var n = t,
        i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
        return n
    }
    function vs(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t,
        o = 0; o < e.length - 1; o++) r = e[o],
        null == a[r] && (a[r] = {}),
        a = a[r]; (i || null == a[e[o]]) && (a[e[o]] = n)
    }
    function ms(t) {
        f(ny,
        function(e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }
    function ys(t) {
        f(t,
        function(e, n) {
            var i = [],
            r = [0 / 0, 0 / 0],
            a = [e.stackResultDimension, e.stackedOverDimension],
            o = e.data,
            s = e.isStackedByIndex,
            l = o.map(a,
            function(a, l, u) {
                var h = o.get(e.stackedDimension, u);
                if (isNaN(h)) return r;
                var c, d;
                s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
                for (var f = 0 / 0,
                p = n - 1; p >= 0; p--) {
                    var g = t[p];
                    if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                        var v = g.data.getByRawIndex(g.stackResultDimension, d);
                        if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
                            h += v,
                            f = v;
                            break
                        }
                    }
                }
                return i[0] = h,
                i[1] = f,
                i
            });
            o.hostModel.setData(l),
            e.data = l
        })
    }
    function _s(t, e) {
        Oo.isInstance(t) || (t = Oo.seriesDataToSource(t)),
        this._source = t;
        var n = this._data = t.data,
        i = t.sourceFormat;
        i === Fm && (this._offset = 0, this._dimSize = e, this._data = n);
        var r = sy[i === Em ? i + "_" + t.seriesLayoutBy: i];
        o(this, r)
    }
    function xs() {
        return this._data.length
    }
    function ws(t) {
        return this._data[t]
    }
    function bs(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }
    function Ms(t, e, n) {
        return null != n ? t[n] : t
    }
    function Ss(t, e, n, i) {
        return Ts(t[i], this._dimensionInfos[e])
    }
    function Ts(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +ao(t)),
        null == t || "" === t ? 0 / 0 : +t
    }
    function Is(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, a, o = t.getProvider().getSource().sourceFormat,
                s = t.getDimensionInfo(n);
                return s && (r = s.name, a = s.index),
                ly[o](i, e, a, r)
            }
        }
    }
    function Cs(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === Nm || i === Rm) {
                var r = t.getRawDataItem(e);
                return i !== Nm || M(r) || (r = null),
                r ? r[n] : void 0
            }
        }
    }
    function ks(t) {
        return new Ds(t)
    }
    function Ds(t) {
        t = t || {},
        this._reset = t.reset,
        this._plan = t.plan,
        this._count = t.count,
        this._onDirty = t.onDirty,
        this._dirty = !0,
        this.context
    }
    function As(t, e, n, i, r, a) {
        fy.reset(n, i, r, a),
        t._callingProgress = e,
        t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: fy.next
        },
        t.context)
    }
    function Ls(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0,
        t._settedOutputEnd = null;
        var n, i; ! e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)),
        t._progress = n,
        t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(),
        i
    }
    function Ps(t) {
        var e = t.name;
        Gi(t) || (t.name = Os(t) || e)
    }
    function Os(t) {
        var e = t.getRawData(),
        n = e.mapDimension("seriesName", !0),
        i = [];
        return f(n,
        function(t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName)
        }),
        i.join(" ")
    }
    function Ns(t) {
        return t.model.getRawData().count()
    }
    function Es(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()),
        Rs
    }
    function Rs(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }
    function Bs(t, e) {
        f(t.CHANGABLE_METHODS,
        function(n) {
            t.wrapMethod(n, _(zs, e))
        })
    }
    function zs(t) {
        var e = Fs(t);
        e && e.setOutputEnd(this.count())
    }
    function Fs(t) {
        var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }
    function Vs() {
        this.group = new gp,
        this.uid = Ya("viewChart"),
        this.renderTask = ks({
            plan: Gs,
            reset: Xs
        }),
        this.renderTask.context = {
            view: this
        }
    }
    function Ws(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) Ws(t.childAt(n), e)
    }
    function Hs(t, e, n) {
        var i = Yi(t, e);
        null != i ? f(Bi(i),
        function(e) {
            Ws(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function(t) {
            Ws(t, n)
        })
    }
    function Gs(t) {
        return xy(t.model)
    }
    function Xs(t) {
        var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && _y(r).updateMethod,
        l = a ? "incrementalPrepareRender": s && o[s] ? s: "render";
        return "render" !== l && o[l](e, n, i, r),
        by[l]
    }
    function Ys(t, e, n) {
        function i() {
            h = (new Date).getTime(),
            c = null,
            t.apply(o, s || [])
        }
        var r, a, o, s, l, u = 0,
        h = 0,
        c = null;
        e = e || 0;
        var d = function() {
            r = (new Date).getTime(),
            o = this,
            s = arguments;
            var t = l || e,
            d = l || n;
            l = null,
            a = r - (d ? u: h) - t,
            clearTimeout(c),
            d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a),
            u = r
        };
        return d.clear = function() {
            c && (clearTimeout(c), c = null)
        },
        d.debounceNextCall = function(t) {
            l = t
        },
        d
    }
    function qs(t, e, n, i) {
        this.ecInstance = t,
        this.api = e,
        this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(),
        i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i),
        this._stageTaskMap = z()
    }
    function js(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }
        r = r || {};
        var o;
        f(e,
        function(e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid),
                l = s.seriesTaskMap,
                u = s.overallTask;
                if (u) {
                    var h, c = u.agentStubMap;
                    c.each(function(t) {
                        a(r, t) && (t.dirty(), h = !0)
                    }),
                    h && u.dirty(),
                    Dy(u, i);
                    var d = t.getPerformArgs(u, r.block);
                    c.each(function(t) {
                        t.perform(d)
                    }),
                    o |= u.perform(d)
                } else l && l.each(function(s) {
                    a(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model),
                    Dy(s, i),
                    o |= s.perform(l)
                })
            }
        }),
        t.unfinished |= o
    }
    function Zs(t, e, n, i, r) {
        function a(n) {
            var a = n.uid,
            s = o.get(a) || o.set(a, ks({
                plan: tl,
                reset: el,
                count: il
            }));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            },
            rl(t, n, s)
        }
        var o = n.seriesTaskMap || (n.seriesTaskMap = z()),
        s = e.seriesType,
        l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var u = t._pipelineMap;
        o.each(function(t, e) {
            u.get(e) || (t.dispose(), o.removeKey(e))
        })
    }
    function Us(t, e, n, i, r) {
        function a(e) {
            var n = e.uid,
            i = s.get(n);
            i || (i = s.set(n, ks({
                reset: Ks,
                onDirty: Js
            })), o.dirty()),
            i.context = {
                model: e,
                overallProgress: h,
                modifyOutputEnd: c
            },
            i.agent = o,
            i.__block = h,
            rl(t, e, i)
        }
        var o = n.overallTask = n.overallTask || ks({
            reset: $s
        });
        o.context = {
            ecModel: i,
            api: r,
            overallReset: e.overallReset,
            scheduler: t
        };
        var s = o.agentStubMap = o.agentStubMap || z(),
        l = e.seriesType,
        u = e.getTargetSeries,
        h = !0,
        c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function(t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
        })
    }
    function $s(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }
    function Ks(t) {
        return t.overallProgress && Qs
    }
    function Qs() {
        this.agent.dirty(),
        this.getDownstream().dirty()
    }
    function Js() {
        this.agent && this.agent.dirty()
    }
    function tl(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }
    function el(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Bi(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e,
        function(t, e) {
            return nl(e)
        }) : Ay
    }
    function nl(t) {
        return function(e, n) {
            var i = n.data,
            r = n.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
            else r && r.progress && r.progress(e, i)
        }
    }
    function il(t) {
        return t.data.count()
    }
    function rl(t, e, n) {
        var i = e.uid,
        r = t._pipelineMap.get(i); ! r.head && (r.head = n),
        r.tail && r.tail.pipe(n),
        r.tail = n,
        n.__idxInPipeline = r.count++,
        n.__pipeline = r
    }
    function al(t) {
        Ly = null;
        try {
            t(Py, Oy)
        } catch(e) {}
        return Ly
    }
    function ol(t, e) {
        for (var n in e.prototype) t[n] = V
    }
    function sl(t) {
        if (b(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        for (9 === t.nodeType && (t = t.firstChild);
        "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }
    function ll() {
        this._defs = {},
        this._root = null,
        this._isDefine = !1,
        this._isText = !1
    }
    function ul(t, e) {
        for (var n = t.firstChild; n;) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r)
            }
            n = n.nextSibling
        }
    }
    function hl(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
    }
    function cl(t) {
        for (var e = N(t).split(Wy), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]),
            a = parseFloat(e[i + 1]);
            n.push([r, a])
        }
        return n
    }
    function dl(t, e, n, i) {
        var r = e.__inheritedStyle || {},
        a = "text" === e.type;
        if (1 === t.nodeType && (pl(t, e), o(r, gl(t)), !i)) for (var s in Xy) if (Xy.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[Xy[s]] = l)
        }
        var u = a ? "textFill": "fill",
        h = a ? "textStroke": "stroke";
        e.style = e.style || new Sp;
        var c = e.style;
        null != r.fill && c.set(u, fl(r.fill, n)),
        null != r.stroke && c.set(h, fl(r.stroke, n)),
        f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"],
        function(t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth": t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }),
        r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"),
        "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"),
        "start" === r.textAlign && (r.textAlign = "left"),
        "end" === r.textAlign && (r.textAlign = "right"),
        f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"],
        function(t) {
            null != r[t] && c.set(t, r[t])
        }),
        r.lineDash && (e.style.lineDash = N(r.lineDash).split(Wy)),
        c[h] && "none" !== c[h] && (e[h] = !0),
        e.__inheritedStyle = r
    }
    function fl(t, e) {
        var n = e && t && t.match(Yy);
        if (n) {
            var i = N(n[1]),
            r = e[i];
            return r
        }
        return t
    }
    function pl(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            n = n.replace(/,/g, " ");
            var i = null,
            r = [];
            n.replace(qy,
            function(t, e, n) {
                r.push(e, n)
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a],
                s = r[a - 1];
                switch (i = i || Te(), s) {
                case "translate":
                    o = N(o).split(Wy),
                    De(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                    break;
                case "scale":
                    o = N(o).split(Wy),
                    Le(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                    break;
                case "rotate":
                    o = N(o).split(Wy),
                    Ae(i, i, parseFloat(o[0]));
                    break;
                case "skew":
                    o = N(o).split(Wy),
                    console.warn("Skew transform is not supported yet");
                    break;
                case "matrix":
                    var o = N(o).split(Wy);
                    i[0] = parseFloat(o[0]),
                    i[1] = parseFloat(o[1]),
                    i[2] = parseFloat(o[2]),
                    i[3] = parseFloat(o[3]),
                    i[4] = parseFloat(o[4]),
                    i[5] = parseFloat(o[5])
                }
            }
            e.setLocalTransform(i)
        }
    }
    function gl(t) {
        var e = t.getAttribute("style"),
        n = {};
        if (!e) return n;
        var i = {};
        jy.lastIndex = 0;
        for (var r; null != (r = jy.exec(e));) i[r[1]] = r[2];
        for (var a in Xy) Xy.hasOwnProperty(a) && null != i[a] && (n[Xy[a]] = i[a]);
        return n
    }
    function vl(t, e, n) {
        var i = e / t.width,
        r = n / t.height,
        a = Math.min(i, r),
        o = [a, a],
        s = [ - (t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
        return {
            scale: o,
            position: s
        }
    }
    function ml(t) {
        return function(e, n, i) {
            e = e && e.toLowerCase(),
            Cf.prototype[t].call(this, e, n, i)
        }
    }
    function yl() {
        Cf.call(this)
    }
    function _l(t, e, n) {
        function r(t, e) {
            return t.__prio - e.__prio
        }
        n = n || {},
        "string" == typeof e && (e = T_[e]),
        this.id,
        this.group,
        this._dom = t;
        var a = "canvas",
        o = this._zr = Pi(t, {
            renderer: n.renderer || a,
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = Ys(y(o.flush, o), 17);
        var e = i(e);
        e && ry(e, !0),
        this._theme = e,
        this._chartsViews = [],
        this._chartsMap = {},
        this._componentsViews = [],
        this._componentsMap = {},
        this._coordSysMgr = new ts;
        var s = this._api = Bl(this);
        Cn(S_, r),
        Cn(w_, r),
        this._scheduler = new qs(this, s, w_, S_),
        Cf.call(this, this._ecEventProcessor = new zl),
        this._messageCenter = new yl,
        this._initEvents(),
        this.resize = y(this.resize, this),
        this._pendingActions = [],
        o.animation.on("frame", this._onframe, this),
        Cl(o, this),
        E(this)
    }
    function xl(t, e, n) {
        var i, r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();
        e = ji(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }
    function wl(t) {
        var e = t._model,
        n = t._scheduler;
        n.restorePipelines(e),
        n.prepareStageTasks(),
        kl(t, "component", e, n),
        kl(t, "chart", e, n),
        n.plan()
    }
    function bl(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }
        var o = t._model;
        if (!i) return void Qy(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        s[i + "Id"] = n[i + "Id"],
        s[i + "Index"] = n[i + "Index"],
        s[i + "Name"] = n[i + "Name"];
        var l = {
            mainType: i,
            query: s
        };
        r && (l.subType = r);
        var u = n.excludeSeriesId;
        null != u && (u = z(Bi(u))),
        o && o.eachComponent(l,
        function(e) {
            u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap": "_componentsMap"][e.__viewId])
        },
        t)
    }
    function Ml(t, e) {
        var n = t._chartsMap,
        i = t._scheduler;
        e.eachSeries(function(t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }
    function Sl(t, e) {
        var n = t.type,
        i = t.escapeConnect,
        r = __[n],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        u = l.pop();
        l = null != l[0] && e_(l[0]),
        this[f_] = !0;
        var h = [t],
        c = !1;
        t.batch && (c = !0, h = p(t.batch,
        function(e) {
            return e = s(o({},
            e), t),
            e.batch = null,
            e
        }));
        var d, f = [],
        g = "highlight" === n || "downplay" === n;
        Qy(h,
        function(t) {
            d = r.action(t, this._model, this._api),
            d = d || o({},
            t),
            d.type = a.event || d.type,
            f.push(d),
            g ? bl(this, u, t, "series") : l && bl(this, u, t, l.main, l.sub)
        },
        this),
        "none" === u || g || l || (this[p_] ? (wl(this), m_.update.call(this, t), this[p_] = !1) : m_[u].call(this, t)),
        d = c ? {
            type: a.event || n,
            escapeConnect: i,
            batch: f
        }: f[0],
        this[f_] = !1,
        !e && this._messageCenter.trigger(d.type, d)
    }
    function Tl(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            Sl.call(this, n, t)
        }
    }
    function Il(t) { ! t && this.trigger("updated")
    }
    function Cl(t, e) {
        t.on("rendered",
        function() {
            e.trigger("rendered"),
            !t.animation.isFinished() || e[p_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }
    function kl(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type,
            r = s[e];
            if (!r) {
                var h = e_(t.type),
                c = a ? vy.getClass(h.main, h.sub) : Vs.getClass(h.sub);
                r = new c,
                r.init(n, u),
                s[e] = r,
                o.push(r),
                l.add(r.group)
            }
            t.__viewId = r.__id = e,
            r.__alive = !0,
            r.__model = t,
            r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            },
            !a && i.prepareView(r, t, n, u)
        }
        for (var a = "component" === e,
        o = a ? t._componentsViews: t._chartsViews, s = a ? t._componentsMap: t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
        a ? n.eachComponent(function(t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (var h = 0; h < o.length;) {
            var c = o[h];
            c.__alive ? h++:(!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }
    function Dl(t) {
        t.clearColorPalette(),
        t.eachSeries(function(t) {
            t.clearColorPalette()
        })
    }
    function Al(t, e, n, i) {
        Ll(t, e, n, i),
        Qy(t._chartsViews,
        function(t) {
            t.__alive = !1
        }),
        Pl(t, e, n, i),
        Qy(t._chartsViews,
        function(t) {
            t.__alive || t.remove(e, n)
        })
    }
    function Ll(t, e, n, i, r) {
        Qy(r || t._componentsViews,
        function(t) {
            var r = t.__model;
            t.render(r, e, n, i),
            Rl(r, t)
        })
    }
    function Pl(t, e, n, i, r) {
        var a, o = t._scheduler;
        e.eachSeries(function(e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i),
            r && r.get(e.uid) && s.dirty(),
            a |= s.perform(o.getPerformArgs(s)),
            n.group.silent = !!e.get("silent"),
            Rl(e, n),
            El(e, n)
        }),
        o.unfinished |= a,
        Nl(t._zr, e),
        Ty(t._zr.dom, e)
    }
    function Ol(t, e) {
        Qy(M_,
        function(n) {
            n(t, e)
        })
    }
    function Nl(t, e) {
        var n = t.storage,
        i = 0;
        n.traverse(function(t) {
            t.isGroup || i++
        }),
        i > e.get("hoverLayerThreshold") && !af.node && n.traverse(function(t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }
    function El(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function(t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n),
            t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                t.setStyle("blend", n)
            })
        })
    }
    function Rl(t, e) {
        var n = t.get("z"),
        i = t.get("zlevel");
        e.group.traverse(function(t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }
    function Bl(t) {
        var e = t._coordSysMgr;
        return o(new Jo(t), {
            getCoordinateSystems: y(e.getCoordinateSystems, e),
            getComponentByElement: function(e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }
    function zl() {
        this.eventInfo
    }
    function Fl(t) {
        function e(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i[a] = e
            }
        }
        var n = 0,
        i = 1,
        r = 2,
        a = "__connectUpdateStatus";
        Qy(x_,
        function(o, s) {
            t._messageCenter.on(s,
            function(o) {
                if (k_[t.group] && t[a] !== n) {
                    if (o && o.escapeConnect) return;
                    var s = t.makeActionFromEvent(o),
                    l = [];
                    Qy(C_,
                    function(e) {
                        e !== t && e.group === t.group && l.push(e)
                    }),
                    e(l, n),
                    Qy(l,
                    function(t) {
                        t[a] !== i && t.dispatchAction(s)
                    }),
                    e(l, r)
                }
            })
        })
    }
    function Vl(t, e, n) {
        var i = Xl(t);
        if (i) return i;
        var r = new _l(t, e, n);
        return r.id = "ec_" + D_++,
        C_[r.id] = r,
        Ui(t, L_, r.id),
        Fl(r),
        r
    }
    function Wl(t) {
        if (x(t)) {
            var e = t;
            t = null,
            Qy(e,
            function(e) {
                null != e.group && (t = e.group)
            }),
            t = t || "g_" + A_++,
            Qy(e,
            function(e) {
                e.group = t
            })
        }
        return k_[t] = !0,
        t
    }
    function Hl(t) {
        k_[t] = !1
    }
    function Gl(t) {
        "string" == typeof t ? t = C_[t] : t instanceof _l || (t = Xl(t)),
        t instanceof _l && !t.isDisposed() && t.dispose()
    }
    function Xl(t) {
        return C_[$i(t, L_)]
    }
    function Yl(t) {
        return C_[t]
    }
    function ql(t, e) {
        T_[t] = e
    }
    function jl(t) {
        b_.push(t)
    }
    function Zl(t, e) {
        eu(w_, t, e, a_)
    }
    function Ul(t) {
        M_.push(t)
    }
    function $l(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = t_(t) ? t.type: [t, t = {
            event: e
        }][0];
        t.event = (t.event || i).toLowerCase(),
        e = t.event,
        Ky(g_.test(i) && g_.test(e)),
        __[i] || (__[i] = {
            action: n,
            actionInfo: t
        }),
        x_[e] = i
    }
    function Kl(t, e) {
        ts.register(t, e)
    }
    function Ql(t) {
        var e = ts.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }
    function Jl(t, e) {
        eu(S_, t, e, s_, "layout")
    }
    function tu(t, e) {
        eu(S_, t, e, u_, "visual")
    }
    function eu(t, e, n, i, r) { (Jy(e) || t_(e)) && (n = e, e = i);
        var a = qs.wrapStageHandler(n, r);
        return a.__prio = e,
        a.__raw = n,
        t.push(a),
        a
    }
    function nu(t, e) {
        I_[t] = e
    }
    function iu(t) {
        return km.extend(t)
    }
    function ru(t) {
        return vy.extend(t)
    }
    function au(t) {
        return gy.extend(t)
    }
    function ou(t) {
        return Vs.extend(t)
    }
    function su(t) {
        n("createCanvas", t)
    }
    function lu(t, e, n) {
        Uy.registerMap(t, e, n)
    }
    function uu(t) {
        var e = Uy.retrieveMap(t);
        return e && e[0] && {
            geoJson: e[0].geoJSON,
            specialAreas: e[0].specialAreas
        }
    }
    function hu(t) {
        return t
    }
    function cu(t, e, n, i, r) {
        this._old = t,
        this._new = e,
        this._oldKeyGetter = n || hu,
        this._newKeyGetter = i || hu,
        this.context = r
    }
    function du(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a),
            s = e[o];
            null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }
    function fu(t) {
        var e = {},
        n = e.encode = {},
        i = z(),
        r = [],
        a = [];
        f(t.dimensions,
        function(e) {
            var o = t.getDimensionInfo(e),
            s = o.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []),
                l[o.coordDimIndex] = e,
                o.isExtraCoord || (i.set(s, 1), gu(o.type) && (r[0] = e)),
                o.defaultTooltip && a.push(e)
            }
            N_.each(function(t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = o.otherDims[e];
                null != r && r !== !1 && (i[r] = o.name)
            })
        });
        var o = [],
        s = {};
        i.each(function(t, e) {
            var i = n[e];
            s[e] = i[0],
            o = o.concat(i)
        }),
        e.dataDimsOnCoord = o,
        e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var u = n.tooltip;
        return u && u.length ? a = u.slice() : a.length || (a = r.slice()),
        n.defaultedLabel = r,
        n.defaultedTooltip = a,
        e
    }
    function pu(t) {
        return "category" === t ? "ordinal": "time" === t ? "time": "float"
    }
    function gu(t) {
        return ! ("ordinal" === t || "time" === t)
    }
    function vu(t) {
        return t._rawCount > 65535 ? V_: H_
    }
    function mu(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }
    function yu(t, e) {
        f(G_.concat(e.__wrappedMethods || []),
        function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }),
        t.__wrappedMethods = e.__wrappedMethods,
        f(X_,
        function(n) {
            t[n] = i(e[n])
        }),
        t._calculationInfo = o(e._calculationInfo)
    }
    function _u(t, e, n, i, r) {
        var a = F_[e.type],
        o = i - 1,
        s = e.name,
        l = t[s][o];
        if (l && l.length < n) {
            for (var u = new a(Math.min(r - o * n, n)), h = 0; h < l.length; h++) u[h] = l[h];
            t[s][o] = u
        }
        for (var c = i * n; r > c; c += n) t[s].push(new a(Math.min(r - c, n)))
    }
    function xu(t) {
        var e = t._invertedIndicesMap;
        f(e,
        function(n, i) {
            var r = t._dimensionInfos[i],
            a = r.ordinalMeta;
            if (a) {
                n = e[i] = new W_(a.categories.length);
                for (var o = 0; o < n.length; o++) n[o] = B_;
                for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
            }
        })
    }
    function wu(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize,
            a = Math.floor(n / r),
            o = n % r,
            s = t.dimensions[e],
            l = t._storage[s][a];
            if (l) {
                i = l[o];
                var u = t._dimensionInfos[s].ordinalMeta;
                u && u.categories.length && (i = u.categories[i])
            }
        }
        return i
    }
    function bu(t) {
        return t
    }
    function Mu(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }
    function Su(t, e) {
        var n = t._idList[e];
        return null == n && (n = wu(t, t._idDimIdx, e)),
        null == n && (n = z_ + e),
        n
    }
    function Tu(t) {
        return x(t) || (t = [t]),
        t
    }
    function Iu(t, e) {
        var n = t.dimensions,
        i = new Y_(p(n, t.getDimensionInfo, t), t.hostModel);
        yu(i, t);
        for (var r = i._storage = {},
        a = t._storage,
        o = 0; o < n.length; o++) {
            var s = n[o];
            a[s] && (u(e, s) >= 0 ? (r[s] = Cu(a[s]), i._rawExtent[s] = ku(), i._extent[s] = null) : r[s] = a[s])
        }
        return i
    }
    function Cu(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = mu(t[n]);
        return e
    }
    function ku() {
        return [1 / 0, -1 / 0]
    }
    function Du(t, e, n) {
        function r(t, e, n) {
            null != N_.get(e) ? t.otherDims[e] = n: (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
        }
        Oo.isInstance(e) || (e = Oo.seriesDataToSource(e)),
        n = n || {},
        t = (t || []).slice();
        for (var a = (n.dimsDef || []).slice(), l = z(n.encodeDef), u = z(), h = z(), c = [], d = Au(e, t, a, n.dimCount), p = 0; d > p; p++) {
            var g = a[p] = o({},
            M(a[p]) ? a[p] : {
                name: a[p]
            }),
            v = g.name,
            m = c[p] = {
                otherDims: {}
            };
            null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)),
            null != g.type && (m.type = g.type),
            null != g.displayName && (m.displayName = g.displayName)
        }
        l.each(function(t, e) {
            if (t = Bi(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
            var n = l.set(e, []);
            f(t,
            function(t, i) {
                b(t) && (t = u.get(t)),
                null != t && d > t && (n[i] = t, r(c[t], e, i))
            })
        });
        var y = 0;
        f(t,
        function(t) {
            var e, t, n, a;
            if (b(t)) e = t,
            t = {};
            else {
                e = t.name;
                var o = t.ordinalMeta;
                t.ordinalMeta = null,
                t = i(t),
                t.ordinalMeta = o,
                n = t.dimsDef,
                a = t.otherDims,
                t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var u = l.get(e);
            if (u !== !1) {
                var u = Bi(u);
                if (!u.length) for (var h = 0; h < (n && n.length || 1); h++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && u.push(y++)
                }
                f(u,
                function(i, o) {
                    var l = c[i];
                    if (r(s(l, t), e, o), null == l.name && n) {
                        var u = n[o]; ! M(u) && (u = {
                            name: u
                        }),
                        l.name = l.displayName = u.name,
                        l.defaultTooltip = u.defaultTooltip
                    }
                    a && s(l.otherDims, a)
                })
            }
        });
        var _ = n.generateCoord,
        x = n.generateCoordCount,
        w = null != x;
        x = _ ? x || 1 : 0;
        for (var S = _ || "value",
        T = 0; d > T; T++) {
            var m = c[T] = c[T] || {},
            I = m.coordDim;
            null == I && (m.coordDim = Lu(S, h, w), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--),
            null == m.name && (m.name = Lu(m.coordDim, u)),
            null == m.type && Xo(e, T, m.name) && (m.type = "ordinal")
        }
        return c
    }
    function Au(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return f(e,
        function(t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }),
        r
    }
    function Lu(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0),
        t
    }
    function Pu(t, e, n) {
        n = n || {};
        var i, r, a, o, s = n.byIndex,
        l = n.stackedCoordDimension,
        u = !(!t || !t.get("stack"));
        if (f(e,
        function(t, n) {
            b(t) && (e[n] = t = {
                name: t
            }),
            u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || i || (s = !0), r) {
            a = "__\x00ecstackresult",
            o = "__\x00ecstackedover",
            i && (i.createInvertedIndices = !0);
            var h = r.coordDim,
            c = r.type,
            d = 0;
            f(e,
            function(t) {
                t.coordDim === h && d++
            }),
            e.push({
                name: a,
                coordDim: h,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }),
            d++,
            e.push({
                name: o,
                coordDim: o,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            })
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }
    function Ou(t, e) {
        return !! e && e === t.getCalculationInfo("stackedDimension")
    }
    function Nu(t, e) {
        return Ou(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }
    function Eu(t, e, n) {
        n = n || {},
        Oo.isInstance(t) || (t = Oo.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"),
        a = ts.get(r),
        o = Lo(e);
        o && (i = p(o.coordSysDims,
        function(t) {
            var e = {
                name: t
            },
            n = o.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = pu(i)
            }
            return e
        })),
        i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, u = Z_(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord
        });
        o && f(u,
        function(t, e) {
            var n = t.coordDim,
            i = o.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()),
            null != t.otherDims.itemName && (l = !0)
        }),
        l || null == s || (u[s].otherDims.itemName = 0);
        var h = Pu(e, u),
        c = new Y_(u, e);
        c.setCalculationInfo(h);
        var d = null != s && Ru(t) ?
        function(t, e, n, i) {
            return i === s ? n: this.defaultDimValueGetter(t, e, n, i)
        }: null;
        return c.hasItemOption = !1,
        c.initData(t, null, d),
        c
    }
    function Ru(t) {
        if (t.sourceFormat === Nm) {
            var e = Bu(t.data || []);
            return null != e && !x(Fi(e))
        }
    }
    function Bu(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }
    function zu(t) {
        this._setting = t || {},
        this._extent = [1 / 0, -1 / 0],
        this._interval = 0,
        this.init && this.init.apply(this, arguments)
    }
    function Fu(t) {
        this.categories = t.categories || [],
        this._needCollect = t.needCollect,
        this._deduplication = t.deduplication,
        this._map
    }
    function Vu(t) {
        return t._map || (t._map = z(t.categories))
    }
    function Wu(t) {
        return M(t) && null != t.value ? t.value: t + ""
    }
    function Hu(t, e, n, i) {
        var r = {},
        a = t[1] - t[0],
        o = r.interval = lo(a / e, !0);
        null != n && n > o && (o = r.interval = n),
        null != i && o > i && (o = r.interval = i);
        var s = r.intervalPrecision = Gu(o),
        l = r.niceTickExtent = [Q_(Math.ceil(t[0] / o) * o, s), Q_(Math.floor(t[1] / o) * o, s)];
        return Yu(l, t),
        r
    }
    function Gu(t) {
        return to(t) + 2
    }
    function Xu(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }
    function Yu(t, e) { ! isFinite(t[0]) && (t[0] = e[0]),
        !isFinite(t[1]) && (t[1] = e[1]),
        Xu(t, 0, e),
        Xu(t, 1, e),
        t[0] > t[1] && (t[0] = t[1])
    }
    function qu(t, e, n, i) {
        var r = [];
        if (!t) return r;
        var a = 1e4;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o), o = Q_(o + t, i), o !== r[r.length - 1]);) if (r.length > a) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]),
        r
    }
    function ju(t) {
        return t.get("stack") || ex + t.seriesIndex
    }
    function Zu(t) {
        return t.dim + t.index
    }
    function Uu(t, e) {
        var n = [];
        return e.eachSeriesByType(t,
        function(t) {
            th(t) && !eh(t) && n.push(t)
        }),
        n
    }
    function $u(t) {
        var e = [];
        return f(t,
        function(t) {
            var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = r.getExtent(),
            o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
            s = $a(t.get("barWidth"), o),
            l = $a(t.get("barMaxWidth"), o),
            u = t.get("barGap"),
            h = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: s,
                barMaxWidth: l,
                barGap: u,
                barCategoryGap: h,
                axisKey: Zu(r),
                stackId: ju(t)
            })
        }),
        Ku(e)
    }
    function Ku(t) {
        var e = {};
        f(t,
        function(t) {
            var n = t.axisKey,
            i = t.bandWidth,
            r = e[n] || {
                bandWidth: i,
                remainedWidth: i,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            },
            a = r.stacks;
            e[n] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++,
            a[o] = a[o] || {
                width: 0,
                maxWidth: 0
            };
            var s = t.barWidth;
            s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var u = t.barGap;
            null != u && (r.gap = u);
            var h = t.barCategoryGap;
            null != h && (r.categoryGap = h)
        });
        var n = {};
        return f(e,
        function(t, e) {
            n[e] = {};
            var i = t.stacks,
            r = t.bandWidth,
            a = $a(t.categoryGap, r),
            o = $a(t.gap, 1),
            s = t.remainedWidth,
            l = t.autoWidthCount,
            u = (s - a) / (l + (l - 1) * o);
            u = Math.max(u, 0),
            f(i,
            function(t) {
                var e = t.maxWidth;
                e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
            }),
            u = (s - a) / (l + (l - 1) * o),
            u = Math.max(u, 0);
            var h, c = 0;
            f(i,
            function(t) {
                t.width || (t.width = u),
                h = t,
                c += t.width * (1 + o)
            }),
            h && (c -= h.width * o);
            var d = -c / 2;
            f(i,
            function(t, i) {
                n[e][i] = n[e][i] || {
                    offset: d,
                    width: t.width
                },
                d += t.width * (1 + o)
            })
        }),
        n
    }
    function Qu(t, e, n) {
        if (t && e) {
            var i = t[Zu(e)];
            return null != i && null != n && (i = i[ju(n)]),
            i
        }
    }
    function Ju(t, e) {
        var n = Uu(t, e),
        i = $u(n),
        r = {};
        f(n,
        function(t) {
            var e = t.getData(),
            n = t.coordinateSystem,
            a = n.getBaseAxis(),
            o = ju(t),
            s = i[Zu(a)][o],
            l = s.offset,
            u = s.width,
            h = n.getOtherAxis(a),
            c = t.get("barMinHeight") || 0;
            r[o] = r[o] || [],
            e.setLayout({
                offset: l,
                size: u
            });
            for (var d = e.mapDimension(h.dim), f = e.mapDimension(a.dim), p = Ou(e, d), g = h.isHorizontal(), v = nh(a, h, p), m = 0, y = e.count(); y > m; m++) {
                var _ = e.get(d, m),
                x = e.get(f, m);
                if (!isNaN(_)) {
                    var w = _ >= 0 ? "p": "n",
                    b = v;
                    p && (r[o][x] || (r[o][x] = {
                        p: v,
                        n: v
                    }), b = r[o][x][w]);
                    var M, S, T, I;
                    if (g) {
                        var C = n.dataToPoint([_, x]);
                        M = b,
                        S = C[1] + l,
                        T = C[0] - v,
                        I = u,
                        Math.abs(T) < c && (T = (0 > T ? -1 : 1) * c),
                        p && (r[o][x][w] += T)
                    } else {
                        var C = n.dataToPoint([x, _]);
                        M = C[0] + l,
                        S = b,
                        T = u,
                        I = C[1] - v,
                        Math.abs(I) < c && (I = (0 >= I ? -1 : 1) * c),
                        p && (r[o][x][w] += I)
                    }
                    e.setItemLayout(m, {
                        x: M,
                        y: S,
                        width: T,
                        height: I
                    })
                }
            }
        },
        this)
    }
    function th(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }
    function eh(t) {
        return t.pipelineContext && t.pipelineContext.large
    }
    function nh(t, e) {
        var n, i, r = e.getGlobalExtent();
        r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return n > a && (a = n),
        a > i && (a = i),
        a
    }
    function ih(t, e) {
        return yx(t, mx(e))
    }
    function rh(t, e) {
        var n, i, r, a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        u = null != s,
        h = t.getExtent();
        "ordinal" === a ? n = e.getCategories().length: (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = $a(i[0], 1), i[1] = $a(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])),
        null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r),
        null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r),
        "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
            min: h[0],
            max: h[1]
        })),
        "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
            min: h[0],
            max: h[1]
        })),
        (null == o || !isFinite(o)) && (o = 0 / 0),
        (null == s || !isFinite(s)) && (s = 0 / 0),
        t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length),
        e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = Uu("bar", c);
            if (f(p,
            function(t) {
                d |= t.getBaseAxis() === e.axis
            }), d) {
                var g = $u(p),
                v = ah(o, s, e, g);
                o = v.min,
                s = v.max
            }
        }
        return [o, s]
    }
    function ah(t, e, n, i) {
        var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = Qu(i, n.axis);
        if (void 0 === o) return {
            min: t,
            max: e
        };
        var s = 1 / 0;
        f(o,
        function(t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o,
        function(t) {
            l = Math.max(t.offset + t.width, l)
        }),
        s = Math.abs(s),
        l = Math.abs(l);
        var u = s + l,
        h = e - t,
        c = 1 - (s + l) / a,
        d = h / c - h;
        return e += d * (l / u),
        t -= d * (s / u),
        {
            min: t,
            max: e
        }
    }
    function oh(t, e) {
        var n = rh(t, e),
        i = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]),
        t.niceExtent({
            splitNumber: a,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }
    function sh(t, e) {
        if (e = e || t.get("type")) switch (e) {
        case "category":
            return new K_(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
        case "value":
            return new tx;
        default:
            return (zu.getClass(e) || tx).create(t)
        }
    }
    function lh(t) {
        var e = t.scale.getExtent(),
        n = e[0],
        i = e[1];
        return ! (n > 0 && i > 0 || 0 > n && 0 > i)
    }
    function uh(t) {
        var e = t.getLabelModel().get("formatter"),
        n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function(e) {
            return function(n) {
                return n = t.scale.getLabel(n),
                e.replace("{value}", null != n ? n: "")
            }
        } (e) : "function" == typeof e ?
        function(i, r) {
            return null != n && (r = i - n),
            e(hh(t, i), r)
        }: function(e) {
            return t.scale.getLabel(e)
        }
    }
    function hh(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }
    function ch(t) {
        var e = t.model,
        n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i, r, a = "category" === t.type,
            o = n.getExtent();
            a ? r = n.count() : (i = n.getTicks(), r = i.length);
            var s, l = t.getLabelModel(),
            u = uh(t),
            h = 1;
            r > 40 && (h = Math.ceil(r / 40));
            for (var c = 0; r > c; c += h) {
                var d = i ? i[c] : o[0] + c,
                f = u(d),
                p = l.getTextRect(f),
                g = dh(p, l.get("rotate") || 0);
                s ? s.union(g) : s = g
            }
            return s
        }
    }
    function dh(t, e) {
        var n = e * Math.PI / 180,
        i = t.plain(),
        r = i.width,
        a = i.height,
        o = r * Math.cos(n) + a * Math.sin(n),
        s = r * Math.sin(n) + a * Math.cos(n),
        l = new _n(i.x, i.y, o, s);
        return l
    }
    function fh(t) {
        var e = t.get("interval");
        return null == e ? "auto": e
    }
    function ph(t) {
        return "category" === t.type && 0 === fh(t.getLabelModel())
    }
    function gh(t, e) {
        if ("image" !== this.type) {
            var n = this.style,
            i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t: this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)),
            this.dirty(!1)
        }
    }
    function vh(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? ea(t.slice(8), new _n(e, n, i, r), o ? "center": "cover") : 0 === t.indexOf("path://") ? ta(t.slice(7), {},
        new _n(e, n, i, r), o ? "center": "cover") : new Ox({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }),
        l.__isEmptyBrush = s,
        l.setColor = gh,
        l.setColor(a),
        l
    }
    function mh(t) {
        return Eu(t.getSource(), t)
    }
    function yh(t, e) {
        var n = e;
        Ha.isInstance(e) || (n = new Ha(e), c(n, Tx));
        var i = sh(n);
        return i.setExtent(t[0], t[1]),
        oh(i, n),
        i
    }
    function _h(t) {
        c(t, Tx)
    }
    function xh(t, e) {
        return Math.abs(t - e) < Rx
    }
    function wh(t, e, n) {
        var i = 0,
        r = t[0];
        if (!r) return ! 1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            i += Dr(r[0], r[1], o[0], o[1], e, n),
            r = o
        }
        var s = t[0];
        return xh(r[0], s[0]) && xh(r[1], s[1]) || (i += Dr(r[0], r[1], s[0], s[1], e, n)),
        0 !== i
    }
    function bh(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];
        else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2]
        }
        this.center = n
    }
    function Mh(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features,
        i = 0; i < n.length; i++) for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
            var u = o[l];
            if ("Polygon" === a.type) o[l] = Sh(u, s[l], e);
            else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
                var c = u[h];
                u[h] = Sh(c, s[l][h], e)
            }
        }
        return t.UTF8Encoding = !1,
        t
    }
    function Sh(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64,
            l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s),
            l = l >> 1 ^ -(1 & l),
            s += r,
            l += a,
            r = s,
            a = l,
            i.push([s / n, l / n])
        }
        return i
    }
    function Th(t) {
        return "category" === t.type ? Ch(t) : Ah(t)
    }
    function Ih(t, e) {
        return "category" === t.type ? Dh(t, e) : {
            ticks: t.scale.getTicks()
        }
    }
    function Ch(t) {
        var e = t.getLabelModel(),
        n = kh(t, e);
        return ! e.get("show") || t.scale.isBlank() ? {
            labels: [],
            labelCategoryInterval: n.labelCategoryInterval
        }: n
    }
    function kh(t, e) {
        var n = Lh(t, "labels"),
        i = fh(e),
        r = Ph(n, i);
        if (r) return r;
        var a, o;
        return w(i) ? a = zh(t, i) : (o = "auto" === i ? Nh(t) : i, a = Bh(t, o)),
        Oh(n, i, {
            labels: a,
            labelCategoryInterval: o
        })
    }
    function Dh(t, e) {
        var n = Lh(t, "ticks"),
        i = fh(e),
        r = Ph(n, i);
        if (r) return r;
        var a, o;
        if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = zh(t, i, !0);
        else if ("auto" === i) {
            var s = kh(t, t.getLabelModel());
            o = s.labelCategoryInterval,
            a = p(s.labels,
            function(t) {
                return t.tickValue
            })
        } else o = i,
        a = Bh(t, o, !0);
        return Oh(n, i, {
            ticks: a,
            tickCategoryInterval: o
        })
    }
    function Ah(t) {
        var e = t.scale.getTicks(),
        n = uh(t);
        return {
            labels: p(e,
            function(e, i) {
                return {
                    formattedLabel: n(e, i),
                    rawLabel: t.scale.getLabel(e),
                    tickValue: e
                }
            })
        }
    }
    function Lh(t, e) {
        return zx(t)[e] || (zx(t)[e] = [])
    }
    function Ph(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }
    function Oh(t, e, n) {
        return t.push({
            key: e,
            value: n
        }),
        n
    }
    function Nh(t) {
        var e = zx(t).autoInterval;
        return null != e ? e: zx(t).autoInterval = t.calculateCategoryInterval()
    }
    function Eh(t) {
        var e = Rh(t),
        n = uh(t),
        i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0,
            g = 0,
            v = zn(n(l), e.font, "center", "top");
            p = 1.3 * v.width,
            g = 1.3 * v.height,
            d = Math.max(d, p, 7),
            f = Math.max(f, g, 7)
        }
        var m = d / h,
        y = f / c;
        isNaN(m) && (m = 1 / 0),
        isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = zx(t.model),
        w = x.lastAutoInterval,
        b = x.lastTickCount;
        return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w: (x.lastTickCount = o, x.lastAutoInterval = _),
        _
    }
    function Rh(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }
    function Bh(t, e, n) {
        function i(t) {
            l.push(n ? t: {
                formattedLabel: r(t),
                rawLabel: a.getLabel(t),
                tickValue: t
            })
        }
        var r = uh(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        u = Math.max((e || 0) + 1, 1),
        h = o[0],
        c = a.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var d = ph(t),
        f = s.get("showMinLabel") || d,
        p = s.get("showMaxLabel") || d;
        f && h !== o[0] && i(o[0]);
        for (var g = h; g <= o[1]; g += u) i(g);
        return p && g !== o[1] && i(o[1]),
        l
    }
    function zh(t, e, n) {
        var i = t.scale,
        r = uh(t),
        a = [];
        return f(i.getTicks(),
        function(t) {
            var o = i.getLabel(t);
            e(t, o) && a.push(n ? t: {
                formattedLabel: r(t),
                rawLabel: o,
                tickValue: t
            })
        }),
        a
    }
    function Fh(t, e) {
        var n = t[1] - t[0],
        i = e,
        r = n / i / 2;
        t[0] += r,
        t[1] -= r
    }
    function Vh(t, e, n, i, r) {
        function a(t, e) {
            return h ? t > e: e > t
        }
        var o = e.length;
        if (t.onBand && !i && o) {
            var s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0],
            s = e[1] = {
                coord: l[0]
            };
            else {
                var u = e[1].coord - e[0].coord;
                f(e,
                function(t) {
                    t.coord -= u / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
                }),
                s = {
                    coord: e[o - 1].coord + u
                },
                e.push(s)
            }
            var h = l[0] > l[1];
            a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()),
            r && a(l[0], e[0].coord) && e.unshift({
                coord: l[0]
            }),
            a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()),
            r && a(s.coord, l[1]) && e.push({
                coord: l[1]
            })
        }
    }
    function Wh(t) {
        return this._axes[t]
    }
    function Hh(t) {
        Xx.call(this, t)
    }
    function Gh(t, e) {
        return e.type || (e.data ? "category": "value")
    }
    function Xh(t, e) {
        return t.getCoordSysModel() === e
    }
    function Yh(t, e, n) {
        this._coordsMap = {},
        this._coordsList = [],
        this._axesMap = {},
        this._axesList = [],
        this._initCartesian(t, e, n),
        this.model = t
    }
    function qh(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index
        }
        n.getAxesOnZeroOf = function() {
            return a ? [a] : []
        };
        var a, o = t[e],
        s = n.model,
        l = s.get("axisLine.onZero"),
        u = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != u) jh(o[u]) && (a = o[u]);
            else for (var h in o) if (o.hasOwnProperty(h) && jh(o[h]) && !i[r(o[h])]) {
                a = o[h];
                break
            }
            a && (i[r(a)] = !0)
        }
    }
    function jh(t) {
        return t && "category" !== t.type && "time" !== t.type && lh(t)
    }
    function Zh(t, e) {
        var n = t.getExtent(),
        i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ?
        function(t) {
            return t + e
        }: function(t) {
            return i - t + e
        },
        t.toLocalCoord = "x" === t.dim ?
        function(t) {
            return t - e
        }: function(t) {
            return i - t + e
        }
    }
    function Uh(t) {
        return p(Jx,
        function(e) {
            var n = t.getReferringComponents(e)[0];
            return n
        })
    }
    function $h(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }
    function Kh(t, e) {
        var n = t.mapDimension("defaultedLabel", !0),
        i = n.length;
        if (1 === i) return Is(t, e, n[0]);
        if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
                var o = Is(t, e, n[a]);
                r.push(o)
            }
            return r.join(" ")
        }
    }
    function Qh(t, e, n, i, r, a) {
        var o = n.getModel("label"),
        s = n.getModel("emphasis.label");
        ba(t, e, o, s, {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: Kh(r.getData(), a),
            isRectText: !0,
            autoColor: i
        }),
        Jh(t),
        Jh(e)
    }
    function Jh(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }
    function tc(t, e, n) {
        n.style.text = null,
        Oa(n, {
            shape: {
                width: 0
            }
        },
        e, t,
        function() {
            n.parent && n.parent.remove(n)
        })
    }
    function ec(t, e, n) {
        n.style.text = null,
        Oa(n, {
            shape: {
                r: n.shape.r0
            }
        },
        e, t,
        function() {
            n.parent && n.parent.remove(n)
        })
    }
    function nc(t, e, n, i, r, a, o, l) {
        var u = e.getItemVisual(n, "color"),
        h = e.getItemVisual(n, "opacity"),
        c = i.getModel("itemStyle"),
        d = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0),
        t.useStyle(s({
            fill: u,
            opacity: h
        },
        c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = o ? r.height > 0 ? "bottom": "top": r.width > 0 ? "left": "right";
        l || Qh(t.style, d, i, u, a, n, p),
        xa(t, d)
    }
    function ic(t, e) {
        var n = t.get(iw) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }
    function rc(t, e, n) {
        var i = t.getData(),
        r = [],
        a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = i.getLayout("valueAxisStart");
        var o = new ow({
            shape: {
                points: i.getLayout("largePoints")
            },
            incremental: !!n,
            __startPoint: r,
            __valueIdx: a
        });
        e.add(o),
        ac(o, t, i)
    }
    function ac(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"),
        r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r),
        t.style.fill = null,
        t.style.stroke = i,
        t.style.lineWidth = n.getLayout("barWidth")
    }
    function oc(t) {
        var e = {
            componentType: t.mainType,
            componentIndex: t.componentIndex
        };
        return e[t.mainType + "Index"] = t.componentIndex,
        e
    }
    function sc(t, e, n, i) {
        var r, a, o = io(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;
        return ro(o - sw / 2) ? (a = l ? "bottom": "top", r = "center") : ro(o - 1.5 * sw) ? (a = l ? "top": "bottom", r = "center") : (a = "middle", r = 1.5 * sw > o && o > sw / 2 ? l ? "left": "right": l ? "right": "left"),
        {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }
    function lc(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }
    function uc(t, e, n) {
        if (!ph(t.axis)) {
            var i = t.get("axisLabel.showMinLabel"),
            r = t.get("axisLabel.showMaxLabel");
            e = e || [],
            n = n || [];
            var a = e[0],
            o = e[1],
            s = e[e.length - 1],
            l = e[e.length - 2],
            u = n[0],
            h = n[1],
            c = n[n.length - 1],
            d = n[n.length - 2];
            i === !1 ? (hc(a), hc(u)) : cc(a, o) && (i ? (hc(o), hc(h)) : (hc(a), hc(u))),
            r === !1 ? (hc(s), hc(c)) : cc(l, s) && (r ? (hc(l), hc(d)) : (hc(s), hc(c)))
        }
    }
    function hc(t) {
        t && (t.ignore = !0)
    }
    function cc(t, e) {
        var n = t && t.getBoundingRect().clone(),
        i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = Ie([]);
            return Ae(r, r, -t.rotation),
            n.applyTransform(ke([], r, t.getLocalTransform())),
            i.applyTransform(ke([], r, e.getLocalTransform())),
            n.intersect(i)
        }
    }
    function dc(t) {
        return "middle" === t || "center" === t
    }
    function fc(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                u[0] = p,
                u[1] = 0,
                h[0] = p,
                h[1] = n.tickDirection * o,
                c && (ae(u, u, c), ae(h, h, c));
                var g = new Wv(ra({
                    anid: "tick_" + l[f].tickValue,
                    shape: {
                        x1: u[0],
                        y1: u[1],
                        x2: h[0],
                        y2: h[1]
                    },
                    style: s(a.getLineStyle(), {
                        stroke: e.get("axisLine.lineStyle.color")
                    }),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g),
                d.push(g)
            }
            return d
        }
    }
    function pc(t, e, n) {
        var i = e.axis,
        r = k(n.axisLabelShow, e.get("axisLabel.show"));
        if (r && !i.scale.isBlank()) {
            var a = e.getModel("axisLabel"),
            o = a.get("margin"),
            s = i.getViewLabels(),
            l = (k(n.labelRotate, a.get("rotate")) || 0) * sw / 180,
            u = hw(n.rotation, l, n.labelDirection),
            h = e.getCategories(!0),
            c = [],
            d = lc(e),
            p = e.get("triggerEvent");
            return f(s,
            function(r, s) {
                var l = r.tickValue,
                f = r.formattedLabel,
                g = r.rawLabel,
                v = a;
                h && h[l] && h[l].textStyle && (v = new Ha(h[l].textStyle, a, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
                y = i.dataToCoord(l),
                _ = [y, n.labelOffset + n.labelDirection * o],
                x = new Cv({
                    anid: "label_" + l,
                    position: _,
                    rotation: u.rotation,
                    silent: d,
                    z2: 10
                });
                Ma(x.style, v, {
                    text: f,
                    textAlign: v.getShallow("align", !0) || u.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === i.type ? g: "value" === i.type ? l + "": l, s) : m
                }),
                p && (x.eventData = oc(e), x.eventData.targetType = "axisLabel", x.eventData.value = g),
                t._dumbGroup.add(x),
                x.updateTransform(),
                c.push(x),
                t.group.add(x),
                x.decomposeTransform()
            }),
            c
        }
    }
    function gc(t) {
        var e = vc(t);
        if (e) {
            var n = e.axisPointerModel,
            i = e.axis.scale,
            r = n.option,
            a = n.get("status"),
            o = n.get("value");
            null != o && (o = i.parse(o));
            var s = yc(n);
            null == a && (r.status = s ? "show": "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(),
            (null == o || o > l[1]) && (o = l[1]),
            o < l[0] && (o = l[0]),
            r.value = o,
            s && (r.status = e.axis.scale.isBlank() ? "hide": "show")
        }
    }
    function vc(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[_c(t)]
    }
    function mc(t) {
        var e = vc(t);
        return e && e.axisPointerModel
    }
    function yc(t) {
        return !! t.get("handle.show")
    }
    function _c(t) {
        return t.type + "||" + t.id
    }
    function xc(t, e, n, i, r, a) {
        var o = cw.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = mc(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : wc(t, i)
        }
    }
    function wc(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n),
        t._axisPointer = null
    }
    function bc(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero": s,
        u = r.dim,
        h = i.getRect(),
        c = [h.x, h.x + h.width, h.y, h.y + h.height],
        d = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        },
        f = e.get("offset") || 0,
        p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]],
        a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var v = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        };
        a.labelDirection = a.tickDirection = a.nameDirection = v[s],
        a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0,
        e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection),
        k(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -m: m,
        a.z2 = 1,
        a
    }
    function Mc(t, e, n) {
        gp.call(this),
        this.updateData(t, e, n)
    }
    function Sc(t) {
        return [t[0] / 2, t[1] / 2]
    }
    function Tc(t, e) {
        this.parent.drift(t, e)
    }
    function Ic() { ! ga(this) && kc.call(this)
    }
    function Cc() { ! ga(this) && Dc.call(this)
    }
    function kc() {
        if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale,
            e = t[1] / t[0];
            this.animateTo({
                scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]
            },
            400, "elasticOut")
        }
    }
    function Dc() {
        this.incremental || this.useHoverLayer || this.animateTo({
            scale: this.__symbolOriginalScale
        },
        400, "elasticOut")
    }
    function Ac(t) {
        this.group = new gp,
        this._symbolCtor = t || Mc
    }
    function Lc(t, e, n, i) {
        return ! (!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
    }
    function Pc(t) {
        return null == t || M(t) || (t = {
            isIgnore: t
        }),
        t || {}
    }
    function Oc(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }
    function Nc(t, e, n) {
        var i, r = t.getBaseAxis(),
        a = t.getOtherAxis(r),
        o = Ec(a, n),
        s = r.dim,
        l = a.dim,
        u = e.mapDimension(l),
        h = e.mapDimension(s),
        c = "x" === l || "radius" === l ? 1 : 0,
        d = p(t.dimensions,
        function(t) {
            return e.mapDimension(t)
        }),
        f = e.getCalculationInfo("stackResultDimension");
        return (i |= Ou(e, d[0])) && (d[0] = f),
        (i |= Ou(e, d[1])) && (d[1] = f),
        {
            dataDimsForPoint: d,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!i,
            valueDim: u,
            baseDim: h,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }
    function Ec(t, e) {
        var n = 0,
        i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]),
        n
    }
    function Rc(t, e, n, i) {
        var r = 0 / 0;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)),
        isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset,
        o = [];
        return o[a] = n.get(t.baseDim, i),
        o[1 - a] = r,
        e.dataToPoint(o)
    }
    function Bc(t, e) {
        var n = [];
        return e.diff(t).add(function(t) {
            n.push({
                cmd: "+",
                idx: t
            })
        }).update(function(t, e) {
            n.push({
                cmd: "=",
                idx: e,
                idx1: t
            })
        }).remove(function(t) {
            n.push({
                cmd: "-",
                idx: t
            })
        }).execute(),
        n
    }
    function zc(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }
    function Fc(t, e, n, i, r, a, o, s, l, u) {
        return "none" !== u && u ? Vc.apply(this, arguments) : Wc.apply(this, arguments)
    }
    function Vc(t, e, n, i, r, a, o, s, l, u, h) {
        for (var c = 0,
        d = n,
        f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (zc(p)) {
                if (h) {
                    d += a;
                    continue
                }
                break
            }
            if (d === n) t[a > 0 ? "moveTo": "lineTo"](p[0], p[1]);
            else if (l > 0) {
                var g = e[c],
                v = "y" === u ? 1 : 0,
                m = (p[v] - g[v]) * l;
                Cw(Dw, g),
                Dw[v] = g[v] + m,
                Cw(Aw, p),
                Aw[v] = p[v] - m,
                t.bezierCurveTo(Dw[0], Dw[1], Aw[0], Aw[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = d,
            d += a
        }
        return f
    }
    function Wc(t, e, n, i, r, a, o, s, l, u, h) {
        for (var c = 0,
        d = n,
        f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (zc(p)) {
                if (h) {
                    d += a;
                    continue
                }
                break
            }
            if (d === n) t[a > 0 ? "moveTo": "lineTo"](p[0], p[1]),
            Cw(Dw, p);
            else if (l > 0) {
                var g = d + a,
                v = e[g];
                if (h) for (; v && zc(e[g]);) g += a,
                v = e[g];
                var m = .5,
                y = e[c],
                v = e[g];
                if (!v || zc(v)) Cw(Aw, p);
                else {
                    zc(v) && !h && (v = p),
                    j(kw, v, y);
                    var _, x;
                    if ("x" === u || "y" === u) {
                        var w = "x" === u ? 0 : 1;
                        _ = Math.abs(p[w] - y[w]),
                        x = Math.abs(p[w] - v[w])
                    } else _ = Mf(p, y),
                    x = Mf(p, v);
                    m = x / (x + _),
                    Iw(Aw, p, kw, -l * (1 - m))
                }
                Sw(Dw, Dw, s),
                Tw(Dw, Dw, o),
                Sw(Aw, Aw, s),
                Tw(Aw, Aw, o),
                t.bezierCurveTo(Dw[0], Dw[1], Aw[0], Aw[1], p[0], p[1]),
                Iw(Dw, p, kw, l * m)
            } else t.lineTo(p[0], p[1]);
            c = d,
            d += a
        }
        return f
    }
    function Hc(t, e) {
        var n = [1 / 0, 1 / 0],
        i = [ - 1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < n[0] && (n[0] = a[0]),
            a[1] < n[1] && (n[1] = a[1]),
            a[0] > i[0] && (i[0] = a[0]),
            a[1] > i[1] && (i[1] = a[1])
        }
        return {
            min: e ? n: i,
            max: e ? i: n
        }
    }
    function Gc(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return
            }
            return ! 0
        }
    }
    function Xc(t) {
        return "number" == typeof t ? t: t ? .5 : 0
    }
    function Yc(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1,
            i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n,
            e[1] -= i * n
        }
        return e
    }
    function qc(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, a = e.count(); a > r; r++) i.push(Rc(n, t, e, r));
        return i
    }
    function jc(t, e, n, i) {
        var r = Yc(t.getAxis("x")),
        a = Yc(t.getAxis("y")),
        o = t.getBaseAxis().isHorizontal(),
        s = Math.min(r[0], r[1]),
        l = Math.min(a[0], a[1]),
        u = Math.max(r[0], r[1]) - s,
        h = Math.max(a[0], a[1]) - l;
        if (n) s -= .5,
        u += .5,
        l -= .5,
        h += .5;
        else {
            var c = i.get("lineStyle.width") || 2,
            d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
            o ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d)
        }
        var f = new Fv({
            shape: {
                x: s,
                y: l,
                width: u,
                height: h
            }
        });
        return e && (f.shape[o ? "width": "height"] = 0, Na(f, {
            shape: {
                width: u,
                height: h
            }
        },
        i)),
        f
    }
    function Zc(t, e, n, i) {
        var r = t.getAngleAxis(),
        a = t.getRadiusAxis(),
        o = a.getExtent().slice();
        o[0] > o[1] && o.reverse();
        var s = r.getExtent(),
        l = Math.PI / 180;
        n && (o[0] -= .5, o[1] += .5);
        var u = new Lv({
            shape: {
                cx: Ka(t.cx, 1),
                cy: Ka(t.cy, 1),
                r0: Ka(o[0], 1),
                r: Ka(o[1], 1),
                startAngle: -s[0] * l,
                endAngle: -s[1] * l,
                clockwise: r.inverse
            }
        });
        return e && (u.shape.endAngle = -s[0] * l, Na(u, {
            shape: {
                endAngle: -s[1] * l
            }
        },
        i)),
        u
    }
    function Uc(t, e, n, i) {
        return "polar" === t.type ? Zc(t, e, n, i) : jc(t, e, n, i)
    }
    function $c(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1],
            l = t[o];
            a.push(l);
            var u = [];
            switch (n) {
            case "end":
                u[r] = s[r],
                u[1 - r] = l[1 - r],
                a.push(u);
                break;
            case "middle":
                var h = (l[r] + s[r]) / 2,
                c = [];
                u[r] = c[r] = h,
                u[1 - r] = l[1 - r],
                c[1 - r] = s[1 - r],
                a.push(u),
                a.push(c);
                break;
            default:
                u[r] = l[r],
                u[1 - r] = s[1 - r],
                a.push(u)
            }
        }
        return t[o] && a.push(t[o]),
        a
    }
    function Kc(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
                var o = n[a].dimension,
                s = t.dimensions[o],
                l = t.getDimensionInfo(s);
                if (i = l && l.coordDim, "x" === i || "y" === i) {
                    r = n[a];
                    break
                }
            }
            if (r) {
                var u = e.getAxis(i),
                h = p(r.stops,
                function(t) {
                    return {
                        coord: u.toGlobalCoord(u.dataToCoord(t.value)),
                        color: t.color
                    }
                }),
                c = h.length,
                d = r.outerColors.slice();
                c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());
                var g = 10,
                v = h[0].coord - g,
                m = h[c - 1].coord + g,
                y = m - v;
                if (.001 > y) return "transparent";
                f(h,
                function(t) {
                    t.offset = (t.coord - v) / y
                }),
                h.push({
                    offset: c ? h[c - 1].offset: .5,
                    color: d[1] || "transparent"
                }),
                h.unshift({
                    offset: c ? h[0].offset: .5,
                    color: d[0] || "transparent"
                });
                var _ = new jv(0, 0, 0, 0, h, !0);
                return _[i] = v,
                _[i + "2"] = m,
                _
            }
        }
    }
    function Qc(t, e, n) {
        var i = t.get("showAllSymbol"),
        r = "auto" === i;
        if (!i || r) {
            var a = n.getAxesByScale("ordinal")[0];
            if (a && (!r || !Jc(a, e))) {
                var o = e.mapDimension(a.dim),
                s = {};
                return f(a.getViewLabels(),
                function(t) {
                    s[t.tickValue] = 1
                }),
                function(t) {
                    return ! s.hasOwnProperty(e.get(o, t))
                }
            }
        }
    }
    function Jc(t, e) {
        var n = t.getExtent(),
        i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) if (1.5 * Mc.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return ! 1;
        return ! 0
    }
    function td(t, e, n, i) {
        var r = e.getData(),
        a = this.dataIndex,
        o = r.getName(a),
        s = e.get("selectedOffset");
        i.dispatchAction({
            type: "pieToggleSelect",
            from: t,
            name: o,
            seriesId: e.id
        }),
        r.each(function(t) {
            ed(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }
    function ed(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2,
        o = Math.cos(a),
        s = Math.sin(a),
        l = n ? i: 0,
        u = [o * l, s * l];
        r ? t.animate().when(200, {
            position: u
        }).start("bounceOut") : t.attr("position", u)
    }
    function nd(t, e) {
        function n() {
            a.ignore = a.hoverIgnore,
            o.ignore = o.hoverIgnore
        }
        function i() {
            a.ignore = a.normalIgnore,
            o.ignore = o.normalIgnore
        }
        gp.call(this);
        var r = new Lv({
            z2: 2
        }),
        a = new Rv,
        o = new Cv;
        this.add(r),
        this.add(a),
        this.add(o),
        this.updateData(t, e, !0),
        this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }
    function id(t, e, n, i, r, a, o) {
        function s(e, n, i) {
            for (var r = e; n > r; r++) if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
            l(n - 1, i / 2)
        }
        function l(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
        }
        function u(t, e, n, i, r, a) {
            for (var o = a > 0 ? e ? Number.MAX_VALUE: 0 : e ? Number.MAX_VALUE: 0, s = 0, l = t.length; l > s; s++) {
                var u = Math.abs(t[s].y - i),
                h = t[s].len,
                c = t[s].len2,
                d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);
                e && d >= o && (d = o - 10),
                !e && o >= d && (d = o + 10),
                t[s].x = n + d * a,
                o = d
            }
        }
        t.sort(function(t, e) {
            return t.y - e.y
        });
        for (var h, c = 0,
        d = t.length,
        f = [], p = [], g = 0; d > g; g++) h = t[g].y - c,
        0 > h && s(g, d, -h, r),
        c = t[g].y + t[g].height;
        0 > o - c && l(d - 1, c - o);
        for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
        u(f, !1, e, n, i, r),
        u(p, !0, e, n, i, r)
    }
    function rd(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) ad(t[l]) || (t[l].x < e ? o.push(t[l]) : s.push(t[l]));
        id(s, e, n, i, 1, r, a),
        id(o, e, n, i, -1, r, a);
        for (var l = 0; l < t.length; l++) if (!ad(t[l])) {
            var u = t[l].linePoints;
            if (u) {
                var h = u[1][0] - u[2][0];
                u[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3,
                u[1][1] = u[2][1] = t[l].y,
                u[1][0] = u[2][0] + h
            }
        }
    }
    function ad(t) {
        return "center" === t.position
    }
    function od(t) {
        var e = t.mainData,
        n = t.datas;
        n || (n = {
            main: e
        },
        t.datasAttr = {
            main: "data"
        }),
        t.datas = t.mainData = null,
        dd(e, n, t),
        Uw(n,
        function(n) {
            Uw(e.TRANSFERABLE_METHODS,
            function(e) {
                n.wrapMethod(e, _(sd, t))
            })
        }),
        e.wrapMethod("cloneShallow", _(ud, t)),
        Uw(e.CHANGABLE_METHODS,
        function(n) {
            e.wrapMethod(n, _(ld, t))
        }),
        O(n[e.dataType] === e)
    }
    function sd(t, e) {
        if (cd(this)) {
            var n = o({},
            this[$w]);
            n[this.dataType] = e,
            dd(e, n, t)
        } else fd(e, this.dataType, this[Kw], t);
        return e
    }
    function ld(t, e) {
        return t.struct && t.struct.update(this),
        e
    }
    function ud(t, e) {
        return Uw(e[$w],
        function(n, i) {
            n !== e && fd(n.cloneShallow(), i, e, t)
        }),
        e
    }
    function hd(t) {
        var e = this[Kw];
        return null == t || null == e ? e: e[$w][t]
    }
    function cd(t) {
        return t[Kw] === t
    }
    function dd(t, e, n) {
        t[$w] = {},
        Uw(e,
        function(e, i) {
            fd(e, i, t, n)
        })
    }
    function fd(t, e, n, i) {
        n[$w][e] = t,
        t[Kw] = n,
        t.dataType = e,
        i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] = t),
        t.getLinkedData = hd
    }
    function pd(t, e, n) {
        this.root,
        this.data,
        this._nodes = [],
        this.hostModel = t,
        this.levelModels = p(e || [],
        function(e) {
            return new Ha(e, t, t.ecModel)
        }),
        this.leavesModel = new Ha(n || {},
        t, t.ecModel)
    }
    function gd(t, e) {
        var n = e.children;
        t.parentNode !== e && (n.push(t), t.parentNode = e)
    }
    function vd(t) {
        t.hierNode = {
            defaultAncestor: null,
            ancestor: t,
            prelim: 0,
            modifier: 0,
            change: 0,
            shift: 0,
            i: 0,
            thread: null
        };
        for (var e, n, i = [t]; e = i.pop();) if (n = e.children, e.isExpand && n.length) for (var r = n.length,
        a = r - 1; a >= 0; a--) {
            var o = n[a];
            o.hierNode = {
                defaultAncestor: null,
                ancestor: o,
                prelim: 0,
                modifier: 0,
                change: 0,
                shift: 0,
                i: a,
                thread: null
            },
            i.push(o)
        }
    }
    function md(t, e) {
        var n = t.isExpand ? t.children: [],
        i = t.parentNode.children,
        r = t.hierNode.i ? i[t.hierNode.i - 1] : null;
        if (n.length) {
            bd(t);
            var a = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2;
            r ? (t.hierNode.prelim = r.hierNode.prelim + e(t, r), t.hierNode.modifier = t.hierNode.prelim - a) : t.hierNode.prelim = a
        } else r && (t.hierNode.prelim = r.hierNode.prelim + e(t, r));
        t.parentNode.hierNode.defaultAncestor = Md(t, r, t.parentNode.hierNode.defaultAncestor || i[0], e)
    }
    function yd(t) {
        var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;
        t.setLayout({
            x: e
        },
        !0),
        t.hierNode.modifier += t.parentNode.hierNode.modifier
    }
    function _d(t) {
        return arguments.length ? t: kd
    }
    function xd(t, e) {
        var n = {};
        return t -= Math.PI / 2,
        n.x = e * Math.cos(t),
        n.y = e * Math.sin(t),
        n
    }
    function wd(t, e) {
        return To(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        })
    }
    function bd(t) {
        for (var e = t.children,
        n = e.length,
        i = 0,
        r = 0; --n >= 0;) {
            var a = e[n];
            a.hierNode.prelim += i,
            a.hierNode.modifier += i,
            r += a.hierNode.change,
            i += a.hierNode.shift + r
        }
    }
    function Md(t, e, n, i) {
        if (e) {
            for (var r = t,
            a = t,
            o = a.parentNode.children[0], s = e, l = r.hierNode.modifier, u = a.hierNode.modifier, h = o.hierNode.modifier, c = s.hierNode.modifier; s = Sd(s), a = Td(a), s && a;) {
                r = Sd(r),
                o = Td(o),
                r.hierNode.ancestor = t;
                var d = s.hierNode.prelim + c - a.hierNode.prelim - u + i(s, a);
                d > 0 && (Cd(Id(s, t, n), t, d), u += d, l += d),
                c += s.hierNode.modifier,
                u += a.hierNode.modifier,
                l += r.hierNode.modifier,
                h += o.hierNode.modifier
            }
            s && !Sd(r) && (r.hierNode.thread = s, r.hierNode.modifier += c - l),
            a && !Td(o) && (o.hierNode.thread = a, o.hierNode.modifier += u - h, n = t)
        }
        return n
    }
    function Sd(t) {
        var e = t.children;
        return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread
    }
    function Td(t) {
        var e = t.children;
        return e.length && t.isExpand ? e[0] : t.hierNode.thread
    }
    function Id(t, e, n) {
        return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor: n
    }
    function Cd(t, e, n) {
        var i = n / (e.hierNode.i - t.hierNode.i);
        e.hierNode.change -= i,
        e.hierNode.shift += n,
        e.hierNode.modifier += n,
        e.hierNode.prelim += n,
        t.hierNode.change += i
    }
    function kd(t, e) {
        return t.parentNode === e.parentNode ? 1 : 2
    }
    function Dd() {
        Vf.call(this)
    }
    function Ad(t) {
        this.name = t,
        this.zoomLimit,
        Vf.call(this),
        this._roamTransformable = new Dd,
        this._rawTransformable = new Dd,
        this._center,
        this._zoom
    }
    function Ld(t, e, n, i) {
        var r = n.seriesModel,
        a = r ? r.coordinateSystem: null;
        return a === this ? a[t](i) : null
    }
    function Pd(t, e, n) {
        var i = t.target,
        r = i.position;
        r[0] += e,
        r[1] += n,
        i.dirty()
    }
    function Od(t, e, n, i) {
        var r = t.target,
        a = t.zoomLimit,
        o = r.position,
        s = r.scale,
        l = t.zoom = t.zoom || 1;
        if (l *= e, a) {
            var u = a.min || 0,
            h = a.max || 1 / 0;
            l = Math.max(Math.min(h, l), u)
        }
        var c = l / t.zoom;
        t.zoom = l,
        o[0] -= (n - o[0]) * (c - 1),
        o[1] -= (i - o[1]) * (c - 1),
        s[0] *= c,
        s[1] *= c,
        r.dirty()
    }
    function Nd(t, e) {
        return !! Ed(t)[e]
    }
    function Ed(t) {
        return t[tb] || (t[tb] = {})
    }
    function Rd(t) {
        this.pointerChecker,
        this._zr = t,
        this._opt = {};
        var e = y,
        n = e(Bd, this),
        r = e(zd, this),
        a = e(Fd, this),
        o = e(Vd, this),
        l = e(Wd, this);
        Cf.call(this),
        this.setPointerChecker = function(t) {
            this.pointerChecker = t
        },
        this.enable = function(e, u) {
            this.disable(),
            this._opt = s(i(u) || {},
            {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }),
            null == e && (e = !0),
            (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", n), t.on("mousemove", r), t.on("mouseup", a)),
            (e === !0 || "scale" === e || "zoom" === e) && (t.on("mousewheel", o), t.on("pinch", l))
        },
        this.disable = function() {
            t.off("mousedown", n),
            t.off("mousemove", r),
            t.off("mouseup", a),
            t.off("mousewheel", o),
            t.off("pinch", l)
        },
        this.dispose = this.disable,
        this.isDragging = function() {
            return this._dragging
        },
        this.isPinching = function() {
            return this._pinching
        }
    }
    function Bd(t) {
        if (! (ye(t) || t.target && t.target.draggable)) {
            var e = t.offsetX,
            n = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0)
        }
    }
    function zd(t) {
        if (this._dragging && Xd("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !Nd(this._zr, "globalPan")) {
            var e = t.offsetX,
            n = t.offsetY,
            i = this._x,
            r = this._y,
            a = e - i,
            o = n - r;
            this._x = e,
            this._y = n,
            this._opt.preventDefaultMouseMove && Af(t.event),
            Gd(this, "pan", "moveOnMouseMove", t, {
                dx: a,
                dy: o,
                oldX: i,
                oldY: r,
                newX: e,
                newY: n
            })
        }
    }
    function Fd(t) {
        ye(t) || (this._dragging = !1)
    }
    function Vd(t) {
        var e = Xd("zoomOnMouseWheel", t, this._opt),
        n = Xd("moveOnMouseWheel", t, this._opt),
        i = t.wheelDelta,
        r = Math.abs(i),
        a = t.offsetX,
        o = t.offsetY;
        if (0 !== i && (e || n)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1,
                l = i > 0 ? s: 1 / s;
                Hd(this, "zoom", "zoomOnMouseWheel", t, {
                    scale: l,
                    originX: a,
                    originY: o
                })
            }
            if (n) {
                var u = Math.abs(i),
                h = (i > 0 ? 1 : -1) * (u > 3 ? .4 : u > 1 ? .15 : .05);
                Hd(this, "scrollMove", "moveOnMouseWheel", t, {
                    scrollDelta: h,
                    originX: a,
                    originY: o
                })
            }
        }
    }
    function Wd(t) {
        if (!Nd(this._zr, "globalPan")) {
            var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
            Hd(this, "zoom", null, t, {
                scale: e,
                originX: t.pinchX,
                originY: t.pinchY
            })
        }
    }
    function Hd(t, e, n, i, r) {
        t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && (Af(i.event), Gd(t, e, n, i, r))
    }
    function Gd(t, e, n, i, r) {
        r.isAvailableBehavior = y(Xd, null, n, i),
        t.trigger(e, r)
    }
    function Xd(t, e, n) {
        var i = n[t];
        return ! t || i && (!b(i) || e.event[i + "Key"])
    }
    function Yd(t, e, n) {
        var i = e.getComponentByElement(t.topTarget),
        r = i && i.coordinateSystem;
        return i && i !== n && !eb[i.mainType] && r && r.model !== n
    }
    function qd(t, e) {
        var n = t.getItemLayout(e);
        return n && !isNaN(n.x) && !isNaN(n.y) && "none" !== t.getItemVisual(e, "symbol")
    }
    function jd(t, e, n) {
        return n.itemModel = e,
        n.itemStyle = e.getModel("itemStyle").getItemStyle(),
        n.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(),
        n.lineStyle = e.getModel("lineStyle").getLineStyle(),
        n.labelModel = e.getModel("label"),
        n.hoverLabelModel = e.getModel("emphasis.label"),
        n.symbolInnerColor = t.isExpand === !1 && 0 !== t.children.length ? n.itemStyle.fill: "#fff",
        n
    }
    function Zd(t, e, n, i, r, a) {
        var o = !n,
        l = t.tree.getNodeByDataIndex(e),
        u = l.getModel(),
        a = jd(l, u, a),
        h = t.tree.root,
        c = l.parentNode === h ? l: l.parentNode || l,
        d = t.getItemGraphicEl(c.dataIndex),
        f = c.getLayout(),
        p = d ? {
            x: d.position[0],
            y: d.position[1],
            rawX: d.__radialOldRawX,
            rawY: d.__radialOldRawY
        }: f,
        g = l.getLayout();
        o ? (n = new Mc(t, e, a), n.attr("position", [p.x, p.y])) : n.updateData(t, e, a),
        n.__radialOldRawX = n.__radialRawX,
        n.__radialOldRawY = n.__radialRawY,
        n.__radialRawX = g.rawX,
        n.__radialRawY = g.rawY,
        i.add(n),
        t.setItemGraphicEl(e, n),
        Oa(n, {
            position: [g.x, g.y]
        },
        r);
        var v = n.getSymbolPath();
        if ("radial" === a.layout) {
            var m, y, _ = h.children[0],
            x = _.getLayout(),
            w = _.children.length;
            if (g.x === x.x && l.isExpand === !0) {
                var b = {};
                b.x = (_.children[0].getLayout().x + _.children[w - 1].getLayout().x) / 2,
                b.y = (_.children[0].getLayout().y + _.children[w - 1].getLayout().y) / 2,
                m = Math.atan2(b.y - x.y, b.x - x.x),
                0 > m && (m = 2 * Math.PI + m),
                y = b.x < x.x,
                y && (m -= Math.PI)
            } else m = Math.atan2(g.y - x.y, g.x - x.x),
            0 > m && (m = 2 * Math.PI + m),
            0 === l.children.length || 0 !== l.children.length && l.isExpand === !1 ? (y = g.x < x.x, y && (m -= Math.PI)) : (y = g.x > x.x, y || (m -= Math.PI));
            var M = y ? "left": "right";
            v.setStyle({
                textPosition: M,
                textRotation: -m,
                textOrigin: "center",
                verticalAlign: "middle"
            })
        }
        if (l.parentNode && l.parentNode !== h) {
            var S = n.__edge;
            S || (S = n.__edge = new Gv({
                shape: $d(a, p, p),
                style: s({
                    opacity: 0,
                    strokeNoScale: !0
                },
                a.lineStyle)
            })),
            Oa(S, {
                shape: $d(a, f, g),
                style: {
                    opacity: 1
                }
            },
            r),
            i.add(S)
        }
    }
    function Ud(t, e, n, i, r, a) {
        for (var o, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, u = s.getModel(), a = jd(s, u, a), h = s.parentNode === l ? s: s.parentNode || s; o = h.getLayout(), null == o;) h = h.parentNode === l ? h: h.parentNode || h;
        Oa(n, {
            position: [o.x + 1, o.y + 1]
        },
        r,
        function() {
            i.remove(n),
            t.setItemGraphicEl(e, null)
        }),
        n.fadeOut(null, {
            keepLabel: !0
        });
        var c = n.__edge;
        c && Oa(c, {
            shape: $d(a, o, o),
            style: {
                opacity: 0
            }
        },
        r,
        function() {
            i.remove(c)
        })
    }
    function $d(t, e, n) {
        var i, r, a, o, s, l, u, h, c = t.orient;
        if ("radial" === t.layout) {
            s = e.rawX,
            u = e.rawY,
            l = n.rawX,
            h = n.rawY;
            var d = xd(s, u),
            f = xd(s, u + (h - u) * t.curvature),
            p = xd(l, h + (u - h) * t.curvature),
            g = xd(l, h);
            return {
                x1: d.x,
                y1: d.y,
                x2: g.x,
                y2: g.y,
                cpx1: f.x,
                cpy1: f.y,
                cpx2: p.x,
                cpy2: p.y
            }
        }
        return s = e.x,
        u = e.y,
        l = n.x,
        h = n.y,
        ("LR" === c || "RL" === c) && (i = s + (l - s) * t.curvature, r = u, a = l + (s - l) * t.curvature, o = h),
        ("TB" === c || "BT" === c) && (i = s, r = u + (h - u) * t.curvature, a = l, o = h + (u - h) * t.curvature),
        {
            x1: s,
            y1: u,
            x2: l,
            y2: h,
            cpx1: i,
            cpy1: r,
            cpx2: a,
            cpy2: o
        }
    }
    function Kd(t, e, n) {
        var i = t.getZoom(),
        r = t.getCenter(),
        a = e.zoom,
        o = t.dataToPoint(r);
        if (null != e.dx && null != e.dy) {
            o[0] -= e.dx,
            o[1] -= e.dy;
            var r = t.pointToData(o);
            t.setCenter(r)
        }
        if (null != a) {
            if (n) {
                var s = n.min || 0,
                l = n.max || 1 / 0;
                a = Math.max(Math.min(i * a, l), s) / i
            }
            t.scale[0] *= a,
            t.scale[1] *= a;
            var u = t.position,
            h = (e.originX - u[0]) * (a - 1),
            c = (e.originY - u[1]) * (a - 1);
            u[0] -= h,
            u[1] -= c,
            t.updateTransform();
            var r = t.pointToData(o);
            t.setCenter(r),
            t.setZoom(a * i)
        }
        return {
            center: t.getCenter(),
            zoom: t.getZoom()
        }
    }
    function Qd(t, e, n) {
        for (var i, r = [t], a = []; i = r.pop();) if (a.push(i), i.isExpand) {
            var o = i.children;
            if (o.length) for (var s = 0; s < o.length; s++) r.push(o[s])
        }
        for (; i = a.pop();) e(i, n)
    }
    function Jd(t, e) {
        for (var n, i = [t]; n = i.pop();) if (e(n), n.isExpand) {
            var r = n.children;
            if (r.length) for (var a = r.length - 1; a >= 0; a--) i.push(r[a])
        }
    }
    function tf(t, e) {
        var n = wd(t, e);
        t.layoutInfo = n;
        var i = t.get("layout"),
        r = 0,
        a = 0,
        o = null;
        "radial" === i ? (r = 2 * Math.PI, a = Math.min(n.height, n.width) / 2, o = _d(function(t, e) {
            return (t.parentNode === e.parentNode ? 1 : 2) / t.depth
        })) : (r = n.width, a = n.height, o = _d());
        var s = t.getData().tree.root,
        l = s.children[0];
        if (l) {
            vd(s),
            Qd(l, md, o),
            s.hierNode.modifier = -l.hierNode.prelim,
            Jd(l, yd);
            var u = l,
            h = l,
            c = l;
            Jd(l,
            function(t) {
                var e = t.getLayout().x;
                e < u.getLayout().x && (u = t),
                e > h.getLayout().x && (h = t),
                t.depth > c.depth && (c = t)
            });
            var d = u === h ? 1 : o(u, h) / 2,
            f = d - u.getLayout().x,
            p = 0,
            g = 0,
            v = 0,
            m = 0;
            if ("radial" === i) p = r / (h.getLayout().x + d + f),
            g = a / (c.depth - 1 || 1),
            Jd(l,
            function(t) {
                v = (t.getLayout().x + f) * p,
                m = (t.depth - 1) * g;
                var e = xd(v, m);
                t.setLayout({
                    x: e.x,
                    y: e.y,
                    rawX: v,
                    rawY: m
                },
                !0)
            });
            else {
                var y = t.getOrient();
				
                "RL" === y || "LR" === y ? (g = a / (h.getLayout().x + d + f), p = r / (c.depth - 1 || 1), Jd(l,
                function(t) {
                    m = (t.getLayout().x + f) * g,
                    v = "LR" === y ? (t.depth - 1) * p: r - (t.depth - 1) * p,
                    t.setLayout({
                        x: v,
                        y: m
                    },
                    !0)
                })) : ("TB" === y || "BT" === y) && (p = r / (h.getLayout().x + d + f), g = a / (c.depth - 1 || 1), Jd(l,
                function(t) {
                    v = (t.getLayout().x + f) * p,
                    m = "TB" === y ? (t.depth - 1) * g: a - (t.depth - 1) * g,
                    t.setLayout({
                        x: v,
                        y: m
                    },
                    !0)
                }))
            }
        }
    }
    var ef = 2311,
    nf = function() {
        return ef++
    },
    rf = {};
    rf = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    }: "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    }: "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    }: e(navigator.userAgent);
    var af = rf,
    of = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    },
    sf = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    },
    lf = Object.prototype.toString,
    uf = Array.prototype,
    hf = uf.forEach,
    cf = uf.filter,
    df = uf.slice,
    ff = uf.map,
    pf = uf.reduce,
    gf = {},
    vf = function() {
        return gf.createCanvas()
    };
    gf.createCanvas = function() {
        return document.createElement("canvas")
    };
    var mf, yf = "__ec_primitive__";
    B.prototype = {
        constructor: B,
        get: function(t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        },
        set: function(t, e) {
            return this.data[t] = e
        },
        each: function(t, e) {
            void 0 !== e && (t = y(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
        },
        removeKey: function(t) {
            delete this.data[t]
        }
    };
    var _f = (Object.freeze || Object)({
        $override: n,
        clone: i,
        merge: r,
        mergeAll: a,
        extend: o,
        defaults: s,
        createCanvas: vf,
        getContext: l,
        indexOf: u,
        inherits: h,
        mixin: c,
        isArrayLike: d,
        each: f,
        map: p,
        reduce: g,
        filter: v,
        find: m,
        bind: y,
        curry: _,
        isArray: x,
        isFunction: w,
        isString: b,
        isObject: M,
        isBuiltInObject: S,
        isTypedArray: T,
        isDom: I,
        eqNaN: C,
        retrieve: k,
        retrieve2: D,
        retrieve3: A,
        slice: L,
        normalizeCssArray: P,
        assert: O,
        trim: N,
        setAsPrimitive: E,
        isPrimitive: R,
        createHashMap: z,
        concatArray: F,
        noop: V
    }),
    xf = "undefined" == typeof Float32Array ? Array: Float32Array,
    wf = Z,
    bf = U,
    Mf = ee,
    Sf = ne,
    Tf = (Object.freeze || Object)({
        create: W,
        copy: H,
        clone: G,
        set: X,
        add: Y,
        scaleAndAdd: q,
        sub: j,
        len: Z,
        length: wf,
        lenSquare: U,
        lengthSquare: bf,
        mul: $,
        div: K,
        dot: Q,
        scale: J,
        normalize: te,
        distance: ee,
        dist: Mf,
        distanceSquare: ne,
        distSquare: Sf,
        negate: ie,
        lerp: re,
        applyTransform: ae,
        min: oe,
        max: se
    });
    le.prototype = {
        constructor: le,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX,
                i = t.offsetY,
                r = n - this._x,
                a = i - this._y;
                this._x = n,
                this._y = i,
                e.drift(r, a, t),
                this.dispatchToElement(ue(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target,
                s = this._dropTarget;
                this._dropTarget = o,
                e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event))
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1),
            this.dispatchToElement(ue(e, t), "dragend", t.event),
            this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event),
            this._draggingTarget = null,
            this._dropTarget = null
        }
    };
    var If = Array.prototype.slice,
    Cf = function(t) {
        this._$handlers = {},
        this._$eventProcessor = t
    };
    Cf.prototype = {
        constructor: Cf,
        one: function(t, e, n, i) {
            return ce(this, t, e, n, i, !0)
        },
        on: function(t, e, n, i) {
            return ce(this, t, e, n, i, !1)
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return ! e[t] || !e[t].length
        },
        off: function(t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {},
            this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        },
        trigger: function(t) {
            var e = this._$handlers[t],
            n = this._$eventProcessor;
            if (e) {
                var i = arguments,
                r = i.length;
                r > 3 && (i = If.call(i, 1));
                for (var a = e.length,
                o = 0; a > o;) {
                    var s = e[o];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;
                    else {
                        switch (r) {
                        case 1:
                            s.h.call(s.ctx);
                            break;
                        case 2:
                            s.h.call(s.ctx, i[1]);
                            break;
                        case 3:
                            s.h.call(s.ctx, i[1], i[2]);
                            break;
                        default:
                            s.h.apply(s.ctx, i)
                        }
                        s.one ? (e.splice(o, 1), a--) : o++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t),
            this
        },
        triggerWithContext: function(t) {
            var e = this._$handlers[t],
            n = this._$eventProcessor;
            if (e) {
                var i = arguments,
                r = i.length;
                r > 4 && (i = If.call(i, 1, i.length - 1));
                for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
                    else {
                        switch (r) {
                        case 1:
                            l.h.call(a);
                            break;
                        case 2:
                            l.h.call(a, i[1]);
                            break;
                        case 3:
                            l.h.call(a, i[1], i[2]);
                            break;
                        default:
                            l.h.apply(a, i)
                        }
                        l.one ? (e.splice(s, 1), o--) : s++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t),
            this
        }
    };
    var kf = "undefined" != typeof window && !!window.addEventListener,
    Df = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Af = kf ?
    function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        t.cancelBubble = !0
    }: function(t) {
        t.returnValue = !1,
        t.cancelBubble = !0
    },
    Lf = function() {
        this._track = []
    };
    Lf.prototype = {
        constructor: Lf,
        recognize: function(t, e, n) {
            return this._doTrack(t, e, n),
            this._recognize(t)
        },
        clear: function() {
            return this._track.length = 0,
            this
        },
        _doTrack: function(t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                },
                a = 0, o = i.length; o > a; a++) {
                    var s = i[a],
                    l = fe(n, s, {});
                    r.points.push([l.zrX, l.zrY]),
                    r.touches.push(s)
                }
                this._track.push(r)
            }
        },
        _recognize: function(t) {
            for (var e in Pf) if (Pf.hasOwnProperty(e)) {
                var n = Pf[e](this._track, t);
                if (n) return n
            }
        }
    };
    var Pf = {
        pinch: function(t, e) {
            var n = t.length;
            if (n) {
                var i = (t[n - 1] || {}).points,
                r = (t[n - 2] || {}).points || i;
                if (r && r.length > 1 && i && i.length > 1) {
                    var a = _e(i) / _e(r); ! isFinite(a) && (a = 1),
                    e.pinchScale = a;
                    var o = xe(i);
                    return e.pinchX = o[0],
                    e.pinchY = o[1],
                    {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    }
                }
            }
        }
    },
    Of = "silent";
    Me.prototype.dispose = function() {};
    var Nf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Ef = function(t, e, n, i) {
        Cf.call(this),
        this.storage = t,
        this.painter = e,
        this.painterRoot = i,
        n = n || new Me,
        this.proxy = null,
        this._hovered = {},
        this._lastTouchMoment,
        this._lastX,
        this._lastY,
        this._gestureMgr,
        le.call(this),
        this.setHandlerProxy(n)
    };
    Ef.prototype = {
        constructor: Ef,
        setHandlerProxy: function(t) {
            this.proxy && this.proxy.dispose(),
            t && (f(Nf,
            function(e) {
                t.on && t.on(e, this[e], this)
            },
            this), t.handler = this),
            this.proxy = t
        },
        mousemove: function(t) {
            var e = t.zrX,
            n = t.zrY,
            i = this._hovered,
            r = i.target;
            r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
            var a = this._hovered = this.findHover(e, n),
            o = a.target,
            s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor: "default"),
            r && o !== r && this.dispatchToElement(i, "mouseout", t),
            this.dispatchToElement(a, "mousemove", t),
            o && o !== r && this.dispatchToElement(a, "mouseover", t)
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do n = n && n.parentNode;
            while (n && 9 !== n.nodeType && !(e = n === this.painterRoot)); ! e && this.trigger("globalout", {
                event: t
            })
        },
        resize: function() {
            this._hovered = {}
        },
        dispatch: function(t, e) {
            var n = this[t];
            n && n.call(this, e)
        },
        dispose: function() {
            this.proxy.dispose(),
            this.storage = this.proxy = this.painter = null
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        },
        dispatchToElement: function(t, e, n) {
            t = t || {};
            var i = t.target;
            if (!i || !i.silent) {
                for (var r = "on" + e,
                a = we(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[r] && t[r].call(t, a),
                    t.trigger && t.trigger(e, a)
                }))
            }
        },
        findHover: function(t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            },
            a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = Se(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== Of)) {
                    r.target = i[a];
                    break
                }
            }
            return r
        },
        processGesture: function(t, e) {
            this._gestureMgr || (this._gestureMgr = new Lf);
            var n = this._gestureMgr;
            "start" === e && n.clear();
            var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if ("end" === e && n.clear(), i) {
                var r = i.type;
                t.gestureEvent = r,
                this.dispatchToElement({
                    target: i.target
                },
                r, i.event)
            }
        }
    },
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
    function(t) {
        Ef.prototype[t] = function(e) {
            var n = this.findHover(e.zrX, e.zrY),
            i = n.target;
            if ("mousedown" === t) this._downEl = i,
            this._downPoint = [e.zrX, e.zrY],
            this._upEl = i;
            else if ("mouseup" === t) this._upEl = i;
            else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Mf(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }),
    c(Ef, Cf),
    c(Ef, le);
    var Rf = "undefined" == typeof Float32Array ? Array: Float32Array,
    Bf = (Object.freeze || Object)({
        create: Te,
        identity: Ie,
        copy: Ce,
        mul: ke,
        translate: De,
        rotate: Ae,
        scale: Le,
        invert: Pe,
        clone: Oe
    }),
    zf = Ie,
    Ff = 5e-5,
    Vf = function(t) {
        t = t || {},
        t.position || (this.position = [0, 0]),
        null == t.rotation && (this.rotation = 0),
        t.scale || (this.scale = [1, 1]),
        this.origin = this.origin || null
    },
    Wf = Vf.prototype;
    Wf.transform = null,
    Wf.needLocalTransform = function() {
        return Ne(this.rotation) || Ne(this.position[0]) || Ne(this.position[1]) || Ne(this.scale[0] - 1) || Ne(this.scale[1] - 1)
    };
    var Hf = [];
    Wf.updateTransform = function() {
        var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;
        if (!n && !e) return void(i && zf(i));
        i = i || Te(),
        n ? this.getLocalTransform(i) : zf(i),
        e && (n ? ke(i, t.transform, i) : Ce(i, t.transform)),
        this.transform = i;
        var r = this.globalScaleRatio;
        if (null != r && 1 !== r) {
            this.getGlobalScale(Hf);
            var a = Hf[0] < 0 ? -1 : 1,
            o = Hf[1] < 0 ? -1 : 1,
            s = ((Hf[0] - a) * r + a) / Hf[0] || 0,
            l = ((Hf[1] - o) * r + o) / Hf[1] || 0;
            i[0] *= s,
            i[1] *= s,
            i[2] *= l,
            i[3] *= l
        }
        this.invTransform = this.invTransform || Te(),
        Pe(this.invTransform, i)
    },
    Wf.getLocalTransform = function(t) {
        return Vf.getLocalTransform(this, t)
    },
    Wf.setTransform = function(t) {
        var e = this.transform,
        n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    },
    Wf.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Gf = [],
    Xf = Te();
    Wf.setLocalTransform = function(t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1],
            n = t[2] * t[2] + t[3] * t[3],
            i = this.position,
            r = this.scale;
            Ne(e - 1) && (e = Math.sqrt(e)),
            Ne(n - 1) && (n = Math.sqrt(n)),
            t[0] < 0 && (e = -e),
            t[3] < 0 && (n = -n),
            i[0] = t[4],
            i[1] = t[5],
            r[0] = e,
            r[1] = n,
            this.rotation = Math.atan2( - t[1] / n, t[0] / e)
        }
    },
    Wf.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent,
            e = this.transform;
            t && t.transform && (ke(Gf, t.invTransform, e), e = Gf);
            var n = this.origin;
            n && (n[0] || n[1]) && (Xf[4] = n[0], Xf[5] = n[1], ke(Gf, e, Xf), Gf[4] -= n[0], Gf[5] -= n[1], e = Gf),
            this.setLocalTransform(e)
        }
    },
    Wf.getGlobalScale = function(t) {
        var e = this.transform;
        return t = t || [],
        e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    },
    Wf.transformCoordToLocal = function(t, e) {
        var n = [t, e],
        i = this.invTransform;
        return i && ae(n, n, i),
        n
    },
    Wf.transformCoordToGlobal = function(t, e) {
        var n = [t, e],
        i = this.transform;
        return i && ae(n, n, i),
        n
    },
    Vf.getLocalTransform = function(t, e) {
        e = e || [],
        zf(e);
        var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]),
        Le(e, e, i),
        r && Ae(e, e, r),
        n && (e[4] += n[0], e[5] += n[1]),
        e[4] += a[0],
        e[5] += a[1],
        e
    };
    var Yf = {
        linear: function(t) {
            return t
        },
        quadraticIn: function(t) {
            return t * t
        },
        quadraticOut: function(t) {
            return t * (2 - t)
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t: -.5 * (--t * (t - 2) - 1)
        },
        cubicIn: function(t) {
            return t * t * t
        },
        cubicOut: function(t) {
            return--t * t * t + 1
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t: .5 * ((t -= 2) * t * t + 2)
        },
        quarticIn: function(t) {
            return t * t * t * t
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t: -.5 * ((t -= 2) * t * t * t - 2)
        },
        quinticIn: function(t) {
            return t * t * t * t * t
        },
        quinticOut: function(t) {
            return--t * t * t * t * t + 1
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t: .5 * ((t -= 2) * t * t * t * t + 2)
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2)
        },
        sinusoidalInOut: function(t) {
            return.5 * (1 - Math.cos(Math.PI * t))
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * ( - Math.pow(2, -10 * (t - 1)) + 2)
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t)
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        elasticIn: function(t) {
            var e, n = .1,
            i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
        },
        elasticOut: function(t) {
            var e, n = .1,
            i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
        },
        elasticInOut: function(t) {
            var e, n = .1,
            i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        backOut: function(t) {
            var e = 1.70158;
            return--t * t * ((e + 1) * t + e) + 1
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        },
        bounceIn: function(t) {
            return 1 - Yf.bounceOut(1 - t)
        },
        bounceOut: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceInOut: function(t) {
            return.5 > t ? .5 * Yf.bounceIn(2 * t) : .5 * Yf.bounceOut(2 * t - 1) + .5
        }
    };
    Ee.prototype = {
        constructor: Ee,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (! (0 > n)) {
                n = Math.min(n, 1);
                var i = this.easing,
                r = "string" == typeof i ? Yf[i] : i,
                a = "function" == typeof r ? r(n) : n;
                return this.fire("frame", a),
                1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap,
            this._pausedTime = 0,
            this._needsRemove = !1
        },
        fire: function(t, e) {
            t = "on" + t,
            this[t] && this[t](this._target, e)
        },
        pause: function() {
            this._paused = !0
        },
        resume: function() {
            this._paused = !1
        }
    };
    var qf = function() {
        this.head = null,
        this.tail = null,
        this._len = 0
    },
    jf = qf.prototype;
    jf.insert = function(t) {
        var e = new Zf(t);
        return this.insertEntry(e),
        e
    },
    jf.insertEntry = function(t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t,
        this._len++
    },
    jf.remove = function(t) {
        var e = t.prev,
        n = t.next;
        e ? e.next = n: this.head = n,
        n ? n.prev = e: this.tail = e,
        t.next = t.prev = null,
        this._len--
    },
    jf.len = function() {
        return this._len
    },
    jf.clear = function() {
        this.head = this.tail = null,
        this._len = 0
    };
    var Zf = function(t) {
        this.value = t,
        this.next,
        this.prev
    },
    Uf = function(t) {
        this._list = new qf,
        this._map = {},
        this._maxSize = t || 10,
        this._lastRemovedEntry = null
    },
    $f = Uf.prototype;
    $f.put = function(t, e) {
        var n = this._list,
        i = this._map,
        r = null;
        if (null == i[t]) {
            var a = n.len(),
            o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s),
                delete i[s.key],
                r = s.value,
                this._lastRemovedEntry = s
            }
            o ? o.value = e: o = new Zf(e),
            o.key = t,
            n.insertEntry(o),
            i[t] = o
        }
        return r
    },
    $f.get = function(t) {
        var e = this._map[t],
        n = this._list;
        return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
    },
    $f.clear = function() {
        this._list.clear(),
        this._map = {}
    };
    var Kf = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    },
    Qf = new Uf(20),
    Jf = null,
    tp = Ke,
    ep = Qe,
    np = (Object.freeze || Object)({
        parse: qe,
        lift: Ue,
        toHex: $e,
        fastLerp: Ke,
        fastMapToColor: tp,
        lerp: Qe,
        mapToColor: ep,
        modifyHSL: Je,
        modifyAlpha: tn,
        stringify: en
    }),
    ip = Array.prototype.slice,
    rp = function(t, e, n, i) {
        this._tracks = {},
        this._target = t,
        this._loop = e || !1,
        this._getter = n || nn,
        this._setter = i || rn,
        this._clipCount = 0,
        this._delay = 0,
        this._doneList = [],
        this._onframeList = [],
        this._clipList = []
    };
    rp.prototype = {
        when: function(t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({
                        time: 0,
                        value: dn(r)
                    })
                }
                n[i].push({
                    time: t,
                    value: e[i]
                })
            }
            return this
        },
        during: function(t) {
            return this._onframeList.push(t),
            this
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        },
        isPaused: function() {
            return !! this._paused
        },
        _doneCallback: function() {
            this._tracks = {},
            this._clipList.length = 0;
            for (var t = this._doneList,
            e = t.length,
            n = 0; e > n; n++) t[n].call(this)
        },
        start: function(t, e) {
            var n, i = this,
            r = 0,
            a = function() {
                r--,
                r || i._doneCallback()
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = gn(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
            }
            if (n) {
                var l = n.onframe;
                n.onframe = function(t, e) {
                    l(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(),
            this
        },
        stop: function(t) {
            for (var e = this._clipList,
            n = this.animation,
            i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1),
                n && n.removeClip(r)
            }
            e.length = 0
        },
        delay: function(t) {
            return this._delay = t,
            this
        },
        done: function(t) {
            return t && this._doneList.push(t),
            this
        },
        getClips: function() {
            return this._clipList
        }
    };
    var ap = 1;
    "undefined" != typeof window && (ap = Math.max(window.devicePixelRatio || 1, 1));
    var op = 0,
    sp = ap,
    lp = function() {};
    1 === op ? lp = function() {
        for (var t in arguments) throw new Error(arguments[t])
    }: op > 1 && (lp = function() {
        for (var t in arguments) console.log(arguments[t])
    });
    var up = lp,
    hp = function() {
        this.animators = []
    };
    hp.prototype = {
        constructor: hp,
        animate: function(t, e) {
            var n, i = !1,
            r = this,
            a = this.__zr;
            if (t) {
                var o = t.split("."),
                s = r;
                i = "shape" === o[0];
                for (var l = 0,
                h = o.length; h > l; l++) s && (s = s[o[l]]);
                s && (n = s)
            } else n = r;
            if (!n) return void up('Property "' + t + '" is not existed in element ' + r.id);
            var c = r.animators,
            d = new rp(n, e);
            return d.during(function() {
                r.dirty(i)
            }).done(function() {
                c.splice(u(c, d), 1)
            }),
            c.push(d),
            a && a.animation.addAnimator(d),
            d
        },
        stopAnimation: function(t) {
            for (var e = this.animators,
            n = e.length,
            i = 0; n > i; i++) e[i].stop(t);
            return e.length = 0,
            this
        },
        animateTo: function(t, e, n, i, r, a) {
            vn(this, t, e, n, i, r, a)
        },
        animateFrom: function(t, e, n, i, r, a) {
            vn(this, t, e, n, i, r, a, !0)
        }
    };
    var cp = function(t) {
        Vf.call(this, t),
        Cf.call(this, t),
        hp.call(this, t),
        this.id = t.id || nf()
    };
    cp.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
            case "horizontal":
                e = 0;
                break;
            case "vertical":
                t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
            n[4] += t,
            n[5] += e,
            this.decomposeTransform(),
            this.dirty(!1)
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform()
        },
        traverse: function() {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []),
                    n[0] = e[0],
                    n[1] = e[1]
                }
            } else this[t] = e
        },
        hide: function() {
            this.ignore = !0,
            this.__zr && this.__zr.refresh()
        },
        show: function() {
            this.ignore = !1,
            this.__zr && this.__zr.refresh()
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e);
            else if (M(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1),
            this
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e),
            this.clipPath && this.clipPath !== t && this.removeClipPath(),
            this.clipPath = t,
            t.__zr = e,
            t.__clipTarget = this,
            this.dirty(!1)
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    },
    c(cp, hp),
    c(cp, Vf),
    c(cp, Cf);
    var dp = ae,
    fp = Math.min,
    pp = Math.max;
    _n.prototype = {
        constructor: _n,
        union: function(t) {
            var e = fp(t.x, this.x),
            n = fp(t.y, this.y);
            this.width = pp(t.x + t.width, this.x + this.width) - e,
            this.height = pp(t.y + t.height, this.y + this.height) - n,
            this.x = e,
            this.y = n
        },
        applyTransform: function() {
            var t = [],
            e = [],
            n = [],
            i = [];
            return function(r) {
                if (r) {
                    t[0] = n[0] = this.x,
                    t[1] = i[1] = this.y,
                    e[0] = i[0] = this.x + this.width,
                    e[1] = n[1] = this.y + this.height,
                    dp(t, t, r),
                    dp(e, e, r),
                    dp(n, n, r),
                    dp(i, i, r),
                    this.x = fp(t[0], e[0], n[0], i[0]),
                    this.y = fp(t[1], e[1], n[1], i[1]);
                    var a = pp(t[0], e[0], n[0], i[0]),
                    o = pp(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x,
                    this.height = o - this.y
                }
            }
        } (),
        calculateTransform: function(t) {
            var e = this,
            n = t.width / e.width,
            i = t.height / e.height,
            r = Te();
            return De(r, r, [ - e.x, -e.y]),
            Le(r, r, [n, i]),
            De(r, r, [t.x, t.y]),
            r
        },
        intersect: function(t) {
            if (!t) return ! 1;
            t instanceof _n || (t = _n.create(t));
            var e = this,
            n = e.x,
            i = e.x + e.width,
            r = e.y,
            a = e.y + e.height,
            o = t.x,
            s = t.x + t.width,
            l = t.y,
            u = t.y + t.height;
            return ! (o > i || n > s || l > a || r > u)
        },
        contain: function(t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        },
        clone: function() {
            return new _n(this.x, this.y, this.width, this.height)
        },
        copy: function(t) {
            this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    },
    _n.create = function(t) {
        return new _n(t.x, t.y, t.width, t.height)
    };
    var gp = function(t) {
        t = t || {},
        cp.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [],
        this.__storage = null,
        this.__dirty = !0
    };
    gp.prototype = {
        constructor: gp,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice()
        },
        childAt: function(t) {
            return this._children[t]
        },
        childOfName: function(t) {
            for (var e = this._children,
            n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        },
        childCount: function() {
            return this._children.length
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)),
            this
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children,
                i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t),
            t.parent = this;
            var e = this.__storage,
            n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof gp && t.addChildrenToStorage(e)),
            n && n.refresh()
        },
        remove: function(t) {
            var e = this.__zr,
            n = this.__storage,
            i = this._children,
            r = u(i, t);
            return 0 > r ? this: (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof gp && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        },
        removeAll: function() {
            var t, e, n = this._children,
            i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e],
            i && (i.delFromStorage(t), t instanceof gp && t.delChildrenFromStorage(i)),
            t.parent = null;
            return n.length = 0,
            this
        },
        eachChild: function(t, e) {
            for (var n = this._children,
            i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        },
        traverse: function(t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i),
                "group" === i.type && i.traverse(t, e)
            }
            return this
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n),
                n instanceof gp && n.addChildrenToStorage(t)
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n),
                n instanceof gp && n.delChildrenFromStorage(t)
            }
        },
        dirty: function() {
            return this.__dirty = !0,
            this.__zr && this.__zr.refresh(),
            this
        },
        getBoundingRect: function(t) {
            for (var e = null,
            n = new _n(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(),
                    l = o.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
                }
            }
            return e || n
        }
    },
    h(gp, cp);
    var vp = 32,
    mp = 7,
    yp = function() {
        this._roots = [],
        this._displayList = [],
        this._displayListLen = 0
    };
    yp.prototype = {
        constructor: yp,
        traverse: function(t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        },
        getDisplayList: function(t, e) {
            return e = e || !1,
            t && this.updateDisplayList(e),
            this._displayList
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots,
            n = this._displayList,
            i = 0,
            r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen,
            af.canvasSupported && Cn(n, kn)
        },
        _updateAndAddDisplayable: function(t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(),
                t.__dirty && t.update(),
                t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i,
                    a = t; r;) r.parent = a,
                    r.updateTransform(),
                    e.push(r),
                    a = r,
                    r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children,
                    s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0),
                        this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e,
                this._displayList[this._displayListLen++] = t
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof gp && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        },
        delRoot: function(t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var n = this._roots[e];
                    n instanceof gp && n.delChildrenFromStorage(this)
                }
                return this._roots = [],
                this._displayList = [],
                void(this._displayListLen = 0)
            }
            if (t instanceof Array) for (var e = 0,
            i = t.length; i > e; e++) this.delRoot(t[e]);
            else {
                var r = u(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof gp && t.delChildrenFromStorage(this))
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this, t.dirty(!1)),
            this
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null),
            this
        },
        dispose: function() {
            this._renderList = this._roots = null
        },
        displayableSortFunc: kn
    };
    var _p = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    },
    xp = function(t, e, n) {
        return _p.hasOwnProperty(e) ? n *= t.dpr: n
    },
    wp = {
        NONE: 0,
        STYLE_BIND: 1,
        PLAIN_TEXT: 2
    },
    bp = 9,
    Mp = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
    Sp = function(t) {
        this.extendFrom(t, !1)
    };
    Sp.prototype = {
        constructor: Sp,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, n) {
            var i = this,
            r = n && n.style,
            a = !r || t.__attrCachedBy !== wp.STYLE_BIND;
            t.__attrCachedBy = wp.STYLE_BIND;
            for (var o = 0; o < Mp.length; o++) {
                var s = Mp[o],
                l = s[0]; (a || i[l] !== r[l]) && (t[l] = xp(t, l, i[l] || s[1]))
            }
            if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var u = i.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function(t, e) {
            if (t) for (var n in t) ! t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e: this.extendFrom(t, !0)
        },
        clone: function() {
            var t = new this.constructor;
            return t.extendFrom(this, !0),
            t
        },
        getGradient: function(t, e, n) {
            for (var i = "radial" === e.type ? An: Dn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
            return r
        }
    };
    for (var Tp = Sp.prototype,
    Ip = 0; Ip < Mp.length; Ip++) {
        var Cp = Mp[Ip];
        Cp[0] in Tp || (Tp[Cp[0]] = Cp[1])
    }
    Sp.getGradient = Tp.getGradient;
    var kp = function(t, e) {
        this.image = t,
        this.repeat = e,
        this.type = "pattern"
    };
    kp.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var Dp = function(t, e, n) {
        var i;
        n = n || sp,
        "string" == typeof t ? i = Pn(t, e, n) : M(t) && (i = t, t = i.id),
        this.id = t,
        this.dom = i;
        var r = i.style;
        r && (i.onselectstart = Ln, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0),
        this.domBack = null,
        this.ctxBack = null,
        this.painter = e,
        this.config = null,
        this.clearColor = 0,
        this.motionBlur = !1,
        this.lastFrameAlpha = .7,
        this.dpr = n
    };
    Dp.prototype = {
        constructor: Dp,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"),
            this.ctx.dpr = this.dpr
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = Pn("back-" + this.id, this.painter, t),
            this.ctxBack = this.domBack.getContext("2d"),
            1 !== t && this.ctxBack.scale(t, t)
        },
        resize: function(t, e) {
            var n = this.dpr,
            i = this.dom,
            r = i.style,
            a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"),
            i.width = t * n,
            i.height = e * n,
            a && (a.width = t * n, a.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
        },
        clear: function(t, e) {
            var n = this.dom,
            i = this.ctx,
            r = n.width,
            a = n.height,
            e = e || this.clearColor,
            o = this.motionBlur && !t,
            s = this.lastFrameAlpha,
            l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var u;
                e.colorStops ? (u = e.__canvasGradient || Sp.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = u) : e.image && (u = kp.prototype.getCanvasPattern.call(e, i)),
                i.save(),
                i.fillStyle = u || e,
                i.fillRect(0, 0, r, a),
                i.restore()
            }
            if (o) {
                var h = this.domBack;
                i.save(),
                i.globalAlpha = s,
                i.drawImage(h, 0, 0, r, a),
                i.restore()
            }
        }
    };
    var Ap = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ||
    function(t) {
        setTimeout(t, 16)
    },
    Lp = new Uf(50),
    Pp = {},
    Op = 0,
    Np = 5e3,
    Ep = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    Rp = "12px sans-serif",
    Bp = {};
    Bp.measureText = function(t, e) {
        var n = l();
        return n.font = e || Rp,
        n.measureText(t)
    };
    var zp = Rp,
    Fp = {
        left: 1,
        right: 1,
        center: 1
    },
    Vp = {
        top: 1,
        bottom: 1,
        middle: 1
    },
    Wp = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
    Hp = new _n,
    Gp = function() {};
    Gp.prototype = {
        constructor: Gp,
        drawRectText: function(t, e) {
            var n = this.style;
            e = n.textRect || e,
            this.__dirty && ei(n, !0);
            var i = n.text;
            if (null != i && (i += ""), yi(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (Hp.copy(e), Hp.applyTransform(r), e = Hp),
                ii(this, t, i, n, e, bp),
                t.restore()
            }
        }
    },
    _i.prototype = {
        constructor: _i,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function() {},
        afterBrush: function() {},
        brush: function() {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e)
        },
        traverse: function(t, e) {
            t.call(e, this)
        },
        rectContain: function(t, e) {
            var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect();
            return i.contain(n[0], n[1])
        },
        dirty: function() {
            this.__dirty = this.__dirtyText = !0,
            this._rect = null,
            this.__zr && this.__zr.refresh()
        },
        animateStyle: function(t) {
            return this.animate("style", t)
        },
        attrKV: function(t, e) {
            "style" !== t ? cp.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function(t, e) {
            return this.style.set(t, e),
            this.dirty(!1),
            this
        },
        useStyle: function(t) {
            return this.style = new Sp(t, this),
            this.dirty(!1),
            this
        }
    },
    h(_i, cp),
    c(_i, Gp),
    xi.prototype = {
        constructor: xi,
        type: "image",
        brush: function(t, e) {
            var n = this.style,
            i = n.image;
            n.bind(t, this, e);
            var r = this._image = Nn(i, this._image, this, this.onload);
            if (r && Rn(r)) {
                var a = n.x || 0,
                o = n.y || 0,
                s = n.width,
                l = n.height,
                u = r.width / r.height;
                if (null == s && null != l ? s = l * u: null == l && null != s ? l = s / u: null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var h = n.sx || 0,
                    c = n.sy || 0;
                    t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l)
                } else if (n.sx && n.sy) {
                    var h = n.sx,
                    c = n.sy,
                    d = s - h,
                    f = l - c;
                    t.drawImage(r, h, c, d, f, a, o, s, l)
                } else t.drawImage(r, a, o, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new _n(t.x || 0, t.y || 0, t.width || 0, t.height || 0)),
            this._rect
        }
    },
    h(xi, _i);
    var Xp = 1e5,
    Yp = 314159,
    qp = .01,
    jp = .001,
    Zp = new _n(0, 0, 0, 0),
    Up = new _n(0, 0, 0, 0),
    $p = function(t, e, n) {
        this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = o({},
        n || {}),
        this.dpr = n.devicePixelRatio || sp,
        this._singleCanvas = i,
        this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""),
        this.storage = e;
        var a = this._zlevelList = [],
        s = this._layers = {};
        if (this._layerConfig = {},
        this._needsManuallyCompositing = !1, i) {
            var l = t.width,
            u = t.height;
            null != n.width && (l = n.width),
            null != n.height && (u = n.height),
            this.dpr = n.devicePixelRatio || 1,
            t.width = l * this.dpr,
            t.height = u * this.dpr,
            this._width = l,
            this._height = u;
            var h = new Dp(t, this, this.dpr);
            h.__builtin__ = !0,
            h.initContext(),
            s[Yp] = h,
            h.zlevel = Yp,
            a.push(Yp),
            this._domRoot = t
        } else {
            this._width = this._getSize(0),
            this._height = this._getSize(1);
            var c = this._domRoot = Ii(this._width, this._height);
            t.appendChild(c)
        }
        this._hoverlayer = null,
        this._hoverElements = []
    };
    $p.prototype = {
        constructor: $p,
        getType: function() {
            return "canvas"
        },
        isSingleCanvas: function() {
            return this._singleCanvas
        },
        getViewportRoot: function() {
            return this._domRoot
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            return t ? {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            }: void 0
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0),
            n = this._zlevelList;
            this._redrawId = Math.random(),
            this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i],
                a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor: null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(),
            this
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({
                    style: t.style,
                    shape: t.shape,
                    z: t.z,
                    z2: t.z2,
                    silent: t.silent
                });
                return n.__from = t,
                t.__hoverMir = n,
                e && n.setStyle(e),
                this._hoverElements.push(n),
                n
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir,
            n = this._hoverElements,
            i = u(n, e);
            i >= 0 && n.splice(i, 1),
            t.__hoverMir = null
        },
        clearHover: function() {
            for (var t = this._hoverElements,
            e = 0; e < t.length; e++) {
                var n = t[e].__from;
                n && (n.__hoverMir = null)
            }
            t.length = 0
        },
        refreshHover: function() {
            var t = this._hoverElements,
            e = t.length,
            n = this._hoverlayer;
            if (n && n.clear(), e) {
                Cn(t, this.storage.displayableSortFunc),
                n || (n = this._hoverlayer = this.getLayer(Xp));
                var i = {};
                n.ctx.save();
                for (var r = 0; e > r;) {
                    var a = t[r],
                    o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        },
        getHoverLayer: function() {
            return this.getLayer(Xp)
        },
        _paintList: function(t, e, n) {
            if (this._redrawId === n) {
                e = e || !1,
                this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    Ap(function() {
                        r._paintList(t, e, n)
                    })
                }
            }
        },
        _compositeManually: function() {
            var t = this.getLayer(Yp).ctx,
            e = this._domRoot.width,
            n = this._domRoot.height;
            t.clearRect(0, 0, e, n),
            this.eachBuiltinLayer(function(i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        },
        _doPaintList: function(t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i],
                a = this._layers[r];
                a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
            }
            for (var o = !0,
            s = 0; s < n.length; s++) {
                var a = n[s],
                l = a.ctx,
                u = {};
                l.save();
                var h = e ? a.__startIndex: a.__drawIndex,
                c = !e && a.incremental && Date.now,
                d = c && Date.now(),
                p = a.zlevel === this._zlevelList[0] ? this._backgroundColor: null;
                if (a.__startIndex === a.__endIndex) a.clear(!1, p);
                else if (h === a.__startIndex) {
                    var g = t[h];
                    g.incremental && g.notClear && !e || a.clear(!1, p)
                } - 1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);
                for (var v = h; v < a.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
                        var y = Date.now() - d;
                        if (y > 15) break
                    }
                }
                a.__drawIndex = v,
                a.__drawIndex < a.__endIndex && (o = !1),
                u.prevElClipPaths && l.restore(),
                l.restore()
            }
            return af.wxa && f(this._layers,
            function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }),
            o
        },
        _doPaintEl: function(t, e, n, i) {
            var r = e.ctx,
            a = t.transform;
            if (! (!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && Mi(t, this._width, this._height))) {
                var o = t.__clipPaths; (!i.prevElClipPaths || Si(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Ti(o, r), i.prevElClipPaths = o)),
                t.beforeBrush && t.beforeBrush(r),
                t.brush(r, i.prevEl || null),
                i.prevEl = t,
                t.afterBrush && t.afterBrush(r)
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = Yp);
            var n = this._layers[t];
            return n || (n = new Dp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()),
            n
        },
        insertLayer: function(t, e) {
            var n = this._layers,
            i = this._zlevelList,
            r = i.length,
            a = null,
            o = -1,
            s = this._domRoot;
            if (n[t]) return void up("ZLevel " + t + " has been used already");
            if (!bi(e)) return void up("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > i[0]) {
                for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
                a = n[i[o]]
            }
            if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
                var l = a.dom;
                l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
            } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
        },
        eachLayer: function(t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i],
            t.call(e, this._layers[n], n)
        },
        eachBuiltinLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r],
            n = this._layers[i],
            n.__builtin__ && t.call(e, n, i)
        },
        eachOtherLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r],
            n = this._layers[i],
            n.__builtin__ || t.call(e, n, i)
        },
        getLayers: function() {
            return this._layers
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
            }
            if (this.eachBuiltinLayer(function(t) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
                var i = t[n];
                if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
            for (var r = null,
            a = 0,
            n = 0; n < t.length; n++) {
                var o, i = t[n],
                s = i.zlevel;
                i.incremental ? (o = this.getLayer(s + jp, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? qp: 0), this._needsManuallyCompositing),
                o.__builtin__ || up("ZLevel " + s + " has been used by unkown layer " + o.id),
                o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o),
                i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
            }
            e(n),
            this.eachBuiltinLayer(function(t) { ! t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0),
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer),
            this
        },
        _clearLayer: function(t) {
            t.clear()
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t
        },
        configLayer: function(t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? r(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var a = this._zlevelList[i];
                    if (a === t || a === t + qp) {
                        var o = this._layers[a];
                        r(o, n[t], !0)
                    }
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers,
            n = this._zlevelList,
            i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
        },
        resize: function(t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
                    n.style.width = t + "px",
                    n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers,
                    function(n) {
                        n.resize(t, e)
                    }),
                    this.refresh(!0)
                }
                this._width = t,
                this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t,
                this._height = e,
                this.getLayer(Yp).resize(t, e)
            }
            return this
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear()
        },
        dispose: function() {
            this.root.innerHTML = "",
            this.root = this.storage = this._domRoot = this._layers = null
        },
        getRenderedCanvas: function(t) {
            if (t = t || {},
            this._singleCanvas && !this._compositeManually) return this._layers[Yp].dom;
            var e = new Dp("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width,
                i = e.dom.height,
                r = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var a = {},
            o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a)
            }
            return e.dom
        },
        getWidth: function() {
            return this._width
        },
        getHeight: function() {
            return this._height
        },
        _getSize: function(t) {
            var e = this._opts,
            n = ["width", "height"][t],
            i = ["clientWidth", "clientHeight"][t],
            r = ["paddingLeft", "paddingTop"][t],
            a = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var o = this.root,
            s = document.defaultView.getComputedStyle(o);
            return (o[i] || wi(s[n]) || wi(o.style[n])) - (wi(s[r]) || 0) - (wi(s[a]) || 0) | 0
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"),
            i = n.getContext("2d"),
            r = t.getBoundingRect(),
            a = t.style,
            o = a.shadowBlur * e,
            s = a.shadowOffsetX * e,
            l = a.shadowOffsetY * e,
            u = a.hasStroke() ? a.lineWidth: 0,
            h = Math.max(u / 2, -s + o),
            c = Math.max(u / 2, s + o),
            d = Math.max(u / 2, -l + o),
            f = Math.max(u / 2, l + o),
            p = r.width + h + c,
            g = r.height + d + f;
            n.width = p * e,
            n.height = g * e,
            i.scale(e, e),
            i.clearRect(0, 0, p, g),
            i.dpr = e;
            var v = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [h - r.x, d - r.y],
            t.rotation = 0,
            t.scale = [1, 1],
            t.updateTransform(),
            t && t.brush(i);
            var m = xi,
            y = new m({
                style: {
                    x: 0,
                    y: 0,
                    image: n
                }
            });
            return null != v.position && (y.position = t.position = v.position),
            null != v.rotation && (y.rotation = t.rotation = v.rotation),
            null != v.scale && (y.scale = t.scale = v.scale),
            y
        }
    };
    var Kp = function(t) {
        t = t || {},
        this.stage = t.stage || {},
        this.onframe = t.onframe ||
        function() {},
        this._clips = [],
        this._running = !1,
        this._time,
        this._pausedTime,
        this._pauseStart,
        this._paused = !1,
        Cf.call(this)
    };
    Kp.prototype = {
        constructor: Kp,
        addClip: function(t) {
            this._clips.push(t)
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        },
        removeClip: function(t) {
            var e = u(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        },
        _update: function() {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
                var s = n[o],
                l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            i = r.length;
            for (var o = 0; i > o; o++) a[o].fire(r[o]);
            this._time = t,
            this.onframe(e),
            this.trigger("frame", e),
            this.stage.update && this.stage.update()
        },
        _startLoop: function() {
            function t() {
                e._running && (Ap(t), !e._paused && e._update())
            }
            var e = this;
            this._running = !0,
            Ap(t)
        },
        start: function() {
            this._time = (new Date).getTime(),
            this._pausedTime = 0,
            this._startLoop()
        },
        stop: function() {
            this._running = !1
        },
        pause: function() {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        },
        resume: function() {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        },
        clear: function() {
            this._clips = []
        },
        isFinished: function() {
            return ! this._clips.length
        },
        animate: function(t, e) {
            e = e || {};
            var n = new rp(t, e.loop, e.getter, e.setter);
            return this.addAnimator(n),
            n
        }
    },
    c(Kp, Cf);
    var Qp = 300,
    Jp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    tg = ["touchstart", "touchend", "touchmove"],
    eg = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    },
    ng = p(Jp,
    function(t) {
        var e = t.replace("mouse", "pointer");
        return eg[e] ? e: t
    }),
    ig = {
        mousemove: function(t) {
            t = ge(this.dom, t),
            this.trigger("mousemove", t)
        },
        mouseout: function(t) {
            t = ge(this.dom, t);
            var e = t.toElement || t.relatedTarget;
            if (e !== this.dom) for (; e && 9 !== e.nodeType;) {
                if (e === this.dom) return;
                e = e.parentNode
            }
            this.trigger("mouseout", t)
        },
        touchstart: function(t) {
            t = ge(this.dom, t),
            t.zrByTouch = !0,
            this._lastTouchMoment = new Date,
            this.handler.processGesture(this, t, "start"),
            ig.mousemove.call(this, t),
            ig.mousedown.call(this, t),
            ki(this)
        },
        touchmove: function(t) {
            t = ge(this.dom, t),
            t.zrByTouch = !0,
            this.handler.processGesture(this, t, "change"),
            ig.mousemove.call(this, t),
            ki(this)
        },
        touchend: function(t) {
            t = ge(this.dom, t),
            t.zrByTouch = !0,
            this.handler.processGesture(this, t, "end"),
            ig.mouseup.call(this, t),
            +new Date - this._lastTouchMoment < Qp && ig.click.call(this, t),
            ki(this)
        },
        pointerdown: function(t) {
            ig.mousedown.call(this, t)
        },
        pointermove: function(t) {
            Di(t) || ig.mousemove.call(this, t)
        },
        pointerup: function(t) {
            ig.mouseup.call(this, t)
        },
        pointerout: function(t) {
            Di(t) || ig.mouseout.call(this, t)
        }
    };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
    function(t) {
        ig[t] = function(e) {
            e = ge(this.dom, e),
            this.trigger(t, e)
        }
    });
    var rg = Li.prototype;
    rg.dispose = function() {
        for (var t = Jp.concat(tg), e = 0; e < t.length; e++) {
            var n = t[e];
            me(this.dom, Ci(n), this._handlers[n])
        }
    },
    rg.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    },
    c(Li, Cf);
    var ag = !af.canvasSupported,
    og = {
        canvas: $p
    },
    sg = {},
    lg = "4.0.7",
    ug = function(t, e, n) {
        n = n || {},
        this.dom = e,
        this.id = t;
        var i = this,
        r = new yp,
        a = n.renderer;
        if (ag) {
            if (!og.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml"
        } else a && og[a] || (a = "canvas");
        var o = new og[a](e, r, n, t);
        this.storage = r,
        this.painter = o;
        var s = af.node || af.worker ? null: new Li(o.getViewportRoot());
        this.handler = new Ef(r, o, s, o.root),
        this.animation = new Kp({
            stage: {
                update: y(this.flush, this)
            }
        }),
        this.animation.start(),
        this._needsRefresh;
        var l = r.delFromStorage,
        u = r.addToStorage;
        r.delFromStorage = function(t) {
            l.call(r, t),
            t && t.removeSelfFromZr(i)
        },
        r.addToStorage = function(t) {
            u.call(r, t),
            t.addSelfToZr(i)
        }
    };
    ug.prototype = {
        constructor: ug,
        getId: function() {
            return this.id
        },
        add: function(t) {
            this.storage.addRoot(t),
            this._needsRefresh = !0
        },
        remove: function(t) {
            this.storage.delRoot(t),
            this._needsRefresh = !0
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e),
            this._needsRefresh = !0
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
            this._needsRefresh = !0
        },
        refreshImmediately: function() {
            this._needsRefresh = !1,
            this.painter.refresh(),
            this._needsRefresh = !1
        },
        refresh: function() {
            this._needsRefresh = !0
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()),
            this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()),
            t && this.trigger("rendered")
        },
        addHover: function(t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(),
                n
            }
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        },
        refreshHover: function() {
            this._needsRefreshHover = !0
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1,
            this.painter.refreshHover && this.painter.refreshHover()
        },
        resize: function(t) {
            t = t || {},
            this.painter.resize(t.width, t.height),
            this.handler.resize()
        },
        clearAnimation: function() {
            this.animation.clear()
        },
        getWidth: function() {
            return this.painter.getWidth()
        },
        getHeight: function() {
            return this.painter.getHeight()
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e)
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t)
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e)
        },
        on: function(t, e, n) {
            this.handler.on(t, e, n)
        },
        off: function(t, e) {
            this.handler.off(t, e)
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e)
        },
        clear: function() {
            this.storage.delRoot(),
            this.painter.clear()
        },
        dispose: function() {
            this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            this.animation = this.storage = this.painter = this.handler = null,
            Ri(this.id)
        }
    };
    var hg = (Object.freeze || Object)({
        version: lg,
        init: Pi,
        dispose: Oi,
        getInstance: Ni,
        registerPainter: Ei
    }),
    cg = f,
    dg = M,
    fg = x,
    pg = "series\x00",
    gg = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
    vg = 0,
    mg = ".",
    yg = "___EC__COMPONENT__CONTAINER___",
    _g = 0,
    xg = function(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, n, i) {
            for (var r = {},
            a = 0; a < t.length; a++) {
                var o = t[a][1];
                if (! (n && u(n, o) >= 0 || i && u(i, o) < 0)) {
                    var s = e.getShallow(o);
                    null != s && (r[t[a][0]] = s)
                }
            }
            return r
        }
    },
    wg = xg([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
    bg = {
        getLineStyle: function(t) {
            var e = wg(this, t),
            n = this.getLineDash(e.lineWidth);
            return n && (e.lineDash = n),
            e
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type"),
            n = Math.max(t, 2),
            i = 4 * t;
            return "solid" === e || null == e ? null: "dashed" === e ? [i, i] : [n, n]
        }
    },
    Mg = xg([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
    Sg = {
        getAreaStyle: function(t, e) {
            return Mg(this, t, e)
        }
    },
    Tg = Math.pow,
    Ig = Math.sqrt,
    Cg = 1e-8,
    kg = 1e-4,
    Dg = Ig(3),
    Ag = 1 / 3,
    Lg = W(),
    Pg = W(),
    Og = W(),
    Ng = Math.min,
    Eg = Math.max,
    Rg = Math.sin,
    Bg = Math.cos,
    zg = 2 * Math.PI,
    Fg = W(),
    Vg = W(),
    Wg = W(),
    Hg = [],
    Gg = [],
    Xg = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    },
    Yg = [],
    qg = [],
    jg = [],
    Zg = [],
    Ug = Math.min,
    $g = Math.max,
    Kg = Math.cos,
    Qg = Math.sin,
    Jg = Math.sqrt,
    tv = Math.abs,
    ev = "undefined" != typeof Float32Array,
    nv = function(t) {
        this._saveData = !t,
        this._saveData && (this.data = []),
        this._ctx = null
    };
    nv.prototype = {
        constructor: nv,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = tv(1 / sp / t) || 0,
            this._uy = tv(1 / sp / e) || 0
        },
        getContext: function() {
            return this._ctx
        },
        beginPath: function(t) {
            return this._ctx = t,
            t && t.beginPath(),
            t && (this.dpr = t.dpr),
            this._saveData && (this._len = 0),
            this._lineDash && (this._lineDash = null, this._dashOffset = 0),
            this
        },
        moveTo: function(t, e) {
            return this.addData(Xg.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            this._x0 = t,
            this._y0 = e,
            this._xi = t,
            this._yi = e,
            this
        },
        lineTo: function(t, e) {
            var n = tv(t - this._xi) > this._ux || tv(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Xg.L, t, e),
            this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
            n && (this._xi = t, this._yi = e),
            this
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            return this.addData(Xg.C, t, e, n, i, r, a),
            this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)),
            this._xi = r,
            this._yi = a,
            this
        },
        quadraticCurveTo: function(t, e, n, i) {
            return this.addData(Xg.Q, t, e, n, i),
            this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)),
            this._xi = n,
            this._yi = i,
            this
        },
        arc: function(t, e, n, i, r, a) {
            return this.addData(Xg.A, t, e, n, n, i, r - i, 0, a ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, n, i, r, a),
            this._xi = Kg(r) * n + t,
            this._yi = Qg(r) * n + e,
            this
        },
        arcTo: function(t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r),
            this
        },
        rect: function(t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i),
            this.addData(Xg.R, t, e, n, i),
            this
        },
        closePath: function() {
            this.addData(Xg.Z);
            var t = this._ctx,
            e = this._x0,
            n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()),
            this._xi = e,
            this._yi = n,
            this
        },
        fill: function(t) {
            t && t.fill(),
            this.toStatic()
        },
        stroke: function(t) {
            t && t.stroke(),
            this.toStatic()
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t,
                this._dashIdx = 0;
                for (var e = 0,
                n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t,
            this
        },
        len: function() {
            return this._len
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length === e || !ev || (this.data = new Float32Array(e));
            for (var n = 0; e > n; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function(t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length,
            n = 0,
            i = this._len,
            r = 0; e > r; r++) n += t[r].len();
            ev && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function() {
            if (! (this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function() {
            return this._lineDash
        },
        _dashedLineTo: function(t, e) {
            var n, i, r = this._dashSum,
            a = this._dashOffset,
            o = this._lineDash,
            s = this._ctx,
            l = this._xi,
            u = this._yi,
            h = t - l,
            c = e - u,
            d = Jg(h * h + c * c),
            f = l,
            p = u,
            g = o.length;
            for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx,
            n = o[i],
            f += h * n,
            p += c * n,
            this._dashIdx = (i + 1) % g,
            h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo": "lineTo"](h >= 0 ? Ug(f, t) : $g(f, t), c >= 0 ? Ug(p, e) : $g(p, e));
            h = f - t,
            c = p - e,
            this._dashOffset = -Jg(h * h + c * c)
        },
        _dashedBezierTo: function(t, e, n, i, r, a) {
            var o, s, l, u, h, c = this._dashSum,
            d = this._dashOffset,
            f = this._lineDash,
            p = this._ctx,
            g = this._xi,
            v = this._yi,
            m = sr,
            y = 0,
            _ = this._dashIdx,
            x = f.length,
            w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o),
            l = m(v, e, i, a, o + .1) - m(v, e, i, a, o),
            y += Jg(s * s + l * l);
            for (; x > _ && (w += f[_], !(w > d)); _++);
            for (o = (w - d) / y; 1 >= o;) u = m(g, t, n, r, o),
            h = m(v, e, i, a, o),
            _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h),
            o += f[_] / y,
            _ = (_ + 1) % x;
            _ % 2 !== 0 && p.lineTo(r, a),
            s = r - u,
            l = a - h,
            this._dashOffset = -Jg(s * s + l * l)
        },
        _dashedQuadraticTo: function(t, e, n, i) {
            var r = n,
            a = i;
            n = (n + 2 * t) / 3,
            i = (i + 2 * e) / 3,
            t = (this._xi + 2 * t) / 3,
            e = (this._yi + 2 * e) / 3,
            this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, ev && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function() {
            Yg[0] = Yg[1] = jg[0] = jg[1] = Number.MAX_VALUE,
            qg[0] = qg[1] = Zg[0] = Zg[1] = -Number.MAX_VALUE;
            for (var t = this.data,
            e = 0,
            n = 0,
            i = 0,
            r = 0,
            a = 0; a < t.length;) {
                var o = t[a++];
                switch (1 === a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
                case Xg.M:
                    i = t[a++],
                    r = t[a++],
                    e = i,
                    n = r,
                    jg[0] = i,
                    jg[1] = r,
                    Zg[0] = i,
                    Zg[1] = r;
                    break;
                case Xg.L:
                    xr(e, n, t[a], t[a + 1], jg, Zg),
                    e = t[a++],
                    n = t[a++];
                    break;
                case Xg.C:
                    wr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], jg, Zg),
                    e = t[a++],
                    n = t[a++];
                    break;
                case Xg.Q:
                    br(e, n, t[a++], t[a++], t[a], t[a + 1], jg, Zg),
                    e = t[a++],
                    n = t[a++];
                    break;
                case Xg.A:
                    var s = t[a++],
                    l = t[a++],
                    u = t[a++],
                    h = t[a++],
                    c = t[a++],
                    d = t[a++] + c;
                    a += 1;
                    var f = 1 - t[a++];
                    1 === a && (i = Kg(c) * u + s, r = Qg(c) * h + l),
                    Mr(s, l, u, h, c, d, f, jg, Zg),
                    e = Kg(d) * u + s,
                    n = Qg(d) * h + l;
                    break;
                case Xg.R:
                    i = e = t[a++],
                    r = n = t[a++];
                    var p = t[a++],
                    g = t[a++];
                    xr(i, r, i + p, r + g, jg, Zg);
                    break;
                case Xg.Z:
                    e = i,
                    n = r
                }
                oe(Yg, Yg, jg),
                se(qg, qg, Zg)
            }
            return 0 === a && (Yg[0] = Yg[1] = qg[0] = qg[1] = 0),
            new _n(Yg[0], Yg[1], qg[0] - Yg[0], qg[1] - Yg[1])
        },
        rebuildPath: function(t) {
            for (var e, n, i, r, a, o, s = this.data,
            l = this._ux,
            u = this._uy,
            h = this._len,
            c = 0; h > c;) {
                var d = s[c++];
                switch (1 === c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
                case Xg.M:
                    e = i = s[c++],
                    n = r = s[c++],
                    t.moveTo(i, r);
                    break;
                case Xg.L:
                    a = s[c++],
                    o = s[c++],
                    (tv(a - i) > l || tv(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);
                    break;
                case Xg.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                    break;
                case Xg.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]),
                    i = s[c - 2],
                    r = s[c - 1];
                    break;
                case Xg.A:
                    var f = s[c++],
                    p = s[c++],
                    g = s[c++],
                    v = s[c++],
                    m = s[c++],
                    y = s[c++],
                    _ = s[c++],
                    x = s[c++],
                    w = g > v ? g: v,
                    b = g > v ? 1 : g / v,
                    M = g > v ? v / g: 1,
                    S = Math.abs(g - v) > .001,
                    T = m + y;
                    S ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / M), t.rotate( - _), t.translate( - f, -p)) : t.arc(f, p, w, m, T, 1 - x),
                    1 === c && (e = Kg(m) * g + f, n = Qg(m) * v + p),
                    i = Kg(T) * g + f,
                    r = Qg(T) * v + p;
                    break;
                case Xg.R:
                    e = i = s[c],
                    n = r = s[c + 1],
                    t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;
                case Xg.Z:
                    t.closePath(),
                    i = e,
                    r = n
                }
            }
        }
    },
    nv.CMD = Xg;
    var iv = 2 * Math.PI,
    rv = 2 * Math.PI,
    av = nv.CMD,
    ov = 2 * Math.PI,
    sv = 1e-4,
    lv = [ - 1, -1, -1],
    uv = [ - 1, -1],
    hv = kp.prototype.getCanvasPattern,
    cv = Math.abs,
    dv = new nv(!0);
    zr.prototype = {
        constructor: zr,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        subPixelOptimize: !1,
        brush: function(t, e) {
            var n = this.style,
            i = this.path || dv,
            r = n.hasStroke(),
            a = n.hasFill(),
            o = n.fill,
            s = n.stroke,
            l = a && !!o.colorStops,
            u = r && !!s.colorStops,
            h = a && !!o.image,
            c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)),
                u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient: h && (t.fillStyle = hv.call(o, t)),
            u ? t.strokeStyle = this._strokeGradient: c && (t.strokeStyle = hv.call(s, t));
            var f = n.lineDash,
            p = n.lineDashOffset,
            g = !!t.setLineDash,
            v = this.getGlobalScale();
            if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = n.fillOpacity * n.opacity,
                i.fill(t),
                t.globalAlpha = m
            } else i.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = n.strokeOpacity * n.opacity,
                i.stroke(t),
                t.globalAlpha = m
            } else i.stroke(t);
            f && g && t.setLineDash([]),
            null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        },
        buildPath: function() {},
        createPathProxy: function() {
            this.path = new nv
        },
        getBoundingRect: function() {
            var t = this._rect,
            e = this.style,
            n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new nv),
                this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)),
                t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth,
                    o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)),
                    o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                }
                return r
            }
            return t
        },
        contain: function(t, e) {
            var n = this.transformCoordToLocal(t, e),
            i = this.getBoundingRect(),
            r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth,
                    s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Br(a, o / s, t, e))) return ! 0
                }
                if (r.hasFill()) return Rr(a, t, e)
            }
            return ! 1
        },
        dirty: function(t) {
            null == t && (t = !0),
            t && (this.__dirtyPath = t, this._rect = null),
            this.__dirty = this.__dirtyText = !0,
            this.__zr && this.__zr.refresh(),
            this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function(t) {
            return this.animate("shape", t)
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : _i.prototype.attrKV.call(this, t, e)
        },
        setShape: function(t, e) {
            var n = this.shape;
            if (n) {
                if (M(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                else n[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function() {
            var t = this.transform;
            return t && cv(t[0] - 1) > 1e-10 && cv(t[3] - 1) > 1e-10 ? Math.sqrt(cv(t[0] * t[3] - t[2] * t[1])) : 1
        }
    },
    zr.extend = function(t) {
        var e = function(e) {
            zr.call(this, e),
            t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) ! i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, zr);
        for (var n in t)"style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    },
    h(zr, _i);
    var fv = nv.CMD,
    pv = [[], [], []],
    gv = Math.sqrt,
    vv = Math.atan2,
    mv = function(t, e) {
        var n, i, r, a, o, s, l = t.data,
        u = fv.M,
        h = fv.C,
        c = fv.L,
        d = fv.R,
        f = fv.A,
        p = fv.Q;
        for (r = 0, a = 0; r < l.length;) {
            switch (n = l[r++], a = r, i = 0, n) {
            case u:
                i = 1;
                break;
            case c:
                i = 1;
                break;
            case h:
                i = 3;
                break;
            case p:
                i = 2;
                break;
            case f:
                var g = e[4],
                v = e[5],
                m = gv(e[0] * e[0] + e[1] * e[1]),
                y = gv(e[2] * e[2] + e[3] * e[3]),
                _ = vv( - e[1] / y, e[0] / m);
                l[r] *= m,
                l[r++] += g,
                l[r] *= y,
                l[r++] += v,
                l[r++] *= m,
                l[r++] *= y,
                l[r++] += _,
                l[r++] += _,
                r += 2,
                a = r;
                break;
            case d:
                s[0] = l[r++],
                s[1] = l[r++],
                ae(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1],
                s[0] += l[r++],
                s[1] += l[r++],
                ae(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1]
            }
            for (o = 0; i > o; o++) {
                var s = pv[o];
                s[0] = l[r++],
                s[1] = l[r++],
                ae(s, s, e),
                l[a++] = s[0],
                l[a++] = s[1]
            }
        }
    },
    yv = Math.sqrt,
    _v = Math.sin,
    xv = Math.cos,
    wv = Math.PI,
    bv = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    },
    Mv = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (bv(t) * bv(e))
    },
    Sv = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Mv(t, e))
    },
    Tv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    Iv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    Cv = function(t) {
        _i.call(this, t)
    };
    Cv.prototype = {
        constructor: Cv,
        type: "text",
        brush: function(t, e) {
            var n = this.style;
            this.__dirty && ei(n, !0),
            n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            return null != i && (i += ""),
            yi(i, n) ? (this.setTransform(t), ii(this, t, i, n, null, e), void this.restoreTransform(t)) : void(t.__attrCachedBy = wp.NONE)
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && ei(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "": e = "";
                var n = zn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, pi(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2,
                    n.y -= i / 2,
                    n.width += i,
                    n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    },
    h(Cv, _i);
    var kv = zr.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy),
            t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
        }
    }),
    Dv = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
    Av = function(t) {
        return af.browser.ie && af.browser.version >= 11 ?
        function() {
            var e, n = this.__clipPaths,
            i = this.style;
            if (n) for (var r = 0; r < n.length; r++) {
                var a = n[r],
                o = a && a.shape,
                s = a && a.type;
                if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                    for (var l = 0; l < Dv.length; l++) Dv[l][2] = i[Dv[l][0]],
                    i[Dv[l][0]] = Dv[l][1];
                    e = !0;
                    break
                }
            }
            if (t.apply(this, arguments), e) for (var l = 0; l < Dv.length; l++) i[Dv[l][0]] = Dv[l][2]
        }: t
    },
    Lv = zr.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: Av(zr.prototype.brush),
        buildPath: function(t, e) {
            var n = e.cx,
            i = e.cy,
            r = Math.max(e.r0 || 0, 0),
            a = Math.max(e.r, 0),
            o = e.startAngle,
            s = e.endAngle,
            l = e.clockwise,
            u = Math.cos(o),
            h = Math.sin(o);
            t.moveTo(u * r + n, h * r + i),
            t.lineTo(u * a + n, h * a + i),
            t.arc(n, i, a, o, s, !l),
            t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i),
            0 !== r && t.arc(n, i, r, s, o, l),
            t.closePath()
        }
    }),
    Pv = zr.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var n = e.cx,
            i = e.cy,
            r = 2 * Math.PI;
            t.moveTo(n + e.r, i),
            t.arc(n, i, e.r, 0, r, !1),
            t.moveTo(n + e.r0, i),
            t.arc(n, i, e.r0, 0, r, !0)
        }
    }),
    Ov = function(t, e) {
        for (var n = t.length,
        i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
        var o = r / 2;
        o = n > o ? n: o;
        for (var a = 0; o > a; a++) {
            var s, l, u, h = a / (o - 1) * (e ? n: n - 1),
            c = Math.floor(h),
            d = h - c,
            f = t[c % n];
            e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c: c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
            var p = d * d,
            g = d * p;
            i.push([Yr(s[0], f[0], l[0], u[0], d, p, g), Yr(s[1], f[1], l[1], u[1], d, p, g)])
        }
        return i
    },
    Nv = function(t, e, n, i) {
        var r, a, o, s, l = [],
        u = [],
        h = [],
        c = [];
        if (i) {
            o = [1 / 0, 1 / 0],
            s = [ - 1 / 0, -1 / 0];
            for (var d = 0,
            f = t.length; f > d; d++) oe(o, o, t[d]),
            se(s, s, t[d]);
            oe(o, o, i[0]),
            se(s, s, i[1])
        }
        for (var d = 0,
        f = t.length; f > d; d++) {
            var p = t[d];
            if (n) r = t[d ? d - 1 : f - 1],
            a = t[(d + 1) % f];
            else {
                if (0 === d || d === f - 1) {
                    l.push(G(t[d]));
                    continue
                }
                r = t[d - 1],
                a = t[d + 1]
            }
            j(u, a, r),
            J(u, u, e);
            var g = ee(p, r),
            v = ee(p, a),
            m = g + v;
            0 !== m && (g /= m, v /= m),
            J(h, u, -g),
            J(c, u, v);
            var y = Y([], p, h),
            _ = Y([], p, c);
            i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)),
            l.push(y),
            l.push(_)
        }
        return n && l.push(l.shift()),
        l
    },
    Ev = zr.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            qr(t, e, !0)
        }
    }),
    Rv = zr.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            qr(t, e, !1)
        }
    }),
    Bv = Math.round,
    zv = {},
    Fv = zr.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n, i, r, a;
            this.subPixelOptimize ? (Zr(zv, e, this.style), n = zv.x, i = zv.y, r = zv.width, a = zv.height, zv.r = e.r, e = zv) : (n = e.x, i = e.y, r = e.width, a = e.height),
            e.r ? ti(t, e) : t.rect(n, i, r, a),
            t.closePath()
        }
    }),
    Vv = {},
    Wv = zr.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n, i, r, a;
            this.subPixelOptimize ? (jr(Vv, e, this.style), n = Vv.x1, i = Vv.y1, r = Vv.x2, a = Vv.y2) : (n = e.x1, i = e.y1, r = e.x2, a = e.y2);
            var o = e.percent;
            0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
        },
        pointAt: function(t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
        }
    }),
    Hv = [],
    Gv = zr.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.x1,
            i = e.y1,
            r = e.x2,
            a = e.y2,
            o = e.cpx1,
            s = e.cpy1,
            l = e.cpx2,
            u = e.cpy2,
            h = e.percent;
            0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (mr(n, o, r, h, Hv), o = Hv[1], r = Hv[2], mr(i, s, a, h, Hv), s = Hv[1], a = Hv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (cr(n, o, l, r, h, Hv), o = Hv[1], l = Hv[2], r = Hv[3], cr(i, s, u, a, h, Hv), s = Hv[1], u = Hv[2], a = Hv[3]), t.bezierCurveTo(o, s, l, u, r, a)))
        },
        pointAt: function(t) {
            return $r(this.shape, t, !1)
        },
        tangentAt: function(t) {
            var e = $r(this.shape, t, !0);
            return te(e, e)
        }
    }),
    Xv = zr.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.cx,
            i = e.cy,
            r = Math.max(e.r, 0),
            a = e.startAngle,
            o = e.endAngle,
            s = e.clockwise,
            l = Math.cos(a),
            u = Math.sin(a);
            t.moveTo(l * r + n, u * r + i),
            t.arc(n, i, r, a, o, !s)
        }
    }),
    Yv = zr.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath,
            e = this.shape.paths,
            n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
            this.__dirtyPath = t,
            this.__dirty = this.__dirty || t
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(),
            t[n].path.setScale(e[0], e[1])
        },
        buildPath: function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
        },
        getBoundingRect: function() {
            return this._updatePathDirty(),
            zr.prototype.getBoundingRect.call(this)
        }
    }),
    qv = function(t) {
        this.colorStops = t || []
    };
    qv.prototype = {
        constructor: qv,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            })
        }
    };
    var jv = function(t, e, n, i, r, a) {
        this.x = null == t ? 0 : t,
        this.y = null == e ? 0 : e,
        this.x2 = null == n ? 1 : n,
        this.y2 = null == i ? 0 : i,
        this.type = "linear",
        this.global = a || !1,
        qv.call(this, r)
    };
    jv.prototype = {
        constructor: jv
    },
    h(jv, qv);
    var Zv = function(t, e, n, i, r) {
        this.x = null == t ? .5 : t,
        this.y = null == e ? .5 : e,
        this.r = null == n ? .5 : n,
        this.type = "radial",
        this.global = r || !1,
        qv.call(this, i)
    };
    Zv.prototype = {
        constructor: Zv
    },
    h(Zv, qv),
    Kr.prototype.incremental = !0,
    Kr.prototype.clearDisplaybles = function() {
        this._displayables = [],
        this._temporaryDisplayables = [],
        this._cursor = 0,
        this.dirty(),
        this.notClear = !1
    },
    Kr.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
        this.dirty()
    },
    Kr.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
    },
    Kr.prototype.eachPendingDisplayable = function(t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    },
    Kr.prototype.update = function() {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            e.parent = this,
            e.update(),
            e.parent = null
        }
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this,
            e.update(),
            e.parent = null
        }
    },
    Kr.prototype.brush = function(t) {
        for (var e = this._cursor; e < this._displayables.length; e++) {
            var n = this._displayables[e];
            n.beforeBrush && n.beforeBrush(t),
            n.brush(t, e === this._cursor ? null: this._displayables[e - 1]),
            n.afterBrush && n.afterBrush(t)
        }
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var n = this._temporaryDisplayables[e];
            n.beforeBrush && n.beforeBrush(t),
            n.brush(t, 0 === e ? null: this._temporaryDisplayables[e - 1]),
            n.afterBrush && n.afterBrush(t)
        }
        this._temporaryDisplayables = [],
        this.notClear = !0
    };
    var Uv = [];
    Kr.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new _n(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e],
                i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Uv)),
                t.union(i)
            }
            this._rect = t
        }
        return this._rect
    },
    Kr.prototype.contain = function(t, e) {
        var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();
        if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
            var a = this._displayables[r];
            if (a.contain(t, e)) return ! 0
        }
        return ! 1
    },
    h(Kr, _i);
    var $v = Math.round,
    Kv = Math.max,
    Qv = Math.min,
    Jv = {},
    tm = 1,
    em = Xr,
    nm = z(),
    im = 0,
    rm = (Object.freeze || Object)({
        Z2_EMPHASIS_LIFT: tm,
        extendShape: Qr,
        extendPath: Jr,
        makePath: ta,
        makeImage: ea,
        mergePath: em,
        resizePath: ia,
        subPixelOptimizeLine: ra,
        subPixelOptimizeRect: aa,
        subPixelOptimize: oa,
        setElementHoverStyle: pa,
        isInEmphasis: ga,
        setHoverStyle: xa,
        setAsHoverStyleTrigger: wa,
        setLabelStyle: ba,
        setTextStyle: Ma,
        setText: Sa,
        getFont: La,
        updateProps: Oa,
        initProps: Na,
        getTransform: Ea,
        applyTransform: Ra,
        transformDirection: Ba,
        groupTransition: za,
        clipPointsByRect: Fa,
        clipRectByRect: Va,
        createIcon: Wa,
        Group: gp,
        Image: xi,
        Text: Cv,
        Circle: kv,
        Sector: Lv,
        Ring: Pv,
        Polygon: Ev,
        Polyline: Rv,
        Rect: Fv,
        Line: Wv,
        BezierCurve: Gv,
        Arc: Xv,
        IncrementalDisplayable: Kr,
        CompoundPath: Yv,
        LinearGradient: jv,
        RadialGradient: Zv,
        BoundingRect: _n
    }),
    am = ["textStyle", "color"],
    om = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(am) : null)
        },
        getFont: function() {
            return La({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            },
            this.ecModel)
        },
        getTextRect: function(t) {
            return zn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
        }
    },
    sm = xg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
    lm = {
        getItemStyle: function(t, e) {
            var n = sm(this, t, e),
            i = this.getBorderLineDash();
            return i && (n.lineDash = i),
            n
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null: "dashed" === t ? [5, 5] : [1, 1]
        }
    },
    um = c,
    hm = qi();
    Ha.prototype = {
        constructor: Ha,
        init: null,
        mergeOption: function(t) {
            r(this.option, t, !0)
        },
        get: function(t, e) {
            return null == t ? this.option: Ga(this.option, this.parsePath(t), !e && Xa(this, t))
        },
        getShallow: function(t, e) {
            var n = this.option,
            i = null == n ? n: n[t],
            r = !e && Xa(this, t);
            return null == i && r && (i = r.getShallow(t)),
            i
        },
        getModel: function(t, e) {
            var n, i = null == t ? this.option: Ga(this.option, t = this.parsePath(t));
            return e = e || (n = Xa(this, t)) && n.getModel(t),
            new Ha(i, e, this.ecModel)
        },
        isEmpty: function() {
            return null == this.option
        },
        restoreData: function() {},
        clone: function() {
            var t = this.constructor;
            return new t(i(this.option))
        },
        setReadOnly: function() {},
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")),
            t
        },
        customizeGetParent: function(t) {
            hm(this).getParent = t
        },
        isAnimationEnabled: function() {
            if (!af.node) {
                if (null != this.option.animation) return !! this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    },
    tr(Ha),
    er(Ha),
    um(Ha, bg),
    um(Ha, Sg),
    um(Ha, om),
    um(Ha, lm);
    var cm = 0,
    dm = 1e-4,
    fm = 9007199254740991,
    pm = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    gm = (Object.freeze || Object)({
        linearMap: Ua,
        parsePercent: $a,
        round: Ka,
        asc: Qa,
        getPrecision: Ja,
        getPrecisionSafe: to,
        getPixelPrecision: eo,
        getPercentWithPrecision: no,
        MAX_SAFE_INTEGER: fm,
        remRadian: io,
        isRadianAroundZero: ro,
        parseDate: ao,
        quantity: oo,
        nice: lo,
        quantile: uo,
        reformIntervals: ho,
        isNumeric: co
    }),
    vm = P,
    mm = /([&<>"'])/g,
    ym = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    _m = ["a", "b", "c", "d", "e", "f", "g"],
    xm = function(t, e) {
        return "{" + t + (null == e ? "": e) + "}"
    },
    wm = Xn,
    bm = (Object.freeze || Object)({
        addCommas: fo,
        toCamelCase: po,
        normalizeCssArray: vm,
        encodeHTML: go,
        formatTpl: vo,
        formatTplSimple: mo,
        getTooltipMarker: yo,
        formatTime: xo,
        capitalFirst: wo,
        truncateText: wm,
        getTextBoundingRect: bo,
        getTextRect: Mo
    }),
    Mm = f,
    Sm = ["left", "right", "top", "bottom", "width", "height"],
    Tm = [["width", "left", "right"], ["height", "top", "bottom"]],
    Im = (_(So, "vertical"), _(So, "horizontal"), {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            }
        }
    }),
    Cm = qi(),
    km = Ha.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, n, i) {
            Ha.call(this, t, e, n, i),
            this.uid = Ya("ec_cpt_model")
        },
        init: function(t, e, n) {
            this.mergeDefaultAndTheme(t, n)
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode,
            i = n ? Co(t) : {},
            a = e.getTheme();
            r(t, a.get(this.mainType)),
            r(t, this.getDefaultOption()),
            n && Io(t, i, n)
        },
        mergeOption: function(t) {
            r(this.option, t, !0);
            var e = this.layoutMode;
            e && Io(this.option, t, e)
        },
        optionUpdated: function() {},
        getDefaultOption: function() {
            var t = Cm(this);
            if (!t.defaultOption) {
                for (var e = [], n = this.constructor; n;) {
                    var i = n.prototype.defaultOption;
                    i && e.push(i),
                    n = n.superClass
                }
                for (var a = {},
                o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                t.defaultOption = a
            }
            return t.defaultOption
        },
        getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            })
        }
    });
    rr(km, {
        registerWhenExtend: !0
    }),
    qa(km),
    ja(km, Do),
    c(km, Im);
    var Dm = "";
    "undefined" != typeof navigator && (Dm = navigator.platform || "");
    var Am = {
        color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
        gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
        textStyle: {
            fontFamily: Dm.match(/^Win/) ? "Microsoft YaHei": "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    },
    Lm = qi(),
    Pm = {
        clearColorPalette: function() {
            Lm(this).colorIdx = 0,
            Lm(this).colorNameMap = {}
        },
        getColorFromPalette: function(t, e, n) {
            e = e || this;
            var i = Lm(e),
            r = i.colorIdx || 0,
            a = i.colorNameMap = i.colorNameMap || {};
            if (a.hasOwnProperty(t)) return a[t];
            var o = Bi(this.get("color", !0)),
            s = this.get("colorLayer", !0),
            l = null != n && s ? Ao(s, n) : o;
            if (l = l || o, l && l.length) {
                var u = l[r];
                return t && (a[t] = u),
                i.colorIdx = (r + 1) % l.length,
                u
            }
        }
    },
    Om = {
        cartesian2d: function(t, e, n, i) {
            var r = t.getReferringComponents("xAxis")[0],
            a = t.getReferringComponents("yAxis")[0];
            e.coordSysDims = ["x", "y"],
            n.set("x", r),
            n.set("y", a),
            Po(r) && (i.set("x", r), e.firstCategoryDimIndex = 0),
            Po(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
        },
        singleAxis: function(t, e, n, i) {
            var r = t.getReferringComponents("singleAxis")[0];
            e.coordSysDims = ["single"],
            n.set("single", r),
            Po(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
        },
        polar: function(t, e, n, i) {
            var r = t.getReferringComponents("polar")[0],
            a = r.findAxisModel("radiusAxis"),
            o = r.findAxisModel("angleAxis");
            e.coordSysDims = ["radius", "angle"],
            n.set("radius", a),
            n.set("angle", o),
            Po(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0),
            Po(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
        },
        geo: function(t, e) {
            e.coordSysDims = ["lng", "lat"]
        },
        parallel: function(t, e, n, i) {
            var r = t.ecModel,
            a = r.getComponent("parallel", t.get("parallelIndex")),
            o = e.coordSysDims = a.dimensions.slice();
            f(a.parallelAxisIndex,
            function(t, a) {
                var s = r.getComponent("parallelAxis", t),
                l = o[a];
                n.set(l, s),
                Po(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
            })
        }
    },
    Nm = "original",
    Em = "arrayRows",
    Rm = "objectRows",
    Bm = "keyedColumns",
    zm = "unknown",
    Fm = "typedArray",
    Vm = "column",
    Wm = "row";
    Oo.seriesDataToSource = function(t) {
        return new Oo({
            data: t,
            sourceFormat: T(t) ? Fm: Nm,
            fromDataset: !1
        })
    },
    er(Oo);
    var Hm = qi(),
    Gm = "\x00_ec_inner",
    Xm = Ha.extend({
        init: function(t, e, n, i) {
            n = n || {},
            this.option = null,
            this._theme = new Ha(n),
            this._optionManager = i
        },
        setOption: function(t, e) {
            O(!(Gm in t), "please use chart.getOption()"),
            this._optionManager.setOption(t, e),
            this.resetOption(null)
        },
        resetOption: function(t) {
            var e = !1,
            n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Zo.call(this, i),
                e = !0
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = n.getMediaOption(this, this._api);
                a.length && f(a,
                function(t) {
                    this.mergeOption(t, e = !0)
                },
                this)
            }
            return e
        },
        mergeOption: function(t) {
            function e(e, i) {
                var r = Bi(t[e]),
                s = Wi(a.get(e), r);
                Hi(s),
                f(s,
                function(t) {
                    var n = t.option;
                    M(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = $o(e, n, t.exist))
                });
                var l = Uo(a, i);
                n[e] = [],
                a.set(e, []),
                f(s,
                function(t, i) {
                    var r = t.exist,
                    s = t.option;
                    if (O(M(s) || r, "Empty component definition"), s) {
                        var u = km.getClass(e, t.keyInfo.subType, !0);
                        if (r && r instanceof u) r.name = t.keyInfo.name,
                        r.mergeOption(s, this),
                        r.optionUpdated(s, !1);
                        else {
                            var h = o({
                                dependentModels: l,
                                componentIndex: i
                            },
                            t.keyInfo);
                            r = new u(s, this, this, h),
                            o(r, h),
                            r.init(s, this, this, h),
                            r.optionUpdated(null, !0)
                        }
                    } else r.mergeOption({},
                    this),
                    r.optionUpdated({},
                    !1);
                    a.get(e)[i] = r,
                    n[e][i] = r.option
                },
                this),
                "series" === e && Ko(this, a.get("series"))
            }
            var n = this.option,
            a = this._componentsMap,
            s = [];
            Ro(this),
            f(t,
            function(t, e) {
                null != t && (km.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
            }),
            km.topologicalTravel(s, km.getAllClassMainTypes(), e, this),
            this._seriesIndicesMap = z(this._seriesIndices = this._seriesIndices || [])
        },
        getOption: function() {
            var t = i(this.option);
            return f(t,
            function(e, n) {
                if (km.hasClass(n)) {
                    for (var e = Bi(e), i = e.length - 1; i >= 0; i--) Xi(e[i]) && e.splice(i, 1);
                    t[n] = e
                }
            }),
            delete t[Gm],
            t
        },
        getTheme: function() {
            return this._theme
        },
        getComponent: function(t, e) {
            var n = this._componentsMap.get(t);
            return n ? n[e || 0] : void 0
        },
        queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var n = t.index,
            i = t.id,
            r = t.name,
            a = this._componentsMap.get(e);
            if (!a || !a.length) return [];
            var o;
            if (null != n) x(n) || (n = [n]),
            o = v(p(n,
            function(t) {
                return a[t]
            }),
            function(t) {
                return !! t
            });
            else if (null != i) {
                var s = x(i);
                o = v(a,
                function(t) {
                    return s && u(i, t.id) >= 0 || !s && t.id === i
                })
            } else if (null != r) {
                var l = x(r);
                o = v(a,
                function(t) {
                    return l && u(r, t.name) >= 0 || !l && t.name === r
                })
            } else o = a.slice();
            return Qo(o, t)
        },
        findComponents: function(t) {
            function e(t) {
                var e = r + "Index",
                n = r + "Id",
                i = r + "Name";
                return ! t || null == t[e] && null == t[n] && null == t[i] ? null: {
                    mainType: r,
                    index: t[e],
                    id: t[n],
                    name: t[i]
                }
            }
            function n(e) {
                return t.filter ? v(e, t.filter) : e
            }
            var i = t.query,
            r = t.mainType,
            a = e(i),
            o = a ? this.queryComponents(a) : this._componentsMap.get(r);
            return n(Qo(o, t))
        },
        eachComponent: function(t, e, n) {
            var i = this._componentsMap;
            if ("function" == typeof t) n = e,
            e = t,
            i.each(function(t, i) {
                f(t,
                function(t, r) {
                    e.call(n, i, t, r)
                })
            });
            else if (b(t)) f(i.get(t), e, n);
            else if (M(t)) {
                var r = this.findComponents(t);
                f(r, e, n)
            }
        },
        getSeriesByName: function(t) {
            var e = this._componentsMap.get("series");
            return v(e,
            function(e) {
                return e.name === t
            })
        },
        getSeriesByIndex: function(t) {
            return this._componentsMap.get("series")[t]
        },
        getSeriesByType: function(t) {
            var e = this._componentsMap.get("series");
            return v(e,
            function(e) {
                return e.subType === t
            })
        },
        getSeries: function() {
            return this._componentsMap.get("series").slice()
        },
        getSeriesCount: function() {
            return this._componentsMap.get("series").length
        },
        eachSeries: function(t, e) {
            f(this._seriesIndices,
            function(n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
            },
            this)
        },
        eachRawSeries: function(t, e) {
            f(this._componentsMap.get("series"), t, e)
        },
        eachSeriesByType: function(t, e, n) {
            f(this._seriesIndices,
            function(i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
            },
            this)
        },
        eachRawSeriesByType: function(t, e, n) {
            return f(this.getSeriesByType(t), e, n)
        },
        isSeriesFiltered: function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        },
        getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice()
        },
        filterSeries: function(t, e) {
            var n = v(this._componentsMap.get("series"), t, e);
            Ko(this, n)
        },
        restoreData: function(t) {
            var e = this._componentsMap;
            Ko(this, e.get("series"));
            var n = [];
            e.each(function(t, e) {
                n.push(e)
            }),
            km.topologicalTravel(n, km.getAllClassMainTypes(),
            function(n) {
                f(e.get(n),
                function(e) { ("series" !== n || !qo(e, t)) && e.restoreData()
                })
            })
        }
    });
    c(Xm, Pm);
    var Ym = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
    qm = {};
    ts.prototype = {
        constructor: ts,
        create: function(t, e) {
            var n = [];
            f(qm,
            function(i) {
                var r = i.create(t, e);
                n = n.concat(r || [])
            }),
            this._coordinateSystems = n
        },
        update: function(t, e) {
            f(this._coordinateSystems,
            function(n) {
                n.update && n.update(t, e)
            })
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice()
        }
    },
    ts.register = function(t, e) {
        qm[t] = e
    },
    ts.get = function(t) {
        return qm[t]
    };
    var jm = f,
    Zm = i,
    Um = p,
    $m = r,
    Km = /^(min|max)?(.+)$/;
    es.prototype = {
        constructor: es,
        setOption: function(t, e) {
            t && f(Bi(t.series),
            function(t) {
                t && t.data && T(t.data) && E(t.data)
            }),
            t = Zm(t, !0);
            var n = this._optionBackup,
            i = ns.call(this, t, e, !n);
            this._newBaseOption = i.baseOption,
            n ? (os(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = Um(e.timelineOptions, Zm),
            this._mediaList = Um(e.mediaList, Zm),
            this._mediaDefault = Zm(e.mediaDefault),
            this._currentMediaIndices = [],
            Zm(t ? e.baseOption: this._newBaseOption)
        },
        getTimelineOption: function(t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = Zm(n[i.getCurrentIndex()], !0))
            }
            return e
        },
        getMediaOption: function() {
            var t = this._api.getWidth(),
            e = this._api.getHeight(),
            n = this._mediaList,
            i = this._mediaDefault,
            r = [],
            a = [];
            if (!n.length && !i) return a;
            for (var o = 0,
            s = n.length; s > o; o++) is(n[o].query, t, e) && r.push(o);
            return ! r.length && i && (r = [ - 1]),
            r.length && !as(r, this._currentMediaIndices) && (a = Um(r,
            function(t) {
                return Zm( - 1 === t ? i.option: n[t].option)
            })),
            this._currentMediaIndices = r,
            a
        }
    };
    var Qm = f,
    Jm = M,
    ty = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
    ey = function(t, e) {
        Qm(fs(t.series),
        function(t) {
            Jm(t) && ds(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
        Qm(n,
        function(e) {
            Qm(fs(t[e]),
            function(t) {
                t && (hs(t, "axisLabel"), hs(t.axisPointer, "label"))
            })
        }),
        Qm(fs(t.parallel),
        function(t) {
            var e = t && t.parallelAxisDefault;
            hs(e, "axisLabel"),
            hs(e && e.axisPointer, "label")
        }),
        Qm(fs(t.calendar),
        function(t) {
            ls(t, "itemStyle"),
            hs(t, "dayLabel"),
            hs(t, "monthLabel"),
            hs(t, "yearLabel")
        }),
        Qm(fs(t.radar),
        function(t) {
            hs(t, "name")
        }),
        Qm(fs(t.geo),
        function(t) {
            Jm(t) && (cs(t), Qm(fs(t.regions),
            function(t) {
                cs(t)
            }))
        }),
        Qm(fs(t.timeline),
        function(t) {
            cs(t),
            ls(t, "label"),
            ls(t, "itemStyle"),
            ls(t, "controlStyle", !0);
            var e = t.data;
            x(e) && f(e,
            function(t) {
                M(t) && (ls(t, "label"), ls(t, "itemStyle"))
            })
        }),
        Qm(fs(t.toolbox),
        function(t) {
            ls(t, "iconStyle"),
            Qm(t.feature,
            function(t) {
                ls(t, "iconStyle")
            })
        }),
        hs(ps(t.axisPointer), "label"),
        hs(ps(t.tooltip).axisPointer, "label")
    },
    ny = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
    iy = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    ry = function(t, e) {
        ey(t, e),
        t.series = Bi(t.series),
        f(t.series,
        function(t) {
            if (M(t)) {
                var e = t.type;
                if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                    var n = gs(t, "pointer.color");
                    null != n && vs(t, "itemStyle.normal.color", n)
                }
                ms(t)
            }
        }),
        t.dataRange && (t.visualMap = t.dataRange),
        f(iy,
        function(e) {
            var n = t[e];
            n && (x(n) || (n = [n]), f(n,
            function(t) {
                ms(t)
            }))
        })
    },
    ay = function(t) {
        var e = z();
        t.eachSeries(function(t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []),
                r = t.getData(),
                a = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel),
                i.push(a)
            }
        }),
        e.each(ys)
    },
    oy = _s.prototype;
    oy.pure = !1,
    oy.persistent = !0,
    oy.getSource = function() {
        return this._source
    };
    var sy = {
        arrayRows_column: {
            pure: !0,
            count: function() {
                return Math.max(0, this._data.length - this._source.startIndex)
            },
            getItem: function(t) {
                return this._data[t + this._source.startIndex]
            },
            appendData: bs
        },
        arrayRows_row: {
            pure: !0,
            count: function() {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            },
            getItem: function(t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null)
                }
                return e
            },
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {
            pure: !0,
            count: xs,
            getItem: ws,
            appendData: bs
        },
        keyedColumns: {
            pure: !0,
            count: function() {
                var t = this._source.dimensionsDefine[0].name,
                e = this._data[t];
                return e ? e.length: 0
            },
            getItem: function(t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null)
                }
                return e
            },
            appendData: function(t) {
                var e = this._data;
                f(t,
                function(t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                })
            }
        },
        original: {
            count: xs,
            getItem: ws,
            appendData: bs
        },
        typedArray: {
            persistent: !1,
            pure: !0,
            count: function() {
                return this._data ? this._data.length / this._dimSize: 0
            },
            getItem: function(t, e) {
                t -= this._offset,
                e = e || [];
                for (var n = this._dimSize * t,
                i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                return e
            },
            appendData: function(t) {
                this._data = t
            },
            clean: function() {
                this._offset += this.count(),
                this._data = null
            }
        }
    },
    ly = {
        arrayRows: Ms,
        objectRows: function(t, e, n, i) {
            return null != n ? t[i] : t
        },
        keyedColumns: Ms,
        original: function(t, e, n) {
            var i = Fi(t);
            return null != n && i instanceof Array ? i[n] : i
        },
        typedArray: Ms
    },
    uy = {
        arrayRows: Ss,
        objectRows: function(t, e) {
            return Ts(t[e], this._dimensionInfos[e])
        },
        keyedColumns: Ss,
        original: function(t, e, n, i) {
            var r = t && (null == t.value ? t: t.value);
            return ! this._rawData.pure && Vi(t) && (this.hasItemOption = !0),
            Ts(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
        },
        typedArray: function(t, e, n, i) {
            return t[i]
        }
    },
    hy = /\{@(.+?)\}/g,
    cy = {
        getDataParams: function(t, e) {
            var n = this.getData(e),
            i = this.getRawValue(t, e),
            r = n.getRawIndex(t),
            a = n.getName(t),
            o = n.getRawDataItem(t),
            s = n.getItemVisual(t, "color"),
            l = this.ecModel.getComponent("tooltip"),
            u = l && l.get("renderMode"),
            h = Ki(u),
            c = this.mainType,
            d = "series" === c;
            return {
                componentType: c,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: d ? this.subType: null,
                seriesIndex: this.seriesIndex,
                seriesId: d ? this.id: null,
                seriesName: d ? this.name: null,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: i,
                color: s,
                marker: yo({
                    color: s,
                    renderMode: h
                }),
                $vars: ["seriesName", "name", "value"]
            }
        },
        getFormattedLabel: function(t, e, n, i, r) {
            e = e || "normal";
            var a = this.getData(n),
            o = a.getItemModel(t),
            s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            if ("function" == typeof l) return s.status = e,
            l(s);
            if ("string" == typeof l) {
                var u = vo(l, s);
                return u.replace(hy,
                function(e, n) {
                    var i = n.length;
                    return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)),
                    Is(a, t, n)
                })
            }
        },
        getRawValue: function(t, e) {
            return Is(this.getData(e), t)
        },
        formatTooltip: function() {}
    },
    dy = Ds.prototype;
    dy.perform = function(t) {
        function e(t) {
            return ! (t >= 1) && (t = 1),
            t
        }
        var n = this._upstream,
        i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        u = t && t.modDataCount || 0; (o !== l || s !== u) && (a = "reset");
        var h; (this._dirty || "reset" === a) && (this._dirty = !1, h = Ls(this, i)),
        this._modBy = l,
        this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd: this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex,
            f = Math.min(null != c ? this._dueIndex + c: 1 / 0, this._dueEnd);
            if (!i && (h || f > d)) {
                var p = this._progress;
                if (x(p)) for (var g = 0; g < p.length; g++) As(this, p[g], d, f, l, u);
                else As(this, p, d, f, l, u)
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd: f;
            this._outputDueEnd = v
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd: this._dueEnd;
        return this.unfinished()
    };
    var fy = function() {
        function t() {
            return n > i ? i++:null
        }
        function e() {
            var t = i % o * r + Math.ceil(i / o),
            e = i >= n ? null: a > t ? t: i;
            return i++,
            e
        }
        var n, i, r, a, o, s = {
            reset: function(l, u, h, c) {
                i = l,
                n = u,
                r = h,
                a = c,
                o = Math.ceil(a / r),
                s.next = r > 1 && a > 0 ? e: t
            }
        };
        return s
    } ();
    dy.dirty = function() {
        this._dirty = !0,
        this._onDirty && this._onDirty(this.context)
    },
    dy.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd
    },
    dy.pipe = function(t) { (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    },
    dy.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    },
    dy.getUpstream = function() {
        return this._upstream
    },
    dy.getDownstream = function() {
        return this._downstream
    },
    dy.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var py = qi(),
    gy = km.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function(t, e, n) {
            this.seriesIndex = this.componentIndex,
            this.dataTask = ks({
                count: Ns,
                reset: Es
            }),
            this.dataTask.context = {
                model: this
            },
            this.mergeDefaultAndTheme(t, n),
            Bo(this);
            var i = this.getInitialData(t, n);
            Bs(i, this),
            this.dataTask.context.data = i,
            py(this).dataBeforeProcessed = i,
            Ps(this)
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode,
            i = n ? Co(t) : {},
            a = this.subType;
            km.hasClass(a) && (a += "Series"),
            r(t, e.getTheme().get(this.subType)),
            r(t, this.getDefaultOption()),
            zi(t, "label", ["show"]),
            this.fillDataTextStyle(t.data),
            n && Io(t, i, n)
        },
        mergeOption: function(t, e) {
            t = r(this.option, t, !0),
            this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && Io(this.option, t, n),
            Bo(this);
            var i = this.getInitialData(t, e);
            Bs(i, this),
            this.dataTask.dirty(),
            this.dataTask.context.data = i,
            py(this).dataBeforeProcessed = i,
            Ps(this)
        },
        fillDataTextStyle: function(t) {
            if (t && !T(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && zi(t[n], "label", e)
        },
        getInitialData: function() {},
        appendData: function(t) {
            var e = this.getRawData();
            e.appendData(t.data)
        },
        getData: function(t) {
            var e = Fs(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n: n.getLinkedData(t)
            }
            return py(this).data
        },
        setData: function(t) {
            var e = Fs(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()),
                n.outputData = t,
                e !== this.dataTask && (n.data = t)
            }
            py(this).data = t
        },
        getSource: function() {
            return Eo(this)
        },
        getRawData: function() {
            return py(this).dataBeforeProcessed
        },
        getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function(t, e, n, i) {
            function r(n) {
                function r(t, n) {
                    var r = c.getDimensionInfo(n);
                    if (r && r.otherDims.tooltip !== !1) {
                        var d = r.type,
                        f = "sub" + o.seriesIndex + "at" + h,
                        p = yo({
                            color: y,
                            type: "subItem",
                            renderMode: i,
                            markerId: f
                        }),
                        g = "string" == typeof p ? p: p.content,
                        v = (a ? g + go(r.displayName || "-") + ": ": "") + go("ordinal" === d ? t + "": "time" === d ? e ? "": xo("yyyy/MM/dd hh:mm:ss", t) : fo(t));
                        v && s.push(v),
                        l && (u[f] = y, ++h)
                    }
                }
                var a = g(n,
                function(t, e, n) {
                    var i = c.getDimensionInfo(n);
                    return t |= i && i.tooltip !== !1 && null != i.displayName
                },
                0),
                s = [];
                d.length ? f(d,
                function(e) {
                    r(Is(c, t, e), e)
                }) : f(n, r);
                var p = a ? l ? "\n": "<br/>": "",
                v = p + s.join(p || ", ");
                return {
                    renderMode: i,
                    content: v,
                    style: u
                }
            }
            function a(t) {
                return {
                    renderMode: i,
                    content: go(fo(t)),
                    style: u
                }
            }
            var o = this;
            i = i || "html";
            var s = "html" === i ? "<br/>": "\n",
            l = "richText" === i,
            u = {},
            h = 0,
            c = this.getData(),
            d = c.mapDimension("defaultedTooltip", !0),
            p = d.length,
            v = this.getRawValue(t),
            m = x(v),
            y = c.getItemVisual(t, "color");
            M(y) && y.colorStops && (y = (y.colorStops[0] || {}).color),
            y = y || "transparent";
            var _ = p > 1 || m && !p ? r(v) : a(p ? Is(c, t, d[0]) : m ? v[0] : v),
            w = _.content,
            b = o.seriesIndex + "at" + h,
            S = yo({
                color: y,
                type: "item",
                renderMode: i,
                markerId: b
            });
            u[b] = y,
            ++h;
            var T = c.getName(t),
            I = this.name;
            Gi(this) || (I = ""),
            I = I ? go(I) + (e ? ": ": s) : "";
            var C = "string" == typeof S ? S: S.content,
            k = e ? C + I + w: I + C + (T ? go(T) + ": " + w: w);
            return {
                html: k,
                markers: u
            }
        },
        isAnimationEnabled: function() {
            if (af.node) return ! 1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1),
            t
        },
        restoreData: function() {
            this.dataTask.dirty()
        },
        getColorFromPalette: function(t, e, n) {
            var i = this.ecModel,
            r = Pm.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)),
            r
        },
        coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function() {
            return this.get("progressive")
        },
        getProgressiveThreshold: function() {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(gy, cy),
    c(gy, Pm);
    var vy = function() {
        this.group = new gp,
        this.uid = Ya("viewComponent")
    };
    vy.prototype = {
        constructor: vy,
        init: function() {},
        render: function() {},
        dispose: function() {},
        filterForExposedEvent: null
    };
    var my = vy.prototype;
    my.updateView = my.updateLayout = my.updateVisual = function() {},
    tr(vy),
    rr(vy, {
        registerWhenExtend: !0
    });
    var yy = function() {
        var t = qi();
        return function(e) {
            var n = t(e),
            i = e.pipelineContext,
            r = n.large,
            a = n.progressiveRender,
            o = n.large = i.large,
            s = n.progressiveRender = i.progressiveRender;
            return !! (r ^ o || a ^ s) && "reset"
        }
    },
    _y = qi(),
    xy = yy();
    Vs.prototype = {
        type: "chart",
        init: function() {},
        render: function() {},
        highlight: function(t, e, n, i) {
            Hs(t.getData(), i, "emphasis")
        },
        downplay: function(t, e, n, i) {
            Hs(t.getData(), i, "normal")
        },
        remove: function() {
            this.group.removeAll()
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null
    };
    var wy = Vs.prototype;
    wy.updateView = wy.updateLayout = wy.updateVisual = function(t, e, n, i) {
        this.render(t, e, n, i)
    },
    tr(Vs, ["dispose"]),
    rr(Vs, {
        registerWhenExtend: !0
    }),
    Vs.markUpdateMethod = function(t, e) {
        _y(t).updateMethod = e
    };
    var by = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    },
    My = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var n = t.getData(),
            i = (t.visualColorAccessPath || "itemStyle.color").split("."),
            r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof qv || n.each(function(e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                var a = function(t, e) {
                    var n = t.getItemModel(e),
                    r = n.get(i, !0);
                    null != r && t.setItemVisual(e, "color", r)
                };
                return {
                    dataEach: n.hasItemOption ? a: null
                }
            }
        }
    },
    Sy = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: ["数据视图", "关闭", "刷新"]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: ["右键另存为图片"]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    },
    Ty = function(t, e) {
        function n(t, e) {
            if ("string" != typeof t) return t;
            var n = t;
            return f(e,
            function(t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }),
            n
        }
        function i(t) {
            var e = o.get(t);
            if (null == e) {
                for (var n = t.split("."), i = Sy.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                return i
            }
            return e
        }
        function r() {
            var t = e.getModel("title").option;
            return t && t.length && (t = t[0]),
            t && t.text
        }
        function a(t) {
            return Sy.series.typeNames[t] || "自定义图"
        }
        var o = e.getModel("aria");
        if (o.get("show")) {
            if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
            var s = 0;
            e.eachSeries(function() {++s
            },
            this);
            var l, u = o.get("data.maxCount") || 10,
            h = o.get("series.maxCount") || 10,
            c = Math.min(s, h);
            if (! (1 > s)) {
                var d = r();
                l = d ? n(i("general.withTitle"), {
                    title: d
                }) : i("general.withoutTitle");
                var p = [],
                g = s > 1 ? "series.multiple.prefix": "series.single.prefix";
                l += n(i(g), {
                    seriesCount: s
                }),
                e.eachSeries(function(t, e) {
                    if (c > e) {
                        var r, o = t.get("name"),
                        l = "series." + (s > 1 ? "multiple": "single") + ".";
                        r = i(o ? l + "withName": l + "withoutName"),
                        r = n(r, {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: a(t.subType)
                        });
                        var h = t.getData();
                        window.data = h,
                        r += h.count() > u ? n(i("data.partialData"), {
                            displayCnt: u
                        }) : i("data.allData");
                        for (var d = [], f = 0; f < h.count(); f++) if (u > f) {
                            var g = h.getName(f),
                            v = Is(h, f);
                            d.push(n(i(g ? "data.withName": "data.withoutName"), {
                                name: g,
                                value: v
                            }))
                        }
                        r += d.join(i("data.separator.middle")) + i("data.separator.end"),
                        p.push(r)
                    }
                }),
                l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"),
                t.setAttribute("aria-label", l)
            }
        }
    },
    Iy = Math.PI,
    Cy = function(t, e) {
        e = e || {},
        s(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new Fv({
            style: {
                fill: e.maskColor
            },
            zlevel: e.zlevel,
            z: 1e4
        }),
        i = new Xv({
            shape: {
                startAngle: -Iy / 2,
                endAngle: -Iy / 2 + .1,
                r: 10
            },
            style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: 5
            },
            zlevel: e.zlevel,
            z: 10001
        }),
        r = new Fv({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            },
            zlevel: e.zlevel,
            z: 10001
        });
        i.animateShape(!0).when(1e3, {
            endAngle: 3 * Iy / 2
        }).start("circularInOut"),
        i.animateShape(!0).when(1e3, {
            startAngle: 3 * Iy / 2
        }).delay(300).start("circularInOut");
        var a = new gp;
        return a.add(i),
        a.add(r),
        a.add(n),
        a.resize = function() {
            var e = t.getWidth() / 2,
            a = t.getHeight() / 2;
            i.setShape({
                cx: e,
                cy: a
            });
            var o = i.shape.r;
            r.setShape({
                x: e - o,
                y: a - o,
                width: 2 * o,
                height: 2 * o
            }),
            n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        },
        a.resize(),
        a
    },
    ky = qs.prototype;
    ky.restoreData = function(t, e) {
        t.restoreData(e),
        this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    },
    ky.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
            i = n.context,
            r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
            a = r ? n.step: null,
            o = i && i.modDataCount,
            s = null != o ? Math.ceil(o / a) : null;
            return {
                step: a,
                modBy: s,
                modDataCount: o
            }
        }
    },
    ky.getPipeline = function(t) {
        return this._pipelineMap.get(t)
    },
    ky.updateStreamModes = function(t, e) {
        var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r: null;
        t.pipelineContext = n.context = {
            progressiveRender: a,
            modDataCount: s,
            large: o
        }
    },
    ky.restorePipelines = function(t) {
        var e = this,
        n = e._pipelineMap = z();
        t.eachSeries(function(t) {
            var i = t.getProgressive(),
            r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }),
            rl(e, t, t.dataTask)
        })
    },
    ky.prepareStageTasks = function() {
        var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;
        f(this._allHandlers,
        function(i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && Zs(this, i, r, e, n),
            i.overallReset && Us(this, i, r, e, n)
        },
        this)
    },
    ky.prepareView = function(t, e, n, i) {
        var r = t.renderTask,
        a = r.context;
        a.model = e,
        a.ecModel = n,
        a.api = i,
        r.__block = !t.incrementalPrepareRender,
        rl(this, e, r)
    },
    ky.performDataProcessorTasks = function(t, e) {
        js(this, this._dataProcessorHandlers, t, e, {
            block: !0
        })
    },
    ky.performVisualTasks = function(t, e, n) {
        js(this, this._visualHandlers, t, e, n)
    },
    ky.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(t) {
            e |= t.dataTask.perform()
        }),
        this.unfinished |= e
    },
    ky.plan = function() {
        this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while ( e )
        })
    };
    var Dy = ky.updatePayload = function(t, e) {
        "remain" !== e && (t.context.payload = e)
    },
    Ay = nl(0);
    qs.wrapStageHandler = function(t, e) {
        return w(t) && (t = {
            overallReset: t,
            seriesType: al(t)
        }),
        t.uid = Ya("stageHandler"),
        e && (t.visualType = e),
        t
    };
    var Ly, Py = {},
    Oy = {};
    ol(Py, Xm),
    ol(Oy, Jo),
    Py.eachSeriesByType = Py.eachRawSeriesByType = function(t) {
        Ly = t
    },
    Py.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (Ly = t.subType)
    };
    var Ny = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    Ey = {
        color: Ny,
        colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Ny]
    },
    Ry = "#eee",
    By = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: Ry
                }
            },
            axisTick: {
                lineStyle: {
                    color: Ry
                }
            },
            axisLabel: {
                textStyle: {
                    color: Ry
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: Ry
                }
            }
        }
    },
    zy = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
    Fy = {
        color: zy,
        backgroundColor: "#333",
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: Ry
                },
                crossStyle: {
                    color: Ry
                }
            }
        },
        legend: {
            textStyle: {
                color: Ry
            }
        },
        textStyle: {
            color: Ry
        },
        title: {
            textStyle: {
                color: Ry
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: Ry
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: Ry
            }
        },
        visualMap: {
            textStyle: {
                color: Ry
            }
        },
        timeline: {
            lineStyle: {
                color: Ry
            },
            itemStyle: {
                normal: {
                    color: zy[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: Ry
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: Ry,
                    borderColor: Ry
                }
            }
        },
        timeAxis: By(),
        logAxis: By(),
        valueAxis: By(),
        categoryAxis: By(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: zy
        },
        gauge: {
            title: {
                textStyle: {
                    color: Ry
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: "#FD1050",
                    color0: "#0CF49B",
                    borderColor: "#FD1050",
                    borderColor0: "#0CF49B"
                }
            }
        }
    };
    Fy.categoryAxis.splitLine.show = !1,
    km.extend({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: Vm,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function() {
            No(this)
        }
    }),
    vy.extend({
        type: "dataset"
    });
    var Vy = zr.extend({
        type: "ellipse",
        shape: {
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0
        },
        buildPath: function(t, e) {
            var n = .5522848,
            i = e.cx,
            r = e.cy,
            a = e.rx,
            o = e.ry,
            s = a * n,
            l = o * n;
            t.moveTo(i - a, r),
            t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o),
            t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r),
            t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o),
            t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r),
            t.closePath()
        }
    }),
    Wy = /[\s,]+/;
    ll.prototype.parse = function(t, e) {
        e = e || {};
        var n = sl(t);
        if (!n) throw new Error("Illegal svg");
        var i = new gp;
        this._root = i;
        var r = n.getAttribute("viewBox") || "",
        a = parseFloat(n.getAttribute("width") || e.width),
        o = parseFloat(n.getAttribute("height") || e.height);
        isNaN(a) && (a = null),
        isNaN(o) && (o = null),
        dl(n, i, null, !0);
        for (var s = n.firstChild; s;) this._parseNode(s, i),
        s = s.nextSibling;
        var l, u;
        if (r) {
            var h = N(r).split(Wy);
            h.length >= 4 && (l = {
                x: parseFloat(h[0] || 0),
                y: parseFloat(h[1] || 0),
                width: parseFloat(h[2]),
                height: parseFloat(h[3])
            })
        }
        if (l && null != a && null != o && (u = vl(l, a, o), !e.ignoreViewBox)) {
            var c = i;
            i = new gp,
            i.add(c),
            c.scale = u.scale.slice(),
            c.position = u.position.slice()
        }
        return e.ignoreRootClip || null == a || null == o || i.setClipPath(new Fv({
            shape: {
                x: 0,
                y: 0,
                width: a,
                height: o
            }
        })),
        {
            root: i,
            width: a,
            height: o,
            viewBoxRect: l,
            viewBoxTransform: u
        }
    },
    ll.prototype._parseNode = function(t, e) {
        var n = t.nodeName.toLowerCase();
        "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
        var i;
        if (this._isDefine) {
            var r = Gy[n];
            if (r) {
                var a = r.call(this, t),
                o = t.getAttribute("id");
                o && (this._defs[o] = a)
            }
        } else {
            var r = Hy[n];
            r && (i = r.call(this, t, e), e.add(i))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i),
        3 === s.nodeType && this._isText && this._parseText(s, i),
        s = s.nextSibling;
        "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
    },
    ll.prototype._parseText = function(t, e) {
        if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0,
            i = t.getAttribute("dy") || 0;
            this._textX += parseFloat(n),
            this._textY += parseFloat(i)
        }
        var r = new Cv({
            style: {
                text: t.textContent,
                transformText: !0
            },
            position: [this._textX || 0, this._textY || 0]
        });
        hl(e, r),
        dl(t, r, this._defs);
        var a = r.style.fontSize;
        a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
        var o = r.getBoundingRect();
        return this._textX += o.width,
        e.add(r),
        r
    };
    var Hy = {
        g: function(t, e) {
            var n = new gp;
            return hl(e, n),
            dl(t, n, this._defs),
            n
        },
        rect: function(t, e) {
            var n = new Fv;
            return hl(e, n),
            dl(t, n, this._defs),
            n.setShape({
                x: parseFloat(t.getAttribute("x") || 0),
                y: parseFloat(t.getAttribute("y") || 0),
                width: parseFloat(t.getAttribute("width") || 0),
                height: parseFloat(t.getAttribute("height") || 0)
            }),
            n
        },
        circle: function(t, e) {
            var n = new kv;
            return hl(e, n),
            dl(t, n, this._defs),
            n.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                r: parseFloat(t.getAttribute("r") || 0)
            }),
            n
        },
        line: function(t, e) {
            var n = new Wv;
            return hl(e, n),
            dl(t, n, this._defs),
            n.setShape({
                x1: parseFloat(t.getAttribute("x1") || 0),
                y1: parseFloat(t.getAttribute("y1") || 0),
                x2: parseFloat(t.getAttribute("x2") || 0),
                y2: parseFloat(t.getAttribute("y2") || 0)
            }),
            n
        },
        ellipse: function(t, e) {
            var n = new Vy;
            return hl(e, n),
            dl(t, n, this._defs),
            n.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                rx: parseFloat(t.getAttribute("rx") || 0),
                ry: parseFloat(t.getAttribute("ry") || 0)
            }),
            n
        },
        polygon: function(t, e) {
            var n = t.getAttribute("points");
            n && (n = cl(n));
            var i = new Ev({
                shape: {
                    points: n || []
                }
            });
            return hl(e, i),
            dl(t, i, this._defs),
            i
        },
        polyline: function(t, e) {
            var n = new zr;
            hl(e, n),
            dl(t, n, this._defs);
            var i = t.getAttribute("points");
            i && (i = cl(i));
            var r = new Rv({
                shape: {
                    points: i || []
                }
            });
            return r
        },
        image: function(t, e) {
            var n = new xi;
            return hl(e, n),
            dl(t, n, this._defs),
            n.setStyle({
                image: t.getAttribute("xlink:href"),
                x: t.getAttribute("x"),
                y: t.getAttribute("y"),
                width: t.getAttribute("width"),
                height: t.getAttribute("height")
            }),
            n
        },
        text: function(t, e) {
            var n = t.getAttribute("x") || 0,
            i = t.getAttribute("y") || 0,
            r = t.getAttribute("dx") || 0,
            a = t.getAttribute("dy") || 0;
            this._textX = parseFloat(n) + parseFloat(r),
            this._textY = parseFloat(i) + parseFloat(a);
            var o = new gp;
            return hl(e, o),
            dl(t, o, this._defs),
            o
        },
        tspan: function(t, e) {
            var n = t.getAttribute("x"),
            i = t.getAttribute("y");
            null != n && (this._textX = parseFloat(n)),
            null != i && (this._textY = parseFloat(i));
            var r = t.getAttribute("dx") || 0,
            a = t.getAttribute("dy") || 0,
            o = new gp;
            return hl(e, o),
            dl(t, o, this._defs),
            this._textX += r,
            this._textY += a,
            o
        },
        path: function(t, e) {
            var n = t.getAttribute("d") || "",
            i = Hr(n);
            return hl(e, i),
            dl(t, i, this._defs),
            i
        }
    },
    Gy = {
        lineargradient: function(t) {
            var e = parseInt(t.getAttribute("x1") || 0, 10),
            n = parseInt(t.getAttribute("y1") || 0, 10),
            i = parseInt(t.getAttribute("x2") || 10, 10),
            r = parseInt(t.getAttribute("y2") || 0, 10),
            a = new jv(e, n, i, r);
            return ul(t, a),
            a
        },
        radialgradient: function() {}
    },
    Xy = {
        fill: "fill",
        stroke: "stroke",
        "stroke-width": "lineWidth",
        opacity: "opacity",
        "fill-opacity": "fillOpacity",
        "stroke-opacity": "strokeOpacity",
        "stroke-dasharray": "lineDash",
        "stroke-dashoffset": "lineDashOffset",
        "stroke-linecap": "lineCap",
        "stroke-linejoin": "lineJoin",
        "stroke-miterlimit": "miterLimit",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "text-align": "textAlign",
        "alignment-baseline": "textBaseline"
    },
    Yy = /url\(\s*#(.*?)\)/,
    qy = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
    jy = /([^\s:;]+)\s*:\s*([^:;]+)/g,
    Zy = z(),
    Uy = {
        registerMap: function(t, e, n) {
            var i;
            return x(e) ? i = e: e.svg ? i = [{
                type: "svg",
                source: e.svg,
                specialAreas: e.specialAreas
            }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
                type: "geoJSON",
                source: e,
                specialAreas: n
            }]),
            f(i,
            function(t) {
                var e = t.type;
                "geoJson" === e && (e = t.type = "geoJSON");
                var n = $y[e];
                n(t)
            }),
            Zy.set(t, i)
        },
        retrieveMap: function(t) {
            return Zy.get(t)
        }
    },
    $y = {
        geoJSON: function(t) {
            var e = t.source;
            t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
        },
        svg: function(t) {
            t.svgXML = sl(t.source)
        }
    },
    Ky = O,
    Qy = f,
    Jy = w,
    t_ = M,
    e_ = km.parseClassType,
    n_ = "4.2.1",
    i_ = {
        zrender: "4.0.6"
    },
    r_ = 1,
    a_ = 1e3,
    o_ = 5e3,
    s_ = 1e3,
    l_ = 2e3,
    u_ = 3e3,
    h_ = 4e3,
    c_ = 5e3,
    d_ = {
        PROCESSOR: {
            FILTER: a_,
            STATISTIC: o_
        },
        VISUAL: {
            LAYOUT: s_,
            GLOBAL: l_,
            CHART: u_,
            COMPONENT: h_,
            BRUSH: c_
        }
    },
    f_ = "__flagInMainProcess",
    p_ = "__optionUpdated",
    g_ = /^[a-zA-Z0-9_]+$/;
    yl.prototype.on = ml("on"),
    yl.prototype.off = ml("off"),
    yl.prototype.one = ml("one"),
    c(yl, Cf);
    var v_ = _l.prototype;
    v_._onframe = function() {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[p_]) {
                var e = this[p_].silent;
                this[f_] = !0,
                wl(this),
                m_.update.call(this),
                this[f_] = !1,
                this[p_] = !1,
                Tl.call(this, e),
                Il.call(this, e)
            } else if (t.unfinished) {
                var n = r_,
                i = this._model,
                r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), Ml(this, i), t.performVisualTasks(i), Pl(this, this._model, r, "remain"), n -= +new Date - a
                } while ( n > 0 && t . unfinished );
                t.unfinished || this._zr.flush()
            }
        }
    },
    v_.getDom = function() {
        return this._dom
    },
    v_.getZr = function() {
        return this._zr
    },
    v_.setOption = function(t, e, n) {
        var i;
        if (t_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[f_] = !0, !this._model || e) {
            var r = new es(this._api),
            a = this._theme,
            o = this._model = new Xm(null, null, a, r);
            o.scheduler = this._scheduler,
            o.init(null, null, a, r)
        }
        this._model.setOption(t, b_),
        n ? (this[p_] = {
            silent: i
        },
        this[f_] = !1) : (wl(this), m_.update.call(this), this._zr.flush(), this[p_] = !1, this[f_] = !1, Tl.call(this, i), Il.call(this, i))
    },
    v_.setTheme = function() {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    },
    v_.getModel = function() {
        return this._model
    },
    v_.getOption = function() {
        return this._model && this._model.getOption()
    },
    v_.getWidth = function() {
        return this._zr.getWidth()
    },
    v_.getHeight = function() {
        return this._zr.getHeight()
    },
    v_.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    },
    v_.getRenderedCanvas = function(t) {
        if (af.canvasSupported) {
            t = t || {},
            t.pixelRatio = t.pixelRatio || 1,
            t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr;
            return e.painter.getRenderedCanvas(t)
        }
    },
    v_.getSvgDataUrl = function() {
        if (af.svgSupported) {
            var t = this._zr,
            e = t.storage.getDisplayList();
            return f(e,
            function(t) {
                t.stopAnimation(!0)
            }),
            t.painter.pathToDataUrl()
        }
    },
    v_.getDataURL = function(t) {
        t = t || {};
        var e = t.excludeComponents,
        n = this._model,
        i = [],
        r = this;
        Qy(e,
        function(t) {
            n.eachComponent({
                mainType: t
            },
            function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return Qy(i,
        function(t) {
            t.group.ignore = !1
        }),
        a
    },
    v_.getConnectedDataURL = function(t) {
        if (af.canvasSupported) {
            var e = this.group,
            n = Math.min,
            r = Math.max,
            a = 1 / 0;
            if (k_[e]) {
                var o = a,
                s = a,
                l = -a,
                u = -a,
                h = [],
                c = t && t.pixelRatio || 1;
                f(C_,
                function(a) {
                    if (a.group === e) {
                        var c = a.getRenderedCanvas(i(t)),
                        d = a.getDom().getBoundingClientRect();
                        o = n(d.left, o),
                        s = n(d.top, s),
                        l = r(d.right, l),
                        u = r(d.bottom, u),
                        h.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        })
                    }
                }),
                o *= c,
                s *= c,
                l *= c,
                u *= c;
                var d = l - o,
                p = u - s,
                g = vf();
                g.width = d,
                g.height = p;
                var v = Pi(g);
                return Qy(h,
                function(t) {
                    var e = new xi({
                        style: {
                            x: t.left * c - o,
                            y: t.top * c - s,
                            image: t.dom
                        }
                    });
                    v.add(e)
                }),
                v.refreshImmediately(),
                g.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    },
    v_.convertToPixel = _(xl, "convertToPixel"),
    v_.convertFromPixel = _(xl, "convertFromPixel"),
    v_.containPixel = function(t, e) {
        var n, i = this._model;
        return t = ji(i, t),
        f(t,
        function(t, i) {
            i.indexOf("Models") >= 0 && f(t,
            function(t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e);
                else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            },
            this)
        },
        this),
        !!n
    },
    v_.getVisual = function(t, e) {
        var n = this._model;
        t = ji(n, t, {
            defaultMainType: "series"
        });
        var i = t.seriesModel,
        r = i.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside: t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    },
    v_.getViewOfComponentModel = function(t) {
        return this._componentsMap[t.__viewId]
    },
    v_.getViewOfSeriesModel = function(t) {
        return this._chartsMap[t.__viewId]
    };
    var m_ = {
        prepareAndUpdate: function(t) {
            wl(this),
            m_.update.call(this, t)
        },
        update: function(t) {
            var e = this._model,
            n = this._api,
            i = this._zr,
            r = this._coordSysMgr,
            a = this._scheduler;
            if (e) {
                a.restoreData(e, t),
                a.performSeriesTasks(e),
                r.create(e, n),
                a.performDataProcessorTasks(e, t),
                Ml(this, e),
                r.update(e, n),
                Dl(e),
                a.performVisualTasks(e, t),
                Al(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if (af.canvasSupported) i.setBackgroundColor(o);
                else {
                    var s = qe(o);
                    o = en(s, "rgb"),
                    0 === s[3] && (o = "transparent")
                }
                Ol(e, n)
            }
        },
        updateTransform: function(t) {
            var e = this._model,
            n = this,
            i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function(a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, i, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var a = z();
                e.eachSeries(function(r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1)
                    } else a.set(r.uid, 1)
                }),
                Dl(e),
                this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }),
                Pl(n, e, i, t, a),
                Ol(e, this._api)
            }
        },
        updateView: function(t) {
            var e = this._model;
            e && (Vs.markUpdateMethod(t, "updateView"), Dl(e), this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }), Al(this, this._model, this._api, t), Ol(e, this._api))
        },
        updateVisual: function(t) {
            m_.update.call(this, t)
        },
        updateLayout: function(t) {
            m_.update.call(this, t)
        }
    };
    v_.resize = function(t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"),
            i = t && t.silent;
            this[f_] = !0,
            n && wl(this),
            m_.update.call(this),
            this[f_] = !1,
            Tl.call(this, i),
            Il.call(this, i)
        }
    },
    v_.showLoading = function(t, e) {
        if (t_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), I_[t]) {
            var n = I_[t](this._api, e),
            i = this._zr;
            this._loadingFX = n,
            i.add(n)
        }
    },
    v_.hideLoading = function() {
        this._loadingFX && this._zr.remove(this._loadingFX),
        this._loadingFX = null
    },
    v_.makeActionFromEvent = function(t) {
        var e = o({},
        t);
        return e.type = x_[t.type],
        e
    },
    v_.dispatchAction = function(t, e) {
        if (t_(e) || (e = {
            silent: !!e
        }), __[t.type] && this._model) {
            if (this[f_]) return void this._pendingActions.push(t);
            Sl.call(this, t, e.silent),
            e.flush ? this._zr.flush(!0) : e.flush !== !1 && af.browser.weChat && this._throttledZrFlush(),
            Tl.call(this, e.silent),
            Il.call(this, e.silent)
        }
    },
    v_.appendData = function(t) {
        var e = t.seriesIndex,
        n = this.getModel(),
        i = n.getSeriesByIndex(e);
        i.appendData(t),
        this._scheduler.unfinished = !0
    },
    v_.on = ml("on"),
    v_.off = ml("off"),
    v_.one = ml("one");
    var y_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    v_._initEvents = function() {
        Qy(y_,
        function(t) {
            var e = function(e) {
                var n, i = this.getModel(),
                r = e.target,
                a = "globalout" === t;
                if (a) n = {};
                else if (r && null != r.dataIndex) {
                    var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (n = o({},
                r.eventData));
                if (n) {
                    var l = n.componentType,
                    u = n.componentIndex; ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);
                    var h = l && null != u && i.getComponent(l, u),
                    c = h && this["series" === h.mainType ? "_chartsMap": "_componentsMap"][h.__viewId];
                    n.event = e,
                    n.type = t,
                    this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: n,
                        model: h,
                        view: c
                    },
                    this.trigger(t, n)
                }
            };
            e.zrEventfulCallAtLast = !0,
            this._zr.on(t, e, this)
        },
        this),
        Qy(x_,
        function(t, e) {
            this._messageCenter.on(e,
            function(t) {
                this.trigger(e, t)
            },
            this)
        },
        this)
    },
    v_.isDisposed = function() {
        return this._disposed
    },
    v_.clear = function() {
        this.setOption({
            series: []
        },
        !0)
    },
    v_.dispose = function() {
        if (!this._disposed) {
            this._disposed = !0,
            Ui(this.getDom(), L_, "");
            var t = this._api,
            e = this._model;
            Qy(this._componentsViews,
            function(n) {
                n.dispose(e, t)
            }),
            Qy(this._chartsViews,
            function(n) {
                n.dispose(e, t)
            }),
            this._zr.dispose(),
            delete C_[this.id]
        }
    },
    c(_l, Cf),
    zl.prototype = {
        constructor: zl,
        normalizeQuery: function(t) {
            var e = {},
            n = {},
            i = {};
            if (b(t)) {
                var r = e_(t);
                e.mainType = r.main || null,
                e.subType = r.sub || null
            } else {
                var a = ["Index", "Name", "Id"],
                o = {
                    name: 1,
                    dataIndex: 1,
                    dataType: 1
                };
                f(t,
                function(t, r) {
                    for (var s = !1,
                    l = 0; l < a.length; l++) {
                        var u = a[l],
                        h = r.lastIndexOf(u);
                        if (h > 0 && h === r.length - u.length) {
                            var c = r.slice(0, h);
                            "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                        }
                    }
                    o.hasOwnProperty(r) && (n[r] = t, s = !0),
                    s || (i[r] = t)
                })
            }
            return {
                cptQuery: e,
                dataQuery: n,
                otherQuery: i
            }
        },
        filter: function(t, e) {
            function n(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n]
            }
            var i = this.eventInfo;
            if (!i) return ! 0;
            var r = i.targetEl,
            a = i.packedEvent,
            o = i.model,
            s = i.view;
            if (!o || !s) return ! 0;
            var l = e.cptQuery,
            u = e.dataQuery;
            return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
        },
        afterTrigger: function() {
            this.eventInfo = null
        }
    };
    var __ = {},
    x_ = {},
    w_ = [],
    b_ = [],
    M_ = [],
    S_ = [],
    T_ = {},
    I_ = {},
    C_ = {},
    k_ = {},
    D_ = new Date - 0,
    A_ = new Date - 0,
    L_ = "_echarts_instance_",
    P_ = Hl;
    tu(l_, My),
    jl(ry),
    Zl(o_, ay),
    nu("default", Cy),
    $l({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    },
    V),
    $l({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    },
    V),
    ql("light", Ey),
    ql("dark", Fy);
    var O_ = {};
    cu.prototype = {
        constructor: cu,
        add: function(t) {
            return this._add = t,
            this
        },
        update: function(t) {
            return this._update = t,
            this
        },
        remove: function(t) {
            return this._remove = t,
            this
        },
        execute: function() {
            var t, e = this._old,
            n = this._new,
            i = {},
            r = {},
            a = [],
            o = [];
            for (du(e, i, a, "_oldKeyGetter", this), du(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var s = a[t],
                l = r[s];
                if (null != l) {
                    var u = l.length;
                    u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null,
                    this._update && this._update(l, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < o.length; t++) {
                var s = o[t];
                if (r.hasOwnProperty(s)) {
                    var l = r[s];
                    if (null == l) continue;
                    if (l.length) for (var h = 0,
                    u = l.length; u > h; h++) this._add && this._add(l[h]);
                    else this._add && this._add(l)
                }
            }
        }
    };
    var N_ = z(["tooltip", "label", "itemName", "itemId", "seriesName"]),
    E_ = M,
    R_ = "undefined",
    B_ = -1,
    z_ = "e\x00\x00",
    F_ = {
        "float": typeof Float64Array === R_ ? Array: Float64Array,
        "int": typeof Int32Array === R_ ? Array: Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    },
    V_ = typeof Uint32Array === R_ ? Array: Uint32Array,
    W_ = typeof Int32Array === R_ ? Array: Int32Array,
    H_ = typeof Uint16Array === R_ ? Array: Uint16Array,
    G_ = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
    X_ = ["_extent", "_approximateExtent", "_rawExtent"],
    Y_ = function(t, e) {
        t = t || ["x", "y"];
        for (var n = {},
        i = [], r = {},
        a = 0; a < t.length; a++) {
            var o = t[a];
            b(o) && (o = {
                name: o
            });
            var s = o.name;
            o.type = o.type || "float",
            o.coordDim || (o.coordDim = s, o.coordDimIndex = 0),
            o.otherDims = o.otherDims || {},
            i.push(s),
            n[s] = o,
            o.index = a,
            o.createInvertedIndices && (r[s] = [])
        }
        this.dimensions = i,
        this._dimensionInfos = n,
        this.hostModel = e,
        this.dataType,
        this._indices = null,
        this._count = 0,
        this._rawCount = 0,
        this._storage = {},
        this._nameList = [],
        this._idList = [],
        this._optionModels = [],
        this._visual = {},
        this._layout = {},
        this._itemVisuals = [],
        this.hasItemVisual = {},
        this._itemLayouts = [],
        this._graphicEls = [],
        this._chunkSize = 1e5,
        this._chunkCount = 0,
        this._rawData,
        this._rawExtent = {},
        this._extent = {},
        this._approximateExtent = {},
        this._dimensionsSummary = fu(this),
        this._invertedIndicesMap = r,
        this._calculationInfo = {}
    },
    q_ = Y_.prototype;
    q_.type = "list",
    q_.hasItemOption = !0,
    q_.getDimension = function(t) {
        return isNaN(t) || (t = this.dimensions[t] || t),
        t
    },
    q_.getDimensionInfo = function(t) {
        return this._dimensionInfos[this.getDimension(t)]
    },
    q_.getDimensionsOnCoord = function() {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    },
    q_.mapDimension = function(t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return e === !0 ? (i || []).slice() : i && i[e]
    },
    q_.initData = function(t, e, n) {
        var i = Oo.isInstance(t) || d(t);
        i && (t = new _s(t, this.dimensions.length)),
        this._rawData = t,
        this._storage = {},
        this._indices = null,
        this._nameList = e || [],
        this._idList = [],
        this._nameRepeatCount = {},
        n || (this.hasItemOption = !1),
        this.defaultDimValueGetter = uy[this._rawData.getSource().sourceFormat],
        this._dimValueGetter = n = n || this.defaultDimValueGetter,
        this._dimValueGetterArrayRows = uy.arrayRows,
        this._rawExtent = {},
        this._initDataFromProvider(0, t.count()),
        t.pure && (this.hasItemOption = !1)
    },
    q_.getProvider = function() {
        return this._rawData
    },
    q_.appendData = function(t) {
        var e = this._rawData,
        n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n),
        this._initDataFromProvider(n, i)
    },
    q_.appendValues = function(t, e) {
        for (var n = this._chunkSize,
        i = this._storage,
        r = this.dimensions,
        a = r.length,
        o = this._rawExtent,
        s = this.count(), l = s + Math.max(t.length, e ? e.length: 0), u = this._chunkCount, h = 0; a > h; h++) {
            var c = r[h];
            o[c] || (o[c] = ku()),
            i[c] || (i[c] = []),
            _u(i, this._dimensionInfos[c], n, u, l),
            this._chunkCount = i[c].length
        }
        for (var d = new Array(a), f = s; l > f; f++) {
            for (var p = f - s,
            g = Math.floor(f / n), v = f % n, m = 0; a > m; m++) {
                var c = r[m],
                y = this._dimValueGetterArrayRows(t[p] || d, c, p, m);
                i[c][g][v] = y;
                var _ = o[c];
                y < _[0] && (_[0] = y),
                y > _[1] && (_[1] = y)
            }
            e && (this._nameList[f] = e[p])
        }
        this._rawCount = this._count = l,
        this._extent = {},
        xu(this)
    },
    q_._initDataFromProvider = function(t, e) {
        if (! (t >= e)) {
            for (var n, i = this._chunkSize,
            r = this._rawData,
            a = this._storage,
            o = this.dimensions,
            s = o.length,
            l = this._dimensionInfos,
            u = this._nameList,
            h = this._idList,
            c = this._rawExtent,
            d = this._nameRepeatCount = {},
            f = this._chunkCount,
            p = 0; s > p; p++) {
                var g = o[p];
                c[g] || (c[g] = ku());
                var v = l[g];
                0 === v.otherDims.itemName && (n = this._nameDimIdx = p),
                0 === v.otherDims.itemId && (this._idDimIdx = p),
                a[g] || (a[g] = []),
                _u(a, v, i, f, e),
                this._chunkCount = a[g].length
            }
            for (var m = new Array(s), y = t; e > y; y++) {
                m = r.getItem(y, m);
                for (var _ = Math.floor(y / i), x = y % i, w = 0; s > w; w++) {
                    var g = o[w],
                    b = a[g][_],
                    M = this._dimValueGetter(m, g, y, w);
                    b[x] = M;
                    var S = c[g];
                    M < S[0] && (S[0] = M),
                    M > S[1] && (S[1] = M)
                }
                if (!r.pure) {
                    var T = u[y];
                    if (m && null == T) if (null != m.name) u[y] = T = m.name;
                    else if (null != n) {
                        var I = o[n],
                        C = a[I][_];
                        if (C) {
                            T = C[x];
                            var k = l[I].ordinalMeta;
                            k && k.categories.length && (T = k.categories[T])
                        }
                    }
                    var D = null == m ? null: m.id;
                    null == D && null != T && (d[T] = d[T] || 0, D = T, d[T] > 0 && (D += "__ec__" + d[T]), d[T]++),
                    null != D && (h[y] = D)
                }
            } ! r.persistent && r.clean && r.clean(),
            this._rawCount = this._count = e,
            this._extent = {},
            xu(this)
        }
    },
    q_.count = function() {
        return this._count
    },
    q_.getIndices = function() {
        var t, e = this._indices;
        if (e) {
            var n = e.constructor,
            i = this._count;
            if (n === Array) {
                t = new n(i);
                for (var r = 0; i > r; r++) t[r] = e[r]
            } else t = new n(e.buffer, 0, i)
        } else for (var n = vu(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
        return t
    },
    q_.get = function(t, e) {
        if (! (e >= 0 && e < this._count)) return 0 / 0;
        var n = this._storage;
        if (!n[t]) return 0 / 0;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[t][i],
        o = a[r];
        return o
    },
    q_.getByRawIndex = function(t, e) {
        if (! (e >= 0 && e < this._rawCount)) return 0 / 0;
        var n = this._storage[t];
        if (!n) return 0 / 0;
        var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[i];
        return a[r]
    },
    q_._getFast = function(t, e) {
        var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize,
        r = this._storage[t][n];
        return r[i]
    },
    q_.getValues = function(t, e) {
        var n = [];
        x(t) || (e = t, t = this.dimensions);
        for (var i = 0,
        r = t.length; r > i; i++) n.push(this.get(t[i], e));
        return n
    },
    q_.hasValue = function(t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord,
        n = this._dimensionInfos,
        i = 0,
        r = e.length; r > i; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return ! 1;
        return ! 0
    },
    q_.getDataExtent = function(t) {
        t = this.getDimension(t);
        var e = this._storage[t],
        n = ku();
        if (!e) return n;
        var i, r = this.count(),
        a = !this._indices;
        if (a) return this._rawExtent[t].slice();
        if (i = this._extent[t]) return i.slice();
        i = n;
        for (var o = i[0], s = i[1], l = 0; r > l; l++) {
            var u = this._getFast(t, this.getRawIndex(l));
            o > u && (o = u),
            u > s && (s = u)
        }
        return i = [o, s],
        this._extent[t] = i,
        i
    },
    q_.getApproximateExtent = function(t) {
        return t = this.getDimension(t),
        this._approximateExtent[t] || this.getDataExtent(t)
    },
    q_.setApproximateExtent = function(t, e) {
        e = this.getDimension(e),
        this._approximateExtent[e] = t.slice()
    },
    q_.getCalculationInfo = function(t) {
        return this._calculationInfo[t]
    },
    q_.setCalculationInfo = function(t, e) {
        E_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    },
    q_.getSum = function(t) {
        var e = this._storage[t],
        n = 0;
        if (e) for (var i = 0,
        r = this.count(); r > i; i++) {
            var a = this.get(t, i);
            isNaN(a) || (n += a)
        }
        return n
    },
    q_.getMedian = function(t) {
        var e = [];
        this.each(t,
        function(t) {
            isNaN(t) || e.push(t)
        });
        var n = [].concat(e).sort(function(t, e) {
            return t - e
        }),
        i = this.count();
        return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
    },
    q_.rawIndexOf = function(t, e) {
        var n = t && this._invertedIndicesMap[t],
        i = n[e];
        return null == i || isNaN(i) ? B_: i
    },
    q_.indexOfName = function(t) {
        for (var e = 0,
        n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
        return - 1
    },
    q_.indexOfRawIndex = function(t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || 0 > t) return - 1;
        var e = this._indices,
        n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0,
        r = this._count - 1; r >= i;) {
            var a = (i + r) / 2 | 0;
            if (e[a] < t) i = a + 1;
            else {
                if (! (e[a] > t)) return a;
                r = a - 1
            }
        }
        return - 1
    },
    q_.indicesOfNearest = function(t, e, n) {
        var i = this._storage,
        r = i[t],
        a = [];
        if (!r) return a;
        null == n && (n = 1 / 0);
        for (var o = Number.MAX_VALUE,
        s = -1,
        l = 0,
        u = this.count(); u > l; l++) {
            var h = e - this.get(t, l),
            c = Math.abs(h);
            n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l))
        }
        return a
    },
    q_.getRawIndex = bu,
    q_.getRawDataItem = function(t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    },
    q_.getName = function(t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || wu(this, this._nameDimIdx, e) || ""
    },
    q_.getId = function(t) {
        return Su(this, this.getRawIndex(t))
    },
    q_.each = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []),
            n = n || i || this,
            t = p(Tu(t), this.getDimension, this);
            for (var r = t.length,
            a = 0; a < this.count(); a++) switch (r) {
            case 0:
                e.call(n, a);
                break;
            case 1:
                e.call(n, this.get(t[0], a), a);
                break;
            case 2:
                e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                break;
            default:
                for (var o = 0,
                s = []; r > o; o++) s[o] = this.get(t[o], a);
                s[o] = a,
                e.apply(n, s)
            }
        }
    },
    q_.filterSelf = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []),
            n = n || i || this,
            t = p(Tu(t), this.getDimension, this);
            for (var r = this.count(), a = vu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
                var d, f = this.getRawIndex(c);
                if (0 === l) d = e.call(n, c);
                else if (1 === l) {
                    var g = this._getFast(h, f);
                    d = e.call(n, g, c)
                } else {
                    for (var v = 0; l > v; v++) s[v] = this._getFast(h, f);
                    s[v] = c,
                    d = e.apply(n, s)
                }
                d && (o[u++] = f)
            }
            return r > u && (this._indices = o),
            this._count = u,
            this._extent = {},
            this.getRawIndex = this._indices ? Mu: bu,
            this
        }
    },
    q_.selectRange = function(t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(),
                a = vu(this),
                o = new a(r),
                s = 0,
                l = e[0],
                u = t[l][0],
                h = t[l][1],
                c = !1;
                if (!this._indices) {
                    var d = 0;
                    if (1 === i) {
                        for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m]; (y >= u && h >= y || isNaN(y)) && (o[s++] = d),
                            d++
                        }
                        c = !0
                    } else if (2 === i) {
                        for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m],
                            M = b[m]; (y >= u && h >= y || isNaN(y)) && (M >= x && w >= M || isNaN(M)) && (o[s++] = d),
                            d++
                        }
                        c = !0
                    }
                }
                if (!c) if (1 === i) for (var m = 0; r > m; m++) {
                    var S = this.getRawIndex(m),
                    y = this._getFast(l, S); (y >= u && h >= y || isNaN(y)) && (o[s++] = S)
                } else for (var m = 0; r > m; m++) {
                    for (var T = !0,
                    S = this.getRawIndex(m), p = 0; i > p; p++) {
                        var I = e[p],
                        y = this._getFast(n, S); (y < t[I][0] || y > t[I][1]) && (T = !1)
                    }
                    T && (o[s++] = this.getRawIndex(m))
                }
                return r > s && (this._indices = o),
                this._count = s,
                this._extent = {},
                this.getRawIndex = this._indices ? Mu: bu,
                this
            }
        }
    },
    q_.mapArray = function(t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []),
        n = n || i || this;
        var r = [];
        return this.each(t,
        function() {
            r.push(e && e.apply(this, arguments))
        },
        n),
        r
    },
    q_.map = function(t, e, n, i) {
        n = n || i || this,
        t = p(Tu(t), this.getDimension, this);
        var r = Iu(this, t);
        r._indices = this._indices,
        r.getRawIndex = r._indices ? Mu: bu;
        for (var a = r._storage,
        o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
            for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);
            h[l] = d;
            var g = e && e.apply(n, h);
            if (null != g) {
                "object" != typeof g && (o[0] = g, g = o);
                for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
                    var x = t[_],
                    w = g[_],
                    b = c[x],
                    M = a[x];
                    M && (M[m][y] = w),
                    w < b[0] && (b[0] = w),
                    w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    },
    q_.downSample = function(t, e, n, i) {
        for (var r = Iu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new(vu(this))(u), f = 0, p = 0; u > p; p += s) {
            s > u - p && (s = u - p, o.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g),
                m = Math.floor(v / h),
                y = v % h;
                o[g] = l[m][y]
            }
            var _ = n(o),
            x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
            w = Math.floor(x / h),
            b = x % h;
            l[w][b] = _,
            _ < c[0] && (c[0] = _),
            _ > c[1] && (c[1] = _),
            d[f++] = x
        }
        return r._count = f,
        r._indices = d,
        r.getRawIndex = Mu,
        r
    },
    q_.getItemModel = function(t) {
        var e = this.hostModel;
        return new Ha(this.getRawDataItem(t), e, e && e.ecModel)
    },
    q_.diff = function(t) {
        var e = this;
        return new cu(t ? t.getIndices() : [], this.getIndices(),
        function(e) {
            return Su(t, e)
        },
        function(t) {
            return Su(e, t)
        })
    },
    q_.getVisual = function(t) {
        var e = this._visual;
        return e && e[t]
    },
    q_.setVisual = function(t, e) {
        if (E_(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
        else this._visual = this._visual || {},
        this._visual[t] = e
    },
    q_.setLayout = function(t, e) {
        if (E_(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
        else this._layout[t] = e
    },
    q_.getLayout = function(t) {
        return this._layout[t]
    },
    q_.getItemLayout = function(t) {
        return this._itemLayouts[t]
    },
    q_.setItemLayout = function(t, e, n) {
        this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {},
        e) : e
    },
    q_.clearItemLayouts = function() {
        this._itemLayouts.length = 0
    },
    q_.getItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t],
        r = i && i[e];
        return null != r || n ? r: this.getVisual(e)
    },
    q_.setItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, E_(e)) for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
        else i[e] = n,
        r[e] = !0
    },
    q_.clearAllVisual = function() {
        this._visual = {},
        this._itemVisuals = [],
        this.hasItemVisual = {}
    };
    var j_ = function(t) {
        t.seriesIndex = this.seriesIndex,
        t.dataIndex = this.dataIndex,
        t.dataType = this.dataType
    };
    q_.setItemGraphicEl = function(t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(j_, e)),
        this._graphicEls[t] = e
    },
    q_.getItemGraphicEl = function(t) {
        return this._graphicEls[t]
    },
    q_.eachItemGraphicEl = function(t, e) {
        f(this._graphicEls,
        function(n, i) {
            n && t && t.call(e, n, i)
        })
    },
    q_.cloneShallow = function(t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new Y_(e, this.hostModel)
        }
        if (t._storage = this._storage, yu(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Mu: bu,
        t
    },
    q_.wrapMethod = function(t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(L(arguments)))
        })
    },
    q_.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"],
    q_.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var Z_ = function(t, e) {
        return e = e || {},
        Du(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    zu.prototype.parse = function(t) {
        return t
    },
    zu.prototype.getSetting = function(t) {
        return this._setting[t]
    },
    zu.prototype.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    },
    zu.prototype.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    },
    zu.prototype.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    },
    zu.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]),
        t[1] > e[1] && (e[1] = t[1])
    },
    zu.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    },
    zu.prototype.getExtent = function() {
        return this._extent.slice()
    },
    zu.prototype.setExtent = function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t),
        isNaN(e) || (n[1] = e)
    },
    zu.prototype.isBlank = function() {
        return this._isBlank
    },
    zu.prototype.setBlank = function(t) {
        this._isBlank = t
    },
    zu.prototype.getLabel = null,
    tr(zu),
    rr(zu, {
        registerWhenExtend: !0
    }),
    Fu.createByAxisModel = function(t) {
        var e = t.option,
        n = e.data,
        i = n && p(n, Wu);
        return new Fu({
            categories: i,
            needCollect: !i,
            deduplication: e.dedplication !== !1
        })
    };
    var U_ = Fu.prototype;
    U_.getOrdinal = function(t) {
        return Vu(this).get(t)
    },
    U_.parseAndCollect = function(t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length,
        this.categories[e] = t,
        e;
        var i = Vu(this);
        return e = i.get(t),
        null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0),
        e
    };
    var $_ = zu.prototype,
    K_ = zu.extend({
        type: "ordinal",
        init: function(t, e) { (!t || x(t)) && (t = new Fu({
                categories: t
            })),
            this._ordinalMeta = t,
            this._extent = e || [0, t.categories.length - 1]
        },
        parse: function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        },
        contain: function(t) {
            return t = this.parse(t),
            $_.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        },
        normalize: function(t) {
            return $_.normalize.call(this, this.parse(t))
        },
        scale: function(t) {
            return Math.round($_.scale.call(this, t))
        },
        getTicks: function() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n),
            n++;
            return t
        },
        getLabel: function(t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
        },
        count: function() {
            return this._extent[1] - this._extent[0] + 1
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        },
        getOrdinalMeta: function() {
            return this._ordinalMeta
        },
        niceTicks: V,
        niceExtent: V
    });
    K_.create = function() {
        return new K_
    };
    var Q_ = Ka,
    J_ = Ka,
    tx = zu.extend({
        type: "interval",
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)),
            isNaN(e) || (n[1] = parseFloat(e))
        },
        unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]),
            t[1] > e[1] && (e[1] = t[1]),
            tx.prototype.setExtent.call(this, e[0], e[1])
        },
        getInterval: function() {
            return this._interval
        },
        setInterval: function(t) {
            this._interval = t,
            this._niceExtent = this._extent.slice(),
            this._intervalPrecision = Gu(t)
        },
        getTicks: function() {
            return qu(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        },
        getLabel: function(t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = to(t) || 0 : "auto" === n && (n = this._intervalPrecision),
            t = J_(t, n, !0),
            fo(t)
        },
        niceTicks: function(t, e, n) {
            t = t || 5;
            var i = this._extent,
            r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var a = Hu(i, t, e, n);
                this._intervalPrecision = a.intervalPrecision,
                this._interval = a.interval,
                this._niceExtent = a.niceTickExtent
            }
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1),
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = J_(Math.floor(e[0] / r) * r)),
            t.fixMax || (e[1] = J_(Math.ceil(e[1] / r) * r))
        }
    });
    tx.create = function() {
        return new tx
    };
    var ex = "__ec_stack_",
    nx = .5,
    ix = "undefined" != typeof Float32Array ? Float32Array: Array,
    rx = {
        seriesType: "bar",
        plan: yy(),
        reset: function(t) {
            function e(t, e) {
                for (var n, c = new ix(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] = e.get(o, n),
                f[1 - u] = e.get(s, n),
                d = i.dataToPoint(f, null, d),
                c[p++] = d[0],
                c[p++] = d[1];
                e.setLayout({
                    largePoints: c,
                    barWidth: h,
                    valueAxisStart: nh(r, a, !1),
                    valueAxisHorizontal: l
                })
            }
            if (th(t) && eh(t)) {
                var n = t.getData(),
                i = t.coordinateSystem,
                r = i.getBaseAxis(),
                a = i.getOtherAxis(r),
                o = n.mapDimension(a.dim),
                s = n.mapDimension(r.dim),
                l = a.isHorizontal(),
                u = l ? 0 : 1,
                h = Qu($u([t]), r, t).width;
                return h > nx || (h = nx),
                {
                    progress: e
                }
            }
        }
    },
    ax = tx.prototype,
    ox = Math.ceil,
    sx = Math.floor,
    lx = 1e3,
    ux = 60 * lx,
    hx = 60 * ux,
    cx = 24 * hx,
    dx = function(t, e, n, i) {
        for (; i > n;) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r
        }
        return n
    },
    fx = tx.extend({
        type: "time",
        getLabel: function(t) {
            var e = this._stepLvl,
            n = new Date(t);
            return xo(e[0], n, this.getSetting("useUTC"))
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= cx, e[1] += cx), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                var n = new Date;
                e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()),
                e[0] = e[1] - cx
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = Ka(sx(e[0] / i) * i)),
            t.fixMax || (e[1] = Ka(ox(e[1] / i) * i))
        },
        niceTicks: function(t, e, n) {
            t = t || 10;
            var i = this._extent,
            r = i[1] - i[0],
            a = r / t;
            null != e && e > a && (a = e),
            null != n && a > n && (a = n);
            var o = px.length,
            s = dx(px, a, 0, o),
            l = px[Math.min(s, o - 1)],
            u = l[1];
            if ("year" === l[0]) {
                var h = r / u,
                c = lo(h / t, !0);
                u *= c
            }
            var d = this.getSetting("useUTC") ? 0 : 60 * new Date( + i[0] || +i[1]).getTimezoneOffset() * 1e3,
            f = [Math.round(ox((i[0] - d) / u) * u + d), Math.round(sx((i[1] - d) / u) * u + d)];
            Yu(f, i),
            this._stepLvl = l,
            this._interval = u,
            this._niceExtent = f
        },
        parse: function(t) {
            return + ao(t)
        }
    });
    f(["contain", "normalize"],
    function(t) {
        fx.prototype[t] = function(e) {
            return ax[t].call(this, this.parse(e))
        }
    });
    var px = [["hh:mm:ss", lx], ["hh:mm:ss", 5 * lx], ["hh:mm:ss", 10 * lx], ["hh:mm:ss", 15 * lx], ["hh:mm:ss", 30 * lx], ["hh:mm\nMM-dd", ux], ["hh:mm\nMM-dd", 5 * ux], ["hh:mm\nMM-dd", 10 * ux], ["hh:mm\nMM-dd", 15 * ux], ["hh:mm\nMM-dd", 30 * ux], ["hh:mm\nMM-dd", hx], ["hh:mm\nMM-dd", 2 * hx], ["hh:mm\nMM-dd", 6 * hx], ["hh:mm\nMM-dd", 12 * hx], ["MM-dd\nyyyy", cx], ["MM-dd\nyyyy", 2 * cx], ["MM-dd\nyyyy", 3 * cx], ["MM-dd\nyyyy", 4 * cx], ["MM-dd\nyyyy", 5 * cx], ["MM-dd\nyyyy", 6 * cx], ["week", 7 * cx], ["MM-dd\nyyyy", 10 * cx], ["week", 14 * cx], ["week", 21 * cx], ["month", 31 * cx], ["week", 42 * cx], ["month", 62 * cx], ["week", 70 * cx], ["quarter", 95 * cx], ["month", 31 * cx * 4], ["month", 31 * cx * 5], ["half-year", 380 * cx / 2], ["month", 31 * cx * 8], ["month", 31 * cx * 10], ["year", 380 * cx]];
    fx.create = function(t) {
        return new fx({
            useUTC: t.ecModel.get("useUTC")
        })
    };
    var gx = zu.prototype,
    vx = tx.prototype,
    mx = to,
    yx = Ka,
    _x = Math.floor,
    xx = Math.ceil,
    bx = Math.pow,
    Mx = Math.log,
    Sx = zu.extend({
        type: "log",
        base: 10,
        $constructor: function() {
            zu.apply(this, arguments),
            this._originalScale = new tx
        },
        getTicks: function() {
            var t = this._originalScale,
            e = this._extent,
            n = t.getExtent();
            return p(vx.getTicks.call(this),
            function(i) {
                var r = Ka(bx(this.base, i));
                return r = i === e[0] && t.__fixMin ? ih(r, n[0]) : r,
                r = i === e[1] && t.__fixMax ? ih(r, n[1]) : r
            },
            this)
        },
        getLabel: vx.getLabel,
        scale: function(t) {
            return t = gx.scale.call(this, t),
            bx(this.base, t)
        },
        setExtent: function(t, e) {
            var n = this.base;
            t = Mx(t) / Mx(n),
            e = Mx(e) / Mx(n),
            vx.setExtent.call(this, t, e)
        },
        getExtent: function() {
            var t = this.base,
            e = gx.getExtent.call(this);
            e[0] = bx(t, e[0]),
            e[1] = bx(t, e[1]);
            var n = this._originalScale,
            i = n.getExtent();
            return n.__fixMin && (e[0] = ih(e[0], i[0])),
            n.__fixMax && (e[1] = ih(e[1], i[1])),
            e
        },
        unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = Mx(t[0]) / Mx(e),
            t[1] = Mx(t[1]) / Mx(e),
            gx.unionExtent.call(this, t)
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        },
        niceTicks: function(t) {
            t = t || 10;
            var e = this._extent,
            n = e[1] - e[0];
            if (! (1 / 0 === n || 0 >= n)) {
                var i = oo(n),
                r = t / n * i;
                for (.5 >= r && (i *= 10); ! isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                var a = [Ka(xx(e[0] / i) * i), Ka(_x(e[1] / i) * i)];
                this._interval = i,
                this._niceExtent = a
            }
        },
        niceExtent: function(t) {
            vx.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin,
            e.__fixMax = t.fixMax
        }
    });
    f(["contain", "normalize"],
    function(t) {
        Sx.prototype[t] = function(e) {
            return e = Mx(e) / Mx(this.base),
            gx[t].call(this, e)
        }
    }),
    Sx.create = function() {
        return new Sx
    };
    var Tx = {
        getMin: function(t) {
            var e = this.option,
            n = t || null == e.rangeStart ? e.min: e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)),
            n
        },
        getMax: function(t) {
            var e = this.option,
            n = t || null == e.rangeEnd ? e.max: e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)),
            n
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
        },
        getCoordSysModel: V,
        setRange: function(t, e) {
            this.option.rangeStart = t,
            this.option.rangeEnd = e
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    },
    Ix = Qr({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx,
            i = e.cy,
            r = e.width / 2,
            a = e.height / 2;
            t.moveTo(n, i - a),
            t.lineTo(n + r, i + a),
            t.lineTo(n - r, i + a),
            t.closePath()
        }
    }),
    Cx = Qr({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx,
            i = e.cy,
            r = e.width / 2,
            a = e.height / 2;
            t.moveTo(n, i - a),
            t.lineTo(n + r, i),
            t.lineTo(n, i + a),
            t.lineTo(n - r, i),
            t.closePath()
        }
    }),
    kx = Qr({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x,
            i = e.y,
            r = e.width / 5 * 3,
            a = Math.max(r, e.height),
            o = r / 2,
            s = o * o / (a - o),
            l = i - a + o + s,
            u = Math.asin(s / o),
            h = Math.cos(u) * o,
            c = Math.sin(u),
            d = Math.cos(u),
            f = .6 * o,
            p = .7 * o;
            t.moveTo(n - h, l + s),
            t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u),
            t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i),
            t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s),
            t.closePath()
        }
    }),
    Dx = Qr({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.height,
            i = e.width,
            r = e.x,
            a = e.y,
            o = i / 3 * 2;
            t.moveTo(r, a),
            t.lineTo(r + o, a + n),
            t.lineTo(r, a + n / 4 * 3),
            t.lineTo(r - o, a + n),
            t.lineTo(r, a),
            t.closePath()
        }
    }),
    Ax = {
        line: Wv,
        rect: Fv,
        roundRect: Fv,
        square: Fv,
        circle: kv,
        diamond: Cx,
        pin: kx,
        arrow: Dx,
        triangle: Ix
    },
    Lx = {
        line: function(t, e, n, i, r) {
            r.x1 = t,
            r.y1 = e + i / 2,
            r.x2 = t + n,
            r.y2 = e + i / 2
        },
        rect: function(t, e, n, i, r) {
            r.x = t,
            r.y = e,
            r.width = n,
            r.height = i
        },
        roundRect: function(t, e, n, i, r) {
            r.x = t,
            r.y = e,
            r.width = n,
            r.height = i,
            r.r = Math.min(n, i) / 4
        },
        square: function(t, e, n, i, r) {
            var a = Math.min(n, i);
            r.x = t,
            r.y = e,
            r.width = a,
            r.height = a
        },
        circle: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.r = Math.min(n, i) / 2
        },
        diamond: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.width = n,
            r.height = i
        },
        pin: function(t, e, n, i, r) {
            r.x = t + n / 2,
            r.y = e + i / 2,
            r.width = n,
            r.height = i
        },
        arrow: function(t, e, n, i, r) {
            r.x = t + n / 2,
            r.y = e + i / 2,
            r.width = n,
            r.height = i
        },
        triangle: function(t, e, n, i, r) {
            r.cx = t + n / 2,
            r.cy = e + i / 2,
            r.width = n,
            r.height = i
        }
    },
    Px = {};
    f(Ax,
    function(t, e) {
        Px[e] = new t
    });
    var Ox = Qr({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        beforeBrush: function() {
            var t = this.style,
            e = this.shape;
            "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        },
        buildPath: function(t, e, n) {
            var i = e.symbolType,
            r = Px[i];
            "none" !== e.symbolType && (r || (i = "rect", r = Px[i]), Lx[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    }),
    Nx = {
        isDimensionStacked: Ou,
        enableDataStack: Pu,
        getStackedDimension: Nu
    },
    Ex = (Object.freeze || Object)({
        createList: mh,
        getLayoutRect: To,
        dataStack: Nx,
        createScale: yh,
        mixinAxisModelCommonMethods: _h,
        completeDimensions: Du,
        createDimensions: Z_,
        createSymbol: vh
    }),
    Rx = 1e-8;
    bh.prototype = {
        constructor: bh,
        properties: null,
        getBoundingRect: function() {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE,
            n = [e, e], i = [ - e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
                var l = o[s].exterior;
                _r(l, r, a),
                oe(n, n, r),
                se(i, i, a)
            }
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0),
            this._rect = new _n(n[0], n[1], i[0] - n[0], i[1] - n[1])
        },
        contain: function(t) {
            var e = this.getBoundingRect(),
            n = this.geometries;
            if (!e.contain(t[0], t[1])) return ! 1;
            t: for (var i = 0,
            r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                var a = n[i].exterior,
                o = n[i].interiors;
                if (wh(a, t[0], t[1])) {
                    for (var s = 0; s < (o ? o.length: 0); s++) if (wh(o[s])) continue t;
                    return ! 0
                }
            }
            return ! 1
        },
        transformTo: function(t, e, n, i) {
            var r = this.getBoundingRect(),
            a = r.width / r.height;
            n ? i || (i = n / a) : n = a * i;
            for (var o = new _n(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d], s);
                for (var f = 0; f < (c ? c.length: 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
            }
            r = this._rect,
            r.copy(o),
            this.center = [r.x + r.width / 2, r.y + r.height / 2]
        },
        cloneShallow: function(t) {
            null == t && (t = this.name);
            var e = new bh(t, this.geometries, this.center);
            return e._rect = this._rect,
            e.transformTo = null,
            e
        }
    };
    var Bx = function(t) {
        return Mh(t),
        p(v(t.features,
        function(t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }),
        function(t) {
            var e = t.properties,
            n = t.geometry,
            i = n.coordinates,
            r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }),
            "MultiPolygon" === n.type && f(i,
            function(t) {
                t[0] && r.push({
                    type: "polygon",
                    exterior: t[0],
                    interiors: t.slice(1)
                })
            });
            var a = new bh(e.name, r, e.cp);
            return a.properties = e,
            a
        })
    },
    zx = qi(),
    Fx = [0, 1],
    Vx = function(t, e, n) {
        this.dim = t,
        this.scale = e,
        this._extent = n || [0, 0],
        this.inverse = !1,
        this.onBand = !1
    };
    Vx.prototype = {
        constructor: Vx,
        contain: function(t) {
            var e = this._extent,
            n = Math.min(e[0], e[1]),
            i = Math.max(e[0], e[1]);
            return t >= n && i >= t
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t))
        },
        getExtent: function() {
            return this._extent.slice()
        },
        getPixelPrecision: function(t) {
            return eo(t || this.scale.getExtent(), this._extent)
        },
        setExtent: function(t, e) {
            var n = this._extent;
            n[0] = t,
            n[1] = e
        },
        dataToCoord: function(t, e) {
            var n = this._extent,
            i = this.scale;
            return t = i.normalize(t),
            this.onBand && "ordinal" === i.type && (n = n.slice(), Fh(n, i.count())),
            Ua(t, Fx, n, e)
        },
        coordToData: function(t, e) {
            var n = this._extent,
            i = this.scale;
            this.onBand && "ordinal" === i.type && (n = n.slice(), Fh(n, i.count()));
            var r = Ua(t, n, Fx, e);
            return this.scale.scale(r)
        },
        pointToData: function() {},
        getTicksCoords: function(t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(),
            n = Ih(this, e),
            i = n.ticks,
            r = p(i,
            function(t) {
                return {
                    coord: this.dataToCoord(t),
                    tickValue: t
                }
            },
            this),
            a = e.get("alignWithLabel");
            return Vh(this, r, n.tickCategoryInterval, a, t.clamp),
            r
        },
        getViewLabels: function() {
            return Th(this).labels
        },
        getLabelModel: function() {
            return this.model.getModel("axisLabel")
        },
        getTickModel: function() {
            return this.model.getModel("axisTick")
        },
        getBandWidth: function() {
            var t = this._extent,
            e = this.scale.getExtent(),
            n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
            return Eh(this)
        }
    };
    var Wx = Bx,
    Hx = {};
    f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"],
    function(t) {
        Hx[t] = _f[t]
    });
    var Gx = {};
    f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"],
    function(t) {
        Gx[t] = rm[t]
    });
    var Xx = function(t) {
        this._axes = {},
        this._dimList = [],
        this.name = t || ""
    };
    Xx.prototype = {
        constructor: Xx,
        type: "cartesian",
        getAxis: function(t) {
            return this._axes[t]
        },
        getAxes: function() {
            return p(this._dimList, Wh, this)
        },
        getAxesByScale: function(t) {
            return t = t.toLowerCase(),
            v(this.getAxes(),
            function(e) {
                return e.scale.type === t
            })
        },
        addAxis: function(t) {
            var e = t.dim;
            this._axes[e] = t,
            this._dimList.push(e)
        },
        dataToCoord: function(t) {
            return this._dataCoordConvert(t, "dataToCoord")
        },
        coordToData: function(t) {
            return this._dataCoordConvert(t, "coordToData")
        },
        _dataCoordConvert: function(t, e) {
            for (var n = this._dimList,
            i = t instanceof Array ? [] : {},
            r = 0; r < n.length; r++) {
                var a = n[r],
                o = this._axes[a];
                i[a] = o[e](t[a])
            }
            return i
        }
    },
    Hh.prototype = {
        constructor: Hh,
        type: "cartesian2d",
        dimensions: ["x", "y"],
        getBaseAxis: function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        },
        containPoint: function(t) {
            var e = this.getAxis("x"),
            n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        },
        containData: function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        },
        dataToPoint: function(t, e, n) {
            var i = this.getAxis("x"),
            r = this.getAxis("y");
            return n = n || [],
            n[0] = i.toGlobalCoord(i.dataToCoord(t[0])),
            n[1] = r.toGlobalCoord(r.dataToCoord(t[1])),
            n
        },
        clampData: function(t, e) {
            var n = this.getAxis("x").scale,
            i = this.getAxis("y").scale,
            r = n.getExtent(),
            a = i.getExtent(),
            o = n.parse(t[0]),
            s = i.parse(t[1]);
            return e = e || [],
            e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])),
            e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])),
            e
        },
        pointToData: function(t, e) {
            var n = this.getAxis("x"),
            i = this.getAxis("y");
            return e = e || [],
            e[0] = n.coordToData(n.toLocalCoord(t[0])),
            e[1] = i.coordToData(i.toLocalCoord(t[1])),
            e
        },
        getOtherAxis: function(t) {
            return this.getAxis("x" === t.dim ? "y": "x")
        }
    },
    h(Hh, Xx);
    var Yx = function(t, e, n, i, r) {
        Vx.call(this, t, e, n),
        this.type = i || "value",
        this.position = r || "bottom"
    };
    Yx.prototype = {
        constructor: Yx,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
            var t = this.position;
            return "top" === t || "bottom" === t
        },
        getGlobalExtent: function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]),
            e[1] = this.toGlobalCoord(e[1]),
            t && e[0] > e[1] && e.reverse(),
            e
        },
        getOtherAxis: function() {
            this.grid.getOtherAxis()
        },
        pointToData: function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        },
        toLocalCoord: null,
        toGlobalCoord: null
    },
    h(Yx, Vx);
    var qx = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#ccc"],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
        }
    },
    jx = {};
    jx.categoryAxis = r({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    },
    qx),
    jx.valueAxis = r({
        boundaryGap: [0, 0],
        splitNumber: 5
    },
    qx),
    jx.timeAxis = s({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    },
    jx.valueAxis),
    jx.logAxis = s({
        scale: !0,
        logBase: 10
    },
    jx.valueAxis);
    var Zx = ["value", "category", "time", "log"],
    Ux = function(t, e, n, i) {
        f(Zx,
        function(o) {
            e.extend({
                type: t + "Axis." + o,
                mergeDefaultAndTheme: function(e, i) {
                    var a = this.layoutMode,
                    s = a ? Co(e) : {},
                    l = i.getTheme();
                    r(e, l.get(o + "Axis")),
                    r(e, this.getDefaultOption()),
                    e.type = n(t, e),
                    a && Io(e, s, a)
                },
                optionUpdated: function() {
                    var t = this.option;
                    "category" === t.type && (this.__ordinalMeta = Fu.createByAxisModel(this))
                },
                getCategories: function(t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data: this.__ordinalMeta.categories: void 0
                },
                getOrdinalMeta: function() {
                    return this.__ordinalMeta
                },
                defaultOption: a([{},
                jx[o + "Axis"], i], !0)
            })
        }),
        km.registerSubTypeDefaulter(t + "Axis", _(n, t))
    },
    $x = km.extend({
        type: "cartesian2dAxis",
        axis: null,
        init: function() {
            $x.superApply(this, "init", arguments),
            this.resetRange()
        },
        mergeOption: function() {
            $x.superApply(this, "mergeOption", arguments),
            this.resetRange()
        },
        restoreData: function() {
            $x.superApply(this, "restoreData", arguments),
            this.resetRange()
        },
        getCoordSysModel: function() {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    r($x.prototype, Tx);
    var Kx = {
        offset: 0
    };
    Ux("x", $x, Gh, Kx),
    Ux("y", $x, Gh, Kx),
    km.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var Qx = Yh.prototype;
    Qx.type = "grid",
    Qx.axisPointerEnabled = !0,
    Qx.getRect = function() {
        return this._rect
    },
    Qx.update = function(t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model),
        f(n.x,
        function(t) {
            oh(t.scale, t.model)
        }),
        f(n.y,
        function(t) {
            oh(t.scale, t.model)
        });
        var i = {};
        f(n.x,
        function(t) {
            qh(n, "y", t, i)
        }),
        f(n.y,
        function(t) {
            qh(n, "x", t, i)
        }),
        this.resize(this.model, e)
    },
    Qx.resize = function(t, e, n) {
        function i() {
            f(a,
            function(t) {
                var e = t.isHorizontal(),
                n = e ? [0, r.width] : [0, r.height],
                i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]),
                Zh(t, e ? r.x: r.y)
            })
        }
        var r = To(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = r;
        var a = this._axesList;
        i(),
        !n && t.get("containLabel") && (f(a,
        function(t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = ch(t);
                if (e) {
                    var n = t.isHorizontal() ? "height": "width",
                    i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i,
                    "top" === t.position ? r.y += e.height + i: "left" === t.position && (r.x += e.width + i)
                }
            }
        }), i())
    },
    Qx.getAxis = function(t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e]
        }
    },
    Qx.getAxes = function() {
        return this._axesList.slice()
    },
    Qx.getCartesian = function(t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        M(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0,
        r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
    },
    Qx.getCartesians = function() {
        return this._coordsList.slice()
    },
    Qx.convertToPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    },
    Qx.convertFromPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    },
    Qx._findConvertTarget = function(t, e) {
        var n, i, r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;
        if (r) n = r.coordinateSystem,
        u(l, n) < 0 && (n = null);
        else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
        else if (a) i = this.getAxis("x", a.componentIndex);
        else if (o) i = this.getAxis("y", o.componentIndex);
        else if (s) {
            var h = s.coordinateSystem;
            h === this && (n = this._coordsList[0])
        }
        return {
            cartesian: n,
            axis: i
        }
    },
    Qx.containPoint = function(t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0
    },
    Qx._initCartesian = function(t, e) {
        function n(n) {
            return function(o, s) {
                if (Xh(o, t, e)) {
                    var l = o.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom": "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right": "left")),
                    i[l] = !0;
                    var u = new Yx(n, sh(o), [0, 0], o.get("type"), l),
                    h = "category" === u.type;
                    u.onBand = h && o.get("boundaryGap"),
                    u.inverse = o.get("inverse"),
                    o.axis = u,
                    u.model = o,
                    u.grid = this,
                    u.index = s,
                    this._axesList.push(u),
                    r[n][s] = u,
                    a[n]++
                }
            }
        }
        var i = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        },
        r = {
            x: {},
            y: {}
        },
        a = {
            x: 0,
            y: 0
        };
        return e.eachComponent("xAxis", n("x"), this),
        e.eachComponent("yAxis", n("y"), this),
        a.x && a.y ? (this._axesMap = r, void f(r.x,
        function(e, n) {
            f(r.y,
            function(i, r) {
                var a = "x" + n + "y" + r,
                o = new Hh(a);
                o.grid = this,
                o.model = t,
                this._coordsMap[a] = o,
                this._coordsList.push(o),
                o.addAxis(e),
                o.addAxis(i)
            },
            this)
        },
        this)) : (this._axesMap = {},
        void(this._axesList = []))
    },
    Qx._updateScale = function(t, e) {
        function n(t, e) {
            f(t.mapDimension(e.dim, !0),
            function(n) {
                e.scale.unionExtentFromData(t, Nu(t, n))
            })
        }
        f(this._axesList,
        function(t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }),
        t.eachSeries(function(i) {
            if ($h(i)) {
                var r = Uh(i, t),
                a = r[0],
                o = r[1];
                if (!Xh(a, e, t) || !Xh(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex),
                l = i.getData(),
                u = s.getAxis("x"),
                h = s.getAxis("y");
                "list" === l.type && (n(l, u, i), n(l, h, i))
            }
        },
        this)
    },
    Qx.getTooltipAxes = function(t) {
        var e = [],
        n = [];
        return f(this.getCartesians(),
        function(i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
            a = i.getOtherAxis(r);
            u(e, r) < 0 && e.push(r),
            u(n, a) < 0 && n.push(a)
        }),
        {
            baseAxes: e,
            otherAxes: n
        }
    };
    var Jx = ["xAxis", "yAxis"];
    Yh.create = function(t, e) {
        var n = [];
        return t.eachComponent("grid",
        function(i, r) {
            var a = new Yh(i, t, e);
            a.name = "grid_" + r,
            a.resize(i, e, !0),
            i.coordinateSystem = a,
            n.push(a)
        }),
        t.eachSeries(function(e) {
            if ($h(e)) {
                var n = Uh(e, t),
                i = n[0],
                r = n[1],
                a = i.getCoordSysModel(),
                o = a.coordinateSystem;
                e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
            }
        }),
        n
    },
    Yh.dimensions = Yh.prototype.dimensions = Hh.prototype.dimensions,
    ts.register("cartesian2d", Yh);
    var tw = gy.extend({
        type: "series.__base_bar__",
        getInitialData: function() {
            return Eu(this.getSource(), this)
        },
        getMarkerPosition: function(t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)),
                i = this.getData(),
                r = i.getLayout("offset"),
                a = i.getLayout("size"),
                o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                return n[o] += r + a / 2,
                n
            }
            return [0 / 0, 0 / 0]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    });
    tw.extend({
        type: "series.bar",
        dependencies: ["grid", "polar"],
        brushSelector: "rect",
        getProgressive: function() {
            return this.get("large") ? this.get("progressive") : !1
        },
        getProgressiveThreshold: function() {
            var t = this.get("progressiveThreshold"),
            e = this.get("largeThreshold");
            return e > t && (t = e),
            t
        }
    });
    var ew = xg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
    nw = {
        getBarItemStyle: function(t) {
            var e = ew(this, t);
            if (this.getBorderLineDash) {
                var n = this.getBorderLineDash();
                n && (e.lineDash = n)
            }
            return e
        }
    },
    iw = ["itemStyle", "barBorderWidth"];
    o(Ha.prototype, nw),
    ou({
        type: "bar",
        render: function(t, e, n) {
            this._updateDrawMode(t);
            var i = t.get("coordinateSystem");
            return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)),
            this.group
        },
        incrementalPrepareRender: function(t) {
            this._clear(),
            this._updateDrawMode(t)
        },
        incrementalRender: function(t, e) {
            this._incrementalRenderLarge(t, e)
        },
        _updateDrawMode: function(t) {
            var e = t.pipelineContext.large; (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        },
        _renderNormal: function(t) {
            var e, n = this.group,
            i = t.getData(),
            r = this._data,
            a = t.coordinateSystem,
            o = a.getBaseAxis();
            "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
            var s = t.isAnimationEnabled() ? t: null;
            i.diff(r).add(function(r) {
                if (i.hasValue(r)) {
                    var o = i.getItemModel(r),
                    l = aw[a.type](i, r, o),
                    u = rw[a.type](i, r, o, l, e, s);
                    i.setItemGraphicEl(r, u),
                    n.add(u),
                    nc(u, i, r, o, l, t, e, "polar" === a.type)
                }
            }).update(function(o, l) {
                var u = r.getItemGraphicEl(l);
                if (!i.hasValue(o)) return void n.remove(u);
                var h = i.getItemModel(o),
                c = aw[a.type](i, o, h);
                u ? Oa(u, {
                    shape: c
                },
                s, o) : u = rw[a.type](i, o, h, c, e, s, !0),
                i.setItemGraphicEl(o, u),
                n.add(u),
                nc(u, i, o, h, c, t, e, "polar" === a.type)
            }).remove(function(t) {
                var e = r.getItemGraphicEl(t);
                "cartesian2d" === a.type ? e && tc(t, s, e) : e && ec(t, s, e)
            }).execute(),
            this._data = i
        },
        _renderLarge: function(t) {
            this._clear(),
            rc(t, this.group)
        },
        _incrementalRenderLarge: function(t, e) {
            rc(e, this.group, !0)
        },
        dispose: V,
        remove: function(t) {
            this._clear(t)
        },
        _clear: function(t) {
            var e = this.group,
            n = this._data;
            t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
                "sector" === e.type ? ec(e.dataIndex, t, e) : tc(e.dataIndex, t, e)
            }) : e.removeAll(),
            this._data = null
        }
    });
    var rw = {
        cartesian2d: function(t, e, n, i, r, a, s) {
            var l = new Fv({
                shape: o({},
                i)
            });
            if (a) {
                var u = l.shape,
                h = r ? "height": "width",
                c = {};
                u[h] = 0,
                c[h] = i[h],
                rm[s ? "updateProps": "initProps"](l, {
                    shape: c
                },
                a, e)
            }
            return l
        },
        polar: function(t, e, n, i, r, a, o) {
            var l = i.startAngle < i.endAngle,
            u = new Lv({
                shape: s({
                    clockwise: l
                },
                i)
            });
            if (a) {
                var h = u.shape,
                c = r ? "r": "endAngle",
                d = {};
                h[c] = r ? 0 : i.startAngle,
                d[c] = i[c],
                rm[o ? "updateProps": "initProps"](u, {
                    shape: d
                },
                a, e)
            }
            return u
        }
    },
    aw = {
        cartesian2d: function(t, e, n) {
            var i = t.getItemLayout(e),
            r = ic(n, i),
            a = i.width > 0 ? 1 : -1,
            o = i.height > 0 ? 1 : -1;
            return {
                x: i.x + a * r / 2,
                y: i.y + o * r / 2,
                width: i.width - a * r,
                height: i.height - o * r
            }
        },
        polar: function(t, e) {
            var n = t.getItemLayout(e);
            return {
                cx: n.cx,
                cy: n.cy,
                r0: n.r0,
                r: n.r,
                startAngle: n.startAngle,
                endAngle: n.endAngle
            }
        }
    },
    ow = zr.extend({
        type: "largeBar",
        shape: {
            points: []
        },
        buildPath: function(t, e) {
            for (var n = e.points,
            i = this.__startPoint,
            r = this.__valueIdx,
            a = 0; a < n.length; a += 2) i[this.__valueIdx] = n[a + r],
            t.moveTo(i[0], i[1]),
            t.lineTo(n[a], n[a + 1])
        }
    }),
    sw = Math.PI,
    lw = function(t, e) {
        this.opt = e,
        this.axisModel = t,
        s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }),
        this.group = new gp;
        var n = new gp({
            position: e.position.slice(),
            rotation: e.rotation
        });
        n.updateTransform(),
        this._transform = n.transform,
        this._dumbGroup = n
    };
    lw.prototype = {
        constructor: lw,
        hasBuilder: function(t) {
            return !! uw[t]
        },
        add: function(t) {
            uw[t].call(this)
        },
        getGroup: function() {
            return this.group
        }
    };
    var uw = {
        axisLine: function() {
            var t = this.opt,
            e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(),
                i = this._transform,
                r = [n[0], 0],
                a = [n[1], 0];
                i && (ae(r, r, i), ae(a, a, i));
                var s = o({
                    lineCap: "round"
                },
                e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new Wv(ra({
                    anid: "line",
                    shape: {
                        x1: r[0],
                        y1: r[1],
                        x2: a[0],
                        y2: a[1]
                    },
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"),
                u = e.get("axisLine.symbolSize"),
                h = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof h && (h = [h, h]), null != l) {
                    "string" == typeof l && (l = [l, l]),
                    ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
                    var c = u[0],
                    d = u[1];
                    f([{
                        rotate: t.rotation + Math.PI / 2,
                        offset: h[0],
                        r: 0
                    },
                    {
                        rotate: t.rotation - Math.PI / 2,
                        offset: h[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }],
                    function(e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = vh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                            a = e.r + e.offset,
                            o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                            i.attr({
                                rotation: e.rotate,
                                position: o,
                                silent: !0,
                                z2: 11
                            }),
                            this.group.add(i)
                        }
                    },
                    this)
                }
            }
        },
        axisTickLabel: function() {
            var t = this.axisModel,
            e = this.opt,
            n = fc(this, t, e),
            i = pc(this, t, e);
            uc(t, i, n)
        },
        axisName: function() {
            var t = this.opt,
            e = this.axisModel,
            n = k(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"),
                a = t.nameDirection,
                s = e.getModel("nameTextStyle"),
                l = e.get("nameGap") || 0,
                u = this.axisModel.axis.getExtent(),
                h = u[0] > u[1] ? -1 : 1,
                c = ["start" === r ? u[0] - h * l: "end" === r ? u[1] + h * l: (u[0] + u[1]) / 2, dc(r) ? t.labelOffset + a * l: 0],
                d = e.get("nameRotate");
                null != d && (d = d * sw / 180);
                var f;
                dc(r) ? i = hw(t.rotation, null != d ? d: t.rotation, a) : (i = sc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(),
                g = e.get("nameTruncate", !0) || {},
                v = g.ellipsis,
                m = k(t.nameTruncateMaxWidth, g.maxWidth, f),
                y = null != v && null != m ? wm(n, m, p, v, {
                    minChar: 2,
                    placeholder: g.placeholder
                }) : n,
                _ = e.get("tooltip", !0),
                x = e.mainType,
                w = {
                    componentType: x,
                    name: n,
                    $vars: ["name"]
                };
                w[x + "Index"] = e.componentIndex;
                var b = new Cv({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: lc(e),
                    z2: 1,
                    tooltip: _ && _.show ? o({
                        content: n,
                        formatter: function() {
                            return n
                        },
                        formatterParams: w
                    },
                    _) : null
                });
                Ma(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }),
                e.get("triggerEvent") && (b.eventData = oc(e), b.eventData.targetType = "axisName", b.eventData.name = n),
                this._dumbGroup.add(b),
                b.updateTransform(),
                this.group.add(b),
                b.decomposeTransform()
            }
        }
    },
    hw = lw.innerTextLayout = function(t, e, n) {
        var i, r, a = io(e - t);
        return ro(a) ? (r = n > 0 ? "top": "bottom", i = "center") : ro(a - sw) ? (r = n > 0 ? "bottom": "top", i = "center") : (r = "middle", i = a > 0 && sw > a ? n > 0 ? "right": "left": n > 0 ? "left": "right"),
        {
            rotation: a,
            textAlign: i,
            textVerticalAlign: r
        }
    },
    cw = ru({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function(t, e, n, i) {
            this.axisPointerClass && gc(t),
            cw.superApply(this, "render", arguments),
            xc(this, t, e, n, i, !0)
        },
        updateAxisPointer: function(t, e, n, i) {
            xc(this, t, e, n, i, !1)
        },
        remove: function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e),
            cw.superApply(this, "remove", arguments)
        },
        dispose: function(t, e) {
            wc(this, e),
            cw.superApply(this, "dispose", arguments)
        }
    }),
    dw = [];
    cw.registerAxisPointerClass = function(t, e) {
        dw[t] = e
    },
    cw.getAxisPointerClass = function(t) {
        return t && dw[t]
    };
    var fw = ["axisLine", "axisTickLabel", "axisName"],
    pw = ["splitArea", "splitLine"],
    gw = cw.extend({
        type: "cartesianAxis",
        axisPointerClass: "CartesianAxisPointer",
        render: function(t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new gp, this.group.add(this._axisGroup), t.get("show")) {
                var a = t.getCoordSysModel(),
                o = bc(a, t),
                s = new lw(t, o);
                f(fw, s.add, s),
                this._axisGroup.add(s.getGroup()),
                f(pw,
                function(e) {
                    t.get(e + ".show") && this["_" + e](t, a)
                },
                this),
                za(r, this._axisGroup, t),
                gw.superCall(this, "render", t, e, n, i)
            }
        },
        remove: function() {
            this._splitAreaColors = null
        },
        _splitLine: function(t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitLine"),
                r = i.getModel("lineStyle"),
                a = r.get("color");
                a = x(a) ? a: [a];
                for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({
                    tickModel: i
                }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
                    var g = n.toGlobalCoord(h[p].coord);
                    l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
                    var v = u++%a.length,
                    m = h[p].tickValue;
                    this._axisGroup.add(new Wv(ra({
                        anid: null != m ? "line_" + h[p].tickValue: null,
                        shape: {
                            x1: c[0],
                            y1: c[1],
                            x2: d[0],
                            y2: d[1]
                        },
                        style: s({
                            stroke: a[v]
                        },
                        f),
                        silent: !0
                    })))
                }
            }
        },
        _splitArea: function(t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitArea"),
                r = i.getModel("areaStyle"),
                a = r.get("color"),
                o = e.coordinateSystem.getRect(),
                l = n.getTicksCoords({
                    tickModel: i,
                    clamp: !0
                });
                if (l.length) {
                    var u = a.length,
                    h = this._splitAreaColors,
                    c = z(),
                    d = 0;
                    if (h) for (var f = 0; f < l.length; f++) {
                        var p = h.get(l[f].tickValue);
                        if (null != p) {
                            d = (p + (u - 1) * f) % u;
                            break
                        }
                    }
                    var g = n.toGlobalCoord(l[0].coord),
                    v = r.getAreaStyle();
                    a = x(a) ? a: [a];
                    for (var f = 1; f < l.length; f++) {
                        var m, y, _, w, b = n.toGlobalCoord(l[f].coord);
                        n.isHorizontal() ? (m = g, y = o.y, _ = b - m, w = o.height, g = m + _) : (m = o.x, y = g, _ = o.width, w = b - y, g = y + w);
                        var M = l[f - 1].tickValue;
                        null != M && c.set(M, d),
                        this._axisGroup.add(new Fv({
                            anid: null != M ? "area_" + M: null,
                            shape: {
                                x: m,
                                y: y,
                                width: _,
                                height: w
                            },
                            style: s({
                                fill: a[d]
                            },
                            v),
                            silent: !0
                        })),
                        d = (d + 1) % u
                    }
                    this._splitAreaColors = c
                }
            }
        }
    });
    gw.extend({
        type: "xAxis"
    }),
    gw.extend({
        type: "yAxis"
    }),
    ru({
        type: "grid",
        render: function(t) {
            this.group.removeAll(),
            t.get("show") && this.group.add(new Fv({
                shape: t.coordinateSystem.getRect(),
                style: s({
                    fill: t.get("backgroundColor")
                },
                t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }),
    jl(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }),
    Jl(_(Ju, "bar")),
    Jl(rx),
    tu({
        seriesType: "bar",
        reset: function(t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    }),
    gy.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function() {
            return Eu(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var vw = Mc.prototype,
    mw = Mc.getSymbolSize = function(t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [ + n, +n]
    };
    vw._createSymbol = function(t, e, n, i, r) {
        this.removeAll();
        var a = e.getItemVisual(n, "color"),
        o = vh(t, -1, -1, 2, 2, a, r);
        o.attr({
            z2: 100,
            culling: !0,
            scale: Sc(i)
        }),
        o.drift = Tc,
        this._symbolType = t,
        this.add(o)
    },
    vw.stopSymbolAnimation = function(t) {
        this.childAt(0).stopAnimation(t)
    },
    vw.getSymbolPath = function() {
        return this.childAt(0)
    },
    vw.getScale = function() {
        return this.childAt(0).scale
    },
    vw.highlight = function() {
        this.childAt(0).trigger("emphasis")
    },
    vw.downplay = function() {
        this.childAt(0).trigger("normal")
    },
    vw.setZ = function(t, e) {
        var n = this.childAt(0);
        n.zlevel = t,
        n.z = e
    },
    vw.setDraggable = function(t) {
        var e = this.childAt(0);
        e.draggable = t,
        e.cursor = t ? "move": "pointer"
    },
    vw.updateData = function(t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle",
        r = t.hostModel,
        a = mw(t, e),
        o = i !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(i, t, e, a, s)
        } else {
            var l = this.childAt(0);
            l.silent = !1,
            Oa(l, {
                scale: Sc(a)
            },
            r, e)
        }
        if (this._updateCommon(t, e, a, n), o) {
            var l = this.childAt(0),
            u = n && n.fadeIn,
            h = {
                scale: l.scale.slice()
            };
            u && (h.style = {
                opacity: l.style.opacity
            }),
            l.scale = [0, 0],
            u && (l.style.opacity = 0),
            Na(l, h, r, e)
        }
        this._seriesModel = r
    };
    var yw = ["itemStyle"],
    _w = ["emphasis", "itemStyle"],
    xw = ["label"],
    ww = ["emphasis", "label"];
    vw._updateCommon = function(t, e, n, i) {
        function r(e) {
            return b ? t.getName(e) : Kh(t, e)
        }
        var a = this.childAt(0),
        s = t.hostModel,
        l = t.getItemVisual(e, "color");
        "image" !== a.type && a.useStyle({
            strokeNoScale: !0
        });
        var u = i && i.itemStyle,
        h = i && i.hoverItemStyle,
        c = i && i.symbolRotate,
        d = i && i.symbolOffset,
        f = i && i.labelModel,
        p = i && i.hoverLabelModel,
        g = i && i.hoverAnimation,
        v = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel: t.getItemModel(e);
            u = m.getModel(yw).getItemStyle(["color"]),
            h = m.getModel(_w).getItemStyle(),
            c = m.getShallow("symbolRotate"),
            d = m.getShallow("symbolOffset"),
            f = m.getModel(xw),
            p = m.getModel(ww),
            g = m.getShallow("hoverAnimation"),
            v = m.getShallow("cursor")
        } else h = o({},
        h);
        var y = a.style;
        a.attr("rotation", (c || 0) * Math.PI / 180 || 0),
        d && a.attr("position", [$a(d[0], n[0]), $a(d[1], n[1])]),
        v && a.attr("cursor", v),
        a.setColor(l, i && i.symbolInnerColor),
        a.setStyle(u);
        var _ = t.getItemVisual(e, "opacity");
        null != _ && (y.opacity = _);
        var x = t.getItemVisual(e, "liftZ"),
        w = a.__z2Origin;
        null != x ? null == w && (a.__z2Origin = a.z2, a.z2 += x) : null != w && (a.z2 = w, a.__z2Origin = null);
        var b = i && i.useNameLabel;
        ba(y, h, f, p, {
            labelFetcher: s,
            labelDataIndex: e,
            defaultText: r,
            isRectText: !0,
            autoColor: l
        }),
        a.off("mouseover").off("mouseout").off("emphasis").off("normal"),
        a.hoverStyle = h,
        xa(a),
        a.__symbolOriginalScale = Sc(n),
        g && s.isAnimationEnabled() && a.on("mouseover", Ic).on("mouseout", Cc).on("emphasis", kc).on("normal", Dc)
    },
    vw.fadeOut = function(t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0,
        !(e && e.keepLabel) && (n.style.text = null),
        Oa(n, {
            style: {
                opacity: 0
            },
            scale: [0, 0]
        },
        this._seriesModel, this.dataIndex, t)
    },
    h(Mc, gp);
    var bw = Ac.prototype;
    bw.updateData = function(t, e) {
        e = Pc(e);
        var n = this.group,
        i = t.hostModel,
        r = this._data,
        a = this._symbolCtor,
        o = Oc(t);
        r || n.removeAll(),
        t.diff(r).add(function(i) {
            var r = t.getItemLayout(i);
            if (Lc(t, r, i, e)) {
                var s = new a(t, i, o);
                s.attr("position", r),
                t.setItemGraphicEl(i, s),
                n.add(s)
            }
        }).update(function(s, l) {
            var u = r.getItemGraphicEl(l),
            h = t.getItemLayout(s);
            return Lc(t, h, s, e) ? (u ? (u.updateData(t, s, o), Oa(u, {
                position: h
            },
            i)) : (u = new a(t, s), u.attr("position", h)), n.add(u), void t.setItemGraphicEl(s, u)) : void n.remove(u)
        }).remove(function(t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function() {
                n.remove(e)
            })
        }).execute(),
        this._data = t
    },
    bw.isPersistent = function() {
        return ! 0
    },
    bw.updateLayout = function() {
        var t = this._data;
        t && t.eachItemGraphicEl(function(e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    },
    bw.incrementalPrepareUpdate = function(t) {
        this._seriesScope = Oc(t),
        this._data = null,
        this.group.removeAll()
    },
    bw.incrementalUpdate = function(t, e, n) {
        function i(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0)
        }
        n = Pc(n);
        for (var r = t.start; r < t.end; r++) {
            var a = e.getItemLayout(r);
            if (Lc(e, a, r, n)) {
                var o = new this._symbolCtor(e, r, this._seriesScope);
                o.traverse(i),
                o.attr("position", a),
                this.group.add(o),
                e.setItemGraphicEl(r, o)
            }
        }
    },
    bw.remove = function(t) {
        var e = this.group,
        n = this._data;
        n && t ? n.eachItemGraphicEl(function(t) {
            t.fadeOut(function() {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var Mw = function(t, e, n, i, r, a, o, s) {
        for (var l = Bc(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = Nc(r, e, o), m = Nc(a, t, s), y = 0; y < l.length; y++) {
            var _ = l[y],
            x = !0;
            switch (_.cmd) {
            case "=":
                var w = t.getItemLayout(_.idx),
                b = e.getItemLayout(_.idx1); (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()),
                u.push(w),
                h.push(b),
                c.push(n[_.idx]),
                d.push(i[_.idx1]),
                g.push(e.getRawIndex(_.idx1));
                break;
            case "+":
                var M = _.idx;
                u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], M), e.get(v.dataDimsForPoint[1], M)])),
                h.push(e.getItemLayout(M).slice()),
                c.push(Rc(v, r, e, M)),
                d.push(i[M]),
                g.push(e.getRawIndex(M));
                break;
            case "-":
                var M = _.idx,
                S = t.getRawIndex(M);
                S !== M ? (u.push(t.getItemLayout(M)), h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], M), t.get(m.dataDimsForPoint[1], M)])), c.push(n[M]), d.push(Rc(m, a, t, M)), g.push(S)) : x = !1
            }
            x && (f.push(_), p.push(p.length))
        }
        p.sort(function(t, e) {
            return g[t] - g[e]
        });
        for (var T = [], I = [], C = [], k = [], D = [], y = 0; y < p.length; y++) {
            var M = p[y];
            T[y] = u[M],
            I[y] = h[M],
            C[y] = c[M],
            k[y] = d[M],
            D[y] = f[M]
        }
        return {
            current: T,
            next: I,
            stackedOnCurrent: C,
            stackedOnNext: k,
            status: D
        }
    },
    Sw = oe,
    Tw = se,
    Iw = q,
    Cw = H,
    kw = [],
    Dw = [],
    Aw = [],
    Lw = zr.extend({
        type: "ec-polyline",
        shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        style: {
            fill: null,
            stroke: "#000"
        },
        brush: Av(zr.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points,
            i = 0,
            r = n.length,
            a = Hc(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && zc(n[r - 1]); r--);
                for (; r > i && zc(n[i]); i++);
            }
            for (; r > i;) i += Fc(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    }),
    Pw = zr.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: Av(zr.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points,
            i = e.stackedOnPoints,
            r = 0,
            a = n.length,
            o = e.smoothMonotone,
            s = Hc(n, e.smoothConstraint),
            l = Hc(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; a > 0 && zc(n[a - 1]); a--);
                for (; a > r && zc(n[r]); r++);
            }
            for (; a > r;) {
                var u = Fc(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                Fc(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls),
                r += u + 1,
                t.closePath()
            }
        }
    });
    Vs.extend({
        type: "line",
        init: function() {
            var t = new gp,
            e = new Ac;
            this.group.add(e.group),
            this._symbolDraw = e,
            this._lineGroup = t
        },
        render: function(t, e, n) {
            var i = t.coordinateSystem,
            r = this.group,
            a = t.getData(),
            o = t.getModel("lineStyle"),
            l = t.getModel("areaStyle"),
            u = a.mapArray(a.getItemLayout),
            h = "polar" === i.type,
            c = this._coordSys,
            d = this._symbolDraw,
            f = this._polyline,
            p = this._polygon,
            g = this._lineGroup,
            v = t.get("animation"),
            m = !l.isEmpty(),
            y = l.get("origin"),
            _ = Nc(i, a, y),
            x = qc(i, a, _),
            w = t.get("showSymbol"),
            b = w && !h && Qc(t, a, i),
            M = this._data;
            M && M.eachItemGraphicEl(function(t, e) {
                t.__temp && (r.remove(t), M.setItemGraphicEl(e, null))
            }),
            w || d.remove(),
            r.add(g);
            var S = !h && t.get("step");
            f && c.type === i.type && S === this._step ? (m && !p ? p = this._newPolygon(u, x, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(Uc(i, !1, !1, t)), w && d.updateData(a, {
                isIgnore: b,
                clipShape: Uc(i, !1, !0, t)
            }), a.eachItemGraphicEl(function(t) {
                t.stopAnimation(!0)
            }), Gc(this._stackedOnPoints, x) && Gc(this._points, u) || (v ? this._updateAnimation(a, x, i, n, S, y) : (S && (u = $c(u, i, S), x = $c(x, i, S)), f.setShape({
                points: u
            }), p && p.setShape({
                points: u,
                stackedOnPoints: x
            })))) : (w && d.updateData(a, {
                isIgnore: b,
                clipShape: Uc(i, !1, !0, t)
            }), S && (u = $c(u, i, S), x = $c(x, i, S)), f = this._newPolyline(u, i, v), m && (p = this._newPolygon(u, x, i, v)), g.setClipPath(Uc(i, !0, !1, t)));
            var T = Kc(a, i) || a.getVisual("color");
            f.useStyle(s(o.getLineStyle(), {
                fill: "none",
                stroke: T,
                lineJoin: "bevel"
            }));
            var I = t.get("smooth");
            if (I = Xc(t.get("smooth")), f.setShape({
                smooth: I,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var C = a.getCalculationInfo("stackedOnSeries"),
                k = 0;
                p.useStyle(s(l.getAreaStyle(), {
                    fill: T,
                    opacity: .7,
                    lineJoin: "bevel"
                })),
                C && (k = Xc(C.get("smooth"))),
                p.setShape({
                    smooth: I,
                    stackedOnSmooth: k,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = a,
            this._coordSys = i,
            this._stackedOnPoints = x,
            this._points = u,
            this._step = S,
            this._valueOrigin = y
        },
        dispose: function() {},
        highlight: function(t, e, n, i) {
            var r = t.getData(),
            a = Yi(r, i);
            if (! (a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    o = new Mc(r, a),
                    o.position = s,
                    o.setZ(t.get("zlevel"), t.get("z")),
                    o.ignore = isNaN(s[0]) || isNaN(s[1]),
                    o.__temp = !0,
                    r.setItemGraphicEl(a, o),
                    o.stopSymbolAnimation(!0),
                    this.group.add(o)
                }
                o.highlight()
            } else Vs.prototype.highlight.call(this, t, e, n, i)
        },
        downplay: function(t, e, n, i) {
            var r = t.getData(),
            a = Yi(r, i);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
            } else Vs.prototype.downplay.call(this, t, e, n, i)
        },
        _newPolyline: function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e),
            e = new Lw({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }),
            this._lineGroup.add(e),
            this._polyline = e,
            e
        },
        _newPolygon: function(t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n),
            n = new Pw({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }),
            this._lineGroup.add(n),
            this._polygon = n,
            n
        },
        _updateAnimation: function(t, e, n, i, r, a) {
            var o = this._polyline,
            s = this._polygon,
            l = t.hostModel,
            u = Mw(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
            h = u.current,
            c = u.stackedOnCurrent,
            d = u.next,
            f = u.stackedOnNext;
            r && (h = $c(u.current, n, r), c = $c(u.stackedOnCurrent, n, r), d = $c(u.next, n, r), f = $c(u.stackedOnNext, n, r)),
            o.shape.__points = u.current,
            o.shape.points = h,
            Oa(o, {
                shape: {
                    points: d
                }
            },
            l),
            s && (s.setShape({
                points: h,
                stackedOnPoints: c
            }), Oa(s, {
                shape: {
                    points: d,
                    stackedOnPoints: f
                }
            },
            l));
            for (var p = [], g = u.status, v = 0; v < g.length; v++) {
                var m = g[v].cmd;
                if ("=" === m) {
                    var y = t.getItemGraphicEl(g[v].idx1);
                    y && p.push({
                        el: y,
                        ptIdx: v
                    })
                }
            }
            o.animators && o.animators.length && o.animators[0].during(function() {
                for (var t = 0; t < p.length; t++) {
                    var e = p[t].el;
                    e.attr("position", o.shape.__points[p[t].ptIdx])
                }
            })
        },
        remove: function() {
            var t = this.group,
            e = this._data;
            this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            e && e.eachItemGraphicEl(function(n, i) {
                n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
            }),
            this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var Ow = function(t, e, n) {
        return {
            seriesType: t,
            performRawSeries: !0,
            reset: function(t, i) {
                function r(e, n) {
                    if ("function" == typeof s) {
                        var i = t.getRawValue(n),
                        r = t.getDataParams(n);
                        e.setItemVisual(n, "symbolSize", s(i, r))
                    }
                    if (e.hasItemOption) {
                        var a = e.getItemModel(n),
                        o = a.getShallow("symbol", !0),
                        l = a.getShallow("symbolSize", !0),
                        u = a.getShallow("symbolKeepAspect", !0);
                        null != o && e.setItemVisual(n, "symbol", o),
                        null != l && e.setItemVisual(n, "symbolSize", l),
                        null != u && e.setItemVisual(n, "symbolKeepAspect", u)
                    }
                }
                var a = t.getData(),
                o = t.get("symbol") || e,
                s = t.get("symbolSize"),
                l = t.get("symbolKeepAspect");
                if (a.setVisual({
                    legendSymbol: n || o,
                    symbol: o,
                    symbolSize: s,
                    symbolKeepAspect: l
                }), !i.isSeriesFiltered(t)) {
                    var u = "function" == typeof s;
                    return {
                        dataEach: a.hasItemOption || u ? r: null
                    }
                }
            }
        }
    },
    Nw = function(t) {
        return {
            seriesType: t,
            plan: yy(),
            reset: function(t) {
                function e(t, e) {
                    for (var n = t.end - t.start,
                    r = a && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
                        var d;
                        if (1 === s) {
                            var f = e.get(o[0], l);
                            d = !isNaN(f) && i.dataToPoint(f, null, c)
                        } else {
                            var f = h[0] = e.get(o[0], l),
                            p = h[1] = e.get(o[1], l);
                            d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c)
                        }
                        a ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
                    }
                    a && e.setLayout("symbolPoints", r)
                }
                var n = t.getData(),
                i = t.coordinateSystem,
                r = t.pipelineContext,
                a = r.large;
                if (i) {
                    var o = p(i.dimensions,
                    function(t) {
                        return n.mapDimension(t)
                    }).slice(0, 2),
                    s = o.length,
                    l = n.getCalculationInfo("stackResultDimension");
                    return Ou(n, o[0]) && (o[0] = l),
                    Ou(n, o[1]) && (o[1] = l),
                    s && {
                        progress: e
                    }
                }
            }
        }
    },
    Ew = {
        average: function(t) {
            for (var e = 0,
            n = 0,
            i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? 0 / 0 : e / n
        },
        sum: function(t) {
            for (var e = 0,
            n = 0; n < t.length; n++) e += t[n] || 0;
            return e
        },
        max: function(t) {
            for (var e = -1 / 0,
            n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e: 0 / 0
        },
        min: function(t) {
            for (var e = 1 / 0,
            n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e: 0 / 0
        },
        nearest: function(t) {
            return t[0]
        }
    },
    Rw = function(t) {
        return Math.round(t.length / 2)
    },
    Bw = function(t) {
        return {
            seriesType: t,
            modifyOutputEnd: !0,
            reset: function(t) {
                var e = t.getData(),
                n = t.get("sampling"),
                i = t.coordinateSystem;
                if ("cartesian2d" === i.type && n) {
                    var r = i.getBaseAxis(),
                    a = i.getOtherAxis(r),
                    o = r.getExtent(),
                    s = o[1] - o[0],
                    l = Math.round(e.count() / s);
                    if (l > 1) {
                        var u;
                        "string" == typeof n ? u = Ew[n] : "function" == typeof n && (u = n),
                        u && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, u, Rw))
                    }
                }
            }
        }
    };
    tu(Ow("line", "circle", "line")),
    Jl(Nw("line")),
    Zl(d_.PROCESSOR.STATISTIC, Bw("line"));
    var zw = function(t, e, n) {
        e = x(e) && {
            coordDimensions: e
        } || o({},
        e);
        var i = t.getSource(),
        r = Z_(i, e),
        a = new Y_(r, t);
        return a.initData(i, n),
        a
    },
    Fw = {
        updateSelectedMap: function(t) {
            this._targetList = x(t) ? t.slice() : [],
            this._selectTargetMap = g(t || [],
            function(t, e) {
                return t.set(e.name, e),
                t
            },
            z())
        },
        select: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
            i = this.get("selectedMode");
            "single" === i && this._selectTargetMap.each(function(t) {
                t.selected = !1
            }),
            n && (n.selected = !0)
        },
        unSelect: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        },
        toggleSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return null != n ? (this[n.selected ? "unSelect": "select"](t, e), n.selected) : void 0
        },
        isSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    },
    Vw = au({
        type: "series.pie",
        init: function(t) {
            Vw.superApply(this, "init", arguments),
            this.legendDataProvider = function() {
                return this.getRawData()
            },
            this.updateSelectedMap(this._createSelectableList()),
            this._defaultLabelLine(t)
        },
        mergeOption: function(t) {
            Vw.superCall(this, "mergeOption", t),
            this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function() {
            return zw(this, ["value"])
        },
        _createSelectableList: function() {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
                name: t.getName(i),
                value: t.get(e, i),
                selected: Cs(t, i, "selected")
            });
            return n
        },
        getDataParams: function(t) {
            var e = this.getData(),
            n = Vw.superCall(this, "getDataParams", t),
            i = [];
            return e.each(e.mapDimension("value"),
            function(t) {
                i.push(t)
            }),
            n.percent = no(i, t, e.hostModel.get("percentPrecision")),
            n.$vars.push("percent"),
            n
        },
        _defaultLabelLine: function(t) {
            zi(t, "labelLine", ["show"]);
            var e = t.labelLine,
            n = t.emphasis.labelLine;
            e.show = e.show && t.label.show,
            n.show = n.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {
                rotate: !1,
                show: !0,
                position: "outer"
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1
            },
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    c(Vw, Fw);
    var Ww = nd.prototype;
    Ww.updateData = function(t, e, n) {
        function i() {
            a.stopAnimation(!0),
            a.animateTo({
                shape: {
                    r: h.r + l.get("hoverOffset")
                }
            },
            300, "elasticOut")
        }
        function r() {
            a.stopAnimation(!0),
            a.animateTo({
                shape: {
                    r: h.r
                }
            },
            300, "elasticOut")
        }
        var a = this.childAt(0),
        l = t.hostModel,
        u = t.getItemModel(e),
        h = t.getItemLayout(e),
        c = o({},
        h);
        if (c.label = null, n) {
            a.setShape(c);
            var d = l.getShallow("animationType");
            "scale" === d ? (a.shape.r = h.r0, Na(a, {
                shape: {
                    r: h.r
                }
            },
            l, e)) : (a.shape.endAngle = h.startAngle, Oa(a, {
                shape: {
                    endAngle: h.endAngle
                }
            },
            l, e))
        } else Oa(a, {
            shape: c
        },
        l, e);
        var f = t.getItemVisual(e, "color");
        a.useStyle(s({
            lineJoin: "bevel",
            fill: f
        },
        u.getModel("itemStyle").getItemStyle())),
        a.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
        var p = u.getShallow("cursor");
        p && a.attr("cursor", p),
        ed(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")),
        a.off("mouseover").off("mouseout").off("emphasis").off("normal"),
        u.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r),
        this._updateLabel(t, e),
        xa(this)
    },
    Ww._updateLabel = function(t, e) {
        var n = this.childAt(1),
        i = this.childAt(2),
        r = t.hostModel,
        a = t.getItemModel(e),
        o = t.getItemLayout(e),
        s = o.label,
        l = t.getItemVisual(e, "color");
        Oa(n, {
            shape: {
                points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]]
            }
        },
        r, e),
        Oa(i, {
            style: {
                x: s.x,
                y: s.y
            }
        },
        r, e),
        i.attr({
            rotation: s.rotation,
            origin: [s.x, s.y],
            z2: 10
        });
        var u = a.getModel("label"),
        h = a.getModel("emphasis.label"),
        c = a.getModel("labelLine"),
        d = a.getModel("emphasis.labelLine"),
        l = t.getItemVisual(e, "color");
        ba(i.style, i.hoverStyle = {},
        u, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: l,
            useInsideStyle: !!s.inside
        },
        {
            textAlign: s.textAlign,
            textVerticalAlign: s.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }),
        i.ignore = i.normalIgnore = !u.get("show"),
        i.hoverIgnore = !h.get("show"),
        n.ignore = n.normalIgnore = !c.get("show"),
        n.hoverIgnore = !d.get("show"),
        n.setStyle({
            stroke: l,
            opacity: t.getItemVisual(e, "opacity")
        }),
        n.setStyle(c.getModel("lineStyle").getLineStyle()),
        n.hoverStyle = d.getModel("lineStyle").getLineStyle();
        var f = c.get("smooth");
        f && f === !0 && (f = .4),
        n.setShape({
            smooth: f
        })
    },
    h(nd, gp);
    var Hw = (Vs.extend({
        type: "pie",
        init: function() {
            var t = new gp;
            this._sectorGroup = t
        },
        render: function(t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(),
                a = this._data,
                o = this.group,
                s = e.get("animation"),
                l = !a,
                u = t.get("animationType"),
                h = _(td, this.uid, t, s, n),
                c = t.get("selectedMode");
                if (r.diff(a).add(function(t) {
                    var e = new nd(r, t);
                    l && "scale" !== u && e.eachChild(function(t) {
                        t.stopAnimation(!0)
                    }),
                    c && e.on("click", h),
                    r.setItemGraphicEl(t, e),
                    o.add(e)
                }).update(function(t, e) {
                    var n = a.getItemGraphicEl(e);
                    n.updateData(r, t),
                    n.off("click"),
                    c && n.on("click", h),
                    o.add(n),
                    r.setItemGraphicEl(t, n)
                }).remove(function(t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e)
                }).execute(), s && l && r.count() > 0 && "scale" !== u) {
                    var d = r.getItemLayout(0),
                    f = Math.max(n.getWidth(), n.getHeight()) / 2,
                    p = y(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
                } else o.removeClipPath();
                this._data = r
            }
        },
        dispose: function() {},
        _createClipPath: function(t, e, n, i, r, a, o) {
            var s = new Lv({
                shape: {
                    cx: t,
                    cy: e,
                    r0: 0,
                    r: n,
                    startAngle: i,
                    endAngle: i,
                    clockwise: r
                }
            });
            return Na(s, {
                shape: {
                    endAngle: i + (r ? 1 : -1) * Math.PI * 2
                }
            },
            o, a),
            s
        },
        containPoint: function(t, e) {
            var n = e.getData(),
            i = n.getItemLayout(0);
            if (i) {
                var r = t[0] - i.cx,
                a = t[1] - i.cy,
                o = Math.sqrt(r * r + a * a);
                return o <= i.r && o >= i.r0
            }
        }
    }),
    function(t, e) {
        f(e,
        function(e) {
            e.update = "updateView",
            $l(e,
            function(n, i) {
                var r = {};
                return i.eachComponent({
                    mainType: "series",
                    subType: t,
                    query: n
                },
                function(t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function(e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }),
                {
                    name: n.name,
                    selected: r
                }
            })
        })
    }),
    Gw = function(t) {
        return {
            getTargetSeries: function(e) {
                var n = {},
                i = z();
                return e.eachSeriesByType(t,
                function(t) {
                    t.__paletteScope = n,
                    i.set(t.uid, t)
                }),
                i
            },
            reset: function(t) {
                var e = t.getRawData(),
                n = {},
                i = t.getData();
                i.each(function(t) {
                    var e = i.getRawIndex(t);
                    n[e] = t
                }),
                e.each(function(r) {
                    var a = n[r],
                    o = null != a && i.getItemVisual(a, "color", !0);
                    if (o) e.setItemVisual(r, "color", o);
                    else {
                        var s = e.getItemModel(r),
                        l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                        e.setItemVisual(r, "color", l),
                        null != a && i.setItemVisual(a, "color", l)
                    }
                })
            }
        }
    },
    Xw = function(t, e, n, i) {
        var r, a, o = t.getData(),
        s = [],
        l = !1;
        o.each(function(n) {
            var i, u, h, c, d = o.getItemLayout(n),
            f = o.getItemModel(n),
            p = f.getModel("label"),
            g = p.get("position") || f.get("emphasis.label.position"),
            v = f.getModel("labelLine"),
            m = v.get("length"),
            y = v.get("length2"),
            _ = (d.startAngle + d.endAngle) / 2,
            x = Math.cos(_),
            w = Math.sin(_);
            r = d.cx,
            a = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) i = d.cx,
            u = d.cy,
            c = "center";
            else {
                var M = (b ? (d.r + d.r0) / 2 * x: d.r * x) + r,
                S = (b ? (d.r + d.r0) / 2 * w: d.r * w) + a;
                if (i = M + 3 * x, u = S + 3 * w, !b) {
                    var T = M + x * (m + e - d.r),
                    I = S + w * (m + e - d.r),
                    C = T + (0 > x ? -1 : 1) * y,
                    k = I;
                    i = C + (0 > x ? -5 : 5),
                    u = k,
                    h = [[M, S], [T, I], [C, k]]
                }
                c = b ? "center": x > 0 ? "left": "right"
            }
            var D = p.getFont(),
            A = p.get("rotate") ? 0 > x ? -_ + Math.PI: -_: 0,
            L = t.getFormattedLabel(n, "normal") || o.getName(n),
            P = zn(L, D, c, "top");
            l = !!A,
            d.label = {
                x: i,
                y: u,
                position: g,
                height: P.height,
                len: m,
                len2: y,
                linePoints: h,
                textAlign: c,
                verticalAlign: "middle",
                rotation: A,
                inside: b
            },
            b || s.push(d.label)
        }),
        !l && t.get("avoidLabelOverlap") && rd(s, r, a, e, n, i)
    },
    Yw = 2 * Math.PI,
    qw = Math.PI / 180,
    jw = function(t, e, n) {
        e.eachSeriesByType(t,
        function(t) {
            var e = t.getData(),
            i = e.mapDimension("value"),
            r = t.get("center"),
            a = t.get("radius");
            x(a) || (a = [0, a]),
            x(r) || (r = [r, r]);
            var o = n.getWidth(),
            s = n.getHeight(),
            l = Math.min(o, s),
            u = $a(r[0], o),
            h = $a(r[1], s),
            c = $a(a[0], l / 2),
            d = $a(a[1], l / 2),
            f = -t.get("startAngle") * qw,
            p = t.get("minAngle") * qw,
            g = 0;
            e.each(i,
            function(t) { ! isNaN(t) && g++
            });
            var v = e.getSum(i),
            m = Math.PI / (v || g) * 2,
            y = t.get("clockwise"),
            _ = t.get("roseType"),
            w = t.get("stillShowZeroSum"),
            b = e.getDataExtent(i);
            b[0] = 0;
            var M = Yw,
            S = 0,
            T = f,
            I = y ? 1 : -1;
            if (e.each(i,
            function(t, n) {
                var i;
                if (isNaN(t)) return void e.setItemLayout(n, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: y,
                    cx: u,
                    cy: h,
                    r0: c,
                    r: _ ? 0 / 0 : d
                });
                i = "area" !== _ ? 0 === v && w ? m: t * m: Yw / g,
                p > i ? (i = p, M -= p) : S += t;
                var r = T + I * i;
                e.setItemLayout(n, {
                    angle: i,
                    startAngle: T,
                    endAngle: r,
                    clockwise: y,
                    cx: u,
                    cy: h,
                    r0: c,
                    r: _ ? Ua(t, b, [c, d]) : d
                }),
                T = r
            }), Yw > M && g) if (.001 >= M) {
                var C = Yw / g;
                e.each(i,
                function(t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = C,
                        i.startAngle = f + I * n * C,
                        i.endAngle = f + I * (n + 1) * C
                    }
                })
            } else m = M / S,
            T = f,
            e.each(i,
            function(t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n),
                    r = i.angle === p ? p: t * m;
                    i.startAngle = T,
                    i.endAngle = T + I * r,
                    T += I * r
                }
            });
            Xw(t, d, o, s)
        })
    },
    Zw = function(t) {
        return {
            seriesType: t,
            reset: function(t, e) {
                var n = e.findComponents({
                    mainType: "legend"
                });
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function(t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return ! 1;
                        return ! 0
                    })
                }
            }
        }
    };
    Hw("pie", [{
        type: "pieToggleSelect",
        event: "pieselectchanged",
        method: "toggleSelected"
    },
    {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    },
    {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]),
    tu(Gw("pie")),
    Jl(_(jw, "pie")),
    Zl(Zw("pie"));
    var Uw = f,
    $w = "\x00__link_datas",
    Kw = "\x00__link_mainData",
    Qw = function(t, e) {
        this.name = t || "",
        this.depth = 0,
        this.height = 0,
        this.parentNode = null,
        this.dataIndex = -1,
        this.children = [],
        this.viewChildren = [],
        this.hostTree = e
    };
    Qw.prototype = {
        constructor: Qw,
        isRemoved: function() {
            return this.dataIndex < 0
        },
        eachNode: function(t, e, n) {
            "function" == typeof t && (n = e, e = t, t = null),
            t = t || {},
            b(t) && (t = {
                order: t
            });
            var i, r = t.order || "preorder",
            a = this[t.attr || "children"];
            "preorder" === r && (i = e.call(n, this));
            for (var o = 0; ! i && o < a.length; o++) a[o].eachNode(t, e, n);
            "postorder" === r && e.call(n, this)
        },
        updateDepthAndHeight: function(t) {
            var e = 0;
            this.depth = t;
            for (var n = 0; n < this.children.length; n++) {
                var i = this.children[n];
                i.updateDepthAndHeight(t + 1),
                i.height > e && (e = i.height)
            }
            this.height = e + 1
        },
        getNodeById: function(t) {
            if (this.getId() === t) return this;
            for (var e = 0,
            n = this.children,
            i = n.length; i > e; e++) {
                var r = n[e].getNodeById(t);
                if (r) return r
            }
        },
        contains: function(t) {
            if (t === this) return ! 0;
            for (var e = 0,
            n = this.children,
            i = n.length; i > e; e++) {
                var r = n[e].contains(t);
                if (r) return r
            }
        },
        getAncestors: function(t) {
            for (var e = [], n = t ? this: this.parentNode; n;) e.push(n),
            n = n.parentNode;
            return e.reverse(),
            e
        },
        getValue: function(t) {
            var e = this.hostTree.data;
            return e.get(e.getDimension(t || "value"), this.dataIndex)
        },
        setLayout: function(t, e) {
            this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
        },
        getLayout: function() {
            return this.hostTree.data.getItemLayout(this.dataIndex)
        },
        getModel: function(t) {
            if (! (this.dataIndex < 0)) {
                var e, n = this.hostTree,
                i = n.data.getItemModel(this.dataIndex),
                r = this.getLevelModel();
                return r || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !1) || (e = this.getLeavesModel()),
                i.getModel(t, (r || e || n.hostModel).getModel(t))
            }
        },
        getLevelModel: function() {
            return (this.hostTree.levelModels || [])[this.depth]
        },
        getLeavesModel: function() {
            return this.hostTree.leavesModel
        },
        setVisual: function(t, e) {
            this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
        },
        getVisual: function(t, e) {
            return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
        },
        getRawIndex: function() {
            return this.hostTree.data.getRawIndex(this.dataIndex)
        },
        getId: function() {
            return this.hostTree.data.getId(this.dataIndex)
        },
        isAncestorOf: function(t) {
            for (var e = t.parentNode; e;) {
                if (e === this) return ! 0;
                e = e.parentNode
            }
            return ! 1
        },
        isDescendantOf: function(t) {
            return t !== this && t.isAncestorOf(this)
        }
    },
    pd.prototype = {
        constructor: pd,
        type: "tree",
        eachNode: function(t, e, n) {
            this.root.eachNode(t, e, n)
        },
        getNodeByDataIndex: function(t) {
            var e = this.data.getRawIndex(t);
            return this._nodes[e]
        },
        getNodeByName: function(t) {
            return this.root.getNodeByName(t)
        },
        update: function() {
            for (var t = this.data,
            e = this._nodes,
            n = 0,
            i = e.length; i > n; n++) e[n].dataIndex = -1;
            for (var n = 0,
            i = t.count(); i > n; n++) e[t.getRawIndex(n)].dataIndex = n
        },
        clearLayouts: function() {
            this.data.clearItemLayouts()
        }
    },
    pd.createTree = function(t, e, n) {
        function i(t, e) {
            var n = t.value;
            o = Math.max(o, x(n) ? n.length: 1),
            a.push(t);
            var s = new Qw(t.name, r);
            e ? gd(s, e) : r.root = s,
            r._nodes.push(s);
            var l = t.children;
            if (l) for (var u = 0; u < l.length; u++) i(l[u], s)
        }
        var r = new pd(e, n.levels, n.leaves),
        a = [],
        o = 1;
        i(t),
        r.root.updateDepthAndHeight(0);
        var s = Z_(a, {
            coordDimensions: ["value"],
            dimensionsCount: o
        }),
        l = new Y_(s, e);
        return l.initData(a),
        od({
            mainData: l,
            struct: r,
            structAttr: "tree"
        }),
        r.update(),
        r
    },
    gy.extend({
        type: "series.tree",
        layoutInfo: null,
        layoutMode: "box",
        getInitialData: function(t) {
            var e = {
                name: t.name,
                children: t.data
            },
            n = t.leaves || {},
            i = {};
            i.leaves = n;
            var r = pd.createTree(e, this, i),
            a = 0;
            r.eachNode("preorder",
            function(t) {
                t.depth > a && (a = t.depth)
            });
            var o = t.expandAndCollapse,
            s = o && t.initialTreeDepth >= 0 ? t.initialTreeDepth: a;
            return r.root.eachNode("preorder",
            function(t) {
                var e = t.hostTree.data.getRawDataItem(t.dataIndex);
                t.isExpand = e && null != e.collapsed ? !e.collapsed: t.depth <= s
            }),
            r.data
        },
        getOrient: function() {
            var t = this.get("orient");
            return "horizontal" === t ? t = "LR": "vertical" === t && (t = "TB"),
            t
        },
        setZoom: function(t) {
            this.option.zoom = t
        },
        setCenter: function(t) {
            this.option.center = t
        },
        formatTooltip: function(t) {
            for (var e = this.getData().tree, n = e.root.children[0], i = e.getNodeByDataIndex(t), r = i.getValue(), a = i.name; i && i !== n;) a = i.parentNode.name + "." + a,
            i = i.parentNode;
            return go(a + (isNaN(r) || null == r ? "": " : " + r))
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "view",
            left: "12%",
            top: "12%",
            right: "12%",
            bottom: "12%",
            layout: "orthogonal",
            roam: !1,
            nodeScaleRatio: .4,
            center: null,
            zoom: 1,
            orient: "LR",
            symbol: "emptyCircle",
            symbolSize: 7,
            expandAndCollapse: !0,
            initialTreeDepth: 2,
            lineStyle: {
                color: "#ccc",
                width: 1.5,
                curveness: .5
            },
            itemStyle: {
                color: "lightsteelblue",
                borderColor: "#c23531",
                borderWidth: 1.5
            },
            label: {
                show: !0,
                color: "#555"
            },
            leaves: {
                label: {
                    show: !0
                }
            },
            animationEasing: "linear",
            animationDuration: 700,
            animationDurationUpdate: 1e3
        }
    });
    var Jw = ae;
    c(Dd, Vf),
    Ad.prototype = {
        constructor: Ad,
        type: "view",
        dimensions: ["x", "y"],
        setBoundingRect: function(t, e, n, i) {
            return this._rect = new _n(t, e, n, i),
            this._rect
        },
        getBoundingRect: function() {
            return this._rect
        },
        setViewRect: function(t, e, n, i) {
            this.transformTo(t, e, n, i),
            this._viewRect = new _n(t, e, n, i)
        },
        transformTo: function(t, e, n, i) {
            var r = this.getBoundingRect(),
            a = this._rawTransformable;
            a.transform = r.calculateTransform(new _n(t, e, n, i)),
            a.decomposeTransform(),
            this._updateTransform()
        },
        setCenter: function(t) {
            t && (this._center = t, this._updateCenterAndZoom())
        },
        setZoom: function(t) {
            t = t || 1;
            var e = this.zoomLimit;
            e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))),
            this._zoom = t,
            this._updateCenterAndZoom()
        },
        getDefaultCenter: function() {
            var t = this.getBoundingRect(),
            e = t.x + t.width / 2,
            n = t.y + t.height / 2;
            return [e, n]
        },
        getCenter: function() {
            return this._center || this.getDefaultCenter()
        },
        getZoom: function() {
            return this._zoom || 1
        },
        getRoamTransform: function() {
            return this._roamTransformable.getLocalTransform()
        },
        _updateCenterAndZoom: function() {
            var t = this._rawTransformable.getLocalTransform(),
            e = this._roamTransformable,
            n = this.getDefaultCenter(),
            i = this.getCenter(),
            r = this.getZoom();
            i = ae([], i, t),
            n = ae([], n, t),
            e.origin = i,
            e.position = [n[0] - i[0], n[1] - i[1]],
            e.scale = [r, r],
            this._updateTransform()
        },
        _updateTransform: function() {
            var t = this._roamTransformable,
            e = this._rawTransformable;
            e.parent = t,
            t.updateTransform(),
            e.updateTransform(),
            Ce(this.transform || (this.transform = []), e.transform || Te()),
            this._rawTransform = e.getLocalTransform(),
            this.invTransform = this.invTransform || [],
            Pe(this.invTransform, this.transform),
            this.decomposeTransform()
        },
        getViewRect: function() {
            return this._viewRect
        },
        getViewRectAfterRoam: function() {
            var t = this.getBoundingRect().clone();
            return t.applyTransform(this.transform),
            t
        },
        dataToPoint: function(t, e, n) {
            var i = e ? this._rawTransform: this.transform;
            return n = n || [],
            i ? Jw(n, t, i) : H(n, t)
        },
        pointToData: function(t) {
            var e = this.invTransform;
            return e ? Jw([], t, e) : [t[0], t[1]]
        },
        convertToPixel: _(Ld, "dataToPoint"),
        convertFromPixel: _(Ld, "pointToData"),
        containPoint: function(t) {
            return this.getViewRectAfterRoam().contain(t[0], t[1])
        }
    },
    c(Ad, Vf);
    var tb = "\x00_ec_interaction_mutex";
    $l({
        type: "takeGlobalCursor",
        event: "globalCursorTaken",
        update: "update"
    },
    function() {}),
    c(Rd, Cf);
    var eb = {
        axisPointer: 1,
        tooltip: 1,
        brush: 1
    };
    ou({
        type: "tree",
        init: function(t, e) {
            this._oldTree,
            this._mainGroup = new gp,
            this._controller = new Rd(e.getZr()),
            this._controllerHost = {
                target: this.group
            },
            this.group.add(this._mainGroup)
        },
        render: function(t, e, n) {
            var i = t.getData(),
            r = t.layoutInfo,
            a = this._mainGroup,
            o = t.get("layout");
            "radial" === o ? a.attr("position", [r.x + r.width / 2, r.y + r.height / 2]) : a.attr("position", [r.x, r.y]),
            this._updateViewCoordSys(t),
            this._updateController(t, e, n);
            var s = this._data,
            l = {
                expandAndCollapse: t.get("expandAndCollapse"),
                layout: o,
                orient: t.getOrient(),
                curvature: t.get("lineStyle.curveness"),
                symbolRotate: t.get("symbolRotate"),
                symbolOffset: t.get("symbolOffset"),
                hoverAnimation: t.get("hoverAnimation"),
                useNameLabel: !0,
                fadeIn: !0
            };
            i.diff(s).add(function(e) {
                qd(i, e) && Zd(i, e, null, a, t, l)
            }).update(function(e, n) {
                var r = s.getItemGraphicEl(n);
                return qd(i, e) ? void Zd(i, e, r, a, t, l) : void(r && Ud(s, n, r, a, t, l))
            }).remove(function(e) {
                var n = s.getItemGraphicEl(e);
                n && Ud(s, e, n, a, t, l)
            }).execute(),
            this._nodeScaleRatio = t.get("nodeScaleRatio"),
            this._updateNodeAndLinkScale(t),
            l.expandAndCollapse === !0 && i.eachItemGraphicEl(function(e, i) {
                e.off("click").on("click",
                function() {
                    n.dispatchAction({
                        type: "treeExpandAndCollapse",
                        seriesId: t.id,
                        dataIndex: i
                    })
                })
            }),
            this._data = i
        },
        _updateViewCoordSys: function(t) {
            var e = t.getData(),
            n = [];
            e.each(function(t) {
                var i = e.getItemLayout(t); ! i || isNaN(i.x) || isNaN(i.y) || n.push([ + i.x, +i.y])
            });
            var i = [],
            r = [];
            _r(n, i, r),
            r[0] - i[0] === 0 && (r[0] += 1, i[0] -= 1),
            r[1] - i[1] === 0 && (r[1] += 1, i[1] -= 1);
            var a = t.coordinateSystem = new Ad;
            a.zoomLimit = t.get("scaleLimit"),
            a.setBoundingRect(i[0], i[1], r[0] - i[0], r[1] - i[1]),
            a.setCenter(t.get("center")),
            a.setZoom(t.get("zoom")),
            this.group.attr({
                position: a.position,
                scale: a.scale
            }),
            this._viewCoordSys = a
        },
        _updateController: function(t, e, n) {
            var i = this._controller,
            r = this._controllerHost,
            a = this.group;
            i.setPointerChecker(function(e, i, r) {
                var o = a.getBoundingRect();
                return o.applyTransform(a.transform),
                o.contain(i, r) && !Yd(e, n, t)
            }),
            i.enable(t.get("roam")),
            r.zoomLimit = t.get("scaleLimit"),
            r.zoom = t.coordinateSystem.getZoom(),
            i.off("pan").off("zoom").on("pan",
            function(e) {
                Pd(r, e.dx, e.dy),
                n.dispatchAction({
                    seriesId: t.id,
                    type: "treeRoam",
                    dx: e.dx,
                    dy: e.dy
                })
            },
            this).on("zoom",
            function(e) {
                Od(r, e.scale, e.originX, e.originY),
                n.dispatchAction({
                    seriesId: t.id,
                    type: "treeRoam",
                    zoom: e.scale,
                    originX: e.originX,
                    originY: e.originY
                }),
                this._updateNodeAndLinkScale(t)
            },
            this)
        },
        _updateNodeAndLinkScale: function(t) {
            var e = t.getData(),
            n = this._getNodeGlobalScale(t),
            i = [n, n];
            e.eachItemGraphicEl(function(t) {
                t.attr("scale", i)
            })
        },
        _getNodeGlobalScale: function(t) {
            var e = t.coordinateSystem;
            if ("view" !== e.type) return 1;
            var n = this._nodeScaleRatio,
            i = e.scale,
            r = i && i[0] || 1,
            a = e.getZoom(),
            o = (a - 1) * n + 1;
            return o / r
        },
        dispose: function() {
            this._controller && this._controller.dispose(),
            this._controllerHost = {}
        },
        remove: function() {
            this._mainGroup.removeAll(),
            this._data = null
        }
    }),
    $l({
        type: "treeExpandAndCollapse",
        event: "treeExpandAndCollapse",
        update: "update"
    },
    function(t, e) {
        e.eachComponent({
            mainType: "series",
            subType: "tree",
            query: t
        },
        function(e) {
            var n = t.dataIndex,
            i = e.getData().tree,
            r = i.getNodeByDataIndex(n);
            r.isExpand = !r.isExpand
        })
    }),
    $l({
        type: "treeRoam",
        event: "treeRoam",
        update: "none"
    },
    function(t, e) {
        e.eachComponent({
            mainType: "series",
            subType: "tree",
            query: t
        },
        function(e) {
            var n = e.coordinateSystem,
            i = Kd(n, t);
            e.setCenter && e.setCenter(i.center),
            e.setZoom && e.setZoom(i.zoom)
        })
    });
    var nb = function(t, e) {
        t.eachSeriesByType("tree",
        function(t) {
            tf(t, e)
        })
    };
    tu(Ow("tree", "circle")),
    Jl(nb),
    iu({
        type: "title",
        layoutMode: {
            type: "box",
            ignoreSize: !0
        },
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 18,
                fontWeight: "bolder",
                color: "#333"
            },
            subtextStyle: {
                color: "#aaa"
            }
        }
    }),
    ru({
        type: "title",
        render: function(t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group,
                r = t.getModel("textStyle"),
                a = t.getModel("subtextStyle"),
                o = t.get("textAlign"),
                s = t.get("textBaseline"),
                l = new Cv({
                    style: Ma({},
                    r, {
                        text: t.get("text"),
                        textFill: r.getTextColor()
                    },
                    {
                        disableBox: !0
                    }),
                    z2: 10
                }),
                u = l.getBoundingRect(),
                h = t.get("subtext"),
                c = new Cv({
                    style: Ma({},
                    a, {
                        text: h,
                        textFill: a.getTextColor(),
                        y: u.height + t.get("itemGap"),
                        textVerticalAlign: "top"
                    },
                    {
                        disableBox: !0
                    }),
                    z2: 10
                }),
                d = t.get("link"),
                f = t.get("sublink"),
                p = t.get("triggerEvent", !0);
                l.silent = !d && !p,
                c.silent = !f && !p,
                d && l.on("click",
                function() {
                    window.open(d, "_" + t.get("target"))
                }),
                f && c.on("click",
                function() {
                    window.open(f, "_" + t.get("subtarget"))
                }),
                l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                }: null,
                i.add(l),
                h && i.add(c);
                var g = i.getBoundingRect(),
                v = t.getBoxLayoutParams();
                v.width = g.width,
                v.height = g.height;
                var m = To(v, {
                    width: n.getWidth(),
                    height: n.getHeight()
                },
                t.get("padding"));
                o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width: "center" === o && (m.x += m.width / 2)),
                s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height: "middle" === s && (m.y += m.height / 2), s = s || "top"),
                i.attr("position", [m.x, m.y]);
                var y = {
                    textAlign: o,
                    textVerticalAlign: s
                };
                l.setStyle(y),
                c.setStyle(y),
                g = i.getBoundingRect();
                var _ = m.margin,
                x = t.getItemStyle(["color", "opacity"]);
                x.fill = t.get("backgroundColor");
                var w = new Fv({
                    shape: {
                        x: g.x - _[3],
                        y: g.y - _[0],
                        width: g.width + _[1] + _[3],
                        height: g.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    },
                    style: x,
                    silent: !0
                });
                aa(w),
                i.add(w)
            }
        }
    }),
    t.version = n_,
    t.dependencies = i_,
    t.PRIORITY = d_,
    t.init = Vl,
    t.connect = Wl,
    t.disConnect = Hl,
    t.disconnect = P_,
    t.dispose = Gl,
    t.getInstanceByDom = Xl,
    t.getInstanceById = Yl,
    t.registerTheme = ql,
    t.registerPreprocessor = jl,
    t.registerProcessor = Zl,
    t.registerPostUpdate = Ul,
    t.registerAction = $l,
    t.registerCoordinateSystem = Kl,
    t.getCoordinateSystemDimensions = Ql,
    t.registerLayout = Jl,
    t.registerVisual = tu,
    t.registerLoading = nu,
    t.extendComponentModel = iu,
    t.extendComponentView = ru,
    t.extendSeriesModel = au,
    t.extendChartView = ou,
    t.setCanvasCreator = su,
    t.registerMap = lu,
    t.getMap = uu,
    t.dataTool = O_,
    t.zrender = hg,
    t.number = gm,
    t.format = bm,
    t.throttle = Ys,
    t.helper = Ex,
    t.matrix = Bf,
    t.vector = Tf,
    t.color = np,
    t.parseGeoJSON = Bx,
    t.parseGeoJson = Wx,
    t.util = Hx,
    t.graphic = Gx,
    t.List = Y_,
    t.Model = Ha,
    t.Axis = Vx,
    t.env = af
});