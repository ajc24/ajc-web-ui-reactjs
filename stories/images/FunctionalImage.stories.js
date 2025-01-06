/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { FunctionalImage } from '../../src';
import storybookLogo from '../../src/components/images/files/storybook-logo.svg';

export default {
  title: 'Images/Functional Image',
  component: FunctionalImage,
  tags: ['autodocs'],
};

/**
 * Informative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FunctionalImage = args => {
	return <React.Fragment>
		<FunctionalImage {...args} />
	</React.Fragment>;
}
export const Default = Template_FunctionalImage.bind({});
Default.args = {
  alt: 'A picture of the Storybook logo.',
  id: 'default-image-id',
  onClick: () => { alert('You have successfully clicked the image.')},
  src: storybookLogo,
};

export const AtACustomSize = Template_FunctionalImage.bind({});
AtACustomSize.args = {
  alt: 'A picture of the Storybook logo.',
  height: 350,
  id: 'custom-image-id',
  onClick: () => { alert('You have successfully clicked the image.')},
  src: storybookLogo,
  width: 350,
};
