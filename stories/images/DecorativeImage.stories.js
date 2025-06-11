/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DecorativeImage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Decorative Image',
  component: DecorativeImage,
};

/**
 * Decorative Image component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DecorativeImage = args => {
	return <DecorativeImage {...args} />;
};

export const Default = {
  args: {
    id: 'default',
    src: storybookLogoSquare,
  },
  render: Template_DecorativeImage,
};

export const AtCustomSize = {
  args: {
    height: 250,
    id: 'custom-size',
    src: storybookLogoSquare,
    width: 250,
  },
  render: Template_DecorativeImage,
};
