/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { Header } from '../../src';

export default {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
};

/**
 * Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_Header = args => {
	return <React.Fragment>
		<Header {...args} />
	</React.Fragment>;
}
export const Default = Template_Header.bind({});
Default.args = {
  children: 'Default size Header component with custom content displayed',
  id: 'default-header',
  size: 'default',
};

export const DefaultWithGreyUpperBorder = Template_Header.bind({});
DefaultWithGreyUpperBorder.args = {
  children: 'Default size Header component with a white background and grey upper border.',
  id: 'with-grey-upper-border',
  size: 'default',
  topBorder: 'grey',
};

export const DefaultWithRedUpperBorder = Template_Header.bind({});
DefaultWithRedUpperBorder.args = {
  children: 'Default size Header component with a white background and red upper border.',
  id: 'with-red-upper-border',
  size: 'default',
  topBorder: 'red',
};

export const TallWithGreyBackground = Template_Header.bind({});
TallWithGreyBackground.args = {
  children: 'Tall size Header component with a grey background, no upper border.',
  backgroundColour: 'grey',
  id: 'with-grey-background',
  size: 'tall',
};

export const SmallWithTitleTextOnly = Template_Header.bind({});
SmallWithTitleTextOnly.args = {
  backgroundColour: 'grey',
  id: 'with-title-text-only',
  size: 'small',
  titleText: 'Small size Header component with Title Text',
  titleTextColour: 'black',
};

export const SmallWithTitleAndSubtitleTextOnly = Template_Header.bind({});
SmallWithTitleAndSubtitleTextOnly.args = {
  backgroundColour: 'grey',
  headerTitleTextId: 'with-title-text-and-subtitle-text-only',
  id: 'with-title-text-and-subtitle-text-only',
  size: 'small',
  subtitleText: 'Small size Header component with subtitle text',
  subtitleTextColour: 'black',
  titleText: 'Small size Header component with Title Text',
  titleTextColour: 'black',
};
