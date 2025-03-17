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
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.iterator.constructor.js");
require("core-js/modules/es.iterator.map.js");
require("core-js/modules/es.object.proto.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.timers.js");
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
 */
var menuItemsContainerClass = 'menu-items-container';
var menuItemsContainerAnimationsClass = 'menu-items-container-animations';
var menuItemOpacityTimeout = 250;
var menuItemWidth = 104;

/**
 * Menu Bar component to be used in the web application. This component allows for a number of menu bar item links and
 * dropdown menu items to be rendered, each offering navigation options for the user to navigate around your application.
 * If the number of menu items are too many to fit within the confines of the screen width, the user is presented with
 * buttons with which to scroll through all available menu items available to them.
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
      hideScrollMenuItemsNext: true,
      hideScrollMenuItemsPrev: true,
      isScrollButtonClickDisabled: false,
      menuItemsList: [],
      numberOfItemsToRender: -1,
      renderIndexStart: -1
    };
    _this.getMenuItemsContainerElement = _this.getMenuItemsContainerElement.bind(_this);
    _this.handleClickScrollLeft = _this.handleClickScrollLeft.bind(_this);
    _this.handleClickScrollRight = _this.handleClickScrollRight.bind(_this);
    _this.handleScreenWidth = _this.handleScreenWidth.bind(_this);
    _this.initialise = _this.initialise.bind(_this);
    _this.setDisableScrollButtonClick = _this.setDisableScrollButtonClick.bind(_this);
    _this.setEnableScrollButtonClick = _this.setEnableScrollButtonClick.bind(_this);
    _this.setMenuItemsContainerAsHidden = _this.setMenuItemsContainerAsHidden.bind(_this);
    _this.setMenuItemsContainerAsVisible = _this.setMenuItemsContainerAsVisible.bind(_this);
    return _this;
  }
  _inherits(MenuBar, _React$Component);
  return _createClass(MenuBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Initialise the component */
      this.initialise(this.props.menuItemsList);

      /* Watch over all future window resize events - we will want to alter the menu bar to suit the screen size */
      window.addEventListener('resize', this.handleScreenWidth);
    }

    /**
     * Retrieves the menu items container element from the DOM.
     * @returns {HTMLElement}
     */
  }, {
    key: "getMenuItemsContainerElement",
    value: function getMenuItemsContainerElement() {
      return document.querySelector("div[class*=\"".concat(menuItemsContainerClass, "\"][class*=\"").concat(menuItemsContainerAnimationsClass, "\"]"));
    }

    /**
     * Handles click events on the "Prev" button to scroll left through the list of available menu items.
     */
  }, {
    key: "handleClickScrollLeft",
    value: function handleClickScrollLeft() {
      var _this2 = this;
      if (this.state.isScrollButtonClickDisabled === false) {
        /* Mark the menu items container as hidden to gently hide the current list of items */
        this.setDisableScrollButtonClick();
        setTimeout(function () {
          /* Given we had to click "Prev" to scroll left, the "Next" button should be marked as visible after the click */
          var newHideScrollMenuItemsNext = false;

          /* Decrease the render index start position by the number of items to be rendered */
          var newRenderIndexStart = _this2.state.renderIndexStart - _this2.state.numberOfItemsToRender;

          /* Determine whether to render the scroll menu items prev button or not */
          var newHideScrollMenuItemsPrev = newRenderIndexStart === 0 ? true : false;

          /* Update the component state */
          _this2.setState({
            hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
            hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
            renderIndexStart: newRenderIndexStart
          }, _this2.setEnableScrollButtonClick);
        }, menuItemOpacityTimeout);
      }
    }

    /**
     * Handles click events on the "Next" button to scroll right through the list of available menu items.
     */
  }, {
    key: "handleClickScrollRight",
    value: function handleClickScrollRight() {
      var _this3 = this;
      if (this.state.isScrollButtonClickDisabled === false) {
        /* Mark the menu items container as hidden to gently hide the current list of items */
        this.setDisableScrollButtonClick();
        setTimeout(function () {
          /* Given we had to click "Next" to scroll right, the "Prev" button should be marked as visible after the click */
          var newHideScrollMenuItemsPrev = false;

          /* Increase the render index start position by the number of items to be rendered */
          var newRenderIndexStart = _this3.state.renderIndexStart + _this3.state.numberOfItemsToRender;

          /* Determine whether to render the scroll menu items next button or not */
          var newHideScrollMenuItemsNext;
          newRenderIndexStart + _this3.state.numberOfItemsToRender >= _this3.state.menuItemsList.length ? newHideScrollMenuItemsNext = true : newHideScrollMenuItemsNext = false;

          /* Update the component state */
          _this3.setState({
            hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
            hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
            renderIndexStart: newRenderIndexStart
          }, _this3.setEnableScrollButtonClick);
        }, menuItemOpacityTimeout);
      }
    }

    /**
     * Handle changes to the screen width. Depending on the width of the screen, a subset of
     * the menu items list may need to be rendered to the user at any given time.
     */
  }, {
    key: "handleScreenWidth",
    value: function handleScreenWidth() {
      /* Determine the new number of items to render based on the current screen width */
      var menuItemContainerElement = this.getMenuItemsContainerElement();
      var menuItemContainerWidth = menuItemContainerElement.getBoundingClientRect().width;
      var newNumberOfItemsToRender = Math.floor(menuItemContainerWidth / menuItemWidth);

      /* Since we are resetting the render start index to zero on resizing - there will never be a prev button displayed */
      var newHideScrollMenuItemsPrev = true;

      /* Determine whether to render the scroll menu items next button or not */
      var newHideScrollMenuItemsNext;
      this.state.renderIndexStart + newNumberOfItemsToRender >= this.state.menuItemsList.length ? newHideScrollMenuItemsNext = true : newHideScrollMenuItemsNext = false;

      /* Update the component state */
      this.setState({
        hideScrollMenuItemsNext: newHideScrollMenuItemsNext,
        hideScrollMenuItemsPrev: newHideScrollMenuItemsPrev,
        numberOfItemsToRender: newNumberOfItemsToRender,
        renderIndexStart: 0
      });
    }

    /**
     * Set the initial list of menu items and set the initial render start index.
     * Follows on from this action by handling the current screen width.
     * @param {Array.<JSON>} initMenuItemsList 
     */
  }, {
    key: "initialise",
    value: function initialise(initMenuItemsList) {
      this.setState({
        menuItemsList: initMenuItemsList,
        renderIndexStart: 0
      }, this.handleScreenWidth);
    }

    /**
     * Disables the scrolling buttons functionality and follows on from
     * this action by setting the menu items container element as hidden.
     */
  }, {
    key: "setDisableScrollButtonClick",
    value: function setDisableScrollButtonClick() {
      this.setState({
        isScrollButtonClickDisabled: true
      }, this.setMenuItemsContainerAsHidden);
    }

    /**
     * Enables the scrolling buttons functionality.
     */
  }, {
    key: "setEnableScrollButtonClick",
    value: function setEnableScrollButtonClick() {
      this.setState({
        isScrollButtonClickDisabled: false
      });
    }

    /**
     * Sets the opacity of the menu items container element to 0, rendering it hidden to the user.
     */
  }, {
    key: "setMenuItemsContainerAsHidden",
    value: function setMenuItemsContainerAsHidden() {
      var menuItemContainerElement = this.getMenuItemsContainerElement();
      menuItemContainerElement.style.opacity = 0;
    }

    /**
     * Sets the opacity of the menu items container element to 1, rendering it visible to the user.
     */
  }, {
    key: "setMenuItemsContainerAsVisible",
    value: function setMenuItemsContainerAsVisible() {
      var menuItemContainerElement = this.getMenuItemsContainerElement();
      menuItemContainerElement.style.opacity = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      /* Set the styling for the overall menu bar container element */
      var menuBarContainerCss = 'menu-bar-container';

      /* Set the styling for the menu items container element */
      var menuItemsContainerCss = "".concat(menuItemsContainerClass, " ").concat(menuItemsContainerAnimationsClass);

      /* Set the styling for the unordered list element */
      var unorderedListCss = 'menu-items-unordered-list';
      return /*#__PURE__*/_react["default"].createElement(_.MenuBarBase, {
        backgroundColour: this.props.backgroundColour,
        id: this.props.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: menuBarContainerCss
      }, /*#__PURE__*/_react["default"].createElement(_.ScrollMenuItems, {
        id: this.props.id,
        isHidden: this.state.hideScrollMenuItemsPrev,
        menuBarColour: this.props.backgroundColour,
        onClick: this.handleClickScrollLeft,
        side: "left"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: menuItemsContainerCss
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: unorderedListCss
      }, this.state.menuItemsList.map(function (itemData, index) {
        if (index >= _this4.state.renderIndexStart && index < _this4.state.renderIndexStart + _this4.state.numberOfItemsToRender) {
          /* Determine whether this is the last item being rendered - last menu items do not need right side spacing */
          var isLastRenderedItem = index === _this4.state.renderIndexStart + _this4.state.numberOfItemsToRender - 1 || _this4.state.renderIndexStart + _this4.state.numberOfItemsToRender > _this4.state.menuItemsList.length && index === _this4.state.menuItemsList.length - 1;
          if (isLastRenderedItem === true) {
            /* When all menu items are rendered, ensure the container element is visible */
            _this4.setMenuItemsContainerAsVisible();
          }
          if (itemData.href !== undefined) {
            /* Render a menu item link component */
            return /*#__PURE__*/_react["default"].createElement("li", {
              key: "".concat(index, "--").concat(itemData.id, "--list-item")
            }, /*#__PURE__*/_react["default"].createElement(_.MenuItemLink, {
              href: "".concat(itemData.href),
              id: "".concat(index, "--").concat(itemData.id),
              menuItemColour: _this4.props.backgroundColour,
              rightSideSpacing: isLastRenderedItem ? false : true
            }, itemData.title));
          }
        }
      }))), /*#__PURE__*/_react["default"].createElement(_.ScrollMenuItems, {
        id: this.props.id,
        isHidden: this.state.hideScrollMenuItemsNext,
        menuBarColour: this.props.backgroundColour,
        onClick: this.handleClickScrollRight,
        side: "right"
      })));
    }
  }]);
}(_react["default"].Component);
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The list of menu items to be rendered within the scope of the menu bar. */
  menuItemsList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    id: _propTypes["default"].string,
    title: _propTypes["default"].string
  }))
};
var _default = exports["default"] = MenuBar;