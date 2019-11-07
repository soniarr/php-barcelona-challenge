(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage"],{

/***/ "./assets/css/homepage.scss":
/*!**********************************!*\
  !*** ./assets/css/homepage.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/homepage.js":
/*!*******************************!*\
  !*** ./assets/js/homepage.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_homepage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/homepage.scss */ "./assets/css/homepage.scss");
/* harmony import */ var _css_homepage_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_scss__WEBPACK_IMPORTED_MODULE_0__);

var _0x223f = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x63\x68\x70\x75\x6D\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2E\x70\x68\x70"];
var destinationAPI = _0x223f[0];
$(document).ready(function () {
  $('#challenge_submit').click(function () {
    $('#error_msg, #success_msg').hide();
    $.post('/challenge', {
      name: $('#input_name').val(),
      email: $('#input_email').val(),
      reference: $('#input_reference').val()
    }).fail(function () {
      $('#error_msg').show().html('An error has occurred with the request');
    }).done(function () {
      $('#success_msg').show().html('The request has been sent successfully');
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/homepage.js","runtime","vendors~app~homepage"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2hvbWVwYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIl8weDIyM2YiLCJkZXN0aW5hdGlvbkFQSSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJoaWRlIiwicG9zdCIsIm5hbWUiLCJ2YWwiLCJlbWFpbCIsInJlZmVyZW5jZSIsImZhaWwiLCJzaG93IiwiaHRtbCIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLE9BQU8sR0FBQyxDQUFDLGtHQUFELENBQVo7QUFDQSxJQUFJQyxjQUFjLEdBQUNELE9BQU8sQ0FBQyxDQUFELENBQTFCO0FBRUFFLENBQUMsQ0FBRUMsUUFBRixDQUFELENBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUMzQkYsR0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJHLEtBQXZCLENBQTZCLFlBQVU7QUFDbkNILEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCSSxJQUE5QjtBQUNBSixLQUFDLENBQUNLLElBQUYsQ0FDSSxZQURKLEVBRUk7QUFDSUMsVUFBSSxFQUFFTixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTyxHQUFqQixFQURWO0FBRUlDLFdBQUssRUFBRVIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQk8sR0FBbEIsRUFGWDtBQUdJRSxlQUFTLEVBQUVULENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTyxHQUF0QjtBQUhmLEtBRkosRUFRSEcsSUFSRyxDQVFFLFlBQVk7QUFDVlYsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlcsSUFBaEIsR0FBdUJDLElBQXZCLENBQTRCLHdDQUE1QjtBQUNILEtBVkQsRUFXS0MsSUFYTCxDQVdVLFlBQVk7QUFDZGIsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQlcsSUFBbEIsR0FBeUJDLElBQXpCLENBQThCLHdDQUE5QjtBQUNILEtBYkw7QUFjSCxHQWhCRDtBQWlCSCxDQWxCRCxFIiwiZmlsZSI6ImhvbWVwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvaG9tZXBhZ2Uuc2Nzcyc7XG5cbnZhciBfMHgyMjNmPVtcIlxceDY4XFx4NzRcXHg3NFxceDcwXFx4NzNcXHgzQVxceDJGXFx4MkZcXHg3NFxceDY1XFx4NjNcXHg2OFxceDcwXFx4NzVcXHg2RFxceDcwXFx4MkVcXHg2M1xceDZGXFx4NkRcXHgyRlxceDYxXFx4NzBcXHg2OVwiXTtcbnZhciBkZXN0aW5hdGlvbkFQST1fMHgyMjNmWzBdO1xuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJyNjaGFsbGVuZ2Vfc3VibWl0JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnI2Vycm9yX21zZywgI3N1Y2Nlc3NfbXNnJykuaGlkZSgpO1xuICAgICAgICAkLnBvc3QoXG4gICAgICAgICAgICAnL2NoYWxsZW5nZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJCgnI2lucHV0X25hbWUnKS52YWwoKSxcbiAgICAgICAgICAgICAgICBlbWFpbDogJCgnI2lucHV0X2VtYWlsJykudmFsKCksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAkKCcjaW5wdXRfcmVmZXJlbmNlJykudmFsKClcbiAgICAgICAgICAgIH1cbiAgICApXG4gICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnI2Vycm9yX21zZycpLnNob3coKS5odG1sKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2l0aCB0aGUgcmVxdWVzdCcpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzX21zZycpLnNob3coKS5odG1sKCdUaGUgcmVxdWVzdCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==