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
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PageTemplateConfig = _interopRequireDefault(require("../modules/PageTemplateConfig"));
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/base-menu-bar.css");
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
var defaultComponentId = 'default-id--menu-bar-base';

/**
 * Baseline component setting the template for all Menu Bar components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the component is 55px.
 */
var MenuBarBase = function MenuBarBase(props) {
  var _useState = (0, _react.useState)(defaultComponentId),
    _useState2 = _slicedToArray(_useState, 2),
    id = _useState2[0],
    setId = _useState2[1];
  (0, _react.useEffect)(function () {
    /* Setup the default CSS styling for the page which is rendering this component */
    _PageTemplateConfig["default"].setupDocumentBodyCss();

    /* Set the ID for the component */
    if (props.id !== undefined) {
      setId("".concat(props.id, "--menu-bar-base"));
    }
  });

  /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
  var _getColourCombination = (0, _colourCombinations.getColourCombination)(props.backgroundColour),
    backgroundColour = _getColourCombination.backgroundColour,
    fontColour = _getColourCombination.fontColour;

  /* Set the styling for the navigation element */
  var navCss = "nav screen-width-root background-white font-default font-".concat(fontColour);

  /* Set the styling for the outer content element */
  var outerContentCss = "menu-bar-content-outer screen-width-content-outer background-".concat(backgroundColour);

  /* Set the styling for the inner content element */
  var innerContentCss = 'menu-bar-content-inner screen-width-content-inner';
  return /*#__PURE__*/_react["default"].createElement("nav", {
    id: id,
    className: navCss
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: outerContentCss
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: innerContentCss
  }, props.children)));
};
MenuBarBase.propTypes = {
  /** The background colour for the menu bar. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'green-2', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The content to be displayed within the menu bar template component. */
  children: _propTypes["default"].any,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = MenuBarBase;