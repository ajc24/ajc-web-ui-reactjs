/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { MenuItemLink } from '../../src';

export default {
  title: 'Menu Bar Components/Menu Item Link',
  component: MenuItemLink,
  tags: ['autodocs'],
};

/**
 * Menu Item Link component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MenuItemLink = args => {
  return <React.Fragment>
    <MenuItemLink {...args} />
  </React.Fragment>;
}

export const Default = Template_MenuItemLink.bind({});
Default.args = {
  children: 'Menu Item Link 1',
  href: '#',
  id: 'default-menu-item-link-id',
};

export const InGold = Template_MenuItemLink.bind({});
InGold.args = {
  children: 'Menu Item Link 2',
  href: '#',
  id: 'menu-item-link-in-gold-id',
  menuItemColour: 'gold',
};

export const InGreen = Template_MenuItemLink.bind({});
InGreen.args = {
  children: 'Menu Item Link 3',
  href: '#',
  id: 'menu-item-link-in-green-id',
  menuItemColour: 'green',
};

export const InGreen2 = Template_MenuItemLink.bind({});
InGreen2.args = {
  children: 'Menu Item Link 4',
  href: '#',
  id: 'menu-item-link-in-green-2-id',
  menuItemColour: 'green-2',
};

export const InGrey = Template_MenuItemLink.bind({});
InGrey.args = {
  children: 'Menu Item Link 5',
  href: '#',
  id: 'menu-item-link-in-grey-id',
  menuItemColour: 'grey',
};

export const InNavyAndGold = Template_MenuItemLink.bind({});
InNavyAndGold.args = {
  children: 'Menu Item Link 6',
  href: '#',
  id: 'menu-item-link-in-navy-and-gold-id',
  menuItemColour: 'navy-and-gold',
};

export const InNavyAndWhite = Template_MenuItemLink.bind({});
InNavyAndWhite.args = {
  children: 'Menu Item Link 7',
  href: '#',
  id: 'menu-item-link-in-navy-and-white-id',
  menuItemColour: 'navy-and-white',
};

export const InRed = Template_MenuItemLink.bind({});
InRed.args = {
  children: 'Menu Item Link 8',
  href: '#',
  id: 'menu-item-link-in-red-id',
  menuItemColour: 'red',
};

export const WithLongTitle = Template_MenuItemLink.bind({});
WithLongTitle.args = {
  children: 'Menu Item Link With Really Long Title',
  href: '#',
  id: 'menu-item-link-with-really-long-title-id',
  menuItemColour: 'red',
};