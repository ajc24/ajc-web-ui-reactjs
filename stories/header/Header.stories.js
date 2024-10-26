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
  id: 'default-header',
  size: 'default',
};

export const WithGreyUpperBorder = Template_Header.bind({});
WithGreyUpperBorder.args = {
  id: 'with-grey-upper-border',
  size: 'default',
  topBorder: 'grey',
};

export const WithRedUpperBorder = Template_Header.bind({});
WithRedUpperBorder.args = {
  id: 'with-red-upper-border',
  size: 'default',
  topBorder: 'red',
};

export const TallWithGreyBackground = Template_Header.bind({});
TallWithGreyBackground.args = {
  backgroundColour: 'grey',
  id: 'with-grey-background',
  size: 'tall',
};
