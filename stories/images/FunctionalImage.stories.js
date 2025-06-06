/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FunctionalImage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Functional Image',
  component: FunctionalImage,
  tags: ['autodocs'],
};

/**
 * Functional Image component template to be used in all stories
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
  height: 300,
  id: 'default',
  onClick: () => { alert('You have successfully clicked the image.')},
  src: storybookLogoSquare,
  width: 300,
};
