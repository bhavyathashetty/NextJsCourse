"use strict";
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  /*
   * Middleware included to parse the incoming request `req`.
   * req.cookies
   * req.query
   * req.body
   */

  /*
   * Express-like helper functions for the response `res`.
   * res.status(200);
   * res.json({});
   * res.send('HTTP response');
   */
  return res.status(200).json([{
    email: 'me@leerob.io',
    id: 1,
    name: 'Lee'
  }]);
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/users.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsQ0FBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVJLFNBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLENBQ3hCO0FBQ0lDLElBQUFBLEtBQUssRUFBRSxjQURYO0FBRUlDLElBQUFBLEVBQUUsRUFBRSxDQUZSO0FBR0lDLElBQUFBLElBQUksRUFBRTtBQUhWLEdBRHdCLENBQXJCLENBQVA7QUFPSCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovLzAxLWFwaS1yb3V0ZXMvLi9wYWdlcy9hcGkvdXNlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgLypcbiAgICAgKiBNaWRkbGV3YXJlIGluY2x1ZGVkIHRvIHBhcnNlIHRoZSBpbmNvbWluZyByZXF1ZXN0IGByZXFgLlxuICAgICAqIHJlcS5jb29raWVzXG4gICAgICogcmVxLnF1ZXJ5XG4gICAgICogcmVxLmJvZHlcbiAgICAgKi9cblxuICAgIC8qXG4gICAgICogRXhwcmVzcy1saWtlIGhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSByZXNwb25zZSBgcmVzYC5cbiAgICAgKiByZXMuc3RhdHVzKDIwMCk7XG4gICAgICogcmVzLmpzb24oe30pO1xuICAgICAqIHJlcy5zZW5kKCdIVFRQIHJlc3BvbnNlJyk7XG4gICAgICovXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oW1xuICAgICAgICB7XG4gICAgICAgICAgICBlbWFpbDogJ21lQGxlZXJvYi5pbycsXG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdMZWUnXG4gICAgICAgIH1cbiAgICBdKTtcbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVtYWlsIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==