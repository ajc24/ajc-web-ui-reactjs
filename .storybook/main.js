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
    '../stories/base/BaseHeaderBgImage.stories.js',
    '../stories/base/BaseHeaderTall.stories.js',
    '../stories/base/BaseImage.stories.js',

    /* Header component stories */
    '../stories/header/HeaderTallLogo.stories.js',

    // /* Menu Bar component stories */
    // // "../stories/menu-bar/MenuItemLink.stories.js",
    // "../stories/menu-bar/ScrollMenuItems.stories.js",
    
    // /* Icon component stories */
    // "../stories/icons/ArrowIcon.stories.js",

    /* Image component stories */
    '../stories/images/DecorativeImage.stories.js',
    '../stories/images/FunctionalImage.stories.js',
    '../stories/images/InformativeImage.stories.js',

    

    // /* Page template stories */
    // "../stories/base/FooterBase.stories.js",
    // "../stories/base/HeaderBase.stories.js",
    // "../stories/base/MainBase.stories.js",
    // "../stories/base/MenuBarBase.stories.js",
    // "../stories/mock-pages/FullPageTemplate.stories.js",

    /* Text component stories */
    '../stories/text/ApplicationSubtitleText.stories.js',
    '../stories/text/ApplicationTitleText.stories.js',

    /* Web development mock page stories */
    '../stories/web-development/ckcs-club-of-ireland/HomePage.stories.js',
    '../stories/web-development/tullowhill-cavaliers/HomePage.stories.js',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
