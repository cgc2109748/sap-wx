require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___2SlrW","formSection":"formSection___3IeQf","formCellsTitle":"formCellsTitle___1dD4i","formCells":"formCells___JAsDX","formCellsAfterTitle":"formCellsAfterTitle___1BOXi","formCell":"formCell___16rWW","formCellInput":"formCellInput___lz7RQ","formInput":"formInput___3CPlF","confirm":"confirm___zEfME","main":"main___1ZX03"};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 62:
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

// EXTERNAL MODULE: ./src/pages/detail/index.css?modules
var detailmodules = __webpack_require__(22);
var detailmodules_default = /*#__PURE__*/__webpack_require__.n(detailmodules);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/input/index.js
var input = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/picker/index.js + 2 modules
var picker = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/button/index.js + 4 modules
var esm_button = __webpack_require__(67);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(10);

// CONCATENATED MODULE: ./src/pages/detail/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var options=[{key:'0',value:'领取'},{key:'1',value:'借取'},{key:'2',value:'归还'},{key:'3',value:'补货'}];/* harmony default export */ var detail = (function(props){var _useState=Object(react["useState"])(props.location.query),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];Object(react["useEffect"])(function(){console.log('props.location.query:',props.location.query);setData(props.location.query);},[props,props.location.query]);var back=function back(){Object(wechat["d" /* navigateTo */])({url:'/pages/history/index'});};return/*#__PURE__*/react_default.a.createElement(wechat["c" /* View */],{className:detailmodules_default.a.form},/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u540D\u79F0"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.name,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u7F16\u7801"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.code,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u65B9\u5F0F"},/*#__PURE__*/react_default.a.createElement(picker["a" /* default */],{value:data===null||data===void 0?void 0:data.type,options:options,placeholder:"\u8BF7\u9009\u62E9",disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u6570\u91CF",type:"number"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.num,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u4EBA"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.user,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u7ECF\u529E\u4EBA"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.manager,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u65E5\u671F"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.createDate,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{className:detailmodules_default.a.confirm,size:"large",shape:"square",block:true,type:"primary",onTap:back},"\u8FD4\u56DE")));});
// CONCATENATED MODULE: ./src/pages/detail/index.entry.js
__webpack_require__(54);Page(Object(esm["e" /* createPageConfig */])(detail,'pages/detail/index'));

/***/ })

},[[53,1,0,2]]]);