require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/history/index"],{

/***/ "./src/pages/history/index.css":
/*!*************************************!*\
  !*** ./src/pages/history/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/history/index.css?modules":
/*!*********************************************!*\
  !*** ./src/pages/history/index.css?modules ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___3GEVL","formSection":"formSection___3n2C_","formCellsTitle":"formCellsTitle___2MQQ_","formCells":"formCells___3kanp","formCellsAfterTitle":"formCellsAfterTitle___JC2Q3","formCell":"formCell___1P6Ep","formCellInput":"formCellInput___2tRW5","formInput":"formInput___1YKdf","confirm":"confirm___2aad4","main":"main___1sn22"};

/***/ }),

/***/ "./src/pages/history/index.entry.js":
/*!******************************************!*\
  !*** ./src/pages/history/index.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/history/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/history/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/history/index'));

/***/ }),

/***/ "./src/pages/history/index.js":
/*!************************************!*\
  !*** ./src/pages/history/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/history/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/common/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      indexData = _useState8[0],
      setIndexData = _useState8[1];

  var fetchData = function fetchData() {
    wx.request({
      url: "".concat("http://192.168.50.82:8000/api", "/productLogs"),
      data: data,
      method: 'GET',
      success: function success(res) {
        console.log('获取日志成功！');
        console.log('data:', res.data);
        setData(res.data);
      },
      fail: function fail(err) {
        console.log(err);
        wx.navigateTo({
          url: '../error/index'
        });
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchData();
  }, []);

  var typeHandler = function typeHandler(str) {
    switch (str) {
      case '0':
        return '领取';

      case '1':
        return '借取';

      case '2':
        return '归还';

      case '3':
        return '补货';
    }
  };

  var colorHandler = function colorHandler(str) {
    switch (str) {
      case '0':
        return 'blue';

      case '1':
        return 'yellow';

      case '2':
        return 'green';

      case '3':
        return 'red';
    }
  };

  var showDetail = function showDetail(data) {
    console.log('data:', data);
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/detail/index?name=".concat(data.name, "&code=").concat(data.code, "&type=").concat(data.type, "&num=").concat(data.num, "&user=").concat(data.user ? data.user : '-', "&manager=").concat(data.manager, "&createDate=").concat(data.createDate)
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["Frame"], {
    grayBg: true,
    style: {
      padding: 0,
      height: '100vh',
      overflow: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["Block"], {
    title: "\u8D44\u4EA7\u4F7F\u7528\u60C5\u51B5"
  }, data && data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
      key: item._id,
      label: item.name,
      arrow: true,
      border: true,
      onTap: function onTap() {
        return showDetail(item);
      },
      description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
        color: colorHandler(item.type)
      }, typeHandler(item.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        style: {
          marginLeft: '24px'
        }
      }, item.createDate))
    }, "\u8BE6\u60C5");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    open: show,
    onClose: function onClose() {
      setShow(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      padding: '80px',
      fontSize: '32px',
      textAlign: 'center'
    }
  }, indexData.toString()))));
});

/***/ }),

/***/ 5:
/*!************************************************!*\
  !*** multi ./src/pages/history/index.entry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenguochen/Desktop/projects/part-time/sap-wx/src/pages/history/index.entry.js */"./src/pages/history/index.entry.js");


/***/ })

},[[5,"runtime","remax-vendors","remax-styles"]]]);