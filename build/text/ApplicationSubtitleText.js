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
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../css/common.css");
require("./css/text-application-subtitle.css");
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
 * Header subtitle text component which renders the main application subtitle text to the user. This component is designed to work alongside the Header Title Text
 * component, rendering beneath and supporting the title text content in the header of the application. The subtitle text will be automatically hidden from view
 * in the event that the title text component has been wrapped and / or truncated to fit on smaller screens (ie. mobile phone screen sizes). This text can be rendered
 * in black or white colour, each with a white outline or black outline respectively.
 */
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
var ApplicationSubtitleText = /*#__PURE__*/function (_React$Component) {
  /**
   * Initialise the Header Subtitle Text component
   * @param {any} props 
   */
  function ApplicationSubtitleText(props) {
    var _this;
    _classCallCheck(this, ApplicationSubtitleText);
    _this = _callSuper(this, ApplicationSubtitleText, [props]);
    _this.state = {
      headerTitleTextId: undefined,
      isHidden: false,
      isResizing: false,
      paragraphRightPos: 0
    };
    _this.handleVisibility = _this.handleVisibility.bind(_this);
    _this.setHeaderTitleTextId = _this.setHeaderTitleTextId.bind(_this);
    _this.setIsHidden = _this.setIsHidden.bind(_this);
    _this.setIsResizingEnd = _this.setIsResizingEnd.bind(_this);
    _this.setIsResizingStart = _this.setIsResizingStart.bind(_this);
    _this.setRightmostSubtitleTextPosition = _this.setRightmostSubtitleTextPosition.bind(_this);

    /* Create the references for this component */
    _this.subtitleTextRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  _inherits(ApplicationSubtitleText, _React$Component);
  return _createClass(ApplicationSubtitleText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Sets the header title text id which is displayed alongside the subtitle text - following that handle the current visibility state of this component */
      this.setHeaderTitleTextId(this.props.headerTitleTextId);

      /* Watch over all future window resize events - we will want to alter the visibility of the text to suit whether the title text is wrapped or not */
      window.addEventListener('resize', this.setRightmostSubtitleTextPosition);
    }

    /**
     * Handles the visibility of the subtitle text component. When the header title text component
     * is marked as having its text wrapped, this component will be set to hidden. Also if the
     * subtitle text element itself extends beyond the end of the screen, it will also be set to hidden.
     * In all other cases, the subtitle text will be marked as visible.
     */
  }, {
    key: "handleVisibility",
    value: function handleVisibility() {
      var isHidden = false;
      var subtitleContainerElement = document.querySelector("[id=\"".concat(this.props.id, "--header-subtitle-text\"]"));
      if (subtitleContainerElement !== null) {
        /* Check 1: Does the paragraph element exceed the width of the container */
        var paragraphRightPos = this.state.paragraphRightPos;
        var containerRightPos = subtitleContainerElement.getBoundingClientRect().right;
        if (paragraphRightPos > 0 && containerRightPos > 0) {
          if (paragraphRightPos > containerRightPos) {
            /* The subtitle will exceed the screen limits - hide the subtitle component */
            isHidden = true;
          }
        }
        /* Check 2: Does the title text element have text that has wrapped */
        if (isHidden === false) {
          /* Determine whether text wrapping has occurred in the title text element */
          var headerTitleTextElement = document.querySelector("[id=\"".concat(this.state.headerTitleTextId, "--header-title-text\"]"));
          var dataWrap = 'false';
          if (headerTitleTextElement !== null) {
            dataWrap = headerTitleTextElement.dataset.wrap;
          }
          if (dataWrap === 'true') {
            /* The title text has wrapped text - hide the subtitle component */
            isHidden = true;
          }
        }
      }
      /* Update component state to reflect whether this component is visible or hidden */
      this.setIsHidden(isHidden);
    }

    /**
     * Sets the id for the header title text component linked to this subtitle text.
     * Follows this action by setting the rightmost position of the subtitle text element.
     * @param {string} newHeaderTitleTextId
     */
  }, {
    key: "setHeaderTitleTextId",
    value: function setHeaderTitleTextId(newHeaderTitleTextId) {
      this.setState({
        headerTitleTextId: newHeaderTitleTextId
      }, this.setRightmostSubtitleTextPosition);
    }

    /**
     * Sets a new component value for whether the subtitle text is hidden or not. Only
     * alters this component state if required to. Follows this action by marking the resizing
     * process as completed.
     * @param {boolean} newisHidden
     */
  }, {
    key: "setIsHidden",
    value: function setIsHidden(newisHidden) {
      if (newisHidden !== this.state.isHidden) {
        /* Only alter state in this case if state has changed */
        this.setState({
          isHidden: newisHidden
        }, this.setIsResizingEnd);
      } else {
        /* Mark the resizing process as completed */
        this.setIsResizingEnd();
      }
    }

    /**
     * Marks the resizing process as completed.
     */
  }, {
    key: "setIsResizingEnd",
    value: function setIsResizingEnd() {
      this.setState({
        isResizing: false
      });
    }

    /**
     * Marks the resizing process as starting.
     */
  }, {
    key: "setIsResizingStart",
    value: function setIsResizingStart() {
      /* Only start the resizing process if all previous resizing processes are completed */
      this.setState({
        isResizing: true
      }, this.handleVisibility);
    }

    /**
     * Sets the rightmost position of the subtitle text element. This is only changed if another resizing
     * process is not already active in the browser. Follows this action by marking the resizing process as active.
     */
  }, {
    key: "setRightmostSubtitleTextPosition",
    value: function setRightmostSubtitleTextPosition() {
      if (this.subtitleTextRef.current !== null && this.state.isResizing === false) {
        if (this.state.isHidden === false) {
          /* The subtitle text element is visible - set the rightmost position of the element and then start resizing process */
          this.setState({
            paragraphRightPos: this.subtitleTextRef.current.getBoundingClientRect().right
          }, this.setIsResizingStart);
        } else {
          /* The subtitle text is hidden so we can not set a new rightmost position - go straight to the resizing process */
          this.setIsResizingStart();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* Set the styling for the container element */
      var containerCss = 'background-transparent subtitle-text-container';
      if (this.props.parentHeaderId === undefined) {
        containerCss += ' common-component-width';
      }
      this.props.alignment === 'centre' ? containerCss += ' subtitle-text-alignment-centre' : containerCss += ' subtitle-text-alignment-left';

      /* Set the styling for the subtitle text font */
      var textOutputCss = 'subtitle-text-font-default';
      this.props.textColour === 'white' ? textOutputCss += ' font-white' : textOutputCss += ' font-black';
      this.state.isHidden === true ? textOutputCss += ' hidden' : textOutputCss += ''.trim();
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "".concat(this.props.id, "--header-subtitle-text"),
        className: containerCss
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: textOutputCss,
        ref: this.subtitleTextRef,
        "aria-hidden": this.state.isHidden
      }, this.props.children));
    }
  }]);
}(_react["default"].Component);
ApplicationSubtitleText.propTypes = {
  /* The alignment of the subtitle text content. The text by default will be left aligned but can be centre aligned at all times. */
  alignment: _propTypes["default"].oneOf(['centre', 'left']),
  /** The content to be displayed as the subtitle text. */
  children: _propTypes["default"].string,
  /** The unique identifier of the HeaderTitleText component alongside which this subtitle text component is rendered. */
  headerTitleTextId: _propTypes["default"].string,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The unique identifier of the Header component in which this subtitle text component is rendered. */
  parentHeaderId: _propTypes["default"].string,
  /** The colour of the text to be displayed, either in a black or white colour. By default the black colour is pre-selected. */
  textColour: _propTypes["default"].oneOf(['black', 'white'])
};
var _default = exports["default"] = ApplicationSubtitleText;