/**
 * Developed by Anthony Cox in 2025
 */

/**
 * @type { import('@storybook/react-webpack5').StorybookConfig }
 */
const config = {
  stories: [
    /* Image component stories */
    "../stories/images/DecorativeImage.stories.js",
    "../stories/images/FunctionalImage.stories.js",
    "../stories/images/InformativeImage.stories.js",

    /* Base component stories */
    "../stories/base/ImageBase.stories.js",

    /* Page template stories */
    "../stories/base/FooterBase.stories.js",
    "../stories/base/HeaderBase.stories.js",
    "../stories/base/MainBase.stories.js",
    "../stories/base/MenuBarBase.stories.js",
    "../stories/mock-pages/FullPageTemplate.stories.js",
    
    // "../stories/base/HeaderSubtitleText.stories.js",
    // "../stories/base/HeaderTitleText.stories.js",
    
    /* Header component stories */
    // "../stories/header/SmallHeader.stories.js",
    // "../stories/header/TallHeader.stories.js",

    /* Mock page component stories */
    // "../stories/mock-pages/TullowhillCavaliersHome.stories.js",
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
