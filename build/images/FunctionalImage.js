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
 * Functional Image component which describes an image which is used to provide a function for the user in a web application.
 * The height and width of the image are fully customisable as is the alt text.
 * On click events are fully enabled and should be customised by the developer.
 */
var FunctionalImage = function FunctionalImage(props) {
  return /*#__PURE__*/React.createElement(_.BaseImage, {
    id: "".concat(props.id, "--functional-image"),
    src: props.src,
    height: props.height,
    width: props.width,
    alt: props.alt,
    onClick: props.onClick
  });
};
FunctionalImage.propTypes = {
  /** The alternate text to be attached to the image and read out by screen readers. */
  alt: _propTypes["default"].string.isRequired,
  /** The height of the image. */
  height: _propTypes["default"].number.isRequired,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string.isRequired,
  /** The custom functionality to be executed when the mouse down on image event is fired. */
  onClick: _propTypes["default"].func.isRequired,
  /** The image data to be displayed. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The width of the image. */
  width: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = FunctionalImage;