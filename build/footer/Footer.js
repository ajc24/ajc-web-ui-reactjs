"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseFooter = _interopRequireDefault(require("../base/BaseFooter"));
require("./css/footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * A very basic / simple Footer component which is intended to render a single line of information / text content
 * as supporting information to the web page content or the web application itself.
 * 
 * The text will be centrally aligned both vertically and horizontally within the footer and can be rendered in bold if desired.
 */
var Footer = function Footer(props) {
  var containerCss = 'footer-small-container';
  props.isBoldFont === true ? containerCss += ' footer-small-font-bold' : containerCss += ' footer-small-font-not-bold';
  return /*#__PURE__*/_react["default"].createElement(_BaseFooter["default"], {
    backgroundColour: props.backgroundColour,
    id: "".concat(props.id, "--footer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: containerCss
  }, props.isBoldFont === undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children), props.isBoldFont !== undefined && props.isBoldFont === true && /*#__PURE__*/_react["default"].createElement("b", null, props.children), props.isBoldFont !== undefined && props.isBoldFont === false && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children)));
};
Footer.propTypes = {
  /** The background colour for the footer. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The text content to be displayed within the footer. */
  children: _propTypes["default"].string,
  /** The unique identifier for the footer. */
  id: _propTypes["default"].string.isRequired,
  /** If enabled the footers text content will be rendered in bold. This setting is disabled by default. */
  isBoldFont: _propTypes["default"].bool
};
var _default = exports["default"] = Footer;