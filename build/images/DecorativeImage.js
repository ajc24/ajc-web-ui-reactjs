"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ = require("../");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Decorative Image component which describes an image which is used solely for decoration in a web application.
 * The height and width of the image are fully customisable. You can not define alt text for this image.
 * On click events are fully disabled.
 */
var DecorativeImage = function DecorativeImage(props) {
  return /*#__PURE__*/React.createElement(_.BaseImage, {
    id: "".concat(props.id, "--decorative-image"),
    src: props.src,
    height: props.height,
    width: props.width,
    alt: "",
    onClick: undefined
  });
};
DecorativeImage.propTypes = {
  /** The height of the image. */
  height: _propTypes["default"].number,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The image data to be displayed. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The width of the image. */
  width: _propTypes["default"].number
};
var _default = exports["default"] = DecorativeImage;