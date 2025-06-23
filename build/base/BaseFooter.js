"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PageTemplateConfig = _interopRequireDefault(require("../modules/PageTemplateConfig"));
var _colourCombinations = require("../data/colour-combinations");
require("../css/common.css");
require("./css/base-footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Baseline component setting the template for all Footer components to be developed from.
 * This baseline auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * 
 * The minimum height of the component is 55px, expanding to whatever height is suitable for the content within.
 */
var BaseFooter = function BaseFooter(props) {
  (0, _react.useEffect)(function () {
    /* Setup the default CSS styling for the page which is rendering this component */
    _PageTemplateConfig["default"].setupDocumentBodyCss();
  });

  /* Determine the background colour and font colour for the component - setting white background colour with black font text colour as the default */
  var _getColourCombination = (0, _colourCombinations.getColourCombination)(props.backgroundColour),
    backgroundColour = _getColourCombination.backgroundColour,
    fontColour = _getColourCombination.fontColour;

  /* Set the styling for the navigation element */
  var footerCss = "footer-root screen-width-root background-white font-default font-".concat(fontColour);

  /* Set the styling for the outer content element */
  var outerContentCss = "footer-outer screen-width-content-outer background-".concat(backgroundColour);

  /* Set the styling for the inner content element */
  var innerContentCss = 'footer-inner screen-width-content-inner';
  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    id: props.id !== undefined ? props.id : 'default--base-footer',
    className: footerCss
  }, /*#__PURE__*/React.createElement("div", {
    className: outerContentCss
  }, /*#__PURE__*/React.createElement("div", {
    className: innerContentCss
  }, props.children)));
};
BaseFooter.propTypes = {
  /** The background colour for the footer. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['gold', 'green', 'grey', 'navy-and-gold', 'navy-and-white', 'red', 'white']),
  /** The content to be displayed within the footer template component. */
  children: _propTypes["default"].any,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string
};
var _default = exports["default"] = BaseFooter;