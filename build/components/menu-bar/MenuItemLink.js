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
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.proto.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/menu-bar-common.css");
require("./css/menu-bar-item-link.css");
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
var maximumMenuItemLinkHeight = 50;

/**
 * Menu Item Link hyperlink component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click the menu item or interact with the item via the keyboard (spacebar and enter key presses supported) and from there, will be redirected
 * to another page in the web application.
 */
var MenuItemLink = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Menu Item Link component
   * @param {any} props 
   */
  function MenuItemLink(props) {
    var _this;
    _classCallCheck(this, MenuItemLink);
    _this = _callSuper(this, MenuItemLink, [props]);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.handleTextContentHeight = _this.handleTextContentHeight.bind(_this);
    return _this;
  }
  _inherits(MenuItemLink, _React$Component);
  return _createClass(MenuItemLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Auto handle whether all of the text content for the menu item can be rendered within its container */
      this.handleTextContentHeight();
    }

    /**
     * Handle key down events on the hyperlink
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(event) {
      if (event.key === ' ') {
        /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
        event.target.click();
      }
    }

    /**
     * Handles the height of the menu item link text content. The height of the text content
     * should not exceed the height of the item container itself.
     */
  }, {
    key: "handleTextContentHeight",
    value: function handleTextContentHeight() {
      if (this.props.isHidden === undefined || this.props.isHidden === false) {
        /* Retrieve the span element from the DOM and determine its height and text content */
        var spanElement = document.querySelector("a[id=\"".concat(this.props.id, "--menu-item-link\"] > span"));
        var spanHeight = spanElement.getBoundingClientRect().height;
        var spanTextContent = spanElement.textContent;
        while (spanTextContent.length > 0 && spanHeight > maximumMenuItemLinkHeight) {
          /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
          spanTextContent = "".concat(spanTextContent.substring(0, spanTextContent.length - 1).trim(), "...");

          /* Set the new text content string and determine the new height of the element */
          spanElement.textContent = spanTextContent;
          spanHeight = spanElement.getBoundingClientRect().height;
          if (spanHeight > maximumMenuItemLinkHeight) {
            /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
            spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
      var _getColourCombination = (0, _colourCombinations.getColourCombination)(this.props.menuItemColour),
        backgroundColour = _getColourCombination.backgroundColour,
        fontColour = _getColourCombination.fontColour;

      /* Set the styling for the menu item link container element */
      var containerCss = "menu-item-link-container";
      this.props.rightSideSpacing !== undefined && this.props.rightSideSpacing === false ? containerCss += ' menu-item-link-container-right-side-spacing-off' : containerCss += ' menu-item-link-container-right-side-spacing-on';
      this.props.isHidden !== undefined && this.props.isHidden === true ? containerCss += ' hidden' : containerCss += ''.trim();

      /* Set the styling for the link element */
      var linkCss = "menu-item-link background-".concat(backgroundColour, " menu-item-link-border-").concat(backgroundColour, " font-default font-").concat(fontColour);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerCss,
        "aria-hidden": "".concat(this.props.isHidden || false)
      }, /*#__PURE__*/_react["default"].createElement("a", {
        id: "".concat(this.props.id, "--menu-item-link"),
        className: linkCss,
        role: "link",
        "aria-label": this.props.children,
        tabIndex: this.props.isHidden === true ? '-1' : '0',
        href: "".concat(this.props.href),
        onKeyDown: this.handleOnKeyDown
      }, /*#__PURE__*/_react["default"].createElement("span", null, this.props.children)));
    }
  }]);
}(_react["default"].Component);
MenuItemLink.propTypes = {
  /** The menu item links text content. */
  children: _propTypes["default"].string.isRequired,
  /** The URL to which the user will be redirected to after clicking on the link. */
  href: _propTypes["default"].string.isRequired,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The switch for whether the menu item is to be hidden or not. If the menu item is hidden, no content is displayed and all mouse and keyboard interactions are disabled. */
  isHidden: _propTypes["default"].bool,
  /** The background colour for the menu item link. The default colour for the background is white. */
  menuItemColour: _propTypes["default"].oneOf(['gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** Optional right side spacing (margin) of 4px to be used when separating multiple menu item link components. By default this spacing is enabled. */
  rightSideSpacing: _propTypes["default"].bool
};
var _default = exports["default"] = MenuItemLink;