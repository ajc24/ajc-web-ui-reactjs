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
require("../../css/main.css");
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
 * Main Content component for rendering all of the main content for the web application
 */
var MainContent = /*#__PURE__*/function (_React$Component) {
  /**
   * Constructor for the main content component
   * @param {any} props 
   */
  function MainContent(props) {
    _classCallCheck(this, MainContent);
    return _callSuper(this, MainContent, [props]);
  }
  _inherits(MainContent, _React$Component);
  return _createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Set the title for the current web page */
      document.title = this.props.title;

      /* Setup the default CSS styling for the page which is rendering this component */
      _common.PageTemplateConfig.setupDocumentBodyCss();
    }
  }, {
    key: "render",
    value: function render() {
      /* Build the list of CSS classes to be assigned to the container element */
      var containerCss = 'ajc-container-screen';
      if (this.props.backgroundColour !== undefined && (this.props.backgroundColour === 'white' || this.props.backgroundColour === 'grey' || this.props.backgroundColour === 'yellow' || this.props.backgroundColour === 'transparent')) {
        /* Set the colour for the background of the main content */
        containerCss += " ajc-background-".concat(this.props.backgroundColour);
        if (this.props.backgroundColour === 'grey') {
          containerCss += '-1';
        }
      } else {
        /* By default - choose a transparent background */
        containerCss += ' ajc-background-transparent';
      }
      var containerInnerCss = 'ajc-container-screen-inner';
      var contentCss = 'ajc-main-content ajc-font-default ajc-font-black';
      return /*#__PURE__*/_react["default"].createElement("main", {
        id: "main-content--container",
        className: containerCss,
        "aria-label": this.props.title
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: containerInnerCss
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "main-content--content",
        className: contentCss
      }, this.props.children)));
    }
  }]);
}(_react["default"].Component);
MainContent.propTypes = {
  /** The background colour for the main content. The default for the main content background is transparent. */
  backgroundColour: _propTypes["default"].oneOf(['transparent', 'white', 'grey', 'yellow']),
  /** The content to be displayed within the main content component */
  children: _propTypes["default"].any,
  /** The title of the web page content to be rendered in the main component. This title will be rendered in the browser tab. */
  title: _propTypes["default"].string.isRequired
};
MainContent.defaultProps = {
  backgroundColour: undefined,
  children: undefined
};
var _default = exports["default"] = MainContent;