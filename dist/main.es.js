import React from 'react';

var styles = { "theme-pane": "_theme-pane_1bdyx_1", "theme": "_theme_1bdyx_1", "transparent": "_transparent_1bdyx_11" };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Theme = function (_React$Component) {
  inherits(Theme, _React$Component);

  function Theme() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Theme);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Theme.__proto__ || Object.getPrototypeOf(Theme)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var color = e.currentTarget.dataset.color;
      var handleTheme = _this.props.handleTheme;

      handleTheme(color);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Theme, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var themes = this.props.themes;

      return React.createElement(
        'section',
        { className: styles['theme-pane'] },
        themes.map(function (color, i) {
          return React.createElement('div', {
            key: i,
            'data-color': color,
            onClick: _this2.handleClick,
            className: styles['theme'] + ' ' + (i === 0 && styles['transparent']),
            style: { backgroundColor: color } });
        })
      );
    }
  }]);
  return Theme;
}(React.Component);

Theme.propTypes = {
  themes: React.PropTypes.array,
  handleTheme: React.PropTypes.func
};

/* 以前写的渐变corner, 样式可以收藏起来
  <span className="color_mode flat_color"></span>
  <span className="color_mode linear_gradient"></span>
  <span className="color_mode radial_gradient"></span>
  <span className="color_mode pattern_fill"></span>
  <span className="color_mode transparent_color"></span>
*/

var styles$1 = { "color-circle": "_color-circle_vi9g5_1" };

var Circle = function (_React$Component) {
  inherits(Circle, _React$Component);

  function Circle() {
    classCallCheck(this, Circle);
    return possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          left = _props.left,
          top = _props.top;

      return React.createElement('span', { style: { left: left, top: top }, className: styles$1['color-circle'] });
    }
  }]);
  return Circle;
}(React.Component);

var styles$2 = { "canvas-pane": "_canvas-pane_1fquk_1", "overlay-1": "_overlay-1_1fquk_10", "overlay-2": "_overlay-2_1fquk_10" };

var Canvas = function (_React$Component) {
  inherits(Canvas, _React$Component);

  function Canvas() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.handleDown = function (e) {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Canvas, [{
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

      return React.createElement(
        'section',
        {
          ref: function ref(_ref2) {
            _this2.canvas = _ref2;
          },
          className: styles$2['canvas-pane'],
          style: { backgroundColor: backgroundColor },
          onMouseDown: this.handleDown },
        React.createElement('div', { className: styles$2['overlay-1'] }),
        React.createElement('div', { className: styles$2['overlay-2'] }),
        React.createElement(Circle, { left: left, top: top })
      );
    }
  }]);
  return Canvas;
}(React.Component);

Canvas.propTypes = {
  color: React.PropTypes.string,
  left: React.PropTypes.string,
  top: React.PropTypes.string,
  handleChange: React.PropTypes.func
};

var styles$3 = { "history-pane": "_history-pane_1xmo1_1" };

var History = function (_React$Component) {
  inherits(History, _React$Component);

  function History() {
    classCallCheck(this, History);
    return possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  createClass(History, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: styles$3['history-pane'] },
        React.createElement(
          'span',
          null,
          '\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272'
        )
      );
    }
  }]);
  return History;
}(React.Component);

History.propTypes = {
  'a': React.PropTypes.string
};

var styles$4 = { "band": "_band_6s5kz_1", "color-band": "_color-band_6s5kz_8", "opacity-band": "_opacity-band_6s5kz_10", "opacity-bg": "_opacity-bg_6s5kz_16", "btn": "_btn_6s5kz_21" };

var CLASSNAME = {
  color: styles$4['color-band'],
  opacity: styles$4['opacity-band']
};

var ColorBand = function (_React$Component) {
  inherits(ColorBand, _React$Component);

  function ColorBand() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ColorBand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ColorBand.__proto__ || Object.getPrototypeOf(ColorBand)).call.apply(_ref, [this].concat(args))), _this), _this.handleDown = function (e) {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ColorBand, [{
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
      return React.createElement(
        'div',
        {
          ref: 'band',
          onMouseDown: this.handleDown,
          className: styles$4['band'] + ' ' + CLASSNAME[type] },
        type === 'opacity' && React.createElement('div', { className: styles$4['opacity-bg'], style: { backgroundImage: gradient } }),
        React.createElement('span', { className: styles$4['btn'], style: { left: left } })
      );
    }
  }]);
  return ColorBand;
}(React.Component);

var styles$5 = { "band-pane": "_band-pane_14llv_1", "color-bands": "_color-bands_14llv_4", "preview-bg": "_preview-bg_14llv_10", "preview": "_preview_14llv_10" };

var Bands = function (_React$Component) {
  inherits(Bands, _React$Component);

  function Bands() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Bands);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Bands.__proto__ || Object.getPrototypeOf(Bands)).call.apply(_ref, [this].concat(args))), _this), _this.setColorOffset = function (colorOffset) {
      _this.props.handleChange({ colorOffset: colorOffset });
    }, _this.setOpacityOffset = function (opacityOffset) {
      _this.props.handleChange({ opacityOffset: opacityOffset });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Bands, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          colorOffset = _props.colorOffset,
          opacityOffset = _props.opacityOffset;

      return React.createElement(
        'section',
        { className: styles$5['band-pane'] },
        React.createElement(
          'div',
          { className: styles$5['color-bands'] },
          React.createElement(ColorBand, {
            type: 'color',
            left: colorOffset,
            handleChange: this.setColorOffset }),
          React.createElement(ColorBand, {
            type: 'opacity',
            color: color,
            left: opacityOffset,
            handleChange: this.setOpacityOffset })
        ),
        React.createElement(
          'div',
          { className: styles$5['preview-bg'] },
          React.createElement('div', { className: styles$5['preview'], style: { backgroundColor: color, opacity: parseInt(opacityOffset) / 100 } })
        )
      );
    }
  }]);
  return Bands;
}(React.Component);

Bands.propTypes = {
  color: React.PropTypes.string,
  colorOffset: React.PropTypes.string,
  opacityOffset: React.PropTypes.string,
  handleChange: React.PropTypes.func
};

var ColorInput = function (_React$Component) {
  inherits(ColorInput, _React$Component);

  function ColorInput() {
    classCallCheck(this, ColorInput);
    return possibleConstructorReturn(this, (ColorInput.__proto__ || Object.getPrototypeOf(ColorInput)).apply(this, arguments));
  }

  createClass(ColorInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          maxLength = _props.maxLength,
          size = _props.size,
          value = _props.value;

      return React.createElement(
        "div",
        { className: "color-input Hex_value" },
        React.createElement(
          "label",
          { htmlFor: "" },
          label
        ),
        React.createElement("input", _extends({ type: "text" }, { maxLength: maxLength, size: size, value: value }))
      );
    }
  }]);
  return ColorInput;
}(React.Component);

ColorInput.propTypes = {
  'a': React.PropTypes.string
};

var styles$6 = { "value-pane": "_value-pane_1o8nf_1" };

var DashBoard = function (_React$Component) {
  inherits(DashBoard, _React$Component);

  function DashBoard() {
    classCallCheck(this, DashBoard);
    return possibleConstructorReturn(this, (DashBoard.__proto__ || Object.getPrototypeOf(DashBoard)).apply(this, arguments));
  }

  createClass(DashBoard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          rgb = _props.rgb,
          alpha = _props.alpha;

      return React.createElement(
        'section',
        { className: styles$6['value-pane'] },
        React.createElement(ColorInput, { size: '7', label: '#', maxLength: '6', value: color.slice(1) }),
        React.createElement(ColorInput, { size: '3', label: 'R', maxLength: '3', value: rgb.r }),
        React.createElement(ColorInput, { size: '3', label: 'G', maxLength: '3', value: rgb.g }),
        React.createElement(ColorInput, { size: '3', label: 'B', maxLength: '3', value: rgb.b }),
        React.createElement(ColorInput, { size: '3', label: 'A', maxLength: '6', value: alpha })
      );
    }
  }]);
  return DashBoard;
}(React.Component);

DashBoard.propTypes = {
  rgb: React.PropTypes.object,
  alpha: React.PropTypes.number
};

var styles$7 = { "colorpicker": "_colorpicker_pfzsy_1", "hr": "_hr_pfzsy_15" };

//Color space convertions
function hexToRgb(hex) {
  var hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
  return { r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: hex & 0x0000FF };
}
function hexToHsb(hex) {
  return rgbToHsb(hexToRgb(hex));
}
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
}
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
}
function rgbToHex(rgb) {
  var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
  hex.map(function (val, nr) {
    if (val.length == 1) {
      hex[nr] = '0' + val;
    }
  });
  return hex.join('');
}
function hsbToHex(hsb) {
  return rgbToHex(hsbToRgb(hsb));
}

var ColorPicker = function (_React$Component) {
  inherits(ColorPicker, _React$Component);

  function ColorPicker(_ref) {
    var color = _ref.color,
        opacity = _ref.opacity;
    classCallCheck(this, ColorPicker);

    var _this = possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

    _initialiseProps.call(_this);

    _this.setPosInfo(color, opacity);
    return _this;
  }

  createClass(ColorPicker, [{
    key: 'setPosInfo',
    value: function setPosInfo(color) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var hsb = hexToHsb(color);
      this.colorOffset = hsb.h + '%';
      this.canvasLeft = hsb.s + '%';
      this.canvasTop = 100 - hsb.b + '%';
      this.opacityOffset = opacity + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          opacity = _props.opacity,
          style = _props.style,
          themes = _props.themes;
      var canvasLeft = this.canvasLeft,
          canvasTop = this.canvasTop,
          colorOffset = this.colorOffset,
          opacityOffset = this.opacityOffset;
      // console.log(canvasLeft, canvasTop, colorOffset, opacityOffset)

      var rgb = hexToRgb(color);
      var canvasColor = '#' + hsbToHex({
        h: parseInt(colorOffset) * 360 / 100,
        s: 100,
        b: 100
      });

      return React.createElement(
        'div',
        { className: styles$7['colorpicker'], style: style },
        React.createElement(Theme, { themes: themes, handleTheme: this.handleTheme }),
        React.createElement(Canvas, { top: canvasTop, left: canvasLeft,
          color: canvasColor, handleChange: this.handleChange }),
        React.createElement(Bands, {
          color: color, colorOffset: colorOffset,
          opacityOffset: opacityOffset, handleChange: this.handleChange }),
        React.createElement(DashBoard, { color: color, rgb: rgb, alpha: opacity }),
        React.createElement('span', { className: styles$7['hr'] }),
        React.createElement(History, null)
      );
    }
  }]);
  return ColorPicker;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (state) {
    Object.assign(_this2, state);
    var canvasLeft = _this2.canvasLeft,
        canvasTop = _this2.canvasTop,
        colorOffset = _this2.colorOffset,
        opacityOffset = _this2.opacityOffset;
    // console.log(canvasLeft, canvasTop, colorOffset, opacityOffset)

    var opacity = parseInt(opacityOffset);
    var hex = '#' + hsbToHex({
      h: parseInt(colorOffset) * 360 / 100,
      s: parseInt(canvasLeft),
      b: 100 - parseInt(canvasTop)
    });
    _this2.props.onChange(hex, opacity);
  };

  this.handleTheme = function (color) {
    _this2.setPosInfo(color);
    _this2.props.onChange(color, 100);
  };
};

ColorPicker.propTypes = {
  color: React.PropTypes.string,
  themes: React.PropTypes.array,
  opacity: React.PropTypes.number,
  onChange: React.PropTypes.func,
  style: React.PropTypes.object
};
ColorPicker.defaultProps = {
  color: '#F55D54',
  opacity: 50
};

export default ColorPicker;
//# sourceMappingURL=main.es.js.map
