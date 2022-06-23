require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[9],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___17mdY","formSection":"formSection___2MTvR","formCellsTitle":"formCellsTitle___vCO0F","formCells":"formCells___2R1Vr","formCellsAfterTitle":"formCellsAfterTitle___1PxTD","formCell":"formCell___PtFjA","formCellInput":"formCellInput___1Pp-G","formInput":"formInput___MozAq","confirm":"confirm___2I_Sb","main":"main___2ikbn"};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 88:
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

// EXTERNAL MODULE: ./src/pages/productDetail/index.css?modules
var productDetailmodules = __webpack_require__(24);
var productDetailmodules_default = /*#__PURE__*/__webpack_require__.n(productDetailmodules);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/input/index.js
var input = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/button/index.js + 4 modules
var esm_button = __webpack_require__(93);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(7);

// CONCATENATED MODULE: ./src/pages/productDetail/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var options=[{key:'0',value:'领取'},{key:'1',value:'借取'},{key:'2',value:'归还'},{key:'3',value:'补货'}];/* harmony default export */ var productDetail = (function(props){var _useState=Object(react["useState"])(props.location.query),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];Object(react["useEffect"])(function(){console.log('props.location.query:',props.location.query);setData(props.location.query);},[props,props.location.query]);var routeHandler=function routeHandler(){Object(wechat["f" /* navigateTo */])({url:"/pages/qrCode/index?name=".concat(data.name,"&code=").concat(data.code,"&img=").concat(data.img,"&type=").concat(data.type,"&status=").concat(data.status,"&total=").concat(data.total,"&used=").concat(data.used,"&left=").concat(data.left,"&unit=").concat(data.unit,"&price=").concat(data.price,"&totalPrice=").concat(data.totalPrice,"&user=").concat(data.user?data.user:'-',"&manager=").concat(data.manager,"&updatedDate=").concat(data.updatedDate)});};return/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{className:productDetailmodules_default.a.form},/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u56FE\u7247"},/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{style:{display:'flex',justifyContent:'center'}},data!==null&&data!==void 0&&data.img&&(data===null||data===void 0?void 0:data.img)!=='undefined'?/*#__PURE__*/react_default.a.createElement(wechat["a" /* Image */],{src:data===null||data===void 0?void 0:data.img,mode:"widthFix"}):'暂无图片')),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u540D\u79F0"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.name,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u7F16\u7801"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.code,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u7C7B\u578B"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.type,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u6570\u91CF",type:"number"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.total,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u6570\u91CF"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.used,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u5269\u4F59\u6570\u91CF"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.left,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u5355\u4F4D"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.unit,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u5355\u4EF7"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.price,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u603B\u4EF7"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.totalPrice,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u66F4\u65B0\u65E5\u671F"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.updatedDate,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u7BA1\u7406\u4EBA"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.manager,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{className:productDetailmodules_default.a.confirm,size:"large",shape:"square",block:true,type:"primary",onTap:routeHandler},"\u663E\u793A\u4E8C\u7EF4\u7801")));});
// CONCATENATED MODULE: ./src/pages/productDetail/index.entry.js
__webpack_require__(70);Page(Object(esm["e" /* createPageConfig */])(productDetail,'pages/productDetail/index'));

/***/ })

},[[69,1,0,2]]]);