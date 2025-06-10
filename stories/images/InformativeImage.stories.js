/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { InformativeImage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Informative Image',
  component: InformativeImage,
};

/**
 * Informative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_InformativeImage = args => {
	return <React.Fragment>
		<InformativeImage {...args} />
	</React.Fragment>;
}
export const Default = Template_InformativeImage.bind({});
Default.args = {
  alt: 'A picture of the Storybook logo',
  id: 'default',
  src: storybookLogoSquare,
};

export const AtCustomSize = Template_InformativeImage.bind({});
AtCustomSize.args = {
  alt: 'A custom size picture of the Storybook logo.',
  height: 250,
  id: 'custom-size',
  src: storybookLogoSquare,
  width: 250,
};
