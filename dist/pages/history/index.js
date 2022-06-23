require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[7],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___3GEVL","formSection":"formSection___3n2C_","formCellsTitle":"formCellsTitle___2MQQ_","formCells":"formCells___3kanp","formCellsAfterTitle":"formCellsAfterTitle___JC2Q3","formCell":"formCell___1P6Ep","formCellInput":"formCellInput___2tRW5","formInput":"formInput___1YKdf","confirm":"confirm___2aad4","main":"main___1sn22"};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 85:
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

// EXTERNAL MODULE: ./src/pages/history/index.css?modules
var historymodules = __webpack_require__(40);
var historymodules_default = /*#__PURE__*/__webpack_require__.n(historymodules);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/cell/index.js
var cell = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/tag/index.js
var tag = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/popup/index.js + 1 modules
var popup = __webpack_require__(95);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(4);

// CONCATENATED MODULE: ./src/pages/history/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var pages_history = (function(props){var _useState=Object(react["useState"])(false),_useState2=_slicedToArray(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=Object(react["useState"])([]),_useState4=_slicedToArray(_useState3,2),data=_useState4[0],setData=_useState4[1];var _useState5=Object(react["useState"])(false),_useState6=_slicedToArray(_useState5,2),show=_useState6[0],setShow=_useState6[1];var _useState7=Object(react["useState"])({}),_useState8=_slicedToArray(_useState7,2),indexData=_useState8[0],setIndexData=_useState8[1];var fetchData=function fetchData(){wx.request({url:"".concat("http://43.142.90.201:8000/api","/productLogs"),data:data,method:'GET',success:function success(res){console.log('获取日志成功！');console.log('data:',res.data);setData(res.data);},fail:function fail(err){console.log(err);wx.navigateTo({url:'../error/index'});}});};Object(react["useEffect"])(function(){fetchData();},[]);var typeHandler=function typeHandler(str){switch(str){case'0':return'领取';case'1':return'借取';case'2':return'归还';case'3':return'补货';}};var colorHandler=function colorHandler(str){switch(str){case'0':return'blue';case'1':return'yellow';case'2':return'green';case'3':return'red';}};var showDetail=function showDetail(data){console.log('data:',data);Object(wechat["f" /* navigateTo */])({url:"/pages/detail/index?name=".concat(data.name,"&code=").concat(data.code,"&type=").concat(data.type,"&num=").concat(data.num,"&user=").concat(data.user?data.user:'-',"&manager=").concat(data.manager,"&createDate=").concat(data.createDate)});};return/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{className:historymodules_default.a.form},/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true,style:{padding:0,height:'100vh',overflow:'scroll'}},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u4F7F\u7528\u60C5\u51B5"},data&&data.map(function(item){return/*#__PURE__*/react_default.a.createElement(cell["a" /* default */],{key:item._id,label:item.name,arrow:true,border:true,onTap:function onTap(){return showDetail(item);},description:/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(tag["a" /* default */],{color:colorHandler(item.type)},typeHandler(item.type)),/*#__PURE__*/react_default.a.createElement(wechat["c" /* Text */],{style:{marginLeft:'24px'}},item.createDate))},"\u8BE6\u60C5");})),/*#__PURE__*/react_default.a.createElement(popup["a" /* default */],{open:show,onClose:function onClose(){setShow(false);}},/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{style:{padding:'80px',fontSize:'32px',textAlign:'center'}},indexData.toString()))));});
// CONCATENATED MODULE: ./src/pages/history/index.entry.js
__webpack_require__(64);Page(Object(esm["e" /* createPageConfig */])(pages_history,'pages/history/index'));

/***/ })

},[[63,1,0,2]]]);