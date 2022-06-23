require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[6],{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 84:
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

// CONCATENATED MODULE: ./src/pages/error/index.js
/* harmony default export */ var error = (function(props){return/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"Success"},/*#__PURE__*/react_default.a.createElement(result["a" /* default */],{height:"1000px",status:"error",title:"\u63D0\u4EA4\u5931\u8D25",subTitle:"\u8BF7\u4ED4\u7EC6\u68C0\u67E5\u6838\u5BF9\u4FE1\u606F\u540E\u5728\u63D0\u4EA4",extra:/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],null,/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{onTap:function onTap(){wx.navigateTo({url:'../index/index'});}},"\u8FD4\u56DE\u9996\u9875"))})));});
// CONCATENATED MODULE: ./src/pages/error/index.entry.js
Page(Object(esm["e" /* createPageConfig */])(error,'pages/error/index'));

/***/ })

},[[62,1,0,2]]]);