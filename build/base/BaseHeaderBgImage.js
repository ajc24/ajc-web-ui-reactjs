"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseHeader = _interopRequireDefault(require("./BaseHeader"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

var defaultId = 'default--base-header-bg-image';

/**
 * Baseline component setting the template for all Header with background image components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default height of the component is 165px.
 */
var BaseHeaderBgImage = function BaseHeaderBgImage(props) {
  var headerId = props.id !== undefined ? props.id : defaultId;
  (0, _react.useEffect)(function () {
    /* Set the background image to the outer content element */
    var headerOuterContentElement = document.querySelector("header[id=\"".concat(headerId, "\"] > div[data-headerbgimage]"));
    headerOuterContentElement.style.backgroundImage = "url(".concat(props.backgroundImageSrc, ")");
    headerOuterContentElement.dataset.headerbgimage = 'true';
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseHeader["default"], {
    backgroundColour: "white",
    id: headerId,
    children: props.children
  });
};
BaseHeaderBgImage.propTypes = {
  /** The background image data to be displayed. Your background image should be tailored to suit the dimensions of 1920x165. */
  backgroundImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The content to be displayed within the header component. */
  children: _propTypes["default"].any,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = BaseHeaderBgImage;