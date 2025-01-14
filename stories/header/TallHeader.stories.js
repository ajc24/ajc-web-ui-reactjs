/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { TallHeader } from '../../src';
import headerBgImage from '../images/files/tall-header-bg-image.jpg';
import headerBgImageSky from '../images/files/header-bg-image-sky.png';
import storybookLogoLongTall from '../images/files/storybook-logo-long-tall.svg';

export default {
  title: 'Header/Tall Header',
  component: TallHeader,
  tags: ['autodocs'],
};

/**
 * Tall Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_TallHeader = args => {
	return <React.Fragment>
		<TallHeader {...args} />
	</React.Fragment>;
}
export const Default = Template_TallHeader.bind({});
Default.args = {
  children: 'Default Header component with a white background. By not specifying a logo or title text, custom content will be displayed like in this example.',
  id: 'tall-default-header',
};

export const WithGreyBackground = Template_TallHeader.bind({});
WithGreyBackground.args = {
  children: 'Header component with a grey background and no upper border. Custom content is rendered inside the header.',
  backgroundColour: 'grey',
  id: 'tall-with-grey-background',
};

export const WithTitleTextOnlyAndTopAlignment = Template_TallHeader.bind({});
WithTitleTextOnlyAndTopAlignment.args = {
  backgroundColour: 'grey',
  id: 'tall-with-title-text-only-top-alignment',
  titleText: 'Header component with Title Text',
  titleTextAlignment: 'top',
  titleTextColour: 'black',
};

export const WithTitleTextOnlyAndMiddleAlignment = Template_TallHeader.bind({});
WithTitleTextOnlyAndMiddleAlignment.args = {
  backgroundColour: 'grey',
  id: 'tall-with-title-text-only-middle-alignment',
  titleText: 'Header component with Title Text',
  titleTextAlignment: 'middle',
  titleTextColour: 'black',
};

export const WithTitleTextOnlyAndBottomAlignment = Template_TallHeader.bind({});
WithTitleTextOnlyAndBottomAlignment.args = {
  backgroundColour: 'grey',
  id: 'tall-with-title-text-only-bottom-alignment',
  titleText: 'Header component with Title Text',
  titleTextAlignment: 'bottom',
  titleTextColour: 'black',
};

export const WithImageBackgroundAndTitleTextAndSubtitleTextAndBottomAlignment = Template_TallHeader.bind({});
WithImageBackgroundAndTitleTextAndSubtitleTextAndBottomAlignment.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: headerBgImage,
  headerTitleTextId: 'tall-with-title-text-and-subtitle-text-only',
  id: 'tall-with-title-text-and-subtitle-text-only',
  subtitleText: 'Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Header component with Title Text',
  titleTextAlignment: 'bottom',
  titleTextColour: 'black',
};

export const WithTitleAndVeryLongSubtitleTextAndMiddleAlignment = Template_TallHeader.bind({});
WithTitleAndVeryLongSubtitleTextAndMiddleAlignment.args = {
  backgroundColour: 'grey',
  headerTitleTextId: 'with-title-text-and-very-long-subtitle-text',
  id: 'with-title-text-and-very-long-subtitle-text',
  subtitleText: 'This is very long subtitle text, much longer than the title text above it. This will be hidden if the viewport is too small.',
  subtitleTextColour: 'black',
  titleText: 'Title Text',
  titleTextAlignment: 'middle',
  titleTextColour: 'black',
};

export const WithLogoAndNoTopBorder = Template_TallHeader.bind({});
WithLogoAndNoTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-logo--no-top-border',
  logoSrc: storybookLogoLongTall,
  topBorder: 'off',
};

export const WithLogoAndWithTopBorder = Template_TallHeader.bind({});
WithLogoAndWithTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-logo--with-top-border',
  logoSrc: storybookLogoLongTall,
  topBorder: 'red',
};

export const WithLogoAndTitleTextOnly = Template_TallHeader.bind({});
WithLogoAndTitleTextOnly.args = {
  backgroundColour: 'grey',
  id: 'with-logo-and-title-text-only',
  logoSrc: storybookLogoLongTall,
  titleText: 'Title Text is Rendered Underneath the Logo',
  titleTextColour: 'black',
  topBorder: 'grey',
};

export const WithLogoAndTitleTextAndSubtitleText = Template_TallHeader.bind({});
WithLogoAndTitleTextAndSubtitleText.args = {
  backgroundColour: 'grey',
  id: 'with-logo-and-title-text-and-subtitle-text',
  logoSrc: storybookLogoLongTall,
  subtitleText: 'Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Header Component With Title Text',
  titleTextColour: 'black',
  topBorder: 'grey',
};

export const WithAllFeaturesTogether = Template_TallHeader.bind({});
WithAllFeaturesTogether.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: headerBgImageSky,
  id: 'with-all-features-together',
  logoSrc: storybookLogoLongTall,
  subtitleText: 'Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Header Component With Title Text',
  titleTextColour: 'black',
};
