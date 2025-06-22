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
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/menu-bar-common.css");
require("./css/menu-bar-dropdown-container.css");
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
var containerMaximumWidth = 328;
var dropdownHyperlinkContainerCss = 'dropdown-menu-bar-container-row-hyperlink-container';
var maximumHyperlinkTitleHeight = 18;
var rightmostScreenPadding = 16;

/**
 * Dropdown Menu Bar Container component which is used to render the hyperlinks associated with a dropdown menu item.
 * This component is intended for use with the Menu Bar component. It has been designed to fit within the boundaries
 * of the most commonly used mobile screen sizes (360x800).
 * 
 * In the case that a hyperlinks text content exceeds the width of the container, the text content will be truncated
 * by one character at a time until the text content successfully fits.
 * 
 * By enabling auto-focus this component is also fully supported by keyboard controls without the user having to first
 * press the Tab key to apply focus. Once the container gains focus, it cannot lose focus again until the user closes
 * the container using the close icon or clicks to select a hyperlink. Hyperlinks can also be selected using the
 * enter key and / or space key.
 */
var DropdownMenuBarContainer = /*#__PURE__*/function (_React$Component) {
  /**
   * Constructor for the Dropdown Menu Bar Container component
   * @param {any} props 
   */
  function DropdownMenuBarContainer(props) {
    var _this;
    _classCallCheck(this, DropdownMenuBarContainer);
    _this = _callSuper(this, DropdownMenuBarContainer, [props]);
    _this.state = {
      isHidden: true,
      left: 0,
      top: 0
    };
    _this.getAllHyperlinkDOMElements = _this.getAllHyperlinkDOMElements.bind(_this);
    _this.getCloseButtonDOMElement = _this.getCloseButtonDOMElement.bind(_this);
    _this.getContainerDOMElement = _this.getContainerDOMElement.bind(_this);
    _this.getFirstHyperlinkDOMElement = _this.getFirstHyperlinkDOMElement.bind(_this);
    _this.getIdCloseButtonDOMElement = _this.getIdCloseButtonDOMElement.bind(_this);
    _this.getIdContainerDOMElement = _this.getIdContainerDOMElement.bind(_this);
    _this.getLastHyperlinkDOMElement = _this.getLastHyperlinkDOMElement.bind(_this);
    _this.handleHyperlinkTitleWidths = _this.handleHyperlinkTitleWidths.bind(_this);
    _this.handleOnClickClose = _this.handleOnClickClose.bind(_this);
    _this.handleOnClickHyperlink = _this.handleOnClickHyperlink.bind(_this);
    _this.handleOnKeyDownCloseButton = _this.handleOnKeyDownCloseButton.bind(_this);
    _this.handleOnKeyDownHyperlink = _this.handleOnKeyDownHyperlink.bind(_this);
    _this.setIsHidden = _this.setIsHidden.bind(_this);
    _this.setIsVisible = _this.setIsVisible.bind(_this);
    _this.setPosition = _this.setPosition.bind(_this);
    return _this;
  }
  _inherits(DropdownMenuBarContainer, _React$Component);
  return _createClass(DropdownMenuBarContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Set the initial position of the container and ensure all hyperlink title text content fits within the container width */
      this.setPosition(this.props.top, this.props.left);
      this.handleHyperlinkTitleWidths();
      if (this.props.isHidden !== undefined && this.props.isHidden !== this.state.isHidden) {
        if (this.props.isHidden === false) {
          /* Mark the component as visible */
          this.setIsVisible();
        } else if (this.props.isHidden === true) {
          /* Mark the component as hidden */
          this.setIsHidden();
        }
      } else {
        /* By default - ensure the container is set to hidden */
        this.setIsHidden();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isHidden !== this.props.isHidden && this.props.isHidden !== this.state.isHidden) {
        if (this.props.isHidden === false) {
          /* Mark the component as visible */
          this.setIsVisible();
        } else if (this.props.isHidden === true) {
          /* Mark the component as hidden */
          this.setIsHidden();
        }
      }
      if (prevProps.top !== this.props.top && prevProps.left === this.props.left) {
        /* Only alter the top position */
        this.setPosition(this.props.top, this.state.left);
      }
      if (prevProps.top === this.props.top && prevProps.left !== this.props.left) {
        /* Only alter the left position */
        this.setPosition(this.state.top, this.props.left);
      }
      if (prevProps.top !== this.props.top && prevProps.left !== this.props.left) {
        /* Alter both the top and left positions */
        this.setPosition(this.props.top, this.props.left);
      }
    }

    /**
     * Retrieves all of the hyperlink elements from the DOM
     * @returns {Array.<HTMLElement>}
     */
  }, {
    key: "getAllHyperlinkDOMElements",
    value: function getAllHyperlinkDOMElements() {
      return document.querySelectorAll("div[id=\"".concat(this.getIdContainerDOMElement(), "\"] > div[class=\"").concat(dropdownHyperlinkContainerCss, "\"] > a"));
    }

    /**
     * Retrieves the close button for the dropdown menu bar container element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getCloseButtonDOMElement",
    value: function getCloseButtonDOMElement() {
      return document.querySelector("button[id=\"".concat(this.getIdCloseButtonDOMElement(), "\"]"));
    }

    /**
     * Retrieves the dropdown menu bar container element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getContainerDOMElement",
    value: function getContainerDOMElement() {
      return document.querySelector("div[id=\"".concat(this.getIdContainerDOMElement(), "\"]"));
    }

    /**
     * Retrieves the first available hyperlink element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getFirstHyperlinkDOMElement",
    value: function getFirstHyperlinkDOMElement() {
      var allHyperlinkElements = this.getAllHyperlinkDOMElements();
      return allHyperlinkElements[0];
    }

    /**
     * Retrieves the ID for the close button DOM element
     * @returns {string}
     */
  }, {
    key: "getIdCloseButtonDOMElement",
    value: function getIdCloseButtonDOMElement() {
      return "".concat(this.props.id, "--").concat(this.props.backgroundColour || 'white', "--close--dropdown-menu-bar-container");
    }

    /**
     * Retrieves the ID for the container DOM element
     * @returns {string}
     */
  }, {
    key: "getIdContainerDOMElement",
    value: function getIdContainerDOMElement() {
      return "".concat(this.props.id, "--").concat(this.props.backgroundColour || 'white', "--dropdown-menu-bar-container");
    }

    /**
     * Retrieves the ID of the last available hyperlink in the container
     * @returns {string}
     */
  }, {
    key: "getIdLastHyperlinkDOMElement",
    value: function getIdLastHyperlinkDOMElement() {
      var lastHyperlinkElement = this.getLastHyperlinkDOMElement();
      return lastHyperlinkElement.getAttribute('id');
    }

    /**
     * Retrieves the last available hyperlink element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getLastHyperlinkDOMElement",
    value: function getLastHyperlinkDOMElement() {
      var allHyperlinkElements = this.getAllHyperlinkDOMElements();
      return allHyperlinkElements[allHyperlinkElements.length - 1];
    }

    /**
     * Truncates hyperlink title text if required so that it fits within the allocated container size
     */
  }, {
    key: "handleHyperlinkTitleWidths",
    value: function handleHyperlinkTitleWidths() {
      var allHyperlinkTitleElements = document.querySelectorAll('span[id$="--title--dropdown-menu-bar-container-item"]');
      for (var index = 0; index < allHyperlinkTitleElements.length; index += 1) {
        /* Determine the initial height of the text content + the arrow icon */
        var hyperlinkTitleElement = allHyperlinkTitleElements[index];
        var hyperlinkTitleHeight = hyperlinkTitleElement.getBoundingClientRect().height;
        while (hyperlinkTitleHeight > maximumHyperlinkTitleHeight) {
          /* Reduce the hyperlink title text content character by character until it fits perfectly within the allocated size of the container */
          var currentTitle = hyperlinkTitleElement.textContent;
          currentTitle = currentTitle.replace('...', '').trim();
          currentTitle = currentTitle.substring(0, currentTitle.length - 1).trim();
          currentTitle = "".concat(currentTitle, "...");

          /* Set the new text content now that we have reduced the content by one character */
          hyperlinkTitleElement.textContent = currentTitle;

          /* Determine the new height of the text content now that we have truncated the text */
          hyperlinkTitleHeight = hyperlinkTitleElement.getBoundingClientRect().height;
        }
      }
    }

    /**
     * Handles click events on the dropdown menu bar containers close button
     * @param {Event} event 
     */
  }, {
    key: "handleOnClickClose",
    value: function handleOnClickClose(event) {
      event.preventDefault();
      this.setIsHidden();
    }

    /**
     * Ensures that the container is hidden if the user selects one of the hyperlinks
     */
  }, {
    key: "handleOnClickHyperlink",
    value: function handleOnClickHyperlink() {
      this.setIsHidden();
    }

    /**
     * Handle key down events on the close button
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDownCloseButton",
    value: function handleOnKeyDownCloseButton(event) {
      if (event.shiftKey === true && event.key === 'Tab') {
        /* If shift + tab have been pressed on the close button element, cycle focus back to the last hyperlink element */
        if (event.target.id === this.getIdCloseButtonDOMElement()) {
          event.preventDefault();
          var lastHyperlinkElement = this.getLastHyperlinkDOMElement();
          lastHyperlinkElement.focus();
        }
      } else if (event.key === 'Escape') {
        /* Hide the container element if the escape key is pressed */
        this.setIsHidden();
      }
    }

    /**
     * Handle key down events on the hyperlink
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDownHyperlink",
    value: function handleOnKeyDownHyperlink(event) {
      if (event.key === ' ') {
        /* Ensure that a spacebar key press also correctly redirects the user to the specified URL */
        event.target.click();
      } else if (event.shiftKey === false && event.key === 'Tab') {
        /* If the tab key has been pressed on the last hyperlink element, cycle focus back to the close button element */
        if (event.target.id === this.getIdLastHyperlinkDOMElement()) {
          event.preventDefault();
          var closeButtonElement = this.getCloseButtonDOMElement();
          closeButtonElement.focus();
        }
      } else if (event.key === 'Escape') {
        /* Hide the container element if the escape key is pressed */
        this.setIsHidden();
      }
    }

    /**
     * Sets the dropdown menu bar container as hidden in the UI 
     */
  }, {
    key: "setIsHidden",
    value: function setIsHidden() {
      var _this2 = this;
      /* Ensure state is updated to reflect that the dropdown menu bar container is now hidden */
      this.setState({
        isHidden: true
      }, function () {
        /* Get the container element from the DOM */
        var containerElement = _this2.getContainerDOMElement();

        /* Set the container elements opacity so that it is now hidden */
        if (containerElement !== null) {
          containerElement.style.visibility = 'hidden';
        }
      });
    }

    /**
     * Sets the dropdown menu bar container as visible in the UI
     */
  }, {
    key: "setIsVisible",
    value: function setIsVisible() {
      var _this3 = this;
      /* Ensure state is updated to reflect that the dropdown menu bar container is now visible */
      this.setState({
        isHidden: false
      }, function () {
        /* Get the container element from the DOM */
        var containerElement = _this3.getContainerDOMElement();

        /* Set the container elements opacity so that it is now visible */
        if (containerElement !== null) {
          containerElement.style.visibility = 'visible';
        }

        /* Auto focus on the first available hyperlink in the container element if required */
        if (_this3.props.enableAutoFocus === true) {
          _this3.getFirstHyperlinkDOMElement().focus();
        }
      });
    }

    /**
     * Sets the position for the container to be rendered at
     * @param {string} newTop 
     * @param {string} newLeft 
     */
  }, {
    key: "setPosition",
    value: function setPosition() {
      var _this4 = this;
      var newTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var newLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var rightmostScreenPos = window.innerWidth;
      var rightmostContainerPos = newLeft + containerMaximumWidth + rightmostScreenPadding;
      var finalLeft = newLeft;
      if (rightmostContainerPos > rightmostScreenPos) {
        var exceedsRightmostScreenPosBy = rightmostContainerPos - rightmostScreenPos;
        finalLeft -= exceedsRightmostScreenPosBy;
      }
      this.setState({
        left: finalLeft,
        top: newTop
      }, function () {
        var containerElement = _this4.getContainerDOMElement();
        containerElement.style.top = "".concat(_this4.state.top, "px");
        containerElement.style.left = "".concat(_this4.state.left, "px");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
      var _getColourCombination = (0, _colourCombinations.getColourCombination)(this.props.backgroundColour),
        backgroundColour = _getColourCombination.backgroundColour,
        fontColour = _getColourCombination.fontColour;

      /* Set the styling for the container element */
      var containerCss = "dropdown-menu-bar-container background-".concat(backgroundColour);

      /* Set the styling for the top and bottom rows of the container */
      var topRowCss = "dropdown-menu-bar-container-row-top background-".concat(backgroundColour);
      var topRowCloseButtonCss = "dropdown-menu-bar-container-row-top-close background-".concat(backgroundColour, " font-default font-").concat(fontColour);
      var bottomRowCss = "dropdown-menu-bar-container-row-bottom background-".concat(backgroundColour);

      /* Set the styling for the rows of hyperlinks to be rendered in the container */
      var hyperlinkCss = "dropdown-menu-bar-container-row-hyperlink background-".concat(backgroundColour, " font-default font-").concat(fontColour);
      var hyperlinkTitleCss = 'dropdown-menu-bar-container-row-hyperlink-title';
      return /*#__PURE__*/_react["default"].createElement("div", {
        "aria-hidden": this.state.isHidden,
        className: containerCss,
        id: "".concat(this.props.id, "--").concat(this.props.backgroundColour || 'white', "--dropdown-menu-bar-container")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: topRowCss
      }, /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": "Close this dropdown menu.",
        className: topRowCloseButtonCss,
        dangerouslySetInnerHTML: {
          __html: '&nbsp;&nbsp;&nbsp;&Chi;&nbsp;&nbsp;&nbsp;'
        },
        id: "".concat(this.getIdCloseButtonDOMElement()),
        onClick: this.handleOnClickClose,
        onKeyDown: this.handleOnKeyDownCloseButton,
        tabIndex: this.state.isHidden === true ? '-1' : '0',
        title: "Close this dropdown menu."
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: dropdownHyperlinkContainerCss
      }, this.props.dropdownMenuBarItemsList.map(function (dropdownMenuBarItemData, index) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          "aria-label": "".concat(dropdownMenuBarItemData.title),
          className: hyperlinkCss,
          href: dropdownMenuBarItemData.href,
          id: "".concat(index, "--").concat(dropdownMenuBarItemData.id, "--dropdown-menu-bar-container-item"),
          key: "".concat(index, "--").concat(dropdownMenuBarItemData.id, "--dropdown-menu-bar-container-item"),
          onClick: _this5.handleOnClickHyperlink,
          onKeyDown: _this5.handleOnKeyDownHyperlink,
          tabIndex: _this5.state.isHidden === true ? '-1' : '0',
          title: "".concat(dropdownMenuBarItemData.title)
        }, /*#__PURE__*/_react["default"].createElement("span", {
          id: "".concat(index, "--").concat(dropdownMenuBarItemData.id, "--title--dropdown-menu-bar-container-item"),
          className: hyperlinkTitleCss
        }, dropdownMenuBarItemData.title));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: bottomRowCss
      }));
    }
  }]);
}(_react["default"].Component);
DropdownMenuBarContainer.propTypes = {
  /** The background colour for the dropdown menu bar container. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The list of dropdown menu bar items to be rendered in the container component. */
  dropdownMenuBarItemsList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    id: _propTypes["default"].string,
    title: _propTypes["default"].string
  })).isRequired,
  /** Automatically enables focus on the first hyperlink in the container. Suitable for use when the container is accessed via the keyboard. */
  enableAutoFocus: _propTypes["default"].bool,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** Sets whether the dropdown menu bar container is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: _propTypes["default"].bool,
  /** The leftmost position for the container to be rendered at on-screen. */
  left: _propTypes["default"].number,
  /** The upper position for the container to be rendered at on-screen. */
  top: _propTypes["default"].number
};
var _default = exports["default"] = DropdownMenuBarContainer;