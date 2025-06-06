/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DecorativeImage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Decorative Image',
  component: DecorativeImage,
  tags: ['autodocs'],
};

/**
 * Decorative Image component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DecorativeImage = args => {
	return <React.Fragment>
		<DecorativeImage {...args} />
	</React.Fragment>;
}
export const Default = Template_DecorativeImage.bind({});
Default.args = {
  height: 200,
  id: 'default',
  src: storybookLogoSquare,
  width: 200,
};
