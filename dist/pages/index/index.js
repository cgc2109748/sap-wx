require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[7],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js + 54 modules
var wechat = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/icon/index.js
var icon = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/index/index.css?modules
var indexmodules = __webpack_require__(30);
var indexmodules_default = /*#__PURE__*/__webpack_require__.n(indexmodules);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/index/index.js
/* harmony default export */ var index = (function(){var scanner=function scanner(){// navigateTo({
//     url: `/pages/scan/index?code=${'BG202200010001'}`,
// })
wx.scanCode({onlyFromCamera:true,scanType:'QR_CODE',success:function success(_ref){var result=_ref.result;console.log('result:',result);Object(one["navigateTo"])({url:"/pages/scan/index?code=".concat(result)});}});};var routeHandler=function routeHandler(path){Object(one["navigateTo"])({url:"/pages/".concat(path,"/index")});};return/*#__PURE__*/react_default.a.createElement(wechat["c" /* View */],{className:indexmodules_default.a.app},/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u64CD\u4F5C"},/*#__PURE__*/react_default.a.createElement(common["c" /* Grid */],null,/*#__PURE__*/react_default.a.createElement(common["d" /* GridItem */],{name:"\u8D44\u4EA7\u4F7F\u7528\u60C5\u51B5",onClick:function onClick(){return routeHandler('history');}},/*#__PURE__*/react_default.a.createElement(icon["a" /* default */],{type:"edit_light",size:"50px"})),/*#__PURE__*/react_default.a.createElement(common["d" /* GridItem */],{name:"\u4F7F\u7528\u8D44\u4EA7",onClick:scanner},/*#__PURE__*/react_default.a.createElement(icon["a" /* default */],{type:"qr_code_light",size:"50px"}))))));});
// CONCATENATED MODULE: ./src/pages/index/index.entry.js
__webpack_require__(46);Page(Object(esm["e" /* createPageConfig */])(index,'pages/index/index'));

/***/ })

},[[45,1,0,2]]]);