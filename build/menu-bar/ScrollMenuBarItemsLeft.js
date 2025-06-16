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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/menu-bar-common.css");
require("./css/menu-bar-scroll-items.css");
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
 * Scroll Menu Bar Items Left button component intended for use with the Menu Bar component. This component allows a user to click to view the previous set
 * of menu bar items in the menu bar. This button is necessary in circumstances where there are too many menu bar items to comfortably fit within the width
 * of the screen. Keyboard events are also supported with both the spacebar and enter key interactions acting as click events on the button.
 */
var ScrollMenuBarItemsLeft = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Scroll Menu Bar Items Left component
   * @param {any} props 
   */
  function ScrollMenuBarItemsLeft(props) {
    var _this;
    _classCallCheck(this, ScrollMenuBarItemsLeft);
    _this = _callSuper(this, ScrollMenuBarItemsLeft, [props]);
    _this.state = {
      isHidden: true
    };
    _this.getContainerDOMElement = _this.getContainerDOMElement.bind(_this);
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
    _this.setIsHidden = _this.setIsHidden.bind(_this);
    _this.setIsVisible = _this.setIsVisible.bind(_this);
    return _this;
  }
  _inherits(ScrollMenuBarItemsLeft, _React$Component);
  return _createClass(ScrollMenuBarItemsLeft, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Initialise all of the key parameters for this component */
      if (this.state.isHidden === false) {
        this.setIsVisible();
      } else if (this.state.isHidden === true) {
        this.setIsHidden();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isHidden !== this.state.isHidden) {
        if (this.props.isHidden === false) {
          /* Mark the component as visible */
          this.setIsVisible();
        } else if (this.props.isHidden === true) {
          /* Mark the component as hidden */
          this.setIsHidden();
        }
      }
    }

    /**
     * Retrieves the scroll menu bar items left container element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getContainerDOMElement",
    value: function getContainerDOMElement() {
      return document.querySelector("div[id=\"".concat(this.props.id, "--container--scroll-menu-bar-items-left\"]"));
    }

    /**
     * Ensures onclick events are disabled when the element is marked as hidden, otherwise
     * the provided onClick function property is executed
     * @param {event} event
     */
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      if (this.state.isHidden === true) {
        event.preventDefault();
      } else {
        /* Execute the provided onClick functionality */
        this.props.onClick();
      }
    }

    /**
     * Handle key down events on the button
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(event) {
      if (event.key === ' ') {
        /* Ensure that a spacebar key press also correctly fires a click event on the button */
        event.target.click();
      }
    }

    /**
     * Sets the scroll menu bar items left button as hidden in the UI 
     */
  }, {
    key: "setIsHidden",
    value: function setIsHidden() {
      /* Ensure state is updated to reflect that the button is now hidden */
      this.setState({
        isHidden: true
      });

      /* Get the container element from the DOM */
      var containerElement = this.getContainerDOMElement();

      /* Set the container elements opacity so that it is now hidden */
      containerElement.style.opacity = 0;
    }

    /**
     * Sets the scroll menu bar items left button as visible in the UI
     */
  }, {
    key: "setIsVisible",
    value: function setIsVisible() {
      /* Ensure state is updated to reflect that the button is now visible */
      this.setState({
        isHidden: false
      });

      /* Get the container element from the DOM */
      var containerElement = this.getContainerDOMElement();

      /* Set the container elements opacity so that it is now visible */
      containerElement.style.opacity = 1;
    }
  }, {
    key: "render",
    value: function render() {
      /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
      var _getColourCombination = (0, _colourCombinations.getColourCombination)(this.props.backgroundColour),
        backgroundColour = _getColourCombination.backgroundColour,
        fontColour = _getColourCombination.fontColour;

      /* Set the styling for the scroll menu bar items left container element */
      var containerCss = 'scroll-menu-bar-items-container background-transparent menu-bar-common-transitions scroll-menu-bar-items-container-right-side-spacing';

      /* Set the styling for the button element */
      var buttonCss = "scroll-menu-items-button background-".concat(backgroundColour, " font-default font-").concat(fontColour);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerCss,
        id: "".concat(this.props.id, "--container--scroll-menu-bar-items-left")
      }, /*#__PURE__*/_react["default"].createElement("button", {
        "aria-hidden": "".concat(this.state.isHidden),
        "aria-label": "Scroll the list of menu bar items to the left.",
        className: buttonCss,
        id: "".concat(this.props.id, "--scroll-menu-bar-items-left"),
        onClick: this.handleOnClick,
        onKeyDown: this.handleOnKeyDown,
        tabIndex: this.state.isHidden === true ? '-1' : '0',
        type: "button"
      }, "Prev", /*#__PURE__*/_react["default"].createElement("br", null), "\u2190"));
    }
  }]);
}(_react["default"].Component);
ScrollMenuBarItemsLeft.propTypes = {
  /** The background colour for the scroll menu bar items left button. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** Sets whether the scroll menu bar items left button is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: _propTypes["default"].bool,
  /** The custom functionality to be executed on clicking the button. */
  onClick: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = ScrollMenuBarItemsLeft;