/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { SmallHeader } from '../../src';
import storybookLogo from '../images/files/storybook-logo.svg';
import storybookLogoLong from '../images/files/storybook-logo-long.svg';

export default {
  title: 'Header/Small Header',
  component: SmallHeader,
  tags: ['autodocs'],
};

/**
 * Small Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_SmallHeader = args => {
	return <React.Fragment>
		<SmallHeader {...args} />
	</React.Fragment>;
}
export const Default = Template_SmallHeader.bind({});
Default.args = {
  children: 'Default header component with a white background. By not specifying a logo or title text, custom content will be displayed like in this example.',
  id: 'default-header',
};

export const WithGreyUpperBorder = Template_SmallHeader.bind({});
WithGreyUpperBorder.args = {
  children: 'Header component with a white background. This example shows a grey upper border and custom content.',
  id: 'with-grey-upper-border',
  topBorder: 'grey',
};

export const WithRedUpperBorder = Template_SmallHeader.bind({});
WithRedUpperBorder.args = {
  children: 'Header component with a white background. This example shows a red upper border and custom content.',
  id: 'with-red-upper-border',
  topBorder: 'red',
};

export const WithTitleTextOnly = Template_SmallHeader.bind({});
WithTitleTextOnly.args = {
  backgroundColour: 'grey',
  id: 'with-title-text-only',
  titleText: 'Header component with Title Text and Grey Background',
  titleTextColour: 'black',
};

export const WithTitleAndSubtitleTextOnly = Template_SmallHeader.bind({});
WithTitleAndSubtitleTextOnly.args = {
  backgroundColour: 'grey',
  headerTitleTextId: 'with-title-text-and-subtitle-text-only',
  id: 'with-title-text-and-subtitle-text-only',
  subtitleText: 'Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Header component with Title Text and Grey Background',
  titleTextColour: 'black',
};

export const WithTitleAndVeryLongSubtitleText = Template_SmallHeader.bind({});
WithTitleAndVeryLongSubtitleText.args = {
  backgroundColour: 'grey',
  headerTitleTextId: 'with-title-text-and-very-long-subtitle-text',
  id: 'with-title-text-and-very-long-subtitle-text',
  subtitleText: 'This is very long subtitle text, much longer than the title text above it. This will be hidden if the viewport is too small.',
  subtitleTextColour: 'black',
  titleText: 'Title Text',
  titleTextColour: 'black',
};

export const WithSquareLogoAndNoTopBorder = Template_SmallHeader.bind({});
WithSquareLogoAndNoTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-square-logo--no-top-border',
  logoSrc: storybookLogo,
  topBorder: 'off',
};

export const WithSquareLogoAndWithTopBorder = Template_SmallHeader.bind({});
WithSquareLogoAndWithTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-square-logo--with-top-border',
  logoSrc: storybookLogo,
  topBorder: 'red',
};

export const WithRectangularLogoAndNoTopBorder = Template_SmallHeader.bind({});
WithRectangularLogoAndNoTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-rectangle-logo--no-top-border',
  logoSrc: storybookLogoLong,
  logoType: 'rectangle',
  topBorder: 'off',
};

export const WithRectangularLogoAndWithTopBorder = Template_SmallHeader.bind({});
WithRectangularLogoAndWithTopBorder.args = {
  backgroundColour: 'grey',
  id: 'with-rectangle-logo--with-top-border',
  logoSrc: storybookLogoLong,
  logoType: 'rectangle',
  topBorder: 'grey',
};

export const WithLogoAndTitleTextOnly = Template_SmallHeader.bind({});
WithLogoAndTitleTextOnly.args = {
  backgroundColour: 'grey',
  id: 'with-logo--title-text-only',
  logoSrc: storybookLogo,
  titleText: 'Header Component With Title Text',
  titleTextColour: 'black',
};

export const WithLogoAndTitleAndSubtitleText = Template_SmallHeader.bind({});
WithLogoAndTitleAndSubtitleText.args = {
  backgroundColour: 'grey',
  headerTitleTextId: 'with-logo-title-text-and-subtitle-text',
  id: 'with-logo-title-text-and-subtitle-text',
  logoSrc: storybookLogo,
  subtitleText: 'Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Header Component With Title Text',
  titleTextColour: 'black',
};
