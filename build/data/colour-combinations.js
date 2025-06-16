"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColourCombination = void 0;
/**
 * Developed by Anthony Cox in 2025
 */

/* Colour combinations data */
var colourCombinations = {
  gold: {
    backgroundColour: 'gold',
    fontColour: 'black'
  },
  green: {
    backgroundColour: 'green',
    fontColour: 'white'
  },
  grey: {
    backgroundColour: 'grey',
    fontColour: 'white'
  },
  'navy-and-gold': {
    backgroundColour: 'navy',
    fontColour: 'gold'
  },
  'navy-and-white': {
    backgroundColour: 'navy',
    fontColour: 'white'
  },
  red: {
    backgroundColour: 'red',
    fontColour: 'white'
  },
  white: {
    backgroundColour: 'white',
    fontColour: 'black'
  }
};

/**
 * Gets the chosen background and font colour combination based on the developers general colour
 * selection. Defaults to a white background with black font.
 * @param {string} chosenColour 
 * @returns {{ backgroundColour: string, fontColour: string }}
 */
var getColourCombination = exports.getColourCombination = function getColourCombination(chosenColour) {
  var defaultBackgroundColour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
  var defaultFontColour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'black';
  if (colourCombinations["".concat(chosenColour)] !== undefined) {
    /* Return the chosen colour combination */
    return {
      backgroundColour: colourCombinations["".concat(chosenColour)].backgroundColour,
      fontColour: colourCombinations["".concat(chosenColour)].fontColour
    };
  }
  /* Return the default colour combination */
  return {
    backgroundColour: defaultBackgroundColour,
    fontColour: defaultFontColour
  };
};