(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @statickit/react */ "@statickit/react");
/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_statickit_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextnew\\course\\mdx\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Styled.root, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_statickit_react__WEBPACK_IMPORTED_MODULE_3__.StaticKitProvider, {
          site: "SITE_ID_HERE",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable sort-keys */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  useCustomProperties: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit'
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background'
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'text'
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline'
      }
    }
  }
});
/* eslint-enable sort-keys */

/***/ }),

/***/ "@statickit/react":
/*!***********************************!*\
  !*** external "@statickit/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@statickit/react");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQVU7QUFDTkwsUUFBQUEsS0FBSyxFQUFFLFdBREQ7QUFFTkssUUFBQUEsY0FBYyxFQUFFO0FBRlY7QUFIWDtBQVZDO0FBWkcsQ0FBZjtBQWdDQTs7Ozs7Ozs7Ozs7QUNqQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZHgtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9tZHgtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9tZHgtYmxvZy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvLi90aGVtZS5qcyIsIndlYnBhY2s6Ly9tZHgtYmxvZy9leHRlcm5hbCBcIkBzdGF0aWNraXQvcmVhY3RcIiIsIndlYnBhY2s6Ly9tZHgtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21keC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7VGhlbWVQcm92aWRlciwgU3R5bGVkfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQge1N0YXRpY0tpdFByb3ZpZGVyfSBmcm9tICdAc3RhdGlja2l0L3JlYWN0JztcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZC5yb290PlxuICAgICAgICAgICAgICAgICAgICA8U3RhdGljS2l0UHJvdmlkZXIgc2l0ZT1cIlNJVEVfSURfSEVSRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRpY0tpdFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLnJvb3Q+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHNvcnQta2V5cyAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVzZUN1c3RvbVByb3BlcnRpZXM6IHRydWUsXG4gICAgY29sb3JzOiB7XG4gICAgICAgIHRleHQ6ICcjMDAwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBwcmltYXJ5OiAnIzA3YycsXG4gICAgICAgIHNlY29uZGFyeTogJyM2MDknXG4gICAgfSxcbiAgICBmb250czoge1xuICAgICAgICBib2R5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVhZGluZzogJ2luaGVyaXQnXG4gICAgfSxcbiAgICBzdHlsZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgICAgICAgIGJnOiAnYmFja2dyb3VuZCdcbiAgICAgICAgfSxcbiAgICAgICAgaDE6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBbNCwgNSwgNl0sXG4gICAgICAgICAgICBjb2xvcjogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIGE6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBzb3J0LWtleXMgKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdGF0aWNraXQvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIlJlYWN0IiwiVGhlbWVQcm92aWRlciIsIlN0eWxlZCIsIlN0YXRpY0tpdFByb3ZpZGVyIiwidGhlbWUiLCJNeUFwcCIsInVzZUN1c3RvbVByb3BlcnRpZXMiLCJjb2xvcnMiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwic3R5bGVzIiwicm9vdCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImJnIiwiaDEiLCJmb250U2l6ZSIsImEiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=