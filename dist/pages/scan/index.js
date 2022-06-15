require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/scan/index"],{

/***/ "./src/pages/scan/index.css":
/*!**********************************!*\
  !*** ./src/pages/scan/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/scan/index.css?modules":
/*!******************************************!*\
  !*** ./src/pages/scan/index.css?modules ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___4YBuz","formSection":"formSection___EDiXy","formCellsTitle":"formCellsTitle___3vXVK","formCells":"formCells___3Arxe","formCellsAfterTitle":"formCellsAfterTitle___2hxg9","formCell":"formCell___3tqPO","formCellInput":"formCellInput___2YXQp","formInput":"formInput___47jfY","confirm":"confirm___U0-SL","main":"main___1mh2w"};

/***/ }),

/***/ "./src/pages/scan/index.entry.js":
/*!***************************************!*\
  !*** ./src/pages/scan/index.entry.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/scan/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/scan/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/scan/index'));

/***/ }),

/***/ "./src/pages/scan/index.js":
/*!*********************************!*\
  !*** ./src/pages/scan/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/scan/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! anna-remax-ui */ "./node_modules/anna-remax-ui/esm/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./src/common/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var options = [{
  key: '0',
  value: '领取'
}, {
  key: '1',
  value: '借取'
}, {
  key: '2',
  value: '归还'
}, {
  key: '3',
  value: '补货'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$location$query2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    _id: '',
    name: '',
    code: '',
    type: '',
    num: '',
    user: '',
    manager: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      submitData = _useState8[0],
      setSubmitData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date().toLocaleDateString()),
      _useState10 = _slicedToArray(_useState9, 2),
      date = _useState10[0],
      setDate = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _props$location$query;

    fetchData((_props$location$query = props.location.query) === null || _props$location$query === void 0 ? void 0 : _props$location$query.code);
  }, [props, (_props$location$query2 = props.location.query) === null || _props$location$query2 === void 0 ? void 0 : _props$location$query2.code]);

  var fetchData = function fetchData(code) {
    if (loading) return;
    setLoading(true);
    wx.request({
      method: 'POST',
      url: "".concat("http://192.168.50.82:8000/api", "/products/queryProductByCode"),
      data: {
        code: code
      },
      success: function success(res) {
        var data = res.data[0];
        setLoading(false);
        setData(data);
        var _id = data._id,
            name = data.name,
            code = data.code,
            type = data.type;
        setSubmitData({
          _id: _id,
          name: name,
          code: code,
          productType: type
        }); // console.log('data', data)
        // console.log('submitData', {
        //     _id,
        //     name,
        //     code,
        //     productType: type
        // })
      },
      cail: function cail(err) {
        console.error(err);
      }
    });
  };

  var _onChange = function onChange(key, value) {
    setSubmitData(_objectSpread(_objectSpread({}, submitData), _defineProperty({}, key, value)));
  };

  var createProductLog = function createProductLog(data, productData) {
    if (loading) return;
    setLoading(true);
    wx.request({
      url: "".concat("http://192.168.50.82:8000/api", "/productLogs/create"),
      data: data,
      method: 'POST',
      success: function success(res) {
        console.log('创建日志成功！');
        updateProduct(productData);
      },
      fail: function fail(err) {
        console.log(err);
        wx.navigateTo({
          url: '../error/index'
        });
      }
    });
  };

  var updateProduct = function updateProduct(data) {
    wx.request({
      url: "".concat("http://192.168.50.82:8000/api", "/products/").concat(data._id),
      data: data,
      method: 'PUT',
      success: function success(res) {
        console.log('更新资产信息成功！');
        wx.navigateTo({
          url: '../success/index'
        });
      },
      fail: function fail(err) {
        console.log(err);
        wx.navigateTo({
          url: '../error/index'
        });
      }
    });
  };

  var submit = function submit() {
    var _id = submitData._id,
        name = submitData.name,
        code = submitData.code,
        type = submitData.type,
        num = submitData.num,
        user = submitData.user,
        manager = submitData.manager;
    var logData = {
      name: name,
      code: code,
      productType: data.type,
      type: type,
      num: num,
      user: user,
      manager: manager
    };
    var productData = {
      _id: _id
    };

    if (type) {
      switch (type) {
        case "0":
          //领取
          productData['used'] = Number(data.used) + Number(submitData.num);
          productData['left'] = Number(data.left) - Number(submitData.num);

          if (parseInt(data.amountOfBrrow) !== null) {
            productData['amountOfBrrow'] = data.amountOfBrrow;
          }

          if (parseInt(data.total) !== null) {
            productData['total'] = data.total;
          }

          createProductLog(logData, productData);
          break;

        case "1":
          //借取
          if (Number(data.left) - Number(submitData.num) > 0 || Number(data.left) - Number(submitData.num) == 0) {
            productData['used'] = Number(data.used) + Number(submitData.num);
            productData['left'] = Number(data.left) - Number(submitData.num);
            productData['amountOfBrrow'] = Number(data.amountOfBrrow) + Number(submitData.num);
            createProductLog(logData, productData);
          } else {
            setErrorText('使用数量不能大于剩余数量！');
            setShow(true);
            break;
          }

          break;

        case "2":
          //归还
          if (Number(data.amountOfBrrow) - Number(submitData.num) > 0 || Number(data.amountOfBrrow) - Number(submitData.num) == 0) {
            productData['used'] = Number(data.used) - Number(submitData.num);
            productData['left'] = Number(data.left) + Number(submitData.num);
            productData['amountOfBrrow'] = Number(data.amountOfBrrow) - Number(submitData.num);
            createProductLog(logData, productData);
          } else {
            setErrorText('归还数量有误，请确认后再提交！');
            setShow(true);
            break;
          }

          break;

        case "3":
          //补货
          productData['left'] = Number(data.left) + Number(submitData.num);
          productData['total'] = Number(data.total) + Number(submitData.num);
          createProductLog(logData, productData);
          break;

        default:
          break;
      }
    }
  };

  var checkForm = function checkForm() {
    var type = submitData.type,
        num = submitData.num,
        user = submitData.user,
        manager = submitData.manager;
    console.log('submitData', submitData);

    if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(type)) {
      setErrorText('使用方式不能为空！');
      setShow(true);
      return;
    } else if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(num)) {
      setErrorText('使用数量不能为空！');
      setShow(true);
      return;
    } else if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(user)) {
      if (type !== '2' && type !== '3') {
        setErrorText('使用人不能为空！');
        setShow(true);
        return;
      } else {
        submit();
      }
    } else if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(manager)) {
      setErrorText('经办人不能为空！');
      setShow(true);
      return;
    } else {
      submit();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    grayBg: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u8D44\u4EA7\u540D\u79F0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: data === null || data === void 0 ? void 0 : data.name,
    border: false,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u8D44\u4EA7\u7F16\u7801"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: data === null || data === void 0 ? void 0 : data.code,
    border: false,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u4F7F\u7528\u65B9\u5F0F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Picker"], {
    value: value,
    onChange: function onChange(v) {
      setValue(v.key);

      _onChange('type', v.key);
    },
    options: options,
    placeholder: "\u8BF7\u9009\u62E9"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u4F7F\u7528\u6570\u91CF",
    type: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: data === null || data === void 0 ? void 0 : data.num,
    border: false,
    onChange: function onChange(e) {
      return _onChange('num', e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u4F7F\u7528\u4EBA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: data === null || data === void 0 ? void 0 : data.user,
    border: false,
    onChange: function onChange(e) {
      return _onChange('user', e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u7ECF\u529E\u4EBA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: data === null || data === void 0 ? void 0 : data.manger,
    border: false,
    onChange: function onChange(e) {
      return _onChange('manager', e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Block"], {
    title: "\u4F7F\u7528\u65E5\u671F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(date),
    border: false,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.confirm,
    size: "large",
    shape: "square",
    block: true,
    type: "primary",
    onTap: checkForm
  }, "\u786E\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
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
  }, errorText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(anna_remax_ui__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
    open: loading,
    onClose: function onClose() {
      setLoading(false);
    },
    style: {
      transform: 'translate(-50%, -300px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Loading"], {
    type: "anna"
  })))));
});

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./src/pages/scan/index.entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenguochen/Desktop/projects/part-time/sap-wx/src/pages/scan/index.entry.js */"./src/pages/scan/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors","remax-styles"]]]);