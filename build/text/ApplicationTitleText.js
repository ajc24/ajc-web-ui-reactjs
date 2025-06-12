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
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.last-index-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.object.proto.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../css/common.css");
require("./css/text-application-title.css");
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
var maxRem = 3;
var truncateTextHeightCutoff = 95;

/**
 * Application title text component which renders the name / title of the web application to the user. This component is intended for use in both
 * the default and tall Header components but can also be rendered standalone. The title text content can be left aligned or centre aligned.
 * 
 * The application title text content is initially rendered at 3rem in size and will be automatically reduced in size down to a minimum size of 2rem,
 * to fit on smaller screens (ie. mobile phone screen sizes). If the title text still does not fit on-screen after the font size reduction has taken
 * place, it will then be truncated.
 * 
 * The title text can be rendered in black or white colour, each with a white outline or black outline respectively.
 */
var ApplicationTitleText = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Header Title Text component
   * @param {any} props 
   */
  function ApplicationTitleText(props) {
    var _this;
    _classCallCheck(this, ApplicationTitleText);
    _this = _callSuper(this, ApplicationTitleText, [props]);
    _this.state = {
      id: undefined,
      isWrapped: false
    };
    _this.getContainerElementRightmostPosition = _this.getContainerElementRightmostPosition.bind(_this);
    _this.getHeadingElementHeight = _this.getHeadingElementHeight.bind(_this);
    _this.getHeadingElementRightmostPosition = _this.getHeadingElementRightmostPosition.bind(_this);
    _this.getHeadingElementSelector = _this.getHeadingElementSelector.bind(_this);
    _this.getTitleTextContent = _this.getTitleTextContent.bind(_this);
    _this.handleScreenWidth = _this.handleScreenWidth.bind(_this);
    _this.reduceFontSizeAndWrapTextIfRequired = _this.reduceFontSizeAndWrapTextIfRequired.bind(_this);
    _this.resetTitleTextContentToDefault = _this.resetTitleTextContentToDefault.bind(_this);
    _this.setId = _this.setId.bind(_this);
    _this.setIsWrapped = _this.setIsWrapped.bind(_this);
    _this.setTitleTextContent = _this.setTitleTextContent.bind(_this);
    _this.truncateTextByRemovingSpaces = _this.truncateTextByRemovingSpaces.bind(_this);
    return _this;
  }
  _inherits(ApplicationTitleText, _React$Component);
  return _createClass(ApplicationTitleText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Set the ID for the component - follow on from this by handling the size of the component based on the initial screen width */
      this.setId(this.props.id);

      /* Watch over all future window resize events - we will want to alter the text to suit the screen size */
      window.addEventListener('resize', this.handleScreenWidth);
    }

    /**
     * Retrieves the current rightmost position of the heading elements container element
     * @returns {number}
     */
  }, {
    key: "getContainerElementRightmostPosition",
    value: function getContainerElementRightmostPosition() {
      var headingElement = this.getHeadingElementSelector();
      if (headingElement !== null) {
        return headingElement.parentNode.getBoundingClientRect().right;
      }
      return 0;
    }

    /**
     * Determines the height of the heading element as it is currently rendered
     * @returns {number}
     */
  }, {
    key: "getHeadingElementHeight",
    value: function getHeadingElementHeight() {
      var headingElement = this.getHeadingElementSelector();
      if (headingElement !== null) {
        return headingElement.getBoundingClientRect().height;
      }
      return 0;
    }

    /**
     * Determines the rightmost position of the heading element text content as it is currently rendered
     * @returns {number}
     */
  }, {
    key: "getHeadingElementRightmostPosition",
    value: function getHeadingElementRightmostPosition() {
      var headingElement = this.getHeadingElementSelector();
      if (headingElement !== null) {
        return headingElement.getBoundingClientRect().right;
      }
      return 0;
    }

    /**
     * Gets the Element instance for the heading element rendered with this component
     * @returns {Element}
     */
  }, {
    key: "getHeadingElementSelector",
    value: function getHeadingElementSelector() {
      return document.querySelector("div[id=\"".concat(this.state.id, "\"] > h1"));
    }

    /**
     * Gets the text content currently set to the heading element
     * @returns {string}
     */
  }, {
    key: "getTitleTextContent",
    value: function getTitleTextContent() {
      var headingElement = this.getHeadingElementSelector();
      var titleTextContent;
      headingElement !== null ? titleTextContent = headingElement.textContent : titleTextContent = '';
      return titleTextContent;
    }

    /**
     * Handles resize events in the browser. This function will reduce the heading element font size
     * and truncate the text until it fits perfectly within the width of the window
     */
  }, {
    key: "handleScreenWidth",
    value: function handleScreenWidth() {
      /* Ensure we're outputting the full string before assessing for truncation */
      this.resetTitleTextContentToDefault();

      /* Reduce the font size and wrap the text if required */
      this.reduceFontSizeAndWrapTextIfRequired();

      /* Truncate the text (if required) by gradually removing spaces from the text content */
      var isTruncated = this.truncateTextByRemovingSpaces();

      /* If the truncation by cutting off words did not suit the text - truncate by cutting off characters instead */
      if (isTruncated === false) {
        this.truncateTextByRemovingCharacters();
      }
    }

    /**
     * Reduces the font size in order for the title text to fit on smaller screens.
     * If the text still does not fit on-screen after the font size is reduced to a minimum value then wrap the text.
     */
  }, {
    key: "reduceFontSizeAndWrapTextIfRequired",
    value: function reduceFontSizeAndWrapTextIfRequired() {
      /* Determine the positions of the text and the current container element width */
      var h1RightPos = this.getHeadingElementRightmostPosition();
      var containerRightPos = this.getContainerElementRightmostPosition();
      var headingElement = this.getHeadingElementSelector();

      /* Steadily reduce the font size until the text fits on-screen - do not drop below 2rem font size */
      var rem = maxRem;
      while (headingElement !== null && rem >= 2 && containerRightPos < h1RightPos) {
        headingElement.style.fontSize = "".concat(rem, "rem");
        h1RightPos = this.getHeadingElementRightmostPosition();

        /* Reduce the rem value by 0.1 and ensure the value remains at one decimal place at the most after editing (ie. 2.9, 2.8, 2.7 etc.) */
        rem -= 0.1;
        rem = parseFloat(rem.toFixed(1));
      }
      /* If 2rem font size was not enough for the title text to fit on-screen - wrap the text */
      containerRightPos = this.getContainerElementRightmostPosition();
      if (headingElement !== null && containerRightPos < h1RightPos) {
        /* Set the text to wrap and center align */
        headingElement.style.textAlign = 'center';
        headingElement.style.whiteSpace = 'normal';
        this.setIsWrapped(true);
      }
    }

    /**
     * Resets the title text contents value and font size to their default values
     */
  }, {
    key: "resetTitleTextContentToDefault",
    value: function resetTitleTextContentToDefault() {
      var headingElement = this.getHeadingElementSelector();
      if (headingElement !== null) {
        /* Restore the full text content to the heading element */
        headingElement.textContent = headingElement.ariaLabel;

        /* Set the text to its maximum potential size and reset the whiteSpace CSS property so that there is no text wrap */
        headingElement.style.fontSize = "".concat(maxRem, "rem");
        headingElement.style.whiteSpace = 'nowrap';
        this.setIsWrapped(false);
      }
    }

    /**
     * Sets the ID for the component
     * @param {string} newId 
     */
  }, {
    key: "setId",
    value: function setId(newId) {
      this.setState({
        id: "".concat(newId, "--header-title-text")
      }, this.handleScreenWidth);
    }

    /**
     * Sets whether the element text is wrapped or not
     * @param {boolean} newIsWrapped 
     */
  }, {
    key: "setIsWrapped",
    value: function setIsWrapped(newIsWrapped) {
      this.setState({
        isWrapped: newIsWrapped
      });
    }

    /**
     * Sets the heading element title text content to the specified text content
     * @param {string} newTitleTextContent
     * @returns {boolean}
     */
  }, {
    key: "setTitleTextContent",
    value: function setTitleTextContent(newTitleTextContent) {
      var setNewTitleTextContent = false;
      var headingElement = this.getHeadingElementSelector();
      if (headingElement !== null) {
        headingElement.textContent = newTitleTextContent;
        setNewTitleTextContent = true;
      }
      return setNewTitleTextContent;
    }

    /**
     * Truncates the heading element text content by gradually cutting off each character one by one
     */
  }, {
    key: "truncateTextByRemovingCharacters",
    value: function truncateTextByRemovingCharacters() {
      var h1RightPos = this.getHeadingElementRightmostPosition();
      var containerRightPos = this.getContainerElementRightmostPosition();
      var titleTextString = this.getTitleTextContent();
      while (containerRightPos < h1RightPos) {
        /* Truncate the text - in this case the word wrap has gone beyond two lines */
        titleTextString = "".concat(titleTextString.substring(0, titleTextString.length - 1).trim(), "...");
        this.setTitleTextContent(titleTextString);

        /* Get the new right position of the heading element */
        h1RightPos = this.getHeadingElementRightmostPosition();
        if (containerRightPos < h1RightPos) {
          /* Remove the obsolete three dots at the end of the string for the next character truncation */
          titleTextString = titleTextString.substring(0, titleTextString.length - 3).trim();
          this.setTitleTextContent(titleTextString);
        }
      }
    }

    /**
     * Attempts to truncate the heading element text content by gradually cutting off words in the text
     * @returns {boolean}
     */
  }, {
    key: "truncateTextByRemovingSpaces",
    value: function truncateTextByRemovingSpaces() {
      var currentHeadingHeight = this.getHeadingElementHeight();
      var titleTextString = this.getTitleTextContent();
      var truncatedString = false;
      if (currentHeadingHeight > truncateTextHeightCutoff) {
        /* Truncate the text - in this case the word wrap has gone beyond two lines */
        while (truncatedString === false && titleTextString.indexOf(' ') >= 0) {
          /* We have a title text entry with spaces between the words - cut off each word until we fit within the boundaries */
          titleTextString = "".concat(titleTextString.substring(0, titleTextString.lastIndexOf(' ')).trim(), "...");
          this.setTitleTextContent(titleTextString);

          /* Get the new height of the element */
          currentHeadingHeight = this.getHeadingElementHeight();
          if (currentHeadingHeight < truncateTextHeightCutoff) {
            /* We have now truncated the title enough for it to fit within the boundaries again */
            truncatedString = true;
          }
        }
      }
      if (truncatedString === false && titleTextString.lastIndexOf('...') === titleTextString.length - 3) {
        /* Remove the obsolete three dots at the end of the string since the truncation by removing spaces was not enough for the text to fit the screen */
        titleTextString = titleTextString.substring(0, titleTextString.length - 3).trim();
        this.setTitleTextContent(titleTextString);
      }
      return truncatedString;
    }
  }, {
    key: "render",
    value: function render() {
      /* Set the styling for the container element */
      var containerCss = 'background-transparent title-text-container';
      if (this.props.parentHeaderId === undefined) {
        containerCss += ' common-component-width';
      }
      this.props.alignment === 'centre' ? containerCss += ' title-text-alignment-centre' : containerCss += ' title-text-alignment-left';

      /* Set the styling for the title text font */
      var textOutputCss = 'title-text-font-default';
      this.props.textColour === 'white' ? textOutputCss += ' title-text-font-white' : textOutputCss += ' title-text-font-black';
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.state.id),
        className: containerCss,
        "data-wrap": "".concat(this.state.isWrapped)
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        className: textOutputCss,
        "aria-label": "".concat(this.props.children),
        title: "".concat(this.props.children)
      }, this.props.children));
    }
  }]);
}(_react["default"].Component);
ApplicationTitleText.propTypes = {
  /* The alignment of the title text content. The text by default will be left aligned until wrapped to a new line but can be centre aligned at all times. */
  alignment: _propTypes["default"].oneOf(['centre', 'left']),
  /** The content to be displayed as the title text. */
  children: _propTypes["default"].string,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The unique identifier of the Header component in which this title text component is rendered. */
  parentHeaderId: _propTypes["default"].string,
  /** The colour of the text to be displayed, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  textColour: _propTypes["default"].oneOf(['black', 'white'])
};
var _default = exports["default"] = ApplicationTitleText;