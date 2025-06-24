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
require("core-js/modules/web.timers.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
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
var initialMarginTop = 65;
var maximumImageWidth = 620;

/**
 * Three Photo Collage component which is intended for use inside the Main component in the web application. Renders three photos in a collage
 * with two photos being placed side by side in the upper section of the collage and a single photo overlapping them slightly in the lower section.
 * 
 * This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080)
 * and will automatically adjust the heights and widths of the images to suit the current screen size.
 */
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
    _this.getIdLowerImageContainerDOMElement = _this.getIdLowerImageContainerDOMElement.bind(_this);
    _this.getIdRootContainerDOMElement = _this.getIdRootContainerDOMElement.bind(_this);
    _this.getIdUpperImagesContainerDOMElement = _this.getIdUpperImagesContainerDOMElement.bind(_this);
    _this.getLowerImageContainerDOMElement = _this.getLowerImageContainerDOMElement.bind(_this);
    _this.getRootContainerDOMElement = _this.getRootContainerDOMElement.bind(_this);
    _this.getUpperImageRightContainerDOMElement = _this.getUpperImageRightContainerDOMElement.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    return _this;
  }
  _inherits(ThreePhotoCollage, _React$Component);
  return _createClass(ThreePhotoCollage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      /* Auto handle the initial screen size after a slight pause to give the page time to load */
      setTimeout(function () {
        _this2.handleWindowResize(true);
      }, 50);

      /* For all future screen resize events, ensure that the image dimensions are handled correctly */
      window.addEventListener('resize', this.handleWindowResize);
    }

    /**
     * Retrieves the ID set to the lower image container element
     * @returns {string}
     */
  }, {
    key: "getIdLowerImageContainerDOMElement",
    value: function getIdLowerImageContainerDOMElement() {
      return "".concat(this.props.id, "--lower-section--three-photo-collage");
    }

    /**
     * Retrieves the ID set to the root container element
     * @returns {string}
     */
  }, {
    key: "getIdRootContainerDOMElement",
    value: function getIdRootContainerDOMElement() {
      return "".concat(this.props.id, "--three-photo-collage");
    }

    /**
     * Retrieves the ID set to the upper images container element
     * @returns {string}
     */
  }, {
    key: "getIdUpperImagesContainerDOMElement",
    value: function getIdUpperImagesContainerDOMElement() {
      return "".concat(this.props.id, "--upper-section--three-photo-collage");
    }

    /**
     * Retrieves the DOM element for the lower image container element
     * @returns {HTMLElement}
     */
  }, {
    key: "getLowerImageContainerDOMElement",
    value: function getLowerImageContainerDOMElement() {
      return document.querySelector("div[id=\"".concat(this.getIdLowerImageContainerDOMElement(), "\"]"));
    }

    /**
     * Retrieves the DOM element for the root container element
     * @returns {HTMLElement}
     */
  }, {
    key: "getRootContainerDOMElement",
    value: function getRootContainerDOMElement() {
      return document.querySelector("div[id=\"".concat(this.getIdRootContainerDOMElement(), "\"]"));
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
     * Handler for screen resize events - the images width and height need to be determined based on the new screen size
     */
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      var _this3 = this;
      var onLoadPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var rightUpperImageContainerElement = this.getUpperImageRightContainerDOMElement();
      if (rightUpperImageContainerElement !== null) {
        /* Get the full width of the image container */
        var imageContainerWidth = parseInt(rightUpperImageContainerElement.getBoundingClientRect().width, 10);

        /* Get the lower image container element */
        var lowerImageContainerElement = this.getLowerImageContainerDOMElement();

        /* For every 15 pixels less than the maximum permitted width - reduce the margin top allowance by 1px */
        var imagePixelReduction = maximumImageWidth - imageContainerWidth;
        var marginTopPixelReduction = parseInt(imagePixelReduction / 15);
        var marginTop = "-".concat(initialMarginTop - marginTopPixelReduction, "px");

        /* Set the new margin top CSS value to the lower image container element */
        lowerImageContainerElement.style.marginTop = marginTop;

        /* Set the height and width of the images based on the current container width */
        this.setState({
          height: parseInt(imageContainerWidth * 0.75, 10),
          width: imageContainerWidth
        }, function () {
          /* If this is the first time we have loaded the page - blend in the photos now everything has been loaded and set */
          if (onLoadPage === true) {
            var rootContainerElement = _this3.getRootContainerDOMElement();
            rootContainerElement.style.opacity = 1;
          }
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
      var lowerImageContainerCss = 'three-photo-collage-lower-image-container';

      /* */
      var lowerImageRenderCss = 'three-photo-collage-lower-image-render';
      this.props.borderColour === 'grey' ? lowerImageRenderCss += ' three-photo-collage-image-border-grey' : lowerImageRenderCss += ' three-photo-collage-image-border-white';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: rootCss,
        id: this.getIdRootContainerDOMElement()
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
        className: lowerImageContainerCss,
        id: this.getIdLowerImageContainerDOMElement()
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: lowerImageRenderCss
      }, /*#__PURE__*/_react["default"].createElement(_InformativeImage["default"], {
        alt: this.props.imageLowerData.alt,
        height: this.state.height,
        id: this.props.id,
        src: this.props.imageLowerData.src,
        width: this.state.width
      }))));
    }
  }]);
}(_react["default"].Component);
ThreePhotoCollage.propTypes = {
  /** The border colour used for the collage. Ideally you would set this to match the background colour of the Main component. The default colour for the border is white. */
  borderColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The data for the image to be rendered centrally in the lower section of the collage. */
  imageLowerData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired,
  /** The data for the image to be rendered to the left side of the upper section of the collage. */
  imageUpperLeftData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired,
  /** The data for the image to be rendered to the right side of the upper section of the collage. */
  imageUpperRightData: _propTypes["default"].shape({
    alt: _propTypes["default"].string,
    src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }).isRequired
};
var _default = exports["default"] = ThreePhotoCollage;