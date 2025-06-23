/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { ThreePhotoCollage } from '../../src';
import storybookLogoSquare from './files/storybook-logo-square.svg';

export default {
  title: 'Images/Three Photo Collage',
  component: ThreePhotoCollage,
};

/**
 * Three Photo Collage component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_ThreePhotoCollage = args => {
  return <ThreePhotoCollage {...args} />;
};

export const Default = {
  args: {
    id: 'default',
    imageLowerData: {
      alt: 'Storybook logo rendered centrally in the lower section of the collage.',
      src: storybookLogoSquare,
    },
    imageUpperLeftData: {
      alt: 'Storybook logo rendered in the upper left section of the collage.',
      src: storybookLogoSquare,
    },
    imageUpperRightData: {
      alt: 'Storybook logo rendered in the upper right section of the collage.',
      src: storybookLogoSquare,
    },
  },
  render: Template_ThreePhotoCollage,
};

export const MobilePhoneTest = {
  args: {
    id: 'mobile-phone-test',
    imageLowerData: {
      alt: 'Storybook logo rendered centrally in the lower section of the collage.',
      src: storybookLogoSquare,
    },
    imageUpperLeftData: {
      alt: 'Storybook logo rendered in the upper left section of the collage.',
      src: storybookLogoSquare,
    },
    imageUpperRightData: {
      alt: 'Storybook logo rendered in the upper right section of the collage.',
      src: storybookLogoSquare,
    },
  },
  globals: {
    viewport: {
      isRotated: false,
      value: 'galaxys9',
    },
  },
  render: Template_ThreePhotoCollage,
};
