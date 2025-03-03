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
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./css/base-image.css");
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
/**
 * Baseline component for rendering images in the application.
 * This component allows for images to be fully customised in a variety of ways.
 */
var ImageBase = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the image base component
   * @param {any} props 
   */
  function ImageBase(props) {
    var _this;
    _classCallCheck(this, ImageBase);
    _this = _callSuper(this, ImageBase, [props]);
    _this.mouseDownCustomFunction = _this.mouseDownCustomFunction.bind(_this);
    _this.mouseDownDisableLeftAndCenterEvents = _this.mouseDownDisableLeftAndCenterClickEvents.bind(_this);
    _this.onLoadSetImageOpacityToVisible = _this.onLoadSetImageOpacityToVisible.bind(_this);

    /* Create the references for this component */
    _this.imageRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(ImageBase, _React$Component);
  return _createClass(ImageBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Set the functionality to be executed when the on load event is fired */
      this.imageRef.current.addEventListener('load', this.onLoadSetImageOpacityToVisible);

      /* Set the functionality to be executed when the on mouse down event is fired */
      if (this.props.onClick !== undefined) {
        this.imageRef.current.addEventListener('mousedown', this.mouseDownCustomFunction);
      } else {
        this.imageRef.current.addEventListener('mousedown', this.mouseDownDisableLeftAndCenterClickEvents);
      }
    }

    /**
     * Executes the custom specified functionality for left click events on the image
     * @param {Event} event 
     */
  }, {
    key: "mouseDownCustomFunction",
    value: function mouseDownCustomFunction(event) {
      this.mouseDownDisableLeftAndCenterClickEvents(event);
      if (event.button === 0) {
        /* Only execute the custom functionality for left click events */
        this.props.onClick();
      }
    }

    /**
     * Disables all default mouse down events on the image for center (scroll wheel) and left mouse clicks
     * @param {Event} event 
     */
  }, {
    key: "mouseDownDisableLeftAndCenterClickEvents",
    value: function mouseDownDisableLeftAndCenterClickEvents(event) {
      if (event.button === 0 || event.button === 1) {
        /* Disable the left click / scroll wheel click action */
        event.preventDefault();
      }
    }

    /**
     * Sets the opacity of the image to visible when the on load event is fired.
     * This function is especially useful when used in conjunction with transitions to fade loaded images into view.
     */
  }, {
    key: "onLoadSetImageOpacityToVisible",
    value: function onLoadSetImageOpacityToVisible() {
      this.imageRef.current.style.opacity = 1;
      this.imageRef.current.removeEventListener('load', this.onLoadSetImageOpacityToVisible);
    }
  }, {
    key: "render",
    value: function render() {
      /* Set the CSS styling for the image */
      var imageCss = 'image';
      this.props.animations === false ? imageCss += ''.trim() : imageCss += ' image-animations';

      /* Set the alternative text for the image - assume a decorative image and only change if it is an informative or functional image */
      var altText = '';
      if (this.props.alt !== undefined && typeof this.props.alt === 'string' && this.props.alt.length > 0) {
        altText = "".concat(this.props.alt);
      }
      /* Set the size for the image - assume a default size or set the custom size if provided */
      var imageHeight = 100;
      var imageWidth = 100;
      if (this.props.height !== undefined && typeof this.props.height === 'number') {
        /* Set the custom height for the image */
        imageHeight = this.props.height;
      }
      if (this.props.width !== undefined && typeof this.props.width === 'number') {
        /* Set the custom width for the image */
        imageWidth = this.props.width;
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
        id: this.props.id,
        className: imageCss,
        src: this.props.src,
        width: imageWidth,
        height: imageHeight,
        alt: altText,
        ref: this.imageRef
      }));
    }
  }]);
}(_react["default"].Component);
ImageBase.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: _propTypes["default"].string,
  /** Switch to enable or disable animations which play to smoothly load in and / or resize the image. By default smooth animations are enabled. */
  animations: _propTypes["default"].bool,
  /** The height of the image. */
  height: _propTypes["default"].number,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The custom functionality to be executed when the mouse down on image event is fired. */
  onClick: _propTypes["default"].func,
  /** The image data to be displayed. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The width of the image. */
  width: _propTypes["default"].number
};
var _default = exports["default"] = ImageBase;