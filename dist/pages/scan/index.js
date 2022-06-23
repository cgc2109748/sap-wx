require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[12],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"form":"form___4YBuz","formSection":"formSection___EDiXy","formCellsTitle":"formCellsTitle___3vXVK","formCells":"formCells___3Arxe","formCellsAfterTitle":"formCellsAfterTitle___2hxg9","formCell":"formCell___3tqPO","formCellInput":"formCellInput___2YXQp","formInput":"formInput___47jfY","confirm":"confirm___U0-SL","main":"main___1mh2w"};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 82:
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

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(3);

// EXTERNAL MODULE: ./src/pages/scan/index.css?modules
var scanmodules = __webpack_require__(19);
var scanmodules_default = /*#__PURE__*/__webpack_require__.n(scanmodules);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/input/index.js
var input = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/picker/index.js + 2 modules
var picker = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/button/index.js + 4 modules
var esm_button = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/anna-remax-ui/esm/popup/index.js + 1 modules
var popup = __webpack_require__(95);

// EXTERNAL MODULE: ./src/common/index.js + 5 modules
var common = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(7);

// CONCATENATED MODULE: ./src/pages/scan/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var options=[{key:'0',value:'领取'},{key:'1',value:'借取'},{key:'2',value:'归还'},{key:'3',value:'补货'}];/* harmony default export */ var scan = (function(props){var _props$location$query2;var _useState=Object(react["useState"])(false),_useState2=_slicedToArray(_useState,2),show=_useState2[0],setShow=_useState2[1];var _useState3=Object(react["useState"])(''),_useState4=_slicedToArray(_useState3,2),errorText=_useState4[0],setErrorText=_useState4[1];var _useState5=Object(react["useState"])({_id:'',name:'',code:'',type:'',num:'',user:'',manager:''}),_useState6=_slicedToArray(_useState5,2),data=_useState6[0],setData=_useState6[1];var _useState7=Object(react["useState"])({}),_useState8=_slicedToArray(_useState7,2),submitData=_useState8[0],setSubmitData=_useState8[1];var _useState9=Object(react["useState"])(new Date().toLocaleDateString()),_useState10=_slicedToArray(_useState9,2),date=_useState10[0],setDate=_useState10[1];var _useState11=Object(react["useState"])(false),_useState12=_slicedToArray(_useState11,2),loading=_useState12[0],setLoading=_useState12[1];var _React$useState=react_default.a.useState(null),_React$useState2=_slicedToArray(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1];Object(react["useEffect"])(function(){var _props$location$query;fetchData((_props$location$query=props.location.query)===null||_props$location$query===void 0?void 0:_props$location$query.code);},[props,(_props$location$query2=props.location.query)===null||_props$location$query2===void 0?void 0:_props$location$query2.code]);var fetchData=function fetchData(code){if(loading)return;setLoading(true);wx.request({method:'POST',url:"".concat("http://43.142.90.201:8000/api","/products/queryProductByCode"),data:{code:code},success:function success(res){var data=res.data[0];setLoading(false);setData(data);var _id=data._id,name=data.name,code=data.code,type=data.type;setSubmitData({_id:_id,name:name,code:code,productType:type});// console.log('data', data)
// console.log('submitData', {
//     _id,
//     name,
//     code,
//     productType: type
// })
},cail:function cail(err){console.error(err);}});};var _onChange=function onChange(key,value){setSubmitData(_objectSpread(_objectSpread({},submitData),_defineProperty({},key,value)));};var createProductLog=function createProductLog(data,productData){if(loading)return;setLoading(true);wx.request({url:"".concat("http://43.142.90.201:8000/api","/productLogs/create"),data:data,method:'POST',success:function success(res){console.log('创建日志成功！');updateProduct(productData);},fail:function fail(err){console.log(err);wx.navigateTo({url:'../error/index'});}});};var updateProduct=function updateProduct(data){wx.request({url:"".concat("http://43.142.90.201:8000/api","/products/").concat(data._id),data:data,method:'PUT',success:function success(res){console.log('更新资产信息成功！');wx.navigateTo({url:'../success/index'});},fail:function fail(err){console.log(err);wx.navigateTo({url:'../error/index'});}});};var submit=function submit(){var _id=submitData._id,name=submitData.name,code=submitData.code,type=submitData.type,num=submitData.num,user=submitData.user,manager=submitData.manager;var logData={name:name,code:code,productType:data.type,type:type,num:num,user:user,manager:manager};var productData={_id:_id};if(type){switch(type){case"0"://领取
productData['used']=Number(data.used)+Number(submitData.num);if(Number(data.left)-Number(submitData.num)<0){setErrorText('领取数量超过剩余数量，请重新填写！');setShow(true);}productData['left']=Number(data.left)-Number(submitData.num);if(parseInt(data.amountOfBrrow)!==null){productData['amountOfBrrow']=data.amountOfBrrow;}if(parseInt(data.total)!==null){productData['total']=data.total;}createProductLog(logData,productData);break;case"1"://借取
if(Number(data.left)-Number(submitData.num)>0||Number(data.left)-Number(submitData.num)==0){productData['used']=Number(data.used)+Number(submitData.num);productData['left']=Number(data.left)-Number(submitData.num);productData['amountOfBrrow']=Number(data.amountOfBrrow)+Number(submitData.num);createProductLog(logData,productData);}else{setErrorText('使用数量不能大于剩余数量！');setShow(true);break;}break;case"2"://归还
if(Number(data.amountOfBrrow)-Number(submitData.num)>0||Number(data.amountOfBrrow)-Number(submitData.num)==0){productData['used']=Number(data.used)-Number(submitData.num);productData['left']=Number(data.left)+Number(submitData.num);productData['amountOfBrrow']=Number(data.amountOfBrrow)-Number(submitData.num);createProductLog(logData,productData);}else{setErrorText('归还数量有误，请确认后再提交！');setShow(true);break;}break;case"3"://补货
productData['left']=Number(data.left)+Number(submitData.num);productData['total']=Number(data.total)+Number(submitData.num);createProductLog(logData,productData);break;default:break;}}};var checkForm=function checkForm(){var type=submitData.type,num=submitData.num,user=submitData.user,manager=submitData.manager;console.log('submitData',submitData);if(Object(utils["f" /* isEmpty */])(type)){setErrorText('使用方式不能为空！');setShow(true);return;}else if(Object(utils["f" /* isEmpty */])(num)){setErrorText('使用数量不能为空！');setShow(true);return;}else if(Object(utils["f" /* isEmpty */])(user)){if(type!=='2'&&type!=='3'){setErrorText('使用人不能为空！');setShow(true);return;}else{submit();}}else if(Object(utils["f" /* isEmpty */])(manager)){setErrorText('经办人不能为空！');setShow(true);return;}else{submit();}};return/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{className:scanmodules_default.a.form},/*#__PURE__*/react_default.a.createElement(common["b" /* Frame */],{grayBg:true},/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u540D\u79F0"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.name,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u8D44\u4EA7\u7F16\u7801"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.code,border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u65B9\u5F0F"},/*#__PURE__*/react_default.a.createElement(picker["a" /* default */],{value:value,onChange:function onChange(v){setValue(v.key);_onChange('type',v.key);},options:options,placeholder:"\u8BF7\u9009\u62E9"})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u6570\u91CF",type:"number"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.num,border:false,onChange:function onChange(e){return _onChange('num',e.target.value);}})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u4EBA"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.user,border:false,onChange:function onChange(e){return _onChange('user',e.target.value);}})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u7ECF\u529E\u4EBA"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:data===null||data===void 0?void 0:data.manger,border:false,onChange:function onChange(e){return _onChange('manager',e.target.value);}})),/*#__PURE__*/react_default.a.createElement(common["a" /* Block */],{title:"\u4F7F\u7528\u65E5\u671F"},/*#__PURE__*/react_default.a.createElement(input["a" /* default */],{value:Object(utils["d" /* formatTime */])(date),border:false,disabled:true})),/*#__PURE__*/react_default.a.createElement(esm_button["a" /* default */],{className:scanmodules_default.a.confirm,size:"large",shape:"square",block:true,type:"primary",onTap:checkForm},"\u786E\u5B9A"),/*#__PURE__*/react_default.a.createElement(popup["a" /* default */],{open:show,onClose:function onClose(){setShow(false);}},/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{style:{padding:'80px',fontSize:'32px',textAlign:'center'}},errorText)),/*#__PURE__*/react_default.a.createElement(popup["a" /* default */],{open:loading,onClose:function onClose(){setLoading(false);},style:{transform:'translate(-50%, -300px)'}},/*#__PURE__*/react_default.a.createElement(wechat["d" /* View */],{className:scanmodules_default.a.main},/*#__PURE__*/react_default.a.createElement(common["e" /* Loading */],{type:"anna"})))));});
// CONCATENATED MODULE: ./src/pages/scan/index.entry.js
__webpack_require__(60);Page(Object(esm["e" /* createPageConfig */])(scan,'pages/scan/index'));

/***/ })

},[[59,1,0,2]]]);