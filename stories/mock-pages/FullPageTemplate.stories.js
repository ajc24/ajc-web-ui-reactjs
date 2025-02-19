/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, HeaderBase, MainBase, MenuBarBase } from '../../src';

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
    <HeaderBase size={args.size ? args.size : 'small'} backgroundColour={args.backgroundColour ? args.backgroundColour : 'grey'} topBorder={args.topBorder ? args.topBorder : 'grey'}>
      This component is designed to act as a template component for a header.
    </HeaderBase>
    <MenuBarBase backgroundColour={args.backgroundColour ? args.backgroundColour : 'grey'}>
      This component is designed to act as a baseline / template on which all menu bar components can be developed.
    </MenuBarBase>
    <MainBase backgroundColour={args.backgroundColour ? args.backgroundColour : 'grey'} title={args.title}>
      This component is designed to act as a baseline / template on which all main components can be developed.
    </MainBase>
    <FooterBase backgroundColour={args.backgroundColour ? args.backgroundColour : 'grey'}>
      This component is designed to act as a baseline / template on which all footer components can be developed.
    </FooterBase>
  </React.Fragment>;
}

export const Example1 = Template_FullPageTemplate.bind({});
Example1.args = {
  backgroundColour: 'white',
  title: 'Full page template example 1',
  topBorder: 'off',
};

export const Example2 = Template_FullPageTemplate.bind({});
Example2.args = {
  title: 'Full page template example 2',
};

export const Example3 = Template_FullPageTemplate.bind({});
Example3.args = {
  backgroundColour: 'red',
  size: 'small',
  title: 'Full page template example 3',
  topBorder: 'red',
}

export const Example4 = Template_FullPageTemplate.bind({});
Example4.args = {
  backgroundColour: 'green',
  size: 'tall',
  title: 'Full page template example 4',
  topBorder: 'green',
}

export const Example5 = Template_FullPageTemplate.bind({});
Example5.args = {
  backgroundColour: 'green-2',
  size: 'tall',
  title: 'Full page template example 5',
  topBorder: 'green-2',
}

export const Example6 = Template_FullPageTemplate.bind({});
Example6.args = {
  backgroundColour: 'navy-and-gold',
  size: 'small',
  title: 'Full page template example 6',
  topBorder: 'navy',
}
