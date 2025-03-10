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
var _ = require("../../");
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/menu-bar-scroll-menu-items.css");
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
 * Scroll Menu Items button component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click to view the previous / next set of menu items in the menu bar when the menu bar items are too many to comfortably fit within
 * the width of the screen.
 */
var ScrollMenuItems = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Scroll Menu Items component
   * @param {any} props 
   */
  function ScrollMenuItems(props) {
    var _this;
    _classCallCheck(this, ScrollMenuItems);
    _this = _callSuper(this, ScrollMenuItems, [props]);
    _this.state = {
      arrowIconColour: undefined,
      buttonCssSelectorPath: undefined,
      id: undefined,
      isHidden: false,
      isSelected: false,
      menuBarColour: undefined,
      side: undefined
    };
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleOnMouseEnter = _this.handleOnMouseEnter.bind(_this);
    _this.handleOnMouseLeave = _this.handleOnMouseLeave.bind(_this);
    _this.initialise = _this.initialise.bind(_this);
    _this.setArrowIconColour = _this.setArrowIconColour.bind(_this);
    _this.setIsHidden = _this.setIsHidden.bind(_this);
    _this.setIsSelected = _this.setIsSelected.bind(_this);
    return _this;
  }
  _inherits(ScrollMenuItems, _React$Component);
  return _createClass(ScrollMenuItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Initialise all of the key parameters (id, isHidden, menuBarColour, side) for the component */
      var initSide;
      this.props.side !== undefined && (this.props.side === 'left' || this.props.side === 'right') ? initSide = this.props.side : initSide = 'right';
      var initId = this.props.id;
      var initIsHidden = this.props.isHidden || false;
      var initMenuBarColour = this.props.menuBarColour || 'white';
      this.initialise(initId, initIsHidden, initMenuBarColour, initSide);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
        /* Update the isHidden state since the isHidden property has changed to a new value */
        this.setIsHidden(this.props.isHidden);
      }
    }

    /**
     * Handler function for when the button loses focus
     * @param {Event} event 
     */
  }, {
    key: "handleOnBlur",
    value: function handleOnBlur(event) {
      event.preventDefault();
      this.setIsSelected(false, this.handleOnMouseLeave);
    }

    /**
     * Handler function for click events on the button
     * @param {Event} event 
     */
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      event.preventDefault();
      if (event.button === 0) {
        /* A left click has been detected - set the button selection to true and fire the onClick functionality if specified */
        this.setIsSelected(true);
        if (this.props.onClick !== undefined) {
          this.props.onClick();
        }
      }
    }

    /**
     * Handler function for hover events on the button
     * @param {Event} event 
     */
  }, {
    key: "handleOnMouseEnter",
    value: function handleOnMouseEnter(event) {
      event.preventDefault();
      if (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red') {
        /* On hover - change the colour of the arrow icon to reflect the text colour change */
        this.setArrowIconColour('black');
      }
    }

    /**
     * Handler function for when hover events on the button are ended
     * @param {Event|undefined} event 
     */
  }, {
    key: "handleOnMouseLeave",
    value: function handleOnMouseLeave() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (event !== undefined) {
        event.preventDefault();
      }
      if (this.state.isSelected === false && (this.state.menuBarColour === 'green' || this.state.menuBarColour === 'grey' || this.state.menuBarColour === 'red')) {
        /* Hover state finished - restore the colour of the arrow icon to its original colour again */
        this.setArrowIconColour('white');
      }
    }

    /**
     * Initialises this component with all relevant state values
     * @param {string} initId 
     * @param {boolean} initIsHidden 
     * @param {string} initMenuBarColour 
     * @param {string} initSide 
     */
  }, {
    key: "initialise",
    value: function initialise(initId, initIsHidden, initMenuBarColour, initSide) {
      var initArrowIconColour = (0, _colourCombinations.getColourCombination)(initMenuBarColour).fontColour;
      this.setState({
        arrowIconColour: initArrowIconColour,
        id: initId,
        isHidden: initIsHidden,
        menuBarColour: initMenuBarColour,
        side: initSide
      });
    }

    /**
     * Sets the arrow icons colour to the specified value
     * @param {string} newArrowIconColour 
     */
  }, {
    key: "setArrowIconColour",
    value: function setArrowIconColour(newArrowIconColour) {
      this.setState({
        arrowIconColour: newArrowIconColour
      });
    }

    /**
     * Sets whether the buttons contents are visible (false) or hidden (true)
     * @param {boolean} newIsHidden 
     */
  }, {
    key: "setIsHidden",
    value: function setIsHidden(newIsHidden) {
      this.setState({
        isHidden: newIsHidden
      });
    }

    /**
     * Sets whether the button has been selected or not and follows up this
     * process by executing the follow on function if one is specified
     * @param {boolean} newIsSelected 
     * @param {Function|undefined} followOnFunction 
     */
  }, {
    key: "setIsSelected",
    value: function setIsSelected(newIsSelected) {
      var followOnFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      this.setState({
        isSelected: newIsSelected
      }, followOnFunction);
    }
  }, {
    key: "render",
    value: function render() {
      /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
      var _getColourCombination = (0, _colourCombinations.getColourCombination)(this.state.menuBarColour),
        backgroundColour = _getColourCombination.backgroundColour,
        fontColour = _getColourCombination.fontColour;

      /* Set the styling for the container element and determine which side has been chosen */
      var containerCss = 'scroll-menu-items-container';
      this.state.side !== undefined ? containerCss += " scroll-menu-items-container-".concat(this.state.side) : containerCss += ' scroll-menu-items-container-right';

      /* Set the styling for the button */
      var buttonCss = "scroll-menu-items-button font-default scroll-menu-items-button-border-".concat(backgroundColour, " background-").concat(backgroundColour, " font-").concat(fontColour);

      /* Set the styling for the button span container element */
      var buttonSpanCss = 'scroll-menu-items-button-span';

      /* Set the styling for the button text element */
      var buttonTextCss = 'scroll-menu-items-button-text';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: containerCss
      }, /*#__PURE__*/_react["default"].createElement("button", {
        id: "".concat(this.props.id, "--scroll-menu-items-").concat(this.state.side),
        type: "button",
        className: buttonCss,
        tabIndex: this.state.isHidden === true ? '-1' : '0',
        onClick: this.state.isHidden === false ? this.handleOnClick : undefined,
        "aria-label": "Scroll the list of menu items to the ".concat(this.state.side, "."),
        "aria-hidden": "".concat(this.state.isHidden),
        "data-is-selected": this.state.isSelected,
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
        onFocus: this.handleOnMouseEnter,
        onBlur: this.handleOnBlur
      }, this.state.isHidden === false && /*#__PURE__*/_react["default"].createElement("span", {
        className: buttonSpanCss
      }, /* Set the relevant spacing to push the "Prev" arrow icon over to the right (alignment) */
      this.state.side === 'left' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0\xA0"), /*#__PURE__*/_react["default"].createElement(_.ArrowIcon, {
        colour: this.state.arrowIconColour,
        direction: this.state.side,
        id: this.props.id,
        size: "2"
      }), /* Set the relevant spacing to push the "Next" arrow icon over to the left (alignment) */
      this.state.side === 'right' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
        className: buttonTextCss
      }, /* Set the button text content for the left sided version of this component */
      this.state.side === 'left' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Prev"), /* Set the button text content for the right sided version of this component */
      this.state.side === 'right' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Next")))));
    }
  }]);
}(_react["default"].Component);
ScrollMenuItems.propTypes = {
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The switch for whether the button is to be hidden or not. If the button is hidden, no content within the button is displayed and all mouse interactions are disabled. */
  isHidden: _propTypes["default"].bool,
  /** The background colour set to the menu bar in which this component is rendered. The default colour for the background is white. */
  menuBarColour: _propTypes["default"].oneOf(['gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The custom functionality to be executed on clicking the button. */
  onClick: _propTypes["default"].func,
  /** The side at which this menu item will be rendered in the menu bar. Renders to either the left or right side. By default the right side is pre-selected. */
  side: _propTypes["default"].oneOf(['left', 'right'])
};
var _default = exports["default"] = ScrollMenuItems;