"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.proto.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/web.timers.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ = require("../..");
require("../css/common.css");
require("./css/image-header-logo.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } /**
 * Developed by Anthony Cox in 2025
 */
/* Set the dimensions for all permutations of the header logo */
var dimensions = {
  small: {
    height: {
      noBorder: 144,
      withBorder: 140
    },
    width: {
      rectangle: 312,
      square: 140
    }
  },
  tall: {
    height: {
      noBorder: 304,
      withBorder: 300
    },
    width: 312
  }
};
var setTimeoutValue = 100;

/**
 * Header Logo image component which renders an image, developed solely for use inside the Header component
 * in a web application. The heights and widths of the image are automatically adjusted to fit the dimensions
 * of the Header component.
 */
var HeaderLogo = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialises the header logo image component
   * @param {any} props 
   */
  function HeaderLogo(props) {
    var _this;
    _classCallCheck(this, HeaderLogo);
    _this = _callSuper(this, HeaderLogo, [props]);
    _this.state = {
      height: undefined,
      width: undefined
    };
    _this.handleImageSize = _this.handleImageSize.bind(_this);
    _this.setImageSize = _this.setImageSize.bind(_this);
    return _this;
  }
  _inherits(HeaderLogo, _React$Component);
  return _createClass(HeaderLogo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      /* Determine the initial height and width of the image - set the smallest timeout in order to register header components successfully */
      setTimeout(function () {
        _this2.handleImageSize();
      }, setTimeoutValue);

      /* Watch over all future window resize events - we will want to alter the logo image size to suit the new screen size */
      var handleImageSize = function handleImageSize() {
        setTimeout(function () {
          _this2.handleImageSize();
        }, setTimeoutValue);
      };
      window.addEventListener('resize', handleImageSize);
    }
  }, {
    key: "handleImageSize",
    value: function handleImageSize() {
      /* Determine whether the logo type is to be a square image or rectangular image - defaults to a square image type */
      var logoType;
      this.props.logoType === 'rectangle' ? logoType = 'rectangle' : logoType = 'square';

      /* Determine which header component type is used - defaults to the small header component type */
      var headerType;
      document.querySelector('div[class*="header-tall-height-"]') !== null ? headerType = 'tall' : headerType = 'small';
      /* Determine whether a top border is rendered in the header or not - defaults to no border rendered */
      var borderType;
      document.querySelector("div[class*=\"header-".concat(headerType, "-height-with-border\"]")) !== null ? borderType = 'withBorder' : borderType = 'noBorder';

      /* Determine whether any title text and / or subtitle text components are rendered - only relevant for tall headers where the logo will appear above these text components */
      var allowanceTitleAndSubtitleText = 0;
      if (headerType === 'tall') {
        /* Check 1 - Verify the size of the title text component if it is rendered */
        var headerTitleTextElement = document.querySelector('div[id$="--header-title-text"]');
        var titleTextIsWrapped = false;
        if (headerTitleTextElement !== null) {
          /* Determine if the title text is wrapped or not */
          headerTitleTextElement.dataset.wrap === 'true' ? titleTextIsWrapped = true : titleTextIsWrapped = false;

          /* Get the height of the title text component and add it to the allowance */
          allowanceTitleAndSubtitleText += headerTitleTextElement.getBoundingClientRect().height;
        }

        /* Check 2 - Verify the size of the subtitle text component if it is rendered */
        if (titleTextIsWrapped === false) {
          var subtitleTextElement = document.querySelector('div[id$="--header-subtitle-text"]');
          if (subtitleTextElement !== null) {
            /* Get the height of the subtitle text component and add it to the allowance */
            allowanceTitleAndSubtitleText += subtitleTextElement.getBoundingClientRect().height;
          }
        }
      }
      /* Calculate the heights and widths for the current image based on the screen size */
      var imageHeight = dimensions["".concat(headerType)].height["".concat(borderType)] - allowanceTitleAndSubtitleText;
      var imageWidth;
      headerType === 'tall' ? imageWidth = dimensions.tall.width : imageWidth = dimensions.small.width["".concat(logoType)];

      /* Set the size of the image */
      this.setImageSize(imageHeight, imageWidth);
    }

    /**
     * Sets the dimensions for the header logo image
     * @param {number} newHeight 
     * @param {number} newWidth 
     */
  }, {
    key: "setImageSize",
    value: function setImageSize(newHeight, newWidth) {
      this.setState({
        height: newHeight,
        width: newWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      /* Set the styling for the container element */
      var containerCss = 'background-transparent';
      this.props.parentHeaderId === undefined ? containerCss += ' page-template-container' : containerCss += ' image-header-logo-inside-header';
      this.props.alignment === 'centre' ? containerCss += ' image-header-logo-alignment-centre' : containerCss += ' image-header-logo-alignment-left';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerCss
      }, /*#__PURE__*/_react["default"].createElement(_.DecorativeImage, {
        id: "".concat(this.props.id, "--header-logo"),
        src: this.props.src,
        height: this.state.height,
        width: this.state.width
      }));
    }
  }]);
}(_react["default"].Component);
HeaderLogo.propTypes = {
  /** The alignment of the logo image. The image by default will be left aligned but can also be centre aligned. */
  alignment: _propTypes["default"].oneOf(['centre', 'left']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /**
   * The type of logo to be displayed in the Header component.
   * 
   * If the small Header type is rendered without any title or subtitle text content inside of it, this logo image can be rendered in both square and rectangular forms.
   * By default, a square logo type is chosen. You can override this setting by choosing the "rectangle" logo type. When a rectangular logo is rendered, the maximum width
   * it will be rendered at is 312px to suit rendering on smaller screens.
   * 
   * If the small Header type is rendered with title and / or subtitle text included, this logo will default to a square image regardless of setting, and will be rendered
   * to the left of the text components.
   * 
   * If the tall Header type is rendered then the logo will appear above any title and / or subtitle text components that are rendered.
   */
  logoType: _propTypes["default"].oneOf(['rectangle', 'square']),
  /** The unique identifier of the Header component in which this logo image component is rendered. */
  parentHeaderId: _propTypes["default"].string,
  /** The image data to be displayed. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired
};
var _default = exports["default"] = HeaderLogo;