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
require("./css/main.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Main component in which all of the main web application page content can be rendered.
 * This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * 
 * The minimum height of the component is 370px which suits rendering on mobile devices. This minimum height will expand to fit larger sizes and render
 * more content as and when required.
 */var Main = function Main(props) {
  (0, _react.useEffect)(function () {
    /* Setup the default CSS styling for the page which is rendering this component */
    _PageTemplateConfig["default"].setupDocumentBodyCss();

    /* Set the title for the current web page only if it has not already been set */
    document.title = props.title;
  });

  /* Set the styling for the main element */
  var mainCss = 'main-root screen-width-root background-white font-default font-black';

  /* Set the styling for the outer content element */
  var outerContentCss = 'main-outer screen-width-content-outer';
  props.backgroundColour === 'grey' ? outerContentCss += ' background-grey-body' : outerContentCss += ' background-white';

  /* Set the styling for the inner content element */
  var innerContentCss = 'main-inner screen-width-content-inner';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
    id: props.id !== undefined ? props.id : 'default--main',
    className: mainCss,
    "aria-label": props.title,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: outerContentCss,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: innerContentCss,
        children: props.children
      })
    })
  });
};
Main.propTypes = {
  /** The background colour for the main content area. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The content to be displayed within the main content area. */
  children: _propTypes["default"].any,
  /** The unique identifier for this component. */
  id: _propTypes["default"].string,
  /** The title of the current web page being displayed. This title will be rendered in the browser tab. */
  title: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = Main;