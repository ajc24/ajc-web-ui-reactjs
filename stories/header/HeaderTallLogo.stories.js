/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderTallLogo } from '../../src';
import storybookLogoRectangle from '../images/files/storybook-logo-rectangle.svg';

export default {
  title: 'Header/Tall Header With Logo',
  component: HeaderTallLogo,
};

/**
 * Header Tall With Logo component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderTallLogo = args => {
  return <HeaderTallLogo {...args} />;
};

export const Default = {
  args: {
    alt: 'Storybook logo rendered in a default tall header.',
    src: storybookLogoRectangle,
  },
  render: Template_HeaderTallLogo,
};

export const WithGreyBackground = {
  args: {
    alt: 'Storybook logo rendered in a tall header with a grey background.',
    backgroundColour: 'grey',
    id: 'with-grey-background',
    src: storybookLogoRectangle,  
  },
  render: Template_HeaderTallLogo,
};
