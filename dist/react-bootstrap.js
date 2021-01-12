(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 266);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(154)();
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(201);

var _createChainableTypeChecker = __webpack_require__(43);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(196);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(168);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(12);

var getOwnPropertyDescriptor = __webpack_require__(128).f;

var isForced = __webpack_require__(129);

var path = __webpack_require__(16);

var bind = __webpack_require__(65);

var createNonEnumerableProperty = __webpack_require__(26);

var has = __webpack_require__(24);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();

        case 1:
          return new NativeConstructor(a);

        case 2:
          return new NativeConstructor(a, b);
      }

      return new NativeConstructor(a, b, c);
    }

    return NativeConstructor.apply(this, arguments);
  };

  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;
  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key]; // export native or implementation

    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context

    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global); // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
      else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty); // default case
        else resultProperty = sourceProperty; // add a flag to not completely full polyfills

    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      } // export virtual prototype methods


      path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */
function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  } // Numbers


  if ('number' === typeof searchInput) return names[searchInput]; // Everything else (cast to string)

  var search = String(searchInput); // check codes

  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey; // check aliases

  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey; // weird character?

  if (search.length === 1) return search.charCodeAt(0);
  return undefined;
}
/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */


keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode;

    if (keyCode === null || keyCode === undefined) {
      return false;
    }

    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()];

      if (foundNamedKey) {
        return foundNamedKey === keyCode;
      } // check aliases


      var foundNamedKey = aliases[nameOrCode.toLowerCase()];

      if (foundNamedKey) {
        return foundNamedKey === keyCode;
      }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }

    return false;
  }
};

exports = module.exports = keyCode;
/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}; // Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};
/*!
 * Programatically add the following
 */
// lower case chars

for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32; // numbers


for (var i = 48; i < 58; i++) codes[i - 48] = i; // function keys


for (i = 1; i < 13; i++) codes['f' + i] = i + 111; // numpad keys


for (i = 0; i < 10; i++) codes['numpad ' + i] = i + 96;
/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */


var names = exports.names = exports.title = {}; // title for backward compat
// Create reverse mapping

for (i in codes) names[codes[i]] = i; // Add aliases


for (var alias in aliases) {
  codes[alias] = aliases[alias];
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line no-undef
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
function () {
  return this;
}() || Function('return this')();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(127)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var shared = __webpack_require__(95);

var has = __webpack_require__(24);

var uid = __webpack_require__(96);

var NATIVE_SYMBOL = __webpack_require__(98);

var USE_SYMBOL_AS_UID = __webpack_require__(143);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(16);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (false) {}

module.exports = warning;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(193);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactDom = _interopRequireDefault(__webpack_require__(10));

var _reactLifecyclesCompat = __webpack_require__(79);

var _PropTypes = __webpack_require__(226);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var fails = __webpack_require__(13);

var has = __webpack_require__(24);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) {
  throw it;
};

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;
  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = {
      length: -1
    };
    if (ACCESSORS) defineProperty(O, 1, {
      enumerable: true,
      get: thrower
    });else O[1] = 1;
    method.call(O, argument0, argument1);
  });
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var definePropertyModule = __webpack_require__(53);

var createPropertyDescriptor = __webpack_require__(49);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(156);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(43);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;
    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);

      if (result != null) {
        error = result;
      }
    });
    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}

module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;

function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(52); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(109));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(213));

var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(215));

var _removeStyle = _interopRequireDefault(__webpack_require__(216));

var _properties = __webpack_require__(76);

var _isTransform = _interopRequireDefault(__webpack_require__(217));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(50);

var requireObjectCoercible = __webpack_require__(52);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(67);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(65);

var IndexedObject = __webpack_require__(50);

var toObject = __webpack_require__(32);

var toLength = __webpack_require__(39);

var arraySpeciesCreate = __webpack_require__(97);

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__(33);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(265);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _activeElement = __webpack_require__(80);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__(27);

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = __webpack_require__(20);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(58);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _deprecated = __webpack_require__(241);

var _deprecated2 = _interopRequireDefault(_deprecated);

var _elementType = __webpack_require__(3);

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

var _ModalManager = __webpack_require__(243);

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _Portal = __webpack_require__(112);

var _Portal2 = _interopRequireDefault(_Portal);

var _RefHolder = __webpack_require__(249);

var _RefHolder2 = _interopRequireDefault(_RefHolder);

var _addEventListener = __webpack_require__(110);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _addFocusListener = __webpack_require__(250);

var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

var _getContainer = __webpack_require__(60);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* eslint-disable react/prop-types */


var modalManager = new _ModalManager2.default();
/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.omitProps = function omitProps(props, propTypes) {
    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });
    return newProps;
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        container = _props.container,
        children = _props.children,
        Transition = _props.transition,
        backdrop = _props.backdrop,
        className = _props.className,
        style = _props.style,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered;

    var dialog = _react2.default.Children.only(children);

    var filteredProps = this.omitProps(this.props, Modal.propTypes);
    var mountModal = show || Transition && !this.state.exited;

    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;

    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        'in': show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }

    return _react2.default.createElement(_Portal2.default, {
      ref: this.setMountNode,
      container: container,
      onRendered: this.onPortalRendered
    }, _react2.default.createElement('div', _extends({
      ref: this.setModalNodeRef,
      role: role || 'dialog'
    }, filteredProps, {
      style: style,
      className: className
    }), backdrop && this.renderBackdrop(), _react2.default.createElement(_RefHolder2.default, {
      ref: this.setDialogRef
    }, dialog)));
  };

  Modal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({
        exited: false
      });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({
        exited: true
      });
    }
  };

  Modal.prototype.UNSAFE_componentWillUpdate = function UNSAFE_componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  };

  Modal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;

    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        show = _props2.show,
        transition = _props2.transition;
    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  Modal.prototype.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) {
      return;
    }

    var dialogElement = this.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      this.lastFocus = currentActiveElement;

      if (!dialogElement.hasAttribute('tabIndex')) {
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of ' + 'assistive technologies, the tabIndex of the node is being set ' + 'to "-1".');
        dialogElement.setAttribute('tabIndex', -1);
      }

      dialogElement.focus();
    }
  };

  Modal.prototype.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  Modal.prototype.getDialogElement = function getDialogElement() {
    return _reactDom2.default.findDOMNode(this.dialog);
  };

  Modal.prototype.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  return Modal;
}(_react2.default.Component);

Modal.propTypes = _extends({}, _Portal2.default.propTypes, {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes2.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes2.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes2.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes2.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes2.default.func,

  /**
   * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   * @deprecated
   */
  onEscapeKeyUp: (0, _deprecated2.default)(_propTypes2.default.func, 'Please use onEscapeKeyDown instead for consistency'),

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes2.default.func,

  /**
   * A style object for the backdrop component.
   */
  backdropStyle: _propTypes2.default.object,

  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName: _propTypes2.default.string,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes2.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes2.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType2.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType2.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes2.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes2.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes2.default.object.isRequired
});
Modal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    exited: !this.props.show
  };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.backdropTransition;

    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = renderBackdrop({
      ref: backdropRef,
      style: backdropStyle,
      className: backdropClassName,
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(Transition, {
        appear: true,
        'in': _this2.props.show
      }, backdrop);
    }

    return backdrop;
  };

  this.onPortalRendered = function () {
    _this2.autoFocus();

    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };

  this.onShow = function () {
    var doc = (0, _ownerDocument2.default)(_this2);
    var container = (0, _getContainer2.default)(_this2.props.container, doc.body);

    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

    _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this2.handleDocumentKeyDown);
    _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this2.handleDocumentKeyUp);
    _this2._onFocusinListener = (0, _addFocusListener2.default)(_this2.enforceFocus);
  };

  this.onHide = function () {
    _this2.props.manager.remove(_this2);

    _this2._onDocumentKeydownListener.remove();

    _this2._onDocumentKeyupListener.remove();

    _this2._onFocusinListener.remove();

    if (_this2.props.restoreFocus) {
      _this2.restoreLastFocus();
    }
  };

  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };

  this.setModalNodeRef = function (ref) {
    _this2.modalNode = ref;
  };

  this.setDialogRef = function (ref) {
    _this2.dialog = ref;
  };

  this.handleHidden = function () {
    _this2.setState({
      exited: true
    });

    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick(e);
    }

    if (_this2.props.backdrop === true) {
      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyDown = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyDown) {
        _this2.props.onEscapeKeyDown(e);
      }

      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp(e);
      }
    }
  };

  this.checkForFocus = function () {
    if (_inDOM2.default) {
      _this2.lastFocus = (0, _activeElement2.default)();
    }
  };

  this.enforceFocus = function () {
    if (!_this2.props.enforceFocus || !_this2._isMounted || !_this2.isTopModal()) {
      return;
    }

    var dialogElement = _this2.getDialogElement();

    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      dialogElement.focus();
    }
  };
};

Modal.Manager = _ModalManager2.default;
exports.default = Modal;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(13);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

var classof = __webpack_require__(51);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var IE8_DOM_DEFINE = __webpack_require__(88);

var anObject = __webpack_require__(38);

var toPrimitive = __webpack_require__(64);

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(131);

var enumBugKeys = __webpack_require__(92); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

var wellKnownSymbol = __webpack_require__(14);

var V8_VERSION = __webpack_require__(72);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(74);

var classofRaw = __webpack_require__(51);

var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(43);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}

module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(66); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(95);

var uid = __webpack_require__(96);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var setGlobal = __webpack_require__(138);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var userAgent = __webpack_require__(99);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(64);

var definePropertyModule = __webpack_require__(53);

var createPropertyDescriptor = __webpack_require__(49);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = activeElement;

var _ownerDocument = _interopRequireDefault(__webpack_require__(33));

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }

  try {
    return doc.activeElement;
  } catch (e) {
    /* ie throws if no active element */
  }
}

module.exports = exports["default"];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _contains = __webpack_require__(27);

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = __webpack_require__(110);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var escapeKeyCode = 27;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */


var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.addEventListeners = function () {
      // Store the current event to avoid triggering handlers immediately
      // https://github.com/facebook/react/issues/20074
      _this.currentEvent = window.event;
      var event = _this.props.event;
      var doc = (0, _ownerDocument2.default)(_this); // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.

      _this.documentMouseCaptureListener = (0, _addEventListener2.default)(doc, event, _this.handleMouseCapture, true);
      _this.documentMouseListener = (0, _addEventListener2.default)(doc, event, _this.handleMouse);
      _this.documentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this.handleKeyUp);
    };

    _this.removeEventListeners = function () {
      if (_this.documentMouseCaptureListener) {
        _this.documentMouseCaptureListener.remove();
      }

      if (_this.documentMouseListener) {
        _this.documentMouseListener.remove();
      }

      if (_this.documentKeyupListener) {
        _this.documentKeyupListener.remove();
      }
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2.default)(_reactDom2.default.findDOMNode(_this), e.target);
    };

    _this.handleMouse = function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === _this.currentEvent) {
        _this.currentEvent = undefined;
        return;
      }

      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === _this.currentEvent) {
        _this.currentEvent = undefined;
        return;
      }

      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react2.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';
RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes2.default.func,

  /**
   * Children to render.
   */
  children: _propTypes2.default.element,

  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes2.default.oneOf(['click', 'mousedown'])
};
RootCloseWrapper.defaultProps = {
  event: 'click'
};
exports.default = RootCloseWrapper;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = __webpack_require__(59);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(33);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth; // Support: ie8, no innerWidth

  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  return doc.body.clientWidth < fullWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _on = _interopRequireDefault(__webpack_require__(77));

exports.on = _on.default;

var _off = _interopRequireDefault(__webpack_require__(78));

exports.off = _off.default;

var _filter = _interopRequireDefault(__webpack_require__(238));

exports.filter = _filter.default;

var _listen = _interopRequireDefault(__webpack_require__(240));

exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__(3);

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Portal = __webpack_require__(112);

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = __webpack_require__(255);

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = __webpack_require__(81);

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */


var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = {
      exited: !props.show
    };
    _this.onHiddenListener = _this.handleHidden.bind(_this);
    return _this;
  }

  Overlay.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({
        exited: false
      });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({
        exited: true
      });
    }
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        container = _props.container,
        containerPadding = _props.containerPadding,
        target = _props.target,
        placement = _props.placement,
        shouldUpdatePosition = _props.shouldUpdatePosition,
        rootClose = _props.rootClose,
        children = _props.children,
        Transition = _props.transition,
        props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']); // Don't un-render the overlay while it's transitioning out.


    var mountOverlay = props.show || Transition && !this.state.exited;

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children; // Position is be inner-most because it adds inline styles into the child,
    // which the other wrappers don't forward correctly.

    child = _react2.default.createElement(_Position2.default, {
      container: container,
      containerPadding: containerPadding,
      target: target,
      placement: placement,
      shouldUpdatePosition: shouldUpdatePosition
    }, child);

    if (Transition) {
      var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered; // This animates the child node by injecting props, so it must precede
      // anything that adds a wrapping div.

      child = _react2.default.createElement(Transition, {
        'in': props.show,
        appear: true,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.onHiddenListener,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, child);
    } // This goes after everything else because it adds a wrapping div.


    if (rootClose) {
      child = _react2.default.createElement(_RootCloseWrapper2.default, {
        onRootClose: props.onHide,
        event: props.rootCloseEvent
      }, child);
    }

    return _react2.default.createElement(_Portal2.default, {
      container: container
    }, child);
  };

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2.default.bool,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes2.default.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: _RootCloseWrapper2.default.propTypes.event,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes2.default.func;

    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(undefined, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType2.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2.default.func
});
exports.default = Overlay;
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);

var path = __webpack_require__(16);

module.exports = path.Object.assign;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var fails = __webpack_require__(13);

var createElement = __webpack_require__(89); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var isObject = __webpack_require__(23);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(37);

var toLength = __webpack_require__(39);

var toAbsoluteIndex = __webpack_require__(91); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(67);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(38);

var defineProperties = __webpack_require__(136);

var enumBugKeys = __webpack_require__(92);

var hiddenKeys = __webpack_require__(68);

var html = __webpack_require__(137);

var documentCreateElement = __webpack_require__(89);

var sharedKey = __webpack_require__(69);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(16);

var global = __webpack_require__(12);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(70);

var store = __webpack_require__(71);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 96 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

var isArray = __webpack_require__(55);

var wellKnownSymbol = __webpack_require__(14);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(94);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(145);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.indexOf ? indexOf : own;
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function () {
  /* empty */
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(171);

var global = __webpack_require__(12);

var isObject = __webpack_require__(23);

var createNonEnumerableProperty = __webpack_require__(26);

var objectHas = __webpack_require__(24);

var shared = __webpack_require__(71);

var sharedKey = __webpack_require__(69);

var hiddenKeys = __webpack_require__(68);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store, it) || {};
  };

  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var createIteratorConstructor = __webpack_require__(173);

var getPrototypeOf = __webpack_require__(105);

var setPrototypeOf = __webpack_require__(176);

var setToStringTag = __webpack_require__(106);

var createNonEnumerableProperty = __webpack_require__(26);

var redefine = __webpack_require__(178);

var wellKnownSymbol = __webpack_require__(14);

var IS_PURE = __webpack_require__(70);

var Iterators = __webpack_require__(41);

var IteratorsCore = __webpack_require__(104);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototypeOf = __webpack_require__(105);

var createNonEnumerableProperty = __webpack_require__(26);

var has = __webpack_require__(24);

var wellKnownSymbol = __webpack_require__(14);

var IS_PURE = __webpack_require__(70);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);

var toObject = __webpack_require__(32);

var sharedKey = __webpack_require__(69);

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(174);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(74);

var defineProperty = __webpack_require__(53).f;

var createNonEnumerableProperty = __webpack_require__(26);

var has = __webpack_require__(24);

var toString = __webpack_require__(175);

var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;

    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }

    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var objectKeys = __webpack_require__(54);

var toIndexedObject = __webpack_require__(37);

var propertyIsEnumerable = __webpack_require__(63).f; // `Object.{ entries, values }` methods implementation


var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(52);

var whitespaces = __webpack_require__(75);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(__webpack_require__(212));
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */


var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);
  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__(77);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(78);

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _inDOM = __webpack_require__(20);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(58);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(60);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _LegacyPortal = __webpack_require__(248);

var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */


var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getMountNode = function () {
      return _this._portalContainerNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    if (!_inDOM2.default) {
      return;
    }

    var container = this.props.container;

    if (typeof container === 'function') {
      container = container();
    }

    if (container && !_reactDom2.default.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return;
    }

    this.setContainer(container);
  };

  Portal.prototype.componentDidMount = function componentDidMount() {
    if (!this._portalContainerNode) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onRendered);
    } else if (this.props.onRendered) {
      this.props.onRendered();
    }
  };

  Portal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._portalContainerNode = null;
  };

  Portal.prototype.setContainer = function setContainer(container) {
    this._portalContainerNode = (0, _getContainer2.default)(container, (0, _ownerDocument2.default)(this).body);
  };

  Portal.prototype.render = function render() {
    return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onRendered: _propTypes2.default.func
};
exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = offset;

var _contains = _interopRequireDefault(__webpack_require__(27));

var _isWindow = _interopRequireDefault(__webpack_require__(59));

var _ownerDocument = _interopRequireDefault(__webpack_require__(33));

function offset(node) {
  var doc = (0, _ownerDocument.default)(node),
      win = (0, _isWindow.default)(doc),
      docElem = doc && doc.documentElement,
      box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  if (!doc) return; // Make sure it's not a disconnected DOM node

  if (!(0, _contains.default)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect(); // IE8 getBoundingClientRect doesn't support width & height

  box = {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: (box.width == null ? node.offsetWidth : box.width) || 0,
    height: (box.height == null ? node.offsetHeight : box.height) || 0
  };
  return box;
}

module.exports = exports["default"];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(59));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _end = _interopRequireDefault(__webpack_require__(211));

exports.end = _end.default;

var _properties = _interopRequireDefault(__webpack_require__(76));

exports.properties = _properties.default;
var _default = {
  end: _end.default,
  properties: _properties.default
};
exports.default = _default;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(261);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(87);

module.exports = parent;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var assign = __webpack_require__(130); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

/***/ }),
/* 127 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var propertyIsEnumerableModule = __webpack_require__(63);

var createPropertyDescriptor = __webpack_require__(49);

var toIndexedObject = __webpack_require__(37);

var toPrimitive = __webpack_require__(64);

var has = __webpack_require__(24);

var IE8_DOM_DEFINE = __webpack_require__(88);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(22);

var fails = __webpack_require__(13);

var objectKeys = __webpack_require__(54);

var getOwnPropertySymbolsModule = __webpack_require__(132);

var propertyIsEnumerableModule = __webpack_require__(63);

var toObject = __webpack_require__(32);

var IndexedObject = __webpack_require__(50);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({
    b: 1
  }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : nativeAssign;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);

var toIndexedObject = __webpack_require__(37);

var indexOf = __webpack_require__(90).indexOf;

var hiddenKeys = __webpack_require__(68);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(134);

module.exports = parent;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);

var path = __webpack_require__(16);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var DESCRIPTORS = __webpack_require__(22);

var create = __webpack_require__(93); // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create


$({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS
}, {
  create: create
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(22);

var definePropertyModule = __webpack_require__(53);

var anObject = __webpack_require__(38);

var objectKeys = __webpack_require__(54); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);

  return O;
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(94);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var createNonEnumerableProperty = __webpack_require__(26);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(140);

module.exports = parent;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(141);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.map ? map : own;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').map;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $map = __webpack_require__(40).map;

var arrayMethodHasSpeciesSupport = __webpack_require__(56);

var arrayMethodUsesToLength = __webpack_require__(25);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(98);

module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
&& !Symbol.sham // eslint-disable-next-line no-undef
&& typeof Symbol.iterator == 'symbol';

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(100);

module.exports = parent;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').indexOf;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $indexOf = __webpack_require__(90).indexOf;

var arrayMethodIsStrict = __webpack_require__(46);

var arrayMethodUsesToLength = __webpack_require__(25);

var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
}); // `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof

$({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(148);

module.exports = parent;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);

var path = __webpack_require__(16);

module.exports = path.Object.keys;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var toObject = __webpack_require__(32);

var nativeKeys = __webpack_require__(54);

var fails = __webpack_require__(13);

var FAILS_ON_PRIMITIVES = fails(function () {
  nativeKeys(1);
}); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys

$({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES
}, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(151);

module.exports = parent;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(152);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.concat ? concat : own;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').concat;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var fails = __webpack_require__(13);

var isArray = __webpack_require__(55);

var isObject = __webpack_require__(23);

var toObject = __webpack_require__(32);

var toLength = __webpack_require__(39);

var createProperty = __webpack_require__(73);

var arraySpeciesCreate = __webpack_require__(97);

var arrayMethodHasSpeciesSupport = __webpack_require__(56);

var wellKnownSymbol = __webpack_require__(14);

var V8_VERSION = __webpack_require__(72);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  concat: function concat(arg) {
    // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(155);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(157);

module.exports = parent;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(158);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.filter ? filter : own;
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(159);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').filter;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $filter = __webpack_require__(40).filter;

var arrayMethodHasSpeciesSupport = __webpack_require__(56);

var arrayMethodUsesToLength = __webpack_require__(25);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

var USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(161);

module.exports = parent;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__(162);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.some;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.some ? some : own;
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(163);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').some;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $some = __webpack_require__(40).some;

var arrayMethodIsStrict = __webpack_require__(46);

var arrayMethodUsesToLength = __webpack_require__(25);

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some'); // `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some

$({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD || !USES_TO_LENGTH
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(165);

module.exports = parent;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var every = __webpack_require__(166);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.every ? every : own;
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(167);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').every;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $every = __webpack_require__(40).every;

var arrayMethodIsStrict = __webpack_require__(46);

var arrayMethodUsesToLength = __webpack_require__(25);

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every'); // `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every

$({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD || !USES_TO_LENGTH
}, {
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);

var forEach = __webpack_require__(180);

var classof = __webpack_require__(57);

var ArrayPrototype = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.forEach // eslint-disable-next-line no-prototype-builtins
  || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);

var DOMIterables = __webpack_require__(179);

var global = __webpack_require__(12);

var classof = __webpack_require__(57);

var createNonEnumerableProperty = __webpack_require__(26);

var Iterators = __webpack_require__(41);

var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }

  Iterators[COLLECTION_NAME] = Iterators.Array;
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(37);

var addToUnscopables = __webpack_require__(101);

var Iterators = __webpack_require__(41);

var InternalStateModule = __webpack_require__(102);

var defineIterator = __webpack_require__(103);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var inspectSource = __webpack_require__(172);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(71);

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IteratorPrototype = __webpack_require__(104).IteratorPrototype;

var create = __webpack_require__(93);

var createPropertyDescriptor = __webpack_require__(49);

var setToStringTag = __webpack_require__(106);

var Iterators = __webpack_require__(41);

var returnThis = function () {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(74);

var classof = __webpack_require__(57); // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(38);

var aPossiblePrototype = __webpack_require__(177); // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(26);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
};

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(181);

module.exports = parent;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(182);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').forEach;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var forEach = __webpack_require__(183); // `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach


$({
  target: 'Array',
  proto: true,
  forced: [].forEach != forEach
}, {
  forEach: forEach
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $forEach = __webpack_require__(40).forEach;

var arrayMethodIsStrict = __webpack_require__(46);

var arrayMethodUsesToLength = __webpack_require__(25);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

module.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(185);

module.exports = parent;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);

var path = __webpack_require__(16);

module.exports = path.Object.entries;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var $entries = __webpack_require__(107).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(100);

module.exports = parent;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(189);

module.exports = parent;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(190);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.trim ? trim : own;
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('String').trim;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $trim = __webpack_require__(108).trim;

var forcedStringTrimMethod = __webpack_require__(192); // `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim


$({
  target: 'String',
  proto: true,
  forced: forcedStringTrimMethod('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(13);

var whitespaces = __webpack_require__(75);

var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
// of whitespaces and has a correct name

module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(194);

module.exports = parent;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195);

var path = __webpack_require__(16);

module.exports = path.Object.values;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var $values = __webpack_require__(107).values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(197);

module.exports = parent;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(198);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind : own;
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(199);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Function').bind;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var bind = __webpack_require__(200); // `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind


$({
  target: 'Function',
  proto: true
}, {
  bind: bind
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(66);

var isObject = __webpack_require__(23);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);

  var boundFunction = function bound()
  /* args... */
  {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(202);
} else {}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

exports.isConcurrentMode = A;

exports.isContextConsumer = function (a) {
  return z(a) === k;
};

exports.isContextProvider = function (a) {
  return z(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

exports.isLazy = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

exports.isPortal = function (a) {
  return z(a) === d;
};

exports.isProfiler = function (a) {
  return z(a) === g;
};

exports.isStrictMode = function (a) {
  return z(a) === f;
};

exports.isSuspense = function (a) {
  return z(a) === p;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

exports.typeOf = z;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(204);

module.exports = parent;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(205);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.reduce ? reduce : own;
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').reduce;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $reduce = __webpack_require__(207).left;

var arrayMethodIsStrict = __webpack_require__(46);

var arrayMethodUsesToLength = __webpack_require__(25);

var CHROME_VERSION = __webpack_require__(72);

var IS_NODE = __webpack_require__(208);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {
  1: 0
}); // Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce

$({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG
}, {
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(66);

var toObject = __webpack_require__(32);

var IndexedObject = __webpack_require__(50);

var toLength = __webpack_require__(39); // `Array.prototype.{ reduce, reduceRight }` methods implementation


var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }

    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);

var global = __webpack_require__(12);

module.exports = classof(global.process) == 'process';

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(210);

var path = __webpack_require__(16);

module.exports = path.setTimeout;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var global = __webpack_require__(12);

var userAgent = __webpack_require__(99);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout
  /* , ...arguments */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
}; // ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


$({
  global: true,
  bind: true,
  forced: MSIE
}, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _properties = _interopRequireDefault(__webpack_require__(76));

var _style = _interopRequireDefault(__webpack_require__(34));

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;
  if (!_properties.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties.default.end) {
    node.addEventListener(_properties.default.end, done, false);
    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;
var _default = onEnd;
exports.default = _default;

function parseDuration(node) {
  var str = (0, _style.default)(node, _properties.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

module.exports = exports["default"];

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(214));
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */


var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(109));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(219);

module.exports = parent;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(220);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.slice ? slice : own;
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(221);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').slice;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var isObject = __webpack_require__(23);

var isArray = __webpack_require__(55);

var toAbsoluteIndex = __webpack_require__(91);

var toLength = __webpack_require__(39);

var toIndexedObject = __webpack_require__(37);

var createProperty = __webpack_require__(73);

var wellKnownSymbol = __webpack_require__(14);

var arrayMethodHasSpeciesSupport = __webpack_require__(56);

var arrayMethodUsesToLength = __webpack_require__(25);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', {
  ACCESSORS: true,
  0: 0,
  1: 2
});
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

    result.length = n;
    return result;
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(223);

module.exports = parent;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(224);

var path = __webpack_require__(16);

module.exports = path.parseInt;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var parseIntImplementation = __webpack_require__(225); // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix


$({
  global: true,
  forced: parseInt != parseIntImplementation
}, {
  parseInt: parseIntImplementation
});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);

var trim = __webpack_require__(108).trim;

var whitespaces = __webpack_require__(75);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(228);

module.exports = parent;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(229);

__webpack_require__(231);

var path = __webpack_require__(16);

module.exports = path.Array.from;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var charAt = __webpack_require__(230).charAt;

var InternalStateModule = __webpack_require__(102);

var defineIterator = __webpack_require__(103);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(67);

var requireObjectCoercible = __webpack_require__(52); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var from = __webpack_require__(232);

var checkCorrectnessOfIteration = __webpack_require__(237);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.es/ecma262/#sec-array.from

$({
  target: 'Array',
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  from: from
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(65);

var toObject = __webpack_require__(32);

var callWithSafeIterationClosing = __webpack_require__(233);

var isArrayIteratorMethod = __webpack_require__(235);

var toLength = __webpack_require__(39);

var createProperty = __webpack_require__(73);

var getIteratorMethod = __webpack_require__(236); // `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from


module.exports = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();

    for (; !(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(38);

var iteratorClose = __webpack_require__(234); // call something on iterator step with safe closing on error


module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(38);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var Iterators = __webpack_require__(41);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(57);

var Iterators = __webpack_require__(41);

var wellKnownSymbol = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(__webpack_require__(27));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(239));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = qsa; // Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.

var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}

module.exports = exports["default"];

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(20));

var _on = _interopRequireDefault(__webpack_require__(77));

var _off = _interopRequireDefault(__webpack_require__(78));

var listen = function listen() {};

if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

var _warning = __webpack_require__(242);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var warned = {};

function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;
      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
      warned[messageKey] = true;
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
/* eslint-disable no-underscore-dangle */


function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

module.exports = exports['default'];

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function () {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);

    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class = __webpack_require__(244);

var _class2 = _interopRequireDefault(_class);

var _style = __webpack_require__(34);

var _style2 = _interopRequireDefault(_style);

var _scrollbarSize = __webpack_require__(62);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__(82);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__(247);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

function setContainerStyle(state, container) {
  var style = {
    overflow: 'hidden'
  }; // we are only interested in the actual `style` here
  // becasue we will override it

  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
  }

  (0, _style2.default)(container, style);
}

function removeContainerStyle(_ref, container) {
  var style = _ref.style;
  Object.keys(style).forEach(function (key) {
    return container.style[key] = style[key];
  });
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = function ModalManager() {
  var _this = this;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
      hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
      _ref2$handleContainer = _ref2.handleContainerOverflow,
      handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

  _classCallCheck(this, ModalManager);

  this.add = function (modal, container, className) {
    var modalIdx = _this.modals.indexOf(modal);

    var containerIdx = _this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = _this.modals.length;

    _this.modals.push(modal);

    if (_this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal.modalNode);
    }

    if (containerIdx !== -1) {
      _this.data[containerIdx].modals.push(modal);

      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing2.default)(container)
    };

    if (_this.handleContainerOverflow) {
      setContainerStyle(data, container);
    }

    data.classes.forEach(_class2.default.addClass.bind(null, container));

    _this.containers.push(container);

    _this.data.push(data);

    return modalIdx;
  };

  this.remove = function (modal) {
    var modalIdx = _this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = findContainer(_this.data, modal);
    var data = _this.data[containerIdx];
    var container = _this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);

    _this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container


    if (data.modals.length === 0) {
      data.classes.forEach(_class2.default.removeClass.bind(null, container));

      if (_this.handleContainerOverflow) {
        removeContainerStyle(data, container);
      }

      if (_this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal.modalNode);
      }

      _this.containers.splice(containerIdx, 1);

      _this.data.splice(containerIdx, 1);
    } else if (_this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].modalNode);
    }
  };

  this.isTopModal = function (modal) {
    return !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal;
  };

  this.hideSiblingNodes = hideSiblingNodes;
  this.handleContainerOverflow = handleContainerOverflow;
  this.modals = [];
  this.containers = [];
  this.data = [];
};

exports.default = ModalManager;
module.exports = exports['default'];

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _addClass = _interopRequireDefault(__webpack_require__(245));

exports.addClass = _addClass.default;

var _removeClass = _interopRequireDefault(__webpack_require__(246));

exports.removeClass = _removeClass.default;

var _hasClass = _interopRequireDefault(__webpack_require__(111));

exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(111));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);
  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) {
    return;
  }

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(58);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(60);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */


var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);

        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);

        _this._overlayTarget = null;
      }

      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {
      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children); // Save reference for future access.

      if (overlay !== null) {
        _this._mountOverlayTarget();

        var initialRender = !_this._overlayInstance;
        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function () {
          if (initialRender && _this.props.onRendered) {
            _this.props.onRendered();
          }
        });
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();

        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);

        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    this._renderOverlay();
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };

  Portal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);

      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);

      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;

    this._unrenderOverlay();

    this._unmountOverlayTarget();
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onRendered: _propTypes2.default.func
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = {
  children: _propTypes2.default.node
};
/**
 * Internal helper component to allow attaching a non-conflicting ref to a
 * child element that may not accept refs.
 */

var RefHolder = function (_React$Component) {
  _inherits(RefHolder, _React$Component);

  function RefHolder() {
    _classCallCheck(this, RefHolder);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RefHolder.prototype.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react2.default.Component);

RefHolder.propTypes = propTypes;
exports.default = RefHolder;
module.exports = exports['default'];

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */

function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);

    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);

    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }

  return {
    remove: remove
  };
}

module.exports = exports['default'];

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(252);

module.exports = parent;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(253);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.find ? find : own;
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(254);

var entryVirtual = __webpack_require__(17);

module.exports = entryVirtual('Array').find;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);

var $find = __webpack_require__(40).find;

var addToUnscopables = __webpack_require__(101);

var arrayMethodUsesToLength = __webpack_require__(25);

var FIND = 'find';
var SKIPS_HOLES = true;
var USES_TO_LENGTH = arrayMethodUsesToLength(FIND); // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find

$({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES || !USES_TO_LENGTH
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(58);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calculatePosition = __webpack_require__(256);

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getContainer = __webpack_require__(60);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * The Position component calculates the coordinates for its child, to position
 * it relative to a `target` component or node. Useful for creating callouts
 * and tooltips, the Position component injects a `style` props with `left` and
 * `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows
 * for giving your components a sense of directionality.
 */


var Position = function (_React$Component) {
  _inherits(Position, _React$Component);

  function Position(props, context) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.getTarget = function () {
      var target = _this.props.target;
      var targetElement = typeof target === 'function' ? target() : target;
      return targetElement && _reactDom2.default.findDOMNode(targetElement) || null;
    };

    _this.maybeUpdatePosition = function (placementChanged) {
      var target = _this.getTarget();

      if (!_this.props.shouldUpdatePosition && target === _this._lastTarget && !placementChanged) {
        return;
      }

      _this.updatePosition(target);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };
    _this._needsFlush = false;
    _this._lastTarget = null;
    return _this;
  }

  Position.prototype.componentDidMount = function componentDidMount() {
    this.updatePosition(this.getTarget());
  };

  Position.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps() {
    this._needsFlush = true;
  };

  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._needsFlush) {
      this._needsFlush = false;
      this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
    }
  };

  Position.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['children', 'className']);

    var _state = this.state,
        positionLeft = _state.positionLeft,
        positionTop = _state.positionTop,
        arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']); // These should not be forwarded to the child.


    delete props.target;
    delete props.container;
    delete props.containerPadding;
    delete props.shouldUpdatePosition;

    var child = _react2.default.Children.only(children);

    return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
      // FIXME: Don't forward `positionLeft` and `positionTop` via both props
      // and `props.style`.
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: (0, _classnames2.default)(className, child.props.className),
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  Position.prototype.updatePosition = function updatePosition(target) {
    this._lastTarget = target;

    if (!target) {
      this.setState({
        positionLeft: 0,
        positionTop: 0,
        arrowOffsetLeft: null,
        arrowOffsetTop: null
      });
      return;
    }

    var overlay = _reactDom2.default.findDOMNode(this);

    var container = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);
    this.setState((0, _calculatePosition2.default)(this.props.placement, overlay, target, container, this.props.containerPadding));
  };

  return Position;
}(_react2.default.Component);

Position.propTypes = {
  /**
   * A node, element, or function that returns either. The child will be
   * be positioned next to the `target` specified.
   */
  target: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * "offsetParent" of the component
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _propTypes2.default.number,

  /**
   * How to position the component relative to the target
   */
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Whether the position should be changed on each update
   */
  shouldUpdatePosition: _propTypes2.default.bool
};
Position.displayName = 'Position';
Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};
exports.default = Position;
module.exports = exports['default'];

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePosition;

var _offset = __webpack_require__(113);

var _offset2 = _interopRequireDefault(_offset);

var _position = __webpack_require__(257);

var _position2 = _interopRequireDefault(_position);

var _scrollTop = __webpack_require__(114);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _ownerDocument = __webpack_require__(42);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getContainerDimensions(containerNode) {
  var width = void 0,
      height = void 0,
      scroll = void 0;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;
    scroll = (0, _scrollTop2.default)((0, _ownerDocument2.default)(containerNode).documentElement) || (0, _scrollTop2.default)(containerNode);
  } else {
    var _getOffset = (0, _offset2.default)(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;
    scroll = (0, _scrollTop2.default)(containerNode);
  }

  return {
    width: width,
    height: height,
    scroll: scroll
  };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;
  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;
  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  var _getOffset2 = (0, _offset2.default)(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

  var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
  }

  return {
    positionLeft: positionLeft,
    positionTop: positionTop,
    arrowOffsetLeft: arrowOffsetLeft,
    arrowOffsetTop: arrowOffsetTop
  };
}

module.exports = exports['default'];

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = position;

var _extends2 = _interopRequireDefault(__webpack_require__(258));

var _offset = _interopRequireDefault(__webpack_require__(113));

var _offsetParent = _interopRequireDefault(__webpack_require__(259));

var _scrollTop = _interopRequireDefault(__webpack_require__(114));

var _scrollLeft = _interopRequireDefault(__webpack_require__(260));

var _style = _interopRequireDefault(__webpack_require__(34));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  },
      offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if ((0, _style.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent.default)(node);
    offset = (0, _offset.default)(node);
    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset.default)(offsetParent);
    parentOffset.top += parseInt((0, _style.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop.default)(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft.default)(offsetParent) || 0;
  } // Subtract parent offsets and node margins


  return (0, _extends2.default)({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style.default)(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style.default)(node, 'marginLeft'), 10) || 0)
  });
}

module.exports = exports["default"];

/***/ }),
/* 258 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = offsetParent;

var _ownerDocument = _interopRequireDefault(__webpack_require__(33));

var _style = _interopRequireDefault(__webpack_require__(34));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument.default)(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style.default)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports["default"];

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(59));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(262);

module.exports = parent;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(263);

var path = __webpack_require__(16);

module.exports = path.Array.isArray;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);

var isArray = __webpack_require__(55); // `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray


$({
  target: 'Array',
  stat: true
}, {
  isArray: isArray
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(87);

module.exports = parent;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Accordion", function() { return /* reexport */ src_Accordion; });
__webpack_require__.d(__webpack_exports__, "Alert", function() { return /* reexport */ src_Alert; });
__webpack_require__.d(__webpack_exports__, "Badge", function() { return /* reexport */ src_Badge; });
__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return /* reexport */ src_Breadcrumb; });
__webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return /* reexport */ src_BreadcrumbItem; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ src_Button; });
__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return /* reexport */ src_ButtonGroup; });
__webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return /* reexport */ src_ButtonToolbar; });
__webpack_require__.d(__webpack_exports__, "Carousel", function() { return /* reexport */ src_Carousel; });
__webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return /* reexport */ src_CarouselItem; });
__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return /* reexport */ src_Checkbox; });
__webpack_require__.d(__webpack_exports__, "Clearfix", function() { return /* reexport */ src_Clearfix; });
__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return /* reexport */ src_CloseButton; });
__webpack_require__.d(__webpack_exports__, "ControlLabel", function() { return /* reexport */ src_ControlLabel; });
__webpack_require__.d(__webpack_exports__, "Col", function() { return /* reexport */ src_Col; });
__webpack_require__.d(__webpack_exports__, "Collapse", function() { return /* reexport */ src_Collapse; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ src_Dropdown; });
__webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return /* reexport */ src_DropdownButton; });
__webpack_require__.d(__webpack_exports__, "Fade", function() { return /* reexport */ src_Fade; });
__webpack_require__.d(__webpack_exports__, "Form", function() { return /* reexport */ src_Form; });
__webpack_require__.d(__webpack_exports__, "FormControl", function() { return /* reexport */ src_FormControl; });
__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return /* reexport */ src_FormGroup; });
__webpack_require__.d(__webpack_exports__, "Glyphicon", function() { return /* reexport */ src_Glyphicon; });
__webpack_require__.d(__webpack_exports__, "Grid", function() { return /* reexport */ src_Grid; });
__webpack_require__.d(__webpack_exports__, "HelpBlock", function() { return /* reexport */ src_HelpBlock; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ src_Image; });
__webpack_require__.d(__webpack_exports__, "InputGroup", function() { return /* reexport */ src_InputGroup; });
__webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return /* reexport */ src_Jumbotron; });
__webpack_require__.d(__webpack_exports__, "Label", function() { return /* reexport */ src_Label; });
__webpack_require__.d(__webpack_exports__, "ListGroup", function() { return /* reexport */ src_ListGroup; });
__webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return /* reexport */ src_ListGroupItem; });
__webpack_require__.d(__webpack_exports__, "Media", function() { return /* reexport */ src_Media; });
__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return /* reexport */ src_MenuItem; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ src_Modal; });
__webpack_require__.d(__webpack_exports__, "ModalBody", function() { return /* reexport */ src_ModalBody; });
__webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return /* reexport */ src_ModalDialog; });
__webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return /* reexport */ src_ModalFooter; });
__webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return /* reexport */ src_ModalHeader; });
__webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return /* reexport */ src_ModalTitle; });
__webpack_require__.d(__webpack_exports__, "Nav", function() { return /* reexport */ src_Nav; });
__webpack_require__.d(__webpack_exports__, "Navbar", function() { return /* reexport */ src_Navbar; });
__webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return /* reexport */ src_NavbarBrand; });
__webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return /* reexport */ src_NavDropdown; });
__webpack_require__.d(__webpack_exports__, "NavItem", function() { return /* reexport */ src_NavItem; });
__webpack_require__.d(__webpack_exports__, "Overlay", function() { return /* reexport */ src_Overlay; });
__webpack_require__.d(__webpack_exports__, "OverlayTrigger", function() { return /* reexport */ src_OverlayTrigger; });
__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return /* reexport */ src_PageHeader; });
__webpack_require__.d(__webpack_exports__, "PageItem", function() { return /* reexport */ PageItem; });
__webpack_require__.d(__webpack_exports__, "Pager", function() { return /* reexport */ src_Pager; });
__webpack_require__.d(__webpack_exports__, "Pagination", function() { return /* reexport */ src_Pagination; });
__webpack_require__.d(__webpack_exports__, "Panel", function() { return /* reexport */ src_Panel; });
__webpack_require__.d(__webpack_exports__, "PanelGroup", function() { return /* reexport */ src_PanelGroup; });
__webpack_require__.d(__webpack_exports__, "Popover", function() { return /* reexport */ src_Popover; });
__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return /* reexport */ src_ProgressBar; });
__webpack_require__.d(__webpack_exports__, "Radio", function() { return /* reexport */ src_Radio; });
__webpack_require__.d(__webpack_exports__, "ResponsiveEmbed", function() { return /* reexport */ src_ResponsiveEmbed; });
__webpack_require__.d(__webpack_exports__, "Row", function() { return /* reexport */ src_Row; });
__webpack_require__.d(__webpack_exports__, "SafeAnchor", function() { return /* reexport */ src_SafeAnchor; });
__webpack_require__.d(__webpack_exports__, "SplitButton", function() { return /* reexport */ src_SplitButton; });
__webpack_require__.d(__webpack_exports__, "Tab", function() { return /* reexport */ src_Tab; });
__webpack_require__.d(__webpack_exports__, "TabContainer", function() { return /* reexport */ src_TabContainer; });
__webpack_require__.d(__webpack_exports__, "TabContent", function() { return /* reexport */ src_TabContent; });
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ src_Table; });
__webpack_require__.d(__webpack_exports__, "TabPane", function() { return /* reexport */ src_TabPane; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ src_Tabs; });
__webpack_require__.d(__webpack_exports__, "Thumbnail", function() { return /* reexport */ src_Thumbnail; });
__webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return /* reexport */ src_ToggleButton; });
__webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return /* reexport */ src_ToggleButtonGroup; });
__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return /* reexport */ src_Tooltip; });
__webpack_require__.d(__webpack_exports__, "Well", function() { return /* reexport */ src_Well; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ src_utils_namespaceObject; });

// NAMESPACE OBJECT: ./src/utils/bootstrapUtils.js
var bootstrapUtils_namespaceObject = {};
__webpack_require__.r(bootstrapUtils_namespaceObject);
__webpack_require__.d(bootstrapUtils_namespaceObject, "prefix", function() { return prefix; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsClass", function() { return bootstrapUtils_bsClass; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsStyles", function() { return bsStyles; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsSizes", function() { return bsSizes; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "getClassSet", function() { return getClassSet; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsProps", function() { return splitBsProps; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsPropsAndOmit", function() { return splitBsPropsAndOmit; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "addStyle", function() { return addStyle; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "_curry", function() { return _curry; });

// NAMESPACE OBJECT: ./src/utils/index.js
var src_utils_namespaceObject = {};
__webpack_require__.r(src_utils_namespaceObject);
__webpack_require__.d(src_utils_namespaceObject, "bootstrapUtils", function() { return bootstrapUtils_namespaceObject; });
__webpack_require__.d(src_utils_namespaceObject, "createChainedFunction", function() { return utils_createChainedFunction; });
__webpack_require__.d(src_utils_namespaceObject, "ValidComponentChildren", function() { return ValidComponentChildren; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/assign.js
var object_assign = __webpack_require__(115);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/create.js
var create = __webpack_require__(116);
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = create_default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
var map = __webpack_require__(6);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js
var index_of = __webpack_require__(117);
var index_of_default = /*#__PURE__*/__webpack_require__.n(index_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js
var keys = __webpack_require__(118);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js


function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (index_of_default()(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
var concat = __webpack_require__(7);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(35);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/uncontrollable/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function utils_isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
// CONCATENATED MODULE: ./node_modules/uncontrollable/esm/hook.js



function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(propValue !== undefined);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return extends_extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function inheritsLoose_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/uncontrollable/esm/uncontrollable.js







function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? undefined : browser_default()(false) : void 0;

  var UncontrolledComponent = /*#__PURE__*/function (_React$Component) {
    inheritsLoose_inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: extends_extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: extends_extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!utils_isProp(props, key) && utils_isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, extends_extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

  Object(react_lifecycles_compat_es["polyfill"])(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = extends_extends({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef) {
    WrappedComponent = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (props, ref) {
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(UncontrolledComponent, extends_extends({}, props, {
        innerRef: ref
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, extends_extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
// CONCATENATED MODULE: ./node_modules/uncontrollable/esm/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js
var entries = __webpack_require__(48);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
var instance_index_of = __webpack_require__(15);
var instance_index_of_default = /*#__PURE__*/__webpack_require__.n(instance_index_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
var for_each = __webpack_require__(5);
var for_each_default = /*#__PURE__*/__webpack_require__.n(for_each);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js
var trim = __webpack_require__(61);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);

// CONCATENATED MODULE: ./src/utils/StyleConfig.js
var Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};
var SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};
var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
var State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
};
var Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};
// CONCATENATED MODULE: ./src/utils/bootstrapUtils.js






// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.




function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];

    if (typeof last === 'function') {
      return fn.apply(void 0, args);
    }

    return function (Component) {
      return fn.apply(void 0, concat_default()(args).call(args, [Component]));
    };
  };
}

function prefix(props, variant) {
  var _context;

  var bsClass = trim_default()(_context = props.bsClass || '').call(_context);

  !(bsClass != null) ?  false ? undefined : browser_default()(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}
var bootstrapUtils_bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = prop_types_default.a.string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  for_each_default()(styles).call(styles, function (style) {
    if (instance_index_of_default()(existing).call(existing, style) === -1) {
      existing.push(style);
    }
  });

  var propType = prop_types_default.a.oneOf(existing); // expose the values on the propType function for documentation

  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  for_each_default()(sizes).call(sizes, function (size) {
    if (instance_index_of_default()(existing).call(existing, size) === -1) {
      existing.push(size);
    }
  });

  var values = [];

  for_each_default()(existing).call(existing, function (size) {
    var mappedSize = SIZE_MAP[size];

    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = prop_types_default.a.oneOf(values);
  propType._values = values; // expose the values on the propType function for documentation

  Component.SIZES = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});
function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var _context2;

  var elementProps = {};

  for_each_default()(_context2 = entries_default()(props)).call(_context2, function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
function splitBsPropsAndOmit(props, omittedPropNames) {
  var _context3;

  var isOmittedProp = {};

  for_each_default()(omittedPropNames).call(omittedPropNames, function (propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};

  for_each_default()(_context3 = entries_default()(props)).call(_context3, function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */

function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant)(Component);
}
var _curry = curry;
// CONCATENATED MODULE: ./src/utils/ValidComponentChildren.js


// TODO: This module should be ElementChildren, and should use named exports.

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */

function ValidComponentChildren_map(children, func, context) {
  var _context;

  var index = 0;
  return map_default()(_context = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}
/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */


function forEach(children, func, context) {
  var _context2;

  var index = 0;

  for_each_default()(_context2 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context2, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}
/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */


function ValidComponentChildren_count(children) {
  var _context3;

  var result = 0;

  for_each_default()(_context3 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context3, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}
/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */


function filter(children, func, context) {
  var _context4;

  var index = 0;
  var result = [];

  for_each_default()(_context4 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context4, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}

function find(children, func, context) {
  var _context5;

  var index = 0;
  var result;

  for_each_default()(_context5 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context5, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}

function every(children, func, context) {
  var _context6;

  var index = 0;
  var result = true;

  for_each_default()(_context6 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context6, children, function (child) {
    if (!result) {
      return;
    }

    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}

function some(children, func, context) {
  var _context7;

  var index = 0;
  var result = false;

  for_each_default()(_context7 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context7, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}

function toArray(children) {
  var _context8;

  var result = [];

  for_each_default()(_context8 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context8, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}

/* harmony default export */ var ValidComponentChildren = ({
  map: ValidComponentChildren_map,
  forEach: forEach,
  count: ValidComponentChildren_count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js
var instance_filter = __webpack_require__(28);
var filter_default = /*#__PURE__*/__webpack_require__.n(instance_filter);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/some.js
var instance_some = __webpack_require__(29);
var some_default = /*#__PURE__*/__webpack_require__.n(instance_some);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/every.js
var instance_every = __webpack_require__(47);
var every_default = /*#__PURE__*/__webpack_require__.n(instance_every);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var createChainableTypeChecker = __webpack_require__(43);
var createChainableTypeChecker_default = /*#__PURE__*/__webpack_require__.n(createChainableTypeChecker);

// CONCATENATED MODULE: ./src/utils/PropTypes.js







var idPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]);
function generatedId(name) {
  return function (props) {
    var error = null;

    if (!props.generateChildId) {
      var _context;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, concat_default()(_context = [props]).call(_context, args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize the " + name + " in a way that is accessible to assistive technologies " + ("(such as screen readers) an `id` or a `generateChildId` prop to " + name + " is required"));
      }
    }

    return error;
  };
}
function requiredRoles() {
  for (var _len2 = arguments.length, roles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return createChainableTypeChecker_default()(function (props, propName, component) {
    var missing;

    every_default()(roles).call(roles, function (role) {
      if (!some_default()(ValidComponentChildren).call(ValidComponentChildren, props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error("(children) " + component + " - Missing a required child with bsRole: " + (missing + ". " + component + " must have at least one child of each of ") + ("the following bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
function exclusiveRoles() {
  for (var _len3 = arguments.length, roles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    roles[_key3] = arguments[_key3];
  }

  return createChainableTypeChecker_default()(function (props, propName, component) {
    var duplicate;

    every_default()(roles).call(roles, function (role) {
      var childrenWithRole = filter_default()(ValidComponentChildren).call(ValidComponentChildren, props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error("(children) " + component + " - Duplicate children detected of bsRole: " + (duplicate + ". Only one child each allowed with the following ") + ("bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
// CONCATENATED MODULE: ./src/PanelGroup.js





var _jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelGroup.js";







var PanelGroup_propTypes = {
  accordion: prop_types_default.a.bool,

  /**
   * When `accordion` is enabled, `activeKey` controls the which child `Panel` is expanded. `activeKey` should
   * match a child Panel `eventKey` prop exactly.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any,

  /**
   * A callback fired when a child Panel collapse state changes. It's called with the next expanded `activeKey`
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * An HTML role attribute
   */
  role: prop_types_default.a.string,

  /**
   * A function that takes an eventKey and type and returns a
   * unique id for each Panel heading and Panel Collapse. The function _must_ be a pure function,
   * meaning it should always return the _same_ id for the same set of inputs. The default
   * value requires that an `id` to be set for the PanelGroup.
   *
   * The `type` argument will either be `"body"` or `"heading"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: prop_types_default.a.func,

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: generatedId('PanelGroup')
};
var PanelGroup_defaultProps = {
  accordion: false
};
var childContextTypes = {
  $bs_panelGroup: prop_types_default.a.shape({
    getId: prop_types_default.a.func,
    headerRole: prop_types_default.a.string,
    panelRole: prop_types_default.a.string,
    activeKey: prop_types_default.a.any,
    onToggle: prop_types_default.a.func
  })
};

var PanelGroup_PanelGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelGroup, _React$Component);

  function PanelGroup() {
    var _context;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, concat_default()(_context = [this]).call(_context, args)) || this;

    _this.handleSelect = function (key, expanded, e) {
      if (expanded) {
        _this.props.onSelect(key, e);
      } else if (_this.props.activeKey === key) {
        _this.props.onSelect(null, e);
      }
    };

    return _this;
  }

  var _proto = PanelGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        activeKey = _this$props.activeKey,
        accordion = _this$props.accordion,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    var getId = null;

    if (accordion) {
      getId = generateChildId || function (key, type) {
        return id ? id + "-" + type + "-" + key : null;
      };
    }

    return {
      $bs_panelGroup: _extends({
        getId: getId,
        headerRole: 'tab',
        panelRole: 'tabpanel'
      }, accordion && {
        activeKey: activeKey,
        onToggle: this.handleSelect
      })
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        accordion = _this$props2.accordion,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutPropertiesLoose(_this$props2, ["accordion", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onSelect', 'activeKey']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (accordion) {
      elementProps.role = elementProps.role || 'tablist';
    }

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, {
        bsStyle: child.props.bsStyle || bsProps.bsStyle
      });
    }));
  };

  return PanelGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelGroup_PanelGroup.propTypes = PanelGroup_propTypes;
PanelGroup_PanelGroup.defaultProps = PanelGroup_defaultProps;
PanelGroup_PanelGroup.childContextTypes = childContextTypes;
/* harmony default export */ var src_PanelGroup = (uncontrollable(bootstrapUtils_bsClass('panel-group', PanelGroup_PanelGroup), {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/Accordion.js


var Accordion_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Accordion.js";



var Accordion_Accordion = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Accordion, _React$Component);

  function Accordion() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_PanelGroup, _extends({}, this.props, {
      accordion: true,
      __self: this,
      __source: {
        fileName: Accordion_jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }), this.props.children);
  };

  return Accordion;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_Accordion = (Accordion_Accordion);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js
var object_values = __webpack_require__(19);
var values_default = /*#__PURE__*/__webpack_require__.n(object_values);

// CONCATENATED MODULE: ./src/CloseButton.js

var CloseButton_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\CloseButton.js";


var CloseButton_propTypes = {
  label: prop_types_default.a.string.isRequired,
  onClick: prop_types_default.a.func
};
var CloseButton_defaultProps = {
  label: 'Close'
};

var CloseButton_CloseButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CloseButton, _React$Component);

  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CloseButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        onClick = _this$props.onClick;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick,
      __self: this,
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, "\xD7"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: CloseButton_jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, label));
  };

  return CloseButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

CloseButton_CloseButton.propTypes = CloseButton_propTypes;
CloseButton_CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ var src_CloseButton = (CloseButton_CloseButton);
// CONCATENATED MODULE: ./src/Alert.js




var Alert_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Alert.js";






var Alert_propTypes = {
  onDismiss: prop_types_default.a.func,
  closeLabel: prop_types_default.a.string
};
var Alert_defaultProps = {
  closeLabel: 'Close alert'
};

var Alert_Alert = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Alert, _React$Component);

  function Alert() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        onDismiss = _this$props.onDismiss,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["onDismiss", "closeLabel", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var dismissable = !!onDismiss;

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'dismissable')] = dismissable, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "alert",
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Alert_jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }), dismissable && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_CloseButton, {
      onClick: onDismiss,
      label: closeLabel,
      __self: this,
      __source: {
        fileName: Alert_jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }), children);
  };

  return Alert;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Alert_Alert.propTypes = Alert_propTypes;
Alert_Alert.defaultProps = Alert_defaultProps;
/* harmony default export */ var src_Alert = (bsStyles(values_default()(State), State.INFO, bootstrapUtils_bsClass('alert', Alert_Alert)));
// CONCATENATED MODULE: ./src/Badge.js




var Badge_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Badge.js";



 // TODO: `pullRight` doesn't belong here. There's no special handling here.

var Badge_propTypes = {
  pullRight: prop_types_default.a.bool
};
var Badge_defaultProps = {
  pullRight: false
};

var Badge_Badge = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.hasContent = function hasContent(children) {
    var _context;

    var result = false;

    for_each_default()(_context = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context, children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        pullRight = _this$props.pullRight,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["pullRight", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      'pull-right': pullRight,
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Badge_jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }), children);
  };

  return Badge;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Badge_Badge.propTypes = Badge_propTypes;
Badge_Badge.defaultProps = Badge_defaultProps;
/* harmony default export */ var src_Badge = (bootstrapUtils_bsClass('badge', Badge_Badge));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js
var bind = __webpack_require__(4);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/elementType.js
var elementType = __webpack_require__(3);
var elementType_default = /*#__PURE__*/__webpack_require__.n(elementType);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
var reduce = __webpack_require__(119);
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// CONCATENATED MODULE: ./src/utils/createChainedFunction.js



/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  var _context;

  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return reduce_default()(_context = filter_default()(funcs).call(funcs, function (f) {
    return f != null;
  })).call(_context, function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ var utils_createChainedFunction = (createChainedFunction);
// CONCATENATED MODULE: ./src/SafeAnchor.js






var SafeAnchor_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\SafeAnchor.js";




var SafeAnchor_propTypes = {
  href: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  onKeyDown: prop_types_default.a.func,
  disabled: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  tabIndex: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * this is sort of silly but needed for Button
   */
  componentClass: elementType_default.a
};
var SafeAnchor_defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || trim_default()(href).call(href) === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */


var SafeAnchor_SafeAnchor = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _context, _context2;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = bind_default()(_context = _this.handleClick).call(_context, _assertThisInitialized(_this));
    _this.handleKeyDown = bind_default()(_context2 = _this.handleKeyDown).call(_context2, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        props = _objectWithoutPropertiesLoose(_this$props2, ["componentClass", "disabled", "onKeyDown"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = _extends({
        pointerEvents: 'none'
      }, props.style);
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, props, {
      onClick: this.handleClick,
      onKeyDown: utils_createChainedFunction(this.handleKeyDown, onKeyDown),
      __self: this,
      __source: {
        fileName: SafeAnchor_jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    }));
  };

  return SafeAnchor;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

SafeAnchor_SafeAnchor.propTypes = SafeAnchor_propTypes;
SafeAnchor_SafeAnchor.defaultProps = SafeAnchor_defaultProps;
/* harmony default export */ var src_SafeAnchor = (SafeAnchor_SafeAnchor);
// CONCATENATED MODULE: ./src/BreadcrumbItem.js



var BreadcrumbItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\BreadcrumbItem.js";




var BreadcrumbItem_propTypes = {
  /**
   * If set to true, renders `span` instead of `a`
   */
  active: prop_types_default.a.bool,

  /**
   * `href` attribute for the inner `a` element
   */
  href: prop_types_default.a.string,

  /**
   * `title` attribute for the inner `a` element
   */
  title: prop_types_default.a.node,

  /**
   * `target` attribute for the inner `a` element
   */
  target: prop_types_default.a.string
};
var BreadcrumbItem_defaultProps = {
  active: false
};

var BreadcrumbItem_BreadcrumbItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        href = _this$props.href,
        title = _this$props.title,
        target = _this$props.target,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["active", "href", "title", "target", "className"]); // Don't try to render these props on non-active <span>.


    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
      className: classnames_default()(className, {
        active: active
      }),
      __self: this,
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, active ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, props, {
      __self: this,
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, _extends({}, props, linkProps, {
      __self: this,
      __source: {
        fileName: BreadcrumbItem_jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })));
  };

  return BreadcrumbItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

BreadcrumbItem_BreadcrumbItem.propTypes = BreadcrumbItem_propTypes;
BreadcrumbItem_BreadcrumbItem.defaultProps = BreadcrumbItem_defaultProps;
/* harmony default export */ var src_BreadcrumbItem = (BreadcrumbItem_BreadcrumbItem);
// CONCATENATED MODULE: ./src/Breadcrumb.js



var Breadcrumb_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Breadcrumb.js";





var Breadcrumb_Breadcrumb = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ol", _extends({}, elementProps, {
      role: "navigation",
      "aria-label": "breadcrumbs",
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Breadcrumb_jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }));
  };

  return Breadcrumb;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Breadcrumb_Breadcrumb.Item = src_BreadcrumbItem;
/* harmony default export */ var src_Breadcrumb = (bootstrapUtils_bsClass('breadcrumb', Breadcrumb_Breadcrumb));
// CONCATENATED MODULE: ./src/Button.js






var Button_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Button.js",
    Button_context;








var Button_propTypes = {
  active: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  block: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  componentClass: elementType_default.a,
  href: prop_types_default.a.string,

  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: prop_types_default.a.oneOf(['button', 'reset', 'submit'])
};
var Button_defaultProps = {
  active: false,
  block: false,
  disabled: false
};

var Button_Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.renderAnchor = function renderAnchor(elementProps, className) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, _extends({}, elementProps, {
      className: classnames_default()(className, elementProps.disabled && 'disabled'),
      __self: this,
      __source: {
        fileName: Button_jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }));
  };

  _proto.renderButton = function renderButton(_ref, className) {
    var componentClass = _ref.componentClass,
        elementProps = _objectWithoutPropertiesLoose(_ref, ["componentClass"]);

    var Component = componentClass || 'button';
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      type: elementProps.type || 'button',
      className: className,
      __self: this,
      __source: {
        fileName: Button_jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }));
  };

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        active = _this$props.active,
        block = _this$props.block,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["active", "block", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {
      active: active
    }, _extends2[prefix(bsProps, 'block')] = block, _extends2));

    var fullClassName = classnames_default()(className, classes);

    if (elementProps.href) {
      return this.renderAnchor(elementProps, fullClassName);
    }

    return this.renderButton(elementProps, fullClassName);
  };

  return Button;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Button_Button.propTypes = Button_propTypes;
Button_Button.defaultProps = Button_defaultProps;
/* harmony default export */ var src_Button = (bootstrapUtils_bsClass('btn', bsSizes([Size.LARGE, Size.SMALL, Size.XSMALL], bsStyles(concat_default()(Button_context = []).call(Button_context, values_default()(State), [Style.DEFAULT, Style.PRIMARY, Style.LINK]), Style.DEFAULT, Button_Button))));
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(30);
var all_default = /*#__PURE__*/__webpack_require__.n(lib_all);

// CONCATENATED MODULE: ./src/ButtonGroup.js



var ButtonGroup_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ButtonGroup.js";






var ButtonGroup_propTypes = {
  vertical: prop_types_default.a.bool,
  justified: prop_types_default.a.bool,

  /**
   * Display block buttons; only useful when used with the "vertical" prop.
   * @type {bool}
   */
  block: all_default()(prop_types_default.a.bool, function (_ref) {
    var block = _ref.block,
        vertical = _ref.vertical;
    return block && !vertical ? new Error('`block` requires `vertical` to be set to have any effect') : null;
  })
};
var ButtonGroup_defaultProps = {
  block: false,
  justified: false,
  vertical: false
};

var ButtonGroup_ButtonGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        block = _this$props.block,
        justified = _this$props.justified,
        vertical = _this$props.vertical,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["block", "justified", "vertical", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps)] = !vertical, _extends2[prefix(bsProps, 'vertical')] = vertical, _extends2[prefix(bsProps, 'justified')] = justified, _extends2[prefix(src_Button.defaultProps, 'block')] = block, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ButtonGroup_jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }
    }));
  };

  return ButtonGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ButtonGroup_ButtonGroup.propTypes = ButtonGroup_propTypes;
ButtonGroup_ButtonGroup.defaultProps = ButtonGroup_defaultProps;
/* harmony default export */ var src_ButtonGroup = (bootstrapUtils_bsClass('btn-group', ButtonGroup_ButtonGroup));
// CONCATENATED MODULE: ./src/ButtonToolbar.js



var ButtonToolbar_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ButtonToolbar.js";




var ButtonToolbar_ButtonToolbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "toolbar",
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ButtonToolbar_jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }));
  };

  return ButtonToolbar;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_ButtonToolbar = (bootstrapUtils_bsClass('btn-toolbar', ButtonToolbar_ButtonToolbar));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js
var set_timeout = __webpack_require__(36);
var set_timeout_default = /*#__PURE__*/__webpack_require__.n(set_timeout);

// CONCATENATED MODULE: ./src/CarouselCaption.js



var CarouselCaption_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\CarouselCaption.js";




var CarouselCaption_propTypes = {
  componentClass: elementType_default.a
};
var CarouselCaption_defaultProps = {
  componentClass: 'div'
};

var CarouselCaption_CarouselCaption = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: CarouselCaption_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return CarouselCaption;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

CarouselCaption_CarouselCaption.propTypes = CarouselCaption_propTypes;
CarouselCaption_CarouselCaption.defaultProps = CarouselCaption_defaultProps;
/* harmony default export */ var src_CarouselCaption = (bootstrapUtils_bsClass('carousel-caption', CarouselCaption_CarouselCaption));
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(10);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);

// EXTERNAL MODULE: ./node_modules/dom-helpers/transition/index.js
var dom_helpers_transition = __webpack_require__(120);
var transition_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition);

// CONCATENATED MODULE: ./src/CarouselItem.js






var CarouselItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\CarouselItem.js";





var CarouselItem_propTypes = {
  direction: prop_types_default.a.oneOf(['prev', 'next']),
  onAnimateOutEnd: prop_types_default.a.func,
  active: prop_types_default.a.bool,
  animateIn: prop_types_default.a.bool,
  animateOut: prop_types_default.a.bool,
  index: prop_types_default.a.number
};
var CarouselItem_defaultProps = {
  active: false,
  animateIn: false,
  animateOut: false
};

var CarouselItem_CarouselItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props, context) {
    var _context;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleAnimateOutEnd = bind_default()(_context = _this.handleAnimateOutEnd).call(_context, _assertThisInitialized(_this));
    _this.state = {
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var active = this.props.active;
    var prevActive = prevProps.active;

    if (!active && prevActive) {
      transition_default.a.end(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (active !== prevActive) {
      set_timeout_default()(function () {
        return _this2.startAnimation();
      }, 20);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  _proto.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }

    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };

  _proto.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        direction = _this$props.direction,
        active = _this$props.active,
        animateIn = _this$props.animateIn,
        animateOut = _this$props.animateOut,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["direction", "active", "animateIn", "animateOut", "className"]);

    delete props.onAnimateOutEnd;
    delete props.index;
    var classes = {
      item: true,
      active: active && !animateIn || animateOut
    };

    if (direction && active && animateIn) {
      classes[direction] = true;
    }

    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, props, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: CarouselItem_jsxFileName,
        lineNumber: 102,
        columnNumber: 12
      }
    }));
  };

  return CarouselItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

CarouselItem_CarouselItem.propTypes = CarouselItem_propTypes;
CarouselItem_CarouselItem.defaultProps = CarouselItem_defaultProps;
/* harmony default export */ var src_CarouselItem = (CarouselItem_CarouselItem);
// CONCATENATED MODULE: ./src/Glyphicon.js



var Glyphicon_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Glyphicon.js";




var Glyphicon_propTypes = {
  /**
   * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  glyph: prop_types_default.a.string.isRequired
};

var Glyphicon_Glyphicon = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Glyphicon, _React$Component);

  function Glyphicon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Glyphicon.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        glyph = _this$props.glyph,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["glyph", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, glyph)] = true, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Glyphicon_jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }));
  };

  return Glyphicon;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Glyphicon_Glyphicon.propTypes = Glyphicon_propTypes;
/* harmony default export */ var src_Glyphicon = (bootstrapUtils_bsClass('glyphicon', Glyphicon_Glyphicon));
// CONCATENATED MODULE: ./src/Carousel.js








var Carousel_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Carousel.js";








 // TODO: `slide` should be `animate`.
// TODO: Use uncontrollable.

var Carousel_propTypes = {
  slide: prop_types_default.a.bool,
  indicators: prop_types_default.a.bool,

  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: prop_types_default.a.number,
  controls: prop_types_default.a.bool,
  pauseOnHover: prop_types_default.a.bool,
  wrap: prop_types_default.a.bool,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, ?event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: prop_types_default.a.func,
  onSlideEnd: prop_types_default.a.func,
  activeIndex: prop_types_default.a.number,
  defaultActiveIndex: prop_types_default.a.number,
  direction: prop_types_default.a.oneOf(['prev', 'next']),
  prevIcon: prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: prop_types_default.a.string,
  nextIcon: prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: prop_types_default.a.string
};
var Carousel_defaultProps = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Glyphicon, {
    glyph: "chevron-left",
    __self: undefined,
    __source: {
      fileName: Carousel_jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Glyphicon, {
    glyph: "chevron-right",
    __self: undefined,
    __source: {
      fileName: Carousel_jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }),
  nextLabel: 'Next'
};

var Carousel_Carousel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props, context) {
    var _context, _context2, _context3, _context4, _context5;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleMouseOver = bind_default()(_context = _this.handleMouseOver).call(_context, _assertThisInitialized(_this));
    _this.handleMouseOut = bind_default()(_context2 = _this.handleMouseOut).call(_context2, _assertThisInitialized(_this));
    _this.handlePrev = bind_default()(_context3 = _this.handlePrev).call(_context3, _assertThisInitialized(_this));
    _this.handleNext = bind_default()(_context4 = _this.handleNext).call(_context4, _assertThisInitialized(_this));
    _this.handleItemAnimateOutEnd = bind_default()(_context5 = _this.handleItemAnimateOutEnd).call(_context5, _assertThisInitialized(_this));
    var defaultActiveIndex = props.defaultActiveIndex;
    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }

    if (nextProps.activeIndex == null && this.state.activeIndex >= nextProps.children.length) {
      this.setState({
        activeIndex: 0,
        previousActiveIndex: null,
        direction: null
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };

  _proto.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  _proto.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();

      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  };

  _proto.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };

  _proto.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  _proto.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = ValidComponentChildren.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }

      index = 0;
    }

    this.select(index, e, 'next');
  };

  _proto.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }

      index = ValidComponentChildren.count(this.props.children) - 1;
    }

    this.select(index, e, 'prev');
  } // This might be a public API.
  ;

  _proto.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  } // This might be a public API.
  ;

  _proto.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };

  _proto.select = function select(index, e, direction) {
    clearTimeout(this.timeout); // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.

    if (this.isUnmounted) {
      return;
    }

    var previousActiveIndex = this.props.slide ? this.getActiveIndex() : null;
    direction = direction || this.getDirection(previousActiveIndex, index);
    var onSelect = this.props.onSelect;

    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = {
            direction: direction
          };
        }

        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };

  _proto.waitForNext = function waitForNext() {
    var _this$props = this.props,
        slide = _this$props.slide,
        interval = _this$props.interval,
        activeIndexProp = _this$props.activeIndex;

    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = set_timeout_default()(this.handleNext, interval);
    }
  };

  _proto.renderControls = function renderControls(properties) {
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        bsProps = properties.bsProps,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var controlClassName = prefix(bsProps, 'control');
    var count = ValidComponentChildren.count(children);
    return [(wrap || activeIndex !== 0) && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, {
      key: "prev",
      className: classnames_default()(controlClassName, 'left'),
      onClick: this.handlePrev,
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }
    }, prevIcon, prevLabel && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 296,
        columnNumber: 25
      }
    }, prevLabel)), (wrap || activeIndex !== count - 1) && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, {
      key: "next",
      className: classnames_default()(controlClassName, 'right'),
      onClick: this.handleNext,
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }
    }, nextIcon, nextLabel && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 307,
        columnNumber: 25
      }
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex, bsProps) {
    var _this3 = this;

    var indicators = [];

    for_each_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child, index) {
      indicators.push( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this3.select(index, e);
        },
        __self: _this3,
        __source: {
          fileName: Carousel_jsxFileName,
          lineNumber: 318,
          columnNumber: 9
        }
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ol", {
      className: prefix(bsProps, 'indicators'),
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 330,
        columnNumber: 12
      }
    }, indicators);
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props2 = this.props,
        slide = _this$props2.slide,
        indicators = _this$props2.indicators,
        controls = _this$props2.controls,
        wrap = _this$props2.wrap,
        prevIcon = _this$props2.prevIcon,
        prevLabel = _this$props2.prevLabel,
        nextIcon = _this$props2.nextIcon,
        nextLabel = _this$props2.nextLabel,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutPropertiesLoose(_this$props2, ["slide", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]);

    var _this$state = this.state,
        previousActiveIndex = _this$state.previousActiveIndex,
        direction = _this$state.direction;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['interval', 'pauseOnHover', 'onSelect', 'onSlideEnd', 'activeIndex', // Accessed via this.getActiveIndex().
    'defaultActiveIndex', 'direction']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var activeIndex = this.getActiveIndex();

    var classes = _extends({}, getClassSet(bsProps), {
      slide: slide
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut,
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 368,
        columnNumber: 7
      }
    }), indicators && this.renderIndicators(children, activeIndex, bsProps), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'inner'),
      __self: this,
      __source: {
        fileName: Carousel_jsxFileName,
        lineNumber: 376,
        columnNumber: 9
      }
    }, map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child, index) {
      var active = index === activeIndex;
      var previousActive = slide && index === previousActiveIndex;
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, {
        active: active,
        index: index,
        animateOut: previousActive,
        animateIn: active && previousActiveIndex != null && slide,
        direction: direction,
        onAnimateOutEnd: previousActive ? _this4.handleItemAnimateOutEnd : null
      });
    })), controls && this.renderControls({
      wrap: wrap,
      children: children,
      activeIndex: activeIndex,
      prevIcon: prevIcon,
      prevLabel: prevLabel,
      nextIcon: nextIcon,
      nextLabel: nextLabel,
      bsProps: bsProps
    }));
  };

  return Carousel;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Carousel_Carousel.propTypes = Carousel_propTypes;
Carousel_Carousel.defaultProps = Carousel_defaultProps;
Carousel_Carousel.Caption = src_CarouselCaption;
Carousel_Carousel.Item = src_CarouselItem;
/* harmony default export */ var src_Carousel = (bootstrapUtils_bsClass('carousel', Carousel_Carousel));
// EXTERNAL MODULE: ./node_modules/warning/browser.js
var warning_browser = __webpack_require__(18);

// CONCATENATED MODULE: ./src/Checkbox.js



var Checkbox_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Checkbox.js";

/* eslint-disable jsx-a11y/label-has-for */





var Checkbox_propTypes = {
  inline: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: prop_types_default.a.oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func
};
var Checkbox_defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Checkbox_Checkbox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Checkbox, _React$Component);

  function Checkbox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled,
      __self: this,
      __source: {
        fileName: Checkbox_jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[prefix(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


       false ? undefined : void 0;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
        className: classnames_default()(className, _classes),
        style: style,
        title: title,
        __self: this,
        __source: {
          fileName: Checkbox_jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, input, children);
    }

    var classes = _extends({}, getClassSet(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: classnames_default()(className, classes),
      style: style,
      __self: this,
      __source: {
        fileName: Checkbox_jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
      title: title,
      __self: this,
      __source: {
        fileName: Checkbox_jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, input, children));
  };

  return Checkbox;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Checkbox_Checkbox.propTypes = Checkbox_propTypes;
Checkbox_Checkbox.defaultProps = Checkbox_defaultProps;
/* harmony default export */ var src_Checkbox = (bootstrapUtils_bsClass('checkbox', Checkbox_Checkbox));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js
var slice = __webpack_require__(121);
var slice_default = /*#__PURE__*/__webpack_require__.n(slice);

// CONCATENATED MODULE: ./src/utils/capitalize.js

function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + slice_default()(string).call(string, 1);
}
// CONCATENATED MODULE: ./src/Clearfix.js




var Clearfix_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Clearfix.js";







var Clearfix_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Apply clearfix
   *
   * on Extra small devices Phones
   *
   * adds class `visible-xs-block`
   */
  visibleXsBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Small devices Tablets
   *
   * adds class `visible-sm-block`
   */
  visibleSmBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Medium devices Desktops
   *
   * adds class `visible-md-block`
   */
  visibleMdBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Large devices Desktops
   *
   * adds class `visible-lg-block`
   */
  visibleLgBlock: prop_types_default.a.bool
};
var Clearfix_defaultProps = {
  componentClass: 'div'
};

var Clearfix_Clearfix = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Clearfix, _React$Component);

  function Clearfix() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Clearfix.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    for_each_default()(DEVICE_SIZES).call(DEVICE_SIZES, function (size) {
      var propName = "visible" + capitalize(size) + "Block";

      if (elementProps[propName]) {
        classes["visible-" + size + "-block"] = true;
      }

      delete elementProps[propName];
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Clearfix_jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }));
  };

  return Clearfix;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Clearfix_Clearfix.propTypes = Clearfix_propTypes;
Clearfix_Clearfix.defaultProps = Clearfix_defaultProps;
/* harmony default export */ var src_Clearfix = (bootstrapUtils_bsClass('clearfix', Clearfix_Clearfix));
// CONCATENATED MODULE: ./src/ControlLabel.js



var ControlLabel_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ControlLabel.js";





var ControlLabel_propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: prop_types_default.a.string,
  srOnly: prop_types_default.a.bool
};
var ControlLabel_defaultProps = {
  srOnly: false
};
var contextTypes = {
  $bs_formGroup: prop_types_default.a.object
};

var ControlLabel_ControlLabel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ControlLabel, _React$Component);

  function ControlLabel() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ControlLabel.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        _this$props$htmlFor = _this$props.htmlFor,
        htmlFor = _this$props$htmlFor === void 0 ? controlId : _this$props$htmlFor,
        srOnly = _this$props.srOnly,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["htmlFor", "srOnly", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     false ? undefined : void 0;

    var classes = _extends({}, getClassSet(bsProps), {
      'sr-only': srOnly
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", _extends({}, elementProps, {
      htmlFor: htmlFor,
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ControlLabel_jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }));
  };

  return ControlLabel;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ControlLabel_ControlLabel.propTypes = ControlLabel_propTypes;
ControlLabel_ControlLabel.defaultProps = ControlLabel_defaultProps;
ControlLabel_ControlLabel.contextTypes = contextTypes;
/* harmony default export */ var src_ControlLabel = (bootstrapUtils_bsClass('control-label', ControlLabel_ControlLabel));
// CONCATENATED MODULE: ./src/Col.js




var Col_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Col.js";






var Col_propTypes = {
  componentClass: elementType_default.a,

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: prop_types_default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: prop_types_default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: prop_types_default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: prop_types_default.a.number,

  /**
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: prop_types_default.a.bool,

  /**
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: prop_types_default.a.bool,

  /**
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: prop_types_default.a.bool,

  /**
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: prop_types_default.a.bool,

  /**
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: prop_types_default.a.number,

  /**
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: prop_types_default.a.number,

  /**
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: prop_types_default.a.number,

  /**
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: prop_types_default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: prop_types_default.a.number
};
var Col_defaultProps = {
  componentClass: 'div'
};

var Col_Col = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    for_each_default()(DEVICE_SIZES).call(DEVICE_SIZES, function (size) {
      function popProp(propSuffix, modifier) {
        var propName = "" + size + propSuffix;
        var propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(prefix(bsProps, "" + size + modifier + "-" + propValue));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');
      var hiddenPropName = size + "Hidden";

      if (elementProps[hiddenPropName]) {
        classes.push("hidden-" + size);
      }

      delete elementProps[hiddenPropName];
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Col_jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }
    }));
  };

  return Col;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Col_Col.propTypes = Col_propTypes;
Col_Col.defaultProps = Col_defaultProps;
/* harmony default export */ var src_Col = (bootstrapUtils_bsClass('col', Col_Col));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js
var parse_int = __webpack_require__(83);
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/dom-helpers/style/index.js
var dom_helpers_style = __webpack_require__(34);
var style_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style);

// EXTERNAL MODULE: ./node_modules/react-transition-group/Transition.js
var react_transition_group_Transition = __webpack_require__(21);
var Transition_default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition);

// CONCATENATED MODULE: ./src/Collapse.js






var Collapse_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Collapse.js",
    _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
}; // reading a dimension prop will cause the browser to recalculate,
// which will let our animations work

function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem["offset" + capitalize(dimension)];
  var margins = MARGINS[dimension];
  return value + parse_int_default()(style_default()(elem, margins[0]), 10) + parse_int_default()(style_default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition["EXITED"]] = 'collapse', _collapseStyles[react_transition_group_Transition["EXITING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition["ENTERING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition["ENTERED"]] = 'collapse in', _collapseStyles);
var Collapse_propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  "in": prop_types_default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types_default.a.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: prop_types_default.a.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: prop_types_default.a.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: prop_types_default.a.oneOfType([prop_types_default.a.oneOf(['height', 'width']), prop_types_default.a.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: prop_types_default.a.func,

  /**
   * ARIA role of collapsible element
   */
  role: prop_types_default.a.string
};
var Collapse_defaultProps = {
  "in": false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse_Collapse = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Collapse, _React$Component);

  function Collapse() {
    var _context;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, concat_default()(_context = [this]).call(_context, args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      triggerBrowserReflow(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  } // for testing
  ;

  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem["scroll" + capitalize(dimension)] + "px";
  }
  /* -- Expanding -- */
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = utils_createChainedFunction(this.handleEnter, onEnter);
    var handleEntering = utils_createChainedFunction(this.handleEntering, onEntering);
    var handleEntered = utils_createChainedFunction(this.handleEntered, onEntered);
    var handleExit = utils_createChainedFunction(this.handleExit, onExit);
    var handleExiting = utils_createChainedFunction(this.handleExiting, onExiting);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Transition_default.a, _extends({}, props, {
      "aria-expanded": props.role ? props["in"] : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting,
      __self: this,
      __source: {
        fileName: Collapse_jsxFileName,
        lineNumber: 201,
        columnNumber: 7
      }
    }), function (state, innerProps) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, _extends({}, innerProps, {
        className: classnames_default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Collapse_Collapse.propTypes = Collapse_propTypes;
Collapse_Collapse.defaultProps = Collapse_defaultProps;
/* harmony default export */ var src_Collapse = (Collapse_Collapse);
// EXTERNAL MODULE: ./node_modules/dom-helpers/activeElement.js
var activeElement = __webpack_require__(80);
var activeElement_default = /*#__PURE__*/__webpack_require__.n(activeElement);

// EXTERNAL MODULE: ./node_modules/dom-helpers/query/contains.js
var contains = __webpack_require__(27);
var contains_default = /*#__PURE__*/__webpack_require__.n(contains);

// EXTERNAL MODULE: ./node_modules/keycode/index.js
var keycode = __webpack_require__(11);
var keycode_default = /*#__PURE__*/__webpack_require__.n(keycode);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/isRequiredForA11y.js
var isRequiredForA11y = __webpack_require__(31);
var isRequiredForA11y_default = /*#__PURE__*/__webpack_require__.n(isRequiredForA11y);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js
var from = __webpack_require__(122);
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/RootCloseWrapper.js
var RootCloseWrapper = __webpack_require__(81);
var RootCloseWrapper_default = /*#__PURE__*/__webpack_require__.n(RootCloseWrapper);

// CONCATENATED MODULE: ./src/DropdownMenu.js








var DropdownMenu_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\DropdownMenu.js";









var DropdownMenu_propTypes = {
  open: prop_types_default.a.bool,
  pullRight: prop_types_default.a.bool,
  onClose: prop_types_default.a.func,
  labelledBy: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  onSelect: prop_types_default.a.func,
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown'])
};
var DropdownMenu_defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu_DropdownMenu = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _context, _context2;

    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleRootClose = bind_default()(_context = _this.handleRootClose).call(_context, _assertThisInitialized(_this));
    _this.handleKeyDown = bind_default()(_context2 = _this.handleKeyDown).call(_context2, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this);

    if (!node) {
      return [];
    }

    return from_default()(node.querySelectorAll('[tabIndex="-1"]'));
  };

  _proto.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();

    var activeIndex = instance_index_of_default()(items).call(items, document.activeElement);

    return {
      items: items,
      activeIndex: activeIndex
    };
  };

  _proto.focusNext = function focusNext() {
    var _this$getItemsAndActi = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi.items,
        activeIndex = _this$getItemsAndActi.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  _proto.focusPrevious = function focusPrevious() {
    var _this$getItemsAndActi2 = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi2.items,
        activeIndex = _this$getItemsAndActi2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case keycode_default.a.codes.down:
        this.focusNext();
        event.preventDefault();
        break;

      case keycode_default.a.codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;

      case keycode_default.a.codes.esc:
      case keycode_default.a.codes.tab:
        this.props.onClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.handleRootClose = function handleRootClose(event) {
    this.props.onClose(event, {
      source: 'rootClose'
    });
  };

  _proto.render = function render() {
    var _extends2,
        _this2 = this;

    var _this$props = this.props,
        open = _this$props.open,
        pullRight = _this$props.pullRight,
        labelledBy = _this$props.labelledBy,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["open", "pullRight", "labelledBy", "onSelect", "className", "rootCloseEvent", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onClose']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'right')] = pullRight, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(RootCloseWrapper_default.a, {
      disabled: !open,
      onRootClose: this.handleRootClose,
      event: rootCloseEvent,
      __self: this,
      __source: {
        fileName: DropdownMenu_jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", _extends({}, elementProps, {
      role: "menu",
      className: classnames_default()(className, classes),
      "aria-labelledby": labelledBy,
      __self: this,
      __source: {
        fileName: DropdownMenu_jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, {
        onKeyDown: utils_createChainedFunction(child.props.onKeyDown, _this2.handleKeyDown),
        onSelect: utils_createChainedFunction(child.props.onSelect, onSelect)
      });
    })));
  };

  return DropdownMenu;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

DropdownMenu_DropdownMenu.propTypes = DropdownMenu_propTypes;
DropdownMenu_DropdownMenu.defaultProps = DropdownMenu_defaultProps;
/* harmony default export */ var src_DropdownMenu = (bootstrapUtils_bsClass('dropdown-menu', DropdownMenu_DropdownMenu));
// CONCATENATED MODULE: ./src/DropdownToggle.js



var DropdownToggle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\DropdownToggle.js";






var DropdownToggle_propTypes = {
  noCaret: prop_types_default.a.bool,
  open: prop_types_default.a.bool,
  title: prop_types_default.a.string,
  useAnchor: prop_types_default.a.bool
};
var DropdownToggle_defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle_DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        noCaret = _this$props.noCaret,
        open = _this$props.open,
        useAnchor = _this$props.useAnchor,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["noCaret", "open", "useAnchor", "bsClass", "className", "children"]);

    delete props.bsRole;
    var Component = useAnchor ? src_SafeAnchor : src_Button;
    var useCaret = !noCaret; // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.
    // FIXME: Should this really fall back to `title` as children?

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, props, {
      role: "button",
      className: classnames_default()(className, bsClass),
      "aria-haspopup": true,
      "aria-expanded": open,
      __self: this,
      __source: {
        fileName: DropdownToggle_jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }), children || props.title, useCaret && ' ', useCaret && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "caret",
      __self: this,
      __source: {
        fileName: DropdownToggle_jsxFileName,
        lineNumber: 54,
        columnNumber: 22
      }
    }));
  };

  return DropdownToggle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

DropdownToggle_DropdownToggle.propTypes = DropdownToggle_propTypes;
DropdownToggle_DropdownToggle.defaultProps = DropdownToggle_defaultProps;
/* harmony default export */ var src_DropdownToggle = (bootstrapUtils_bsClass('dropdown-toggle', DropdownToggle_DropdownToggle));
// CONCATENATED MODULE: ./src/Dropdown.js






var Dropdown_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Dropdown.js";



















var TOGGLE_ROLE = src_DropdownToggle.defaultProps.bsRole;
var MENU_ROLE = src_DropdownMenu.defaultProps.bsRole;
var Dropdown_propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: prop_types_default.a.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),
  componentClass: elementType_default.a,

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: all_default()(requiredRoles(TOGGLE_ROLE, MENU_ROLE), exclusiveRoles(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: prop_types_default.a.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: prop_types_default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: prop_types_default.a.bool,
  defaultOpen: prop_types_default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(Boolean isOpen, Object event, { String source }) {}
   * ```
   * @controllable open
   */
  onToggle: prop_types_default.a.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: prop_types_default.a.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: prop_types_default.a.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   * *Note: For custom dropdown components, you will have to pass the
   * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
   * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
   */
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown']),

  /**
   * @private
   */
  onMouseEnter: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseLeave: prop_types_default.a.func
};
var Dropdown_defaultProps = {
  componentClass: src_ButtonGroup
};

var Dropdown_Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props, context) {
    var _context, _context2, _context3;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = bind_default()(_context = _this.handleClick).call(_context, _assertThisInitialized(_this));
    _this.handleKeyDown = bind_default()(_context2 = _this.handleKeyDown).call(_context2, _assertThisInitialized(_this));
    _this.handleClose = bind_default()(_context3 = _this.handleClose).call(_context3, _assertThisInitialized(_this));
    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  _proto.UNSAFE_componentWillUpdate = function UNSAFE_componentWillUpdate(nextProps) {
    // eslint-disable-line
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = contains_default()(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this.menu), activeElement_default()(document));
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;
    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  _proto.focus = function focus() {
    var toggle = external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  _proto.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu || !menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  _proto.handleClick = function handleClick(event) {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen(event, {
      source: 'click'
    });
  };

  _proto.handleClose = function handleClose(event, eventDetails) {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(event, eventDetails);
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case keycode_default.a.codes.down:
        if (!this.props.open) {
          this.toggleOpen(event, {
            source: 'keydown'
          });
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }

        event.preventDefault();
        break;

      case keycode_default.a.codes.esc:
      case keycode_default.a.codes.tab:
        this.handleClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.toggleOpen = function toggleOpen(event, eventDetails) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventDetails.source;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
    }
  };

  _proto.renderMenu = function renderMenu(child, _ref) {
    var _this2 = this;

    var id = _ref.id,
        onSelect = _ref.onSelect,
        rootCloseEvent = _ref.rootCloseEvent,
        props = _objectWithoutPropertiesLoose(_ref, ["id", "onSelect", "rootCloseEvent"]);

    var ref = function ref(c) {
      _this2.menu = c;
    };

    if (typeof child.ref === 'string') {
       false ? undefined : void 0;
    } else {
      ref = utils_createChainedFunction(child.ref, ref);
    }

    return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, _extends({}, props, {
      ref: ref,
      labelledBy: id,
      bsClass: prefix(props, 'menu'),
      onClose: utils_createChainedFunction(child.props.onClose, this.handleClose),
      onSelect: utils_createChainedFunction(child.props.onSelect, onSelect, function (key, event) {
        return _this2.handleClose(event, {
          source: 'select'
        });
      }),
      rootCloseEvent: rootCloseEvent
    }));
  };

  _proto.renderToggle = function renderToggle(child, props) {
    var _this3 = this;

    var ref = function ref(c) {
      _this3.toggle = c;
    };

    if (typeof child.ref === 'string') {
       false ? undefined : void 0;
    } else {
      ref = utils_createChainedFunction(child.ref, ref);
    }

    return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, _extends({}, props, {
      ref: ref,
      bsClass: prefix(props, 'toggle'),
      onClick: utils_createChainedFunction(child.props.onClick, this.handleClick),
      onKeyDown: utils_createChainedFunction(child.props.onKeyDown, this.handleKeyDown)
    }));
  };

  _proto.render = function render() {
    var _classes,
        _this4 = this;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        id = _this$props.id,
        dropup = _this$props.dropup,
        disabled = _this$props.disabled,
        pullRight = _this$props.pullRight,
        open = _this$props.open,
        onSelect = _this$props.onSelect,
        role = _this$props.role,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "id", "dropup", "disabled", "pullRight", "open", "onSelect", "role", "bsClass", "className", "rootCloseEvent", "children"]);

    delete props.onToggle;
    var classes = (_classes = {}, _classes[bsClass] = true, _classes.open = open, _classes.disabled = disabled, _classes);

    if (dropup) {
      classes[bsClass] = false;
      classes.dropup = true;
    } // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.


    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Dropdown_jsxFileName,
        lineNumber: 328,
        columnNumber: 7
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      switch (child.props.bsRole) {
        case TOGGLE_ROLE:
          return _this4.renderToggle(child, {
            id: id,
            disabled: disabled,
            open: open,
            role: role,
            bsClass: bsClass
          });

        case MENU_ROLE:
          return _this4.renderMenu(child, {
            id: id,
            open: open,
            pullRight: pullRight,
            bsClass: bsClass,
            onSelect: onSelect,
            rootCloseEvent: rootCloseEvent
          });

        default:
          return child;
      }
    }));
  };

  return Dropdown;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Dropdown_Dropdown.propTypes = Dropdown_propTypes;
Dropdown_Dropdown.defaultProps = Dropdown_defaultProps;
bootstrapUtils_bsClass('dropdown', Dropdown_Dropdown);
var UncontrolledDropdown = uncontrollable(Dropdown_Dropdown, {
  open: 'onToggle'
});
UncontrolledDropdown.Toggle = src_DropdownToggle;
UncontrolledDropdown.Menu = src_DropdownMenu;
/* harmony default export */ var src_Dropdown = (UncontrolledDropdown);
// CONCATENATED MODULE: ./src/utils/splitComponentProps.js


function splitComponentProps(props, Component) {
  var _context;

  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};

  for_each_default()(_context = entries_default()(props)).call(_context, function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
// CONCATENATED MODULE: ./src/DropdownButton.js



var DropdownButton_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\DropdownButton.js";





var DropdownButton_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  bsStyle: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  title: prop_types_default.a.node.isRequired,
  noCaret: prop_types_default.a.bool,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var DropdownButton_DropdownButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownButton, _React$Component);

  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsSize", "bsStyle", "title", "children"]);

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1];

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __self: this,
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown.Toggle, _extends({}, toggleProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __self: this,
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }), title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown.Menu, {
      __self: this,
      __source: {
        fileName: DropdownButton_jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, children));
  };

  return DropdownButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

DropdownButton_DropdownButton.propTypes = DropdownButton_propTypes;
/* harmony default export */ var src_DropdownButton = (DropdownButton_DropdownButton);
// CONCATENATED MODULE: ./src/Fade.js




var Fade_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Fade.js",
    _fadeStyles;





var Fade_propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  "in": prop_types_default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types_default.a.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: prop_types_default.a.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the has component faded in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component fades out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has faded out
   */
  onExited: prop_types_default.a.func
};
var Fade_defaultProps = {
  "in": false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[react_transition_group_Transition["ENTERING"]] = 'in', _fadeStyles[react_transition_group_Transition["ENTERED"]] = 'in', _fadeStyles);

var Fade_Fade = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Fade, _React$Component);

  function Fade() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Transition_default.a, _extends({}, props, {
      __self: this,
      __source: {
        fileName: Fade_jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }), function (status, innerProps) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, _extends({}, innerProps, {
        className: classnames_default()('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Fade_Fade.propTypes = Fade_propTypes;
Fade_Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var src_Fade = (Fade_Fade);
// CONCATENATED MODULE: ./src/Form.js



var Form_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Form.js";





var Form_propTypes = {
  horizontal: prop_types_default.a.bool,
  inline: prop_types_default.a.bool,
  componentClass: elementType_default.a
};
var Form_defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form'
};

var Form_Form = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Form, _React$Component);

  function Form() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        horizontal = _this$props.horizontal,
        inline = _this$props.inline,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["horizontal", "inline", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    if (horizontal) {
      classes.push(prefix(bsProps, 'horizontal'));
    }

    if (inline) {
      classes.push(prefix(bsProps, 'inline'));
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Form_jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }));
  };

  return Form;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Form_Form.propTypes = Form_propTypes;
Form_Form.defaultProps = Form_defaultProps;
/* harmony default export */ var src_Form = (bootstrapUtils_bsClass('form', Form_Form));
// CONCATENATED MODULE: ./src/FormControlFeedback.js



var FormControlFeedback_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\FormControlFeedback.js";





var FormControlFeedback_defaultProps = {
  bsRole: 'feedback'
};
var FormControlFeedback_contextTypes = {
  $bs_formGroup: prop_types_default.a.object
};

var FormControlFeedback_FormControlFeedback = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormControlFeedback, _React$Component);

  function FormControlFeedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControlFeedback.prototype;

  _proto.getGlyph = function getGlyph(validationState) {
    switch (validationState) {
      case 'success':
        return 'ok';

      case 'warning':
        return 'warning-sign';

      case 'error':
        return 'remove';

      default:
        return null;
    }
  };

  _proto.renderDefaultFeedback = function renderDefaultFeedback(formGroup, className, classes, elementProps) {
    var glyph = this.getGlyph(formGroup && formGroup.validationState);

    if (!glyph) {
      return null;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Glyphicon, _extends({}, elementProps, {
      glyph: glyph,
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: FormControlFeedback_jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (!children) {
      return this.renderDefaultFeedback(this.context.$bs_formGroup, className, classes, elementProps);
    }

    var child = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, _extends({}, elementProps, {
      className: classnames_default()(child.props.className, className, classes)
    }));
  };

  return FormControlFeedback;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

FormControlFeedback_FormControlFeedback.defaultProps = FormControlFeedback_defaultProps;
FormControlFeedback_FormControlFeedback.contextTypes = FormControlFeedback_contextTypes;
/* harmony default export */ var src_FormControlFeedback = (bootstrapUtils_bsClass('form-control-feedback', FormControlFeedback_FormControlFeedback));
// CONCATENATED MODULE: ./src/FormControlStatic.js



var FormControlStatic_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\FormControlStatic.js";




var FormControlStatic_propTypes = {
  componentClass: elementType_default.a
};
var FormControlStatic_defaultProps = {
  componentClass: 'p'
};

var FormControlStatic_FormControlStatic = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormControlStatic, _React$Component);

  function FormControlStatic() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControlStatic.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: FormControlStatic_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return FormControlStatic;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

FormControlStatic_FormControlStatic.propTypes = FormControlStatic_propTypes;
FormControlStatic_FormControlStatic.defaultProps = FormControlStatic_defaultProps;
/* harmony default export */ var src_FormControlStatic = (bootstrapUtils_bsClass('form-control-static', FormControlStatic_FormControlStatic));
// CONCATENATED MODULE: ./src/FormControl.js



var FormControl_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\FormControl.js";









var FormControl_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: prop_types_default.a.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: prop_types_default.a.string,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func
};
var FormControl_defaultProps = {
  componentClass: 'input'
};
var FormControl_contextTypes = {
  $bs_formGroup: prop_types_default.a.object
};

var FormControl_FormControl = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        type = _this$props.type,
        _this$props$id = _this$props.id,
        id = _this$props$id === void 0 ? controlId : _this$props$id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        bsSize = _this$props.bsSize,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "type", "id", "inputRef", "className", "bsSize"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     false ? undefined : void 0; // input[type="file"] should not have .form-control.

    var classes;

    if (type !== 'file') {
      classes = getClassSet(bsProps);
    } // If user provides a size, make sure to append it to classes as input-
    // e.g. if bsSize is small, it will append input-sm


    if (bsSize) {
      var size = SIZE_MAP[bsSize] || bsSize;
      classes[prefix({
        bsClass: 'input'
      }, size)] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      type: type,
      id: id,
      ref: inputRef,
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: FormControl_jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }));
  };

  return FormControl;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

FormControl_FormControl.propTypes = FormControl_propTypes;
FormControl_FormControl.defaultProps = FormControl_defaultProps;
FormControl_FormControl.contextTypes = FormControl_contextTypes;
FormControl_FormControl.Feedback = src_FormControlFeedback;
FormControl_FormControl.Static = src_FormControlStatic;
/* harmony default export */ var src_FormControl = (bootstrapUtils_bsClass('form-control', bsSizes([Size.SMALL, Size.LARGE], FormControl_FormControl)));
// CONCATENATED MODULE: ./src/FormGroup.js




var FormGroup_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\FormGroup.js";






var FormGroup_propTypes = {
  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: prop_types_default.a.string,
  validationState: prop_types_default.a.oneOf(['success', 'warning', 'error', null])
};
var FormGroup_childContextTypes = {
  $bs_formGroup: prop_types_default.a.object.isRequired
};

var FormGroup_FormGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormGroup, _React$Component);

  function FormGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        controlId = _this$props.controlId,
        validationState = _this$props.validationState;
    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState
      }
    };
  };

  _proto.hasFeedback = function hasFeedback(children) {
    var _this = this;

    return some_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return child.props.bsRole === 'feedback' || child.props.children && _this.hasFeedback(child.props.children);
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        validationState = _this$props2.validationState,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutPropertiesLoose(_this$props2, ["validationState", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['controlId']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), {
      'has-feedback': this.hasFeedback(children)
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: FormGroup_jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }), children);
  };

  return FormGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

FormGroup_FormGroup.propTypes = FormGroup_propTypes;
FormGroup_FormGroup.childContextTypes = FormGroup_childContextTypes;
/* harmony default export */ var src_FormGroup = (bootstrapUtils_bsClass('form-group', bsSizes([Size.LARGE, Size.SMALL], FormGroup_FormGroup)));
// CONCATENATED MODULE: ./src/Grid.js



var Grid_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Grid.js";





var Grid_propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: prop_types_default.a.bool,

  /**
   * You can use a custom element for this component
   */
  componentClass: elementType_default.a
};
var Grid_defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Grid_Grid = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Grid, _React$Component);

  function Grid() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Grid.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fluid = _this$props.fluid,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["fluid", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = prefix(bsProps, fluid && 'fluid');
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Grid_jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }));
  };

  return Grid;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Grid_Grid.propTypes = Grid_propTypes;
Grid_Grid.defaultProps = Grid_defaultProps;
/* harmony default export */ var src_Grid = (bootstrapUtils_bsClass('container', Grid_Grid));
// CONCATENATED MODULE: ./src/HelpBlock.js



var HelpBlock_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\HelpBlock.js";




var HelpBlock_HelpBlock = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(HelpBlock, _React$Component);

  function HelpBlock() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HelpBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: HelpBlock_jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }));
  };

  return HelpBlock;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_HelpBlock = (bootstrapUtils_bsClass('help-block', HelpBlock_HelpBlock));
// CONCATENATED MODULE: ./src/Image.js



var Image_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Image.js";




var Image_propTypes = {
  /**
   * Sets image as responsive image
   */
  responsive: prop_types_default.a.bool,

  /**
   * Sets image shape as rounded
   */
  rounded: prop_types_default.a.bool,

  /**
   * Sets image shape as circle
   */
  circle: prop_types_default.a.bool,

  /**
   * Sets image shape as thumbnail
   */
  thumbnail: prop_types_default.a.bool
};
var Image_defaultProps = {
  responsive: false,
  rounded: false,
  circle: false,
  thumbnail: false
};

var Image_Image = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        responsive = _this$props.responsive,
        rounded = _this$props.rounded,
        circle = _this$props.circle,
        thumbnail = _this$props.thumbnail,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["responsive", "rounded", "circle", "thumbnail", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (_classes = {}, _classes[prefix(bsProps, 'responsive')] = responsive, _classes[prefix(bsProps, 'rounded')] = rounded, _classes[prefix(bsProps, 'circle')] = circle, _classes[prefix(bsProps, 'thumbnail')] = thumbnail, _classes);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Image_jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }));
  };

  return Image;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Image_Image.propTypes = Image_propTypes;
Image_Image.defaultProps = Image_defaultProps;
/* harmony default export */ var src_Image = (bootstrapUtils_bsClass('img', Image_Image));
// CONCATENATED MODULE: ./src/InputGroupAddon.js



var InputGroupAddon_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\InputGroupAddon.js";




var InputGroupAddon_InputGroupAddon = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InputGroupAddon, _React$Component);

  function InputGroupAddon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupAddon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: InputGroupAddon_jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }));
  };

  return InputGroupAddon;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_InputGroupAddon = (bootstrapUtils_bsClass('input-group-addon', InputGroupAddon_InputGroupAddon));
// CONCATENATED MODULE: ./src/InputGroupButton.js



var InputGroupButton_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\InputGroupButton.js";




var InputGroupButton_InputGroupButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InputGroupButton, _React$Component);

  function InputGroupButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: InputGroupButton_jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }));
  };

  return InputGroupButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_InputGroupButton = (bootstrapUtils_bsClass('input-group-btn', InputGroupButton_InputGroupButton));
// CONCATENATED MODULE: ./src/InputGroup.js



var InputGroup_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\InputGroup.js";







var InputGroup_InputGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: InputGroup_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }));
  };

  return InputGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

InputGroup_InputGroup.Addon = src_InputGroupAddon;
InputGroup_InputGroup.Button = src_InputGroupButton;
/* harmony default export */ var src_InputGroup = (bootstrapUtils_bsClass('input-group', bsSizes([Size.LARGE, Size.SMALL], InputGroup_InputGroup)));
// CONCATENATED MODULE: ./src/Jumbotron.js



var Jumbotron_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Jumbotron.js";




var Jumbotron_propTypes = {
  componentClass: elementType_default.a
};
var Jumbotron_defaultProps = {
  componentClass: 'div'
};

var Jumbotron_Jumbotron = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Jumbotron_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return Jumbotron;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Jumbotron_Jumbotron.propTypes = Jumbotron_propTypes;
Jumbotron_Jumbotron.defaultProps = Jumbotron_defaultProps;
/* harmony default export */ var src_Jumbotron = (bootstrapUtils_bsClass('jumbotron', Jumbotron_Jumbotron));
// CONCATENATED MODULE: ./src/Label.js







var Label_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Label.js",
    Label_context2;






var Label_Label = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Label, _React$Component);

  function Label() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Label.prototype;

  _proto.hasContent = function hasContent(children) {
    var _context;

    var result = false;

    for_each_default()(_context = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context, children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Label_jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }), children);
  };

  return Label;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_Label = (bootstrapUtils_bsClass('label', bsStyles(concat_default()(Label_context2 = []).call(Label_context2, values_default()(State), [Style.DEFAULT, Style.PRIMARY]), Style.DEFAULT, Label_Label)));
// CONCATENATED MODULE: ./src/ListGroupItem.js




var ListGroupItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ListGroupItem.js";





var ListGroupItem_propTypes = {
  active: prop_types_default.a.any,
  disabled: prop_types_default.a.any,
  header: prop_types_default.a.node,
  listItem: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  href: prop_types_default.a.string,
  type: prop_types_default.a.string
};
var ListGroupItem_defaultProps = {
  listItem: false
};

var ListGroupItem_ListGroupItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ListGroupItem, _React$Component);

  function ListGroupItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.renderHeader = function renderHeader(header, headingClassName) {
    if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(header)) {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(header, {
        className: classnames_default()(header.props.className, headingClassName)
      });
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h4", {
      className: headingClassName,
      __self: this,
      __source: {
        fileName: ListGroupItem_jsxFileName,
        lineNumber: 36,
        columnNumber: 12
      }
    }, header);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        className = _this$props.className,
        header = _this$props.header,
        listItem = _this$props.listItem,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["active", "disabled", "className", "header", "listItem", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      active: active,
      disabled: disabled
    });

    var Component;

    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }

    elementProps.className = classnames_default()(className, classes); // TODO: Deprecate `header` prop.

    if (header) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
        __self: this,
        __source: {
          fileName: ListGroupItem_jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }), this.renderHeader(header, prefix(bsProps, 'heading')), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("p", {
        className: prefix(bsProps, 'text'),
        __self: this,
        __source: {
          fileName: ListGroupItem_jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, children));
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      __self: this,
      __source: {
        fileName: ListGroupItem_jsxFileName,
        lineNumber: 84,
        columnNumber: 12
      }
    }), children);
  };

  return ListGroupItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ListGroupItem_ListGroupItem.propTypes = ListGroupItem_propTypes;
ListGroupItem_ListGroupItem.defaultProps = ListGroupItem_defaultProps;
/* harmony default export */ var src_ListGroupItem = (bootstrapUtils_bsClass('list-group-item', bsStyles(values_default()(State), ListGroupItem_ListGroupItem)));
// CONCATENATED MODULE: ./src/ListGroup.js






var ListGroup_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ListGroup.js";






var ListGroup_propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: elementType_default.a
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (some_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
    return child.type !== src_ListGroupItem || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }

  return 'ul';
}

var ListGroup_ListGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$component = _this$props.componentClass,
        Component = _this$props$component === void 0 ? getDefaultComponent(children) : _this$props$component,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    var useListItem = Component === 'ul' && every_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return child.type === src_ListGroupItem;
    });

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ListGroup_jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }), useListItem ? map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, {
        listItem: true
      });
    }) : children);
  };

  return ListGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ListGroup_ListGroup.propTypes = ListGroup_propTypes;
/* harmony default export */ var src_ListGroup = (bootstrapUtils_bsClass('list-group', ListGroup_ListGroup));
// CONCATENATED MODULE: ./src/MediaBody.js



var MediaBody_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaBody.js";






var MediaBody_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom']),
  componentClass: elementType_default.a
};
var MediaBody_defaultProps = {
  componentClass: 'div'
};

var MediaBody_MediaBody = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaBody, _React$Component);

  function MediaBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[prefix(src_Media.defaultProps, align)] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaBody_jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }));
  };

  return MediaBody;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

MediaBody_MediaBody.propTypes = MediaBody_propTypes;
MediaBody_MediaBody.defaultProps = MediaBody_defaultProps;
/* harmony default export */ var src_MediaBody = (bootstrapUtils_bsClass('media-body', MediaBody_MediaBody));
// CONCATENATED MODULE: ./src/MediaHeading.js



var MediaHeading_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaHeading.js";




var MediaHeading_propTypes = {
  componentClass: elementType_default.a
};
var MediaHeading_defaultProps = {
  componentClass: 'h4'
};

var MediaHeading_MediaHeading = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaHeading, _React$Component);

  function MediaHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaHeading_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return MediaHeading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

MediaHeading_MediaHeading.propTypes = MediaHeading_propTypes;
MediaHeading_MediaHeading.defaultProps = MediaHeading_defaultProps;
/* harmony default export */ var src_MediaHeading = (bootstrapUtils_bsClass('media-heading', MediaHeading_MediaHeading));
// CONCATENATED MODULE: ./src/MediaLeft.js



var MediaLeft_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaLeft.js";





var MediaLeft_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaLeft_MediaLeft = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaLeft, _React$Component);

  function MediaLeft() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaLeft.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[prefix(src_Media.defaultProps, align)] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaLeft_jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }));
  };

  return MediaLeft;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

MediaLeft_MediaLeft.propTypes = MediaLeft_propTypes;
/* harmony default export */ var src_MediaLeft = (bootstrapUtils_bsClass('media-left', MediaLeft_MediaLeft));
// CONCATENATED MODULE: ./src/MediaList.js



var MediaList_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaList.js";




var MediaList_MediaList = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaList, _React$Component);

  function MediaList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaList_jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }));
  };

  return MediaList;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_MediaList = (bootstrapUtils_bsClass('media-list', MediaList_MediaList));
// CONCATENATED MODULE: ./src/MediaListItem.js



var MediaListItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaListItem.js";




var MediaListItem_MediaListItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaListItem, _React$Component);

  function MediaListItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaListItem_jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }));
  };

  return MediaListItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_MediaListItem = (bootstrapUtils_bsClass('media', MediaListItem_MediaListItem));
// CONCATENATED MODULE: ./src/MediaRight.js



var MediaRight_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MediaRight.js";





var MediaRight_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaRight_MediaRight = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MediaRight, _React$Component);

  function MediaRight() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaRight.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-right-top`.
      classes[prefix(src_Media.defaultProps, align)] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: MediaRight_jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    }));
  };

  return MediaRight;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

MediaRight_MediaRight.propTypes = MediaRight_propTypes;
/* harmony default export */ var src_MediaRight = (bootstrapUtils_bsClass('media-right', MediaRight_MediaRight));
// CONCATENATED MODULE: ./src/Media.js



var Media_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Media.js";










var Media_propTypes = {
  componentClass: elementType_default.a
};
var Media_defaultProps = {
  componentClass: 'div'
};

var Media_Media = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Media_jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }));
  };

  return Media;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Media_Media.propTypes = Media_propTypes;
Media_Media.defaultProps = Media_defaultProps;
Media_Media.Heading = src_MediaHeading;
Media_Media.Body = src_MediaBody;
Media_Media.Left = src_MediaLeft;
Media_Media.Right = src_MediaRight;
Media_Media.List = src_MediaList;
Media_Media.ListItem = src_MediaListItem;
/* harmony default export */ var src_Media = (bootstrapUtils_bsClass('media', Media_Media));
// CONCATENATED MODULE: ./src/MenuItem.js





var MenuItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\MenuItem.js";







var MenuItem_propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: prop_types_default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: prop_types_default.a.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: all_default()(prop_types_default.a.bool, function (_ref) {
    var divider = _ref.divider,
        children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: prop_types_default.a.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: prop_types_default.a.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: prop_types_default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: prop_types_default.a.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: prop_types_default.a.func
};
var MenuItem_defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MenuItem, _React$Component);

  function MenuItem(props, context) {
    var _context;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = bind_default()(_context = _this.handleClick).call(_context, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        href = _this$props.href,
        disabled = _this$props.disabled,
        onSelect = _this$props.onSelect,
        eventKey = _this$props.eventKey;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        divider = _this$props2.divider,
        header = _this$props2.header,
        onClick = _this$props2.onClick,
        className = _this$props2.className,
        style = _this$props2.style,
        props = _objectWithoutPropertiesLoose(_this$props2, ["active", "disabled", "divider", "header", "onClick", "className", "style"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['eventKey', 'onSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", _extends({}, elementProps, {
        role: "separator",
        className: classnames_default()(className, 'divider'),
        style: style,
        __self: this,
        __source: {
          fileName: MenuItem_jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }));
    }

    if (header) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", _extends({}, elementProps, {
        role: "heading",
        className: classnames_default()(className, prefix(bsProps, 'header')),
        style: style,
        __self: this,
        __source: {
          fileName: MenuItem_jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }
      }));
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
      role: "presentation",
      className: classnames_default()(className, {
        active: active,
        disabled: disabled
      }),
      style: style,
      __self: this,
      __source: {
        fileName: MenuItem_jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, _extends({}, elementProps, {
      role: "menuitem",
      tabIndex: "-1",
      onClick: utils_createChainedFunction(onClick, this.handleClick),
      __self: this,
      __source: {
        fileName: MenuItem_jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    })));
  };

  return MenuItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

MenuItem_MenuItem.propTypes = MenuItem_propTypes;
MenuItem_MenuItem.defaultProps = MenuItem_defaultProps;
/* harmony default export */ var src_MenuItem = (bootstrapUtils_bsClass('dropdown', MenuItem_MenuItem));
// EXTERNAL MODULE: ./node_modules/dom-helpers/events/index.js
var events = __webpack_require__(84);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ./node_modules/dom-helpers/ownerDocument.js
var ownerDocument = __webpack_require__(33);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/inDOM.js
var inDOM = __webpack_require__(20);
var inDOM_default = /*#__PURE__*/__webpack_require__.n(inDOM);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__(62);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/Modal.js
var lib_Modal = __webpack_require__(45);
var Modal_default = /*#__PURE__*/__webpack_require__.n(lib_Modal);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/utils/isOverflowing.js
var isOverflowing = __webpack_require__(82);
var isOverflowing_default = /*#__PURE__*/__webpack_require__.n(isOverflowing);

// CONCATENATED MODULE: ./src/ModalBody.js



var ModalBody_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ModalBody.js";




var ModalBody_propTypes = {
  componentClass: elementType_default.a
};
var ModalBody_defaultProps = {
  componentClass: 'div'
};

var ModalBody_ModalBody = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalBody, _React$Component);

  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalBody_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return ModalBody;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ModalBody_ModalBody.propTypes = ModalBody_propTypes;
ModalBody_ModalBody.defaultProps = ModalBody_defaultProps;
/* harmony default export */ var src_ModalBody = (bootstrapUtils_bsClass('modal-body', ModalBody_ModalBody));
// CONCATENATED MODULE: ./src/ModalDialog.js



var ModalDialog_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ModalDialog.js";





var ModalDialog_propTypes = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: prop_types_default.a.string
};

var ModalDialog_ModalDialog = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        dialogClassName = _this$props.dialogClassName,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        onMouseDownDialog = _this$props.onMouseDownDialog,
        props = _objectWithoutPropertiesLoose(_this$props, ["dialogClassName", "className", "style", "children", "onMouseDownDialog"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var bsClassName = prefix(bsProps);

    var modalStyle = _extends({
      display: 'block'
    }, style);

    var dialogClasses = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bsClassName] = false, _extends2[prefix(bsProps, 'dialog')] = true, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      tabIndex: "-1",
      role: "dialog",
      style: modalStyle,
      className: classnames_default()(className, bsClassName),
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: classnames_default()(dialogClassName, dialogClasses),
      onMouseDown: onMouseDownDialog,
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 53,
        columnNumber: 10
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'content'),
      role: "document",
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, children)));
  };

  return ModalDialog;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ModalDialog_ModalDialog.propTypes = ModalDialog_propTypes;
/* harmony default export */ var src_ModalDialog = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], ModalDialog_ModalDialog)));
// CONCATENATED MODULE: ./src/ModalFooter.js



var ModalFooter_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ModalFooter.js";




var ModalFooter_propTypes = {
  componentClass: elementType_default.a
};
var ModalFooter_defaultProps = {
  componentClass: 'div'
};

var ModalFooter_ModalFooter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalFooter_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return ModalFooter;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ModalFooter_ModalFooter.propTypes = ModalFooter_propTypes;
ModalFooter_ModalFooter.defaultProps = ModalFooter_defaultProps;
/* harmony default export */ var src_ModalFooter = (bootstrapUtils_bsClass('modal-footer', ModalFooter_ModalFooter));
// CONCATENATED MODULE: ./src/ModalHeader.js



var ModalHeader_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ModalHeader.js";





 // TODO: `aria-label` should be `closeLabel`.

var ModalHeader_propTypes = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: prop_types_default.a.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: prop_types_default.a.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: prop_types_default.a.func
};
var ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader_contextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};

var ModalHeader_ModalHeader = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["closeLabel", "closeButton", "onHide", "className", "children"]);

    var modal = this.context.$bs_modal;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalHeader_jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }), closeButton && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_CloseButton, {
      label: closeLabel,
      onClick: utils_createChainedFunction(modal && modal.onHide, onHide),
      __self: this,
      __source: {
        fileName: ModalHeader_jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), children);
  };

  return ModalHeader;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
ModalHeader_ModalHeader.contextTypes = ModalHeader_contextTypes;
/* harmony default export */ var src_ModalHeader = (bootstrapUtils_bsClass('modal-header', ModalHeader_ModalHeader));
// CONCATENATED MODULE: ./src/ModalTitle.js



var ModalTitle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ModalTitle.js";




var ModalTitle_propTypes = {
  componentClass: elementType_default.a
};
var ModalTitle_defaultProps = {
  componentClass: 'h4'
};

var ModalTitle_ModalTitle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalTitle, _React$Component);

  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalTitle_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return ModalTitle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ModalTitle_ModalTitle.propTypes = ModalTitle_propTypes;
ModalTitle_ModalTitle.defaultProps = ModalTitle_defaultProps;
/* harmony default export */ var src_ModalTitle = (bootstrapUtils_bsClass('modal-title', ModalTitle_ModalTitle));
// CONCATENATED MODULE: ./src/Modal.js





var Modal_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Modal.js";






















var Modal_propTypes = _extends({}, Modal_default.a.propTypes, src_ModalDialog.propTypes, {
  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: prop_types_default.a.oneOf(['static', true, false]),

  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: prop_types_default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: prop_types_default.a.bool,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: elementType_default.a,

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: prop_types_default.a.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: prop_types_default.a.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * @private
   */
  container: Modal_default.a.propTypes.container
});

var Modal_defaultProps = _extends({}, Modal_default.a.defaultProps, {
  animation: true,
  dialogComponentClass: src_ModalDialog
});

var Modal_childContextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Fade, _extends({}, props, {
    timeout: Modal_Modal.TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 139,
      columnNumber: 10
    }
  }));
}

function BackdropTransition(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Fade, _extends({}, props, {
    timeout: Modal_Modal.BACKDROP_TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 143,
      columnNumber: 10
    }
  }));
}
/* eslint-enable no-use-before-define */


var Modal_Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props, context) {
    var _context, _context2, _context3, _context4, _context5;

    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleDialogBackdropMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (ev) {
      var dialogNode = _this._modal.getDialogElement();

      if (_this._waitingForMouseUp && ev.target === dialogNode) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleEntering = bind_default()(_context = _this.handleEntering).call(_context, _assertThisInitialized(_this));
    _this.handleExited = bind_default()(_context2 = _this.handleExited).call(_context2, _assertThisInitialized(_this));
    _this.handleWindowResize = bind_default()(_context3 = _this.handleWindowResize).call(_context3, _assertThisInitialized(_this));
    _this.handleDialogClick = bind_default()(_context4 = _this.handleDialogClick).call(_context4, _assertThisInitialized(_this));
    _this.setModalRef = bind_default()(_context5 = _this.setModalRef).call(_context5, _assertThisInitialized(_this));
    _this.state = {
      style: {}
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  _proto.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };

  _proto.handleDialogClick = function handleDialogClick(e) {
    if (this._ignoreBackdropClick || e.target !== e.currentTarget) {
      this._ignoreBackdropClick = false;
      return;
    }

    this.props.onHide();
  };

  _proto.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  _proto.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  _proto.updateStyle = function updateStyle() {
    if (!inDOM_default.a) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();

    var dialogHeight = dialogNode.scrollHeight;
    var document = ownerDocument_default()(dialogNode);
    var bodyIsOverflowing = isOverflowing_default()(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        backdrop = _this$props.backdrop,
        backdropClassName = _this$props.backdropClassName,
        animation = _this$props.animation,
        show = _this$props.show,
        Dialog = _this$props.dialogComponentClass,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        onEntering = _this$props.onEntering,
        onExited = _this$props.onExited,
        props = _objectWithoutPropertiesLoose(_this$props, ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"]);

    var _splitComponentProps = splitComponentProps(props, Modal_default.a),
        baseModalProps = _splitComponentProps[0],
        dialogProps = _splitComponentProps[1];

    var inClassName = show && !animation && 'in';
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Modal_default.a, _extends({}, baseModalProps, {
      ref: this.setModalRef,
      show: show,
      containerClassName: prefix(props, 'open'),
      transition: animation ? DialogTransition : undefined,
      backdrop: backdrop,
      backdropTransition: animation ? BackdropTransition : undefined,
      backdropClassName: classnames_default()(prefix(props, 'backdrop'), backdropClassName, inClassName),
      onEntering: utils_createChainedFunction(onEntering, this.handleEntering),
      onExited: utils_createChainedFunction(onExited, this.handleExited),
      onMouseUp: this.handleMouseUp,
      __self: this,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 265,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Dialog, _extends({}, dialogProps, {
      style: _extends({}, this.state.style, style),
      className: classnames_default()(className, inClassName),
      onClick: backdrop === true ? this.handleDialogClick : null,
      onMouseDownDialog: this.handleDialogBackdropMouseDown,
      __self: this,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }
    }), children));
  };

  return Modal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Modal_Modal.propTypes = Modal_propTypes;
Modal_Modal.defaultProps = Modal_defaultProps;
Modal_Modal.childContextTypes = Modal_childContextTypes;
Modal_Modal.Body = src_ModalBody;
Modal_Modal.Header = src_ModalHeader;
Modal_Modal.Title = src_ModalTitle;
Modal_Modal.Footer = src_ModalFooter;
Modal_Modal.Dialog = src_ModalDialog;
Modal_Modal.TRANSITION_DURATION = 300;
Modal_Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var src_Modal = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], Modal_Modal)));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js
var instance_find = __webpack_require__(85);
var find_default = /*#__PURE__*/__webpack_require__.n(instance_find);

// CONCATENATED MODULE: ./src/Nav.js







var Nav_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Nav.js";









 // TODO: Should we expose `<NavItem>` as `<Nav.Item>`?
// TODO: This `bsStyle` is very unlike the others. Should we rename it?
// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var Nav_propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: prop_types_default.a.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: prop_types_default.a.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: prop_types_default.a.bool,
  justified: all_default()(prop_types_default.a.bool, function (_ref) {
    var justified = _ref.justified,
        navbar = _ref.navbar;
    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: prop_types_default.a.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: prop_types_default.a.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: prop_types_default.a.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: prop_types_default.a.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: prop_types_default.a.bool
};
var Nav_defaultProps = {
  justified: false,
  pullRight: false,
  pullLeft: false,
  stacked: false
};
var Nav_contextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    onSelect: prop_types_default.a.func
  }),
  $bs_tabContainer: prop_types_default.a.shape({
    activeKey: prop_types_default.a.any,
    onSelect: prop_types_default.a.func.isRequired,
    getTabId: prop_types_default.a.func.isRequired,
    getPaneId: prop_types_default.a.func.isRequired
  })
};

var Nav_Nav = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Nav, _React$Component);

  function Nav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this = this;

    if (!this._needsRefocus) {
      return;
    }

    this._needsRefocus = false;
    var children = this.props.children;

    var _this$getActiveProps = this.getActiveProps(),
        activeKey = _this$getActiveProps.activeKey,
        activeHref = _this$getActiveProps.activeHref;

    var activeChild = find_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    });

    var childrenArray = ValidComponentChildren.toArray(children);

    var activeChildIndex = instance_index_of_default()(childrenArray).call(childrenArray, activeChild);

    var childNodes = external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this).children;
    var activeNode = childNodes && childNodes[activeChildIndex];

    if (!activeNode || !activeNode.firstChild) {
      return;
    }

    activeNode.firstChild.focus();
  };

  _proto.getActiveProps = function getActiveProps() {
    var tabContainer = this.context.$bs_tabContainer;

    if (tabContainer) {
       false ? undefined : void 0;
      return tabContainer;
    }

    return this.props;
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    var _this2 = this;

    var children = this.props.children;

    var validChildren = filter_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return child.props.eventKey != null && !child.props.disabled;
    });

    var _this$getActiveProps2 = this.getActiveProps(),
        activeKey = _this$getActiveProps2.activeKey,
        activeHref = _this$getActiveProps2.activeHref;

    var activeChild = find_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return _this2.isActive(child, activeKey, activeHref);
    }); // This assumes the active child is not disabled.


    var activeChildIndex = instance_index_of_default()(validChildren).call(validChildren, activeChild);

    if (activeChildIndex === -1) {
      // Something has gone wrong. Select the first valid child we can find.
      return validChildren[0];
    }

    var nextIndex = activeChildIndex + offset;
    var numValidChildren = validChildren.length;

    if (nextIndex >= numValidChildren) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numValidChildren - 1;
    }

    return validChildren[nextIndex];
  };

  _proto.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
    var _this3 = this;

    if (!tabContainer && navRole !== 'tablist') {
      // No tab props here.
      return null;
    }

    var _child$props = child.props,
        id = _child$props.id,
        controls = _child$props['aria-controls'],
        eventKey = _child$props.eventKey,
        role = _child$props.role,
        onKeyDown = _child$props.onKeyDown,
        tabIndex = _child$props.tabIndex;

    if (tabContainer) {
       false ? undefined : void 0;
      id = tabContainer.getTabId(eventKey);
      controls = tabContainer.getPaneId(eventKey);
    }

    if (navRole === 'tablist') {
      role = role || 'tab';
      onKeyDown = utils_createChainedFunction(function (event) {
        return _this3.handleTabKeyDown(onSelect, event);
      }, onKeyDown);
      tabIndex = active ? tabIndex : -1;
    }

    return {
      id: id,
      role: role,
      onKeyDown: onKeyDown,
      'aria-controls': controls,
      tabIndex: tabIndex
    };
  };

  _proto.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
    var nextActiveChild;

    switch (event.keyCode) {
      case keycode_default.a.codes.left:
      case keycode_default.a.codes.up:
        nextActiveChild = this.getNextActiveChild(-1);
        break;

      case keycode_default.a.codes.right:
      case keycode_default.a.codes.down:
        nextActiveChild = this.getNextActiveChild(1);
        break;

      default:
        // It was a different key; don't handle this keypress.
        return;
    }

    event.preventDefault();

    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey != null) {
      onSelect(nextActiveChild.props.eventKey);
    }

    this._needsRefocus = true;
  };

  _proto.isActive = function isActive(_ref2, activeKey, activeHref) {
    var props = _ref2.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _extends2,
        _this4 = this;

    var _this$props = this.props,
        stacked = _this$props.stacked,
        justified = _this$props.justified,
        onSelect = _this$props.onSelect,
        propsRole = _this$props.role,
        propsNavbar = _this$props.navbar,
        pullRight = _this$props.pullRight,
        pullLeft = _this$props.pullLeft,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["stacked", "justified", "onSelect", "role", "navbar", "pullRight", "pullLeft", "className", "children"]);

    var tabContainer = this.context.$bs_tabContainer;
    var role = propsRole || (tabContainer ? 'tablist' : null);

    var _this$getActiveProps3 = this.getActiveProps(),
        activeKey = _this$getActiveProps3.activeKey,
        activeHref = _this$getActiveProps3.activeHref;

    delete props.activeKey; // Accessed via this.getActiveProps().

    delete props.activeHref; // Accessed via this.getActiveProps().

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'stacked')] = stacked, _extends2[prefix(bsProps, 'justified')] = justified, _extends2));

    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
    var pullLeftClassName;
    var pullRightClassName;

    if (navbar) {
      var navbarProps = this.context.$bs_navbar || {
        bsClass: 'navbar'
      };
      classes[prefix(navbarProps, 'nav')] = true;
      pullRightClassName = prefix(navbarProps, 'right');
      pullLeftClassName = prefix(navbarProps, 'left');
    } else {
      pullRightClassName = 'pull-right';
      pullLeftClassName = 'pull-left';
    }

    classes[pullRightClassName] = pullRight;
    classes[pullLeftClassName] = pullLeft;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", _extends({}, elementProps, {
      role: role,
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Nav_jsxFileName,
        lineNumber: 323,
        columnNumber: 7
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      var active = _this4.isActive(child, activeKey, activeHref);

      var childOnSelect = utils_createChainedFunction(child.props.onSelect, onSelect, navbar && navbar.onSelect, tabContainer && tabContainer.onSelect);
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, _extends({}, _this4.getTabProps(child, tabContainer, role, active, childOnSelect), {
        active: active,
        activeKey: activeKey,
        activeHref: activeHref,
        onSelect: childOnSelect
      }));
    }));
  };

  return Nav;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Nav_Nav.propTypes = Nav_propTypes;
Nav_Nav.defaultProps = Nav_defaultProps;
Nav_Nav.contextTypes = Nav_contextTypes;
/* harmony default export */ var src_Nav = (bootstrapUtils_bsClass('nav', bsStyles(['tabs', 'pills'], Nav_Nav)));
// CONCATENATED MODULE: ./src/NavbarBrand.js



var NavbarBrand_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavbarBrand.js";




var NavbarBrand_contextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var NavbarBrand_NavbarBrand = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = prefix(navbarProps, 'brand');

    if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(children)) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, {
        className: classnames_default()(children.props.className, className, bsClassName)
      });
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", _extends({}, props, {
      className: classnames_default()(className, bsClassName),
      __self: this,
      __source: {
        fileName: NavbarBrand_jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }), children);
  };

  return NavbarBrand;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavbarBrand_NavbarBrand.contextTypes = NavbarBrand_contextTypes;
/* harmony default export */ var src_NavbarBrand = (NavbarBrand_NavbarBrand);
// CONCATENATED MODULE: ./src/NavbarCollapse.js



var NavbarCollapse_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavbarCollapse.js";




var NavbarCollapse_contextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    expanded: prop_types_default.a.bool
  })
};

var NavbarCollapse_NavbarCollapse = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = prefix(navbarProps, 'collapse');
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Collapse, _extends({
      "in": navbarProps.expanded
    }, props, {
      __self: this,
      __source: {
        fileName: NavbarCollapse_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: bsClassName,
      __self: this,
      __source: {
        fileName: NavbarCollapse_jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, children));
  };

  return NavbarCollapse;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavbarCollapse_NavbarCollapse.contextTypes = NavbarCollapse_contextTypes;
/* harmony default export */ var src_NavbarCollapse = (NavbarCollapse_NavbarCollapse);
// CONCATENATED MODULE: ./src/NavbarHeader.js



var NavbarHeader_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavbarHeader.js";




var NavbarHeader_contextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var NavbarHeader_NavbarHeader = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavbarHeader, _React$Component);

  function NavbarHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = prefix(navbarProps, 'header');
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, props, {
      className: classnames_default()(className, bsClassName),
      __self: this,
      __source: {
        fileName: NavbarHeader_jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }));
  };

  return NavbarHeader;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavbarHeader_NavbarHeader.contextTypes = NavbarHeader_contextTypes;
/* harmony default export */ var src_NavbarHeader = (NavbarHeader_NavbarHeader);
// CONCATENATED MODULE: ./src/NavbarToggle.js



var NavbarToggle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavbarToggle.js";





var NavbarToggle_propTypes = {
  onClick: prop_types_default.a.func,

  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: prop_types_default.a.node
};
var NavbarToggle_contextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    expanded: prop_types_default.a.bool,
    onToggle: prop_types_default.a.func.isRequired
  })
};

var NavbarToggle_NavbarToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavbarToggle, _React$Component);

  function NavbarToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onClick = _this$props.onClick,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["onClick", "className", "children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };

    var buttonProps = _extends({
      type: 'button'
    }, props, {
      onClick: utils_createChainedFunction(onClick, navbarProps.onToggle),
      className: classnames_default()(className, prefix(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
    });

    if (children) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", _extends({}, buttonProps, {
        __self: this,
        __source: {
          fileName: NavbarToggle_jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }
      }), children);
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", _extends({}, buttonProps, {
      __self: this,
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, "Toggle navigation"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "icon-bar",
      __self: this,
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "icon-bar",
      __self: this,
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "icon-bar",
      __self: this,
      __source: {
        fileName: NavbarToggle_jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }));
  };

  return NavbarToggle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavbarToggle_NavbarToggle.propTypes = NavbarToggle_propTypes;
NavbarToggle_NavbarToggle.contextTypes = NavbarToggle_contextTypes;
/* harmony default export */ var src_NavbarToggle = (NavbarToggle_NavbarToggle);
// CONCATENATED MODULE: ./src/Navbar.js





var Navbar_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Navbar.js";
// TODO: Remove this pragma once we upgrade eslint-config-airbnb.

/* eslint-disable react/no-multi-comp */













var Navbar_propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: prop_types_default.a.bool,

  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: prop_types_default.a.bool,

  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: prop_types_default.a.bool,

  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: prop_types_default.a.bool,

  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: prop_types_default.a.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType_default.a,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: prop_types_default.a.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: prop_types_default.a.func,

  /**
   * Sets `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * The onSelect callback should be used instead for more complex operations
   * that need to be executed after the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: prop_types_default.a.bool,

  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: prop_types_default.a.bool,
  role: prop_types_default.a.string
};
var Navbar_defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  collapseOnSelect: false
};
var Navbar_childContextTypes = {
  $bs_navbar: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    expanded: prop_types_default.a.bool,
    onToggle: prop_types_default.a.func.isRequired,
    onSelect: prop_types_default.a.func
  })
};

var Navbar_Navbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Navbar, _React$Component);

  function Navbar(props, context) {
    var _context, _context2;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = bind_default()(_context = _this.handleToggle).call(_context, _assertThisInitialized(_this));
    _this.handleCollapse = bind_default()(_context2 = _this.handleCollapse).call(_context2, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        bsClass = _this$props.bsClass,
        expanded = _this$props.expanded,
        onSelect = _this$props.onSelect,
        collapseOnSelect = _this$props.collapseOnSelect;
    return {
      $bs_navbar: {
        bsClass: bsClass,
        expanded: expanded,
        onToggle: this.handleToggle,
        onSelect: utils_createChainedFunction(onSelect, collapseOnSelect ? this.handleCollapse : null)
      }
    };
  };

  _proto.handleCollapse = function handleCollapse() {
    var _this$props2 = this.props,
        onToggle = _this$props2.onToggle,
        expanded = _this$props2.expanded;

    if (expanded) {
      onToggle(false);
    }
  };

  _proto.handleToggle = function handleToggle() {
    var _this$props3 = this.props,
        onToggle = _this$props3.onToggle,
        expanded = _this$props3.expanded;
    onToggle(!expanded);
  };

  _proto.render = function render() {
    var _extends2;

    var _this$props4 = this.props,
        Component = _this$props4.componentClass,
        fixedTop = _this$props4.fixedTop,
        fixedBottom = _this$props4.fixedBottom,
        staticTop = _this$props4.staticTop,
        inverse = _this$props4.inverse,
        fluid = _this$props4.fluid,
        className = _this$props4.className,
        children = _this$props4.children,
        props = _objectWithoutPropertiesLoose(_this$props4, ["componentClass", "fixedTop", "fixedBottom", "staticTop", "inverse", "fluid", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['expanded', 'onToggle', 'onSelect', 'collapseOnSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1]; // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = Style.INVERSE;
    }

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'fixed-top')] = fixedTop, _extends2[prefix(bsProps, 'fixed-bottom')] = fixedBottom, _extends2[prefix(bsProps, 'static-top')] = staticTop, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 198,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Grid, {
      fluid: fluid,
      __self: this,
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }
    }, children));
  };

  return Navbar;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Navbar_Navbar.propTypes = Navbar_propTypes;
Navbar_Navbar.defaultProps = Navbar_defaultProps;
Navbar_Navbar.childContextTypes = Navbar_childContextTypes;
bootstrapUtils_bsClass('navbar', Navbar_Navbar);
var UncontrollableNavbar = uncontrollable(Navbar_Navbar, {
  expanded: 'onToggle'
});

function createSimpleWrapper(tag, suffix, displayName) {
  var _this2 = this;

  var Wrapper = function Wrapper(_ref, _ref2) {
    var Component = _ref.componentClass,
        className = _ref.className,
        pullRight = _ref.pullRight,
        pullLeft = _ref.pullLeft,
        props = _objectWithoutPropertiesLoose(_ref, ["componentClass", "className", "pullRight", "pullLeft"]);

    var _ref2$$bs_navbar = _ref2.$bs_navbar,
        navbarProps = _ref2$$bs_navbar === void 0 ? {
      bsClass: 'navbar'
    } : _ref2$$bs_navbar;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, prefix(navbarProps, suffix), pullRight && prefix(navbarProps, 'right'), pullLeft && prefix(navbarProps, 'left')),
      __self: _this2,
      __source: {
        fileName: Navbar_jsxFileName,
        lineNumber: 218,
        columnNumber: 5
      }
    }));
  };

  Wrapper.displayName = displayName;
  Wrapper.propTypes = {
    componentClass: elementType_default.a,
    pullRight: prop_types_default.a.bool,
    pullLeft: prop_types_default.a.bool
  };
  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };
  Wrapper.contextTypes = {
    $bs_navbar: prop_types_default.a.shape({
      bsClass: prop_types_default.a.string
    })
  };
  return Wrapper;
}

UncontrollableNavbar.Brand = src_NavbarBrand;
UncontrollableNavbar.Header = src_NavbarHeader;
UncontrollableNavbar.Toggle = src_NavbarToggle;
UncontrollableNavbar.Collapse = src_NavbarCollapse;
UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink'); // Set bsStyles here so they can be overridden.

/* harmony default export */ var src_Navbar = (bsStyles([Style.DEFAULT, Style.INVERSE], Style.DEFAULT)(UncontrollableNavbar));
// CONCATENATED MODULE: ./src/NavDropdown.js





var NavDropdown_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavDropdown.js";







var NavDropdown_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  title: prop_types_default.a.node.isRequired,
  noCaret: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  activeKey: prop_types_default.a.any,
  activeHref: prop_types_default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var NavDropdown_NavDropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.isActive = function isActive(_ref, activeKey, activeHref) {
    var _this = this;

    var props = _ref.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (some_default()(ValidComponentChildren).call(ValidComponentChildren, props.children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    })) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        title = _this$props.title,
        activeKey = _this$props.activeKey,
        activeHref = _this$props.activeHref,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["title", "activeKey", "activeHref", "className", "style", "children"]);

    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().

    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1]; // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.


    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      componentClass: "li",
      className: classnames_default()(className, {
        active: active
      }),
      style: style,
      __self: this,
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown.Toggle, _extends({}, toggleProps, {
      useAnchor: true,
      __self: this,
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }), title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown.Menu, {
      __self: this,
      __source: {
        fileName: NavDropdown_jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, {
        active: _this2.isActive(child, activeKey, activeHref)
      });
    })));
  };

  return NavDropdown;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavDropdown_NavDropdown.propTypes = NavDropdown_propTypes;
/* harmony default export */ var src_NavDropdown = (NavDropdown_NavDropdown);
// CONCATENATED MODULE: ./src/NavItem.js





var NavItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\NavItem.js";





var NavItem_propTypes = {
  active: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  href: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  onSelect: prop_types_default.a.func,
  eventKey: prop_types_default.a.any
};
var NavItem_defaultProps = {
  active: false,
  disabled: false
};

var NavItem_NavItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavItem, _React$Component);

  function NavItem(props, context) {
    var _context;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = bind_default()(_context = _this.handleClick).call(_context, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavItem.prototype;

  _proto.handleClick = function handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey, e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        onClick = _this$props.onClick,
        className = _this$props.className,
        style = _this$props.style,
        props = _objectWithoutPropertiesLoose(_this$props, ["active", "disabled", "onClick", "className", "style"]);

    delete props.onSelect;
    delete props.eventKey; // These are injected down by `<Nav>` for building `<SubNav>`s.

    delete props.activeKey;
    delete props.activeHref;

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button';
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
      role: "presentation",
      className: classnames_default()(className, {
        active: active,
        disabled: disabled
      }),
      style: style,
      __self: this,
      __source: {
        fileName: NavItem_jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, _extends({}, props, {
      disabled: disabled,
      onClick: utils_createChainedFunction(onClick, this.handleClick),
      __self: this,
      __source: {
        fileName: NavItem_jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    })));
  };

  return NavItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

NavItem_NavItem.propTypes = NavItem_propTypes;
NavItem_NavItem.defaultProps = NavItem_defaultProps;
/* harmony default export */ var src_NavItem = (NavItem_NavItem);
// EXTERNAL MODULE: ./node_modules/react-overlays/lib/Overlay.js
var lib_Overlay = __webpack_require__(86);
var Overlay_default = /*#__PURE__*/__webpack_require__.n(lib_Overlay);

// CONCATENATED MODULE: ./src/Overlay.js



var Overlay_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Overlay.js";







var Overlay_propTypes = _extends({}, Overlay_default.a.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types_default.a.bool,

  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: prop_types_default.a.bool,

  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: prop_types_default.a.func,

  /**
   * Use animation
   */
  animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * Sets the direction of the Overlay.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left'])
});

var Overlay_defaultProps = {
  animation: src_Fade,
  rootClose: false,
  show: false,
  placement: 'right'
};

var Overlay_Overlay = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Overlay, _React$Component);

  function Overlay() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Overlay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        animation = _this$props.animation,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["animation", "children"]);

    var transition = animation === true ? src_Fade : animation || null;
    var child;

    if (!transition) {
      child = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(children, {
        className: classnames_default()(children.props.className, 'in')
      });
    } else {
      child = children;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Overlay_default.a, _extends({}, props, {
      transition: transition,
      __self: this,
      __source: {
        fileName: Overlay_jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }), child);
  };

  return Overlay;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Overlay_Overlay.propTypes = Overlay_propTypes;
Overlay_Overlay.defaultProps = Overlay_defaultProps;
/* harmony default export */ var src_Overlay = (Overlay_Overlay);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js
var is_array = __webpack_require__(123);
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./src/OverlayTrigger.js








var OverlayTrigger_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\OverlayTrigger.js";







/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */

function isOneOf(one, of) {
  if (is_array_default()(of)) {
    return instance_index_of_default()(of).call(of, one) >= 0;
  }

  return one === of;
}

var triggerType = prop_types_default.a.oneOf(['click', 'hover', 'focus']);

var OverlayTrigger_propTypes = _extends({}, src_Overlay.propTypes, {
  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: prop_types_default.a.oneOfType([triggerType, prop_types_default.a.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: prop_types_default.a.number,

  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: prop_types_default.a.number,

  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: prop_types_default.a.number,
  // FIXME: This should be `defaultShow`.

  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: prop_types_default.a.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: prop_types_default.a.node.isRequired,

  /**
   * @private
   */
  onBlur: prop_types_default.a.func,

  /**
   * @private
   */
  onClick: prop_types_default.a.func,

  /**
   * @private
   */
  onFocus: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseOut: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseOver: prop_types_default.a.func,
  // Overridden props from `<Overlay>`.

  /**
   * @private
   */
  target: prop_types_default.a.oneOf([null]),

  /**
   * @private
   */
  onHide: prop_types_default.a.oneOf([null]),

  /**
   * @private
   */
  show: prop_types_default.a.oneOf([null])
});

var OverlayTrigger_defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
};

var OverlayTrigger_OverlayTrigger = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(OverlayTrigger, _React$Component);

  function OverlayTrigger(props, context) {
    var _context, _context2, _context3, _context4;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = bind_default()(_context = _this.handleToggle).call(_context, _assertThisInitialized(_this));
    _this.handleDelayedShow = bind_default()(_context2 = _this.handleDelayedShow).call(_context2, _assertThisInitialized(_this));
    _this.handleDelayedHide = bind_default()(_context3 = _this.handleDelayedHide).call(_context3, _assertThisInitialized(_this));
    _this.handleHide = bind_default()(_context4 = _this.handleHide).call(_context4, _assertThisInitialized(_this));

    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e, 'toElement');
    };

    _this._mountNode = null;
    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  var _proto = OverlayTrigger.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  _proto.handleDelayedHide = function handleDelayedHide() {
    var _this2 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = set_timeout_default()(function () {
      _this2._hoverHideDelay = null;

      _this2.hide();
    }, delay);
  };

  _proto.handleDelayedShow = function handleDelayedShow() {
    var _this3 = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = set_timeout_default()(function () {
      _this3._hoverShowDelay = null;

      _this3.show();
    }, delay);
  };

  _proto.handleHide = function handleHide() {
    this.hide();
  } // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  ;

  _proto.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !contains_default()(target, related)) {
      handler(e);
    }
  };

  _proto.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto.makeOverlay = function makeOverlay(overlay, props) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Overlay, _extends({}, props, {
      show: this.state.show,
      onHide: this.handleHide,
      target: this,
      __self: this,
      __source: {
        fileName: OverlayTrigger_jsxFileName,
        lineNumber: 220,
        columnNumber: 7
      }
    }), overlay);
  };

  _proto.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto.renderOverlay = function renderOverlay() {
    external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        onBlur = _this$props.onBlur,
        onClick = _this$props.onClick,
        onFocus = _this$props.onFocus,
        onMouseOut = _this$props.onMouseOut,
        onMouseOver = _this$props.onMouseOver,
        props = _objectWithoutPropertiesLoose(_this$props, ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"]);

    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;
    var child = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children);
    var childProps = child.props;
    var triggerProps = {};

    if (this.state.show) {
      triggerProps['aria-describedby'] = overlay.props.id;
    } // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.


    triggerProps.onClick = utils_createChainedFunction(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = utils_createChainedFunction(triggerProps.onClick, this.handleToggle);
    }

    if (isOneOf('hover', trigger)) {
       false ? undefined : void 0;
      triggerProps.onMouseOver = utils_createChainedFunction(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
      triggerProps.onMouseOut = utils_createChainedFunction(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = utils_createChainedFunction(childProps.onFocus, onFocus, this.handleDelayedShow);
      triggerProps.onBlur = utils_createChainedFunction(childProps.onBlur, onBlur, this.handleDelayedHide);
    }

    this._overlay = this.makeOverlay(overlay, props);
    return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, triggerProps);
  };

  return OverlayTrigger;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

OverlayTrigger_OverlayTrigger.propTypes = OverlayTrigger_propTypes;
OverlayTrigger_OverlayTrigger.defaultProps = OverlayTrigger_defaultProps;
/* harmony default export */ var src_OverlayTrigger = (OverlayTrigger_OverlayTrigger);
// CONCATENATED MODULE: ./src/PageHeader.js



var PageHeader_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PageHeader.js";




var PageHeader_PageHeader = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PageHeader, _React$Component);

  function PageHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: PageHeader_jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: PageHeader_jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, children));
  };

  return PageHeader;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_PageHeader = (bootstrapUtils_bsClass('page-header', PageHeader_PageHeader));
// CONCATENATED MODULE: ./src/PagerItem.js





var PagerItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PagerItem.js";





var PagerItem_propTypes = {
  disabled: prop_types_default.a.bool,
  previous: prop_types_default.a.bool,
  next: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  onSelect: prop_types_default.a.func,
  eventKey: prop_types_default.a.any
};
var PagerItem_defaultProps = {
  disabled: false,
  previous: false,
  next: false
};

var PagerItem_PagerItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PagerItem, _React$Component);

  function PagerItem(props, context) {
    var _context;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleSelect = bind_default()(_context = _this.handleSelect).call(_context, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = PagerItem.prototype;

  _proto.handleSelect = function handleSelect(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        onSelect = _this$props.onSelect,
        eventKey = _this$props.eventKey;

    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onSelect) {
      onSelect(eventKey, e);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        previous = _this$props2.previous,
        next = _this$props2.next,
        onClick = _this$props2.onClick,
        className = _this$props2.className,
        style = _this$props2.style,
        props = _objectWithoutPropertiesLoose(_this$props2, ["disabled", "previous", "next", "onClick", "className", "style"]);

    delete props.onSelect;
    delete props.eventKey;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
      className: classnames_default()(className, {
        disabled: disabled,
        previous: previous,
        next: next
      }),
      style: style,
      __self: this,
      __source: {
        fileName: PagerItem_jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SafeAnchor, _extends({}, props, {
      disabled: disabled,
      onClick: utils_createChainedFunction(onClick, this.handleSelect),
      __self: this,
      __source: {
        fileName: PagerItem_jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    })));
  };

  return PagerItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PagerItem_PagerItem.propTypes = PagerItem_propTypes;
PagerItem_PagerItem.defaultProps = PagerItem_defaultProps;
/* harmony default export */ var src_PagerItem = (PagerItem_PagerItem);
// CONCATENATED MODULE: ./src/utils/deprecationWarning.js



var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message;

  if (typeof oldname === 'object') {
    message = oldname.message;
  } else {
    message = oldname + " is deprecated. Use " + newname + " instead.";

    if (link) {
      message += "\nYou can read more about it at " + link;
    }
  }

  if (warned[message]) {
    return;
  }

   false ? undefined : void 0;
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return /*#__PURE__*/function (_Component) {
    _inheritsLoose(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = DeprecatedComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      // eslint-disable-line
      deprecationWarning.apply(void 0, args);

      if (_Component.prototype.UNSAFE_componentWillMount) {
        var _Component$prototype$, _context;

        for (var _len2 = arguments.length, methodArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          methodArgs[_key2] = arguments[_key2];
        }

        (_Component$prototype$ = _Component.prototype.UNSAFE_componentWillMount).call.apply(_Component$prototype$, concat_default()(_context = [this]).call(_context, methodArgs));
      }
    };

    return DeprecatedComponent;
  }(Component);
};

/* harmony default export */ var utils_deprecationWarning = (deprecationWarning);
function _resetWarned() {
  warned = {};
}
// CONCATENATED MODULE: ./src/PageItem.js


/* harmony default export */ var PageItem = (utils_deprecationWarning.wrapper(src_PagerItem, '`<PageItem>`', '`<Pager.Item>`'));
// CONCATENATED MODULE: ./src/Pager.js




var Pager_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Pager.js";







var Pager_propTypes = {
  onSelect: prop_types_default.a.func
};

var Pager_Pager = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Pager, _React$Component);

  function Pager() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pager.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["onSelect", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Pager_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, {
        onSelect: utils_createChainedFunction(child.props.onSelect, onSelect)
      });
    }));
  };

  return Pager;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Pager_Pager.propTypes = Pager_propTypes;
Pager_Pager.Item = src_PagerItem;
/* harmony default export */ var src_Pager = (bootstrapUtils_bsClass('pager', Pager_Pager));
// CONCATENATED MODULE: ./src/PaginationItem.js



var PaginationItem_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PaginationItem.js";

/* eslint-disable react/no-multi-comp */




var PaginationItem_propTypes = {
  eventKey: prop_types_default.a.any,
  className: prop_types_default.a.string,
  onSelect: prop_types_default.a.func,
  disabled: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  activeLabel: prop_types_default.a.string.isRequired
};
var PaginationItem_defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PaginationItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : src_SafeAnchor;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", {
    style: style,
    className: classnames_default()(className, {
      active: active,
      disabled: disabled
    }),
    __self: this,
    __source: {
      fileName: PaginationItem_jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({
    disabled: disabled
  }, props, {
    __self: this,
    __source: {
      fileName: PaginationItem_jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), children, active && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: PaginationItem_jsxFileName,
      lineNumber: 37,
      columnNumber: 20
    }
  }, activeLabel)));
}
PaginationItem.propTypes = PaginationItem_propTypes;
PaginationItem.defaultProps = PaginationItem_defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose(_this$props, ["disabled", "children", "className"]);

      var Component = disabled ? 'span' : src_SafeAnchor;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("li", _extends({
        "aria-label": label,
        className: classnames_default()(className, {
          disabled: disabled
        })
      }, props, {
        __self: this,
        __source: {
          fileName: PaginationItem_jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, {
        __self: this,
        __source: {
          fileName: PaginationItem_jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, children || defaultValue));
    };

    return _class;
  }(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component), _class.displayName = name, _class.propTypes = {
    disabled: prop_types_default.a.bool
  }, _temp;
}

var First = createButton('First', "\xAB");
var Prev = createButton('Prev', "\u2039");
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
var Next = createButton('Next', "\u203A");
var Last = createButton('Last', "\xBB");
// CONCATENATED MODULE: ./src/Pagination.js



var Pagination_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Pagination.js";





var Pagination_Pagination = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Pagination_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }), children);
  };

  return Pagination;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

bootstrapUtils_bsClass('pagination', Pagination_Pagination);
Pagination_Pagination.First = First;
Pagination_Pagination.Prev = Prev;
Pagination_Pagination.Ellipsis = Ellipsis;
Pagination_Pagination.Item = PaginationItem;
Pagination_Pagination.Next = Next;
Pagination_Pagination.Last = Last;
/* harmony default export */ var src_Pagination = (Pagination_Pagination);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js
var core_js_stable_object_assign = __webpack_require__(124);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(core_js_stable_object_assign);

// CONCATENATED MODULE: ./src/PanelCollapse.js


var PanelCollapse_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelCollapse.js";




var PanelCollapse_propTypes = {
  /**
   * Callback fired before the component expands
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: prop_types_default.a.func
};
var PanelCollapse_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bodyId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string,
    expanded: prop_types_default.a.bool
  })
};

var PanelCollapse_PanelCollapse = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelCollapse, _React$Component);

  function PanelCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelCollapse.prototype;

  _proto.render = function render() {
    var children = this.props.children;

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        bodyId = _ref.bodyId,
        _bsClass = _ref.bsClass,
        expanded = _ref.expanded;

    var _splitBsProps = splitBsProps(this.props),
        bsProps = _splitBsProps[0],
        props = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId && bodyId) {
      props.id = bodyId;
      props.role = props.role || 'tabpanel';
      props['aria-labelledby'] = headingId;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Collapse, _extends({
      "in": expanded
    }, props, {
      __self: this,
      __source: {
        fileName: PanelCollapse_jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'collapse'),
      __self: this,
      __source: {
        fileName: PanelCollapse_jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, children));
  };

  return PanelCollapse;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelCollapse_PanelCollapse.propTypes = PanelCollapse_propTypes;
PanelCollapse_PanelCollapse.contextTypes = PanelCollapse_contextTypes;
/* harmony default export */ var src_PanelCollapse = (bootstrapUtils_bsClass('panel', PanelCollapse_PanelCollapse));
// CONCATENATED MODULE: ./src/PanelBody.js


var PanelBody_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelBody.js";





var PanelBody_propTypes = {
  /**
   * A convenience prop that renders a Collapse component around the Body for
   * situations when the parent Panel only contains a single Panel.Body child.
   *
   * renders:
   * ```jsx
   * <Panel.Collapse>
   *  <Panel.Body />
   * </Panel.Collapse>
   * ```
   */
  collapsible: prop_types_default.a.bool.isRequired
};
var PanelBody_defaultProps = {
  collapsible: false
};
var PanelBody_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var PanelBody_PanelBody = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelBody, _React$Component);

  function PanelBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        collapsible = _this$props.collapsible;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, ['collapsible']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    var body = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'body')),
      __self: this,
      __source: {
        fileName: PanelBody_jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }), children);

    if (collapsible) {
      body = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_PanelCollapse, {
        __self: this,
        __source: {
          fileName: PanelBody_jsxFileName,
          lineNumber: 49,
          columnNumber: 14
        }
      }, body);
    }

    return body;
  };

  return PanelBody;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelBody_PanelBody.propTypes = PanelBody_propTypes;
PanelBody_PanelBody.defaultProps = PanelBody_defaultProps;
PanelBody_PanelBody.contextTypes = PanelBody_contextTypes;
/* harmony default export */ var src_PanelBody = (bootstrapUtils_bsClass('panel', PanelBody_PanelBody));
// EXTERNAL MODULE: ./node_modules/react-prop-types/lib/elementType.js
var lib_elementType = __webpack_require__(44);
var lib_elementType_default = /*#__PURE__*/__webpack_require__.n(lib_elementType);

// CONCATENATED MODULE: ./src/PanelHeading.js



var PanelHeading_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelHeading.js";





var PanelHeading_propTypes = {
  componentClass: lib_elementType_default.a
};
var PanelHeading_defaultProps = {
  componentClass: 'div'
};
var PanelHeading_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string
  })
};

var PanelHeading_PanelHeading = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelHeading, _React$Component);

  function PanelHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId) {
      elementProps.role = elementProps.role || 'tab';
      elementProps.id = headingId;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'heading')),
      __self: this,
      __source: {
        fileName: PanelHeading_jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }), children);
  };

  return PanelHeading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelHeading_PanelHeading.propTypes = PanelHeading_propTypes;
PanelHeading_PanelHeading.defaultProps = PanelHeading_defaultProps;
PanelHeading_PanelHeading.contextTypes = PanelHeading_contextTypes;
/* harmony default export */ var src_PanelHeading = (bootstrapUtils_bsClass('panel', PanelHeading_PanelHeading));
// CONCATENATED MODULE: ./src/PanelToggle.js






var PanelToggle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelToggle.js";






var PanelToggle_propTypes = {
  /**
   * only here to satisfy linting, just the html onClick handler.
   *
   * @private
   */
  onClick: prop_types_default.a.func,

  /**
   * You can use a custom element for this component
   */
  componentClass: lib_elementType_default.a
};
var PanelToggle_defaultProps = {
  componentClass: src_SafeAnchor
};
var PanelToggle_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bodyId: prop_types_default.a.string,
    onToggle: prop_types_default.a.func,
    expanded: prop_types_default.a.bool
  })
};

var PanelToggle_PanelToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelToggle, _React$Component);

  function PanelToggle() {
    var _context, _context2;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, concat_default()(_context = [this]).call(_context, args)) || this;
    _this.handleToggle = bind_default()(_context2 = _this.handleToggle).call(_context2, _assertThisInitialized(_this));
    return _this;
  }

  var _proto = PanelToggle.prototype;

  _proto.handleToggle = function handleToggle(event) {
    var _ref = this.context.$bs_panel || {},
        onToggle = _ref.onToggle;

    if (onToggle) {
      onToggle(event);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onClick = _this$props.onClick,
        className = _this$props.className,
        componentClass = _this$props.componentClass,
        props = _objectWithoutPropertiesLoose(_this$props, ["onClick", "className", "componentClass"]);

    var _ref2 = this.context.$bs_panel || {},
        expanded = _ref2.expanded,
        bodyId = _ref2.bodyId;

    var Component = componentClass;
    props.onClick = utils_createChainedFunction(onClick, this.handleToggle);
    props['aria-expanded'] = expanded;
    props.className = classnames_default()(className, !expanded && 'collapsed');

    if (bodyId) {
      props['aria-controls'] = bodyId;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, props, {
      __self: this,
      __source: {
        fileName: PanelToggle_jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    }));
  };

  return PanelToggle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelToggle_PanelToggle.propTypes = PanelToggle_propTypes;
PanelToggle_PanelToggle.defaultProps = PanelToggle_defaultProps;
PanelToggle_PanelToggle.contextTypes = PanelToggle_contextTypes;
/* harmony default export */ var src_PanelToggle = (PanelToggle_PanelToggle);
// CONCATENATED MODULE: ./src/PanelTitle.js



var PanelTitle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelTitle.js";






var PanelTitle_propTypes = {
  componentClass: lib_elementType_default.a,

  /**
   * A convenience prop that renders the Panel.Title as a panel collapse toggle component
   * for the common use-case.
   */
  toggle: prop_types_default.a.bool
};
var PanelTitle_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};
var PanelTitle_defaultProps = {
  componentClass: 'div'
};

var PanelTitle_PanelTitle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelTitle, _React$Component);

  function PanelTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        toggle = _this$props.toggle,
        Component = _this$props.componentClass,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "toggle", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (toggle) {
      children = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_PanelToggle, {
        __self: this,
        __source: {
          fileName: PanelTitle_jsxFileName,
          lineNumber: 44,
          columnNumber: 18
        }
      }, children);
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'title')),
      __self: this,
      __source: {
        fileName: PanelTitle_jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }), children);
  };

  return PanelTitle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelTitle_PanelTitle.propTypes = PanelTitle_propTypes;
PanelTitle_PanelTitle.defaultProps = PanelTitle_defaultProps;
PanelTitle_PanelTitle.contextTypes = PanelTitle_contextTypes;
/* harmony default export */ var src_PanelTitle = (bootstrapUtils_bsClass('panel', PanelTitle_PanelTitle));
// CONCATENATED MODULE: ./src/PanelFooter.js


var PanelFooter_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\PanelFooter.js";




var PanelFooter_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var PanelFooter_PanelFooter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PanelFooter, _React$Component);

  function PanelFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(this.props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'footer')),
      __self: this,
      __source: {
        fileName: PanelFooter_jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }), children);
  };

  return PanelFooter;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

PanelFooter_PanelFooter.contextTypes = PanelFooter_contextTypes;
/* harmony default export */ var src_PanelFooter = (bootstrapUtils_bsClass('panel', PanelFooter_PanelFooter));
// CONCATENATED MODULE: ./src/Panel.js






var Panel_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Panel.js",
    Panel_context2;














var has = Object.prototype.hasOwnProperty;

var defaultGetId = function defaultGetId(id, type) {
  return id ? id + "--" + type : null;
};

var Panel_propTypes = {
  /**
   * Controls the collapsed/expanded state ofthe Panel. Requires
   * a `Panel.Collapse` or `<Panel.Body collapsible>` child component
   * in order to actually animate out or in.
   *
   * @controllable onToggle
   */
  expanded: prop_types_default.a.bool,

  /**
   * A callback fired when the collapse state changes.
   *
   * @controllable expanded
   */
  onToggle: prop_types_default.a.func,
  eventKey: prop_types_default.a.any,

  /**
   * An HTML `id` attribute uniquely identifying the Panel component.
   */
  id: prop_types_default.a.string
};
var Panel_contextTypes = {
  $bs_panelGroup: prop_types_default.a.shape({
    getId: prop_types_default.a.func,
    activeKey: prop_types_default.a.any,
    onToggle: prop_types_default.a.func
  })
};
var Panel_childContextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bodyId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string,
    onToggle: prop_types_default.a.func,
    expanded: prop_types_default.a.bool
  })
};

var Panel_Panel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Panel, _React$Component);

  function Panel() {
    var _context;

    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, concat_default()(_context = [this]).call(_context, args)) || this;

    _this.handleToggle = function (e) {
      var panelGroup = _this.context.$bs_panelGroup;
      var expanded = !_this.getExpanded();

      if (panelGroup && panelGroup.onToggle) {
        panelGroup.onToggle(_this.props.eventKey, expanded, e);
      } else {
        _this.props.onToggle(expanded, e);
      }
    };

    return _this;
  }

  var _proto = Panel.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        eventKey = _this$props.eventKey,
        id = _this$props.id;
    var idKey = eventKey == null ? id : eventKey;
    var ids;

    if (idKey !== null) {
      var panelGroup = this.context.$bs_panelGroup;
      var getId = panelGroup && panelGroup.getId || defaultGetId;
      ids = {
        headingId: getId(idKey, 'heading'),
        bodyId: getId(idKey, 'body')
      };
    }

    return {
      $bs_panel: _extends({}, ids, {
        bsClass: this.props.bsClass,
        expanded: this.getExpanded(),
        onToggle: this.handleToggle
      })
    };
  };

  _proto.getExpanded = function getExpanded() {
    var panelGroup = this.context.$bs_panelGroup;

    if (panelGroup && has.call(panelGroup, 'activeKey')) {
       false ? undefined : void 0;
      return panelGroup.activeKey === this.props.eventKey;
    }

    return !!this.props.expanded;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, ['onToggle', 'eventKey', 'expanded']),
        bsProps = _splitBsPropsAndOmit[0],
        props = _splitBsPropsAndOmit[1];

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, props, {
      className: classnames_default()(className, getClassSet(bsProps)),
      __self: this,
      __source: {
        fileName: Panel_jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }
    }), children);
  };

  return Panel;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Panel_Panel.propTypes = Panel_propTypes;
Panel_Panel.contextTypes = Panel_contextTypes;
Panel_Panel.childContextTypes = Panel_childContextTypes;
var UncontrolledPanel = uncontrollable(bootstrapUtils_bsClass('panel', bsStyles(concat_default()(Panel_context2 = []).call(Panel_context2, values_default()(State), [Style.DEFAULT, Style.PRIMARY]), Style.DEFAULT, Panel_Panel)), {
  expanded: 'onToggle'
});

object_assign_default()(UncontrolledPanel, {
  Heading: src_PanelHeading,
  Title: src_PanelTitle,
  Body: src_PanelBody,
  Footer: src_PanelFooter,
  Toggle: src_PanelToggle,
  Collapse: src_PanelCollapse
});

/* harmony default export */ var src_Panel = (UncontrolledPanel);
// CONCATENATED MODULE: ./src/Popover.js



var Popover_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Popover.js";





var Popover_propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Popover.
   */
  positionLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * Title content
   */
  title: prop_types_default.a.node
};
var Popover_defaultProps = {
  placement: 'right'
};

var Popover_Popover = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Popover, _React$Component);

  function Popover() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        title = _this$props.title,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "title", "className", "style", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = _extends({
      display: 'block',
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "tooltip",
      className: classnames_default()(className, classes),
      style: outerStyle,
      __self: this,
      __source: {
        fileName: Popover_jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "arrow",
      style: arrowStyle,
      __self: this,
      __source: {
        fileName: Popover_jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }), title && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("h3", {
      className: prefix(bsProps, 'title'),
      __self: this,
      __source: {
        fileName: Popover_jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'content'),
      __self: this,
      __source: {
        fileName: Popover_jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, children));
  };

  return Popover;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Popover_Popover.propTypes = Popover_propTypes;
Popover_Popover.defaultProps = Popover_defaultProps;
/* harmony default export */ var src_Popover = (bootstrapUtils_bsClass('popover', Popover_Popover));
// CONCATENATED MODULE: ./src/ProgressBar.js






var ProgressBar_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ProgressBar.js";






var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var _context,
      _this = this;

  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;

  for_each_default()(_context = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context, children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(ProgressBar_ProgressBar, {
      __self: _this,
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    });
    if (child.type === element.type) return;
    var childIdentifier = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });

  return error;
}

var ProgressBar_propTypes = {
  min: prop_types_default.a.number,
  now: prop_types_default.a.number,
  max: prop_types_default.a.number,
  label: prop_types_default.a.node,
  srOnly: prop_types_default.a.bool,
  striped: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: prop_types_default.a.bool
};
var ProgressBar_defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar_ProgressBar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _extends2;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        active = _ref.active,
        className = _ref.className,
        style = _ref.style,
        props = _objectWithoutPropertiesLoose(_ref, ["min", "now", "max", "label", "srOnly", "striped", "active", "className", "style"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {
      active: active
    }, _extends2[prefix(bsProps, 'striped')] = active || striped, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "progressbar",
      className: classnames_default()(className, classes),
      style: _extends({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max,
      __self: this,
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }), srOnly ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = _objectWithoutPropertiesLoose(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        active = props.active,
        bsClass = props.bsClass,
        bsStyle = props.bsStyle,
        className = props.className,
        children = props.children,
        wrapperProps = _objectWithoutPropertiesLoose(props, ["min", "now", "max", "label", "srOnly", "striped", "active", "bsClass", "bsStyle", "className", "children"]);

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, wrapperProps, {
      className: classnames_default()(className, 'progress'),
      __self: this,
      __source: {
        fileName: ProgressBar_jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    }), children ? map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      active: active,
      bsClass: bsClass,
      bsStyle: bsStyle
    }));
  };

  return ProgressBar;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ProgressBar_ProgressBar.propTypes = ProgressBar_propTypes;
ProgressBar_ProgressBar.defaultProps = ProgressBar_defaultProps;
/* harmony default export */ var src_ProgressBar = (bootstrapUtils_bsClass('progress-bar', bsStyles(values_default()(State), ProgressBar_ProgressBar)));
// CONCATENATED MODULE: ./src/Radio.js



var Radio_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Radio.js";

/* eslint-disable jsx-a11y/label-has-for */





var Radio_propTypes = {
  inline: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: prop_types_default.a.oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func
};
var Radio_defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Radio_Radio = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Radio, _React$Component);

  function Radio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: "radio",
      disabled: disabled,
      __self: this,
      __source: {
        fileName: Radio_jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[prefix(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


       false ? undefined : void 0;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
        className: classnames_default()(className, _classes),
        style: style,
        title: title,
        __self: this,
        __source: {
          fileName: Radio_jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, input, children);
    }

    var classes = _extends({}, getClassSet(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: classnames_default()(className, classes),
      style: style,
      __self: this,
      __source: {
        fileName: Radio_jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("label", {
      title: title,
      __self: this,
      __source: {
        fileName: Radio_jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, input, children));
  };

  return Radio;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Radio_Radio.propTypes = Radio_propTypes;
Radio_Radio.defaultProps = Radio_defaultProps;
/* harmony default export */ var src_Radio = (bootstrapUtils_bsClass('radio', Radio_Radio));
// CONCATENATED MODULE: ./src/ResponsiveEmbed.js



var ResponsiveEmbed_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ResponsiveEmbed.js";




 // TODO: This should probably take a single `aspectRatio` prop.

var ResponsiveEmbed_propTypes = {
  /**
   * This component requires a single child element
   */
  children: prop_types_default.a.element.isRequired,

  /**
   * 16by9 aspect ratio
   */
  a16by9: prop_types_default.a.bool,

  /**
   * 4by3 aspect ratio
   */
  a4by3: prop_types_default.a.bool
};
var ResponsiveEmbed_defaultProps = {
  a16by9: false,
  a4by3: false
};

var ResponsiveEmbed_ResponsiveEmbed = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        a16by9 = _this$props.a16by9,
        a4by3 = _this$props.a4by3,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["a16by9", "a4by3", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     false ? undefined : void 0;
     false ? undefined : void 0;

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, '16by9')] = a16by9, _extends2[prefix(bsProps, '4by3')] = a4by3, _extends2));

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: classnames_default()(classes),
      __self: this,
      __source: {
        fileName: ResponsiveEmbed_jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(children, _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'item'))
    })));
  };

  return ResponsiveEmbed;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ResponsiveEmbed_ResponsiveEmbed.propTypes = ResponsiveEmbed_propTypes;
ResponsiveEmbed_ResponsiveEmbed.defaultProps = ResponsiveEmbed_defaultProps;
/* harmony default export */ var src_ResponsiveEmbed = (bootstrapUtils_bsClass('embed-responsive', ResponsiveEmbed_ResponsiveEmbed));
// CONCATENATED MODULE: ./src/Row.js



var Row_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Row.js";




var Row_propTypes = {
  componentClass: elementType_default.a
};
var Row_defaultProps = {
  componentClass: 'div'
};

var Row_Row = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Row_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };

  return Row;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Row_Row.propTypes = Row_propTypes;
Row_Row.defaultProps = Row_defaultProps;
/* harmony default export */ var src_Row = (bootstrapUtils_bsClass('row', Row_Row));
// CONCATENATED MODULE: ./src/SplitToggle.js


var SplitToggle_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\SplitToggle.js";



var SplitToggle_SplitToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SplitToggle, _React$Component);

  function SplitToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitToggle.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_DropdownToggle, _extends({}, this.props, {
      useAnchor: false,
      noCaret: false,
      __self: this,
      __source: {
        fileName: SplitToggle_jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    }));
  };

  return SplitToggle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

SplitToggle_SplitToggle.defaultProps = src_DropdownToggle.defaultProps;
/* harmony default export */ var src_SplitToggle = (SplitToggle_SplitToggle);
// CONCATENATED MODULE: ./src/SplitButton.js



var SplitButton_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\SplitButton.js";







var SplitButton_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  bsStyle: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  href: prop_types_default.a.string,
  onClick: prop_types_default.a.func,

  /**
   * The content of the split button.
   */
  title: prop_types_default.a.node.isRequired,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: prop_types_default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var SplitButton_SplitButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsSize", "bsStyle", "title", "toggleLabel", "children"]);

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        buttonProps = _splitComponentProps[1];

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __self: this,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Button, _extends({}, buttonProps, {
      disabled: props.disabled,
      bsSize: bsSize,
      bsStyle: bsStyle,
      __self: this,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }), title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_SplitToggle, {
      "aria-label": toggleLabel || title,
      bsSize: bsSize,
      bsStyle: bsStyle,
      __self: this,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Dropdown.Menu, {
      __self: this,
      __source: {
        fileName: SplitButton_jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, children));
  };

  return SplitButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

SplitButton_SplitButton.propTypes = SplitButton_propTypes;
SplitButton_SplitButton.Toggle = src_SplitToggle;
/* harmony default export */ var src_SplitButton = (SplitButton_SplitButton);
// CONCATENATED MODULE: ./src/TabContainer.js






var TAB = 'tab';
var PANE = 'pane';
var TabContainer_idPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]);
var TabContainer_propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      var _context;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = TabContainer_idPropType.apply(void 0, concat_default()(_context = [props]).call(_context, args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: prop_types_default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any
};
var TabContainer_childContextTypes = {
  $bs_tabContainer: prop_types_default.a.shape({
    activeKey: prop_types_default.a.any,
    onSelect: prop_types_default.a.func.isRequired,
    getTabId: prop_types_default.a.func.isRequired,
    getPaneId: prop_types_default.a.func.isRequired
  })
};

var TabContainer_TabContainer = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TabContainer, _React$Component);

  function TabContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContainer.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        activeKey = _this$props.activeKey,
        onSelect = _this$props.onSelect,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;

    var getId = generateChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };

    return {
      $bs_tabContainer: {
        activeKey: activeKey,
        onSelect: onSelect,
        getTabId: function getTabId(key) {
          return getId(key, TAB);
        },
        getPaneId: function getPaneId(key) {
          return getId(key, PANE);
        }
      }
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        props = _objectWithoutPropertiesLoose(_this$props2, ["children"]);

    delete props.generateChildId;
    delete props.onSelect;
    delete props.activeKey;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children), props);
  };

  return TabContainer;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

TabContainer_TabContainer.propTypes = TabContainer_propTypes;
TabContainer_TabContainer.childContextTypes = TabContainer_childContextTypes;
/* harmony default export */ var src_TabContainer = (uncontrollable(TabContainer_TabContainer, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/TabContent.js





var TabContent_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\TabContent.js";





var TabContent_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: prop_types_default.a.bool
};
var TabContent_defaultProps = {
  componentClass: 'div',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false
};
var TabContent_contextTypes = {
  $bs_tabContainer: prop_types_default.a.shape({
    activeKey: prop_types_default.a.any
  })
};
var TabContent_childContextTypes = {
  $bs_tabContent: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),
    activeKey: prop_types_default.a.any,
    mountOnEnter: prop_types_default.a.bool,
    unmountOnExit: prop_types_default.a.bool,
    onPaneEnter: prop_types_default.a.func.isRequired,
    onPaneExited: prop_types_default.a.func.isRequired,
    exiting: prop_types_default.a.bool.isRequired
  })
};

var TabContent_TabContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TabContent, _React$Component);

  function TabContent(props, context) {
    var _context, _context2;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handlePaneEnter = bind_default()(_context = _this.handlePaneEnter).call(_context, _assertThisInitialized(_this));
    _this.handlePaneExited = bind_default()(_context2 = _this.handlePaneExited).call(_context2, _assertThisInitialized(_this)); // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.

    _this.state = {
      activeKey: null,
      activeChild: null
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        bsClass = _this$props.bsClass,
        animation = _this$props.animation,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit;
    var stateActiveKey = this.state.activeKey;
    var containerActiveKey = this.getContainerActiveKey();
    var activeKey = stateActiveKey != null ? stateActiveKey : containerActiveKey;
    var exiting = stateActiveKey != null && stateActiveKey !== containerActiveKey;
    return {
      $bs_tabContent: {
        bsClass: bsClass,
        animation: animation,
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        onPaneEnter: this.handlePaneEnter,
        onPaneExited: this.handlePaneExited,
        exiting: exiting
      }
    };
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    if (!nextProps.animation && this.state.activeChild) {
      this.setState({
        activeKey: null,
        activeChild: null
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  _proto.getContainerActiveKey = function getContainerActiveKey() {
    var tabContainer = this.context.$bs_tabContainer;
    return tabContainer && tabContainer.activeKey;
  };

  _proto.handlePaneEnter = function handlePaneEnter(child, childKey) {
    if (!this.props.animation) {
      return false;
    } // It's possible that this child should be transitioning out.


    if (childKey !== this.getContainerActiveKey()) {
      return false;
    }

    this.setState({
      activeKey: childKey,
      activeChild: child
    });
    return true;
  };

  _proto.handlePaneExited = function handlePaneExited(child) {
    // This might happen as everything is unmounting.
    if (this.isUnmounted) {
      return;
    }

    this.setState(function (_ref) {
      var activeChild = _ref.activeChild;

      if (activeChild !== child) {
        return null;
      }

      return {
        activeKey: null,
        activeChild: null
      };
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        className = _this$props2.className,
        props = _objectWithoutPropertiesLoose(_this$props2, ["componentClass", "className"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['animation', 'mountOnEnter', 'unmountOnExit']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, prefix(bsProps, 'content')),
      __self: this,
      __source: {
        fileName: TabContent_jsxFileName,
        lineNumber: 160,
        columnNumber: 7
      }
    }));
  };

  return TabContent;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

TabContent_TabContent.propTypes = TabContent_propTypes;
TabContent_TabContent.defaultProps = TabContent_defaultProps;
TabContent_TabContent.contextTypes = TabContent_contextTypes;
TabContent_TabContent.childContextTypes = TabContent_childContextTypes;
/* harmony default export */ var src_TabContent = (bootstrapUtils_bsClass('tab', TabContent_TabContent));
// CONCATENATED MODULE: ./src/TabPane.js





var TabPane_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\TabPane.js";








var TabPane_propTypes = {
  /**
   * Uniquely identify the `<TabPane>` among its siblings.
   */
  eventKey: prop_types_default.a.any,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),

  /** @private * */
  id: prop_types_default.a.string,

  /** @private * */
  'aria-labelledby': prop_types_default.a.string,

  /**
   * If not explicitly specified and rendered in the context of a
   * `<TabContent>`, the `bsClass` of the `<TabContent>` suffixed by `-pane`.
   * If otherwise not explicitly specified, `tab-pane`.
   */
  bsClass: prop_types_default.a.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: prop_types_default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: prop_types_default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: prop_types_default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: prop_types_default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: prop_types_default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool
};
var TabPane_contextTypes = {
  $bs_tabContainer: prop_types_default.a.shape({
    getTabId: prop_types_default.a.func,
    getPaneId: prop_types_default.a.func
  }),
  $bs_tabContent: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string,
    animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),
    activeKey: prop_types_default.a.any,
    mountOnEnter: prop_types_default.a.bool,
    unmountOnExit: prop_types_default.a.bool,
    onPaneEnter: prop_types_default.a.func.isRequired,
    onPaneExited: prop_types_default.a.func.isRequired,
    exiting: prop_types_default.a.bool.isRequired
  })
};
/**
 * We override the `<TabContainer>` context so `<Nav>`s in `<TabPane>`s don't
 * conflict with the top level one.
 */

var TabPane_childContextTypes = {
  $bs_tabContainer: prop_types_default.a.oneOf([null])
};

var TabPane_TabPane = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TabPane, _React$Component);

  function TabPane(props, context) {
    var _context, _context2;

    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleEnter = bind_default()(_context = _this.handleEnter).call(_context, _assertThisInitialized(_this));
    _this.handleExited = bind_default()(_context2 = _this.handleExited).call(_context2, _assertThisInitialized(_this));
    _this["in"] = false;
    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      $bs_tabContainer: null
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.shouldBeIn()) {
      // In lieu of the action event firing.
      this.handleEnter();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this["in"]) {
      if (!this.shouldBeIn()) {
        // We shouldn't be active any more. Notify the parent.
        this.handleExited();
      }
    } else if (this.shouldBeIn()) {
      // We are the active child. Notify the parent.
      this.handleEnter();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this["in"]) {
      // In lieu of the action event firing.
      this.handleExited();
    }
  };

  _proto.getAnimation = function getAnimation() {
    if (this.props.animation != null) {
      return this.props.animation;
    }

    var tabContent = this.context.$bs_tabContent;
    return tabContent && tabContent.animation;
  };

  _proto.handleEnter = function handleEnter() {
    var tabContent = this.context.$bs_tabContent;

    if (!tabContent) {
      return;
    }

    this["in"] = tabContent.onPaneEnter(this, this.props.eventKey);
  };

  _proto.handleExited = function handleExited() {
    var tabContent = this.context.$bs_tabContent;

    if (!tabContent) {
      return;
    }

    tabContent.onPaneExited(this);
    this["in"] = false;
  };

  _proto.isActive = function isActive() {
    var tabContent = this.context.$bs_tabContent;
    var activeKey = tabContent && tabContent.activeKey;
    return this.props.eventKey === activeKey;
  };

  _proto.shouldBeIn = function shouldBeIn() {
    return this.getAnimation() && this.isActive();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        eventKey = _this$props.eventKey,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        propsMountOnEnter = _this$props.mountOnEnter,
        propsUnmountOnExit = _this$props.unmountOnExit,
        props = _objectWithoutPropertiesLoose(_this$props, ["eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit"]);

    var _this$context = this.context,
        tabContent = _this$context.$bs_tabContent,
        tabContainer = _this$context.$bs_tabContainer;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['animation']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var active = this.isActive();
    var animation = this.getAnimation();
    var mountOnEnter = propsMountOnEnter != null ? propsMountOnEnter : tabContent && tabContent.mountOnEnter;
    var unmountOnExit = propsUnmountOnExit != null ? propsUnmountOnExit : tabContent && tabContent.unmountOnExit;

    if (!active && !animation && unmountOnExit) {
      return null;
    }

    var Transition = animation === true ? src_Fade : animation || null;

    if (tabContent) {
      bsProps.bsClass = prefix(tabContent, 'pane');
    }

    var classes = _extends({}, getClassSet(bsProps), {
      active: active
    });

    if (tabContainer) {
       false ? undefined : void 0;
      elementProps.id = tabContainer.getPaneId(eventKey);
      elementProps['aria-labelledby'] = tabContainer.getTabId(eventKey);
    }

    var pane = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: TabPane_jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }
    }));

    if (Transition) {
      var exiting = tabContent && tabContent.exiting;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Transition, {
        "in": active && !exiting,
        onEnter: utils_createChainedFunction(this.handleEnter, onEnter),
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: utils_createChainedFunction(this.handleExited, onExited),
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        __self: this,
        __source: {
          fileName: TabPane_jsxFileName,
          lineNumber: 266,
          columnNumber: 9
        }
      }, pane);
    }

    return pane;
  };

  return TabPane;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

TabPane_TabPane.propTypes = TabPane_propTypes;
TabPane_TabPane.contextTypes = TabPane_contextTypes;
TabPane_TabPane.childContextTypes = TabPane_childContextTypes;
/* harmony default export */ var src_TabPane = (bootstrapUtils_bsClass('tab-pane', TabPane_TabPane));
// CONCATENATED MODULE: ./src/Tab.js


var Tab_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Tab.js";






var Tab_propTypes = _extends({}, src_TabPane.propTypes, {
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.node,

  /**
   * tabClassName is used as className for the associated NavItem
   */
  tabClassName: prop_types_default.a.string
});

var Tab_Tab = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var props = _extends({}, this.props); // These props are for the parent `<Tabs>` rather than the `<TabPane>`.


    delete props.title;
    delete props.disabled;
    delete props.tabClassName;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_TabPane, _extends({}, props, {
      __self: this,
      __source: {
        fileName: Tab_jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }));
  };

  return Tab;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Tab_Tab.propTypes = Tab_propTypes;
Tab_Tab.Container = src_TabContainer;
Tab_Tab.Content = src_TabContent;
Tab_Tab.Pane = src_TabPane;
/* harmony default export */ var src_Tab = (Tab_Tab);
// CONCATENATED MODULE: ./src/Table.js



var Table_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Table.js";




var Table_propTypes = {
  striped: prop_types_default.a.bool,
  bordered: prop_types_default.a.bool,
  condensed: prop_types_default.a.bool,
  hover: prop_types_default.a.bool,
  responsive: prop_types_default.a.bool
};
var Table_defaultProps = {
  bordered: false,
  condensed: false,
  hover: false,
  responsive: false,
  striped: false
};

var Table_Table = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        condensed = _this$props.condensed,
        hover = _this$props.hover,
        responsive = _this$props.responsive,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["striped", "bordered", "condensed", "hover", "responsive", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'striped')] = striped, _extends2[prefix(bsProps, 'bordered')] = bordered, _extends2[prefix(bsProps, 'condensed')] = condensed, _extends2[prefix(bsProps, 'hover')] = hover, _extends2));

    var table = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("table", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Table_jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }));

    if (responsive) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: prefix(bsProps, 'responsive'),
        __self: this,
        __source: {
          fileName: Table_jsxFileName,
          lineNumber: 55,
          columnNumber: 14
        }
      }, table);
    }

    return table;
  };

  return Table;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Table_Table.propTypes = Table_propTypes;
Table_Table.defaultProps = Table_defaultProps;
/* harmony default export */ var src_Table = (bootstrapUtils_bsClass('table', Table_Table));
// CONCATENATED MODULE: ./src/Tabs.js





var Tabs_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Tabs.js";











var Tabs_TabContainer = src_TabContainer.ControlledComponent;
var Tabs_propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any,

  /**
   * Navigation style
   */
  bsStyle: prop_types_default.a.oneOf(['tabs', 'pills']),

  /**
   * Sets a default animation strategy. Use `false` to disable, `true`
   * to enable the default `<Fade>` animation, or a react-transition-group
   * v2 `<Transition/>` component.
   */
  animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool
};
var Tabs_defaultProps = {
  bsStyle: 'tabs',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;

  for_each_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var Tabs_Tabs = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_NavItem, {
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName,
      __self: this,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        animation = _this$props.animation,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = _objectWithoutPropertiesLoose(_this$props, ["id", "onSelect", "animation", "mountOnEnter", "unmountOnExit", "bsClass", "className", "style", "children", "activeKey"]);

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Tabs_TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      className: className,
      style: style,
      __self: this,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Nav, _extends({}, props, {
      role: "tablist",
      __self: this,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, this.renderTab)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_TabContent, {
      bsClass: bsClass,
      animation: animation,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit,
      __self: this,
      __source: {
        fileName: Tabs_jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, children)));
  };

  return Tabs;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Tabs_Tabs.propTypes = Tabs_propTypes;
Tabs_Tabs.defaultProps = Tabs_defaultProps;
bootstrapUtils_bsClass('tab', Tabs_Tabs);
/* harmony default export */ var src_Tabs = (uncontrollable(Tabs_Tabs, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/Thumbnail.js



var Thumbnail_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Thumbnail.js";

/* eslint-disable jsx-a11y/alt-text */





var Thumbnail_propTypes = {
  /**
   * src property that is passed down to the image inside this component
   */
  src: prop_types_default.a.string,

  /**
   * alt property that is passed down to the image inside this component
   */
  alt: prop_types_default.a.string,

  /**
   * href property that is passed down to the image inside this component
   */
  href: prop_types_default.a.string,

  /**
   * onError callback that is passed down to the image inside this component
   */
  onError: prop_types_default.a.func,

  /**
   * onLoad callback that is passed down to the image inside this component
   */
  onLoad: prop_types_default.a.func
};

var Thumbnail_Thumbnail = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Thumbnail, _React$Component);

  function Thumbnail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Thumbnail.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        src = _this$props.src,
        alt = _this$props.alt,
        onError = _this$props.onError,
        onLoad = _this$props.onLoad,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["src", "alt", "onError", "onLoad", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var Component = elementProps.href ? src_SafeAnchor : 'div';
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Thumbnail_jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", _extends({
      src: src,
      alt: alt,
      onError: onError,
      onLoad: onLoad
    }, {
      __self: this,
      __source: {
        fileName: Thumbnail_jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    })), children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "caption",
      __self: this,
      __source: {
        fileName: Thumbnail_jsxFileName,
        lineNumber: 53,
        columnNumber: 22
      }
    }, children));
  };

  return Thumbnail;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Thumbnail_Thumbnail.propTypes = Thumbnail_propTypes;
/* harmony default export */ var src_Thumbnail = (bootstrapUtils_bsClass('thumbnail', Thumbnail_Thumbnail));
// CONCATENATED MODULE: ./src/ToggleButton.js



var ToggleButton_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ToggleButton.js";



var ToggleButton_propTypes = {
  /**
   * The `<input>` `type`
   * @type {[type]}
   */
  type: prop_types_default.a.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: prop_types_default.a.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: prop_types_default.a.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: prop_types_default.a.bool,

  /**
   * [onChange description]
   */
  onChange: prop_types_default.a.func,

  /**
   * The value of the input, and unique identifier in the ToggleButtonGroup
   */
  value: prop_types_default.a.any.isRequired
};

var ToggleButton_ToggleButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ToggleButton, _React$Component);

  function ToggleButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "name", "checked", "type", "onChange", "value"]);

    var disabled = props.disabled;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Button, _extends({}, props, {
      active: !!checked,
      componentClass: "label",
      __self: this,
      __source: {
        fileName: ToggleButton_jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", {
      name: name,
      type: type,
      autoComplete: "off",
      value: value,
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: ToggleButton_jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }), children);
  };

  return ToggleButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ToggleButton_ToggleButton.propTypes = ToggleButton_propTypes;
/* harmony default export */ var src_ToggleButton = (ToggleButton_ToggleButton);
// CONCATENATED MODULE: ./src/ToggleButtonGroup.js







var ToggleButtonGroup_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\ToggleButtonGroup.js";








var ToggleButtonGroup_propTypes = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: prop_types_default.a.string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: prop_types_default.a.any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: prop_types_default.a.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: prop_types_default.a.oneOf(['checkbox', 'radio']).isRequired
};
var ToggleButtonGroup_defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup_ToggleButtonGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var _context;

    var value = this.props.value;
    return value == null ? [] : concat_default()(_context = []).call(_context, value);
  };

  _proto.handleToggle = function handleToggle(value) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = instance_index_of_default()(values).call(values, value) !== -1;

    if (type === 'radio') {
      if (!isActive) {
        onChange(value);
      }

      return;
    }

    if (isActive) {
      onChange(filter_default()(values).call(values, function (n) {
        return n !== value;
      }));
    } else {
      var _context2;

      onChange(concat_default()(_context2 = []).call(_context2, values, [value]));
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = _objectWithoutPropertiesLoose(_this$props2, ["children", "type", "name"]);

    var values = this.getValues();
    !(type !== 'radio' || !!name) ?  false ? undefined : browser_default()(false) : void 0;
    delete props.onChange;
    delete props.value; // the data attribute is required b/c twbs css uses it in the selector

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_ButtonGroup, _extends({}, props, {
      "data-toggle": "buttons",
      __self: this,
      __source: {
        fileName: ToggleButtonGroup_jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }), map_default()(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler() {
        return _this.handleToggle(value);
      };

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: instance_index_of_default()(values).call(values, value) !== -1,
        onChange: utils_createChainedFunction(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

ToggleButtonGroup_ToggleButtonGroup.propTypes = ToggleButtonGroup_propTypes;
ToggleButtonGroup_ToggleButtonGroup.defaultProps = ToggleButtonGroup_defaultProps;
var UncontrolledToggleButtonGroup = uncontrollable(ToggleButtonGroup_ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = src_ToggleButton;
/* harmony default export */ var src_ToggleButtonGroup = (UncontrolledToggleButtonGroup);
// CONCATENATED MODULE: ./src/Tooltip.js



var Tooltip_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Tooltip.js";





var Tooltip_propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string])
};
var Tooltip_defaultProps = {
  placement: 'right'
};

var Tooltip_Tooltip = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Tooltip, _React$Component);

  function Tooltip() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "className", "style", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = _extends({
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      role: "tooltip",
      className: classnames_default()(className, classes),
      style: outerStyle,
      __self: this,
      __source: {
        fileName: Tooltip_jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'arrow'),
      style: arrowStyle,
      __self: this,
      __source: {
        fileName: Tooltip_jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'inner'),
      __self: this,
      __source: {
        fileName: Tooltip_jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, children));
  };

  return Tooltip;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

Tooltip_Tooltip.propTypes = Tooltip_propTypes;
Tooltip_Tooltip.defaultProps = Tooltip_defaultProps;
/* harmony default export */ var src_Tooltip = (bootstrapUtils_bsClass('tooltip', Tooltip_Tooltip));
// CONCATENATED MODULE: ./src/Well.js



var Well_jsxFileName = "C:\\Users\\myexy\\Documents\\GitHub\\react-bootstrap\\src\\Well.js";





var Well_Well = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Well, _React$Component);

  function Well() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Well.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: Well_jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    }));
  };

  return Well;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);

/* harmony default export */ var src_Well = (bootstrapUtils_bsClass('well', bsSizes([Size.LARGE, Size.SMALL], Well_Well)));
// CONCATENATED MODULE: ./src/utils/index.js






// CONCATENATED MODULE: ./src/index.js















































































































































/***/ })
/******/ ]);
});