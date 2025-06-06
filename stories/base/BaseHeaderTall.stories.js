/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { BaseHeaderTall } from '../../src';

export default {
  title: 'Base Components/Base Header Tall',
  component: BaseHeaderTall,
  tags: ['autodocs'],
};

/**
 * Base Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BaseHeaderTall = args => {
  return <React.Fragment>
    <BaseHeaderTall {...args} >
      <p>This component is designed to act as a template component for a tall header.</p>
      <p>All other tall header components will be developed from this template.</p>
    </BaseHeaderTall>
  </React.Fragment>;
}
export const Default = Template_BaseHeaderTall.bind({});
Default.args = {};

export const WithGreyBackground = Template_BaseHeaderTall.bind({});
WithGreyBackground.args = {
  backgroundColour: 'grey',
  id: 'base-header-tall-with-grey-background',
};
