"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApplicationSubtitleText = _interopRequireDefault(require("../text/ApplicationSubtitleText"));
var _ApplicationTitleText = _interopRequireDefault(require("../text/ApplicationTitleText"));
var _BaseHeaderBgImage = _interopRequireDefault(require("../base/BaseHeaderBgImage"));
var _DecorativeImage = _interopRequireDefault(require("../images/DecorativeImage"));
require("./css/header.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Header All component which renders a small header that includes all supported features: it will have a background image, it will have a logo image,
 * it will contain both application title and subtitle text content. Every component rendered within this header will be left aligned.
 *
 * This header component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The height of the header component is 165px.
 * 
 * Since the logo image is supported by the application title text and subtitle text, the image type for the logo is automatically set to that of
 * a decorative image type.
 */var HeaderAll = function HeaderAll(props) {
  var containerCss = 'header-all-container';
  var logoContainerCss = 'header-all-logo-container';
  var textContainerCss = 'header-all-text-container';
  var textSpacingCss = 'header-all-text-spacing';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseHeaderBgImage["default"], {
    backgroundImageSrc: props.backgroundImageSrc,
    id: "".concat(props.id, "--header-all"),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerCss,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        id: "".concat(props.id, "--header-all--logo-container"),
        className: logoContainerCss,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DecorativeImage["default"], {
          height: "133",
          id: props.id,
          src: props.logoImageSrc,
          width: "133"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "".concat(props.id, "--header-all--text-container"),
        className: textContainerCss,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationTitleText["default"], {
          alignment: "left",
          headerId: props.id,
          id: props.id,
          textColour: props.titleTextColour,
          children: props.titleTextContent
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationSubtitleText["default"], {
          alignment: "left",
          applicationTitleTextId: props.id,
          headerId: props.id,
          id: props.id,
          textColour: props.subtitleTextColour,
          children: props.subtitleTextContent
        })]
      })]
    })
  });
};
HeaderAll.propTypes = {
  /** The background image data to be displayed. Your background image should be tailored to suit the dimensions of 1920x165. */
  backgroundImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string.isRequired,
  /** The image data to be displayed as the header logo. */
  logoImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  /** The colour of the subtitle text content to be displayed, either that of black with a white outline or white with a black outline. By default the black colour is pre-selected. */
  subtitleTextColour: _propTypes["default"].oneOf(['black', 'white']),
  /** The text content to be rendered as the subtitle text. */
  subtitleTextContent: _propTypes["default"].string.isRequired,
  /** The colour of the title text content to be displayed, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  titleTextColour: _propTypes["default"].oneOf(['black', 'white']),
  /** The text content to be rendered as the title text. */
  titleTextContent: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = HeaderAll;