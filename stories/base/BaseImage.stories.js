/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { BaseImage } from '../../src';
import storybookLogoSquare from '../images/files/storybook-logo-square.svg';

export default {
  title: 'Base Components/Base Image',
  component: BaseImage,
  tags: ['autodocs'],
};

/**
 * Base Image component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BaseImage = args => {
	return <React.Fragment>
		<BaseImage {...args} />
	</React.Fragment>;
}
export const Default = Template_BaseImage.bind({});
Default.args = {
  src: storybookLogoSquare,
};

export const AtACustomSize = Template_BaseImage.bind({});
AtACustomSize.args = {
  alt: 'A picture of the Storybook logo.',
  height: 350,
  id: 'custom-image-1',
  src: storybookLogoSquare,
  width: 350,
};

export const WithCustomOnClick = Template_BaseImage.bind({});
WithCustomOnClick.args = {
  height: 250,
  id: 'image-with-custom-click-event',
  onClick: () => { alert('Clicked on the image.') },
  src: storybookLogoSquare,
  width: 250,
};
