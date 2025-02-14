/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderBase, MainBase, MenuBarBase } from '../../src';

export default {
  title: 'Page Template/Full Page Template',
  tags: ['autodocs'],
};

/**
 * Full page template made up from base components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FullPageTemplate = args => {
  return <React.Fragment>
    <HeaderBase size={args.size ? args.size : 'small'} backgroundColour="grey" topBorder={args.topBorder ? args.topBorder : 'grey'}>
      This component is designed to act as a template component for a header.
    </HeaderBase>
    <MenuBarBase backgroundColour={args.backgroundColour ? args.backgroundColour : 'grey'}>
      This component is designed to act as a baseline / template on which all menu bar components can be developed.
    </MenuBarBase>
    <MainBase backgroundColour="grey" title={args.title}>
      This component is designed to act as a baseline / template on which all main components can be developed.
    </MainBase>
  </React.Fragment>;
}
export const Example1 = Template_FullPageTemplate.bind({});
Example1.args = {
  title: 'Full page template example 1',
};

export const Example2 = Template_FullPageTemplate.bind({});
Example2.args = {
  backgroundColour: 'red',
  size: 'small',
  title: 'Full page template example 2',
  topBorder: 'red',
}

export const Example3 = Template_FullPageTemplate.bind({});
Example3.args = {
  backgroundColour: 'green',
  size: 'tall',
  title: 'Full page template example 3',
  topBorder: 'green',
}