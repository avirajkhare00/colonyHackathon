(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["colonyJSContractLoaderHttp"] = factory();
	else
		root["colonyJSContractLoaderHttp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/assert/assert.js":
/*!***********************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/assert/assert.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js\n// original notice:\n\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\nfunction compare(a, b) {\n  if (a === b) {\n    return 0;\n  }\n\n  var x = a.length;\n  var y = b.length;\n\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\n    if (a[i] !== b[i]) {\n      x = a[i];\n      y = b[i];\n      break;\n    }\n  }\n\n  if (x < y) {\n    return -1;\n  }\n  if (y < x) {\n    return 1;\n  }\n  return 0;\n}\nfunction isBuffer(b) {\n  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {\n    return global.Buffer.isBuffer(b);\n  }\n  return !!(b != null && b._isBuffer);\n}\n\n// based on node assert, original notice:\n\n// http://wiki.commonjs.org/wiki/Unit_Testing/1.0\n//\n// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!\n//\n// Originally from narwhal.js (http://narwhaljs.org)\n// Copyright (c) 2009 Thomas Robinson <280north.com>\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the 'Software'), to\n// deal in the Software without restriction, including without limitation the\n// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or\n// sell copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN\n// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar util = __webpack_require__(/*! util/ */ \"../../node_modules/util/util.js\");\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar pSlice = Array.prototype.slice;\nvar functionsHaveNames = (function () {\n  return function foo() {}.name === 'foo';\n}());\nfunction pToString (obj) {\n  return Object.prototype.toString.call(obj);\n}\nfunction isView(arrbuf) {\n  if (isBuffer(arrbuf)) {\n    return false;\n  }\n  if (typeof global.ArrayBuffer !== 'function') {\n    return false;\n  }\n  if (typeof ArrayBuffer.isView === 'function') {\n    return ArrayBuffer.isView(arrbuf);\n  }\n  if (!arrbuf) {\n    return false;\n  }\n  if (arrbuf instanceof DataView) {\n    return true;\n  }\n  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {\n    return true;\n  }\n  return false;\n}\n// 1. The assert module provides functions that throw\n// AssertionError's when particular conditions are not met. The\n// assert module must conform to the following interface.\n\nvar assert = module.exports = ok;\n\n// 2. The AssertionError is defined in assert.\n// new assert.AssertionError({ message: message,\n//                             actual: actual,\n//                             expected: expected })\n\nvar regex = /\\s*function\\s+([^\\(\\s]*)\\s*/;\n// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js\nfunction getName(func) {\n  if (!util.isFunction(func)) {\n    return;\n  }\n  if (functionsHaveNames) {\n    return func.name;\n  }\n  var str = func.toString();\n  var match = str.match(regex);\n  return match && match[1];\n}\nassert.AssertionError = function AssertionError(options) {\n  this.name = 'AssertionError';\n  this.actual = options.actual;\n  this.expected = options.expected;\n  this.operator = options.operator;\n  if (options.message) {\n    this.message = options.message;\n    this.generatedMessage = false;\n  } else {\n    this.message = getMessage(this);\n    this.generatedMessage = true;\n  }\n  var stackStartFunction = options.stackStartFunction || fail;\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, stackStartFunction);\n  } else {\n    // non v8 browsers so we can have a stacktrace\n    var err = new Error();\n    if (err.stack) {\n      var out = err.stack;\n\n      // try to strip useless frames\n      var fn_name = getName(stackStartFunction);\n      var idx = out.indexOf('\\n' + fn_name);\n      if (idx >= 0) {\n        // once we have located the function frame\n        // we need to strip out everything before it (and its line)\n        var next_line = out.indexOf('\\n', idx + 1);\n        out = out.substring(next_line + 1);\n      }\n\n      this.stack = out;\n    }\n  }\n};\n\n// assert.AssertionError instanceof Error\nutil.inherits(assert.AssertionError, Error);\n\nfunction truncate(s, n) {\n  if (typeof s === 'string') {\n    return s.length < n ? s : s.slice(0, n);\n  } else {\n    return s;\n  }\n}\nfunction inspect(something) {\n  if (functionsHaveNames || !util.isFunction(something)) {\n    return util.inspect(something);\n  }\n  var rawname = getName(something);\n  var name = rawname ? ': ' + rawname : '';\n  return '[Function' +  name + ']';\n}\nfunction getMessage(self) {\n  return truncate(inspect(self.actual), 128) + ' ' +\n         self.operator + ' ' +\n         truncate(inspect(self.expected), 128);\n}\n\n// At present only the three keys mentioned above are used and\n// understood by the spec. Implementations or sub modules can pass\n// other keys to the AssertionError's constructor - they will be\n// ignored.\n\n// 3. All of the following functions must throw an AssertionError\n// when a corresponding condition is not met, with a message that\n// may be undefined if not provided.  All assertion methods provide\n// both the actual and expected values to the assertion error for\n// display purposes.\n\nfunction fail(actual, expected, message, operator, stackStartFunction) {\n  throw new assert.AssertionError({\n    message: message,\n    actual: actual,\n    expected: expected,\n    operator: operator,\n    stackStartFunction: stackStartFunction\n  });\n}\n\n// EXTENSION! allows for well behaved errors defined elsewhere.\nassert.fail = fail;\n\n// 4. Pure assertion tests whether a value is truthy, as determined\n// by !!guard.\n// assert.ok(guard, message_opt);\n// This statement is equivalent to assert.equal(true, !!guard,\n// message_opt);. To test strictly for the value true, use\n// assert.strictEqual(true, guard, message_opt);.\n\nfunction ok(value, message) {\n  if (!value) fail(value, true, message, '==', assert.ok);\n}\nassert.ok = ok;\n\n// 5. The equality assertion tests shallow, coercive equality with\n// ==.\n// assert.equal(actual, expected, message_opt);\n\nassert.equal = function equal(actual, expected, message) {\n  if (actual != expected) fail(actual, expected, message, '==', assert.equal);\n};\n\n// 6. The non-equality assertion tests for whether two objects are not equal\n// with != assert.notEqual(actual, expected, message_opt);\n\nassert.notEqual = function notEqual(actual, expected, message) {\n  if (actual == expected) {\n    fail(actual, expected, message, '!=', assert.notEqual);\n  }\n};\n\n// 7. The equivalence assertion tests a deep equality relation.\n// assert.deepEqual(actual, expected, message_opt);\n\nassert.deepEqual = function deepEqual(actual, expected, message) {\n  if (!_deepEqual(actual, expected, false)) {\n    fail(actual, expected, message, 'deepEqual', assert.deepEqual);\n  }\n};\n\nassert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {\n  if (!_deepEqual(actual, expected, true)) {\n    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);\n  }\n};\n\nfunction _deepEqual(actual, expected, strict, memos) {\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (actual === expected) {\n    return true;\n  } else if (isBuffer(actual) && isBuffer(expected)) {\n    return compare(actual, expected) === 0;\n\n  // 7.2. If the expected value is a Date object, the actual value is\n  // equivalent if it is also a Date object that refers to the same time.\n  } else if (util.isDate(actual) && util.isDate(expected)) {\n    return actual.getTime() === expected.getTime();\n\n  // 7.3 If the expected value is a RegExp object, the actual value is\n  // equivalent if it is also a RegExp object with the same source and\n  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).\n  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {\n    return actual.source === expected.source &&\n           actual.global === expected.global &&\n           actual.multiline === expected.multiline &&\n           actual.lastIndex === expected.lastIndex &&\n           actual.ignoreCase === expected.ignoreCase;\n\n  // 7.4. Other pairs that do not both pass typeof value == 'object',\n  // equivalence is determined by ==.\n  } else if ((actual === null || typeof actual !== 'object') &&\n             (expected === null || typeof expected !== 'object')) {\n    return strict ? actual === expected : actual == expected;\n\n  // If both values are instances of typed arrays, wrap their underlying\n  // ArrayBuffers in a Buffer each to increase performance\n  // This optimization requires the arrays to have the same type as checked by\n  // Object.prototype.toString (aka pToString). Never perform binary\n  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their\n  // bit patterns are not identical.\n  } else if (isView(actual) && isView(expected) &&\n             pToString(actual) === pToString(expected) &&\n             !(actual instanceof Float32Array ||\n               actual instanceof Float64Array)) {\n    return compare(new Uint8Array(actual.buffer),\n                   new Uint8Array(expected.buffer)) === 0;\n\n  // 7.5 For all other Object pairs, including Array objects, equivalence is\n  // determined by having the same number of owned properties (as verified\n  // with Object.prototype.hasOwnProperty.call), the same set of keys\n  // (although not necessarily the same order), equivalent values for every\n  // corresponding key, and an identical 'prototype' property. Note: this\n  // accounts for both named and indexed properties on Arrays.\n  } else if (isBuffer(actual) !== isBuffer(expected)) {\n    return false;\n  } else {\n    memos = memos || {actual: [], expected: []};\n\n    var actualIndex = memos.actual.indexOf(actual);\n    if (actualIndex !== -1) {\n      if (actualIndex === memos.expected.indexOf(expected)) {\n        return true;\n      }\n    }\n\n    memos.actual.push(actual);\n    memos.expected.push(expected);\n\n    return objEquiv(actual, expected, strict, memos);\n  }\n}\n\nfunction isArguments(object) {\n  return Object.prototype.toString.call(object) == '[object Arguments]';\n}\n\nfunction objEquiv(a, b, strict, actualVisitedObjects) {\n  if (a === null || a === undefined || b === null || b === undefined)\n    return false;\n  // if one is a primitive, the other must be same\n  if (util.isPrimitive(a) || util.isPrimitive(b))\n    return a === b;\n  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))\n    return false;\n  var aIsArgs = isArguments(a);\n  var bIsArgs = isArguments(b);\n  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))\n    return false;\n  if (aIsArgs) {\n    a = pSlice.call(a);\n    b = pSlice.call(b);\n    return _deepEqual(a, b, strict);\n  }\n  var ka = objectKeys(a);\n  var kb = objectKeys(b);\n  var key, i;\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length !== kb.length)\n    return false;\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] !== kb[i])\n      return false;\n  }\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))\n      return false;\n  }\n  return true;\n}\n\n// 8. The non-equivalence assertion tests for any deep inequality.\n// assert.notDeepEqual(actual, expected, message_opt);\n\nassert.notDeepEqual = function notDeepEqual(actual, expected, message) {\n  if (_deepEqual(actual, expected, false)) {\n    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);\n  }\n};\n\nassert.notDeepStrictEqual = notDeepStrictEqual;\nfunction notDeepStrictEqual(actual, expected, message) {\n  if (_deepEqual(actual, expected, true)) {\n    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);\n  }\n}\n\n\n// 9. The strict equality assertion tests strict equality, as determined by ===.\n// assert.strictEqual(actual, expected, message_opt);\n\nassert.strictEqual = function strictEqual(actual, expected, message) {\n  if (actual !== expected) {\n    fail(actual, expected, message, '===', assert.strictEqual);\n  }\n};\n\n// 10. The strict non-equality assertion tests for strict inequality, as\n// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);\n\nassert.notStrictEqual = function notStrictEqual(actual, expected, message) {\n  if (actual === expected) {\n    fail(actual, expected, message, '!==', assert.notStrictEqual);\n  }\n};\n\nfunction expectedException(actual, expected) {\n  if (!actual || !expected) {\n    return false;\n  }\n\n  if (Object.prototype.toString.call(expected) == '[object RegExp]') {\n    return expected.test(actual);\n  }\n\n  try {\n    if (actual instanceof expected) {\n      return true;\n    }\n  } catch (e) {\n    // Ignore.  The instanceof check doesn't work for arrow functions.\n  }\n\n  if (Error.isPrototypeOf(expected)) {\n    return false;\n  }\n\n  return expected.call({}, actual) === true;\n}\n\nfunction _tryBlock(block) {\n  var error;\n  try {\n    block();\n  } catch (e) {\n    error = e;\n  }\n  return error;\n}\n\nfunction _throws(shouldThrow, block, expected, message) {\n  var actual;\n\n  if (typeof block !== 'function') {\n    throw new TypeError('\"block\" argument must be a function');\n  }\n\n  if (typeof expected === 'string') {\n    message = expected;\n    expected = null;\n  }\n\n  actual = _tryBlock(block);\n\n  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +\n            (message ? ' ' + message : '.');\n\n  if (shouldThrow && !actual) {\n    fail(actual, expected, 'Missing expected exception' + message);\n  }\n\n  var userProvidedMessage = typeof message === 'string';\n  var isUnwantedException = !shouldThrow && util.isError(actual);\n  var isUnexpectedException = !shouldThrow && actual && !expected;\n\n  if ((isUnwantedException &&\n      userProvidedMessage &&\n      expectedException(actual, expected)) ||\n      isUnexpectedException) {\n    fail(actual, expected, 'Got unwanted exception' + message);\n  }\n\n  if ((shouldThrow && actual && expected &&\n      !expectedException(actual, expected)) || (!shouldThrow && actual)) {\n    throw actual;\n  }\n}\n\n// 11. Expected to throw an error:\n// assert.throws(block, Error_opt, message_opt);\n\nassert.throws = function(block, /*optional*/error, /*optional*/message) {\n  _throws(true, block, error, message);\n};\n\n// EXTENSION! This is annoying to write outside this module.\nassert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {\n  _throws(false, block, error, message);\n};\n\nassert.ifError = function(err) { if (err) throw err; };\n\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n  for (var key in obj) {\n    if (hasOwn.call(obj, key)) keys.push(key);\n  }\n  return keys;\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/assert/assert.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/get-iterator.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/get-iterator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"../../node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/is-iterable.js":
/*!*******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/is-iterable.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/is-iterable */ \"../../node_modules/core-js/library/fn/is-iterable.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/is-iterable.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/assign.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/assign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/assign */ \"../../node_modules/core-js/library/fn/object/assign.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/assign.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/create.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/create.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"../../node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/define-property.js":
/*!******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/define-property.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"../../node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!*******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"../../node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/promise.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/promise */ \"../../node_modules/core-js/library/fn/promise.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/promise.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/symbol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"../../node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"../../node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(/*! ../core-js/promise */ \"../../node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/createClass.js":
/*!*******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/createClass.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"../../node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/extends.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/extends.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _assign = __webpack_require__(/*! ../core-js/object/assign */ \"../../node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _assign2.default || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/extends.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/inherits.js":
/*!****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/inherits.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"../../node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"../../node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"../../node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!*******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (obj, keys) {\n  var target = {};\n\n  for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;\n    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;\n    target[i] = obj[i];\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*********************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"../../node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ \"../../node_modules/babel-runtime/core-js/is-iterable.js\");\n\nvar _isIterable3 = _interopRequireDefault(_isIterable2);\n\nvar _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ \"../../node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function sliceIterator(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n\n    try {\n      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n        _arr.push(_s.value);\n\n        if (i && _arr.length === i) break;\n      }\n    } catch (err) {\n      _d = true;\n      _e = err;\n    } finally {\n      try {\n        if (!_n && _i[\"return\"]) _i[\"return\"]();\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n\n    return _arr;\n  }\n\n  return function (arr, i) {\n    if (Array.isArray(arr)) {\n      return arr;\n    } else if ((0, _isIterable3.default)(Object(arr))) {\n      return sliceIterator(arr, i);\n    } else {\n      throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n    }\n  };\n}();\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/typeof.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/helpers/typeof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"../../node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"../../node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***********************************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"../../node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!****************************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "../../node_modules/babel-runtime/regenerator/index.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/babel-runtime/regenerator/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../../node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/babel-runtime/regenerator/index.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/get-iterator.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/get-iterator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"../../node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"../../node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/is-iterable.js":
/*!****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/is-iterable.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"../../node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.is-iterable */ \"../../node_modules/core-js/library/modules/core.is-iterable.js\");\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/is-iterable.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/assign.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/object/assign.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"../../node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/create.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/object/create.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"../../node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/define-property.js":
/*!***************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/object/define-property.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"../../node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"../../node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/promise.js":
/*!************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/promise.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"../../node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"../../node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"../../node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"../../node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"../../node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"../../node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/index.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/symbol/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"../../node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"../../node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"../../node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"../../node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/iterator.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"../../node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"../../node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"../../node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_a-function.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_a-function.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-instance.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_an-instance.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-object.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_an-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-includes.js":
/*!*************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_array-includes.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"../../node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_classof.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_classof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_cof.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_cof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_core.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_core.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ctx.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_ctx.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_defined.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_defined.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_descriptors.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_dom-create.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_dom-create.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-keys.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_enum-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_export.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_export.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_fails.js":
/*!****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_fails.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_for-of.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_for-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"../../node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"../../node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"../../node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"../../node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_global.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_global.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_has.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_has.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_hide.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_hide.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_html.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_html.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"../../node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_invoke.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_invoke.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iobject.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iobject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array-iter.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array.js":
/*!*******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-array.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-object.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-call.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-call.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-create.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-define.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-define.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../../node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"../../node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"../../node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-detect.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-step.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-step.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iterators.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_iterators.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_library.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_library.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_meta.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_meta.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_microtask.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_microtask.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"../../node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    var promise = Promise.resolve();\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*********************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-assign.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-assign.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-create.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-create.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"../../node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"../../node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"../../node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dp.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-dp.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../../node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dps.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-dps.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopd.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../../node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!**************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"../../node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gops.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gops.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gpo.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"../../node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!*******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"../../node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"../../node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"../../node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"../../node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-pie.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-pie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_perform.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_perform.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_promise-resolve.js":
/*!**************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"../../node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_property-desc.js":
/*!************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_property-desc.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine-all.js":
/*!***********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine.js":
/*!*******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_redefine.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-proto.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-proto.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-species.js":
/*!**********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-species.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared-key.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_shared-key.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared.js":
/*!*****************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_shared.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_species-constructor.js":
/*!******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_species-constructor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_string-at.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_string-at.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_task.js":
/*!***************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_task.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"../../node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"../../node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"../../node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"../../node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-integer.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-integer.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-iobject.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"../../node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-length.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-length.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"../../node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-object.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"../../node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-primitive.js":
/*!***********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_uid.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_uid.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-define.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks-define.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../../node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"../../node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-ext.js":
/*!******************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks-ext.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**********************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"../../node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.get-iterator.js":
/*!***************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"../../node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.is-iterable.js":
/*!**************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"../../node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\").isIterable = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/core.is-iterable.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.array.iterator.js":
/*!****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"../../node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"../../node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"../../node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.assign.js":
/*!***************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"../../node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.create.js":
/*!***************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.create.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!************************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*************************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"../../node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.to-string.js":
/*!******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.promise.js":
/*!*********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.promise.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"../../node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../../node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"../../node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../../node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"../../node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"../../node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"../../node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"../../node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"../../node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"../../node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"../../node_modules/core-js/library/modules/_perform.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"../../node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"../../node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"../../node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"../../node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"../../node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"../../node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.symbol.js":
/*!********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.symbol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../../node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"../../node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"../../node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"../../node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"../../node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"../../node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"../../node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"../../node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"../../node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"../../node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"../../node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"../../node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"../../node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../../node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"../../node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../../node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../../node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"../../node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"../../node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"../../node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"../../node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"../../node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"../../node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"../../node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"../../node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"../../node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../../node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"../../node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"../../node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.try.js":
/*!*************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"../../node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"../../node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"../../node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***********************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"../../node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!*******************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"../../node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "../../node_modules/core-js/library/modules/web.dom.iterable.js":
/*!**************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"../../node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"../../node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../../node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"../../node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"../../node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "../../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***********************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// the whatwg-fetch polyfill installs the fetch() function\n// on the global object (window or self)\n//\n// Return that as the export for use in Webpack, Browserify etc.\n__webpack_require__(/*! whatwg-fetch */ \"../../node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = self.fetch.bind(self);\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/isomorphic-fetch/fetch-npm-browserify.js?");

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/process/browser.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/process/browser.js?");

/***/ }),

/***/ "../../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*****************************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/util/node_modules/inherits/inherits_browser.js?");

/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!**************************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/util/support/isBufferBrowser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/util/support/isBufferBrowser.js?");

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!*******************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/util/util.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  // Allow for deprecating things in the process of starting up.\n  if (isUndefined(global.process)) {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  if (process.noDeprecation === true) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ \"../../node_modules/util/support/isBufferBrowser.js\");\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(/*! inherits */ \"../../node_modules/util/node_modules/inherits/inherits_browser.js\");\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/util/util.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/(webpack)/buildin/global.js?");

/***/ }),

/***/ "../../node_modules/whatwg-fetch/fetch.js":
/*!****************************************************************!*\
  !*** /home/aviraj/colonyJS/node_modules/whatwg-fetch/fetch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(self) {\n  'use strict';\n\n  if (self.fetch) {\n    return\n  }\n\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob: 'FileReader' in self && 'Blob' in self && (function() {\n      try {\n        new Blob()\n        return true\n      } catch(e) {\n        return false\n      }\n    })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ]\n\n    var isDataView = function(obj) {\n      return obj && DataView.prototype.isPrototypeOf(obj)\n    }\n\n    var isArrayBufferView = ArrayBuffer.isView || function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name)\n    }\n    if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value)\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift()\n        return {done: value === undefined, value: value}\n      }\n    }\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      }\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {}\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value)\n      }, this)\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1])\n      }, this)\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name])\n      }, this)\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name)\n    value = normalizeValue(value)\n    var oldValue = this.map[name]\n    this.map[name] = oldValue ? oldValue+','+value : value\n  }\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)]\n  }\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name)\n    return this.has(name) ? this.map[name] : null\n  }\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  }\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value)\n  }\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this)\n      }\n    }\n  }\n\n  Headers.prototype.keys = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push(name) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.values = function() {\n    var items = []\n    this.forEach(function(value) { items.push(value) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.entries = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push([name, value]) })\n    return iteratorFor(items)\n  }\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result)\n      }\n      reader.onerror = function() {\n        reject(reader.error)\n      }\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsArrayBuffer(blob)\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsText(blob)\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf)\n    var chars = new Array(view.length)\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i])\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength)\n      view.set(new Uint8Array(buf))\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false\n\n    this._initBody = function(body) {\n      this._bodyInit = body\n      if (!body) {\n        this._bodyText = ''\n      } else if (typeof body === 'string') {\n        this._bodyText = body\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString()\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer)\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer])\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body)\n      } else {\n        throw new Error('unsupported BodyInit type')\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8')\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type)\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n        }\n      }\n    }\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this)\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      }\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      }\n    }\n\n    this.text = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    }\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      }\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    }\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase()\n    return (methods.indexOf(upcased) > -1) ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {}\n    var body = options.body\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url\n      this.credentials = input.credentials\n      if (!options.headers) {\n        this.headers = new Headers(input.headers)\n      }\n      this.method = input.method\n      this.mode = input.mode\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit\n        input.bodyUsed = true\n      }\n    } else {\n      this.url = String(input)\n    }\n\n    this.credentials = options.credentials || this.credentials || 'omit'\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers)\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET')\n    this.mode = options.mode || this.mode || null\n    this.referrer = null\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body)\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, { body: this._bodyInit })\n  }\n\n  function decode(body) {\n    var form = new FormData()\n    body.trim().split('&').forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers()\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        headers.append(key, value)\n      }\n    })\n    return headers\n  }\n\n  Body.call(Request.prototype)\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {}\n    }\n\n    this.type = 'default'\n    this.status = options.status === undefined ? 200 : options.status\n    this.ok = this.status >= 200 && this.status < 300\n    this.statusText = 'statusText' in options ? options.statusText : 'OK'\n    this.headers = new Headers(options.headers)\n    this.url = options.url || ''\n    this._initBody(bodyInit)\n  }\n\n  Body.call(Response.prototype)\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  }\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''})\n    response.type = 'error'\n    return response\n  }\n\n  var redirectStatuses = [301, 302, 303, 307, 308]\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  }\n\n  self.Headers = Headers\n  self.Request = Request\n  self.Response = Response\n\n  self.fetch = function(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init)\n      var xhr = new XMLHttpRequest()\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        }\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n        var body = 'response' in xhr ? xhr.response : xhr.responseText\n        resolve(new Response(body, options))\n      }\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.open(request.method, request.url, true)\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob'\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n    })\n  }\n  self.fetch.polyfill = true\n})(typeof self !== 'undefined' ? self : this);\n\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp//home/aviraj/colonyJS/node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "../colony-js-contract-loader/lib/ContractLoader.js":
/*!**********************************************************!*\
  !*** ../colony-js-contract-loader/lib/ContractLoader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"../../node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ \"../../node_modules/babel-runtime/helpers/objectWithoutProperties.js\");\n\nvar _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../../node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../../node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../../node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _defaults = __webpack_require__(/*! ./defaults */ \"../colony-js-contract-loader/lib/defaults.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar assert = __webpack_require__(/*! assert */ \"../../node_modules/assert/assert.js\");\n\nvar validateField = function validateField(assertion, field) {\n  return assert(assertion, 'Invalid contract definition: ' + field + ' is missing or invalid');\n};\n\nvar ContractLoader = function () {\n  (0, _createClass3.default)(ContractLoader, null, [{\n    key: 'defaultTransform',\n\n    /**\n     * The default `transform` function is simply returns the input object as the\n     * default behaviour.\n     */\n    value: function defaultTransform() {\n      /* eslint-disable no-unused-vars */\n      return function (inputObj, query, requiredProps) {\n        return inputObj;\n      };\n      /* eslint-enable no-unused-vars */\n    }\n  }, {\n    key: 'validateContractDefinition',\n    value: function validateContractDefinition(contractDef, requiredProps) {\n      assert(Object.getOwnPropertyNames(contractDef).length > 0, 'Missing contract definition');\n\n      var address = contractDef.address,\n          abi = contractDef.abi;\n\n      if (requiredProps.address) validateField(typeof address === 'string' && address.length > 0, 'address');\n\n      if (requiredProps.bytecode) validateField(typeof contractDef.bytecode === 'string' && contractDef.bytecode.length > 0, 'bytecode');\n\n      if (requiredProps.abi) validateField(Array.isArray(abi) && abi.length > 0, 'abi');\n\n      return true;\n    }\n  }]);\n\n  function ContractLoader() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$transform = _ref.transform,\n        transform = _ref$transform === undefined ? this.constructor.defaultTransform() : _ref$transform;\n\n    (0, _classCallCheck3.default)(this, ContractLoader);\n\n    assert(typeof transform === 'function', 'A `transform` function must be provided');\n    this._transform = transform;\n  }\n  // eslint-disable-next-line class-methods-use-this\n\n\n  (0, _createClass3.default)(ContractLoader, [{\n    key: '_load',\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(query, requiredProps) {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                throw new Error('ContractLoader._load() is expected to be defined in a derived class');\n\n              case 1:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function _load(_x2, _x3) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return _load;\n    }()\n  }, {\n    key: 'load',\n    value: function () {\n      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(query) {\n        var requiredProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.DEFAULT_REQUIRED_CONTRACT_PROPS;\n        var contractName, contractAddress, routerName, routerAddress, otherQuery, firstQuery, result, routerContract;\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                contractName = query.contractName, contractAddress = query.contractAddress, routerName = query.routerName, routerAddress = query.routerAddress, otherQuery = (0, _objectWithoutProperties3.default)(query, ['contractName', 'contractAddress', 'routerName', 'routerAddress']);\n\n                if (contractName || contractAddress) {\n                  _context2.next = 3;\n                  break;\n                }\n\n                throw new TypeError('The field `contractName` or `contractAddress` must be supplied');\n\n              case 3:\n\n                // Load the contract definition by either the contract name or address\n                firstQuery = (0, _extends3.default)({}, contractName ? { contractName: contractName } : { contractAddress: contractAddress }, otherQuery);\n                _context2.next = 6;\n                return this._load(firstQuery, requiredProps);\n\n              case 6:\n                result = _context2.sent;\n\n                if (!(result == null)) {\n                  _context2.next = 9;\n                  break;\n                }\n\n                throw new Error('Unable to load contract definition (' + JSON.stringify(firstQuery) + ')');\n\n              case 9:\n                if (!contractAddress) {\n                  _context2.next = 13;\n                  break;\n                }\n\n                // If we have a specific contractAddress, set it directly.\n                result.address = contractAddress;\n                _context2.next = 22;\n                break;\n\n              case 13:\n                if (!routerAddress) {\n                  _context2.next = 17;\n                  break;\n                }\n\n                // If we have the router address, set it directly.\n                result.address = routerAddress;\n                _context2.next = 22;\n                break;\n\n              case 17:\n                if (!routerName) {\n                  _context2.next = 22;\n                  break;\n                }\n\n                _context2.next = 20;\n                return this._load((0, _extends3.default)({}, otherQuery, {\n                  contractName: routerName\n                }), requiredProps);\n\n              case 20:\n                routerContract = _context2.sent;\n\n                if (routerContract != null) result.address = routerContract.address;\n\n              case 22:\n\n                this.constructor.validateContractDefinition(result, requiredProps);\n\n                return _context2.abrupt('return', result);\n\n              case 24:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function load(_x5) {\n        return _ref3.apply(this, arguments);\n      }\n\n      return load;\n    }()\n  }]);\n  return ContractLoader;\n}();\n\nexports.default = ContractLoader;\n//# sourceMappingURL=ContractLoader.js.map\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/../colony-js-contract-loader/lib/ContractLoader.js?");

/***/ }),

/***/ "../colony-js-contract-loader/lib/defaults.js":
/*!****************************************************!*\
  !*** ../colony-js-contract-loader/lib/defaults.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n// eslint-disable-next-line import/prefer-default-export\nvar DEFAULT_REQUIRED_CONTRACT_PROPS = exports.DEFAULT_REQUIRED_CONTRACT_PROPS = {\n  abi: true,\n  address: false,\n  bytecode: false\n};\n//# sourceMappingURL=defaults.js.map\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/../colony-js-contract-loader/lib/defaults.js?");

/***/ }),

/***/ "../colony-js-contract-loader/lib/index.js":
/*!*************************************************!*\
  !*** ../colony-js-contract-loader/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ContractLoader = __webpack_require__(/*! ./ContractLoader */ \"../colony-js-contract-loader/lib/ContractLoader.js\");\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ContractLoader).default;\n  }\n});\n\nvar _truffleTransform = __webpack_require__(/*! ./transforms/truffleTransform */ \"../colony-js-contract-loader/lib/transforms/truffleTransform.js\");\n\nObject.defineProperty(exports, 'truffleTransform', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_truffleTransform).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/../colony-js-contract-loader/lib/index.js?");

/***/ }),

/***/ "../colony-js-contract-loader/lib/transforms/truffleTransform.js":
/*!***********************************************************************!*\
  !*** ../colony-js-contract-loader/lib/transforms/truffleTransform.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = truffleTransform;\nfunction truffleTransform() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$abi = _ref.abi,\n      abi = _ref$abi === undefined ? [] : _ref$abi,\n      bytecode = _ref.bytecode,\n      _ref$networks = _ref.networks,\n      networks = _ref$networks === undefined ? {} : _ref$networks;\n\n  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      network = _ref2.network;\n\n  var address = void 0;\n\n  // Some clients (like Ganache) create IDs as integers; normalise them\n  var networkKeys = Object.keys(networks).map(function (id) {\n    return '' + id;\n  });\n\n  if (network && networkKeys.length) {\n    if (!networks[network]) throw new Error('Network ID ' + network + ' not found in contract');\n    address = networks[network].address;\n  } else {\n    var _ref3 = networks[networkKeys[networkKeys.length - 1]] || {};\n    // Pick the last network (assumed to be the most recent)\n\n\n    address = _ref3.address;\n  }\n\n  return {\n    abi: abi,\n    address: address,\n    bytecode: bytecode\n  };\n}\n//# sourceMappingURL=truffleTransform.js.map\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/../colony-js-contract-loader/lib/transforms/truffleTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _HttpLoader = __webpack_require__(/*! ./loaders/HttpLoader */ \"./src/loaders/HttpLoader.js\");\n\nObject.defineProperty(exports, 'HttpLoader', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_HttpLoader).default;\n  }\n});\n\nvar _EtherscanLoader = __webpack_require__(/*! ./loaders/EtherscanLoader */ \"./src/loaders/EtherscanLoader.js\");\n\nObject.defineProperty(exports, 'EtherscanLoader', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_EtherscanLoader).default;\n  }\n});\n\nvar _TrufflepigLoader = __webpack_require__(/*! ./loaders/TrufflepigLoader */ \"./src/loaders/TrufflepigLoader.js\");\n\nObject.defineProperty(exports, 'TrufflepigLoader', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_TrufflepigLoader).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/./src/index.js?");

/***/ }),

/***/ "./src/loaders/EtherscanLoader.js":
/*!****************************************!*\
  !*** ./src/loaders/EtherscanLoader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"../../node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ \"../../node_modules/babel-runtime/helpers/objectWithoutProperties.js\");\n\nvar _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../../node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"../../node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ \"../../node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nvar _HttpLoader2 = __webpack_require__(/*! ./HttpLoader */ \"./src/loaders/HttpLoader.js\");\n\nvar _HttpLoader3 = _interopRequireDefault(_HttpLoader2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT_ENDPOINT = 'https://api.etherscan.io/api?module=contract&action=getabi&address=%%ADDRESS%%'; // eslint-disable-line max-len\n\nfunction etherscanTransform(response) {\n  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  // TODO later: consider building some generalized response validators for\n  // common services like etherscan, infura, jsonrpc, etc.\n  if ((typeof response === 'undefined' ? 'undefined' : (0, _typeof3.default)(response)) !== 'object' || !Object.hasOwnProperty.call(response, 'status')) {\n    throw new Error('Malformed response from Etherscan');\n  }\n\n  var abi = response.result,\n      status = response.status;\n\n\n  if (status !== '1') throw new Error('Erroneous response from Etherscan (status: ' + status + ')');\n\n  var parsed = {\n    abi: abi,\n    address: query.contractAddress,\n    bytecode: ''\n  };\n\n  // Etherscan's API does not return a bytecode property, so we will employ a\n  // custom getter (which throws an error) in order to make this clear.\n  // $FlowFixMe: we don't want to assign a value\n  Object.defineProperty(parsed, 'bytecode', {\n    enumerable: false,\n    configurable: false,\n    get: function get() {\n      throw new Error('Etherscan does not currently provide contract bytecode');\n    }\n  });\n\n  return parsed;\n}\n\nvar EtherscanLoader = function (_HttpLoader) {\n  (0, _inherits3.default)(EtherscanLoader, _HttpLoader);\n\n  function EtherscanLoader() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var _ref$transform = _ref.transform,\n        transform = _ref$transform === undefined ? etherscanTransform : _ref$transform,\n        _ref$endpoint = _ref.endpoint,\n        endpoint = _ref$endpoint === undefined ? DEFAULT_ENDPOINT : _ref$endpoint,\n        rest = (0, _objectWithoutProperties3.default)(_ref, ['transform', 'endpoint']);\n    (0, _classCallCheck3.default)(this, EtherscanLoader);\n    return (0, _possibleConstructorReturn3.default)(this, (EtherscanLoader.__proto__ || Object.getPrototypeOf(EtherscanLoader)).call(this, (0, _extends3.default)({ endpoint: endpoint, transform: transform }, rest)));\n  }\n\n  return EtherscanLoader;\n}(_HttpLoader3.default);\n\nexports.default = EtherscanLoader;\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/./src/loaders/EtherscanLoader.js?");

/***/ }),

/***/ "./src/loaders/HttpLoader.js":
/*!***********************************!*\
  !*** ./src/loaders/HttpLoader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../../node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../../node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../../node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"../../node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _assert = __webpack_require__(/*! assert */ \"../../node_modules/assert/assert.js\");\n\nvar _assert2 = _interopRequireDefault(_assert);\n\n__webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nvar _colonyJsContractLoader = __webpack_require__(/*! @colony/colony-js-contract-loader */ \"../colony-js-contract-loader/lib/index.js\");\n\nvar _colonyJsContractLoader2 = _interopRequireDefault(_colonyJsContractLoader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HttpLoader = function (_ContractLoader) {\n  (0, _inherits3.default)(HttpLoader, _ContractLoader);\n\n  function HttpLoader() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        endpoint = _ref.endpoint,\n        transform = _ref.transform;\n\n    (0, _classCallCheck3.default)(this, HttpLoader);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (HttpLoader.__proto__ || Object.getPrototypeOf(HttpLoader)).call(this, { transform: transform }));\n\n    (0, _assert2.default)(typeof endpoint === 'string' && endpoint, 'An `endpoint` option must be provided');\n    _this._endpoint = endpoint;\n    return _this;\n  }\n\n  (0, _createClass3.default)(HttpLoader, [{\n    key: 'resolveEndpointResource',\n    value: function resolveEndpointResource(_ref2) {\n      var contractName = _ref2.contractName,\n          contractAddress = _ref2.contractAddress,\n          version = _ref2.version;\n\n      return this._endpoint.replace('%%NAME%%', contractName || '').replace('%%ADDRESS%%', contractAddress || '')\n      // `version` can be a string or an integer\n      .replace('%%VERSION%%', version != null && (typeof version === 'string' || Number(parseInt(version, 10)) === version) ? version.toString() : '');\n    }\n  }, {\n    key: '_load',\n    value: function () {\n      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n        var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n        var requiredProps = arguments[1];\n        var throwError, response, json, contractDef;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // Provide some context for errors thrown by lower-level functions\n                throwError = function throwError(action, error) {\n                  throw new Error('Unable to ' + action + ' for contract ' + (query.contractName || query.contractAddress || '') + ': ' + (error.message || error));\n                };\n\n                response = void 0;\n                _context.prev = 2;\n                _context.next = 5;\n                return fetch(this.resolveEndpointResource(query));\n\n              case 5:\n                response = _context.sent;\n                _context.next = 11;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context['catch'](2);\n\n                throwError('fetch resource', _context.t0);\n\n              case 11:\n                json = void 0;\n                _context.prev = 12;\n                _context.t1 = response && response.json;\n\n                if (!_context.t1) {\n                  _context.next = 18;\n                  break;\n                }\n\n                _context.next = 17;\n                return response.json();\n\n              case 17:\n                _context.t1 = _context.sent;\n\n              case 18:\n                json = _context.t1;\n                _context.next = 24;\n                break;\n\n              case 21:\n                _context.prev = 21;\n                _context.t2 = _context['catch'](12);\n\n                throwError('get JSON', _context.t2);\n\n              case 24:\n                contractDef = void 0;\n\n                try {\n                  contractDef = this._transform(json, query, requiredProps);\n                } catch (error) {\n                  throwError('transform contract definition', error);\n                }\n                return _context.abrupt('return', contractDef);\n\n              case 27:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[2, 8], [12, 21]]);\n      }));\n\n      function _load() {\n        return _ref3.apply(this, arguments);\n      }\n\n      return _load;\n    }()\n  }]);\n  return HttpLoader;\n}(_colonyJsContractLoader2.default);\n\nexports.default = HttpLoader;\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/./src/loaders/HttpLoader.js?");

/***/ }),

/***/ "./src/loaders/TrufflepigLoader.js":
/*!*****************************************!*\
  !*** ./src/loaders/TrufflepigLoader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"../../node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"../../node_modules/babel-runtime/helpers/slicedToArray.js\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../../node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../../node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"../../node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\n__webpack_require__(/*! isomorphic-fetch */ \"../../node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nvar _colonyJsContractLoader = __webpack_require__(/*! @colony/colony-js-contract-loader */ \"../colony-js-contract-loader/lib/index.js\");\n\nvar _HttpLoader2 = __webpack_require__(/*! ./HttpLoader */ \"./src/loaders/HttpLoader.js\");\n\nvar _HttpLoader3 = _interopRequireDefault(_HttpLoader2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DEFAULT_HOST = 'http://127.0.0.1:3030';\n\nvar DEFAULT_ENDPOINT = DEFAULT_HOST + '/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%'; // eslint-disable-line max-len\n\nvar TrufflepigLoader = function (_HttpLoader) {\n  (0, _inherits3.default)(TrufflepigLoader, _HttpLoader);\n\n  function TrufflepigLoader() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$endpoint = _ref.endpoint,\n        endpoint = _ref$endpoint === undefined ? DEFAULT_ENDPOINT : _ref$endpoint;\n\n    (0, _classCallCheck3.default)(this, TrufflepigLoader);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (TrufflepigLoader.__proto__ || Object.getPrototypeOf(TrufflepigLoader)).call(this, { transform: _colonyJsContractLoader.truffleTransform, endpoint: endpoint }));\n\n    var _this$_endpoint$split = _this._endpoint.split('/contracts'),\n        _this$_endpoint$split2 = (0, _slicedToArray3.default)(_this$_endpoint$split, 1),\n        host = _this$_endpoint$split2[0];\n\n    _this._host = host;\n    return _this;\n  }\n\n  (0, _createClass3.default)(TrufflepigLoader, [{\n    key: 'getAccount',\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {\n        var response, accounts, addresses, address, privateKey;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(this._host + '/accounts');\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                accounts = _context.sent;\n                addresses = Object.keys(accounts);\n\n                if (addresses[index]) {\n                  _context.next = 9;\n                  break;\n                }\n\n                throw new Error('Account for index ' + index + ' not found');\n\n              case 9:\n                address = addresses[index];\n                privateKey = accounts[address];\n                return _context.abrupt('return', { address: address, privateKey: privateKey });\n\n              case 12:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getAccount(_x2) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return getAccount;\n    }()\n  }]);\n  return TrufflepigLoader;\n}(_HttpLoader3.default);\n\nexports.default = TrufflepigLoader;\n\n//# sourceURL=webpack://colonyJSContractLoaderHttp/./src/loaders/TrufflepigLoader.js?");

/***/ })

/******/ });
});