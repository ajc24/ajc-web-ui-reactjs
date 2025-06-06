/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { InformativeImage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Informative Image',
  component: InformativeImage,
  tags: ['autodocs'],
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
  height: 150,
  id: 'default',
  src: storybookLogoSquare,
  width: 150,
};
