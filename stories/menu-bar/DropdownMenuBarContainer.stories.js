/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DropdownMenuBarContainer } from '../../src';

export default {
  title: 'Menu Bar/Dropdown Menu Bar Container',
  component: DropdownMenuBarContainer,
};

/**
 * Dropdown Menu Bar Container component template, rendered outside all / any menu bar components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DropdownMenuBarContainer = args => {
  return <DropdownMenuBarContainer {...args} />;
}

export const Default = {
  args: {
    id: 'default',
    isHidden: false,
  },
  render: Template_DropdownMenuBarContainer,
};
