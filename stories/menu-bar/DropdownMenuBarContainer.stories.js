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
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithGoldBackground = {
  args: {
    backgroundColour: 'gold',
    id: 'with-gold-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithGreenBackground = {
  args: {
    backgroundColour: 'green',
    id: 'with-green-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithGreyBackground = {
  args: {
    backgroundColour: 'grey',
    id: 'with-grey-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithNavyAndGoldBackground = {
  args: {
    backgroundColour: 'navy-and-gold',
    id: 'with-navy-and-gold-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithNavyAndWhiteBackground = {
  args: {
    backgroundColour: 'navy-and-white',
    id: 'with-navy-and-white-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};

export const WithRedBackground = {
  args: {
    backgroundColour: 'red',
    id: 'with-red-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};
