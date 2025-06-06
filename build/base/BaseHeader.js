"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PageTemplateConfig = _interopRequireDefault(require("../modules/PageTemplateConfig"));
require("../css/common.css");
require("./css/base-header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Baseline component setting the template for all Header components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default height of the component is 165px.
 */
var BaseHeader = function BaseHeader(props) {
  (0, _react.useEffect)(function () {
    /* Setup the default CSS styling for the page which is rendering this component */
    _PageTemplateConfig["default"].setupDocumentBodyCss();
  });

  /* Set the styling for the header element */
  var headerCss = 'header screen-width-root background-white font-default font-black';
  props.customSizeClass !== undefined ? headerCss += " ".concat(props.customSizeClass) : headerCss += ' header-size-small';

  /* Set the styling for the outer content element */
  var outerContentCss = 'header-content-outer screen-width-content-outer';
  props.backgroundColour === 'grey' ? outerContentCss += ' background-grey-body' : outerContentCss += ' background-white';

  /* Set the styling for the inner content element */
  var innerContentCss = 'header-content-inner screen-width-content-inner';
  return /*#__PURE__*/React.createElement("header", {
    role: "banner",
    id: props.id !== undefined ? props.id : 'default--base-header',
    className: headerCss
  }, /*#__PURE__*/React.createElement("div", {
    className: outerContentCss,
    "data-headerbgimage": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: innerContentCss
  }, props.children)));
};
BaseHeader.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The content to be displayed within the header component. */
  children: _propTypes["default"].any,
  /** The custom height class to be set to the header component. */
  customSizeClass: _propTypes["default"].string,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = BaseHeader;