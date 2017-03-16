module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ColorBand__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Bands = function (_React$Component) {
  _inherits(Bands, _React$Component);

  function Bands() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bands);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bands.__proto__ || Object.getPrototypeOf(Bands)).call.apply(_ref, [this].concat(args))), _this), _this.setColorOffset = function (colorOffset) {
      _this.props.handleChange({ colorOffset: colorOffset });
    }, _this.setOpacityOffset = function (opacityOffset) {
      _this.props.handleChange({ opacityOffset: opacityOffset });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bands, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          colorOffset = _props.colorOffset,
          opacityOffset = _props.opacityOffset;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['band-pane'] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['color-bands'] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorBand__["a" /* default */], {
            type: 'color',
            left: colorOffset,
            handleChange: this.setColorOffset }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorBand__["a" /* default */], {
            type: 'opacity',
            color: color,
            left: opacityOffset,
            handleChange: this.setOpacityOffset })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['preview-bg'] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['preview'], style: { backgroundColor: color, opacity: parseInt(opacityOffset) / 100 } })
        )
      );
    }
  }]);

  return Bands;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = Bands;


Bands.propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  colorOffset: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  opacityOffset: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Circle__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.handleDown = function (e) {
      _this.mousedown = true;
      _this.updatePosition(e.nativeEvent);
      document.addEventListener('mousemove', _this.updatePosition);
      document.addEventListener('mouseup', _this.detachEvent);
    }, _this.updatePosition = function (e) {
      if (!_this.mousedown) return;
      var clientX = e.clientX,
          clientY = e.clientY;

      var percentX = (clientX - _this.left) / _this.width * 100;
      var percentY = (clientY - _this.top) / _this.height * 100;
      if (percentX < 0) percentX = 0;
      if (percentX > 100) percentX = 100;
      if (percentY < 0) percentY = 0;
      if (percentY > 100) percentY = 100;
      var canvasLeft = percentX + '%';
      var canvasTop = percentY + '%';
      _this.props.handleChange({ canvasLeft: canvasLeft, canvasTop: canvasTop });
    }, _this.detachEvent = function (e) {
      _this.mouseDown = false;
      document.removeEventListener('mousemove', _this.updatePosition);
      document.removeEventListener('mouseup', _this.detachEvent);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Canvas, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*
        TODO rect的计算放到DidMount会导致页面滚动后, clientRect变化了,
        但使用的还是原数值, 但考虑到墨刀没有滚动, 放在这里能省去不少重复的计算
      */
      var rect = this.canvas.getBoundingClientRect();
      this.top = rect.top;
      this.left = rect.left;
      this.width = rect.width;
      this.height = rect.height;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          backgroundColor = _props.color,
          left = _props.left,
          top = _props.top;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        {
          ref: function ref(_ref2) {
            _this2.canvas = _ref2;
          },
          className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['canvas-pane'],
          style: { backgroundColor: backgroundColor },
          onMouseDown: this.handleDown },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['overlay-1'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['overlay-2'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { left: left, top: top })
      );
    }
  }]);

  return Canvas;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = Canvas;


Canvas.propTypes = {
  changePosition: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ColorInput__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DashBoard = function (_React$Component) {
  _inherits(DashBoard, _React$Component);

  function DashBoard() {
    _classCallCheck(this, DashBoard);

    return _possibleConstructorReturn(this, (DashBoard.__proto__ || Object.getPrototypeOf(DashBoard)).apply(this, arguments));
  }

  _createClass(DashBoard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          rgb = _props.rgb,
          alpha = _props.alpha;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: __WEBPACK_IMPORTED_MODULE_2__index_sass___default.a['value-pane'] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorInput__["a" /* default */], { size: '7', label: '#', maxLength: '6', value: color.slice(1) }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorInput__["a" /* default */], { size: '3', label: 'R', maxLength: '3', value: rgb.r }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorInput__["a" /* default */], { size: '3', label: 'G', maxLength: '3', value: rgb.g }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorInput__["a" /* default */], { size: '3', label: 'B', maxLength: '3', value: rgb.b }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ColorInput__["a" /* default */], { size: '3', label: 'A', maxLength: '6', value: alpha })
      );
    }
  }]);

  return DashBoard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = DashBoard;


DashBoard.propTypes = {
  rgb: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  alpha: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['history-pane'] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev1 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev2 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev3 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev4 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev5 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'colpick_prev6 colpick_prev', style: { 'backgroundColor': 'rgb(98, 0, 255)' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'colpick_transparent', className: 'colpick_prev' })
      );
    }
  }]);

  return History;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = History;


History.propTypes = {
  'a': __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Theme = function (_React$Component) {
  _inherits(Theme, _React$Component);

  function Theme() {
    _classCallCheck(this, Theme);

    return _possibleConstructorReturn(this, (Theme.__proto__ || Object.getPrototypeOf(Theme)).apply(this, arguments));
  }

  _createClass(Theme, [{
    key: 'render',
    value: function render() {
      var themes = this.props.themes;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['theme-pane'] },
        themes.map(function (t, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: i, className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['theme'], style: { backgroundColor: t } });
        })
      );
    }
  }]);

  return Theme;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = Theme;


Theme.propTypes = {
  themes: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

/* 以前写的渐变corner, 样式可以收藏起来
  <span className="color_mode flat_color"></span>
  <span className="color_mode linear_gradient"></span>
  <span className="color_mode radial_gradient"></span>
  <span className="color_mode pattern_fill"></span>
  <span className="color_mode transparent_color"></span>
*/

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hexToHsb; });
/* unused harmony export hexToRgb */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hsbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hsbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return rgbToHex; });

function getDegree(start, end, width, height) {
  var deltaX = end.x - start.x;
  var deltaY = end.y - start.y;
  //从(0,0)逆时针旋转到(deltaX, deltaY)的角度
  var deg = Math.atan2(deltaY * height, deltaX * width) / Math.PI * 180;
  //弧度转角度
  return deg;
  return Math.round(deg);
}
//e.g. (0.2, -0.5, 100, 200, 45)
function getLinearPercent(perX, perY, width, height, theta) {
  // console.log("====================")
  // console.log(perX, perY, width, height, theta)
  // console.log('theta: ',theta)
  if (theta < -90) {
    // 左上
    var posX = width * (1 - perX);
    var posY = height * (1 - perY);
  } else if (theta < 0) {
    // 右上
    var posX = width * perX;
    var posY = height * (1 - perY);
  } else if (theta < 90) {
    // 右下
    var posX = width * perX;
    var posY = height * perY;
  } else {
    // 左下
    var posX = width * (1 - perX);
    var posY = height * perY;
  }
  // console.log('传入参数实际坐标: ',posX, posY)
  //求出夹角tan的绝对值
  var tan = Math.abs(Math.tan(theta / 180 * Math.PI));
  // console.log('tan: ',tan)
  //分子
  var molecular = posX + posY * tan;
  //分母
  // var denominator = width + height * tan;
  var denominator = width + height * tan;
  // var sin = Math.sin(-theta / 180 * Math.PI)
  // console.log(perY * height / sin)
  // console.log(molecular / (1 + tan * tan))
  var result = molecular / denominator;
  // console.log('渐变百分比点为: ',result)
  // console.log("====================")
  // console.log(result)
  return parseFloat(result.toFixed(2));
}
//Color space convertions
function hexToRgb(hex) {
  var hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
  return { r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: hex & 0x0000FF };
};
function hexToHsb(hex) {
  return rgbToHsb(hexToRgb(hex));
};
function rgbToHsb(rgb) {
  var hsb = { h: 0, s: 0, b: 0 };
  var min = Math.min(rgb.r, rgb.g, rgb.b);
  var max = Math.max(rgb.r, rgb.g, rgb.b);
  var delta = max - min;
  hsb.b = max;
  hsb.s = max != 0 ? 255 * delta / max : 0;
  if (hsb.s != 0) {
    if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;else hsb.h = 4 + (rgb.r - rgb.g) / delta;
  } else hsb.h = -1;
  hsb.h *= 60;
  if (hsb.h < 0) hsb.h += 360;
  hsb.s *= 100 / 255;
  hsb.b *= 100 / 255;
  return hsb;
};
function hsbToRgb(hsb) {
  var rgb = {};
  var h = hsb.h;
  var s = hsb.s * 255 / 100;
  var v = hsb.b * 255 / 100;
  if (s == 0) {
    rgb.r = rgb.g = rgb.b = v;
  } else {
    var t1 = v;
    var t2 = (255 - s) * v / 255;
    var t3 = (t1 - t2) * (h % 60) / 60;
    if (h == 360) h = 0;
    if (h < 60) {
      rgb.r = t1;rgb.b = t2;rgb.g = t2 + t3;
    } else if (h < 120) {
      rgb.g = t1;rgb.b = t2;rgb.r = t1 - t3;
    } else if (h < 180) {
      rgb.g = t1;rgb.r = t2;rgb.b = t2 + t3;
    } else if (h < 240) {
      rgb.b = t1;rgb.r = t2;rgb.g = t1 - t3;
    } else if (h < 300) {
      rgb.b = t1;rgb.g = t2;rgb.r = t2 + t3;
    } else if (h < 360) {
      rgb.r = t1;rgb.g = t2;rgb.b = t1 - t3;
    } else {
      rgb.r = 0;rgb.g = 0;rgb.b = 0;
    }
  }
  return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
};
function rgbToHex(rgb) {
  var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
  hex.map(function (val, nr) {
    if (val.length == 1) {
      hex[nr] = '0' + val;
    }
  });
  return hex.join('');
};
function hsbToHex(hsb) {
  return rgbToHex(hsbToRgb(hsb));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"colorpicker":"colorpicker---2UGWl","hr":"hr---32Qms"};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CLASSNAME = {
  color: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['color-band'],
  opacity: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['opacity-band']
};

var ColorBand = function (_React$Component) {
  _inherits(ColorBand, _React$Component);

  function ColorBand() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorBand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorBand.__proto__ || Object.getPrototypeOf(ColorBand)).call.apply(_ref, [this].concat(args))), _this), _this.handleDown = function (e) {
      _this.mouseDown = true;
      _this.updatePosition(e.nativeEvent);
      document.addEventListener('mousemove', _this.updatePosition);
      document.addEventListener('mouseup', _this.detachEvent);
    }, _this.updatePosition = function (e) {
      if (!_this.mouseDown) return;
      var percent = (e.clientX - _this.left) / _this.width * 100 >> 0;
      if (percent < 0 || percent > 100) return;
      _this.props.handleChange(percent + '%');
    }, _this.detachEvent = function (e) {
      _this.mouseDown = false;
      document.removeEventListener('mousemove', _this.updatePosition);
      document.removeEventListener('mouseup', _this.detachEvent);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorBand, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*
        TODO rect的计算放到DidMount会导致页面滚动后, clientRect变化了,
        但使用的还是原数值, 但考虑到墨刀没有滚动, 放在这里能省去不少重复的计算
      */
      var band = this.refs.band.getBoundingClientRect();
      this.left = band.left;
      this.width = band.width; //btn.width / 2
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          left = _props.left,
          color = _props.color;

      var gradient = 'linear-gradient(to right, transparent 0%, ' + color + ' 100%)';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          ref: 'band',
          onMouseDown: this.handleDown,
          className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['band'] + ' ' + CLASSNAME[type] },
        type === 'opacity' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['opacity-bg'], style: { backgroundImage: gradient } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['btn'], style: { left: left } })
      );
    }
  }]);

  return ColorBand;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = ColorBand;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_sass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Circle = function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          left = _props.left,
          top = _props.top;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { style: { left: left, top: top }, className: __WEBPACK_IMPORTED_MODULE_1__index_sass___default.a['color-circle'] });
    }
  }]);

  return Circle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = Circle;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ColorInput = function (_React$Component) {
  _inherits(ColorInput, _React$Component);

  function ColorInput() {
    _classCallCheck(this, ColorInput);

    return _possibleConstructorReturn(this, (ColorInput.__proto__ || Object.getPrototypeOf(ColorInput)).apply(this, arguments));
  }

  _createClass(ColorInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          maxLength = _props.maxLength,
          size = _props.size,
          value = _props.value;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "color-input Hex_value" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "" },
          label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", _extends({ type: "text" }, { maxLength: maxLength, size: size, value: value }))
      );
    }
  }]);

  return ColorInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = ColorInput;


ColorInput.propTypes = {
  'a': __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"band":"band---tIwdX","color-band":"color-band---3j0WD","opacity-band":"opacity-band---1VYiO","opacity-bg":"opacity-bg---1A_56","btn":"btn---29Uqb"};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"band-pane":"band-pane---1Dr2l","color-bands":"color-bands---2ngL5","preview-bg":"preview-bg---2XthN","preview":"preview---3Rn8S"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"color-circle":"color-circle---1qshT"};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"canvas-pane":"canvas-pane---UK9or","overlay-1":"overlay-1---2SLYl","overlay-2":"overlay-2---1ldfF"};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value-pane":"value-pane---dGpJ1"};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history-pane":"history-pane---1btk9"};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"theme-pane":"theme-pane---3dEuz","theme":"theme---6kD5D"};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Theme__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Canvas__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__History__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bands__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DashBoard__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_sass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__index_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

    _this.handleChange = function (state) {
      _this.setState(state);
    };

    var hsb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* hexToHsb */])(props.color);
    console.log(props.color);
    console.log(hsb);
    var opacity = props.opacity;
    _this.state = {
      colorOffset: hsb.h + '%',
      canvasLeft: hsb.s + '%',
      canvasTop: hsb.b + '%',
      opacityOffset: opacity + '%'
    };
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.onChange(this.hex, this.opacity);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          canvasLeft = _state.canvasLeft,
          canvasTop = _state.canvasTop,
          colorOffset = _state.colorOffset,
          opacityOffset = _state.opacityOffset;

      var rgb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* hsbToRgb */])({
        h: parseInt(colorOffset) * 360 / 100,
        s: parseInt(canvasLeft),
        b: 100 - parseInt(canvasTop)
      });
      var canvasColor = '#' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* hsbToHex */])({
        h: parseInt(colorOffset) * 360 / 100,
        s: 100,
        b: 100
      });
      this.hex = '#' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* rgbToHex */])(rgb);
      this.opacity = parseInt(opacityOffset);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_6__index_sass___default.a['colorpicker'] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Theme__["a" /* default */], { themes: this.props.themes }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Canvas__["a" /* default */], { top: canvasTop, left: canvasLeft,
          color: canvasColor, handleChange: this.handleChange }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Bands__["a" /* default */], {
          color: this.hex, colorOffset: colorOffset,
          opacityOffset: opacityOffset, handleChange: this.handleChange }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DashBoard__["a" /* default */], { color: this.hex, rgb: rgb, alpha: this.opacity }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_6__index_sass___default.a['hr'] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__History__["a" /* default */], null)
      );
    }
  }]);

  return ColorPicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = ColorPicker;


ColorPicker.propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  themes: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  opacity: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};
ColorPicker.defaultProps = {
  color: '#bec851',
  opacity: 50
};

/***/ })
/******/ ]);