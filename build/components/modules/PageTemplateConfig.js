"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.error.to-string.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
var _storybook = require("../data/storybook");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Developed by Anthony Cox in 2025
 */
/* Commonly used CSS classes */
var bodyDefaultCss = 'body-default';

/**
 * Functionality designed to work with the page template components (headers, menu bars, body content, footers)
 */
var PageTemplateConfig = exports["default"] = /*#__PURE__*/function () {
  function PageTemplateConfig() {
    _classCallCheck(this, PageTemplateConfig);
  }
  return _createClass(PageTemplateConfig, null, [{
    key: "setupDocumentBodyCss",
    value:
    /**
     * Setup and configure the current web page to ensure the default CSS styling is set to it.
     * This also handles the styling of pages which are deployed on Storybook
     */
    function setupDocumentBodyCss() {
      /* If we are rendering on Storybook, remove the Storybook classes which will affect the width of the component */
      for (var index = 0; index < _storybook.storybookCssClassList.length; index += 1) {
        if (document.body.classList.contains(_storybook.storybookCssClassList[index]) === true) {
          document.body.classList.remove(_storybook.storybookCssClassList[index]);
        }
      }
      /* Ensure that the <body> element stretches to 100% of the width of the screen, that the X axis scrollbar is hidden and Y axis scrollbar is always displayed */
      if (document.body.classList.contains(bodyDefaultCss) === false) {
        document.body.classList.add(bodyDefaultCss);
        document.activeElement.blur();
      }
    }
  }]);
}();