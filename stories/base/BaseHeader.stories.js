/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { BaseHeader } from '../../src';

export default {
  title: 'Base Components/Base Header',
  component: BaseHeader,
};

/**
 * Base Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BaseHeader = args => {
  return <React.Fragment>
    <BaseHeader {...args} >
      <p>This component is designed to act as a template component for a header.</p>
      <p>All other header components will be developed from this template.</p>
    </BaseHeader>
  </React.Fragment>;
}
export const Default = Template_BaseHeader.bind({});
Default.args = {};

export const WithGreyBackground = Template_BaseHeader.bind({});
WithGreyBackground.args = {
  backgroundColour: 'grey',
  id: 'base-header-with-grey-background',
};
