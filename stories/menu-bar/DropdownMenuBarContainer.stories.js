/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { DropdownMenuBarContainer } from '../../src';

export default {
  title: 'Menu Bar/Dropdown Menu Bar Container',
  component: DropdownMenuBarContainer,
};

const dropdownMenuBarItemsList = [
  {
    href: '#',
    id: 'menu-bar-item-1',
    title: 'Navigate to Item 1',
  },
  {
    href: '#',
    id: 'menu-bar-item-2',
    title: 'Open Item 2',
  },
  {
    href: '#',
    id: 'menu-bar-item-3',
    title: 'Click to go to Item 3',
  },
  {
    href: '#',
    id: 'menu-bar-item-4',
    title: 'Redirect to Item 4',
  },
  {
    href: '#',
    id: 'menu-bar-item-5',
    title: 'Open Item 5',
  }
];

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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
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
    dropdownMenuBarItemsList: dropdownMenuBarItemsList,
    id: 'with-red-background',
    isHidden: false,
    left: 10,
    top: 10,
  },
  render: Template_DropdownMenuBarContainer,
};
