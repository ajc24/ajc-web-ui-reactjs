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
  return <React.Fragment>
    <HeaderTallLogo {...args} />
  </React.Fragment>;
}
export const Default = Template_HeaderTallLogo.bind({});
Default.args = {
  alt: 'Storybook logo rendered in a default tall header.',
  src: storybookLogoRectangle,
};

export const WithGreyBackground = Template_HeaderTallLogo.bind({});
WithGreyBackground.args = {
  alt: 'Storybook logo rendered in a tall header with a grey background.',
  backgroundColour: 'grey',
  id: 'with-grey-background',
  src: storybookLogoRectangle,
};
