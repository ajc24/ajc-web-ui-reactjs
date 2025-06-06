/**
 * Developed by Anthony Cox in 2025
 */

/**
 * @type { import('@storybook/react-webpack5').StorybookConfig }
 */
const config = {
  stories: [
    /* Base component stories */
    '../stories/base/BaseHeader.stories.js',
    '../stories/base/BaseHeaderTall.stories.js',
    '../stories/base/BaseImage.stories.js',

    // /* Header component stories */
    // "../stories/header/Header.stories.js",
    // "../stories/header/HeaderLogo.stories.js",
    // "../stories/header/HeaderSubtitleText.stories.js",
    // "../stories/header/HeaderTitleText.stories.js",

    // /* Menu Bar component stories */
    // // "../stories/menu-bar/MenuItemLink.stories.js",
    // "../stories/menu-bar/ScrollMenuItems.stories.js",
    
    // /* Icon component stories */
    // "../stories/icons/ArrowIcon.stories.js",

    /* Image component stories */
    '../stories/images/DecorativeImage.stories.js',
    '../stories/images/FunctionalImage.stories.js',
    '../stories/images/InformativeImage.stories.js',

    // /* Mock page component stories */
    // // "../stories/mock-pages/CKCSClubOfIreland/HomePage.stories.js",
    // // "../stories/mock-pages/TullowhillCavaliers/HomePage.stories.js",

    // /* Page template stories */
    // "../stories/base/FooterBase.stories.js",
    // "../stories/base/HeaderBase.stories.js",
    // "../stories/base/MainBase.stories.js",
    // "../stories/base/MenuBarBase.stories.js",
    // "../stories/mock-pages/FullPageTemplate.stories.js",
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
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
