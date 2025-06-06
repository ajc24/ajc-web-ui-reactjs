"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
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
var BaseHeaderTall = function BaseHeaderTall(props) {
  (0, _react.useEffect)(function () {
    var currentId = defaultId;
    if (props.id !== undefined) {
      currentId = props.id;
    }
    /* Set the header element to a tall height */
    var header = document.querySelector("header[id=\"".concat(currentId, "\"]"));
    header.style.height = '320px';

    /* Set the headers inner content element to a tall height, taking into account the 8px padding on the top and bottom */
    var headerContentOuter = document.querySelector("header[id=\"".concat(currentId, "\"] > div > div"));
    headerContentOuter.style.height = '304px';
  });
  return /*#__PURE__*/React.createElement(_BaseHeader["default"], {
    backgroundColour: props.backgroundColour,
    id: props.id !== undefined ? props.id : defaultId
  }, props.children);
};
BaseHeaderTall.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The content to be displayed within the header component. */
  children: _propTypes["default"].any,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = BaseHeaderTall;