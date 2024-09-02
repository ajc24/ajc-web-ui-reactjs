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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _common = require("../common");
require("../../css/colour.css");
require("../../css/font.css");
require("../../css/header.css");
require("../../css/sizing.css");
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
 * Developed by Anthony Cox in 2024
 */
/**
 * Header Type A component for rendering the header section of a web application
 */
var HeaderTypeA = /*#__PURE__*/function (_React$Component) {
  /**
   * Constructor for the header component
   * @param {any} props 
   */
  function HeaderTypeA(props) {
    var _this;
    _classCallCheck(this, HeaderTypeA);
    _this = _callSuper(this, HeaderTypeA, [props]);

    /* Create the references for this component */
    _this.backgroundImageElementRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(HeaderTypeA, _React$Component);
  return _createClass(HeaderTypeA, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Setup the default CSS styling for the page which is rendering this component */
      _common.PageTemplateConfig.setupDocumentBodyCss();

      /* Render the headers background image if it has been set */
      if (this.props.backgroundImage !== undefined) {
        this.backgroundImageElementRef.current.style.backgroundImage = "url(".concat(this.props.backgroundImage, ")");
        this.backgroundImageElementRef.current.dataset.bgImageLoaded = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* Build the list of CSS classes to be assigned to the container element */
      var containerCss = 'ajc-container-screen';
      if (this.props.showTopBorder === true) {
        if (this.props.topBorderColour === 'grey' || this.props.topBorderColour === 'red') {
          /* Render the upper border in grey or red */
          containerCss += " ajc-header-border-".concat(this.props.topBorderColour);
        } else {
          /* By default choose a black border */
          containerCss += ' ajc-header-border-black';
        }
      }
      if (this.props.backgroundColour !== undefined && (this.props.backgroundColour === 'white' || this.props.backgroundColour === 'grey' || this.props.backgroundColour === 'yellow' || this.props.backgroundColour === 'transparent')) {
        /* Set the colour for the background of the header */
        containerCss += " ajc-background-".concat(this.props.backgroundColour);
        if (this.props.backgroundColour === 'grey') {
          containerCss += '-1';
        }
      } else {
        /* By default - choose a transparent background */
        containerCss += ' ajc-background-transparent';
      }
      var containerInnerCss = 'ajc-container-screen-inner';
      /* Build the list of CSS classes to be assigned to the root element */
      var contentContainerCss = 'ajc-header-content-container';
      if (this.props.showTopBorder === true) {
        /* Render the header at a lesser height to accommodate for the border */
        contentContainerCss += ' ajc-header-content-container-with-border';
      } else {
        /* Render the header at a full height to compensate for the lack of a border */
        contentContainerCss += ' ajc-header-content-container-no-border';
      }
      /* Build the list of CSS classes to be assigned to the content element */
      var contentCss = 'ajc-header-content ajc-font-default ajc-font-black';
      if (this.props.alignment !== undefined && (this.props.alignment === 'left' || this.props.alignment === 'center' || this.props.alignment === 'right')) {
        /* Set the alignment for the header contents */
        contentCss += " ajc-header-content-alignment-".concat(this.props.alignment);
      } else {
        /* By default - choose left alignment */
        contentCss += ' ajc-header-content-alignment-left';
      }
      return /*#__PURE__*/_react["default"].createElement("header", {
        role: "banner",
        id: "".concat(this.props.id, "--container"),
        className: containerCss
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.props.id, "--container-image"),
        className: containerInnerCss,
        "data-bg-image-loaded": false,
        ref: this.backgroundImageElementRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.props.id, "--content-container"),
        className: contentContainerCss
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.props.id, "--content"),
        className: contentCss
      }, this.props.children))));
    }
  }]);
}(_react["default"].Component);
HeaderTypeA.propTypes = {
  /** The alignment for the inner items of the header. By default, the header contents will be left aligned. */
  alignment: _propTypes["default"].oneOf(['left', 'center', 'right']),
  /** The background colour for the header. The default colour for the background is transparent. */
  backgroundColour: _propTypes["default"].oneOf(['transparent', 'white', 'grey', 'yellow']),
  /** The background image to be displayed in the header. */
  backgroundImage: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string, _propTypes["default"].object]),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** Switch to display an 8px top / upper border on the header. By default, no border is displayed on the header. */
  showTopBorder: _propTypes["default"].bool,
  /** The colour at which the top / upper border is to be rendered (if enabled). The default colour for the border is black. */
  topBorderColour: _propTypes["default"].oneOf(['black', 'grey', 'red'])
};
HeaderTypeA.defaultProps = {
  alignment: undefined,
  backgroundColour: undefined,
  backgroundImage: undefined,
  showTopBorder: false,
  topBorderColour: 'black'
};
var _default = exports["default"] = HeaderTypeA;