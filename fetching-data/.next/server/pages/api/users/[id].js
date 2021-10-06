"use strict";
(() => {
var exports = {};
exports.id = "pages/api/users/[id]";
exports.ids = ["pages/api/users/[id]"];
exports.modules = {

/***/ "./pages/api/users/[id].js":
/*!*********************************!*\
  !*** ./pages/api/users/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  const {
    query: {
      id
    }
  } = req;
  res.status(200).json({
    email: 'me@leerob.io',
    id,
    name: 'Lee'
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxDQUFDQSxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QixRQUFNO0FBQ0ZDLElBQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQTtBQUFEO0FBREwsTUFFRkgsR0FGSjtBQUlBQyxFQUFBQSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsSUFBQUEsS0FBSyxFQUFFLGNBRFU7QUFFakJILElBQUFBLEVBRmlCO0FBR2pCSSxJQUFBQSxJQUFJLEVBQUU7QUFIVyxHQUFyQjtBQUtILENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMS1hcGktcm91dGVzLy4vcGFnZXMvYXBpL3VzZXJzL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBxdWVyeToge2lkfVxuICAgIH0gPSByZXE7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIGVtYWlsOiAnbWVAbGVlcm9iLmlvJyxcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWU6ICdMZWUnXG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJzdGF0dXMiLCJqc29uIiwiZW1haWwiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==