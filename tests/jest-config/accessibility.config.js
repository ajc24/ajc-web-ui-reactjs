/**
 * Developed by Anthony Cox in 2024
 */
const { configureAccessibilityTests } = require('ajc-testing-code');

const jestConfig = configureAccessibilityTests();
module.exports = jestConfig;
