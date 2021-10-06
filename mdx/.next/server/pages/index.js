"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/components */ "@theme-ui/components");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @statickit/react */ "@statickit/react");
/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_statickit_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextnew\\course\\mdx\\components\\form.js";





const Form = () => {
  const [state, handleSubmit] = (0,_statickit_react__WEBPACK_IMPORTED_MODULE_1__.useForm)('newsletter');

  if (state.succeeded) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__.Heading, {
      children: 'Thank you for signing up!'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__.Heading, {
      mb: 3,
      children: 'Subscribe to my newsletter'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__.Field, {
        defaultValue: "",
        label: "First Name",
        mb: 2,
        name: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__.Field, {
        defaultValue: "",
        label: "Email",
        mb: 3,
        name: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        disabled: state.submitting,
        type: "submit",
        children: 'Submit'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
const _excluded = ["components"];
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextnew\\course\\mdx\\pages\\index.mdx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, `Mastering Next.js`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, `Using MDX! More info `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "https://masteringnextjs.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, `here`), `.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_components_form__WEBPACK_IMPORTED_MODULE_2__.default, {
    mdxType: "Form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "@statickit/react":
/*!***********************************!*\
  !*** external "@statickit/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@statickit/react");

/***/ }),

/***/ "@theme-ui/components":
/*!***************************************!*\
  !*** external "@theme-ui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@theme-ui/components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.mdx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLE1BQU1JLElBQUksR0FBRyxNQUFNO0FBQ2YsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFlBQVIsSUFBd0JILHlEQUFPLENBQUMsWUFBRCxDQUFyQzs7QUFFQSxNQUFJRSxLQUFLLENBQUNFLFNBQVYsRUFBcUI7QUFDakIsd0JBQU8sOERBQUMseURBQUQ7QUFBQSxnQkFBVTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHlEQUFEO0FBQVMsUUFBRSxFQUFFLENBQWI7QUFBQSxnQkFBaUI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU0sY0FBUSxFQUFFRCxZQUFoQjtBQUFBLDhCQUNJLDhEQUFDLHVEQUFEO0FBQU8sb0JBQVksRUFBQyxFQUFwQjtBQUF1QixhQUFLLEVBQUMsWUFBN0I7QUFBMEMsVUFBRSxFQUFFLENBQTlDO0FBQWlELFlBQUksRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsdURBQUQ7QUFBTyxvQkFBWSxFQUFDLEVBQXBCO0FBQXVCLGFBQUssRUFBQyxPQUE3QjtBQUFxQyxVQUFFLEVBQUUsQ0FBekM7QUFBNEMsWUFBSSxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSw4REFBQyx3REFBRDtBQUFRLGdCQUFRLEVBQUVELEtBQUssQ0FBQ0csVUFBeEI7QUFBb0MsWUFBSSxFQUFDLFFBQXpDO0FBQUEsa0JBQ0s7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURKO0FBWUgsQ0FuQkQ7O0FBcUJBLGlFQUFlSixJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUdBLE1BQU1PLFdBQVcsR0FBRyxFQUFwQjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BSGdDO0FBQ2pDQyxJQUFBQTtBQURpQyxHQUdoQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTyxtREFBQyxTQUFELGVBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sbUJBQU4sQ0FGSyxFQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyx1QkFBTCxFQUE0QjtBQUFHLGNBQVUsRUFBQyxHQUFkO0FBQ3hCLFlBQVEsNkJBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFckIsTUFGcUIsQ0FBNUIsRUFFbUIsR0FGbkIsQ0FISyxFQU1MLG1EQUFDLHFEQUFEO0FBQU0sV0FBTyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5LLENBQVA7QUFRRDtBQUVEO0FBQ0FELFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1Qjs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWR4LWJsb2cvLi9jb21wb25lbnRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvLi9wYWdlcy9pbmRleC5tZHgiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvZXh0ZXJuYWwgXCJAc3RhdGlja2l0L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbWR4LWJsb2cvZXh0ZXJuYWwgXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiIiwid2VicGFjazovL21keC1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tZHgtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVhZGluZywgRmllbGQsIEJ1dHRvbn0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdAc3RhdGlja2l0L3JlYWN0JztcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGhhbmRsZVN1Ym1pdF0gPSB1c2VGb3JtKCduZXdzbGV0dGVyJyk7XG5cbiAgICBpZiAoc3RhdGUuc3VjY2VlZGVkKSB7XG4gICAgICAgIHJldHVybiA8SGVhZGluZz57J1RoYW5rIHlvdSBmb3Igc2lnbmluZyB1cCEnfTwvSGVhZGluZz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkaW5nIG1iPXszfT57J1N1YnNjcmliZSB0byBteSBuZXdzbGV0dGVyJ308L0hlYWRpbmc+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8RmllbGQgZGVmYXVsdFZhbHVlPVwiXCIgbGFiZWw9XCJGaXJzdCBOYW1lXCIgbWI9ezJ9IG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8RmllbGQgZGVmYXVsdFZhbHVlPVwiXCIgbGFiZWw9XCJFbWFpbFwiIG1iPXszfSBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3N0YXRlLnN1Ym1pdHRpbmd9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgeydTdWJtaXQnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxoMT57YE1hc3RlcmluZyBOZXh0LmpzYH08L2gxPlxuICAgIDxwPntgVXNpbmcgTURYISBNb3JlIGluZm8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbWFzdGVyaW5nbmV4dGpzLmNvbVwiXG4gICAgICB9fT57YGhlcmVgfTwvYT57YC5gfTwvcD5cbiAgICA8Rm9ybSBtZHhUeXBlPVwiRm9ybVwiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWR4LWpzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdGF0aWNraXQvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiRmllbGQiLCJCdXR0b24iLCJ1c2VGb3JtIiwiRm9ybSIsInN0YXRlIiwiaGFuZGxlU3VibWl0Iiwic3VjY2VlZGVkIiwic3VibWl0dGluZyIsIlJlYWN0IiwibWR4IiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9