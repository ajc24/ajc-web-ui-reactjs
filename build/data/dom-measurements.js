"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply_Integer = exports.getWindowPageYOffset_Integer = exports.getBoundingClientRect = exports.divide_Integer = void 0;
require("core-js/modules/es.parse-int.js");
/**
 * Developed by Anthony Cox in 2025
 */

/**
 * Divides two numbers and parses the answer to an integer value
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
var divide_Integer = exports.divide_Integer = function divide_Integer(number1, number2) {
  return parseInt_Default(number1 / number2);
};

/**
 * Retrieves the dimensions for the specified DOM element and parses all
 * dimension values to an integer
 * @param {HTMLElement} domElement 
 * @returns {{ bottom: number, height: number, left: number, right: number, width: number }}
 */
var getBoundingClientRect = exports.getBoundingClientRect = function getBoundingClientRect(domElement) {
  var dimensions = domElement.getBoundingClientRect();
  return {
    bottom: parseInt_Default(dimensions.bottom),
    height: parseInt_Default(dimensions.height),
    left: parseInt_Default(dimensions.left),
    right: parseInt_Default(dimensions.right),
    width: parseInt_Default(dimensions.width)
  };
};

/**
 * Returns the pageYOffset value set to the current window. This value can be used
 * to determine how far the user has scrolled up or down in the current window.
 * @returns {number}
 */
var getWindowPageYOffset_Integer = exports.getWindowPageYOffset_Integer = function getWindowPageYOffset_Integer() {
  return parseInt_Default(window.pageYOffset);
};

/**
 * Multiplies two numbers and parses the answer to an integer value
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
var multiply_Integer = exports.multiply_Integer = function multiply_Integer(number1, number2) {
  return parseInt_Default(number1 * number2);
};

/**
 * Parses the specified number to an integer using the default / common radix
 * @param {number} number 
 * @returns {number}
 */
var parseInt_Default = function parseInt_Default(number) {
  return parseInt(number, 10);
};