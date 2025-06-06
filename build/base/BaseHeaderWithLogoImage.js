"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseHeader = _interopRequireDefault(require("./BaseHeader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

var defaultId = 'default--base-header-tall';

/**
 * Baseline component setting the template for all tall Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default height of the component is 320px.
 */
var BaseHeaderWithLogoImage = function BaseHeaderWithLogoImage(props) {
  return /*#__PURE__*/React.createElement(_BaseHeader["default"], {
    backgroundColour: props.backgroundColour,
    id: props.id !== undefined ? props.id : defaultId,
    customSizeClass: "header-size-tall"
  }, props.children);
};
BaseHeaderWithLogoImage.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The content to be displayed within the header component. */
  children: _propTypes["default"].any,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = BaseHeaderWithLogoImage;