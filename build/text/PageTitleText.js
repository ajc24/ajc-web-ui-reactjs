"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.string.trim.js");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./css/text-page-title.css");
require("../css/common.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Page title text component which renders individual page titles of the web application to the user. This component is intended for use with the
 * Main component but can also be rendered standalone. The page title text content can be left aligned or centre aligned.
 */
var PageTitleText = function PageTitleText(props) {
  /* Set the styling for the container element */
  var containerCss = 'page-title-text font-black';
  props.alignment === 'centre' ? containerCss += ' page-title-text-alignment-centre' : containerCss += ' page-title-text-alignment-left';
  props.underline === true ? containerCss += ' page-title-text-underline' : containerCss += ''.trim();
  return /*#__PURE__*/React.createElement("h2", {
    "aria-label": props.children,
    className: containerCss,
    id: "".concat(props.id, "--page-title-text")
  }, props.children);
};
PageTitleText.propTypes = {
  /* The alignment of the page title text content. The text by default will be left aligned but can be centre aligned at all times. */
  alignment: _propTypes["default"].oneOf(['centre', 'left']),
  /** The content to be displayed as the pages title text. */
  children: _propTypes["default"].string,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** Switch to enable or disable underlining the page title text content. By default the page title text content is not underlined. */
  underline: _propTypes["default"].bool
};
var _default = exports["default"] = PageTitleText;