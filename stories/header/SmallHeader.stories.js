/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { SmallHeader } from '../../src';
import storybookLogo from '../../src/components/images/files/storybook-logo.svg';

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

export const WithHeaderLogo = Template_SmallHeader.bind({});
WithHeaderLogo.args = {
  backgroundColour: 'grey',
  id: 'with-header-logo--no-top-border',
  logoSrc: storybookLogo,
  topBorder: 'off',
};

export const WithHeaderLogoAndUpperBorder = Template_SmallHeader.bind({});
WithHeaderLogoAndUpperBorder.args = {
  backgroundColour: 'grey',
  id: 'with-header-logo--with-top-border',
  logoSrc: storybookLogo,
  topBorder: 'red',
};
