/**
 * Developed by Anthony Cox in 2024
 */
const { configureUnitTests } = require('ajc-testing-code');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/components/data/storybook.js');
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/components/index.js');
jestConfig.setupFilesAfterEnv.push('<rootDir>/tests/jest-config/document.config.js');
jestConfig.testMatch = [
  '<rootDir>/tests/unit/**/*.js',
];
module.exports = jestConfig;
