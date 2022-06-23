require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[13],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js + 54 modules
var wechat = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/result/index.js
var result = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/button/index.js + 4 modules
var esm_button = __webpack_require__(93);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(4);

// CONCATENATED MODULE: ./src/pages/success/index.js
/* harmony default export */ var success = (function(props){return/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],null,/*#__PURE__*/react_default.a.createElement(result["a" /* default */],{height:"100vh",status:"success",title:"\u63D0\u4EA4\u6210\u529F",subTitle:"",extra:/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],null,/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{onTap:function onTap(){wx.navigateTo({url:'../index/index'});}},"\u8FD4\u56DE\u9996\u9875"))})));});
// CONCATENATED MODULE: ./src/pages/success/index.entry.js
Page(Object(esm["e" /* createPageConfig */])(success,'pages/success/index'));

/***/ })

},[[61,1,0,2]]]);