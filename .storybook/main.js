/**
 * Developed by Anthony Cox in 2024
 */

/**
 * @type { import('@storybook/react-webpack5').StorybookConfig }
 */
const config = {
  stories: [
    /* Base component stories */
    "../stories/base/FooterBase.stories.js",
    // "../stories/base/HeaderBase.stories.js",
    // "../stories/base/HeaderSubtitleText.stories.js",
    // "../stories/base/HeaderTitleText.stories.js",
    // "../stories/base/ImageBase.stories.js",
    "../stories/base/MainBase.stories.js",
    "../stories/base/MenuBarBase.stories.js",

    /* Header component stories */
    "../stories/header/SmallHeader.stories.js",
    "../stories/header/TallHeader.stories.js",

    /* Image component stories */
    "../stories/images/DecorativeImage.stories.js",
    "../stories/images/FunctionalImage.stories.js",
    "../stories/images/InformativeImage.stories.js",

    /* Mock page component stories */
    "../stories/mock-pages/TullowhillCavaliersHome.stories.js",

    /* Template component stories */
    "../stories/templates/BaseComponents.stories.js",
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    "@storybook/addon-webpack5-compiler-swc",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
