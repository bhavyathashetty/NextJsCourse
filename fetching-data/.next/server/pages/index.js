"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unfetch */ "unfetch");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextnew\\course\\fetching-data\\pages\\index.js";




const fetcher = async path => {
  const res = await unfetch__WEBPACK_IMPORTED_MODULE_1___default()(path);
  return res.json();
};

const Profile = () => {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/users/4', fetcher);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "Failed to load."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, undefined);
  }

  if (!data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: ["Hello ", data.name, "!"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ "unfetch":
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("unfetch");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDNUIsUUFBTUMsR0FBRyxHQUFHLE1BQU1ILDhDQUFLLENBQUNFLElBQUQsQ0FBdkI7QUFFQSxTQUFPQyxHQUFHLENBQUNDLElBQUosRUFBUDtBQUNILENBSkQ7O0FBTUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFDQyxJQUFBQSxJQUFEO0FBQU9DLElBQUFBO0FBQVAsTUFBZ0JSLDBDQUFNLENBQUMsY0FBRCxFQUFpQkUsT0FBakIsQ0FBNUI7O0FBRUEsTUFBSU0sS0FBSixFQUFXO0FBQ1Asd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSDs7QUFFRCxNQUFJLENBQUNELElBQUwsRUFBVztBQUNQLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0g7O0FBRUQsc0JBQU87QUFBQSx5QkFBWUEsSUFBSSxDQUFDRSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBWkQ7O0FBY0EsaUVBQWVILE9BQWY7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDEtYXBpLXJvdXRlcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLzAxLWFwaS1yb3V0ZXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8wMS1hcGktcm91dGVzL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vMDEtYXBpLXJvdXRlcy9leHRlcm5hbCBcInVuZmV0Y2hcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCc7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAocGF0aCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHBhdGgpO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG59O1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoJy9hcGkvdXNlcnMvNCcsIGZldGNoZXIpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkLjwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdj5IZWxsbyB7ZGF0YS5uYW1lfSE8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmZldGNoXCIpOyJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaCIsImZldGNoZXIiLCJwYXRoIiwicmVzIiwianNvbiIsIlByb2ZpbGUiLCJkYXRhIiwiZXJyb3IiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==