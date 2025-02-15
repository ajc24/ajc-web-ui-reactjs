/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { InformativeImage } from '../../src';
import storybookLogo from './files/storybook-logo.svg';

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
  id: 'default-image-id',
  src: storybookLogo,
};

export const AtACustomSize = Template_InformativeImage.bind({});
AtACustomSize.args = {
  alt: 'A picture of the Storybook logo.',
  height: 350,
  id: 'custom-image-id',
  src: storybookLogo,
  width: 350,
};
