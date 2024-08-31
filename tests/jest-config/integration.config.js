/**
 * Developed by Anthony Cox in 2024
 */
const { configureUnitTests } = require('ajc-testing-code');

const jestConfig = configureUnitTests();
jestConfig.testMatch = [
  '<rootDir>/tests/integration/**/*.js',
];

module.exports = jestConfig;