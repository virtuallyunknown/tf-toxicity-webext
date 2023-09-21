"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // (disabled):node_modules/@tensorflow/tfjs-core/node_modules/node-fetch/browser.js
  var require_browser = __commonJS({
    "(disabled):node_modules/@tensorflow/tfjs-core/node_modules/node-fetch/browser.js"() {
    }
  });

  // (disabled):util
  var require_util = __commonJS({
    "(disabled):util"() {
    }
  });

  // node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js
  var t = function(e2, n2) {
    return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, e3) {
      t2.__proto__ = e3;
    } || function(t2, e3) {
      for (var n3 in e3)
        e3.hasOwnProperty(n3) && (t2[n3] = e3[n3]);
    })(e2, n2);
  };
  function e(e2, n2) {
    function r2() {
      this.constructor = e2;
    }
    t(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
  }
  function n(t2, e2, n2, r2) {
    return new (n2 || (n2 = Promise))(function(o2, a2) {
      function i2(t3) {
        try {
          u2(r2.next(t3));
        } catch (t4) {
          a2(t4);
        }
      }
      function s2(t3) {
        try {
          u2(r2.throw(t3));
        } catch (t4) {
          a2(t4);
        }
      }
      function u2(t3) {
        t3.done ? o2(t3.value) : new n2(function(e3) {
          e3(t3.value);
        }).then(i2, s2);
      }
      u2((r2 = r2.apply(t2, e2 || [])).next());
    });
  }
  function r(t2, e2) {
    var n2, r2, o2, a2, i2 = { label: 0, sent: function() {
      if (1 & o2[0])
        throw o2[1];
      return o2[1];
    }, trys: [], ops: [] };
    return a2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
      return this;
    }), a2;
    function s2(a3) {
      return function(s3) {
        return function(a4) {
          if (n2)
            throw new TypeError("Generator is already executing.");
          for (; i2; )
            try {
              if (n2 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done)
                return o2;
              switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                case 0:
                case 1:
                  o2 = a4;
                  break;
                case 4:
                  return i2.label++, { value: a4[1], done: false };
                case 5:
                  i2.label++, r2 = a4[1], a4 = [0];
                  continue;
                case 7:
                  a4 = i2.ops.pop(), i2.trys.pop();
                  continue;
                default:
                  if (!(o2 = (o2 = i2.trys).length > 0 && o2[o2.length - 1]) && (6 === a4[0] || 2 === a4[0])) {
                    i2 = 0;
                    continue;
                  }
                  if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                    i2.label = a4[1];
                    break;
                  }
                  if (6 === a4[0] && i2.label < o2[1]) {
                    i2.label = o2[1], o2 = a4;
                    break;
                  }
                  if (o2 && i2.label < o2[2]) {
                    i2.label = o2[2], i2.ops.push(a4);
                    break;
                  }
                  o2[2] && i2.ops.pop(), i2.trys.pop();
                  continue;
              }
              a4 = e2.call(t2, i2);
            } catch (t3) {
              a4 = [6, t3], r2 = 0;
            } finally {
              n2 = o2 = 0;
            }
          if (5 & a4[0])
            throw a4[1];
          return { value: a4[0] ? a4[1] : void 0, done: true };
        }([a3, s3]);
      };
    }
  }
  var o = function() {
    function t2(t3) {
      this.global = t3, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags();
    }
    return t2.prototype.setPlatform = function(t3, e2) {
      null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e2 + "."), this.platformName = t3, this.platform = e2;
    }, t2.prototype.registerFlag = function(t3, e2, n2) {
      if (this.flagRegistry[t3] = { evaluationFn: e2, setHook: n2 }, null != this.urlFlags[t3]) {
        var r2 = this.urlFlags[t3];
        console.warn("Setting feature override from URL " + t3 + ": " + r2 + "."), this.set(t3, r2);
      }
    }, t2.prototype.get = function(t3) {
      return t3 in this.flags ? this.flags[t3] : (this.flags[t3] = this.evaluateFlag(t3), this.flags[t3]);
    }, t2.prototype.getNumber = function(t3) {
      return this.get(t3);
    }, t2.prototype.getBool = function(t3) {
      return this.get(t3);
    }, t2.prototype.getFlags = function() {
      return this.flags;
    }, Object.defineProperty(t2.prototype, "features", { get: function() {
      return this.flags;
    }, enumerable: true, configurable: true }), t2.prototype.set = function(t3, e2) {
      if (null == this.flagRegistry[t3])
        throw new Error("Cannot set flag " + t3 + " as it has not been registered.");
      this.flags[t3] = e2, null != this.flagRegistry[t3].setHook && this.flagRegistry[t3].setHook(e2);
    }, t2.prototype.evaluateFlag = function(t3) {
      if (null == this.flagRegistry[t3])
        throw new Error("Cannot evaluate flag '" + t3 + "': no evaluation function found.");
      return this.flagRegistry[t3].evaluationFn();
    }, t2.prototype.setFlags = function(t3) {
      this.flags = Object.assign({}, t3);
    }, t2.prototype.reset = function() {
      this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
    }, t2.prototype.populateURLFlags = function() {
      var t3 = this;
      if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
        var e2, n2, r2 = (e2 = this.global.location.search, n2 = {}, e2.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(t4) {
          for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
            e3[r3 - 1] = arguments[r3];
          return a(n2, e3[0], e3[1]), e3.join("=");
        }), n2);
        if ("tfjsflags" in r2)
          r2.tfjsflags.split(",").forEach(function(e3) {
            var n3 = e3.split(":"), r3 = n3[0], o2 = n3[1];
            t3.urlFlags[r3] = function(t4, e4) {
              if ("true" === (e4 = e4.toLowerCase()) || "false" === e4)
                return "true" === e4;
              if ("" + +e4 === e4)
                return +e4;
              throw new Error("Could not parse value flag value " + e4 + " for flag " + t4 + ".");
            }(r3, o2);
          });
      }
    }, t2;
  }();
  function a(t2, e2, n2) {
    t2[decodeURIComponent(e2)] = decodeURIComponent(n2 || "");
  }
  function i() {
    return s;
  }
  var s = null;
  var u = /* @__PURE__ */ new Map();
  var c = /* @__PURE__ */ new Map();
  function l(t2, e2) {
    var n2 = m(t2, e2);
    return u.get(n2);
  }
  function h(t2) {
    return c.get(t2);
  }
  function f(t2) {
    for (var e2 = u.entries(), n2 = []; ; ) {
      var r2 = e2.next(), o2 = r2.done, a2 = r2.value;
      if (o2)
        break;
      var i2 = a2[0], s2 = a2[1];
      i2.split("_")[0] === t2 && n2.push(s2);
    }
    return n2;
  }
  function d(t2) {
    var e2 = t2.kernelName, n2 = t2.backendName, r2 = m(e2, n2);
    if (u.has(r2))
      throw new Error("The kernel '" + e2 + "' for backend '" + n2 + "' is already registered");
    u.set(r2, t2);
  }
  function p(t2) {
    var e2 = t2.kernelName;
    c.has(e2) && console.warn("Overriding the gradient for '" + e2 + "'"), c.set(e2, t2);
  }
  function m(t2, e2) {
    return e2 + "_" + t2;
  }
  function y(t2) {
    for (var e2 = t2.length, n2 = 0, r2 = 0; e2 > 0; )
      r2 = Math.random() * e2 | 0, n2 = t2[--e2], t2[e2] = t2[r2], t2[r2] = n2;
  }
  function x(t2, e2, n2) {
    return Math.max(t2, Math.min(e2, n2));
  }
  function b(t2) {
    return t2 % 2 == 0 ? t2 : t2 + 1;
  }
  function w(t2) {
    for (var e2 = 0, n2 = 0; n2 < t2.length; n2++)
      e2 += t2[n2];
    return e2;
  }
  function C(t2, e2) {
    if (!t2)
      throw new Error("string" == typeof e2 ? e2 : e2());
  }
  function E(t2, e2, n2) {
    void 0 === n2 && (n2 = ""), C(S(t2, e2), function() {
      return n2 + " Shapes " + t2 + " and " + e2 + " must match";
    });
  }
  function R(t2) {
    C(null != t2, function() {
      return "The input to the tensor constructor must be a non-null value.";
    });
  }
  function I(t2, e2, n2) {
    if (void 0 === e2 && (e2 = []), void 0 === n2 && (n2 = false), null == e2 && (e2 = []), Array.isArray(t2) || V(t2) && !n2)
      for (var r2 = 0; r2 < t2.length; ++r2)
        I(t2[r2], e2, n2);
    else
      e2.push(t2);
    return e2;
  }
  function k(t2) {
    if (0 === t2.length)
      return 1;
    for (var e2 = t2[0], n2 = 1; n2 < t2.length; n2++)
      e2 *= t2[n2];
    return e2;
  }
  function S(t2, e2) {
    if (t2 === e2)
      return true;
    if (null == t2 || null == e2)
      return false;
    if (t2.length !== e2.length)
      return false;
    for (var n2 = 0; n2 < t2.length; n2++)
      if (t2[n2] !== e2[n2])
        return false;
    return true;
  }
  function A(t2) {
    return t2 % 1 == 0;
  }
  function T(t2) {
    if (null != Math.tanh)
      return Math.tanh(t2);
    if (t2 === 1 / 0)
      return 1;
    if (t2 === -1 / 0)
      return -1;
    var e2 = Math.exp(2 * t2);
    return (e2 - 1) / (e2 + 1);
  }
  function D(t2) {
    var e2 = Math.ceil(Math.sqrt(t2));
    return [e2, Math.ceil(t2 / e2)];
  }
  function N(t2, e2) {
    return e2 <= t2.length ? t2 : t2 + " ".repeat(e2 - t2.length);
  }
  function F(t2, e2, n2) {
    return void 0 === e2 && (e2 = function(t3) {
      return 0;
    }), new Promise(function(r2, o2) {
      var a2 = 0, i2 = function() {
        if (t2())
          r2();
        else {
          a2++;
          var s2 = e2(a2);
          null != n2 && a2 >= n2 ? o2() : setTimeout(i2, s2);
        }
      };
      i2();
    });
  }
  function _(t2, e2) {
    for (var n2 = 1, r2 = -1, o2 = 0; o2 < t2.length; ++o2)
      if (t2[o2] >= 0)
        n2 *= t2[o2];
      else if (-1 === t2[o2]) {
        if (-1 !== r2)
          throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r2 + " and dim " + o2);
        r2 = o2;
      } else if (t2[o2] < 0)
        throw Error("Shapes can not be < 0. Found " + t2[o2] + " at dim " + o2);
    if (-1 === r2) {
      if (e2 > 0 && e2 !== n2)
        throw Error("Size(" + e2 + ") must match the product of shape " + t2);
      return t2;
    }
    if (0 === n2)
      throw Error("Cannot infer the missing size in [" + t2 + "] when there are 0 elements");
    if (e2 % n2 != 0)
      throw Error("The implicit shape can't be a fractional number. Got " + e2 + " / " + n2);
    var a2 = t2.slice();
    return a2[r2] = e2 / n2, a2;
  }
  function O(t2, e2) {
    var n2 = e2.length;
    return C((t2 = null == t2 ? e2.map(function(t3, e3) {
      return e3;
    }) : [].concat(t2)).every(function(t3) {
      return t3 >= -n2 && t3 < n2;
    }), function() {
      return "All values in axis param must be in range [-" + n2 + ", " + n2 + ") but got axis " + t2;
    }), C(t2.every(function(t3) {
      return A(t3);
    }), function() {
      return "All values in axis param must be integers but got axis " + t2;
    }), t2.map(function(t3) {
      return t3 < 0 ? n2 + t3 : t3;
    });
  }
  function M(t2, e2) {
    for (var n2 = [], r2 = [], o2 = null != e2 && Array.isArray(e2) && 0 === e2.length, a2 = null == e2 || o2 ? null : O(e2, t2).sort(), i2 = 0, s2 = 0; s2 < t2.length; ++s2) {
      if (null != a2) {
        if (a2[i2] === s2 && 1 !== t2[s2])
          throw new Error("Can't squeeze axis " + s2 + " since its dim '" + t2[s2] + "' is not 1");
        (null == a2[i2] || a2[i2] > s2) && 1 === t2[s2] && (n2.push(t2[s2]), r2.push(s2)), a2[i2] <= s2 && i2++;
      }
      1 !== t2[s2] && (n2.push(t2[s2]), r2.push(s2));
    }
    return { newShape: n2, keptDims: r2 };
  }
  function B(t2, e2) {
    var n2 = null;
    if (null == t2 || "float32" === t2)
      n2 = new Float32Array(e2);
    else if ("int32" === t2)
      n2 = new Int32Array(e2);
    else {
      if ("bool" !== t2)
        throw new Error("Unknown data type " + t2);
      n2 = new Uint8Array(e2);
    }
    return n2;
  }
  function P(t2, e2) {
    var n2 = null;
    if (null == t2 || "float32" === t2)
      n2 = new Float32Array(e2);
    else if ("int32" === t2)
      n2 = new Int32Array(e2);
    else if ("bool" === t2)
      n2 = new Uint8Array(e2);
    else {
      if ("string" !== t2)
        throw new Error("Unknown data type " + t2);
      n2 = new Array(e2);
    }
    return n2;
  }
  function L(t2, e2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var r2 = t2[n2];
      if (isNaN(r2) || !isFinite(r2))
        throw Error("A tensor of type " + e2 + " being uploaded contains " + r2 + ".");
    }
  }
  function W(t2) {
    return "bool" === t2 || "complex64" === t2 || "float32" === t2 || "int32" === t2 || "string" === t2;
  }
  function U(t2, e2) {
    return "complex64" !== e2 && (("float32" !== e2 || "complex64" === t2) && (("int32" !== e2 || "float32" === t2 || "complex64" === t2) && ("bool" !== e2 || "bool" !== t2)));
  }
  function V(t2) {
    return t2 instanceof Float32Array || t2 instanceof Int32Array || t2 instanceof Uint8Array;
  }
  function z(t2) {
    if ("float32" === t2 || "int32" === t2)
      return 4;
    if ("complex64" === t2)
      return 8;
    if ("bool" === t2)
      return 1;
    throw new Error("Unknown dtype " + t2);
  }
  function G(t2) {
    if (null == t2)
      return 0;
    var e2 = 0;
    return t2.forEach(function(t3) {
      return e2 += t3.length;
    }), e2;
  }
  function H(t2) {
    return "string" == typeof t2 || t2 instanceof String;
  }
  function q(t2) {
    return "boolean" == typeof t2;
  }
  function K(t2) {
    return "number" == typeof t2;
  }
  function j(t2) {
    return Array.isArray(t2) ? j(t2[0]) : t2 instanceof Float32Array ? "float32" : t2 instanceof Int32Array || t2 instanceof Uint8Array ? "int32" : K(t2) ? "float32" : H(t2) ? "string" : q(t2) ? "bool" : "float32";
  }
  function X(t2) {
    return !!(t2 && t2.constructor && t2.call && t2.apply);
  }
  function Y(t2, e2) {
    for (var n2 = e2; n2 < t2; ++n2)
      if (t2 % n2 == 0)
        return n2;
    return t2;
  }
  function $(t2) {
    var e2 = t2.length;
    if (e2 < 2)
      return [];
    var n2 = new Array(e2 - 1);
    n2[e2 - 2] = t2[e2 - 1];
    for (var r2 = e2 - 3; r2 >= 0; --r2)
      n2[r2] = n2[r2 + 1] * t2[r2 + 1];
    return n2;
  }
  function Q(t2, e2, n2) {
    if ("string" === e2)
      throw new Error("Cannot convert a string[] to a TypedArray");
    if (Array.isArray(t2) && (t2 = I(t2)), n2 && L(t2, e2), function(t3, e3) {
      return t3 instanceof Float32Array && "float32" === e3 || t3 instanceof Int32Array && "int32" === e3 || t3 instanceof Uint8Array && "bool" === e3;
    }(t2, e2))
      return t2;
    if (null == e2 || "float32" === e2 || "complex64" === e2)
      return new Float32Array(t2);
    if ("int32" === e2)
      return new Int32Array(t2);
    if ("bool" === e2) {
      for (var r2 = new Uint8Array(t2.length), o2 = 0; o2 < r2.length; ++o2)
        0 !== Math.round(t2[o2]) && (r2[o2] = 1);
      return r2;
    }
    throw new Error("Unknown data type " + e2);
  }
  function J(t2, e2) {
    if (0 === t2.length)
      return e2[0];
    var n2 = t2.reduce(function(t3, e3) {
      return t3 * e3;
    });
    if (0 === n2)
      return [];
    if (n2 !== e2.length)
      throw new Error("[" + t2 + "] does not match the input size.");
    return function t3(e3, n3, r2) {
      var o2 = new Array();
      if (1 === n3.length)
        for (var a2 = n3[0], i2 = 0; i2 < a2; i2++)
          o2[i2] = r2[e3 + i2];
      else {
        a2 = n3[0];
        var s2 = n3.slice(1), u2 = s2.reduce(function(t4, e4) {
          return t4 * e4;
        });
        for (i2 = 0; i2 < a2; i2++)
          o2[i2] = t3(e3 + i2 * u2, s2, r2);
      }
      return o2;
    }(0, t2, e2);
  }
  function Z(t2, e2) {
    for (var n2 = tt(t2, e2), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = 1;
    return n2;
  }
  function tt(t2, e2) {
    if (null == e2 || "float32" === e2 || "complex64" === e2)
      return new Float32Array(t2);
    if ("int32" === e2)
      return new Int32Array(t2);
    if ("bool" === e2)
      return new Uint8Array(t2);
    throw new Error("Unknown data type " + e2);
  }
  function et() {
    return i().platform.now();
  }
  function nt(t2) {
    t2.forEach(function(e2) {
      C(Number.isInteger(e2) && e2 >= 0, function() {
        return "Tensor must have a shape comprised of positive integers but got shape [" + t2 + "].";
      });
    });
  }
  function rt(t2, e2) {
    return void 0 === e2 && (e2 = "utf-8"), e2 = e2 || "utf-8", i().platform.encode(t2, e2);
  }
  function ot(t2, e2) {
    return void 0 === e2 && (e2 = "utf-8"), e2 = e2 || "utf-8", i().platform.decode(t2, e2);
  }
  function at(t2, e2, n2) {
    if (0 === e2)
      return 0;
    if (1 === e2)
      return t2[0];
    for (var r2 = t2[t2.length - 1], o2 = 0; o2 < t2.length - 1; ++o2)
      r2 += n2[o2] * t2[o2];
    return r2;
  }
  function it(t2, e2, n2) {
    if (0 === e2)
      return [];
    if (1 === e2)
      return [t2];
    for (var r2 = new Array(e2), o2 = 0; o2 < r2.length - 1; ++o2)
      r2[o2] = Math.floor(t2 / n2[o2]), t2 -= r2[o2] * n2[o2];
    return r2[r2.length - 1] = t2, r2;
  }
  var st = Object.freeze({ shuffle: y, clamp: x, nearestLargerEven: b, sum: w, randUniform: function(t2, e2) {
    var n2 = Math.random();
    return e2 * n2 + (1 - n2) * t2;
  }, distSquared: function(t2, e2) {
    for (var n2 = 0, r2 = 0; r2 < t2.length; r2++) {
      var o2 = Number(t2[r2]) - Number(e2[r2]);
      n2 += o2 * o2;
    }
    return n2;
  }, assert: C, assertShapesMatch: E, assertNonNull: R, flatten: I, sizeFromShape: k, isScalarShape: function(t2) {
    return 0 === t2.length;
  }, arraysEqual: S, isInt: A, tanh: T, sizeToSquarishShape: D, createShuffledIndices: function(t2) {
    for (var e2 = new Uint32Array(t2), n2 = 0; n2 < t2; ++n2)
      e2[n2] = n2;
    return y(e2), e2;
  }, rightPad: N, repeatedTry: F, inferFromImplicitShape: _, parseAxisParam: O, squeezeShape: M, getTypedArrayFromDType: B, getArrayFromDType: P, checkConversionForErrors: L, isValidDtype: W, hasEncodingLoss: U, isTypedArray: V, bytesPerElement: z, bytesFromStringArray: G, isString: H, isBoolean: q, isNumber: K, inferDtype: j, isFunction: X, nearestDivisor: Y, computeStrides: $, toTypedArray: Q, toNestedArray: J, makeOnesTypedArray: Z, makeZerosTypedArray: tt, now: et, assertNonNegativeIntegerDimensions: nt, fetch: function(t2, e2) {
    return i().platform.fetch(t2, e2);
  }, encodeString: rt, decodeString: ot, locToIndex: at, indexToLoc: it });
  var ut = function() {
    function t2(t3, e2) {
      this.backendTimer = t3, this.logger = e2, null == e2 && (this.logger = new ct());
    }
    return t2.prototype.profileKernel = function(t3, e2, n2) {
      var r2, o2 = this, a2 = this.backendTimer.time(function() {
        r2 = n2();
      });
      return r2.forEach(function(n3) {
        n3.data().then(function(r3) {
          !function(t4, e3, n4) {
            if ("float32" !== e3)
              return false;
            for (var r4 = 0; r4 < t4.length; r4++) {
              var o3 = t4[r4];
              if (isNaN(o3) || !isFinite(o3))
                return console.warn("Found " + o3 + " in the result of '" + n4 + "'"), true;
            }
          }(r3, n3.dtype, t3), a2.then(function(a3) {
            var i2 = "";
            null != a3.getExtraProfileInfo && (i2 = a3.getExtraProfileInfo()), o2.logger.logKernelProfile(t3, n3, r3, a3.kernelMs, e2, i2);
          });
        });
      }), r2;
    }, t2;
  }();
  var ct = function() {
    function t2() {
    }
    return t2.prototype.logKernelProfile = function(t3, e2, n2, r2, o2, a2) {
      var i2 = "number" == typeof r2 ? N(r2 + "ms", 9) : r2.error, s2 = N(t3, 25), u2 = e2.rank, c2 = e2.size, l2 = N(e2.shape.toString(), 14), h2 = "";
      for (var f2 in o2) {
        var d2 = o2[f2].shape || e2.shape, p2 = d2.length;
        h2 += f2 + ": " + p2 + "D " + (p2 > 0 ? d2 : "") + " ";
      }
      console.log("%c" + s2 + "	%c" + i2 + "	%c" + u2 + "D " + l2 + "	%c" + c2 + "	%c" + h2 + "	%c" + a2, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
    }, t2;
  }();
  var lt = 20;
  var ht = 3;
  var ft = 7;
  function dt(t2, e2, n2, r2) {
    var o2 = $(e2), a2 = function(t3, e3, n3, r3) {
      var o3 = k(e3), a3 = r3[r3.length - 1], i3 = new Array(a3).fill(0), s3 = e3.length, u3 = "complex64" === n3 ? gt(t3) : t3;
      if (s3 > 1)
        for (var c2 = 0; c2 < o3 / a3; c2++)
          for (var l2 = c2 * a3, h2 = 0; h2 < a3; h2++)
            i3[h2] = Math.max(i3[h2], pt(u3[l2 + h2], 0, n3).length);
      return i3;
    }(t2, e2, n2, o2), i2 = e2.length, s2 = function t3(e3, n3, r3, o3, a3, i3) {
      void 0 === i3 && (i3 = true);
      var s3 = "complex64" === r3 ? 2 : 1, u3 = n3[0], c2 = n3.length;
      if (0 === c2) {
        return "complex64" === r3 ? [pt(gt(e3)[0], 0, r3)] : "bool" === r3 ? [vt(e3[0])] : [e3[0].toString()];
      }
      if (1 === c2) {
        if (u3 > lt) {
          var l2 = ht * s3, h2 = Array.from(e3.slice(0, l2)), f2 = Array.from(e3.slice((u3 - ht) * s3, u3 * s3));
          return "complex64" === r3 && (h2 = gt(h2), f2 = gt(f2)), ["[" + h2.map(function(t4, e4) {
            return pt(t4, a3[e4], r3);
          }).join(", ") + ", ..., " + f2.map(function(t4, e4) {
            return pt(t4, a3[u3 - ht + e4], r3);
          }).join(", ") + "]"];
        }
        return ["[" + ("complex64" === r3 ? gt(e3) : Array.from(e3)).map(function(t4, e4) {
          return pt(t4, a3[e4], r3);
        }).join(", ") + "]"];
      }
      var d2 = n3.slice(1), p2 = o3.slice(1), v = o3[0] * s3, g = [];
      if (u3 > lt) {
        for (var m2 = 0; m2 < ht; m2++) {
          var y2 = (x2 = m2 * v) + v;
          g.push.apply(g, t3(e3.slice(x2, y2), d2, r3, p2, a3, false));
        }
        g.push("...");
        for (m2 = u3 - ht; m2 < u3; m2++) {
          y2 = (x2 = m2 * v) + v;
          g.push.apply(g, t3(e3.slice(x2, y2), d2, r3, p2, a3, m2 === u3 - 1));
        }
      } else
        for (m2 = 0; m2 < u3; m2++) {
          var x2;
          y2 = (x2 = m2 * v) + v;
          g.push.apply(g, t3(e3.slice(x2, y2), d2, r3, p2, a3, m2 === u3 - 1));
        }
      var b2 = 2 === c2 ? "," : "";
      g[0] = "[" + g[0] + b2;
      for (m2 = 1; m2 < g.length - 1; m2++)
        g[m2] = " " + g[m2] + b2;
      var w2 = ",\n";
      for (m2 = 2; m2 < c2; m2++)
        w2 += "\n";
      return g[g.length - 1] = " " + g[g.length - 1] + "]" + (i3 ? "" : w2), g;
    }(t2, e2, n2, o2, a2), u2 = ["Tensor"];
    return r2 && (u2.push("  dtype: " + n2), u2.push("  rank: " + i2), u2.push("  shape: [" + e2 + "]"), u2.push("  values:")), u2.push(s2.map(function(t3) {
      return "    " + t3;
    }).join("\n")), u2.join("\n");
  }
  function pt(t2, e2, n2) {
    return N(Array.isArray(t2) ? parseFloat(t2[0].toFixed(ft)) + " + " + parseFloat(t2[1].toFixed(ft)) + "j" : H(t2) ? "'" + t2 + "'" : "bool" === n2 ? vt(t2) : parseFloat(t2.toFixed(ft)).toString(), e2);
  }
  function vt(t2) {
    return 0 === t2 ? "false" : "true";
  }
  function gt(t2) {
    for (var e2 = [], n2 = 0; n2 < t2.length; n2 += 2)
      e2.push([t2[n2], t2[n2 + 1]]);
    return e2;
  }
  var mt = function() {
    function t2(t3, e2, n2) {
      var r2 = this;
      if (this.dtype = e2, this.shape = t3.slice(), this.size = k(t3), null != n2) {
        var o2 = n2.length;
        C(o2 === this.size, function() {
          return "Length of values '" + o2 + "' does not match the size inferred by the shape '" + r2.size + "'.";
        });
      }
      if ("complex64" === e2)
        throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
      this.values = n2 || P(e2, this.size), this.strides = $(t3);
    }
    return t2.prototype.set = function(t3) {
      for (var e2 = this, n2 = [], r2 = 1; r2 < arguments.length; r2++)
        n2[r2 - 1] = arguments[r2];
      0 === n2.length && (n2 = [0]), C(n2.length === this.rank, function() {
        return "The number of provided coordinates (" + n2.length + ") must match the rank (" + e2.rank + ")";
      });
      var o2 = this.locToIndex(n2);
      this.values[o2] = t3;
    }, t2.prototype.get = function() {
      for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
        t3[e2] = arguments[e2];
      0 === t3.length && (t3 = [0]);
      for (var n2 = 0, r2 = 0, o2 = t3; r2 < o2.length; r2++) {
        var a2 = o2[r2];
        if (a2 < 0 || a2 >= this.shape[n2]) {
          var i2 = "Requested out of range element at " + t3 + ".   Buffer shape=" + this.shape;
          throw new Error(i2);
        }
        n2++;
      }
      for (var s2 = t3[t3.length - 1], u2 = 0; u2 < t3.length - 1; ++u2)
        s2 += this.strides[u2] * t3[u2];
      return this.values[s2];
    }, t2.prototype.locToIndex = function(t3) {
      if (0 === this.rank)
        return 0;
      if (1 === this.rank)
        return t3[0];
      for (var e2 = t3[t3.length - 1], n2 = 0; n2 < t3.length - 1; ++n2)
        e2 += this.strides[n2] * t3[n2];
      return e2;
    }, t2.prototype.indexToLoc = function(t3) {
      if (0 === this.rank)
        return [];
      if (1 === this.rank)
        return [t3];
      for (var e2 = new Array(this.shape.length), n2 = 0; n2 < e2.length - 1; ++n2)
        e2[n2] = Math.floor(t3 / this.strides[n2]), t3 -= e2[n2] * this.strides[n2];
      return e2[e2.length - 1] = t3, e2;
    }, Object.defineProperty(t2.prototype, "rank", { get: function() {
      return this.shape.length;
    }, enumerable: true, configurable: true }), t2.prototype.toTensor = function() {
      return yt().makeTensor(this.values, this.shape, this.dtype);
    }, t2;
  }();
  var yt = null;
  var xt = null;
  var bt = null;
  var wt = function() {
    function t2(t3, e2, n2, r2) {
      this.kept = false, this.isDisposedInternal = false, this.shape = t3.slice(), this.dtype = e2 || "float32", this.size = k(t3), this.strides = $(t3), this.dataId = n2, this.id = r2, this.rankType = this.rank < 5 ? this.rank.toString() : "higher";
    }
    return t2.prototype.flatten = function() {
      return this.throwIfDisposed(), this.as1D();
    }, t2.prototype.asScalar = function() {
      return this.throwIfDisposed(), C(1 === this.size, function() {
        return "The array must have only 1 element.";
      }), this.reshape([]);
    }, t2.prototype.as1D = function() {
      return this.throwIfDisposed(), this.reshape([this.size]);
    }, t2.prototype.as2D = function(t3, e2) {
      return this.throwIfDisposed(), this.reshape([t3, e2]);
    }, t2.prototype.as3D = function(t3, e2, n2) {
      return this.throwIfDisposed(), this.reshape([t3, e2, n2]);
    }, t2.prototype.as4D = function(t3, e2, n2, r2) {
      return this.throwIfDisposed(), this.reshape([t3, e2, n2, r2]);
    }, t2.prototype.as5D = function(t3, e2, n2, r2, o2) {
      return this.throwIfDisposed(), this.reshape([t3, e2, n2, r2, o2]);
    }, t2.prototype.asType = function(t3) {
      return this.throwIfDisposed(), xt.cast(this, t3);
    }, Object.defineProperty(t2.prototype, "rank", { get: function() {
      return this.shape.length;
    }, enumerable: true, configurable: true }), t2.prototype.buffer = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.data()];
            case 1:
              return t3 = e2.sent(), [2, xt.buffer(this.shape, this.dtype, t3)];
          }
        });
      });
    }, t2.prototype.bufferSync = function() {
      return xt.buffer(this.shape, this.dtype, this.dataSync());
    }, t2.prototype.array = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.data()];
            case 1:
              return t3 = e2.sent(), [2, J(this.shape, t3)];
          }
        });
      });
    }, t2.prototype.arraySync = function() {
      return J(this.shape, this.dataSync());
    }, t2.prototype.data = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2;
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return this.throwIfDisposed(), t3 = yt().read(this.dataId), "string" !== this.dtype ? [3, 2] : [4, t3];
            case 1:
              e2 = n2.sent();
              try {
                return [2, e2.map(function(t4) {
                  return ot(t4);
                })];
              } catch (t4) {
                throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
              }
              n2.label = 2;
            case 2:
              return [2, t3];
          }
        });
      });
    }, t2.prototype.dataSync = function() {
      this.throwIfDisposed();
      var t3 = yt().readSync(this.dataId);
      if ("string" === this.dtype)
        try {
          return t3.map(function(t4) {
            return ot(t4);
          });
        } catch (t4) {
          throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
        }
      return t3;
    }, t2.prototype.bytes = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return this.throwIfDisposed(), [4, yt().read(this.dataId)];
            case 1:
              return t3 = e2.sent(), "string" === this.dtype ? [2, t3] : [2, new Uint8Array(t3.buffer)];
          }
        });
      });
    }, t2.prototype.dispose = function() {
      this.isDisposed || (yt().disposeTensor(this), this.isDisposedInternal = true);
    }, Object.defineProperty(t2.prototype, "isDisposed", { get: function() {
      return this.isDisposedInternal;
    }, enumerable: true, configurable: true }), t2.prototype.throwIfDisposed = function() {
      if (this.isDisposed)
        throw new Error("Tensor is disposed.");
    }, t2.prototype.toFloat = function() {
      return this.asType("float32");
    }, t2.prototype.toInt = function() {
      return this.asType("int32");
    }, t2.prototype.toBool = function() {
      return this.asType("bool");
    }, t2.prototype.print = function(t3) {
      return void 0 === t3 && (t3 = false), xt.print(this, t3);
    }, t2.prototype.reshape = function(t3) {
      return this.throwIfDisposed(), xt.reshape(this, t3);
    }, t2.prototype.reshapeAs = function(t3) {
      return this.throwIfDisposed(), this.reshape(t3.shape);
    }, t2.prototype.expandDims = function(t3) {
      return void 0 === t3 && (t3 = 0), xt.expandDims(this, t3);
    }, t2.prototype.cumsum = function(t3, e2, n2) {
      return void 0 === t3 && (t3 = 0), void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false), xt.cumsum(this, t3, e2, n2);
    }, t2.prototype.squeeze = function(t3) {
      return this.throwIfDisposed(), xt.squeeze(this, t3);
    }, t2.prototype.clone = function() {
      return this.throwIfDisposed(), xt.clone(this);
    }, t2.prototype.toString = function(t3) {
      return void 0 === t3 && (t3 = false), dt(this.dataSync(), this.shape, this.dtype, t3);
    }, t2.prototype.gather = function(t3, e2) {
      return void 0 === e2 && (e2 = 0), this.throwIfDisposed(), xt.gather(this, t3, e2);
    }, t2.prototype.matMul = function(t3, e2, n2) {
      return void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false), this.throwIfDisposed(), xt.matMul(this, t3, e2, n2);
    }, t2.prototype.dot = function(t3) {
      return this.throwIfDisposed(), xt.dot(this, t3);
    }, t2.prototype.norm = function(t3, e2, n2) {
      return void 0 === t3 && (t3 = "euclidean"), void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), xt.norm(this, t3, e2, n2);
    }, t2.prototype.slice = function(t3, e2) {
      return this.throwIfDisposed(), xt.slice(this, t3, e2);
    }, t2.prototype.reverse = function(t3) {
      return this.throwIfDisposed(), xt.reverse(this, t3);
    }, t2.prototype.concat = function(e2, n2) {
      return void 0 === n2 && (n2 = 0), this.throwIfDisposed(), e2 instanceof t2 && (e2 = [e2]), xt.concat([this].concat(e2), n2);
    }, t2.prototype.split = function(t3, e2) {
      return void 0 === e2 && (e2 = 0), this.throwIfDisposed(), xt.split(this, t3, e2);
    }, t2.prototype.stack = function(t3, e2) {
      return void 0 === e2 && (e2 = 0), xt.stack([this, t3], e2);
    }, t2.prototype.unstack = function(t3) {
      return void 0 === t3 && (t3 = 0), xt.unstack(this, t3);
    }, t2.prototype.batchNormalization = function(t3, e2, n2, r2, o2) {
      return void 0 === n2 && (n2 = 1e-3), bt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t3, e2, o2, r2, n2);
    }, t2.prototype.all = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.all(this, t3, e2);
    }, t2.prototype.any = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.any(this, t3, e2);
    }, t2.prototype.logSumExp = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.logSumExp(this, t3, e2);
    }, t2.prototype.sum = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.sum(this, t3, e2);
    }, t2.prototype.prod = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.prod(this, t3, e2);
    }, t2.prototype.mean = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.mean(this, t3, e2);
    }, t2.prototype.min = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.min(this, t3, e2);
    }, t2.prototype.max = function(t3, e2) {
      return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.max(this, t3, e2);
    }, t2.prototype.argMin = function(t3) {
      return void 0 === t3 && (t3 = null), this.throwIfDisposed(), xt.argMin(this, t3);
    }, t2.prototype.argMax = function(t3) {
      return void 0 === t3 && (t3 = null), this.throwIfDisposed(), xt.argMax(this, t3);
    }, t2.prototype.cast = function(t3) {
      return this.throwIfDisposed(), xt.cast(this, t3);
    }, t2.prototype.addStrict = function(t3) {
      return this.throwIfDisposed(), xt.addStrict(this, t3);
    }, t2.prototype.atan2 = function(t3) {
      return this.throwIfDisposed(), xt.atan2(this, t3);
    }, t2.prototype.sub = function(t3) {
      return this.throwIfDisposed(), xt.sub(this, t3);
    }, t2.prototype.subStrict = function(t3) {
      return this.throwIfDisposed(), xt.subStrict(this, t3);
    }, t2.prototype.pow = function(t3) {
      return this.throwIfDisposed(), xt.pow(this, t3);
    }, t2.prototype.powStrict = function(t3) {
      return this.throwIfDisposed(), xt.powStrict(this, t3);
    }, t2.prototype.mul = function(t3) {
      return this.throwIfDisposed(), xt.mul(this, t3);
    }, t2.prototype.mulStrict = function(t3) {
      return this.throwIfDisposed(), xt.mulStrict(this, t3);
    }, t2.prototype.floorDiv = function(t3) {
      return this.throwIfDisposed(), xt.floorDiv(this, t3);
    }, t2.prototype.divStrict = function(t3) {
      return this.throwIfDisposed(), xt.divStrict(this, t3);
    }, t2.prototype.minimum = function(t3) {
      return this.throwIfDisposed(), xt.minimum(this, t3);
    }, t2.prototype.minimumStrict = function(t3) {
      return this.throwIfDisposed(), xt.minimumStrict(this, t3);
    }, t2.prototype.maximum = function(t3) {
      return this.throwIfDisposed(), xt.maximum(this, t3);
    }, t2.prototype.maximumStrict = function(t3) {
      return this.throwIfDisposed(), xt.maximumStrict(this, t3);
    }, t2.prototype.mod = function(t3) {
      return this.throwIfDisposed(), xt.mod(this, t3);
    }, t2.prototype.modStrict = function(t3) {
      return this.throwIfDisposed(), xt.modStrict(this, t3);
    }, t2.prototype.squaredDifferenceStrict = function(t3) {
      return this.throwIfDisposed(), xt.squaredDifferenceStrict(this, t3);
    }, t2.prototype.notEqual = function(t3) {
      return this.throwIfDisposed(), xt.notEqual(this, t3);
    }, t2.prototype.notEqualStrict = function(t3) {
      return this.throwIfDisposed(), xt.notEqualStrict(this, t3);
    }, t2.prototype.less = function(t3) {
      return this.throwIfDisposed(), xt.less(this, t3);
    }, t2.prototype.lessStrict = function(t3) {
      return this.throwIfDisposed(), xt.lessStrict(this, t3);
    }, t2.prototype.equal = function(t3) {
      return this.throwIfDisposed(), xt.equal(this, t3);
    }, t2.prototype.equalStrict = function(t3) {
      return this.throwIfDisposed(), xt.equalStrict(this, t3);
    }, t2.prototype.lessEqual = function(t3) {
      return this.throwIfDisposed(), xt.lessEqual(this, t3);
    }, t2.prototype.lessEqualStrict = function(t3) {
      return this.throwIfDisposed(), xt.lessEqualStrict(this, t3);
    }, t2.prototype.greater = function(t3) {
      return this.throwIfDisposed(), xt.greater(this, t3);
    }, t2.prototype.greaterStrict = function(t3) {
      return this.throwIfDisposed(), xt.greaterStrict(this, t3);
    }, t2.prototype.greaterEqual = function(t3) {
      return this.throwIfDisposed(), xt.greaterEqual(this, t3);
    }, t2.prototype.greaterEqualStrict = function(t3) {
      return this.throwIfDisposed(), xt.greaterEqualStrict(this, t3);
    }, t2.prototype.logicalAnd = function(t3) {
      return this.throwIfDisposed(), xt.logicalAnd(this, t3);
    }, t2.prototype.logicalOr = function(t3) {
      return this.throwIfDisposed(), xt.logicalOr(this, t3);
    }, t2.prototype.logicalNot = function() {
      return this.throwIfDisposed(), xt.logicalNot(this);
    }, t2.prototype.logicalXor = function(t3) {
      return this.throwIfDisposed(), xt.logicalXor(this, t3);
    }, t2.prototype.where = function(t3, e2) {
      return this.throwIfDisposed(), xt.where(t3, this, e2);
    }, t2.prototype.neg = function() {
      return this.throwIfDisposed(), xt.neg(this);
    }, t2.prototype.ceil = function() {
      return this.throwIfDisposed(), xt.ceil(this);
    }, t2.prototype.floor = function() {
      return this.throwIfDisposed(), xt.floor(this);
    }, t2.prototype.sign = function() {
      return this.throwIfDisposed(), xt.sign(this);
    }, t2.prototype.isNaN = function() {
      return this.throwIfDisposed(), xt.isNaN(this);
    }, t2.prototype.isInf = function() {
      return this.throwIfDisposed(), xt.isInf(this);
    }, t2.prototype.isFinite = function() {
      return this.throwIfDisposed(), xt.isFinite(this);
    }, t2.prototype.exp = function() {
      return this.throwIfDisposed(), xt.exp(this);
    }, t2.prototype.expm1 = function() {
      return this.throwIfDisposed(), xt.expm1(this);
    }, t2.prototype.log = function() {
      return this.throwIfDisposed(), xt.log(this);
    }, t2.prototype.log1p = function() {
      return this.throwIfDisposed(), xt.log1p(this);
    }, t2.prototype.sqrt = function() {
      return this.throwIfDisposed(), xt.sqrt(this);
    }, t2.prototype.rsqrt = function() {
      return this.throwIfDisposed(), xt.rsqrt(this);
    }, t2.prototype.square = function() {
      return this.throwIfDisposed(), xt.square(this);
    }, t2.prototype.reciprocal = function() {
      return this.throwIfDisposed(), xt.reciprocal(this);
    }, t2.prototype.abs = function() {
      return this.throwIfDisposed(), xt.abs(this);
    }, t2.prototype.clipByValue = function(t3, e2) {
      return this.throwIfDisposed(), xt.clipByValue(this, t3, e2);
    }, t2.prototype.relu = function() {
      return this.throwIfDisposed(), xt.relu(this);
    }, t2.prototype.relu6 = function() {
      return this.throwIfDisposed(), xt.relu6(this);
    }, t2.prototype.elu = function() {
      return this.throwIfDisposed(), xt.elu(this);
    }, t2.prototype.selu = function() {
      return this.throwIfDisposed(), xt.selu(this);
    }, t2.prototype.leakyRelu = function(t3) {
      return void 0 === t3 && (t3 = 0.2), this.throwIfDisposed(), xt.leakyRelu(this, t3);
    }, t2.prototype.prelu = function(t3) {
      return this.throwIfDisposed(), xt.prelu(this, t3);
    }, t2.prototype.sigmoid = function() {
      return this.throwIfDisposed(), xt.sigmoid(this);
    }, t2.prototype.logSigmoid = function() {
      return this.throwIfDisposed(), xt.logSigmoid(this);
    }, t2.prototype.softplus = function() {
      return this.throwIfDisposed(), xt.softplus(this);
    }, t2.prototype.zerosLike = function() {
      return this.throwIfDisposed(), xt.zerosLike(this);
    }, t2.prototype.onesLike = function() {
      return this.throwIfDisposed(), xt.onesLike(this);
    }, t2.prototype.sin = function() {
      return this.throwIfDisposed(), xt.sin(this);
    }, t2.prototype.cos = function() {
      return this.throwIfDisposed(), xt.cos(this);
    }, t2.prototype.tan = function() {
      return this.throwIfDisposed(), xt.tan(this);
    }, t2.prototype.asin = function() {
      return this.throwIfDisposed(), xt.asin(this);
    }, t2.prototype.acos = function() {
      return this.throwIfDisposed(), xt.acos(this);
    }, t2.prototype.atan = function() {
      return this.throwIfDisposed(), xt.atan(this);
    }, t2.prototype.sinh = function() {
      return this.throwIfDisposed(), xt.sinh(this);
    }, t2.prototype.cosh = function() {
      return this.throwIfDisposed(), xt.cosh(this);
    }, t2.prototype.tanh = function() {
      return this.throwIfDisposed(), xt.tanh(this);
    }, t2.prototype.asinh = function() {
      return this.throwIfDisposed(), xt.asinh(this);
    }, t2.prototype.acosh = function() {
      return this.throwIfDisposed(), xt.acosh(this);
    }, t2.prototype.atanh = function() {
      return this.throwIfDisposed(), xt.atanh(this);
    }, t2.prototype.erf = function() {
      return this.throwIfDisposed(), xt.erf(this);
    }, t2.prototype.round = function() {
      return this.throwIfDisposed(), xt.round(this);
    }, t2.prototype.step = function(t3) {
      return void 0 === t3 && (t3 = 0), this.throwIfDisposed(), xt.step(this, t3);
    }, t2.prototype.softmax = function(t3) {
      return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), xt.softmax(this, t3);
    }, t2.prototype.logSoftmax = function(t3) {
      return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), xt.logSoftmax(this, t3);
    }, t2.prototype.resizeBilinear = function(t3, e2) {
      return void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.image.resizeBilinear(this, t3, e2);
    }, t2.prototype.resizeNearestNeighbor = function(t3, e2) {
      return void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.image.resizeNearestNeighbor(this, t3, e2);
    }, t2.prototype.conv1d = function(t3, e2, n2, r2, o2, a2) {
      return void 0 === r2 && (r2 = "NWC"), void 0 === o2 && (o2 = 1), this.throwIfDisposed(), xt.conv1d(this, t3, e2, n2, r2, o2, a2);
    }, t2.prototype.conv2d = function(t3, e2, n2, r2, o2, a2) {
      return void 0 === r2 && (r2 = "NHWC"), void 0 === o2 && (o2 = [1, 1]), this.throwIfDisposed(), xt.conv2d(this, t3, e2, n2, r2, o2, a2);
    }, t2.prototype.conv2dTranspose = function(t3, e2, n2, r2, o2) {
      return this.throwIfDisposed(), xt.conv2dTranspose(this, t3, e2, n2, r2, o2);
    }, t2.prototype.depthwiseConv2D = function(t3, e2, n2, r2, o2, a2) {
      return void 0 === r2 && (r2 = "NHWC"), void 0 === o2 && (o2 = [1, 1]), this.throwIfDisposed(), xt.depthwiseConv2d(this, t3, e2, n2, r2, o2, a2);
    }, t2.prototype.separableConv2d = function(t3, e2, n2, r2, o2, a2) {
      return void 0 === o2 && (o2 = [1, 1]), void 0 === a2 && (a2 = "NHWC"), this.throwIfDisposed(), xt.separableConv2d(this, t3, e2, n2, r2, o2, a2);
    }, t2.prototype.avgPool = function(t3, e2, n2, r2) {
      return this.throwIfDisposed(), xt.avgPool(this, t3, e2, n2, r2);
    }, t2.prototype.maxPool = function(t3, e2, n2, r2) {
      return this.throwIfDisposed(), xt.maxPool(this, t3, e2, n2, r2);
    }, t2.prototype.localResponseNormalization = function(t3, e2, n2, r2) {
      return void 0 === t3 && (t3 = 5), void 0 === e2 && (e2 = 1), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 0.5), xt.localResponseNormalization(this, t3, e2, n2, r2);
    }, t2.prototype.pool = function(t3, e2, n2, r2, o2) {
      return this.throwIfDisposed(), xt.pool(this, t3, e2, n2, r2, o2);
    }, t2.prototype.variable = function(t3, e2, n2) {
      return void 0 === t3 && (t3 = true), this.throwIfDisposed(), yt().makeVariable(this, t3, e2, n2);
    }, t2.prototype.unsortedSegmentSum = function(t3, e2) {
      return this.throwIfDisposed(), xt.unsortedSegmentSum(this, t3, e2);
    }, t2.prototype.batchToSpaceND = function(t3, e2) {
      return this.throwIfDisposed(), xt.batchToSpaceND(this, t3, e2);
    }, t2.prototype.spaceToBatchND = function(t3, e2) {
      return this.throwIfDisposed(), xt.spaceToBatchND(this, t3, e2);
    }, t2.prototype.topk = function(t3, e2) {
      return void 0 === t3 && (t3 = 1), void 0 === e2 && (e2 = true), this.throwIfDisposed(), xt.topk(this, t3, e2);
    }, t2.prototype.stridedSlice = function(t3, e2, n2, r2, o2, a2, i2, s2) {
      return void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === i2 && (i2 = 0), void 0 === s2 && (s2 = 0), this.throwIfDisposed(), xt.stridedSlice(this, t3, e2, n2, r2, o2, a2, i2, s2);
    }, t2.prototype.depthToSpace = function(t3, e2) {
      return this.throwIfDisposed(), xt.depthToSpace(this, t3, e2);
    }, t2.prototype.fft = function() {
      return this.throwIfDisposed(), xt.spectral.fft(this);
    }, t2.prototype.ifft = function() {
      return this.throwIfDisposed(), xt.spectral.ifft(this);
    }, t2.prototype.rfft = function() {
      return this.throwIfDisposed(), xt.spectral.rfft(this);
    }, t2.prototype.irfft = function() {
      return this.throwIfDisposed(), xt.spectral.irfft(this);
    }, t2;
  }();
  Object.defineProperty(wt, Symbol.hasInstance, { value: function(t2) {
    return !!t2 && null != t2.dataId && null != t2.shape && null != t2.dtype;
  } });
  var Ct;
  var Et;
  var Rt;
  var It;
  var kt;
  var St = function(t2) {
    function n2(e2, n3, r2, o2) {
      var a2 = t2.call(this, e2.shape, e2.dtype, e2.dataId, o2) || this;
      return a2.trainable = n3, a2.name = r2, a2;
    }
    return e(n2, t2), n2.prototype.assign = function(t3) {
      if (t3.dtype !== this.dtype)
        throw new Error("dtype of the new value (" + t3.dtype + ") and previous value (" + this.dtype + ") must match");
      if (!S(t3.shape, this.shape))
        throw new Error("shape of the new value (" + t3.shape + ") and previous value (" + this.shape + ") must match");
      yt().disposeTensor(this), this.dataId = t3.dataId, yt().incRef(this, null);
    }, n2.prototype.dispose = function() {
      yt().disposeVariable(this), this.isDisposedInternal = true;
    }, n2;
  }(wt);
  Object.defineProperty(St, Symbol.hasInstance, { value: function(t2) {
    return t2 instanceof wt && null != t2.assign && t2.assign instanceof Function;
  } }), function(t2) {
    t2.R0 = "R0", t2.R1 = "R1", t2.R2 = "R2", t2.R3 = "R3", t2.R4 = "R4", t2.R5 = "R5", t2.R6 = "R6";
  }(Ct || (Ct = {})), function(t2) {
    t2.float32 = "float32", t2.int32 = "int32", t2.bool = "int32", t2.complex64 = "complex64";
  }(Et || (Et = {})), function(t2) {
    t2.float32 = "float32", t2.int32 = "int32", t2.bool = "bool", t2.complex64 = "complex64";
  }(Rt || (Rt = {})), function(t2) {
    t2.float32 = "float32", t2.int32 = "float32", t2.bool = "float32", t2.complex64 = "complex64";
  }(It || (It = {})), function(t2) {
    t2.float32 = "complex64", t2.int32 = "complex64", t2.bool = "complex64", t2.complex64 = "complex64";
  }(kt || (kt = {}));
  var At = { float32: It, int32: Et, bool: Rt, complex64: kt };
  function Tt(t2, e2) {
    if ("string" === t2 || "string" === e2) {
      if ("string" === t2 && "string" === e2)
        return "string";
      throw new Error("Can not upcast " + t2 + " with " + e2);
    }
    return At[t2][e2];
  }
  function Dt(t2) {
    return Tt(t2, "int32");
  }
  function Nt(t2, e2) {
    if (t2.dtype === e2.dtype)
      return [t2, e2];
    var n2 = Tt(t2.dtype, e2.dtype);
    return [t2.cast(n2), e2.cast(n2)];
  }
  function Ft(t2, e2) {
    C(t2.dtype === e2.dtype, function() {
      return "The dtypes of the first(" + t2.dtype + ") and second(" + e2.dtype + ") input must match";
    });
  }
  function _t(t2) {
    var e2 = [];
    return function t3(e3, n2, r2) {
      if (null == e3)
        return;
      if (e3 instanceof wt)
        return void n2.push(e3);
      if (o2 = e3, !Array.isArray(o2) && "object" != typeof o2)
        return;
      var o2;
      var a2 = e3;
      for (var i2 in a2) {
        var s2 = a2[i2];
        r2.has(s2) || (r2.add(s2), t3(s2, n2, r2));
      }
    }(t2, e2, /* @__PURE__ */ new Set()), e2;
  }
  var Ot;
  var Mt = Object.freeze({ makeTypesMatch: Nt, assertTypesMatch: Ft, isTensorInList: function(t2, e2) {
    return e2.some(function(e3) {
      return e3.id === t2.id;
    });
  }, getTensorsInContainer: _t });
  var Bt = function() {
    function t2() {
      this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = /* @__PURE__ */ new WeakMap(), this.profiling = false, this.activeProfile = { newBytes: 0, newTensors: 0, peakBytes: 0, kernels: [], result: null };
    }
    return t2.prototype.dispose = function() {
      for (var t3 in this.registeredVariables)
        this.registeredVariables[t3].dispose();
    }, t2;
  }();
  var Pt = function() {
    function t2(t3) {
      this.ENV = t3, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new Bt();
    }
    return t2.prototype.ready = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2, n2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (null != this.pendingBackendInit)
                return [2, this.pendingBackendInit.then(function() {
                })];
              if (null != this.backendInstance)
                return [2];
              t3 = this.getSortedBackends(), e2 = 0, r2.label = 1;
            case 1:
              return e2 < t3.length ? (n2 = t3[e2], [4, this.initializeBackend(n2).success]) : [3, 5];
            case 2:
              return r2.sent() ? [4, this.setBackend(n2)] : [3, 4];
            case 3:
              return r2.sent(), [2];
            case 4:
              return e2++, [3, 1];
            case 5:
              throw new Error("Could not initialize any backends, all backend initializations failed.");
          }
        });
      });
    }, Object.defineProperty(t2.prototype, "backend", { get: function() {
      if (null != this.pendingBackendInit)
        throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
      if (null == this.backendInstance) {
        var t3 = this.initializeBackendsAndReturnBest(), e2 = t3.name;
        if (t3.asyncInit)
          throw new Error("The highest priority backend '" + e2 + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
        this.setBackend(e2);
      }
      return this.backendInstance;
    }, enumerable: true, configurable: true }), t2.prototype.backendNames = function() {
      return Object.keys(this.registryFactory);
    }, t2.prototype.findBackend = function(t3) {
      if (!(t3 in this.registry)) {
        if (!(t3 in this.registryFactory))
          return null;
        if (this.initializeBackend(t3).asyncInit)
          return null;
      }
      return this.registry[t3];
    }, t2.prototype.findBackendFactory = function(t3) {
      return t3 in this.registryFactory ? this.registryFactory[t3].factory : null;
    }, t2.prototype.registerBackend = function(t3, e2, n2) {
      return void 0 === n2 && (n2 = 1), t3 in this.registryFactory ? (console.warn(t3 + " backend was already registered. Reusing existing backend factory."), false) : (this.registryFactory[t3] = { factory: e2, priority: n2 }, true);
    }, t2.prototype.setBackend = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (null == this.registryFactory[t3])
                throw new Error("Backend name '" + t3 + "' not found in registry");
              return this.backendName = t3, null != this.registry[t3] ? [3, 4] : (this.backendInstance = null, e2 = this.initializeBackend(t3), n2 = e2.success, e2.asyncInit ? [4, n2] : [3, 2]);
            case 1:
              return o2 = r2.sent(), [3, 3];
            case 2:
              o2 = n2, r2.label = 3;
            case 3:
              if (!o2)
                return [2, false];
              r2.label = 4;
            case 4:
              return this.backendInstance = this.registry[t3], this.setupRegisteredKernels(), this.profiler = new ut(this.backendInstance), [2, true];
          }
        });
      });
    }, t2.prototype.setupRegisteredKernels = function() {
      var t3 = this;
      f(this.backendName).forEach(function(e2) {
        null != e2.setupFunc && e2.setupFunc(t3.backendInstance);
      });
    }, t2.prototype.disposeRegisteredKernels = function(t3) {
      var e2 = this;
      f(t3).forEach(function(n2) {
        null != n2.disposeFunc && n2.disposeFunc(e2.registry[t3]);
      });
    }, t2.prototype.initializeBackend = function(t3) {
      var e2 = this, n2 = this.registryFactory[t3];
      if (null == n2)
        throw new Error("Cannot initialize backend " + t3 + ", no registration found.");
      try {
        var r2 = n2.factory();
        if (Promise.resolve(r2) === r2) {
          var o2 = ++this.pendingBackendInitId, a2 = r2.then(function(n3) {
            return !(o2 < e2.pendingBackendInitId) && (e2.registry[t3] = n3, e2.pendingBackendInit = null, true);
          }).catch(function(n3) {
            return !(o2 < e2.pendingBackendInitId) && (e2.pendingBackendInit = null, console.warn("Initialization of backend " + t3 + " failed"), console.warn(n3.stack || n3.message), false);
          });
          return this.pendingBackendInit = a2, { success: a2, asyncInit: true };
        }
        return this.registry[t3] = r2, { success: true, asyncInit: false };
      } catch (e3) {
        return console.warn("Initialization of backend " + t3 + " failed"), console.warn(e3.stack || e3.message), { success: false, asyncInit: false };
      }
    }, t2.prototype.removeBackend = function(t3) {
      if (!(t3 in this.registryFactory))
        throw new Error(t3 + " backend not found in registry");
      this.backendName === t3 && null != this.pendingBackendInit && this.pendingBackendInitId++, t3 in this.registry && (this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3]), delete this.registryFactory[t3], this.backendName === t3 && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null);
    }, t2.prototype.getSortedBackends = function() {
      var t3 = this;
      if (0 === Object.keys(this.registryFactory).length)
        throw new Error("No backend found in registry.");
      return Object.keys(this.registryFactory).sort(function(e2, n2) {
        return t3.registryFactory[n2].priority - t3.registryFactory[e2].priority;
      });
    }, t2.prototype.initializeBackendsAndReturnBest = function() {
      for (var t3 = this.getSortedBackends(), e2 = 0; e2 < t3.length; e2++) {
        var n2 = t3[e2], r2 = this.initializeBackend(n2), o2 = r2.success, a2 = r2.asyncInit;
        if (a2 || o2)
          return { name: n2, asyncInit: a2 };
      }
      throw new Error("Could not initialize any backends, all backend initializations failed.");
    }, t2.prototype.moveData = function(t3, e2) {
      var n2 = this.state.tensorInfo.get(e2), r2 = n2.backend, o2 = this.readSync(e2);
      r2.disposeData(e2), n2.backend = t3, t3.move(e2, o2, n2.shape, n2.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
    }, t2.prototype.tidy = function(t3, e2) {
      var n2, r2 = this, o2 = null;
      if (null == e2) {
        if ("function" != typeof t3)
          throw new Error("Please provide a function to tidy()");
        e2 = t3;
      } else {
        if ("string" != typeof t3 && !(t3 instanceof String))
          throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
        if ("function" != typeof e2)
          throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
        o2 = t3;
      }
      return this.scopedRun(function() {
        return r2.startScope(o2);
      }, function() {
        return r2.endScope(n2);
      }, function() {
        return (n2 = e2()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n2;
      });
    }, t2.prototype.scopedRun = function(t3, e2, n2) {
      t3();
      try {
        var r2 = n2();
        return e2(), r2;
      } catch (t4) {
        throw e2(), t4;
      }
    }, t2.prototype.nextTensorId = function() {
      return t2.nextTensorId++;
    }, t2.prototype.nextVariableId = function() {
      return t2.nextVariableId++;
    }, t2.prototype.clone = function(t3) {
      var e2 = this.makeTensorFromDataId(t3.dataId, t3.shape, t3.dtype), n2 = { x: t3 };
      return this.addTapeNode(this.state.activeScope.name, n2, [e2], function(t4) {
        return { x: function() {
          return t4.toFloat();
        } };
      }, [], {}), e2;
    }, t2.prototype.runKernel = function(t3, e2, n2, r2, o2) {
      return this.runKernelFunc(null, e2, null, t3, n2, r2, o2);
    }, t2.prototype.shouldCheckForMemLeaks = function() {
      return this.ENV.getBool("IS_TEST");
    }, t2.prototype.checkKernelForMemLeak = function(t3, e2, n2) {
      var r2 = this.backend.numDataIds(), o2 = 0;
      n2.forEach(function(t4) {
        o2 += "complex64" === t4.dtype ? 3 : 1;
      });
      var a2 = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1], i2 = r2 - e2 - o2 - a2;
      if (i2 > 0)
        throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + i2 + " data ids) after running '" + t3 + "'");
    }, t2.prototype.runKernelFunc = function(t3, e2, n2, r2, o2, a2, i2) {
      var s2, u2 = this, c2 = [], h2 = this.isTapeOn();
      null == r2 && (r2 = null != this.state.activeScope ? this.state.activeScope.name : "");
      var f2, d2 = this.state.numBytes, p2 = this.state.numTensors;
      this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
      var v, g = l(r2, this.backendName);
      if (null != g)
        f2 = function() {
          var t4 = u2.backend.numDataIds();
          v = g.kernelFunc({ inputs: e2, attrs: o2, backend: u2.backend });
          var n3 = Array.isArray(v) ? v : [v];
          u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(r2, t4, n3);
          var s3 = n3.map(function(t5) {
            var e3 = t5.dataId, n4 = t5.shape, r3 = t5.dtype;
            return u2.makeTensorFromDataId(e3, n4, r3);
          });
          if (h2) {
            var l2 = u2.getTensorsForGradient(r2, e2, s3);
            if (null == l2) {
              null == i2 && (i2 = []);
              var f3 = s3.filter(function(t5, e3) {
                return i2[e3];
              });
              l2 = (a2 || []).slice().concat(f3);
            }
            c2 = u2.saveTensorsForBackwardMode(l2);
          }
          return s3;
        };
      else {
        var m2 = function(t4) {
          h2 && (c2 = t4.map(function(t5) {
            return u2.keep(u2.clone(t5));
          }));
        };
        f2 = function() {
          var e3 = u2.backend.numDataIds();
          v = u2.tidy(function() {
            return t3(u2.backend, m2);
          });
          var n3 = Array.isArray(v) ? v : [v];
          return u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(r2, e3, n3), n3;
        };
      }
      return this.scopedRun(function() {
        return u2.state.kernelDepth++;
      }, function() {
        return u2.state.kernelDepth--;
      }, function() {
        s2 = u2.ENV.getBool("DEBUG") ? u2.profiler.profileKernel(r2, e2, function() {
          return f2();
        }) : f2();
      }), h2 && this.addTapeNode(r2, e2, s2, n2, c2, o2), this.state.profiling && this.state.activeProfile.kernels.push({ name: r2, bytesAdded: this.state.numBytes - d2, totalBytesSnapshot: this.state.numBytes, tensorsAdded: this.state.numTensors - p2, totalTensorsSnapshot: this.state.numTensors, inputShapes: Object.keys(e2).map(function(t4) {
        return e2[t4].shape;
      }), outputShapes: s2.map(function(t4) {
        return t4.shape;
      }) }), Array.isArray(v) ? s2 : s2[0];
    }, t2.prototype.saveTensorsForBackwardMode = function(t3) {
      var e2 = this;
      return t3.map(function(t4) {
        return e2.keep(e2.clone(t4));
      });
    }, t2.prototype.getTensorsForGradient = function(t3, e2, n2) {
      var r2 = h(t3);
      if (null != r2) {
        var o2 = r2.inputsToSave || [], a2 = r2.outputsToSave || [], i2 = void 0;
        r2.saveAllInputs ? (C(Array.isArray(e2), function() {
          return "saveAllInputs is true, expected inputs to be an array.";
        }), i2 = Object.keys(e2).map(function(t4) {
          return e2[t4];
        })) : i2 = o2.map(function(t4) {
          return e2[t4];
        });
        var s2 = n2.filter(function(t4, e3) {
          return a2[e3];
        });
        return i2.concat(s2);
      }
      return null;
    }, t2.prototype.makeTensor = function(t3, e2, n2, r2) {
      if (null == t3)
        throw new Error("Values passed to engine.makeTensor() are null");
      n2 = n2 || "float32", r2 = r2 || this.backend;
      var o2 = t3;
      "string" === n2 && H(t3[0]) && (o2 = t3.map(function(t4) {
        return rt(t4);
      }));
      var a2 = r2.write(o2, e2, n2), i2 = new wt(e2, n2, a2, this.nextTensorId());
      if (this.incRef(i2, r2), "string" === n2) {
        var s2 = this.state.tensorInfo.get(a2), u2 = G(o2);
        this.state.numBytes += u2 - s2.bytes, s2.bytes = u2;
      }
      return i2;
    }, t2.prototype.makeTensorFromDataId = function(t3, e2, n2, r2) {
      var o2 = new wt(e2, n2 = n2 || "float32", t3, this.nextTensorId());
      return this.incRef(o2, r2), o2;
    }, t2.prototype.makeVariable = function(t3, e2, n2, r2) {
      void 0 === e2 && (e2 = true), n2 = n2 || this.nextVariableId().toString(), null != r2 && r2 !== t3.dtype && (t3 = t3.asType(r2));
      var o2 = new St(t3, e2, n2, this.nextTensorId());
      if (null != this.state.registeredVariables[o2.name])
        throw new Error("Variable with name " + o2.name + " was already registered");
      return this.state.registeredVariables[o2.name] = o2, this.incRef(o2, this.backend), o2;
    }, t2.prototype.incRef = function(t3, e2) {
      var n2 = this.state.tensorInfo.has(t3.dataId) ? this.state.tensorInfo.get(t3.dataId).refCount : 0;
      if (this.state.numTensors++, "string" === t3.dtype && this.state.numStringTensors++, 0 === n2) {
        this.state.numDataBuffers++;
        var r2 = 0;
        "complex64" !== t3.dtype && "string" !== t3.dtype && (r2 = t3.size * z(t3.dtype)), this.state.tensorInfo.set(t3.dataId, { backend: e2 || this.backend, dtype: t3.dtype, shape: t3.shape, bytes: r2, refCount: 0 }), this.state.numBytes += r2;
      }
      this.state.tensorInfo.get(t3.dataId).refCount++, t3 instanceof St || this.track(t3);
    }, t2.prototype.disposeTensor = function(t3) {
      if (this.state.tensorInfo.has(t3.dataId)) {
        this.state.numTensors--, "string" === t3.dtype && this.state.numStringTensors--;
        var e2 = this.state.tensorInfo.get(t3.dataId);
        e2.refCount <= 1 ? ("complex64" !== t3.dtype && (this.state.numBytes -= e2.bytes), this.state.numDataBuffers--, e2.backend.disposeData(t3.dataId), this.state.tensorInfo.delete(t3.dataId)) : this.state.tensorInfo.get(t3.dataId).refCount--;
      }
    }, t2.prototype.disposeVariables = function() {
      for (var t3 in this.state.registeredVariables) {
        var e2 = this.state.registeredVariables[t3];
        this.disposeVariable(e2);
      }
    }, t2.prototype.disposeVariable = function(t3) {
      this.disposeTensor(t3), null != this.state.registeredVariables[t3.name] && delete this.state.registeredVariables[t3.name];
    }, t2.prototype.memory = function() {
      var t3 = this.backend.memory();
      return t3.numTensors = this.state.numTensors, t3.numDataBuffers = this.state.numDataBuffers, t3.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (t3.unreliable = true, null == t3.reasons && (t3.reasons = []), t3.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t3;
    }, t2.prototype.profile = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2;
        return r(this, function(r2) {
          return this.state.profiling = true, e2 = this.state.numBytes, n2 = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = t3(), this.state.profiling = false, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function(t4) {
            return t4.totalBytesSnapshot;
          })), this.state.activeProfile.newBytes = this.state.numBytes - e2, this.state.activeProfile.newTensors = this.state.numTensors - n2, [2, this.state.activeProfile];
        });
      });
    }, t2.prototype.isTapeOn = function() {
      return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
    }, t2.prototype.addTapeNode = function(t3, e2, n2, r2, o2, a2) {
      var i2 = this, s2 = { id: this.state.nextTapeNodeId++, kernelName: t3, inputs: e2, outputs: n2, saved: o2 }, u2 = h(t3);
      null != u2 && (r2 = u2.gradFunc), null != r2 && (s2.gradient = function(t4) {
        return t4 = t4.map(function(t5, e3) {
          if (null == t5) {
            var r3 = n2[e3], o3 = tt(r3.size, r3.dtype);
            return i2.makeTensor(o3, r3.shape, r3.dtype);
          }
          return t5;
        }), r2(t4.length > 1 ? t4 : t4[0], o2, a2);
      }), this.state.activeTape.push(s2);
    }, t2.prototype.keep = function(t3) {
      return t3.kept = true, t3;
    }, t2.prototype.startTape = function() {
      0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++;
    }, t2.prototype.endTape = function() {
      this.state.gradientDepth--;
    }, t2.prototype.startScope = function(t3) {
      var e2 = { track: [], name: "unnamed scope", id: this.state.nextScopeId++ };
      t3 && (e2.name = t3), this.state.scopeStack.push(e2), this.state.activeScope = e2;
    }, t2.prototype.endScope = function(t3) {
      for (var e2 = this, n2 = _t(t3), r2 = new Set(n2.map(function(t4) {
        return t4.id;
      })), o2 = 0; o2 < this.state.activeScope.track.length; o2++) {
        var a2 = this.state.activeScope.track[o2];
        a2.kept || r2.has(a2.id) || a2.dispose();
      }
      var i2 = this.state.scopeStack.pop();
      this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n2.forEach(function(t4) {
        t4.kept || t4.scopeId !== i2.id || e2.track(t4);
      });
    }, t2.prototype.gradients = function(t3, e2, n2, r2) {
      var o2 = this;
      if (void 0 === r2 && (r2 = false), C(e2.length > 0, function() {
        return "gradients() received an empty list of xs.";
      }), null != n2 && "float32" !== n2.dtype)
        throw new Error("dy must have 'float32' dtype, but has '" + n2.dtype + "'");
      var a2 = this.scopedRun(function() {
        return o2.startTape();
      }, function() {
        return o2.endTape();
      }, function() {
        return o2.tidy("forward", t3);
      });
      C(a2 instanceof wt, function() {
        return "The result y returned by f() must be a tensor.";
      });
      var i2 = function(t4, e3, n3) {
        for (var r3 = {}, o3 = {}, a3 = 0; a3 < e3.length; a3++)
          r3[e3[a3].id] = true;
        for (a3 = 0; a3 < t4.length; a3++) {
          var i3 = (p2 = t4[a3]).inputs;
          for (var s2 in i3) {
            for (var u2 = i3[s2], c2 = false, l2 = 0; l2 < e3.length; l2++)
              if (r3[u2.id]) {
                p2.outputs.forEach(function(t5) {
                  return r3[t5.id] = true;
                }), c2 = true, o3[p2.id] = true;
                break;
              }
            if (c2)
              break;
          }
        }
        var h2 = {};
        h2[n3.id] = true;
        var f2 = {};
        for (a3 = t4.length - 1; a3 >= 0; a3--)
          for (i3 = (p2 = t4[a3]).inputs, l2 = 0; l2 < p2.outputs.length; l2++)
            if (h2[p2.outputs[l2].id]) {
              for (var s2 in i3)
                h2[i3[s2].id] = true, f2[p2.id] = true;
              break;
            }
        var d2 = [];
        for (a3 = 0; a3 < t4.length; a3++) {
          var p2;
          if (o3[(p2 = t4[a3]).id] && f2[p2.id]) {
            var v = {};
            for (var s2 in p2.inputs) {
              var g = p2.inputs[s2];
              r3[g.id] && (v[s2] = g);
            }
            var m2 = Object.assign({}, p2);
            m2.inputs = v, m2.outputs = p2.outputs, d2.push(m2);
          }
        }
        return d2;
      }(this.state.activeTape, e2, a2);
      if (!r2 && 0 === i2.length && e2.length > 0)
        throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
      return this.tidy("backward", function() {
        var t4, r3, s2 = {};
        s2[a2.id] = null == n2 ? (t4 = a2.shape, r3 = Z(k(t4), "float32"), Lt.makeTensor(r3, t4, "float32")) : n2, function(t5, e3, n3) {
          for (var r4 = function(r5) {
            var o4 = e3[r5], a3 = [];
            if (o4.outputs.forEach(function(e4) {
              var n4 = t5[e4.id];
              null != n4 ? a3.push(n4) : a3.push(null);
            }), null == o4.gradient)
              throw new Error("Cannot compute gradient: gradient function not found for " + o4.kernelName + ".");
            var i3 = o4.gradient(a3), s3 = function(e4) {
              if (!(e4 in i3))
                throw new Error("Cannot backprop through input " + e4 + ". Available gradients found: " + Object.keys(i3) + ".");
              var r6 = n3(function() {
                return i3[e4]();
              });
              if ("float32" !== r6.dtype)
                throw new Error("Error in gradient for op " + o4.kernelName + ". The gradient of input " + e4 + " must have 'float32' dtype, but has '" + r6.dtype + "'");
              var a4 = o4.inputs[e4];
              if (!S(r6.shape, a4.shape))
                throw new Error("Error in gradient for op " + o4.kernelName + ". The gradient of input '" + e4 + "' has shape '" + r6.shape + "', which does not match the shape of the input '" + a4.shape + "'");
              if (null == t5[a4.id])
                t5[a4.id] = r6;
              else {
                var s4 = t5[a4.id];
                t5[a4.id] = s4.add(r6), s4.dispose();
              }
            };
            for (var u3 in o4.inputs)
              s3(u3);
          }, o3 = e3.length - 1; o3 >= 0; o3--)
            r4(o3);
        }(s2, i2, function(t5) {
          return o2.tidy(t5);
        });
        var u2 = e2.map(function(t5) {
          return s2[t5.id];
        });
        return 0 === o2.state.gradientDepth && (o2.state.activeTape.forEach(function(t5) {
          for (var e3 = 0, n3 = t5.saved; e3 < n3.length; e3++) {
            n3[e3].dispose();
          }
        }), o2.state.activeTape = null), { value: a2, grads: u2 };
      });
    }, t2.prototype.customGrad = function(t3) {
      var e2 = this;
      return C(X(t3), function() {
        return "The f passed in customGrad(f) must be a function.";
      }), function() {
        for (var n2, r2 = [], o2 = 0; o2 < arguments.length; o2++)
          r2[o2] = arguments[o2];
        C(r2.every(function(t4) {
          return t4 instanceof wt;
        }), function() {
          return "The args passed in customGrad(f)(x1, x2,...) must all be tensors";
        });
        var a2 = {};
        return r2.forEach(function(t4, e3) {
          a2[e3] = t4;
        }), e2.runKernelFunc(function(e3, o3) {
          return C((n2 = t3.apply(void 0, r2.concat([o3]))).value instanceof wt, function() {
            return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor";
          }), C(X(n2.gradFunc), function() {
            return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.";
          }), n2.value;
        }, a2, function(t4, e3) {
          var o3 = n2.gradFunc(t4, e3), a3 = Array.isArray(o3) ? o3 : [o3];
          C(a3.length === r2.length, function() {
            return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).";
          }), C(a3.every(function(t5) {
            return t5 instanceof wt;
          }), function() {
            return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.";
          });
          var i2 = {};
          return a3.forEach(function(t5, e4) {
            i2[e4] = function() {
              return t5;
            };
          }), i2;
        });
      };
    }, t2.prototype.readSync = function(t3) {
      return this.state.tensorInfo.get(t3).backend.readSync(t3);
    }, t2.prototype.read = function(t3) {
      return this.state.tensorInfo.get(t3).backend.read(t3);
    }, t2.prototype.time = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              return e2 = et(), [4, this.backend.time(t3)];
            case 1:
              return (n2 = r2.sent()).wallMs = et() - e2, [2, n2];
          }
        });
      });
    }, t2.prototype.track = function(t3) {
      return null != this.state.activeScope && (t3.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t3)), t3;
    }, Object.defineProperty(t2.prototype, "registeredVariables", { get: function() {
      return this.state.registeredVariables;
    }, enumerable: true, configurable: true }), t2.prototype.reset = function() {
      for (var t3 in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new Bt(), this.registry)
        this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3];
      this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null;
    }, t2.nextTensorId = 0, t2.nextVariableId = 0, t2;
  }();
  var Lt = function() {
    var t2 = function() {
      if (null == Ot) {
        var t3 = void 0;
        if ("undefined" != typeof window)
          t3 = window;
        else if ("undefined" != typeof global)
          t3 = global;
        else if ("undefined" != typeof process)
          t3 = process;
        else {
          if ("undefined" == typeof self)
            throw new Error("Could not find a global object");
          t3 = self;
        }
        Ot = t3;
      }
      return Ot;
    }();
    if (null == t2._tfengine) {
      var e2 = new o(t2);
      t2._tfengine = new Pt(e2);
    }
    return function(t3) {
      s = t3;
    }(t2._tfengine.ENV), yt = function() {
      return t2._tfengine;
    }, t2._tfengine;
  }();
  function Wt() {
    return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope;
  }
  var Ut = i();
  Ut.registerFlag("DEBUG", function() {
    return false;
  }, function(t2) {
    t2 && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
  }), Ut.registerFlag("IS_BROWSER", function() {
    return Wt();
  }), Ut.registerFlag("IS_NODE", function() {
    return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
  }), Ut.registerFlag("IS_CHROME", function() {
    return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }), Ut.registerFlag("PROD", function() {
    return false;
  }), Ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function() {
    return Ut.getBool("DEBUG");
  }), Ut.registerFlag("DEPRECATION_WARNINGS_ENABLED", function() {
    return true;
  }), Ut.registerFlag("IS_TEST", function() {
    return false;
  });
  var Vt;
  var zt;
  var Gt;
  var Ht = {};
  var qt = { alpha: false, antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: false, depth: false, stencil: false, failIfMajorPerformanceCaveat: true };
  function Kt(t2, e2) {
    Ht[t2] = e2;
  }
  function jt(t2) {
    t2 in Ht || (Ht[t2] = function(t3) {
      if (1 !== t3 && 2 !== t3)
        throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
      var e3 = function(t4) {
        if ("undefined" != typeof OffscreenCanvas && 2 === t4)
          return new OffscreenCanvas(300, 150);
        if ("undefined" != typeof document)
          return document.createElement("canvas");
        throw new Error("Cannot create a canvas in this context");
      }(t3);
      if (e3.addEventListener("webglcontextlost", function(e4) {
        e4.preventDefault(), delete Ht[t3];
      }, false), 1 === t3)
        return e3.getContext("webgl", qt) || e3.getContext("experimental-webgl", qt);
      return e3.getContext("webgl2", qt);
    }(t2));
    var e2 = Ht[t2];
    return e2.isContextLost() ? (delete Ht[t2], jt(t2)) : (e2.disable(e2.DEPTH_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.BLEND), e2.disable(e2.DITHER), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SAMPLE_COVERAGE), e2.enable(e2.SCISSOR_TEST), e2.enable(e2.CULL_FACE), e2.cullFace(e2.BACK), Ht[t2]);
  }
  function Xt(t2, e2) {
    return [e2, t2];
  }
  function Yt(t2) {
    var e2 = k(t2);
    return D(Math.ceil(e2 / 4));
  }
  function $t(t2, e2) {
    return [Math.max(1, Math.ceil(e2 / 2)), Math.max(1, Math.ceil(t2 / 2))];
  }
  function Qt(t2, e2) {
    var n2, r2, o2, a2, s2, u2, c2, l2, h2, f2 = t2;
    return 2 === i().getNumber("WEBGL_VERSION") ? (n2 = f2.R32F, r2 = f2.R16F, o2 = f2.RGBA16F, a2 = f2.RGBA32F, s2 = f2.RED, u2 = 4, c2 = 1, l2 = f2.HALF_FLOAT, h2 = f2.FLOAT) : (n2 = t2.RGBA, r2 = t2.RGBA, o2 = t2.RGBA, a2 = f2.RGBA, s2 = t2.RGBA, u2 = 4, c2 = 4, l2 = null != e2 ? e2.HALF_FLOAT_OES : null, h2 = t2.FLOAT), { internalFormatFloat: n2, internalFormatHalfFloat: r2, internalFormatPackedHalfFloat: o2, internalFormatPackedFloat: a2, textureFormatFloat: s2, downloadTextureFormat: t2.RGBA, downloadUnpackNumChannels: u2, defaultNumChannels: c2, textureTypeHalfFloat: l2, textureTypeFloat: h2 };
  }
  function Jt(t2, e2, n2) {
    var r2 = n2();
    return e2 && function(t3) {
      var e3 = t3.getError();
      if (e3 !== t3.NO_ERROR)
        throw new Error("WebGL Error: " + ne(t3, e3));
    }(t2), r2;
  }
  !function(t2) {
    t2[t2.DENSE = 0] = "DENSE", t2[t2.SHARED_BATCH = 1] = "SHARED_BATCH";
  }(Vt || (Vt = {})), function(t2) {
    t2[t2.RENDER = 0] = "RENDER", t2[t2.UPLOAD = 1] = "UPLOAD", t2[t2.PIXELS = 2] = "PIXELS", t2[t2.DOWNLOAD = 3] = "DOWNLOAD";
  }(zt || (zt = {})), function(t2) {
    t2[t2.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", t2[t2.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", t2[t2.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", t2[t2.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", t2[t2.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";
  }(Gt || (Gt = {}));
  var Zt = 596e-10;
  var te = 65504;
  function ee(t2) {
    return !!(i().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t2 || Zt < Math.abs(t2) && Math.abs(t2) < te);
  }
  function ne(t2, e2) {
    switch (e2) {
      case t2.NO_ERROR:
        return "NO_ERROR";
      case t2.INVALID_ENUM:
        return "INVALID_ENUM";
      case t2.INVALID_VALUE:
        return "INVALID_VALUE";
      case t2.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case t2.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case t2.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case t2.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "Unknown error code " + e2;
    }
  }
  function re(t2, e2, n2) {
    return ke(t2, e2, function() {
      return t2.getExtension(n2);
    }, 'Extension "' + n2 + '" not supported on this browser.');
  }
  function oe(t2, e2, n2) {
    var r2 = ke(t2, e2, function() {
      return t2.createShader(t2.VERTEX_SHADER);
    }, "Unable to create vertex WebGLShader.");
    if (Jt(t2, e2, function() {
      return t2.shaderSource(r2, n2);
    }), Jt(t2, e2, function() {
      return t2.compileShader(r2);
    }), false === t2.getShaderParameter(r2, t2.COMPILE_STATUS))
      throw console.log(t2.getShaderInfoLog(r2)), new Error("Failed to compile vertex shader.");
    return r2;
  }
  function ae(t2, e2, n2) {
    var r2 = ke(t2, e2, function() {
      return t2.createShader(t2.FRAGMENT_SHADER);
    }, "Unable to create fragment WebGLShader.");
    if (Jt(t2, e2, function() {
      return t2.shaderSource(r2, n2);
    }), Jt(t2, e2, function() {
      return t2.compileShader(r2);
    }), false === t2.getShaderParameter(r2, t2.COMPILE_STATUS))
      throw function(t3, e3) {
        var n3 = ue.exec(e3);
        if (null == n3)
          return console.log("Couldn't parse line number in error: " + e3), void console.log(t3);
        for (var r3 = +n3[1], o2 = t3.split("\n"), a2 = o2.length.toString().length + 2, i2 = o2.map(function(t4, e4) {
          return N((e4 + 1).toString(), a2) + t4;
        }), s2 = 0, u2 = 0; u2 < i2.length; u2++)
          s2 = Math.max(i2[u2].length, s2);
        var c2 = i2.slice(0, r3 - 1), l2 = i2.slice(r3 - 1, r3), h2 = i2.slice(r3);
        console.log(c2.join("\n")), console.log(e3.split("\n")[0]), console.log("%c " + N(l2[0], s2), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h2.join("\n"));
      }(n2, t2.getShaderInfoLog(r2)), new Error("Failed to compile fragment shader.");
    return r2;
  }
  var ie;
  var se;
  var ue = /ERROR: [0-9]+:([0-9]+):/g;
  function ce(t2, e2) {
    return ke(t2, e2, function() {
      return t2.createProgram();
    }, "Unable to create WebGLProgram.");
  }
  function le(t2, e2, n2) {
    if (Jt(t2, e2, function() {
      return t2.linkProgram(n2);
    }), false === t2.getProgramParameter(n2, t2.LINK_STATUS))
      throw console.log(t2.getProgramInfoLog(n2)), new Error("Failed to link vertex and fragment shaders.");
  }
  function he(t2, e2, n2) {
    if (Jt(t2, e2, function() {
      return t2.validateProgram(n2);
    }), false === t2.getProgramParameter(n2, t2.VALIDATE_STATUS))
      throw console.log(t2.getProgramInfoLog(n2)), new Error("Shader program validation failed.");
  }
  function fe(t2, e2, n2) {
    var r2 = ke(t2, e2, function() {
      return t2.createBuffer();
    }, "Unable to create WebGLBuffer");
    return Jt(t2, e2, function() {
      return t2.bindBuffer(t2.ARRAY_BUFFER, r2);
    }), Jt(t2, e2, function() {
      return t2.bufferData(t2.ARRAY_BUFFER, n2, t2.STATIC_DRAW);
    }), r2;
  }
  function de(t2, e2, n2) {
    var r2 = ke(t2, e2, function() {
      return t2.createBuffer();
    }, "Unable to create WebGLBuffer");
    return Jt(t2, e2, function() {
      return t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, r2);
    }), Jt(t2, e2, function() {
      return t2.bufferData(t2.ELEMENT_ARRAY_BUFFER, n2, t2.STATIC_DRAW);
    }), r2;
  }
  function pe(t2, e2) {
    return ke(t2, e2, function() {
      return t2.createTexture();
    }, "Unable to create WebGLTexture.");
  }
  function ve(t2, e2) {
    var n2 = i().getNumber("WEBGL_MAX_TEXTURE_SIZE");
    if (t2 <= 0 || e2 <= 0) {
      var r2 = "[" + t2 + "x" + e2 + "]";
      throw new Error("Requested texture size " + r2 + " is invalid.");
    }
    if (t2 > n2 || e2 > n2) {
      r2 = "[" + t2 + "x" + e2 + "]";
      throw new Error("Requested texture size " + r2 + " greater than WebGL maximum on this browser / GPU " + ("[" + n2 + "x" + n2 + "]") + ".");
    }
  }
  function ge(t2, e2) {
    return ke(t2, e2, function() {
      return t2.createFramebuffer();
    }, "Unable to create WebGLFramebuffer.");
  }
  function me(t2, e2, n2, r2, o2, a2, i2, s2) {
    var u2 = t2.getAttribLocation(n2, r2);
    return -1 !== u2 && (Jt(t2, e2, function() {
      return t2.bindBuffer(t2.ARRAY_BUFFER, o2);
    }), Jt(t2, e2, function() {
      return t2.vertexAttribPointer(u2, a2, t2.FLOAT, false, i2, s2);
    }), Jt(t2, e2, function() {
      return t2.enableVertexAttribArray(u2);
    }), true);
  }
  function ye(t2, e2, n2, r2) {
    Se(t2, r2), Jt(t2, e2, function() {
      return t2.activeTexture(t2.TEXTURE0 + r2);
    }), Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, n2);
    });
  }
  function xe(t2, e2, n2, r2) {
    return ke(t2, e2, function() {
      return t2.getUniformLocation(n2, r2);
    }, 'uniform "' + r2 + '" not present in program.');
  }
  function be(t2, e2, n2) {
    return t2.getUniformLocation(e2, n2);
  }
  function we(t2, e2, n2, r2, o2, a2) {
    Jt(t2, e2, function() {
      return ye(t2, e2, r2, a2);
    }), Jt(t2, e2, function() {
      return t2.uniform1i(o2, a2);
    });
  }
  function Ce(t2, e2, n2, r2) {
    Jt(t2, e2, function() {
      return t2.bindFramebuffer(t2.FRAMEBUFFER, r2);
    }), Jt(t2, e2, function() {
      return t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, n2, 0);
    });
  }
  function Ee(t2, e2, n2) {
    Jt(t2, e2, function() {
      return t2.bindFramebuffer(t2.FRAMEBUFFER, n2);
    }), Jt(t2, e2, function() {
      return t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, null, 0);
    });
  }
  function Re(t2) {
    var e2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER);
    if (e2 !== t2.FRAMEBUFFER_COMPLETE)
      throw new Error("Error binding framebuffer: " + Ie(t2, e2));
  }
  function Ie(t2, e2) {
    switch (e2) {
      case t2.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
      case t2.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
      case t2.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
      case t2.FRAMEBUFFER_UNSUPPORTED:
        return "FRAMEBUFFER_UNSUPPORTED";
      default:
        return "unknown error " + e2;
    }
  }
  function ke(t2, e2, n2, r2) {
    var o2 = Jt(t2, e2, function() {
      return n2();
    });
    if (null == o2)
      throw new Error(r2);
    return o2;
  }
  function Se(t2, e2) {
    var n2 = t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, r2 = e2 + t2.TEXTURE0;
    if (r2 < t2.TEXTURE0 || r2 > n2)
      throw new Error("textureUnit must be in " + ("[gl.TEXTURE0, gl.TEXTURE" + n2 + "]") + ".");
  }
  function Ae(t2, e2) {
    return void 0 === e2 && (e2 = 2), k(t2.slice(0, t2.length - e2));
  }
  function Te(t2) {
    if (0 === t2.length)
      throw Error("Cannot get rows and columns of an empty shape array.");
    return [t2.length > 1 ? t2[t2.length - 2] : 1, t2[t2.length - 1]];
  }
  function De(t2) {
    var e2 = [1, 1, 1];
    return 0 === t2.length || 1 === t2.length && 1 === t2[0] || (e2 = [Ae(t2)].concat(Te(t2))), e2;
  }
  function Ne(t2, e2) {
    var n2;
    void 0 === e2 && (e2 = false);
    var r2 = i().getNumber("WEBGL_MAX_TEXTURE_SIZE");
    if (e2 && (r2 *= 2, 1 === (t2 = t2.map(function(e3, n3) {
      return n3 >= t2.length - 2 ? b(t2[n3]) : t2[n3];
    })).length && (t2 = [2, t2[0]])), 2 !== t2.length) {
      var o2 = M(t2);
      t2 = o2.newShape;
    }
    var a2 = k(t2);
    if (t2.length <= 1 && a2 <= r2)
      return [1, a2];
    if (2 === t2.length && t2[0] <= r2 && t2[1] <= r2)
      return t2;
    if (3 === t2.length && t2[0] * t2[1] <= r2 && t2[2] <= r2)
      return [t2[0] * t2[1], t2[2]];
    if (3 === t2.length && t2[0] <= r2 && t2[1] * t2[2] <= r2)
      return [t2[0], t2[1] * t2[2]];
    if (4 === t2.length && t2[0] * t2[1] * t2[2] <= r2 && t2[3] <= r2)
      return [t2[0] * t2[1] * t2[2], t2[3]];
    if (4 === t2.length && t2[0] <= r2 && t2[1] * t2[2] * t2[3] <= r2)
      return [t2[0], t2[1] * t2[2] * t2[3]];
    if (e2) {
      var s2 = Ae(t2), u2 = 2, c2 = 2;
      return t2.length && (u2 = (n2 = Te(t2))[0], c2 = n2[1]), D(a2 = s2 * (u2 / 2) * (c2 / 2)).map(function(t3) {
        return 2 * t3;
      });
    }
    return D(a2);
  }
  function Fe(t2) {
    return t2 % 2 == 0;
  }
  function _e(t2, e2) {
    if (S(t2 = t2.slice(-2), e2 = e2.slice(-2)))
      return true;
    if (!t2.length || !e2.length)
      return true;
    if (0 === t2[0] || 0 === t2[1] || 0 === e2[0] || 0 === e2[1])
      return true;
    if (t2.length !== e2.length) {
      var n2 = t2.slice(-1)[0], r2 = e2.slice(-1)[0];
      if (n2 === r2)
        return true;
      if (Fe(n2) && Fe(r2) && (1 === t2[0] || 1 === e2[0]))
        return true;
    }
    return t2[1] === e2[1] && Fe(t2[0]) && Fe(e2[0]);
  }
  function Oe(t2) {
    if (null == ie) {
      var e2 = jt(t2);
      ie = e2.getParameter(e2.MAX_TEXTURE_SIZE);
    }
    return ie;
  }
  function Me(t2) {
    if (null == se) {
      var e2 = jt(t2);
      se = e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS);
    }
    return Math.min(16, se);
  }
  function Be(t2) {
    if (0 === t2)
      return 0;
    var e2 = jt(t2);
    return Pe(e2, "EXT_disjoint_timer_query_webgl2") && 2 === t2 ? 2 : Pe(e2, "EXT_disjoint_timer_query") ? 1 : 0;
  }
  function Pe(t2, e2) {
    return null != t2.getExtension(e2);
  }
  function Le(t2) {
    try {
      if (null != jt(t2))
        return true;
    } catch (t3) {
      return false;
    }
    return false;
  }
  function We(t2) {
    if (0 === t2)
      return false;
    var e2 = jt(t2);
    if (1 === t2) {
      if (!Pe(e2, "OES_texture_float"))
        return false;
    } else if (!Pe(e2, "EXT_color_buffer_float"))
      return false;
    return Ve(e2);
  }
  function Ue(t2) {
    if (0 === t2)
      return false;
    var e2 = jt(t2);
    if (1 !== t2) {
      if (Pe(e2, "EXT_color_buffer_float"))
        return Ve(e2);
      if (Pe(e2, "EXT_color_buffer_half_float")) {
        var n2 = e2.getExtension("EXT_color_buffer_half_float");
        return function(t3, e3) {
          var n3 = Qt(t3, e3), r2 = t3.createTexture();
          t3.bindTexture(t3.TEXTURE_2D, r2);
          t3.texImage2D(t3.TEXTURE_2D, 0, n3.internalFormatHalfFloat, 1, 1, 0, n3.textureFormatFloat, n3.textureTypeHalfFloat, null);
          var o2 = t3.createFramebuffer();
          t3.bindFramebuffer(t3.FRAMEBUFFER, o2), t3.framebufferTexture2D(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.TEXTURE_2D, r2, 0);
          var a2 = t3.checkFramebufferStatus(t3.FRAMEBUFFER) === t3.FRAMEBUFFER_COMPLETE;
          return t3.bindTexture(t3.TEXTURE_2D, null), t3.bindFramebuffer(t3.FRAMEBUFFER, null), t3.deleteTexture(r2), t3.deleteFramebuffer(o2), a2;
        }(e2, n2);
      }
      return false;
    }
    return !!Pe(e2, "OES_texture_float") && (!!Pe(e2, "WEBGL_color_buffer_float") && Ve(e2));
  }
  function Ve(t2) {
    var e2 = Qt(t2), n2 = t2.createTexture();
    t2.bindTexture(t2.TEXTURE_2D, n2);
    t2.texImage2D(t2.TEXTURE_2D, 0, e2.internalFormatFloat, 1, 1, 0, e2.textureFormatFloat, e2.textureTypeFloat, null);
    var r2 = t2.createFramebuffer();
    t2.bindFramebuffer(t2.FRAMEBUFFER, r2), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, n2, 0);
    var o2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER) === t2.FRAMEBUFFER_COMPLETE;
    return t2.bindTexture(t2.TEXTURE_2D, null), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteTexture(n2), t2.deleteFramebuffer(r2), o2;
  }
  function ze(t2) {
    return 2 === t2 && null != jt(t2).fenceSync;
  }
  var Ge = Object.freeze({ callAndCheck: Jt, canBeRepresented: ee, getWebGLErrorMessage: ne, getExtensionOrThrow: re, createVertexShader: oe, createFragmentShader: ae, createProgram: ce, linkProgram: le, validateProgram: he, createStaticVertexBuffer: fe, createStaticIndexBuffer: de, getNumChannels: function() {
    return 2 === i().getNumber("WEBGL_VERSION") ? 1 : 4;
  }, createTexture: pe, validateTextureSize: ve, createFramebuffer: ge, bindVertexBufferToProgramAttribute: me, bindTextureUnit: ye, unbindTextureUnit: function(t2, e2, n2) {
    Se(t2, n2), Jt(t2, e2, function() {
      return t2.activeTexture(t2.TEXTURE0 + n2);
    }), Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, null);
    });
  }, getProgramUniformLocationOrThrow: xe, getProgramUniformLocation: be, bindTextureToProgramUniformSampler: we, bindCanvasToFramebuffer: function(t2, e2) {
    Jt(t2, e2, function() {
      return t2.bindFramebuffer(t2.FRAMEBUFFER, null);
    }), Jt(t2, e2, function() {
      return t2.viewport(0, 0, t2.canvas.width, t2.canvas.height);
    }), Jt(t2, e2, function() {
      return t2.scissor(0, 0, t2.canvas.width, t2.canvas.height);
    });
  }, bindColorTextureToFramebuffer: Ce, unbindColorTextureFromFramebuffer: Ee, validateFramebuffer: Re, getFramebufferErrorMessage: Ie, getBatchDim: Ae, getRowsCols: Te, getShapeAs3D: De, getTextureShapeFromLogicalShape: Ne, isReshapeFree: _e, getWebGLMaxTextureSize: Oe, resetMaxTextureSize: function() {
    ie = null;
  }, resetMaxTexturesInShader: function() {
    se = null;
  }, getMaxTexturesInShader: Me, getWebGLDisjointQueryTimerVersion: Be, hasExtension: Pe, isWebGLVersionEnabled: Le, isCapableOfRenderingToFloatTexture: We, isDownloadFloatTextureEnabled: Ue, isWebGLFenceEnabled: ze });
  var He = i();
  function Xe(t2) {
    i().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t2 + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
  }
  function Ze(t2, e2) {
    return Lt.tidy(t2, e2);
  }
  function tn(t2) {
    _t(t2).forEach(function(t3) {
      return t3.dispose();
    });
  }
  function en(t2) {
    return Lt.keep(t2);
  }
  function dn() {
    for (var t2 = [], e2 = 0; e2 < arguments.length; e2++)
      t2[e2] = arguments[e2];
    i().getBool("IS_TEST") || console.warn.apply(console, t2);
  }
  function pn(t2, e2) {
    var n2 = t2;
    if (V(t2))
      return "string" === e2 ? [] : [t2.length];
    if (!Array.isArray(t2))
      return [];
    for (var r2 = []; Array.isArray(n2) || V(n2) && "string" !== e2; )
      r2.push(n2.length), n2 = n2[0];
    return Array.isArray(t2) && i().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t3(e3, n3, r3) {
      if (r3 = r3 || [], !Array.isArray(e3) && !V(e3))
        return void C(0 === n3.length, function() {
          return "Element arr[" + r3.join("][") + "] is a primitive, but should be an array/TypedArray of " + n3[0] + " elements";
        });
      C(n3.length > 0, function() {
        return "Element arr[" + r3.join("][") + "] should be a primitive, but is an array of " + e3.length + " elements";
      }), C(e3.length === n3[0], function() {
        return "Element arr[" + r3.join("][") + "] should have " + n3[0] + " elements, but has " + e3.length + " elements";
      });
      for (var o2 = n3.slice(1), a2 = 0; a2 < e3.length; ++a2)
        t3(e3[a2], o2, r3.concat(a2));
    }(t2, r2, []), r2;
  }
  function vn(t2, e2, n2, r2) {
    if (null != t2 && ("numeric" !== t2 && t2 !== e2 || "numeric" === t2 && "string" === e2))
      throw new Error("Argument '" + n2 + "' passed to '" + r2 + "' must be " + t2 + " tensor, but got " + e2 + " tensor");
  }
  function gn(t2, e2, n2, r2) {
    if (void 0 === r2 && (r2 = "numeric"), t2 instanceof wt)
      return vn(r2, t2.dtype, e2, n2), t2;
    var o2 = j(t2);
    if ("string" !== o2 && ["bool", "int32", "float32"].indexOf(r2) >= 0 && (o2 = r2), vn(r2, o2, e2, n2), null == t2 || !V(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2) {
      var a2 = null == t2 ? "null" : t2.constructor.name;
      throw new Error("Argument '" + e2 + "' passed to '" + n2 + "' must be a Tensor or TensorLike, but got '" + a2 + "'");
    }
    var s2 = pn(t2, o2);
    V(t2) || Array.isArray(t2) || (t2 = [t2]);
    var u2 = "string" !== o2 ? Q(t2, o2, i().getBool("DEBUG")) : I(t2, [], true);
    return Lt.makeTensor(u2, s2, o2);
  }
  function mn(t2, e2, n2, r2) {
    if (void 0 === r2 && (r2 = "numeric"), !Array.isArray(t2))
      throw new Error("Argument " + e2 + " passed to " + n2 + " must be a `Tensor[]` or `TensorLike[]`");
    return t2.map(function(t3, r3) {
      return gn(t3, e2 + "[" + r3 + "]", n2);
    }, r2);
  }
  function yn(t2, e2) {
    for (var n2 = 0; n2 < t2.length; ++n2)
      if (t2[t2.length - n2 - 1] !== e2 - 1 - n2)
        return false;
    return true;
  }
  function xn(t2, e2, n2) {
    for (var r2 = t2.length + e2.length, o2 = [], a2 = 0, i2 = 0, s2 = 0; s2 < r2; s2++)
      -1 === n2.indexOf(s2) ? o2.push(t2[a2++]) : o2.push(e2[i2++]);
    return o2;
  }
  function bn(t2, e2) {
    for (var n2 = [], r2 = t2.length, o2 = 0; o2 < r2; o2++)
      -1 === e2.indexOf(o2) && n2.push(t2[o2]);
    return [n2, e2.map(function(e3) {
      return t2[e3];
    })];
  }
  function wn(t2, e2) {
    return xn(t2, e2.map(function(t3) {
      return 1;
    }), e2);
  }
  function Cn(t2, e2, n2) {
    C(yn(e2, n2), function() {
      return t2 + " supports only inner-most axes for now. Got axes " + e2 + " and rank-" + n2 + " input.";
    });
  }
  function En(t2, e2) {
    if (yn(t2, e2))
      return null;
    for (var n2 = [], r2 = 0; r2 < e2; ++r2)
      -1 === t2.indexOf(r2) && n2.push(r2);
    return t2.forEach(function(t3) {
      return n2.push(t3);
    }), n2;
  }
  function Rn(t2) {
    return t2.map(function(t3, e2) {
      return [e2, t3];
    }).sort(function(t3, e2) {
      return t3[1] - e2[1];
    }).map(function(t3) {
      return t3[0];
    });
  }
  function In(t2, e2) {
    for (var n2 = [], r2 = e2 - t2; r2 < e2; ++r2)
      n2.push(r2);
    return n2;
  }
  function kn(t2, e2) {
    var n2 = t2[0].length;
    t2.forEach(function(t3, e3) {
      C(t3.length === n2, function() {
        return "Error in concat" + n2 + "D: rank of tensors[" + e3 + "] must be the same as the rank of the rest (" + n2 + ")";
      });
    }), C(e2 >= 0 && e2 < n2, function() {
      return "Error in concat" + n2 + "D: axis must be between 0 and " + (n2 - 1) + ".";
    });
    var r2 = t2[0];
    t2.forEach(function(t3, o2) {
      for (var a2 = 0; a2 < n2; a2++)
        C(a2 === e2 || t3[a2] === r2[a2], function() {
          return "Error in concat" + n2 + "D: Shape of tensors[" + o2 + "] (" + t3 + ") does not match the shape of the rest (" + r2 + ") along the non-concatenated axis " + o2 + ".";
        });
    });
  }
  function Sn(t2, e2) {
    for (var n2 = t2[0].slice(), r2 = 1; r2 < t2.length; r2++)
      n2[e2] += t2[r2][e2];
    return n2;
  }
  function An(t2) {
    var e2 = Object.keys(t2);
    if (1 !== e2.length)
      throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e2.length + " keys.");
    var n2 = e2[0], r2 = t2[n2];
    n2.endsWith("_") && (n2 = n2.substring(0, n2.length - 1));
    var o2 = function() {
      for (var t3 = [], e3 = 0; e3 < arguments.length; e3++)
        t3[e3] = arguments[e3];
      Lt.startScope(n2);
      try {
        var o3 = r2.apply(void 0, t3);
        return o3 instanceof Promise && console.error("Cannot return a Promise inside of tidy."), Lt.endScope(o3), o3;
      } catch (t4) {
        throw Lt.endScope(null), t4;
      }
    };
    return Object.defineProperty(o2, "name", { value: n2, configurable: true }), o2;
  }
  He.registerFlag("HAS_WEBGL", function() {
    return He.getNumber("WEBGL_VERSION") > 0;
  }), He.registerFlag("WEBGL_VERSION", function() {
    return Le(2) ? 2 : Le(1) ? 1 : 0;
  }), He.registerFlag("WEBGL_BUFFER_SUPPORTED", function() {
    return 2 === He.get("WEBGL_VERSION");
  }), He.registerFlag("WEBGL_CPU_FORWARD", function() {
    return true;
  }), He.registerFlag("WEBGL_FORCE_F16_TEXTURES", function() {
    return false;
  }), He.registerFlag("WEBGL_PACK", function() {
    return He.getBool("HAS_WEBGL");
  }), He.registerFlag("WEBGL_PACK_NORMALIZATION", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_CLIP", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_DEPTHWISECONV", function() {
    return false;
  }), He.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_PACK_REDUCE", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_LAZILY_UNPACK", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_CONV_IM2COL", function() {
    return He.getBool("WEBGL_PACK");
  }), He.registerFlag("WEBGL_MAX_TEXTURE_SIZE", function() {
    return Oe(He.getNumber("WEBGL_VERSION"));
  }), He.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", function() {
    return Me(He.getNumber("WEBGL_VERSION"));
  }), He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", function() {
    var t2 = He.getNumber("WEBGL_VERSION");
    return 0 === t2 ? 0 : Be(t2);
  }), He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", function() {
    return He.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && (t2 = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t2) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t2.substr(0, 4))));
    var t2;
  }), He.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", function() {
    return We(He.getNumber("WEBGL_VERSION"));
  }), He.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", function() {
    return !He.getBool("WEBGL_FORCE_F16_TEXTURES") && He.getBool("WEBGL_RENDER_FLOAT32_CAPABLE");
  }), He.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", function() {
    return Ue(He.getNumber("WEBGL_VERSION"));
  }), He.registerFlag("WEBGL_FENCE_API_ENABLED", function() {
    return ze(He.getNumber("WEBGL_VERSION"));
  }), He.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", function() {
    return He.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0;
  }), bt = Xe;
  var Tn = An({ complex_: function(t2, e2) {
    var n2 = gn(t2, "real", "complex"), r2 = gn(e2, "imag", "complex");
    return E(n2.shape, r2.shape, "real and imag shapes, " + n2.shape + " and " + r2.shape + ", must match in call to tf.complex()."), Lt.runKernelFunc(function(t3) {
      return t3.complex(n2, r2);
    }, { $real: n2, $imag: r2 });
  } });
  var Dn = An({ real_: function(t2) {
    var e2 = gn(t2, "input", "real");
    return Lt.runKernelFunc(function(t3) {
      return t3.real(e2);
    }, { $input: e2 });
  } });
  var Nn = An({ imag_: function(t2) {
    var e2 = gn(t2, "input", "imag");
    return Lt.runKernelFunc(function(t3) {
      return t3.imag(e2);
    }, { $input: e2 });
  } });
  function Fn(t2, e2, n2) {
    return _n(t2, e2, pn(t2, n2), n2);
  }
  function _n(t2, e2, n2, r2) {
    if (null == r2 && (r2 = j(t2)), "complex64" === r2)
      throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
    if (!V(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2)
      throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
    if (null != e2) {
      nt(e2);
      var o2 = k(e2), a2 = k(n2);
      C(o2 === a2, function() {
        return "Based on the provided shape, [" + e2 + "], the tensor should have " + o2 + " values but has " + a2;
      });
      for (var s2 = 0; s2 < n2.length; ++s2) {
        var u2 = n2[s2], c2 = s2 !== n2.length - 1 || u2 !== k(e2.slice(s2));
        C(n2[s2] === e2[s2] || !c2, function() {
          return "Error creating a new Tensor. Inferred shape (" + n2 + ") does not match the provided shape (" + e2 + "). ";
        });
      }
    }
    return V(t2) || Array.isArray(t2) || (t2 = [t2]), e2 = e2 || n2, t2 = "string" !== r2 ? Q(t2, r2, i().getBool("DEBUG")) : I(t2, [], true), Lt.makeTensor(t2, e2, r2);
  }
  function On(t2, e2) {
    if ((V(t2) && "string" !== e2 || Array.isArray(t2)) && "complex64" !== e2)
      throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
    if ("string" === e2 && V(t2) && !(t2 instanceof Uint8Array))
      throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
    return _n(t2, [], [], e2);
  }
  function Mn(t2, e2) {
    R(t2);
    var n2 = pn(t2, e2);
    if (1 !== n2.length)
      throw new Error("tensor1d() requires values to be a flat/TypedArray");
    return _n(t2, null, n2, e2);
  }
  function Bn(t2, e2, n2) {
    if (R(t2), null != e2 && 2 !== e2.length)
      throw new Error("tensor2d() requires shape to have two numbers");
    var r2 = pn(t2, n2);
    if (2 !== r2.length && 1 !== r2.length)
      throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
    if (1 === r2.length && null == e2)
      throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
    return _n(t2, e2, r2, n2);
  }
  function Pn(t2, e2, n2) {
    if (R(t2), null != e2 && 3 !== e2.length)
      throw new Error("tensor3d() requires shape to have three numbers");
    var r2 = pn(t2, n2);
    if (3 !== r2.length && 1 !== r2.length)
      throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
    if (1 === r2.length && null == e2)
      throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
    return _n(t2, e2, r2, n2);
  }
  function Ln(t2, e2, n2) {
    if (R(t2), null != e2 && 4 !== e2.length)
      throw new Error("tensor4d() requires shape to have four numbers");
    var r2 = pn(t2, n2);
    if (4 !== r2.length && 1 !== r2.length)
      throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
    if (1 === r2.length && null == e2)
      throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
    return _n(t2, e2, r2, n2);
  }
  function Wn(t2, e2, n2) {
    if (R(t2), null != e2 && 5 !== e2.length)
      throw new Error("tensor5d() requires shape to have five numbers");
    var r2 = pn(t2, n2);
    if (5 !== r2.length && 1 !== r2.length)
      throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
    if (1 === r2.length && null == e2)
      throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
    return _n(t2, e2, r2, n2);
  }
  function Un(t2, e2, n2) {
    if (R(t2), null != e2 && 6 !== e2.length)
      throw new Error("tensor6d() requires shape to have six numbers");
    var r2 = pn(t2, n2);
    if (6 !== r2.length && 1 !== r2.length)
      throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
    if (1 === r2.length && null == e2)
      throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
    return _n(t2, e2 = e2 || r2, r2, n2);
  }
  function Vn(t2, e2, n2, r2) {
    return void 0 === e2 && (e2 = true), Lt.makeVariable(t2, e2, n2, r2);
  }
  function zn(t2, e2) {
    if (void 0 === e2 && (e2 = "float32"), "complex64" === e2) {
      var n2 = zn(t2, "float32"), r2 = Gn(t2, "float32");
      return Tn(n2, r2);
    }
    var o2 = Z(k(t2), e2);
    return Lt.makeTensor(o2, t2, e2);
  }
  function Gn(t2, e2) {
    if (void 0 === e2 && (e2 = "float32"), "complex64" === e2) {
      var n2 = Gn(t2, "float32"), r2 = Gn(t2, "float32");
      return Tn(n2, r2);
    }
    var o2 = tt(k(t2), e2);
    return Lt.makeTensor(o2, t2, e2);
  }
  function Hn(t2, e2, n2) {
    return Lt.runKernelFunc(function(r2) {
      return r2.fill(t2, e2, n2);
    }, {});
  }
  function qn(t2, e2, n2) {
    if (n2 <= 0)
      throw new Error("The number of values should be positive.");
    return Lt.runKernelFunc(function(r2) {
      return r2.linspace(t2, e2, n2);
    }, {});
  }
  function Kn(t2, e2, n2, r2) {
    if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32"), 0 === n2)
      throw new Error("Cannot have a step of zero");
    if (t2 === e2 || t2 < e2 && n2 < 0 || e2 < t2 && n2 > 1)
      return Gn([0], r2);
    var o2 = tt(Math.abs(Math.ceil((e2 - t2) / n2)), r2);
    e2 < t2 && 1 === n2 && (n2 = -1), o2[0] = t2;
    for (var a2 = 1; a2 < o2.length; a2++)
      o2[a2] = o2[a2 - 1] + n2;
    return Mn(o2, r2);
  }
  var jn = An({ onesLike_: function(t2) {
    var e2 = gn(t2, "x", "onesLike");
    if ("complex64" === e2.dtype) {
      var n2 = jn(Dn(e2)), r2 = Xn(Nn(e2));
      return Tn(n2, r2);
    }
    return Lt.runKernelFunc(function(t3) {
      return t3.onesLike(e2);
    }, { x: e2 }, function(t3, e3) {
      return { x: function() {
        return Xn(t3);
      } };
    }, "OnesLike");
  } });
  var Xn = An({ zerosLike_: function(t2) {
    var e2 = gn(t2, "x", "zerosLike");
    return Lt.runKernelFunc(function(t3) {
      return t3.zerosLike(e2);
    }, { x: e2 }, function(t3, e3) {
      return { x: function() {
        return Xn(t3);
      } };
    }, "ZerosLike");
  } });
  var Yn = An({ concat_: function(t2, e2) {
    void 0 === e2 && (e2 = 0), C(t2.length >= 1, function() {
      return "Pass at least one tensor to concat";
    });
    var n2 = mn(t2, "tensors", "concat");
    "complex64" === n2[0].dtype && n2.forEach(function(t3) {
      if ("complex64" !== t3.dtype)
        throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + t3.dtype + ". ");
    }), e2 = O(e2, n2[0].shape)[0];
    var r2 = Sn(n2.map(function(t3) {
      return t3.shape;
    }), e2);
    if (0 === k(r2))
      return Fn([], r2);
    if (1 === (n2 = n2.filter(function(t3) {
      return t3.size > 0;
    })).length)
      return n2[0];
    var o2 = n2.map(function(t3) {
      return t3.shape;
    });
    kn(o2, e2);
    var a2 = n2, i2 = { axis: e2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.concat(n2, e2);
    }, a2, function(t3) {
      var n3 = o2.map(function(t4) {
        return t4[e2];
      });
      return tr(t3, n3, e2).map(function(t4) {
        return function() {
          return t4;
        };
      });
    }, "Concat", i2);
  } });
  var $n = An({ concat1d_: function(t2) {
    return Yn(t2, 0);
  } });
  var Qn = An({ concat2d_: function(t2, e2) {
    return Yn(t2, e2);
  } });
  var Jn = An({ concat3d_: function(t2, e2) {
    return Yn(t2, e2);
  } });
  var Zn = An({ concat4d_: function(t2, e2) {
    return Yn(t2, e2);
  } });
  var tr = An({ split_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = 0);
    var r2, o2 = gn(t2, "x", "split");
    return n2 = O(n2, o2.shape)[0], "number" == typeof e2 ? (C(o2.shape[n2] % e2 == 0, function() {
      return "Number of splits must evenly divide the axis.";
    }), r2 = new Array(e2).fill(o2.shape[n2] / e2)) : (C(o2.shape[n2] === e2.reduce(function(t3, e3) {
      return t3 + e3;
    }), function() {
      return "The sum of sizes must match the size of the axis dimension.";
    }), r2 = e2), Lt.runKernelFunc(function(t3) {
      return t3.split(o2, r2, n2);
    }, { $x: o2 }, function(t3) {
      return { $x: function() {
        return Yn(t3, n2);
      } };
    });
  } });
  function er(t2, e2, n2) {
    return void 0 === e2 && (e2 = "float32"), e2 = e2 || "float32", nt(t2), new mt(t2, e2, n2);
  }
  function nr(t2, e2) {
    void 0 === e2 && (e2 = false), console.log(t2.toString(e2));
  }
  var rr = An({ batchToSpaceND_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "batchToSpaceND"), o2 = e2.reduce(function(t3, e3) {
      return t3 * e3;
    });
    return C(r2.rank >= 1 + e2.length, function() {
      return "input rank is " + r2.rank + " but should be > than blockShape.length " + e2.length;
    }), C(n2.length === e2.length, function() {
      return "crops.length is " + n2.length + " but should be equal to blockShape.length  " + e2.length;
    }), C(r2.shape[0] % o2 == 0, function() {
      return "input tensor batch is " + r2.shape[0] + " but is not divisible by the product of the elements of blockShape " + e2.join(" * ") + " === " + o2;
    }), Lt.runKernelFunc(function(t3) {
      return t3.batchToSpaceND(r2, e2, n2);
    }, { $x: r2 }, function(t3) {
      return { $x: function() {
        return t3.spaceToBatchND(e2, n2);
      } };
    });
  } });
  var or = An({ cast_: function(t2, e2) {
    var n2 = gn(t2, "x", "cast");
    if (!W(e2))
      throw new Error("Failed to cast to unknown dtype " + e2);
    if ("string" === e2 && "string" !== n2.dtype || "string" !== e2 && "string" === n2.dtype)
      throw new Error("Only strings can be casted to strings");
    var r2 = { dtype: e2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.cast(n2, e2);
    }, { x: n2 }, function(t3) {
      return { x: function() {
        return t3.clone();
      } };
    }, "Cast", r2);
  } });
  var ar = An({ cumsum_: function(t2, e2, n2, r2) {
    void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false);
    var o2 = gn(t2, "x", "cumsum"), a2 = En([e2 |= 0], o2.rank), i2 = o2;
    null != a2 && (i2 = o2.transpose(a2));
    var s2 = In(1, o2.rank)[0], u2 = Lt.runKernelFunc(function(t3) {
      return t3.cumsum(i2, s2, n2, r2);
    }, { permutedX: i2 }, function(t3) {
      return { permutedX: function() {
        return t3.cumsum(e2, n2, !r2);
      } };
    });
    return null != a2 && (u2 = u2.transpose(a2)), u2;
  } });
  var ir = An({ depthToSpace_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = "NHWC");
    var r2 = gn(t2, "x", "depthToSpace"), o2 = "NHWC" === n2 ? r2.shape[1] : r2.shape[2], a2 = "NHWC" === n2 ? r2.shape[2] : r2.shape[3], i2 = "NHWC" === n2 ? r2.shape[3] : r2.shape[1];
    return C(o2 * e2 >= 0, function() {
      return "Negative dimension size caused by overflow when multiplying\n      " + o2 + " and " + e2 + "  for depthToSpace with input shape\n      " + r2.shape;
    }), C(a2 * e2 >= 0, function() {
      return "Negative dimension size caused by overflow when multiplying\n      " + a2 + " and " + e2 + " for depthToSpace with input shape\n          " + r2.shape;
    }), C(i2 % (e2 * e2) == 0, function() {
      return "Dimension size must be evenly divisible by " + e2 * e2 + " but is " + i2 + " for depthToSpace with input shape " + r2.shape;
    }), Lt.runKernelFunc(function(t3) {
      return t3.depthToSpace(r2, e2, n2);
    }, { $x: r2 });
  } });
  var sr = An({ expandDims_: function(t2, e2) {
    void 0 === e2 && (e2 = 0);
    var n2 = gn(t2, "x", "expandDims", null);
    C(e2 <= n2.rank, function() {
      return "Axis must be <= rank of the tensor";
    });
    var r2 = n2.shape.slice();
    return e2 < 0 && (C(-(n2.rank + 1) <= e2, function() {
      return "Axis must be in the interval [" + -(n2.rank + 1) + ", " + n2.rank + "]";
    }), e2 = n2.rank + e2 + 1), r2.splice(e2, 0, 1), ur(n2, r2);
  } });
  var ur = An({ reshape_: function(t2, e2) {
    var n2 = gn(t2, "x", "reshape", null);
    e2 = _(e2, n2.size), C(n2.size === k(e2), function() {
      return "new shape and old shape must have the same number of elements.";
    });
    var r2 = { shape: e2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.reshape(n2, e2);
    }, { x: n2 }, function(t3) {
      return { x: function() {
        return t3.reshape(n2.shape);
      } };
    }, "Reshape", r2);
  } });
  var cr = An({ spaceToBatchND_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "spaceToBatchND");
    return C(r2.rank >= 1 + e2.length, function() {
      return "input rank " + r2.rank + " should be > than [blockShape] " + e2.length;
    }), C(n2.length === e2.length, function() {
      return "paddings.shape[0] " + n2.length + " must be equal to [blockShape] " + e2.length;
    }), C(r2.shape.reduce(function(t3, r3, o2) {
      return o2 > 0 && o2 <= e2.length ? t3 && (r3 + n2[o2 - 1][0] + n2[o2 - 1][1]) % e2[o2 - 1] == 0 : t3;
    }, true), function() {
      return "input spatial dimensions " + r2.shape.slice(1) + " with paddings " + n2.toString() + " must be divisible by blockShapes " + e2.toString();
    }), Lt.runKernelFunc(function(t3) {
      return t3.spaceToBatchND(r2, e2, n2);
    }, { $x: r2 }, function(t3) {
      return { $x: function() {
        return t3.batchToSpaceND(e2, n2);
      } };
    });
  } });
  var lr = An({ squeeze_: function(t2, e2) {
    var n2 = gn(t2, "x", "squeeze");
    return ur(n2, M(n2.shape, e2).newShape);
  } });
  var hr = An({ stack_: function(t2, e2) {
    void 0 === e2 && (e2 = 0);
    var n2 = mn(t2, "tensors", "stack");
    if (C(n2.length >= 1, function() {
      return "Pass at least one tensor to tf.stack";
    }), 1 === n2.length)
      return n2[0].expandDims(e2);
    var r2 = n2[0].rank, o2 = n2[0].shape, a2 = n2[0].dtype;
    C(e2 <= r2, function() {
      return "Axis must be <= rank of the tensor";
    }), n2.forEach(function(t3) {
      E(o2, t3.shape, "All tensors passed to stack must have matching shapes");
    }), n2.forEach(function(t3) {
      C(a2 === t3.dtype, function() {
        return "All tensors passed to stack must have matching dtypes";
      });
    });
    var i2 = n2.map(function(t3) {
      return t3.expandDims(e2);
    });
    return Yn(i2, e2);
  } });
  var fr = An({ unstack_: function(t2, e2) {
    void 0 === e2 && (e2 = 0), e2 = e2 || 0;
    var n2 = gn(t2, "x", "unstack");
    C(e2 >= -n2.shape.length && e2 < n2.shape.length, function() {
      return "Axis = " + e2 + " is not in [-" + n2.shape.length + ", " + n2.shape.length + ")";
    }), e2 < 0 && (e2 += n2.shape.length);
    var r2 = { axis: e2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.unstack(n2, e2);
    }, { x: n2 }, function(t3) {
      return { x: function() {
        return hr(t3, e2);
      } };
    }, "Unpack", r2);
  } });
  var dr = function(t2, e2) {
    return n(this, void 0, void 0, function() {
      var n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = gn(t2, "x", "setdiff1d"), o2 = gn(e2, "y", "setdiff1d"), C(n2.dtype === o2.dtype, function() {
              return "x and y should have the same dtype, but got x (" + n2.dtype + ") and y (" + o2.dtype + ").";
            }), C(1 === n2.rank, function() {
              return "x should be 1D tensor, but got x (" + n2.shape + ").";
            }), C(1 === o2.rank, function() {
              return "y should be 1D tensor, but got y (" + o2.shape + ").";
            }), [4, n2.data()];
          case 1:
            return a2 = r2.sent(), [4, o2.data()];
          case 2:
            for (i2 = r2.sent(), s2 = new Set(i2), u2 = 0, h2 = 0; h2 < a2.length; h2++)
              s2.has(a2[h2]) || u2++;
            for (c2 = new mt([u2], n2.dtype), l2 = new mt([u2], "int32"), h2 = 0, f2 = 0; h2 < a2.length; h2++)
              s2.has(a2[h2]) || (c2.values[f2] = a2[h2], l2.values[f2] = h2, f2++);
            return [2, [c2.toTensor(), l2.toTensor()]];
        }
      });
    });
  };
  function pr(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = true);
    var o2 = [];
    if (r2)
      (o2 = o2.concat(e2.slice(0))).push(t2[0] / n2), o2 = o2.concat(t2.slice(1));
    else {
      o2 = o2.concat(t2[0]);
      for (var a2 = e2.length, i2 = 0; i2 < a2; ++i2)
        o2 = o2.concat([t2[i2 + 1] / e2[i2], e2[i2]]);
      o2 = o2.concat(t2.slice(a2 + 1));
    }
    return o2;
  }
  function vr(t2, e2, n2) {
    void 0 === n2 && (n2 = true);
    var r2 = [];
    if (n2) {
      r2.push(e2);
      for (var o2 = e2 + 1; o2 < t2; ++o2)
        o2 <= 2 * e2 ? (r2.push(o2), r2.push(o2 - (e2 + 1))) : r2.push(o2);
    } else {
      var a2 = [], i2 = [];
      for (o2 = 1; o2 < t2; ++o2)
        o2 >= 2 * e2 + 1 || o2 % 2 == 1 ? i2.push(o2) : a2.push(o2);
      r2.push.apply(r2, a2), r2.push(0), r2.push.apply(r2, i2);
    }
    return r2;
  }
  function gr(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = true);
    var o2 = [];
    r2 ? o2.push(t2[0] / n2) : o2.push(t2[0] * n2);
    for (var a2 = 1; a2 < t2.length; ++a2)
      a2 <= e2.length ? r2 ? o2.push(e2[a2 - 1] * t2[a2]) : o2.push(t2[a2] / e2[a2 - 1]) : o2.push(t2[a2]);
    return o2;
  }
  function mr(t2, e2) {
    for (var n2 = [0], r2 = 0; r2 < e2; ++r2)
      n2.push(t2[r2][0]);
    return n2;
  }
  function yr(t2, e2, n2) {
    for (var r2 = t2.slice(0, 1), o2 = 0; o2 < n2; ++o2)
      r2.push(t2[o2 + 1] - e2[o2][0] - e2[o2][1]);
    return r2;
  }
  var xr = "Add";
  var wr = "Div";
  var Er = "SquaredDifference";
  var Sr = "BroadcastTo";
  var Ar = "OneHot";
  var Tr = "Identity";
  var Dr = "Tile";
  var Nr = "PadV2";
  var Or = An({ add_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "add"), o2 = gn(e2, "b", "add");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = { a: r2, b: o2 };
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.add(r2, o2);
      return e3([r2, o2]), n3;
    }, a2, null, xr);
  } });
  function Mr(t2, e2) {
    for (var n2 = t2.length, r2 = [], o2 = 0; o2 < n2; o2++) {
      var a2 = n2 - 1 - o2, i2 = t2[a2] || 1;
      (e2[e2.length - 1 - o2] || 1) > 1 && 1 === i2 && r2.unshift(a2);
    }
    return r2;
  }
  function Br(t2, e2) {
    for (var n2 = [], r2 = 0; r2 < e2.length; r2++) {
      var o2 = t2[t2.length - r2 - 1], a2 = e2.length - r2 - 1, i2 = e2[a2];
      (null == o2 || 1 === o2 && i2 > 1) && n2.unshift(a2);
    }
    return n2;
  }
  function Pr(t2, e2) {
    for (var n2 = [], r2 = Math.max(t2.length, e2.length), o2 = 0; o2 < r2; o2++) {
      var a2 = t2[t2.length - o2 - 1];
      null == a2 && (a2 = 1);
      var i2 = e2[e2.length - o2 - 1];
      if (null == i2 && (i2 = 1), 1 === a2)
        n2.unshift(i2);
      else if (1 === i2)
        n2.unshift(a2);
      else {
        if (a2 !== i2)
          throw Error("Operands could not be broadcast together with shapes " + t2 + " and " + e2 + ".");
        n2.unshift(a2);
      }
    }
    return n2;
  }
  var Lr = An({ abs_: function(t2) {
    var e2 = gn(t2, "x", "abs");
    return "complex64" === e2.dtype ? Lt.runKernelFunc(function(t3) {
      return t3.complexAbs(e2);
    }, { $x: e2 }) : Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.abs(e2);
      return n2([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { x: function() {
        return t3.mul(n2.toFloat().step(-1));
      } };
    }, "Abs");
  } });
  var Wr = An({ acos_: function(t2) {
    var e2 = gn(t2, "x", "acos");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.acos(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.divStrict(On(1).sub(n2.toFloat().square()).sqrt()).neg();
      } };
    });
  } });
  var Ur = An({ acosh_: function(t2) {
    var e2 = gn(t2, "x", "acosh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.acosh(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.divStrict(n2.toFloat().square().sub(1).sqrt());
      } };
    });
  } });
  var Vr = An({ asin_: function(t2) {
    var e2 = gn(t2, "x", "asin");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.asin(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.divStrict(On(1).sub(n2.toFloat().square()).sqrt());
      } };
    });
  } });
  var zr = An({ asinh_: function(t2) {
    var e2 = gn(t2, "x", "asinh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.asinh(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.divStrict(On(1).add(n2.toFloat().square()).sqrt());
      } };
    });
  } });
  var Gr = An({ atan_: function(t2) {
    var e2 = gn(t2, "x", "atan");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.atan(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(n2.toFloat().square().add(1));
      } };
    });
  } });
  var Hr = An({ atanh_: function(t2) {
    var e2 = gn(t2, "x", "atanh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.atanh(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(On(1).sub(n2.toFloat().square()));
      } };
    });
  } });
  var qr = An({ ceil_: function(t2) {
    var e2 = gn(t2, "x", "ceil");
    return Lt.runKernelFunc(function(t3) {
      return t3.ceil(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var Kr = An({ clipByValue_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "clipByValue");
    C(e2 <= n2, function() {
      return "Error in clip: min (" + e2 + ") must be less than or equal to max (" + n2 + ").";
    });
    var o2 = [r2], a2 = { min: e2, max: n2 };
    return Lt.runKernelFunc(function(t3, o3) {
      var a3 = t3.clip(r2, e2, n2);
      return o3([r2]), a3;
    }, { x: r2 }, function(t3, r3) {
      var o3 = r3[0];
      return { x: function() {
        return t3.where(o3.greaterEqual(e2).logicalAnd(o3.lessEqual(n2)), Xn(t3));
      } };
    }, "ClipByValue", a2, o2);
  } });
  var jr = An({ cos_: function(t2) {
    var e2 = gn(t2, "x", "cos"), n2 = [e2];
    return Lt.runKernelFunc(function(t3, n3) {
      var r2 = t3.cos(e2);
      return n3([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n3 = e3[0];
      return { x: function() {
        return n3.toFloat().sin().neg().mul(t3);
      } };
    }, "Cos", {}, n2);
  } });
  var Xr = An({ cosh_: function(t2) {
    var e2 = gn(t2, "x", "cosh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.cosh(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return n2.toFloat().sinh().mulStrict(t3);
      } };
    });
  } });
  var Yr = An({ erf_: function(t2) {
    var e2 = gn(t2, "x", "erf");
    return C("int32" === e2.dtype || "float32" === e2.dtype, function() {
      return "Input dtype must be `int32` or `float32`.";
    }), "int32" === e2.dtype && (e2 = e2.toFloat()), Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.erf(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.mul(n2.square().neg().exp().mul(2 / Math.sqrt(Math.PI)));
      } };
    });
  } });
  var $r = An({ exp_: function(t2) {
    var e2 = gn(t2, "x", "exp");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.exp(e2);
      return n2([r2]), r2;
    }, { x: e2 }, function(t3, e3) {
      return { x: function() {
        return t3.mulStrict(e3[0]);
      } };
    }, "Exp", {}, [], [true]);
  } });
  var Qr = An({ expm1_: function(t2) {
    var e2 = gn(t2, "x", "expm1");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.expm1(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.mul(n2.exp());
      } };
    });
  } });
  var Jr = An({ floor_: function(t2) {
    var e2 = gn(t2, "x", "floor");
    return Lt.runKernelFunc(function(t3) {
      return t3.floor(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var Zr = An({ log_: function(t2) {
    var e2 = gn(t2, "x", "log"), n2 = [e2];
    return Lt.runKernelFunc(function(t3, n3) {
      var r2 = t3.log(e2);
      return n3([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n3 = e3[0];
      return { x: function() {
        return t3.div(n3.toFloat());
      } };
    }, "Log", {}, n2);
  } });
  var to = An({ log1p_: function(t2) {
    var e2 = gn(t2, "x", "log1p");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.log1p(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(n2.add(1));
      } };
    });
  } });
  var eo = An({ logSigmoid_: function(t2) {
    var e2 = gn(t2, "x", "logSigmoid");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.softplus(e2.neg()).neg();
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.mul(n2.neg().sigmoid());
      } };
    });
  } });
  var no = An({ neg_: function(t2) {
    var e2 = gn(t2, "x", "neg"), n2 = [e2];
    return Lt.runKernelFunc(function(t3) {
      return t3.neg(e2);
    }, { x: e2 }, function(t3) {
      return { x: function() {
        return t3.neg();
      } };
    }, "Neg", {}, n2);
  } });
  var ro = An({ reciprocal_: function(t2) {
    var e2 = gn(t2, "x", "reciprocal");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.reciprocal(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(n2.square().neg());
      } };
    });
  } });
  var oo = An({ round_: function(t2) {
    var e2 = gn(t2, "x", "round");
    return Lt.runKernelFunc(function(t3) {
      return t3.round(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var ao = An({ rsqrt_: function(t2) {
    var e2 = gn(t2, "x", "rsqrt"), n2 = [e2];
    return Lt.runKernelFunc(function(t3, n3) {
      var r2 = t3.rsqrt(e2);
      return n3([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n3 = e3[0];
      return { x: function() {
        return t3.div(n3.pow(1.5).mul(2)).neg();
      } };
    }, "Rsqrt", {}, n2);
  } });
  var io = An({ sigmoid_: function(t2) {
    var e2 = gn(t2, "x", "sigmoid");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.sigmoid(e2);
      return n2([r2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { x: function() {
        return t3.mul(n2.mul(On(1).sub(n2)));
      } };
    }, "Sigmoid");
  } });
  var so = An({ sign_: function(t2) {
    var e2 = gn(t2, "x", "sign");
    return Lt.runKernelFunc(function(t3) {
      return t3.sign(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var uo = An({ isNaN_: function(t2) {
    var e2 = gn(t2, "x", "isNaN");
    return Lt.runKernelFunc(function(t3) {
      return t3.isNaN(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var co = An({ isInf_: function(t2) {
    var e2 = gn(t2, "x", "isInf");
    return Lt.runKernelFunc(function(t3) {
      return t3.isInf(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var lo = An({ isFinite_: function(t2) {
    var e2 = gn(t2, "x", "isFinite");
    return Lt.runKernelFunc(function(t3) {
      return t3.isFinite(e2);
    }, { $x: e2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var ho = An({ sin_: function(t2) {
    var e2 = gn(t2, "x", "sin"), n2 = [e2];
    return Lt.runKernelFunc(function(t3, n3) {
      var r2 = t3.sin(e2);
      return n3([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n3 = e3[0];
      return { x: function() {
        return n3.toFloat().cos().mul(t3);
      } };
    }, "Sin", {}, n2);
  } });
  var fo = An({ sinh_: function(t2) {
    var e2 = gn(t2, "x", "sinh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.sinh(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return n2.toFloat().cosh().mulStrict(t3);
      } };
    });
  } });
  var po = An({ softplus_: function(t2) {
    var e2 = gn(t2, "x", "softplus");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.softplus(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.mul(n2.sigmoid());
      } };
    });
  } });
  var vo = An({ sqrt_: function(t2) {
    var e2 = gn(t2, "x", "sqrt");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.sqrt(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(n2.toFloat().sqrt().mul(2));
      } };
    });
  } });
  var go = An({ step_: function(t2, e2) {
    void 0 === e2 && (e2 = 0);
    var n2 = gn(t2, "x", "step");
    return Lt.runKernelFunc(function(t3) {
      return t3.step(n2, e2);
    }, { $x: n2 }, function(t3) {
      return { $x: function() {
        return Xn(t3);
      } };
    });
  } });
  var mo = An({ tan_: function(t2) {
    var e2 = gn(t2, "x", "tan");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.tan(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return t3.div(n2.cos().square());
      } };
    });
  } });
  var yo = An({ tanh_: function(t2) {
    var e2 = gn(t2, "x", "tanh");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.tanh(e2);
      return n2([r2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { x: function() {
        return On(1).sub(n2.square()).mulStrict(t3);
      } };
    }, "Tanh", {}, null, [true]);
  } });
  var xo = An({ addStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "addStrict"), r2 = gn(e2, "b", "addStrict");
    return E(n2.shape, r2.shape, "Error in addStrict: "), n2.add(r2);
  } });
  var bo = An({ atan2_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "atan2"), o2 = gn(e2, "b", "atan2");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape);
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.atan2(r2, o2);
      return e3([r2, o2]), n3;
    }, { $a: r2, $b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { $a: function() {
        var e4 = Or(n3.square(), r3.square()), o3 = t3.mul(r3.div(e4)), i2 = Br(n3.shape, a2);
        return i2.length > 0 && (o3 = o3.sum(i2)), o3.reshape(n3.shape);
      }, $b: function() {
        var e4 = Or(n3.square(), r3.square()), o3 = no(t3.mul(n3.div(e4))), i2 = Br(r3.shape, a2);
        return i2.length > 0 && (o3 = o3.sum(i2)), o3.reshape(r3.shape);
      } };
    });
  } });
  var wo = An({ divStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "div"), r2 = gn(e2, "b", "div");
    return E(n2.shape, r2.shape, "Error in divideStrict: "), n2.div(r2);
  } });
  var Co = An({ floorDiv_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "floorDiv"), o2 = gn(e2, "b", "floorDiv");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape);
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.floorDiv(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { a: function() {
        var e4 = t3.div(r3.toFloat()), o3 = Br(n3.shape, a2);
        return o3.length > 0 ? e4.sum(o3).reshape(n3.shape) : e4;
      }, b: function() {
        var e4 = t3.mul(n3.toFloat()), o3 = Br(r3.shape, a2);
        o3.length > 0 && (e4 = e4.sum(o3).reshape(r3.shape));
        var i2 = r3.square();
        return e4.div(i2.toFloat()).neg();
      } };
    }, "FloorDiv");
  } });
  var Eo = An({ maximum_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "maximum"), o2 = gn(e2, "b", "maximum");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "bool" === r2.dtype && (r2 = r2.toInt(), o2 = o2.toInt()), Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.maximum(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { a: function() {
        return t3.mul(n3.greaterEqual(r3).toFloat());
      }, b: function() {
        return t3.mul(n3.less(r3).toFloat());
      } };
    }, "Maximum");
  } });
  var Ro = An({ maximumStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "maximumStrict"), r2 = gn(e2, "b", "maximumStrict");
    return E(n2.shape, r2.shape, "Error in maximumStrict: "), n2.maximum(r2);
  } });
  var Io = An({ minimum_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "minimum"), o2 = gn(e2, "b", "minimum");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "bool" === r2.dtype && (r2 = r2.toInt(), o2 = o2.toInt()), Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.minimum(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { a: function() {
        return t3.mul(n3.lessEqual(r3).toFloat());
      }, b: function() {
        return t3.mul(n3.greater(r3).toFloat());
      } };
    }, "Minimum");
  } });
  var ko = An({ minimumStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "minimumStrict"), r2 = gn(e2, "b", "minimumStrict");
    return E(n2.shape, r2.shape, "Error in minimumStrict: "), n2.minimum(r2);
  } });
  var So = An({ mod_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "mod"), o2 = gn(e2, "b", "mod");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape);
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.mod(r2, o2);
      return e3([r2, o2]), n3;
    }, { $a: r2, $b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { $a: function() {
        var e4 = Br(n3.shape, a2);
        return e4.length > 0 ? t3.sum(e4).reshape(n3.shape) : t3;
      }, $b: function() {
        var e4 = t3.mul(n3.div(r3).floor().neg()), o3 = Br(r3.shape, a2);
        return o3.length > 0 ? e4.sum(o3).reshape(r3.shape) : e4;
      } };
    });
  } });
  var Ao = An({ modStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "modStrict"), r2 = gn(e2, "b", "modStrict");
    return E(n2.shape, r2.shape, "Error in modStrict: "), n2.mod(r2);
  } });
  var To = An({ mul_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "mul"), o2 = gn(e2, "b", "mul");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape);
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.multiply(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { a: function() {
        var e4 = t3.mul(r3.toFloat()), o3 = Br(n3.shape, a2);
        return o3.length > 0 ? e4.sum(o3).reshape(n3.shape) : e4;
      }, b: function() {
        var e4 = t3.mul(n3.toFloat()), o3 = Br(r3.shape, a2);
        return o3.length > 0 ? e4.sum(o3).reshape(r3.shape) : e4;
      } };
    }, "Mul");
  } });
  var Do = An({ mulStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "mul"), r2 = gn(e2, "b", "mul");
    return E(n2.shape, r2.shape, "Error in multiplyStrict: "), n2.mul(r2);
  } });
  var No = An({ pow_: function(t2, e2) {
    var n2, r2 = gn(t2, "base", "pow"), o2 = gn(e2, "exp", "pow");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape), i2 = [r2, o2];
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.pow(r2, o2);
      return e3([r2, o2, n3]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1], o3 = e3[2];
      return { a: function() {
        var e4 = r3.toFloat(), o4 = t3.mul(e4.mul(n3.pow(e4.sub(On(1))))), i3 = Br(n3.shape, a2);
        return i3.length > 0 && (o4 = o4.sum(i3)), o4.reshape(n3.shape);
      }, b: function() {
        var e4 = n3.greater(0), i3 = n3.log().where(e4, Xn(n3)), s2 = t3.mul(o3.mul(i3)), u2 = Br(r3.shape, a2);
        return u2.length > 0 && (s2 = s2.sum(u2)), s2.reshape(r3.shape);
      } };
    }, "Pow", {}, i2, [true]);
  } });
  var Fo = An({ powStrict_: function(t2, e2) {
    return E(t2.shape, e2.shape, "Error in powStrict: "), t2.pow(e2);
  } });
  var _o = An({ squaredDifferenceStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "squaredDifferenceStrict"), r2 = gn(e2, "b", "squaredDifferenceStrict");
    return E(n2.shape, r2.shape, "Error in squaredDifferenceStrict: "), n2.squaredDifference(r2);
  } });
  var Oo = An({ sub_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "sub"), o2 = gn(e2, "b", "sub");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
    var a2 = Pr(r2.shape, o2.shape);
    return Lt.runKernelFunc(function(t3) {
      return t3.subtract(r2, o2);
    }, { a: r2, b: o2 }, function(t3) {
      return { a: function() {
        var e3 = t3, n3 = Br(r2.shape, a2);
        return n3.length > 0 && (e3 = e3.sum(n3)), e3.reshape(r2.shape);
      }, b: function() {
        var e3 = t3, n3 = Br(o2.shape, a2);
        return n3.length > 0 && (e3 = e3.sum(n3)), e3.neg().reshape(o2.shape);
      } };
    }, "Sub");
  } });
  var Mo = An({ subStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "subStrict"), r2 = gn(e2, "b", "subStrict");
    return E(n2.shape, r2.shape, "Error in subStrict: "), n2.sub(r2);
  } });
  var Bo = An({ div_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "div"), o2 = gn(e2, "b", "div");
    if (n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "int32" === r2.dtype && "int32" === o2.dtype)
      return Co(r2, o2);
    var a2 = { a: r2, b: o2 };
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.realDivide(r2, o2);
      return e3([r2, o2]), n3;
    }, a2, null, wr, {});
  } });
  function Po(t2, e2) {
    if (t2.rank < 1)
      throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t2.rank + ".");
    if (e2.rank < 1)
      throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e2.rank + ".");
    if ("int32" !== e2.dtype)
      throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e2.dtype + ".");
    if (e2.shape[e2.rank - 1] > t2.rank)
      throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e2.shape[e2.rank - 1] + " vs. " + t2.rank);
    if (0 === t2.size)
      throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t2.shape + ".");
    for (var n2 = e2.shape, r2 = n2[n2.length - 1], o2 = 1, a2 = 0; a2 < n2.length - 1; ++a2)
      o2 *= n2[a2];
    var i2 = t2.shape, s2 = n2.slice();
    s2.pop();
    var u2 = 1;
    for (a2 = r2; a2 < t2.rank; ++a2)
      u2 *= i2[a2], s2.push(i2[a2]);
    var c2 = $(t2.shape).map(function(t3) {
      return t3 / u2;
    }).concat([1]).slice(0, r2);
    return [s2, o2, u2, c2];
  }
  var Lo = Object.freeze({ prepareAndValidate: Po });
  var Wo = 30;
  function Uo(t2) {
    return t2 <= Wo ? t2 : Y(t2, Math.floor(Math.sqrt(t2)));
  }
  function Vo(t2, e2, n2) {
    var r2 = e2.rank > 1 ? e2.shape[e2.rank - 1] : 1, o2 = e2.rank > 1 ? e2.rank - 1 : 1, a2 = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n2.shape + ", indices.shape: " + e2.shape + ", shape: " + t2 + ", sliceDim: " + r2 + ", and batchDim: " + o2 + ".";
    if (n2.rank < o2)
      throw new Error(a2 + " update.rank < " + o2 + ". ");
    if (t2.length < r2 + (n2.rank - o2))
      throw new Error(a2 + " Output shape length < " + (r2 + (n2.rank - o2)));
    if (n2.rank !== o2 + t2.length - r2)
      throw new Error(a2 + " update.rank != " + (o2 + t2.length - r2));
    for (var i2 = 0; i2 < o2; ++i2)
      if (n2.shape[i2] !== e2.shape[i2])
        throw new Error(a2 + " updates.shape[" + i2 + "] (" + n2.shape[i2] + ") != indices.shape[" + i2 + "] (" + e2.shape[i2] + ").");
    for (i2 = 0; i2 < n2.rank - o2; ++i2)
      if (n2.shape[i2 + o2] !== t2[i2 + r2])
        throw new Error(a2 + " updates.shape[" + (i2 + o2) + "] (" + n2.shape[i2 + o2] + ") != shape[" + (i2 + o2) + "] (" + t2[i2 + o2] + ")");
  }
  function zo(t2, e2, n2) {
    if (e2.rank < 1)
      throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e2.rank + ".");
    if (t2.rank < 1)
      throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t2.rank + ".");
    if ("int32" !== e2.dtype)
      throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e2.dtype);
    if (n2.length < 1)
      throw new Error("Output rank must be greater or equal to 1, but got shape: " + n2);
    if (0 === n2.length) {
      if (0 === e2.size)
        throw new Error("Indices specified for empty output. indices shape: " + e2.shape);
      if (0 === t2.size)
        throw new Error("Updates specified for empty output. updates shape: " + t2.shape);
    }
    Vo(n2, e2, t2);
  }
  function Go(t2, e2, n2) {
    for (var r2 = e2.shape.length, o2 = r2 > 1 ? e2.shape[r2 - 1] : 1, a2 = n2.length, i2 = 1, s2 = o2; s2 < a2; ++s2)
      i2 *= n2[s2];
    var u2 = o2 < 1 ? 1 : o2;
    return { sliceRank: o2, numUpdates: k(e2.shape) / u2, sliceSize: i2, strides: $(n2.slice(0, o2)).concat([1]), outputSize: k(n2) };
  }
  var Ho = Object.freeze({ validateUpdateShape: Vo, validateInput: zo, calculateShapes: Go });
  function qo(t2, e2, n2) {
    C(t2.rank === e2.length, function() {
      return "Error in slice" + t2.rank + "D: Length of begin " + e2 + " must match the rank of the array (" + t2.rank + ").";
    }), C(t2.rank === n2.length, function() {
      return "Error in slice" + t2.rank + "D: Length of size " + n2 + " must match the rank of the array (" + t2.rank + ").";
    });
    for (var r2 = function(r3) {
      C(e2[r3] + n2[r3] <= t2.shape[r3], function() {
        return "Error in slice" + t2.rank + "D: begin[" + r3 + "] + size[" + r3 + "] (" + (e2[r3] + n2[r3]) + ") would overflow input.shape[" + r3 + "] (" + t2.shape[r3] + ")";
      });
    }, o2 = 0; o2 < t2.rank; ++o2)
      r2(o2);
  }
  function Ko(t2) {
    for (var e2 = [], n2 = 0; t2 > 0; )
      1 & t2 && e2.push(n2), t2 /= 2, n2++;
    return e2;
  }
  function jo(t2, e2, n2) {
    for (var r2 = [], o2 = 0; o2 < t2.length; o2++)
      r2[o2] = Math.ceil((e2[o2] - t2[o2]) / n2[o2]);
    return r2;
  }
  function Xo(t2, e2, n2, r2, o2) {
    var a2 = e2[o2], i2 = n2[o2] || 1;
    (t2 & 1 << o2 || null == a2) && (a2 = i2 > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
    var s2 = r2[o2];
    return a2 < 0 && (a2 += s2), a2 = x(0, a2, s2 - 1);
  }
  function Yo(t2, e2, n2, r2, o2) {
    var a2 = e2[o2], i2 = n2[o2] || 1;
    (t2 & 1 << o2 || null == a2) && (a2 = i2 > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
    var s2 = r2[o2];
    return a2 < 0 && (a2 += s2), a2 = i2 > 0 ? x(0, a2, s2) : x(-1, a2, s2 - 1);
  }
  function $o(t2, e2, n2) {
    for (var r2 = n2.length, o2 = 0; o2 < n2.length; o2++)
      if (n2[o2] > 1) {
        r2 = o2;
        break;
      }
    for (o2 = r2 + 1; o2 < n2.length; o2++)
      if (e2[o2] > 0 || n2[o2] !== t2[o2])
        return false;
    return true;
  }
  function Qo(t2, e2) {
    for (var n2 = t2.length > 0 ? t2[t2.length - 1] : 1, r2 = 0; r2 < t2.length - 1; r2++)
      n2 += t2[r2] * e2[r2];
    return n2;
  }
  var Jo = Object.freeze({ assertParamsValid: qo, maskToAxes: Ko, computeOutShape: jo, startForAxis: Xo, stopForAxis: Yo, isSliceContinous: $o, computeFlatOffset: Qo });
  function ra(t2, e2) {
    C(X(t2), function() {
      return "The f passed in variableGrads(f) must be a function";
    }), C(null == e2 || Array.isArray(e2) && e2.every(function(t3) {
      return t3 instanceof St;
    }), function() {
      return "The varList passed in variableGrads(f, varList) must be an array of variables";
    });
    var n2 = null != e2;
    if (!n2)
      for (var r2 in e2 = [], Lt.registeredVariables)
        e2.push(Lt.registeredVariables[r2]);
    var o2 = n2 ? e2.filter(function(t3) {
      return !t3.trainable;
    }) : null, a2 = e2.length;
    C((e2 = e2.filter(function(t3) {
      return t3.trainable;
    })).length > 0, function() {
      return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + a2 + " variables is trainable.";
    });
    var i2 = Lt.gradients(t2, e2, null, true), s2 = i2.value, u2 = i2.grads;
    C(u2.some(function(t3) {
      return null != t3;
    }), function() {
      return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().";
    }), C(0 === s2.rank, function() {
      return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s2.rank + " tensor";
    });
    var c2 = {};
    return e2.forEach(function(t3, e3) {
      null != u2[e3] && (c2[t3.name] = u2[e3]);
    }), null != o2 && o2.forEach(function(t3) {
      return c2[t3.name] = null;
    }), { value: s2, grads: c2 };
  }
  function oa(t2) {
    return Lt.customGrad(t2);
  }
  var ia = An({ softmax_: function(t2, e2) {
    void 0 === e2 && (e2 = -1);
    var n2 = gn(t2, "logits", "softmax", "float32");
    if (-1 === e2 && (e2 = n2.rank - 1), e2 !== n2.rank - 1)
      throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + n2.rank + " and dim was " + e2);
    return Lt.runKernelFunc(function(t3, r2) {
      var o2 = t3.softmax(n2, e2);
      return r2([o2]), o2;
    }, { logits: n2 }, function(t3, n3) {
      var r2 = n3[0], o2 = t3.mul(r2);
      return { logits: function() {
        return o2.sub(o2.sum([e2], true).mul(r2));
      } };
    }, "Softmax", { dim: e2 }, [], [true]);
  } });
  var sa = An({ logSoftmax_: function(t2, e2) {
    void 0 === e2 && (e2 = -1);
    var n2 = gn(t2, "logits", "logSoftmax");
    if (-1 === e2 && (e2 = n2.rank - 1), e2 !== n2.rank - 1)
      throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + n2.rank + " and axis was " + e2);
    return oa(function(t3, n3) {
      var r2 = t3.max(e2, true), o2 = t3.sub(r2), a2 = o2.toFloat().sub(o2.exp().sum(e2, true).log());
      n3([a2]);
      return { value: a2, gradFunc: function(t4, n4) {
        var r3 = n4[0].exp();
        return t4.sub(t4.sum(e2, true).mul(r3));
      } };
    })(n2);
  } });
  var ua = An({ transpose_: function(t2, e2) {
    var n2 = gn(t2, "x", "transpose");
    if (null == e2 && (e2 = n2.shape.map(function(t3, e3) {
      return e3;
    }).reverse()), C(n2.rank === e2.length, function() {
      return "Error in transpose: rank of input " + n2.rank + " must match length of perm " + e2 + ".";
    }), e2.forEach(function(t3) {
      C(t3 >= 0 && t3 < n2.rank, function() {
        return "All entries in 'perm' must be between 0 and " + (n2.rank - 1) + " but got " + e2;
      });
    }), n2.rank <= 1)
      return n2.clone();
    var r2 = { perm: e2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.transpose(n2, e2);
    }, { x: n2 }, null, "Transpose", r2);
  } });
  var ca = function() {
    function t2(t3, e2) {
      this.backend = t3, this.dataMover = e2, this.data = /* @__PURE__ */ new WeakMap(), this.dataIdsCount = 0;
    }
    return t2.prototype.get = function(t3) {
      return this.data.has(t3) || this.dataMover.moveData(this.backend, t3), this.data.get(t3);
    }, t2.prototype.set = function(t3, e2) {
      this.dataIdsCount++, this.data.set(t3, e2);
    }, t2.prototype.has = function(t3) {
      return this.data.has(t3);
    }, t2.prototype.delete = function(t3) {
      return this.dataIdsCount--, this.data.delete(t3);
    }, t2.prototype.numDataIds = function() {
      return this.dataIdsCount;
    }, t2;
  }();
  var la = function() {
    function t2() {
    }
    return t2.prototype.time = function(t3) {
      return ha("time");
    }, t2.prototype.read = function(t3) {
      return ha("read");
    }, t2.prototype.readSync = function(t3) {
      return ha("readSync");
    }, t2.prototype.numDataIds = function() {
      return ha("numDataIds");
    }, t2.prototype.disposeData = function(t3) {
      return ha("disposeData");
    }, t2.prototype.write = function(t3, e2, n2) {
      return ha("write");
    }, t2.prototype.move = function(t3, e2, n2, r2) {
      return ha("move");
    }, t2.prototype.memory = function() {
      return ha("memory");
    }, t2.prototype.floatPrecision = function() {
      return ha("floatPrecision");
    }, t2.prototype.epsilon = function() {
      return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
    }, t2.prototype.batchMatMul = function(t3, e2, n2, r2) {
      return ha("batchMatMul");
    }, t2.prototype.fusedBatchMatMul = function(t3) {
      t3.a, t3.b, t3.transposeA, t3.transposeB, t3.bias, t3.activation, t3.preluActivationWeights;
      return ha("fusedBatchMatMul");
    }, t2.prototype.slice = function(t3, e2, n2) {
      return ha("slice");
    }, t2.prototype.stridedSlice = function(t3, e2, n2, r2) {
      return ha("stridedSlice");
    }, t2.prototype.unstack = function(t3, e2) {
      return ha("unstack");
    }, t2.prototype.reverse = function(t3, e2) {
      return ha("reverse");
    }, t2.prototype.concat = function(t3, e2) {
      return ha("concat");
    }, t2.prototype.neg = function(t3) {
      return ha("neg");
    }, t2.prototype.add = function(t3, e2) {
      return ha("add");
    }, t2.prototype.addN = function(t3) {
      return ha("addN");
    }, t2.prototype.subtract = function(t3, e2) {
      return ha("subtract");
    }, t2.prototype.multiply = function(t3, e2) {
      return ha("multiply");
    }, t2.prototype.realDivide = function(t3, e2) {
      return ha("realDivide");
    }, t2.prototype.floorDiv = function(t3, e2) {
      return ha("floorDiv");
    }, t2.prototype.sum = function(t3, e2) {
      return ha("sum");
    }, t2.prototype.prod = function(t3, e2) {
      return ha("prod");
    }, t2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
      return ha("unsortedSegmentSum");
    }, t2.prototype.argMin = function(t3, e2) {
      return ha("argMin");
    }, t2.prototype.argMax = function(t3, e2) {
      return ha("argMax");
    }, t2.prototype.equal = function(t3, e2) {
      return ha("equal");
    }, t2.prototype.notEqual = function(t3, e2) {
      return ha("notEqual");
    }, t2.prototype.less = function(t3, e2) {
      return ha("less");
    }, t2.prototype.lessEqual = function(t3, e2) {
      return ha("lessEqual");
    }, t2.prototype.greater = function(t3, e2) {
      return ha("greater");
    }, t2.prototype.greaterEqual = function(t3, e2) {
      return ha("greaterEqual");
    }, t2.prototype.logicalNot = function(t3) {
      return ha("logicalNot");
    }, t2.prototype.logicalAnd = function(t3, e2) {
      return ha("logicalAnd");
    }, t2.prototype.logicalOr = function(t3, e2) {
      return ha("logicalOr");
    }, t2.prototype.where = function(t3) {
      return ha("where");
    }, t2.prototype.select = function(t3, e2, n2) {
      return ha("select");
    }, t2.prototype.topk = function(t3, e2, n2) {
      return ha("topk");
    }, t2.prototype.min = function(t3, e2) {
      return ha("min");
    }, t2.prototype.minimum = function(t3, e2) {
      return ha("minimum");
    }, t2.prototype.mod = function(t3, e2) {
      return ha("mod");
    }, t2.prototype.max = function(t3, e2) {
      return ha("max");
    }, t2.prototype.maximum = function(t3, e2) {
      return ha("maximum");
    }, t2.prototype.all = function(t3, e2) {
      return ha("all");
    }, t2.prototype.any = function(t3, e2) {
      return ha("any");
    }, t2.prototype.squaredDifference = function(t3, e2) {
      return ha("squaredDifference");
    }, t2.prototype.ceil = function(t3) {
      return ha("ceil");
    }, t2.prototype.floor = function(t3) {
      return ha("floor");
    }, t2.prototype.round = function(t3) {
      return ha("round");
    }, t2.prototype.sign = function(t3) {
      return ha("sign");
    }, t2.prototype.isNaN = function(t3) {
      return ha("isNaN");
    }, t2.prototype.isInf = function(t3) {
      return ha("isInf");
    }, t2.prototype.isFinite = function(t3) {
      return ha("isFinite");
    }, t2.prototype.pow = function(t3, e2) {
      return ha("pow");
    }, t2.prototype.exp = function(t3) {
      return ha("exp");
    }, t2.prototype.expm1 = function(t3) {
      return ha("expm1");
    }, t2.prototype.softmax = function(t3, e2) {
      return ha("softmax");
    }, t2.prototype.log = function(t3) {
      return ha("log");
    }, t2.prototype.log1p = function(t3) {
      return ha("log1p");
    }, t2.prototype.sqrt = function(t3) {
      return ha("sqrt");
    }, t2.prototype.rsqrt = function(t3) {
      return ha("rsqrt");
    }, t2.prototype.square = function(t3) {
      return ha("square");
    }, t2.prototype.reciprocal = function(t3) {
      return ha("reciprocal");
    }, t2.prototype.relu = function(t3) {
      return ha("relu");
    }, t2.prototype.relu6 = function(t3) {
      return ha("relu6");
    }, t2.prototype.prelu = function(t3, e2) {
      return ha("prelu");
    }, t2.prototype.elu = function(t3) {
      return ha("elu");
    }, t2.prototype.eluDer = function(t3, e2) {
      return ha("eluDer");
    }, t2.prototype.selu = function(t3) {
      return ha("selu");
    }, t2.prototype.int = function(t3) {
      return ha("int");
    }, t2.prototype.clip = function(t3, e2, n2) {
      return ha("clip");
    }, t2.prototype.abs = function(t3) {
      return ha("abs");
    }, t2.prototype.complexAbs = function(t3) {
      return ha("complexAbs");
    }, t2.prototype.sigmoid = function(t3) {
      return ha("sigmoid");
    }, t2.prototype.softplus = function(t3) {
      return ha("softplus");
    }, t2.prototype.sin = function(t3) {
      return ha("sin");
    }, t2.prototype.cos = function(t3) {
      return ha("cos");
    }, t2.prototype.tan = function(t3) {
      return ha("tan");
    }, t2.prototype.asin = function(t3) {
      return ha("asin");
    }, t2.prototype.acos = function(t3) {
      return ha("acos");
    }, t2.prototype.atan = function(t3) {
      return ha("atan");
    }, t2.prototype.atan2 = function(t3, e2) {
      return ha("atan2");
    }, t2.prototype.sinh = function(t3) {
      return ha("sinh");
    }, t2.prototype.cosh = function(t3) {
      return ha("cosh");
    }, t2.prototype.tanh = function(t3) {
      return ha("tanh");
    }, t2.prototype.asinh = function(t3) {
      return ha("asinh");
    }, t2.prototype.acosh = function(t3) {
      return ha("acosh");
    }, t2.prototype.atanh = function(t3) {
      return ha("atanh");
    }, t2.prototype.erf = function(t3) {
      return ha("erf");
    }, t2.prototype.step = function(t3, e2) {
      return ha("step");
    }, t2.prototype.fusedConv2d = function(t3) {
      t3.input, t3.filter, t3.convInfo, t3.bias, t3.activation, t3.preluActivationWeights;
      return ha("fusedConv2d");
    }, t2.prototype.conv2d = function(t3, e2, n2) {
      return ha("conv2d");
    }, t2.prototype.conv2dDerInput = function(t3, e2, n2) {
      return ha("conv2dDerInput");
    }, t2.prototype.conv2dDerFilter = function(t3, e2, n2) {
      return ha("conv2dDerFilter");
    }, t2.prototype.fusedDepthwiseConv2D = function(t3) {
      t3.input, t3.filter, t3.convInfo, t3.bias, t3.activation, t3.preluActivationWeights;
      return ha("fusedDepthwiseConv2D");
    }, t2.prototype.depthwiseConv2D = function(t3, e2, n2) {
      return ha("depthwiseConv2D");
    }, t2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
      return ha("depthwiseConv2DDerInput");
    }, t2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
      return ha("depthwiseConv2DDerFilter");
    }, t2.prototype.conv3d = function(t3, e2, n2) {
      return ha("conv3d");
    }, t2.prototype.conv3dDerInput = function(t3, e2, n2) {
      return ha("conv3dDerInput");
    }, t2.prototype.conv3dDerFilter = function(t3, e2, n2) {
      return ha("conv3dDerFilter");
    }, t2.prototype.maxPool = function(t3, e2) {
      return ha("maxPool");
    }, t2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
      return ha("maxPoolBackprop");
    }, t2.prototype.avgPool = function(t3, e2) {
      return ha("avgPool");
    }, t2.prototype.avgPoolBackprop = function(t3, e2, n2) {
      return ha("avgPoolBackprop");
    }, t2.prototype.avgPool3d = function(t3, e2) {
      return ha("avgPool3d");
    }, t2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
      return ha("avgPool3dBackprop");
    }, t2.prototype.maxPool3d = function(t3, e2) {
      return ha("maxPool3d");
    }, t2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
      return ha("maxPool3dBackprop");
    }, t2.prototype.reshape = function(t3, e2) {
      return ha("reshape");
    }, t2.prototype.cast = function(t3, e2) {
      return ha("cast");
    }, t2.prototype.tile = function(t3, e2) {
      return ha("tile");
    }, t2.prototype.pad = function(t3, e2, n2) {
      return ha("pad");
    }, t2.prototype.transpose = function(t3, e2) {
      return ha("transpose");
    }, t2.prototype.gather = function(t3, e2, n2) {
      return ha("gather");
    }, t2.prototype.gatherND = function(t3, e2) {
      return ha("gatherND");
    }, t2.prototype.scatterND = function(t3, e2, n2) {
      return ha("scatterND");
    }, t2.prototype.batchToSpaceND = function(t3, e2, n2) {
      return ha("batchToSpaceND");
    }, t2.prototype.spaceToBatchND = function(t3, e2, n2) {
      return ha("spaceToBatchND");
    }, t2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
      return ha("resizeBilinear");
    }, t2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
      return ha("resizeBilinearBackprop");
    }, t2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
      return ha("resizeNearestNeighbor");
    }, t2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
      return ha("resizeNearestNeighborBackprop");
    }, t2.prototype.batchNormalization = function(t3, e2, n2, r2, o2, a2) {
      return ha("batchNormalization");
    }, t2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o2) {
      return ha("localResponseNormalization4D");
    }, t2.prototype.LRNGrad = function(t3, e2, n2, r2, o2, a2, i2) {
      return ha("LRNGrad");
    }, t2.prototype.multinomial = function(t3, e2, n2, r2) {
      return ha("multinomial");
    }, t2.prototype.oneHot = function(t3, e2, n2, r2) {
      return ha("oneHot");
    }, t2.prototype.cumsum = function(t3, e2, n2, r2) {
      return ha("cumsum");
    }, t2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o2) {
      return ha("nonMaxSuppression");
    }, t2.prototype.fft = function(t3) {
      return ha("fft");
    }, t2.prototype.ifft = function(t3) {
      return ha("ifft");
    }, t2.prototype.complex = function(t3, e2) {
      return ha("complex");
    }, t2.prototype.real = function(t3) {
      return ha("real");
    }, t2.prototype.imag = function(t3) {
      return ha("imag");
    }, t2.prototype.cropAndResize = function(t3, e2, n2, r2, o2, a2) {
      return ha("cropAndResize");
    }, t2.prototype.depthToSpace = function(t3, e2, n2) {
      return ha("depthToSpace");
    }, t2.prototype.split = function(t3, e2, n2) {
      return ha("split");
    }, t2.prototype.sparseToDense = function(t3, e2, n2, r2) {
      return ha("sparseToDense");
    }, t2.prototype.diag = function(t3) {
      return ha("diag");
    }, t2.prototype.fill = function(t3, e2, n2) {
      return ha("fill");
    }, t2.prototype.onesLike = function(t3) {
      return ha("onesLike");
    }, t2.prototype.zerosLike = function(t3) {
      return ha("zerosLike");
    }, t2.prototype.linspace = function(t3, e2, n2) {
      return ha("linspace");
    }, t2.prototype.dispose = function() {
      return ha("dispose");
    }, t2;
  }();
  function ha(t2) {
    throw new Error("'" + t2 + "' not yet implemented or not found in the registry. Did you forget to import the kernel?");
  }
  function fa(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === i2 && (i2 = "channelsLast");
    var s2, u2 = ma(e2), c2 = u2[0], l2 = u2[1];
    if ("channelsLast" === i2)
      s2 = [c2, l2, t2[3], t2[3]];
    else {
      if ("channelsFirst" !== i2)
        throw new Error("Unknown dataFormat " + i2);
      s2 = [c2, l2, t2[1], t2[1]];
    }
    return pa(t2, s2, n2, r2, o2, a2, false, i2);
  }
  function da(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === i2 && (i2 = "NDHWC");
    var s2, u2, c2 = ya(e2), l2 = c2[0], h2 = c2[1], f2 = c2[2];
    if ("NDHWC" === i2)
      u2 = "channelsLast", s2 = [l2, h2, f2, t2[4], t2[4]];
    else {
      if ("NCDHW" !== i2)
        throw new Error("Unknown dataFormat " + i2);
      u2 = "channelsFirst", s2 = [l2, h2, f2, t2[1], t2[1]];
    }
    return va(t2, s2, n2, r2, o2, false, u2, a2);
  }
  function pa(t2, e2, n2, r2, o2, a2, i2, s2) {
    void 0 === i2 && (i2 = false), void 0 === s2 && (s2 = "channelsLast");
    var u2 = [-1, -1, -1, -1], c2 = u2[0], l2 = u2[1], h2 = u2[2], f2 = u2[3];
    if ("channelsLast" === s2)
      c2 = t2[0], l2 = t2[1], h2 = t2[2], f2 = t2[3];
    else {
      if ("channelsFirst" !== s2)
        throw new Error("Unknown dataFormat " + s2);
      c2 = t2[0], f2 = t2[1], l2 = t2[2], h2 = t2[3];
    }
    var d2, p2 = e2[0], v = e2[1], g = e2[3], m2 = ma(n2), y2 = m2[0], x2 = m2[1], b2 = ma(r2), w2 = b2[0], E2 = b2[1], R2 = xa(p2, w2), I2 = xa(v, E2), k2 = function(t3, e3, n3, r3, o3, a3, i3, s3) {
      var u3, c3, l3;
      if ("number" == typeof t3) {
        u3 = { top: t3, bottom: t3, left: t3, right: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
        var h3 = function(t4, e4, n4, r4, o4) {
          null == r4 && (r4 = ga(t4, e4, n4));
          var a4 = t4[0], i4 = t4[1], s4 = ba((a4 - e4 + 2 * r4) / n4 + 1, o4);
          C(A(s4), function() {
            return "The output # of rows (" + s4 + ") must be an integer. Change the stride and/or zero pad parameters";
          });
          var u4 = ba((i4 - e4 + 2 * r4) / n4 + 1, o4);
          return C(A(u4), function() {
            return "The output # of columns (" + u4 + ") must be an integer. Change the stride and/or zero pad parameters";
          }), [s4, u4];
        }([e3, n3], a3, r3, t3, s3);
        c3 = h3[0], l3 = h3[1];
      } else if ("same" === t3) {
        c3 = Math.ceil(e3 / r3), l3 = Math.ceil(n3 / o3);
        var f3 = Math.max(0, (c3 - 1) * r3 + a3 - e3), d3 = Math.max(0, (l3 - 1) * o3 + i3 - n3), p3 = Math.floor(f3 / 2), v2 = f3 - p3, g2 = Math.floor(d3 / 2);
        u3 = { top: p3, bottom: v2, left: g2, right: d3 - g2, type: "SAME" };
      } else {
        if ("valid" !== t3)
          throw Error("Unknown padding parameter: " + t3);
        u3 = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }, c3 = Math.ceil((e3 - a3 + 1) / r3), l3 = Math.ceil((n3 - i3 + 1) / o3);
      }
      return { padInfo: u3, outHeight: c3, outWidth: l3 };
    }(o2, l2, h2, y2, x2, R2, I2, a2), S2 = k2.padInfo, T2 = k2.outHeight, D2 = k2.outWidth, N2 = i2 ? g * f2 : g;
    return "channelsFirst" === s2 ? d2 = [c2, N2, T2, D2] : "channelsLast" === s2 && (d2 = [c2, T2, D2, N2]), { batchSize: c2, dataFormat: s2, inHeight: l2, inWidth: h2, inChannels: f2, outHeight: T2, outWidth: D2, outChannels: N2, padInfo: S2, strideHeight: y2, strideWidth: x2, filterHeight: p2, filterWidth: v, effectiveFilterHeight: R2, effectiveFilterWidth: I2, dilationHeight: w2, dilationWidth: E2, inShape: t2, outShape: d2, filterShape: e2 };
  }
  function va(t2, e2, n2, r2, o2, a2, i2, s2) {
    void 0 === a2 && (a2 = false), void 0 === i2 && (i2 = "channelsLast");
    var u2 = [-1, -1, -1, -1, -1], c2 = u2[0], l2 = u2[1], h2 = u2[2], f2 = u2[3], d2 = u2[4];
    if ("channelsLast" === i2)
      c2 = t2[0], l2 = t2[1], h2 = t2[2], f2 = t2[3], d2 = t2[4];
    else {
      if ("channelsFirst" !== i2)
        throw new Error("Unknown dataFormat " + i2);
      c2 = t2[0], d2 = t2[1], l2 = t2[2], h2 = t2[3], f2 = t2[4];
    }
    var p2, v = e2[0], g = e2[1], m2 = e2[2], y2 = e2[4], x2 = ya(n2), b2 = x2[0], w2 = x2[1], E2 = x2[2], R2 = ya(r2), I2 = R2[0], k2 = R2[1], S2 = R2[2], T2 = xa(v, I2), D2 = xa(g, k2), N2 = xa(m2, S2), F2 = function(t3, e3, n3, r3, o3, a3, i3, s3, u3, c3, l3) {
      var h3, f3, d3, p3;
      if ("number" == typeof t3) {
        h3 = { top: t3, bottom: t3, left: t3, right: t3, front: t3, back: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
        var v2 = function(t4, e4, n4, r4, o4, a4) {
          null == o4 && (o4 = ga(t4, e4, r4));
          var i4 = t4[0], s4 = t4[1], u4 = t4[2], c4 = ba((i4 - e4 + 2 * o4) / r4 + 1, a4);
          C(A(c4), function() {
            return "The output # of depths (" + c4 + ") must be an integer. Change the stride and/or zero pad parameters";
          });
          var l4 = ba((s4 - e4 + 2 * o4) / r4 + 1, a4);
          C(A(l4), function() {
            return "The output # of rows (" + l4 + ") must be an integer. Change the stride and/or zero pad parameters";
          });
          var h4 = ba((u4 - e4 + 2 * o4) / r4 + 1, a4);
          return C(A(h4), function() {
            return "The output # of columns (" + h4 + ") must be an integer. Change the stride and/or zero pad parameters";
          }), [c4, l4, h4, n4];
        }([e3, n3, r3, 1], s3, 1, o3, t3, l3);
        f3 = v2[0], d3 = v2[1], p3 = v2[2];
      } else if ("same" === t3) {
        f3 = Math.ceil(e3 / o3), d3 = Math.ceil(n3 / a3), p3 = Math.ceil(r3 / i3);
        var g2 = (f3 - 1) * o3 + s3 - e3, m3 = (d3 - 1) * a3 + u3 - n3, y3 = (p3 - 1) * i3 + c3 - r3, x3 = Math.floor(g2 / 2), b3 = g2 - x3, w3 = Math.floor(m3 / 2), E3 = m3 - w3, R3 = Math.floor(y3 / 2);
        h3 = { top: w3, bottom: E3, left: R3, right: y3 - R3, front: x3, back: b3, type: "SAME" };
      } else {
        if ("valid" !== t3)
          throw Error("Unknown padding parameter: " + t3);
        h3 = { top: 0, bottom: 0, left: 0, right: 0, front: 0, back: 0, type: "VALID" }, f3 = Math.ceil((e3 - s3 + 1) / o3), d3 = Math.ceil((n3 - u3 + 1) / a3), p3 = Math.ceil((r3 - c3 + 1) / i3);
      }
      return { padInfo: h3, outDepth: f3, outHeight: d3, outWidth: p3 };
    }(o2, l2, h2, f2, b2, w2, E2, T2, D2, N2, s2), _2 = F2.padInfo, O2 = F2.outDepth, M2 = F2.outHeight, B2 = F2.outWidth, P2 = a2 ? y2 * d2 : y2;
    return "channelsFirst" === i2 ? p2 = [c2, P2, O2, M2, B2] : "channelsLast" === i2 && (p2 = [c2, O2, M2, B2, P2]), { batchSize: c2, dataFormat: i2, inDepth: l2, inHeight: h2, inWidth: f2, inChannels: d2, outDepth: O2, outHeight: M2, outWidth: B2, outChannels: P2, padInfo: _2, strideDepth: b2, strideHeight: w2, strideWidth: E2, filterDepth: v, filterHeight: g, filterWidth: m2, effectiveFilterDepth: T2, effectiveFilterHeight: D2, effectiveFilterWidth: N2, dilationDepth: I2, dilationHeight: k2, dilationWidth: S2, inShape: t2, outShape: p2, filterShape: e2 };
  }
  function ga(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = 1);
    var o2 = xa(e2, r2);
    return Math.floor((t2[0] * (n2 - 1) - n2 + o2) / 2);
  }
  function ma(t2) {
    return "number" == typeof t2 ? [t2, t2, t2] : 2 === t2.length ? [t2[0], t2[1], 1] : t2;
  }
  function ya(t2) {
    return "number" == typeof t2 ? [t2, t2, t2] : t2;
  }
  function xa(t2, e2) {
    return e2 <= 1 ? t2 : t2 + (t2 - 1) * (e2 - 1);
  }
  function ba(t2, e2) {
    if (!e2)
      return t2;
    switch (e2) {
      case "round":
        return Math.round(t2);
      case "ceil":
        return Math.ceil(t2);
      case "floor":
        return Math.floor(t2);
      default:
        throw new Error("Unknown roundingMode " + e2);
    }
  }
  function wa(t2) {
    var e2 = ma(t2), n2 = e2[0], r2 = e2[1], o2 = e2[2];
    return 1 === n2 && 1 === r2 && 1 === o2;
  }
  function Ca(t2, e2) {
    return wa(t2) || wa(e2);
  }
  function Ea(t2) {
    if ("NHWC" === t2)
      return "channelsLast";
    if ("NCHW" === t2)
      return "channelsFirst";
    throw new Error("Unknown dataFormat " + t2);
  }
  function Ra(t2, e2, n2) {
    if ("complex64" === e2) {
      if ("complex64" === t2.dtype)
        return t2.clone();
      var r2 = Gn(t2.shape), o2 = t2.toFloat(), a2 = n2.complex(o2, r2);
      return r2.dispose(), o2.dispose(), a2;
    }
    if (!U(t2.dtype, e2))
      return Lt.makeTensorFromDataId(t2.dataId, t2.shape, e2);
    if ("complex64" === t2.dtype) {
      var i2 = n2.real(t2);
      a2 = i2.cast(e2);
      return i2.dispose(), a2;
    }
    if ("int32" === e2)
      return n2.int(t2);
    if ("bool" === e2) {
      var s2 = On(0, t2.dtype);
      a2 = n2.notEqual(t2, s2);
      return s2.dispose(), a2;
    }
    throw new Error("Error in Cast: failed to cast " + t2.dtype + " to " + e2);
  }
  function Ia(t2, e2) {
    return Lt.makeTensorFromDataId(t2.dataId, e2, t2.dtype);
  }
  function ka(t2, e2, n2) {
    var r2 = (e2 - t2) / (n2 - 1), o2 = tt(n2, "float32");
    o2[0] = t2;
    for (var a2 = 1; a2 < o2.length; a2++)
      o2[a2] = o2[a2 - 1] + r2;
    return Mn(o2, "float32");
  }
  var Sa = Object.freeze({ castTensor: Ra, reshapeTensor: Ia, linspaceImpl: ka, upcastType: Tt, axesAreInnerMostDims: yn, combineLocations: xn, computeOutAndReduceShapes: bn, expandShapeToKeepDim: wn, assertAxesAreInnerMostDims: Cn, getAxesPermutation: En, getUndoAxesPermutation: Rn, getInnerMostAxes: In, getBroadcastDims: Mr, getReductionAxes: Br, assertAndGetBroadcastShape: Pr, assertParamsConsistent: kn, computeOutShape: Sn, computePool2DInfo: fa, computePool3DInfo: da, computeConv2DInfo: pa, computeConv3DInfo: va, computeDefaultPad: ga, tupleValuesAreOne: wa, eitherStridesOrDilationsAreOne: Ca, convertConv2DDataFormat: Ea, PARALLELIZE_THRESHOLD: Wo, computeOptimalWindowSize: Uo });
  function Aa(t2, e2) {
    if (t2.length !== e2.length)
      throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t2.length + ", imag: " + e2.length + ".");
    for (var n2 = new Float32Array(2 * t2.length), r2 = 0; r2 < n2.length; r2 += 2)
      n2[r2] = t2[r2 / 2], n2[r2 + 1] = e2[r2 / 2];
    return n2;
  }
  function Ta(t2, e2) {
    return { real: t2[2 * e2], imag: t2[2 * e2 + 1] };
  }
  function Da(t2, e2, n2, r2) {
    t2[2 * r2] = e2, t2[2 * r2 + 1] = n2;
  }
  function Na(t2, e2, n2) {
    var r2 = (n2 ? 2 : -2) * Math.PI * (t2 / e2);
    return { real: Math.cos(r2), imag: Math.sin(r2) };
  }
  function Fa(t2, e2, n2) {
    var r2 = function(t3, e3, n3) {
      return function(t4, e4, n4) {
        var r3 = 0, o3 = t4.length, a2 = 0, i2 = false;
        for (; r3 < o3; ) {
          var s2 = n4(e4, t4[a2 = r3 + (o3 - r3 >>> 1)]);
          s2 > 0 ? r3 = a2 + 1 : (o3 = a2, i2 = !s2);
        }
        return i2 ? r3 : -r3 - 1;
      }(t3, e3, n3 || _a);
    }(t2, e2, n2), o2 = r2 < 0 ? -(r2 + 1) : r2;
    t2.splice(o2, 0, e2);
  }
  function _a(t2, e2) {
    return t2 > e2 ? 1 : t2 < e2 ? -1 : 0;
  }
  function Oa(t2, e2, n2, r2, o2) {
    return Ba(t2, e2, n2, r2, o2, 0).selectedIndices;
  }
  function Ma(t2, e2, n2, r2, o2, a2) {
    var i2 = Ba(t2, e2, n2, r2, o2, a2, true);
    return i2.numValidOutputs.dispose(), { selectedIndices: i2.selectedIndices, selectedScores: i2.selectedScores };
  }
  function Ba(t2, e2, n2, r2, o2, a2, i2, s2) {
    void 0 === i2 && (i2 = false), void 0 === s2 && (s2 = false);
    for (var u2 = Array.from(e2).map(function(t3, e3) {
      return { score: t3, boxIndex: e3, suppressBeginIndex: 0 };
    }).filter(function(t3) {
      return t3.score > o2;
    }).sort(Wa), c2 = a2 > 0 ? -0.5 / a2 : 0, l2 = [], h2 = []; l2.length < n2 && u2.length > 0; ) {
      var f2 = u2.pop(), d2 = f2.score, p2 = f2.boxIndex, v = f2.suppressBeginIndex;
      if (d2 < o2)
        break;
      for (var g = false, m2 = l2.length - 1; m2 >= v; --m2) {
        var y2 = Pa(t2, p2, l2[m2]);
        if (y2 >= r2) {
          g = true;
          break;
        }
        if (f2.score = f2.score * La(r2, c2, y2), f2.score <= o2)
          break;
      }
      f2.suppressBeginIndex = l2.length, g || (f2.score === d2 ? (l2.push(p2), h2.push(f2.score)) : f2.score > o2 && Fa(u2, f2, Wa));
    }
    var x2 = l2.length;
    return s2 && (l2.fill(0, x2), h2.fill(0, x2)), { selectedIndices: Mn(l2, "int32"), selectedScores: Mn(h2, "float32"), numValidOutputs: On(x2, "int32") };
  }
  function Pa(t2, e2, n2) {
    var r2 = t2.subarray(4 * e2, 4 * e2 + 4), o2 = t2.subarray(4 * n2, 4 * n2 + 4), a2 = Math.min(r2[0], r2[2]), i2 = Math.min(r2[1], r2[3]), s2 = Math.max(r2[0], r2[2]), u2 = Math.max(r2[1], r2[3]), c2 = Math.min(o2[0], o2[2]), l2 = Math.min(o2[1], o2[3]), h2 = Math.max(o2[0], o2[2]), f2 = Math.max(o2[1], o2[3]), d2 = (s2 - a2) * (u2 - i2), p2 = (h2 - c2) * (f2 - l2);
    if (d2 <= 0 || p2 <= 0)
      return 0;
    var v = Math.max(a2, c2), g = Math.max(i2, l2), m2 = Math.min(s2, h2), y2 = Math.min(u2, f2), x2 = Math.max(m2 - v, 0) * Math.max(y2 - g, 0);
    return x2 / (d2 + p2 - x2);
  }
  function La(t2, e2, n2) {
    var r2 = Math.exp(e2 * n2 * n2);
    return n2 <= t2 ? r2 : 0;
  }
  function Wa(t2, e2) {
    return t2.score - e2.score || t2.score === e2.score && e2.boxIndex - t2.boxIndex;
  }
  function Ua(t2, e2, n2) {
    var r2 = new Array(t2.rank).fill(0), o2 = t2.shape.slice();
    return e2.map(function(e3) {
      o2[n2] = e3;
      var a2 = t2.slice(r2, o2);
      return r2[n2] += e3, a2;
    });
  }
  function Va(t2, e2) {
    for (var n2 = new Array(t2.rank), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = t2.shape[r2] * e2[r2];
    var o2 = er(n2, t2.dtype);
    for (r2 = 0; r2 < o2.values.length; ++r2) {
      for (var a2 = o2.indexToLoc(r2), i2 = new Array(t2.rank), s2 = 0; s2 < i2.length; s2++)
        i2[s2] = a2[s2] % t2.shape[s2];
      var u2 = t2.locToIndex(i2);
      o2.values[r2] = t2.values[u2];
    }
    return o2.toTensor();
  }
  function za(t2, e2, n2, r2, o2) {
    for (var a2 = e2[e2.length - 1], i2 = [t2.length / a2, a2], s2 = i2[0], u2 = i2[1], c2 = B(n2, s2 * r2), l2 = B("int32", s2 * r2), h2 = 0; h2 < s2; h2++) {
      for (var f2 = h2 * u2, d2 = t2.subarray(f2, f2 + u2), p2 = [], v = 0; v < d2.length; v++)
        p2.push({ value: d2[v], index: v });
      p2.sort(function(t3, e3) {
        return e3.value - t3.value;
      });
      var g = h2 * r2, m2 = c2.subarray(g, g + r2), y2 = l2.subarray(g, g + r2);
      for (v = 0; v < r2; v++)
        m2[v] = p2[v].value, y2[v] = p2[v].index;
    }
    var x2 = e2.slice();
    return x2[x2.length - 1] = r2, [Fn(c2, x2, n2), Fn(l2, x2, "int32")];
  }
  function Ga(t2, e2) {
    for (var n2 = [], r2 = 0; r2 < e2.length; r2++)
      e2[r2] && n2.push(r2);
    var o2 = er(t2, "int32"), a2 = er([n2.length, t2.length], "int32");
    for (r2 = 0; r2 < n2.length; r2++) {
      var i2 = o2.indexToLoc(n2[r2]), s2 = r2 * t2.length;
      a2.values.set(i2, s2);
    }
    return a2.toTensor();
  }
  var Ha = function(t2, e2) {
    this.outputShape = [], this.outputShape = t2, this.variableNames = e2.map(function(t3, e3) {
      return "T" + e3;
    });
    var n2 = [];
    this.variableNames.forEach(function(t3) {
      n2.push("float v" + t3 + " = get" + t3 + "AtOutCoords();");
    });
    var r2 = this.variableNames.map(function(t3) {
      return "v" + t3;
    }).join(" + ");
    this.userCode = "\n      void main() {\n        " + n2.join("\n        ") + "\n\n        float result = " + r2 + ";\n        setOutput(result);\n      }\n    ";
  };
  var qa = function(t2, e2) {
    this.outputShape = [], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.variableNames = e2.map(function(t3, e3) {
      return "T" + e3;
    });
    var n2 = [];
    this.variableNames.forEach(function(t3) {
      n2.push("vec4 v" + t3 + " = get" + t3 + "AtOutCoords();");
    });
    var r2 = this.variableNames.map(function(t3) {
      return "v" + t3;
    }).join(" + ");
    this.userCode = "\n      void main() {\n        " + n2.join("\n        ") + "\n\n        vec4 result = " + r2 + ";\n        setOutput(result);\n      }\n    ";
  };
  var Ka = function(t2, e2, n2) {
    this.variableNames = ["A"];
    var r2 = t2.windowSize, o2 = t2.batchSize, a2 = t2.inSize, i2 = Math.ceil(a2 / r2);
    n2 || this.variableNames.push("bestIndicesA"), this.outputShape = [o2, i2];
    var s2 = "max" === e2 ? ">" : "<", u2 = n2 ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
    this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r2 + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r2 + "; i++) {\n          int inIdx = " + u2 + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s2 + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";
  };
  function ja(t2, e2) {
    return ["x", "y", "z", "w", "u", "v"].slice(0, e2).map(function(e3) {
      return t2 + "." + e3;
    });
  }
  function Xa(t2, e2) {
    return 1 === e2 ? [t2] : ja(t2, e2);
  }
  function Ya() {
    var t2, e2, n2, r2, o2, a2, s2, u2, c2, l2;
    return 2 === i().getNumber("WEBGL_VERSION") ? (t2 = "#version 300 es", e2 = "in", n2 = "out", r2 = "in", o2 = "texture", a2 = "outputColor", s2 = "out vec4 outputColor;", u2 = "\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ", c2 = "", l2 = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (t2 = "", e2 = "attribute", n2 = "varying", r2 = "varying", o2 = "texture2D", a2 = "gl_FragColor", s2 = "", u2 = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", c2 = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", l2 = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), { version: t2, attribute: e2, varyingVs: n2, varyingFs: r2, texture2D: o2, output: a2, defineOutput: s2, defineSpecialNaN: u2, defineSpecialInf: c2, defineRound: l2 };
  }
  function $a(t2, e2, n2) {
    void 0 === n2 && (n2 = "index");
    var r2 = $(e2);
    return r2.map(function(e3, o2) {
      return "int " + t2[o2] + " = " + n2 + " / " + e3 + "; " + (o2 === r2.length - 1 ? "int " + t2[o2 + 1] + " = " + n2 + " - " + t2[o2] + " * " + e3 : "index -= " + t2[o2] + " * " + e3) + ";";
    }).join("");
  }
  function Qa(t2) {
    var e2 = $(t2).map(function(t3) {
      return t3.toString();
    });
    return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * " + e2[0] + " + coords.y * " + e2[1] + " + coords.z;\n  }\n";
  }
  var Ja = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";
  function Za(t2, e2, n2, r2) {
    var o2 = [];
    t2.forEach(function(t3) {
      var e3 = k(t3.shapeInfo.logicalShape);
      t3.shapeInfo.isUniform ? o2.push("uniform float " + t3.name + (e3 > 1 ? "[" + e3 + "]" : "") + ";") : (o2.push("uniform sampler2D " + t3.name + ";"), o2.push("uniform int offset" + t3.name + ";"));
    });
    var a2, i2, s2 = o2.join("\n"), u2 = t2.map(function(t3) {
      return function(t4, e3, n3) {
        void 0 === n3 && (n3 = false);
        var r3 = "";
        r3 += n3 ? ei(t4) : ti(t4);
        var o3 = t4.shapeInfo.logicalShape, a3 = e3.logicalShape;
        o3.length <= a3.length && (r3 += n3 ? function(t5, e4) {
          var n4, r4 = t5.name, o4 = r4.charAt(0).toUpperCase() + r4.slice(1), a4 = "get" + o4 + "AtOutCoords", i3 = t5.shapeInfo.logicalShape.length, s3 = e4.logicalShape.length, u3 = Mr(t5.shapeInfo.logicalShape, e4.logicalShape), c3 = ui(s3), l3 = s3 - i3, h3 = ["x", "y", "z", "w", "u", "v"];
          n4 = 0 === i3 ? "" : s3 < 2 && u3.length >= 1 ? "coords = 0;" : u3.map(function(t6) {
            return "coords." + h3[t6 + l3] + " = 0;";
          }).join("\n");
          var f3 = "";
          f3 = s3 < 2 && i3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map(function(t6, e5) {
            return "coords." + h3[e5 + l3];
          }).join(", ");
          var d2 = "return outputValue;", p2 = 1 === k(t5.shapeInfo.logicalShape), v = 1 === k(e4.logicalShape);
          if (1 !== i3 || p2 || v) {
            if (p2 && !v)
              d2 = 1 === s3 ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      ";
            else if (u3.length) {
              var g = i3 - 2, m2 = i3 - 1;
              u3.indexOf(g) > -1 && u3.indexOf(m2) > -1 ? d2 = "return vec4(outputValue.x);" : u3.indexOf(g) > -1 ? d2 = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : u3.indexOf(m2) > -1 && (d2 = "return vec4(outputValue.xx, outputValue.zz);");
            }
          } else
            d2 = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
          return "\n    vec4 " + a4 + "() {\n      " + c3 + " coords = getOutputCoords();\n      " + n4 + "\n      vec4 outputValue = get" + o4 + "(" + f3 + ");\n      " + d2 + "\n    }\n  ";
        }(t4, e3) : function(t5, e4) {
          var n4 = t5.name, r4 = n4.charAt(0).toUpperCase() + n4.slice(1), o4 = "get" + r4 + "AtOutCoords", a4 = e4.texShape, i3 = t5.shapeInfo.texShape, s3 = t5.shapeInfo.logicalShape.length, u3 = e4.logicalShape.length;
          if (!t5.shapeInfo.isUniform && s3 === u3 && null == t5.shapeInfo.flatOffset && S(i3, a4))
            return "\n      float " + o4 + "() {\n        return sampleTexture(" + n4 + ", resultUV);\n      }\n    ";
          var c3, l3 = ui(u3), h3 = Mr(t5.shapeInfo.logicalShape, e4.logicalShape), f3 = u3 - s3, d2 = ["x", "y", "z", "w", "u", "v"];
          c3 = 0 === s3 ? "" : u3 < 2 && h3.length >= 1 ? "coords = 0;" : h3.map(function(t6) {
            return "coords." + d2[t6 + f3] + " = 0;";
          }).join("\n");
          var p2 = "";
          p2 = u3 < 2 && s3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map(function(t6, e5) {
            return "coords." + d2[e5 + f3];
          }).join(", ");
          return "\n    float " + o4 + "() {\n      " + l3 + " coords = getOutputCoords();\n      " + c3 + "\n      return get" + r4 + "(" + p2 + ");\n    }\n  ";
        }(t4, e3));
        return r3;
      }(t3, e2, r2);
    }).join("\n"), c2 = e2.texShape, l2 = Ya(), h2 = function(t3) {
      return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + t3.texture2D + "(textureSampler, uv).r;\n    }\n  ";
    }(l2), f2 = function(t3) {
      return t3.version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + t3.varyingFs + " vec2 resultUV;\n    " + t3.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    " + t3.defineSpecialNaN + "\n    " + t3.defineSpecialInf + "\n    " + t3.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    " + ni + "\n    " + ri + "\n    " + oi + "\n  ";
    }(l2);
    return e2.isPacked ? (a2 = function(t3, e3) {
      switch (t3.length) {
        case 0:
          return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
        case 1:
          return function(t4, e4) {
            var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)];
            if (1 === n4[0])
              return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + n4[1] + ".0);\n      }\n    ";
            if (1 === n4[1])
              return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + n4[0] + ".0);\n      }\n    ";
            return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n      return 2 * (resTexRC.x * " + n4[1] + " + resTexRC.y);\n    }\n  ";
          }(0, e3);
        case 2:
          return function(t4, e4) {
            var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)];
            if (S(t4, e4))
              return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + n4[0] + ", " + n4[1] + "));\n      }\n    ";
            var r4 = Math.ceil(t4[1] / 2);
            return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n      int r = 2 * (index / " + r4 + ");\n      int c = imod(index, " + r4 + ") * 2;\n\n      return ivec2(r, c);\n    }\n  ";
          }(t3, e3);
        case 3:
          return n3 = t3, r3 = e3, o3 = [Math.ceil(r3[0] / 2), Math.ceil(r3[1] / 2)], a3 = Math.ceil(n3[2] / 2), i3 = a3 * Math.ceil(n3[1] / 2), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + o3[0] + ", " + o3[1] + "));\n      int index = resTexRC.x * " + o3[1] + " + resTexRC.y;\n\n      int b = index / " + i3 + ";\n      index -= b * " + i3 + ";\n\n      int r = 2 * (index / " + a3 + ");\n      int c = imod(index, " + a3 + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
        default:
          return function(t4, e4) {
            for (var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)], r4 = Math.ceil(t4[t4.length - 1] / 2), o4 = r4 * Math.ceil(t4[t4.length - 2] / 2), a4 = o4, i4 = "", s3 = "b, r, c", u3 = 2; u3 < t4.length - 1; u3++)
              a4 *= t4[t4.length - u3 - 1], i4 = "\n      int b" + u3 + " = index / " + a4 + ";\n      index -= b" + u3 + " * " + a4 + ";\n    " + i4, s3 = "b" + u3 + ", " + s3;
            return "\n    ivec" + t4.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n\n      " + i4 + "\n\n      int b = index / " + o4 + ";\n      index -= b * " + o4 + ";\n\n      int r = 2 * (index / " + r4 + ");\n      int c = imod(index, " + r4 + ") * 2;\n\n      return ivec" + t4.length + "(" + s3 + ");\n    }\n  ";
          }(t3, e3);
      }
      var n3, r3, o3, a3, i3;
    }(e2.logicalShape, c2), i2 = function(t3) {
      return "\n    void setOutput(vec4 val) {\n      " + t3.output + " = val;\n    }\n  ";
    }(l2)) : (a2 = function(t3, e3) {
      switch (t3.length) {
        case 0:
          return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
        case 1:
          return function(t4, e4) {
            if (1 === e4[0])
              return "\n      int getOutputCoords() {\n        return int(resultUV.x * " + e4[1] + ".0);\n      }\n    ";
            if (1 === e4[1])
              return "\n      int getOutputCoords() {\n        return int(resultUV.y * " + e4[0] + ".0);\n      }\n    ";
            return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e4[0] + ", " + e4[1] + "));\n      return resTexRC.x * " + e4[1] + " + resTexRC.y;\n    }\n  ";
          }(0, e3);
        case 2:
          return function(t4, e4) {
            if (S(t4, e4))
              return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + e4[0] + ", " + e4[1] + "));\n      }\n    ";
            if (1 === t4[1])
              return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + e4[0] + ", " + e4[1] + "));\n        int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
            if (1 === t4[0])
              return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + e4[0] + ", " + e4[1] + "));\n        int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
            return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n      int r = index / " + t4[1] + ";\n      int c = index - r * " + t4[1] + ";\n      return ivec2(r, c);\n    }\n  ";
          }(t3, e3);
        case 3:
          return n3 = e3, r3 = $a(["r", "c", "d"], t3), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n3[0] + ", " + n3[1] + "));\n      int index = resTexRC.x * " + n3[1] + " + resTexRC.y;\n      " + r3 + "\n      return ivec3(r, c, d);\n    }\n  ";
        case 4:
          return function(t4, e4) {
            var n4 = $a(["r", "c", "d", "d2"], t4);
            return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n      " + n4 + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
          }(t3, e3);
        case 5:
          return function(t4, e4) {
            var n4 = $a(["r", "c", "d", "d2", "d3"], t4);
            return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + e4[0] + ",\n                             " + e4[1] + "));\n\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n\n      " + n4 + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
          }(t3, e3);
        case 6:
          return function(t4, e4) {
            var n4 = $a(["r", "c", "d", "d2", "d3", "d4"], t4);
            return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n\n      " + n4 + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
          }(t3, e3);
        default:
          throw new Error(t3.length + "-D output sampling is not yet supported");
      }
      var n3, r3;
    }(e2.logicalShape, c2), i2 = function(t3) {
      return "\n    void setOutput(float val) {\n      " + t3.output + " = vec4(val, 0, 0, 0);\n    }\n  ";
    }(l2)), r2 && (f2 += ai), [f2, h2, i2, s2, a2, u2, n2].join("\n");
  }
  function ti(t2) {
    var e2 = t2.shapeInfo.logicalShape;
    switch (e2.length) {
      case 0:
        return function(t3) {
          var e3 = t3.name, n2 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1);
          if (t3.shapeInfo.isUniform)
            return "float " + n2 + "() {return " + e3 + ";}";
          var r2 = t3.shapeInfo.texShape, o2 = r2[0], a2 = r2[1];
          if (1 === o2 && 1 === a2)
            return "\n      float " + n2 + "() {\n        return sampleTexture(" + e3 + ", halfCR);\n      }\n    ";
          var i2 = t3.shapeInfo.texShape, s2 = i2[0], u2 = i2[1], c2 = ii(e3);
          return "\n    float " + n2 + "() {\n      vec2 uv = uvFromFlat(" + s2 + ", " + u2 + ", " + c2 + ");\n      return sampleTexture(" + e3 + ", uv);\n    }\n  ";
        }(t2);
      case 1:
        return function(t3) {
          var e3 = t3.name, n2 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1);
          if (t3.shapeInfo.isUniform)
            return "\n      float " + n2 + "(int index) {\n        " + si(t3) + "\n      }\n    ";
          var r2 = t3.shapeInfo.texShape, o2 = r2[0], a2 = r2[1];
          if (1 === a2 && 1 === o2)
            return "\n      float " + n2 + "(int index) {\n        return sampleTexture(" + e3 + ", halfCR);\n      }\n    ";
          var i2 = ii(e3);
          if (1 === a2)
            return "\n      float " + n2 + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + i2 + ") + 0.5) / " + o2 + ".0);\n        return sampleTexture(" + e3 + ", uv);\n      }\n    ";
          if (1 === o2)
            return "\n      float " + n2 + "(int index) {\n        vec2 uv = vec2((float(index + " + i2 + ") + 0.5) / " + a2 + ".0, 0.5);\n        return sampleTexture(" + e3 + ", uv);\n      }\n    ";
          return "\n    float " + n2 + "(int index) {\n      vec2 uv = uvFromFlat(" + o2 + ", " + a2 + ", index + " + i2 + ");\n      return sampleTexture(" + e3 + ", uv);\n    }\n  ";
        }(t2);
      case 2:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = t3.shapeInfo.texShape;
          if (null != o2 && S(e3, o2)) {
            var a2 = o2[0], i2 = o2[1];
            return "\n    float " + r2 + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + i2 + ".0, " + a2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
          }
          var s2 = M(e3), u2 = s2.newShape, c2 = s2.keptDims, l2 = u2;
          if (l2.length < e3.length) {
            var h2 = ci(t3, l2);
            return "\n      " + ti(h2) + "\n      float " + r2 + "(int row, int col) {\n        return " + r2 + "(" + li(["row", "col"], c2) + ");\n      }\n    ";
          }
          if (t3.shapeInfo.isUniform)
            return "\n      float " + r2 + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + e3[1] + ", 1)));\n        " + si(t3) + "\n      }\n    ";
          var f2 = o2[0], d2 = o2[1], p2 = ii(n2);
          if (1 === d2)
            return "\n    float " + r2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p2 + "), vec3(" + e3[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + f2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
          if (1 === f2)
            return "\n    float " + r2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p2 + "), vec3(" + e3[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + d2 + ".0, 0.5);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
          return "\n  float " + r2 + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + e3[1] + " + col + " + p2 + ";\n    vec2 uv = uvFromFlat(" + f2 + ", " + d2 + ", index);\n    return sampleTexture(" + n2 + ", uv);\n  }\n";
        }(t2);
      case 3:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[1] * e3[2], a2 = e3[2], i2 = M(e3), s2 = i2.newShape, u2 = i2.keptDims, c2 = s2;
          if (c2.length < e3.length) {
            var l2 = ci(t3, c2);
            return "\n        " + ti(l2) + "\n        float " + r2 + "(int row, int col, int depth) {\n          return " + r2 + "(" + li(["row", "col", "depth"], u2) + ");\n        }\n      ";
          }
          if (t3.shapeInfo.isUniform)
            return "\n      float " + r2 + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + o2 + ", " + a2 + ", 1)));\n        " + si(t3) + "\n      }\n    ";
          var h2 = t3.shapeInfo.texShape, f2 = h2[0], d2 = h2[1], p2 = t3.shapeInfo.flatOffset;
          if (d2 === o2 && null == p2)
            return "\n        float " + r2 + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + a2 + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + d2 + ".0, " + f2 + ".0);\n          return sampleTexture(" + n2 + ", uv);\n        }\n      ";
          if (d2 === a2 && null == p2)
            return "\n    float " + r2 + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + e3[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + d2 + ".0, " + f2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
          var v = ii(n2);
          return "\n      float " + r2 + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + o2 + " + col * " + a2 + " + depth + " + v + ";\n        vec2 uv = uvFromFlat(" + f2 + ", " + d2 + ", index);\n        return sampleTexture(" + n2 + ", uv);\n      }\n  ";
        }(t2);
      case 4:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[3], a2 = e3[2] * o2, i2 = e3[1] * a2, s2 = M(e3), u2 = s2.newShape, c2 = s2.keptDims;
          if (u2.length < e3.length) {
            var l2 = ci(t3, u2);
            return "\n      " + ti(l2) + "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        return " + r2 + "(" + li(["row", "col", "depth", "depth2"], c2) + ");\n      }\n    ";
          }
          if (t3.shapeInfo.isUniform)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + i2 + ", " + a2 + ", " + o2 + ", 1)));\n        " + si(t3) + "\n      }\n    ";
          var h2 = t3.shapeInfo.flatOffset, f2 = t3.shapeInfo.texShape, d2 = f2[0], p2 = f2[1];
          if (p2 === i2 && null == h2)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + a2 + ", " + o2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + p2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          if (p2 === o2 && null == h2)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + e3[1] * e3[2] + ", " + e3[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + p2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          var v = ii(n2);
          return "\n    float " + r2 + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + i2 + " + col * " + a2 + " +\n          depth * " + o2 + " + depth2;\n      vec2 uv = uvFromFlat(" + d2 + ", " + p2 + ", index + " + v + ");\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        }(t2);
      case 5:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[4], a2 = e3[3] * o2, i2 = e3[2] * a2, s2 = e3[1] * i2, u2 = M(e3), c2 = u2.newShape, l2 = u2.keptDims;
          if (c2.length < e3.length) {
            var h2 = ci(t3, c2);
            return "\n      " + ti(h2) + "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + r2 + "(" + li(["row", "col", "depth", "depth2", "depth3"], l2) + ");\n      }\n    ";
          }
          if (t3.shapeInfo.isUniform)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s2 + ", " + i2 + ", " + a2 + ", " + o2 + ")) +\n          depth3;\n        " + si(t3) + "\n      }\n    ";
          var f2 = t3.shapeInfo.flatOffset, d2 = t3.shapeInfo.texShape, p2 = d2[0], v = d2[1];
          if (v === s2 && null == f2)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + i2 + ", " + a2 + ", " + o2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v + ".0, " + p2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          if (v === o2 && null == f2)
            return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e3[1] * e3[2] * e3[3] + ",\n               " + e3[2] * e3[3] + ", " + e3[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v + ".0, " + p2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          var g = ii(n2);
          return "\n    float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + s2 + " + col * " + i2 + " + depth * " + a2 + " +\n          depth2 * " + o2 + " + depth3 + " + g + ";\n      vec2 uv = uvFromFlat(" + p2 + ", " + v + ", index);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        }(t2);
      case 6:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = M(e3), a2 = o2.newShape, i2 = o2.keptDims;
          if (a2.length < e3.length) {
            var s2 = ci(t3, a2);
            return "\n      " + ti(s2) + "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + r2 + "(" + li(["row", "col", "depth", "depth2", "depth3", "depth4"], i2) + ");\n      }\n    ";
          }
          var u2 = e3[5], c2 = e3[4] * u2, l2 = e3[3] * c2, h2 = e3[2] * l2, f2 = e3[1] * h2;
          if (t3.shapeInfo.isUniform)
            return "\n      float " + r2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + f2 + ", " + h2 + ", " + l2 + ", " + c2 + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + u2 + ", 1)));\n        " + si(t3) + "\n      }\n    ";
          var d2 = t3.shapeInfo.flatOffset, p2 = t3.shapeInfo.texShape, v = p2[0], g = p2[1];
          if (g === f2 && null == d2)
            return "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + h2 + ", " + l2 + ", " + c2 + ", " + u2 + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + g + ".0, " + v + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          if (g === u2 && null == d2)
            return "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + e3[1] * e3[2] * e3[3] * e3[4] + ",\n               " + e3[2] * e3[3] * e3[4] + ",\n               " + e3[3] * e3[4] + ",\n               " + e3[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + g + ".0, " + v + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
          var m2 = ii(n2);
          return "\n    float " + r2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + f2 + " + col * " + h2 + " + depth * " + l2 + " +\n          depth2 * " + c2 + " + depth3 * " + u2 + " + depth4 + " + m2 + ";\n      vec2 uv = uvFromFlat(" + v + ", " + g + ", index);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        }(t2);
      default:
        throw new Error(e2.length + "-D input sampling is not yet supported");
    }
  }
  function ei(t2) {
    var e2, n2, r2;
    switch (t2.shapeInfo.logicalShape.length) {
      case 0:
        return e2 = t2.name, n2 = "get" + e2.charAt(0).toUpperCase() + e2.slice(1), r2 = Ya(), "\n    vec4 " + n2 + "() {\n      return " + r2.texture2D + "(" + e2 + ", halfCR);\n    }\n  ";
      case 1:
        return function(t3) {
          var e3 = t3.name, n3 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1), r3 = t3.shapeInfo.texShape, o2 = [Math.ceil(r3[0] / 2), Math.ceil(r3[1] / 2)], a2 = Ya();
          return "\n    vec4 " + n3 + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + o2[0] + ", " + o2[1] + ", index);\n      return " + a2.texture2D + "(" + e3 + ", uv);\n    }\n  ";
        }(t2);
      case 2:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n3 = t3.name, r3 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1), o2 = t3.shapeInfo.texShape, a2 = o2[0], i2 = o2[1], s2 = Ya();
          if (null != o2 && S(e3, o2))
            return "\n      vec4 " + r3 + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + i2 + ".0, " + a2 + ".0);\n\n        return " + s2.texture2D + "(" + n3 + ", uv);\n      }\n    ";
          var u2 = [Math.ceil(o2[0] / 2), Math.ceil(o2[1] / 2)], c2 = Math.ceil(e3[1] / 2);
          return "\n    vec4 " + r3 + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + c2 + ", " + u2[0] + ", " + u2[1] + ", row, col);\n      return " + s2.texture2D + "(" + n3 + ", uv);\n    }\n  ";
        }(t2);
      case 3:
        return function(t3) {
          var e3 = t3.shapeInfo.logicalShape, n3 = t3.name, r3 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1), o2 = t3.shapeInfo.texShape, a2 = [Math.ceil(o2[0] / 2), Math.ceil(o2[1] / 2)];
          if (1 === e3[0]) {
            var i2 = e3.slice(1), s2 = ci(t3, i2);
            return "\n        " + ei(s2) + "\n        vec4 " + r3 + "(int b, int row, int col) {\n          return " + r3 + "(" + li(["b", "row", "col"], [1, 2]) + ");\n        }\n      ";
          }
          var u2 = a2[0], c2 = a2[1], l2 = Math.ceil(e3[2] / 2), h2 = l2 * Math.ceil(e3[1] / 2), f2 = Ya();
          return "\n    vec4 " + r3 + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + u2 + ", " + c2 + ", " + h2 + ", " + l2 + ", b, row, col);\n      return " + f2.texture2D + "(" + n3 + ", uv);\n    }\n  ";
        }(t2);
      default:
        return function(t3) {
          for (var e3 = t3.shapeInfo.logicalShape, n3 = e3.length, r3 = t3.name, o2 = "get" + r3.charAt(0).toUpperCase() + r3.slice(1), a2 = t3.shapeInfo.texShape, i2 = [Math.ceil(a2[0] / 2), Math.ceil(a2[1] / 2)], s2 = i2[0], u2 = i2[1], c2 = Math.ceil(e3[n3 - 1] / 2), l2 = c2 * Math.ceil(e3[n3 - 2] / 2), h2 = "int b, int row, int col", f2 = "b * " + l2 + " + (row / 2) * " + c2 + " + (col / 2)", d2 = 2; d2 < n3 - 1; d2++)
            h2 = "int b" + d2 + ", " + h2, l2 *= e3[n3 - d2 - 1], f2 = "b" + d2 + " * " + l2 + " + " + f2;
          var p2 = Ya();
          return "\n    vec4 " + o2 + "(" + h2 + ") {\n      int index = " + f2 + ";\n      int texR = index / " + u2 + ";\n      int texC = index - texR * " + u2 + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + u2 + ", " + s2 + ");\n      return " + p2.texture2D + "(" + r3 + ", uv);\n    }\n  ";
        }(t2);
    }
  }
  var ni = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
  var ri = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
  var oi = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
  var ai = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
  function ii(t2) {
    return "offset" + t2;
  }
  function si(t2) {
    var e2 = t2.name, n2 = k(t2.shapeInfo.logicalShape);
    return n2 < 2 ? "return " + e2 + ";" : "\n    for (int i = 0; i < " + n2 + "; i++) {\n      if (i == index) {\n        return " + e2 + "[i];\n      }\n    }\n  ";
  }
  function ui(t2) {
    if (t2 <= 1)
      return "int";
    if (2 === t2)
      return "ivec2";
    if (3 === t2)
      return "ivec3";
    if (4 === t2)
      return "ivec4";
    if (5 === t2)
      return "ivec5";
    if (6 === t2)
      return "ivec6";
    throw Error("GPU for rank " + t2 + " is not yet supported");
  }
  function ci(t2, e2) {
    var n2 = JSON.parse(JSON.stringify(t2));
    return n2.shapeInfo.logicalShape = e2, n2;
  }
  function li(t2, e2) {
    return e2.map(function(e3) {
      return t2[e3];
    }).join(", ");
  }
  var hi = function(t2, e2, n2, r2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, C(t2.length > 2, function() {
      return "Packed arg" + (n2.charAt(0).toUpperCase() + n2.slice(1)) + " supports only inputs with rank above 2.";
    });
    var o2 = t2[t2.length - 1], a2 = Math.ceil(o2 / e2);
    this.outputShape = t2.slice(0, -1), a2 > 1 && this.outputShape.push(a2), r2 || this.variableNames.push("bestIndicesA");
    var i2, s2, u2 = this.outputShape, c2 = u2.length, l2 = ui(c2), h2 = Xa("coords", c2);
    if (1 === a2) {
      var f2 = ui(s2 = c2 + 1);
      i2 = "\n        " + f2 + " sourceLocR = " + f2 + "(" + h2.join() + ", 0);\n        ++" + h2[c2 - 1] + ";\n        " + f2 + " sourceLocG = " + f2 + "(" + h2.join() + ", 0);\n        ++" + h2[c2 - 2] + ";\n        " + f2 + " sourceLocA = " + f2 + "(" + h2.join() + ", 0);\n        --" + h2[c2 - 1] + ";\n        " + f2 + " sourceLocB = " + f2 + "(" + h2.join() + ", 0);\n        --" + h2[c2 - 2] + ";";
    } else
      s2 = c2, i2 = "\n        " + l2 + " sourceLocR = coords;\n        ++" + h2[c2 - 1] + ";\n        " + l2 + " sourceLocG = coords;\n        ++" + h2[c2 - 2] + ";\n        " + l2 + " sourceLocA = coords;\n        --" + h2[c2 - 1] + ";\n        " + l2 + " sourceLocB = coords;\n        --" + h2[c2 - 2] + ";";
    var d2 = ["x", "y", "z", "w", "u", "v"].slice(0, s2), p2 = "." + d2[s2 - 1], v = d2.map(function(t3) {
      return "int " + t3;
    }), g = Xa("sourceLocR", s2 - 1).concat("inIdx.r"), m2 = Xa("sourceLocG", s2 - 1).concat("inIdx.g"), y2 = Xa("sourceLocB", s2 - 1).concat("inIdx.b"), x2 = Xa("sourceLocA", s2 - 1).concat("inIdx.a"), b2 = "max" === n2 ? "greaterThan" : "lessThan", w2 = r2 ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + g.join() + "),\n                             getBestIndicesAChannel(" + m2.join() + "),\n                             getBestIndicesAChannel(" + y2.join() + "),\n                             getBestIndicesAChannel(" + x2.join() + ")));", E2 = "vec4(\n            getAChannel(" + g.join() + "),\n            hasNextCol ? getAChannel(" + m2.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + y2.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + x2.join() + ") : 0.)", R2 = r2 ? "" : "\n      float getBestIndicesAChannel(" + v.join() + ") {\n        return getChannel(getBestIndicesA(" + d2.join() + "),\n                                          vec2(" + d2.slice(-2).join() + "));\n      }";
    this.userCode = "\n      float getAChannel(" + v.join() + ") {\n        return getChannel(getA(" + d2.join() + "),\n                               vec2(" + d2.slice(-2).join() + "));\n      }\n      " + R2 + "\n      void main() {\n        " + l2 + " coords = getOutputCoords();\n        bool hasNextCol = " + h2[c2 - 1] + " < " + (u2[c2 - 1] - 1) + ";\n        bool hasNextRow = " + h2[c2 - 2] + " < " + (u2[c2 - 2] - 1) + ";\n        " + i2 + "\n        ivec4 srcIdx = ivec4(sourceLocR" + p2 + ", sourceLocG" + p2 + ",\n          sourceLocB" + p2 + ", sourceLocA" + p2 + ") * " + e2 + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + E2 + ";\n\n        for (int i = 0; i < " + e2 + "; i++) {\n          inIdx = srcIdx;\n          " + w2 + "\n          vec4 candidate = " + E2 + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + b2 + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";
  };
  var fi = function(t2) {
    this.variableNames = ["dy"], this.outputShape = t2.inShape;
    var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = t2.dilationHeight, i2 = t2.dilationWidth, s2 = t2.effectiveFilterHeight, u2 = t2.effectiveFilterWidth, c2 = s2 - 1 - t2.padInfo.top, l2 = u2 - 1 - t2.padInfo.left, h2 = 1 / (e2 * n2);
    this.userCode = "\n      const ivec2 pads = ivec2(" + c2 + ", " + l2 + ");\n      const float avgMultiplier = float(" + h2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s2 + ";\n            wR += " + a2 + ") {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u2 + ";\n            wC+= " + i2 + ") {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var di = function(t2) {
    this.variableNames = ["dy"], this.outputShape = t2.inShape;
    var e2 = t2.filterDepth, n2 = t2.filterHeight, r2 = t2.filterWidth, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.effectiveFilterDepth, h2 = t2.effectiveFilterHeight, f2 = t2.effectiveFilterWidth, d2 = l2 - 1 - t2.padInfo.front, p2 = h2 - 1 - t2.padInfo.top, v = f2 - 1 - t2.padInfo.left, g = 1 / (e2 * n2 * r2);
    this.userCode = "\n      const ivec3 pads = ivec3(" + d2 + ", " + p2 + ", " + v + ");\n      const float avgMultiplier = float(" + g + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + l2 + ";\n            wD += " + s2 + ") {\n          float dyD = float(dyDCorner + wD) / " + o2 + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + h2 + ";\n              wR += " + u2 + ") {\n            float dyR = float(dyRCorner + wR) / " + a2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + f2 + ";\n                wC += " + c2 + ") {\n              float dyC = float(dyCCorner + wC) / " + i2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var pi = function(t2, e2, n2, r2, o2, a2) {
    this.outputShape = [], this.variableNames = ["x", "mean", "variance"], Pr(t2, e2), Pr(t2, n2);
    var i2 = "0.0";
    null != r2 && (Pr(t2, r2), this.variableNames.push("offset"), i2 = "getOffsetAtOutCoords()");
    var s2 = "1.0";
    null != o2 && (Pr(t2, o2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + i2 + ";\n        float scale = " + s2 + ";\n        float inv = scale * inversesqrt(variance + float(" + a2 + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";
  };
  var vi = function(t2, e2, n2, r2, o2, a2) {
    this.packedInputs = true, this.packedOutput = true, this.variableNames = ["x", "mean", "variance"], Pr(t2, e2), Pr(t2, n2);
    var i2 = "vec4(0.0)";
    null != r2 && (Pr(t2, r2), this.variableNames.push("offset"), i2 = "getOffsetAtOutCoords()");
    var s2 = "vec4(1.0)";
    null != o2 && (Pr(t2, o2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        vec4 offset = " + i2 + ";\n        vec4 scale = " + s2 + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + a2 + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";
  };
  var gi = "return areal * breal - aimag * bimag;";
  var mi = "return areal * bimag + aimag * breal;";
  var yi = function(t2, e2, n2) {
    this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = Pr(e2, n2), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t2 + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";
  };
  var xi = "return a + b;";
  var bi = "return a - b;";
  var wi = "return a * b;";
  var Ci = "\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;";
  var Ei = "return (a < 0.) ? b * a : a;";
  var Ri = function(t2, e2, n2) {
    this.variableNames = ["A", "B"], this.outputShape = Pr(e2, n2), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + t2 + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";
  };
  var Ii = "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n";
  var ki = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
  var Si = function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = false), this.variableNames = ["A", "B"], this.supportsBroadcasting = true, this.packedInputs = true, this.packedOutput = true, this.outputShape = Pr(e2, n2);
    var o2 = this.outputShape.length, a2 = "";
    if (r2)
      if (0 === o2 || 1 === k(this.outputShape))
        a2 = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";
      else if (a2 = "\n          " + ui(o2) + " coords = getOutputCoords();\n        ", 1 === o2)
        a2 += "\n            result.y = (coords + 1) >= " + this.outputShape[0] + " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";
      else {
        var i2 = Xa("coords", o2);
        a2 += "\n            bool nextRowOutOfBounds =\n              (" + i2[o2 - 2] + " + 1) >= " + this.outputShape[o2 - 2] + ";\n            bool nextColOutOfBounds =\n              (" + i2[o2 - 1] + " + 1) >= " + this.outputShape[o2 - 1] + ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";
      }
    this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + t2 + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        " + a2 + "\n\n        setOutput(result);\n      }\n    ";
  };
  var Ai = function() {
    function t2(t3) {
      this.variableNames = ["A"], this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3, e2) {
      var n2 = this;
      return function(r2, o2) {
        null == n2.minLoc && (n2.minLoc = r2.getUniformLocationNoThrow(o2, "minVal"), n2.maxLoc = r2.getUniformLocationNoThrow(o2, "maxVal")), r2.gl.uniform1f(n2.minLoc, t3), r2.gl.uniform1f(n2.maxLoc, e2);
      };
    }, t2;
  }();
  var Ti = function() {
    function t2(t3) {
      this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3, e2) {
      var n2 = this;
      return function(r2, o2) {
        null == n2.minLoc && (n2.minLoc = r2.getUniformLocationNoThrow(o2, "minVal"), n2.maxLoc = r2.getUniformLocationNoThrow(o2, "maxVal")), r2.gl.uniform1f(n2.minLoc, t3), r2.gl.uniform1f(n2.maxLoc, e2);
      };
    }, t2;
  }();
  var Di = function(t2) {
    this.variableNames = ["real", "imag"], this.outputShape = t2, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";
  };
  var Ni = function(t2) {
    this.outputShape = [], this.outputShape = Sn(t2, 1), this.variableNames = t2.map(function(t3, e3) {
      return "T" + e3;
    });
    var e2 = new Array(t2.length - 1);
    e2[0] = t2[0][1];
    for (var n2 = 1; n2 < e2.length; n2++)
      e2[n2] = e2[n2 - 1] + t2[n2][1];
    var r2 = ["if (yC < " + e2[0] + ") setOutput(getT0(yR, yC));"];
    for (n2 = 1; n2 < e2.length; n2++) {
      var o2 = e2[n2 - 1];
      r2.push("else if (yC < " + e2[n2] + ") setOutput(getT" + n2 + "(yR, yC-" + o2 + "));");
    }
    var a2 = e2.length, i2 = e2[e2.length - 1];
    r2.push("else setOutput(getT" + a2 + "(yR, yC-" + i2 + "));"), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + r2.join("\n        ") + "\n      }\n    ";
  };
  var Fi = function(t2, e2) {
    this.packedInputs = true, this.packedOutput = true, this.outputShape = [], this.outputShape = Sn(t2, e2);
    var n2 = this.outputShape, r2 = n2.length, o2 = ui(r2), a2 = Xa("coords", r2), i2 = ["x", "y", "z", "w", "u", "v"].slice(0, r2);
    this.variableNames = t2.map(function(t3, e3) {
      return "T" + e3;
    });
    var s2 = new Array(t2.length - 1);
    s2[0] = t2[0][e2];
    for (var u2 = 1; u2 < s2.length; u2++)
      s2[u2] = s2[u2 - 1] + t2[u2][e2];
    var c2 = i2[e2], l2 = i2.slice(-2), h2 = i2.join(), f2 = "if (" + c2 + " < " + s2[0] + ") {\n        return getChannel(\n            getT0(" + h2 + "), vec2(" + l2.join() + "));\n        }";
    for (u2 = 1; u2 < s2.length; u2++) {
      var d2 = s2[u2 - 1];
      f2 += "\n        if (" + c2 + " < " + s2[u2] + "  && " + c2 + " >= " + s2[u2 - 1] + ") {\n          return getChannel(\n            getT" + u2 + "(" + _i(i2, c2, d2) + "),\n            vec2(" + _i(l2, c2, d2) + "));\n        }";
    }
    var p2 = s2.length, v = s2[s2.length - 1];
    f2 += "\n        return getChannel(\n          getT" + p2 + "(" + _i(i2, c2, v) + "),\n          vec2(" + _i(l2, c2, v) + "));", this.userCode = "\n      float getValue(" + i2.map(function(t3) {
      return "int " + t3;
    }) + ") {\n        " + f2 + "\n      }\n\n      void main() {\n        " + o2 + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + a2 + "), 0., 0., 0.);\n\n        " + a2[r2 - 1] + " = " + a2[r2 - 1] + " + 1;\n        if (" + a2[r2 - 1] + " < " + n2[r2 - 1] + ") {\n          result.g = getValue(" + a2 + ");\n        }\n\n        " + a2[r2 - 2] + " = " + a2[r2 - 2] + " + 1;\n        if (" + a2[r2 - 2] + " < " + n2[r2 - 2] + ") {\n          result.a = getValue(" + a2 + ");\n        }\n\n        " + a2[r2 - 1] + " = " + a2[r2 - 1] + " - 1;\n        if (" + a2[r2 - 2] + " < " + n2[r2 - 2] + " &&\n            " + a2[r2 - 1] + " < " + n2[r2 - 1] + ") {\n          result.b = getValue(" + a2 + ");\n        }\n        setOutput(result);\n      }\n    ";
  };
  function _i(t2, e2, n2) {
    var r2 = t2.indexOf(e2);
    return t2.map(function(t3, e3) {
      return e3 === r2 ? t3 + " - " + n2 : t3;
    }).join();
  }
  var Oi = function(t2) {
    this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
    var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.padInfo.top, o2 = t2.padInfo.left, a2 = "channelsLast" === t2.dataFormat;
    this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + e2 + " - " + r2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + n2 + " - " + o2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              if (" + a2 + ") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Mi = function(t2) {
    this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
    var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = "channelsLast" === t2.dataFormat, i2 = e2 - 1 - t2.padInfo.top, s2 = n2 - 1 - t2.padInfo.left, u2 = a2 ? 1 : 2, c2 = a2 ? 2 : 3, l2 = a2 ? 3 : 1;
    this.userCode = "\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[" + l2 + "];\n\n        ivec2 dyCorner = ivec2(coords[" + u2 + "], coords[" + c2 + "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + e2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n2 + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n\n              if (" + a2 + ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Bi = function(t2) {
    this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
    var e2 = t2.strideDepth, n2 = t2.strideHeight, r2 = t2.strideWidth, o2 = t2.padInfo.front, a2 = t2.padInfo.top, i2 = t2.padInfo.left;
    this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t2.outDepth + "; yF++) {\n            int xF = wF + yF * " + e2 + " - " + o2 + ";\n\n            if (xF < 0 || xF >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n              int xR = wR + yR * " + n2 + " - " + a2 + ";\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n                int xC = wC + yC * " + r2 + " - " + i2 + ";\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Pi = function(t2) {
    this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
    var e2 = t2.filterDepth, n2 = t2.filterHeight, r2 = t2.filterWidth, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = e2 - 1 - t2.padInfo.front, u2 = n2 - 1 - t2.padInfo.top, c2 = r2 - 1 - t2.padInfo.left;
    this.userCode = "\n      const ivec3 pads = ivec3(" + s2 + ", " + u2 + ", " + c2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + e2 + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + o2 + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t2.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + e2 + " - 1 - wF;\n\n          for (int wR = 0; wR < " + n2 + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + a2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + n2 + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r2 + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + i2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r2 + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Li = function(t2) {
    this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
    var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.padInfo.top, o2 = t2.padInfo.left, a2 = t2.outChannels / t2.inChannels;
    this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + a2 + " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + e2 + " - " + r2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + n2 + " - " + o2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Wi = function(t2) {
    this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
    var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = e2 - 1 - t2.padInfo.top, i2 = n2 - 1 - t2.padInfo.left, s2 = t2.outChannels / t2.inChannels;
    this.userCode = "\n      const ivec2 pads = ivec2(" + a2 + ", " + i2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + e2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n2 + " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s2 + "; dm++) {\n              int d2 = d1 * " + s2 + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Ui = function(t2, e2, n2, r2) {
    void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
    var o2 = t2.padInfo.top, a2 = t2.padInfo.left, i2 = t2.strideHeight, s2 = t2.strideWidth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterHeight, h2 = t2.filterWidth, f2 = 4 * Math.floor(t2.inChannels / 4), d2 = t2.inChannels % 4, p2 = "channelsLast" === t2.dataFormat, v = p2 ? 1 : 2, g = p2 ? 2 : 3, m2 = p2 ? 3 : 1, y2 = "", x2 = "";
    n2 && (y2 = r2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "\n          float activation(float x) {\n            " + n2 + "\n          }\n        ", x2 = "result = activation(result);");
    var b2 = e2 ? "result += getBiasAtOutCoords();" : "";
    e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + y2 + "\n\n      const ivec2 strides = ivec2(" + i2 + ", " + s2 + ");\n      const ivec2 pads = ivec2(" + o2 + ", " + a2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[" + m2 + "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[" + v + "], coords[" + g + "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + l2 + "; wR++) {\n          int xR = xRCorner + wR * " + u2 + ";\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + h2 + "; wC++) {\n            int xC = xCCorner + wC * " + c2 + ";\n\n            if (xC < 0 || xC >= " + t2.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + f2 + "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (" + p2 + ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (" + (1 === d2) + ") {\n\n              if (" + p2 + ") {\n                dotProd +=\n                    getX(batch, xR, xC, " + f2 + ") *\n                    getW(wR, wC, " + f2 + ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, " + f2 + ", xR, xC) *\n                    getW(wR, wC, " + f2 + ", d2);\n              }\n\n            } else if (" + (2 === d2) + ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2)\n              );\n\n              if (" + p2 + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (" + (3 === d2) + ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2),\n                getW(wR, wC, " + f2 + " + 2, d2)\n              );\n\n              if (" + p2 + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1),\n                  getX(batch, xR, xC, " + f2 + " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC),\n                  getX(batch, " + f2 + " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        " + b2 + "\n        " + x2 + "\n        setOutput(result);\n      }\n    ";
  };
  var Vi = function(t2) {
    this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
    var e2 = t2.padInfo.front, n2 = t2.padInfo.top, r2 = t2.padInfo.left, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterDepth, h2 = t2.filterHeight, f2 = t2.filterWidth, d2 = 4 * Math.floor(t2.inChannels / 4), p2 = t2.inChannels % 4;
    this.userCode = "\n      const ivec3 strides = ivec3(" + o2 + ", " + a2 + ", " + i2 + ");\n      const ivec3 pads = ivec3(" + e2 + ", " + n2 + ", " + r2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l2 + "; wF++) {\n          int xF = xFCorner + wF * " + s2 + ";\n\n          if (xF < 0 || xF >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h2 + "; wR++) {\n            int xR = xRCorner + wR * " + u2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + f2 + "; wC++) {\n              int xC = xCCorner + wC * " + c2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + d2 + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === p2) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + d2 + ") *\n                  getW(wF, wR, wC, " + d2 + ", d2);\n              } else if (" + (2 === p2) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === p2) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1),\n                  getX(batch, xF, xR, xC, " + d2 + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2),\n                  getW(wF, wR, wC, " + d2 + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var zi = function(t2, e2, n2, r2) {
    void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
    var o2 = t2.inHeight, a2 = t2.inWidth, i2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, p2 = t2.outChannels / t2.inChannels, v = "", g = "";
    n2 && (v = r2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "\n          float activation(float x) {\n            " + n2 + "\n          }\n        ", g = "result = activation(result);");
    var m2 = e2 ? "result += getBiasAtOutCoords();" : "";
    e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + v + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + p2 + ";\n        int q = d2 - d1 * " + p2 + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + f2 + "; wR++) {\n          int xR = xRCorner + wR * " + l2 + ";\n\n          if (xR < 0 || xR >= " + o2 + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + d2 + "; wC++) {\n            int xC = xCCorner + wC * " + h2 + ";\n\n            if (xC < 0 || xC >= " + a2 + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        " + m2 + "\n        " + g + "\n        setOutput(result);\n      }\n    ";
  };
  var Gi = function(t2, e2, n2, r2) {
    void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2.outShape;
    for (var o2 = t2.inHeight, a2 = t2.inWidth, i2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, p2 = d2, v = "int xR; int xC; int xCOffset;", g = 0; g < f2; g++)
      for (var m2 = 0; m2 < d2; m2++)
        v += "\n          vec4 xTexelR" + g + "C" + 2 * m2 + " = vec4(0.);\n          vec4 wR" + g + "C" + m2 + " = vec4(0.);\n          vec4 xR" + g + "C" + m2 + " = vec4(0.);";
    for (g = 0; g < f2; g++)
      for (var y2 = 0; y2 < p2; y2++) {
        if (v += "\n          xR = xRCorner + " + g * l2 + ";\n          xC = xCCorner + " + (m2 = 2 * y2) * h2 + ";\n        ", 1 === c2) {
          if (m2 < d2 && (v += s2 % 2 == 1 ? "\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < " + o2 + " && xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + g + "C" + m2 + " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + a2 + ") {\n                    xTexelR" + g + "C" + m2 + ".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR" + g + "C" + m2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < " + o2 + " && xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + a2 + ") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR" + g + "C" + m2 + " = vec4(previous.zw, xTexelR" + g + "C" + m2 + ".xy);\n                } else {\n                  xR" + g + "C" + m2 + " = vec4(0, 0, xTexelR" + g + "C" + m2 + ".xy);\n                }\n              " : "\n                if(xR >= 0 && xR < " + o2 + " && xC >= 0 && xC < " + a2 + ") {\n                  xTexelR" + g + "C" + m2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + g + "C" + m2 + " = vec4(0.);\n                }\n\n                xR" + g + "C" + m2 + " = xTexelR" + g + "C" + m2 + ";\n              ", m2 + 1 < d2)) {
            var x2 = s2 % 2 == 0 ? b(h2) : h2;
            h2 % 2 == 0 && s2 % 2 == 1 || h2 % 2 != 0 && s2 % 2 != 1 ? (v += "\n                  xCOffset = xC + " + s2 % 2 + " + " + x2 + ";\n\n                  if(xR >= 0 && xR < " + o2 + " &&\n                    xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    xTexelR" + g + "C" + (m2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n                ", h2 > 1 && (v += "\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < " + o2 + " &&\n                      xCOffset >= 0 && xCOffset < " + a2 + ") {\n                      xTexelR" + g + "C" + m2 + " = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR" + g + "C" + m2 + " = vec4(0.);\n                    }\n                  "), v += "\n                  xR" + g + "C" + (m2 + 1) + " = vec4(\n                    xTexelR" + g + "C" + m2 + ".zw, xTexelR" + g + "C" + (m2 + 2) + ".xy);\n                ") : v += "\n                  xCOffset = xC + " + x2 + ";\n\n                  if(xR >= 0 && xR < " + o2 + " &&\n                    xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    xTexelR" + g + "C" + (m2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR" + g + "C" + (m2 + 1) + " = xTexelR" + g + "C" + (m2 + 2) + ";\n                ";
          }
        } else
          m2 < d2 && (v += "\n              if(xR >= 0 && xR < " + o2 + ") {\n            ", s2 % 2 == 1 ? (v += "\n                xCOffset = xC + 1 - " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + g + "C" + m2 + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + g + "C" + m2 + " = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < " + a2 + ") {\n                  xTexelR" + g + "C" + (m2 + 2) + " = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR" + g + "C" + (m2 + 2) + " = vec4(0.);\n                }\n\n                xR" + g + "C" + m2 + " = vec4(\n                  xTexelR" + g + "C" + m2 + ".zw, xTexelR" + g + "C" + (m2 + 2) + ".zw);\n              ", m2 + 1 < d2 && (v += "\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + " + c2 + ";\n                  if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR" + g + "C" + (m2 + 1) + " = vec4(xTexelR" + g + "C" + (m2 + 2) + ".xy, final.xy);\n                ")) : (v += "\n                if(xC >= 0 && xC < " + a2 + ") {\n                  xTexelR" + g + "C" + m2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + g + "C" + m2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + g + "C" + (m2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + g + "C" + (m2 + 2) + " = vec4(0.);\n                }\n\n                xR" + g + "C" + m2 + " = vec4(\n                  xTexelR" + g + "C" + m2 + ".xy, xTexelR" + g + "C" + (m2 + 2) + ".xy);\n              ", m2 + 1 < d2 && (v += "\n                  xR" + g + "C" + (m2 + 1) + " = vec4(\n                    xTexelR" + g + "C" + m2 + ".zw, xTexelR" + g + "C" + (m2 + 2) + ".zw);\n                ")), v += "}");
        m2 < d2 && (v += "\n            vec4 wTexelR" + g + "C" + m2 + " = getW(" + g + ", " + m2 + ", d1, q);\n            wR" + g + "C" + m2 + " = vec4(wTexelR" + g + "C" + m2 + ".xz, wTexelR" + g + "C" + m2 + ".xz);\n          ", m2 + 1 < d2 && (v += "\n              vec4 wTexelR" + g + "C" + (m2 + 1) + " = getW(" + g + ", " + (m2 + 1) + ", d1, q);\n              wR" + g + "C" + (m2 + 1) + " =\n                vec4(wTexelR" + g + "C" + (m2 + 1) + ".xz, wTexelR" + g + "C" + (m2 + 1) + ".xz);"));
      }
    for (g = 0; g < f2; g++)
      for (m2 = 0; m2 < d2; m2++)
        v += "dotProd += xR" + g + "C" + m2 + " * wR" + g + "C" + m2 + ";";
    var w2 = "", C2 = "";
    n2 && (w2 = r2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + n2 + "\n        }", C2 = "result = activation(result);");
    var E2 = e2 ? "result += getBiasAtOutCoords();" : "";
    e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + w2 + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        " + v + "\n\n        vec4 result = dotProd;\n        " + E2 + "\n        " + C2 + "\n        setOutput(result);\n      }\n    ";
  };
  var Hi = function(t2, e2, n2, r2, o2) {
    this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
    var a2 = t2[0], i2 = t2[1], s2 = t2[2], u2 = t2[3], c2 = e2[0], l2 = n2[0], h2 = n2[1];
    this.outputShape = [c2, l2, h2, u2];
    var f2 = "bilinear" === r2 ? 1 : 0, d2 = [i2 - 1 + ".0", s2 - 1 + ".0"], p2 = d2[0], v = d2[1], g = l2 > 1 ? ["" + (i2 - 1) / (l2 - 1), "(y2-y1) * height_ratio", "y1*" + p2 + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + p2], m2 = g[0], y2 = g[1], x2 = g[2], b2 = h2 > 1 ? ["" + (s2 - 1) / (h2 - 1), "(x2-x1) * width_ratio", "x1*" + v + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + v], w2 = b2[0], C2 = b2[1], E2 = b2[2];
    this.userCode = "\n      const float height_ratio = float(" + m2 + ");\n      const float width_ratio = float(" + w2 + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + a2 + ") {\n          return;\n        }\n\n        float height_scale = " + y2 + ";\n        float width_scale = " + C2 + ";\n\n        float in_y = " + x2 + ";\n        if( in_y < 0.0 || in_y > " + p2 + " ) {\n          setOutput(float(" + o2 + "));\n          return;\n        }\n        float in_x = " + E2 + ";\n        if( in_x < 0.0 || in_x > " + v + " ) {\n          setOutput(float(" + o2 + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + f2 + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";
  };
  var qi = function(t2, e2, n2) {
    this.variableNames = ["x"], this.outputShape = t2;
    var r2 = t2.length, o2 = t2[t2.length - 1], a2 = n2 ? "<" : ">";
    this.userCode = "\n      int getIndex(int i) {\n        " + (n2 ? "return " + o2 + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + ui(r2) + " coords = getOutputCoords();\n        int end = " + Ki(r2, "coords") + ";\n        float val = 0.0;\n        for (int i = " + o2 + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + a2 + " end) {\n            continue;\n          }\n          if (idx == end && " + e2 + ") {\n            continue;\n          }\n          " + Ki(r2, "coords") + " = idx;\n          val += getX(" + function(t3, e3) {
      if (1 === t3)
        return "" + e3;
      if (2 === t3)
        return e3 + ".x, " + e3 + ".y";
      if (3 === t3)
        return e3 + ".x, " + e3 + ".y, " + e3 + ".z";
      if (4 === t3)
        return e3 + ".x, " + e3 + ".y, " + e3 + ".z, " + e3 + ".w";
      throw Error("Cumulative sum for rank " + t3 + " is not yet supported");
    }(r2, "coords") + ");\n        }\n        setOutput(val);\n      }\n    ";
  };
  function Ki(t2, e2) {
    if (1 === t2)
      return "" + e2;
    if (2 === t2)
      return e2 + ".y";
    if (3 === t2)
      return e2 + ".z";
    if (4 === t2)
      return e2 + ".w";
    throw Error("Cumulative sum for rank " + t2 + " is not yet supported");
  }
  var ji = function(t2) {
    this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outPackingScheme = Vt.DENSE;
    var e2 = Yt(t2), n2 = Ya();
    this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + $a(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e2[0] + ", " + e2[1] + "));\n        int index = 4 * (resTexRC.x * " + e2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        " + n2.output + " = result;\n      }\n    ";
  };
  var Xi = function(t2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outPackingScheme = Vt.DENSE;
    var e2 = Yt(t2), n2 = Ya();
    this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + $a(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e2[0] + ", " + e2[1] + "));\n        int index = 4 * (resTexRC.x * " + e2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        " + n2.output + " = result;\n      }\n    ";
  };
  var Yi = function() {
    function t2(t3, e2, n2) {
      this.variableNames = ["x"], this.outputShape = [], this.outputShape = t3, this.blockSize = e2, this.dataFormat = n2, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + e2 + ";\n      int offset_h = imod(h, " + e2 + ");\n      int in_w = w / " + e2 + ";\n      int offset_w = imod(w, " + e2 + ");\n      int offset_d = (offset_h * " + e2 + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  ";
    }
    return t2.prototype.getHeightCoordString = function() {
      return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]";
    }, t2.prototype.getWidthCoordString = function() {
      return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]";
    }, t2.prototype.getDepthCoordString = function() {
      return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]";
    }, t2.prototype.getOutputDepthSize = function() {
      return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1];
    }, t2.prototype.getInputSamplingString = function() {
      return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)";
    }, t2;
  }();
  var $i = function(t2) {
    this.variableNames = ["X"], this.outputShape = [t2, t2], this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";
  };
  var Qi = function(t2) {
    this.variableNames = ["A"], this.outTexUsage = zt.DOWNLOAD;
    var e2 = Ya();
    this.outputShape = t2, this.userCode = "\n      " + Ja + "\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + e2.output + " = encode_float(x);\n      }\n    ";
  };
  var Ji = function(t2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outTexUsage = zt.DOWNLOAD;
    var e2 = Ya();
    this.outputShape = t2, this.userCode = "\n      " + Ja + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        " + e2.output + " = encode_float(x);\n      }\n    ";
  };
  var Zi = function(t2, e2, n2) {
    void 0 === n2 && (n2 = false), this.variableNames = ["A"];
    var r2 = Ya(), o2 = e2[0], a2 = e2[1];
    this.outputShape = t2;
    var i2 = "result";
    n2 && (i2 = "floor(result * 255. + 0.5)"), this.userCode = "\n      " + Qa(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / " + a2 + ";\n        int c = imod(flatIndex, " + a2 + ");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(" + a2 + ".0, " + o2 + ".0);\n        vec4 values = " + r2.texture2D + "(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        " + r2.output + " = vec4(" + i2 + ", 0., 0., 0.);\n      }\n    ";
  };
  var ts = function(t2, e2, n2) {
    void 0 === n2 && (n2 = false), this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
    var r2 = Ya(), o2 = e2[0], a2 = e2[1];
    this.outputShape = t2;
    var i2 = "", s2 = "result";
    n2 && (s2 = "floor(result * 255. + 0.5)");
    for (var u2 = 0; u2 <= 1; u2++)
      for (var c2 = 0; c2 <= 1; c2++) {
        var l2 = 2 * u2 + c2;
        i2 += "\n          localCoords = coords;\n          if(localCoords[2] + " + c2 + " < " + t2[2] + ") {\n            localCoords[2] += " + c2 + ";\n            if(localCoords[1] + " + u2 + " < " + t2[1] + ") {\n              localCoords[1] += " + u2 + ";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / " + a2 + ";\n              c = imod(flatIndex, " + a2 + ");\n              uv = (vec2(c, r) + halfCR) / vec2(" + a2 + ".0, " + o2 + ".0);\n              values = " + r2.texture2D + "(A, uv);\n\n              if(offset == 0) {\n                result[" + l2 + "] = values[0];\n              } else if(offset == 1) {\n                result[" + l2 + "] = values[1];\n              } else if(offset == 2) {\n                result[" + l2 + "] = values[2];\n              } else {\n                result[" + l2 + "] = values[3];\n              }\n            }\n          }\n        ";
      }
    this.userCode = "\n      " + Qa(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        " + i2 + "\n\n        " + r2.output + " = " + s2 + ";\n      }\n    ";
  };
  var es = "return real * expR - imag * expI;";
  var ns = "return real * expI + imag * expR;";
  var rs = function(t2, e2, n2) {
    this.variableNames = ["real", "imag"];
    var r2 = e2[1];
    this.outputShape = e2;
    var o2 = n2 ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI, a2 = n2 ? r2 + ".0" : "1.0";
    this.userCode = "\n      const float exponentMultiplier = " + o2 + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t2 + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r2 + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r2 + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + a2 + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";
  };
  var os = function() {
    function t2(t3, e2) {
      this.outputShape = [], this.variableNames = ["x"], this.outputShape = t3, this.userCode = "\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3) {
      var e2 = this;
      return function(n2, r2) {
        null == e2.valueLoc && (e2.valueLoc = n2.getUniformLocationNoThrow(r2, "value")), n2.gl.uniform1f(e2.valueLoc, t3);
      };
    }, t2;
  }();
  var as = function(t2, e2, n2) {
    this.variableNames = ["A", "indices"];
    var r2 = t2.slice();
    r2[n2] = e2, this.outputShape = r2, this.rank = r2.length;
    var o2 = ui(this.rank), a2 = function(t3, e3) {
      var n3 = t3.length;
      if (n3 > 4)
        throw Error("Gather for rank " + n3 + " is not yet supported");
      if (1 === n3)
        return "int(getIndices(resRC))";
      for (var r3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o3 = [], a3 = 0; a3 < t3.length; a3++)
        a3 === e3 ? o3.push("int(getIndices(" + r3[a3] + "))") : o3.push("" + r3[a3]);
      return o3.join();
    }(t2, n2);
    this.userCode = "\n      void main() {\n        " + o2 + " resRC = getOutputCoords();\n        setOutput(getA(" + a2 + "));\n      }\n    ";
  };
  var is = function(t2, e2, n2) {
    this.sliceDim = t2, this.strides = e2, this.variableNames = ["x", "indices"], this.outputShape = n2;
    var r2 = ui(e2.length), o2 = ui(n2.length), a2 = this.sliceDim > 1 ? "strides[j]" : "strides";
    this.userCode = "\n        " + r2 + " strides = " + r2 + "(" + this.strides + ");\n         void main() {\n          " + o2 + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + a2 + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";
  };
  function ss(t2, e2) {
    var n2 = Ya();
    return oe(t2, e2, n2.version + "\n    precision highp float;\n    " + n2.attribute + " vec3 clipSpacePos;\n    " + n2.attribute + " vec2 uv;\n    " + n2.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }");
  }
  function us(t2, e2) {
    return fe(t2, e2, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]));
  }
  function cs(t2, e2) {
    return de(t2, e2, new Uint16Array([0, 1, 2, 2, 1, 3]));
  }
  function ls(t2, e2, n2, r2, o2, a2, i2) {
    ve(n2, r2);
    var s2 = pe(t2, e2), u2 = t2.TEXTURE_2D;
    return Jt(t2, e2, function() {
      return t2.bindTexture(u2, s2);
    }), Jt(t2, e2, function() {
      return t2.texParameteri(u2, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE);
    }), Jt(t2, e2, function() {
      return t2.texParameteri(u2, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE);
    }), Jt(t2, e2, function() {
      return t2.texParameteri(u2, t2.TEXTURE_MIN_FILTER, t2.NEAREST);
    }), Jt(t2, e2, function() {
      return t2.texParameteri(u2, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
    }), Jt(t2, e2, function() {
      return t2.texImage2D(u2, 0, o2, n2, r2, 0, a2, i2, null);
    }), Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, null);
    }), s2;
  }
  function hs(t2, e2, n2, r2, o2) {
    var a2 = Xt(n2, r2);
    return ls(t2, e2, a2[0], a2[1], o2.internalFormatFloat, o2.textureFormatFloat, t2.FLOAT);
  }
  function fs(t2, e2, n2, r2, o2) {
    var a2 = Xt(n2, r2);
    return ls(t2, e2, a2[0], a2[1], o2.internalFormatHalfFloat, o2.textureFormatFloat, o2.textureTypeHalfFloat);
  }
  function ds(t2, e2, n2, r2, o2) {
    var a2 = Xt(n2, r2);
    return ls(t2, e2, a2[0], a2[1], t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE);
  }
  function ps(t2, e2, n2, r2, o2) {
    var a2 = $t(n2, r2);
    return ls(t2, e2, a2[0], a2[1], o2.internalFormatPackedFloat, t2.RGBA, t2.FLOAT);
  }
  function vs(t2, e2, n2, r2, o2) {
    var a2 = $t(n2, r2);
    return ls(t2, e2, a2[0], a2[1], o2.internalFormatPackedHalfFloat, t2.RGBA, o2.textureTypeHalfFloat);
  }
  function gs(t2, e2, n2, r2) {
    return Jt(t2, e2, function() {
      return t2.bindBuffer(t2.ARRAY_BUFFER, r2);
    }), me(t2, e2, n2, "clipSpacePos", r2, 3, 20, 0) && me(t2, e2, n2, "uv", r2, 2, 20, 12);
  }
  function ms(t2, e2, n2, r2, o2, a2, i2) {
    var s2, u2, c2;
    Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, n2);
    }), a2 instanceof Uint8Array ? (s2 = new Uint8Array(r2 * o2 * 4), u2 = t2.UNSIGNED_BYTE, c2 = t2.RGBA) : (s2 = new Float32Array(r2 * o2 * 4), u2 = t2.FLOAT, c2 = i2.internalFormatPackedFloat), s2.set(a2), Jt(t2, e2, function() {
      return t2.texImage2D(t2.TEXTURE_2D, 0, c2, r2, o2, 0, t2.RGBA, u2, s2);
    }), Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, null);
    });
  }
  function ys(t2, e2, n2, r2) {
    Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, n2);
    }), r2.data instanceof Uint8Array ? Jt(t2, e2, function() {
      return t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, r2.width, r2.height, 0, t2.RGBA, t2.UNSIGNED_BYTE, r2.data);
    }) : Jt(t2, e2, function() {
      return t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE, r2);
    }), Jt(t2, e2, function() {
      return t2.bindTexture(t2.TEXTURE_2D, null);
    });
  }
  function xs(t2, e2, n2, r2, o2) {
    var a2 = t2.createBuffer();
    Jt(t2, e2, function() {
      return t2.bindBuffer(t2.PIXEL_PACK_BUFFER, a2);
    });
    var i2 = 16 * n2 * r2;
    return Jt(t2, e2, function() {
      return t2.bufferData(t2.PIXEL_PACK_BUFFER, i2, t2.STREAM_READ);
    }), Jt(t2, e2, function() {
      return t2.readPixels(0, 0, r2, n2, t2.RGBA, t2.FLOAT, 0);
    }), Jt(t2, e2, function() {
      return t2.bindBuffer(t2.PIXEL_PACK_BUFFER, null);
    }), a2;
  }
  function bs(t2, e2, n2) {
    var r2 = t2, o2 = new Float32Array(n2);
    return r2.bindBuffer(r2.PIXEL_PACK_BUFFER, e2), r2.getBufferSubData(r2.PIXEL_PACK_BUFFER, 0, o2), r2.bindBuffer(r2.PIXEL_PACK_BUFFER, null), o2;
  }
  function ws(t2, e2, n2, r2, o2) {
    var a2 = Xt(n2, r2), i2 = a2[0], s2 = a2[1], u2 = new Uint8Array(n2 * r2 * 4);
    return Jt(t2, e2, function() {
      return t2.readPixels(0, 0, i2, s2, o2.downloadTextureFormat, t2.UNSIGNED_BYTE, u2);
    }), new Float32Array(u2.buffer);
  }
  function Cs(t2, e2, n2, r2, o2, a2, i2, s2) {
    var u2 = t2, c2 = new Float32Array(function(t3, e3) {
      var n3 = $t(t3, e3);
      return n3[0] * n3[1] * 4;
    }(a2, i2));
    return u2.bindBuffer(u2.PIXEL_PACK_BUFFER, e2), u2.getBufferSubData(u2.PIXEL_PACK_BUFFER, 0, c2), u2.bindBuffer(u2.PIXEL_PACK_BUFFER, null), c2;
  }
  function Es(t2, e2, n2, r2) {
    var o2 = new Float32Array(n2 * r2 * 4);
    return Jt(t2, e2, function() {
      return t2.readPixels(0, 0, r2, n2, t2.RGBA, t2.FLOAT, o2);
    }), o2;
  }
  var Rs = Object.freeze({ createVertexShader: ss, createVertexBuffer: us, createIndexBuffer: cs, createFloat32MatrixTexture: hs, createFloat16MatrixTexture: fs, createUnsignedBytesMatrixTexture: ds, createPackedMatrixTexture: ps, createFloat16PackedMatrixTexture: vs, bindVertexProgramAttributeStreams: gs, uploadDenseMatrixToTexture: ms, uploadPixelDataToTexture: ys, createBufferFromOutputTexture: xs, downloadFloat32MatrixFromBuffer: bs, downloadByteEncodedFloatMatrixFromOutputTexture: ws, downloadPackedMatrixFromBuffer: Cs, downloadMatrixFromPackedOutputTexture: Es });
  var Is = function() {
    function t2(t3) {
      this.outputTexture = null, this.program = null, this.disposed = false, this.vertexAttrsAreBound = false, this.itemsToPoll = [];
      var e2 = i().getNumber("WEBGL_VERSION");
      null != t3 ? (this.gl = t3, Kt(e2, t3)) : this.gl = jt(e2);
      var n2 = "WEBGL_color_buffer_float";
      if (1 === i().getNumber("WEBGL_VERSION")) {
        if (this.textureFloatExtension = re(this.gl, this.debug, "OES_texture_float"), Pe(this.gl, "OES_texture_half_float"))
          this.textureHalfFloatExtension = re(this.gl, this.debug, "OES_texture_half_float");
        else if (i().get("WEBGL_FORCE_F16_TEXTURES"))
          throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
        if (this.colorBufferFloatExtension = this.gl.getExtension(n2), Pe(this.gl, "EXT_color_buffer_half_float"))
          this.colorBufferHalfFloatExtension = re(this.gl, this.debug, "EXT_color_buffer_half_float");
        else if (i().get("WEBGL_FORCE_F16_TEXTURES"))
          throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      } else if (n2 = "EXT_color_buffer_float", Pe(this.gl, n2))
        this.colorBufferFloatExtension = this.gl.getExtension(n2);
      else {
        if (!Pe(this.gl, "EXT_color_buffer_half_float"))
          throw new Error("GL context does not support color renderable floats");
        this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float");
      }
      this.vertexBuffer = us(this.gl, this.debug), this.indexBuffer = cs(this.gl, this.debug), this.framebuffer = ge(this.gl, this.debug), this.textureConfig = Qt(this.gl, this.textureHalfFloatExtension);
    }
    return Object.defineProperty(t2.prototype, "debug", { get: function() {
      return i().getBool("DEBUG");
    }, enumerable: true, configurable: true }), t2.prototype.dispose = function() {
      var t3 = this;
      if (!this.disposed) {
        null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
        var e2 = this.gl;
        Jt(e2, this.debug, function() {
          return e2.finish();
        }), Jt(e2, this.debug, function() {
          return e2.bindFramebuffer(e2.FRAMEBUFFER, null);
        }), Jt(e2, this.debug, function() {
          return e2.deleteFramebuffer(t3.framebuffer);
        }), Jt(e2, this.debug, function() {
          return e2.bindBuffer(e2.ARRAY_BUFFER, null);
        }), Jt(e2, this.debug, function() {
          return e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, null);
        }), Jt(e2, this.debug, function() {
          return e2.deleteBuffer(t3.indexBuffer);
        }), this.disposed = true;
      }
    }, t2.prototype.createFloat32MatrixTexture = function(t3, e2) {
      return this.throwIfDisposed(), hs(this.gl, this.debug, t3, e2, this.textureConfig);
    }, t2.prototype.createFloat16MatrixTexture = function(t3, e2) {
      return this.throwIfDisposed(), fs(this.gl, this.debug, t3, e2, this.textureConfig);
    }, t2.prototype.createUnsignedBytesMatrixTexture = function(t3, e2) {
      return this.throwIfDisposed(), ds(this.gl, this.debug, t3, e2, this.textureConfig);
    }, t2.prototype.uploadPixelDataToTexture = function(t3, e2) {
      this.throwIfDisposed(), ys(this.gl, this.debug, t3, e2);
    }, t2.prototype.uploadDenseMatrixToTexture = function(t3, e2, n2, r2) {
      this.throwIfDisposed(), ms(this.gl, this.debug, t3, e2, n2, r2, this.textureConfig);
    }, t2.prototype.createFloat16PackedMatrixTexture = function(t3, e2) {
      return this.throwIfDisposed(), vs(this.gl, this.debug, t3, e2, this.textureConfig);
    }, t2.prototype.createPackedMatrixTexture = function(t3, e2) {
      return this.throwIfDisposed(), ps(this.gl, this.debug, t3, e2, this.textureConfig);
    }, t2.prototype.deleteMatrixTexture = function(t3) {
      var e2 = this;
      this.throwIfDisposed(), this.outputTexture === t3 && (Ee(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Jt(this.gl, this.debug, function() {
        return e2.gl.deleteTexture(t3);
      });
    }, t2.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(t3, e2, n2) {
      var r2 = this;
      return this.downloadMatrixDriver(t3, function() {
        return ws(r2.gl, r2.debug, e2, n2, r2.textureConfig);
      });
    }, t2.prototype.downloadPackedMatrixFromBuffer = function(t3, e2, n2, r2, o2, a2) {
      return Cs(this.gl, t3, 0, 0, 0, o2, a2, this.textureConfig);
    }, t2.prototype.downloadFloat32MatrixFromBuffer = function(t3, e2) {
      return bs(this.gl, t3, e2);
    }, t2.prototype.createBufferFromTexture = function(t3, e2, n2) {
      this.bindTextureToFrameBuffer(t3);
      var r2 = xs(this.gl, this.debug, e2, n2, this.textureConfig);
      return this.unbindTextureToFrameBuffer(), r2;
    }, t2.prototype.createAndWaitForFence = function() {
      var t3 = this.createFence(this.gl);
      return this.pollFence(t3);
    }, t2.prototype.createFence = function(t3) {
      var e2, n2, r2 = this;
      if (i().getBool("WEBGL_FENCE_API_ENABLED")) {
        var o2 = t3, a2 = o2.fenceSync(o2.SYNC_GPU_COMMANDS_COMPLETE, 0);
        t3.flush(), n2 = function() {
          var t4 = o2.clientWaitSync(a2, 0, 0);
          return t4 === o2.ALREADY_SIGNALED || t4 === o2.CONDITION_SATISFIED;
        }, e2 = a2;
      } else
        i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (e2 = this.beginQuery(), this.endQuery(), n2 = function() {
          return r2.isQueryAvailable(e2, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
        }) : n2 = function() {
          return true;
        };
      return { query: e2, isFencePassed: n2 };
    }, t2.prototype.downloadMatrixFromPackedTexture = function(t3, e2, n2) {
      var r2 = this;
      return this.downloadMatrixDriver(t3, function() {
        return Es(r2.gl, r2.debug, e2, n2);
      });
    }, t2.prototype.createProgram = function(t3) {
      this.throwIfDisposed();
      var e2 = this.gl, n2 = ae(e2, this.debug, t3), r2 = ss(e2, this.debug), o2 = ce(e2, this.debug);
      return Jt(e2, this.debug, function() {
        return e2.attachShader(o2, r2);
      }), Jt(e2, this.debug, function() {
        return e2.attachShader(o2, n2);
      }), le(e2, this.debug, o2), this.debug && he(e2, this.debug, o2), this.vertexAttrsAreBound || (this.setProgram(o2), this.vertexAttrsAreBound = gs(e2, this.debug, this.program, this.vertexBuffer)), o2;
    }, t2.prototype.deleteProgram = function(t3) {
      var e2 = this;
      this.throwIfDisposed(), t3 === this.program && (this.program = null), null != t3 && Jt(this.gl, this.debug, function() {
        return e2.gl.deleteProgram(t3);
      });
    }, t2.prototype.setProgram = function(t3) {
      var e2 = this;
      this.throwIfDisposed(), this.program = t3, null != this.program && this.debug && he(this.gl, this.debug, this.program), Jt(this.gl, this.debug, function() {
        return e2.gl.useProgram(t3);
      });
    }, t2.prototype.getUniformLocation = function(t3, e2, n2) {
      return void 0 === n2 && (n2 = true), this.throwIfDisposed(), n2 ? xe(this.gl, this.debug, t3, e2) : be(this.gl, t3, e2);
    }, t2.prototype.getAttributeLocation = function(t3, e2) {
      var n2 = this;
      return this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
        return n2.gl.getAttribLocation(t3, e2);
      });
    }, t2.prototype.getUniformLocationNoThrow = function(t3, e2) {
      return this.throwIfDisposed(), this.gl.getUniformLocation(t3, e2);
    }, t2.prototype.setInputMatrixTexture = function(t3, e2, n2) {
      this.throwIfDisposed(), this.throwIfNoProgram(), we(this.gl, this.debug, this.program, t3, e2, n2);
    }, t2.prototype.setOutputMatrixTexture = function(t3, e2, n2) {
      this.setOutputMatrixTextureDriver(t3, n2, e2);
    }, t2.prototype.setOutputPackedMatrixTexture = function(t3, e2, n2) {
      this.throwIfDisposed();
      var r2 = $t(e2, n2), o2 = r2[0], a2 = r2[1];
      this.setOutputMatrixTextureDriver(t3, o2, a2);
    }, t2.prototype.setOutputMatrixWriteRegion = function(t3, e2, n2, r2) {
      this.setOutputMatrixWriteRegionDriver(n2, t3, r2, e2);
    }, t2.prototype.setOutputPackedMatrixWriteRegion = function(t3, e2, n2, r2) {
      throw new Error("setOutputPackedMatrixWriteRegion not implemented.");
    }, t2.prototype.debugValidate = function() {
      null != this.program && he(this.gl, this.debug, this.program), Re(this.gl);
    }, t2.prototype.executeProgram = function() {
      this.throwIfDisposed(), this.throwIfNoProgram();
      var t3 = this.gl;
      this.debug && this.debugValidate(), Jt(t3, this.debug, function() {
        return t3.drawElements(t3.TRIANGLES, 6, t3.UNSIGNED_SHORT, 0);
      });
    }, t2.prototype.blockUntilAllProgramsCompleted = function() {
      var t3 = this;
      this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
        return t3.gl.finish();
      });
    }, t2.prototype.getQueryTimerExtension = function() {
      return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = re(this.gl, this.debug, 2 === i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension;
    }, t2.prototype.getQueryTimerExtensionWebGL2 = function() {
      return this.getQueryTimerExtension();
    }, t2.prototype.getQueryTimerExtensionWebGL1 = function() {
      return this.getQueryTimerExtension();
    }, t2.prototype.beginQuery = function() {
      if (2 === i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
        var t3 = this.gl, e2 = this.getQueryTimerExtensionWebGL2(), n2 = t3.createQuery();
        return t3.beginQuery(e2.TIME_ELAPSED_EXT, n2), n2;
      }
      var r2 = this.getQueryTimerExtensionWebGL1(), o2 = r2.createQueryEXT();
      return r2.beginQueryEXT(r2.TIME_ELAPSED_EXT, o2), o2;
    }, t2.prototype.endQuery = function() {
      if (2 !== i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
        var t3 = this.getQueryTimerExtensionWebGL1();
        t3.endQueryEXT(t3.TIME_ELAPSED_EXT);
      } else {
        var e2 = this.gl, n2 = this.getQueryTimerExtensionWebGL2();
        e2.endQuery(n2.TIME_ELAPSED_EXT);
      }
    }, t2.prototype.waitForQueryAndGetTime = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2 = this;
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, F(function() {
                return e2.disposed || e2.isQueryAvailable(t3, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
              })];
            case 1:
              return n2.sent(), [2, this.getQueryTime(t3, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))];
          }
        });
      });
    }, t2.prototype.getQueryTime = function(t3, e2) {
      if (0 === e2)
        return null;
      if (2 === e2) {
        var n2 = this.gl;
        return n2.getQueryParameter(t3, n2.QUERY_RESULT) / 1e6;
      }
      var r2 = this.getQueryTimerExtensionWebGL1();
      return r2.getQueryObjectEXT(t3, r2.QUERY_RESULT_EXT) / 1e6;
    }, t2.prototype.isQueryAvailable = function(t3, e2) {
      if (0 === e2)
        return true;
      if (2 === e2) {
        var n2 = this.gl, r2 = this.getQueryTimerExtensionWebGL2(), o2 = n2.getQueryParameter(t3, n2.QUERY_RESULT_AVAILABLE);
        return null == this.disjoint && (this.disjoint = this.gl.getParameter(r2.GPU_DISJOINT_EXT)), o2 && !this.disjoint;
      }
      o2 = (r2 = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t3, r2.QUERY_RESULT_AVAILABLE_EXT);
      return null == this.disjoint && (this.disjoint = this.gl.getParameter(r2.GPU_DISJOINT_EXT)), o2 && !this.disjoint;
    }, t2.prototype.pollFence = function(t3) {
      var e2 = this;
      return new Promise(function(n2) {
        e2.addItemToPoll(function() {
          return t3.isFencePassed();
        }, function() {
          return n2();
        });
      });
    }, t2.prototype.pollItems = function() {
      for (var t3 = function(t4) {
        for (var e3 = 0; e3 < t4.length; ++e3) {
          if (!t4[e3]())
            break;
        }
        return e3 - 1;
      }(this.itemsToPoll.map(function(t4) {
        return t4.isDoneFn;
      })), e2 = 0; e2 <= t3; ++e2) {
        (0, this.itemsToPoll[e2].resolveFn)();
      }
      this.itemsToPoll = this.itemsToPoll.slice(t3 + 1);
    }, t2.prototype.addItemToPoll = function(t3, e2) {
      var n2 = this;
      this.itemsToPoll.push({ isDoneFn: t3, resolveFn: e2 }), this.itemsToPoll.length > 1 || F(function() {
        return n2.pollItems(), 0 === n2.itemsToPoll.length;
      });
    }, t2.prototype.bindTextureToFrameBuffer = function(t3) {
      this.throwIfDisposed(), Ce(this.gl, this.debug, t3, this.framebuffer), this.debug && Re(this.gl);
    }, t2.prototype.unbindTextureToFrameBuffer = function() {
      null != this.outputTexture ? (Ce(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && Re(this.gl)) : Ee(this.gl, this.debug, this.framebuffer);
    }, t2.prototype.downloadMatrixDriver = function(t3, e2) {
      this.bindTextureToFrameBuffer(t3);
      var n2 = e2();
      return this.unbindTextureToFrameBuffer(), n2;
    }, t2.prototype.setOutputMatrixTextureDriver = function(t3, e2, n2) {
      this.throwIfDisposed();
      var r2 = this.gl;
      Ce(r2, this.debug, t3, this.framebuffer), this.debug && Re(r2), this.outputTexture = t3, Jt(r2, this.debug, function() {
        return r2.viewport(0, 0, e2, n2);
      }), Jt(r2, this.debug, function() {
        return r2.scissor(0, 0, e2, n2);
      });
    }, t2.prototype.setOutputMatrixWriteRegionDriver = function(t3, e2, n2, r2) {
      var o2 = this;
      this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
        return o2.gl.scissor(t3, e2, n2, r2);
      });
    }, t2.prototype.throwIfDisposed = function() {
      if (this.disposed)
        throw new Error("Attempted to use disposed GPGPUContext.");
    }, t2.prototype.throwIfNoProgram = function() {
      if (null == this.program)
        throw new Error("No GPU program is currently set.");
    }, t2;
  }();
  function ks(t2, e2) {
    if (t2.length !== e2.length)
      throw Error("Binary was compiled with " + t2.length + " inputs, but was executed with " + e2.length + " inputs");
    t2.forEach(function(t3, n2) {
      var r2 = t3.logicalShape, o2 = e2[n2], a2 = o2.shape;
      if (!S(r2, a2))
        throw Error("Binary was compiled with different shapes than the current args. Shapes " + r2 + " and " + a2 + " must match");
      if (!t3.isUniform || !o2.isUniform) {
        var i2 = t3.texShape, s2 = o2.isUniform ? null : o2.texData.texShape;
        if (!S(i2, s2))
          throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i2 + " and " + s2 + " must match");
      }
    });
  }
  var Ss = function(t2, e2, n2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
    for (var r2 = n2.filterWidth, o2 = n2.inChannels, a2 = n2.strideWidth, i2 = n2.strideHeight, s2 = n2.padInfo, u2 = n2.outWidth, c2 = n2.dilationWidth, l2 = n2.dilationHeight, h2 = n2.dataFormat, f2 = s2.left, d2 = s2.top, p2 = o2 * r2, v = Ya(), g = "channelsLast" === h2, m2 = g ? 0 : 1, y2 = g ? 1 : 2, x2 = "", b2 = 0; b2 <= 1; b2++)
      for (var w2 = 0; w2 <= 1; w2++)
        x2 += "\n          blockIndex = rc.y + " + w2 + ";\n          pos = rc.x + " + b2 + ";\n\n          if(blockIndex < " + t2[1] + " && pos < " + t2[0] + ") {\n            offsetY = int(blockIndex / (" + u2 + ")) * " + i2 + " - " + d2 + ";\n            d0 = offsetY + " + l2 + " * (pos / " + p2 + ");\n\n            if(d0 < " + e2[m2] + " && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), " + u2 + ".) * " + a2 + ". - " + f2 + ".);\n              d1 = offsetX + " + c2 + " * (int(mod(float(pos), " + p2 + ".) / " + o2 + ".));\n\n              if(d1 < " + e2[y2] + " && d1 >= 0) {\n\n                ch = int(mod(float(pos), " + o2 + ".));\n\n                if (" + g + ") {\n                  innerDims = vec2(d1, ch);\n                  result[" + (2 * b2 + w2) + "] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[" + (2 * b2 + w2) + "] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";
    this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        " + x2 + "\n\n        " + v.output + " = result;\n      }\n    ";
  };
  var As = function(t2, e2, n2, r2, o2) {
    this.variableNames = ["x"], this.outputShape = [];
    var a2, i2 = e2, s2 = t2[3] - 1;
    this.outputShape = t2;
    var u2 = "float(" + n2 + ") + float(" + r2 + ") * sum";
    a2 = 0.5 === o2 ? "inversesqrt(" + u2 + ")" : 1 === o2 ? "1.0/(" + u2 + ")" : "exp(log(" + u2 + ") * float(-" + o2 + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + i2 + "; j <= " + i2 + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s2 + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + a2 + ";\n        setOutput(val);\n      }\n    ";
  };
  var Ts = function(t2, e2, n2, r2, o2) {
    this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = t2, this.depth = t2[3], this.depthRadius = e2, this.bias = n2, this.alpha = r2, this.beta = o2, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + e2 + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + e2 + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r2 + ") * norm + float(" + n2 + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r2 + ")\n                * float(" + o2 + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + o2 + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";
  };
  var Ds = function(t2, e2, n2, r2, o2) {
    this.variableNames = ["x"], this.outputShape = [], this.packedInputs = true, this.packedOutput = true;
    var a2, i2 = e2, s2 = t2[3] - 1;
    this.outputShape = t2;
    var u2 = "float(" + n2 + ") + float(" + r2 + ") * sum";
    a2 = 0.5 === o2 ? "inversesqrt(" + u2 + ")" : 1 === o2 ? "1.0/(" + u2 + ")" : "exp(log(" + u2 + ") * float(-" + o2 + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < " + this.outputShape[3] + ";\n        bool hasNextRow = c < " + this.outputShape[2] + ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - " + i2 + ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - " + i2 + "; j <= " + i2 + "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(" + s2 + "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * " + a2 + ";\n        setOutput(result);\n      }\n    ";
  };
  var Ns = function(t2) {
    this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
    var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.dilationHeight, o2 = t2.effectiveFilterHeight, a2 = t2.effectiveFilterWidth, i2 = o2 - 1 - t2.padInfo.top, s2 = a2 - 1 - t2.padInfo.left, u2 = o2 * a2 - 1;
    this.userCode = "\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + o2 + ";\n          wR += " + r2 + ") {\n          float dyR = float(dyRCorner + wR) / " + e2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + a2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + n2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u2 + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + a2 + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var Fs = function(t2) {
    this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
    var e2 = t2.strideDepth, n2 = t2.strideHeight, r2 = t2.strideWidth, o2 = t2.dilationDepth, a2 = t2.dilationHeight, i2 = t2.dilationWidth, s2 = t2.effectiveFilterDepth, u2 = t2.effectiveFilterHeight, c2 = t2.effectiveFilterWidth, l2 = s2 - 1 - t2.padInfo.front, h2 = u2 - 1 - t2.padInfo.top, f2 = c2 - 1 - t2.padInfo.left, d2 = s2 * u2 * c2 - 1;
    this.userCode = "\n      const ivec3 pads = ivec3(" + l2 + ", " + h2 + ", " + f2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + s2 + ";\n           wD += " + o2 + ") {\n          float dyD = float(dyDCorner + wD) / " + e2 + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + u2 + ";\n              wR += " + a2 + ") {\n            float dyR = float(dyRCorner + wR) / " + n2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + c2 + ";\n                wC += " + i2 + ") {\n              float dyC = float(dyCCorner + wC) / " + r2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = " + d2 + " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * " + u2 + " * " + c2 + " +\n                  wR * " + c2 + " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
  };
  var _s = function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = false), void 0 === a2 && (a2 = null), void 0 === i2 && (i2 = false), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = true, this.packedOutput = true, this.outputShape = e2;
    var s2 = n2 ? t2[1] : t2[2], u2 = Math.ceil(s2 / 2), c2 = n2 ? "i * 2, rc.y" : "rc.y, i * 2", l2 = r2 ? "rc.z, i * 2" : "i * 2, rc.z", h2 = n2 ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"], f2 = r2 ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], d2 = "", p2 = "";
    a2 && (d2 = i2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + a2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + a2 + "\n        }", p2 = "result = activation(result);");
    var v = o2 ? "result += getBiasAtOutCoords();" : "";
    o2 && this.variableNames.push("bias"), i2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + d2 + "\n\n      const float sharedDimension = " + u2 + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + u2 + "; i++) {\n          vec4 a = getMatrixA(rc.x, " + c2 + ");\n          vec4 b = getMatrixB(rc.x, " + l2 + ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (" + h2[0] + " * " + f2[0] + ");\n          result += (" + h2[1] + " * " + f2[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + v + "\n\n        " + p2 + "\n\n        setOutput(result);\n      }\n    ";
  };
  var Os = function() {
    function t2(t3, e2, n2) {
      this.variableNames = ["probs"], this.outputShape = [t3, n2], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (e2 - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (e2 - 1) + "));\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3) {
      var e2 = this;
      return function(n2, r2) {
        null == e2.seedLoc && (e2.seedLoc = n2.getUniformLocation(r2, "seed")), n2.gl.uniform1f(e2.seedLoc, t3);
      };
    }, t2;
  }();
  var Ms = function(t2, e2, n2, r2) {
    this.variableNames = ["indices"], this.outputShape = [t2, e2], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r2 + "), float(" + n2 + "),\n                      float(index == coords.y)));\n      }\n    ";
  };
  var Bs = function(t2) {
    this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outputShape = t2;
    var e2 = t2.length;
    if (0 === e2)
      this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
    else {
      var n2 = Xa("rc", e2), r2 = ui(e2), o2 = function(t3, e3, n3) {
        if (1 === t3)
          return "rc > " + e3[0];
        for (var r3 = "", o3 = t3 - 2; o3 < t3; o3++)
          r3 += n3[o3] + " >= " + e3[o3], o3 < t3 - 1 && (r3 += "||");
        return r3;
      }(e2, t2, n2), a2 = function(t3, e3, n3, r3) {
        if (1 === t3)
          return "";
        var o3 = r3.slice(-2);
        return "\n    int r = " + o3[0] + ";\n    int c = " + o3[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + e3 + ";\n    bool rEdge = rp1 >= " + n3 + ";\n  ";
      }(e2, t2[t2.length - 1], t2[t2.length - 2], n2), i2 = function(t3, e3) {
        var n3 = t3.length, r3 = function(t4, e4) {
          for (var n4 = [], r4 = 0; r4 <= 1; r4++)
            for (var o3 = 0; o3 <= 1; o3++) {
              for (var a3 = (0 === r4 ? "r" : "rp1") + ", " + (0 === o3 ? "c" : "cp1"), i3 = 2; i3 < t4; i3++)
                a3 = e4[e4.length - 1 - i3] + "," + a3;
              n4.push(a3);
            }
          return n4;
        }(n3, e3);
        return 1 === n3 ? "getA(rc),\n            rc + 1 >= " + t3[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + r3[0] + "),\n          cEdge ? 0. : getA(" + r3[1] + "),\n          rEdge ? 0. : getA(" + r3[2] + "),\n          rEdge || cEdge ? 0. : getA(" + r3[3] + ")";
      }(t2, n2);
      this.userCode = "\n        void main() {\n          " + r2 + " rc = getOutputCoords();\n\n          if(" + o2 + ") {\n            setOutput(vec4(0));\n          } else {\n            " + a2 + "\n\n            setOutput(vec4(" + i2 + "));\n          }\n        }\n      ";
    }
  };
  var Ps = function(t2, e2, n2) {
    this.variableNames = ["x"], this.outputShape = e2.map(function(e3, n3) {
      return e3[0] + t2[n3] + e3[1];
    });
    var r2 = t2.length, o2 = ui(r2), a2 = e2.map(function(t3) {
      return t3[0];
    }).join(","), i2 = e2.map(function(e3, n3) {
      return e3[0] + t2[n3];
    }).join(","), s2 = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r2);
    this.userCode = 1 !== r2 ? "\n      " + o2 + " start = " + o2 + "(" + a2 + ");\n      " + o2 + " end = " + o2 + "(" + i2 + ");\n\n      void main() {\n        " + o2 + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + n2 + "));\n        } else {\n          " + o2 + " coords = outC - start;\n          setOutput(getX(" + s2 + "));\n        }\n      }\n    " : "\n        int start = " + a2 + ";\n        int end = " + i2 + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + n2 + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";
  };
  var Ls = function(t2, e2, n2) {
    this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true, this.outputShape = e2.map(function(e3, n3) {
      return e3[0] + t2[n3] + e3[1];
    });
    for (var r2 = t2.length, o2 = ui(r2), a2 = e2.map(function(t3) {
      return t3[0];
    }).join(","), i2 = e2.map(function(e3, n3) {
      return e3[0] + t2[n3];
    }).join(","), s2 = Xa("rc", r2), u2 = Xa("source", r2), c2 = s2[r2 - 1] + " < " + this.outputShape[r2 - 1], l2 = 1 === r2 ? "source" : "vec2(" + u2.slice(-2).join() + ")", h2 = [o2 + " rc = outputLoc;", s2[r2 - 1] + " += 1;\n       if(" + c2 + ") {\n      ", 1 === r2 ? "" : "}\n       rc = outputLoc;\n       " + s2[r2 - 2] + " += 1;\n       if(" + s2[r2 - 2] + " < " + this.outputShape[r2 - 2] + ") {", 1 === r2 ? "" : "  " + s2[r2 - 1] + " += 1;\n         if(" + c2 + ") {"], f2 = 1 === r2 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", d2 = "", p2 = 0, v = 1 === r2 ? 2 : 4; p2 < v; p2++)
      d2 += "\n        " + h2[p2] + "\n        if (" + f2 + ") {\n          result[" + p2 + "] = float(" + n2 + ");\n        } else {\n          " + o2 + " source = rc - start;\n          result[" + p2 + "] = getChannel(getX(" + u2.join() + "), " + l2 + ");\n        }\n      ";
    d2 += 1 === r2 ? "} " : "}}", this.userCode = "\n      const " + o2 + " start = " + o2 + "(" + a2 + ");\n      const " + o2 + " end = " + o2 + "(" + i2 + ");\n\n      void main() {\n        " + o2 + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + d2 + "\n        setOutput(result);\n      }\n    ";
  };
  var Ws = function(t2, e2, n2, r2, o2) {
    if (void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = false), this.variableNames = ["x"], "avg" === e2 && n2)
      throw new Error("Cannot compute positions for average pool.");
    var a2 = t2.filterWidth, i2 = t2.strideHeight, s2 = t2.strideWidth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.effectiveFilterHeight, h2 = t2.effectiveFilterWidth, f2 = t2.padInfo.top, d2 = t2.padInfo.left;
    this.outputShape = t2.outShape;
    var p2 = "avg" === e2, v = "((batch  * " + t2.inHeight + " + xR) * " + t2.inWidth + " + xC) * " + t2.inChannels + " + d", g = "(xR * " + t2.inWidth + " + xC) * " + t2.inChannels + " + d", m2 = "0.0";
    if (p2 || (m2 = "-1.0 / 1e-20"), n2)
      this.userCode = "\n        const ivec2 strides = ivec2(" + i2 + ", " + s2 + ");\n        const ivec2 pads = ivec2(" + f2 + ", " + d2 + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + l2 + ";\n              wR += " + u2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + h2 + ";\n                wC += " + c2 + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = " + (r2 ? o2 ? v : g : "wR * " + h2 + " + wC") + ";\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
    else {
      var y2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
      "avg" === e2 && (y2 = "avgValue / count");
      var x2 = 4 * Math.floor(a2 / 4), b2 = a2 % 4, w2 = "\n      if (" + p2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
      this.userCode = "\n      const ivec2 strides = ivec2(" + i2 + ", " + s2 + ");\n      const ivec2 pads = ivec2(" + f2 + ", " + d2 + ");\n      const float initializationValue = " + m2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + m2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + l2 + ";\n            wR += " + u2 + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + x2 + "; wC += 4) {\n            int xC = xCCorner + wC * " + c2 + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + c2 + ", d),\n              getValue(batch, xR, xC + 2 * " + c2 + ", d),\n              getValue(batch, xR, xC + 3 * " + c2 + ", d)\n            );\n\n            " + w2 + "\n          }\n\n          int xC = xCCorner + " + x2 + ";\n          if (" + (1 === b2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + w2 + "\n          } else if (" + (2 === b2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + c2 + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + w2 + "\n          } else if (" + (3 === b2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + c2 + ", d),\n              getValue(batch, xR, xC + 2 * " + c2 + ", d),\n              initializationValue\n            );\n\n            " + w2 + "\n          }\n        }\n        setOutput(" + y2 + ");\n      }\n    ";
    }
  };
  var Us = function(t2, e2, n2, r2, o2) {
    if (void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = false), this.variableNames = ["x"], "avg" === e2 && n2)
      throw new Error("Cannot compute positions for average pool.");
    var a2 = t2.filterWidth, i2 = t2.strideDepth, s2 = t2.strideHeight, u2 = t2.strideWidth, c2 = t2.dilationDepth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.effectiveFilterDepth, d2 = t2.effectiveFilterHeight, p2 = t2.effectiveFilterWidth, v = t2.padInfo.front, g = t2.padInfo.top, m2 = t2.padInfo.left;
    this.outputShape = t2.outShape;
    var y2 = "avg" === e2, x2 = "0.0";
    if (y2 || (x2 = "-1.0 / 1e-20"), n2)
      this.userCode = "\n        const ivec3 strides =\n            ivec3(" + i2 + ", " + s2 + ", " + u2 + ");\n        const ivec3 pads = ivec3(" + v + ", " + g + ", " + m2 + ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < " + f2 + ";\n              wD += " + c2 + ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < " + d2 + ";\n                wR += " + l2 + ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < " + p2 + ";\n                  wC += " + h2 + ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = " + (r2 ? o2 ? "(((batch * " + t2.inDepth + " + xD) * " + t2.inHeight + " + xR) * " + t2.inWidth + " + xC) * " + t2.inChannels + " + ch" : "((xD * " + t2.inHeight + " + xR) * " + t2.inWidth + " + xC) * " + t2.inChannels + " + ch" : "wD * " + d2 + " * " + p2 + " +\n                      wR * " + p2 + " + wC") + ";\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
    else {
      var b2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
      "avg" === e2 && (b2 = "avgValue / count");
      var w2 = 4 * Math.floor(a2 / 4), C2 = a2 % 4, E2 = "\n      if (" + y2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
      this.userCode = "\n      const ivec3 strides =\n        ivec3(" + i2 + ", " + s2 + ", " + u2 + ");\n      const ivec3 pads = ivec3(" + v + ", " + g + ", " + m2 + ");\n      const float initializationValue = " + x2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + x2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < " + f2 + ";\n            wD += " + c2 + ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + d2 + ";\n            wR += " + l2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + w2 + "; wC += 4) {\n              int xC = xCCorner + wC * " + h2 + ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + h2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + h2 + ", ch),\n                getValue(batch, xD, xR, xC + 3 * " + h2 + ", ch)\n              );\n\n              " + E2 + "\n            }\n\n            int xC = xCCorner + " + w2 + ";\n            if (" + (1 === C2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              " + E2 + "\n            } else if (" + (2 === C2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + h2 + ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              " + E2 + "\n            } else if (" + (3 === C2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + h2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + h2 + ", ch),\n                initializationValue\n              );\n\n              " + E2 + "\n            }\n          }\n          setOutput(" + b2 + ");\n        }\n      }\n    ";
    }
  };
  var Vs = function(t2, e2) {
    this.variableNames = ["x"];
    var n2 = t2.windowSize, r2 = t2.batchSize, o2 = t2.inSize, a2 = Math.ceil(o2 / n2);
    this.outputShape = [r2, a2];
    var i2 = "0.0", s2 = "";
    "prod" === e2 ? i2 = "1.0" : "min" === e2 ? (i2 = "1.0 / 1e-20", s2 = "min") : "max" === e2 && (i2 = "-1.0 / 1e-20", s2 = "max");
    var u2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    "sum" === e2 ? u2 = "sumValue" : "prod" === e2 ? u2 = "prodValue" : "all" === e2 ? u2 = "allValue" : "any" === e2 && (u2 = "anyValue");
    var c2 = 4 * Math.floor(n2 / 4), l2 = n2 % 4, h2 = "\n      if (" + ("sum" === e2) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === e2) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s2 + "(values, minMaxValue);\n      }\n    ", f2 = "vec4";
    "all" === e2 ? (i2 = "1.0", h2 = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", f2 = "bvec4") : "any" === e2 && (i2 = "0.0", h2 = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", f2 = "bvec4");
    var d2 = "";
    o2 % n2 > 0 && (d2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + i2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + d2 + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n2 + ";\n\n        vec4 minMaxValue = vec4(" + i2 + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + c2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h2 + "\n        }\n\n        int inIdx = inOffset + " + c2 + ";\n        if (" + (1 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + h2 + "\n        } else if (" + (2 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + h2 + "\n        } else if (" + (3 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + h2 + "\n        }\n        setOutput(" + u2 + ");\n      }\n    ";
  };
  var zs = function(t2, e2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
    for (var n2 = "", r2 = 0; r2 < 4; r2++) {
      var o2 = "thisRC = rc;";
      r2 % 2 == 1 && (o2 += "thisRC.z += 1;"), r2 > 1 && (o2 += "thisRC.y += 1;"), n2 += "\n        " + o2 + "\n        " + (r2 > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + r2 + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (r2 > 0 ? "}" : "") + "\n      ";
    }
    this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + $a(["r", "c", "d"], e2) + "\n      return ivec3(r, c, d);\n    }\n  \n      " + Qa(t2) + "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t2[1] + ";\n        int cols = " + t2[2] + ";\n\n        " + n2 + "\n\n        setOutput(result);\n      }\n    ";
  };
  var Gs = function(t2, e2, n2) {
    this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e2.shape;
    var r2 = e2.shape, o2 = r2[1], a2 = r2[2], i2 = t2.shape, s2 = i2[1], u2 = i2[2], c2 = [n2 && s2 > 1 ? o2 - 1 : o2, n2 && u2 > 1 ? a2 - 1 : a2], l2 = [n2 && s2 > 1 ? s2 - 1 : s2, n2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, p2 = 1 / f2, v = 2 * Math.ceil(d2) + 2, g = 2 * Math.ceil(p2) + 2;
    this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + p2 + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + g + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (o2 - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (a2 - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
  };
  var Hs = function(t2, e2, n2, r2) {
    this.variableNames = ["A"], this.outputShape = [];
    var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
    this.outputShape = [o2, e2, n2, s2];
    var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2];
    this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ");\n      const vec2 inputShapeRC = vec2(" + a2 + ".0, " + i2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";
  };
  var qs = function(t2, e2, n2, r2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = [];
    var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
    this.outputShape = [o2, e2, n2, s2];
    var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2];
    this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ",\n          " + u2[1] / c2[1] + ");\n      const vec3 inputShapeRC = vec3(" + a2 + ".0, " + i2 + ".0,\n                                     " + i2 + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (s2 - 1) + ";\n        bool hasNextRow = coords.z < " + (n2 - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";
  };
  var Ks = function(t2, e2, n2) {
    this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e2.shape;
    var r2 = e2.shape, o2 = r2[1], a2 = r2[2], i2 = t2.shape, s2 = i2[1], u2 = i2[2], c2 = [n2 && s2 > 1 ? o2 - 1 : o2, n2 && u2 > 1 ? a2 - 1 : a2], l2 = [n2 && s2 > 1 ? s2 - 1 : s2, n2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, p2 = 1 / f2, v = 2 * Math.ceil(d2) + 2, g = 2 * Math.ceil(p2) + 2;
    this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + p2 + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + g + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c2[0] + ") *\n                (float(dyR) / float(" + l2[0] + "));\n\n            float sourceFracCol =\n                float(" + c2[1] + ") *\n                  (float(dyC) / float(" + l2[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + o2 + ") - 1),\n                " + n2 + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + a2 + ") - 1),\n                " + n2 + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
  };
  var js = function(t2, e2, n2, r2) {
    this.variableNames = ["A"], this.outputShape = [];
    var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
    this.outputShape = [o2, e2, n2, s2];
    var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], l2 = r2 ? "0.5" : "0.0";
    this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ");\n      const vec2 inputShapeRC = vec2(" + a2 + ".0, " + i2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + l2 + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";
  };
  var Xs = function(t2, e2) {
    this.variableNames = ["x"];
    var n2 = t2.length;
    if (n2 > 4)
      throw new Error("WebGL backend: Reverse of rank-" + n2 + " tensor is not yet supported");
    if (this.outputShape = t2, 1 !== n2) {
      var r2 = t2.map(function(n3, r3) {
        return function(n4) {
          return -1 !== e2.indexOf(n4) && 1 !== t2[n4] ? t2[n4] + " - coords[" + n4 + "] - 1" : "coords[" + n4 + "]";
        }(r3);
      }).join(","), o2 = ui(n2);
      this.userCode = "\n      void main() {\n        " + o2 + " coords = getOutputCoords();\n        setOutput(getX(" + r2 + "));\n      }\n    ";
    } else
      this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + t2[0] + " - coord - 1));\n        }\n      ";
  };
  var Ys = function(t2, e2) {
    this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true;
    var n2 = t2.length;
    if (n2 > 4)
      throw new Error("WebGL backend: Reverse of rank-" + n2 + " tensor is not yet supported");
    this.outputShape = t2;
    var r2 = Xa("rc", n2), o2 = r2[n2 - 1] + " + 1 < " + this.outputShape[n2 - 1], a2 = r2[n2 - 2] + " + 1 < " + this.outputShape[n2 - 2], i2 = ui(n2);
    function s2(n3) {
      var r3 = t2.map(function(r4, o3) {
        return function(n4, r5) {
          return -1 !== e2.indexOf(n4) && 1 !== t2[n4] ? t2[n4] + " - " + r5[n4] + " - 1" : "" + r5[n4];
        }(o3, n3);
      });
      return "getChannel(getX(" + r3.join(",") + "), vec2(" + r3.slice(-2).join(",") + "))";
    }
    this.userCode = 1 === n2 ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + t2[0] + " - rc - 1),\n            " + t2[0] + " - rc - 1);\n          if(" + o2 + "){\n              result.g = getChannel(getX(" + t2[0] + " - (rc  + 1) - 1),\n                " + t2[0] + " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + i2 + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + function(t3) {
      return s2(t3);
    }(r2.slice()) + ";\n          if(" + o2 + "){\n            result.g = " + function(t3) {
      return t3[n2 - 1] = "(" + t3[n2 - 1] + " + 1)", s2(t3);
    }(r2.slice()) + ";\n          }\n          if(" + a2 + ") {\n            result.b = " + function(t3) {
      return t3[n2 - 2] = "(" + t3[n2 - 2] + " + 1)", s2(t3);
    }(r2.slice()) + ";\n            if(" + o2 + ") {\n              result.a = " + function(t3) {
      return t3[n2 - 1] = "(" + t3[n2 - 1] + " + 1)", t3[n2 - 2] = "(" + t3[n2 - 2] + " + 1)", s2(t3);
    }(r2.slice()) + ";\n            }\n          }\n          setOutput(result);\n        }\n    ";
  };
  var $s = function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === i2 && (i2 = true), this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = a2;
    var s2 = ui(o2.length), u2 = ui(a2.length), c2 = "";
    1 === n2 ? c2 = "i" : 2 === n2 && (c2 = "i, j");
    var l2 = "getIndices(" + c2 + ")", h2 = "";
    1 === r2 ? h2 = "i" : 2 === r2 && (h2 = "i, coords[1]");
    var f2 = "getUpdates(" + h2 + ")", d2 = e2 > 1 ? "strides[j]" : "strides";
    this.userCode = "\n        " + s2 + " strides = " + s2 + "(" + o2 + ");\n\n        void main() {\n          " + u2 + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t2 + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + e2 + "; j++) {\n              int index = round(" + l2 + ");\n              flattenedIndex += index * " + d2 + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + f2 + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";
  };
  var Qs = function(t2, e2) {
    this.variableNames = ["x", "segmentIds"];
    var n2 = t2.windowSize, r2 = t2.batchSize, o2 = t2.inSize, a2 = t2.numSegments, i2 = a2 * Math.ceil(o2 / n2);
    this.outputShape = [r2, i2];
    var s2 = 4 * Math.floor(n2 / 4), u2 = n2 % 4, c2 = "\n        sumValue += dot(values, segFilter);\n    ", l2 = "";
    o2 % n2 > 0 && (l2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return initializationValue;\n        }\n      ");
    var h2 = "";
    o2 % n2 > 0 && (h2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return -1.0;\n        }\n      "), this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + l2 + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + h2 + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + a2 + ")) * float(" + n2 + "));\n        int currentSeg = int(mod(float(outIdx), float(" + a2 + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + c2 + "\n        }\n\n        int inIdx = inOffset + " + s2 + ";\n        if (" + (1 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + c2 + "\n        } else if (" + (2 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + c2 + "\n        } else if (" + (3 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + c2 + "\n        }\n        setOutput(sumValue);\n      }\n    ";
  };
  var Js = function(t2, e2, n2) {
    var r2, o2;
    if (this.variableNames = ["c", "a", "b"], this.outputShape = e2, n2 > 4)
      throw Error("Where for rank " + n2 + " is not yet supported");
    if (1 === n2)
      o2 = "resRC", r2 = "resRC";
    else {
      for (var a2 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i2 = [], s2 = [], u2 = 0; u2 < e2.length; u2++)
        s2.push("" + a2[u2]), u2 < t2 && i2.push("" + a2[u2]);
      r2 = i2.join(), o2 = s2.join();
    }
    var c2 = ui(n2);
    this.userCode = "\n      void main() {\n        " + c2 + " resRC = getOutputCoords();\n        float cVal = getC(" + r2 + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + o2 + "));\n        } else {\n          setOutput(getB(" + o2 + "));\n        }\n      }\n    ";
  };
  var Zs = function() {
    function t2(t3) {
      this.variableNames = ["source"], this.outputShape = t3, this.rank = t3.length;
      var e2, n2 = ui(this.rank), r2 = "uniform int start[" + this.rank + "];", o2 = function(t4) {
        if (1 === t4)
          return "sourceLoc";
        if (t4 <= 6)
          return tu.slice(0, t4).map(function(t5) {
            return "sourceLoc." + t5;
          }).join(",");
        throw Error("Slicing for rank " + t4 + " is not yet supported");
      }(this.rank);
      e2 = "\n        " + n2 + " sourceLoc;\n        " + n2 + " coords = getOutputCoords();\n        " + t3.map(function(t4, e3) {
        return "sourceLoc." + tu[e3] + " = start[" + e3 + "] + coords." + tu[e3] + ";";
      }).join("\n") + "\n      ", this.userCode = "\n      " + r2 + "\n      void main() {\n        " + e2 + "\n        setOutput(getSource(" + o2 + "));\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3) {
      var e2 = this;
      if (t3.length !== this.rank)
        throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
      return function(n2, r2) {
        null == e2.startLoc && (e2.startLoc = n2.getUniformLocationNoThrow(r2, "start"), null == e2.startLoc) || n2.gl.uniform1iv(e2.startLoc, t3);
      };
    }, t2;
  }();
  var tu = ["x", "y", "z", "w", "u", "v"];
  var eu = function() {
    function t2(t3) {
      this.variableNames = ["source"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.rank = t3.length;
      var e2 = ui(this.rank), n2 = Xa("coords", this.rank), r2 = Xa("sourceLoc", this.rank), o2 = 1 === this.rank ? "sourceLoc" : "vec2(" + r2.slice(-2).join() + ")", a2 = "getChannel(getSource(" + r2.join() + "), " + o2 + ")", i2 = "\n      result.x = " + a2 + ";\n      if (++" + n2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n        ++" + r2[this.rank - 1] + ";\n        result.y = " + a2 + ";\n        --" + r2[this.rank - 1] + ";\n      }\n    ", s2 = 1 === this.rank ? "" : "\n      --" + n2[this.rank - 1] + ";\n      if (++" + n2[this.rank - 2] + " < " + t3[this.rank - 2] + ") {\n        ++" + r2[this.rank - 2] + ";\n        result.z = " + a2 + ";\n        if (++" + n2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n          ++" + r2[this.rank - 1] + ";\n          result.w = " + a2 + ";\n        }\n      }\n    ", u2 = this.rank <= 4 ? "sourceLoc = coords +\n            " + e2 + "(" + t3.map(function(t4, e3) {
        return "start[" + e3 + "]";
      }).join() + ");" : t3.map(function(t4, e3) {
        return r2[e3] + " = " + n2[e3] + " + start[" + e3 + "];";
      }).join("\n");
      this.userCode = "\n      uniform int start[" + this.rank + "];\n      void main() {\n        " + e2 + " coords = getOutputCoords();\n        " + e2 + " sourceLoc;\n        " + u2 + "\n        vec4 result = vec4(0.);\n        " + i2 + "\n        " + s2 + "\n        setOutput(result);\n      }\n    ";
    }
    return t2.prototype.getCustomSetupFunc = function(t3) {
      var e2 = this;
      if (t3.length !== this.rank)
        throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
      return function(n2, r2) {
        null == e2.startLoc && (e2.startLoc = n2.getUniformLocationNoThrow(r2, "start"), null == e2.startLoc) || n2.gl.uniform1iv(e2.startLoc, t3);
      };
    }, t2;
  }();
  var nu = function(t2, e2, n2) {
    this.variableNames = ["x"], this.outputShape = n2;
    var r2 = n2.length, o2 = ui(n2.length), a2 = ui(n2.length), i2 = "";
    if (1 === r2)
      i2 = "coords * strides + begin";
    else {
      var s2 = 0;
      i2 = n2.map(function(t3, e3) {
        return s2++, 1 === n2.length ? "coords * strides[" + e3 + "] + begin[" + e3 + "]" : "coords[" + (s2 - 1) + "] * strides[" + e3 + "] + begin[" + e3 + "]";
      }).join(",");
    }
    this.userCode = "\n      " + o2 + " begin = " + o2 + "(" + t2 + ");\n      " + o2 + " strides = " + o2 + "(" + e2 + ");\n\n      void main() {\n        " + a2 + " coords = getOutputCoords();\n        setOutput(getX(" + i2 + "));\n      }\n    ";
  };
  var ru = function() {
    function t2(t3) {
      this.gpgpu = t3, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = false, this.usedTextures = {};
    }
    return t2.prototype.acquireTexture = function(t3, e2, n2) {
      var r2, o2 = ou(e2, n2), a2 = au(t3, o2, n2);
      if (a2 in this.freeTextures || (this.freeTextures[a2] = []), a2 in this.usedTextures || (this.usedTextures[a2] = []), this.freeTextures[a2].length > 0) {
        this.numFreeTextures--, this.numUsedTextures++, this.log();
        var i2 = this.freeTextures[a2].shift();
        return this.usedTextures[a2].push(i2), i2;
      }
      return this.numUsedTextures++, this.log(), o2 === Gt.PACKED_2X2_FLOAT32 ? r2 = this.gpgpu.createPackedMatrixTexture(t3[0], t3[1]) : o2 === Gt.PACKED_2X2_FLOAT16 ? r2 = this.gpgpu.createFloat16PackedMatrixTexture(t3[0], t3[1]) : o2 === Gt.UNPACKED_FLOAT32 ? r2 = this.gpgpu.createFloat32MatrixTexture(t3[0], t3[1]) : o2 === Gt.UNPACKED_FLOAT16 ? r2 = this.gpgpu.createFloat16MatrixTexture(t3[0], t3[1]) : o2 === Gt.PACKED_4X1_UNSIGNED_BYTE && (r2 = this.gpgpu.createUnsignedBytesMatrixTexture(t3[0], t3[1])), this.usedTextures[a2].push(r2), r2;
    }, t2.prototype.releaseTexture = function(t3, e2, n2, r2) {
      if (null != this.freeTextures) {
        var o2 = au(e2, ou(n2, r2), r2);
        o2 in this.freeTextures || (this.freeTextures[o2] = []), this.freeTextures[o2].push(t3), this.numFreeTextures++, this.numUsedTextures--;
        var a2 = this.usedTextures[o2], i2 = a2.indexOf(t3);
        if (i2 < 0)
          throw new Error("Cannot release a texture that was never provided by this texture manager");
        a2.splice(i2, 1), this.log();
      }
    }, t2.prototype.log = function() {
      if (this.logEnabled) {
        var t3 = this.numFreeTextures + this.numUsedTextures;
        console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t3 + ")");
      }
    }, t2.prototype.getNumUsedTextures = function() {
      return this.numUsedTextures;
    }, t2.prototype.getNumFreeTextures = function() {
      return this.numFreeTextures;
    }, t2.prototype.dispose = function() {
      var t3 = this;
      if (null != this.freeTextures) {
        for (var e2 in this.freeTextures)
          this.freeTextures[e2].forEach(function(e3) {
            t3.gpgpu.deleteMatrixTexture(e3);
          });
        for (var e2 in this.usedTextures)
          this.usedTextures[e2].forEach(function(e3) {
            t3.gpgpu.deleteMatrixTexture(e3);
          });
        this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0;
      }
    }, t2;
  }();
  function ou(t2, e2) {
    if (t2 === zt.UPLOAD)
      return Gt.PACKED_2X2_FLOAT32;
    if (t2 === zt.RENDER || null == t2)
      return function(t3) {
        return i().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? t3 ? Gt.PACKED_2X2_FLOAT32 : Gt.UNPACKED_FLOAT32 : t3 ? Gt.PACKED_2X2_FLOAT16 : Gt.UNPACKED_FLOAT16;
      }(e2);
    if (t2 === zt.DOWNLOAD || t2 === zt.PIXELS)
      return Gt.PACKED_4X1_UNSIGNED_BYTE;
    throw new Error("Unknown logical texture type " + t2);
  }
  function au(t2, e2, n2) {
    return t2[0] + "_" + t2[1] + "_" + e2 + "_" + n2;
  }
  var iu = function(t2, e2) {
    this.variableNames = ["A"];
    for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = t2[r2] * e2[r2];
    this.outputShape = n2, this.rank = n2.length;
    var o2 = ui(this.rank), a2 = function(t3) {
      var e3 = t3.length;
      if (e3 > 5)
        throw Error("Tile for rank " + e3 + " is not yet supported");
      if (1 === e3)
        return "imod(resRC, " + t3[0] + ")";
      for (var n3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r3 = [], o3 = 0; o3 < t3.length; o3++)
        r3.push("imod(" + n3[o3] + ", " + t3[o3] + ")");
      return r3.join();
    }(t2);
    this.userCode = "\n      void main() {\n        " + o2 + " resRC = getOutputCoords();\n        setOutput(getA(" + a2 + "));\n      }\n    ";
  };
  var su = 1.7580993408473768;
  var uu = 1.0507009873554805;
  var cu = function(t2, e2) {
    this.variableNames = ["A"], this.outputShape = t2, this.userCode = "\n      float unaryOperation(float x) {\n        " + e2 + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
  };
  var lu = "if (isnan(x)) return x;";
  var hu = "return x;";
  var fu = "return abs(x);";
  var du = lu + "\n  return (x < 0.0) ? 0.0 : x;\n";
  var pu = lu + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
  var vu = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
  var gu = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + su + ";\n  float scale = " + uu + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
  var mu = "return -x;";
  var yu = "return ceil(x);";
  var xu = "return floor(x);";
  var bu = "return exp(x);";
  var wu = "return exp(x) - 1.0;";
  var Cu = lu + "\n  return sin(x);\n";
  var Eu = lu + "\n  return cos(x);\n";
  var Ru = lu + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n";
  var Iu = lu + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n";
  var ku = lu + "\n  return atan(x);\n";
  var Su = lu + "return log(x + sqrt(x * x + 1.0));";
  var Au = lu + "\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));";
  var Tu = lu + "\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;";
  var Du = "return x;";
  var Nu = "return x;";
  var Fu = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
  var _u = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
  var Ou = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n";
  var Mu = function(t2, e2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + e2 + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
  };
  var Bu = function(t2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outputShape = t2;
    var e2 = t2.length, n2 = Xa("rc", e2), r2 = ui(e2), o2 = function(t3, e3) {
      if (1 === t3)
        return "rc";
      for (var n3 = "", r3 = 0; r3 < t3; r3++)
        n3 += e3[r3], r3 < t3 - 1 && (n3 += ",");
      return n3;
    }(e2, n2), a2 = n2.slice(-2), i2 = e2 <= 1 ? "rc" : "vec2(" + a2.join(",") + ")";
    this.userCode = "\n      void main() {\n        " + r2 + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + o2 + ");\n\n        setOutput(getChannel(packedInput, " + i2 + "));\n      }\n    ";
  };
  var Pu = {};
  function Lu(t2, e2) {
    if (void 0 === e2 && (e2 = false), "linear" === t2)
      return e2 ? Nu : hu;
    if ("relu" === t2)
      return e2 ? Fu : du;
    if ("elu" === t2)
      return e2 ? Ou : vu;
    if ("relu6" === t2)
      return e2 ? _u : pu;
    if ("prelu" === t2)
      return e2 ? ki : Ei;
    throw new Error("Activation " + t2 + " has not been implemented for the WebGL backend.");
  }
  var Wu = 600;
  var Uu = function(t2) {
    function o2(e2) {
      var n2, r2 = t2.call(this) || this;
      if (r2.pendingRead = /* @__PURE__ */ new WeakMap(), r2.pendingDisposal = /* @__PURE__ */ new WeakSet(), r2.dataRefCount = /* @__PURE__ */ new WeakMap(), r2.numBytesInGPU = 0, r2.uploadWaitMs = 0, r2.downloadWaitMs = 0, r2.warnedAboutMemory = false, r2.pendingDeletes = 0, r2.disposed = false, !i().getBool("HAS_WEBGL"))
        throw new Error("WebGL is not supported on this device");
      if (null == e2) {
        var o3 = jt(i().getNumber("WEBGL_VERSION"));
        r2.binaryCache = (n2 = i().getNumber("WEBGL_VERSION")) in Pu ? Pu[n2] : (Pu[n2] = {}, Pu[n2]), r2.gpgpu = new Is(o3), r2.canvas = o3.canvas, r2.gpgpuCreatedLocally = true;
      } else
        r2.gpgpu = e2, r2.binaryCache = {}, r2.gpgpuCreatedLocally = false, r2.canvas = e2.gl.canvas;
      return r2.textureManager = new ru(r2.gpgpu), r2.numMBBeforeWarning = null == i().global.screen ? 1024 : i().global.screen.height * i().global.screen.width * window.devicePixelRatio * Wu / 1024 / 1024, r2.texData = new ca(r2, Lt), r2;
    }
    return e(o2, t2), o2.prototype.numDataIds = function() {
      return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes;
    }, o2.prototype.write = function(t3, e2, n2) {
      if (i().getBool("DEBUG") && this.checkNumericalProblems(t3), "complex64" === n2 && null != t3)
        throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
      var r2 = {};
      return this.texData.set(r2, { shape: e2, dtype: n2, values: t3, usage: zt.UPLOAD }), r2;
    }, o2.prototype.move = function(t3, e2, n2, r2) {
      if (i().getBool("DEBUG") && this.checkNumericalProblems(e2), "complex64" === r2)
        throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
      this.texData.set(t3, { shape: n2, dtype: r2, values: e2, usage: zt.UPLOAD });
    }, o2.prototype.readSync = function(t3) {
      var e2 = this.texData.get(t3), n2 = e2.values, r2 = e2.dtype, o3 = e2.complexTensors, a2 = e2.slice, i2 = e2.shape, s2 = e2.isPacked;
      if (null != a2) {
        var u2 = void 0;
        u2 = s2 ? new Mu(i2, Du) : new cu(i2, Du);
        var c2 = this.runWebGLProgram(u2, [{ dataId: t3, shape: i2, dtype: r2 }], r2), l2 = this.readSync(c2.dataId);
        return this.disposeData(c2.dataId), l2;
      }
      if (null != n2)
        return this.convertAndCacheOnCPU(t3);
      if ("string" === r2)
        return n2;
      var h2, f2, d2 = null != this.activeTimers;
      (d2 && (h2 = et()), "complex64" === r2) ? f2 = Aa(o3.real.dataSync(), o3.imag.dataSync()) : f2 = this.getValuesFromTexture(t3);
      return d2 && (this.downloadWaitMs += et() - h2), this.convertAndCacheOnCPU(t3, f2);
    }, o2.prototype.read = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o3, a2, s2, u2, c2, l2, h2, f2, d2, p2, v, g, m2, y2, x2, b2, w2, C2, E2, R2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (this.pendingRead.has(t3))
                return e2 = this.pendingRead.get(t3), [2, new Promise(function(t4) {
                  return e2.push(t4);
                })];
              if (n2 = this.texData.get(t3), o3 = n2.values, a2 = n2.shape, s2 = n2.slice, u2 = n2.dtype, c2 = n2.complexTensors, l2 = n2.isPacked, null != s2)
                return h2 = void 0, h2 = l2 ? new Mu(a2, Du) : new cu(a2, Du), f2 = this.runWebGLProgram(h2, [{ dataId: t3, shape: a2, dtype: u2 }], u2), d2 = this.read(f2.dataId), this.disposeData(f2.dataId), [2, d2];
              if (null != o3)
                return [2, this.convertAndCacheOnCPU(t3)];
              if (!i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === i().getNumber("WEBGL_VERSION"))
                throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
              return p2 = null, "complex64" !== u2 && i().get("WEBGL_BUFFER_SUPPORTED") && (v = this.decode(t3), g = this.texData.get(v.dataId), p2 = (R2 = this.gpgpu).createBufferFromTexture.apply(R2, [g.texture].concat(Yt(a2)))), this.pendingRead.set(t3, []), "complex64" === u2 ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
            case 1:
              r2.sent(), r2.label = 2;
            case 2:
              return "complex64" !== u2 ? [3, 4] : [4, Promise.all([c2.real.data(), c2.imag.data()])];
            case 3:
              return y2 = r2.sent(), x2 = y2[0], b2 = y2[1], m2 = Aa(x2, b2), [3, 5];
            case 4:
              null == p2 ? m2 = this.getValuesFromTexture(t3) : (w2 = k(a2), m2 = this.gpgpu.downloadFloat32MatrixFromBuffer(p2, w2)), r2.label = 5;
            case 5:
              return null != v && this.disposeData(v.dataId), C2 = this.convertAndCacheOnCPU(t3, m2), E2 = this.pendingRead.get(t3), this.pendingRead.delete(t3), E2.forEach(function(t4) {
                return t4(C2);
              }), this.pendingDisposal.has(t3) && (this.pendingDisposal.delete(t3), this.disposeData(t3), this.pendingDeletes--), [2, C2];
          }
        });
      });
    }, o2.prototype.checkNumericalProblems = function(t3) {
      if (null != t3)
        for (var e2 = 0; e2 < t3.length; e2++) {
          var n2 = t3[e2];
          if (!ee(n2)) {
            if (i().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))
              throw Error("The value " + n2 + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
            throw Error("The value " + n2 + " cannot be represented on this device.");
          }
        }
    }, o2.prototype.getValuesFromTexture = function(t3) {
      var e2, n2 = this.texData.get(t3), r2 = n2.shape, o3 = n2.dtype, a2 = n2.isPacked, s2 = k(r2);
      if (i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
        var u2 = this.decode(t3), c2 = this.texData.get(u2.dataId), l2 = (e2 = this.gpgpu).downloadMatrixFromPackedTexture.apply(e2, [c2.texture].concat(Yt(r2))).subarray(0, s2);
        return this.disposeData(u2.dataId), l2;
      }
      var h2 = i().getBool("WEBGL_PACK") && true === a2, f2 = h2 ? De(r2) : r2, d2 = h2 ? new Ji(f2) : new Qi(f2), p2 = this.runWebGLProgram(d2, [{ shape: f2, dtype: o3, dataId: t3 }], "float32"), v = this.texData.get(p2.dataId), g = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture, v.texShape[0], v.texShape[1]).subarray(0, s2);
      return this.disposeData(p2.dataId), g;
    }, o2.prototype.time = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o3, a2, s2, u2, c2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              return e2 = this.activeTimers, n2 = [], o3 = false, null == this.programTimersStack ? (this.programTimersStack = n2, o3 = true) : this.activeTimers.push(n2), this.activeTimers = n2, t3(), a2 = I(this.activeTimers.map(function(t4) {
                return t4.query;
              })).filter(function(t4) {
                return null != t4;
              }), s2 = I(this.activeTimers.map(function(t4) {
                return t4.name;
              })).filter(function(t4) {
                return null != t4;
              }), this.activeTimers = e2, o3 && (this.programTimersStack = null), u2 = { uploadWaitMs: this.uploadWaitMs, downloadWaitMs: this.downloadWaitMs, kernelMs: null, wallMs: null }, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(a2)] : [3, 2];
            case 1:
              return c2 = r2.sent(), u2.kernelMs = w(c2), u2.getExtraProfileInfo = function() {
                return c2.map(function(t4, e3) {
                  return { name: s2[e3], ms: t4 };
                }).map(function(t4) {
                  return t4.name + ": " + t4.ms;
                }).join(", ");
              }, [3, 3];
            case 2:
              u2.kernelMs = { error: "WebGL query timers are not supported in this environment." }, r2.label = 3;
            case 3:
              return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, u2];
          }
        });
      });
    }, o2.prototype.memory = function() {
      return { unreliable: false, numBytesInGPU: this.numBytesInGPU };
    }, o2.prototype.startTimer = function() {
      return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : { startMs: et(), endMs: null };
    }, o2.prototype.endTimer = function(t3) {
      return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(), t3) : (t3.endMs = et(), t3);
    }, o2.prototype.getQueryTime = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2;
        return r(this, function(n2) {
          return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(t3)] : [2, (e2 = t3).endMs - e2.startMs];
        });
      });
    }, o2.prototype.disposeData = function(t3) {
      if (!this.pendingDisposal.has(t3)) {
        if (this.pendingRead.has(t3))
          return this.pendingDisposal.add(t3), void this.pendingDeletes++;
        if (this.texData.has(t3)) {
          this.releaseGPUData(t3);
          var e2 = this.texData.get(t3).complexTensors;
          null != e2 && (e2.real.dispose(), e2.imag.dispose()), this.texData.delete(t3);
        }
      }
    }, o2.prototype.releaseGPUData = function(t3) {
      var e2 = this.texData.get(t3), n2 = e2.texture, r2 = e2.dtype, o3 = e2.texShape, a2 = e2.usage, i2 = e2.isPacked, s2 = e2.slice, u2 = s2 && s2.origDataId || t3, c2 = this.dataRefCount.get(u2);
      c2 > 1 ? this.dataRefCount.set(u2, c2 - 1) : (this.dataRefCount.delete(u2), null != n2 && (this.numBytesInGPU -= this.computeBytes(o3, r2), this.textureManager.releaseTexture(n2, o3, a2, i2)));
      var l2 = this.texData.get(t3);
      l2.texture = null, l2.texShape = null, l2.isPacked = false, l2.slice = null;
    }, o2.prototype.getTexture = function(t3) {
      return this.uploadToGPU(t3), this.texData.get(t3).texture;
    }, o2.prototype.getDataInfo = function(t3) {
      return this.texData.get(t3);
    }, o2.prototype.getCPUBackend = function() {
      return i().getBool("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = Lt.findBackend("cpu")), this.cpuBackend) : null;
    }, o2.prototype.shouldExecuteOnCPU = function(t3, e2) {
      var n2 = this;
      return void 0 === e2 && (e2 = 128), null != this.getCPUBackend() && t3.every(function(t4) {
        return null == n2.texData.get(t4.dataId).texture && k(t4.shape) < e2;
      });
    }, o2.prototype.getGPGPUContext = function() {
      return this.gpgpu;
    }, o2.prototype.complex = function(t3, e2) {
      var n2 = this.makeOutput(t3.shape, "complex64");
      return this.texData.get(n2.dataId).complexTensors = { real: Lt.keep(t3.clone()), imag: Lt.keep(e2.clone()) }, n2;
    }, o2.prototype.real = function(t3) {
      return this.texData.get(t3.dataId).complexTensors.real.clone();
    }, o2.prototype.imag = function(t3) {
      return this.texData.get(t3.dataId).complexTensors.imag.clone();
    }, o2.prototype.slice = function(t3, e2, n2) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.slice(t3, e2, n2);
      if (0 === k(n2))
        return Fn([], n2, t3.dtype);
      var r2 = this.texData.get(t3.dataId).isPacked, o3 = $o(t3.shape, e2, n2);
      if (r2 || !o3) {
        var a2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new eu(n2) : new Zs(n2), s2 = a2.getCustomSetupFunc(e2);
        return this.compileAndRun(a2, [t3], null, s2);
      }
      return this.uploadToGPU(t3.dataId), this.shallowSlice(t3, e2, n2);
    }, o2.prototype.shallowSlice = function(t3, e2, n2) {
      var r2 = this.texData.get(t3.dataId), o3 = this.makeOutput(n2, t3.dtype), a2 = this.texData.get(o3.dataId);
      Object.assign(a2, r2), a2.shape = n2, a2.dtype = t3.dtype;
      var i2 = Qo(e2, t3.strides);
      r2.slice && (i2 += r2.slice.flatOffset), a2.slice = { flatOffset: i2, origDataId: r2.slice && r2.slice.origDataId || t3.dataId };
      var s2 = this.dataRefCount.get(a2.slice.origDataId) || 1;
      return this.dataRefCount.set(a2.slice.origDataId, s2 + 1), o3;
    }, o2.prototype.stridedSlice = function(t3, e2, n2, r2) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.stridedSlice(t3, e2, n2, r2);
      var o3 = jo(e2, n2, r2);
      if (o3.some(function(t4) {
        return 0 === t4;
      }))
        return Fn([], o3);
      var a2 = new nu(e2, r2, o3);
      return this.compileAndRun(a2, [t3]);
    }, o2.prototype.reverse = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Ys(t3.shape, e2) : new Xs(t3.shape, e2);
      return this.compileAndRun(n2, [t3]);
    }, o2.prototype.concat = function(t3, e2) {
      if ("complex64" === t3[0].dtype) {
        var n2 = t3.map(function(t4) {
          return Dn(t4);
        }), r2 = t3.map(function(t4) {
          return Nn(t4);
        });
        return Tn(this.concat(n2, e2), this.concat(r2, e2));
      }
      if (this.shouldExecuteOnCPU(t3))
        return this.cpuBackend.concat(t3, e2);
      if (1 === t3.length)
        return t3[0];
      if (t3.length > i().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
        var o3 = Math.floor(t3.length / 2), a2 = this.concat(t3.slice(0, o3), e2), s2 = this.concat(t3.slice(o3), e2);
        return this.concat([a2, s2], e2);
      }
      if (i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && t3[0].rank > 1) {
        var u2 = new Fi(t3.map(function(t4) {
          return t4.shape;
        }), e2);
        return this.compileAndRun(u2, t3);
      }
      var c2 = Sn(t3.map(function(t4) {
        return t4.shape;
      }), e2), l2 = t3.map(function(t4) {
        return t4.as2D(-1, k(t4.shape.slice(e2)));
      }), h2 = new Ni(l2.map(function(t4) {
        return t4.shape;
      }));
      return this.compileAndRun(h2, l2).reshape(c2);
    }, o2.prototype.neg = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.neg(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, mu, t3.dtype);
      var e2 = new cu(t3.shape, mu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.batchMatMul = function(t3, e2, n2, r2) {
      var o3 = n2 ? t3.shape[2] : t3.shape[1], a2 = r2 ? e2.shape[1] : e2.shape[2], i2 = n2 ? t3.shape[1] : t3.shape[2], s2 = t3.shape[0];
      if ((1 === o3 || 1 === a2) && i2 > 1e3) {
        n2 && (t3 = ua(t3, [0, 2, 1])), r2 && (e2 = ua(e2, [0, 2, 1]));
        var u2 = 1 === a2 ? t3 : t3.as3D(s2, i2, 1), c2 = 1 === a2 ? 2 : 1, l2 = 1 === a2 ? e2.as3D(s2, 1, i2) : e2;
        return this.multiply(u2, l2).sum(c2, true);
      }
      var h2 = Tt(t3.dtype, e2.dtype), f2 = new _s(t3.shape, [s2, o3, a2], n2, r2);
      return this.compileAndRun(f2, [t3, e2], h2);
    }, o2.prototype.fusedBatchMatMul = function(t3) {
      var e2 = t3.a, n2 = t3.b, r2 = t3.transposeA, o3 = t3.transposeB, a2 = t3.bias, i2 = t3.activation, s2 = t3.preluActivationWeights, u2 = r2 ? e2.shape[2] : e2.shape[1], c2 = o3 ? n2.shape[1] : n2.shape[2], l2 = e2.shape[0], h2 = Tt(e2.dtype, n2.dtype), f2 = null != a2, d2 = null != s2, p2 = i2 ? Lu(i2, true) : null, v = new _s(e2.shape, [l2, u2, c2], r2, o3, f2, p2, d2), g = [e2, n2];
      return a2 && g.push(a2), s2 && g.push(s2), this.compileAndRun(v, g, h2);
    }, o2.prototype.multiply = function(t3, e2) {
      if ("complex64" === t3.dtype) {
        var n2 = this.texData.get(t3.dataId), r2 = this.texData.get(e2.dataId), o3 = new yi(gi, t3.shape, e2.shape), a2 = new yi(mi, t3.shape, e2.shape), s2 = [this.makeComplexComponentTensorInfo(t3, n2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, n2.complexTensors.imag), this.makeComplexComponentTensorInfo(e2, r2.complexTensors.real), this.makeComplexComponentTensorInfo(e2, r2.complexTensors.imag)], u2 = this.compileAndRun(o3, s2), c2 = this.compileAndRun(a2, s2), l2 = this.complex(u2, c2);
        return u2.dispose(), c2.dispose(), l2;
      }
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.multiply(t3, e2);
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, wi, t3.dtype);
      var h2 = new Ri(wi, t3.shape, e2.shape);
      return this.compileAndRun(h2, [t3, e2], t3.dtype);
    }, o2.prototype.batchNormalization = function(t3, e2, n2, r2, o3, a2) {
      var s2 = [t3, e2, n2], u2 = null;
      null != a2 && (u2 = a2.shape, s2.push(a2));
      var c2 = null;
      if (null != o3 && (c2 = o3.shape, s2.push(o3)), i().getBool("WEBGL_PACK_NORMALIZATION")) {
        var l2 = new vi(t3.shape, e2.shape, n2.shape, u2, c2, r2);
        return this.compileAndRun(l2, s2);
      }
      var h2 = new pi(t3.shape, e2.shape, n2.shape, u2, c2, r2);
      return this.compileAndRun(h2, s2);
    }, o2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o3) {
      var a2 = i().getBool("WEBGL_PACK_NORMALIZATION") ? new Ds(t3.shape, e2, n2, r2, o3) : new As(t3.shape, e2, n2, r2, o3);
      return this.compileAndRun(a2, [t3]);
    }, o2.prototype.LRNGrad = function(t3, e2, n2, r2, o3, a2, i2) {
      var s2 = new Ts(e2.shape, r2, o3, a2, i2);
      return this.compileAndRun(s2, [e2, n2, t3]);
    }, o2.prototype.tile = function(t3, e2) {
      if ("string" === t3.dtype) {
        var n2 = this.readSync(t3.dataId).map(function(t4) {
          return ot(t4);
        });
        return Va(er(t3.shape, t3.dtype, n2), e2);
      }
      var r2 = new iu(t3.shape, e2);
      return this.compileAndRun(r2, [t3]);
    }, o2.prototype.pad = function(t3, e2, n2) {
      var r2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Ls(t3.shape, e2, n2) : new Ps(t3.shape, e2, n2);
      return this.compileAndRun(r2, [t3]);
    }, o2.prototype.gather = function(t3, e2, n2) {
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.gather(t3, e2, n2);
      var r2 = new as(t3.shape, e2.size, n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.batchToSpaceND = function(t3, e2, n2) {
      C(t3.rank <= 4, function() {
        return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet";
      });
      var r2 = e2.reduce(function(t4, e3) {
        return t4 * e3;
      }), o3 = pr(t3.shape, e2, r2), a2 = vr(o3.length, e2.length), i2 = gr(t3.shape, e2, r2), s2 = mr(n2, e2.length), u2 = yr(i2, n2, e2.length);
      return ua(t3.reshape(o3), a2).reshape(i2).slice(s2, u2);
    }, o2.prototype.spaceToBatchND = function(t3, e2, n2) {
      C(t3.rank <= 4, function() {
        return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet";
      });
      var r2 = e2.reduce(function(t4, e3) {
        return t4 * e3;
      }), o3 = [[0, 0]];
      o3.push.apply(o3, n2);
      for (var a2 = 1 + e2.length; a2 < t3.shape.length; ++a2)
        o3.push([0, 0]);
      var i2 = t3.pad(o3), s2 = pr(i2.shape, e2, r2, false), u2 = vr(s2.length, e2.length, false), c2 = gr(i2.shape, e2, r2, false);
      return ua(i2.reshape(s2), u2).reshape(c2);
    }, o2.prototype.reduce = function(t3, e2, n2) {
      var r2 = t3.shape[0], o3 = t3.shape[1], a2 = Uo(o3), i2 = new Vs({ windowSize: a2, inSize: o3, batchSize: r2 }, e2), s2 = this.compileAndRun(i2, [t3], n2);
      return 1 === s2.shape[1] ? s2 : this.reduce(s2, e2, n2);
    }, o2.prototype.argReduce = function(t3, e2, n2) {
      void 0 === n2 && (n2 = null);
      var r2 = t3.shape[0], o3 = t3.shape[1];
      null != n2 && (r2 = n2.shape[0], o3 = n2.shape[1]);
      var a2 = Uo(o3), i2 = new Ka({ windowSize: a2, inSize: o3, batchSize: r2 }, e2, null == n2), s2 = [t3];
      null != n2 && s2.push(n2);
      var u2 = this.compileAndRun(i2, s2, "int32");
      return 1 === u2.shape[1] ? u2 : this.argReduce(t3, e2, u2);
    }, o2.prototype.argReducePacked = function(t3, e2, n2) {
      void 0 === n2 && (n2 = null);
      var r2 = null != n2 ? n2.shape : t3.shape, o3 = Uo(r2[r2.length - 1]), a2 = new hi(r2, o3, e2, null == n2), i2 = null == n2 ? [t3] : [t3, n2], s2 = this.compileAndRun(a2, i2, "int32");
      return s2.rank === t3.rank ? this.argReducePacked(t3, e2, s2) : s2;
    }, o2.prototype.sum = function(t3, e2) {
      Cn("sum", e2, t3.rank);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3), i2 = Dt(t3.dtype);
      return this.reduce(a2, "sum", i2).reshape(r2);
    }, o2.prototype.prod = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.prod(t3, e2);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3), i2 = Dt(t3.dtype);
      return this.reduce(a2, "prod", i2).reshape(r2);
    }, o2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
      var r2 = 0, o3 = En([r2], t3.rank), a2 = t3;
      null != o3 && (a2 = ua(t3, o3), r2 = In(1, t3.rank)[0]);
      var i2 = function(t4, e3, n3) {
        for (var r3 = [], o4 = t4.length, a3 = 0; a3 < o4; a3++)
          a3 !== e3 ? r3.push(t4[a3]) : r3.push(n3);
        return r3;
      }(a2.shape, r2, n2), s2 = k([a2.shape[r2]]), u2 = a2.as2D(-1, s2), c2 = Dt(t3.dtype), l2 = this.segOpCompute(u2, "unsortedSegmentSum", e2, c2, n2).reshape(i2);
      return null != o3 && (l2 = ua(l2, Rn(o3))), l2;
    }, o2.prototype.segOpCompute = function(t3, e2, n2, r2, o3) {
      var a2 = t3.shape[0], i2 = t3.shape[1], s2 = function(t4, e3) {
        var n3, r3 = false;
        for (t4 <= Wo ? (n3 = t4, r3 = true) : n3 = Y(t4, Math.floor(Math.sqrt(t4))); !r3; )
          n3 > e3 || n3 === t4 ? r3 = true : n3 = Y(t4, n3 + 1);
        return n3;
      }(i2, o3), u2 = new Qs({ windowSize: s2, inSize: i2, batchSize: a2, numSegments: o3 }, e2), c2 = this.compileAndRun(u2, [t3, n2], r2);
      return c2.shape[1] === o3 ? c2 : (n2 = Kn(0, o3).tile([i2 / s2]), this.segOpCompute(c2, e2, n2, r2, o3));
    }, o2.prototype.argMinMaxReduce = function(t3, e2, n2) {
      var r2 = [e2];
      if (Cn("arg" + n2.charAt(0).toUpperCase() + n2.slice(1), r2, t3.rank), !i().getBool("WEBGL_PACK_REDUCE") || t3.rank <= 2) {
        var o3 = bn(t3.shape, r2), a2 = o3[0], s2 = k(o3[1]), u2 = t3.as2D(-1, s2);
        return this.argReduce(u2, n2).reshape(a2);
      }
      return this.argReducePacked(t3, n2);
    }, o2.prototype.argMin = function(t3, e2) {
      return this.argMinMaxReduce(t3, e2, "min");
    }, o2.prototype.argMax = function(t3, e2) {
      return this.argMinMaxReduce(t3, e2, "max");
    }, o2.prototype.cumsum = function(t3, e2, n2, r2) {
      if (e2 !== t3.rank - 1)
        throw new Error("WebGL cumsum shader expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + e2);
      var o3 = new qi(t3.shape, n2, r2);
      return this.compileAndRun(o3, [t3]);
    }, o2.prototype.equal = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(equal(a, b));\n", "bool");
      var n2 = new Ri("return float(a == b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.notEqual = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(notEqual(a, b));\n", "bool");
      var n2 = new Ri("return float(a != b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.less = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.less(t3, e2);
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(lessThan(a, b));\n", "bool");
      var n2 = new Ri("return float(a < b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.lessEqual = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(lessThanEqual(a, b));\n", "bool");
      var n2 = new Ri("return float(a <= b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.greater = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.greater(t3, e2);
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(greaterThan(a, b));\n", "bool");
      var n2 = new Ri("return float(a > b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.greaterEqual = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(greaterThanEqual(a, b));\n", "bool");
      var n2 = new Ri("return float(a >= b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.logicalNot = function(t3) {
      var e2 = new cu(t3.shape, "return float(!(x >= 1.0));");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.logicalAnd = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n", "bool");
      var n2 = new Ri("return float(a >= 1.0 && b >= 1.0);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.logicalOr = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n", "bool");
      var n2 = new Ri("return float(a >= 1.0 || b >= 1.0);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "bool");
    }, o2.prototype.select = function(t3, e2, n2) {
      var r2 = new Js(t3.rank, e2.shape, e2.rank);
      return this.compileAndRun(r2, [t3, e2, n2], Tt(e2.dtype, n2.dtype));
    }, o2.prototype.where = function(t3) {
      dn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
      var e2 = t3.dataSync();
      return Ga(t3.shape, e2);
    }, o2.prototype.topk = function(t3, e2, n2) {
      return za(t3.dataSync(), t3.shape, t3.dtype, e2);
    }, o2.prototype.min = function(t3, e2) {
      Cn("min", e2, t3.rank);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
      return this.reduce(a2, "min", a2.dtype).reshape(r2);
    }, o2.prototype.minimum = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.minimum(t3, e2);
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ri("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.mod = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ri("if (b == 0.0) return NAN;\n  return mod(a, b);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.max = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.max(t3, e2);
      Cn("max", e2, t3.rank);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
      return this.reduce(a2, "max", a2.dtype).reshape(r2);
    }, o2.prototype.maximum = function(t3, e2) {
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.maximum(t3, e2);
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ri("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.all = function(t3, e2) {
      Cn("all", e2, t3.rank);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
      return this.reduce(a2, "all", a2.dtype).reshape(r2);
    }, o2.prototype.any = function(t3, e2) {
      Cn("any", e2, t3.rank);
      var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
      return this.reduce(a2, "any", a2.dtype).reshape(r2);
    }, o2.prototype.floorDiv = function(t3, e2) {
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n", "int32");
      var n2 = new Ri("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2], "int32");
    }, o2.prototype.add = function(t3, e2) {
      if ("complex64" === t3.dtype && "complex64" === e2.dtype)
        return this.complexSeparableBinaryOp(t3, e2, xi);
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.add(t3, e2);
      var n2 = Tt(t3.dtype, e2.dtype);
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, xi, n2);
      var r2 = new Ri(xi, t3.shape, e2.shape);
      return this.compileAndRun(r2, [t3, e2], n2);
    }, o2.prototype.packedUnaryOp = function(t3, e2, n2) {
      var r2 = new Mu(t3.shape, e2);
      return this.compileAndRun(r2, [t3], n2);
    }, o2.prototype.packedBinaryOp = function(t3, e2, n2, r2, o3) {
      void 0 === o3 && (o3 = false);
      var a2 = new Si(n2, t3.shape, e2.shape, o3);
      return this.compileAndRun(a2, [t3, e2], r2);
    }, o2.prototype.complexSeparableBinaryOp = function(t3, e2, n2) {
      var r2 = this, o3 = this.texData.get(t3.dataId), a2 = this.texData.get(e2.dataId), i2 = [[o3.complexTensors.real, a2.complexTensors.real], [o3.complexTensors.imag, a2.complexTensors.imag]].map(function(o4) {
        var a3 = o4[0], i3 = o4[1], s3 = r2.makeComplexComponentTensorInfo(t3, a3), u3 = r2.makeComplexComponentTensorInfo(e2, i3), c3 = new Ri(n2, t3.shape, e2.shape);
        return r2.compileAndRun(c3, [s3, u3], Tt(a3.dtype, i3.dtype));
      }), s2 = i2[0], u2 = i2[1], c2 = this.complex(s2, u2);
      return s2.dispose(), u2.dispose(), c2;
    }, o2.prototype.makeComplexComponentTensorInfo = function(t3, e2) {
      return { dataId: e2.dataId, dtype: e2.dtype, shape: t3.shape };
    }, o2.prototype.addN = function(t3) {
      if (1 === t3.length)
        return t3[0];
      if (t3.length > i().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
        var e2 = Math.floor(t3.length / 2), n2 = this.addN(t3.slice(0, e2)), r2 = this.addN(t3.slice(e2));
        return this.addN([n2, r2]);
      }
      var o3 = t3.map(function(t4) {
        return t4.dtype;
      }).reduce(function(t4, e3) {
        return Tt(t4, e3);
      }), a2 = t3.map(function(t4) {
        return t4.shape;
      }), s2 = i().getBool("WEBGL_PACK") ? new qa(t3[0].shape, a2) : new Ha(t3[0].shape, a2);
      return this.compileAndRun(s2, t3, o3);
    }, o2.prototype.subtract = function(t3, e2) {
      if ("complex64" === t3.dtype && "complex64" === e2.dtype)
        return this.complexSeparableBinaryOp(t3, e2, bi);
      if (this.shouldExecuteOnCPU([t3, e2]))
        return this.cpuBackend.subtract(t3, e2);
      var n2 = Tt(t3.dtype, e2.dtype);
      if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
        return this.packedBinaryOp(t3, e2, bi, t3.dtype);
      var r2 = new Ri(bi, t3.shape, e2.shape);
      return this.compileAndRun(r2, [t3, e2], n2);
    }, o2.prototype.pow = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ri("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", t3.shape, e2.shape), r2 = Tt(t3.dtype, e2.dtype);
      return this.compileAndRun(n2, [t3, e2], r2);
    }, o2.prototype.ceil = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.ceil(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, yu, t3.dtype);
      var e2 = new cu(t3.shape, yu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.floor = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.floor(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, xu, t3.dtype);
      var e2 = new cu(t3.shape, xu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.sign = function(t3) {
      var e2 = new cu(t3.shape, "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.isNaN = function(t3) {
      var e2 = new cu(t3.shape, "return float(isnan(x));");
      return this.compileAndRun(e2, [t3], "bool");
    }, o2.prototype.isInf = function(t3) {
      var e2 = new cu(t3.shape, "return float(isinf(x));");
      return this.compileAndRun(e2, [t3], "bool");
    }, o2.prototype.isFinite = function(t3) {
      var e2 = new cu(t3.shape, "return float(!isnan(x) && !isinf(x));");
      return this.compileAndRun(e2, [t3], "bool");
    }, o2.prototype.round = function(t3) {
      var e2 = new cu(t3.shape, "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.exp = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.exp(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, bu, t3.dtype);
      var e2 = new cu(t3.shape, bu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.expm1 = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.expm1(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, wu, t3.dtype);
      var e2 = new cu(t3.shape, wu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.softmax = function(t3, e2) {
      var n2 = O([e2], t3.shape), r2 = this.max(t3, n2), o3 = wn(r2.shape, n2), a2 = this.subtract(t3, r2.reshape(o3)), i2 = this.exp(a2), s2 = this.sum(i2, n2).reshape(o3);
      return Bo(i2, s2);
    }, o2.prototype.log = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.log(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, "\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n", t3.dtype);
      var e2 = new cu(t3.shape, "if (x < 0.0) return NAN;\n  return log(x);");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.log1p = function(t3) {
      var e2 = new cu(t3.shape, "return log(1.0 + x);");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.sqrt = function(t3) {
      var e2 = new cu(t3.shape, "return sqrt(x);");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.rsqrt = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.rsqrt(t3);
      var e2 = new cu(t3.shape, "return inversesqrt(x);");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.reciprocal = function(t3) {
      var e2 = new cu(t3.shape, "return 1.0 / x;");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.relu = function(t3) {
      var e2;
      return e2 = i().getBool("WEBGL_PACK") ? new Mu(t3.shape, Fu) : new cu(t3.shape, du), this.compileAndRun(e2, [t3]);
    }, o2.prototype.relu6 = function(t3) {
      var e2;
      return e2 = i().getBool("WEBGL_PACK") ? new Mu(t3.shape, _u) : new cu(t3.shape, pu), this.compileAndRun(e2, [t3]);
    }, o2.prototype.prelu = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si(ki, t3.shape, e2.shape) : new Ri(Ei, t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.elu = function(t3) {
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, Ou, t3.dtype);
      var e2 = new cu(t3.shape, vu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.eluDer = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", t3.shape, e2.shape) : new Ri("return (b >= 1.0) ? a : a * (b + 1.0);", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.selu = function(t3) {
      var e2 = new cu(t3.shape, gu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.int = function(t3) {
      var e2 = new cu(t3.shape, "return float(int(x));");
      return this.compileAndRun(e2, [t3], "int32");
    }, o2.prototype.clip = function(t3, e2, n2) {
      var r2, o3 = (r2 = i().getBool("WEBGL_PACK_CLIP") ? new Ti(t3.shape) : new Ai(t3.shape)).getCustomSetupFunc(e2, n2);
      return this.compileAndRun(r2, [t3], null, o3);
    }, o2.prototype.abs = function(t3) {
      if (this.shouldExecuteOnCPU([t3]))
        return this.cpuBackend.abs(t3);
      if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
        return this.packedUnaryOp(t3, fu, t3.dtype);
      var e2 = new cu(t3.shape, fu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.complexAbs = function(t3) {
      var e2 = this.texData.get(t3.dataId), n2 = new Di(t3.shape), r2 = [this.makeComplexComponentTensorInfo(t3, e2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, e2.complexTensors.imag)];
      return this.compileAndRun(n2, r2);
    }, o2.prototype.sigmoid = function(t3) {
      var e2 = new cu(t3.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.softplus = function(t3) {
      var e2 = new cu(t3.shape, "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.sin = function(t3) {
      var e2 = new cu(t3.shape, Cu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.cos = function(t3) {
      var e2 = new cu(t3.shape, Eu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.tan = function(t3) {
      var e2 = new cu(t3.shape, "return tan(x);");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.asin = function(t3) {
      var e2 = new cu(t3.shape, Ru);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.acos = function(t3) {
      var e2 = new cu(t3.shape, Iu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.atan = function(t3) {
      var e2 = new cu(t3.shape, ku);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.atan2 = function(t3, e2) {
      var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ri("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n", t3.shape, e2.shape);
      return this.compileAndRun(n2, [t3, e2]);
    }, o2.prototype.sinh = function(t3) {
      var e2 = new cu(t3.shape, "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.cosh = function(t3) {
      var e2 = new cu(t3.shape, "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.tanh = function(t3) {
      var e2 = new cu(t3.shape, "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.asinh = function(t3) {
      var e2 = new cu(t3.shape, Su);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.acosh = function(t3) {
      var e2 = new cu(t3.shape, Au);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.atanh = function(t3) {
      var e2 = new cu(t3.shape, Tu);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.erf = function(t3) {
      var e2 = new cu(t3.shape, '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.step = function(t3, e2) {
      var n2 = new cu(t3.shape, function(t4) {
        return void 0 === t4 && (t4 = 0), lu + "\n    return x > 0.0 ? 1.0 : float(" + t4 + ");\n  ";
      }(e2));
      return this.compileAndRun(n2, [t3]);
    }, o2.prototype.conv2dByMatMul = function(t3, e2, n2, r2, o3, a2) {
      var s2 = t3.shape, u2 = this.texData.get(t3.dataId), c2 = n2.inChannels, l2 = s2[0] * s2[1] * s2[2], h2 = n2.outChannels, f2 = "channelsLast" === n2.dataFormat, d2 = (1 === l2 || 1 === h2) && c2 > 1e3, p2 = s2[2] % 2 != 0 && !!u2.isPacked;
      if (d2 || !i().getBool("WEBGL_LAZILY_UNPACK") || !i().getBool("WEBGL_PACK_BINARY_OPERATIONS") || !p2) {
        var v = f2 ? s2[0] * s2[1] * s2[2] : s2[0] * s2[2] * s2[3], g = this.reshape(t3, [1, v, n2.inChannels]), m2 = this.reshape(e2, [1, n2.inChannels, n2.outChannels]);
        return this.reshape(this.fusedBatchMatMul({ a: g, b: m2, transposeA: false, transposeB: false, bias: r2, activation: o3, preluActivationWeights: a2 }), n2.outShape);
      }
      var y2 = f2 ? s2[0] * s2[1] * (s2[2] + 1) : s2[0] * s2[2] * (s2[3] + 1), x2 = { dataId: t3.dataId, shape: [1, y2, n2.inChannels], dtype: t3.dtype }, b2 = u2.shape;
      u2.shape = u2.shape.slice(), u2.shape[u2.shape.length - 2]++, C(_e(u2.shape, x2.shape), function() {
        return "packed reshape " + u2.shape + " to " + x2.shape + " isn't free";
      });
      var w2 = this.reshape(e2, [1, n2.inChannels, n2.outChannels]), E2 = this.fusedBatchMatMul({ a: x2, b: w2, transposeA: false, transposeB: false, bias: r2, activation: o3, preluActivationWeights: a2 }), R2 = this.texData.get(E2.dataId);
      return C(R2.isPacked, function() {
        return "batchMatMul result is expected to be packed";
      }), u2.shape = b2, R2.shape = n2.outShape, Lt.makeTensorFromDataId(E2.dataId, n2.outShape, E2.dtype);
    }, o2.prototype.conv2dWithIm2Row = function(t3, e2, n2, r2, o3, a2) {
      var i2 = n2.filterWidth, s2 = n2.filterHeight, u2 = n2.inChannels, c2 = n2.outWidth, l2 = n2.outHeight, h2 = "channelsLast" === n2.dataFormat, f2 = i2 * s2 * u2, d2 = l2 * c2, p2 = [f2, d2], v = t3.squeeze([0]), g = e2.reshape([1, f2, -1]), m2 = new Ss(p2, v.shape, n2), y2 = this.compileAndRun(m2, [v]).reshape([1, p2[0], p2[1]]), x2 = null != r2, b2 = null != a2, w2 = o3 ? Lu(o3, true) : null, C2 = new _s(y2.shape, [1, d2, n2.outChannels], true, false, x2, w2, b2), E2 = [y2, g];
      r2 && E2.push(r2), b2 && E2.push(a2);
      var R2 = this.compileAndRun(C2, E2);
      return h2 ? R2.reshape([1, l2, c2, n2.outChannels]) : R2.reshape([1, n2.outChannels, l2, c2]);
    }, o2.prototype.fusedConv2d = function(t3) {
      var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, s2 = t3.preluActivationWeights;
      if (1 === r2.filterHeight && 1 === r2.filterWidth && 1 === r2.dilationHeight && 1 === r2.dilationWidth && 1 === r2.strideHeight && 1 === r2.strideWidth && ("SAME" === r2.padInfo.type || "VALID" === r2.padInfo.type))
        return this.conv2dByMatMul(e2, n2, r2, o3, a2, s2);
      if (i().getBool("WEBGL_CONV_IM2COL") && 1 === e2.shape[0])
        return this.conv2dWithIm2Row(e2, n2, r2, o3, a2, s2);
      var u2 = null != o3, c2 = null != s2, l2 = a2 ? Lu(a2, false) : null, h2 = new Ui(r2, u2, l2, c2), f2 = [e2, n2];
      return o3 && f2.push(o3), s2 && f2.push(s2), this.compileAndRun(h2, f2);
    }, o2.prototype.conv2d = function(t3, e2, n2) {
      if (1 === n2.filterHeight && 1 === n2.filterWidth && 1 === n2.dilationHeight && 1 === n2.dilationWidth && 1 === n2.strideHeight && 1 === n2.strideWidth && ("SAME" === n2.padInfo.type || "VALID" === n2.padInfo.type))
        return this.conv2dByMatMul(t3, e2, n2);
      if (i().getBool("WEBGL_CONV_IM2COL") && 1 === t3.shape[0])
        return this.conv2dWithIm2Row(t3, e2, n2);
      var r2 = new Ui(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.conv2dDerInput = function(t3, e2, n2) {
      var r2 = new Mi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.conv2dDerFilter = function(t3, e2, n2) {
      var r2 = new Oi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.fusedDepthwiseConv2D = function(t3) {
      var e2, n2 = t3.input, r2 = t3.filter, o3 = t3.convInfo, a2 = t3.bias, s2 = t3.activation, u2 = t3.preluActivationWeights, c2 = i().getBool("WEBGL_PACK_DEPTHWISECONV") && o3.strideWidth <= 2 && o3.outChannels / o3.inChannels == 1, l2 = s2 ? Lu(s2, c2) : null, h2 = [n2, r2], f2 = null != a2, d2 = null != u2;
      return f2 && h2.push(a2), d2 && h2.push(u2), c2 ? (e2 = new Gi(o3, f2, l2, d2), this.compileAndRun(e2, h2)) : (e2 = new zi(o3, f2, l2, d2), this.compileAndRun(e2, h2));
    }, o2.prototype.depthwiseConv2D = function(t3, e2, n2) {
      var r2;
      return i().getBool("WEBGL_PACK_DEPTHWISECONV") && n2.strideWidth <= 2 && n2.outChannels / n2.inChannels == 1 ? (r2 = new Gi(n2), this.compileAndRun(r2, [t3, e2])) : (r2 = new zi(n2), this.compileAndRun(r2, [t3, e2]));
    }, o2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
      var r2 = new Wi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
      var r2 = new Li(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.conv3d = function(t3, e2, n2) {
      var r2 = new Vi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.conv3dDerInput = function(t3, e2, n2) {
      var r2 = new Pi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.conv3dDerFilter = function(t3, e2, n2) {
      var r2 = new Bi(n2);
      return this.compileAndRun(r2, [t3, e2]);
    }, o2.prototype.maxPool = function(t3, e2) {
      var n2 = new Ws(e2, "max", false);
      return this.compileAndRun(n2, [t3]);
    }, o2.prototype.avgPool = function(t3, e2) {
      var n2 = new Ws(e2, "avg", false);
      return this.compileAndRun(n2, [t3], "float32");
    }, o2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
      var o3 = new Ws(r2, "max", true), a2 = this.compileAndRun(o3, [e2]), i2 = new Ns(r2), s2 = this.compileAndRun(i2, [t3, a2], e2.dtype);
      return a2.dispose(), s2;
    }, o2.prototype.avgPoolBackprop = function(t3, e2, n2) {
      var r2 = new fi(n2);
      return this.compileAndRun(r2, [t3], e2.dtype);
    }, o2.prototype.cast = function(t3, e2) {
      return Ra(t3, e2, this);
    }, o2.prototype.unstack = function(t3, e2) {
      for (var n2 = t3.shape[e2], r2 = new Array(t3.rank - 1), o3 = 0, a2 = 0; a2 < t3.rank; a2++)
        a2 !== e2 && (r2[o3++] = t3.shape[a2]);
      var i2 = new Array(t3.rank).fill(0), s2 = t3.shape.slice();
      s2[e2] = 1;
      var u2 = new Array(n2);
      for (a2 = 0; a2 < u2.length; a2++)
        i2[e2] = a2, u2[a2] = this.slice(t3, i2, s2).reshape(r2);
      return u2;
    }, o2.prototype.avgPool3d = function(t3, e2) {
      var n2 = new Us(e2, "avg", false);
      return this.compileAndRun(n2, [t3], "float32");
    }, o2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
      var r2 = new di(n2);
      return this.compileAndRun(r2, [t3], e2.dtype);
    }, o2.prototype.maxPool3d = function(t3, e2) {
      var n2 = new Us(e2, "max", false);
      return this.compileAndRun(n2, [t3], "float32");
    }, o2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
      var o3 = new Us(r2, "max", true), a2 = this.compileAndRun(o3, [e2]), i2 = new Fs(r2), s2 = this.compileAndRun(i2, [t3, a2], e2.dtype);
      return a2.dispose(), s2;
    }, o2.prototype.reshape = function(t3, e2) {
      var n2 = this.texData.get(t3.dataId);
      if (n2.isPacked && !_e(t3.shape, e2) && (null === n2.texture || !_e(n2.shape, e2))) {
        var r2 = this.packedReshape(t3, e2);
        return Lt.makeTensorFromDataId(r2.dataId, r2.shape, r2.dtype);
      }
      return Ia(t3, e2);
    }, o2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
      var o3 = i().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new qs(t3.shape, e2, n2, r2) : new Hs(t3.shape, e2, n2, r2);
      return this.compileAndRun(o3, [t3], "float32");
    }, o2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
      var r2 = new Gs(t3, e2, n2);
      return this.compileAndRun(r2, [t3]);
    }, o2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
      var o3 = new js(t3.shape, e2, n2, r2);
      return this.compileAndRun(o3, [t3]);
    }, o2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
      var r2 = new Ks(t3, e2, n2);
      return this.compileAndRun(r2, [t3]);
    }, o2.prototype.multinomial = function(t3, e2, n2, r2) {
      var o3 = e2 ? t3 : ia(t3), a2 = o3.shape[0], i2 = o3.shape[1], s2 = new Os(a2, i2, n2), u2 = s2.getCustomSetupFunc(r2);
      return this.compileAndRun(s2, [o3], "int32", u2);
    }, o2.prototype.oneHot = function(t3, e2, n2, r2) {
      var o3 = new Ms(t3.size, e2, n2, r2);
      return this.compileAndRun(o3, [t3]);
    }, o2.prototype.diag = function(t3) {
      var e2 = new $i(t3.size);
      return this.compileAndRun(e2, [t3]);
    }, o2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o3) {
      return dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), Oa(t3.dataSync(), e2.dataSync(), n2, r2, o3);
    }, o2.prototype.cropAndResize = function(t3, e2, n2, r2, o3, a2) {
      var i2 = new Hi(t3.shape, e2.shape, r2, o3, a2);
      return this.compileAndRun(i2, [t3, e2, n2], "float32");
    }, o2.prototype.depthToSpace = function(t3, e2, n2) {
      C(e2 > 1, function() {
        return "blockSize should be > 1 for depthToSpace, but was: " + e2;
      });
      var r2 = t3.shape[0], o3 = "NHWC" === n2 ? t3.shape[1] : t3.shape[2], a2 = "NHWC" === n2 ? t3.shape[2] : t3.shape[3], i2 = "NHWC" === n2 ? t3.shape[3] : t3.shape[1], s2 = o3 * e2, u2 = a2 * e2, c2 = i2 / (e2 * e2), l2 = new Yi("NHWC" === n2 ? [r2, s2, u2, c2] : [r2, c2, s2, u2], e2, n2);
      return this.compileAndRun(l2, [t3]);
    }, o2.prototype.split = function(t3, e2, n2) {
      return Ua(t3, e2, n2);
    }, o2.prototype.scatterND = function(t3, e2, n2) {
      var r2 = Go(0, t3, n2), o3 = r2.sliceRank, a2 = r2.numUpdates, i2 = r2.sliceSize, s2 = r2.strides, u2 = r2.outputSize, c2 = [u2 / i2, i2], l2 = t3.reshape([a2, o3]), h2 = e2.reshape([a2, i2]);
      if (0 === u2)
        return Ia(Fn([]), n2);
      var f2 = On(0), d2 = new $s(a2, o3, l2.rank, h2.rank, s2, c2);
      return this.compileAndRun(d2, [h2, l2, f2]).reshape(n2);
    }, o2.prototype.sparseToDense = function(t3, e2, n2, r2) {
      var o3 = Go(0, t3, n2), a2 = o3.sliceRank, i2 = o3.numUpdates, s2 = o3.strides, u2 = o3.outputSize, c2 = new $s(i2, a2, t3.rank, e2.rank, s2, [u2, 1], false);
      return this.compileAndRun(c2, [e2, t3, r2]).reshape(n2);
    }, o2.prototype.fft = function(t3) {
      return this.fftImpl(t3, false);
    }, o2.prototype.ifft = function(t3) {
      return this.fftImpl(t3, true);
    }, o2.prototype.fftImpl = function(t3, e2) {
      var n2 = this.texData.get(t3.dataId), r2 = new rs(es, t3.shape, e2), o3 = new rs(ns, t3.shape, e2), a2 = [this.makeComplexComponentTensorInfo(t3, n2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, n2.complexTensors.imag)], i2 = this.compileAndRun(r2, a2), s2 = this.compileAndRun(o3, a2), u2 = this.complex(i2, s2).as2D(t3.shape[0], t3.shape[1]);
      return i2.dispose(), s2.dispose(), u2;
    }, o2.prototype.gatherND = function(t3, e2) {
      var n2 = e2.shape, r2 = n2[n2.length - 1], o3 = Po(t3, e2), a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = e2.reshape([i2, r2]), l2 = t3.reshape([t3.size / s2, s2]), h2 = new is(r2, u2, [i2, s2]);
      return this.compileAndRun(h2, [l2, c2]).reshape(a2);
    }, o2.prototype.fill = function(t3, e2, n2) {
      if ("string" === (n2 = n2 || j(e2))) {
        var r2 = P(n2, k(t3));
        return r2.fill(e2), Lt.makeTensor(r2, t3, n2, this);
      }
      var o3 = new os(t3, e2), a2 = o3.getCustomSetupFunc(e2);
      return this.compileAndRun(o3, [], n2, a2);
    }, o2.prototype.onesLike = function(t3) {
      if ("string" === t3.dtype)
        throw new Error("onesLike is not supported under string dtype");
      return this.fill(t3.shape, 1, t3.dtype);
    }, o2.prototype.zerosLike = function(t3) {
      return this.fill(t3.shape, "string" === t3.dtype ? "" : 0, t3.dtype);
    }, o2.prototype.linspace = function(t3, e2, n2) {
      return ka(t3, e2, n2);
    }, o2.prototype.makeTensorInfo = function(t3, e2) {
      var n2 = this.write(null, t3, e2);
      return this.texData.get(n2).usage = null, { dataId: n2, shape: t3, dtype: e2 };
    }, o2.prototype.makeOutput = function(t3, e2) {
      var n2 = this.makeTensorInfo(t3, e2).dataId;
      return Lt.makeTensorFromDataId(n2, t3, e2, this);
    }, o2.prototype.unpackTensor = function(t3) {
      var e2 = new Bu(t3.shape);
      return this.runWebGLProgram(e2, [t3], t3.dtype);
    }, o2.prototype.packTensor = function(t3) {
      var e2 = new Bs(t3.shape);
      return this.runWebGLProgram(e2, [t3], t3.dtype, null, true);
    }, o2.prototype.packedReshape = function(t3, e2) {
      var n2 = [Ae(t3.shape)].concat(Te(t3.shape)), r2 = { dtype: t3.dtype, shape: n2, dataId: t3.dataId }, o3 = [Ae(e2)].concat(Te(e2)), a2 = new zs(o3, n2), i2 = this.runWebGLProgram(a2, [r2], t3.dtype, null, true);
      return { dataId: i2.dataId, shape: e2, dtype: i2.dtype };
    }, o2.prototype.decode = function(t3) {
      var e2, n2 = this.texData.get(t3), r2 = n2.isPacked, o3 = n2.shape, a2 = n2.dtype, i2 = De(o3);
      e2 = r2 ? new Xi(i2) : new ji(i2);
      return { dtype: a2, shape: o3, dataId: this.runWebGLProgram(e2, [{ shape: i2, dtype: a2, dataId: t3 }], a2, null, true).dataId };
    }, o2.prototype.runWebGLProgram = function(t3, e2, n2, r2, o3) {
      var a2 = this;
      void 0 === o3 && (o3 = false);
      var s2 = this.makeTensorInfo(t3.outputShape, n2), u2 = this.texData.get(s2.dataId);
      if (t3.packedOutput && (u2.isPacked = true), t3.outPackingScheme === Vt.DENSE) {
        var c2 = Yt(t3.outputShape);
        u2.texShape = c2.map(function(t4) {
          return 2 * t4;
        });
      }
      if (null != t3.outTexUsage && (u2.usage = t3.outTexUsage), 0 === k(s2.shape))
        return u2.values = B(s2.dtype, 0), s2;
      var l2 = [], h2 = e2.map(function(e3) {
        if ("complex64" === e3.dtype)
          throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
        var n3 = a2.texData.get(e3.dataId);
        if (null == n3.texture) {
          if (!t3.packedInputs && k(e3.shape) <= i().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))
            return { shape: e3.shape, texData: null, isUniform: true, uniformValues: n3.values };
          t3.packedInputs && (n3.isPacked = true, n3.shape = e3.shape);
        } else if (!!n3.isPacked != !!t3.packedInputs)
          e3 = n3.isPacked ? a2.unpackTensor(e3) : a2.packTensor(e3), l2.push(e3), n3 = a2.texData.get(e3.dataId);
        else if (n3.isPacked && !_e(n3.shape, e3.shape)) {
          var r3 = e3, o4 = e3.shape;
          e3.shape = n3.shape, e3 = a2.packedReshape(e3, o4), l2.push(e3), n3 = a2.texData.get(e3.dataId), r3.shape = o4;
        }
        return a2.uploadToGPU(e3.dataId), { shape: e3.shape, texData: n3, isUniform: false };
      });
      this.uploadToGPU(s2.dataId);
      var f2, d2 = { shape: s2.shape, texData: u2, isUniform: false }, p2 = function(t4, e3, n3) {
        var r3 = "";
        e3.concat(n3).forEach(function(t5) {
          var e4 = null != t5.texData && null != t5.texData.slice && t5.texData.slice.flatOffset > 0, n4 = t5.isUniform ? "uniform" : t5.texData.texShape;
          r3 += t5.shape + "_" + n4 + "_" + e4;
        });
        var o4 = t4.userCode, a3 = t4.constructor.name;
        return a3 += "_" + r3 + "_" + o4;
      }(t3, h2, d2), v = this.getAndSaveBinary(p2, function() {
        return function(t4, e3, n3, r3) {
          var o4 = e3.userCode, a3 = n3.map(function(t5, n4) {
            var r4 = { logicalShape: t5.shape, texShape: t5.isUniform ? null : t5.texData.texShape, isUniform: t5.isUniform, isPacked: !t5.isUniform && t5.texData.isPacked, flatOffset: null };
            return null != t5.texData && null != t5.texData.slice && t5.texData.slice.flatOffset > 0 && (r4.flatOffset = t5.texData.slice.flatOffset), { name: e3.variableNames[n4], shapeInfo: r4 };
          }), s3 = a3.map(function(t5) {
            return t5.shapeInfo;
          }), u3 = { logicalShape: r3.shape, texShape: r3.texData.texShape, isUniform: false, isPacked: r3.texData.isPacked, flatOffset: null }, c3 = Za(a3, u3, o4, e3.packedInputs), l3 = t4.createProgram(c3), h3 = null, f3 = t4.getUniformLocation(l3, "NAN", false);
          1 === i().getNumber("WEBGL_VERSION") && (h3 = t4.getUniformLocation(l3, "INFINITY", false));
          for (var d3 = {}, p3 = 0; p3 < e3.variableNames.length; p3++) {
            var v2 = e3.variableNames[p3];
            d3[v2] = t4.getUniformLocation(l3, v2, false), d3["offset" + v2] = t4.getUniformLocation(l3, "offset" + v2, false);
          }
          return { program: e3, source: c3, webGLProgram: l3, uniformLocations: d3, inShapeInfos: s3, outShapeInfo: u3, infLoc: h3, nanLoc: f3 };
        }(a2.gpgpu, t3, h2, d2);
      }), g = null != this.activeTimers;
      if (g && (f2 = this.startTimer()), function(t4, e3, n3, r3, o4) {
        ks(e3.inShapeInfos, n3), ks([e3.outShapeInfo], [r3]);
        var a3 = r3.texData.texture, s3 = r3.texData.texShape;
        r3.texData.isPacked ? t4.setOutputPackedMatrixTexture(a3, s3[0], s3[1]) : t4.setOutputMatrixTexture(a3, s3[0], s3[1]), t4.setProgram(e3.webGLProgram), 1 === i().getNumber("WEBGL_VERSION") && null !== e3.infLoc && t4.gl.uniform1f(e3.infLoc, 1 / 0), null !== e3.nanLoc && t4.gl.uniform1f(e3.nanLoc, NaN), n3.forEach(function(n4, r4) {
          var o5 = e3.program.variableNames[r4], a4 = e3.uniformLocations[o5], i2 = e3.uniformLocations["offset" + o5];
          if (null != a4)
            if (n4.isUniform)
              if (k(n4.shape) < 2)
                t4.gl.uniform1f(a4, n4.uniformValues[0]);
              else {
                var s4 = n4.uniformValues;
                s4 instanceof Float32Array || (s4 = new Float32Array(s4)), t4.gl.uniform1fv(a4, s4);
              }
            else
              null != n4.texData.slice && null != i2 && t4.gl.uniform1i(i2, n4.texData.slice.flatOffset), t4.setInputMatrixTexture(n4.texData.texture, a4, r4);
        }), null != o4 && o4(t4, e3.webGLProgram), t4.executeProgram();
      }(this.gpgpu, v, h2, d2, r2), l2.forEach(function(t4) {
        return a2.disposeData(t4.dataId);
      }), g && (f2 = this.endTimer(f2), this.activeTimers.push({ name: t3.constructor.name, query: this.getQueryTime(f2) })), !i().getBool("WEBGL_LAZILY_UNPACK") && u2.isPacked && false === o3) {
        var m2 = this.unpackTensor(s2);
        return this.disposeData(s2.dataId), m2;
      }
      return s2;
    }, o2.prototype.compileAndRun = function(t3, e2, n2, r2, o3) {
      void 0 === o3 && (o3 = false), n2 = n2 || e2[0].dtype;
      var a2 = this.runWebGLProgram(t3, e2, n2, r2, o3);
      return Lt.makeTensorFromDataId(a2.dataId, a2.shape, a2.dtype);
    }, o2.prototype.getAndSaveBinary = function(t3, e2) {
      return t3 in this.binaryCache || (this.binaryCache[t3] = e2()), this.binaryCache[t3];
    }, o2.prototype.getTextureManager = function() {
      return this.textureManager;
    }, o2.prototype.dispose = function() {
      var t3 = this;
      if (!this.disposed) {
        if (!i().getBool("IS_TEST"))
          Object.keys(this.binaryCache).forEach(function(e2) {
            t3.gpgpu.deleteProgram(t3.binaryCache[e2].webGLProgram), delete t3.binaryCache[e2];
          });
        this.textureManager.dispose(), null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = true;
      }
    }, o2.prototype.floatPrecision = function() {
      var t3 = this;
      return null == this.floatPrecisionValue && (this.floatPrecisionValue = Ze(function() {
        if (!i().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
          var e2 = i().getBool("DEBUG");
          i().set("DEBUG", false);
          var n2 = t3.abs(On(1e-8)).dataSync()[0];
          if (i().set("DEBUG", e2), n2 > 0)
            return 32;
        }
        return 16;
      })), this.floatPrecisionValue;
    }, o2.prototype.epsilon = function() {
      return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
    }, o2.prototype.uploadToGPU = function(t3) {
      var e2, n2 = this.texData.get(t3), r2 = n2.shape, o3 = n2.dtype, a2 = n2.values, i2 = n2.texture, s2 = n2.usage, u2 = n2.isPacked;
      if (null == i2) {
        var c2, l2 = null != this.activeTimers;
        l2 && (c2 = et());
        var h2 = n2.texShape;
        if (null == h2 && (h2 = Ne(r2, u2), n2.texShape = h2), null != a2) {
          var f2 = De(r2), d2 = void 0, p2 = h2[1], v = h2[0], g = a2 instanceof Uint8Array;
          u2 ? (p2 = (e2 = $t(h2[0], h2[1]))[0], v = e2[1], d2 = new ts(f2, [v, p2], g)) : d2 = new Zi(f2, [v, p2], g);
          var m2 = this.makeTensorInfo([v, p2], o3);
          this.texData.get(m2.dataId).usage = g ? zt.PIXELS : zt.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m2.dataId), p2, v, a2);
          var y2 = this.runWebGLProgram(d2, [m2], o3, null, true), x2 = this.texData.get(y2.dataId);
          n2.texture = x2.texture, n2.texShape = x2.texShape, n2.isPacked = x2.isPacked, n2.usage = x2.usage, this.disposeData(m2.dataId), this.texData.delete(y2.dataId), n2.values = null, l2 && (this.uploadWaitMs += et() - c2);
        } else {
          var b2 = this.acquireTexture(h2, s2, o3, u2);
          n2.texture = b2;
        }
      }
    }, o2.prototype.convertAndCacheOnCPU = function(t3, e2) {
      var n2 = this.texData.get(t3), r2 = n2.dtype;
      return this.releaseGPUData(t3), null != e2 && (n2.values = function(t4, e3) {
        if ("float32" === e3 || "complex64" === e3)
          return t4;
        if ("int32" === e3 || "bool" === e3) {
          for (var n3 = "int32" === e3 ? new Int32Array(t4.length) : new Uint8Array(t4.length), r3 = 0; r3 < n3.length; ++r3)
            n3[r3] = Math.round(t4[r3]);
          return n3;
        }
        throw new Error("Unknown dtype " + e3);
      }(e2, r2)), n2.values;
    }, o2.prototype.acquireTexture = function(t3, e2, n2, r2) {
      if (this.numBytesInGPU += this.computeBytes(t3, n2), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
        var o3 = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
        this.warnedAboutMemory = true, console.warn("High memory usage in GPU: " + o3 + " MB, most likely due to a memory leak");
      }
      return this.textureManager.acquireTexture(t3, e2, r2);
    }, o2.prototype.computeBytes = function(t3, e2) {
      return t3[0] * t3[1] * z(e2);
    }, o2;
  }(la);
  Wt() && Lt.registerBackend("webgl", function() {
    return new Uu();
  }, 2);
  function Vu(t2, e2) {
    return t2(e2 = { exports: {} }, e2.exports), e2.exports;
  }
  var zu = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3, n3 = this, r3 = (e3 = 4022871197, function(t5) {
          t5 = t5.toString();
          for (var n4 = 0; n4 < t5.length; n4++) {
            var r4 = 0.02519603282416938 * (e3 += t5.charCodeAt(n4));
            r4 -= e3 = r4 >>> 0, e3 = (r4 *= e3) >>> 0, e3 += 4294967296 * (r4 -= e3);
          }
          return 23283064365386963e-26 * (e3 >>> 0);
        });
        n3.next = function() {
          var t5 = 2091639 * n3.s0 + 23283064365386963e-26 * n3.c;
          return n3.s0 = n3.s1, n3.s1 = n3.s2, n3.s2 = t5 - (n3.c = 0 | t5);
        }, n3.c = 1, n3.s0 = r3(" "), n3.s1 = r3(" "), n3.s2 = r3(" "), n3.s0 -= r3(t4), n3.s0 < 0 && (n3.s0 += 1), n3.s1 -= r3(t4), n3.s1 < 0 && (n3.s1 += 1), n3.s2 -= r3(t4), n3.s2 < 0 && (n3.s2 += 1), r3 = null;
      }
      function o2(t4, e3) {
        return e3.c = t4.c, e3.s0 = t4.s0, e3.s1 = t4.s1, e3.s2 = t4.s2, e3;
      }
      function a2(t4, e3) {
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = n3.next;
        return i2.int32 = function() {
          return 4294967296 * n3.next() | 0;
        }, i2.double = function() {
          return i2() + 11102230246251565e-32 * (2097152 * i2() | 0);
        }, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.alea = a2;
    }(0, t2, false);
  });
  var Gu = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3 = this, n3 = "";
        e3.x = 0, e3.y = 0, e3.z = 0, e3.w = 0, e3.next = function() {
          var t5 = e3.x ^ e3.x << 11;
          return e3.x = e3.y, e3.y = e3.z, e3.z = e3.w, e3.w ^= e3.w >>> 19 ^ t5 ^ t5 >>> 8;
        }, t4 === (0 | t4) ? e3.x = t4 : n3 += t4;
        for (var r3 = 0; r3 < n3.length + 64; r3++)
          e3.x ^= 0 | n3.charCodeAt(r3), e3.next();
      }
      function o2(t4, e3) {
        return e3.x = t4.x, e3.y = t4.y, e3.z = t4.z, e3.w = t4.w, e3;
      }
      function a2(t4, e3) {
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
          return (n3.next() >>> 0) / 4294967296;
        };
        return i2.double = function() {
          do {
            var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
          } while (0 === t5);
          return t5;
        }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.xor128 = a2;
    }(0, t2, false);
  });
  var Hu = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3 = this, n3 = "";
        e3.next = function() {
          var t5 = e3.x ^ e3.x >>> 2;
          return e3.x = e3.y, e3.y = e3.z, e3.z = e3.w, e3.w = e3.v, (e3.d = e3.d + 362437 | 0) + (e3.v = e3.v ^ e3.v << 4 ^ t5 ^ t5 << 1) | 0;
        }, e3.x = 0, e3.y = 0, e3.z = 0, e3.w = 0, e3.v = 0, t4 === (0 | t4) ? e3.x = t4 : n3 += t4;
        for (var r3 = 0; r3 < n3.length + 64; r3++)
          e3.x ^= 0 | n3.charCodeAt(r3), r3 == n3.length && (e3.d = e3.x << 10 ^ e3.x >>> 4), e3.next();
      }
      function o2(t4, e3) {
        return e3.x = t4.x, e3.y = t4.y, e3.z = t4.z, e3.w = t4.w, e3.v = t4.v, e3.d = t4.d, e3;
      }
      function a2(t4, e3) {
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
          return (n3.next() >>> 0) / 4294967296;
        };
        return i2.double = function() {
          do {
            var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
          } while (0 === t5);
          return t5;
        }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.xorwow = a2;
    }(0, t2, false);
  });
  var qu = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3 = this;
        e3.next = function() {
          var t5, n3, r3 = e3.x, o3 = e3.i;
          return t5 = r3[o3], n3 = (t5 ^= t5 >>> 7) ^ t5 << 24, n3 ^= (t5 = r3[o3 + 1 & 7]) ^ t5 >>> 10, n3 ^= (t5 = r3[o3 + 3 & 7]) ^ t5 >>> 3, n3 ^= (t5 = r3[o3 + 4 & 7]) ^ t5 << 7, t5 = r3[o3 + 7 & 7], n3 ^= (t5 ^= t5 << 13) ^ t5 << 9, r3[o3] = n3, e3.i = o3 + 1 & 7, n3;
        }, function(t5, e4) {
          var n3, r3 = [];
          if (e4 === (0 | e4))
            r3[0] = e4;
          else
            for (e4 = "" + e4, n3 = 0; n3 < e4.length; ++n3)
              r3[7 & n3] = r3[7 & n3] << 15 ^ e4.charCodeAt(n3) + r3[n3 + 1 & 7] << 13;
          for (; r3.length < 8; )
            r3.push(0);
          for (n3 = 0; n3 < 8 && 0 === r3[n3]; ++n3)
            ;
          for (8 == n3 ? r3[7] = -1 : r3[n3], t5.x = r3, t5.i = 0, n3 = 256; n3 > 0; --n3)
            t5.next();
        }(e3, t4);
      }
      function o2(t4, e3) {
        return e3.x = t4.x.slice(), e3.i = t4.i, e3;
      }
      function a2(t4, e3) {
        null == t4 && (t4 = +/* @__PURE__ */ new Date());
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
          return (n3.next() >>> 0) / 4294967296;
        };
        return i2.double = function() {
          do {
            var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
          } while (0 === t5);
          return t5;
        }, i2.int32 = n3.next, i2.quick = i2, a3 && (a3.x && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.xorshift7 = a2;
    }(0, t2, false);
  });
  var Ku = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3 = this;
        e3.next = function() {
          var t5, n3, r3 = e3.w, o3 = e3.X, a3 = e3.i;
          return e3.w = r3 = r3 + 1640531527 | 0, n3 = o3[a3 + 34 & 127], t5 = o3[a3 = a3 + 1 & 127], n3 ^= n3 << 13, t5 ^= t5 << 17, n3 ^= n3 >>> 15, t5 ^= t5 >>> 12, n3 = o3[a3] = n3 ^ t5, e3.i = a3, n3 + (r3 ^ r3 >>> 16) | 0;
        }, function(t5, e4) {
          var n3, r3, o3, a3, i2, s2 = [], u2 = 128;
          for (e4 === (0 | e4) ? (r3 = e4, e4 = null) : (e4 += "\0", r3 = 0, u2 = Math.max(u2, e4.length)), o3 = 0, a3 = -32; a3 < u2; ++a3)
            e4 && (r3 ^= e4.charCodeAt((a3 + 32) % e4.length)), 0 === a3 && (i2 = r3), r3 ^= r3 << 10, r3 ^= r3 >>> 15, r3 ^= r3 << 4, r3 ^= r3 >>> 13, a3 >= 0 && (i2 = i2 + 1640531527 | 0, o3 = 0 == (n3 = s2[127 & a3] ^= r3 + i2) ? o3 + 1 : 0);
          for (o3 >= 128 && (s2[127 & (e4 && e4.length || 0)] = -1), o3 = 127, a3 = 512; a3 > 0; --a3)
            r3 = s2[o3 + 34 & 127], n3 = s2[o3 = o3 + 1 & 127], r3 ^= r3 << 13, n3 ^= n3 << 17, r3 ^= r3 >>> 15, n3 ^= n3 >>> 12, s2[o3] = r3 ^ n3;
          t5.w = i2, t5.X = s2, t5.i = o3;
        }(e3, t4);
      }
      function o2(t4, e3) {
        return e3.i = t4.i, e3.w = t4.w, e3.X = t4.X.slice(), e3;
      }
      function a2(t4, e3) {
        null == t4 && (t4 = +/* @__PURE__ */ new Date());
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
          return (n3.next() >>> 0) / 4294967296;
        };
        return i2.double = function() {
          do {
            var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
          } while (0 === t5);
          return t5;
        }, i2.int32 = n3.next, i2.quick = i2, a3 && (a3.X && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.xor4096 = a2;
    }(0, t2, false);
  });
  var ju = Vu(function(t2) {
    !function(t3, e2, n2) {
      function r2(t4) {
        var e3 = this, n3 = "";
        e3.next = function() {
          var t5 = e3.b, n4 = e3.c, r4 = e3.d, o3 = e3.a;
          return t5 = t5 << 25 ^ t5 >>> 7 ^ n4, n4 = n4 - r4 | 0, r4 = r4 << 24 ^ r4 >>> 8 ^ o3, o3 = o3 - t5 | 0, e3.b = t5 = t5 << 20 ^ t5 >>> 12 ^ n4, e3.c = n4 = n4 - r4 | 0, e3.d = r4 << 16 ^ n4 >>> 16 ^ o3, e3.a = o3 - t5 | 0;
        }, e3.a = 0, e3.b = 0, e3.c = -1640531527, e3.d = 1367130551, t4 === Math.floor(t4) ? (e3.a = t4 / 4294967296 | 0, e3.b = 0 | t4) : n3 += t4;
        for (var r3 = 0; r3 < n3.length + 20; r3++)
          e3.b ^= 0 | n3.charCodeAt(r3), e3.next();
      }
      function o2(t4, e3) {
        return e3.a = t4.a, e3.b = t4.b, e3.c = t4.c, e3.d = t4.d, e3;
      }
      function a2(t4, e3) {
        var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
          return (n3.next() >>> 0) / 4294967296;
        };
        return i2.double = function() {
          do {
            var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
          } while (0 === t5);
          return t5;
        }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
          return o2(n3, {});
        }), i2;
      }
      e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
        return a2;
      }) : this.tychei = a2;
    }(0, t2, false);
  });
  var Xu = Vu(function(t2) {
    !function(e2, n2) {
      var r2, o2 = this, a2 = 256, i2 = 6, s2 = "random", u2 = n2.pow(a2, i2), c2 = n2.pow(2, 52), l2 = 2 * c2, h2 = a2 - 1;
      function f2(t3, h3, f3) {
        var m2 = [], y2 = v(function t4(e3, n3) {
          var r3, o3 = [], a3 = typeof e3;
          if (n3 && "object" == a3)
            for (r3 in e3)
              try {
                o3.push(t4(e3[r3], n3 - 1));
              } catch (t5) {
              }
          return o3.length ? o3 : "string" == a3 ? e3 : e3 + "\0";
        }((h3 = 1 == h3 ? { entropy: true } : h3 || {}).entropy ? [t3, g(e2)] : null == t3 ? function() {
          try {
            var t4;
            return r2 && (t4 = r2.randomBytes) ? t4 = t4(a2) : (t4 = new Uint8Array(a2), (o2.crypto || o2.msCrypto).getRandomValues(t4)), g(t4);
          } catch (t5) {
            var n3 = o2.navigator, i3 = n3 && n3.plugins;
            return [+/* @__PURE__ */ new Date(), o2, i3, o2.screen, g(e2)];
          }
        }() : t3, 3), m2), x2 = new d2(m2), b2 = function() {
          for (var t4 = x2.g(i2), e3 = u2, n3 = 0; t4 < c2; )
            t4 = (t4 + n3) * a2, e3 *= a2, n3 = x2.g(1);
          for (; t4 >= l2; )
            t4 /= 2, e3 /= 2, n3 >>>= 1;
          return (t4 + n3) / e3;
        };
        return b2.int32 = function() {
          return 0 | x2.g(4);
        }, b2.quick = function() {
          return x2.g(4) / 4294967296;
        }, b2.double = b2, v(g(x2.S), e2), (h3.pass || f3 || function(t4, e3, r3, o3) {
          return o3 && (o3.S && p2(o3, x2), t4.state = function() {
            return p2(x2, {});
          }), r3 ? (n2[s2] = t4, e3) : t4;
        })(b2, y2, "global" in h3 ? h3.global : this == n2, h3.state);
      }
      function d2(t3) {
        var e3, n3 = t3.length, r3 = this, o3 = 0, i3 = r3.i = r3.j = 0, s3 = r3.S = [];
        for (n3 || (t3 = [n3++]); o3 < a2; )
          s3[o3] = o3++;
        for (o3 = 0; o3 < a2; o3++)
          s3[o3] = s3[i3 = h2 & i3 + t3[o3 % n3] + (e3 = s3[o3])], s3[i3] = e3;
        (r3.g = function(t4) {
          for (var e4, n4 = 0, o4 = r3.i, i4 = r3.j, s4 = r3.S; t4--; )
            e4 = s4[o4 = h2 & o4 + 1], n4 = n4 * a2 + s4[h2 & (s4[o4] = s4[i4 = h2 & i4 + e4]) + (s4[i4] = e4)];
          return r3.i = o4, r3.j = i4, n4;
        })(a2);
      }
      function p2(t3, e3) {
        return e3.i = t3.i, e3.j = t3.j, e3.S = t3.S.slice(), e3;
      }
      function v(t3, e3) {
        for (var n3, r3 = t3 + "", o3 = 0; o3 < r3.length; )
          e3[h2 & o3] = h2 & (n3 ^= 19 * e3[h2 & o3]) + r3.charCodeAt(o3++);
        return g(e3);
      }
      function g(t3) {
        return String.fromCharCode.apply(0, t3);
      }
      if (n2["seed" + s2] = f2, v(n2.random(), e2), t2.exports) {
        t2.exports = f2;
        try {
          r2 = require_crypto();
        } catch (t3) {
        }
      }
    }([], Math);
  });
  Xu.alea = zu, Xu.xor128 = Gu, Xu.xorwow = Hu, Xu.xorshift7 = qu, Xu.xor4096 = Ku, Xu.tychei = ju;
  var Yu = Xu.alea;
  var $u = An({ addN_: function(t2) {
    C(Array.isArray(t2), function() {
      return "The argument passed to tf.addN() must be a list of tensors";
    }), C(t2.length >= 1, function() {
      return "Must pass at least one tensor to tf.addN(), but got " + t2.length;
    });
    var e2 = t2.map(function(t3, e3) {
      return gn(t3, "tensors" + e3, "addN");
    }), n2 = e2[0];
    e2.forEach(function(t3) {
      if (t3.dtype !== n2.dtype)
        throw new Error("All tensors passed to tf.addN() must have the same dtype");
    }), e2.forEach(function(t3) {
      if (!S(t3.shape, n2.shape))
        throw new Error("All tensors passed to tf.addN() must have the same shape");
    });
    var r2 = e2;
    return Lt.runKernelFunc(function(t3, n3) {
      return t3.addN(e2);
    }, r2, null, "AddN");
  } });
  function Qu() {
    Xe("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");
  }
  function Ju(t2) {
    return 0 === t2.rank || 1 === t2.rank ? t2.as4D(1, 1, 1, t2.size) : 2 === t2.rank ? t2.as4D(1, 1, t2.shape[0], t2.shape[1]) : 3 === t2.rank ? t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]) : t2;
  }
  function Zu(t2, e2, n2, r2, o2, a2) {
    null == a2 && (a2 = 1e-3);
    var i2, s2, u2 = gn(t2, "x", "batchNorm"), c2 = gn(e2, "mean", "batchNorm"), l2 = gn(n2, "variance", "batchNorm");
    null != o2 && (i2 = gn(o2, "scale", "batchNorm")), null != r2 && (s2 = gn(r2, "offset", "batchNorm")), C(c2.rank === l2.rank, function() {
      return "Batch normalization gradient requires mean and variance to have equal ranks.";
    }), C(null == s2 || c2.rank === s2.rank, function() {
      return "Batch normalization gradient requires mean and offset to have equal ranks.";
    }), C(null == i2 || c2.rank === i2.rank, function() {
      return "Batch normalization gradient requires mean and scale to have equal ranks.";
    });
    var h2 = { x: u2, scale: i2, offset: s2, mean: c2, variance: l2 }, f2 = { varianceEpsilon: a2 };
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = Ju(u2), r3 = t3.batchNormalization(n3, tc(c2), tc(l2), a2, tc(i2), tc(s2));
      return e3([u2, c2, l2, i2]), r3;
    }, h2, null, "FusedBatchNorm", f2).reshape(u2.shape);
  }
  function tc(t2) {
    return null == t2 ? null : 0 === t2.rank ? t2.as1D() : 1 === t2.rank ? t2 : 2 === t2.rank ? t2.as4D(1, 1, t2.shape[0], t2.shape[1]) : 3 === t2.rank ? t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]) : t2;
  }
  var ec = An({ batchNormalization_: function(t2, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = 1e-3), Qu(), Zu(t2, e2, n2, a2, o2, r2);
  } });
  var nc = An({ batchNorm_: Zu });
  function rc(t2, e2, n2, r2, o2, a2) {
    var i2, s2, u2 = gn(t2, "x", "batchNorm"), c2 = gn(e2, "mean", "batchNorm"), l2 = gn(n2, "variance", "batchNorm");
    return null != o2 && (i2 = gn(o2, "scale", "batchNorm")), null != r2 && (s2 = gn(r2, "offset", "batchNorm")), C(2 === u2.rank, function() {
      return "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + ".";
    }), C(2 === c2.rank || 1 === c2.rank, function() {
      return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c2.rank + ".";
    }), C(2 === l2.rank || 1 === l2.rank, function() {
      return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l2.rank + ".";
    }), null != i2 && C(2 === i2.rank || 1 === i2.rank, function() {
      return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + i2.rank + ".";
    }), null != s2 && C(2 === s2.rank || 1 === s2.rank, function() {
      return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s2.rank + ".";
    }), nc(u2, c2, l2, s2, i2, a2);
  }
  var oc = An({ batchNormalization2d_: function(t2, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = 1e-3), Qu(), rc(t2, e2, n2, a2, o2, r2);
  } });
  var ac = An({ batchNorm2d_: rc });
  function ic(t2, e2, n2, r2, o2, a2) {
    var i2, s2, u2 = gn(t2, "x", "batchNorm"), c2 = gn(e2, "mean", "batchNorm"), l2 = gn(n2, "variance", "batchNorm");
    return null != o2 && (i2 = gn(o2, "scale", "batchNorm")), null != r2 && (s2 = gn(r2, "offset", "batchNorm")), C(3 === u2.rank, function() {
      return "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + ".";
    }), C(3 === c2.rank || 1 === c2.rank, function() {
      return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c2.rank + ".";
    }), C(3 === l2.rank || 1 === l2.rank, function() {
      return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l2.rank + ".";
    }), null != i2 && C(3 === i2.rank || 1 === i2.rank, function() {
      return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + i2.rank + ".";
    }), null != s2 && C(3 === s2.rank || 1 === s2.rank, function() {
      return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s2.rank + ".";
    }), nc(u2, c2, l2, s2, i2, a2);
  }
  var sc = An({ batchNormalization3d_: function(t2, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = 1e-3), Qu(), ic(t2, e2, n2, a2, o2, r2);
  } });
  var uc = An({ batchNorm3d_: ic });
  function cc(t2, e2, n2, r2, o2, a2) {
    var i2, s2, u2 = gn(t2, "x", "batchNorm"), c2 = gn(e2, "mean", "batchNorm"), l2 = gn(n2, "variance", "batchNorm");
    return null != o2 && (i2 = gn(o2, "scale", "batchNorm")), null != r2 && (s2 = gn(r2, "offset", "batchNorm")), C(4 === u2.rank, function() {
      return "Error in batchNorm4D: x must be rank 4 but got rank " + u2.rank + ".";
    }), C(4 === c2.rank || 1 === c2.rank, function() {
      return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c2.rank + ".";
    }), C(4 === l2.rank || 1 === l2.rank, function() {
      return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l2.rank + ".";
    }), null != i2 && C(4 === i2.rank || 1 === i2.rank, function() {
      return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + i2.rank + ".";
    }), null != s2 && C(4 === s2.rank || 1 === s2.rank, function() {
      return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s2.rank + ".";
    }), nc(u2, c2, l2, s2, i2, a2);
  }
  var lc = An({ batchNormalization4d_: function(t2, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = 1e-3), Qu(), cc(t2, e2, n2, a2, o2, r2);
  } });
  var hc = An({ batchNorm4d_: cc });
  var fc = An({ broadcastTo_: function(t2, e2) {
    var n2 = gn(t2, "broadcastTo", "x"), r2 = n2.shape;
    if (e2.some(function(t3) {
      return !(t3 > 0) || t3 % 1 != 0;
    }))
      throw new Error("broadcastTo(): Invalid broadcast shape [" + e2 + "].");
    if (e2.length < n2.rank)
      throw new Error("broadcastTo(): shape.length=" + e2.length + " < input.rank=" + n2.rank + ".");
    if (e2.length > n2.rank) {
      for (var o2 = n2.shape.slice(); o2.length < e2.length; )
        o2.unshift(1);
      n2 = n2.reshape(o2);
    }
    for (var a2 = n2.shape, i2 = Array.from(e2), s2 = e2.length - 1; s2 >= 0; s2--)
      if (a2[s2] === e2[s2])
        i2[s2] = 1;
      else if (1 !== n2.shape[s2])
        throw new Error("broadcastTo(): [" + r2 + "] cannot be broadcast to [" + e2 + "].");
    var u2 = i2.map(function(t3, e3) {
      return t3 > 1 ? e3 : -1;
    }).filter(function(t3) {
      return t3 >= 0;
    });
    if (0 === u2.length)
      return n2.clone();
    var c2 = { x: n2 }, l2 = { shape: e2, inputShape: a2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.tile(n2, i2);
    }, c2, function(t3) {
      return { x: function() {
        return t3.sum(u2, true);
      } };
    }, Sr, l2);
  } });
  var dc = An({ clone_: function(t2) {
    var e2 = gn(t2, "x", "clone", null);
    return Lt.runKernelFunc(function() {
      return Lt.makeTensorFromDataId(e2.dataId, e2.shape, e2.dtype);
    }, { x: e2 }, null, Tr);
  } });
  var pc = An({ logicalAnd_: function(t2, e2) {
    var n2 = gn(t2, "a", "logicalAnd", "bool"), r2 = gn(e2, "b", "logicalAnd", "bool");
    return Pr(n2.shape, r2.shape), Lt.runKernelFunc(function(t3) {
      return t3.logicalAnd(n2, r2);
    }, { a: n2, b: r2 }, null, "LogicalAnd");
  } });
  var vc = An({ logicalNot_: function(t2) {
    var e2 = gn(t2, "x", "logicalNot", "bool");
    return Lt.runKernelFunc(function(t3) {
      return t3.logicalNot(e2);
    }, { $x: e2 });
  } });
  var gc = An({ logicalOr_: function(t2, e2) {
    var n2 = gn(t2, "a", "logicalOr", "bool"), r2 = gn(e2, "b", "logicalOr", "bool");
    return Pr(n2.shape, r2.shape), Lt.runKernelFunc(function(t3) {
      return t3.logicalOr(n2, r2);
    }, { $a: n2, $b: r2 });
  } });
  var mc = An({ logicalXor_: function(t2, e2) {
    var n2 = gn(t2, "a", "logicalXor", "bool"), r2 = gn(e2, "b", "logicalXor", "bool");
    return Pr(n2.shape, r2.shape), gc(t2, e2).logicalAnd(pc(t2, e2).logicalNot());
  } });
  var yc = An({ where_: function(t2, e2, n2) {
    var r2 = gn(e2, "a", "where"), o2 = gn(n2, "b", "where"), a2 = gn(t2, "condition", "where", "bool");
    return E(r2.shape, o2.shape, "Error in where: "), 1 === a2.rank ? C(a2.shape[0] === r2.shape[0], function() {
      return "The first dimension of `a` must match the size of `condition`.";
    }) : E(a2.shape, o2.shape, "Error in where: "), Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.select(a2, r2, o2);
      return e3([a2]), n3;
    }, { $condition: a2, $a: r2, $b: o2 }, function(t3, e3) {
      var n3 = e3[0];
      return { $condition: function() {
        return Xn(n3).toFloat();
      }, $a: function() {
        return t3.mul(n3.cast(t3.dtype));
      }, $b: function() {
        return t3.mul(n3.logicalNot().cast(t3.dtype));
      } };
    });
  } });
  var xc = function(t2) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, (e2 = gn(t2, "condition", "whereAsync", "bool")).data()];
          case 1:
            return n2 = r2.sent(), o2 = Ga(e2.shape, n2), t2 !== e2 && e2.dispose(), [2, o2];
        }
      });
    });
  };
  var bc = An({ divNoNan_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "div"), o2 = gn(e2, "b", "div");
    r2 = (n2 = Nt(r2, o2))[0], o2 = n2[1];
    var a2 = Bo(r2, o2), i2 = Xn(a2), s2 = o2.equal(i2);
    return yc(s2, i2, a2);
  } });
  var wc = An({ tile_: function(t2, e2) {
    var n2 = gn(t2, "x", "tile", null);
    C(n2.rank === e2.length, function() {
      return "Error in transpose: rank of input " + n2.rank + " must match length of reps " + e2 + ".";
    });
    var r2 = [n2], o2 = { x: n2 }, a2 = { reps: e2 };
    return Lt.runKernelFunc(function(t3, r3) {
      var o3 = t3.tile(n2, e2);
      return r3([n2]), o3;
    }, o2, null, Dr, a2, r2);
  } });
  var Cc = An({ eye_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = "float32"), null == e2 && (e2 = t2);
    for (var o2 = er([t2, e2], r2), a2 = t2 <= e2 ? t2 : e2, i2 = 0; i2 < a2; ++i2)
      o2.set(1, i2, i2);
    var s2 = o2.toTensor().as2D(t2, e2);
    if (null == n2)
      return s2;
    if (1 === n2.length)
      return wc(sr(s2, 0), [n2[0], 1, 1]);
    if (2 === n2.length)
      return wc(sr(sr(s2, 0), 0), [n2[0], n2[1], 1, 1]);
    if (3 === n2.length)
      return wc(sr(sr(sr(s2, 0), 0), 0), [n2[0], n2[1], n2[2], 1, 1]);
    throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n2.length + "D.");
  } });
  var Ec = An({ multinomial_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = false);
    var o2 = gn(t2, "logits", "multinomial"), a2 = o2.size, i2 = o2.rank;
    if (a2 < 2)
      throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + a2 + ".");
    if (i2 > 2)
      throw new Error("Rank of probabilities must be 1 or 2, but is " + i2);
    n2 = n2 || Math.random();
    var s2 = 1 === i2 ? o2.as2D(1, -1) : o2, u2 = Lt.runKernelFunc(function(t3) {
      return t3.multinomial(s2, r2, e2, n2);
    }, { logits2D: s2 });
    return 1 === i2 ? u2.as1D() : u2;
  } });
  var Rc = An({ oneHot_: function(t2, e2, n2, r2) {
    if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 0), e2 < 2)
      throw new Error("Error in oneHot: depth must be >=2, but it is " + e2);
    var o2 = gn(t2, "indices", "oneHot", "int32"), a2 = o2.shape.concat([e2]), i2 = { indices: o2 = o2.flatten() }, s2 = { depth: e2, onValue: n2, offValue: r2 };
    return Lt.runKernelFunc(function(t3, a3) {
      return a3([o2]), t3.oneHot(o2, e2, n2, r2);
    }, i2, null, Ar, s2).reshape(a2);
  } });
  var Ic = An({ pad_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = 0);
    var r2 = gn(t2, "x", "pad");
    if (0 === r2.rank)
      throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
    var o2 = { paddings: e2, constantValue: n2 }, a2 = { x: r2 };
    return Lt.runKernelFunc(function(t3, o3) {
      return o3([r2]), t3.pad(r2, e2, n2);
    }, a2, null, Nr, o2);
  } });
  var kc = An({ pad1d_: function(t2, e2, n2) {
    return void 0 === n2 && (n2 = 0), C(2 === e2.length, function() {
      return "Invalid number of paddings. Must be length of 2.";
    }), Ic(t2, [e2], n2);
  } });
  var Sc = An({ pad2d_: function(t2, e2, n2) {
    return void 0 === n2 && (n2 = 0), C(2 === e2.length && 2 === e2[0].length && 2 === e2[1].length, function() {
      return "Invalid number of paddings. Must be length of 2 each.";
    }), Ic(t2, e2, n2);
  } });
  var Ac = An({ pad3d_: function(t2, e2, n2) {
    return void 0 === n2 && (n2 = 0), C(3 === e2.length && 2 === e2[0].length && 2 === e2[1].length && 2 === e2[2].length, function() {
      return "Invalid number of paddings. Must be length of 2 each.";
    }), Ic(t2, e2, n2);
  } });
  var Tc = An({ pad4d_: function(t2, e2, n2) {
    return void 0 === n2 && (n2 = 0), C(4 === e2.length && 2 === e2[0].length && 2 === e2[1].length && 2 === e2[2].length && 2 === e2[3].length, function() {
      return "Invalid number of paddings. Must be length of 2 each.";
    }), Ic(t2, e2, n2);
  } });
  var Dc = An({ rand_: function(t2, e2, n2) {
    var r2 = k(t2), o2 = null;
    if (null == n2 || "float32" === n2)
      o2 = new Float32Array(r2);
    else if ("int32" === n2)
      o2 = new Int32Array(r2);
    else {
      if ("bool" !== n2)
        throw new Error("Unknown data type " + n2);
      o2 = new Uint8Array(r2);
    }
    for (var a2 = 0; a2 < r2; a2++)
      o2[a2] = e2();
    return Lt.makeTensor(o2, t2, n2);
  } });
  var Nc = 1e-3;
  var Fc = 0.1;
  function _c() {
    return 32 === Lt.backend.floatPrecision() ? Nc : Fc;
  }
  function Oc(t2, e2, n2) {
    var r2 = true;
    if ((V(t2) || V(e2)) && (r2 = false), V(t2) && V(e2) && (r2 = true), r2) {
      var o2 = t2.constructor.name, a2 = e2.constructor.name;
      if (o2 !== a2)
        throw new Error("Arrays are of different type. Actual: " + o2 + ". Expected: " + a2);
    }
    if (Array.isArray(t2) && Array.isArray(e2)) {
      var i2 = pn(t2), s2 = pn(e2);
      if (!S(i2, s2))
        throw new Error("Arrays have different shapes. Actual: [" + i2 + "]. Expected: [" + s2 + "]");
    }
    var u2 = V(t2) ? t2 : I(t2), c2 = V(e2) ? e2 : I(e2);
    if (u2.length !== c2.length)
      throw new Error("Arrays have different lengths actual: " + u2.length + " vs expected: " + c2.length + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
    for (var l2 = 0; l2 < c2.length; ++l2) {
      var h2 = u2[l2], f2 = c2[l2];
      if (!n2(h2, f2))
        throw new Error("Arrays differ: actual[" + l2 + "] = " + h2 + ", expected[" + l2 + "] = " + f2 + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
    }
  }
  function Mc(t2, e2, n2) {
    return !isFinite(t2) && !isFinite(e2) || !(isNaN(t2) || isNaN(e2) || Math.abs(t2 - e2) > n2);
  }
  var Bc = Object.freeze({ TEST_EPSILON_FLOAT16: Fc, expectArraysClose: function(t2, e2, n2) {
    return null == n2 && (n2 = _c()), Oc(t2, e2, function(t3, e3) {
      return Mc(t3, e3, n2);
    });
  }, testEpsilon: _c, expectPromiseToFail: function(t2, e2) {
    t2().then(function() {
      return e2.fail();
    }, function() {
      return e2();
    });
  }, expectArraysEqual: function(t2, e2) {
    var n2 = "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2 ? [e2] : e2;
    return H(t2) || H(t2[0]) || H(e2) || H(e2[0]) ? Oc(t2, n2, function(t3, e3) {
      return t3 == e3;
    }) : Oc(t2, e2, function(t3, e3) {
      return Mc(t3, e3, 0);
    });
  }, expectNumbersClose: function(t2, e2, n2) {
    if (null == n2 && (n2 = _c()), !Mc(t2, e2, n2))
      throw new Error("Numbers differ: actual === " + t2 + ", expected === " + e2);
  }, expectValuesInRange: function(t2, e2, n2) {
    for (var r2 = 0; r2 < t2.length; r2++)
      if (t2[r2] < e2 || t2[r2] > n2)
        throw new Error("Value out of range:" + t2[r2] + " low: " + e2 + ", high: " + n2);
  }, expectArrayBuffersEqual: function(t2, e2) {
    expect(new Float32Array(t2)).toEqual(new Float32Array(e2));
  } });
  var Pc = function() {
    function t2(t3, e2, n2, r2, o2) {
      this.mean = t3, this.stdDev = e2, this.dtype = n2, this.nextVal = NaN, this.truncated = r2, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
      var a2 = o2 || Math.random();
      this.random = Yu(a2.toString());
    }
    return t2.prototype.nextValue = function() {
      if (!isNaN(this.nextVal)) {
        var t3 = this.nextVal;
        return this.nextVal = NaN, t3;
      }
      for (var e2, n2, r2 = false; !r2; ) {
        var o2 = void 0, a2 = void 0, i2 = void 0;
        do {
          i2 = (o2 = 2 * this.random() - 1) * o2 + (a2 = 2 * this.random() - 1) * a2;
        } while (i2 >= 1 || 0 === i2);
        var s2 = Math.sqrt(-2 * Math.log(i2) / i2);
        e2 = this.mean + this.stdDev * o2 * s2, n2 = this.mean + this.stdDev * a2 * s2, this.truncated && !this.isValidTruncated(e2) || (r2 = true);
      }
      return this.truncated && !this.isValidTruncated(n2) || (this.nextVal = this.convertValue(n2)), this.convertValue(e2);
    }, t2.prototype.convertValue = function(t3) {
      return null == this.dtype || "float32" === this.dtype ? t3 : Math.round(t3);
    }, t2.prototype.isValidTruncated = function(t3) {
      return t3 <= this.upper && t3 >= this.lower;
    }, t2;
  }();
  var Lc = function() {
    function t2(t3, e2, n2, r2) {
      this.alpha = t3, this.beta = 1 / e2, this.dtype = n2;
      var o2 = r2 || Math.random();
      this.randu = Yu(o2.toString()), this.randn = new Pc(0, 1, n2, false, this.randu()), this.d = t3 < 1 ? t3 + 2 / 3 : t3 - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d);
    }
    return t2.prototype.nextValue = function() {
      for (var t3, e2, n2, r2, o2, a2; ; ) {
        do {
          r2 = this.randn.nextValue(), a2 = 1 + this.c * r2;
        } while (a2 <= 0);
        if (a2 *= a2 * a2, e2 = 1 - 0.331 * (t3 = r2 * r2) * t3, n2 = 0.5 * t3 + this.d * (1 - a2 + Math.log(a2)), (o2 = this.randu()) < e2 || Math.log(o2) < n2)
          break;
      }
      return a2 = 1 / this.beta * this.d * a2, this.alpha < 1 && (a2 *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(a2);
    }, t2.prototype.convertValue = function(t3) {
      return "float32" === this.dtype ? t3 : Math.round(t3);
    }, t2;
  }();
  var Wc = function() {
    function t2(t3, e2, n2, r2) {
      var o2 = this;
      if (void 0 === t3 && (t3 = 0), void 0 === e2 && (e2 = 1), this.canReturnFloat = function() {
        return null == o2.dtype || "float32" === o2.dtype;
      }, this.min = t3, this.range = e2 - t3, this.dtype = n2, null == r2 && (r2 = Math.random()), "number" == typeof r2 && (r2 = r2.toString()), !this.canReturnFloat() && this.range <= 1)
        throw new Error("The difference between " + t3 + " - " + e2 + " <= 1 and dtype is not float");
      this.random = Yu(r2);
    }
    return t2.prototype.convertValue = function(t3) {
      return this.canReturnFloat() ? t3 : Math.round(t3);
    }, t2.prototype.nextValue = function() {
      return this.convertValue(this.min + this.range * this.random());
    }, t2;
  }();
  var Uc = An({ randomGamma_: function(t2, e2, n2, r2, o2) {
    if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32"), null == n2 && (n2 = 1), null == r2 && (r2 = "float32"), "float32" !== r2 && "int32" !== r2)
      throw new Error("Unsupported data type " + r2);
    for (var a2 = new Lc(e2, n2, r2, o2), i2 = er(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
      i2.values[s2] = a2.nextValue();
    return i2.toTensor();
  } });
  var Vc = An({ randomNormal_: function(t2, e2, n2, r2, o2) {
    if (void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), null != r2 && "bool" === r2)
      throw new Error("Unsupported data type " + r2);
    for (var a2 = new Pc(e2, n2, r2, false, o2), i2 = er(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
      i2.values[s2] = a2.nextValue();
    return i2.toTensor();
  } });
  var zc = An({ randomUniform_: function(t2, e2, n2, r2, o2) {
    void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32");
    for (var a2 = er(t2, r2), i2 = new Wc(e2, n2, null, o2), s2 = 0; s2 < a2.values.length; s2++)
      a2.values[s2] = i2.nextValue();
    return a2.toTensor();
  } });
  var Gc = An({ square_: function(t2) {
    var e2 = gn(t2, "x", "square"), n2 = [e2];
    return Lt.runKernelFunc(function(t3, n3) {
      return n3([e2]), t3.square(e2);
    }, { x: e2 }, null, "Square", {}, n2, []);
  } });
  var Hc = An({ squaredDifference_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "squaredDifference"), o2 = gn(e2, "b", "squaredDifference");
    n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape);
    var a2 = { a: r2, b: o2 }, i2 = [r2, o2];
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.squaredDifference(r2, o2);
      return e3([r2, o2]), n3;
    }, a2, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1], o3 = On(2);
      return { a: function() {
        return t3.mul(n3.sub(r3).mul(o3));
      }, b: function() {
        return t3.mul(r3.sub(n3).mul(o3));
      } };
    }, Er, {}, i2, []);
  } });
  var qc = An({ truncatedNormal_: function(t2, e2, n2, r2, o2) {
    if (void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), null != r2 && "bool" === r2)
      throw new Error("Unsupported data type $ { dtype }");
    for (var a2 = new Pc(e2, n2, r2, true, o2), i2 = er(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
      i2.values[s2] = a2.nextValue();
    return i2.toTensor();
  } });
  var Kc = An({ equal_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "equal"), o2 = gn(e2, "b", "equal");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
      return t3.equal(r2, o2);
    }, { $a: r2, $b: o2 });
  } });
  var jc = An({ equalStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "equalStrict"), r2 = gn(e2, "b", "equalStrict");
    return E(n2.shape, r2.shape, "Error in equalStrict: "), n2.equal(r2);
  } });
  var Xc = An({ greater_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "greater"), o2 = gn(e2, "b", "greater");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
      return t3.greater(r2, o2);
    }, { a: r2, b: o2 }, null, "Greater");
  } });
  var Yc = An({ greaterEqual_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "greaterEqual"), o2 = gn(e2, "b", "greaterEqual");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.greaterEqual(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1];
      return { a: function() {
        return Xn(n3);
      }, b: function() {
        return Xn(r3);
      } };
    }, "GreaterEqual");
  } });
  var $c = An({ greaterEqualStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "greaterEqualStrict"), r2 = gn(e2, "b", "greaterEqualStrict");
    return E(n2.shape, r2.shape, "Error in greaterEqualStrict: "), n2.greaterEqual(r2);
  } });
  var Qc = An({ greaterStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "greaterStrict"), r2 = gn(e2, "b", "greaterStrict");
    return E(n2.shape, r2.shape, "Error in greaterStrict: "), n2.greater(r2);
  } });
  var Jc = An({ less_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "less"), o2 = gn(e2, "b", "less");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
      return t3.less(r2, o2);
    }, { a: r2, b: o2 }, null, "Less");
  } });
  var Zc = An({ lessEqual_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "lessEqual"), o2 = gn(e2, "b", "lessEqual");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.lessEqual(r2, o2);
      return e3([r2, o2]), n3;
    }, { a: r2, b: o2 }, null, "LessEqual");
  } });
  var tl = An({ lessEqualStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "lessEqualStrict"), r2 = gn(e2, "b", "lessEqualStrict");
    return E(n2.shape, r2.shape, "Error in lessEqualStrict: "), n2.lessEqual(r2);
  } });
  var el = An({ lessStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "lessStrict"), r2 = gn(e2, "b", "lessStrict");
    return E(n2.shape, r2.shape, "Error in lessStrict: "), n2.less(r2);
  } });
  var nl = An({ notEqual_: function(t2, e2) {
    var n2, r2 = gn(t2, "a", "notEqual"), o2 = gn(e2, "b", "notEqual");
    return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Pr(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
      return t3.notEqual(r2, o2);
    }, { a: r2, b: o2 }, null, "NotEqual");
  } });
  var rl = An({ notEqualStrict_: function(t2, e2) {
    var n2 = gn(t2, "a", "notEqualStrict"), r2 = gn(e2, "b", "notEqualStrict");
    return E(n2.shape, r2.shape, "Error in notEqualStrict: "), n2.notEqual(r2);
  } });
  function ol(t2, e2) {
    for (var n2 = [], r2 = t2; r2 < e2; ++r2)
      n2.push(r2);
    return n2;
  }
  function al(t2) {
    for (var e2 = [], n2 = 0; n2 < t2.length; ++n2)
      for (var r2 = 0; r2 < t2[n2].length; ++r2)
        e2.push(t2[n2][r2]);
    return e2;
  }
  var il = An({ gather_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = 0);
    var r2 = gn(t2, "x", "gather"), o2 = gn(e2, "indices", "gather", "int32");
    n2 = O(n2, r2.shape)[0];
    var a2 = function(t3, e3, n3) {
      for (var r3 = t3.shape[n3], o3 = [], a3 = 1, i2 = 1, s2 = 0; s2 < n3; s2++)
        o3.push(t3.shape[s2]), a3 *= t3.shape[s2];
      for (s2 = 0; s2 < e3.rank; s2++)
        o3.push(e3.shape[s2]);
      for (s2 = n3 + 1; s2 < t3.rank; s2++)
        o3.push(t3.shape[s2]), i2 *= t3.shape[s2];
      return { batchSize: a3, sliceSize: i2, dimSize: r3, outputShape: o3 };
    }(r2, o2, n2);
    return Lt.runKernelFunc(function(t3, e3) {
      var a3 = t3.gather(r2, o2.flatten(), n2);
      return e3([o2]), a3;
    }, { x: r2, indices: o2 }, function(t3, e3) {
      var o3 = e3[0];
      return { x: function() {
        var e4 = r2.shape, a3 = o3.size, i2 = e4.slice(0, n2), s2 = i2.length, u2 = e4.slice(n2, e4.length).slice(1), c2 = u2.length, l2 = ol(0, s2), h2 = ol(s2 + 1, s2 + 1 + c2), f2 = al([i2, [a3], u2]), d2 = t3.reshape(f2), p2 = o3.reshape([a3]), v = al([[s2], l2, h2]), g = d2.transpose(v), m2 = sl(g, p2, r2.shape[n2]), y2 = Rn(v);
        return m2 = m2.transpose(y2);
      }, indices: function() {
        return o3;
      } };
    }, "Gather", { axis: n2 }).reshape(a2.outputShape);
  } });
  var sl = An({ unsortedSegmentSum_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "unsortedSegmentSum"), o2 = gn(e2, "segmentIds", "unsortedSegmentSum", "int32");
    return C(A(n2), function() {
      return "numSegments must be of dtype int";
    }), Lt.runKernelFunc(function(t3, e3) {
      var a2 = t3.unsortedSegmentSum(r2, o2, n2);
      return e3([o2]), a2;
    }, { $x: r2 }, function(t3, e3) {
      var n3 = e3[0];
      return { $x: function() {
        return function(t4, e4) {
          for (var n4 = Eo(e4, Xn(e4)), r3 = il(t4, n4), o3 = Yc(e4, On(0, "int32")), a2 = r3.rank - o3.rank, i2 = 0; i2 < a2; ++i2)
            o3 = sr(o3, i2 + 1);
          o3 = pc(o3, zn(r3.shape, "bool"));
          var s2 = Xn(r3);
          return yc(o3, r3, s2);
        }(t3, n3);
      } };
    });
  } });
  var ul = function(t2, e2, o2) {
    return n(this, void 0, void 0, function() {
      var n2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v, g;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            for (n2 = gn(t2, "tensor", "boolMask"), a2 = gn(e2, "mask", "boolMask", "bool"), i2 = null == o2 ? 0 : o2, s2 = a2.rank, u2 = n2.shape, C(s2 > 0, function() {
              return "mask cannot be scalar";
            }), E(u2.slice(i2, i2 + s2), a2.shape, "mask's shape must match the first K dimensions of tensor's shape,"), c2 = 1, l2 = i2; l2 < i2 + s2; l2++)
              c2 *= u2[l2];
            return h2 = u2.slice(0, i2).concat([c2], u2.slice(i2 + s2)), f2 = n2.reshape(h2), d2 = a2.reshape([-1]), [4, xc(d2)];
          case 1:
            return p2 = r2.sent(), v = p2.squeeze([1]), g = il(f2, v, i2), t2 !== n2 && n2.dispose(), e2 !== a2 && a2.dispose(), v.dispose(), f2.dispose(), d2.dispose(), p2.dispose(), [2, g];
        }
      });
    });
  };
  function cl(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === a2 && (a2 = "NHWC"), C(t2.length === e2.rank, function() {
      return "Length of inShape (" + t2.length + ") and rank of dy (" + e2.rank + ") must match";
    });
    var s2 = t2, u2 = e2, c2 = false;
    3 === e2.rank && (c2 = true, u2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]), s2 = [1, t2[0], t2[1], t2[2]]), C(4 === s2.length, function() {
      return "Error in conv2dDerInput: inShape must be length 4, but got length " + s2.length + ".";
    }), C(4 === u2.rank, function() {
      return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u2.rank;
    }), C(4 === n2.rank, function() {
      return "Error in conv2dDerInput: filter must be rank 4, but got rank " + n2.rank;
    });
    var l2 = "NHWC" === a2 ? s2[3] : s2[1], h2 = "NHWC" === a2 ? u2.shape[3] : u2.shape[1];
    C(l2 === n2.shape[2], function() {
      return "Error in conv2dDerInput: depth of input (" + l2 + ") must match input depth for filter " + n2.shape[2] + ".";
    }), C(h2 === n2.shape[3], function() {
      return "Error in conv2dDerInput: depth of output (" + h2 + ") must match output depth for filter " + n2.shape[3] + ".";
    }), null != i2 && C(A(o2), function() {
      return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + o2 + ".";
    });
    var f2 = Ea(a2), d2 = pa(s2, n2.shape, r2, 1, o2, i2, false, f2), p2 = Lt.runKernelFunc(function(t3, e3) {
      var r3 = t3.conv2dDerInput(u2, n2, d2);
      return e3([n2, u2]), r3;
    }, { dy4D: u2, filter: n2 }, function(t3, e3) {
      var n3 = e3[0], s3 = e3[1];
      return { dy4D: function() {
        return dl(t3, n3, r2, o2, a2, 1, i2);
      }, filter: function() {
        return vl(t3, s3, n3.shape, r2, o2, a2, i2);
      } };
    });
    return c2 ? p2.as3D(p2.shape[1], p2.shape[2], p2.shape[3]) : p2;
  }
  function ll(t2) {
    var e2 = function(t3) {
      return "number" == typeof t3 ? [t3, t3, t3] : 2 === t3.length ? [t3[0], t3[1], 1] : t3;
    }(t2), n2 = e2[0], r2 = e2[1], o2 = e2[2];
    return 1 === n2 && 1 === r2 && 1 === o2;
  }
  function hl(t2, e2, n2, r2, o2) {
    C(t2.length === e2.rank, function() {
      return "Length of inShape (" + t2.length + ") and rank of dy (" + e2.rank + ") must match";
    });
    var a2 = t2, i2 = e2, s2 = false;
    4 === e2.rank && (s2 = true, i2 = e2.as5D(1, e2.shape[0], e2.shape[1], e2.shape[2], e2.shape[3]), a2 = [1, t2[0], t2[1], t2[2], t2[3]]);
    var u2 = a2[4], c2 = i2.shape[4];
    C(5 === a2.length, function() {
      return "Error in conv3dDerInput: inShape must be length 5, but got length " + a2.length + ".";
    }), C(5 === i2.rank, function() {
      return "Error in conv3dDerInput: dy must be rank 5, but got rank " + i2.rank;
    }), C(5 === n2.rank, function() {
      return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n2.rank;
    }), C(u2 === n2.shape[3], function() {
      return "Error in conv3dDerInput: depth of input (" + u2 + ") must match input depth for filter " + n2.shape[3] + ".";
    }), C(c2 === n2.shape[4], function() {
      return "Error in conv3dDerInput: depth of output (" + c2 + ") must match output depth for filter " + n2.shape[4] + ".";
    });
    var l2 = va(a2, n2.shape, r2, 1, o2), h2 = Lt.runKernelFunc(function(t3) {
      return t3.conv3dDerInput(i2, n2, l2);
    }, { dy5D: i2 });
    return s2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
  }
  var fl = An({ conv1d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === o2 && (o2 = "NWC"), void 0 === a2 && (a2 = 1);
    var s2 = gn(t2, "x", "conv1d"), u2 = gn(e2, "filter", "conv1d"), c2 = s2, l2 = false;
    2 === s2.rank && (l2 = true, c2 = s2.as3D(1, s2.shape[0], s2.shape[1])), C(3 === c2.rank, function() {
      return "Error in conv1d: input must be rank 3, but got rank " + c2.rank + ".";
    }), C(3 === u2.rank, function() {
      return "Error in conv1d: filter must be rank 3, but got rank " + u2.rank + ".";
    }), null != i2 && C(A(r2), function() {
      return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
    }), C(c2.shape[2] === u2.shape[1], function() {
      return "Error in conv1d: depth of input (" + c2.shape[2] + ") must match input depth for filter " + u2.shape[1] + ".";
    }), C(Ca(n2, a2), function() {
      return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n2 + " and dilation '" + a2 + "'";
    }), C("NWC" === o2, function() {
      return "Error in conv1d: got dataFormat of " + o2 + " but only NWC is currently supported.";
    });
    var h2 = u2.as4D(1, u2.shape[0], u2.shape[1], u2.shape[2]), f2 = c2.as4D(c2.shape[0], 1, c2.shape[1], c2.shape[2]), d2 = dl(f2, h2, [1, n2], r2, "NHWC", [1, a2], i2);
    return l2 ? d2.as2D(d2.shape[2], d2.shape[3]) : d2.as3D(d2.shape[0], d2.shape[2], d2.shape[3]);
  } });
  var dl = An({ conv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === o2 && (o2 = "NHWC"), void 0 === a2 && (a2 = [1, 1]);
    var s2 = gn(t2, "x", "conv2d"), u2 = gn(e2, "filter", "conv2d"), c2 = s2, l2 = false;
    3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), C(4 === c2.rank, function() {
      return "Error in conv2d: input must be rank 4, but got rank " + c2.rank + ".";
    }), C(4 === u2.rank, function() {
      return "Error in conv2d: filter must be rank 4, but got rank " + u2.rank + ".";
    }), null != i2 && C(A(r2), function() {
      return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
    });
    var h2 = "NHWC" === o2 ? c2.shape[3] : c2.shape[1];
    C(h2 === u2.shape[2], function() {
      return "Error in conv2d: depth of input (" + h2 + ") must match input depth for filter " + u2.shape[2] + ".";
    }), C(Ca(n2, a2), function() {
      return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
    });
    var f2 = Ea(o2), d2 = pa(c2.shape, u2.shape, n2, a2, r2, i2, false, f2), p2 = [u2, c2], v = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.conv2d(c2, u2, d2);
      return e3([u2, c2]), n3;
    }, { x: c2, filter: u2 }, function(t3, e3) {
      var i3 = e3, s3 = i3[0], u3 = i3[1];
      return C(wa(a2), function() {
        return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a2 + "'";
      }), { x: function() {
        return gl(u3.shape, t3, s3, n2, r2, o2);
      }, filter: function() {
        return vl(u3, t3, s3.shape, n2, r2, o2);
      } };
    }, "Conv2D", d2, p2);
    return l2 ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
  } });
  var pl = An({ conv3d_: function(t2, e2, n2, r2, o2, a2) {
    void 0 === o2 && (o2 = "NDHWC"), void 0 === a2 && (a2 = [1, 1, 1]);
    var i2 = gn(t2, "x", "conv3d"), s2 = gn(e2, "filter", "conv3d"), u2 = i2, c2 = false;
    4 === i2.rank && (c2 = true, u2 = i2.as5D(1, i2.shape[0], i2.shape[1], i2.shape[2], i2.shape[3])), C(5 === u2.rank, function() {
      return "Error in conv3d: input must be rank 5, but got rank " + u2.rank + ".";
    }), C(5 === s2.rank, function() {
      return "Error in conv3d: filter must be rank 5, but got rank " + s2.rank + ".";
    }), C(u2.shape[4] === s2.shape[3], function() {
      return "Error in conv3d: depth of input (" + u2.shape[4] + ") must match input depth for filter " + s2.shape[3] + ".";
    }), C(function(t3, e3) {
      return ll(t3) || ll(e3);
    }(n2, a2), function() {
      return "Error in conv3D: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
    }), C("NDHWC" === o2, function() {
      return "Error in conv3d: got dataFormat of " + o2 + " but only NDHWC is currently supported.";
    });
    var l2 = va(u2.shape, s2.shape, n2, a2, r2), h2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.conv3d(u2, s2, l2);
      return e3([u2, s2]), n3;
    }, { x: u2, $filter: s2 }, function(t3, e3) {
      C(ll(a2), function() {
        return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a2 + "'";
      });
      var o3 = e3[0], i3 = e3[1];
      return { x: function() {
        return hl(o3.shape, t3, i3, n2, r2);
      }, $filter: function() {
        return function(t4, e4, n3, r3, o4) {
          var a3 = t4;
          4 === t4.rank && (a3 = t4.as5D(1, t4.shape[0], t4.shape[1], t4.shape[2], t4.shape[3]));
          var i4 = e4;
          4 === i4.rank && (i4 = e4.as5D(1, e4.shape[0], e4.shape[1], e4.shape[2], e4.shape[3]));
          C(5 === a3.rank, function() {
            return "Error in conv3dDerFilter: input must be rank 5, but got shape " + a3.shape + ".";
          }), C(5 === i4.rank, function() {
            return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + i4.shape + ".";
          }), C(5 === n3.length, function() {
            return "Error in conv3dDerFilter: filterShape must be length 5, but got " + n3 + ".";
          }), C(a3.shape[4] === n3[3], function() {
            return "Error in conv3dDerFilter: depth of input " + a3.shape[4] + ") must match input depth in filter (" + n3[3] + ".";
          }), C(i4.shape[4] === n3[4], function() {
            return "Error in conv3dDerFilter: depth of dy (" + i4.shape[4] + ") must match output depth for filter (" + n3[4] + ").";
          });
          var s3 = va(a3.shape, n3, r3, 1, o4);
          return Lt.runKernelFunc(function(t5) {
            return t5.conv3dDerFilter(a3, i4, s3);
          }, { x5D: a3, dy5D: i4 });
        }(o3, t3, i3.shape, n2, r2);
      } };
    });
    return c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
  } });
  var vl = An({ conv2dDerFilter_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === a2 && (a2 = "NHWC");
    var s2 = t2;
    3 === t2.rank && (s2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
    var u2 = e2;
    3 === u2.rank && (u2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2])), C(4 === s2.rank, function() {
      return "Error in conv2dDerFilter: input must be rank 4, but got shape " + s2.shape + ".";
    }), C(4 === u2.rank, function() {
      return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u2.shape + ".";
    }), C(4 === n2.length, function() {
      return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n2 + ".";
    });
    var c2 = "NHWC" === a2 ? s2.shape[3] : s2.shape[1], l2 = "NHWC" === a2 ? u2.shape[3] : u2.shape[1];
    C(c2 === n2[2], function() {
      return "Error in conv2dDerFilter: depth of input " + c2 + ") must match input depth in filter (" + n2[2] + ".";
    }), C(l2 === n2[3], function() {
      return "Error in conv2dDerFilter: depth of dy (" + l2 + ") must match output depth for filter (" + n2[3] + ").";
    }), null != i2 && C(A(o2), function() {
      return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + o2 + ".";
    });
    var h2 = Ea(a2), f2 = pa(s2.shape, n2, r2, 1, o2, i2, false, h2);
    return Lt.runKernelFunc(function(t3) {
      return t3.conv2dDerFilter(s2, u2, f2);
    }, { x4D: s2, dy4D: u2 });
  } });
  var gl = An({ conv2dDerInput_: cl });
  var ml = An({ depthwiseConv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === o2 && (o2 = "NHWC"), void 0 === a2 && (a2 = [1, 1]);
    var s2 = gn(t2, "x", "depthwiseConv2d"), u2 = gn(e2, "filter", "depthwiseConv2d"), c2 = s2, l2 = false;
    3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), C(4 === c2.rank, function() {
      return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c2.rank + ".";
    }), C(4 === u2.rank, function() {
      return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u2.rank + ".";
    }), C(c2.shape[3] === u2.shape[2], function() {
      return "Error in depthwiseConv2d: number of input channels (" + c2.shape[3] + ") must match the inChannels dimension in filter " + u2.shape[2] + ".";
    }), null == a2 && (a2 = [1, 1]), C(Ca(n2, a2), function() {
      return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
    }), null != i2 && C(A(r2), function() {
      return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
    });
    var h2 = pa(c2.shape, u2.shape, n2, a2, r2, i2, true), f2 = [c2, u2], d2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.depthwiseConv2D(c2, u2, h2);
      return e3([c2, u2]), n3;
    }, { x: c2, filter: u2 }, function(t3, e3) {
      C(wa(a2), function() {
        return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + a2 + "'";
      });
      var n3 = e3[0], r3 = e3[1];
      return { x: function() {
        return yl(n3.shape, t3, r3, h2);
      }, filter: function() {
        return xl(n3, t3, r3.shape, h2);
      } };
    }, "DepthwiseConv2dNative", h2, f2);
    return l2 ? d2.as3D(d2.shape[1], d2.shape[2], d2.shape[3]) : d2;
  } });
  var yl = An({ depthwiseConv2dDerInput_: function(t2, e2, n2, r2) {
    var o2 = e2, a2 = false;
    3 === e2.rank && (a2 = true, o2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]));
    var i2 = Lt.runKernelFunc(function(t3) {
      return t3.depthwiseConv2DDerInput(o2, n2, r2);
    }, { dy4D: o2 });
    return a2 ? i2.as3D(i2.shape[1], i2.shape[2], i2.shape[3]) : i2;
  } });
  var xl = An({ depthwiseConv2dDerFilter_: function(t2, e2, n2, r2) {
    var o2 = t2;
    3 === t2.rank && (o2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
    var a2 = e2;
    return 3 === a2.rank && (a2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2])), Lt.runKernelFunc(function(t3) {
      return t3.depthwiseConv2DDerFilter(o2, a2, r2);
    }, { x4D: o2, dy4D: a2 });
  } });
  var bl = An({ separableConv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === a2 && (a2 = [1, 1]), void 0 === i2 && (i2 = "NHWC");
    var s2 = gn(t2, "x", "separableConv2d"), u2 = gn(e2, "depthwiseFilter", "separableConv2d"), c2 = gn(n2, "pointwiseFilter", "separableConv2d"), l2 = s2, h2 = false;
    if (3 === s2.rank && (h2 = true, l2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), "NCHW" === i2)
      throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
    C(4 === l2.rank, function() {
      return "Error in separableConv2d: input must be rank 4, but got rank " + l2.rank + ".";
    }), C(4 === u2.rank, function() {
      return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u2.rank + ".";
    }), C(4 === c2.rank, function() {
      return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u2.rank + ".";
    }), C(1 === c2.shape[0], function() {
      return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c2.shape[0] + ".";
    }), C(1 === c2.shape[1], function() {
      return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c2.shape[1] + ".";
    });
    var f2 = u2.shape[2], d2 = u2.shape[3];
    C(c2.shape[2] === f2 * d2, function() {
      return "Error in separableConv2d: the third dimension of pointwise filter must be " + f2 * d2 + ", but got " + c2.shape[2] + ".";
    });
    var p2 = ml(l2, u2, r2, o2, i2, a2), v = dl(p2, c2, 1, "valid", i2);
    return h2 ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
  } });
  var wl = An({ conv2dTranspose_: function(t2, e2, n2, r2, o2, a2) {
    return cl(n2, gn(t2, "x", "conv2dTranspose"), gn(e2, "filter", "conv2dTranspose"), r2, o2, "NHWC", a2);
  } });
  var Cl = An({ conv3dTranspose_: function(t2, e2, n2, r2, o2) {
    return hl(n2, gn(t2, "x", "conv3dTranspose"), gn(e2, "filter", "conv3dTranspose"), r2, o2);
  } });
  var El = An({ matMul_: function(t2, e2, n2, r2) {
    var o2;
    void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false);
    var a2 = gn(t2, "a", "matMul"), i2 = gn(e2, "b", "matMul");
    o2 = Nt(a2, i2), a2 = o2[0], i2 = o2[1];
    var s2 = n2 ? a2.shape[a2.rank - 2] : a2.shape[a2.rank - 1], u2 = r2 ? i2.shape[i2.rank - 1] : i2.shape[i2.rank - 2], c2 = n2 ? a2.shape[a2.rank - 1] : a2.shape[a2.rank - 2], l2 = r2 ? i2.shape[i2.rank - 2] : i2.shape[i2.rank - 1], h2 = a2.shape.slice(0, -2), f2 = i2.shape.slice(0, -2), d2 = k(h2), p2 = k(f2);
    C(a2.rank >= 2 && i2.rank >= 2 && a2.rank === i2.rank, function() {
      return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + a2.rank + " and " + i2.rank + ".";
    }), C(S(h2, f2), function() {
      return "Error in matMul: outer dimensions (" + h2 + ") and (" + f2 + ") of Tensors with shapes " + a2.shape + " and " + i2.shape + " must match.";
    }), C(s2 === u2, function() {
      return "Error in matMul: inner shapes (" + s2 + ") and (" + u2 + ") of Tensors with shapes " + a2.shape + " and " + i2.shape + " and transposeA=" + n2 + " and transposeB=" + r2 + " must match.";
    });
    var v = a2.shape.slice(0, -2).concat([c2, l2]), g = n2 ? a2.as3D(d2, s2, c2) : a2.as3D(d2, c2, s2), m2 = r2 ? i2.as3D(p2, l2, u2) : i2.as3D(p2, u2, l2), y2 = { transposeA: n2, transposeB: r2 };
    return Lt.runKernelFunc(function(t3, e3) {
      var o3 = t3.batchMatMul(g, m2, n2, r2);
      return e3([g, m2]), o3;
    }, { a: g, b: m2 }, function(t3, e3) {
      var o3 = e3, a3 = o3[0], i3 = o3[1];
      return n2 || r2 ? !n2 && r2 ? { a: function() {
        return t3.matMul(i3, false, false);
      }, b: function() {
        return t3.matMul(a3, true, false);
      } } : n2 && !r2 ? { a: function() {
        return i3.matMul(t3, false, true);
      }, b: function() {
        return a3.matMul(t3, false, false);
      } } : { a: function() {
        return i3.matMul(t3, true, true);
      }, b: function() {
        return t3.matMul(a3, true, true);
      } } : { a: function() {
        return t3.matMul(i3, false, true);
      }, b: function() {
        return a3.matMul(t3, true, false);
      } };
    }, "BatchMatMul", y2).reshape(v);
  } });
  var Rl = An({ dot_: function(t2, e2) {
    var n2 = gn(t2, "t1", "dot"), r2 = gn(e2, "t2", "dot");
    C(!(1 !== n2.rank && 2 !== n2.rank || 1 !== r2.rank && 2 !== r2.rank), function() {
      return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n2.rank + " and " + r2.rank + ".";
    });
    var o2 = 1 === n2.rank ? n2.size : n2.shape[1], a2 = 1 === r2.rank ? r2.size : r2.shape[0];
    return C(o2 === a2, function() {
      return "Error in dot: inner dimensions of inputs must match, but got " + o2 + " and " + a2 + ".";
    }), 1 === n2.rank && 1 === r2.rank ? n2.as2D(1, -1).matMul(r2.as2D(-1, 1)).asScalar() : 1 === n2.rank && 2 === r2.rank ? n2.as2D(1, -1).matMul(r2.as2D(r2.shape[0], r2.shape[1])).as1D() : 2 === n2.rank && 1 === r2.rank ? n2.matMul(r2.as2D(-1, 1)).as1D() : n2.matMul(r2.as2D(r2.shape[0], r2.shape[1]));
  } });
  var Il = An({ outerProduct_: function(t2, e2) {
    var n2 = gn(t2, "v1", "outerProduct"), r2 = gn(e2, "v2", "outerProduct");
    return C(1 === n2.rank && 1 === r2.rank, function() {
      return "Error in outerProduct: inputs must be rank 1, but got ranks " + n2.rank + " and " + r2.rank + ".";
    }), n2.as2D(-1, 1).matMul(r2.as2D(1, -1));
  } });
  var kl = An({ reverse_: function(t2, e2) {
    var n2 = gn(t2, "x", "reverse");
    if (0 === n2.rank)
      return n2.clone();
    var r2 = O(e2, n2.shape);
    return Lt.runKernelFunc(function(t3) {
      return t3.reverse(n2, r2);
    }, { $x: n2 }, function(t3) {
      return { $x: function() {
        return t3.reverse(r2);
      } };
    }).reshapeAs(n2);
  } });
  var Sl = An({ reverse1d_: function(t2) {
    var e2 = gn(t2, "x", "reverse");
    return C(1 === e2.rank, function() {
      return "Error in reverse1D: x must be rank 1 but got rank " + e2.rank + ".";
    }), kl(e2, 0);
  } });
  var Al = An({ reverse2d_: function(t2, e2) {
    var n2 = gn(t2, "x", "reverse");
    return C(2 === n2.rank, function() {
      return "Error in reverse2D: x must be rank 2 but got rank " + n2.rank + ".";
    }), kl(n2, e2);
  } });
  var Tl = An({ reverse3d_: function(t2, e2) {
    var n2 = gn(t2, "x", "reverse");
    return C(3 === n2.rank, function() {
      return "Error in reverse3D: x must be rank 3 but got rank " + n2.rank + ".";
    }), kl(n2, e2);
  } });
  var Dl = An({ reverse4d_: function(t2, e2) {
    var n2 = gn(t2, "x", "reverse");
    return C(4 === n2.rank, function() {
      return "Error in reverse4D: x must be rank 4 but got rank " + n2.rank + ".";
    }), kl(n2, e2);
  } });
  function Nl(t2, e2, n2, r2, o2, a2) {
    var i2 = gn(t2, "x", "maxPool"), s2 = i2, u2 = false;
    3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), null == r2 && (r2 = [1, 1]), C(4 === s2.rank, function() {
      return "Error in maxPool: input must be rank 4 but got rank " + s2.rank + ".";
    }), C(Ca(n2, r2), function() {
      return "Error in maxPool: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + r2 + "'";
    }), null != a2 && C(A(o2), function() {
      return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + o2 + ".";
    });
    var c2 = fa(s2.shape, e2, n2, r2, o2, a2);
    if (1 === c2.filterWidth && 1 === c2.filterHeight && S(c2.inShape, c2.outShape))
      return i2.clone();
    var l2 = [s2], h2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.maxPool(s2, c2);
      return e3([s2, n3]), n3;
    }, { x: s2 }, function(t3, a3) {
      var i3 = a3[0], s3 = a3[1];
      return { x: function() {
        return function(t4, e3, n3, r3, o3, a4, i4, s4) {
          var u3 = gn(t4, "dy", "maxPoolBackprop"), c3 = gn(e3, "input", "maxPoolBackprop"), l3 = gn(n3, "output", "maxPoolBackprop");
          C(c3.rank === u3.rank, function() {
            return "Rank of input (" + c3.rank + ") does not match rank of dy (" + u3.rank + ")";
          }), null == a4 && (a4 = [1, 1]);
          C(Ca(o3, a4), function() {
            return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + o3 + " and dilations '" + a4 + "'";
          }), C(4 === u3.rank, function() {
            return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + u3.rank + ".";
          }), C(4 === c3.rank, function() {
            return "Error in maxPoolBackprop: input must be rank 4 but got rank " + c3.rank + ".";
          }), null != s4 && C(A(i4), function() {
            return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + s4 + " but got pad " + i4 + ".";
          });
          var h3 = fa(c3.shape, r3, o3, a4, i4, s4);
          return Lt.runKernelFunc(function(t5) {
            return t5.maxPoolBackprop(u3, c3, l3, h3);
          }, { $dy: u3, $input: c3 });
        }(t3, i3, s3, e2, n2, r2, o2);
      } };
    }, "MaxPool", c2, l2);
    return u2 ? h2.as3D(h2.shape[1], h2.shape[2], h2.shape[3]) : h2;
  }
  function Fl(t2, e2, n2, r2, o2, a2) {
    var i2 = gn(t2, "x", "avgPool", "float32");
    null == r2 && (r2 = [1, 1]), C(Ca(n2, r2), function() {
      return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + r2 + "'";
    });
    var s2 = i2, u2 = false;
    3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), C(4 === s2.rank, function() {
      return "Error in avgPool: x must be rank 4 but got rank " + s2.rank + ".";
    }), null != a2 && C(A(o2), function() {
      return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + o2 + ".";
    });
    var c2 = fa(s2.shape, e2, n2, r2, o2, a2);
    if (1 === c2.filterWidth && 1 === c2.filterHeight && S(c2.inShape, c2.outShape))
      return i2.clone();
    var l2 = Lt.runKernelFunc(function(t3) {
      return t3.avgPool(s2, c2);
    }, { x: s2 }, function(t3) {
      return { x: function() {
        return function(t4, e3, n3, r3, o3, a3) {
          var i3 = gn(t4, "dy", "avgPoolBackprop"), s3 = gn(e3, "input", "avgPoolBackprop");
          C(s3.rank === i3.rank, function() {
            return "Rank of input (" + s3.rank + ") does not match rank of dy (" + i3.rank + ")";
          }), null == o3 && (o3 = [1, 1]);
          C(Ca(r3, o3), function() {
            return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + r3 + " and dilations '" + o3 + "'";
          });
          var u3 = s3, c3 = i3, l3 = false;
          3 === s3.rank && (l3 = true, u3 = s3.as4D(1, s3.shape[0], s3.shape[1], s3.shape[2]), c3 = i3.as4D(1, i3.shape[0], i3.shape[1], i3.shape[2]));
          C(4 === c3.rank, function() {
            return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c3.rank + ".";
          }), C(4 === u3.rank, function() {
            return "Error in avgPoolBackprop: input must be rank 4 but got rank " + u3.rank + ".";
          });
          var h2 = fa(u3.shape, n3, r3, o3, a3), f2 = Lt.runKernelFunc(function(t5) {
            return t5.avgPoolBackprop(c3, u3, h2);
          }, { dy4D: c3, input4D: u3 });
          if (l3)
            return f2.as3D(f2.shape[1], f2.shape[2], f2.shape[3]);
          return f2;
        }(t3, s2, e2, n2, r2, o2);
      } };
    }, "AvgPool", c2);
    return l2 = l2.cast(i2.dtype), u2 ? l2.as3D(l2.shape[1], l2.shape[2], l2.shape[3]) : l2;
  }
  var _l = An({ maxPool_: function(t2, e2, n2, r2, o2) {
    return Nl(t2, e2, n2, 1, r2, o2);
  } });
  var Ol = An({ avgPool_: function(t2, e2, n2, r2, o2) {
    return Fl(t2, e2, n2, 1, r2, o2);
  } });
  var Ml = An({ pool_: function(t2, e2, n2, r2, o2, a2) {
    null == o2 && (o2 = [1, 1]), null == a2 && (a2 = 1), 0 === r2 && (r2 = "valid");
    var i2 = gn(t2, "x", "maxPool"), s2 = i2, u2 = false;
    3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), C(Ca(a2, o2), function() {
      return "Error in pool: Either strides or dilations must be 1. Got strides " + a2 + " and dilations '" + o2 + "'";
    });
    var c2, l2 = fa(s2.shape, e2, a2, o2, r2), h2 = [l2.dilationHeight, l2.dilationWidth];
    c2 = "same" === r2 ? function(t3, e3) {
      var n3 = t3.map(function(t4, n4) {
        return t4 + (t4 - 1) * (e3[n4] - 1);
      }).map(function(t4) {
        return t4 - 1;
      }), r3 = n3.map(function(t4) {
        return Math.floor(t4 / 2);
      }), o3 = n3.map(function(t4, e4) {
        return t4 - r3[e4];
      });
      return n3.map(function(t4, e4) {
        return [r3[e4], o3[e4]];
      });
    }([l2.filterHeight, l2.filterWidth], h2) : [[0, 0], [0, 0]];
    var f2 = 1 === h2[0] && 1 === h2[1], d2 = function(t3, e3, n3) {
      var r3 = n3.map(function(t4) {
        return t4[0];
      }), o3 = n3.map(function(t4) {
        return t4[1];
      }), a3 = t3.concat(r3, o3), i3 = e3.map(function(t4, e4) {
        return (t4 - a3[e4] % t4) % t4;
      }), s3 = o3.map(function(t4, e4) {
        return t4 + i3[e4];
      }), u3 = e3.map(function(t4, e4) {
        return [r3[e4], s3[e4]];
      }), c3 = e3.map(function(t4, e4) {
        return [0, i3[e4]];
      });
      return [u3, c3];
    }([l2.inHeight, l2.inWidth], h2, c2), p2 = d2[0], v = d2[1], g = f2 ? r2 : "valid", m2 = f2 ? s2 : cr(s2, h2, p2), y2 = ("avg" === n2 ? function() {
      return Fl(m2, e2, a2, 1, g);
    } : function() {
      return Nl(m2, e2, a2, 1, g);
    })(), x2 = f2 ? y2 : rr(y2, h2, v);
    return u2 ? x2.as3D(x2.shape[1], x2.shape[2], x2.shape[3]) : x2;
  } });
  var Bl = An({ maxPool3d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === a2 && (a2 = "NDHWC");
    var s2 = gn(t2, "x", "maxPool3d"), u2 = s2, c2 = false;
    4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == i2 && (i2 = [1, 1, 1]), C(5 === u2.rank, function() {
      return "Error in maxPool3d: x must be rank 5 but got rank " + u2.rank + ".";
    }), C("NDHWC" === a2, function() {
      return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + a2;
    }), C(Ca(n2, i2), function() {
      return "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + i2 + "'";
    }), null != o2 && C(A(r2), function() {
      return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + r2 + ".";
    });
    var l2 = da(u2.shape, e2, n2, i2, r2, o2, a2), h2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.maxPool3d(u2, l2);
      return e3([u2, n3]), n3;
    }, { x: u2 }, function(t3, a3) {
      var s3 = a3[0], u3 = a3[1];
      return { x: function() {
        return function(t4, e3, n3, r3, o3, a4, i3, s4) {
          var u4 = gn(t4, "dy", "maxPool3dBackprop"), c3 = gn(e3, "input", "maxPool3dBackprop"), l3 = gn(n3, "output", "maxPool3dBackprop"), h3 = u4, f2 = c3, d2 = l3, p2 = false;
          4 === c3.rank && (p2 = true, h3 = u4.as5D(1, u4.shape[0], u4.shape[1], u4.shape[2], u4.shape[3]), f2 = c3.as5D(1, c3.shape[0], c3.shape[1], c3.shape[2], c3.shape[3]), d2 = l3.as5D(1, l3.shape[0], l3.shape[1], l3.shape[2], l3.shape[3]));
          C(5 === h3.rank, function() {
            return "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + h3.rank + ".";
          }), C(5 === f2.rank, function() {
            return "Error in maxPool3dBackprop: input must be rank 5 but got rank " + f2.rank + ".";
          }), C(5 === d2.rank, function() {
            return "Error in maxPool3dBackprop: output must be rank 5 but got rank " + d2.rank + ".";
          }), null == a4 && (a4 = [1, 1, 1]);
          C(Ca(o3, a4), function() {
            return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + o3 + " and dilations '" + a4 + "'";
          }), null != s4 && C(A(i3), function() {
            return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + s4 + " but got pad " + i3 + ".";
          });
          var v = da(f2.shape, r3, o3, a4, i3, s4), g = Lt.runKernelFunc(function(t5) {
            return t5.maxPool3dBackprop(h3, f2, d2, v);
          }, { dy5D: h3, input5D: f2 });
          if (p2)
            return g.as4D(g.shape[1], g.shape[2], g.shape[3], g.shape[4]);
          return g;
        }(t3, s3, u3, e2, n2, i2, r2, o2);
      } };
    });
    return c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
  } });
  var Pl = An({ avgPool3d_: function(t2, e2, n2, r2, o2, a2, i2) {
    void 0 === a2 && (a2 = "NDHWC");
    var s2 = gn(t2, "x", "avgPool3d", "float32"), u2 = s2, c2 = false;
    4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == i2 && (i2 = [1, 1, 1]), C(5 === u2.rank, function() {
      return "Error in avgPool3d: x must be rank 5 but got rank " + u2.rank + ".";
    }), C("NDHWC" === a2, function() {
      return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + a2;
    }), C(Ca(n2, i2), function() {
      return "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + i2 + "'";
    }), null != o2 && C(A(r2), function() {
      return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + r2 + ".";
    });
    var l2 = da(u2.shape, e2, n2, i2, r2, o2, a2), h2 = Lt.runKernelFunc(function(t3) {
      return t3.avgPool3d(u2, l2);
    }, { x: u2 }, function(t3) {
      return { x: function() {
        return function(t4, e3, n3, r3, o3, a3, i3) {
          var s3 = gn(t4, "dy", "avgPool3dBackprop"), u3 = gn(e3, "input", "avgPool3dBackprop"), c3 = s3, l3 = u3, h3 = false;
          4 === u3.rank && (h3 = true, c3 = s3.as5D(1, s3.shape[0], s3.shape[1], s3.shape[2], s3.shape[3]), l3 = u3.as5D(1, u3.shape[0], u3.shape[1], u3.shape[2], u3.shape[3]));
          C(5 === c3.rank, function() {
            return "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + c3.rank + ".";
          }), C(5 === l3.rank, function() {
            return "Error in avgPool3dBackprop: input must be rank 5 but got rank " + l3.rank + ".";
          }), null == o3 && (o3 = [1, 1, 1]);
          C(Ca(r3, o3), function() {
            return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + r3 + " and dilations '" + o3 + "'";
          }), null != i3 && C(A(a3), function() {
            return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + i3 + " but got pad " + a3 + ".";
          });
          var f2 = da(l3.shape, n3, r3, o3, a3, i3), d2 = Lt.runKernelFunc(function(t5) {
            return t5.avgPool3dBackprop(c3, l3, f2);
          }, { dy5D: c3, input5D: l3 });
          if (h3)
            return d2.as4D(d2.shape[1], d2.shape[2], d2.shape[3], d2.shape[4]);
          return d2;
        }(t3, u2, e2, n2, i2, r2, o2);
      } };
    });
    return h2 = h2.cast(u2.dtype), c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
  } });
  var Ll = An({ maxPoolWithArgmax_: function(t2, e2, n2, r2, o2) {
    void 0 === o2 && (o2 = false);
    var a2 = gn(t2, "x", "maxPoolWithArgmax"), i2 = { filterSize: e2, strides: n2, pad: r2, includeBatchInIndex: o2 }, s2 = Lt.runKernel("MaxPoolWithArgmax", { x: a2 }, i2);
    return { result: s2[0], indexes: s2[1] };
  } });
  var Wl = An({ slice_: function(t2, e2, n2) {
    var r2, o2, a2 = gn(t2, "x", "slice");
    if (0 === a2.rank)
      throw new Error("Slicing scalar is not possible");
    (r2 = "number" == typeof e2 ? [e2].concat(new Array(a2.rank - 1).fill(0)) : e2.length < a2.rank ? e2.concat(new Array(a2.rank - e2.length).fill(0)) : e2.slice()).forEach(function(t3) {
      C(-1 !== t3, function() {
        return "slice() does not support negative begin indexing.";
      });
    }), o2 = (o2 = null == n2 ? new Array(a2.rank).fill(-1) : "number" == typeof n2 ? [n2].concat(new Array(a2.rank - 1).fill(-1)) : n2.length < a2.rank ? n2.concat(new Array(a2.rank - n2.length).fill(-1)) : n2).map(function(t3, e3) {
      return t3 >= 0 ? t3 : (C(-1 === t3, function() {
        return "Negative size values should be exactly -1 but got " + t3 + " for the slice() size at index " + e3 + ".";
      }), a2.shape[e3] - r2[e3]);
    }), qo(a2, r2, o2);
    var i2 = a2.shape, s2 = { begin: r2, size: o2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.slice(a2, r2, o2);
    }, { x: a2 }, function(t3) {
      for (var e3 = [], n3 = 0; n3 < t3.rank; n3++)
        e3.push([r2[n3], i2[n3] - r2[n3] - o2[n3]]);
      return { x: function() {
        return Ic(t3, e3);
      } };
    }, "Slice", s2);
  } });
  var Ul = An({ slice1d_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "slice1d");
    return C(1 === r2.rank, function() {
      return "slice1d expects a rank-1 tensor, but got a rank-" + r2.rank + " tensor";
    }), Wl(r2, [e2], [n2]);
  } });
  var Vl = An({ slice2d_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "slice2d");
    return C(2 === r2.rank, function() {
      return "slice2d expects a rank-2 tensor, but got a rank-" + r2.rank + " tensor";
    }), Wl(r2, e2, n2);
  } });
  var zl = An({ slice3d_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "slice3d");
    return C(3 === r2.rank, function() {
      return "slice3d expects a rank-3 tensor, but got a rank-" + r2.rank + " tensor";
    }), Wl(r2, e2, n2);
  } });
  var Gl = An({ slice4d_: function(t2, e2, n2) {
    var r2 = gn(t2, "x", "slice4d");
    return C(4 === r2.rank, function() {
      return "slice4d expects a rank-4 tensor, but got a rank-" + r2.rank + " tensor";
    }), Wl(r2, e2, n2);
  } });
  function Hl(t2, e2, n2, r2, o2) {
    return e2.rank < n2.rank && (e2 = e2.reshape(wn(e2.shape, r2))), t2.rank < n2.rank && (t2 = t2.reshape(wn(t2.shape, r2))), { x: function() {
      var r3 = t2.mul(n2.equal(e2).cast(t2.dtype));
      return null == o2 ? r3 : r3.transpose(o2);
    } };
  }
  var ql = An({ all_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "all", "bool"), o2 = O(e2, r2.shape), a2 = o2, i2 = En(a2, r2.rank);
    null != i2 && (r2 = r2.transpose(i2), a2 = In(a2.length, r2.rank));
    var s2 = Lt.runKernelFunc(function(t3) {
      return t3.all(r2, a2);
    }, { $x: r2 });
    if (n2) {
      var u2 = wn(s2.shape, o2);
      return s2.reshape(u2);
    }
    return s2;
  } });
  var Kl = An({ any_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "any", "bool"), o2 = O(e2, r2.shape), a2 = o2, i2 = En(a2, r2.rank);
    null != i2 && (r2 = r2.transpose(i2), a2 = In(a2.length, r2.rank));
    var s2 = Lt.runKernelFunc(function(t3) {
      return t3.any(r2, a2);
    }, { $x: r2 });
    if (n2) {
      var u2 = wn(s2.shape, o2);
      return s2.reshape(u2);
    }
    return s2;
  } });
  var jl = An({ argMax_: function(t2, e2) {
    void 0 === e2 && (e2 = 0);
    var n2 = gn(t2, "x", "argMax");
    null == e2 && (e2 = 0);
    var r2 = O(e2, n2.shape), o2 = En(r2, n2.rank);
    null != o2 && (n2 = n2.transpose(o2), r2 = In(r2.length, n2.rank));
    var a2 = { axis: r2[0] }, i2 = [n2];
    return Lt.runKernelFunc(function(t3, e3) {
      var o3 = t3.argMax(n2, r2[0]);
      return e3([n2]), o3;
    }, { x: n2 }, function(t3, e3) {
      var n3 = e3[0];
      return { x: function() {
        return Xn(n3);
      } };
    }, "ArgMax", a2, i2);
  } });
  var Xl = An({ argMin_: function(t2, e2) {
    void 0 === e2 && (e2 = 0);
    var n2 = gn(t2, "x", "argMin");
    null == e2 && (e2 = 0);
    var r2 = O(e2, n2.shape), o2 = En(r2, n2.rank);
    return null != o2 && (n2 = n2.transpose(o2), r2 = In(r2.length, n2.rank)), Lt.runKernelFunc(function(t3, e3) {
      var o3 = t3.argMin(n2, r2[0]);
      return e3([n2]), o3;
    }, { $x: n2 }, function(t3, e3) {
      var n3 = e3[0];
      return { $x: function() {
        return Xn(n3);
      } };
    });
  } });
  var Yl = An({ logSumExp_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "logSumExp"), o2 = O(e2, r2.shape), a2 = r2.max(o2, true), i2 = r2.sub(a2).exp().sum(o2).log(), s2 = a2.reshape(i2.shape).add(i2);
    if (n2) {
      var u2 = wn(s2.shape, o2);
      return s2.reshape(u2);
    }
    return s2;
  } });
  var $l = An({ max_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "max"), o2 = r2, a2 = O(e2, r2.shape), i2 = a2, s2 = En(i2, r2.rank);
    null != s2 && (r2 = r2.transpose(s2), i2 = In(i2.length, r2.rank));
    var u2 = [r2], c2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.max(r2, i2);
      return e3([o2, n3]), n3;
    }, { x: r2 }, function(t3, e3) {
      return Hl(t3, e3[1], e3[0], a2, s2);
    }, "Max", { axes: i2 }, u2, [true]);
    if (n2) {
      var l2 = wn(c2.shape, a2);
      c2 = c2.reshape(l2);
    }
    return c2;
  } });
  var Ql = An({ mean_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "mean"), o2 = O(e2, r2.shape), a2 = k(bn(r2.shape, o2)[1]);
    return oa(function(t3) {
      var r3 = On(a2);
      return { value: (r3.dtype === t3.dtype ? t3 : t3.cast(r3.dtype)).div(r3).sum(e2, n2), gradFunc: function(e3) {
        var n3 = t3.shape.slice();
        return o2.forEach(function(t4) {
          n3[t4] = 1;
        }), e3.reshape(n3).mul(zn(t3.shape, "float32")).div(a2);
      } };
    })(r2);
  } });
  var Jl = An({ min_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "min"), o2 = r2, a2 = O(e2, r2.shape), i2 = a2, s2 = En(i2, r2.rank);
    null != s2 && (r2 = r2.transpose(s2), i2 = In(i2.length, r2.rank));
    var u2 = [r2], c2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.min(r2, i2);
      return e3([o2, n3]), n3;
    }, { x: r2 }, function(t3, e3) {
      return Hl(t3, e3[1], e3[0], a2, s2);
    }, "Min", { axes: i2 }, u2, [true]);
    if (n2) {
      var l2 = wn(c2.shape, a2);
      c2 = c2.reshape(l2);
    }
    return c2;
  } });
  var Zl = An({ moments_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = O(e2, (t2 = gn(t2, "x", "moments")).shape), o2 = t2.mean(r2, n2), a2 = o2.shape;
    n2 || (a2 = wn(o2.shape, r2));
    var i2 = t2.toFloat().sub(o2.reshape(a2)).square();
    return { mean: o2, variance: i2.mean(r2, n2) };
  } });
  var th = An({ sum_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "sum");
    "bool" === r2.dtype && (r2 = r2.toInt());
    var o2 = O(e2, r2.shape);
    return oa(function(t3) {
      var e3 = En(o2, t3.rank), r3 = o2, a2 = t3;
      null != e3 && (a2 = t3.transpose(e3), r3 = In(r3.length, t3.rank));
      var i2 = function(e4) {
        var n3 = t3.shape.slice();
        return o2.forEach(function(t4) {
          n3[t4] = 1;
        }), e4.reshape(n3).mul(zn(t3.shape, "float32"));
      }, s2 = { axes: r3 }, u2 = Lt.runKernelFunc(function(t4) {
        return t4.sum(a2, r3);
      }, { x: a2 }, function(t4) {
        return { x: function() {
          return i2(t4);
        } };
      }, "Sum", s2);
      if (n2) {
        var c2 = wn(u2.shape, o2);
        u2 = u2.reshape(c2);
      }
      return { value: u2, gradFunc: i2 };
    })(r2);
  } });
  var eh = An({ prod_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "x", "prod");
    "bool" === r2.dtype && (r2 = r2.toInt());
    var o2 = O(e2, r2.shape), a2 = En(o2, r2.rank), i2 = o2, s2 = r2;
    null != a2 && (s2 = r2.transpose(a2), i2 = In(i2.length, r2.rank));
    var u2 = Lt.runKernelFunc(function(t3) {
      return t3.prod(s2, i2);
    }, { permutedX: s2 });
    if (n2) {
      var c2 = wn(u2.shape, o2);
      u2 = u2.reshape(c2);
    }
    return u2;
  } });
  var nh = An({ elu_: function(t2) {
    var e2 = gn(t2, "x", "elu");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.elu(e2);
      return n2([r2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        return Lt.runKernelFunc(function(e4) {
          return e4.eluDer(t3, n2);
        }, { dy: t3, y: n2 });
      } };
    });
  } });
  var rh = An({ leakyRelu_: function(t2, e2) {
    void 0 === e2 && (e2 = 0.2);
    var n2 = gn(t2, "x", "leakyRelu");
    return Eo(On(e2).mul(n2), n2);
  } });
  var oh = An({ prelu_: function(t2, e2) {
    var n2 = gn(t2, "x", "prelu"), r2 = gn(e2, "alpha", "prelu");
    return Lt.runKernelFunc(function(t3, e3) {
      var o2 = t3.prelu(n2, r2);
      return e3([n2, r2]), o2;
    }, { x: n2, alpha: r2 }, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1], o2 = n3.greater(0);
      return { x: function() {
        return yc(o2, t3, t3.mul(r3));
      }, alpha: function() {
        var e4 = yc(o2, Xn(t3), t3.mul(n3)), a2 = Br(r3.shape, t3.shape);
        return a2.length > 0 && (e4 = e4.sum(a2)), e4.reshape(r3.shape);
      } };
    }, "Prelu");
  } });
  var ah = An({ relu_: function(t2) {
    var e2 = gn(t2, "x", "relu");
    return "bool" === e2.dtype ? e2.toInt() : Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.relu(e2);
      return n2([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { x: function() {
        return t3.mulStrict(n2.step().toFloat());
      } };
    }, "Relu");
  } });
  var ih = An({ relu6_: function(t2) {
    var e2 = gn(t2, "x", "relu6");
    return "bool" === e2.dtype ? e2.toInt() : Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.relu6(e2);
      return n2([e2]), r2;
    }, { x: e2 }, function(t3, e3) {
      var n2 = e3[0], r2 = n2.lessEqual(6).mul(n2.step());
      return { x: function() {
        return t3.mulStrict(r2.toFloat());
      } };
    }, "Relu6");
  } });
  var sh = An({ selu_: function(t2) {
    var e2 = gn(t2, "x", "selu");
    return Lt.runKernelFunc(function(t3, n2) {
      var r2 = t3.selu(e2);
      return n2([e2]), r2;
    }, { $x: e2 }, function(t3, e3) {
      var n2 = e3[0];
      return { $x: function() {
        var e4 = n2.greater(On(0)), r2 = On(su), o2 = On(uu), a2 = t3.mul(o2), i2 = t3.mul(r2).mul(n2.toFloat().exp());
        return yc(e4, a2, i2);
      } };
    });
  } });
  var uh = An({ localResponseNormalization_: function(t2, e2, n2, r2, o2) {
    void 0 === e2 && (e2 = 5), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 1), void 0 === o2 && (o2 = 0.5);
    var a2 = gn(t2, "x", "localResponseNormalization");
    C(4 === a2.rank || 3 === a2.rank, function() {
      return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + a2.rank + ".";
    }), C(A(e2), function() {
      return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + e2 + ".";
    });
    var i2 = a2, s2 = false;
    3 === a2.rank && (s2 = true, i2 = a2.as4D(1, a2.shape[0], a2.shape[1], a2.shape[2]));
    var u2 = Lt.runKernelFunc(function(t3, a3) {
      var s3 = t3.localResponseNormalization4D(i2, e2, n2, r2, o2);
      return a3([i2, s3]), s3;
    }, { x4D: i2 }, function(t3, a3) {
      var i3 = a3[0], s3 = a3[1];
      return { x4D: function() {
        return Lt.runKernelFunc(function(a4) {
          return a4.LRNGrad(t3, i3, s3, e2, n2, r2, o2);
        }, {});
      } };
    });
    return s2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
  } });
  var ch = An({ norm_: function(t2, e2, n2, r2) {
    void 0 === e2 && (e2 = "euclidean"), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
    var o2 = function t3(e3, n3, r3) {
      void 0 === r3 && (r3 = null);
      if (0 === e3.rank)
        return e3.abs();
      if (1 !== e3.rank && null === r3)
        return t3(e3.reshape([-1]), n3, r3);
      if (1 === e3.rank || "number" == typeof r3 || Array.isArray(r3) && 1 === r3.length) {
        if (1 === n3)
          return e3.abs().sum(r3);
        if (n3 === 1 / 0)
          return e3.abs().max(r3);
        if (n3 === -1 / 0)
          return e3.abs().min(r3);
        if ("euclidean" === n3 || 2 === n3)
          return e3.abs().pow(On(2, "int32")).sum(r3).sqrt();
        throw new Error("Error in norm: invalid ord value: " + n3);
      }
      if (Array.isArray(r3) && 2 === r3.length) {
        if (1 === n3)
          return e3.abs().sum(r3[0]).max(r3[1] - 1);
        if (n3 === 1 / 0)
          return e3.abs().sum(r3[1]).max(r3[0]);
        if (n3 === -1 / 0)
          return e3.abs().sum(r3[1]).min(r3[0]);
        if ("fro" === n3 || "euclidean" === n3)
          return e3.square().sum(r3).sqrt();
        throw new Error("Error in norm: invalid ord value: " + n3);
      }
      throw new Error("Error in norm: invalid axis: " + r3);
    }(t2 = gn(t2, "x", "norm"), e2, n2), a2 = o2.shape;
    if (r2) {
      var i2 = O(n2, t2.shape);
      a2 = wn(o2.shape, i2);
    }
    return o2.reshape(a2);
  } });
  var lh = An({ basicLSTMCell_: function(t2, e2, n2, r2, o2, a2) {
    var i2 = gn(t2, "forgetBias", "basicLSTMCell"), s2 = gn(e2, "lstmKernel", "basicLSTMCell"), u2 = gn(n2, "lstmBias", "basicLSTMCell"), c2 = gn(r2, "data", "basicLSTMCell"), l2 = gn(o2, "c", "basicLSTMCell"), h2 = gn(a2, "h", "basicLSTMCell"), f2 = c2.concat(h2, 1).matMul(s2).add(u2), d2 = f2.shape[0], p2 = f2.shape[1] / 4, v = [d2, p2], g = f2.slice([0, 0], v), m2 = f2.slice([0, p2], v), y2 = f2.slice([0, 2 * p2], v), x2 = f2.slice([0, 3 * p2], v), b2 = g.sigmoid().mulStrict(m2.tanh()).addStrict(l2.mulStrict(i2.add(y2).sigmoid())), w2 = b2.tanh().mulStrict(x2.sigmoid());
    return [b2, w2];
  } });
  var hh = An({ multiRNNCell_: function(t2, e2, n2, r2) {
    for (var o2 = gn(e2, "data", "multiRNNCell"), a2 = mn(n2, "c", "multiRNNCell"), i2 = mn(r2, "h", "multiRNNCell"), s2 = o2, u2 = [], c2 = 0; c2 < t2.length; c2++) {
      var l2 = t2[c2](s2, a2[c2], i2[c2]);
      u2.push(l2[0]), u2.push(l2[1]), s2 = l2[1];
    }
    var h2 = [], f2 = [];
    for (c2 = 0; c2 < u2.length; c2 += 2)
      h2.push(u2[c2]), f2.push(u2[c2 + 1]);
    return [h2, f2];
  } });
  var fh = An({ movingAverage_: function(t2, e2, n2, r2, o2) {
    void 0 === o2 && (o2 = true);
    var a2 = gn(t2, "v", "movingAverage"), i2 = gn(e2, "x", "movingAverage"), s2 = gn(n2, "decay", "movingAverage");
    Ft(a2, i2), C(S(a2.shape, i2.shape), function() {
      return "Shape mismatch in v and x";
    });
    var u2 = On(1), c2 = u2.sub(s2), l2 = i2.sub(a2).mul(c2);
    if (o2) {
      C(null != r2, function() {
        return "When using zeroDebias: true, step is required.";
      });
      var h2 = gn(r2, "step", "movingAverage");
      l2 = l2.div(u2.sub(No(s2, h2)));
    }
    return a2.add(l2);
  } });
  var dh = An({ stridedSlice_: function(t2, e2, n2, r2, o2, a2, i2, s2, u2) {
    if (void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === i2 && (i2 = 0), void 0 === s2 && (s2 = 0), void 0 === u2 && (u2 = 0), null == r2 && (r2 = new Array(e2.length)), 0 !== i2)
      throw new Error("ellipsis mask is not yet supported");
    var c2 = gn(t2, "x", "stridedSlice"), l2 = Ko(s2), h2 = c2.shape.slice();
    l2.forEach(function(t3) {
      e2[t3] = 0, n2[t3] = 1, h2.splice(t3, 0, 1);
    }), c2 = c2.reshape(h2);
    for (var f2 = 0; f2 < c2.rank; f2++)
      e2[f2] = Xo(o2, e2, r2, c2.shape, f2), n2[f2] = Yo(a2, n2, r2, c2.shape, f2), r2[f2] = r2[f2] || 1;
    var d2 = Ko(u2);
    d2.forEach(function(t3) {
      n2[t3] = e2[t3] + 1, r2[t3] = 1;
    });
    var p2 = jo(e2, n2, r2), v = p2.filter(function(t3, e3) {
      return -1 === d2.indexOf(e3);
    });
    return r2.every(function(t3) {
      return 1 === t3;
    }) ? Wl(c2, e2, p2).reshape(v) : Lt.runKernelFunc(function(t3) {
      return t3.stridedSlice(c2, e2, n2, r2);
    }, { $x: c2 }).reshape(v);
  } });
  var ph = An({ topk_: function(t2, e2, n2) {
    void 0 === e2 && (e2 = 1), void 0 === n2 && (n2 = true);
    var r2 = gn(t2, "x", "topk");
    if (0 === r2.rank)
      throw new Error("topk() expects the input to be of rank 1 or higher");
    var o2 = r2.shape[r2.shape.length - 1];
    if (e2 > o2)
      throw new Error("'k' passed to topk() must be <= the last dimension (" + o2 + ") but got " + e2);
    var a2 = Lt.runKernelFunc(function(t3) {
      return t3.topk(r2, e2, n2);
    }, { $x: r2 });
    return { values: a2[0], indices: a2[1] };
  } });
  var vh = An({ scatterND_: function(t2, e2, n2) {
    var r2 = gn(t2, "indices", "scatterND", "int32"), o2 = gn(e2, "updates", "scatterND");
    return zo(o2, r2, n2), Lt.runKernelFunc(function(t3) {
      return t3.scatterND(r2, o2, n2);
    }, { indices: r2, updates: o2 }, null, "ScatterNd", { shape: n2 });
  } });
  var gh = An({ fft_: function(t2) {
    C("complex64" === t2.dtype, function() {
      return "The dtype for tf.spectral.fft() must be complex64 but got " + t2.dtype + ".";
    });
    var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2, r2 = t2.as2D(n2, e2);
    return Lt.runKernelFunc(function(t3) {
      return t3.fft(r2);
    }, { input: t2 }).reshape(t2.shape);
  } });
  var mh = An({ ifft_: function(t2) {
    C("complex64" === t2.dtype, function() {
      return "The dtype for tf.spectral.ifft() must be complex64 but got " + t2.dtype + ".";
    });
    var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2, r2 = t2.as2D(n2, e2);
    return Lt.runKernelFunc(function(t3) {
      return t3.ifft(r2);
    }, { input: t2 }).reshape(t2.shape);
  } });
  var yh = An({ rfft_: function(t2, e2) {
    C("float32" === t2.dtype, function() {
      return "The dtype for rfft() must be real value but got " + t2.dtype;
    });
    var n2, r2 = t2.shape[t2.shape.length - 1], o2 = t2.size / r2;
    if (null != e2 && e2 < r2) {
      var a2 = t2.shape.map(function(t3) {
        return 0;
      }), i2 = t2.shape.map(function(t3) {
        return t3;
      });
      i2[t2.shape.length - 1] = e2, n2 = t2.slice(a2, i2), r2 = e2;
    } else if (null != e2 && e2 > r2) {
      var s2 = t2.shape.map(function(t3) {
        return t3;
      });
      s2[t2.shape.length - 1] = e2 - r2, n2 = t2.concat(Gn(s2), t2.shape.length - 1), r2 = e2;
    } else
      n2 = t2;
    var u2 = n2.zerosLike(), c2 = Tn(n2, u2).as2D(o2, r2), l2 = gh(c2), h2 = Math.floor(r2 / 2) + 1, f2 = Dn(l2), d2 = Nn(l2), p2 = f2.split([h2, r2 - h2], f2.shape.length - 1), v = d2.split([h2, r2 - h2], d2.shape.length - 1), g = n2.shape.slice();
    return g[n2.shape.length - 1] = h2, Tn(p2[0], v[0]).reshape(g);
  } });
  var xh = An({ irfft_: function(t2) {
    var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2;
    if (e2 <= 2) {
      var r2 = t2.as2D(n2, e2), o2 = mh(r2);
      return Dn(o2);
    }
    var a2 = [n2, 2 * (e2 - 1)], i2 = Dn(t2).as2D(n2, e2), s2 = Nn(t2).as2D(n2, e2), u2 = i2.slice([0, 1], [n2, e2 - 2]).reverse(1), c2 = s2.slice([0, 1], [n2, e2 - 2]).reverse(1).mul(On(-1)), l2 = i2.concat(u2, 1), h2 = s2.concat(c2, 1);
    return r2 = Tn(l2, h2).as2D(a2[0], a2[1]), o2 = mh(r2), Dn(o2);
  } });
  var bh = Object.freeze({ fft: gh, ifft: mh, rfft: yh, irfft: xh });
  var wh = An({ sparseToDense_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = 0);
    var o2 = gn(t2, "sparseIndices", "sparseToDense", "int32"), a2 = gn(e2, "sparseValues", "sparseToDense"), i2 = gn(r2, "defaultValue", "sparseToDense", a2.dtype);
    return function(t3, e3, n3, r3) {
      if ("int32" !== t3.dtype)
        throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t3.dtype + ".");
      if (t3.rank > 2)
        throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t3.shape + ".");
      var o3 = t3.rank > 0 ? t3.shape[0] : 1, a3 = t3.rank > 1 ? t3.shape[1] : 1;
      if (n3.length !== a3)
        throw new Error("outputShape has incorrect number of elements:, " + n3.length + ", should be: " + a3 + ".");
      var i3 = e3.size;
      if (0 !== e3.rank && (1 !== e3.rank || i3 !== o3))
        throw new Error("sparseValues has incorrect shape " + e3.shape + ", should be [] or [" + o3 + "]");
      if (e3.dtype !== r3.dtype)
        throw new Error("sparseValues.dtype must match defaultValues.dtype");
    }(o2, a2, n2, i2), Lt.runKernelFunc(function(t3) {
      return t3.sparseToDense(o2, a2, n2, i2);
    }, { $sparseIndices: o2, $sparseValues: a2, $defaultValue: i2 });
  } });
  var Ch = An({ gatherND_: function(t2, e2) {
    var n2 = gn(e2, "indices", "gatherND", "int32"), r2 = gn(t2, "x", "gatherND");
    return Lt.runKernelFunc(function(t3) {
      return t3.gatherND(r2, n2);
    }, { x: r2, indices: n2 }, null, "GatherNd");
  } });
  var Eh = An({ diag_: function(t2) {
    var e2 = gn(t2, "x", "diag").flatten(), n2 = t2.shape.concat(t2.shape);
    return Lt.runKernelFunc(function(t3) {
      return t3.diag(e2);
    }, { $x: e2 }).reshape(n2);
  } });
  var Rh = An({ dropout_: function(t2, e2, n2, r2) {
    var o2 = gn(t2, "x", "dropout");
    if (C("float32" === o2.dtype, function() {
      return "x has to be a floating point tensor since it's going to be scaled, but got a " + o2.dtype + " tensor instead.";
    }), C(e2 >= 0 && e2 < 1, function() {
      return "rate must be a float in the range [0, 1), but got " + e2 + ".";
    }), 0 === e2)
      return t2 instanceof wt ? o2.clone() : o2;
    var a2 = function(t3, e3) {
      if (null == e3)
        return t3.shape.slice();
      if (S(t3.shape, e3))
        return e3;
      if (t3.shape.length === e3.length) {
        for (var n3 = [], r3 = 0; r3 < t3.shape.length; r3++)
          null == e3[r3] && null != t3.shape[r3] ? n3.push(t3.shape[r3]) : n3.push(e3[r3]);
        return n3;
      }
      return e3;
    }(o2, n2), i2 = 1 - e2, s2 = zc(a2, 0, 1, "float32", r2).add(i2).floor().div(i2);
    return o2.mul(s2);
  } });
  function Ih(t2, e2, n2) {
    for (var r2 = 1 - t2 % 2, o2 = new Float32Array(t2), a2 = 0; a2 < t2; ++a2) {
      var i2 = 2 * Math.PI * a2 / (t2 + r2 - 1);
      o2[a2] = e2 - n2 * Math.cos(i2);
    }
    return Mn(o2, "float32");
  }
  var kh = An({ hannWindow_: function(t2) {
    return Ih(t2, 0.5, 0.5);
  } });
  var Sh = An({ hammingWindow_: function(t2) {
    return Ih(t2, 0.54, 0.46);
  } });
  var Ah = An({ frame_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = 0);
    for (var a2 = 0, i2 = []; a2 + e2 <= t2.size; )
      i2.push(Wl(t2, a2, e2)), a2 += n2;
    if (r2)
      for (; a2 < t2.size; ) {
        var s2 = a2 + e2 - t2.size, u2 = Yn([Wl(t2, a2, e2 - s2), Hn([s2], o2)]);
        i2.push(u2), a2 += n2;
      }
    return 0 === i2.length ? Bn([], [0, e2]) : Yn(i2).as2D(i2.length, e2);
  } });
  var Th = An({ stft_: function(t2, e2, n2, r2, o2) {
    var a2;
    void 0 === o2 && (o2 = kh), null == r2 && (a2 = e2, r2 = Math.floor(Math.pow(2, Math.ceil(Math.log(a2) / Math.log(2)))));
    for (var i2 = Ah(t2, e2, n2), s2 = To(i2, o2(e2)), u2 = [], c2 = 0; c2 < i2.shape[0]; c2++)
      u2.push(yh(s2.slice([c2, 0], [1, e2]), r2));
    return Yn(u2);
  } });
  var Dh = Object.freeze({ hannWindow: kh, hammingWindow: Sh, frame: Ah, stft: Th });
  var Nh;
  var Fh = function(t2, e2, o2) {
    return void 0 === o2 && (o2 = 1), n(this, void 0, void 0, function() {
      var n2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v, g, m2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = gn(t2, "predictions", "inTopK"), a2 = gn(e2, "targets", "inTopK"), C(n2.rank > 1, function() {
              return "inTopK() expects the predictions to be of rank 2 or higher, but got " + n2.rank;
            }), C(n2.rank - 1 === a2.rank, function() {
              return "predictions rank should be 1 larger than targets rank, but got predictions rank " + n2.rank + " and targets rank " + a2.rank;
            }), E(n2.shape.slice(0, n2.shape.length - 1), a2.shape, "predictions's shape should be align with the targets' shape, except the last dimension."), i2 = n2.shape[n2.shape.length - 1], C(o2 > 0 && o2 <= i2, function() {
              return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + i2 + "), but got " + o2;
            }), [4, n2.data()];
          case 1:
            return s2 = r2.sent(), [4, a2.data()];
          case 2:
            for (u2 = r2.sent(), c2 = [s2.length / i2, i2], h2 = c2[1], f2 = B("bool", l2 = c2[0]), d2 = 0; d2 < l2; d2++) {
              for (p2 = d2 * h2, v = s2.subarray(p2, p2 + h2), g = [], m2 = 0; m2 < v.length; m2++)
                g.push({ value: v[m2], index: m2 });
              for (g.sort(function(t3, e3) {
                return e3.value - t3.value;
              }), f2[d2] = 0, m2 = 0; m2 < o2; m2++)
                if (g[m2].index === u2[d2]) {
                  f2[d2] = 1;
                  break;
                }
            }
            return t2 !== n2 && n2.dispose(), e2 !== a2 && a2.dispose(), [2, Fn(f2, a2.shape, "bool")];
        }
      });
    });
  };
  !function(t2) {
    t2[t2.NONE = 0] = "NONE", t2[t2.MEAN = 1] = "MEAN", t2[t2.SUM = 2] = "SUM", t2[t2.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
  }(Nh || (Nh = {}));
  var _h = An({ absoluteDifference_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var o2 = gn(t2, "labels", "absoluteDifference"), a2 = gn(e2, "predictions", "absoluteDifference"), i2 = null;
    null != n2 && (i2 = gn(n2, "weights", "absoluteDifference")), E(o2.shape, a2.shape, "Error in absoluteDifference: ");
    var s2 = o2.sub(a2).abs();
    return Oh(s2, i2, r2);
  } });
  var Oh = An({ computeWeightedLoss_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var r2 = gn(t2, "losses", "computeWeightedLoss"), o2 = null;
    null != e2 && (o2 = gn(e2, "weights", "computeWeightedLoss"));
    var a2 = null == o2 ? r2 : r2.mul(o2);
    if (n2 === Nh.NONE)
      return a2;
    if (n2 === Nh.SUM)
      return a2.sum();
    if (n2 === Nh.MEAN) {
      if (null == o2)
        return a2.mean();
      var i2 = r2.size / o2.size, s2 = a2.sum().div(o2.sum());
      return i2 > 1 ? s2.div(On(i2)) : s2;
    }
    if (n2 === Nh.SUM_BY_NONZERO_WEIGHTS) {
      if (null == o2)
        return a2.sum().div(On(r2.size));
      var u2 = o2.mul(zn(r2.shape)).notEqual(On(0)).sum().toFloat();
      return a2.sum().div(u2);
    }
    throw Error("Unknown reduction: " + n2);
  } });
  var Mh = An({ cosineDistance_: function(t2, e2, n2, r2, o2) {
    void 0 === o2 && (o2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var a2 = gn(t2, "labels", "cosineDistance"), i2 = gn(e2, "predictions", "cosineDistance"), s2 = null;
    null != r2 && (s2 = gn(r2, "weights", "cosineDistance")), E(a2.shape, i2.shape, "Error in cosineDistance: ");
    var u2 = On(1).sub(a2.mul(i2).sum(n2, true));
    return Oh(u2, s2, o2);
  } });
  var Bh = An({ hingeLoss_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var o2 = gn(t2, "labels", "hingeLoss"), a2 = gn(e2, "predictions", "hingeLoss"), i2 = null;
    null != n2 && (i2 = gn(n2, "weights", "hingeLoss")), E(o2.shape, a2.shape, "Error in hingeLoss: ");
    var s2 = On(1);
    o2 = On(2).mul(o2).sub(s2);
    var u2 = s2.sub(o2.mul(a2)).relu();
    return Oh(u2, i2, r2);
  } });
  var Ph = An({ huberLoss_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = 1), void 0 === o2 && (o2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var a2 = gn(t2, "labels", "huberLoss"), i2 = gn(e2, "predictions", "huberLoss"), s2 = null;
    null != n2 && (s2 = gn(n2, "weights", "huberLoss")), E(a2.shape, i2.shape, "Error in huberLoss: ");
    var u2 = On(r2), c2 = i2.sub(a2).abs(), l2 = Io(c2, u2), h2 = c2.sub(l2), f2 = On(0.5).mul(l2.square()).add(u2.mul(h2));
    return Oh(f2, s2, o2);
  } });
  var Lh = An({ logLoss_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = 1e-7), void 0 === o2 && (o2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var a2 = gn(t2, "labels", "logLoss"), i2 = gn(e2, "predictions", "logLoss"), s2 = null;
    null != n2 && (s2 = gn(n2, "weights", "logLoss")), E(a2.shape, i2.shape, "Error in logLoss: ");
    var u2 = On(1), c2 = On(r2), l2 = a2.mul(i2.add(c2).log()).neg().sub(u2.sub(a2).mul(u2.sub(i2).add(c2).log()));
    return Oh(l2, s2, o2);
  } });
  var Wh = An({ meanSquaredError_: function(t2, e2, n2, r2) {
    void 0 === r2 && (r2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var o2 = gn(t2, "labels", "meanSquaredError"), a2 = gn(e2, "predictions", "meanSquaredError"), i2 = null;
    null != n2 && (i2 = gn(n2, "weights", "meanSquaredError")), E(o2.shape, a2.shape, "Error in meanSquaredError: ");
    var s2 = o2.squaredDifference(a2);
    return Oh(s2, i2, r2);
  } });
  var Uh = An({ sigmoidCrossEntropy_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var a2 = gn(t2, "multiClassLabels", "sigmoidCrossEntropy"), i2 = gn(e2, "logits", "sigmoidCrossEntropy"), s2 = null;
    if (null != n2 && (s2 = gn(n2, "weights", "sigmoidCrossEntropy")), E(a2.shape, i2.shape, "Error in sigmoidCrossEntropy: "), r2 > 0) {
      var u2 = On(r2), c2 = On(1), l2 = On(0.5);
      a2 = a2.mul(c2.sub(u2)).add(l2.mul(u2));
    }
    var h2 = function(t3, e3) {
      var n3 = gn(t3, "labels", "sigmoidCrossEntropyWithLogits"), r3 = gn(e3, "logits", "sigmoidCrossEntropyWithLogits");
      E(n3.shape, r3.shape, "Error in sigmoidCrossEntropyWithLogits: ");
      var o3 = r3.relu(), a3 = r3.mul(n3), i3 = r3.abs().neg().exp().log1p();
      return o3.sub(a3).add(i3);
    }(a2, i2);
    return Oh(h2, s2, o2);
  } });
  var Vh = An({ softmaxCrossEntropy_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = Nh.SUM_BY_NONZERO_WEIGHTS);
    var a2 = gn(t2, "onehotLabels", "softmaxCrossEntropy"), i2 = gn(e2, "logits", "softmaxCrossEntropy"), s2 = null;
    if (null != n2 && (s2 = gn(n2, "weights", "softmaxCrossEntropy")), E(a2.shape, i2.shape, "Error in softmaxCrossEntropy: "), r2 > 0) {
      var u2 = On(r2), c2 = On(1), l2 = On(a2.shape[1]);
      a2 = a2.mul(c2.sub(u2)).add(u2.div(l2));
    }
    var h2 = function(t3, e3, n3) {
      if (void 0 === n3 && (n3 = -1), -1 === n3 && (n3 = e3.rank - 1), n3 !== e3.rank - 1)
        throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e3.rank + " and dim was " + n3);
      return oa(function(t4, e4, r3) {
        var o3 = e4.logSumExp([n3], true), a3 = e4.toFloat().sub(o3);
        r3([t4, a3]);
        return { value: a3.mul(t4).neg().sum([n3]), gradFunc: function(t5, e5) {
          var r4 = e5[0], o4 = e5[1], a4 = wn(t5.shape, [n3]);
          return [t5.reshape(a4).mul(r4.toFloat().sub(o4.exp())), t5.reshape(a4).mul(o4.exp().sub(r4.toFloat()))];
        } };
      })(t3, e3);
    }(a2, i2);
    return Oh(h2, s2, o2);
  } });
  var zh = Object.freeze({ get Reduction() {
    return Nh;
  }, absoluteDifference: _h, computeWeightedLoss: Oh, cosineDistance: Mh, hingeLoss: Bh, huberLoss: Ph, logLoss: Lh, meanSquaredError: Wh, sigmoidCrossEntropy: Uh, softmaxCrossEntropy: Vh });
  function Gh(t2, e2) {
    return void 0 === e2 && (e2 = false), Lt.tidy(function() {
      if (2 !== t2.shape.length)
        throw new Error("qr2d() requires a 2D Tensor, but got a " + t2.shape.length + "D Tensor.");
      for (var n2 = t2.shape[0], r2 = t2.shape[1], o2 = Cc(n2), a2 = t2.clone(), i2 = Bn([[1]], [1, 1]), s2 = i2.clone(), u2 = n2 >= r2 ? r2 : n2, c2 = function(t3) {
        var e3, u3 = a2, c3 = s2, l3 = o2;
        e3 = Lt.tidy(function() {
          var e4 = a2.slice([t3, t3], [n2 - t3, 1]), u4 = e4.norm(), c4 = a2.slice([t3, t3], [1, 1]), l4 = Bn([[-1]]).where(c4.greater(0), Bn([[1]])), h2 = c4.sub(l4.mul(u4)), f2 = e4.div(h2);
          s2 = 1 === f2.shape[0] ? i2.clone() : i2.concat(f2.slice([1, 0], [f2.shape[0] - 1, f2.shape[1]]), 0);
          var d2 = l4.matMul(h2).div(u4).neg(), p2 = a2.slice([t3, 0], [n2 - t3, r2]), v = d2.mul(s2), g = s2.transpose();
          if (0 === t3)
            a2 = p2.sub(v.matMul(g.matMul(p2)));
          else {
            var m2 = p2.sub(v.matMul(g.matMul(p2)));
            a2 = a2.slice([0, 0], [t3, r2]).concat(m2, 0);
          }
          var y2 = v.transpose(), x2 = o2.slice([0, t3], [n2, o2.shape[1] - t3]);
          if (0 === t3)
            o2 = x2.sub(x2.matMul(s2).matMul(y2));
          else {
            var b2 = x2.sub(x2.matMul(s2).matMul(y2));
            o2 = o2.slice([0, 0], [n2, t3]).concat(b2, 1);
          }
          return [s2, a2, o2];
        }), s2 = e3[0], a2 = e3[1], o2 = e3[2], tn([u3, c3, l3]);
      }, l2 = 0; l2 < u2; ++l2)
        c2(l2);
      return !e2 && n2 > r2 && (o2 = o2.slice([0, 0], [n2, r2]), a2 = a2.slice([0, 0], [r2, r2])), [o2, a2];
    });
  }
  var Hh = An({ bandPart_: function(t2, e2, n2) {
    if (e2 % 1 != 0)
      throw new Error("bandPart(): numLower must be an integer, got " + e2 + ".");
    if (n2 % 1 != 0)
      throw new Error("bandPart(): numUpper must be an integer, got " + n2 + ".");
    var r2 = gn(t2, "a", "bandPart");
    if (r2.rank < 2)
      throw new Error("bandPart(): Rank must be at least 2, got " + r2.rank + ".");
    var o2 = r2.shape, a2 = r2.shape.slice(-2), i2 = a2[0], s2 = a2[1];
    if (!(e2 <= i2))
      throw new Error("bandPart(): numLower (" + e2 + ") must not be greater than the number of rows (" + i2 + ").");
    if (!(n2 <= s2))
      throw new Error("bandPart(): numUpper (" + n2 + ") must not be greater than the number of columns (" + s2 + ").");
    e2 < 0 && (e2 = i2), n2 < 0 && (n2 = s2);
    var u2 = Kn(0, i2, 1, "int32").reshape([-1, 1]), c2 = Kn(0, s2, 1, "int32"), l2 = Oo(u2, c2), h2 = pc(l2.lessEqual(On(+e2, "int32")), l2.greaterEqual(On(-n2, "int32"))), f2 = Gn([i2, s2], r2.dtype);
    return hr(fr(r2.reshape([-1, i2, s2])).map(function(t3) {
      return yc(h2, t3, f2);
    })).reshape(o2);
  } });
  var qh = An({ gramSchmidt_: function(t2) {
    var e2;
    if (Array.isArray(t2)) {
      e2 = false, C(null != t2 && t2.length > 0, function() {
        return "Gram-Schmidt process: input must not be null, undefined, or empty";
      });
      for (var n2 = t2[0].shape[0], r2 = function(e3) {
        C(t2[e3].shape[0] === n2, function() {
          return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + t2[e3].shape[0] + " vs. " + n2 + ")";
        });
      }, o2 = 1; o2 < t2.length; ++o2)
        r2(o2);
    } else
      e2 = true, t2 = tr(t2, t2.shape[0], 0).map(function(t3) {
        return lr(t3, [0]);
      });
    C(t2.length <= t2[0].shape[0], function() {
      return "Gram-Schmidt: Number of vectors (" + t2.length + ") exceeds number of dimensions (" + t2[0].shape[0] + ").";
    });
    var a2 = [], i2 = t2, s2 = function(t3) {
      a2.push(Lt.tidy(function() {
        var e3 = i2[t3];
        if (t3 > 0)
          for (var n3 = 0; n3 < t3; ++n3) {
            var r3 = th(a2[n3].mulStrict(e3)).mul(a2[n3]);
            e3 = e3.sub(r3);
          }
        return e3.div(ch(e3, "euclidean"));
      }));
    };
    for (o2 = 0; o2 < t2.length; ++o2)
      s2(o2);
    return e2 ? hr(a2, 0) : a2;
  } });
  var Kh = An({ qr_: function(t2, e2) {
    if (void 0 === e2 && (e2 = false), t2.rank < 2)
      throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t2.rank);
    if (2 === t2.rank)
      return Gh(t2, e2);
    var n2 = t2.shape.slice(0, t2.shape.length - 2).reduce(function(t3, e3) {
      return t3 * e3;
    }), r2 = fr(t2.reshape([n2, t2.shape[t2.shape.length - 2], t2.shape[t2.shape.length - 1]]), 0), o2 = [], a2 = [];
    return r2.forEach(function(t3) {
      var n3 = Gh(t3, e2), r3 = n3[0], i2 = n3[1];
      o2.push(r3), a2.push(i2);
    }), [hr(o2, 0).reshape(t2.shape), hr(a2, 0).reshape(t2.shape)];
  } });
  var jh = Object.freeze({ bandPart: Hh, gramSchmidt: qh, qr: Kh });
  function Xh(t2, e2, n2, r2, o2, a2) {
    null == r2 && (r2 = 0.5), null == o2 && (o2 = Number.NEGATIVE_INFINITY), null == a2 && (a2 = 0);
    var i2 = t2.shape[0];
    return n2 = Math.min(n2, i2), C(0 <= r2 && r2 <= 1, function() {
      return "iouThreshold must be in [0, 1], but was '" + r2 + "'";
    }), C(2 === t2.rank, function() {
      return "boxes must be a 2D tensor, but was of rank '" + t2.rank + "'";
    }), C(4 === t2.shape[1], function() {
      return "boxes must have 4 columns, but 2nd dimension was " + t2.shape[1];
    }), C(1 === e2.rank, function() {
      return "scores must be a 1D tensor";
    }), C(e2.shape[0] === i2, function() {
      return "scores has incompatible shape with boxes. Expected " + i2 + ", but was " + e2.shape[0];
    }), C(0 <= a2 && a2 <= 1, function() {
      return "softNmsSigma must be in [0, 1], but was '" + a2 + "'";
    }), { maxOutputSize: n2, iouThreshold: r2, scoreThreshold: o2, softNmsSigma: a2 };
  }
  var Yh = An({ resizeBilinear_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "images", "resizeBilinear");
    C(3 === r2.rank || 4 === r2.rank, function() {
      return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + r2.rank + ".";
    }), C(2 === e2.length, function() {
      return "Error in resizeBilinear: new shape must 2D, but got shape " + e2 + ".";
    });
    var o2 = r2, a2 = false;
    3 === r2.rank && (a2 = true, o2 = r2.as4D(1, r2.shape[0], r2.shape[1], r2.shape[2]));
    var i2 = e2[0], s2 = e2[1], u2 = Lt.runKernelFunc(function(t3, e3) {
      return e3([o2]), t3.resizeBilinear(o2, i2, s2, n2);
    }, { x: o2 }, function(t3, e3) {
      return { x: function() {
        return Lt.runKernelFunc(function(r3) {
          return r3.resizeBilinearBackprop(t3, e3[0], n2);
        }, {});
      } };
    }, "ResizeBilinear", { alignCorners: n2, newHeight: i2, newWidth: s2 });
    return a2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
  } });
  var $h = An({ resizeNearestNeighbor_: function(t2, e2, n2) {
    void 0 === n2 && (n2 = false);
    var r2 = gn(t2, "images", "resizeNearestNeighbor");
    C(3 === r2.rank || 4 === r2.rank, function() {
      return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + r2.rank + ".";
    }), C(2 === e2.length, function() {
      return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e2 + ".";
    }), C("float32" === r2.dtype || "int32" === r2.dtype, function() {
      return "`images` must have `int32` or `float32` as dtype";
    });
    var o2 = r2, a2 = false;
    3 === r2.rank && (a2 = true, o2 = r2.as4D(1, r2.shape[0], r2.shape[1], r2.shape[2]));
    var i2 = e2[0], s2 = e2[1], u2 = Lt.runKernelFunc(function(t3, e3) {
      return e3([o2]), t3.resizeNearestNeighbor(o2, i2, s2, n2);
    }, { batchImages: o2 }, function(t3, e3) {
      return { batchImages: function() {
        return Lt.runKernelFunc(function(r3) {
          return r3.resizeNearestNeighborBackprop(t3, e3[0], n2);
        }, {});
      } };
    });
    return a2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
  } });
  var Qh = An({ nonMaxSuppression_: function(t2, e2, n2, r2, o2) {
    void 0 === r2 && (r2 = 0.5), void 0 === o2 && (o2 = Number.NEGATIVE_INFINITY);
    var a2 = gn(t2, "boxes", "nonMaxSuppression"), i2 = gn(e2, "scores", "nonMaxSuppression"), s2 = Xh(a2, i2, n2, r2, o2);
    n2 = s2.maxOutputSize, r2 = s2.iouThreshold, o2 = s2.scoreThreshold;
    var u2 = { maxOutputSize: n2, iouThreshold: r2, scoreThreshold: o2 };
    return Lt.runKernelFunc(function(t3) {
      return t3.nonMaxSuppression(a2, i2, n2, r2, o2);
    }, { boxes: a2, scores: i2 }, null, "NonMaxSuppressionV3", u2);
  } });
  var Jh = function(t2, e2, o2, a2, i2) {
    return void 0 === a2 && (a2 = 0.5), void 0 === i2 && (i2 = Number.NEGATIVE_INFINITY), n(this, void 0, void 0, function() {
      var n2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = gn(t2, "boxes", "nonMaxSuppressionAsync"), s2 = gn(e2, "scores", "nonMaxSuppressionAsync"), u2 = Xh(n2, s2, o2, a2, i2), o2 = u2.maxOutputSize, a2 = u2.iouThreshold, i2 = u2.scoreThreshold, [4, Promise.all([n2.data(), s2.data()])];
          case 1:
            return c2 = r2.sent(), l2 = c2[0], h2 = c2[1], f2 = Oa(l2, h2, o2, a2, i2), n2 !== t2 && n2.dispose(), s2 !== e2 && s2.dispose(), [2, f2];
        }
      });
    });
  };
  var Zh = An({ nonMaxSuppressionWithScore_: function(t2, e2, n2, r2, o2, a2) {
    void 0 === r2 && (r2 = 0.5), void 0 === o2 && (o2 = Number.NEGATIVE_INFINITY), void 0 === a2 && (a2 = 0);
    var i2 = gn(t2, "boxes", "nonMaxSuppression"), s2 = gn(e2, "scores", "nonMaxSuppression"), u2 = Xh(i2, s2, n2, r2, o2, a2), c2 = { maxOutputSize: n2 = u2.maxOutputSize, iouThreshold: r2 = u2.iouThreshold, scoreThreshold: o2 = u2.scoreThreshold, softNmsSigma: a2 = u2.softNmsSigma }, l2 = Lt.runKernel("NonMaxSuppressionV5", { boxes: i2, scores: s2 }, c2);
    return { selectedIndices: l2[0], selectedScores: l2[1] };
  } });
  var tf = function(t2, e2, o2, a2, i2, s2) {
    return void 0 === a2 && (a2 = 0.5), void 0 === i2 && (i2 = Number.NEGATIVE_INFINITY), void 0 === s2 && (s2 = 0), n(this, void 0, void 0, function() {
      var n2, u2, c2, l2, h2, f2, d2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return n2 = gn(t2, "boxes", "nonMaxSuppressionAsync"), u2 = gn(e2, "scores", "nonMaxSuppressionAsync"), c2 = Xh(n2, u2, o2, a2, i2, s2), o2 = c2.maxOutputSize, a2 = c2.iouThreshold, i2 = c2.scoreThreshold, s2 = c2.softNmsSigma, [4, Promise.all([n2.data(), u2.data()])];
          case 1:
            return l2 = r2.sent(), h2 = l2[0], f2 = l2[1], d2 = Ma(h2, f2, o2, a2, i2, s2), n2 !== t2 && n2.dispose(), u2 !== e2 && u2.dispose(), [2, d2];
        }
      });
    });
  };
  var ef = An({ cropAndResize_: function(t2, e2, n2, r2, o2, a2) {
    var i2 = gn(t2, "image", "cropAndResize"), s2 = gn(e2, "boxes", "cropAndResize", "float32"), u2 = gn(n2, "boxInd", "cropAndResize", "int32");
    o2 = o2 || "bilinear", a2 = a2 || 0;
    var c2 = s2.shape[0];
    return C(4 === i2.rank, function() {
      return "Error in cropAndResize: image must be rank 4,but got rank " + i2.rank + ".";
    }), C(2 === s2.rank && 4 === s2.shape[1], function() {
      return "Error in cropAndResize: boxes must be have size [" + c2 + ",4] but had shape " + s2.shape + ".";
    }), C(1 === u2.rank && u2.shape[0] === c2, function() {
      return "Error in cropAndResize: boxInd must be have size [" + c2 + "] but had shape " + s2.shape + ".";
    }), C(2 === r2.length, function() {
      return "Error in cropAndResize: cropSize must be of length 2, but got length " + r2.length + ".";
    }), C(r2[0] >= 1 && r2[1] >= 1, function() {
      return "cropSize must be atleast [1,1], but was " + r2;
    }), C("bilinear" === o2 || "nearest" === o2, function() {
      return "method must be bilinear or nearest, but was " + o2;
    }), Lt.runKernelFunc(function(t3, e3) {
      return t3.cropAndResize(i2, s2, u2, r2, o2, a2);
    }, { images: i2, boxes: s2, boxInd: u2 }, null, "CropAndResize", { method: o2, extrapolationValue: a2, cropSize: r2 });
  } });
  var nf = Object.freeze({ resizeBilinear: Yh, resizeNearestNeighbor: $h, nonMaxSuppression: Qh, nonMaxSuppressionAsync: Jh, nonMaxSuppressionWithScore: Zh, nonMaxSuppressionWithScoreAsync: tf, cropAndResize: ef });
  var rf = function(t2, e2) {
    return !(t2 > 0) || "linear" === e2;
  };
  var of = function(t2, e2, n2) {
    if (null == n2 || "linear" === n2)
      return t2;
    if ("relu" === n2)
      return t2.mul(e2.step());
    throw new Error("Gradient for activation " + n2 + " has not been implemented yet.");
  };
  var af = function(t2, e2) {
    var n2 = e2, r2 = Br(t2.shape, e2.shape);
    return r2.length > 0 && (n2 = n2.sum(r2)), n2.reshape(t2.shape);
  };
  var sf = function(t2, e2, n2) {
    if ("linear" === e2)
      return t2;
    if ("relu" === e2)
      return ah(t2);
    if ("elu" === e2)
      return nh(t2);
    if ("relu6" === e2)
      return ih(t2);
    if ("prelu" === e2)
      return oh(t2, n2);
    throw new Error("Unknown fused activation " + e2 + ".");
  };
  var uf = An({ fusedMatMul_: function(t2) {
    var e2, n2 = t2.a, r2 = t2.b, o2 = t2.transposeA, a2 = void 0 !== o2 && o2, i2 = t2.transposeB, s2 = void 0 !== i2 && i2, u2 = t2.bias, c2 = t2.activation, l2 = void 0 === c2 ? "linear" : c2, h2 = t2.preluActivationWeights;
    if (false === rf(Lt.state.gradientDepth, l2)) {
      var f2 = El(n2, r2, a2, s2);
      return null != u2 && (f2 = Or(f2, u2)), sf(f2, l2, h2);
    }
    var d2 = gn(n2, "a", "fused matMul"), p2 = gn(r2, "b", "fused matMul");
    e2 = Nt(d2, p2), d2 = e2[0], p2 = e2[1];
    var v = a2 ? d2.shape[d2.rank - 2] : d2.shape[d2.rank - 1], g = s2 ? p2.shape[p2.rank - 1] : p2.shape[p2.rank - 2], m2 = a2 ? d2.shape[d2.rank - 1] : d2.shape[d2.rank - 2], y2 = s2 ? p2.shape[p2.rank - 2] : p2.shape[p2.rank - 1], x2 = d2.shape.slice(0, -2), b2 = p2.shape.slice(0, -2), w2 = k(x2), E2 = k(b2);
    C(d2.rank >= 2 && p2.rank >= 2 && d2.rank === p2.rank, function() {
      return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + d2.rank + " and " + p2.rank + ".";
    }), C(S(x2, b2), function() {
      return "Error in fused matMul: outer dimensions (" + x2 + ") and (" + b2 + ") of Tensors with shapes " + d2.shape + " and " + p2.shape + " must match.";
    }), C(v === g, function() {
      return "Error in fused matMul: inner shapes (" + v + ") and (" + g + ") of Tensors with shapes " + d2.shape + " and " + p2.shape + " and transposeA=" + a2 + " and transposeB=" + s2 + " must match.";
    });
    var R2, I2, A2 = d2.shape.slice(0, -2).concat([m2, y2]), T2 = a2 ? d2.as3D(w2, v, m2) : d2.as3D(w2, m2, v), D2 = s2 ? p2.as3D(E2, y2, g) : p2.as3D(E2, g, y2);
    null != u2 && Pr(A2, (R2 = Nt(R2 = gn(u2, "bias", "fused matMul"), d2)[0]).shape), null != h2 && (I2 = gn(h2, "prelu weights", "fused matMul"));
    var N2 = { a: T2, b: D2 };
    null != u2 && (N2.bias = R2), null != h2 && (N2.preluActivationWeights = I2);
    var F2 = [T2, D2];
    return Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.fusedBatchMatMul({ a: T2, b: D2, transposeA: a2, transposeB: s2, bias: R2, activation: l2, preluActivationWeights: I2 });
      return e3([T2, D2, n3]), n3;
    }, N2, function(t3, e3) {
      var n3 = e3[0], r3 = e3[1], o3 = e3[2], i3 = of(t3, o3, l2), c3 = {};
      return null != u2 && (c3 = { bias: function() {
        return af(R2, i3);
      } }), a2 || s2 ? !a2 && s2 ? Object.assign({ a: function() {
        return i3.matMul(r3, false, false);
      }, b: function() {
        return i3.matMul(n3, true, false);
      } }, c3) : a2 && !s2 ? Object.assign({ a: function() {
        return r3.matMul(i3, false, true);
      }, b: function() {
        return n3.matMul(i3, false, false);
      } }, c3) : Object.assign({ a: function() {
        return r3.matMul(i3, true, true);
      }, b: function() {
        return i3.matMul(n3, true, true);
      } }, c3) : Object.assign({ a: function() {
        return i3.matMul(r3, false, true);
      }, b: function() {
        return n3.matMul(i3, true, false);
      } }, c3);
    }, "_FusedMatMul", { transposeA: a2, transposeB: s2, activation: l2 }, F2, [true]).reshape(A2);
  } });
  var cf = An({ fusedConv2d_: function(t2) {
    var e2 = t2.x, n2 = t2.filter, r2 = t2.strides, o2 = t2.pad, a2 = t2.dataFormat, i2 = void 0 === a2 ? "NHWC" : a2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
    if (f2 = f2 || "linear", false === rf(Lt.state.gradientDepth, f2)) {
      var p2 = dl(e2, n2, r2, o2, i2, u2, c2);
      return null != l2 && (p2 = Or(p2, l2)), sf(p2, f2, d2);
    }
    var v = gn(e2, "x", "conv2d"), g = gn(n2, "filter", "conv2d"), m2 = v, y2 = false;
    3 === v.rank && (y2 = true, m2 = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), C(4 === m2.rank, function() {
      return "Error in fused conv2d: input must be rank 4, but got rank " + m2.rank + ".";
    }), C(4 === g.rank, function() {
      return "Error in fused conv2d: filter must be rank 4, but got rank " + g.rank + ".";
    }), null != c2 && C(A(o2), function() {
      return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + c2 + " but got pad " + o2 + ".";
    }), C(m2.shape[3] === g.shape[2], function() {
      return "Error in conv2d: depth of input (" + m2.shape[3] + ") must match input depth for filter " + g.shape[2] + ".";
    }), C(Ca(r2, u2), function() {
      return "Error in conv2D: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + u2 + "'";
    }), C("NHWC" === i2, function() {
      return "Error in conv2d: got dataFormat of " + i2 + " but only NHWC is currently supported.";
    });
    var x2, b2, w2 = pa(m2.shape, g.shape, r2, u2, o2, c2);
    null != l2 && (x2 = Nt(x2 = gn(l2, "bias", "fused conv2d"), v)[0], Pr(w2.outShape, x2.shape)), null != d2 && (b2 = gn(d2, "prelu weights", "fused conv2d"));
    var E2 = { x: m2, filter: g };
    null != l2 && (E2.bias = x2), null != d2 && (E2.preluActivationWeights = b2);
    var R2 = [g, m2], I2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.fusedConv2d({ input: m2, filter: g, convInfo: w2, bias: x2, activation: f2, preluActivationWeights: b2 });
      return e3([g, m2, n3]), n3;
    }, E2, function(t3, e3) {
      var n3 = e3, a3 = n3[0], i3 = n3[1], s3 = n3[2], c3 = of(t3, s3, f2);
      C(wa(u2), function() {
        return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u2 + "'";
      });
      var h3 = {};
      return null != l2 && (h3 = { bias: function() {
        return af(x2, c3);
      } }), Object.assign({ x: function() {
        return gl(i3.shape, c3, a3, r2, o2);
      }, filter: function() {
        return vl(i3, c3, a3.shape, r2, o2);
      } }, h3);
    }, "FusedConv2D", { convInfo: w2, activation: f2 }, R2, [true]);
    return y2 ? I2.as3D(I2.shape[1], I2.shape[2], I2.shape[3]) : I2;
  } });
  var lf = An({ fusedDepthwiseConv2d_: function(t2) {
    var e2 = t2.x, n2 = t2.filter, r2 = t2.strides, o2 = t2.pad, a2 = t2.dataFormat, i2 = void 0 === a2 ? "NHWC" : a2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
    if (false === rf(Lt.state.gradientDepth, f2)) {
      var p2 = ml(e2, n2, r2, o2, i2, u2, c2);
      return null != l2 && (p2 = Or(p2, l2)), sf(p2, f2, d2);
    }
    var v = gn(e2, "x", "depthwiseConv2d"), g = gn(n2, "filter", "depthwiseConv2d"), m2 = v, y2 = false;
    3 === v.rank && (y2 = true, m2 = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), C(4 === m2.rank, function() {
      return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + m2.rank + ".";
    }), C(4 === g.rank, function() {
      return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + g.rank + ".";
    }), C(m2.shape[3] === g.shape[2], function() {
      return "Error in fused depthwiseConv2d: number of input channels (" + m2.shape[3] + ") must match the inChannels dimension in filter " + g.shape[2] + ".";
    }), null == u2 && (u2 = [1, 1]), C(Ca(r2, u2), function() {
      return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + u2 + "'";
    }), null != c2 && C(A(o2), function() {
      return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c2 + " but got pad " + o2 + ".";
    });
    var x2, b2, w2 = pa(m2.shape, g.shape, r2, u2, o2, c2, true);
    null != l2 && (x2 = Nt(x2 = gn(l2, "bias", "fused conv2d"), v)[0], Pr(w2.outShape, x2.shape)), null != d2 && (b2 = gn(d2, "prelu weights", "fused depthwiseConv2d"));
    var E2 = { x: m2, filter: g };
    null != l2 && (E2.bias = x2), null != d2 && (E2.preluActivationWeights = b2);
    var R2 = [g, m2], I2 = Lt.runKernelFunc(function(t3, e3) {
      var n3 = t3.fusedDepthwiseConv2D({ input: m2, filter: g, convInfo: w2, bias: x2, activation: f2, preluActivationWeights: b2 });
      return e3([g, m2, n3]), n3;
    }, E2, function(t3, e3) {
      C(wa(u2), function() {
        return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + u2 + "'";
      });
      var n3 = e3[0], r3 = e3[1], o3 = e3[2], a3 = of(t3, o3, f2), i3 = {};
      return null != l2 && (i3 = { bias: function() {
        return af(x2, a3);
      } }), Object.assign({ x: function() {
        return yl(r3.shape, a3, n3, w2);
      }, filter: function() {
        return xl(r3, a3, n3.shape, w2);
      } }, i3);
    }, "FusedDepthwiseConv2D", { convInfo: w2, activation: f2 }, R2, [true]);
    return y2 ? I2.as3D(I2.shape[1], I2.shape[2], I2.shape[3]) : I2;
  } });
  var hf = Object.freeze({ matMul: uf, conv2d: cf, depthwiseConv2d: lf });
  var ff = Object.freeze({ image: nf, linalg: jh, losses: zh, spectral: bh, fused: hf, signal: Dh, add: Or, addN: $u, batchNorm: nc, batchNormalization: ec, batchNorm2d: ac, batchNormalization2d: oc, batchNorm3d: uc, batchNormalization3d: sc, batchNorm4d: hc, batchNormalization4d: lc, broadcastTo: fc, clone: dc, div: Bo, divNoNan: bc, eye: Cc, multinomial: Ec, oneHot: Rc, pad: Ic, pad1d: kc, pad2d: Sc, pad3d: Ac, pad4d: Tc, rand: Dc, randomGamma: Uc, randomNormal: Vc, randomUniform: zc, square: Gc, squaredDifference: Hc, tile: wc, truncatedNormal: qc, conv1d: fl, conv2d: dl, conv3d: pl, depthwiseConv2d: ml, separableConv2d: bl, conv2dTranspose: wl, conv3dTranspose: Cl, op: An, booleanMaskAsync: ul, complex: Tn, real: Dn, imag: Nn, concat: Yn, concat1d: $n, concat2d: Qn, concat3d: Jn, concat4d: Zn, split: tr, matMul: El, dot: Rl, outerProduct: Il, reverse: kl, reverse1d: Sl, reverse2d: Al, reverse3d: Tl, reverse4d: Dl, maxPool: _l, avgPool: Ol, pool: Ml, maxPool3d: Bl, avgPool3d: Pl, maxPoolWithArgmax: Ll, slice: Wl, slice1d: Ul, slice2d: Vl, slice3d: zl, slice4d: Gl, abs: Lr, acos: Wr, acosh: Ur, asin: Vr, asinh: zr, atan: Gr, atanh: Hr, ceil: qr, clipByValue: Kr, cos: jr, cosh: Xr, erf: Yr, exp: $r, expm1: Qr, floor: Jr, log: Zr, log1p: to, logSigmoid: eo, neg: no, reciprocal: ro, round: oo, rsqrt: ao, sigmoid: io, sign: so, isNaN: uo, isInf: co, isFinite: lo, sin: ho, sinh: fo, softplus: po, sqrt: vo, step: go, tan: mo, tanh: yo, all: ql, any: Kl, argMax: jl, argMin: Xl, logSumExp: Yl, max: $l, mean: Ql, min: Jl, moments: Zl, sum: th, prod: eh, equal: Kc, equalStrict: jc, greater: Xc, greaterEqual: Yc, greaterEqualStrict: $c, greaterStrict: Qc, less: Jc, lessEqual: Zc, lessEqualStrict: tl, lessStrict: el, notEqual: nl, notEqualStrict: rl, addStrict: xo, atan2: bo, divStrict: wo, floorDiv: Co, maximum: Eo, maximumStrict: Ro, minimum: Io, minimumStrict: ko, mod: So, modStrict: Ao, mul: To, mulStrict: Do, pow: No, powStrict: Fo, squaredDifferenceStrict: _o, sub: Oo, subStrict: Mo, elu: nh, leakyRelu: rh, prelu: oh, relu: ah, relu6: ih, selu: sh, logicalAnd: pc, logicalNot: vc, logicalOr: gc, logicalXor: mc, where: yc, whereAsync: xc, buffer: er, print: nr, batchToSpaceND: rr, cast: or, cumsum: ar, depthToSpace: ir, expandDims: sr, reshape: ur, spaceToBatchND: cr, squeeze: lr, stack: hr, unstack: fr, setdiff1dAsync: dr, fill: Hn, linspace: qn, ones: zn, range: Kn, scalar: On, tensor: Fn, tensor1d: Mn, tensor2d: Bn, tensor3d: Pn, tensor4d: Ln, tensor5d: Wn, tensor6d: Un, variable: Vn, zeros: Gn, onesLike: jn, zerosLike: Xn, transpose: ua, softmax: ia, logSoftmax: sa, localResponseNormalization: uh, norm: ch, gather: il, unsortedSegmentSum: sl, basicLSTMCell: lh, multiRNNCell: hh, movingAverage: fh, stridedSlice: dh, topk: ph, scatterND: vh, fft: gh, ifft: mh, rfft: yh, irfft: xh, sparseToDense: wh, gatherND: Ch, diag: Eh, dropout: Rh, hannWindow: kh, hammingWindow: Sh, frame: Ah, stft: Th, inTopKAsync: Fh });
  function df(t2, e2) {
    Array.isArray(t2) || (t2 = [t2]), t2.forEach(function(t3) {
      null != t3 && C("complex64" !== t3.dtype, function() {
        return e2 + " does not support complex64 tensors.";
      });
    });
  }
  function pf(t2, e2, n2, r2, o2, a2) {
    for (var i2 = o2.strideHeight, s2 = o2.strideWidth, u2 = o2.dilationHeight, c2 = o2.dilationWidth, l2 = o2.effectiveFilterHeight, h2 = o2.effectiveFilterWidth, f2 = o2.padInfo.top, d2 = o2.padInfo.left, p2 = "max" === a2 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, v = er(o2.outShape, n2), g = v.values, m2 = o2.outShape[1] * o2.outShape[2] * o2.outShape[3], y2 = o2.outShape[2] * o2.outShape[3], x2 = o2.outShape[3], b2 = 0; b2 < o2.batchSize; ++b2)
      for (var w2 = b2 * m2, C2 = b2 * r2[0], E2 = 0; E2 < o2.inChannels; ++E2)
        for (var R2 = 0; R2 < o2.outHeight; ++R2)
          for (var I2 = R2 * i2 - f2, k2 = Math.max(0, I2), S2 = Math.min(o2.inHeight, l2 + I2), A2 = w2 + R2 * y2, T2 = 0; T2 < o2.outWidth; ++T2) {
            for (var D2 = T2 * s2 - d2, N2 = Math.max(0, D2), F2 = Math.min(o2.inWidth, h2 + D2), _2 = p2, O2 = 0, M2 = 0, B2 = k2; B2 < S2; B2 += u2) {
              for (var P2 = C2 + B2 * r2[1], L2 = N2; L2 < F2; L2 += c2) {
                var W2 = t2[P2 + L2 * r2[2] + E2];
                "max" === a2 && W2 > _2 ? _2 = W2 : "avg" === a2 && (O2 += W2, M2++);
              }
              if (isNaN(_2))
                break;
            }
            g[A2 + T2 * x2 + E2] = "avg" === a2 ? O2 / M2 : _2;
          }
    return v;
  }
  function vf(t2, e2, n2, r2, o2, a2) {
    void 0 === o2 && (o2 = false), void 0 === a2 && (a2 = false);
    for (var i2 = er(r2.outShape, "int32"), s2 = r2.strideHeight, u2 = r2.strideWidth, c2 = r2.dilationHeight, l2 = r2.dilationWidth, h2 = r2.effectiveFilterHeight, f2 = r2.effectiveFilterWidth, d2 = r2.padInfo.top, p2 = r2.padInfo.left, v = er(e2, n2, t2), g = 0; g < r2.batchSize; ++g)
      for (var m2 = 0; m2 < r2.inChannels; ++m2)
        for (var y2 = 0; y2 < r2.outHeight; ++y2) {
          for (var x2 = y2 * s2 - d2, b2 = x2; b2 < 0; )
            b2 += c2;
          for (var w2 = Math.min(r2.inHeight, h2 + x2), C2 = 0; C2 < r2.outWidth; ++C2) {
            for (var E2 = C2 * u2 - p2, R2 = E2; R2 < 0; )
              R2 += l2;
            for (var I2 = Math.min(r2.inWidth, f2 + E2), k2 = Number.NEGATIVE_INFINITY, S2 = -1, A2 = b2; A2 < w2; A2 += c2)
              for (var T2 = A2 - x2, D2 = R2; D2 < I2; D2 += l2) {
                var N2 = D2 - E2, F2 = v.get(g, A2, D2, m2);
                F2 > k2 && (k2 = F2, S2 = o2 ? a2 ? ((g * r2.inHeight + A2) * r2.inWidth + D2) * r2.inChannels + m2 : (A2 * r2.inWidth + D2) * r2.inChannels + m2 : T2 * f2 + N2);
              }
            i2.set(S2, g, y2, C2, m2);
          }
        }
    return i2;
  }
  function gf(t2, e2, n2, r2) {
    if ("linear" === n2)
      return t2.linear(e2);
    if ("relu" === n2)
      return t2.relu(e2);
    if ("elu" === n2)
      return t2.elu(e2);
    if ("relu6" === n2)
      return t2.relu6(e2);
    if ("prelu" === n2)
      return t2.prelu(e2, r2);
    throw new Error("Activation " + n2 + " has not been implemented for the CPU backend.");
  }
  var mf = function(t2) {
    function o2() {
      var e2 = t2.call(this) || this;
      return e2.blockSize = 48, e2.firstUse = true, e2.data = new ca(e2, Lt), e2;
    }
    return e(o2, t2), o2.prototype.write = function(t3, e2, n2) {
      this.firstUse && (this.firstUse = false, i().get("IS_NODE") && dn("\n============================\nHi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));
      var r2 = {};
      return this.data.set(r2, { values: t3, dtype: n2 }), r2;
    }, o2.prototype.move = function(t3, e2, n2, r2) {
      this.data.set(t3, { values: e2, dtype: r2 });
    }, o2.prototype.numDataIds = function() {
      return this.data.numDataIds();
    }, o2.prototype.read = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          return [2, this.readSync(t3)];
        });
      });
    }, o2.prototype.readSync = function(t3) {
      var e2 = this.data.get(t3), n2 = e2.dtype, r2 = e2.complexTensors;
      return "complex64" === n2 ? Aa(this.readSync(r2.real.dataId), this.readSync(r2.imag.dataId)) : this.data.get(t3).values;
    }, o2.prototype.bufferSync = function(t3) {
      var e2 = this.readSync(t3.dataId), n2 = e2;
      if ("string" === t3.dtype)
        try {
          n2 = e2.map(function(t4) {
            return ot(t4);
          });
        } catch (t4) {
          throw new Error("Failed to decode encoded string bytes into utf-8");
        }
      return er(t3.shape, t3.dtype, n2);
    }, o2.prototype.makeOutput = function(t3, e2, n2) {
      var r2 = this.write(t3, e2, n2);
      return Lt.makeTensorFromDataId(r2, e2, n2, this);
    }, o2.prototype.disposeData = function(t3) {
      if (this.data.has(t3)) {
        var e2 = this.data.get(t3).complexTensors;
        null != e2 && (e2.real.dispose(), e2.imag.dispose()), this.data.delete(t3);
      }
    }, o2.prototype.time = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2;
        return r(this, function(n2) {
          return e2 = et(), t3(), [2, { kernelMs: et() - e2 }];
        });
      });
    }, o2.prototype.memory = function() {
      return { unreliable: true, reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."] };
    }, o2.prototype.complex = function(t3, e2) {
      var n2 = this.makeOutput(null, t3.shape, "complex64");
      return this.data.get(n2.dataId).complexTensors = { real: Lt.keep(t3.clone()), imag: Lt.keep(e2.clone()) }, n2;
    }, o2.prototype.real = function(t3) {
      return this.data.get(t3.dataId).complexTensors.real.clone();
    }, o2.prototype.imag = function(t3) {
      return this.data.get(t3.dataId).complexTensors.imag.clone();
    }, o2.prototype.slice = function(t3, e2, n2) {
      if (df(t3, "slice"), $o(t3.shape, e2, n2)) {
        var r2 = Qo(e2, t3.strides), o3 = k(n2);
        return Fn(this.readSync(t3.dataId).subarray(r2, r2 + o3), n2, t3.dtype);
      }
      for (var a2 = er(n2, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; ++s2) {
        var u2 = a2.indexToLoc(s2).map(function(t4, n3) {
          return t4 + e2[n3];
        });
        a2.values[s2] = i2.get.apply(i2, u2);
      }
      return a2.toTensor();
    }, o2.prototype.stridedSlice = function(t3, e2, n2, r2) {
      df(t3, "stridedSlice");
      var o3 = jo(e2, n2, r2);
      if (o3.some(function(t4) {
        return 0 === t4;
      }))
        return Fn([], o3);
      for (var a2 = er(o3, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; s2++) {
        for (var u2 = a2.indexToLoc(s2), c2 = new Array(u2.length), l2 = 0; l2 < c2.length; l2++)
          c2[l2] = u2[l2] * r2[l2] + e2[l2];
        a2.set.apply(a2, [i2.get.apply(i2, c2)].concat(u2));
      }
      return a2.toTensor();
    }, o2.prototype.diag = function(t3) {
      for (var e2 = this.readSync(t3.dataId), n2 = er([t3.size, t3.size], t3.dtype), r2 = n2.values, o3 = 0; o3 < e2.length; o3++)
        r2[o3 * t3.size + o3] = e2[o3];
      return n2.toTensor();
    }, o2.prototype.unstack = function(t3, e2) {
      for (var n2 = t3.shape[e2], r2 = new Array(t3.rank - 1), o3 = 0, a2 = 0; a2 < t3.rank; a2++)
        a2 !== e2 && (r2[o3++] = t3.shape[a2]);
      var i2 = new Array(t3.rank).fill(0), s2 = t3.shape.slice();
      s2[e2] = 1;
      var u2 = new Array(n2);
      for (a2 = 0; a2 < u2.length; a2++)
        i2[e2] = a2, u2[a2] = this.slice(t3, i2, s2).reshape(r2);
      return u2;
    }, o2.prototype.reverse = function(t3, e2) {
      df(t3, "reverse");
      for (var n2 = er(t3.shape, t3.dtype), r2 = this.bufferSync(t3), o3 = function(o4) {
        var a3 = n2.indexToLoc(o4), i2 = a3.slice();
        e2.forEach(function(e3) {
          return i2[e3] = t3.shape[e3] - 1 - i2[e3];
        }), n2.set.apply(n2, [r2.get.apply(r2, i2)].concat(a3));
      }, a2 = 0; a2 < n2.size; a2++)
        o3(a2);
      return n2.toTensor();
    }, o2.prototype.concat = function(t3, e2) {
      var n2 = this;
      if ("complex64" === t3[0].dtype) {
        var r2 = t3.map(function(t4) {
          return Dn(t4);
        }), o3 = t3.map(function(t4) {
          return Nn(t4);
        });
        return Tn(this.concat(r2, e2), this.concat(o3, e2));
      }
      var a2 = t3.map(function(t4) {
        var n3 = k(t4.shape.slice(e2));
        return t4.as2D(-1, n3);
      }), i2 = Sn(a2.map(function(t4) {
        return t4.shape;
      }), 1), s2 = er(i2, t3[0].dtype).values;
      if (1 === a2[0].shape[0]) {
        var u2 = 0;
        a2.forEach(function(t4) {
          s2.set(n2.readSync(t4.dataId), u2), u2 += t4.size;
        });
      } else {
        var c2 = 0;
        a2.forEach(function(t4) {
          for (var e3 = n2.readSync(t4.dataId), r3 = 0, o4 = 0; o4 < t4.shape[0]; ++o4)
            for (var a3 = o4 * i2[1] + c2, u3 = 0; u3 < t4.shape[1]; ++u3)
              s2[a3 + u3] = e3[r3++];
          c2 += t4.shape[1];
        });
      }
      var l2 = Sn(t3.map(function(t4) {
        return t4.shape;
      }), e2);
      return Fn(s2, l2, t3[0].dtype);
    }, o2.prototype.neg = function(t3) {
      return df(t3, "neg"), this.multiply(On(-1), t3);
    }, o2.prototype.add = function(t3, e2) {
      return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
        return { real: t4 + n2, imag: e3 + r2 };
      }) : this.broadcastedBinaryOp(t3, e2, Tt(t3.dtype, e2.dtype), function(t4, e3) {
        return t4 + e3;
      });
    }, o2.prototype.addN = function(t3) {
      var e2 = this;
      df(t3, "addN");
      for (var n2 = t3.map(function(t4) {
        return e2.readSync(t4.dataId);
      }), r2 = er(t3[0].shape, t3[0].dtype), o3 = r2.values, a2 = 0; a2 < t3.length; a2++)
        for (var i2 = n2[a2], s2 = 0; s2 < o3.length; s2++)
          o3[s2] += i2[s2];
      return r2.toTensor();
    }, o2.prototype.softmax = function(t3, e2) {
      var n2 = O([e2], t3.shape), r2 = this.max(t3, n2), o3 = wn(r2.shape, n2), a2 = this.subtract(t3, r2.reshape(o3)), i2 = this.exp(a2), s2 = this.sum(i2, n2).reshape(o3);
      return Bo(i2, s2);
    }, o2.prototype.subtract = function(t3, e2) {
      return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
        return { real: t4 - n2, imag: e3 - r2 };
      }) : this.broadcastedBinaryOp(t3, e2, Tt(t3.dtype, e2.dtype), function(t4, e3) {
        return t4 - e3;
      });
    }, o2.prototype.pow = function(t3, e2) {
      return df([t3, e2], "pow"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        return Math.pow(t4, e3);
      });
    }, o2.prototype.batchMatMul = function(t3, e2, n2, r2) {
      df([t3, e2], "matMul");
      for (var o3 = n2 ? t3.shape[1] : t3.shape[2], a2 = n2 ? t3.shape[2] : t3.shape[1], i2 = r2 ? e2.shape[1] : e2.shape[2], s2 = t3.shape[0], u2 = this.readSync(t3.dataId), c2 = this.readSync(e2.dataId), l2 = n2 ? [t3.strides[0], 1, t3.strides[1]] : [t3.strides[0], t3.strides[1], 1], h2 = l2[0], f2 = l2[1], d2 = l2[2], p2 = r2 ? [1, e2.strides[1], e2.strides[0]] : [e2.strides[1], 1, e2.strides[0]], v = p2[0], g = p2[1], m2 = p2[2], y2 = a2 * i2, x2 = er([s2, a2, i2], t3.dtype), b2 = x2.values, w2 = this.blockSize, C2 = 0; C2 < s2; C2++)
        for (var E2 = 0; E2 < a2; E2 += w2)
          for (var R2 = 0; R2 < i2; R2 += w2)
            for (var I2 = 0; I2 < o3; I2 += w2)
              for (var k2 = Math.min(E2 + w2, a2), S2 = Math.min(R2 + w2, i2), A2 = Math.min(I2 + w2, o3), T2 = E2; T2 < k2; T2++)
                for (var D2 = R2; D2 < S2; D2++) {
                  for (var N2 = 0, F2 = I2; F2 < A2; F2++)
                    N2 += u2[C2 * h2 + T2 * f2 + F2 * d2] * c2[F2 * v + D2 * g + C2 * m2];
                  b2[C2 * y2 + (T2 * i2 + D2)] += N2;
                }
      return x2.toTensor();
    }, o2.prototype.fusedBatchMatMul = function(t3) {
      var e2 = t3.a, n2 = t3.b, r2 = t3.transposeA, o3 = t3.transposeB, a2 = t3.bias, i2 = t3.activation, s2 = t3.preluActivationWeights, u2 = this.batchMatMul(e2, n2, r2, o3);
      return a2 && (u2 = this.add(u2, a2)), i2 && (u2 = gf(this, u2, i2, s2)), u2;
    }, o2.prototype.multiply = function(t3, e2) {
      return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
        return { real: t4 * n2 - e3 * r2, imag: t4 * r2 + e3 * n2 };
      }) : this.broadcastedBinaryOp(t3, e2, Tt(t3.dtype, e2.dtype), function(t4, e3) {
        return t4 * e3;
      });
    }, o2.prototype.floorDiv = function(t3, e2) {
      df([t3, e2], "floorDiv");
      return this.broadcastedBinaryOp(t3, e2, "int32", function(t4, e3) {
        return Math.floor(t4 / e3);
      });
    }, o2.prototype.sum = function(t3, e2) {
      df(t3, "sum"), Cn("sum", e2, t3.rank);
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, Tt(t3.dtype, "int32")), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = 0, f2 = 0; f2 < i2; ++f2)
          h2 += u2[l2 + f2];
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.prod = function(t3, e2) {
      df(t3, "sum");
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, Tt(t3.dtype, "int32")), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = 1, f2 = 0; f2 < i2; ++f2)
          h2 *= u2[l2 + f2];
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
      df(t3, "unsortedSegmentSum");
      for (var r2 = [], o3 = t3.rank - e2.rank, a2 = 0; a2 < o3; ++a2)
        e2 = e2.expandDims(a2 + 1);
      for (a2 = 0; a2 < n2; ++a2) {
        var i2 = On(a2, "int32"), s2 = Kc(i2, e2).asType("float32").mul(t3).sum(0);
        r2.push(s2);
      }
      return hr(r2);
    }, o2.prototype.argMin = function(t3, e2) {
      df(t3, "argMin");
      var n2 = [e2];
      Cn("argMin", n2, t3.rank);
      for (var r2 = bn(t3.shape, n2), o3 = r2[0], a2 = r2[1], i2 = Gn(o3, "int32"), s2 = k(a2), u2 = this.readSync(i2.dataId), c2 = this.readSync(t3.dataId), l2 = 0; l2 < u2.length; ++l2) {
        for (var h2 = l2 * s2, f2 = c2[h2], d2 = 0, p2 = 0; p2 < s2; ++p2) {
          var v = c2[h2 + p2];
          v < f2 && (f2 = v, d2 = p2);
        }
        u2[l2] = d2;
      }
      return i2;
    }, o2.prototype.argMax = function(t3, e2) {
      df(t3, "argMax");
      var n2 = [e2];
      Cn("argMax", n2, t3.rank);
      for (var r2 = bn(t3.shape, n2), o3 = r2[0], a2 = r2[1], i2 = Gn(o3, "int32"), s2 = k(a2), u2 = this.readSync(i2.dataId), c2 = this.readSync(t3.dataId), l2 = 0; l2 < u2.length; ++l2) {
        for (var h2 = l2 * s2, f2 = c2[h2], d2 = 0, p2 = 0; p2 < s2; ++p2) {
          var v = c2[h2 + p2];
          v > f2 && (f2 = v, d2 = p2);
        }
        u2[l2] = d2;
      }
      return i2;
    }, o2.prototype.cumsum = function(t3, e2, n2, r2) {
      if (df(t3, "cumsum"), e2 !== t3.rank - 1)
        throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + e2);
      for (var o3 = Tt(t3.dtype, "int32"), a2 = Gn(t3.shape, o3), i2 = this.readSync(a2.dataId), s2 = this.readSync(t3.dataId), u2 = t3.shape[t3.rank - 1], c2 = r2 ? function(t4, e3) {
        return t4 + u2 - e3 - 1;
      } : function(t4, e3) {
        return t4 + e3;
      }, l2 = 0; l2 < s2.length; l2 += u2)
        for (var h2 = 0; h2 < u2; h2++) {
          var f2 = c2(l2, h2);
          if (0 === h2)
            i2[f2] = n2 ? 0 : s2[f2];
          else {
            var d2 = c2(l2, h2 - 1);
            i2[f2] = n2 ? s2[d2] + i2[d2] : s2[f2] + i2[d2];
          }
        }
      return a2;
    }, o2.prototype.equal = function(t3, e2) {
      return df([t3, e2], "equal"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 === e3 ? 1 : 0;
      });
    }, o2.prototype.notEqual = function(t3, e2) {
      return df([t3, e2], "notEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 !== e3 ? 1 : 0;
      });
    }, o2.prototype.less = function(t3, e2) {
      return df([t3, e2], "less"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 < e3 ? 1 : 0;
      });
    }, o2.prototype.lessEqual = function(t3, e2) {
      return df([t3, e2], "lessEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 <= e3 ? 1 : 0;
      });
    }, o2.prototype.greater = function(t3, e2) {
      return df([t3, e2], "greater"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 > e3 ? 1 : 0;
      });
    }, o2.prototype.greaterEqual = function(t3, e2) {
      return df([t3, e2], "greaterEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 >= e3 ? 1 : 0;
      });
    }, o2.prototype.logicalNot = function(t3) {
      df(t3, "logicalNot");
      for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = e2[r2] ? 0 : 1;
      return this.makeOutput(n2, t3.shape, "bool");
    }, o2.prototype.logicalAnd = function(t3, e2) {
      return df([t3, e2], "logicalAnd"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 && e3;
      });
    }, o2.prototype.logicalOr = function(t3, e2) {
      return df([t3, e2], "logicalOr"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
        return t4 || e3;
      });
    }, o2.prototype.select = function(t3, e2, n2) {
      df([t3, e2, n2], "select");
      for (var r2 = this.readSync(t3.dataId), o3 = this.readSync(e2.dataId), a2 = this.readSync(n2.dataId), i2 = Gn(e2.shape, Tt(e2.dtype, n2.dtype)), s2 = this.readSync(i2.dataId), u2 = 0, c2 = 0 === t3.rank || t3.rank > 1 || 1 === e2.rank ? 1 : k(e2.shape.slice(1)), l2 = 0; l2 < r2.length; l2++)
        for (var h2 = 0; h2 < c2; h2++)
          1 === r2[l2] ? s2[u2++] = o3[l2] : s2[u2++] = a2[l2];
      return i2;
    }, o2.prototype.where = function(t3) {
      df([t3], "where");
      var e2 = this.readSync(t3.dataId);
      return Ga(t3.shape, e2);
    }, o2.prototype.topk = function(t3, e2, n2) {
      return df(t3, "topk"), za(this.readSync(t3.dataId), t3.shape, t3.dtype, e2);
    }, o2.prototype.min = function(t3, e2) {
      df(t3, "min"), Cn("min", e2, t3.rank);
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
          var d2 = u2[l2 + f2];
          d2 < h2 && (h2 = d2);
        }
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.minimum = function(t3, e2) {
      return df([t3, e2], "minimum"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        return Math.min(t4, e3);
      });
    }, o2.prototype.mod = function(t3, e2) {
      return df([t3, e2], "mod"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        var n2 = t4 % e3;
        return t4 < 0 && e3 < 0 || t4 >= 0 && e3 >= 0 ? n2 : (n2 + e3) % e3;
      });
    }, o2.prototype.max = function(t3, e2) {
      df(t3, "max"), Cn("max", e2, t3.rank);
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
          var d2 = u2[l2 + f2];
          d2 > h2 && (h2 = d2);
        }
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.maximum = function(t3, e2) {
      return df([t3, e2], "maximum"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        return Math.max(t4, e3);
      });
    }, o2.prototype.all = function(t3, e2) {
      df(t3, "all"), Cn("all", e2, t3.rank);
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
          var d2 = u2[l2 + f2];
          h2 = h2 && d2;
        }
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.any = function(t3, e2) {
      df(t3, "any"), Cn("any", e2, t3.rank);
      for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
        for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
          var d2 = u2[l2 + f2];
          h2 = h2 || d2;
        }
        s2[c2] = h2;
      }
      return a2;
    }, o2.prototype.squaredDifference = function(t3, e2) {
      return df([t3, e2], "squaredDifference"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        var n2 = t4 - e3;
        return n2 * n2;
      });
    }, o2.prototype.ceil = function(t3) {
      df(t3, "ceil");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = Math.ceil(e2[r2]);
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.floor = function(t3) {
      df(t3, "floor");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = Math.floor(e2[r2]);
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.sign = function(t3) {
      df(t3, "x");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        e2[r2] < 0 ? n2[r2] = -1 : e2[r2] > 0 ? n2[r2] = 1 : n2[r2] = 0;
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.isNaN = function(t3) {
      df(t3, "x");
      for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        Number.isNaN(e2[r2]) && (n2[r2] = 1);
      return this.makeOutput(n2, t3.shape, "bool");
    }, o2.prototype.isInf = function(t3) {
      df(t3, "x");
      for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        Math.abs(e2[r2]) === 1 / 0 && (n2[r2] = 1);
      return this.makeOutput(n2, t3.shape, "bool");
    }, o2.prototype.isFinite = function(t3) {
      df(t3, "x");
      for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        Number.isFinite(e2[r2]) && (n2[r2] = 1);
      return this.makeOutput(n2, t3.shape, "bool");
    }, o2.prototype.round = function(t3) {
      df(t3, "round");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
        var o3 = Math.floor(e2[r2]);
        e2[r2] - o3 < 0.5 ? n2[r2] = Math.floor(e2[r2]) : e2[r2] - o3 > 0.5 ? n2[r2] = Math.ceil(e2[r2]) : n2[r2] = o3 % 2 == 0 ? o3 : o3 + 1;
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.exp = function(t3) {
      df(t3, "exp");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = Math.exp(e2[r2]);
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.expm1 = function(t3) {
      df(t3, "expm1");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = Math.expm1(e2[r2]);
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.log = function(t3) {
      df(t3, "log");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
        var o3 = e2[r2];
        n2[r2] = Math.log(o3);
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.log1p = function(t3) {
      df(t3, "log1p");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
        var o3 = e2[r2];
        n2[r2] = Math.log1p(o3);
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.sqrt = function(t3) {
      df(t3, "sqrt");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
        var o3 = e2[r2];
        n2[r2] = Math.sqrt(o3);
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.rsqrt = function(t3) {
      df(t3, "rsqrt");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
        var o3 = e2[r2];
        n2[r2] = 1 / Math.sqrt(o3);
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.reciprocal = function(t3) {
      df(t3, "reciprocal");
      for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
        n2[r2] = 1 / e2[r2];
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.linear = function(t3) {
      return t3;
    }, o2.prototype.relu = function(t3) {
      df(t3, "relu");
      for (var e2 = Gn(t3.shape, t3.dtype), n2 = this.readSync(e2.dataId), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3)
        n2[o3] = Math.max(0, r2[o3]);
      return e2;
    }, o2.prototype.relu6 = function(t3) {
      df(t3, "relu");
      for (var e2 = Gn(t3.shape, t3.dtype), n2 = this.readSync(e2.dataId), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3)
        n2[o3] = Math.min(Math.max(0, r2[o3]), 6);
      return e2;
    }, o2.prototype.prelu = function(t3, e2) {
      return df([t3, e2], "prelu"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        return t4 < 0 ? e3 * t4 : t4;
      });
    }, o2.prototype.elu = function(t3) {
      df(t3, "elu");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2) {
        var o3 = n2[r2];
        e2[r2] = o3 >= 0 ? o3 : Math.exp(o3) - 1;
      }
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.eluDer = function(t3, e2) {
      df([t3, e2], "eluDer");
      for (var n2 = new Float32Array(e2.size), r2 = this.readSync(e2.dataId), o3 = this.readSync(t3.dataId), a2 = 0; a2 < r2.length; ++a2) {
        var i2 = r2[a2];
        n2[a2] = i2 >= 1 ? o3[a2] : o3[a2] * (i2 + 1);
      }
      return this.makeOutput(n2, e2.shape, "float32");
    }, o2.prototype.selu = function(t3) {
      df(t3, "selu");
      for (var e2 = su, n2 = uu, r2 = new Float32Array(t3.size), o3 = this.readSync(t3.dataId), a2 = 0; a2 < o3.length; ++a2) {
        var i2 = o3[a2];
        r2[a2] = i2 >= 0 ? n2 * i2 : e2 * (Math.exp(i2) - 1);
      }
      return this.makeOutput(r2, t3.shape, "float32");
    }, o2.prototype.clip = function(t3, e2, n2) {
      df(t3, "clip");
      for (var r2 = new Float32Array(t3.size), o3 = this.readSync(t3.dataId), a2 = 0; a2 < o3.length; ++a2) {
        var i2 = o3[a2];
        r2[a2] = i2 > n2 ? n2 : i2 < e2 ? e2 : i2;
      }
      return this.makeOutput(r2, t3.shape, "float32");
    }, o2.prototype.abs = function(t3) {
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.abs(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.complexAbs = function(t3) {
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < t3.size; ++r2) {
        var o3 = n2[2 * r2], a2 = n2[2 * r2 + 1];
        e2[r2] = Math.hypot(o3, a2);
      }
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.int = function(t3) {
      df(t3, "int");
      for (var e2 = new Int32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = n2[r2];
      return this.makeOutput(e2, t3.shape, "int32");
    }, o2.prototype.sigmoid = function(t3) {
      df(t3, "sigmoid");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = 1 / (1 + Math.exp(-n2[r2]));
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.softplus = function(t3) {
      df(t3, "softplus");
      for (var e2 = Math.log(11920928955078125e-23) + 2, n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3) {
        var a2 = r2[o3] > -e2, i2 = r2[o3] < e2, s2 = Math.exp(r2[o3]), u2 = void 0;
        u2 = i2 ? s2 : a2 ? r2[o3] : Math.log(1 + s2), n2[o3] = u2;
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.sin = function(t3) {
      df(t3, "sin");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.sin(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.cos = function(t3) {
      df(t3, "cos");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.cos(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.tan = function(t3) {
      df(t3, "tan");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.tan(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.asin = function(t3) {
      df(t3, "asin");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.asin(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.acos = function(t3) {
      df(t3, "acos");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.acos(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.atan = function(t3) {
      df(t3, "atan");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.atan(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.atan2 = function(t3, e2) {
      return df([t3, e2], "atan2"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
        return Math.atan2(t4, e3);
      });
    }, o2.prototype.sinh = function(t3) {
      df(t3, "sinh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.sinh(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.cosh = function(t3) {
      df(t3, "cosh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.cosh(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.tanh = function(t3) {
      df(t3, "tanh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = T(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.asinh = function(t3) {
      df(t3, "asinh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.asinh(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.acosh = function(t3) {
      df(t3, "acosh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.acosh(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.atanh = function(t3) {
      df(t3, "atanh");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
        e2[r2] = Math.atanh(n2[r2]);
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.erf = function(t3) {
      df(t3, "erf");
      for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2) {
        var o3 = Math.sign(n2[r2]), a2 = Math.abs(n2[r2]), i2 = 1 / (1 + 0.3275911 * a2);
        e2[r2] = o3 * (1 - ((((1.061405429 * i2 - 1.453152027) * i2 + 1.421413741) * i2 - 0.284496736) * i2 + 0.254829592) * i2 * Math.exp(-a2 * a2));
      }
      return this.makeOutput(e2, t3.shape, "float32");
    }, o2.prototype.step = function(t3, e2) {
      void 0 === e2 && (e2 = 0), df(t3, "step");
      for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3) {
        var a2 = r2[o3];
        isNaN(a2) ? n2[o3] = NaN : n2[o3] = a2 > 0 ? 1 : e2;
      }
      return this.makeOutput(n2, t3.shape, "float32");
    }, o2.prototype.fusedConv2d = function(t3) {
      var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, i2 = t3.preluActivationWeights, s2 = this.conv2d(e2, n2, r2);
      return o3 && (s2 = this.add(s2, o3)), a2 && (s2 = gf(this, s2, a2, i2)), s2;
    }, o2.prototype.conv2d = function(t3, e2, n2) {
      df([t3, e2], "conv2d");
      for (var r2 = n2.filterHeight, o3 = n2.filterWidth, a2 = n2.dilationHeight, i2 = n2.dilationWidth, s2 = n2.padInfo.left, u2 = n2.padInfo.top, c2 = "channelsLast" === n2.dataFormat, l2 = er(n2.outShape, t3.dtype), h2 = t3.strides[0], f2 = c2 ? t3.strides[1] : t3.strides[2], d2 = c2 ? t3.strides[2] : 1, p2 = c2 ? 1 : t3.strides[1], v = l2.strides[0], g = c2 ? l2.strides[1] : l2.strides[2], m2 = c2 ? l2.strides[2] : 1, y2 = c2 ? 1 : l2.strides[1], x2 = this.readSync(t3.dataId), b2 = this.readSync(e2.dataId), w2 = l2.values, C2 = 0; C2 < n2.batchSize; ++C2)
        for (var E2 = C2 * h2, R2 = C2 * v, I2 = 0; I2 < n2.outHeight; ++I2)
          for (var k2 = R2 + I2 * g, S2 = I2 * n2.strideHeight - u2, A2 = 0; A2 < r2; A2++) {
            var T2 = S2 + A2 * a2;
            if (!(T2 < 0 || T2 >= n2.inHeight))
              for (var D2 = A2 * e2.strides[0], N2 = E2 + T2 * f2, F2 = 0; F2 < n2.outWidth; ++F2)
                for (var _2 = k2 + F2 * m2, O2 = F2 * n2.strideWidth - s2, M2 = 0; M2 < o3; M2++) {
                  var B2 = O2 + M2 * i2;
                  if (!(B2 < 0 || B2 >= n2.inWidth))
                    for (var P2 = N2 + B2 * d2, L2 = D2 + M2 * e2.strides[1], W2 = 0; W2 < n2.inChannels; ++W2) {
                      for (var U2 = x2[P2 + W2 * p2], V2 = 0; V2 < n2.outChannels; ++V2)
                        w2[_2 + V2 * y2] += U2 * b2[L2 + V2];
                      L2 += n2.outChannels;
                    }
                }
          }
      return l2.toTensor();
    }, o2.prototype.conv3d = function(t3, e2, n2) {
      for (var r2 = n2.filterDepth, o3 = n2.filterHeight, a2 = n2.filterWidth, i2 = n2.dilationDepth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.padInfo.front, l2 = n2.padInfo.left, h2 = n2.padInfo.top, f2 = er(n2.outShape, t3.dtype), d2 = this.readSync(t3.dataId), p2 = this.readSync(e2.dataId), v = f2.values, g = 0; g < n2.batchSize; ++g)
        for (var m2 = g * t3.strides[0], y2 = g * f2.strides[0], x2 = 0; x2 < n2.outDepth; ++x2)
          for (var b2 = y2 + x2 * f2.strides[1], w2 = x2 * n2.strideDepth - c2, C2 = 0; C2 < r2; C2++) {
            var E2 = w2 + C2 * i2;
            if (!(E2 < 0 || E2 >= n2.inDepth))
              for (var R2 = C2 * e2.strides[0], I2 = m2 + E2 * t3.strides[1], k2 = 0; k2 < n2.outHeight; ++k2)
                for (var S2 = b2 + k2 * f2.strides[2], A2 = k2 * n2.strideHeight - h2, T2 = 0; T2 < o3; T2++) {
                  var D2 = A2 + T2 * s2;
                  if (!(D2 < 0 || D2 >= n2.inHeight))
                    for (var N2 = R2 + T2 * e2.strides[1], F2 = I2 + D2 * t3.strides[2], _2 = 0; _2 < n2.outWidth; ++_2)
                      for (var O2 = S2 + _2 * n2.outChannels, M2 = _2 * n2.strideWidth - l2, B2 = 0; B2 < a2; B2++) {
                        var P2 = M2 + B2 * u2;
                        if (!(P2 < 0 || P2 >= n2.inWidth))
                          for (var L2 = N2 + B2 * e2.strides[2], W2 = F2 + P2 * n2.inChannels, U2 = L2, V2 = 0; V2 < n2.inChannels; ++V2) {
                            for (var z2 = d2[W2 + V2], G2 = 0; G2 < n2.outChannels; ++G2)
                              v[O2 + G2] += z2 * p2[U2 + G2];
                            U2 += n2.outChannels;
                          }
                      }
                }
          }
      return f2.toTensor();
    }, o2.prototype.conv2dDerInput = function(t3, e2, n2) {
      df([t3, e2], "conv2dDerInput");
      for (var r2 = er(n2.inShape, "float32"), o3 = r2.values, a2 = this.readSync(t3.dataId), i2 = this.readSync(e2.dataId), s2 = e2.strides, u2 = s2[0], c2 = s2[1], l2 = s2[2], h2 = n2.batchSize, f2 = n2.filterHeight, d2 = n2.filterWidth, p2 = n2.inChannels, v = n2.inHeight, g = n2.inWidth, m2 = n2.outChannels, y2 = n2.outHeight, x2 = n2.outWidth, b2 = n2.strideHeight, w2 = n2.strideWidth, C2 = n2.dataFormat, E2 = f2 - 1 - n2.padInfo.top, R2 = d2 - 1 - n2.padInfo.left, I2 = "channelsLast" === C2, k2 = r2.strides[0], S2 = I2 ? r2.strides[1] : r2.strides[2], A2 = I2 ? r2.strides[2] : 1, T2 = I2 ? 1 : r2.strides[1], D2 = t3.strides[0], N2 = I2 ? t3.strides[1] : t3.strides[2], F2 = I2 ? t3.strides[2] : 1, _2 = I2 ? 1 : t3.strides[1], O2 = 0; O2 < h2; ++O2)
        for (var M2 = 0; M2 < p2; ++M2)
          for (var B2 = 0; B2 < v; ++B2)
            for (var P2 = B2 - E2, L2 = Math.max(0, Math.ceil(P2 / b2)), W2 = Math.min(y2, (f2 + P2) / b2), U2 = 0; U2 < g; ++U2) {
              for (var V2 = U2 - R2, z2 = Math.max(0, Math.ceil(V2 / w2)), G2 = Math.min(x2, (d2 + V2) / w2), H2 = 0, q2 = L2; q2 < W2; ++q2)
                for (var K2 = q2 * b2 - P2, j2 = z2; j2 < G2; ++j2)
                  for (var X2 = D2 * O2 + N2 * q2 + F2 * j2, Y2 = u2 * (f2 - 1 - K2) + c2 * (d2 - 1 - (j2 * w2 - V2)) + l2 * M2, $2 = 0; $2 < m2; ++$2) {
                    H2 += a2[X2 + _2 * $2] * i2[Y2 + $2];
                  }
              o3[k2 * O2 + S2 * B2 + A2 * U2 + T2 * M2] = H2;
            }
      return r2.toTensor();
    }, o2.prototype.conv3dDerInput = function(t3, e2, n2) {
      for (var r2 = er(n2.inShape, "float32"), o3 = r2.values, a2 = r2.strides, i2 = a2[0], s2 = a2[1], u2 = a2[2], c2 = a2[3], l2 = this.readSync(t3.dataId), h2 = t3.strides, f2 = h2[0], d2 = h2[1], p2 = h2[2], v = h2[3], g = this.readSync(e2.dataId), m2 = e2.strides, y2 = m2[0], x2 = m2[1], b2 = m2[2], w2 = m2[3], C2 = n2.batchSize, E2 = n2.filterDepth, R2 = n2.filterHeight, I2 = n2.filterWidth, k2 = n2.inChannels, S2 = n2.inDepth, A2 = n2.inHeight, T2 = n2.inWidth, D2 = n2.outChannels, N2 = n2.outDepth, F2 = n2.outHeight, _2 = n2.outWidth, O2 = n2.strideDepth, M2 = n2.strideHeight, B2 = n2.strideWidth, P2 = E2 - 1 - n2.padInfo.front, L2 = R2 - 1 - n2.padInfo.top, W2 = I2 - 1 - n2.padInfo.left, U2 = 0; U2 < C2; ++U2)
        for (var V2 = 0; V2 < k2; ++V2)
          for (var z2 = 0; z2 < S2; ++z2)
            for (var G2 = z2 - P2, H2 = Math.max(0, Math.ceil(G2 / O2)), q2 = Math.min(N2, (E2 + G2) / O2), K2 = 0; K2 < A2; ++K2)
              for (var j2 = K2 - L2, X2 = Math.max(0, Math.ceil(j2 / M2)), Y2 = Math.min(F2, (R2 + j2) / M2), $2 = 0; $2 < T2; ++$2) {
                for (var Q2 = $2 - W2, J2 = Math.max(0, Math.ceil(Q2 / B2)), Z2 = Math.min(_2, (I2 + Q2) / B2), tt2 = 0, et2 = H2; et2 < q2; ++et2)
                  for (var nt2 = et2 * O2 - G2, rt2 = X2; rt2 < Y2; ++rt2)
                    for (var ot2 = rt2 * M2 - j2, at2 = J2; at2 < Z2; ++at2)
                      for (var it2 = f2 * U2 + d2 * et2 + p2 * rt2 + v * at2, st2 = y2 * (E2 - 1 - nt2) + x2 * (R2 - 1 - ot2) + b2 * (I2 - 1 - (at2 * B2 - Q2)) + w2 * V2, ut2 = 0; ut2 < D2; ++ut2) {
                        tt2 += l2[it2 + ut2] * g[st2 + ut2];
                      }
                o3[i2 * U2 + s2 * z2 + u2 * K2 + c2 * $2 + V2] = tt2;
              }
      return r2.toTensor();
    }, o2.prototype.conv2dDerFilter = function(t3, e2, n2) {
      df([t3, e2], "conv2dDerFilter");
      for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = "channelsLast" === n2.dataFormat, u2 = er(n2.filterShape, "float32"), c2 = n2.padInfo.left, l2 = n2.padInfo.top, h2 = this.bufferSync(t3), f2 = this.bufferSync(e2), d2 = 0; d2 < a2; ++d2)
        for (var p2 = Math.max(0, Math.ceil((l2 - d2) / r2)), v = Math.min(n2.outHeight, (n2.inHeight + l2 - d2) / r2), g = 0; g < i2; ++g)
          for (var m2 = Math.max(0, Math.ceil((c2 - g) / o3)), y2 = Math.min(n2.outWidth, (n2.inWidth + c2 - g) / o3), x2 = 0; x2 < n2.inChannels; ++x2)
            for (var b2 = 0; b2 < n2.outChannels; ++b2) {
              for (var w2 = 0, C2 = 0; C2 < n2.batchSize; ++C2)
                for (var E2 = p2; E2 < v; ++E2)
                  for (var R2 = d2 + E2 * r2 - l2, I2 = m2; I2 < y2; ++I2) {
                    var k2 = g + I2 * o3 - c2;
                    w2 += s2 ? h2.get(C2, R2, k2, x2) * f2.get(C2, E2, I2, b2) : h2.get(C2, x2, R2, k2) * f2.get(C2, b2, E2, I2);
                  }
              u2.set(w2, d2, g, x2, b2);
            }
      return u2.toTensor();
    }, o2.prototype.conv3dDerFilter = function(t3, e2, n2) {
      for (var r2 = n2.strideDepth, o3 = n2.strideHeight, a2 = n2.strideWidth, i2 = n2.filterDepth, s2 = n2.filterHeight, u2 = n2.filterWidth, c2 = er(n2.filterShape, "float32"), l2 = c2.values, h2 = c2.strides, f2 = h2[0], d2 = h2[1], p2 = h2[2], v = h2[3], g = this.readSync(e2.dataId), m2 = e2.strides, y2 = m2[0], x2 = m2[1], b2 = m2[2], w2 = m2[3], C2 = this.readSync(t3.dataId), E2 = t3.strides, R2 = E2[0], I2 = E2[1], k2 = E2[2], S2 = E2[3], A2 = n2.padInfo.front, T2 = n2.padInfo.left, D2 = n2.padInfo.top, N2 = 0; N2 < i2; ++N2)
        for (var F2 = Math.max(0, Math.ceil((A2 - N2) / r2)), _2 = Math.min(n2.outDepth, (n2.inDepth + A2 - N2) / r2), O2 = N2 * f2, M2 = 0; M2 < s2; ++M2)
          for (var B2 = Math.max(0, Math.ceil((D2 - M2) / o3)), P2 = Math.min(n2.outHeight, (n2.inHeight + D2 - M2) / o3), L2 = M2 * d2 + O2, W2 = 0; W2 < u2; ++W2)
            for (var U2 = Math.max(0, Math.ceil((T2 - W2) / a2)), V2 = Math.min(n2.outWidth, (n2.inWidth + T2 - W2) / a2), z2 = W2 * p2 + L2, G2 = 0; G2 < n2.inChannels; ++G2)
              for (var H2 = G2 * v + z2, q2 = 0; q2 < n2.outChannels; ++q2) {
                for (var K2 = 0, j2 = 0; j2 < n2.batchSize; ++j2)
                  for (var X2 = j2 * R2, Y2 = j2 * y2, $2 = F2; $2 < _2; ++$2)
                    for (var Q2 = (N2 + $2 * r2 - A2) * I2 + X2, J2 = $2 * x2 + Y2, Z2 = B2; Z2 < P2; ++Z2)
                      for (var tt2 = (M2 + Z2 * o3 - D2) * k2 + Q2, et2 = Z2 * b2 + J2, nt2 = U2; nt2 < V2; ++nt2) {
                        var rt2 = nt2 * w2 + et2;
                        K2 += C2[(W2 + nt2 * a2 - T2) * S2 + tt2 + G2] * g[rt2 + q2];
                      }
                l2[H2 + q2] = K2;
              }
      return c2.toTensor();
    }, o2.prototype.fusedDepthwiseConv2D = function(t3) {
      var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, i2 = t3.preluActivationWeights, s2 = this.depthwiseConv2D(e2, n2, r2);
      return o3 && (s2 = this.add(s2, o3)), a2 && (s2 = gf(this, s2, a2, i2)), s2;
    }, o2.prototype.depthwiseConv2D = function(t3, e2, n2) {
      df([t3, e2], "depthwiseConv2D");
      for (var r2 = n2.filterHeight, o3 = n2.filterWidth, a2 = n2.dilationHeight, i2 = n2.dilationWidth, s2 = n2.padInfo.left, u2 = n2.padInfo.top, c2 = n2.outChannels / n2.inChannels, l2 = er(n2.outShape, t3.dtype), h2 = this.readSync(t3.dataId), f2 = this.readSync(e2.dataId), d2 = l2.values, p2 = 0; p2 < n2.batchSize; ++p2)
        for (var v = p2 * t3.strides[0], g = p2 * l2.strides[0], m2 = 0; m2 < n2.outHeight; ++m2)
          for (var y2 = g + m2 * l2.strides[1], x2 = m2 * n2.strideHeight - s2, b2 = 0; b2 < r2; ++b2) {
            var w2 = x2 + b2 * a2;
            if (!(w2 < 0 || w2 >= n2.inHeight))
              for (var C2 = b2 * e2.strides[0], E2 = v + w2 * t3.strides[1], R2 = 0; R2 < n2.outWidth; ++R2)
                for (var I2 = y2 + R2 * l2.strides[2], k2 = R2 * n2.strideWidth - u2, S2 = 0; S2 < o3; ++S2) {
                  var A2 = k2 + S2 * i2;
                  if (!(A2 < 0 || A2 >= n2.inWidth))
                    for (var T2 = C2 + S2 * e2.strides[1], D2 = E2 + A2 * n2.inChannels, N2 = I2, F2 = T2, _2 = 0; _2 < n2.inChannels; ++_2) {
                      for (var O2 = h2[D2 + _2], M2 = 0; M2 < c2; ++M2)
                        d2[N2 + M2] += O2 * f2[F2 + M2];
                      N2 += c2, F2 += c2;
                    }
                }
          }
      return l2.toTensor();
    }, o2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
      df([t3, e2], "depthwiseConv2DDerInput");
      for (var r2 = er(n2.inShape, "float32"), o3 = r2.values, a2 = r2.strides, i2 = a2[0], s2 = a2[1], u2 = a2[2], c2 = this.readSync(t3.dataId), l2 = t3.strides, h2 = l2[0], f2 = l2[1], d2 = l2[2], p2 = this.readSync(e2.dataId), v = e2.strides, g = v[0], m2 = v[1], y2 = v[2], x2 = n2.batchSize, b2 = n2.filterHeight, w2 = n2.filterWidth, C2 = n2.inChannels, E2 = n2.inHeight, R2 = n2.inWidth, I2 = n2.outChannels, k2 = n2.outHeight, S2 = n2.outWidth, A2 = n2.strideHeight, T2 = n2.strideWidth, D2 = b2 - 1 - n2.padInfo.top, N2 = w2 - 1 - n2.padInfo.left, F2 = I2 / C2, _2 = 0; _2 < x2; ++_2)
        for (var O2 = 0; O2 < C2; ++O2)
          for (var M2 = 0; M2 < E2; ++M2)
            for (var B2 = M2 - D2, P2 = Math.max(0, Math.ceil(B2 / A2)), L2 = Math.min(k2, (b2 + B2) / A2), W2 = 0; W2 < R2; ++W2) {
              for (var U2 = W2 - N2, V2 = Math.max(0, Math.ceil(U2 / T2)), z2 = Math.min(S2, (w2 + U2) / T2), G2 = 0, H2 = P2; H2 < L2; ++H2)
                for (var q2 = H2 * A2 - B2, K2 = V2; K2 < z2; ++K2)
                  for (var j2 = h2 * _2 + f2 * H2 + d2 * K2, X2 = g * (b2 - 1 - q2) + m2 * (w2 - 1 - (K2 * T2 - U2)) + y2 * O2, Y2 = 0; Y2 < F2; ++Y2) {
                    G2 += c2[j2 + (O2 * F2 + Y2)] * p2[X2 + Y2];
                  }
              o3[i2 * _2 + s2 * M2 + u2 * W2 + O2] = G2;
            }
      return r2.toTensor();
    }, o2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
      df([t3, e2], "depthwiseConv2DDerFilter");
      for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = er(n2.filterShape, "float32"), u2 = n2.padInfo.left, c2 = n2.padInfo.top, l2 = n2.outChannels / n2.inChannels, h2 = this.bufferSync(t3), f2 = this.bufferSync(e2), d2 = 0; d2 < a2; ++d2)
        for (var p2 = Math.max(0, Math.ceil((c2 - d2) / r2)), v = Math.min(n2.outHeight, (n2.inHeight + c2 - d2) / r2), g = 0; g < i2; ++g)
          for (var m2 = Math.max(0, Math.ceil((u2 - g) / o3)), y2 = Math.min(n2.outWidth, (n2.inWidth + u2 - g) / o3), x2 = 0; x2 < n2.outChannels; ++x2) {
            for (var b2 = Math.trunc(x2 / l2), w2 = x2 % l2, C2 = 0, E2 = 0; E2 < n2.batchSize; ++E2)
              for (var R2 = p2; R2 < v; ++R2)
                for (var I2 = d2 + R2 * r2 - c2, k2 = m2; k2 < y2; ++k2) {
                  var S2 = g + k2 * o3 - u2;
                  C2 += h2.get(E2, I2, S2, b2) * f2.get(E2, R2, k2, x2);
                }
            s2.set(C2, d2, g, b2, w2);
          }
      return s2.toTensor();
    }, o2.prototype.tile = function(t3, e2) {
      return df(t3, "tile"), Va(this.bufferSync(t3), e2);
    }, o2.prototype.pad = function(t3, e2, n2) {
      df(t3, "pad");
      var r2 = e2.map(function(e3, n3) {
        return e3[0] + t3.shape[n3] + e3[1];
      }), o3 = e2.map(function(t4) {
        return t4[0];
      }), a2 = this.bufferSync(t3), i2 = er(r2, t3.dtype);
      0 !== n2 && i2.values.fill(n2);
      for (var s2 = 0; s2 < t3.size; s2++) {
        var u2 = a2.indexToLoc(s2), c2 = u2.map(function(t4, e3) {
          return t4 + o3[e3];
        });
        i2.set.apply(i2, [a2.get.apply(a2, u2)].concat(c2));
      }
      return i2.toTensor();
    }, o2.prototype.gather = function(t3, e2, n2) {
      df([t3, e2], "gather");
      var r2 = t3.shape.slice(), o3 = this.readSync(e2.dataId);
      r2[n2] = o3.length;
      for (var a2 = er(r2, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; ++s2) {
        var u2 = a2.indexToLoc(s2), c2 = u2.slice();
        c2[n2] = o3[u2[n2]];
        var l2 = i2.locToIndex(c2);
        a2.values[s2] = i2.values[l2];
      }
      return a2.toTensor();
    }, o2.prototype.batchToSpaceND = function(t3, e2, n2) {
      df([t3], "batchToSpaceND");
      var r2 = e2.reduce(function(t4, e3) {
        return t4 * e3;
      }), o3 = pr(t3.shape, e2, r2), a2 = vr(o3.length, e2.length), i2 = gr(t3.shape, e2, r2), s2 = mr(n2, e2.length), u2 = yr(i2, n2, e2.length);
      return ua(t3.reshape(o3), a2).reshape(i2).slice(s2, u2);
    }, o2.prototype.spaceToBatchND = function(t3, e2, n2) {
      df([t3], "spaceToBatchND");
      var r2 = e2.reduce(function(t4, e3) {
        return t4 * e3;
      }), o3 = [[0, 0]];
      o3.push.apply(o3, n2);
      for (var a2 = 1 + e2.length; a2 < t3.shape.length; ++a2)
        o3.push([0, 0]);
      var i2 = t3.pad(o3), s2 = pr(i2.shape, e2, r2, false), u2 = vr(s2.length, e2.length, false), c2 = gr(i2.shape, e2, r2, false);
      return ua(i2.reshape(s2), u2).reshape(c2);
    }, o2.prototype.maxPool = function(t3, e2) {
      return df(t3, "maxPool"), pf(this.readSync(t3.dataId), t3.shape, t3.dtype, t3.strides, e2, "max").toTensor();
    }, o2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
      df([e2, n2], "maxPoolBackprop");
      for (var o3 = this.readSync(e2.dataId), a2 = er(r2.outShape, e2.dtype, vf(o3, e2.shape, e2.dtype, r2).values), i2 = r2.strideHeight, s2 = r2.strideWidth, u2 = r2.dilationHeight, c2 = r2.dilationWidth, l2 = r2.effectiveFilterHeight, h2 = r2.effectiveFilterWidth, f2 = h2 - 1 - r2.padInfo.left, d2 = l2 - 1 - r2.padInfo.top, p2 = er(e2.shape, "float32"), v = this.bufferSync(t3), g = 0; g < r2.batchSize; ++g)
        for (var m2 = 0; m2 < r2.inChannels; ++m2)
          for (var y2 = 0; y2 < r2.inHeight; ++y2)
            for (var x2 = 0; x2 < r2.inWidth; ++x2) {
              for (var b2 = y2 - d2, w2 = x2 - f2, C2 = 0, E2 = 0; E2 < l2; E2 += u2) {
                var R2 = (b2 + E2) / i2;
                if (!(R2 < 0 || R2 >= r2.outHeight || Math.floor(R2) !== R2))
                  for (var I2 = 0; I2 < h2; I2 += c2) {
                    var k2 = (w2 + I2) / s2;
                    if (!(k2 < 0 || k2 >= r2.outWidth || Math.floor(k2) !== k2)) {
                      var S2 = l2 * h2 - 1 - a2.get(g, R2, k2, m2) === E2 * h2 + I2 ? 1 : 0;
                      if (0 !== S2)
                        C2 += v.get(g, R2, k2, m2) * S2;
                    }
                  }
              }
              p2.set(C2, g, y2, x2, m2);
            }
      return p2.toTensor();
    }, o2.prototype.avgPoolBackprop = function(t3, e2, n2) {
      df([t3, e2], "avgPoolBackprop");
      for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.effectiveFilterHeight, l2 = n2.effectiveFilterWidth, h2 = l2 - 1 - n2.padInfo.left, f2 = c2 - 1 - n2.padInfo.top, d2 = er(e2.shape, "float32"), p2 = 1 / (a2 * i2), v = this.bufferSync(t3), g = 0; g < n2.batchSize; ++g)
        for (var m2 = 0; m2 < n2.inChannels; ++m2)
          for (var y2 = 0; y2 < n2.inHeight; ++y2)
            for (var x2 = 0; x2 < n2.inWidth; ++x2) {
              for (var b2 = y2 - f2, w2 = x2 - h2, C2 = 0, E2 = 0; E2 < c2; E2 += s2) {
                var R2 = (b2 + E2) / r2;
                if (!(R2 < 0 || R2 >= n2.outHeight || Math.floor(R2) !== R2))
                  for (var I2 = 0; I2 < l2; I2 += u2) {
                    var k2 = (w2 + I2) / o3;
                    if (!(k2 < 0 || k2 >= n2.outWidth || Math.floor(k2) !== k2))
                      C2 += v.get(g, R2, k2, m2);
                  }
              }
              d2.set(C2 * p2, g, y2, x2, m2);
            }
      return d2.toTensor();
    }, o2.prototype.pool3d = function(t3, e2, n2) {
      df(t3, "pool3d");
      for (var r2 = e2.strideDepth, o3 = e2.strideHeight, a2 = e2.strideWidth, i2 = e2.dilationDepth, s2 = e2.dilationHeight, u2 = e2.dilationWidth, c2 = e2.effectiveFilterDepth, l2 = e2.effectiveFilterHeight, h2 = e2.effectiveFilterWidth, f2 = e2.padInfo.front, d2 = e2.padInfo.top, p2 = e2.padInfo.left, v = "max" === n2 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, g = this.readSync(t3.dataId), m2 = er(e2.outShape, t3.dtype), y2 = m2.values, x2 = e2.outShape[1] * e2.outShape[2] * e2.outShape[3] * e2.outShape[4], b2 = e2.outShape[2] * e2.outShape[3] * e2.outShape[4], w2 = e2.outShape[3] * e2.outShape[4], C2 = e2.outShape[4], E2 = 0; E2 < e2.batchSize; ++E2)
        for (var R2 = E2 * x2, I2 = E2 * t3.strides[0], k2 = 0; k2 < e2.inChannels; ++k2)
          for (var S2 = 0; S2 < e2.outDepth; ++S2) {
            for (var A2 = S2 * r2 - f2, T2 = A2; T2 < 0; )
              T2 += i2;
            for (var D2 = Math.min(e2.inDepth, c2 + A2), N2 = R2 + S2 * b2, F2 = 0; F2 < e2.outHeight; ++F2) {
              for (var _2 = F2 * o3 - d2, O2 = _2; O2 < 0; )
                O2 += s2;
              for (var M2 = Math.min(e2.inHeight, l2 + _2), B2 = N2 + F2 * w2, P2 = 0; P2 < e2.outWidth; ++P2) {
                for (var L2 = P2 * a2 - p2, W2 = L2; W2 < 0; )
                  W2 += u2;
                for (var U2 = Math.min(e2.inWidth, h2 + L2), V2 = B2 + P2 * C2, z2 = v, G2 = 0, H2 = 0, q2 = T2; q2 < D2; q2 += i2) {
                  for (var K2 = I2 + q2 * t3.strides[1], j2 = O2; j2 < M2; j2 += s2) {
                    for (var X2 = K2 + j2 * t3.strides[2], Y2 = W2; Y2 < U2; Y2 += u2) {
                      var $2 = g[X2 + Y2 * t3.strides[3] + k2];
                      if ("max" === n2 && $2 > z2 ? z2 = $2 : "avg" === n2 && (G2 += $2, H2++), isNaN(z2))
                        break;
                    }
                    if (isNaN(z2))
                      break;
                  }
                  if (isNaN(z2))
                    break;
                }
                y2[V2 + k2] = "avg" === n2 ? G2 / H2 : z2;
              }
            }
          }
      return m2.toTensor();
    }, o2.prototype.avgPool3d = function(t3, e2) {
      return df(t3, "avgPool3d"), this.pool3d(t3, e2, "avg").toFloat();
    }, o2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
      df([t3, e2], "avgPool3dBackprop");
      for (var r2 = n2.strideDepth, o3 = n2.strideHeight, a2 = n2.strideWidth, i2 = n2.filterDepth, s2 = n2.filterHeight, u2 = n2.filterWidth, c2 = n2.dilationDepth, l2 = n2.dilationHeight, h2 = n2.dilationWidth, f2 = n2.effectiveFilterDepth, d2 = n2.effectiveFilterHeight, p2 = n2.effectiveFilterWidth, v = f2 - 1 - n2.padInfo.front, g = p2 - 1 - n2.padInfo.left, m2 = d2 - 1 - n2.padInfo.top, y2 = er(e2.shape, "float32"), x2 = 1 / (i2 * s2 * u2), b2 = this.bufferSync(t3), w2 = 0; w2 < n2.batchSize; ++w2)
        for (var C2 = 0; C2 < n2.inChannels; ++C2)
          for (var E2 = 0; E2 < n2.inDepth; ++E2)
            for (var R2 = 0; R2 < n2.inHeight; ++R2)
              for (var I2 = 0; I2 < n2.inWidth; ++I2) {
                for (var k2 = E2 - v, S2 = R2 - m2, A2 = I2 - g, T2 = 0, D2 = 0; D2 < f2; D2 += c2) {
                  var N2 = (k2 + D2) / r2;
                  if (!(N2 < 0 || N2 >= n2.outDepth || Math.floor(N2) !== N2))
                    for (var F2 = 0; F2 < d2; F2 += l2) {
                      var _2 = (S2 + F2) / o3;
                      if (!(_2 < 0 || _2 >= n2.outHeight || Math.floor(_2) !== _2))
                        for (var O2 = 0; O2 < p2; O2 += h2) {
                          var M2 = (A2 + O2) / a2;
                          if (!(M2 < 0 || M2 >= n2.outWidth || Math.floor(M2) !== M2))
                            T2 += b2.get(w2, N2, _2, M2, C2);
                        }
                    }
                }
                y2.set(T2 * x2, w2, E2, R2, I2, C2);
              }
      return y2.toTensor();
    }, o2.prototype.maxPool3d = function(t3, e2) {
      return df(t3, "maxPool3d"), this.pool3d(t3, e2, "max").toFloat();
    }, o2.prototype.maxPool3dPositions = function(t3, e2) {
      for (var n2 = er(e2.outShape, "int32"), r2 = e2.strideDepth, o3 = e2.strideHeight, a2 = e2.strideWidth, i2 = e2.dilationDepth, s2 = e2.dilationHeight, u2 = e2.dilationWidth, c2 = e2.effectiveFilterDepth, l2 = e2.effectiveFilterHeight, h2 = e2.effectiveFilterWidth, f2 = e2.padInfo.front, d2 = e2.padInfo.top, p2 = e2.padInfo.left, v = this.bufferSync(t3), g = 0; g < e2.batchSize; ++g)
        for (var m2 = 0; m2 < e2.inChannels; ++m2)
          for (var y2 = 0; y2 < e2.outDepth; ++y2) {
            for (var x2 = y2 * r2 - f2, b2 = x2; b2 < 0; )
              b2 += i2;
            for (var w2 = Math.min(e2.inDepth, c2 + x2), C2 = 0; C2 < e2.outHeight; ++C2) {
              for (var E2 = C2 * o3 - d2, R2 = E2; R2 < 0; )
                R2 += s2;
              for (var I2 = Math.min(e2.inHeight, l2 + E2), k2 = 0; k2 < e2.outWidth; ++k2) {
                for (var S2 = k2 * a2 - p2, A2 = S2; A2 < 0; )
                  A2 += u2;
                for (var T2 = Math.min(e2.inWidth, h2 + S2), D2 = Number.NEGATIVE_INFINITY, N2 = -1, F2 = b2; F2 < w2; F2 += i2)
                  for (var _2 = F2 - x2, O2 = R2; O2 < I2; O2 += s2)
                    for (var M2 = O2 - E2, B2 = A2; B2 < T2; B2 += u2) {
                      var P2 = B2 - S2, L2 = v.get(g, F2, O2, B2, m2);
                      L2 >= D2 && (D2 = L2, N2 = _2 * l2 * h2 + M2 * l2 + P2);
                    }
                n2.set(N2, g, y2, C2, k2, m2);
              }
            }
          }
      return n2.toTensor();
    }, o2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
      df([e2, n2], "maxPool3dBackprop");
      for (var o3 = this.maxPool3dPositions(e2, r2), a2 = r2.strideDepth, i2 = r2.strideHeight, s2 = r2.strideWidth, u2 = r2.dilationDepth, c2 = r2.dilationHeight, l2 = r2.dilationWidth, h2 = r2.effectiveFilterDepth, f2 = r2.effectiveFilterHeight, d2 = r2.effectiveFilterWidth, p2 = h2 - 1 - r2.padInfo.front, v = d2 - 1 - r2.padInfo.left, g = f2 - 1 - r2.padInfo.top, m2 = er(e2.shape, "float32"), y2 = this.bufferSync(o3), x2 = this.bufferSync(t3), b2 = 0; b2 < r2.batchSize; ++b2)
        for (var w2 = 0; w2 < r2.inChannels; ++w2)
          for (var C2 = 0; C2 < r2.inDepth; ++C2)
            for (var E2 = 0; E2 < r2.inHeight; ++E2)
              for (var R2 = 0; R2 < r2.inWidth; ++R2) {
                for (var I2 = C2 - p2, k2 = E2 - g, S2 = R2 - v, A2 = 0, T2 = 0; T2 < h2; T2 += u2) {
                  var D2 = (I2 + T2) / a2;
                  if (!(D2 < 0 || D2 >= r2.outDepth || Math.floor(D2) !== D2))
                    for (var N2 = 0; N2 < f2; N2 += c2) {
                      var F2 = (k2 + N2) / i2;
                      if (!(F2 < 0 || F2 >= r2.outHeight || Math.floor(F2) !== F2))
                        for (var _2 = 0; _2 < d2; _2 += l2) {
                          var O2 = (S2 + _2) / s2;
                          if (!(O2 < 0 || O2 >= r2.outWidth || Math.floor(O2) !== O2)) {
                            var M2 = h2 * f2 * d2 - 1 - y2.get(b2, D2, F2, O2, w2) === T2 * f2 * d2 + N2 * d2 + _2 ? 1 : 0;
                            if (0 !== M2)
                              A2 += x2.get(b2, D2, F2, O2, w2) * M2;
                          }
                        }
                    }
                }
                m2.set(A2, b2, C2, E2, R2, w2);
              }
      return m2.toTensor();
    }, o2.prototype.cast = function(t3, e2) {
      return Ra(t3, e2, this);
    }, o2.prototype.reshape = function(t3, e2) {
      return Ia(t3, e2);
    }, o2.prototype.avgPool = function(t3, e2) {
      return df(t3, "avgPool"), df(t3, "maxPool"), pf(this.readSync(t3.dataId), t3.shape, t3.dtype, t3.strides, e2, "avg").toTensor().toFloat();
    }, o2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
      df(t3, "resizeBilinear");
      for (var o3 = t3.shape, a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(k([a2, e2, n2, u2])), h2 = [r2 && e2 > 1 ? i2 - 1 : i2, r2 && n2 > 1 ? s2 - 1 : s2], f2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], d2 = 0, p2 = h2[0] / f2[0], v = h2[1] / f2[1], g = 0; g < a2; g++)
        for (var m2 = 0; m2 < e2; m2++)
          for (var y2 = p2 * m2, x2 = Math.floor(y2), b2 = y2 - x2, w2 = Math.min(i2 - 1, Math.ceil(y2)), C2 = g * t3.strides[0] + x2 * t3.strides[1], E2 = g * t3.strides[0] + w2 * t3.strides[1], R2 = 0; R2 < n2; R2++)
            for (var I2 = v * R2, S2 = Math.floor(I2), A2 = I2 - S2, T2 = Math.min(s2 - 1, Math.ceil(I2)), D2 = C2 + S2 * t3.strides[2], N2 = E2 + S2 * t3.strides[2], F2 = C2 + T2 * t3.strides[2], _2 = E2 + T2 * t3.strides[2], O2 = 0; O2 < u2; O2++) {
              var M2 = c2[D2 + O2], B2 = c2[N2 + O2], P2 = M2 + (c2[F2 + O2] - M2) * A2, L2 = P2 + (B2 + (c2[_2 + O2] - B2) * A2 - P2) * b2;
              l2[d2++] = L2;
            }
      return Fn(l2, [a2, e2, n2, u2]);
    }, o2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
      df([t3, e2], "resizeBilinearBackprop");
      for (var r2 = e2.shape, o3 = r2[0], a2 = r2[1], i2 = r2[2], s2 = r2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(o3 * a2 * i2 * s2), f2 = [n2 && c2 > 1 ? a2 - 1 : a2, n2 && l2 > 1 ? i2 - 1 : i2], d2 = [n2 && c2 > 1 ? c2 - 1 : c2, n2 && l2 > 1 ? l2 - 1 : l2], p2 = f2[0] / d2[0], v = f2[1] / d2[1], g = this.readSync(t3.dataId), m2 = 0, y2 = 0; y2 < o3; y2++)
        for (var x2 = y2 * e2.strides[0], b2 = 0; b2 < c2; b2++)
          for (var w2 = b2 * p2, C2 = Math.floor(w2), E2 = Math.min(Math.ceil(w2), a2 - 1), R2 = x2 + C2 * e2.strides[1], I2 = x2 + E2 * e2.strides[1], k2 = w2 - C2, S2 = 1 - k2, A2 = 0; A2 < l2; A2++)
            for (var T2 = A2 * v, D2 = Math.floor(T2), N2 = Math.min(Math.ceil(T2), i2 - 1), F2 = T2 - D2, _2 = 1 - F2, O2 = R2 + D2 * e2.strides[2], M2 = R2 + N2 * e2.strides[2], B2 = I2 + D2 * e2.strides[2], P2 = I2 + N2 * e2.strides[2], L2 = S2 * _2, W2 = S2 * F2, U2 = k2 * _2, V2 = k2 * F2, z2 = 0; z2 < s2; z2++) {
              var G2 = g[m2++];
              h2[O2 + z2] += G2 * L2, h2[M2 + z2] += G2 * W2, h2[B2 + z2] += G2 * U2, h2[P2 + z2] += G2 * V2;
            }
      return Ln(h2, [o3, i2, a2, s2], e2.dtype);
    }, o2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
      df(t3, "resizeNearestNeighbor");
      for (var o3 = t3.shape, a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(a2 * e2 * n2 * u2), h2 = [r2 && e2 > 1 ? i2 - 1 : i2, r2 && n2 > 1 ? s2 - 1 : s2], f2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], d2 = h2[0] / f2[0], p2 = h2[1] / f2[1], v = 0, g = 0; g < a2; g++)
        for (var m2 = g * t3.strides[0], y2 = 0; y2 < e2; y2++)
          for (var x2 = d2 * y2, b2 = m2 + Math.min(i2 - 1, r2 ? Math.round(x2) : Math.floor(x2)) * t3.strides[1], w2 = 0; w2 < n2; w2++)
            for (var C2 = p2 * w2, E2 = b2 + Math.min(s2 - 1, r2 ? Math.round(C2) : Math.floor(C2)) * t3.strides[2], R2 = 0; R2 < u2; R2++) {
              var I2 = c2[E2 + R2];
              l2[v++] = I2;
            }
      return Fn(l2, [a2, e2, n2, u2], t3.dtype);
    }, o2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
      df([t3, e2], "resizeNearestNeighborBackprop");
      for (var r2 = e2.shape, o3 = r2[0], a2 = r2[1], i2 = r2[2], s2 = r2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(o3 * a2 * i2 * s2), f2 = this.readSync(t3.dataId), d2 = [n2 && c2 > 1 ? a2 - 1 : a2, n2 && l2 > 1 ? i2 - 1 : i2], p2 = [n2 && c2 > 1 ? c2 - 1 : c2, n2 && l2 > 1 ? l2 - 1 : l2], v = d2[0] / p2[0], g = d2[1] / p2[1], m2 = 1 / v, y2 = 1 / g, x2 = 2 * Math.ceil(m2) + 2, b2 = 2 * Math.ceil(y2) + 2, w2 = 0; w2 < o3; w2++)
        for (var C2 = w2 * e2.strides[0], E2 = 0; E2 < a2; E2++)
          for (var R2 = C2 + E2 * e2.strides[1], I2 = Math.floor(E2 * m2), k2 = Math.floor(I2 - x2 / 2), S2 = 0; S2 < i2; S2++)
            for (var A2 = R2 + S2 * e2.strides[2], T2 = Math.floor(S2 * y2), D2 = Math.floor(T2 - b2 / 2), N2 = 0; N2 < s2; N2++) {
              for (var F2 = 0, _2 = 0; _2 < x2; _2++) {
                var O2 = _2 + k2;
                if (!(O2 < 0 || O2 >= c2)) {
                  var M2 = C2 + O2 * t3.strides[1], B2 = O2 * v;
                  if (E2 === Math.min(a2 - 1, n2 ? Math.round(B2) : Math.floor(B2)))
                    for (var P2 = 0; P2 < b2; P2++) {
                      var L2 = P2 + D2;
                      if (!(L2 < 0 || L2 >= l2)) {
                        var W2 = M2 + L2 * t3.strides[2], U2 = L2 * g;
                        S2 === Math.min(i2 - 1, n2 ? Math.round(U2) : Math.floor(U2)) && (F2 += f2[W2 + N2]);
                      }
                    }
                }
              }
              h2[A2 + N2] = F2;
            }
      return Ln(h2, e2.shape, e2.dtype);
    }, o2.prototype.batchNormalization = function(t3, e2, n2, r2, o3, a2) {
      df([t3, e2, n2, o3, a2], "batchNorm");
      for (var i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = this.readSync(n2.dataId), c2 = o3 ? this.readSync(o3.dataId) : new Float32Array([1]), l2 = a2 ? this.readSync(a2.dataId) : new Float32Array([0]), h2 = new Float32Array(i2.length), f2 = l2.length, d2 = c2.length, p2 = u2.length, v = s2.length, g = 0, m2 = 0, y2 = 0, x2 = 0, b2 = 0; b2 < i2.length; ++b2)
        h2[b2] = l2[g++] + (i2[b2] - s2[m2++]) * c2[y2++] / Math.sqrt(u2[x2++] + r2), g >= f2 && (g = 0), m2 >= v && (m2 = 0), y2 >= d2 && (y2 = 0), x2 >= p2 && (x2 = 0);
      return Ln(h2, t3.shape);
    }, o2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o3) {
      df(t3, "localResponseNormalization4D");
      var a2 = t3.shape[3], i2 = a2 - 1, s2 = this.readSync(t3.dataId), u2 = t3.size, c2 = new Float32Array(u2);
      function l2(t4) {
        for (var n3 = t4 % a2, r3 = t4 - n3 + Math.max(0, n3 - e2), o4 = t4 - n3 + Math.min(n3 + e2, i2), u3 = 0; r3 <= o4; r3++) {
          var c3 = s2[r3];
          u3 += c3 * c3;
        }
        return u3;
      }
      for (var h2 = 0; h2 < u2; h2++) {
        var f2 = l2(h2), d2 = s2[h2] * Math.pow(n2 + r2 * f2, -o3);
        c2[h2] = d2;
      }
      return Ln(c2, t3.shape);
    }, o2.prototype.LRNGrad = function(t3, e2, n2, r2, o3, a2, i2) {
      df(t3, "LRNGrad");
      for (var s2 = t3.shape[3], u2 = this.readSync(t3.dataId), c2 = this.readSync(e2.dataId), l2 = this.readSync(n2.dataId), h2 = new Float32Array(t3.size), f2 = t3.size, d2 = 0; d2 < f2; d2++) {
        for (var p2 = d2 % s2, v = d2 - p2 + Math.max(0, p2 - r2), g = d2 - p2 + Math.min(s2, p2 + r2 + 1), m2 = 0, y2 = v; y2 < g; y2++)
          m2 += Math.pow(c2[y2], 2);
        m2 = a2 * m2 + o3;
        for (y2 = v; y2 < g; y2++) {
          var x2 = -2 * a2 * i2 * c2[y2] * l2[d2] / m2;
          d2 === y2 && (x2 += Math.pow(m2, -i2)), x2 *= u2[d2], h2[y2] += x2;
        }
      }
      return Ln(h2, t3.shape);
    }, o2.prototype.multinomial = function(t3, e2, n2, r2) {
      df(t3, "multinomial");
      for (var o3 = e2 ? t3 : ia(t3), a2 = o3.shape[0], i2 = o3.shape[1], s2 = Gn([a2, n2], "int32"), u2 = this.readSync(s2.dataId), c2 = this.readSync(o3.dataId), l2 = 0; l2 < a2; ++l2) {
        var h2 = l2 * i2, f2 = new Float32Array(i2 - 1);
        f2[0] = c2[h2];
        for (var d2 = 1; d2 < f2.length; ++d2)
          f2[d2] = f2[d2 - 1] + c2[h2 + d2];
        for (var p2 = Yu(r2.toString()), v = l2 * n2, g = 0; g < n2; ++g) {
          var m2 = p2();
          u2[v + g] = f2.length;
          for (var y2 = 0; y2 < f2.length; y2++)
            if (m2 < f2[y2]) {
              u2[v + g] = y2;
              break;
            }
        }
      }
      return s2;
    }, o2.prototype.oneHot = function(t3, e2, n2, r2) {
      df(t3, "oneHot");
      var o3 = new Float32Array(t3.size * e2);
      o3.fill(r2);
      for (var a2 = this.readSync(t3.dataId), i2 = 0; i2 < t3.size; ++i2)
        a2[i2] >= 0 && a2[i2] < e2 && (o3[i2 * e2 + a2[i2]] = n2);
      return Bn(o3, [t3.size, e2], "int32");
    }, o2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o3) {
      return df(t3, "nonMaxSuppression"), Oa(this.readSync(t3.dataId), this.readSync(e2.dataId), n2, r2, o3);
    }, o2.prototype.fft = function(t3) {
      return this.fftBatch(t3, false);
    }, o2.prototype.ifft = function(t3) {
      return this.fftBatch(t3, true);
    }, o2.prototype.fftBatch = function(t3, e2) {
      for (var n2 = t3.shape[0], r2 = t3.shape[1], o3 = er(t3.shape, "float32"), a2 = er(t3.shape, "float32"), i2 = Dn(t3).as2D(n2, r2), s2 = Nn(t3).as2D(n2, r2), u2 = 0; u2 < n2; u2++)
        for (var c2 = i2.slice([u2, 0], [1, r2]), l2 = s2.slice([u2, 0], [1, r2]), h2 = Tn(c2, l2), f2 = this.readSync(this.fftImpl(h2, e2).dataId), d2 = 0; d2 < r2; d2++) {
          var p2 = Ta(f2, d2);
          o3.values[u2 * r2 + d2] = p2.real, a2.values[u2 * r2 + d2] = p2.imag;
        }
      return Tn(o3.toTensor(), a2.toTensor()).as2D(n2, r2);
    }, o2.prototype.fftImpl = function(t3, e2) {
      var n2 = t3.as1D(), r2 = n2.size;
      if (this.isExponentOf2(r2)) {
        var o3 = this.fftRadix2(n2, r2, e2).as2D(t3.shape[0], t3.shape[1]);
        return e2 && (o3 = Tn(Dn(o3).div(On(r2)), Nn(o3).div(On(r2)))), o3;
      }
      var a2 = this.readSync(t3.dataId), i2 = function(t4) {
        for (var e3 = new Float32Array(t4.length / 2), n3 = new Float32Array(t4.length / 2), r3 = 0; r3 < t4.length; r3 += 2)
          e3[r3 / 2] = t4[r3], n3[r3 / 2] = t4[r3 + 1];
        return { real: e3, imag: n3 };
      }(this.fourierTransformByMatmul(a2, r2, e2));
      return Tn(i2.real, i2.imag).as2D(t3.shape[0], t3.shape[1]);
    }, o2.prototype.isExponentOf2 = function(t3) {
      return 0 == (t3 & t3 - 1);
    }, o2.prototype.fftRadix2 = function(t3, e2, n2) {
      if (1 === e2)
        return t3;
      var r2 = this.readSync(t3.dataId), o3 = e2 / 2, a2 = function(t4) {
        for (var e3 = Math.ceil(t4.length / 4), n3 = new Float32Array(e3), r3 = new Float32Array(e3), o4 = 0; o4 < t4.length; o4 += 4)
          n3[Math.floor(o4 / 4)] = t4[o4], r3[Math.floor(o4 / 4)] = t4[o4 + 1];
        return { real: n3, imag: r3 };
      }(r2), i2 = Tn(a2.real, a2.imag).as1D(), s2 = function(t4) {
        for (var e3 = Math.floor(t4.length / 4), n3 = new Float32Array(e3), r3 = new Float32Array(e3), o4 = 2; o4 < t4.length; o4 += 4)
          n3[Math.floor(o4 / 4)] = t4[o4], r3[Math.floor(o4 / 4)] = t4[o4 + 1];
        return { real: n3, imag: r3 };
      }(r2), u2 = Tn(s2.real, s2.imag).as1D();
      i2 = this.fftRadix2(i2, o3, n2), u2 = this.fftRadix2(u2, o3, n2);
      var c2 = function(t4, e3) {
        for (var n3 = new Float32Array(t4 / 2), r3 = new Float32Array(t4 / 2), o4 = 0; o4 < Math.ceil(t4 / 2); o4++) {
          var a3 = (e3 ? 2 : -2) * Math.PI * (o4 / t4);
          n3[o4] = Math.cos(a3), r3[o4] = Math.sin(a3);
        }
        return { real: n3, imag: r3 };
      }(e2, n2), l2 = Tn(c2.real, c2.imag).mul(u2), h2 = i2.add(l2), f2 = i2.sub(l2), d2 = Dn(h2).concat(Dn(f2)), p2 = Nn(h2).concat(Nn(f2));
      return Tn(d2, p2).as1D();
    }, o2.prototype.fourierTransformByMatmul = function(t3, e2, n2) {
      for (var r2 = new Float32Array(2 * e2), o3 = 0; o3 < e2; o3++) {
        for (var a2 = 0, i2 = 0, s2 = 0; s2 < e2; s2++) {
          var u2 = Na(o3 * s2, e2, n2), c2 = Ta(t3, s2);
          a2 += c2.real * u2.real - c2.imag * u2.imag, i2 += c2.real * u2.imag + c2.imag * u2.real;
        }
        n2 && (a2 /= e2, i2 /= e2), Da(r2, a2, i2, o3);
      }
      return r2;
    }, o2.prototype.depthToSpace = function(t3, e2, n2) {
      C("NHWC" === n2, function() {
        return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + n2;
      }), C(e2 > 1, function() {
        return "blockSize should be > 1 for depthToSpace, but was: " + e2;
      });
      for (var r2 = t3.shape[0], o3 = t3.shape[1], a2 = t3.shape[2], i2 = t3.shape[3], s2 = o3 * e2, u2 = a2 * e2, c2 = i2 / (e2 * e2), l2 = this.readSync(t3.dataId), h2 = new Float32Array(r2 * s2 * u2 * c2), f2 = 0, d2 = 0; d2 < r2; ++d2)
        for (var p2 = 0; p2 < s2; ++p2)
          for (var v = Math.floor(p2 / e2), g = p2 % e2, m2 = 0; m2 < u2; ++m2)
            for (var y2 = Math.floor(m2 / e2), x2 = (g * e2 + m2 % e2) * c2, b2 = 0; b2 < c2; ++b2) {
              var w2 = b2 + x2 + i2 * (y2 + a2 * (v + o3 * d2));
              h2[f2++] = l2[w2];
            }
      return Ln(h2, [r2, s2, u2, c2]);
    }, o2.prototype.broadcastedBinaryOp = function(t3, e2, n2, r2) {
      var o3 = Pr(t3.shape, e2.shape), a2 = er(o3, n2), i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = Mr(t3.shape, o3), c2 = Mr(e2.shape, o3), l2 = a2.values;
      if (u2.length + c2.length === 0)
        for (var h2 = 0; h2 < l2.length; ++h2)
          l2[h2] = r2(i2[h2 % i2.length], s2[h2 % s2.length]);
      else {
        var f2 = this.bufferSync(t3), d2 = this.bufferSync(e2), p2 = function(n3) {
          var o4 = a2.indexToLoc(n3), h3 = o4.slice(-t3.rank);
          u2.forEach(function(t4) {
            return h3[t4] = 0;
          });
          var p3 = f2.locToIndex(h3), v = o4.slice(-e2.rank);
          c2.forEach(function(t4) {
            return v[t4] = 0;
          });
          var g = d2.locToIndex(v);
          l2[n3] = r2(i2[p3], s2[g]);
        };
        for (h2 = 0; h2 < l2.length; ++h2)
          p2(h2);
      }
      return a2.toTensor();
    }, o2.prototype.broadcastedBinaryComplexOp = function(t3, e2, n2) {
      var r2 = Pr(t3.shape, e2.shape), o3 = er(r2, "float32"), a2 = er(r2, "float32"), i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = Mr(t3.shape, r2), c2 = Mr(e2.shape, r2), l2 = o3.values, h2 = a2.values;
      if (u2.length + c2.length === 0)
        for (var f2 = 0; f2 < l2.length; f2++) {
          var d2 = f2 % i2.length, p2 = f2 % s2.length, v = n2(i2[2 * d2], i2[2 * d2 + 1], s2[2 * p2], s2[2 * p2 + 1]);
          l2[f2] = v.real, h2[f2] = v.imag;
        }
      else {
        var g = this.bufferSync(this.data.get(t3.dataId).complexTensors.real), m2 = this.bufferSync(this.data.get(e2.dataId).complexTensors.real), y2 = function(r3) {
          var a3 = o3.indexToLoc(r3), f3 = a3.slice(-t3.rank);
          u2.forEach(function(t4) {
            return f3[t4] = 0;
          });
          var d3 = g.locToIndex(f3), p3 = a3.slice(-e2.rank);
          c2.forEach(function(t4) {
            return p3[t4] = 0;
          });
          var v2 = m2.locToIndex(p3), y3 = n2(i2[2 * d3], i2[2 * d3 + 1], s2[2 * v2], s2[2 * v2 + 1]);
          l2[r3] = y3.real, h2[r3] = y3.imag;
        };
        for (f2 = 0; f2 < l2.length; f2++)
          y2(f2);
      }
      return this.complex(o3.toTensor(), a2.toTensor());
    }, o2.prototype.split = function(t3, e2, n2) {
      return Ua(t3, e2, n2);
    }, o2.prototype.dispose = function() {
    }, o2.prototype.floatPrecision = function() {
      return 32;
    }, o2.prototype.epsilon = function() {
      return 1e-7;
    }, o2.prototype.cropAndResize = function(t3, e2, n2, r2, o3, a2) {
      for (var i2 = t3.shape, s2 = i2[0], u2 = i2[1], c2 = i2[2], l2 = i2[3], h2 = e2.shape[0], f2 = r2[0], d2 = r2[1], p2 = er([h2, f2, d2, l2], "float32"), v = this.readSync(e2.dataId), g = this.readSync(n2.dataId), m2 = this.readSync(t3.dataId), y2 = t3.strides, x2 = p2.strides, b2 = 0; b2 < h2; b2++) {
        var w2 = 4 * b2, C2 = v[w2], E2 = v[w2 + 1], R2 = v[w2 + 2], I2 = v[w2 + 3], k2 = g[b2];
        if (!(k2 >= s2))
          for (var S2 = f2 > 1 ? (R2 - C2) * (u2 - 1) / (f2 - 1) : 0, A2 = d2 > 1 ? (I2 - E2) * (c2 - 1) / (d2 - 1) : 0, T2 = 0; T2 < f2; T2++) {
            var D2 = f2 > 1 ? C2 * (u2 - 1) + T2 * S2 : 0.5 * (C2 + R2) * (u2 - 1);
            if (D2 < 0 || D2 > u2 - 1)
              for (var N2 = 0; N2 < d2; N2++)
                for (var F2 = 0; F2 < l2; F2++) {
                  var _2 = F2 + N2 * x2[2] + T2 * x2[1] + b2 * x2[0];
                  p2.values[_2] = a2;
                }
            else if ("bilinear" === o3) {
              var O2 = Math.floor(D2), M2 = Math.ceil(D2), B2 = D2 - O2;
              for (N2 = 0; N2 < d2; N2++) {
                if ((q2 = d2 > 1 ? E2 * (c2 - 1) + N2 * A2 : 0.5 * (E2 + I2) * (c2 - 1)) < 0 || q2 > c2 - 1)
                  for (F2 = 0; F2 < l2; F2++) {
                    _2 = F2 + N2 * x2[2] + T2 * x2[1] + b2 * x2[0];
                    p2.values[_2] = a2;
                  }
                else {
                  var P2 = Math.floor(q2), L2 = Math.ceil(q2), W2 = q2 - P2;
                  for (F2 = 0; F2 < l2; F2++) {
                    var U2 = m2[_2 = F2 + P2 * y2[2] + O2 * y2[1] + k2 * y2[0]], V2 = m2[_2 = F2 + L2 * y2[2] + O2 * y2[1] + k2 * y2[0]], z2 = m2[_2 = F2 + P2 * y2[2] + M2 * y2[1] + k2 * y2[0]], G2 = U2 + (V2 - U2) * W2, H2 = z2 + (m2[_2 = F2 + L2 * y2[2] + M2 * y2[1] + k2 * y2[0]] - z2) * W2;
                    _2 = F2 + N2 * x2[2] + T2 * x2[1] + b2 * x2[0], p2.values[_2] = G2 + (H2 - G2) * B2;
                  }
                }
              }
            } else
              for (N2 = 0; N2 < d2; ++N2) {
                var q2;
                if ((q2 = d2 > 1 ? E2 * (c2 - 1) + N2 * A2 : 0.5 * (E2 + I2) * (c2 - 1)) < 0 || q2 > c2 - 1)
                  for (F2 = 0; F2 < l2; F2++) {
                    _2 = F2 + N2 * x2[2] + T2 * x2[1] + b2 * x2[0];
                    p2.values[_2] = a2;
                  }
                else {
                  var K2 = Math.round(q2), j2 = Math.round(D2);
                  for (F2 = 0; F2 < l2; F2++) {
                    var X2 = F2 + K2 * y2[2] + j2 * y2[1] + k2 * y2[0], Y2 = F2 + N2 * x2[2] + T2 * x2[1] + b2 * x2[0];
                    p2.values[Y2] = m2[X2];
                  }
                }
              }
          }
      }
      return p2.toTensor();
    }, o2.prototype.sparseToDense = function(t3, e2, n2, r2) {
      var o3 = Go(0, t3, n2), a2 = o3.sliceRank, i2 = o3.numUpdates, s2 = o3.sliceSize, u2 = o3.strides, c2 = o3.outputSize;
      return this.scatter(t3, e2, n2, c2, s2, i2, a2, u2, r2, false);
    }, o2.prototype.gatherND = function(t3, e2) {
      var n2 = e2.shape, r2 = n2[n2.length - 1], o3 = Po(t3, e2), a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3];
      if (0 === i2)
        return Fn([], a2, t3.dtype);
      for (var c2 = new mt([i2, s2], t3.dtype), l2 = this.readSync(e2.dataId), h2 = this.readSync(t3.dataId), f2 = 0; f2 < i2; f2++) {
        for (var d2 = [], p2 = 0, v = 0; v < r2; v++) {
          var g = l2[f2 * r2 + v];
          p2 += g * u2[v], d2.push(g);
        }
        if (p2 < 0 || p2 >= t3.size / s2)
          throw new Error("Invalid indices: " + d2 + " does not index into " + t3.shape);
        for (var m2 = 0; m2 < s2; m2++)
          c2.values[f2 * s2 + m2] = h2[p2 * s2 + m2];
      }
      return c2.toTensor().reshape(a2);
    }, o2.prototype.scatterND = function(t3, e2, n2) {
      var r2 = Go(0, t3, n2), o3 = r2.sliceRank, a2 = r2.numUpdates, i2 = r2.sliceSize, s2 = r2.strides, u2 = r2.outputSize, c2 = On(0);
      return this.scatter(t3, e2, n2, u2, i2, a2, o3, s2, c2, true);
    }, o2.prototype.fill = function(t3, e2, n2) {
      var r2 = P(n2 = n2 || j(e2), k(t3));
      return r2.fill(e2), Lt.makeTensor(r2, t3, n2, this);
    }, o2.prototype.onesLike = function(t3) {
      if ("string" === t3.dtype)
        throw new Error("onesLike is not supported for string tensors");
      return this.fill(t3.shape, 1, t3.dtype);
    }, o2.prototype.zerosLike = function(t3) {
      var e2 = P(t3.dtype, k(t3.shape));
      return this.makeOutput(e2, t3.shape, t3.dtype);
    }, o2.prototype.linspace = function(t3, e2, n2) {
      return ka(t3, e2, n2);
    }, o2.prototype.scatter = function(t3, e2, n2, r2, o3, a2, i2, s2, u2, c2) {
      var l2 = [r2 / o3, o3], h2 = this.readSync(t3.dataId), f2 = this.readSync(e2.dataId);
      if (0 === r2)
        return Fn([], n2, e2.dtype);
      var d2 = new mt(l2, e2.dtype);
      d2.values.fill(this.readSync(u2.dataId)[0]);
      for (var p2 = 0; p2 < a2; p2++) {
        for (var v = [], g = 0, m2 = 0; m2 < i2; m2++) {
          var y2 = h2[p2 * i2 + m2];
          v.push(y2), g += y2 * s2[m2];
        }
        if (g < 0 || g >= r2 / o3)
          throw new Error("Invalid indices: " + v + " does not index into " + n2);
        for (var x2 = 0; x2 < o3; x2++)
          c2 ? d2.values[g * o3 + x2] += f2[p2 * o3 + x2] : d2.values[g * o3 + x2] = 0 === e2.rank ? f2[0] : f2[p2 * o3 + x2];
      }
      return d2.toTensor().reshape(n2);
    }, o2;
  }(la);
  function yf(t2, e2) {
    return { kernelName: t2, backendName: "cpu", kernelFunc: function(n2) {
      var r2 = n2.inputs, o2 = n2.backend, a2 = r2, i2 = a2.a, s2 = a2.b, u2 = o2;
      df([i2, s2], t2);
      var c2 = u2.data.get(i2.dataId).values, l2 = u2.data.get(s2.dataId).values, h2 = e2(i2.shape, s2.shape, c2, l2, i2.dtype), f2 = h2[0], d2 = h2[1];
      return { dataId: u2.write(f2, d2, i2.dtype), shape: d2, dtype: i2.dtype };
    } };
  }
  function xf(t2) {
    return function(e2, n2, r2, o2, a2) {
      var i2 = Pr(e2, n2), s2 = i2.length, u2 = $(i2), c2 = B(a2, k(i2)), l2 = e2.length, h2 = n2.length, f2 = $(e2), d2 = $(n2), p2 = Mr(e2, i2), v = Mr(n2, i2);
      if (p2.length + v.length === 0)
        for (var g = 0; g < c2.length; ++g)
          c2[g] = t2(r2[g % r2.length], o2[g % o2.length]);
      else {
        var m2 = function(e3) {
          var n3 = it(e3, s2, u2), a3 = n3.slice(-l2);
          p2.forEach(function(t3) {
            return a3[t3] = 0;
          });
          var i3 = at(a3, l2, f2), g2 = n3.slice(-h2);
          v.forEach(function(t3) {
            return g2[t3] = 0;
          });
          var m3 = at(g2, h2, d2);
          c2[e3] = t2(r2[i3], o2[m3]);
        };
        for (g = 0; g < c2.length; ++g)
          m2(g);
      }
      return [c2, i2];
    };
  }
  Lt.registerBackend("cpu", function() {
    return new mf();
  }, 1);
  var bf = xf(function(t2, e2) {
    return t2 / e2;
  });
  var wf = yf(wr, bf);
  var Cf = { kernelName: "MaxPoolWithArgmax", backendName: "cpu", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.attrs, r2 = t2.backend, o2 = e2.x, a2 = n2, i2 = a2.filterSize, s2 = a2.strides, u2 = a2.pad, c2 = a2.includeBatchInIndex, l2 = r2;
    df(o2, "MaxPoolWithArgmax");
    var h2 = l2.data.get(o2.dataId).values, f2 = fa(o2.shape, i2, s2, [1, 1], u2), d2 = function(t3, e3, n3, r3, o3) {
      var a3 = pf(t3, 0, n3, $(e3), o3, "max"), i3 = vf(t3, e3, n3, o3, true, r3);
      return [a3.values, i3.values];
    }(h2, o2.shape, o2.dtype, c2, f2), p2 = d2[0], v = d2[1], g = l2.write(p2, f2.outShape, o2.dtype), m2 = l2.write(v, f2.outShape, o2.dtype);
    return [{ dataId: g, shape: f2.outShape, dtype: o2.dtype }, { dataId: m2, shape: f2.outShape, dtype: "int32" }];
  } };
  var Ef = { kernelName: "NonMaxSuppressionV5", backendName: "cpu", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs, o2 = e2, a2 = o2.boxes, i2 = o2.scores, s2 = r2, u2 = s2.maxOutputSize, c2 = s2.iouThreshold, l2 = s2.scoreThreshold, h2 = s2.softNmsSigma, f2 = n2;
    df(a2, "NonMaxSuppressionWithScore");
    var d2 = Ma(f2.data.get(a2.dataId).values, f2.data.get(i2.dataId).values, u2, c2, l2, h2);
    return [d2.selectedIndices, d2.selectedScores];
  } };
  var Rf = { kernelName: "Square", backendName: "cpu", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = e2.x, o2 = n2;
    df(r2, "square");
    for (var a2 = o2.data.get(r2.dataId).values, i2 = new Float32Array(a2.length), s2 = 0; s2 < a2.length; ++s2) {
      var u2 = a2[s2];
      i2[s2] = u2 * u2;
    }
    return { dataId: o2.write(i2, r2.shape, r2.dtype), shape: r2.shape, dtype: r2.dtype };
  } };
  var If = xf(function(t2, e2) {
    var n2 = t2 - e2;
    return n2 * n2;
  });
  function kf(t2, e2, n2, r2, o2) {
    for (var a2 = k(e2), i2 = e2.length, s2 = $(e2), u2 = $(o2), c2 = B(n2, k(o2)), l2 = 0; l2 < a2; ++l2) {
      for (var h2 = it(l2, i2, s2), f2 = new Array(h2.length), d2 = 0; d2 < f2.length; d2++)
        f2[d2] = h2[r2[d2]];
      c2[at(f2, i2, u2)] = t2[l2];
    }
    return c2;
  }
  for (Sf = 0, Af = [Ef, Rf, yf(Er, If), wf, { kernelName: "Transpose", backendName: "cpu", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.attrs, r2 = t2.backend, o2 = e2.x, a2 = n2.perm, i2 = r2;
    df(o2, "transpose");
    for (var s2 = o2.shape.length, u2 = new Array(s2), c2 = 0; c2 < u2.length; c2++)
      u2[c2] = o2.shape[a2[c2]];
    var l2 = kf(i2.data.get(o2.dataId).values, o2.shape, o2.dtype, a2, u2);
    return { dataId: i2.write(l2, u2, o2.dtype), shape: u2, dtype: o2.dtype };
  } }, Cf]; Sf < Af.length; Sf++) {
    d(Af[Sf]);
  }
  var Sf;
  var Af;
  var Tf;
  var Df = function(t2) {
    this.variableNames = ["A"];
    var e2 = Ya(), n2 = t2[0], r2 = t2[1];
    this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + r2 + ".0, " + n2 + ".0);\n\n        vec4 values = " + e2.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";
  };
  var Nf = function(t2) {
    this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
    var e2 = Ya(), n2 = t2[0], r2 = t2[1];
    this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(" + r2 + ".0, " + n2 + ".0);\n            vec4 values = " + e2.texture2D + "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        " + e2.output + " = result;\n      }\n    ";
  };
  var Ff = function(t2, e2) {
    this.variableNames = ["A"];
    for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = t2[e2[r2]];
    this.outputShape = n2, this.rank = n2.length;
    var o2 = ui(this.rank), a2 = function(t3) {
      var e3 = t3.length;
      if (e3 > 6)
        throw Error("Transpose for rank " + e3 + " is not yet supported");
      for (var n3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r3 = new Array(e3), o3 = 0; o3 < t3.length; o3++)
        r3[t3[o3]] = n3[o3];
      return r3.join();
    }(e2);
    this.userCode = "\n    void main() {\n      " + o2 + " resRC = getOutputCoords();\n      setOutput(getA(" + a2 + "));\n    }\n    ";
  };
  var _f = function(t2, e2) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true;
    for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = t2[e2[r2]];
    if (this.outputShape = n2, this.rank = n2.length, this.rank > 6)
      throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
    var o2 = ui(this.rank), a2 = ja("rc", this.rank), i2 = new Array(this.rank);
    for (r2 = 0; r2 < e2.length; r2++)
      i2[e2[r2]] = a2[r2];
    var s2 = "vec2(" + i2.slice(-2).join() + ")", u2 = "++" + a2[this.rank - 1] + " < " + n2[this.rank - 1], c2 = "getChannel(getA(" + i2.join() + "), " + s2 + ")";
    this.userCode = "\n    void main() {\n      " + o2 + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + c2 + ";\n      if(" + u2 + ") {\n        result[1] = " + c2 + ";\n      }\n      --" + a2[this.rank - 1] + ";\n      if(++" + a2[this.rank - 2] + " < " + n2[this.rank - 2] + ") {\n        result[2] = " + c2 + ";\n        if(" + u2 + ") {\n          result[3] = " + c2 + ";\n        }\n      }\n      setOutput(result);\n    }\n    ";
  };
  for (Of = 0, Mf = [{ kernelName: "FromPixels", backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs, o2 = e2.pixels, a2 = r2.numChannels, s2 = "undefined" != typeof HTMLVideoElement && o2 instanceof HTMLVideoElement, u2 = "undefined" != typeof HTMLImageElement && o2 instanceof HTMLImageElement, c2 = s2 ? [o2.videoWidth, o2.videoHeight] : [o2.width, o2.height], l2 = c2[0], h2 = c2[1], f2 = [h2, l2], d2 = [h2, l2, a2];
    (u2 || s2) && (null == Tf && (Tf = document.createElement("canvas").getContext("2d")), Tf.canvas.width = l2, Tf.canvas.height = h2, Tf.drawImage(o2, 0, 0, l2, h2), o2 = Tf.canvas);
    var p2 = n2.makeTensorInfo(f2, "int32");
    n2.texData.get(p2.dataId).usage = zt.PIXELS, n2.gpgpu.uploadPixelDataToTexture(n2.getTexture(p2.dataId), o2);
    var v = i().getBool("WEBGL_PACK") ? new Nf(d2) : new Df(d2), g = n2.runWebGLProgram(v, [p2], "int32");
    return n2.disposeData(p2.dataId), g;
  } }, { kernelName: wr, backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = e2;
    return function(t3, e3, n3) {
      var r3 = new Ri(Ci, t3.shape, e3.shape);
      return i().getBool("WEBGL_PACK_BINARY_OPERATIONS") && (r3 = new Si(Ii, t3.shape, e3.shape, true)), n3.runWebGLProgram(r3, [t3, e3], "float32");
    }(r2.a, r2.b, n2);
  } }, { kernelName: "NonMaxSuppressionV5", backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs;
    dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
    var o2 = e2, a2 = o2.boxes, i2 = o2.scores, s2 = r2, u2 = s2.maxOutputSize, c2 = s2.iouThreshold, l2 = s2.scoreThreshold, h2 = s2.softNmsSigma, f2 = n2, d2 = Ma(f2.readSync(a2.dataId), f2.readSync(i2.dataId), u2, c2, l2, h2);
    return [d2.selectedIndices, d2.selectedScores];
  } }, { kernelName: "Square", backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = e2.x, o2 = n2, a2 = new cu(r2.shape, "return x * x;");
    return o2.runWebGLProgram(a2, [r2], r2.dtype);
  } }, { kernelName: Er, backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.backend, r2 = e2, o2 = r2.a, a2 = r2.b, s2 = n2, u2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new Si("return (a - b) * (a - b);", o2.shape, a2.shape) : new Ri("return (a - b) * (a - b);", o2.shape, a2.shape);
    return s2.compileAndRun(u2, [o2, a2]);
  } }, { kernelName: "Transpose", backendName: "webgl", kernelFunc: function(t2) {
    for (var e2, n2 = t2.inputs, r2 = t2.attrs, o2 = t2.backend, a2 = n2.x, s2 = r2.perm, u2 = o2, c2 = a2.shape.length, l2 = new Array(c2), h2 = 0; h2 < l2.length; h2++)
      l2[h2] = a2.shape[s2[h2]];
    if (u2.shouldExecuteOnCPU([a2])) {
      var f2 = kf(u2.texData.get(a2.dataId).values, a2.shape, a2.dtype, s2, l2);
      e2 = u2.makeTensorInfo(l2, a2.dtype), u2.texData.get(e2.dataId).values = f2;
    } else
      e2 = function(t3, e3, n3) {
        var r3 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new _f(t3.shape, e3) : new Ff(t3.shape, e3);
        return n3.runWebGLProgram(r3, [t3], t3.dtype);
      }(a2, s2, u2);
    return e2;
  } }, { kernelName: "MaxPoolWithArgmax", backendName: "webgl", kernelFunc: function(t2) {
    var e2 = t2.inputs, n2 = t2.attrs, r2 = t2.backend, o2 = e2.x, a2 = n2, i2 = a2.filterSize, s2 = a2.strides, u2 = a2.pad, c2 = a2.includeBatchInIndex, l2 = r2;
    C(4 === o2.shape.length, function() {
      return "Error in maxPool: input must be rank 4 but got rank " + o2.shape.length + ".";
    });
    var h2 = [1, 1];
    C(Ca(s2, h2), function() {
      return "Error in maxPool: Either strides or dilations must be 1. Got strides " + s2 + " and dilations '" + h2 + "'";
    });
    var f2 = fa(o2.shape, i2, s2, h2, u2), d2 = function(t3, e3, n3, r3) {
      var o3 = new Ws(n3, "max", false), a3 = r3.runWebGLProgram(o3, [t3], "float32");
      return o3 = new Ws(n3, "max", true, true, e3), [a3, r3.runWebGLProgram(o3, [t3], "float32")];
    }(o2, c2, f2, l2);
    return [d2[0], d2[1]];
  } }]; Of < Mf.length; Of++) {
    d(Mf[Of]);
  }
  var Of;
  var Mf;
  for (Bf = 0, Pf = [{ kernelName: xr, inputsToSave: ["a", "b"], gradFunc: function(t2, e2) {
    var n2 = e2[0], r2 = e2[1], o2 = Pr(n2.shape, r2.shape);
    return { a: function() {
      var e3 = t2, r3 = Br(n2.shape, o2);
      return r3.length > 0 && (e3 = e3.sum(r3)), e3.reshape(n2.shape);
    }, b: function() {
      var e3 = t2, n3 = Br(r2.shape, o2);
      return n3.length > 0 && (e3 = e3.sum(n3)), e3.reshape(r2.shape);
    } };
  } }, { kernelName: "AddN", saveAllInputs: true, gradFunc: function(t2, e2) {
    var n2 = {};
    return e2.forEach(function(e3, r2) {
      n2[r2] = function() {
        return t2.clone();
      };
    }), n2;
  } }, { kernelName: Sr, gradFunc: function(t2, e2, n2) {
    for (var r2 = n2, o2 = r2.inputShape, a2 = r2.shape, i2 = Array.from(a2), s2 = o2.length - 1; s2 >= 0; s2--)
      if (o2[s2] === a2[s2])
        i2[s2] = 1;
      else if (1 !== o2[s2])
        throw new Error("broadcastTo(): [" + o2 + "] cannot be broadcast to [" + a2 + "].");
    var u2 = [];
    for (s2 = 0; s2 < i2.length; s2++)
      i2[s2] > 1 && u2.push(s2);
    return { x: function() {
      return t2.sum(u2, true);
    } };
  } }, { kernelName: wr, inputsToSave: ["a", "b"], gradFunc: function(t2, e2) {
    var n2 = e2[0], r2 = e2[1], o2 = Pr(n2.shape, r2.shape);
    return { a: function() {
      var e3 = Bo(t2, r2.toFloat()), a2 = Br(n2.shape, o2);
      return a2.length > 0 ? th(e3, a2).reshape(n2.shape) : e3;
    }, b: function() {
      var e3 = t2.mul(n2.toFloat()), a2 = Br(r2.shape, o2);
      a2.length > 0 && (e3 = th(e3, a2).reshape(r2.shape));
      var i2 = Gc(r2);
      return no(Bo(e3, i2.toFloat()));
    } };
  } }, { kernelName: "FusedBatchNorm", inputsToSave: ["x", "mean", "variance", "scale"], gradFunc: function(t2, e2, n2) {
    var r2 = n2.varianceEpsilon, o2 = e2[0], a2 = e2[1], i2 = e2[2], s2 = e2[3], u2 = Ju(o2), c2 = null == s2 ? On(1) : s2, l2 = Br(a2.shape, u2.shape), h2 = [];
    if (1 === a2.rank) {
      for (var f2 = 0; f2 < u2.shape.length - 1; ++f2)
        h2.push(u2.shape[f2]);
      h2.push(1);
    }
    var d2 = Oo(o2, a2), p2 = To(t2, c2), v = ao(Or(i2, On(r2))), g = To(To(To(v, v), v), On(-0.5));
    return { x: function() {
      return 1 === a2.rank ? ur(To(To(t2, wc(v.as4D(1, 1, 1, a2.shape[0]), h2)), c2), o2.shape) : ur(To(To(t2, v), c2), o2.shape);
    }, mean: function() {
      var t3 = To(To(v, On(-1)), p2);
      return 1 === a2.rank && (t3 = th(t3, l2)), ur(t3, a2.shape);
    }, variance: function() {
      var t3 = To(To(g, d2), p2);
      return 1 === a2.rank && (t3 = th(t3, l2)), ur(t3, a2.shape);
    }, scale: function() {
      var e3 = To(d2, v), n3 = To(t2, e3);
      return 1 === a2.rank && (n3 = th(n3, l2)), ur(n3, a2.shape);
    }, offset: function() {
      var e3 = t2;
      return 1 === a2.rank && (e3 = th(e3, l2)), ur(e3, a2.shape);
    } };
  } }, { kernelName: Tr, gradFunc: function(t2) {
    return { x: function() {
      return t2.toFloat();
    } };
  } }, { kernelName: Ar, inputsToSave: ["indices"], gradFunc: function(t2, e2) {
    var n2 = e2[0];
    return { indices: function() {
      return Gn(n2.shape, "float32");
    } };
  } }, { kernelName: Nr, inputsToSave: ["x"], gradFunc: function(t2, e2, n2) {
    var r2 = e2[0], o2 = n2.paddings.map(function(t3) {
      return t3[0];
    });
    return { x: function() {
      return t2.slice(o2, r2.shape);
    } };
  } }, { kernelName: "Square", inputsToSave: ["x"], gradFunc: function(t2, e2) {
    var n2 = e2[0];
    return { x: function() {
      return t2.mul(n2.toFloat().mul(2));
    } };
  } }, { kernelName: Er, inputsToSave: ["a", "b"], gradFunc: function(t2, e2) {
    var n2 = e2[0], r2 = e2[1], o2 = On(2);
    return { a: function() {
      return To(t2, To(o2, Oo(n2, r2)));
    }, b: function() {
      return To(t2, To(o2, Oo(r2, n2)));
    } };
  } }, { kernelName: Dr, inputsToSave: ["x"], gradFunc: function(t2, e2, n2) {
    var r2 = e2[0], o2 = n2.reps;
    return { x: function() {
      var e3 = Xn(r2);
      if (1 === r2.rank)
        for (var n3 = 0; n3 < o2[0]; ++n3)
          e3 = e3.add(t2.slice([n3 * r2.shape[0]], [r2.shape[0]]));
      else if (2 === r2.rank)
        for (n3 = 0; n3 < o2[0]; ++n3)
          for (var a2 = 0; a2 < o2[1]; ++a2)
            e3 = e3.add(t2.slice([n3 * r2.shape[0], a2 * r2.shape[1]], [r2.shape[0], r2.shape[1]]));
      else if (3 === r2.rank)
        for (n3 = 0; n3 < o2[0]; ++n3)
          for (a2 = 0; a2 < o2[1]; ++a2)
            for (var i2 = 0; i2 < o2[2]; ++i2)
              e3 = e3.add(t2.slice([n3 * r2.shape[0], a2 * r2.shape[1], i2 * r2.shape[2]], [r2.shape[0], r2.shape[1], r2.shape[2]]));
      else {
        if (4 !== r2.rank)
          throw new Error("Gradient for tile operation is not implemented for rank-" + r2.rank + " tensors yet.");
        for (n3 = 0; n3 < o2[0]; ++n3)
          for (a2 = 0; a2 < o2[1]; ++a2)
            for (i2 = 0; i2 < o2[2]; ++i2)
              for (var s2 = 0; s2 < o2[3]; ++s2)
                e3 = e3.add(t2.slice([n3 * r2.shape[0], a2 * r2.shape[1], i2 * r2.shape[2], s2 * r2.shape[3]], [r2.shape[0], r2.shape[1], r2.shape[2], r2.shape[3]]));
      }
      return e3;
    } };
  } }, { kernelName: "Transpose", gradFunc: function(t2, e2, n2) {
    var r2 = Rn(n2.perm);
    return { x: function() {
      return ua(t2, r2);
    } };
  } }]; Bf < Pf.length; Bf++) {
    p(Pf[Bf]);
  }
  var Bf;
  var Pf;
  var Lf = function() {
    function t2() {
    }
    return t2.prototype.fetch = function(t3, e2) {
      return fetch(t3, e2);
    }, t2.prototype.now = function() {
      return performance.now();
    }, t2.prototype.encode = function(t3, e2) {
      if ("utf-8" !== e2 && "utf8" !== e2)
        throw new Error("Browser's encoder only supports utf-8, but got " + e2);
      return null == this.textEncoder && (this.textEncoder = new TextEncoder()), this.textEncoder.encode(t3);
    }, t2.prototype.decode = function(t3, e2) {
      return new TextDecoder(e2).decode(t3);
    }, t2;
  }();
  i().get("IS_BROWSER") && i().setPlatform("browser", new Lf());
  var Wf;
  var Uf = function() {
    return require_browser();
  };
  var Vf = function() {
    function t2() {
      this.util = require_util(), this.textEncoder = new this.util.TextEncoder();
    }
    return t2.prototype.fetch = function(t3, e2) {
      return null != i().global.fetch ? i().global.fetch(t3, e2) : (null == Wf && (Wf = Uf()), Wf(t3, e2));
    }, t2.prototype.now = function() {
      var t3 = process.hrtime();
      return 1e3 * t3[0] + t3[1] / 1e6;
    }, t2.prototype.encode = function(t3, e2) {
      if ("utf-8" !== e2 && "utf8" !== e2)
        throw new Error("Node built-in encoder only supports utf-8, but got " + e2);
      return this.textEncoder.encode(t3);
    }, t2.prototype.decode = function(t3, e2) {
      return 0 === t3.length ? "" : new this.util.TextDecoder(e2).decode(t3);
    }, t2;
  }();
  i().get("IS_NODE") && i().setPlatform("node", new Vf());
  var zf = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 };
  var Gf = 4;
  function Hf(t2, e2) {
    for (var n2 = {}, r2 = 0, o2 = function(e3) {
      var o3 = e3.name, a3 = e3.dtype, i3 = e3.shape, s2 = k(i3), u2 = void 0;
      if ("quantization" in e3) {
        var c2 = e3.quantization;
        if ("uint8" !== c2.dtype && "uint16" !== c2.dtype)
          throw new Error("Weight " + e3.name + " has unknown quantization dtype " + c2.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
        var l2 = zf[c2.dtype], h2 = t2.slice(r2, r2 + s2 * l2), f2 = "uint8" === c2.dtype ? new Uint8Array(h2) : new Uint16Array(h2);
        if ("float32" === a3)
          u2 = Float32Array.from(f2, function(t3) {
            return t3 * c2.scale + c2.min;
          });
        else {
          if ("int32" !== a3)
            throw new Error("Unsupported dtype in weight '" + o3 + "': " + a3);
          u2 = Int32Array.from(f2, function(t3) {
            return Math.round(t3 * c2.scale + c2.min);
          });
        }
        r2 += s2 * l2;
      } else if ("string" === a3) {
        var d2 = k(e3.shape);
        u2 = [];
        for (var p2 = 0; p2 < d2; p2++) {
          var v = new Uint32Array(t2.slice(r2, r2 + Gf))[0];
          r2 += Gf;
          var g = new Uint8Array(t2.slice(r2, r2 + v));
          u2.push(g), r2 += v;
        }
      } else {
        var m2 = zf[a3];
        h2 = t2.slice(r2, r2 + s2 * m2);
        if ("float32" === a3)
          u2 = new Float32Array(h2);
        else if ("int32" === a3)
          u2 = new Int32Array(h2);
        else {
          if ("bool" !== a3)
            throw new Error("Unsupported dtype in weight '" + o3 + "': " + a3);
          u2 = new Uint8Array(h2);
        }
        r2 += s2 * m2;
      }
      n2[o3] = Fn(u2, i3, a3);
    }, a2 = 0, i2 = e2; a2 < i2.length; a2++) {
      o2(i2[a2]);
    }
    return n2;
  }
  function qf(t2) {
    if (null === t2)
      throw new Error("Invalid input value: " + JSON.stringify(t2));
    var e2 = 0, n2 = [];
    t2.forEach(function(t3) {
      if (e2 += t3.byteLength, n2.push(t3.byteLength === t3.buffer.byteLength ? t3 : new t3.constructor(t3)), !(t3 instanceof Float32Array || t3 instanceof Int32Array || t3 instanceof Uint8Array))
        throw new Error("Unsupported TypedArray subtype: " + t3.constructor.name);
    });
    var r2 = new Uint8Array(e2), o2 = 0;
    return n2.forEach(function(t3) {
      r2.set(new Uint8Array(t3.buffer), o2), o2 += t3.byteLength;
    }), r2.buffer;
  }
  var Kf = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
  function jf(t2) {
    return Kf ? Buffer.byteLength(t2) : new Blob([t2]).size;
  }
  function Xf(t2) {
    var e2 = 0;
    t2.forEach(function(t3) {
      e2 += t3.byteLength;
    });
    var n2 = new Uint8Array(e2), r2 = 0;
    return t2.forEach(function(t3) {
      n2.set(new Uint8Array(t3), r2), r2 += t3.byteLength;
    }), n2.buffer;
  }
  function Yf(t2) {
    for (t2 = t2.trim(); t2.endsWith("/"); )
      t2 = t2.slice(0, t2.length - 1);
    var e2 = t2.split("/");
    return e2[e2.length - 1];
  }
  function $f(t2) {
    if (t2.modelTopology instanceof ArrayBuffer)
      throw new Error("Expected JSON model topology, received ArrayBuffer.");
    return { dateSaved: /* @__PURE__ */ new Date(), modelTopologyType: "JSON", modelTopologyBytes: null == t2.modelTopology ? 0 : jf(JSON.stringify(t2.modelTopology)), weightSpecsBytes: null == t2.weightSpecs ? 0 : jf(JSON.stringify(t2.weightSpecs)), weightDataBytes: null == t2.weightData ? 0 : t2.weightData.byteLength };
  }
  var Qf = function() {
    function t2() {
      this.saveRouters = [], this.loadRouters = [];
    }
    return t2.getInstance = function() {
      return null == t2.instance && (t2.instance = new t2()), t2.instance;
    }, t2.registerSaveRouter = function(e2) {
      t2.getInstance().saveRouters.push(e2);
    }, t2.registerLoadRouter = function(e2) {
      t2.getInstance().loadRouters.push(e2);
    }, t2.getSaveHandlers = function(e2) {
      return t2.getHandlers(e2, "save");
    }, t2.getLoadHandlers = function(e2, n2) {
      return t2.getHandlers(e2, "load", n2);
    }, t2.getHandlers = function(e2, n2, r2) {
      var o2 = [];
      return ("load" === n2 ? t2.getInstance().loadRouters : t2.getInstance().saveRouters).forEach(function(t3) {
        var n3 = t3(e2, r2);
        null !== n3 && o2.push(n3);
      }), o2;
    }, t2;
  }();
  var Jf = "://";
  var Zf = function() {
    function t2() {
      this.managers = {};
    }
    return t2.getInstance = function() {
      return null == t2.instance && (t2.instance = new t2()), t2.instance;
    }, t2.registerManager = function(e2, n2) {
      C(null != e2, function() {
        return "scheme must not be undefined or null.";
      }), e2.endsWith(Jf) && (e2 = e2.slice(0, e2.indexOf(Jf))), C(e2.length > 0, function() {
        return "scheme must not be an empty string.";
      });
      var r2 = t2.getInstance();
      C(null == r2.managers[e2], function() {
        return "A model store manager is already registered for scheme '" + e2 + "'.";
      }), r2.managers[e2] = n2;
    }, t2.getManager = function(t3) {
      var e2 = this.getInstance().managers[t3];
      if (null == e2)
        throw new Error("Cannot find model manager for scheme '" + t3 + "'");
      return e2;
    }, t2.getSchemes = function() {
      return Object.keys(this.getInstance().managers);
    }, t2;
  }();
  function td(t2) {
    if (-1 === t2.indexOf(Jf))
      throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + Zf.getSchemes().join(","));
    return { scheme: t2.split(Jf)[0], path: t2.split(Jf)[1] };
  }
  function ed(t2, e2, o2) {
    return void 0 === o2 && (o2 = false), n(this, void 0, void 0, function() {
      var n2, a2, i2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return C(t2 !== e2, function() {
              return "Old path and new path are the same: '" + t2 + "'";
            }), C((n2 = Qf.getLoadHandlers(t2)).length > 0, function() {
              return "Copying failed because no load handler is found for source URL " + t2 + ".";
            }), C(n2.length < 2, function() {
              return "Copying failed because more than one (" + n2.length + ") load handlers for source URL " + t2 + ".";
            }), a2 = n2[0], C((i2 = Qf.getSaveHandlers(e2)).length > 0, function() {
              return "Copying failed because no save handler is found for destination URL " + e2 + ".";
            }), C(i2.length < 2, function() {
              return "Copying failed because more than one (" + n2.length + ") save handlers for destination URL " + e2 + ".";
            }), s2 = i2[0], u2 = td(t2).scheme, c2 = td(t2).path, l2 = u2 === td(t2).scheme, [4, a2.load()];
          case 1:
            return h2 = r2.sent(), o2 && l2 ? [4, Zf.getManager(u2).removeModel(c2)] : [3, 3];
          case 2:
            r2.sent(), r2.label = 3;
          case 3:
            return [4, s2.save(h2)];
          case 4:
            return f2 = r2.sent(), !o2 || l2 ? [3, 6] : [4, Zf.getManager(u2).removeModel(c2)];
          case 5:
            r2.sent(), r2.label = 6;
          case 6:
            return [2, f2.modelArtifactsInfo];
        }
      });
    });
  }
  var nd = "models_store";
  var rd = "model_info_store";
  function od() {
    if (!i().getBool("IS_BROWSER"))
      throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
    var t2 = window || self, e2 = t2.indexedDB || t2.mozIndexedDB || t2.webkitIndexedDB || t2.msIndexedDB || t2.shimIndexedDB;
    if (null == e2)
      throw new Error("The current browser does not appear to support IndexedDB.");
    return e2;
  }
  function ad(t2) {
    var e2 = t2.result;
    e2.createObjectStore(nd, { keyPath: "modelPath" }), e2.createObjectStore(rd, { keyPath: "modelPath" });
  }
  var id = function() {
    function t2(t3) {
      if (this.indexedDB = od(), null == t3 || !t3)
        throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
      this.modelPath = t3;
    }
    return t2.prototype.save = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          if (t3.modelTopology instanceof ArrayBuffer)
            throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
          return [2, this.databaseAction(this.modelPath, t3)];
        });
      });
    }, t2.prototype.load = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          return [2, this.databaseAction(this.modelPath)];
        });
      });
    }, t2.prototype.databaseAction = function(t3, e2) {
      var n2 = this;
      return new Promise(function(t4, r2) {
        var o2 = n2.indexedDB.open("tensorflowjs", 1);
        o2.onupgradeneeded = function() {
          return ad(o2);
        }, o2.onsuccess = function() {
          var a2 = o2.result;
          if (null == e2) {
            var i2 = a2.transaction(nd, "readonly"), s2 = i2.objectStore(nd).get(n2.modelPath);
            s2.onsuccess = function() {
              if (null == s2.result)
                return a2.close(), r2(new Error("Cannot find model with path '" + n2.modelPath + "' in IndexedDB."));
              t4(s2.result.modelArtifacts);
            }, s2.onerror = function(t5) {
              return a2.close(), r2(s2.error);
            }, i2.oncomplete = function() {
              return a2.close();
            };
          } else {
            var u2, c2 = $f(e2), l2 = a2.transaction(rd, "readwrite"), h2 = l2.objectStore(rd), f2 = h2.put({ modelPath: n2.modelPath, modelArtifactsInfo: c2 });
            f2.onsuccess = function() {
              var o3 = (u2 = a2.transaction(nd, "readwrite")).objectStore(nd).put({ modelPath: n2.modelPath, modelArtifacts: e2, modelArtifactsInfo: c2 });
              o3.onsuccess = function() {
                return t4({ modelArtifactsInfo: c2 });
              }, o3.onerror = function(t5) {
                var e3 = (h2 = l2.objectStore(rd)).delete(n2.modelPath);
                e3.onsuccess = function() {
                  return a2.close(), r2(o3.error);
                }, e3.onerror = function(t6) {
                  return a2.close(), r2(o3.error);
                };
              };
            }, f2.onerror = function(t5) {
              return a2.close(), r2(f2.error);
            }, l2.oncomplete = function() {
              null == u2 ? a2.close() : u2.oncomplete = function() {
                return a2.close();
              };
            };
          }
        }, o2.onerror = function(t5) {
          return r2(o2.error);
        };
      });
    }, t2.URL_SCHEME = "indexeddb://", t2;
  }();
  var sd = function(t2) {
    return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(id.URL_SCHEME) ? (e2 = t2.slice(id.URL_SCHEME.length), new id(e2)) : null;
    var e2;
  };
  Qf.registerSaveRouter(sd), Qf.registerLoadRouter(sd);
  var ud = function() {
    function t2() {
      this.indexedDB = od();
    }
    return t2.prototype.listModels = function() {
      return n(this, void 0, void 0, function() {
        var t3 = this;
        return r(this, function(e2) {
          return [2, new Promise(function(e3, n2) {
            var r2 = t3.indexedDB.open("tensorflowjs", 1);
            r2.onupgradeneeded = function() {
              return ad(r2);
            }, r2.onsuccess = function() {
              var t4 = r2.result, o2 = t4.transaction(rd, "readonly"), a2 = o2.objectStore(rd).getAll();
              a2.onsuccess = function() {
                for (var t5 = {}, n3 = 0, r3 = a2.result; n3 < r3.length; n3++) {
                  var o3 = r3[n3];
                  t5[o3.modelPath] = o3.modelArtifactsInfo;
                }
                e3(t5);
              }, a2.onerror = function(e4) {
                return t4.close(), n2(a2.error);
              }, o2.oncomplete = function() {
                return t4.close();
              };
            }, r2.onerror = function(t4) {
              return n2(r2.error);
            };
          })];
        });
      });
    }, t2.prototype.removeModel = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2 = this;
        return r(this, function(n2) {
          var r2;
          return t3 = (r2 = t3).startsWith(id.URL_SCHEME) ? r2.slice(id.URL_SCHEME.length) : r2, [2, new Promise(function(n3, r3) {
            var o2 = e2.indexedDB.open("tensorflowjs", 1);
            o2.onupgradeneeded = function() {
              return ad(o2);
            }, o2.onsuccess = function() {
              var e3, a2 = o2.result, i2 = a2.transaction(rd, "readwrite"), s2 = i2.objectStore(rd), u2 = s2.get(t3);
              u2.onsuccess = function() {
                if (null == u2.result)
                  return a2.close(), r3(new Error("Cannot find model with path '" + t3 + "' in IndexedDB."));
                var o3 = s2.delete(t3), i3 = function() {
                  var o4 = (e3 = a2.transaction(nd, "readwrite")).objectStore(nd).delete(t3);
                  o4.onsuccess = function() {
                    return n3(u2.result.modelArtifactsInfo);
                  }, o4.onerror = function(t4) {
                    return r3(u2.error);
                  };
                };
                o3.onsuccess = i3, o3.onerror = function(t4) {
                  return i3(), a2.close(), r3(u2.error);
                };
              }, u2.onerror = function(t4) {
                return a2.close(), r3(u2.error);
              }, i2.oncomplete = function() {
                null == e3 ? a2.close() : e3.oncomplete = function() {
                  return a2.close();
                };
              };
            }, o2.onerror = function(t4) {
              return r3(o2.error);
            };
          })];
        });
      });
    }, t2;
  }();
  if (i().getBool("IS_BROWSER"))
    try {
      Zf.registerManager(id.URL_SCHEME, new ud());
    } catch (t2) {
    }
  var cd = "/";
  var ld = "tensorflowjs_models";
  var hd = "info";
  var fd = "model_topology";
  var dd = "weight_specs";
  var pd = "weight_data";
  var vd = "model_metadata";
  function gd(t2) {
    return { info: [ld, t2, hd].join(cd), topology: [ld, t2, fd].join(cd), weightSpecs: [ld, t2, dd].join(cd), weightData: [ld, t2, pd].join(cd), modelMetadata: [ld, t2, vd].join(cd) };
  }
  function md(t2) {
    var e2 = t2.split(cd);
    if (e2.length < 3)
      throw new Error("Invalid key format: " + t2);
    return e2.slice(1, e2.length - 1).join(cd);
  }
  var yd = function() {
    function t2(t3) {
      if (!i().getBool("IS_BROWSER") || "undefined" == typeof window || void 0 === window.localStorage)
        throw new Error("The current environment does not support local storage.");
      if (this.LS = window.localStorage, null == t3 || !t3)
        throw new Error("For local storage, modelPath must not be null, undefined or empty.");
      this.modelPath = t3, this.keys = gd(this.modelPath);
    }
    return t2.prototype.save = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o2;
        return r(this, function(r2) {
          if (t3.modelTopology instanceof ArrayBuffer)
            throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
          e2 = JSON.stringify(t3.modelTopology), n2 = JSON.stringify(t3.weightSpecs), o2 = $f(t3);
          try {
            return this.LS.setItem(this.keys.info, JSON.stringify(o2)), this.LS.setItem(this.keys.topology, e2), this.LS.setItem(this.keys.weightSpecs, n2), this.LS.setItem(this.keys.weightData, function(t4) {
              if (Kf)
                return Buffer.from(t4).toString("base64");
              for (var e3 = new Uint8Array(t4), n3 = "", r3 = 0, o3 = e3.length; r3 < o3; r3++)
                n3 += String.fromCharCode(e3[r3]);
              return btoa(n3);
            }(t3.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({ format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata })), [2, { modelArtifactsInfo: o2 }];
          } catch (t4) {
            throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + o2.modelTopologyBytes + ", weightSpecsBytes=" + o2.weightSpecsBytes + ", weightDataBytes=" + o2.weightDataBytes + ".");
          }
          return [2];
        });
      });
    }, t2.prototype.load = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2, n2, o2, a2, i2, s2;
        return r(this, function(r2) {
          if (null == (t3 = JSON.parse(this.LS.getItem(this.keys.info))))
            throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
          if ("JSON" !== t3.modelTopologyType)
            throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
          if (e2 = {}, null == (n2 = JSON.parse(this.LS.getItem(this.keys.topology))))
            throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
          if (e2.modelTopology = n2, null == (o2 = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
            throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
          if (e2.weightSpecs = o2, null != (a2 = this.LS.getItem(this.keys.modelMetadata)) && (i2 = JSON.parse(a2), e2.format = i2.format, e2.generatedBy = i2.generatedBy, e2.convertedBy = i2.convertedBy, e2.userDefinedMetadata = i2.userDefinedMetadata), null == (s2 = this.LS.getItem(this.keys.weightData)))
            throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
          return e2.weightData = function(t4) {
            if (Kf) {
              var e3 = Buffer.from(t4, "base64");
              return e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength);
            }
            for (var n3 = atob(t4), r3 = new Uint8Array(n3.length), o3 = 0; o3 < n3.length; ++o3)
              r3.set([n3.charCodeAt(o3)], o3);
            return r3.buffer;
          }(s2), [2, e2];
        });
      });
    }, t2.URL_SCHEME = "localstorage://", t2;
  }();
  var xd = function(t2) {
    return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(yd.URL_SCHEME) ? (e2 = t2.slice(yd.URL_SCHEME.length), new yd(e2)) : null;
    var e2;
  };
  Qf.registerSaveRouter(xd), Qf.registerLoadRouter(xd);
  var bd = function() {
    function t2() {
      C(i().getBool("IS_BROWSER"), function() {
        return "Current environment is not a web browser";
      }), C("undefined" == typeof window || void 0 !== window.localStorage, function() {
        return "Current browser does not appear to support localStorage";
      }), this.LS = window.localStorage;
    }
    return t2.prototype.listModels = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2, n2, o2, a2, i2;
        return r(this, function(r2) {
          for (t3 = {}, e2 = ld + cd, n2 = cd + hd, o2 = 0; o2 < this.LS.length; ++o2)
            (a2 = this.LS.key(o2)).startsWith(e2) && a2.endsWith(n2) && (i2 = md(a2), t3[i2] = JSON.parse(this.LS.getItem(a2)));
          return [2, t3];
        });
      });
    }, t2.prototype.removeModel = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2;
        return r(this, function(r2) {
          var o2;
          if (t3 = (o2 = t3).startsWith(yd.URL_SCHEME) ? o2.slice(yd.URL_SCHEME.length) : o2, e2 = gd(t3), null == this.LS.getItem(e2.info))
            throw new Error("Cannot find model at path '" + t3 + "'");
          return n2 = JSON.parse(this.LS.getItem(e2.info)), this.LS.removeItem(e2.info), this.LS.removeItem(e2.topology), this.LS.removeItem(e2.weightSpecs), this.LS.removeItem(e2.weightData), [2, n2];
        });
      });
    }, t2;
  }();
  if (i().getBool("IS_BROWSER"))
    try {
      Zf.registerManager(yd.URL_SCHEME, new bd());
    } catch (t2) {
    }
  var wd = "model";
  var Cd = ".json";
  var Ed = ".weights.bin";
  function Rd(t2) {
    return new Promise(function(t3) {
      return setTimeout(t3);
    }).then(t2);
  }
  var Id = function() {
    function t2(e2) {
      if (!i().getBool("IS_BROWSER"))
        throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
      e2.startsWith(t2.URL_SCHEME) && (e2 = e2.slice(t2.URL_SCHEME.length)), null != e2 && 0 !== e2.length || (e2 = wd), this.modelTopologyFileName = e2 + Cd, this.weightDataFileName = e2 + Ed;
    }
    return t2.prototype.save = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o2, a2, i2, s2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if ("undefined" == typeof document)
                throw new Error("Browser downloads are not supported in this environment since `document` is not present");
              if (e2 = window.URL.createObjectURL(new Blob([t3.weightData], { type: "application/octet-stream" })), !(t3.modelTopology instanceof ArrayBuffer))
                return [3, 1];
              throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
            case 1:
              return n2 = [{ paths: ["./" + this.weightDataFileName], weights: t3.weightSpecs }], o2 = { modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, weightsManifest: n2 }, a2 = window.URL.createObjectURL(new Blob([JSON.stringify(o2)], { type: "application/json" })), (i2 = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName, i2.href = a2, [4, Rd(function() {
                return i2.dispatchEvent(new MouseEvent("click"));
              })];
            case 2:
              return r2.sent(), null == t3.weightData ? [3, 4] : ((s2 = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName, s2.href = e2, [4, Rd(function() {
                return s2.dispatchEvent(new MouseEvent("click"));
              })]);
            case 3:
              r2.sent(), r2.label = 4;
            case 4:
              return [2, { modelArtifactsInfo: $f(t3) }];
          }
        });
      });
    }, t2.URL_SCHEME = "downloads://", t2;
  }();
  var kd = function() {
    function t2(t3) {
      if (null == t3 || t3.length < 1)
        throw new Error("When calling browserFiles, at least 1 file is required, but received " + t3);
      this.files = t3;
    }
    return t2.prototype.load = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2, n2 = this;
        return r(this, function(r2) {
          return t3 = this.files[0], e2 = this.files.slice(1), [2, new Promise(function(r3, o2) {
            var a2 = new FileReader();
            a2.onload = function(a3) {
              var i2 = JSON.parse(a3.target.result), s2 = i2.modelTopology;
              if (null != s2) {
                0 === e2.length && r3({ modelTopology: s2 });
                var u2 = i2.weightsManifest;
                if (null != u2) {
                  var c2;
                  try {
                    c2 = n2.checkManifestAndWeightFiles(u2, e2);
                  } catch (t4) {
                    return void o2(t4);
                  }
                  var l2 = [], h2 = [], f2 = [];
                  u2.forEach(function(t4) {
                    t4.paths.forEach(function(t5) {
                      h2.push(t5), f2.push(null);
                    }), l2.push.apply(l2, t4.weights);
                  }), u2.forEach(function(t4) {
                    t4.paths.forEach(function(t5) {
                      var e3 = new FileReader();
                      e3.onload = function(e4) {
                        var n3 = e4.target.result, o3 = h2.indexOf(t5);
                        f2[o3] = n3, -1 === f2.indexOf(null) && r3({ modelTopology: s2, weightSpecs: l2, weightData: Xf(f2), format: i2.format, generatedBy: i2.generatedBy, convertedBy: i2.convertedBy, userDefinedMetadata: i2.userDefinedMetadata });
                      }, e3.onerror = function(e4) {
                        return o2("Failed to weights data from file of path '" + t5 + "'.");
                      }, e3.readAsArrayBuffer(c2[t5]);
                    });
                  });
                } else
                  o2(new Error("weightManifest field is missing from file " + t3.name));
              } else
                o2(new Error("modelTopology field is missing from file " + t3.name));
            }, a2.onerror = function(e3) {
              return o2("Failed to read model topology and weights manifest JSON from file '" + t3.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.");
            }, a2.readAsText(t3);
          })];
        });
      });
    }, t2.prototype.checkManifestAndWeightFiles = function(t3, e2) {
      for (var n2 = [], r2 = e2.map(function(t4) {
        return Yf(t4.name);
      }), o2 = {}, a2 = 0, i2 = t3; a2 < i2.length; a2++) {
        i2[a2].paths.forEach(function(t4) {
          var a3 = Yf(t4);
          if (-1 !== n2.indexOf(a3))
            throw new Error("Duplicate file basename found in weights manifest: '" + a3 + "'");
          if (n2.push(a3), -1 === r2.indexOf(a3))
            throw new Error("Weight file with basename '" + a3 + "' is not provided.");
          o2[t4] = e2[r2.indexOf(a3)];
        });
      }
      if (n2.length !== e2.length)
        throw new Error("Mismatch in the number of files in weights manifest (" + n2.length + ") and the number of weight files provided (" + e2.length + ").");
      return o2;
    }, t2;
  }();
  function Sd(t2, e2, n2, r2) {
    !function(t3) {
      C(null != t3 && Array.isArray(t3) && t3.length > 0, function() {
        return "promises must be a none empty array";
      });
    }(t2), function(t3, e3) {
      C(t3 >= 0 && t3 <= 1, function() {
        return "Progress fraction must be in range [0, 1], but got startFraction " + t3;
      }), C(e3 >= 0 && e3 <= 1, function() {
        return "Progress fraction must be in range [0, 1], but got endFraction " + e3;
      }), C(e3 >= t3, function() {
        return "startFraction must be no more than endFraction, but got startFraction " + t3 + " and endFraction " + e3;
      });
    }(n2 = null == n2 ? 0 : n2, r2 = null == r2 ? 1 : r2);
    var o2 = 0;
    return Promise.all(t2.map(function(a2) {
      return a2.then(function(a3) {
        var i2 = n2 + ++o2 / t2.length * (r2 - n2);
        return e2(i2), a3;
      }), a2;
    }));
  }
  function Ad(t2, e2) {
    return n(this, void 0, void 0, function() {
      var n2, o2, a2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return null == e2 && (e2 = {}), n2 = null == e2.fetchFunc ? i().platform.fetch : e2.fetchFunc, o2 = t2.map(function(t3) {
              return n2(t3, e2.requestInit, { isBinary: true });
            }), a2 = 0, s2 = 0.5, null != e2.onProgress ? [3, 2] : [4, Promise.all(o2)];
          case 1:
            return u2 = r2.sent(), [3, 4];
          case 2:
            return [4, Sd(o2, e2.onProgress, a2, s2)];
          case 3:
            u2 = r2.sent(), r2.label = 4;
          case 4:
            return c2 = u2.map(function(t3) {
              return t3.arrayBuffer();
            }), l2 = 0.5, h2 = 1, null != e2.onProgress ? [3, 6] : [4, Promise.all(c2)];
          case 5:
            return f2 = r2.sent(), [3, 8];
          case 6:
            return [4, Sd(c2, e2.onProgress, l2, h2)];
          case 7:
            f2 = r2.sent(), r2.label = 8;
          case 8:
            return [2, f2];
        }
      });
    });
  }
  function Td(t2) {
    var e2 = this;
    return function(o2, a2, i2) {
      return void 0 === a2 && (a2 = ""), n(e2, void 0, void 0, function() {
        var e3, n2, s2, u2, c2, l2, h2, f2, d2, p2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (e3 = o2.map(function() {
                return false;
              }), n2 = {}, s2 = null != i2 ? i2.map(function() {
                return false;
              }) : [], u2 = [], o2.forEach(function(t3, r3) {
                var o3 = 0;
                t3.weights.forEach(function(t4) {
                  var a3 = "quantization" in t4 ? t4.quantization.dtype : t4.dtype, c3 = zf[a3] * k(t4.shape), l3 = function() {
                    e3[r3] = true, null == n2[r3] && (n2[r3] = []), n2[r3].push({ manifestEntry: t4, groupOffset: o3, sizeBytes: c3 });
                  };
                  null != i2 ? i2.forEach(function(e4, n3) {
                    e4 === t4.name && (l3(), s2[n3] = true);
                  }) : l3(), u2.push(t4.name), o3 += c3;
                });
              }), !s2.every(function(t3) {
                return t3;
              }))
                throw c2 = i2.filter(function(t3, e4) {
                  return !s2[e4];
                }), new Error("Could not find weights in manifest with names: " + c2.join(", ") + ". \nManifest JSON has weights with names: " + u2.join(", ") + ".");
              return l2 = e3.reduce(function(t3, e4, n3) {
                return e4 && t3.push(n3), t3;
              }, []), h2 = [], l2.forEach(function(t3) {
                o2[t3].paths.forEach(function(t4) {
                  var e4 = a2 + (a2.endsWith("/") ? "" : "/") + t4;
                  h2.push(e4);
                });
              }), [4, t2(h2)];
            case 1:
              return f2 = r2.sent(), d2 = {}, p2 = 0, l2.forEach(function(t3) {
                for (var e4 = o2[t3].paths.length, r3 = 0, a3 = 0; a3 < e4; a3++)
                  r3 += f2[p2 + a3].byteLength;
                for (var i3 = new ArrayBuffer(r3), s3 = new Uint8Array(i3), u3 = 0, c3 = 0; c3 < e4; c3++) {
                  var l3 = new Uint8Array(f2[p2 + c3]);
                  s3.set(l3, u3), u3 += l3.byteLength;
                }
                n2[t3].forEach(function(t4) {
                  var e5 = Hf(i3.slice(t4.groupOffset, t4.groupOffset + t4.sizeBytes), [t4.manifestEntry]);
                  for (var n3 in e5)
                    d2[n3] = e5[n3];
                }), p2 += e4;
              }), [2, d2];
          }
        });
      });
    };
  }
  Qf.registerSaveRouter(function(t2) {
    return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Id.URL_SCHEME) ? function(t3) {
      void 0 === t3 && (t3 = "model");
      return new Id(t3);
    }(t2.slice(Id.URL_SCHEME.length)) : null;
  });
  var Dd = function() {
    function t2(t3, e2) {
      if (this.DEFAULT_METHOD = "POST", null == e2 && (e2 = {}), this.weightPathPrefix = e2.weightPathPrefix, this.onProgress = e2.onProgress, null != e2.fetchFunc ? (C("function" == typeof e2.fetchFunc, function() {
        return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)";
      }), this.fetch = e2.fetchFunc) : this.fetch = i().platform.fetch, C(null != t3 && t3.length > 0, function() {
        return "URL path for http must not be null, undefined or empty.";
      }), Array.isArray(t3) && C(2 === t3.length, function() {
        return "URL paths for http must have a length of 2, (actual length is " + t3.length + ").";
      }), this.path = t3, null != e2.requestInit && null != e2.requestInit.body)
        throw new Error("requestInit is expected to have no pre-existing body, but has one.");
      this.requestInit = e2.requestInit || {};
    }
    return t2.prototype.save = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o2, a2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (t3.modelTopology instanceof ArrayBuffer)
                throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
              return (e2 = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit)).body = new FormData(), n2 = [{ paths: ["./model.weights.bin"], weights: t3.weightSpecs }], o2 = { modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata, weightsManifest: n2 }, e2.body.append("model.json", new Blob([JSON.stringify(o2)], { type: "application/json" }), "model.json"), null != t3.weightData && e2.body.append("model.weights.bin", new Blob([t3.weightData], { type: "application/octet-stream" }), "model.weights.bin"), [4, this.fetch(this.path, e2)];
            case 1:
              if ((a2 = r2.sent()).ok)
                return [2, { modelArtifactsInfo: $f(t3), responses: [a2] }];
              throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + a2.status + ".");
          }
        });
      });
    }, t2.prototype.load = function() {
      return n(this, void 0, void 0, function() {
        var t3, e2, n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, this.fetch(this.path, this.requestInit)];
            case 1:
              if (!(t3 = r2.sent()).ok)
                throw new Error("Request to " + this.path + " failed with status code " + t3.status + ". Please verify this URL points to the model JSON of the model to load.");
              r2.label = 2;
            case 2:
              return r2.trys.push([2, 4, , 5]), [4, t3.json()];
            case 3:
              return e2 = r2.sent(), [3, 5];
            case 4:
              throw r2.sent(), n2 = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? n2 += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : n2 += " Please make sure the server is serving valid JSON for this request.", new Error(n2);
            case 5:
              if (o2 = e2.modelTopology, a2 = e2.weightsManifest, i2 = e2.generatedBy, s2 = e2.convertedBy, u2 = e2.format, c2 = e2.userDefinedMetadata, null == o2 && null == a2)
                throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
              return null == a2 ? [3, 7] : [4, this.loadWeights(a2)];
            case 6:
              f2 = r2.sent(), l2 = f2[0], h2 = f2[1], r2.label = 7;
            case 7:
              return [2, { modelTopology: o2, weightSpecs: l2, weightData: h2, userDefinedMetadata: c2, generatedBy: i2, convertedBy: s2, format: u2 }];
          }
        });
      });
    }, t2.prototype.loadWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              for (e2 = Array.isArray(this.path) ? this.path[1] : this.path, n2 = function(t4) {
                var e3 = t4.lastIndexOf("/"), n3 = t4.lastIndexOf("?"), r3 = t4.substring(0, e3), o3 = n3 > e3 ? t4.substring(n3) : "";
                return [r3 + "/", o3];
              }(e2), o2 = n2[0], a2 = n2[1], i2 = this.weightPathPrefix || o2, s2 = [], u2 = 0, c2 = t3; u2 < c2.length; u2++)
                l2 = c2[u2], s2.push.apply(s2, l2.weights);
              return h2 = [], t3.forEach(function(t4) {
                t4.paths.forEach(function(t5) {
                  h2.push(i2 + t5 + a2);
                });
              }), [4, Ad(h2, { requestInit: this.requestInit, fetchFunc: this.fetch, onProgress: this.onProgress })];
            case 1:
              return f2 = r2.sent(), [2, [s2, Xf(f2)]];
          }
        });
      });
    }, t2.URL_SCHEME_REGEX = /^https?:\/\//, t2;
  }();
  function Nd(t2) {
    return null != t2.match(Dd.URL_SCHEME_REGEX);
  }
  var Fd = function(t2, e2) {
    if ("undefined" == typeof fetch)
      return null;
    return (Array.isArray(t2) ? t2.every(function(t3) {
      return Nd(t3);
    }) : Nd(t2)) ? _d(t2, { onProgress: e2 }) : null;
  };
  function _d(t2, e2) {
    return new Dd(t2, e2);
  }
  Qf.registerSaveRouter(Fd), Qf.registerLoadRouter(Fd);
  var Od = function() {
    function t2(t3) {
      this.modelArtifacts = t3;
    }
    return t2.prototype.load = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          return [2, this.modelArtifacts];
        });
      });
    }, t2;
  }();
  var Md = function() {
    function t2(t3) {
      this.saveHandler = t3;
    }
    return t2.prototype.save = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          return [2, this.saveHandler(t3)];
        });
      });
    }, t2;
  }();
  var Bd = Object.freeze({ browserFiles: function(t2) {
    return new kd(t2);
  }, browserHTTPRequest: function(t2, e2) {
    return _d(t2, e2);
  }, concatenateArrayBuffers: Xf, decodeWeights: Hf, encodeWeights: function(t2, e2) {
    return n(this, void 0, void 0, function() {
      var o2, a2, i2, s2, u2, c2 = this;
      return r(this, function(l2) {
        switch (l2.label) {
          case 0:
            for (o2 = [], a2 = [], i2 = Array.isArray(t2) ? t2.map(function(t3) {
              return t3.name;
            }) : Object.keys(t2), s2 = function(s3) {
              var u3 = i2[s3], l3 = Array.isArray(t2) ? t2[s3].tensor : t2[u3];
              if ("float32" !== l3.dtype && "int32" !== l3.dtype && "bool" !== l3.dtype && "string" !== l3.dtype)
                throw new Error("Unsupported dtype in weight '" + u3 + "': " + l3.dtype);
              var h2 = { name: u3, shape: l3.shape, dtype: l3.dtype };
              if ("string" === l3.dtype) {
                var f2 = new Promise(function(t3) {
                  return n(c2, void 0, void 0, function() {
                    var e3, n2, o3, a3, i3, s4, u4;
                    return r(this, function(r2) {
                      switch (r2.label) {
                        case 0:
                          return [4, l3.bytes()];
                        case 1:
                          for (e3 = r2.sent(), n2 = e3.reduce(function(t4, e4) {
                            return t4 + e4.length;
                          }, 0) + Gf * e3.length, o3 = new Uint8Array(n2), a3 = 0, i3 = 0; i3 < e3.length; i3++)
                            s4 = e3[i3], u4 = new Uint8Array(new Uint32Array([s4.length]).buffer), o3.set(u4, a3), a3 += Gf, o3.set(s4, a3), a3 += s4.length;
                          return t3(o3), [2];
                      }
                    });
                  });
                });
                a2.push(f2);
              } else
                a2.push(l3.data());
              null != e2 && (h2.group = e2), o2.push(h2);
            }, u2 = 0; u2 < i2.length; ++u2)
              s2(u2);
            return [4, Promise.all(a2)];
          case 1:
            return [2, { data: qf(l2.sent()), specs: o2 }];
        }
      });
    });
  }, fromMemory: function(t2, e2, n2, r2) {
    return 1 === arguments.length ? null != t2.modelTopology || null != t2.weightSpecs ? new Od(t2) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Od({ modelTopology: t2 })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Od({ modelTopology: t2, weightSpecs: e2, weightData: n2, trainingConfig: r2 }));
  }, getLoadHandlers: function(t2, e2) {
    return Qf.getLoadHandlers(t2, e2);
  }, getModelArtifactsInfoForJSON: $f, getSaveHandlers: function(t2) {
    return Qf.getSaveHandlers(t2);
  }, http: _d, isHTTPScheme: Nd, loadWeights: function(t2, e2, o2, a2) {
    return void 0 === e2 && (e2 = ""), n(this, void 0, void 0, function() {
      return r(this, function(n2) {
        return [2, Td(function(t3) {
          return Ad(t3, { requestInit: a2 });
        })(t2, e2, o2)];
      });
    });
  }, registerLoadRouter: function(t2) {
    return Qf.registerLoadRouter(t2);
  }, registerSaveRouter: function(t2) {
    return Qf.registerSaveRouter(t2);
  }, weightsLoaderFactory: Td, withSaveHandler: function(t2) {
    return new Md(t2);
  }, copyModel: function(t2, e2) {
    return n(this, void 0, void 0, function() {
      return r(this, function(n2) {
        return false, [2, ed(t2, e2, false)];
      });
    });
  }, listModels: function() {
    return n(this, void 0, void 0, function() {
      var t2, e2, n2, o2, a2, i2, s2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            t2 = Zf.getSchemes(), e2 = {}, n2 = 0, o2 = t2, r2.label = 1;
          case 1:
            return n2 < o2.length ? (a2 = o2[n2], [4, Zf.getManager(a2).listModels()]) : [3, 4];
          case 2:
            for (s2 in i2 = r2.sent())
              e2[a2 + Jf + s2] = i2[s2];
            r2.label = 3;
          case 3:
            return n2++, [3, 1];
          case 4:
            return [2, e2];
        }
      });
    });
  }, moveModel: function(t2, e2) {
    return n(this, void 0, void 0, function() {
      return r(this, function(n2) {
        return true, [2, ed(t2, e2, true)];
      });
    });
  }, removeModel: function(t2) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        return e2 = td(t2), [2, Zf.getManager(e2.scheme).removeModel(e2.path)];
      });
    });
  } });
  var Pd;
  var Ld = An({ confusionMatrix_: function(t2, e2, n2) {
    var r2 = gn(t2, "labels", "confusionMatrix"), o2 = gn(e2, "predictions", "confusionMatrix");
    C(null == n2 || n2 > 0 && Number.isInteger(n2), function() {
      return "If provided, numClasses must be a positive integer, but got " + n2;
    }), C(1 === r2.rank, function() {
      return "Expected the rank of labels to be 1, but got " + r2.rank;
    }), C(1 === o2.rank, function() {
      return "Expected the rank of predictions to be 1, but got " + o2.rank;
    }), C(r2.shape[0] === o2.shape[0], function() {
      return "Mismatch in the number of examples: " + r2.shape[0] + " vs. " + o2.shape[0] + ". Labels and predictions should have the same number of elements.";
    }), C(n2 > 0 && Number.isInteger(n2), function() {
      return "numClasses is required to be a positive integer, but got " + n2;
    });
    var a2 = Rc(r2.asType("int32"), n2), i2 = Rc(o2.asType("int32"), n2);
    return a2.transpose().matMul(i2).asType("int32");
  } });
  var Wd = Object.freeze({ confusionMatrix: Ld });
  var Ud = An({ fromPixels_: function(t2, e2) {
    if (void 0 === e2 && (e2 = 3), e2 > 4)
      throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
    if (null == t2)
      throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
    var n2 = false, r2 = false, o2 = false, a2 = false, i2 = false;
    if (t2.data instanceof Uint8Array)
      n2 = true;
    else if ("undefined" != typeof ImageData && t2 instanceof ImageData)
      r2 = true;
    else if ("undefined" != typeof HTMLVideoElement && t2 instanceof HTMLVideoElement)
      o2 = true;
    else if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement)
      a2 = true;
    else {
      if (null == t2.getContext)
        throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + t2.constructor.name);
      i2 = true;
    }
    if (o2) {
      if (o2 && t2.readyState < 2)
        throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
    }
    if (null != l("FromPixels", Lt.backendName))
      return Lt.runKernel("FromPixels", { pixels: t2 }, { numChannels: e2 });
    var s2, u2, c2 = o2 ? [t2.videoWidth, t2.videoHeight] : [t2.width, t2.height], h2 = c2[0], f2 = c2[1];
    if (i2 ? s2 = t2.getContext("2d").getImageData(0, 0, h2, f2).data : r2 || n2 ? s2 = t2.data : (a2 || o2) && (null == Pd && (Pd = document.createElement("canvas").getContext("2d")), Pd.canvas.width = h2, Pd.canvas.height = f2, Pd.drawImage(t2, 0, 0, h2, f2), s2 = Pd.getImageData(0, 0, h2, f2).data), 4 === e2)
      u2 = new Int32Array(s2);
    else {
      var d2 = h2 * f2;
      u2 = new Int32Array(d2 * e2);
      for (var p2 = 0; p2 < d2; p2++)
        for (var v = 0; v < e2; ++v)
          u2[p2 * e2 + v] = s2[4 * p2 + v];
    }
    return Pn(u2, [f2, h2, e2], "int32");
  } });
  var Vd = Object.freeze({ toPixels: function(t2, e2) {
    return n(this, void 0, void 0, function() {
      var n2, o2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v, g, m2, y2, x2, b2, w2, C2, E2, R2, I2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (n2 = gn(t2, "img", "toPixels"), t2 instanceof wt || (n2 = n2.toInt()), 2 !== n2.rank && 3 !== n2.rank)
              throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + n2.rank + ".");
            if (o2 = n2.shape.slice(0, 2), a2 = o2[0], i2 = o2[1], (s2 = 2 === n2.rank ? 1 : n2.shape[2]) > 4 || 2 === s2)
              throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + s2);
            return [4, n2.data()];
          case 1:
            return u2 = r2.sent(), c2 = n2.min(), l2 = n2.max(), [4, Promise.all([c2.data(), l2.data()])];
          case 2:
            if (h2 = r2.sent(), f2 = h2[0], d2 = h2[1], p2 = f2[0], v = d2[0], c2.dispose(), l2.dispose(), "float32" === n2.dtype) {
              if (p2 < 0 || v > 1)
                throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + p2 + " - " + v + "].");
            } else {
              if ("int32" !== n2.dtype)
                throw new Error("Unsupported type for toPixels: " + n2.dtype + ". Please use float32 or int32 tensors.");
              if (p2 < 0 || v > 255)
                throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + p2 + " - " + v + "].");
            }
            for (g = "float32" === n2.dtype ? 255 : 1, m2 = new Uint8ClampedArray(i2 * a2 * 4), y2 = 0; y2 < a2 * i2; ++y2)
              x2 = void 0, b2 = void 0, w2 = void 0, C2 = void 0, 1 === s2 ? (x2 = u2[y2] * g, b2 = u2[y2] * g, w2 = u2[y2] * g, C2 = 255) : 3 === s2 ? (x2 = u2[3 * y2] * g, b2 = u2[3 * y2 + 1] * g, w2 = u2[3 * y2 + 2] * g, C2 = 255) : 4 === s2 && (x2 = u2[4 * y2] * g, b2 = u2[4 * y2 + 1] * g, w2 = u2[4 * y2 + 2] * g, C2 = u2[4 * y2 + 3] * g), m2[(E2 = 4 * y2) + 0] = Math.round(x2), m2[E2 + 1] = Math.round(b2), m2[E2 + 2] = Math.round(w2), m2[E2 + 3] = Math.round(C2);
            return null != e2 && (e2.width = i2, e2.height = a2, R2 = e2.getContext("2d"), I2 = new ImageData(m2, i2, a2), R2.putImageData(I2, 0, 0)), n2 !== t2 && n2.dispose(), [2, m2];
        }
      });
    });
  }, fromPixels: Ud });
  var zd = function() {
    function t2() {
    }
    return t2.prototype.getClassName = function() {
      return this.constructor.className;
    }, t2.fromConfig = function(t3, e2) {
      return new t3(e2);
    }, t2;
  }();
  var Gd = function() {
    function t2() {
      this.classNameMap = {};
    }
    return t2.getMap = function() {
      return null == t2.instance && (t2.instance = new t2()), t2.instance;
    }, t2.register = function(e2) {
      t2.getMap().classNameMap[e2.className] = [e2, e2.fromConfig];
    }, t2;
  }();
  function Hd(t2) {
    C(null != t2.className, function() {
      return "Class being registered does not have the static className property defined.";
    }), C("string" == typeof t2.className, function() {
      return "className is required to be a string, but got type " + typeof t2.className;
    }), C(t2.className.length > 0, function() {
      return "Class being registered has an empty-string as its className, which is disallowed.";
    }), Gd.register(t2);
  }
  var qd = Object.freeze({ Serializable: zd, SerializationMap: Gd, registerClass: Hd });
  var jd = Object.freeze({ gpgpu_util: Rs, webgl_util: Ge, forceHalfFloat: function() {
    i().set("WEBGL_FORCE_F16_TEXTURES", true);
  }, MathBackendWebGL: Uu, setWebGLContext: Kt, GPGPUContext: Is });
  var Xd = function(t2) {
    function o2() {
      return null !== t2 && t2.apply(this, arguments) || this;
    }
    return e(o2, t2), o2.prototype.minimize = function(t3, e2, n2) {
      void 0 === e2 && (e2 = false);
      var r2 = this.computeGradients(t3, n2), o3 = r2.value, a2 = r2.grads;
      if (null != n2) {
        var i2 = n2.map(function(t4) {
          return { name: t4.name, tensor: a2[t4.name] };
        });
        this.applyGradients(i2);
      } else
        this.applyGradients(a2);
      return tn(a2), e2 ? o3 : (o3.dispose(), null);
    }, Object.defineProperty(o2.prototype, "iterations", { get: function() {
      return null == this.iterations_ && (this.iterations_ = 0), this.iterations_;
    }, enumerable: true, configurable: true }), o2.prototype.incrementIterations = function() {
      this.iterations_ = this.iterations + 1;
    }, o2.prototype.computeGradients = function(t3, e2) {
      return ra(t3, e2);
    }, o2.prototype.dispose = function() {
      null != this.iterations_ && tn(this.iterations_);
    }, o2.prototype.saveIterations = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          return null == this.iterations_ && (this.iterations_ = 0), [2, { name: "iter", tensor: On(this.iterations_, "int32") }];
        });
      });
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          throw new Error("getWeights() is not implemented for this optimizer yet.");
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(t4) {
          throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName());
        });
      });
    }, o2.prototype.extractIterations = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2;
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return e2 = this, [4, t3[0].tensor.data()];
            case 1:
              return e2.iterations_ = n2.sent()[0], [2, t3.slice(1)];
          }
        });
      });
    }, o2;
  }(zd);
  Object.defineProperty(Xd, Symbol.hasInstance, { value: function(t2) {
    return null != t2.minimize && null != t2.computeGradients && null != t2.applyGradients;
  } });
  var Yd = function(t2) {
    function o2(e2, n2, r2) {
      void 0 === r2 && (r2 = null);
      var o3 = t2.call(this) || this;
      return o3.learningRate = e2, o3.rho = n2, o3.epsilon = r2, o3.accumulatedGrads = [], o3.accumulatedUpdates = [], null == r2 && (o3.epsilon = Lt.backend.epsilon()), o3;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this;
      (Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3)).forEach(function(n2, r2) {
        var o3 = Lt.registeredVariables[n2];
        null == e2.accumulatedGrads[r2] && (e2.accumulatedGrads[r2] = { originalName: n2 + "/accum_grad", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) }), null == e2.accumulatedUpdates[r2] && (e2.accumulatedUpdates[r2] = { originalName: n2 + "/accum_var", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) });
        var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
        if (null != a2) {
          var i2 = e2.accumulatedGrads[r2].variable, s2 = e2.accumulatedUpdates[r2].variable;
          Ze(function() {
            var t4 = i2.mul(e2.rho).add(a2.square().mul(1 - e2.rho)), n3 = s2.add(e2.epsilon).sqrt().div(i2.add(e2.epsilon).sqrt()).mul(a2), r3 = s2.mul(e2.rho).add(n3.square().mul(1 - e2.rho));
            i2.assign(t4), s2.assign(r3);
            var u2 = n3.mul(-e2.learningRate).add(o3);
            o3.assign(u2);
          });
        }
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      null != this.accumulatedUpdates && (tn(this.accumulatedGrads.map(function(t3) {
        return t3.variable;
      })), tn(this.accumulatedUpdates.map(function(t3) {
        return t3.variable;
      })));
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return t3 = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
            case 1:
              return [2, [e2.sent()].concat(t3.map(function(t4) {
                return { name: t4.originalName, tensor: t4.variable };
              }))];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2;
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              return t3 = n2.sent(), e2 = t3.length / 2, false, this.accumulatedGrads = t3.slice(0, e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), this.accumulatedUpdates = t3.slice(e2, 2 * e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.rho, e2.epsilon);
    }, o2.className = "Adadelta", o2;
  }(Xd);
  Hd(Yd);
  var $d = function(t2) {
    function o2(e2, n2) {
      void 0 === n2 && (n2 = 0.1);
      var r2 = t2.call(this) || this;
      return r2.learningRate = e2, r2.initialAccumulatorValue = n2, r2.accumulatedGrads = [], r2;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this;
      (Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3)).forEach(function(n2, r2) {
        var o3 = Lt.registeredVariables[n2];
        if (null == e2.accumulatedGrads[r2]) {
          e2.accumulatedGrads[r2] = { originalName: n2 + "/accumulator", variable: Ze(function() {
            return Hn(o3.shape, e2.initialAccumulatorValue).variable(false);
          }) };
        }
        var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
        if (null != a2) {
          var i2 = e2.accumulatedGrads[r2].variable;
          Ze(function() {
            var t4 = i2.add(a2.square());
            i2.assign(t4);
            var n3 = a2.div(t4.add(Lt.backend.epsilon()).sqrt()).mul(-e2.learningRate).add(o3);
            o3.assign(n3);
          });
        }
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      null != this.accumulatedGrads && tn(this.accumulatedGrads.map(function(t3) {
        return t3.variable;
      }));
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          switch (t3.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [t3.sent()].concat(this.accumulatedGrads.map(function(t4) {
                return { name: t4.originalName, tensor: t4.variable };
              }))];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              return t3 = e2.sent(), false, this.accumulatedGrads = t3.map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.initialAccumulatorValue);
    }, o2.className = "Adagrad", o2;
  }(Xd);
  Hd($d);
  var Qd = function(t2) {
    function o2(e2, n2, r2, o3) {
      void 0 === o3 && (o3 = null);
      var a2 = t2.call(this) || this;
      return a2.learningRate = e2, a2.beta1 = n2, a2.beta2 = r2, a2.epsilon = o3, a2.accumulatedFirstMoment = [], a2.accumulatedSecondMoment = [], Ze(function() {
        a2.accBeta1 = On(n2).variable(), a2.accBeta2 = On(r2).variable();
      }), null == o3 && (a2.epsilon = Lt.backend.epsilon()), a2;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this, n2 = Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3);
      Ze(function() {
        var r2 = Oo(1, e2.accBeta1), o3 = Oo(1, e2.accBeta2);
        n2.forEach(function(n3, a2) {
          var i2 = Lt.registeredVariables[n3];
          null == e2.accumulatedFirstMoment[a2] && (e2.accumulatedFirstMoment[a2] = { originalName: n3 + "/m", variable: Ze(function() {
            return Xn(i2).variable(false);
          }) }), null == e2.accumulatedSecondMoment[a2] && (e2.accumulatedSecondMoment[a2] = { originalName: n3 + "/v", variable: Ze(function() {
            return Xn(i2).variable(false);
          }) });
          var s2 = Array.isArray(t3) ? t3[a2].tensor : t3[n3];
          if (null != s2) {
            var u2 = e2.accumulatedFirstMoment[a2].variable, c2 = e2.accumulatedSecondMoment[a2].variable, l2 = u2.mul(e2.beta1).add(s2.mul(1 - e2.beta1)), h2 = c2.mul(e2.beta2).add(s2.square().mul(1 - e2.beta2)), f2 = l2.div(r2), d2 = h2.div(o3);
            u2.assign(l2), c2.assign(h2);
            var p2 = f2.div(d2.sqrt().add(e2.epsilon)).mul(-e2.learningRate).add(i2);
            i2.assign(p2);
          }
        }), e2.accBeta1.assign(e2.accBeta1.mul(e2.beta1)), e2.accBeta2.assign(e2.accBeta2.mul(e2.beta2));
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      this.accBeta1.dispose(), this.accBeta2.dispose(), null != this.accumulatedFirstMoment && tn(this.accumulatedFirstMoment.map(function(t3) {
        return t3.variable;
      })), null != this.accumulatedSecondMoment && tn(this.accumulatedSecondMoment.map(function(t3) {
        return t3.variable;
      }));
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return t3 = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
            case 1:
              return [2, [e2.sent()].concat(t3.map(function(t4) {
                return { name: t4.originalName, tensor: t4.variable };
              }))];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2, n2 = this;
        return r(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              return t3 = r2.sent(), Ze(function() {
                n2.accBeta1.assign(No(n2.beta1, n2.iterations_ + 1)), n2.accBeta2.assign(No(n2.beta2, n2.iterations_ + 1));
              }), e2 = t3.length / 2, false, this.accumulatedFirstMoment = t3.slice(0, e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), this.accumulatedSecondMoment = t3.slice(e2, 2 * e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.beta1, e2.beta2, e2.epsilon);
    }, o2.className = "Adam", o2;
  }(Xd);
  Hd(Qd);
  var Jd = function(t2) {
    function o2(e2, n2, r2, o3, a2) {
      void 0 === o3 && (o3 = null), void 0 === a2 && (a2 = 0);
      var i2 = t2.call(this) || this;
      return i2.learningRate = e2, i2.beta1 = n2, i2.beta2 = r2, i2.epsilon = o3, i2.decay = a2, i2.accumulatedFirstMoment = [], i2.accumulatedWeightedInfNorm = [], Ze(function() {
        i2.iteration = On(0).variable(), i2.accBeta1 = On(n2).variable();
      }), null == o3 && (i2.epsilon = Lt.backend.epsilon()), i2;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this, n2 = Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3);
      Ze(function() {
        var r2 = Oo(1, e2.accBeta1), o3 = Bo(-e2.learningRate, e2.iteration.mul(e2.decay).add(1));
        n2.forEach(function(n3, a2) {
          var i2 = Lt.registeredVariables[n3];
          null == e2.accumulatedFirstMoment[a2] && (e2.accumulatedFirstMoment[a2] = { originalName: n3 + "/m", variable: Xn(i2).variable(false) }), null == e2.accumulatedWeightedInfNorm[a2] && (e2.accumulatedWeightedInfNorm[a2] = { originalName: n3 + "/v", variable: Xn(i2).variable(false) });
          var s2 = Array.isArray(t3) ? t3[a2].tensor : t3[n3];
          if (null != s2) {
            var u2 = e2.accumulatedFirstMoment[a2].variable, c2 = e2.accumulatedWeightedInfNorm[a2].variable, l2 = u2.mul(e2.beta1).add(s2.mul(1 - e2.beta1)), h2 = c2.mul(e2.beta2), f2 = s2.abs(), d2 = h2.maximum(f2);
            u2.assign(l2), c2.assign(d2);
            var p2 = o3.div(r2).mul(l2.div(d2.add(e2.epsilon))).add(i2);
            i2.assign(p2);
          }
        }), e2.iteration.assign(e2.iteration.add(1)), e2.accBeta1.assign(e2.accBeta1.mul(e2.beta1));
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      this.accBeta1.dispose(), this.iteration.dispose(), null != this.accumulatedFirstMoment && tn(this.accumulatedFirstMoment.map(function(t3) {
        return t3.variable;
      })), null != this.accumulatedWeightedInfNorm && tn(this.accumulatedWeightedInfNorm.map(function(t3) {
        return t3.variable;
      }));
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          throw new Error("getWeights() is not implemented for Adamax yet.");
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(t4) {
          throw new Error("setWeights() is not implemented for Adamax yet.");
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon, decay: this.decay };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.beta1, e2.beta2, e2.epsilon, e2.decay);
    }, o2.className = "Adamax", o2;
  }(Xd);
  Hd(Jd);
  var Zd = function(t2) {
    function o2(e2) {
      var n2 = t2.call(this) || this;
      return n2.learningRate = e2, n2.setLearningRate(e2), n2;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this;
      (Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3)).forEach(function(n2, r2) {
        var o3 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
        if (null != o3) {
          var a2 = Lt.registeredVariables[n2];
          Ze(function() {
            var t4 = e2.c.mul(o3).add(a2);
            a2.assign(t4);
          });
        }
      }), this.incrementIterations();
    }, o2.prototype.setLearningRate = function(t3) {
      this.learningRate = t3, null != this.c && this.c.dispose(), this.c = en(On(-t3));
    }, o2.prototype.dispose = function() {
      this.c.dispose();
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          switch (t3.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [t3.sent()]];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              if (0 !== (t3 = e2.sent()).length)
                throw new Error("SGD optimizer does not have settable weights.");
              return [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate);
    }, o2.className = "SGD", o2;
  }(Xd);
  Hd(Zd);
  var tp = function(t2) {
    function o2(e2, n2, r2) {
      void 0 === r2 && (r2 = false);
      var o3 = t2.call(this, e2) || this;
      return o3.learningRate = e2, o3.momentum = n2, o3.useNesterov = r2, o3.accumulations = [], o3.m = On(o3.momentum), o3;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this;
      (Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3)).forEach(function(n2, r2) {
        var o3 = Lt.registeredVariables[n2];
        if (null == e2.accumulations[r2]) {
          e2.accumulations[r2] = { originalName: n2 + "/momentum", variable: Ze(function() {
            return Xn(o3).variable(false);
          }) };
        }
        var a2 = e2.accumulations[r2].variable, i2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
        null != i2 && Ze(function() {
          var t4, n3 = e2.m.mul(a2).add(i2);
          t4 = e2.useNesterov ? e2.c.mul(i2.add(n3.mul(e2.m))).add(o3) : e2.c.mul(n3).add(o3), a2.assign(n3), o3.assign(t4);
        });
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      this.m.dispose(), null != this.accumulations && tn(this.accumulations.map(function(t3) {
        return t3.variable;
      }));
    }, o2.prototype.setMomentum = function(t3) {
      this.momentum = t3;
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        return r(this, function(t3) {
          switch (t3.label) {
            case 0:
              return [4, this.saveIterations()];
            case 1:
              return [2, [t3.sent()].concat(this.accumulations.map(function(t4) {
                return { name: t4.originalName, tensor: t4.variable };
              }))];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              return t3 = e2.sent(), false, this.accumulations = t3.map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.momentum, e2.useNesterov);
    }, o2.className = "Momentum", o2;
  }(Zd);
  Hd(tp);
  var ep = function(t2) {
    function o2(e2, n2, r2, o3, a2) {
      void 0 === n2 && (n2 = 0.9), void 0 === r2 && (r2 = 0), void 0 === o3 && (o3 = null), void 0 === a2 && (a2 = false);
      var i2 = t2.call(this) || this;
      if (i2.learningRate = e2, i2.decay = n2, i2.momentum = r2, i2.epsilon = o3, i2.accumulatedMeanSquares = [], i2.accumulatedMoments = [], i2.accumulatedMeanGrads = [], i2.centered = a2, null == o3 && (i2.epsilon = Lt.backend.epsilon()), null == e2)
        throw new Error("learningRate for RMSPropOptimizer must be defined.");
      return i2;
    }
    return e(o2, t2), o2.prototype.applyGradients = function(t3) {
      var e2 = this;
      (Array.isArray(t3) ? t3.map(function(t4) {
        return t4.name;
      }) : Object.keys(t3)).forEach(function(n2, r2) {
        var o3 = Lt.registeredVariables[n2];
        null == e2.accumulatedMeanSquares[r2] && (e2.accumulatedMeanSquares[r2] = { originalName: n2 + "/rms", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) }), null == e2.accumulatedMoments[r2] && (e2.accumulatedMoments[r2] = { originalName: n2 + "/momentum", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) }), null == e2.accumulatedMeanGrads[r2] && e2.centered && (e2.accumulatedMeanGrads[r2] = { originalName: n2 + "/mg", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) });
        var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
        if (null != a2) {
          var i2 = e2.accumulatedMeanSquares[r2].variable, s2 = e2.accumulatedMoments[r2].variable;
          Ze(function() {
            var t4 = i2.mul(e2.decay).add(a2.square().mul(1 - e2.decay));
            if (e2.centered) {
              var n3 = e2.accumulatedMeanGrads[r2].variable, u2 = n3.mul(e2.decay).add(a2.mul(1 - e2.decay)), c2 = s2.mul(e2.momentum).add(a2.mul(e2.learningRate).div(t4.sub(u2.square().add(e2.epsilon)).sqrt()));
              i2.assign(t4), n3.assign(u2), s2.assign(c2);
              var l2 = o3.sub(c2);
              o3.assign(l2);
            } else {
              var h2 = i2.mul(e2.decay).add(a2.square().mul(1 - e2.decay));
              c2 = s2.mul(e2.momentum).add(a2.mul(e2.learningRate).div(h2.add(e2.epsilon).sqrt()));
              i2.assign(h2), s2.assign(c2);
              l2 = o3.sub(c2);
              o3.assign(l2);
            }
          });
        }
      }), this.incrementIterations();
    }, o2.prototype.dispose = function() {
      null != this.accumulatedMeanSquares && tn(this.accumulatedMeanSquares.map(function(t3) {
        return t3.variable;
      })), null != this.accumulatedMeanGrads && this.centered && tn(this.accumulatedMeanGrads.map(function(t3) {
        return t3.variable;
      })), null != this.accumulatedMoments && tn(this.accumulatedMoments.map(function(t3) {
        return t3.variable;
      }));
    }, o2.prototype.getWeights = function() {
      return n(this, void 0, void 0, function() {
        var t3;
        return r(this, function(e2) {
          switch (e2.label) {
            case 0:
              return t3 = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && t3.push.apply(t3, this.accumulatedMeanGrads), [4, this.saveIterations()];
            case 1:
              return [2, [e2.sent()].concat(t3.map(function(t4) {
                return { name: t4.originalName, tensor: t4.variable };
              }))];
          }
        });
      });
    }, o2.prototype.setWeights = function(t3) {
      return n(this, void 0, void 0, function() {
        var e2;
        return r(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, this.extractIterations(t3)];
            case 1:
              return t3 = n2.sent(), e2 = this.centered ? t3.length / 3 : t3.length / 2, false, this.accumulatedMeanSquares = t3.slice(0, e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), this.accumulatedMoments = t3.slice(e2, 2 * e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              }), this.centered && (this.accumulatedMeanGrads = t3.slice(2 * e2, 3 * e2).map(function(t4) {
                return { originalName: t4.name, variable: t4.tensor.variable(false) };
              })), [2];
          }
        });
      });
    }, o2.prototype.getConfig = function() {
      return { learningRate: this.learningRate, decay: this.decay, momentum: this.momentum, epsilon: this.epsilon, centered: this.centered };
    }, o2.fromConfig = function(t3, e2) {
      return new t3(e2.learningRate, e2.decay, e2.momentum, e2.epsilon, e2.centered);
    }, o2.className = "RMSProp", o2;
  }(Xd);
  Hd(ep);
  var np = function() {
    function t2() {
    }
    return t2.sgd = function(t3) {
      return new Zd(t3);
    }, t2.momentum = function(t3, e2, n2) {
      return void 0 === n2 && (n2 = false), new tp(t3, e2, n2);
    }, t2.rmsprop = function(t3, e2, n2, r2, o2) {
      return void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = null), void 0 === o2 && (o2 = false), new ep(t3, e2, n2, r2, o2);
    }, t2.adam = function(t3, e2, n2, r2) {
      return void 0 === t3 && (t3 = 1e-3), void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0.999), void 0 === r2 && (r2 = null), new Qd(t3, e2, n2, r2);
    }, t2.adadelta = function(t3, e2, n2) {
      return void 0 === t3 && (t3 = 1e-3), void 0 === e2 && (e2 = 0.95), void 0 === n2 && (n2 = null), new Yd(t3, e2, n2);
    }, t2.adamax = function(t3, e2, n2, r2, o2) {
      return void 0 === t3 && (t3 = 2e-3), void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0.999), void 0 === r2 && (r2 = null), void 0 === o2 && (o2 = 0), new Jd(t3, e2, n2, r2, o2);
    }, t2.adagrad = function(t3, e2) {
      return void 0 === e2 && (e2 = 0.1), new $d(t3, e2);
    }, t2;
  }();
  var rp = { sgd: np.sgd, momentum: np.momentum, adadelta: np.adadelta, adagrad: np.adagrad, rmsprop: np.rmsprop, adamax: np.adamax, adam: np.adam };
  wt.prototype.add = function(t2) {
    return Or(this, t2);
  }, wt.prototype.broadcastTo = function(t2) {
    return fc(this, t2);
  }, wt.prototype.div = function(t2) {
    return Bo(this, t2);
  }, wt.prototype.divNoNan = function(t2) {
    return bc(this, t2);
  }, wt.prototype.squaredDifference = function(t2) {
    return Hc(this, t2);
  }, wt.prototype.tile = function(t2) {
    return wc(this, t2);
  }, wt.prototype.oneHot = function(t2, e2, n2) {
    return void 0 === e2 && (e2 = 1), void 0 === n2 && (n2 = 0), Rc(this, t2, e2, n2);
  }, wt.prototype.transpose = function(t2) {
    return ua(this, t2);
  }, wt.prototype.pad = function(t2, e2) {
    return Ic(this, t2, e2);
  }, wt.prototype.batchNorm = function(t2, e2, n2, r2, o2) {
    return nc(this, t2, e2, n2, r2, o2);
  }, xt = ff;

  // node_modules/@tensorflow/tfjs-converter/dist/tf-converter.esm.js
  var DataType;
  var SaverDef;
  var __assign = function() {
    return (__assign = Object.assign || function(e2) {
      for (var t2, a2 = 1, r2 = arguments.length; a2 < r2; a2++)
        for (var n2 in t2 = arguments[a2])
          Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
      return e2;
    }).apply(this, arguments);
  };
  function __awaiter(e2, t2, a2, r2) {
    return new (a2 || (a2 = Promise))(function(n2, s2) {
      function o2(e3) {
        try {
          u2(r2.next(e3));
        } catch (e4) {
          s2(e4);
        }
      }
      function p2(e3) {
        try {
          u2(r2.throw(e3));
        } catch (e4) {
          s2(e4);
        }
      }
      function u2(e3) {
        e3.done ? n2(e3.value) : new a2(function(t3) {
          t3(e3.value);
        }).then(o2, p2);
      }
      u2((r2 = r2.apply(e2, t2 || [])).next());
    });
  }
  function __generator(e2, t2) {
    var a2, r2, n2, s2, o2 = { label: 0, sent: function() {
      if (1 & n2[0])
        throw n2[1];
      return n2[1];
    }, trys: [], ops: [] };
    return s2 = { next: p2(0), throw: p2(1), return: p2(2) }, "function" == typeof Symbol && (s2[Symbol.iterator] = function() {
      return this;
    }), s2;
    function p2(s3) {
      return function(p3) {
        return function(s4) {
          if (a2)
            throw new TypeError("Generator is already executing.");
          for (; o2; )
            try {
              if (a2 = 1, r2 && (n2 = 2 & s4[0] ? r2.return : s4[0] ? r2.throw || ((n2 = r2.return) && n2.call(r2), 0) : r2.next) && !(n2 = n2.call(r2, s4[1])).done)
                return n2;
              switch (r2 = 0, n2 && (s4 = [2 & s4[0], n2.value]), s4[0]) {
                case 0:
                case 1:
                  n2 = s4;
                  break;
                case 4:
                  return o2.label++, { value: s4[1], done: false };
                case 5:
                  o2.label++, r2 = s4[1], s4 = [0];
                  continue;
                case 7:
                  s4 = o2.ops.pop(), o2.trys.pop();
                  continue;
                default:
                  if (!(n2 = (n2 = o2.trys).length > 0 && n2[n2.length - 1]) && (6 === s4[0] || 2 === s4[0])) {
                    o2 = 0;
                    continue;
                  }
                  if (3 === s4[0] && (!n2 || s4[1] > n2[0] && s4[1] < n2[3])) {
                    o2.label = s4[1];
                    break;
                  }
                  if (6 === s4[0] && o2.label < n2[1]) {
                    o2.label = n2[1], n2 = s4;
                    break;
                  }
                  if (n2 && o2.label < n2[2]) {
                    o2.label = n2[2], o2.ops.push(s4);
                    break;
                  }
                  n2[2] && o2.ops.pop(), o2.trys.pop();
                  continue;
              }
              s4 = t2.call(e2, o2);
            } catch (e3) {
              s4 = [6, e3], r2 = 0;
            } finally {
              a2 = n2 = 0;
            }
          if (5 & s4[0])
            throw s4[1];
          return { value: s4[0] ? s4[1] : void 0, done: true };
        }([s3, p3]);
      };
    }
  }
  !function(e2) {
    e2[e2.DT_INVALID = 0] = "DT_INVALID", e2[e2.DT_FLOAT = 1] = "DT_FLOAT", e2[e2.DT_DOUBLE = 2] = "DT_DOUBLE", e2[e2.DT_INT32 = 3] = "DT_INT32", e2[e2.DT_UINT8 = 4] = "DT_UINT8", e2[e2.DT_INT16 = 5] = "DT_INT16", e2[e2.DT_INT8 = 6] = "DT_INT8", e2[e2.DT_STRING = 7] = "DT_STRING", e2[e2.DT_COMPLEX64 = 8] = "DT_COMPLEX64", e2[e2.DT_INT64 = 9] = "DT_INT64", e2[e2.DT_BOOL = 10] = "DT_BOOL", e2[e2.DT_QINT8 = 11] = "DT_QINT8", e2[e2.DT_QUINT8 = 12] = "DT_QUINT8", e2[e2.DT_QINT32 = 13] = "DT_QINT32", e2[e2.DT_BFLOAT16 = 14] = "DT_BFLOAT16", e2[e2.DT_FLOAT_REF = 101] = "DT_FLOAT_REF", e2[e2.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF", e2[e2.DT_INT32_REF = 103] = "DT_INT32_REF", e2[e2.DT_UINT8_REF = 104] = "DT_UINT8_REF", e2[e2.DT_INT16_REF = 105] = "DT_INT16_REF", e2[e2.DT_INT8_REF = 106] = "DT_INT8_REF", e2[e2.DT_STRING_REF = 107] = "DT_STRING_REF", e2[e2.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF", e2[e2.DT_INT64_REF = 109] = "DT_INT64_REF", e2[e2.DT_BOOL_REF = 110] = "DT_BOOL_REF", e2[e2.DT_QINT8_REF = 111] = "DT_QINT8_REF", e2[e2.DT_QUINT8_REF = 112] = "DT_QUINT8_REF", e2[e2.DT_QINT32_REF = 113] = "DT_QINT32_REF", e2[e2.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF";
  }(DataType || (DataType = {})), function(e2) {
    !function(e3) {
      e3[e3.LEGACY = 0] = "LEGACY", e3[e3.V1 = 1] = "V1", e3[e3.V2 = 2] = "V2";
    }(e2.CheckpointFormatVersion || (e2.CheckpointFormatVersion = {}));
  }(SaverDef || (SaverDef = {}));
  var CUSTOM_OPS = {};
  function getRegisteredOp(e2) {
    return CUSTOM_OPS[e2];
  }
  function getParamValue(e2, t2, a2, r2) {
    var n2 = t2.inputParams[e2];
    if (n2 && void 0 !== n2.inputIndexStart) {
      var s2 = n2.inputIndexStart, o2 = 0 === n2.inputIndexEnd ? void 0 : void 0 === n2.inputIndexEnd ? s2 + 1 : n2.inputIndexEnd;
      if ("tensor" === n2.type)
        return getTensor(t2.inputNames[n2.inputIndexStart], a2, r2);
      if ("tensors" === n2.type)
        return t2.inputNames.slice(s2, o2).map(function(e3) {
          return getTensor(e3, a2, r2);
        });
      var p2 = Array.prototype.slice.call(getTensor(t2.inputNames.slice(s2)[0], a2, r2).dataSync());
      return "number" === n2.type ? p2[0] : p2;
    }
    var u2 = t2.attrParams[e2];
    return u2 && u2.value;
  }
  function getTensor(e2, t2, a2) {
    var r2 = parseNodeName(e2), n2 = r2[0], s2 = r2[1], o2 = a2.currentContextIds.find(function(e3) {
      return !!t2[getNodeNameWithContextId(n2, e3)];
    });
    return void 0 !== o2 ? t2[getNodeNameWithContextId(n2, o2)][s2] : void 0;
  }
  function getTensorsForCurrentContenxt(e2, t2, a2) {
    return t2[getNodeNameWithContextId(e2, a2.currentContextId)];
  }
  function getNodeNameAndIndex(e2, t2) {
    var a2 = parseNodeName(e2), r2 = a2[0], n2 = a2[1];
    return [getNodeNameWithContextId(r2, t2 && t2.currentContextId), n2];
  }
  function getNodeNameWithContextId(e2, t2) {
    return t2 ? e2 + "-" + t2 : e2;
  }
  function parseNodeName(e2) {
    var t2 = e2.lastIndexOf(":");
    return -1 === t2 ? [e2, 0] : [e2.substring(0, t2), Number(e2.substring(t2 + 1))];
  }
  function split$1(e2, t2) {
    for (var a2 = [], r2 = 0; r2 < e2.length; r2 += t2)
      a2.push(e2.slice(r2, r2 + t2));
    return a2;
  }
  var json = [{ tfOpName: "Add", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "AddV2", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "AddN", category: "arithmetic", inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }] }, { tfOpName: "BiasAdd", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sub", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "RealDiv", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Div", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "DivNoNan", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "FloorDiv", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Mul", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Maximum", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }] }, { tfOpName: "Minimum", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }] }, { tfOpName: "Pow", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "SquaredDifference", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Mod", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "FloorMod", category: "arithmetic", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }];
  var arithmetic = Object.freeze({ json });
  var json$1 = [{ tfOpName: "Abs", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Acos", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Asin", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Atan", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Atan2", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "y", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Ceil", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "ClipByValue", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "clip_value_min", name: "clipValueMin", type: "number" }, { tfName: "clip_value_max", name: "clipValueMax", type: "number" }] }, { tfOpName: "Complex", category: "basic_math", inputs: [{ start: 0, name: "real", type: "tensor" }, { start: 1, name: "imag", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "ComplexAbs", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Cos", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Cosh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Elu", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Exp", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Floor", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Log", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Imag", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "Tout", name: "outputType", type: "dtype", notSupported: true }] }, { tfOpName: "Neg", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Real", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "Tout", name: "outputType", type: "dtype", notSupported: true }] }, { tfOpName: "Prelu", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "alpha", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Relu", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Relu6", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "clipValueMin", name: "clipValueMin", type: "number", defaultValue: 0 }, { tfName: "clipValueMax", name: "clipValueMax", type: "number", defaultValue: 6 }] }, { tfOpName: "Selu", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sigmoid", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sin", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sinh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sqrt", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Rsqrt", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Square", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Tan", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Tanh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Sign", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Round", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Expm1", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Log1p", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Reciprocal", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Softplus", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Asinh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Acosh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Atanh", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Erf", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Prod", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axes", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool", notSupported: true }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "LeakyRelu", category: "basic_math", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "alpha", name: "alpha", type: "number", defaultValue: 0.2 }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }];
  var basicMath = Object.freeze({ json: json$1 });
  var json$2 = [{ tfOpName: "LoopCond", category: "control", inputs: [{ start: 0, name: "pred", type: "tensor" }] }, { tfOpName: "Switch", category: "control", inputs: [{ start: 0, name: "data", type: "tensor" }, { start: 1, name: "pred", type: "tensor" }] }, { tfOpName: "Merge", category: "control", inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }] }, { tfOpName: "Enter", category: "control", inputs: [{ start: 0, name: "tensor", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "frame_name", name: "frameName", type: "string" }, { tfName: "is_constant", name: "isConstant", type: "bool" }] }, { tfOpName: "Exit", category: "control", inputs: [{ start: 0, name: "tensor", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "NextIteration", category: "control", inputs: [{ start: 0, name: "tensor", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "TensorArrayV3", category: "control", inputs: [{ start: 0, name: "size", type: "number" }], attrs: [{ tfName: "dtype", name: "dtype", type: "dtype" }, { tfName: "element_shape", name: "elementShape", type: "shape" }, { tfName: "dynamic_size", name: "dynamicSize", type: "bool" }, { tfName: "clear_after_read", name: "clearAfterRead", type: "bool" }, { tfName: "identical_element_shapes", name: "identicalElementShapes", type: "bool" }, { tfName: "tensor_array_name", name: "name", type: "string" }] }, { tfOpName: "TensorArrayWriteV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "index", type: "number" }, { start: 2, name: "tensor", type: "tensor" }, { start: 3, name: "flowIn", type: "number" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "TensorArrayReadV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "index", type: "number" }, { start: 2, name: "flowIn", type: "number" }], attrs: [{ tfName: "dtype", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "TensorArrayGatherV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "indices", type: "number[]" }, { start: 2, name: "flowIn", type: "number" }], attrs: [{ tfName: "dtype", name: "dtype", type: "dtype" }, { tfName: "element_shape", name: "elementShape", type: "shape" }] }, { tfOpName: "TensorArrayScatterV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "indices", type: "number[]" }, { start: 2, name: "tensor", type: "tensor" }, { start: 3, name: "flowIn", type: "number" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "TensorArrayConcatV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "flowIn", type: "number" }], attrs: [{ tfName: "dtype", name: "dtype", type: "dtype" }, { tfName: "element_shape_except0", name: "elementShapeExcept0", type: "shape", notSupported: true }] }, { tfOpName: "TensorArraySplitV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "tensor", type: "tensor" }, { start: 2, name: "lengths", type: "number[]" }, { start: 3, name: "flowIn", type: "number" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "TensorArraySizeV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }, { start: 1, name: "flowIn", type: "number" }] }, { tfOpName: "TensorArrayCloseV3", category: "control", inputs: [{ start: 0, name: "tensorArrayId", type: "number" }] }];
  var control = Object.freeze({ json: json$2 });
  var json$3 = [{ tfOpName: "AvgPool", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }, { tfName: "ksize", name: "kernelSize", type: "number[]" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "MaxPool", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }, { tfName: "ksize", name: "kernelSize", type: "number[]" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "MaxPoolWithArgmax", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "ksize", name: "kernelSize", type: "number[]" }, { tfName: "include_batch_in_index", name: "includeBatchInIndex", type: "bool" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "AvgPool3D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }, { tfName: "ksize", name: "kernelSize", type: "number[]" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "MaxPool3D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }, { tfName: "ksize", name: "kernelSize", type: "number[]" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Conv1D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }], attrs: [{ tfName: "stride", name: "stride", type: "number" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NWC" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "dilation", name: "dilation", type: "number", defaultValue: 1 }] }, { tfOpName: "Conv2D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "useCudnnOnGpu", name: "useCudnnOnGpu", type: "bool" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]" }] }, { tfOpName: "_FusedConv2D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }, { start: 2, end: 0, name: "args", type: "tensors" }], attrs: [{ tfName: "num_args", name: "numArgs", type: "number" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "explicit_paddings", name: "explicitPaddings", type: "number[]", defaultValue: [] }, { tfName: "use_cudnn_on_gpu", name: "useCudnnOnGpu", type: "bool", defaultValue: true }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]", defaultValue: [1, 1, 1, 1] }, { tfName: "fused_ops", name: "fusedOps", type: "string[]", defaultValue: [] }, { tfName: "epsilon", name: "epsilon", type: "number", defaultValue: 1e-4 }] }, { tfOpName: "Conv2DBackpropInput", category: "convolution", inputs: [{ start: 2, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }, { start: 0, name: "outputShape", type: "number[]" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }] }, { tfOpName: "DepthwiseConv2d", category: "convolution", inputs: [{ start: 0, name: "input", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]" }] }, { tfOpName: "DepthwiseConv2dNative", category: "convolution", inputs: [{ start: 0, name: "input", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]" }] }, { tfOpName: "FusedDepthwiseConv2dNative", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }, { start: 2, end: 0, name: "args", type: "tensors" }], attrs: [{ tfName: "num_args", name: "numArgs", type: "number" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }, { tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]", defaultValue: [1, 1, 1, 1] }, { tfName: "fused_ops", name: "fusedOps", type: "string[]", defaultValue: [] }] }, { tfOpName: "Conv3D", category: "convolution", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "filter", type: "tensor" }], attrs: [{ tfName: "strides", name: "strides", type: "number[]" }, { tfName: "padding", name: "pad", type: "string" }, { tfName: "data_format", name: "dataFormat", type: "string", defaultValue: "NHWC" }, { tfName: "dilations", name: "dilations", type: "number[]" }] }];
  var convolution = Object.freeze({ json: json$3 });
  var json$4 = [{ tfOpName: "Fill", category: "creation", inputs: [{ start: 0, name: "shape", type: "number[]" }, { start: 1, name: "value", type: "number" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "LinSpace", category: "creation", inputs: [{ start: 0, name: "start", type: "number" }, { start: 1, name: "stop", type: "number" }, { start: 2, name: "num", type: "number" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "OneHot", category: "creation", inputs: [{ start: 0, name: "indices", type: "tensor" }, { start: 1, name: "depth", type: "number" }, { start: 2, name: "onValue", type: "number", defaultValue: 1 }, { start: 3, name: "offValue", type: "number", defaultValue: 0 }], attrs: [{ tfName: "axis", name: "axis", type: "number", notSupported: true }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Ones", category: "creation", inputs: [{ start: 0, name: "shape", type: "number[]" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "OnesLike", category: "creation", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "dtype", name: "dtype", type: "dtype" }] }, { tfOpName: "RandomUniform", category: "creation", inputs: [{ start: 0, name: "shape", type: "number[]" }], attrs: [{ tfName: "minval", name: "minval", type: "number", defaultValue: 0 }, { tfName: "maxval", name: "maxval", type: "number", defaultValue: 1 }, { tfName: "dtype", name: "dtype", type: "dtype" }, { tfName: "seed", name: "seed", type: "number", defaultValue: 0 }, { tfName: "seed2", name: "seed2", type: "number", defaultValue: 0, notSupported: true }, { tfName: "T", name: "T", type: "number", notSupported: true }] }, { tfOpName: "Range", category: "creation", inputs: [{ start: 0, name: "start", type: "number" }, { start: 1, name: "stop", type: "number" }, { start: 2, name: "step", type: "number", defaultValue: 0 }], attrs: [{ tfName: "Tidx", name: "dtype", type: "dtype" }] }, { tfOpName: "TruncatedNormal", category: "creation", inputs: [{ start: 0, name: "shape", type: "number[]" }], attrs: [{ tfName: "means", name: "mean", type: "number", defaultValue: 0 }, { tfName: "stddev", name: "stdDev", type: "number", defaultValue: 1 }, { tfName: "seed", name: "seed", type: "number" }, { tfName: "seed2", name: "seed2", type: "number", defaultValue: 0, notSupported: true }, { tfName: "dtype", name: "dtype", type: "dtype" }, { tfName: "T", name: "T", type: "number", notSupported: true }] }, { tfOpName: "Zeros", category: "creation", inputs: [{ start: 0, name: "shape", type: "number[]" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "ZerosLike", category: "creation", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype" }] }, { tfOpName: "Multinomial", category: "creation", inputs: [{ start: 0, name: "logits", type: "tensor" }, { start: 1, name: "numSamples", type: "number" }], attrs: [{ tfName: "seed", name: "seed", type: "number" }, { tfName: "seed2", name: "seed2", type: "number" }, { tfName: "T", name: "dtype", type: "dtype" }, { tfName: "output_dtype", name: "output_dtype", type: "dtype" }] }];
  var creation = Object.freeze({ json: json$4 });
  var json$5 = [{ tfOpName: "NonMaxSuppressionV2", category: "dynamic", inputs: [{ start: 0, name: "boxes", type: "tensor" }, { start: 1, name: "scores", type: "tensor" }, { start: 2, name: "maxOutputSize", type: "number" }, { start: 3, name: "iouThreshold", type: "number" }] }, { tfOpName: "NonMaxSuppressionV3", category: "dynamic", inputs: [{ start: 0, name: "boxes", type: "tensor" }, { start: 1, name: "scores", type: "tensor" }, { start: 2, name: "maxOutputSize", type: "number" }, { start: 3, name: "iouThreshold", type: "number" }, { start: 4, name: "scoreThreshold", type: "number" }] }, { tfOpName: "NonMaxSuppressionV5", category: "dynamic", inputs: [{ start: 0, name: "boxes", type: "tensor" }, { start: 1, name: "scores", type: "tensor" }, { start: 2, name: "maxOutputSize", type: "number" }, { start: 3, name: "iouThreshold", type: "number" }, { start: 4, name: "scoreThreshold", type: "number" }, { start: 5, name: "softNmsSigma", type: "number" }] }, { tfOpName: "Where", category: "dynamic", inputs: [{ start: 0, name: "condition", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "ListDiff", category: "dynamic", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "y", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }];
  var dynamic = Object.freeze({ json: json$5 });
  var json$6 = [{ tfOpName: "TopKV2", category: "evaluation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "k", type: "number" }], attrs: [{ tfName: "sorted", name: "sorted", type: "bool" }] }];
  var evaluation = Object.freeze({ json: json$6 });
  var json$7 = [{ tfOpName: "PlaceholderWithDefault", category: "graph", inputs: [{ start: 0, name: "default", type: "tensor" }], attrs: [{ tfName: "shape", name: "shape", type: "shape" }, { tfName: "dtype", name: "dtype", type: "dtype" }] }, { tfOpName: "Placeholder", category: "graph", attrs: [{ tfName: "shape", name: "shape", type: "shape" }, { tfName: "dtype", name: "dtype", type: "dtype" }] }, { tfOpName: "Const", category: "graph" }, { tfOpName: "Identity", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "IdentityN", category: "graph", inputs: [{ start: 0, end: 0, name: "x", type: "tensors" }] }, { tfOpName: "Snapshot", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "Rank", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "Size", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "Shape", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "ShapeN", category: "graph", inputs: [{ start: 0, end: 0, name: "x", type: "tensors" }] }, { tfOpName: "Print", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "data", type: "tensors" }], attrs: [{ tfName: "message", name: "message", type: "string" }, { tfName: "first_n", name: "firstN", type: "number", notSupported: true }, { tfName: "summarize", name: "summarize", type: "number", defaultValue: 3 }] }, { tfOpName: "NoOp", category: "graph", inputs: [] }, { tfOpName: "StopGradient", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "FakeQuantWithMinMaxVars", category: "graph", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "min", name: "min", type: "number" }, { tfName: "max", name: "max", type: "number" }] }];
  var graph = Object.freeze({ json: json$7 });
  var json$8 = [{ tfOpName: "ResizeBilinear", category: "image", inputs: [{ start: 0, name: "images", type: "tensor" }, { start: 1, name: "size", type: "number[]" }], attrs: [{ tfName: "align_corners", name: "alignCorners", type: "bool" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "ResizeNearestNeighbor", category: "image", inputs: [{ start: 0, name: "images", type: "tensor" }, { start: 1, name: "size", type: "number[]" }], attrs: [{ tfName: "align_corners", name: "alignCorners", type: "bool" }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "CropAndResize", category: "image", inputs: [{ start: 0, name: "image", type: "tensor" }, { start: 1, name: "boxes", type: "tensor" }, { start: 2, name: "boxInd", type: "tensor" }, { start: 3, name: "cropSize", type: "number[]" }], attrs: [{ tfName: "method", name: "method", type: "string" }, { tfName: "extrapolation_value", name: "extrapolationValue", type: "number" }] }];
  var image$1 = Object.freeze({ json: json$8 });
  var json$9 = [{ tfOpName: "Equal", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "NotEqual", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Greater", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "GreaterEqual", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Less", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "LessEqual", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "LogicalAnd", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "LogicalNot", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "LogicalOr", category: "logical", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Select", category: "logical", inputs: [{ start: 0, name: "condition", type: "tensor" }, { start: 1, name: "a", type: "tensor" }, { start: 2, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "SelectV2", category: "logical", inputs: [{ start: 0, name: "condition", type: "tensor" }, { start: 1, name: "a", type: "tensor" }, { start: 2, name: "b", type: "tensor" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }];
  var logical = Object.freeze({ json: json$9 });
  var json$10 = [{ tfOpName: "_FusedMatMul", category: "matrices", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }, { start: 2, end: 0, name: "args", type: "tensors" }], attrs: [{ tfName: "num_args", name: "numArgs", type: "number" }, { tfName: "fused_ops", name: "fusedOps", type: "string[]", defaultValue: [] }, { tfName: "epsilon", name: "epsilon", type: "number", defaultValue: 1e-4 }, { tfName: "transpose_a", name: "transposeA", type: "bool", defaultValue: false }, { tfName: "transpose_b", name: "transposeB", type: "bool", defaultValue: false }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "MatMul", category: "matrices", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "transpose_a", name: "transposeA", type: "bool", defaultValue: false }, { tfName: "transpose_b", name: "transposeB", type: "bool", defaultValue: false }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "BatchMatMul", category: "matrices", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "adj_x", name: "transposeA", type: "bool", defaultValue: false }, { tfName: "adj_y", name: "transposeB", type: "bool", defaultValue: false }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "BatchMatMulV2", category: "matrices", inputs: [{ start: 0, name: "a", type: "tensor" }, { start: 1, name: "b", type: "tensor" }], attrs: [{ tfName: "adj_x", name: "transposeA", type: "bool", defaultValue: false }, { tfName: "adj_y", name: "transposeB", type: "bool", defaultValue: false }, { tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }, { tfOpName: "Transpose", category: "matrices", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "perm", type: "number[]" }], attrs: [{ tfName: "T", name: "dtype", type: "dtype", notSupported: true }] }];
  var matrices = Object.freeze({ json: json$10 });
  var json$11 = [{ tfOpName: "FusedBatchNorm", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "scale", type: "tensor" }, { start: 2, name: "offset", type: "tensor" }, { start: 3, name: "mean", type: "tensor" }, { start: 4, name: "variance", type: "tensor" }], attrs: [{ tfName: "epsilon", name: "epsilon", type: "number", defaultValue: 1e-3 }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }] }, { tfOpName: "FusedBatchNormV2", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "scale", type: "tensor" }, { start: 2, name: "offset", type: "tensor" }, { start: 3, name: "mean", type: "tensor" }, { start: 4, name: "variance", type: "tensor" }], attrs: [{ tfName: "epsilon", name: "epsilon", type: "number", defaultValue: 1e-3 }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }] }, { tfOpName: "FusedBatchNormV3", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "scale", type: "tensor" }, { start: 2, name: "offset", type: "tensor" }, { start: 3, name: "mean", type: "tensor" }, { start: 4, name: "variance", type: "tensor" }], attrs: [{ tfName: "epsilon", name: "epsilon", type: "number", defaultValue: 1e-3 }, { tfName: "data_format", name: "dataFormat", type: "string", notSupported: true }] }, { tfOpName: "LRN", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "depth_radius", name: "radius", type: "number", defaultValue: 5 }, { tfName: "bias", name: "bias", type: "number", defaultValue: 1 }, { tfName: "alpha", name: "alpha", type: "number", defaultValue: 1 }, { tfName: "beta", name: "beta", type: "number", defaultValue: 0.5 }] }, { tfOpName: "Softmax", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "LogSoftmax", category: "normalization", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "SparseToDense", category: "normalization", inputs: [{ start: 0, name: "sparseIndices", type: "tensor" }, { start: 1, name: "outputShape", type: "number[]" }, { start: 2, name: "sparseValues", type: "tensor" }, { start: 3, name: "defaultValue", type: "tensor" }], attrs: [{ tfName: "validate_indices", name: "validateIndices", type: "bool", defaultValue: true, notSupported: true }] }];
  var normalization = Object.freeze({ json: json$11 });
  var json$12 = [{ tfOpName: "Max", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "Mean", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "Min", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "Sum", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "All", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "Any", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }, { tfOpName: "ArgMax", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number" }] }, { tfOpName: "ArgMin", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number" }] }, { tfOpName: "Prod", category: "reduction", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }], attrs: [{ tfName: "keep_dims", name: "keepDims", type: "bool" }] }];
  var reduction = Object.freeze({ json: json$12 });
  var json$13 = [{ tfOpName: "ConcatV2", category: "slice_join", inputs: [{ start: 0, end: -1, name: "tensors", type: "tensors" }, { start: -1, name: "axis", type: "number" }], attrs: [{ tfName: "N", name: "n", type: "number", defaultValue: 2 }] }, { tfOpName: "Concat", category: "slice_join", inputs: [{ start: 1, end: 0, name: "tensors", type: "tensors" }, { start: 0, name: "axis", type: "number" }], attrs: [{ tfName: "N", name: "n", type: "number", defaultValue: 2 }] }, { tfOpName: "GatherV2", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "indices", type: "tensor" }, { start: 2, name: "axis", type: "number", defaultValue: 0 }] }, { tfOpName: "Gather", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "indices", type: "tensor" }], attrs: [{ tfName: "axis", name: "axis", type: "number", defaultValue: 0 }, { tfName: "validate_indices", name: "validateIndices", type: "bool", notSupported: true }] }, { tfOpName: "Reverse", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "dims", type: "bool", notSupported: true }] }, { tfOpName: "ReverseV2", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number[]" }] }, { tfOpName: "Slice", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "begin", type: "number[]" }, { start: 2, name: "size", type: "number[]" }] }, { tfOpName: "StridedSlice", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "begin", type: "number[]" }, { start: 2, name: "end", type: "number[]" }, { start: 3, name: "strides", type: "number[]" }], attrs: [{ tfName: "begin_mask", name: "beginMask", type: "number", defaultValue: 0 }, { tfName: "end_mask", name: "endMask", type: "number", defaultValue: 0 }, { tfName: "new_axis_mask", name: "newAxisMask", type: "number", defaultValue: 0 }, { tfName: "ellipsis_mask", name: "ellipsisMask", type: "number", defaultValue: 0 }, { tfName: "shrink_axis_mask", name: "shrinkAxisMask", type: "number", defaultValue: 0 }] }, { tfOpName: "Pack", category: "slice_join", inputs: [{ start: 0, end: 0, name: "tensors", type: "tensors" }], attrs: [{ tfName: "axis", name: "axis", type: "number", defaultValue: 0 }] }, { tfOpName: "Unpack", category: "slice_join", inputs: [{ start: 0, name: "tensor", type: "tensor" }], attrs: [{ tfName: "axis", name: "axis", type: "number", defaultValue: 0 }, { tfName: "num", name: "num", type: "number", defaultValue: 0, notSupported: true }] }, { tfOpName: "Tile", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "reps", type: "number[]" }] }, { tfOpName: "Split", category: "slice_join", inputs: [{ start: 0, name: "axis", type: "number", defaultValue: 0 }, { start: 1, name: "x", type: "tensor" }], attrs: [{ tfName: "num_split", name: "numOrSizeSplits", type: "number", defaultValue: 1 }] }, { tfOpName: "SplitV", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "numOrSizeSplits", type: "number[]" }, { start: 2, name: "axis", type: "number", defaultValue: 0 }] }, { tfOpName: "ScatterNd", category: "slice_join", inputs: [{ start: 0, name: "indices", type: "tensor" }, { start: 1, name: "values", type: "tensor" }, { start: 2, name: "shape", type: "number[]" }] }, { tfOpName: "GatherNd", category: "slice_join", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "indices", type: "tensor" }] }, { tfOpName: "SparseToDense", category: "slice_join", inputs: [{ start: 0, name: "sparseIndices", type: "tensor" }, { start: 1, name: "outputShape", type: "number[]" }, { start: 2, name: "sparseValues", type: "tensor" }, { start: 3, name: "defaultValue", type: "tensor" }], attrs: [{ tfName: "validate_indices", name: "validateIndices", type: "bool", defaultValue: false, notSupported: true }] }];
  var sliceJoin = Object.freeze({ json: json$13 });
  var json$14 = [{ tfOpName: "FFT", category: "spectral", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "IFFT", category: "spectral", inputs: [{ start: 0, name: "x", type: "tensor" }] }, { tfOpName: "RFFT", category: "spectral", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "fft_length", type: "number", notSupported: true }] }, { tfOpName: "IRFFT", category: "spectral", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "fft_length", type: "number", notSupported: true }] }];
  var spectral = Object.freeze({ json: json$14 });
  var json$15 = [{ tfOpName: "Cast", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "SrcT", name: "sdtype", type: "dtype", notSupported: true }, { tfName: "DstT", name: "dtype", type: "dtype" }] }, { tfOpName: "ExpandDims", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "axis", type: "number" }] }, { tfOpName: "Pad", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "padding", type: "number[]" }], attrs: [{ tfName: "constant_value", name: "constantValue", type: "number", defaultValue: 0 }] }, { tfOpName: "PadV2", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "padding", type: "number[]" }, { start: 2, name: "constantValue", type: "number", defaultValue: 0 }] }, { tfOpName: "Reshape", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "shape", type: "number[]" }] }, { tfOpName: "Squeeze", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "axis", tfDeprecatedName: "squeeze_dims", name: "axis", type: "number[]" }] }, { tfOpName: "SpaceToBatchND", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "blockShape", type: "number[]" }, { start: 2, name: "paddings", type: "number[]" }] }, { tfOpName: "BatchToSpaceND", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }, { start: 1, name: "blockShape", type: "number[]" }, { start: 2, name: "crops", type: "number[]" }] }, { tfOpName: "DepthToSpace", category: "transformation", inputs: [{ start: 0, name: "x", type: "tensor" }], attrs: [{ tfName: "block_size", name: "blockSize", type: "number" }, { tfName: "data_format", name: "dataFormat", type: "string" }] }];
  var transformation = Object.freeze({ json: json$15 });
  var OperationMapper = function() {
    function e2() {
      var e3 = [arithmetic, basicMath, control, convolution, creation, dynamic, evaluation, logical, image$1, graph, matrices, normalization, reduction, sliceJoin, spectral, transformation], t2 = [].concat.apply([], e3.map(function(e4) {
        return e4.json;
      }));
      this.opMappers = t2.reduce(function(e4, t3) {
        return e4[t3.tfOpName] = t3, e4;
      }, {});
    }
    return Object.defineProperty(e2, "Instance", { get: function() {
      return this._instance || (this._instance = new this());
    }, enumerable: true, configurable: true }), e2.prototype.transformGraph = function(e3, t2) {
      var a2 = this;
      void 0 === t2 && (t2 = {});
      var r2 = [], n2 = [], s2 = e3.node.reduce(function(e4, t3) {
        return e4[t3.name] = a2.mapNode(t3), t3.op.startsWith("Placeholder") && r2.push(e4[t3.name]), "Const" === t3.op && n2.push(e4[t3.name]), e4;
      }, {}), o2 = [], p2 = [], u2 = {}, i2 = {};
      null != t2 && (u2 = this.mapSignatureEntries(t2.inputs), i2 = this.mapSignatureEntries(t2.outputs));
      var m2 = Object.keys(s2);
      return m2.forEach(function(e4) {
        var t3 = s2[e4];
        t3.inputNames.forEach(function(e5) {
          var a3 = getNodeNameAndIndex(e5)[0];
          t3.inputs.push(s2[a3]), s2[a3].children.push(t3);
        });
      }), 0 === Object.keys(i2).length ? m2.forEach(function(e4) {
        var t3 = s2[e4];
        0 === t3.children.length && p2.push(t3);
      }) : Object.keys(i2).forEach(function(e4) {
        var t3 = getNodeNameAndIndex(e4)[0], a3 = s2[t3];
        null != a3 && (a3.signatureKey = i2[e4], p2.push(a3));
      }), Object.keys(u2).length > 0 ? Object.keys(u2).forEach(function(e4) {
        var t3 = getNodeNameAndIndex(e4)[0], a3 = s2[t3];
        a3 && (a3.signatureKey = u2[e4], o2.push(a3));
      }) : o2 = r2, { nodes: s2, inputs: o2, outputs: p2, weights: n2, placeholders: r2, signature: t2 };
    }, e2.prototype.mapSignatureEntries = function(e3) {
      return Object.keys(e3 || {}).reduce(function(t2, a2) {
        return t2[e3[a2].name] = a2, t2;
      }, {});
    }, e2.prototype.mapNode = function(e3) {
      var t2 = getRegisteredOp(e3.op) || this.opMappers[e3.op] || {};
      null == e3.attr && (e3.attr = {});
      var a2 = { name: e3.name, op: e3.op, category: t2.category, inputNames: (e3.input || []).map(function(e4) {
        return e4.startsWith("^") ? e4.substr(1) : e4;
      }), inputs: [], children: [], inputParams: {}, attrParams: {}, rawAttrs: e3.attr };
      return null != t2.inputs && (a2.inputParams = t2.inputs.reduce(function(e4, t3) {
        return e4[t3.name] = { type: t3.type, inputIndexStart: t3.start, inputIndexEnd: t3.end }, e4;
      }, {})), null != t2.attrs && (a2.attrParams = t2.attrs.reduce(function(t3, a3) {
        var r2 = a3.type, n2 = void 0;
        switch (a3.type) {
          case "string":
            void 0 === (n2 = getStringParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getStringParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "string[]":
            void 0 === (n2 = getStringArrayParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getStringArrayParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "number":
            void 0 === (n2 = getNumberParam(e3.attr, a3.tfName, a3.defaultValue || 0)) && a3.tfDeprecatedName && (n2 = getNumberParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "number[]":
            void 0 === (n2 = getNumericArrayParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getNumericArrayParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "bool":
            void 0 === (n2 = getBoolParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getBoolParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "bool[]":
            void 0 === (n2 = getBoolArrayParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getBoolArrayParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "shape":
            void 0 === (n2 = getTensorShapeParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getTensorShapeParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "shape[]":
            void 0 === (n2 = getTensorShapeArrayParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getTensorShapeArrayParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "dtype":
            void 0 === (n2 = getDtypeParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getDtypeParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "dtype[]":
            void 0 === (n2 = getDtypeArrayParam(e3.attr, a3.tfName, a3.defaultValue)) && a3.tfDeprecatedName && (n2 = getDtypeArrayParam(e3.attr, a3.tfDeprecatedName, a3.defaultValue));
            break;
          case "tensor":
          case "tensors":
            break;
          default:
            throw new Error("Unsupported param type: " + a3.type + " for op: " + e3.op);
        }
        return t3[a3.name] = { value: n2, type: r2 }, t3;
      }, {})), a2;
    }, e2;
  }();
  function decodeBase64(e2) {
    var t2 = i().global;
    if (void 0 !== t2.atob)
      return t2.atob(e2);
    if ("undefined" != typeof Buffer)
      return new Buffer(e2, "base64").toString();
    throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
  }
  function parseStringParam(e2, t2) {
    var a2 = Array.isArray(e2) ? String.fromCharCode.apply(null, e2) : decodeBase64(e2);
    return t2 ? a2 : a2.toLowerCase();
  }
  function getStringParam(e2, t2, a2, r2) {
    void 0 === r2 && (r2 = false);
    var n2 = e2[t2];
    return null != n2 ? parseStringParam(n2.s, r2) : a2;
  }
  function getBoolParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 ? r2.b : a2;
  }
  function getNumberParam(e2, t2, a2) {
    var r2 = e2[t2] || {}, n2 = null != r2.i ? r2.i : null != r2.f ? r2.f : a2;
    return "number" == typeof n2 ? n2 : parseInt(n2, 10);
  }
  function parseDtypeParam(e2) {
    switch ("string" == typeof e2 && (e2 = DataType[e2]), e2) {
      case DataType.DT_FLOAT:
        return "float32";
      case DataType.DT_INT32:
      case DataType.DT_INT64:
      case DataType.DT_INT8:
      case DataType.DT_UINT8:
        return "int32";
      case DataType.DT_BOOL:
        return "bool";
      case DataType.DT_DOUBLE:
        return "float32";
      case DataType.DT_STRING:
        return "string";
      default:
        return null;
    }
  }
  function getDtypeParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 && r2.type ? parseDtypeParam(r2.type) : a2;
  }
  function getDtypeArrayParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 && r2.list && r2.list.type ? r2.list.type.map(function(e3) {
      return parseDtypeParam(e3);
    }) : a2;
  }
  function parseTensorShapeParam(e2) {
    if (!e2.unknownRank)
      return null != e2.dim ? e2.dim.map(function(e3) {
        return "number" == typeof e3.size ? e3.size : parseInt(e3.size, 10);
      }) : [];
  }
  function getTensorShapeParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 && r2.shape ? parseTensorShapeParam(r2.shape) : a2;
  }
  function getNumericArrayParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 ? ((r2.list.f && r2.list.f.length ? r2.list.f : r2.list.i) || []).map(function(e3) {
      return "number" == typeof e3 ? e3 : parseInt(e3, 10);
    }) : a2;
  }
  function getStringArrayParam(e2, t2, a2, r2) {
    void 0 === r2 && (r2 = false);
    var n2 = e2[t2];
    return n2 && n2.list && n2.list.s ? n2.list.s.map(function(e3) {
      return parseStringParam(e3, r2);
    }) : a2;
  }
  function getTensorShapeArrayParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 && r2.list && r2.list.shape ? r2.list.shape.map(function(e3) {
      return parseTensorShapeParam(e3);
    }) : a2;
  }
  function getBoolArrayParam(e2, t2, a2) {
    var r2 = e2[t2];
    return r2 && r2.list && r2.list.b ? r2.list.b : a2;
  }
  var NodeValueImpl = function() {
    function e2(e3, t2, a2) {
      var r2 = this;
      this.node = e3, this.tensorMap = t2, this.context = a2, this.inputs = [], this.attrs = {}, this.inputs = e3.inputNames.map(function(e4) {
        return r2.getInput(e4);
      }), null != e3.rawAttrs && (this.attrs = Object.keys(e3.rawAttrs).reduce(function(e4, t3) {
        return e4[t3] = r2.getAttr(t3), e4;
      }, {}));
    }
    return e2.prototype.getInput = function(e3) {
      return getTensor(e3, this.tensorMap, this.context);
    }, e2.prototype.getAttr = function(e3, t2) {
      var a2 = this.node.rawAttrs[e3];
      if (null != a2.tensor)
        return getTensor(e3, this.tensorMap, this.context);
      if (null != a2.i || null != a2.f)
        return getNumberParam(this.node.rawAttrs, e3, t2);
      if (null != a2.s)
        return getStringParam(this.node.rawAttrs, e3, t2);
      if (null != a2.b)
        return getBoolParam(this.node.rawAttrs, e3, t2);
      if (null != a2.shape)
        return getTensorShapeParam(this.node.rawAttrs, e3, t2);
      if (null != a2.type)
        return getDtypeParam(this.node.rawAttrs, e3, t2);
      if (null != a2.list) {
        if (null != a2.list.i || null != a2.list.f)
          return getNumericArrayParam(this.node.rawAttrs, e3, t2);
        if (null != a2.list.s)
          return getStringArrayParam(this.node.rawAttrs, e3, t2);
        if (null != a2.list.shape)
          return getTensorShapeArrayParam(this.node.rawAttrs, e3, t2);
        if (null != a2.list.b)
          return getBoolArrayParam(this.node.rawAttrs, e3, t2);
        if (null != a2.list.type)
          return getDtypeArrayParam(this.node.rawAttrs, e3, t2);
      }
      return t2;
    }, e2;
  }();
  var executeOp = function(e2, t2, a2) {
    switch (e2.op) {
      case "BiasAdd":
      case "AddV2":
      case "Add":
        return [Or(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "AddN":
        return [$u(getParamValue("tensors", e2, t2, a2))];
      case "FloorMod":
      case "Mod":
        return [So(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Mul":
        return [To(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "RealDiv":
      case "Div":
        return [Bo(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "DivNoNan":
        return [bc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "FloorDiv":
        return [Co(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Sub":
        return [Oo(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Minimum":
        return [Io(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Maximum":
        return [Eo(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Pow":
        return [No(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "SquaredDifference":
        return [Hc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$1 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Abs":
      case "ComplexAbs":
        return [Lr(getParamValue("x", e2, t2, a2))];
      case "Acos":
        return [Wr(getParamValue("x", e2, t2, a2))];
      case "Acosh":
        return [Ur(getParamValue("x", e2, t2, a2))];
      case "Asin":
        return [Vr(getParamValue("x", e2, t2, a2))];
      case "Asinh":
        return [zr(getParamValue("x", e2, t2, a2))];
      case "Atan":
        return [Gr(getParamValue("x", e2, t2, a2))];
      case "Atan2":
        return [bo(getParamValue("x", e2, t2, a2), getParamValue("y", e2, t2, a2))];
      case "Atanh":
        return [Hr(getParamValue("x", e2, t2, a2))];
      case "Ceil":
        return [qr(getParamValue("x", e2, t2, a2))];
      case "Complex":
        return [Tn(getParamValue("real", e2, t2, a2), getParamValue("imag", e2, t2, a2))];
      case "Cos":
        return [jr(getParamValue("x", e2, t2, a2))];
      case "Cosh":
        return [Xr(getParamValue("x", e2, t2, a2))];
      case "Elu":
        return [nh(getParamValue("x", e2, t2, a2))];
      case "Erf":
        return [Yr(getParamValue("x", e2, t2, a2))];
      case "Exp":
        return [$r(getParamValue("x", e2, t2, a2))];
      case "Expm1":
        return [Qr(getParamValue("x", e2, t2, a2))];
      case "Floor":
        return [Jr(getParamValue("x", e2, t2, a2))];
      case "Log":
        return [Zr(getParamValue("x", e2, t2, a2))];
      case "Log1p":
        return [to(getParamValue("x", e2, t2, a2))];
      case "Imag":
        return [Nn(getParamValue("x", e2, t2, a2))];
      case "Neg":
        return [no(getParamValue("x", e2, t2, a2))];
      case "Reciprocal":
        return [ro(getParamValue("x", e2, t2, a2))];
      case "Real":
        return [Dn(getParamValue("x", e2, t2, a2))];
      case "Relu":
        return [ah(getParamValue("x", e2, t2, a2))];
      case "Round":
        return [oo(getParamValue("x", e2, t2, a2))];
      case "Selu":
        return [sh(getParamValue("x", e2, t2, a2))];
      case "Sigmoid":
        return [io(getParamValue("x", e2, t2, a2))];
      case "Sin":
        return [ho(getParamValue("x", e2, t2, a2))];
      case "Sign":
        return [so(getParamValue("x", e2, t2, a2))];
      case "Sinh":
        return [fo(getParamValue("x", e2, t2, a2))];
      case "Softplus":
        return [po(getParamValue("x", e2, t2, a2))];
      case "Sqrt":
        return [vo(getParamValue("x", e2, t2, a2))];
      case "Square":
        return [Gc(getParamValue("x", e2, t2, a2))];
      case "Tanh":
        return [yo(getParamValue("x", e2, t2, a2))];
      case "Tan":
        return [mo(getParamValue("x", e2, t2, a2))];
      case "Relu6":
      case "ClipByValue":
        return [Kr(getParamValue("x", e2, t2, a2), getParamValue("clipValueMin", e2, t2, a2), getParamValue("clipValueMax", e2, t2, a2))];
      case "Rsqrt":
        return [ao(getTensor(e2.inputNames[0], t2, a2))];
      case "Prod":
        return [eh(getParamValue("x", e2, t2, a2), getParamValue("axes", e2, t2, a2))];
      case "LeakyRelu":
        return [rh(getParamValue("x", e2, t2, a2), getParamValue("alpha", e2, t2, a2))];
      case "Prelu":
        return [oh(getParamValue("x", e2, t2, a2), getParamValue("alpha", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var TensorArray = function() {
    function e2(t2, a2, r2, n2, s2, o2, p2) {
      this.name = t2, this.dtype = a2, this.maxSize = r2, this.elementShape = n2, this.identicalElementShapes = s2, this.dynamicSize = o2, this.clearAfterRead = p2, this.tensors = [], this.closed_ = false, this.id = e2.nextId++;
    }
    return Object.defineProperty(e2.prototype, "closed", { get: function() {
      return this.closed_;
    }, enumerable: true, configurable: true }), e2.prototype.clearAndClose = function() {
      this.tensors.forEach(function(e3) {
        return e3.tensor.dispose();
      }), this.tensors = [], this.closed_ = true;
    }, e2.prototype.size = function() {
      return this.tensors.length;
    }, e2.prototype.read = function(e3) {
      if (this.closed_)
        throw new Error("TensorArray " + this.name + " has already been closed.");
      if (e3 < 0 || e3 >= this.tensors.length)
        throw new Error("Tried to read from index " + e3 + ", but array size is: " + this.tensors.length);
      var t2 = this.tensors[e3];
      if (t2.cleared)
        throw new Error("TensorArray " + this.name + ": Could not read index " + e3 + " twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");
      return this.clearAfterRead && (t2.cleared = true), t2.read = true, t2.tensor;
    }, e2.prototype.readMany = function(e3) {
      var t2 = this;
      return e3.map(function(e4) {
        return t2.read(e4);
      });
    }, e2.prototype.write = function(e3, t2) {
      if (this.closed_)
        throw new Error("TensorArray " + this.name + " has already been closed.");
      if (e3 < 0 || !this.dynamicSize && e3 >= this.maxSize)
        throw new Error("Tried to write to index " + e3 + ", but array is not resizeable and size is: " + this.maxSize);
      var a2 = this.tensors[e3] || {};
      if (t2.dtype !== this.dtype)
        throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e3 + ",\n          because the value dtype is " + t2.dtype + ", but TensorArray dtype is " + this.dtype + ".");
      if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (this.elementShape = t2.shape), this.assertShapesMatchAllowUndefinedSize(this.elementShape, t2.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + e3 + "."), a2 && a2.read)
        throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e3 + ", because it has already been read.");
      if (a2 && a2.written)
        throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e3 + ", because it has already been written.");
      a2.tensor = t2, a2.written = true, this.tensors[e3] = a2;
    }, e2.prototype.writeMany = function(e3, t2) {
      var a2 = this;
      if (e3.length !== t2.length)
        throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + e3.length + " is not the same as tensors size: " + t2.length + ".");
      e3.forEach(function(e4, r2) {
        return a2.write(e4, t2[r2]);
      });
    }, e2.prototype.gather = function(e3, t2) {
      if (t2 && t2 !== this.dtype)
        throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + t2);
      if (!e3) {
        e3 = [];
        for (var a2 = 0; a2 < this.size(); a2++)
          e3.push(a2);
      }
      if (0 === e3.length)
        return Fn([], [0].concat(this.elementShape));
      var r2 = this.readMany(e3);
      return this.assertShapesMatchAllowUndefinedSize(this.elementShape, r2[0].shape, "TensorArray shape mismatch: "), hr(r2, 0);
    }, e2.prototype.concat = function(e3) {
      if (e3 && e3 !== this.dtype)
        throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + e3);
      if (0 === this.size())
        return Fn([], [0].concat(this.elementShape));
      for (var t2 = [], a2 = 0; a2 < this.size(); a2++)
        t2.push(a2);
      var r2 = this.readMany(t2);
      return this.assertShapesMatchAllowUndefinedSize(this.elementShape, r2[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + r2[0].shape + ")"), Yn(r2, 0);
    }, e2.prototype.scatter = function(e3, t2) {
      if (t2.dtype !== this.dtype)
        throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t2.dtype);
      if (e3.length !== t2.shape[0])
        throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + e3.length + " vs. " + t2.shape[0]);
      var a2 = Math.max.apply(Math, e3);
      if (!this.dynamicSize && a2 >= this.maxSize)
        throw new Error("Max index must be < array size (" + a2 + "  vs. " + this.maxSize + ")");
      this.writeMany(e3, fr(t2, 0));
    }, e2.prototype.split = function(e3, t2) {
      var a2 = this;
      if (t2.dtype !== this.dtype)
        throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t2.dtype);
      var r2 = 0, n2 = e3.map(function(e4) {
        return r2 += e4;
      });
      if (r2 !== t2.shape[0])
        throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + r2 + ", and tensor's shape is: " + t2.shape);
      if (!this.dynamicSize && e3.length !== this.maxSize)
        throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + e3.length + "), and the TensorArray is not marked as dynamically resizeable");
      var s2 = 0 === r2 ? 0 : t2.size / r2, o2 = [];
      Ze(function() {
        t2 = t2.reshape([1, r2, s2]);
        for (var p3 = 0; p3 < e3.length; ++p3) {
          var u3 = [0, 0 === p3 ? 0 : n2[p3 - 1], 0], i2 = [1, e3[p3], s2];
          o2[p3] = Wl(t2, u3, i2).reshape(a2.elementShape);
        }
        return o2;
      });
      for (var p2 = [], u2 = 0; u2 < e3.length; u2++)
        p2[u2] = u2;
      this.writeMany(p2, o2);
    }, e2.prototype.assertShapesMatchAllowUndefinedSize = function(e3, t2, a2) {
      void 0 === a2 && (a2 = ""), st.assert(this.shapesEqualAllowUndefinedSize(e3, t2), function() {
        return a2 + " Shapes " + e3 + " and " + t2 + " must match";
      });
    }, e2.prototype.shapesEqualAllowUndefinedSize = function(e3, t2) {
      if (e3.length !== t2.length)
        return false;
      for (var a2 = 0; a2 < e3.length; a2++)
        if (-1 !== e3[a2] && -1 !== t2[a2] && e3[a2] !== t2[a2])
          return false;
      return true;
    }, e2.nextId = 0, e2;
  }();
  var _this = void 0;
  var executeOp$2 = function(e2, t2, a2) {
    return __awaiter(_this, void 0, void 0, function() {
      var r2, n2, s2, o2, p2, u2, i2, m2, l2, c2, d2, y2, f2, g, h2, N2, x2, V2, b2, P2, T2, v, O2, S2, _2, w2, A2, D2, E2, I2, M2, C2, k2, z2, F2;
      return __generator(this, function(j2) {
        switch (j2.label) {
          case 0:
            switch (e2.op) {
              case "LoopCond":
                return [3, 1];
              case "Switch":
                return [3, 2];
              case "Merge":
                return [3, 4];
              case "Enter":
                return [3, 5];
              case "Exit":
                return [3, 6];
              case "NextIteration":
                return [3, 7];
              case "TensorArrayV3":
                return [3, 8];
              case "TensorArrayWriteV3":
                return [3, 9];
              case "TensorArrayReadV3":
                return [3, 10];
              case "TensorArrayGatherV3":
                return [3, 11];
              case "TensorArrayScatterV3":
                return [3, 12];
              case "TensorArrayConcatV3":
                return [3, 13];
              case "TensorArraySplitV3":
                return [3, 14];
              case "TensorArraySizeV3":
                return [3, 15];
              case "TensorArrayCloseV3":
                return [3, 16];
            }
            return [3, 17];
          case 1:
            return [2, [getParamValue("pred", e2, t2, a2).clone()]];
          case 2:
            return r2 = getParamValue("pred", e2, t2, a2), n2 = getParamValue("data", e2, t2, a2), [4, r2.data()];
          case 3:
            return [2, j2.sent()[0] ? [void 0, n2.clone()] : [n2.clone(), void 0]];
          case 4:
            return [2, (s2 = e2.inputNames.find(function(e3) {
              return void 0 !== getTensor(e3, t2, a2);
            })) ? [getTensor(s2, t2, a2).clone()] : void 0];
          case 5:
            return o2 = getParamValue("frameName", e2, t2, a2), p2 = getParamValue("tensor", e2, t2, a2), a2.enterFrame(o2), [2, [p2.clone()]];
          case 6:
            return u2 = getParamValue("tensor", e2, t2, a2), a2.exitFrame(), [2, [u2.clone()]];
          case 7:
            return i2 = getParamValue("tensor", e2, t2, a2), a2.nextIteration(), [2, [i2.clone()]];
          case 8:
            return m2 = getParamValue("size", e2, t2, a2), l2 = getParamValue("dtype", e2, t2, a2), c2 = getParamValue("elementShape", e2, t2, a2), d2 = getParamValue("dynamicSize", e2, t2, a2), y2 = getParamValue("clearAfterRead", e2, t2, a2), f2 = getParamValue("identicalElementShapes", e2, t2, a2), g = getParamValue("name", e2, t2, a2), h2 = new TensorArray(g, l2, m2, c2, f2, d2, y2), a2.addTensorArray(h2), [2, [On(h2.id), On(1)]];
          case 9:
            return N2 = getParamValue("tensorArrayId", e2, t2, a2), x2 = getParamValue("index", e2, t2, a2), V2 = getParamValue("tensor", e2, t2, a2), a2.getTensorArray(N2).write(x2, V2), [2, [On(1)]];
          case 10:
            return b2 = getParamValue("tensorArrayId", e2, t2, a2), P2 = getParamValue("index", e2, t2, a2), [2, [a2.getTensorArray(b2).read(P2)]];
          case 11:
            return T2 = getParamValue("tensorArrayId", e2, t2, a2), v = getParamValue("indices", e2, t2, a2), O2 = getParamValue("dtype", e2, t2, a2), [2, [a2.getTensorArray(T2).gather(v, O2)]];
          case 12:
            return S2 = getParamValue("tensorArrayId", e2, t2, a2), _2 = getParamValue("indices", e2, t2, a2), w2 = getParamValue("tensor", e2, t2, a2), a2.getTensorArray(S2).scatter(_2, w2), [2, [On(1)]];
          case 13:
            return A2 = getParamValue("tensorArrayId", e2, t2, a2), D2 = a2.getTensorArray(A2), E2 = getParamValue("dtype", e2, t2, a2), [2, [D2.concat(E2)]];
          case 14:
            return I2 = getParamValue("tensorArrayId", e2, t2, a2), M2 = getParamValue("tensor", e2, t2, a2), C2 = getParamValue("lengths", e2, t2, a2), a2.getTensorArray(I2).split(C2, M2), [2, [On(1)]];
          case 15:
            return k2 = getParamValue("tensorArrayId", e2, t2, a2), z2 = a2.getTensorArray(k2), [2, [On(z2.size(), "int32")]];
          case 16:
            return F2 = getParamValue("tensorArrayId", e2, t2, a2), a2.getTensorArray(F2).clearAndClose(), [2, [On(0)]];
          case 17:
            throw TypeError("Node type " + e2.op + " is not implemented");
        }
      });
    });
  };
  var executeOp$3 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Conv1D":
        var r2 = getParamValue("stride", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), s2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase(), o2 = getParamValue("dilation", e2, t2, a2);
        return [fl(getParamValue("x", e2, t2, a2), getParamValue("filter", e2, t2, a2), r2, n2, s2, o2)];
      case "Conv2D":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), s2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase();
        var p2 = getParamValue("dilations", e2, t2, a2);
        return [dl(getParamValue("x", e2, t2, a2), getParamValue("filter", e2, t2, a2), [r2[1], r2[2]], n2, s2, [p2[1], p2[2]])];
      case "_FusedConv2D":
      case "FusedDepthwiseConv2dNative":
        var u2 = getParamValue("fusedOps", e2, t2, a2), i2 = u2[0], m2 = u2[1], l2 = "biasadd" === i2, c2 = "prelu" === m2, d2 = "fusedbatchnorm" === i2, y2 = getParamValue("numArgs", e2, t2, a2);
        if (l2) {
          if (c2 && 2 !== y2)
            throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
          if (!c2 && 1 !== y2)
            throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
        }
        if (d2)
          throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), s2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase(), p2 = getParamValue("dilations", e2, t2, a2);
        var f2 = getParamValue("args", e2, t2, a2), g = f2[0], h2 = f2[1];
        return [("_FusedConv2D" === e2.op ? hf.conv2d : hf.depthwiseConv2d)({ x: getParamValue("x", e2, t2, a2), filter: getParamValue("filter", e2, t2, a2), strides: [r2[1], r2[2]], pad: n2, dataFormat: s2, dilations: [p2[1], p2[2]], bias: g, activation: m2, preluActivationWeights: h2 })];
      case "Conv2DBackpropInput":
      case "Conv2dTranspose":
        var N2 = getParamValue("outputShape", e2, t2, a2);
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2);
        return [wl(getParamValue("x", e2, t2, a2), getParamValue("filter", e2, t2, a2), N2, [r2[1], r2[2]], n2)];
      case "DepthwiseConv2dNative":
      case "DepthwiseConv2d":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), p2 = getParamValue("dilations", e2, t2, a2), s2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase();
        return [ml(getParamValue("input", e2, t2, a2), getParamValue("filter", e2, t2, a2), [r2[1], r2[2]], n2, s2, [p2[1], p2[2]])];
      case "Conv3D":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), s2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase(), p2 = getParamValue("dilations", e2, t2, a2);
        return [pl(getParamValue("x", e2, t2, a2), getParamValue("filter", e2, t2, a2), [r2[1], r2[2], r2[3]], n2, s2, [p2[1], p2[2], p2[3]])];
      case "AvgPool":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2);
        var x2 = getParamValue("kernelSize", e2, t2, a2);
        return [Ol(getParamValue("x", e2, t2, a2), [x2[1], x2[2]], [r2[1], r2[2]], n2)];
      case "MaxPool":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), x2 = getParamValue("kernelSize", e2, t2, a2);
        return [_l(getParamValue("x", e2, t2, a2), [x2[1], x2[2]], [r2[1], r2[2]], n2)];
      case "MaxPoolWithArgmax":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), x2 = getParamValue("kernelSize", e2, t2, a2);
        var V2 = getParamValue("includeBatchInIndex", e2, t2, a2), b2 = Ll(getParamValue("x", e2, t2, a2), [x2[1], x2[2]], [r2[1], r2[2]], n2, V2);
        return [b2.result, b2.indexes];
      case "AvgPool3D":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), x2 = getParamValue("kernelSize", e2, t2, a2);
        return [Pl(getParamValue("x", e2, t2, a2), [x2[1], x2[2], x2[3]], [r2[1], r2[2], r2[3]], n2)];
      case "MaxPool3D":
        r2 = getParamValue("strides", e2, t2, a2), n2 = getParamValue("pad", e2, t2, a2), x2 = getParamValue("kernelSize", e2, t2, a2);
        return [Bl(getParamValue("x", e2, t2, a2), [x2[1], x2[2], x2[3]], [r2[1], r2[2], r2[3]], n2)];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$4 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Fill":
        var r2 = getParamValue("shape", e2, t2, a2), n2 = getParamValue("dtype", e2, t2, a2), s2 = getParamValue("value", e2, t2, a2);
        return [Hn(r2, s2, n2)];
      case "LinSpace":
        var o2 = getParamValue("start", e2, t2, a2), p2 = getParamValue("stop", e2, t2, a2), u2 = getParamValue("num", e2, t2, a2);
        return [qn(o2, p2, u2)];
      case "Multinomial":
        var i2 = getParamValue("logits", e2, t2, a2), m2 = getParamValue("numSamples", e2, t2, a2), l2 = getParamValue("seed", e2, t2, a2);
        return [Ec(i2, m2, l2)];
      case "OneHot":
        var c2 = getParamValue("indices", e2, t2, a2), d2 = getParamValue("depth", e2, t2, a2), y2 = getParamValue("onValue", e2, t2, a2), f2 = getParamValue("offValue", e2, t2, a2);
        return [Rc(c2, d2, y2, f2)];
      case "Ones":
        return [zn(getParamValue("shape", e2, t2, a2), getParamValue("dtype", e2, t2, a2))];
      case "OnesLike":
        return [jn(getParamValue("x", e2, t2, a2))];
      case "RandomUniform":
        return [zc(getParamValue("shape", e2, t2, a2), getParamValue("minval", e2, t2, a2), getParamValue("maxval", e2, t2, a2), getParamValue("dtype", e2, t2, a2))];
      case "Range":
        o2 = getParamValue("start", e2, t2, a2);
        var g = getParamValue("stop", e2, t2, a2), h2 = getParamValue("step", e2, t2, a2);
        return [Kn(o2, g, h2, getParamValue("dtype", e2, t2, a2))];
      case "TruncatedNormal":
        r2 = getParamValue("shape", e2, t2, a2);
        var N2 = getParamValue("mean", e2, t2, a2), x2 = getParamValue("stdDev", e2, t2, a2);
        l2 = getParamValue("seed", e2, t2, a2);
        return [qc(r2, N2, x2, getParamValue("dtype", e2, t2, a2), l2)];
      case "Zeros":
        return [Gn(getParamValue("shape", e2, t2, a2), getParamValue("dtype", e2, t2, a2))];
      case "ZerosLike":
        return [Xn(getParamValue("x", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var _this$1 = void 0;
  var executeOp$5 = function(e2, t2, a2) {
    return __awaiter(_this$1, void 0, void 0, function() {
      var r2, n2, s2, o2, p2, u2, i2, m2;
      return __generator(this, function(l2) {
        switch (l2.label) {
          case 0:
            switch (e2.op) {
              case "NonMaxSuppressionV5":
              case "NonMaxSuppressionV3":
              case "NonMaxSuppressionV2":
                return [3, 1];
              case "Where":
                return [3, 5];
              case "ListDiff":
                return [3, 7];
            }
            return [3, 8];
          case 1:
            return r2 = getParamValue("boxes", e2, t2, a2), n2 = getParamValue("scores", e2, t2, a2), s2 = getParamValue("maxOutputSize", e2, t2, a2), o2 = getParamValue("iouThreshold", e2, t2, a2), p2 = getParamValue("scoreThreshold", e2, t2, a2), "NonMaxSuppressionV5" !== e2.op ? [3, 3] : (u2 = getParamValue("softNmsSigma", e2, t2, a2), [4, nf.nonMaxSuppressionWithScoreAsync(r2, n2, s2, o2, p2, u2)]);
          case 2:
            return [2, [(m2 = l2.sent()).selectedIndices, m2.selectedScores]];
          case 3:
            return [4, nf.nonMaxSuppressionAsync(r2, n2, s2, o2, p2)];
          case 4:
            return [2, [l2.sent()]];
          case 5:
            return i2 = getParamValue("condition", e2, t2, a2).asType("bool"), [4, xc(i2)];
          case 6:
            return m2 = [l2.sent()], i2.dispose(), [2, m2];
          case 7:
            return [2, dr(getParamValue("x", e2, t2, a2), getParamValue("y", e2, t2, a2))];
          case 8:
            throw TypeError("Node type " + e2.op + " is not implemented");
        }
      });
    });
  };
  var executeOp$6 = function(e2, t2, a2) {
    switch (e2.op) {
      case "TopKV2":
        var r2 = getParamValue("x", e2, t2, a2), n2 = getParamValue("k", e2, t2, a2), s2 = getParamValue("sorted", e2, t2, a2), o2 = ph(r2, n2, s2);
        return [o2.values, o2.indices];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$7 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Const":
        return t2[e2.name];
      case "PlaceholderWithDefault":
        var r2 = getParamValue("default", e2, t2, a2);
        return [getTensor(e2.name, t2, a2) || r2];
      case "Placeholder":
        return [getTensor(e2.name, t2, a2)];
      case "Identity":
      case "StopGradient":
      case "FakeQuantWithMinMaxVars":
        return [getParamValue("x", e2, t2, a2).clone()];
      case "IdentityN":
        return getParamValue("x", e2, t2, a2).map(function(e3) {
          return e3.clone();
        });
      case "Snapshot":
        return [getParamValue("x", e2, t2, a2).clone()];
      case "Shape":
        return [Mn(getParamValue("x", e2, t2, a2).shape, "int32")];
      case "ShapeN":
        return getParamValue("x", e2, t2, a2).map(function(e3) {
          return Mn(e3.shape);
        });
      case "Size":
        return [On(getParamValue("x", e2, t2, a2).size, "int32")];
      case "Rank":
        return [On(getParamValue("x", e2, t2, a2).rank, "int32")];
      case "NoOp":
        return [On(1)];
      case "Print":
        var n2 = getParamValue("x", e2, t2, a2), s2 = getParamValue("data", e2, t2, a2), o2 = getParamValue("message", e2, t2, a2), p2 = getParamValue("summarize", e2, t2, a2);
        console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(o2);
        for (var u2 = 0; u2 < s2.length; u2++)
          console.log(Array.prototype.slice.call(s2[u2].dataSync()).slice(0, p2));
        return [n2];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$8 = function(e2, t2, a2) {
    switch (e2.op) {
      case "ResizeBilinear":
        var r2 = getParamValue("images", e2, t2, a2), n2 = getParamValue("size", e2, t2, a2), s2 = getParamValue("alignCorners", e2, t2, a2);
        return [nf.resizeBilinear(r2, [n2[0], n2[1]], s2)];
      case "ResizeNearestNeighbor":
        r2 = getParamValue("images", e2, t2, a2), n2 = getParamValue("size", e2, t2, a2), s2 = getParamValue("alignCorners", e2, t2, a2);
        return [nf.resizeNearestNeighbor(r2, [n2[0], n2[1]], s2)];
      case "CropAndResize":
        var o2 = getParamValue("image", e2, t2, a2), p2 = getParamValue("boxes", e2, t2, a2), u2 = getParamValue("boxInd", e2, t2, a2), i2 = getParamValue("cropSize", e2, t2, a2), m2 = getParamValue("method", e2, t2, a2), l2 = getParamValue("extrapolationValue", e2, t2, a2);
        return [nf.cropAndResize(o2, p2, u2, i2, m2, l2)];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$9 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Equal":
        return [Kc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "NotEqual":
        return [nl(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Greater":
        return [Xc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "GreaterEqual":
        return [Yc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Less":
        return [Jc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "LessEqual":
        return [Zc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "LogicalAnd":
        return [pc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "LogicalNot":
        return [vc(getParamValue("a", e2, t2, a2))];
      case "LogicalOr":
        return [gc(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      case "Select":
      case "SelectV2":
        return [yc(getParamValue("condition", e2, t2, a2), getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$10 = function(e2, t2, a2) {
    switch (e2.op) {
      case "BatchMatMul":
      case "BatchMatMulV2":
      case "MatMul":
        return [El(getParamValue("a", e2, t2, a2), getParamValue("b", e2, t2, a2), getParamValue("transposeA", e2, t2, a2), getParamValue("transposeB", e2, t2, a2))];
      case "Transpose":
        return [ua(getParamValue("x", e2, t2, a2), getParamValue("perm", e2, t2, a2))];
      case "_FusedMatMul":
        var r2 = getParamValue("fusedOps", e2, t2, a2), n2 = r2[0], s2 = r2[1], o2 = "biasadd" === n2, p2 = "prelu" === s2, u2 = getParamValue("numArgs", e2, t2, a2);
        if (o2) {
          if (p2 && 2 !== u2)
            throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
          if (!p2 && 1 !== u2)
            throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
        }
        var i2 = getParamValue("args", e2, t2, a2), m2 = i2[0], l2 = i2[1];
        return [hf.matMul({ a: getParamValue("a", e2, t2, a2), b: getParamValue("b", e2, t2, a2), transposeA: getParamValue("transposeA", e2, t2, a2), transposeB: getParamValue("transposeB", e2, t2, a2), bias: m2, activation: s2, preluActivationWeights: l2 })];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$11 = function(e2, t2, a2) {
    switch (e2.op) {
      case "FusedBatchNorm":
      case "FusedBatchNormV2":
      case "FusedBatchNormV3":
        return [nc(getParamValue("x", e2, t2, a2), getParamValue("mean", e2, t2, a2), getParamValue("variance", e2, t2, a2), getParamValue("offset", e2, t2, a2), getParamValue("scale", e2, t2, a2), getParamValue("epsilon", e2, t2, a2))];
      case "LRN":
        return [uh(getParamValue("x", e2, t2, a2), getParamValue("radius", e2, t2, a2), getParamValue("bias", e2, t2, a2), getParamValue("alpha", e2, t2, a2), getParamValue("beta", e2, t2, a2))];
      case "Softmax":
        return [ia(getParamValue("x", e2, t2, a2))];
      case "LogSoftmax":
        return [sa(getParamValue("x", e2, t2, a2))];
      case "SparseToDense":
        return [wh(getParamValue("sparseIndices", e2, t2, a2), getParamValue("outputShape", e2, t2, a2), getParamValue("sparseValues", e2, t2, a2), getParamValue("defaultValue", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$12 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Max":
        var r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [$l(getParamValue("x", e2, t2, a2), r2, n2)];
      case "Mean":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [Ql(getParamValue("x", e2, t2, a2), r2, n2)];
      case "Min":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [Jl(getParamValue("x", e2, t2, a2), r2, n2)];
      case "Sum":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [th(getParamValue("x", e2, t2, a2), r2, n2)];
      case "All":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [ql(getParamValue("x", e2, t2, a2), r2, n2)];
      case "Any":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [Kl(getParamValue("x", e2, t2, a2), r2, n2)];
      case "ArgMax":
        r2 = getParamValue("axis", e2, t2, a2);
        return [jl(getParamValue("x", e2, t2, a2), r2)];
      case "ArgMin":
        r2 = getParamValue("axis", e2, t2, a2);
        return [Xl(getParamValue("x", e2, t2, a2), r2)];
      case "Prod":
        r2 = getParamValue("axis", e2, t2, a2), n2 = getParamValue("keepDims", e2, t2, a2);
        return [eh(getParamValue("x", e2, t2, a2), r2, n2)];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$13 = function(e2, t2, a2) {
    switch (e2.op) {
      case "ConcatV2":
      case "Concat":
        var r2 = getParamValue("n", e2, t2, a2), n2 = getParamValue("axis", e2, t2, a2), s2 = getParamValue("tensors", e2, t2, a2);
        return s2 = s2.slice(0, r2), [Yn(s2, n2)];
      case "GatherV2":
      case "Gather":
        n2 = getParamValue("axis", e2, t2, a2);
        var o2 = getParamValue("x", e2, t2, a2), p2 = getParamValue("indices", e2, t2, a2);
        return [il(o2, p2.asType("int32"), n2)];
      case "ReverseV2":
      case "Reverse":
        n2 = getParamValue("axis", e2, t2, a2), o2 = getParamValue("x", e2, t2, a2);
        return [kl(o2, n2)];
      case "Slice":
        var u2 = getParamValue("begin", e2, t2, a2), i2 = getParamValue("size", e2, t2, a2);
        return [Wl(getParamValue("x", e2, t2, a2), u2, i2)];
      case "StridedSlice":
        u2 = getParamValue("begin", e2, t2, a2);
        var m2 = getParamValue("end", e2, t2, a2), l2 = getParamValue("strides", e2, t2, a2), c2 = getParamValue("beginMask", e2, t2, a2), d2 = getParamValue("endMask", e2, t2, a2), y2 = getParamValue("ellipsisMask", e2, t2, a2), f2 = getParamValue("newAxisMask", e2, t2, a2), g = getParamValue("shrinkAxisMask", e2, t2, a2), h2 = getParamValue("x", e2, t2, a2);
        if (1 === u2.length && h2.shape.length > 1)
          for (var N2 = 1; N2 < h2.shape.length; N2++)
            u2.push(0), m2.push(h2.shape[N2]), l2.push(l2[0]);
        return [dh(h2, u2, m2, l2, c2, d2, y2, f2, g)];
      case "Pack":
        return Ze(function() {
          var r3 = getParamValue("axis", e2, t2, a2), n3 = getParamValue("tensors", e2, t2, a2), s3 = n3[0].shape, o3 = n3[0].squeeze().shape, p3 = n3.map(function(e3) {
            var t3 = st.arraysEqual(e3.shape, s3);
            if (!t3 && !st.arraysEqual(e3.squeeze().shape, o3))
              throw new Error("the input tensors shape does not match");
            return t3 ? e3 : e3.reshape(s3);
          });
          return [hr(p3, r3)];
        });
      case "Unpack":
        return Ze(function() {
          var r3 = getParamValue("axis", e2, t2, a2), n3 = getParamValue("tensor", e2, t2, a2);
          return fr(n3, r3);
        });
      case "Tile":
        var x2 = getParamValue("reps", e2, t2, a2);
        return [wc(getParamValue("x", e2, t2, a2), x2)];
      case "Split":
      case "SplitV":
        n2 = getParamValue("axis", e2, t2, a2);
        var V2 = getParamValue("numOrSizeSplits", e2, t2, a2);
        return tr(getParamValue("x", e2, t2, a2), V2, n2);
      case "ScatterNd":
        p2 = getParamValue("indices", e2, t2, a2);
        var b2 = getParamValue("values", e2, t2, a2), P2 = getParamValue("shape", e2, t2, a2);
        return [vh(p2, b2, P2)];
      case "GatherNd":
        var T2 = getParamValue("x", e2, t2, a2);
        p2 = getParamValue("indices", e2, t2, a2);
        return [Ch(T2, p2)];
      case "SparseToDense":
        p2 = getParamValue("sparseIndices", e2, t2, a2), P2 = getParamValue("outputShape", e2, t2, a2);
        var v = getParamValue("sparseValues", e2, t2, a2), O2 = getParamValue("defaultValue", e2, t2, a2);
        return [wh(p2, v, P2, v.dtype === O2.dtype ? O2 : O2.asType(v.dtype))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$14 = function(e2, t2, a2) {
    switch (e2.op) {
      case "FFT":
        return [gh(getParamValue("x", e2, t2, a2))];
      case "IFFT":
        return [mh(getParamValue("x", e2, t2, a2))];
      case "RFFT":
        return [yh(getParamValue("x", e2, t2, a2))];
      case "IRFFT":
        return [xh(getParamValue("x", e2, t2, a2))];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  var executeOp$15 = function(e2, t2, a2) {
    switch (e2.op) {
      case "Cast":
        return [or(getParamValue("x", e2, t2, a2), getParamValue("dtype", e2, t2, a2))];
      case "ExpandDims":
        var r2 = getParamValue("axis", e2, t2, a2);
        return [sr(getParamValue("x", e2, t2, a2), r2)];
      case "Squeeze":
        r2 = getParamValue("axis", e2, t2, a2);
        return [lr(getParamValue("x", e2, t2, a2), r2)];
      case "Reshape":
        return [ur(getParamValue("x", e2, t2, a2), getParamValue("shape", e2, t2, a2))];
      case "PadV2":
      case "Pad":
        return [Ic(getParamValue("x", e2, t2, a2), split$1(getParamValue("padding", e2, t2, a2), 2), getParamValue("constantValue", e2, t2, a2))];
      case "SpaceToBatchND":
        var n2 = getParamValue("blockShape", e2, t2, a2), s2 = split$1(getParamValue("paddings", e2, t2, a2), 2);
        return [cr(getParamValue("x", e2, t2, a2), n2, s2)];
      case "BatchToSpaceND":
        n2 = getParamValue("blockShape", e2, t2, a2);
        var o2 = split$1(getParamValue("crops", e2, t2, a2), 2);
        return [rr(getParamValue("x", e2, t2, a2), n2, o2)];
      case "DepthToSpace":
        var p2 = getParamValue("blockSize", e2, t2, a2), u2 = getParamValue("dataFormat", e2, t2, a2).toUpperCase();
        return [ir(getParamValue("x", e2, t2, a2), p2, u2)];
      default:
        throw TypeError("Node type " + e2.op + " is not implemented");
    }
  };
  function executeOp$16(e2, t2, a2) {
    var r2 = function(e3, t3, a3) {
      switch (e3.category) {
        case "arithmetic":
          return Ze(function() {
            return executeOp(e3, t3, a3);
          });
        case "basic_math":
          return Ze(function() {
            return executeOp$1(e3, t3, a3);
          });
        case "control":
          return executeOp$2(e3, t3, a3);
        case "convolution":
          return Ze(function() {
            return executeOp$3(e3, t3, a3);
          });
        case "creation":
          return Ze(function() {
            return executeOp$4(e3, t3, a3);
          });
        case "dynamic":
          return executeOp$5(e3, t3, a3);
        case "evaluation":
          return Ze(function() {
            return executeOp$6(e3, t3, a3);
          });
        case "image":
          return Ze(function() {
            return executeOp$8(e3, t3, a3);
          });
        case "graph":
          return Ze(function() {
            return executeOp$7(e3, t3, a3);
          });
        case "logical":
          return Ze(function() {
            return executeOp$9(e3, t3, a3);
          });
        case "matrices":
          return Ze(function() {
            return executeOp$10(e3, t3, a3);
          });
        case "normalization":
          return Ze(function() {
            return executeOp$11(e3, t3, a3);
          });
        case "reduction":
          return Ze(function() {
            return executeOp$12(e3, t3, a3);
          });
        case "slice_join":
          return Ze(function() {
            return executeOp$13(e3, t3, a3);
          });
        case "spectral":
          return Ze(function() {
            return executeOp$14(e3, t3, a3);
          });
        case "transformation":
          return Ze(function() {
            return executeOp$15(e3, t3, a3);
          });
        case "custom":
          var r3 = getRegisteredOp(e3.op);
          if (r3 && r3.customExecutor)
            return r3.customExecutor(new NodeValueImpl(e3, t3, a3));
          throw TypeError("Custom op " + e3.op + " is not registered.");
        default:
          throw TypeError("Unknown op '" + e3.op + "'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()");
      }
    }(e2, t2, a2);
    return r2 instanceof Promise ? r2.then(function(e3) {
      return [].concat(e3);
    }) : [].concat(r2);
  }
  var ExecutionContext = function() {
    function e2(e3, t2) {
      this.weightMap = e3, this.tensorArrayMap = t2, this.rootContext = { id: 0, frameName: "", iterationId: 0 }, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds();
    }
    return e2.prototype.newFrame = function(e3, t2) {
      return { id: e3, frameName: t2, iterationId: 0 };
    }, Object.defineProperty(e2.prototype, "currentContext", { get: function() {
      return this.contexts;
    }, set: function(e3) {
      this.contexts !== e3 && (this.contexts = e3, this.generateCurrentContextIds());
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "currentContextId", { get: function() {
      return this._currentContextIds[0];
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "currentContextIds", { get: function() {
      return this._currentContextIds;
    }, enumerable: true, configurable: true }), e2.prototype.generateCurrentContextIds = function() {
      for (var e3 = [], t2 = 0; t2 < this.contexts.length - 1; t2++) {
        var a2 = this.contexts.slice(0, this.contexts.length - t2);
        e3.push(this.contextIdforContexts(a2));
      }
      e3.push(""), this._currentContextIds = e3;
    }, e2.prototype.contextIdforContexts = function(e3) {
      return e3 ? e3.map(function(e4) {
        return 0 === e4.id && 0 === e4.iterationId ? "" : e4.frameName + "-" + e4.iterationId;
      }).join("/") : "";
    }, e2.prototype.enterFrame = function(e3) {
      this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(this.newFrame(this.lastId, e3)), this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)));
    }, e2.prototype.exitFrame = function() {
      if (!(this.contexts && this.contexts.length > 1))
        throw new Error("Cannot exit frame, the context is empty");
      this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds.shift();
    }, e2.prototype.nextIteration = function() {
      if (!(this.contexts && this.contexts.length > 0))
        throw new Error("Cannot increase frame iteration, the context is empty");
      this.contexts = this.contexts.slice(), this.lastId++;
      var e3 = Object.assign({}, this.contexts[this.contexts.length - 1]);
      e3.iterationId += 1, e3.id = this.lastId, this.contexts.splice(-1, 1, e3), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    }, e2.prototype.getWeight = function(e3) {
      return this.weightMap[e3];
    }, e2.prototype.addTensorArray = function(e3) {
      this.tensorArrayMap[e3.id] = e3;
    }, e2.prototype.getTensorArray = function(e3) {
      return this.tensorArrayMap[e3];
    }, e2;
  }();
  function getExecutionSubgraph(e2, t2, a2) {
    for (var r2 = /* @__PURE__ */ new Set(), n2 = [], s2 = null, o2 = null, p2 = /* @__PURE__ */ new Set(), u2 = Object.keys(e2).map(function(e3) {
      return parseNodeName(e3)[0];
    }), i2 = t2.slice(); i2.length > 0; ) {
      var m2 = i2.pop();
      (isControlFlow(m2) || isDynamicShape(m2)) && null == s2 && (o2 = (s2 = m2).children.map(function(e3) {
        return e3.name;
      }).filter(function(e3) {
        return r2.has(e3);
      })), r2.add(m2.name), null == a2[m2.name] && (-1 === u2.indexOf(m2.name) && (0 !== m2.inputs.length ? m2.inputs.forEach(function(e3) {
        p2.has(e3.name) || (p2.add(e3.name), i2.push(e3));
      }) : n2.push(m2.name)));
    }
    return { inputs: e2, outputs: t2, usedNodes: r2, missingInputs: n2, dynamicNode: s2, syncInputs: o2 };
  }
  function getNodesInTopologicalOrder(e2, t2, a2) {
    var r2 = a2.usedNodes, n2 = a2.inputs, s2 = [];
    Object.keys(n2).map(function(e3) {
      return parseNodeName(e3)[0];
    }).map(function(t3) {
      return e2.nodes[t3];
    }).forEach(function(e3) {
      r2.has(e3.name) && s2.push(e3);
    }), e2.weights.forEach(function(e3) {
      r2.has(e3.name) && s2.push(e3);
    });
    for (var o2 = /* @__PURE__ */ new Set(), p2 = []; s2.length > 0; ) {
      var u2 = s2.pop();
      o2.add(u2.name), t2[u2.name] || p2.push(u2), u2.children.forEach(function(e3) {
        !o2.has(e3.name) && r2.has(e3.name) && e3.inputs.every(function(e4) {
          return o2.has(e4.name);
        }) && s2.push(e3);
      });
    }
    return p2;
  }
  var CONTROL_FLOW_OPS = ["Switch", "Merge", "Enter", "Exit", "NextIteration"];
  var DYNAMIC_SHAPE_OPS = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"];
  function isControlFlow(e2) {
    return CONTROL_FLOW_OPS.indexOf(e2.op) >= 0;
  }
  function isDynamicShape(e2) {
    return DYNAMIC_SHAPE_OPS.indexOf(e2.op) >= 0;
  }
  var GraphExecutor = function() {
    function e2(e3) {
      this.graph = e3, this.compiledMap = /* @__PURE__ */ new Map(), this._weightMap = {}, this.SEPERATOR = ",", this._outputs = e3.outputs, this._inputs = e3.inputs, this._signature = e3.signature;
    }
    return Object.defineProperty(e2.prototype, "weightMap", { get: function() {
      return this._weightMap;
    }, set: function(e3) {
      var t2 = Object.keys(e3).map(function(t3) {
        return e3[t3].map(function(e4) {
          return e4.id;
        });
      });
      this.weightIds = [].concat.apply([], t2), this._weightMap = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "inputs", { get: function() {
      return this._inputs.map(function(e3) {
        return { name: e3.name, shape: e3.attrParams.shape ? e3.attrParams.shape.value : void 0, dtype: e3.attrParams.dtype ? e3.attrParams.dtype.value : void 0 };
      });
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "outputs", { get: function() {
      return this._outputs.map(function(e3) {
        return { name: e3.name, shape: e3.attrParams.shape ? e3.attrParams.shape.value : void 0, dtype: e3.attrParams.dtype ? e3.attrParams.dtype.value : void 0 };
      });
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "inputNodes", { get: function() {
      return this._inputs.map(function(e3) {
        return e3.signatureKey || e3.name;
      });
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "outputNodes", { get: function() {
      return this._outputs.map(function(e3) {
        return e3.signatureKey || e3.name;
      });
    }, enumerable: true, configurable: true }), e2.prototype.getCompilationKey = function(e3, t2) {
      var a2 = e3.map(function(e4) {
        return e4.name;
      }).sort(), r2 = t2.map(function(e4) {
        return e4.name;
      }).sort();
      return a2.join(this.SEPERATOR) + "--" + r2.join(this.SEPERATOR);
    }, e2.prototype.compile = function(e3, t2) {
      var a2 = getExecutionSubgraph(e3, t2, this.weightMap), r2 = a2.missingInputs, n2 = a2.dynamicNode, s2 = a2.syncInputs;
      if (null != n2)
        throw new Error("This execution contains the node '" + n2.name + "', which has the dynamic op '" + n2.op + "'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [" + s2 + "]");
      if (r2.length > 0) {
        var o2 = t2.map(function(e4) {
          return e4.name;
        }), p2 = Object.keys(e3);
        throw new Error("Cannot compute the outputs [" + o2 + "] from the provided inputs [" + p2 + "]. Missing the following inputs: [" + r2 + "]");
      }
      return getNodesInTopologicalOrder(this.graph, this.weightMap, a2);
    }, e2.prototype.execute = function(e3, t2) {
      var a2 = this;
      e3 = this.mapInputs(e3);
      var r2 = Object.keys(e3).sort();
      this.checkInputs(e3), this.checkInputShapeAndType(e3), t2 = this.mapOutputs(t2), this.checkOutputs(t2);
      var n2 = r2.map(function(e4) {
        return a2.graph.nodes[parseNodeName(e4)[0]];
      }), s2 = t2.map(function(e4) {
        return a2.graph.nodes[parseNodeName(e4)[0]];
      }), o2 = this.getCompilationKey(n2, s2), p2 = this.compiledMap.get(o2);
      null == p2 && (p2 = this.compile(e3, s2), this.compiledMap.set(o2, p2));
      var u2 = {};
      return Ze(function() {
        var r3 = new ExecutionContext(a2._weightMap, u2), n3 = __assign({}, a2.weightMap);
        Object.keys(e3).forEach(function(t3) {
          var a3 = parseNodeName(t3), r4 = a3[0], s4 = [];
          s4[a3[1]] = e3[t3], n3[r4] = s4;
        });
        for (var s3 = a2.getFrozenTensorIds(n3), o3 = {}, i2 = 0; i2 < p2.length; i2++) {
          var m2 = p2[i2];
          if (!n3[m2.name]) {
            var l2 = executeOp$16(m2, n3, r3);
            if (l2 instanceof Promise)
              throw new Error("The execution of the op '" + m2.op + "' returned a promise. Please use model.executeAsync() instead.");
            n3[m2.name] = l2, a2.checkTensorForDisposal(m2.name, m2, n3, r3, s3, t2, o3);
          }
        }
        return t2.map(function(e4) {
          return getTensor(e4, n3, r3);
        });
      });
    }, e2.prototype.getFrozenTensorIds = function(e3) {
      var t2 = [].concat.apply([], Object.keys(e3).map(function(t3) {
        return e3[t3];
      }).map(function(e4) {
        return e4.map(function(e5) {
          return e5.id;
        });
      }));
      return new Set(t2);
    }, e2.prototype.checkTensorForDisposal = function(e3, t2, a2, r2, n2, s2, o2) {
      "control" !== t2.category && -1 === s2.indexOf(e3) && (a2[e3].forEach(function(e4) {
        null != e4 && (o2[e4.id] = (o2[e4.id] || 0) + t2.children.length);
      }), t2.inputs.forEach(function(e4) {
        if ("control" !== e4.category) {
          var t3 = getTensorsForCurrentContenxt(e4.name, a2, r2);
          null != t3 && t3.forEach(function(e5) {
            if (e5 && !n2.has(e5.id)) {
              var t4 = o2[e5.id];
              1 === t4 ? (e5.dispose(), delete o2[e5.id]) : null != t4 && o2[e5.id]--;
            }
          });
        }
      }));
    }, e2.prototype.executeAsync = function(e3, t2) {
      return __awaiter(this, void 0, void 0, function() {
        var a2, r2, n2, s2, o2, p2, u2 = this;
        return __generator(this, function(i2) {
          switch (i2.label) {
            case 0:
              return e3 = this.mapInputs(e3), this.checkInputs(e3), this.checkInputShapeAndType(e3), t2 = this.mapOutputs(t2), this.checkOutputs(t2), a2 = {}, r2 = new ExecutionContext(this._weightMap, a2), [4, this.executeWithControlFlow(e3, r2, t2)];
            case 1:
              return n2 = i2.sent(), s2 = t2.map(function(e4) {
                return getTensor(e4, n2, r2);
              }), o2 = new Set(s2.map(function(e4) {
                return e4.id;
              })), p2 = new Set(Object.keys(e3).map(function(t3) {
                return e3[t3].id;
              })), Object.keys(n2).forEach(function(e4) {
                n2[e4].forEach(function(e5) {
                  !e5 || e5.isDisposed || o2.has(e5.id) || p2.has(e5.id) || -1 !== u2.weightIds.indexOf(e5.id) || e5.dispose();
                });
              }), [2, s2];
          }
        });
      });
    }, e2.prototype.executeWithControlFlow = function(e3, t2, a2) {
      return __awaiter(this, void 0, void 0, function() {
        var r2, n2, s2, o2, p2, u2, i2, m2, l2, c2, d2, y2, f2, g, h2, N2, x2 = this;
        return __generator(this, function(V2) {
          switch (V2.label) {
            case 0:
              r2 = Object.keys(e3), n2 = r2.map(function(e4) {
                return x2.graph.nodes[parseNodeName(e4)[0]];
              }), s2 = a2.map(function(e4) {
                return x2.graph.nodes[parseNodeName(e4)[0]];
              }), o2 = getExecutionSubgraph(e3, s2, this.weightMap), p2 = o2.usedNodes, u2 = o2.missingInputs, i2 = o2.dynamicNode, m2 = o2.syncInputs, l2 = n2.concat(this.graph.weights).map(function(e4) {
                return { node: e4, contexts: t2.currentContext };
              }), c2 = __assign({}, this.weightMap), Object.keys(e3).forEach(function(t3) {
                var a3 = parseNodeName(t3), r3 = a3[0], n3 = [];
                n3[a3[1]] = e3[t3], c2[r3] = n3;
              }), d2 = {}, y2 = this.getFrozenTensorIds(c2), f2 = {}, V2.label = 1;
            case 1:
              return l2.length > 0 ? (g = this.processStack(n2, l2, t2, c2, f2, y2, a2, d2, p2), [4, Promise.all(g)]) : [3, 3];
            case 2:
              return V2.sent(), [3, 1];
            case 3:
              if (null == i2 && console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."), (h2 = s2.filter(function(e4) {
                return !isControlFlow(e4) && !getTensor(e4.name, c2, t2);
              }).map(function(e4) {
                return e4.name;
              })).length > 0)
                throw N2 = "", null != i2 && (N2 = "Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [" + m2 + "]"), new Error("Cannot compute the outputs [" + h2 + "] from the provided inputs [" + r2 + "]. Consider providing the following inputs: [" + u2 + "]. " + N2);
              return [2, c2];
          }
        });
      });
    }, e2.prototype.processStack = function(e3, t2, a2, r2, n2, s2, o2, p2, u2) {
      for (var i2 = this, m2 = [], l2 = function() {
        var l3 = t2.pop();
        a2.currentContext = l3.contexts;
        var d2 = "";
        if ("Enter" === l3.node.op && getParamValue("isConstant", l3.node, r2, a2) && (d2 = getNodeNameAndIndex(l3.node.name, a2)[0]), -1 === e3.indexOf(l3.node)) {
          var y2 = executeOp$16(l3.node, r2, a2);
          d2 || (d2 = getNodeNameAndIndex(l3.node.name, a2)[0]);
          var f2 = a2.currentContext;
          y2 instanceof Promise ? m2.push(y2.then(function(e4) {
            return r2[d2] = e4, a2.currentContext = f2, i2.checkTensorForDisposal(d2, l3.node, r2, a2, s2, o2, p2), i2.processChildNodes(l3.node, t2, a2, r2, n2, u2), e4;
          })) : (r2[d2] = y2, c2.checkTensorForDisposal(d2, l3.node, r2, a2, s2, o2, p2), c2.processChildNodes(l3.node, t2, a2, r2, n2, u2));
        } else
          c2.processChildNodes(l3.node, t2, a2, r2, n2, u2);
      }, c2 = this; t2.length > 0; )
        l2();
      return m2;
    }, e2.prototype.processChildNodes = function(e3, t2, a2, r2, n2, s2) {
      e3.children.forEach(function(e4) {
        var o2 = getNodeNameAndIndex(e4.name, a2)[0];
        !n2[o2] && s2.has(e4.name) && ("Merge" === e4.op ? e4.inputNames.some(function(e5) {
          return !!getTensor(e5, r2, a2);
        }) && (n2[o2] = true, t2.push({ contexts: a2.currentContext, node: e4 })) : e4.inputNames.every(function(e5) {
          return !!getTensor(e5, r2, a2);
        }) && (n2[o2] = true, t2.push({ contexts: a2.currentContext, node: e4 })));
      });
    }, e2.prototype.dispose = function() {
      var e3 = this;
      Object.keys(this.weightMap).forEach(function(t2) {
        return e3.weightMap[t2].forEach(function(e4) {
          return e4.dispose();
        });
      });
    }, e2.prototype.checkInputShapeAndType = function(e3) {
      var t2 = this;
      Object.keys(e3).forEach(function(a2) {
        var r2 = e3[a2], n2 = parseNodeName(a2)[0], s2 = t2.graph.nodes[n2];
        if (s2.attrParams.shape && s2.attrParams.shape.value) {
          var o2 = s2.attrParams.shape.value, p2 = o2.length === r2.shape.length && r2.shape.every(function(e4, t3) {
            return -1 === o2[t3] || o2[t3] === e4;
          });
          st.assert(p2, function() {
            return "The shape of dict['" + s2.name + "'] provided in model.execute(dict) must be [" + o2 + "], but was [" + r2.shape + "]";
          });
        }
        s2.attrParams.dtype && s2.attrParams.dtype.value && st.assert(r2.dtype === s2.attrParams.dtype.value, function() {
          return "The dtype of dict['" + s2.name + "'] provided in model.execute(dict) must be " + s2.attrParams.dtype.value + ", but was " + r2.dtype;
        });
      });
    }, e2.prototype.mapInputs = function(e3) {
      var t2 = {};
      for (var a2 in e3) {
        if (null != this._signature && null != this._signature.inputs && null != this._signature.inputs[a2])
          t2[this._signature.inputs[a2].name] = e3[a2];
        else
          t2[a2] = e3[a2];
      }
      return t2;
    }, e2.prototype.checkInputs = function(e3) {
      var t2 = this, a2 = Object.keys(e3).filter(function(e4) {
        var a3 = parseNodeName(e4)[0];
        return null == t2.graph.nodes[a3];
      });
      if (a2.length > 0)
        throw new Error("The dict provided in model.execute(dict) has keys: [" + a2 + "] that are not part of graph");
    }, e2.prototype.mapOutputs = function(e3) {
      var t2 = this;
      return e3.map(function(e4) {
        return null != t2._signature && null != t2._signature.outputs && null != t2._signature.outputs[e4] ? t2._signature.outputs[e4].name : e4;
      }, {});
    }, e2.prototype.checkOutputs = function(e3) {
      var t2 = this;
      e3.forEach(function(e4) {
        var a2 = parseNodeName(e4)[0];
        if (!t2.graph.nodes[a2])
          throw new Error("The output '" + e4 + "' is not found in the graph");
      });
    }, e2;
  }();
  var TFHUB_SEARCH_PARAM = "?tfjs-format=file";
  var DEFAULT_MODEL_NAME = "model.json";
  var GraphModel = function() {
    function e2(e3, t2) {
      void 0 === t2 && (t2 = {}), this.modelUrl = e3, this.loadOptions = t2, this.version = "n/a", null == t2 && (this.loadOptions = {});
    }
    return Object.defineProperty(e2.prototype, "modelVersion", { get: function() {
      return this.version;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "inputNodes", { get: function() {
      return this.executor.inputNodes;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "outputNodes", { get: function() {
      return this.executor.outputNodes;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "inputs", { get: function() {
      return this.executor.inputs;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "outputs", { get: function() {
      return this.executor.outputs;
    }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "weights", { get: function() {
      return this.executor.weightMap;
    }, enumerable: true, configurable: true }), e2.prototype.findIOHandler = function() {
      var e3 = this.modelUrl;
      if (null != e3.load)
        this.handler = e3;
      else if (null != this.loadOptions.requestInit)
        this.handler = Bd.browserHTTPRequest(e3, this.loadOptions);
      else {
        var t2 = Bd.getLoadHandlers(e3, this.loadOptions.onProgress);
        if (0 === t2.length)
          t2.push(Bd.browserHTTPRequest(e3, this.loadOptions));
        else if (t2.length > 1)
          throw new Error("Found more than one (" + t2.length + ") load handlers for URL '" + [e3] + "'");
        this.handler = t2[0];
      }
    }, e2.prototype.load = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e3, t2, a2, r2;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              if (this.findIOHandler(), null == this.handler.load)
                throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
              return e3 = this, [4, this.handler.load()];
            case 1:
              return e3.artifacts = n2.sent(), t2 = this.artifacts.modelTopology, a2 = {}, null != this.artifacts.userDefinedMetadata && (a2 = this.artifacts.userDefinedMetadata.signature), this.version = t2.versions.producer + "." + t2.versions.minConsumer, r2 = Bd.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs), this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(t2, a2)), this.executor.weightMap = this.convertTensorMapToTensorsMap(r2), [2, true];
          }
        });
      });
    }, e2.prototype.save = function(e3, t2) {
      return __awaiter(this, void 0, void 0, function() {
        var t3;
        return __generator(this, function(a2) {
          if ("string" == typeof e3) {
            if (0 === (t3 = Bd.getSaveHandlers(e3)).length)
              throw new Error("Cannot find any save handlers for URL '" + e3 + "'");
            if (t3.length > 1)
              throw new Error("Found more than one (" + t3.length + ") save handlers for URL '" + e3 + "'");
            e3 = t3[0];
          }
          if (null == e3.save)
            throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
          return [2, e3.save(this.artifacts)];
        });
      });
    }, e2.prototype.predict = function(e3, t2) {
      return this.execute(e3, this.outputNodes);
    }, e2.prototype.normalizeInputs = function(e3) {
      if (!(e3 instanceof wt || Array.isArray(e3)))
        return e3;
      if ((e3 = Array.isArray(e3) ? e3 : [e3]).length !== this.inputNodes.length)
        throw new Error("Input tensor count mismatch,the graph model has " + this.inputNodes.length + " placeholders, while there are " + e3.length + " input tensors.");
      return this.inputNodes.reduce(function(t2, a2, r2) {
        return t2[a2] = e3[r2], t2;
      }, {});
    }, e2.prototype.normalizeOutputs = function(e3) {
      return e3 = e3 || this.outputNodes, Array.isArray(e3) ? e3 : [e3];
    }, e2.prototype.execute = function(e3, t2) {
      e3 = this.normalizeInputs(e3), t2 = this.normalizeOutputs(t2);
      var a2 = this.executor.execute(e3, t2);
      return a2.length > 1 ? a2 : a2[0];
    }, e2.prototype.executeAsync = function(e3, t2) {
      return __awaiter(this, void 0, void 0, function() {
        var a2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return e3 = this.normalizeInputs(e3), t2 = this.normalizeOutputs(t2), [4, this.executor.executeAsync(e3, t2)];
            case 1:
              return [2, (a2 = r2.sent()).length > 1 ? a2 : a2[0]];
          }
        });
      });
    }, e2.prototype.convertTensorMapToTensorsMap = function(e3) {
      return Object.keys(e3).reduce(function(t2, a2) {
        return t2[a2] = [e3[a2]], t2;
      }, {});
    }, e2.prototype.dispose = function() {
      this.executor.dispose();
    }, e2;
  }();
  function loadGraphModel(e2, t2) {
    return void 0 === t2 && (t2 = {}), __awaiter(this, void 0, void 0, function() {
      var a2;
      return __generator(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (null == e2)
              throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
            return null == t2 && (t2 = {}), t2.fromTFHub && null == e2.load && (e2.endsWith("/") || (e2 += "/"), e2 = "" + e2 + DEFAULT_MODEL_NAME + TFHUB_SEARCH_PARAM), [4, (a2 = new GraphModel(e2, t2)).load()];
          case 1:
            return r2.sent(), [2, a2];
        }
      });
    });
  }

  // node_modules/@tensorflow-models/toxicity/dist/toxicity.esm.js
  function __awaiter2(t2, e2, r2, n2) {
    return new (r2 || (r2 = Promise))(function(o2, i2) {
      function a2(t3) {
        try {
          s2(n2.next(t3));
        } catch (t4) {
          i2(t4);
        }
      }
      function l2(t3) {
        try {
          s2(n2.throw(t3));
        } catch (t4) {
          i2(t4);
        }
      }
      function s2(t3) {
        t3.done ? o2(t3.value) : new r2(function(e3) {
          e3(t3.value);
        }).then(a2, l2);
      }
      s2((n2 = n2.apply(t2, e2 || [])).next());
    });
  }
  function __generator2(t2, e2) {
    var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
      if (1 & o2[0])
        throw o2[1];
      return o2[1];
    }, trys: [], ops: [] };
    return i2 = { next: l2(0), throw: l2(1), return: l2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
      return this;
    }), i2;
    function l2(i3) {
      return function(l3) {
        return function(i4) {
          if (r2)
            throw new TypeError("Generator is already executing.");
          for (; a2; )
            try {
              if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                return o2;
              switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                case 0:
                case 1:
                  o2 = i4;
                  break;
                case 4:
                  return a2.label++, { value: i4[1], done: false };
                case 5:
                  a2.label++, n2 = i4[1], i4 = [0];
                  continue;
                case 7:
                  i4 = a2.ops.pop(), a2.trys.pop();
                  continue;
                default:
                  if (!(o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) && (6 === i4[0] || 2 === i4[0])) {
                    a2 = 0;
                    continue;
                  }
                  if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                    a2.label = i4[1];
                    break;
                  }
                  if (6 === i4[0] && a2.label < o2[1]) {
                    a2.label = o2[1], o2 = i4;
                    break;
                  }
                  if (o2 && a2.label < o2[2]) {
                    a2.label = o2[2], a2.ops.push(i4);
                    break;
                  }
                  o2[2] && a2.ops.pop(), a2.trys.pop();
                  continue;
              }
              i4 = e2.call(t2, a2);
            } catch (t3) {
              i4 = [6, t3], n2 = 0;
            } finally {
              r2 = o2 = 0;
            }
          if (5 & i4[0])
            throw i4[1];
          return { value: i4[0] ? i4[1] : void 0, done: true };
        }([i3, l3]);
      };
    }
  }
  function __awaiter$1(t2, e2, r2, n2) {
    return new (r2 || (r2 = Promise))(function(o2, i2) {
      function a2(t3) {
        try {
          s2(n2.next(t3));
        } catch (t4) {
          i2(t4);
        }
      }
      function l2(t3) {
        try {
          s2(n2.throw(t3));
        } catch (t4) {
          i2(t4);
        }
      }
      function s2(t3) {
        t3.done ? o2(t3.value) : new r2(function(e3) {
          e3(t3.value);
        }).then(a2, l2);
      }
      s2((n2 = n2.apply(t2, e2 || [])).next());
    });
  }
  function __generator$1(t2, e2) {
    var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
      if (1 & o2[0])
        throw o2[1];
      return o2[1];
    }, trys: [], ops: [] };
    return i2 = { next: l2(0), throw: l2(1), return: l2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
      return this;
    }), i2;
    function l2(i3) {
      return function(l3) {
        return function(i4) {
          if (r2)
            throw new TypeError("Generator is already executing.");
          for (; a2; )
            try {
              if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done)
                return o2;
              switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                case 0:
                case 1:
                  o2 = i4;
                  break;
                case 4:
                  return a2.label++, { value: i4[1], done: false };
                case 5:
                  a2.label++, n2 = i4[1], i4 = [0];
                  continue;
                case 7:
                  i4 = a2.ops.pop(), a2.trys.pop();
                  continue;
                default:
                  if (!(o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) && (6 === i4[0] || 2 === i4[0])) {
                    a2 = 0;
                    continue;
                  }
                  if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                    a2.label = i4[1];
                    break;
                  }
                  if (6 === i4[0] && a2.label < o2[1]) {
                    a2.label = o2[1], o2 = i4;
                    break;
                  }
                  if (o2 && a2.label < o2[2]) {
                    a2.label = o2[2], a2.ops.push(i4);
                    break;
                  }
                  o2[2] && a2.ops.pop(), a2.trys.pop();
                  continue;
              }
              i4 = e2.call(t2, a2);
            } catch (t3) {
              i4 = [6, t3], n2 = 0;
            } finally {
              r2 = o2 = 0;
            }
          if (5 & i4[0])
            throw i4[1];
          return { value: i4[0] ? i4[1] : void 0, done: true };
        }([i3, l3]);
      };
    }
  }
  var stringToChars = function(t2) {
    for (var e2 = [], r2 = 0, n2 = t2; r2 < n2.length; r2++) {
      var o2 = n2[r2];
      e2.push(o2);
    }
    return e2;
  };
  var TrieNode = function() {
    this.parent = null, this.children = {}, this.end = false, this.word = [[], 0, 0];
  };
  var Trie = function() {
    function t2() {
      this.root = new TrieNode();
    }
    return t2.prototype.insert = function(t3, e2, r2) {
      for (var n2 = this.root, o2 = stringToChars(t3), i2 = 0; i2 < o2.length; i2++)
        n2.children[o2[i2]] || (n2.children[o2[i2]] = new TrieNode(), n2.children[o2[i2]].parent = n2, n2.children[o2[i2]].word[0] = n2.word[0].concat(o2[i2])), n2 = n2.children[o2[i2]], i2 === o2.length - 1 && (n2.end = true, n2.word[1] = e2, n2.word[2] = r2);
    }, t2.prototype.commonPrefixSearch = function(t3) {
      for (var e2 = [], r2 = this.root.children[t3[0]], n2 = 0; n2 < t3.length && r2; n2++)
        r2.end && e2.push(r2.word), r2 = r2.children[t3[n2 + 1]];
      return e2.length || e2.push([[t3[0]], 0, 0]), e2;
    }, t2;
  }();
  var separator = "\u2581";
  function processInput(t2) {
    var e2 = t2.normalize("NFKC");
    return separator + e2.replace(/ /g, separator);
  }
  var RESERVED_SYMBOLS_COUNT = 6;
  var Tokenizer = function() {
    function t2(t3) {
      this.vocabulary = t3, this.trie = new Trie();
      for (var e2 = RESERVED_SYMBOLS_COUNT; e2 < this.vocabulary.length; e2++)
        this.trie.insert(this.vocabulary[e2][0], this.vocabulary[e2][1], e2);
    }
    return t2.prototype.encode = function(t3) {
      var e2 = [], r2 = [], n2 = [];
      t3 = processInput(t3);
      for (var o2 = stringToChars(t3), i2 = 0; i2 <= o2.length; i2++)
        e2.push({}), r2.push(0), n2.push(0);
      for (i2 = 0; i2 < o2.length; i2++)
        for (var a2 = this.trie.commonPrefixSearch(o2.slice(i2)), l2 = 0; l2 < a2.length; l2++) {
          var s2 = a2[l2], u2 = { key: s2[0], score: s2[1], index: s2[2] };
          null == e2[i2 + (c2 = s2[0].length)][i2] && (e2[i2 + c2][i2] = []), e2[i2 + c2][i2].push(u2);
        }
      for (var c2 = 0; c2 <= o2.length; c2++)
        for (var h2 in e2[c2]) {
          var f2 = e2[c2][h2];
          for (l2 = 0; l2 < f2.length; l2++) {
            var d2 = f2[l2], p2 = d2.score + n2[c2 - d2.key.length];
            (0 === n2[c2] || p2 >= n2[c2]) && (n2[c2] = p2, r2[c2] = f2[l2].index);
          }
        }
      for (var v = [], y2 = r2.length - 1; y2 > 0; )
        v.push(r2[y2]), y2 -= this.vocabulary[r2[y2]][0].length;
      var b2 = [], w2 = false;
      for (i2 = 0; i2 < v.length; i2++) {
        var g = v[i2];
        w2 && 0 === g || b2.push(g), w2 = 0 === g;
      }
      return b2.reverse();
    }, t2;
  }();
  var BASE_PATH = "https://storage.googleapis.com/tfjs-models/savedmodel/universal_sentence_encoder/";
  function loadTokenizer(t2) {
    return __awaiter$1(this, void 0, void 0, function() {
      var e2;
      return __generator$1(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, loadVocabulary(t2)];
          case 1:
            return e2 = r2.sent(), [2, new Tokenizer(e2)];
        }
      });
    });
  }
  function loadVocabulary(t2) {
    return void 0 === t2 && (t2 = BASE_PATH + "vocab.json"), __awaiter$1(this, void 0, void 0, function() {
      return __generator$1(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, st.fetch(t2)];
          case 1:
            return [2, e2.sent().json()];
        }
      });
    });
  }
  function load$1(t2, e2) {
    return __awaiter2(this, void 0, void 0, function() {
      var r2;
      return __generator2(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, (r2 = new ToxicityClassifier(t2, e2)).load()];
          case 1:
            return n2.sent(), [2, r2];
        }
      });
    });
  }
  var ToxicityClassifier = function() {
    function t2(t3, e2) {
      void 0 === t3 && (t3 = 0.85), void 0 === e2 && (e2 = []), this.threshold = t3, this.toxicityLabels = e2;
    }
    return t2.prototype.loadModel = function() {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(t3) {
          return [2, loadGraphModel("https://tfhub.dev/tensorflow/tfjs-model/toxicity/1/default/1", { fromTFHub: true })];
        });
      });
    }, t2.prototype.loadTokenizer = function() {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(t3) {
          return [2, loadTokenizer()];
        });
      });
    }, t2.prototype.load = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var t3, e2, r2, n2 = this;
        return __generator2(this, function(o2) {
          switch (o2.label) {
            case 0:
              return [4, Promise.all([this.loadModel(), this.loadTokenizer()])];
            case 1:
              return t3 = o2.sent(), e2 = t3[0], r2 = t3[1], this.model = e2, this.tokenizer = r2, this.labels = e2.outputs.map(function(t4) {
                return t4.name.split("/")[0];
              }), 0 === this.toxicityLabels.length ? this.toxicityLabels = this.labels : st.assert(this.toxicityLabels.every(function(t4) {
                return n2.labels.indexOf(t4) > -1;
              }), function() {
                return "toxicityLabels argument must contain only items from the model heads " + n2.labels.join(", ") + ", got " + n2.toxicityLabels.join(", ");
              }), [2];
          }
        });
      });
    }, t2.prototype.classify = function(t3) {
      return __awaiter2(this, void 0, void 0, function() {
        var e2, r2, n2, o2, i2, a2, l2, s2 = this;
        return __generator2(this, function(u2) {
          switch (u2.label) {
            case 0:
              for ("string" == typeof t3 && (t3 = [t3]), e2 = t3.map(function(t4) {
                return s2.tokenizer.encode(t4);
              }), r2 = e2.map(function(t4, e3) {
                return t4.map(function(t5, r3) {
                  return [e3, r3];
                });
              }), n2 = [], o2 = 0; o2 < r2.length; o2++)
                n2 = n2.concat(r2[o2]);
              return i2 = Bn(n2, [n2.length, 2], "int32"), a2 = Mn(st.flatten(e2), "int32"), [4, this.model.executeAsync({ Placeholder_1: i2, Placeholder: a2 })];
            case 1:
              return l2 = u2.sent(), i2.dispose(), a2.dispose(), [2, l2.map(function(t4, e3) {
                return { data: t4, headIndex: e3 };
              }).filter(function(t4) {
                return s2.toxicityLabels.indexOf(s2.labels[t4.headIndex]) > -1;
              }).map(function(e3) {
                for (var r3 = e3.data.dataSync(), n3 = [], o3 = 0; o3 < t3.length; o3++) {
                  var i3 = r3.slice(2 * o3, 2 * o3 + 2), a3 = null;
                  Math.max(i3[0], i3[1]) > s2.threshold && (a3 = i3[0] < i3[1]), n3.push({ probabilities: i3, match: a3 });
                }
                return { label: s2.labels[e3.headIndex], results: n3 };
              })];
          }
        });
      });
    }, t2;
  }();

  // src/extension.ts
  load$1(0.9, []).then((model) => {
    alert("loaded");
    console.log(model);
  });
})();
/*! Bundled license information:

@tensorflow/tfjs-core/dist/tf-core.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/tf-converter.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow-models/toxicity/dist/toxicity.esm.js:
  (**
      * @license
      * Copyright 2019 Google LLC. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      * =============================================================================
      *)
*/
