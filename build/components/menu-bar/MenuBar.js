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
var _ = require("../../");
require("./css/menu-bar.css");
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
 */ // import { colourCombinations } from '../data/colour-combinations';
// import '../css/common.css';
// import './css/menu-bar-scroll-menu-items.css';
/**
 * Scroll Menu Items button component to be used within the menu bar component. Intended for use with the Menu Bar component, this component allows
 * a user to click to view the previous / next set of menu items in the menu bar when the menu bar items are too many to comfortably fit within
 * the width of the screen.
 */
var MenuBar = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Menu Bar component
   * @param {any} props 
   */
  function MenuBar(props) {
    var _this;
    _classCallCheck(this, MenuBar);
    _this = _callSuper(this, MenuBar, [props]);
    _this.state = {
      // arrowIconColour: undefined,
      // buttonCssSelectorPath: undefined,
      // id: undefined,
      // isHidden: false,
      // isSelected: false,
      // menuBarColour: undefined,
      // side: undefined,
    };
    // this.handleOnBlur = this.handleOnBlur.bind(this);
    // this.handleOnClick = this.handleOnClick.bind(this);
    // this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    // this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    // this.initialise = this.initialise.bind(this);
    // this.setArrowIconColour = this.setArrowIconColour.bind(this);
    // this.setIsHidden = this.setIsHidden.bind(this);
    // this.setIsSelected = this.setIsSelected.bind(this);
    return _this;
  }
  _inherits(MenuBar, _React$Component);
  return _createClass(MenuBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // /* Initialise all of the key parameters (id, isHidden, menuBarColour, side) for the component */
      // let initSide;
      // (this.props.side !== undefined && (this.props.side === 'left' || this.props.side === 'right'))
      //   ? initSide = this.props.side
      //   : initSide = 'right';
      // const initId = this.props.id;
      // const initIsHidden = this.props.isHidden || false;
      // const initMenuBarColour = this.props.menuBarColour || 'white';
      // this.initialise(initId, initIsHidden, initMenuBarColour, initSide);
    }

    // componentDidUpdate(prevProps) {
    //   if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
    //     /* Update the isHidden state since the isHidden property has changed to a new value */
    //     this.setIsHidden(this.props.isHidden);
    //   }
    // }
  }, {
    key: "render",
    value: function render() {
      /* Set the styling for the overall menu bar container element */
      var menuBarContainerCss = 'menu-bar-container';

      /* Set the styling for the menu items container element */
      var menuItemsContainerCss = 'menu-items-container';
      return /*#__PURE__*/_react["default"].createElement(_.MenuBarBase, {
        backgroundColour: this.props.backgroundColour,
        id: this.props.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: menuBarContainerCss
      }, /*#__PURE__*/_react["default"].createElement(_.ScrollMenuItems, {
        id: this.props.id,
        menuBarColour: this.props.backgroundColour,
        side: "left"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: menuItemsContainerCss
      }, "Menu Bar Items Will Be Rendered Here"), /*#__PURE__*/_react["default"].createElement(_.ScrollMenuItems, {
        id: this.props.id,
        menuBarColour: this.props.backgroundColour,
        side: "right"
      })));
    }
  }]);
}(_react["default"].Component);
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = MenuBar;