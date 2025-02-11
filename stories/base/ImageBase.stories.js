/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { ImageBase } from '../../src';
import storybookLogo from '../images/files/storybook-logo.svg';

export default {
  title: 'Base Components/Image Base',
  component: ImageBase,
  tags: ['autodocs'],
};

/**
 * Image Base component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_ImageBase = args => {
	return <React.Fragment>
		<ImageBase {...args} />
	</React.Fragment>;
}
export const Default = Template_ImageBase.bind({});
Default.args = {
  id: 'default-image-id',
  src: storybookLogo,
};

export const AtACustomSize = Template_ImageBase.bind({});
AtACustomSize.args = {
  alt: 'A picture of the Storybook logo.',
  height: 350,
  id: 'custom-image-id',
  src: storybookLogo,
  width: 350,
};

export const WithCustomOnClick = Template_ImageBase.bind({});
WithCustomOnClick.args = {
  height: 250,
  id: 'image-with-custom-click-id',
  onClick: () => { alert('Clicked on the image.') },
  src: storybookLogo,
  width: 250,
};
