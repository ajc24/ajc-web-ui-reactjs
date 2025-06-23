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
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DecorativeImage = _interopRequireDefault(require("./DecorativeImage"));
var _InformativeImage = _interopRequireDefault(require("./InformativeImage"));
require("./css/image-three-photo-collage.css");
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
// 1280 - 32 (desktop) = 1248px
// 360 - 32 (mobile)   = 328px
// 8px spacing between images = 1240px (full width) or 320px (smallest)
// Images sized at 620px (full width) or 160px (smallest)
var ThreePhotoCollage = /*#__PURE__*/function (_React$Component) {
  /**
   * Constructor for the Three Photo Collage component
   * @param {any} props 
   */
  function ThreePhotoCollage(props) {
    var _this;
    _classCallCheck(this, ThreePhotoCollage);
    _this = _callSuper(this, ThreePhotoCollage, [props]);
    _this.state = {
      height: 0,
      width: 0
    };
    _this.getIdUpperImagesContainerDOMElement = _this.getIdUpperImagesContainerDOMElement.bind(_this);
    _this.getUpperImageRightContainerDOMElement = _this.getUpperImageRightContainerDOMElement.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    return _this;
  }
  _inherits(ThreePhotoCollage, _React$Component);
  return _createClass(ThreePhotoCollage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleWindowResize();
      window.addEventListener('resize', this.handleWindowResize);
    }

    /**
     * Retrieves the DOM element for the right sided upper image container element
     * @returns {HTMLElement}
     */
  }, {
    key: "getUpperImageRightContainerDOMElement",
    value: function getUpperImageRightContainerDOMElement() {
      return document.querySelector("div[id=\"".concat(this.getIdUpperImagesContainerDOMElement(), "\"] > div[class=\"three-photo-collage-image-container\"]"));
    }

    /**
     * Retrieves the ID set to the upper images container element
     * @returns {string}
     */
  }, {
    key: "getIdUpperImagesContainerDOMElement",
    value: function getIdUpperImagesContainerDOMElement() {
      return "".concat(this.props.id, "--three-photo-collage");
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      var rightUpperImageContainerElement = this.getUpperImageRightContainerDOMElement();
      if (rightUpperImageContainerElement !== null) {
        var currentImageWidth = parseInt(rightUpperImageContainerElement.getBoundingClientRect().width, 10);
        this.setState({
          height: parseInt(currentImageWidth * 0.75, 10),
          width: currentImageWidth
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* Set the styling for the root element */
      var rootCss = 'three-photo-collage-root';

      /* Set the styling for the upper images container element */
      var upperImagesContainerCss = 'three-photo-collage-upper-images-container';

      /* Set the styling for the leftmost image container in the upper images container element */
      var upperImageLeftContainerCss = 'three-photo-collage-image-container three-photo-collage-image-container-spacing';

      /* Set the styling for the rightmost image container in the upper images container element */
      var upperImageRightContainerCss = 'three-photo-collage-image-container';

      /* Set the styling for the lower image container element */
      var lowerImageContainerCss = 'three-photo-collage-lower-image-container three-photo-collage-lower-image-container-spacing';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: rootCss
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: upperImagesContainerCss,
        id: this.getIdUpperImagesContainerDOMElement()
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: upperImageLeftContainerCss
      }, /*#__PURE__*/_react["default"].createElement(_InformativeImage["default"], {
        alt: this.props.imageUpperLeftData.alt,
        height: this.state.height,
        id: this.props.id,
        src: this.props.imageUpperLeftData.src,
        width: this.state.width
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: upperImageRightContainerCss
      }, /*#__PURE__*/_react["default"].createElement(_InformativeImage["default"], {
        alt: this.props.imageUpperRightData.alt,
        height: this.state.height,
        id: this.props.id,
        src: this.props.imageUpperRightData.src,
        width: this.state.width
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: lowerImageContainerCss
      }, /*#__PURE__*/_react["default"].createElement(_InformativeImage["default"], {
        alt: this.props.imageLowerData.alt,
        height: this.state.height,
        id: this.props.id,
        src: this.props.imageLowerData.src,
        width: this.state.width
      })));
    }
  }]);
}(_react["default"].Component);
ThreePhotoCollage.propTypes = {
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  imageLowerData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired,
  imageUpperLeftData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired,
  imageUpperRightData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired
};
var _default = exports["default"] = ThreePhotoCollage;