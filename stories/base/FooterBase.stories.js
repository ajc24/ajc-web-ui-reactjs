/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase } from '../../src';

export default {
  title: 'Page Template/Footer Base',
  component: FooterBase,
  tags: ['autodocs'],
};

/**
 * Footer Base component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FooterBase = args => {
  return <React.Fragment>
    <FooterBase {...args} >
      This component is designed to act as a baseline / template on which all footer components can be developed.
    </FooterBase>
  </React.Fragment>;
}
export const Default = Template_FooterBase.bind({});
Default.args = {};

export const CustomIdWhiteBackground = Template_FooterBase.bind({});
CustomIdWhiteBackground.args = {
  backgroundColour: 'white',
  id: 'custom-id',
};

export const DefaultIdRedBackground = Template_FooterBase.bind({});
DefaultIdRedBackground.args = {
  backgroundColour: 'red',
};

export const DefaultIdGreyBackground = Template_FooterBase.bind({});
DefaultIdGreyBackground.args = {
  backgroundColour: 'grey',
};

export const DefaultIdGreenBackground = Template_FooterBase.bind({});
DefaultIdGreenBackground.args = {
  backgroundColour: 'green',
};
