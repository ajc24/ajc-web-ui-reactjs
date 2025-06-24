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
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.proto.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DropdownMenuBarContainer = _interopRequireDefault(require("./DropdownMenuBarContainer"));
var _colourCombinations = require("../data/colour-combinations");
var _domMeasurements = require("../data/dom-measurements");
require("../css/common.css");
require("./css/menu-bar-common.css");
require("./css/menu-bar-dropdown-item.css");
require("./css/menu-bar-item.css");
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
/* Set the external IDs which may be interacted with via mouse or keyboard events */
var containerCloseButtonId = '--close--dropdown-menu-bar-container';
var containerHyperlinkId = '--dropdown-menu-bar-container-item';
var dropdownMenuBarItemButtonId = '--button--dropdown-menu-bar-item';
var menuBarItemHyperlinkId = '--menu-bar-item-hyperlink';

/* CSS styling parameters */
var maximumMenuBarItemButtonHeight = 55;

/* Arrow icon inner HTML settings */
var downArrowInnerHTML = '&nbsp;<br />&darr;';
var upArrowInnerHTML = '&nbsp;<br />&uarr;';

/**
 * Dropdown Menu Bar Item component which is intended for use with the Menu Bar component. This component will render
 * a clickable menu bar item to the user. Clicking this item will open a dropdown menu container element which contains
 * all of the hyperlinks associated with the dropdown menu bar item. Everything has been designed to fit within the
 * boundaries of the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * 
 * By design only a single dropdown menu bar item can be selected at any one time, also only one dropdown menu bar container
 * element can be rendered at any one time.
 * 
 * All dropdown menu bar items and dropdown menu bar container hyperlinks are fully interactive via both mouse and keyboard.
 */
var DropdownMenuBarItem = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Menu Bar Item component
   * @param {any} props 
   */
  function DropdownMenuBarItem(props) {
    var _this;
    _classCallCheck(this, DropdownMenuBarItem);
    _this = _callSuper(this, DropdownMenuBarItem, [props]);
    _this.state = {
      enableAutoFocus: false,
      isHidden: true,
      isSelected: false,
      itemArrowInnerHTML: downArrowInnerHTML,
      top: 0,
      left: 0
    };
    _this.getArrowDOMElement = _this.getArrowDOMElement.bind(_this);
    _this.getButtonDOMElement = _this.getButtonDOMElement.bind(_this);
    _this.getTitleDOMElement = _this.getTitleDOMElement.bind(_this);
    _this.getIdButtonDOMElement = _this.getIdButtonDOMElement.bind(_this);
    _this.handleOnClickButtonSpan = _this.handleOnClickButtonSpan.bind(_this);
    _this.handleOnClickDropdownMenuBarItem = _this.handleOnClickDropdownMenuBarItem.bind(_this);
    _this.handleOnClickExternalElements = _this.handleOnClickExternalElements.bind(_this);
    _this.handleOnKeyDownButton = _this.handleOnKeyDownButton.bind(_this);
    _this.handleOnKeyDownExternalElements = _this.handleOnKeyDownExternalElements.bind(_this);
    _this.handleOnMouseLeave = _this.handleOnMouseLeave.bind(_this);
    _this.handleOnMouseOver = _this.handleOnMouseOver.bind(_this);
    _this.handleTextContentHeight = _this.handleTextContentHeight.bind(_this);
    _this.setIsDeselected = _this.setIsDeselected.bind(_this);
    _this.setIsHidden = _this.setIsHidden.bind(_this);
    _this.setIsVisible = _this.setIsVisible.bind(_this);
    return _this;
  }
  _inherits(DropdownMenuBarItem, _React$Component);
  return _createClass(DropdownMenuBarItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Initialise all of the key parameters for this component */
      if (this.state.isHidden === false) {
        this.setIsVisible();
        this.handleTextContentHeight();
      } else if (this.state.isHidden === true) {
        this.setIsHidden();
      }
      /* Watch for click events which can de-select the dropdown menu bar item and hide the container element */
      document.body.addEventListener('click', this.handleOnClickExternalElements);
      document.body.addEventListener('keydown', this.handleOnKeyDownExternalElements);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isHidden !== this.state.isHidden) {
        if (this.props.isHidden === false) {
          /* Mark the component as visible */
          this.setIsVisible();
          this.handleTextContentHeight();
        } else if (this.props.isHidden === true) {
          /* Mark the component as hidden */
          this.setIsHidden();
        }
      }
    }

    /**
     * Retrieves the dropdown menu bar items arrow element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getArrowDOMElement",
    value: function getArrowDOMElement() {
      return document.querySelector("button[id=\"".concat(this.getIdButtonDOMElement(), "\"] > span[class=\"dropdown-menu-bar-button-arrow\"]"));
    }

    /**
     * Retrieves the dropdown menu bar items button element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getButtonDOMElement",
    value: function getButtonDOMElement() {
      return document.querySelector("button[id=\"".concat(this.getIdButtonDOMElement(), "\"]"));
    }

    /**
     * Retrieves the dropdown menu bar items title element from the DOM
     * @returns {HTMLElement}
     */
  }, {
    key: "getTitleDOMElement",
    value: function getTitleDOMElement() {
      return document.querySelector("button[id=\"".concat(this.getIdButtonDOMElement(), "\"] > span[class=\"dropdown-menu-bar-button-title\"]"));
    }

    /**
     * Retrieves the ID for the dropdown menu bar items button DOM element
     * @returns {string}
     */
  }, {
    key: "getIdButtonDOMElement",
    value: function getIdButtonDOMElement() {
      return "".concat(this.props.dropdownMenuBarItemData.id, "--").concat(this.props.backgroundColour || 'white', "--button--dropdown-menu-bar-item");
    }

    /**
     * Since the span elements for the dropdown menu bar items button sit on top of the button, click events are
     * sometimes registered on the span elements and not the button, which can cause problems with the external elements
     * click handlers. Therefore explicitly redirect span element clicks to be button element clicks instead.
     * @param {Event} event 
     */
  }, {
    key: "handleOnClickButtonSpan",
    value: function handleOnClickButtonSpan(event) {
      event.preventDefault();
      var buttonElement = this.getButtonDOMElement();
      buttonElement.click();
    }

    /**
     * When the element is visible click events will mark the dropdown menu bar container element
     * as visible / hidden depending on the components selection status.
     * @param {event} event
     * @param {boolean} newEnableAutoFocus
     */
  }, {
    key: "handleOnClickDropdownMenuBarItem",
    value: function handleOnClickDropdownMenuBarItem(event) {
      var newEnableAutoFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      event.preventDefault();
      if (this.state.isHidden === false) {
        if (this.state.isSelected === true) {
          this.setIsDeselected();
        } else if (this.state.isSelected === false) {
          /* Get the overall dimensions of the button element */
          var buttonElement = this.getButtonDOMElement();
          var buttonElementDimensions = (0, _domMeasurements.getBoundingClientRect)(buttonElement);

          /**
           * Retrieve the bottom and left positions of the button - these will act as the top and the left positions
           * of the dropdown menu bar container component. Add an extra pixel to the bottom position to ensure that
           * there is a nice decorative space between the menu bar item and the menu bar container
           */
          var bottom = buttonElementDimensions.bottom + (0, _domMeasurements.getWindowPageYOffset_Integer)() + 1;
          var left = buttonElementDimensions.left;
          this.setState({
            enableAutoFocus: newEnableAutoFocus,
            isSelected: true,
            itemArrowInnerHTML: upArrowInnerHTML,
            left: left,
            top: bottom
          });
        }
      }
    }

    /**
     * Handles click events on external elements which can affect the selection and visibility of the dropdown menu bar item
     * and the dropdown menu bar container elements respectively.
     * @param {Event} event 
     */
  }, {
    key: "handleOnClickExternalElements",
    value: function handleOnClickExternalElements(event) {
      var targetElementId = "".concat(event.target.id);
      if (this.state.isSelected === true) {
        var isSelected = true;
        if (targetElementId.includes(dropdownMenuBarItemButtonId) === true && targetElementId !== this.getIdButtonDOMElement()) {
          isSelected = false;
          this.setIsDeselected();
        }
        if (isSelected === true && targetElementId.includes(containerCloseButtonId) === true) {
          isSelected = false;
          this.setIsDeselected();
        }
        if (isSelected === true && targetElementId.includes(containerHyperlinkId) === true) {
          isSelected = false;
          this.setIsDeselected();
        }
        if (isSelected === true && targetElementId.includes(menuBarItemHyperlinkId) === true) {
          isSelected = false;
          this.setIsDeselected();
        }
      }
    }

    /**
     * Handles key press events on the button - both space and enter key presses should activate the button and also ensure
     * that auto-focus is enabled on the container element.
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDownButton",
    value: function handleOnKeyDownButton(event) {
      var enableAutoFocus = true;
      if (event.key === 'Enter' || event.key === ' ') {
        /* If the enter key or the space key have been pressed, ensure a click event occurs with auto focus enabled */
        this.handleOnClickDropdownMenuBarItem(event, enableAutoFocus);
        this.handleOnMouseLeave();
      }
    }

    /**
     * Handles key press events on external elements which can affect the selection and visibility of the dropdown menu bar item
     * and the dropdown menu bar container elements respectively.
     * @param {Event} event 
     */
  }, {
    key: "handleOnKeyDownExternalElements",
    value: function handleOnKeyDownExternalElements(event) {
      var deselectedFromKeyboardEvent = true;

      /* Keyboard events are only processed if the menu bar item is selected and the container element is visible */
      if (this.state.isSelected === true) {
        /**
         * In all instances below the dropdown menu bar item will be marked as deselected and keyboard focus is returned to the dropdown menu item button element:
         * 
         * 1. An escape key press used to exit from and hide the container element.
         * 2. Pressing enter or space on the container elements close button to exit from and hide the container element.
         */
        if (event.key === 'Escape' || (event.key === 'Enter' || event.key === ' ') && event.target.id.length > 0 && event.target.id.includes(containerCloseButtonId)) {
          if (event.key === 'Enter') {
            /* Ensure the default behaviour for an Enter key press is disabled - otherwise the container may not be closed properly */
            event.preventDefault();
          }
          this.setIsDeselected(deselectedFromKeyboardEvent);
        }
      }
    }

    /**
     * Resets the CSS styling hover changes for the title and arrow elements when the user
     * moves the mouse pointer away from the element again
     */
  }, {
    key: "handleOnMouseLeave",
    value: function handleOnMouseLeave() {
      var titleElement = this.getTitleDOMElement();
      var arrowElement = this.getArrowDOMElement();

      /* Reset the padding for the title element */
      titleElement.style.paddingLeft = '5px';

      /* Reset the width of the arrow element and remove the arrow icon */
      arrowElement.style.minWidth = '5px';
      arrowElement.style.width = '5px';
      arrowElement.style.visibility = 'hidden';
    }

    /**
     * When the user hovers over the title and arrow elements, change the styling to
     * display the arrow icon by altering the CSS styling of both elements.
     */
  }, {
    key: "handleOnMouseOver",
    value: function handleOnMouseOver() {
      var titleElement = this.getTitleDOMElement();
      var arrowElement = this.getArrowDOMElement();

      /* Remove the padding from the title element */
      titleElement.style.paddingLeft = '0px';

      /* Increase the width of the arrow element and render the arrow icon */
      arrowElement.style.minWidth = '10px';
      arrowElement.style.width = '10px';
      arrowElement.style.visibility = 'visible';
    }

    /**
     * Handles the height of the dropdown menu items title text content. The height of the text content
     * should not exceed the height of the button container element.
     */
  }, {
    key: "handleTextContentHeight",
    value: function handleTextContentHeight() {
      /* Retrieve the title text span element from the DOM and determine its height and text content */
      var spanElement = this.getTitleDOMElement();
      if (spanElement !== null) {
        var spanDimensions = (0, _domMeasurements.getBoundingClientRect)(spanElement);
        var spanHeight = spanDimensions.height;
        var spanTextContent = spanElement.textContent;
        while (spanTextContent.length > 0 && spanHeight > maximumMenuBarItemButtonHeight) {
          /* Remove the last character in the string and add three dots to the string end to suggest truncation has occurred */
          spanTextContent = "".concat(spanTextContent.substring(0, spanTextContent.length - 1).trim(), "...");

          /* Set the new text content string and determine the new height of the element */
          spanElement.textContent = spanTextContent;
          spanDimensions = (0, _domMeasurements.getBoundingClientRect)(spanElement);
          spanHeight = spanDimensions.height;
          if (spanHeight > maximumMenuBarItemButtonHeight) {
            /* Remove the obsolete three dots at the end of the string for the next iteration of the loop */
            spanTextContent = spanTextContent.substring(0, spanTextContent.length - 3).trim();
          }
        }
      }
    }

    /**
     * Disables auto focus and ensures the dropdown menu item is no longer marked as selected
     * and the container element is no longer visible as a result
     * @param {boolean} deselectedFromKeyboardEvent
     */
  }, {
    key: "setIsDeselected",
    value: function setIsDeselected() {
      var _this2 = this;
      var deselectedFromKeyboardEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        enableAutoFocus: false,
        isSelected: false,
        itemArrowInnerHTML: downArrowInnerHTML
      }, function () {
        /**
         * If a keyboard event was used to deselect the menu item (which in turn hides the container element) then make sure
         * that focus is clearly returned to the dropdown menu item button again.
         */
        if (deselectedFromKeyboardEvent === true) {
          var buttonElement = _this2.getButtonDOMElement();
          buttonElement.focus();
        }
      });
    }

    /**
     * Sets the dropdown menu bar items button as hidden in the UI 
     */
  }, {
    key: "setIsHidden",
    value: function setIsHidden() {
      var _this3 = this;
      /* Ensure state is updated to reflect that the dropdown menu bar items button is now hidden */
      this.setState({
        isHidden: true,
        isSelected: false
      }, function () {
        /* Get the button element from the DOM */
        var buttonElement = _this3.getButtonDOMElement();

        /* Set the button elements opacity so that it is now hidden */
        buttonElement.style.opacity = 0;
      });
    }

    /**
     * Sets the dropdown menu bar items button as visible in the UI
     */
  }, {
    key: "setIsVisible",
    value: function setIsVisible() {
      var _this4 = this;
      /* Ensure state is updated to reflect that the dropdown menu bar items button is now visible */
      this.setState({
        isHidden: false
      }, function () {
        /* Get the button element from the DOM */
        var buttonElement = _this4.getButtonDOMElement();

        /* Set the button elements opacity so that it is now visible */
        buttonElement.style.opacity = 1;
      });
    }
  }, {
    key: "render",
    value: function render() {
      /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
      var _getColourCombination = (0, _colourCombinations.getColourCombination)(this.props.backgroundColour),
        backgroundColour = _getColourCombination.backgroundColour,
        fontColour = _getColourCombination.fontColour;

      /* Set the styling for the dropdown menu bar items button element */
      var buttonCss = "dropdown-menu-bar-button menu-bar-common-transitions background-".concat(backgroundColour, " font-default font-").concat(fontColour);
      if (this.props.addRightSideSpacing === true) {
        buttonCss += ' menu-bar-item-container-right-side-spacing';
      }
      /* Set the styling for the button and arrow elements */
      var buttonTitleCss = 'dropdown-menu-bar-button-title';
      var buttonArrowCss = 'dropdown-menu-bar-button-arrow';
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": "".concat(this.props.dropdownMenuBarItemData.title, " dropdown menu item."),
        className: buttonCss,
        "data-isselected": "".concat(this.state.isSelected),
        id: this.getIdButtonDOMElement(),
        onBlur: this.handleOnMouseLeave,
        onClick: this.handleOnClickDropdownMenuBarItem,
        onFocus: this.handleOnMouseOver,
        onKeyDown: this.handleOnKeyDownButton,
        onMouseLeave: this.handleOnMouseLeave,
        onMouseOver: this.handleOnMouseOver,
        tabIndex: this.state.isHidden === true ? '-1' : '0',
        title: "".concat(this.props.dropdownMenuBarItemData.title)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.handleOnClickButtonSpan,
        className: buttonTitleCss
      }, this.props.dropdownMenuBarItemData.title), /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.handleOnClickButtonSpan,
        className: buttonArrowCss,
        dangerouslySetInnerHTML: {
          __html: "".concat(this.state.itemArrowInnerHTML)
        }
      })), /*#__PURE__*/_react["default"].createElement(_DropdownMenuBarContainer["default"], {
        backgroundColour: this.props.backgroundColour,
        dropdownMenuBarItemsList: this.props.dropdownMenuBarItemData.dropdownMenuBarItemsList,
        enableAutoFocus: this.state.enableAutoFocus,
        id: this.props.id,
        isHidden: !this.state.isSelected,
        left: this.state.left,
        top: this.state.top
      }));
    }
  }]);
}(_react["default"].Component);
DropdownMenuBarItem.propTypes = {
  /** Optional right side spacing (margin) of 8px to be used when separating multiple dropdown menu bar item components. By default this spacing is disabled. */
  addRightSideSpacing: _propTypes["default"].bool,
  /** The background colour for the dropdown menu bar item. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The dropdown menu bar item data used to render the menu bar item and the links in the dropdown menu bar container element. */
  dropdownMenuBarItemData: _propTypes["default"].shape({
    dropdownMenuBarItemsList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      href: _propTypes["default"].string,
      id: _propTypes["default"].string,
      title: _propTypes["default"].string
    })),
    id: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** Sets whether the dropdown menu bar item is visible or hidden. Is set to hidden by default until specified otherwise. */
  isHidden: _propTypes["default"].bool
};
var _default = exports["default"] = DropdownMenuBarItem;