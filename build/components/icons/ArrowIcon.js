"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.array.concat.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./css/icon-arrow.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/* Set the various sizes for the arrow icon */
var sizes = {
  '1': 'arrow-icon-size-one',
  '2': 'arrow-icon-size-two'
};

/**
 * Arrow icon component is a purely presentational component which can be rendered as an arrow icon
 * anywhere in the web application. There are four variations of this icon: up arrow icon, down arrow icon,
 * left arrow icon, right arrow icon.
 * 
 * This icon can also be rendered in a range of different colours and sizes.
 */
var ArrowIcon = function ArrowIcon(props) {
  var direction;
  props.direction === 'down' || props.direction === 'left' || props.direction === 'right' || props.direction === 'up' ? direction = props.direction : direction = 'right';

  /* Set the styling for the arrow icon */
  var iconCss = 'arrow-icon';

  /* Set the size for the arrow icon */
  if (props.size !== undefined && sizes["".concat(props.size)] !== undefined) {
    var targetSize = sizes["".concat(props.size)];
    iconCss += " ".concat(targetSize);
  } else {
    /* By default - choose the smallest size */
    iconCss += ' arrow-icon-size-one';
  }

  /* Set the colour for the arrow icon - by default use black colour */
  props.colour !== undefined && (props.colour === 'black' || props.colour === 'gold' || props.colour === 'white') ? iconCss += " arrow-icon-border-".concat(props.colour) : iconCss += ' arrow-icon-border-black';

  /* Set the direction for the arrow icon - by default use a right facing arrow icon */
  iconCss += " arrow-icon-direction-".concat(direction);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "".concat(props.id, "--arrow-icon-").concat(direction),
    className: iconCss,
    "aria-hidden": "true"
  }));
};
ArrowIcon.propTypes = {
  /** The colour of the arrow icon component. The icon is displayed in black by default. */
  colour: _propTypes["default"].oneOf(['black', 'default', 'gold', 'white']),
  /** The direction of the arrow icon. By default the component is rendered as a right arrow icon. */
  direction: _propTypes["default"].oneOf(['default', 'down', 'left', 'right', 'up']),
  /** The unique identifier for the arrow icon. */
  id: _propTypes["default"].string.isRequired,
  /** The size of the icon, each additional number increments the size of the icon by a further 5px. By default the smallest icon is pre-selected. */
  size: _propTypes["default"].oneOf(['1', '2'])
};
var _default = exports["default"] = ArrowIcon;