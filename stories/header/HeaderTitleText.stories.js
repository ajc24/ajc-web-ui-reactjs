/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderBase, HeaderTitleText } from '../../src';

export default {
  title: 'Header Components/Header Title Text',
  component: HeaderTitleText,
  tags: ['autodocs'],
};

/**
 * Header Title Text component template, rendered outside all / any header components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderTitleText = args => {
  return <React.Fragment>
    <HeaderTitleText {...args} />
  </React.Fragment>;
}

/**
 * Header Title Text component template, rendered inside the Header Base component
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderTitleTextInHeaderBase = args => {
  return <React.Fragment>
    <HeaderBase id="base-id">
      <HeaderTitleText {...args} />
    </HeaderBase>
  </React.Fragment>;
}

export const Default = Template_HeaderTitleText.bind({});
Default.args = {
  children: 'Header Title Text',
  id: 'default-id',
};

export const WrappingAndTruncation = Template_HeaderTitleText.bind({});
WrappingAndTruncation.args = {
  children: 'This Text Will Reduce In Font Size, Wrap And Truncate',
  id: 'wrapped-and-truncated-id',
};

export const WithLeftAlignment = Template_HeaderTitleText.bind({});
WithLeftAlignment.args = {
  alignment: 'left',
  children: 'Header Title Text (Left Alignment)',
  id: 'with-left-alignment-id',
};

export const WithCentreAlignment = Template_HeaderTitleText.bind({});
WithCentreAlignment.args = {
  alignment: 'centre',
  children: 'Header Title Text (Centre Alignment)',
  id: 'with-centre-alignment-id',
};

export const WithWhiteText = Template_HeaderTitleText.bind({});
WithWhiteText.args = {
  children: 'Header Title Text In White Colour',
  id: 'with-white-text-id',
  textColour: 'white',
};

export const InHeaderBaseLeftAligned = Template_HeaderTitleTextInHeaderBase.bind({});
InHeaderBaseLeftAligned.args = {
  alignment: 'left',
  children: 'In Header Base Component (Left Alignment)',
  id: 'in-header-base-left-alignment-id',
};

export const InHeaderBaseCentreAligned = Template_HeaderTitleTextInHeaderBase.bind({});
InHeaderBaseCentreAligned.args = {
  alignment: 'centre',
  children: 'In Header Base Component (Centre Alignment)',
  id: 'in-header-base-centre-alignment-id',
};
