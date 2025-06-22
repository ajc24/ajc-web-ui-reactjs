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
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.timers.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseMenuBar = _interopRequireDefault(require("../base/BaseMenuBar"));
var _MenuBarItem = _interopRequireDefault(require("./MenuBarItem"));
var _DropdownMenuBarItem = _interopRequireDefault(require("./DropdownMenuBarItem"));
var _ScrollMenuBarItemsLeft = _interopRequireDefault(require("./ScrollMenuBarItemsLeft"));
var _ScrollMenuBarItemsRight = _interopRequireDefault(require("./ScrollMenuBarItemsRight"));
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
var menuBarItemAnimationTime = 250;
var menuBarItemWidth = 100;
var menuBarItemWidthWithMargin = 108;

/**
 * Menu Bar component to be used in the web application. This component allows for a number of menu bar items and
 * dropdown menu items to be rendered, each offering navigation options for the user to navigate around the application.
 * If the number of menu bar items are too many to fit within the confines of the screen width, the user is presented with
 * buttons with which to scroll through all available menu bar items.
 */
var MenuBar = /*#__PURE__*/function (_React$Component) {
  /**
   * Constructor for the Menu Bar component
   * @param {any} props 
   */
  function MenuBar(props) {
    var _this;
    _classCallCheck(this, MenuBar);
    _this = _callSuper(this, MenuBar, [props]);
    _this.state = {
      index: 0,
      isProcessing: false,
      maxIndex: 0,
      menuBarItems: [],
      menuBarItemsHidden: true,
      menuBarItemsRender: undefined,
      scrollMenuBarItemsLeftHidden: true,
      scrollMenuBarItemsRightHidden: true
    };
    _this.getCentralContentElement = _this.getCentralContentElement.bind(_this);
    _this.handleOnClickScrollMenuBarItemsLeft = _this.handleOnClickScrollMenuBarItemsLeft.bind(_this);
    _this.handleOnClickScrollMenuBarItemsRight = _this.handleOnClickScrollMenuBarItemsRight.bind(_this);
    _this.handleScreenWidth = _this.handleScreenWidth.bind(_this);
    _this.setCentralContentWidth = _this.setCentralContentWidth.bind(_this);
    _this.setIsProcessingFalse = _this.setIsProcessingFalse.bind(_this);
    _this.setIsProcessingTrue = _this.setIsProcessingTrue.bind(_this);
    _this.setMenuBarItemsAsHidden = _this.setMenuBarItemsAsHidden.bind(_this);
    _this.setMenuBarItemsAsVisible = _this.setMenuBarItemsAsVisible.bind(_this);
    return _this;
  }
  _inherits(MenuBar, _React$Component);
  return _createClass(MenuBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Set the menu bar up based on the current screen size */
      this.handleScreenWidth();

      /* Watch over all future window resize events - we will want to alter the number of rendered menu bar items to suit the screen size */
      window.addEventListener('resize', this.handleScreenWidth);
    }

    /**
     * Retrieves the central content element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getCentralContentElement",
    value: function getCentralContentElement() {
      return document.querySelector("div[id=\"".concat(this.props.id, "--central-content--").concat(this.props.backgroundColour, "--menu-bar\"]"));
    }

    /**
     * Handles on click events on the "Scroll menu bar items to the left" button
     */
  }, {
    key: "handleOnClickScrollMenuBarItemsLeft",
    value: function handleOnClickScrollMenuBarItemsLeft() {
      var _this2 = this;
      if (this.state.isProcessing === false) {
        /* Enable is processing and mark the current set of menu bar items as hidden */
        this.setIsProcessingTrue();
        this.setMenuBarItemsAsHidden();
        setTimeout(function () {
          /* After the "hide menu bar items" animation has completed - set the new current index position */
          var newIndex = _this2.state.index - _this2.state.maxIndex;
          if (newIndex < 0) {
            newIndex = 0;
          }
          _this2.setState({
            index: newIndex
          }, function () {
            /* As soon as the index position is updated - set the menu bar items as visible again and disable is processing */
            _this2.setMenuBarItemsAsVisible();
            _this2.setIsProcessingFalse();
          });
        }, menuBarItemAnimationTime);
      }
    }

    /**
     * Handles on click events on the "Scroll menu bar items to the right" button
     */
  }, {
    key: "handleOnClickScrollMenuBarItemsRight",
    value: function handleOnClickScrollMenuBarItemsRight() {
      var _this3 = this;
      if (this.state.isProcessing === false) {
        /* Enable is processing and mark the current set of menu bar items as hidden */
        this.setIsProcessingTrue();
        this.setMenuBarItemsAsHidden();
        setTimeout(function () {
          /* After the "hide menu bar items" animation has completed - set the new current index position */
          var newIndex = _this3.state.index + _this3.state.maxIndex;
          if (newIndex > _this3.props.menuBarItemsList.length) {
            newIndex = _this3.props.menuBarItemsList.length;
          }
          _this3.setState({
            index: newIndex
          }, function () {
            /* As soon as the index position is updated - set the menu bar items as visible again and disable is processing */
            _this3.setMenuBarItemsAsVisible();
            _this3.setIsProcessingFalse();
          });
        }, menuBarItemAnimationTime);
      }
    }

    /**
     * Handles resize events in the browser. This function will hide the currently displayed menu bar
     * items, then determine the maximum number of menu bar items that can be rendered inside the central
     * content area of the menu bar based on the current screen size and finally mark all menu items as
     * visible again
     */
  }, {
    key: "handleScreenWidth",
    value: function handleScreenWidth() {
      var _this4 = this;
      /* Enable is processing and mark the current set of menu bar items as hidden */
      this.setIsProcessingTrue();
      this.setMenuBarItemsAsHidden();
      setTimeout(function () {
        /* After the "hide menu bar items" animation has completed - set the new central content width */
        _this4.setCentralContentWidth();
        setTimeout(function () {
          /* After all processing is completed - set the menu bar items as visible again and disable is processing */
          _this4.setMenuBarItemsAsVisible();
          _this4.setIsProcessingFalse();
        }, menuBarItemAnimationTime);
      }, menuBarItemAnimationTime);
    }

    /**
     * Resets the current menu bar item index and sets the maximum index to suit
     * the current screen size
     */
  }, {
    key: "setCentralContentWidth",
    value: function setCentralContentWidth() {
      /* Determine the current width of the central content element */
      var centralContentElement = this.getCentralContentElement();
      if (centralContentElement !== null) {
        var centralContentWidth = centralContentElement.getBoundingClientRect().width;

        /* Reset the current index and determine how many elements will fit within the width of the element */
        var newIndex = 0;
        var newMaxIndex = 0;
        if (centralContentWidth > menuBarItemWidth) {
          /* Account for the smallest width item first */
          newMaxIndex += 1;
          centralContentWidth -= menuBarItemWidth;
        }
        /* Now account for all of the other menu bar item widths which will include margins */
        var remainder = parseInt(centralContentWidth / menuBarItemWidthWithMargin, 10);
        newMaxIndex += remainder;

        /* Set these indexes in state */
        this.setState({
          index: newIndex,
          maxIndex: newMaxIndex
        });
      }
    }

    /**
     * Toggles the isProcessing value to false (disables processing)
     */
  }, {
    key: "setIsProcessingFalse",
    value: function setIsProcessingFalse() {
      this.setState({
        isProcessing: false
      });
    }

    /**
     * Toggles the isProcessing value to true (enables processing)
     */
  }, {
    key: "setIsProcessingTrue",
    value: function setIsProcessingTrue() {
      this.setState({
        isProcessing: true
      });
    }

    /**
     * Sets all menu bar items as hidden
     */
  }, {
    key: "setMenuBarItemsAsHidden",
    value: function setMenuBarItemsAsHidden() {
      this.setState({
        menuBarItemsHidden: true
      });
    }

    /**
     * Sets all menu bar items as visible
     */
  }, {
    key: "setMenuBarItemsAsVisible",
    value: function setMenuBarItemsAsVisible() {
      this.setState({
        scrollMenuBarItemsLeftHidden: this.state.index === 0,
        menuBarItemsHidden: false,
        scrollMenuBarItemsRightHidden: this.state.index + this.state.maxIndex >= this.props.menuBarItemsList.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var centralContentCss = 'menu-bar-central-content';
      return /*#__PURE__*/_react["default"].createElement(_BaseMenuBar["default"], {
        backgroundColour: this.props.backgroundColour,
        id: "".concat(this.props.id, "--").concat(this.props.backgroundColour, "--menu-bar")
      }, /*#__PURE__*/_react["default"].createElement(_ScrollMenuBarItemsLeft["default"], {
        backgroundColour: this.props.backgroundColour,
        id: this.props.id,
        isHidden: this.state.scrollMenuBarItemsLeftHidden,
        onClick: this.handleOnClickScrollMenuBarItemsLeft
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.props.id, "--central-content--").concat(this.props.backgroundColour, "--menu-bar"),
        className: centralContentCss
      }, this.props.menuBarItemsList.map(function (menuBarItemData, index) {
        if (index >= _this5.state.index && index < _this5.state.index + _this5.state.maxIndex) {
          var addRightSideSpacing = true;
          if (index === _this5.state.index + _this5.state.maxIndex - 1 || index === _this5.props.menuBarItemsList.length - 1) {
            /* Do not add right side spacing for the last rendered item in the current output and / or the last rendered item in the list */
            addRightSideSpacing = false;
          }
          if (menuBarItemData.dropdownMenuBarItemsList === undefined) {
            return /*#__PURE__*/_react["default"].createElement(_MenuBarItem["default"], {
              addRightSideSpacing: addRightSideSpacing,
              backgroundColour: _this5.props.backgroundColour,
              href: menuBarItemData.href,
              id: menuBarItemData.id,
              isHidden: _this5.state.menuBarItemsHidden,
              key: menuBarItemData.id
            }, menuBarItemData.title);
          }
          if (menuBarItemData.dropdownMenuBarItemsList !== undefined) {
            return /*#__PURE__*/_react["default"].createElement(_DropdownMenuBarItem["default"], {
              addRightSideSpacing: addRightSideSpacing,
              backgroundColour: _this5.props.backgroundColour,
              dropdownMenuBarItemData: menuBarItemData,
              id: menuBarItemData.id,
              isHidden: _this5.state.menuBarItemsHidden,
              key: menuBarItemData.id
            });
          }
        }
        return null;
      })), /*#__PURE__*/_react["default"].createElement(_ScrollMenuBarItemsRight["default"], {
        backgroundColour: this.props.backgroundColour,
        id: this.props.id,
        isHidden: this.state.scrollMenuBarItemsRightHidden,
        onClick: this.handleOnClickScrollMenuBarItemsRight
      }));
    }
  }]);
}(_react["default"].Component);
MenuBar.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The list of menu bar items to be rendered in the menu bar. */
  menuBarItemsList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    id: _propTypes["default"].string,
    title: _propTypes["default"].string
  }))
};
var _default = exports["default"] = MenuBar;