"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.string.trim.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PageTemplateConfig = _interopRequireDefault(require("../modules/PageTemplateConfig"));
require("../css/common.css");
require("./css/base-header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * Developed by Anthony Cox in 2025
 */
var defaultComponentId = 'default-id--header-base';
var defaultComponentSize = 'default';

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component is 160px. The tall height of the component is 320px.
 */
var HeaderBase = function HeaderBase(props) {
  var _useState = (0, _react.useState)(defaultComponentId),
    _useState2 = _slicedToArray(_useState, 2),
    id = _useState2[0],
    setId = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultComponentSize),
    _useState4 = _slicedToArray(_useState3, 2),
    size = _useState4[0],
    setSize = _useState4[1];
  var outerContentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    /* Setup the default CSS styling for the page which is rendering this component */
    _PageTemplateConfig["default"].setupDocumentBodyCss();

    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId("".concat(props.id, "--header-base"));
    }
    /* Set the size for the component */
    if (props.size !== undefined) {
      if (props.size === 'default' || props.size === 'small' || props.size === 'tall') {
        /* Set the declared supported size for this component */
        setSize(props.size);
      } else {
        /* An invalid size was specified - set to default size */
        setSize('default');
      }
    }
    /* Set the background image to the outer content element */
    if (props.backgroundImageSrc !== undefined) {
      outerContentRef.current.style.backgroundImage = "url(".concat(props.backgroundImageSrc, ")");
      outerContentRef.current.dataset.bgimage = 'true';
    }
  });

  /* Determine if a top border has been rendered */
  var topBorderRendered;
  props.topBorder === 'gold' || props.topBorder === 'green' || props.topBorder === 'green-2' || props.topBorder === 'grey' || props.topBorder === 'navy' || props.topBorder === 'red' ? topBorderRendered = true : topBorderRendered = false;

  /* Set the styling for the header element */
  var headerCss = 'header screen-width-root background-white font-default font-black';

  /* Set the styling for the outer content element */
  var outerContentCss = 'header-content-outer screen-width-content-outer';
  if (props.backgroundImageSrc === undefined) {
    /* Set the background colour for the header only if a background image is not defined */
    props.backgroundColour === 'grey' ? outerContentCss += ' background-grey' : outerContentCss += ' background-white';
  }
  /* Set the top border for the outer content element if required */
  topBorderRendered === true ? outerContentCss += " header-border-top-".concat(props.topBorder) : outerContentCss += ''.trim();

  /* Set the styling for the inner content element */
  var innerContentCss = 'header-content-inner screen-width-content-inner';
  if (topBorderRendered === true) {
    size === 'tall' ? innerContentCss += ' header-tall-height-with-border' : innerContentCss += ' header-small-height-with-border';
  } else {
    size === 'tall' ? innerContentCss += ' header-tall-height-no-border' : innerContentCss += ' header-small-height-no-border';
  }
  return /*#__PURE__*/_react["default"].createElement("header", {
    role: "banner",
    id: id,
    className: headerCss
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: outerContentCss,
    ref: outerContentRef,
    "data-bgimage": "false"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: innerContentCss
  }, props.children)));
};
HeaderBase.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The background image data to be displayed. Depending on your choice of header size, your background image should suit the dimensions of 1920x160 (small) or 1920x320 (tall). */
  backgroundImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  /** The content to be displayed within the header component. */
  children: _propTypes["default"].any,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string,
  /** The size of the header ranging from default / small (160px) to tall (320px). */
  size: _propTypes["default"].oneOf(['default', 'small', 'tall']),
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: _propTypes["default"].oneOf(['off', 'gold', 'green', 'green-2', 'grey', 'navy', 'red'])
};
var _default = exports["default"] = HeaderBase;