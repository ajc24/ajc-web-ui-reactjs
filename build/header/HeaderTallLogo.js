"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseHeaderTall = _interopRequireDefault(require("../base/BaseHeaderTall"));
var _InformativeImage = _interopRequireDefault(require("../images/InformativeImage"));
require("./css/header.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Tall Header component with logo image. This header component auto-handles screen widths from the most commonly used mobile screen sizes (360x800)
 * to the most commonly used desktop sizes (1920x1080). The height of the header component is 320px.
 * 
 * The logo image is a centrally aligned informative image rendered within the tall header and is set to a maximum of 328px in width and 304px in
 * height to cater for the smallest supported screen size.
 */var HeaderTallLogo = function HeaderTallLogo(props) {
  var containerCss = 'tall-header-logo-container';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseHeaderTall["default"], {
    backgroundColour: props.backgroundColour,
    id: "".concat(props.id, "--header-tall-logo"),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: containerCss,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InformativeImage["default"], {
        alt: props.alt,
        height: "304",
        id: props.id,
        src: props.src,
        width: "328"
      })
    })
  });
};
HeaderTallLogo.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: _propTypes["default"].string.isRequired,
  /** The background colour for the tall header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The unique identifier for the tall header. */
  id: _propTypes["default"].string.isRequired,
  /** The image data to be displayed as the tall header logo. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired
};
var _default = exports["default"] = HeaderTallLogo;