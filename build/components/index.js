"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HeaderTypeA", {
  enumerable: true,
  get: function get() {
    return _HeaderTypeA["default"];
  }
});
Object.defineProperty(exports, "MainContent", {
  enumerable: true,
  get: function get() {
    return _MainContent["default"];
  }
});
Object.defineProperty(exports, "MenuBarTypeA", {
  enumerable: true,
  get: function get() {
    return _MenuBarTypeA["default"];
  }
});
var _HeaderTypeA = _interopRequireDefault(require("./header/HeaderTypeA"));
var _MainContent = _interopRequireDefault(require("./main/MainContent"));
var _MenuBarTypeA = _interopRequireDefault(require("./menu-bar/MenuBarTypeA"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }