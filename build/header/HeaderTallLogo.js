"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseHeaderTall = _interopRequireDefault(require("../base/BaseHeaderTall"));
var _DecorativeImage = _interopRequireDefault(require("../images/DecorativeImage"));
require("./css/header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

var HeaderTallLogo = function HeaderTallLogo(props) {
  var containerCss = 'tall-header-logo-container';
  return /*#__PURE__*/React.createElement(_BaseHeaderTall["default"], {
    backgroundColour: props.backgroundColour,
    id: props.id
  }, /*#__PURE__*/React.createElement("div", {
    className: containerCss
  }, /*#__PURE__*/React.createElement(_DecorativeImage["default"], {
    height: "304",
    id: props.id,
    src: props.src,
    width: "328"
  })));
};
HeaderTallLogo.propTypes = {
  /** The background colour for the tall header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The unique identifier for the tall header. */
  id: _propTypes["default"].string,
  /** The image data to be displayed as the tall header logo. */
  src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired
};
var _default = exports["default"] = HeaderTallLogo;