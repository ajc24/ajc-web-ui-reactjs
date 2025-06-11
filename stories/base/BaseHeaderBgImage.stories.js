/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { BaseHeaderBgImage } from '../../src';
import smallHeaderBgImage from '../images/files/small-header-bg-image.png';

export default {
  title: 'Base Components/Base Header With Bg Image',
  component: BaseHeaderBgImage,
};

/**
 * Base Header with Bg Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BaseHeaderBgImage = args => {
  return <React.Fragment>
    <BaseHeaderBgImage {...args} >
      <p>This component is designed to act as a template component for a header with background image.</p>
      <p>All internal content of the header component will appear on top of the background image.</p>
    </BaseHeaderBgImage>
  </React.Fragment>;
}
export const Default = Template_BaseHeaderBgImage.bind({});
Default.args = {
  backgroundImageSrc: smallHeaderBgImage,
};
