/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { MainBase } from '../../src';

export default {
  title: 'Page Template/Main Base',
  component: MainBase,
  tags: ['autodocs'],
};

/**
 * Main Base component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MainBase = args => {
  return <React.Fragment>
    <MainBase {...args} >
      This component is designed to act as a baseline / template on which all main components can be developed.
    </MainBase>
  </React.Fragment>;
}

export const Default = Template_MainBase.bind({});
Default.args = {
  title: 'Default Menu Base Component (Storybook)',
};

export const CustomIdWhiteBackground = Template_MainBase.bind({});
CustomIdWhiteBackground.args = {
  backgroundColour: 'white',
  id: 'custom-id',
  title: 'Menu Base Component with Custom ID and white background',
};

export const DefaultIdGreyBackground = Template_MainBase.bind({});
DefaultIdGreyBackground.args = {
  backgroundColour: 'grey',
  title: 'Menu Base Component with Default ID and grey background',
};
