"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ = require("../../");
require("./css/header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Header component for use in the header section of a web application. This Header auto-handles screen widths
 * from the most commonly used mobile screen sizes (360x800) to the most commonly used desktop sizes (1920x1080).
 * The default and small heights of the component is 160px. The tall height of the component is 320px.
 * 
 * The Header can be rendered with custom developer content or can be rendered with any combination of a logo image,
 * header title text content and / or header subtitle text content.
 * 
 * If you choose to render any of the logo image, header title text content or header subtitle text content components
 * then any custom content you provide for display within the Header will not be rendered.
 */
var Header = function Header(props) {
  /* Set all additional CSS styling for this component */
  var headerTitleSubtitleTextContainerCss = 'header-title-subtitle-text-container';
  if (props.size === undefined || props.size === 'default' || props.size === 'small') {
    props.logoSrc === undefined ? headerTitleSubtitleTextContainerCss += ' header-title-subtitle-text-container-width-no-logo' : headerTitleSubtitleTextContainerCss += ' header-title-subtitle-text-container-width-with-logo';
  }
  var smallHeaderAllFeaturesCss = 'header-small-logo-title-subtitle-text-container';
  return /*#__PURE__*/_react["default"].createElement(_.HeaderBase, {
    backgroundColour: props.backgroundColour,
    backgroundImageSrc: props.backgroundImageSrc,
    id: props.id,
    size: props.size || 'default',
    topBorder: props.topBorder || 'off'
  }, /* Render a Header which allows for custom content to be displayed */
  props.logoSrc === undefined && props.titleTextContent === undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children), /* Render a Header which only contains a logo image - no title text content or subtitle text content rendered */
  props.logoSrc !== undefined && props.titleTextContent === undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.HeaderLogo, {
    alignment: "centre",
    alt: props.logoAlt,
    id: props.id,
    imageType: "informative",
    logoType: props.logoType,
    parentHeaderId: "".concat(props.id, "--header-base"),
    src: props.logoSrc
  })), /* Render a Header which only contains title text content - no logo image or subtitle text content rendered */
  props.logoSrc === undefined && props.titleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
    className: headerTitleSubtitleTextContainerCss
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderTitleText, {
    alignment: "centre",
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.titleTextColour || 'default'
  }, props.titleTextContent), props.subtitleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.HeaderSubtitleText, {
    alignment: "centre",
    headerTitleTextId: props.id,
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.subtitleTextColour || 'default'
  }, props.subtitleTextContent))), /* Render a Small Header which contains both a logo image and title text content and optionally subtitle text content */
  (props.size === undefined || props.size === 'default' || props.size === 'small') && props.logoSrc !== undefined && props.titleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
    className: smallHeaderAllFeaturesCss
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderLogo, {
    alignment: "left",
    id: props.id,
    logoType: "square",
    parentHeaderId: "".concat(props.id, "--header-base"),
    src: props.logoSrc
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: headerTitleSubtitleTextContainerCss
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderTitleText, {
    alignment: "left",
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.titleTextColour || 'default'
  }, props.titleTextContent), props.subtitleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.HeaderSubtitleText, {
    alignment: "left",
    headerTitleTextId: props.id,
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.subtitleTextColour || 'default'
  }, props.subtitleTextContent)))), /* Render a Tall Header which contains both a logo image and title text content and optionally subtitle text content */
  props.size === 'tall' && props.logoSrc !== undefined && props.titleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
    className: headerTitleSubtitleTextContainerCss
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderLogo, {
    alignment: "centre",
    id: props.id,
    logoType: props.logoType,
    parentHeaderId: "".concat(props.id, "--header-base"),
    src: props.logoSrc
  }), /*#__PURE__*/_react["default"].createElement(_.HeaderTitleText, {
    alignment: "centre",
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.titleTextColour || 'default'
  }, props.titleTextContent), props.subtitleTextContent !== undefined && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.HeaderSubtitleText, {
    alignment: "centre",
    headerTitleTextId: props.id,
    id: props.id,
    parentHeaderId: "".concat(props.id, "--header-base"),
    textColour: props.subtitleTextColour || 'default'
  }, props.subtitleTextContent))));
};
Header.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: _propTypes["default"].oneOf(['white', 'grey']),
  /** The background image data to be displayed. Depending on your choice of header size, your background image should suit the dimensions of 1920x160 (small) or 1920x320 (tall). */
  backgroundImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  /**
   * The custom content to be displayed within the header component.
   * This content will only be displayed if you have not chosen to render any of the following: an image logo, title text or subtitle text.
   */
  children: _propTypes["default"].any,
  /** The unique identifier for the header. */
  id: _propTypes["default"].string,
  /** The alternate text to be attached to the logo image and read out by screen readers. This is only applied if you render a logo without any title text. */
  logoAlt: _propTypes["default"].string,
  /** The image data to be displayed as the header logo. */
  logoSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  /**
   * The type of logo to be displayed in the Header component.
   * 
   * If the small Header type is rendered without any title or subtitle text content inside of it, this logo image can be rendered in both square and rectangular forms.
   * By default, a square logo type is chosen. You can override this setting by choosing the "rectangle" logo type. When a rectangular logo is rendered, the maximum width
   * it will be rendered at is 312px to suit rendering on smaller screens.
   * 
   * If the small Header type is rendered with title and / or subtitle text included, this logo will default to a square image regardless of setting, and will be rendered
   * to the left of the text components.
   * 
   * If the tall Header type is rendered then the logo will appear above any title and / or subtitle text components that are rendered.
   */
  logoType: _propTypes["default"].oneOf(['rectangle', 'square']),
  /** The size of the header ranging from default / small (160px) to tall (320px). */
  size: _propTypes["default"].oneOf(['default', 'small', 'tall']),
  /** The colour of the subtitle text content, either in a black or white colour. By default the black colour is pre-selected. */
  subtitleTextColour: _propTypes["default"].oneOf(['black', 'default', 'white']),
  /** The text content to be displayed as the subtitle text. */
  subtitleTextContent: _propTypes["default"].string,
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: _propTypes["default"].oneOf(['off', 'gold', 'green', 'green-2', 'grey', 'navy', 'red']),
  /** The colour of the title text content, either that of black with a white outline or white with a black outline. By default black with a while outline is pre-selected. */
  titleTextColour: _propTypes["default"].oneOf(['black', 'default', 'white']),
  /** The text content to be displayed as the title text. */
  titleTextContent: _propTypes["default"].string
};
var _default = exports["default"] = Header;