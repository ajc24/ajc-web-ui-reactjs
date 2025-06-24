/**
 * Developed by Anthony Cox in 2025
 */

/**
 * 
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
const divide_Integer = (number1, number2) => {
  return parseInt_Default(number1 / number2);
};

/**
 * 
 * @param {HTMLElement} domElement 
 * @returns {{ width: number }}
 */
const getBoundingClientRect = domElement => {
  const dimensions = domElement.getBoundingClientRect();

  return {
    width: parseInt_Default(dimensions.width),
  };
};

/**
 * 
 * @param {*} number1 
 * @param {*} number2 
 * @returns 
 */
const multiply_Integer = (number1, number2) => {
  return parseInt_Default(number1 * number2);
};

/**
 * 
 * @param {*} number 
 * @returns 
 */
const parseInt_Default = number => {
  return parseInt(number, 10);
};

export {
  divide_Integer,
  getBoundingClientRect,
  multiply_Integer,
};
