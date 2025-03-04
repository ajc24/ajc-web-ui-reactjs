/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { ScrollMenuItems } from '../../src';

export default {
  title: 'Menu Bar Components/Scroll Menu Items',
  component: ScrollMenuItems,
  tags: ['autodocs'],
};

/**
 * Informative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_ScrollMenuItems = args => {
  return <React.Fragment>
    <ScrollMenuItems {...args} />
  </React.Fragment>;
}

export const Default = Template_ScrollMenuItems.bind({});
Default.args = {
  id: 'default-scroll-menu-items-id',
};

export const LeftSide = Template_ScrollMenuItems.bind({});
LeftSide.args = {
  id: 'left-scroll-menu-items-id',
  side: 'left',
};

export const RightSideInGold = Template_ScrollMenuItems.bind({});
RightSideInGold.args = {
  id: 'right-scroll-menu-items-in-gold-colour-id',
  menuBarColour: 'gold',
  side: 'right',
};

export const LeftSideInGreen = Template_ScrollMenuItems.bind({});
LeftSideInGreen.args = {
  id: 'left-scroll-menu-items-in-green-colour-id',
  menuBarColour: 'green',
  side: 'left',
};

export const RightSideInGreen2 = Template_ScrollMenuItems.bind({});
RightSideInGreen2.args = {
  id: 'right-scroll-menu-items-in-green-2-colour-id',
  menuBarColour: 'green-2',
  side: 'right',
};

export const LeftSideInGrey = Template_ScrollMenuItems.bind({});
LeftSideInGrey.args = {
  id: 'left-scroll-menu-items-in-grey-colour-id',
  menuBarColour: 'grey',
  side: 'left',
};

export const RightSideInNavyAndGold = Template_ScrollMenuItems.bind({});
RightSideInNavyAndGold.args = {
  id: 'right-scroll-menu-items-in-navy-and-gold-colour-id',
  menuBarColour: 'navy-and-gold',
  side: 'right',
};

export const LeftSideInNavyAndWhite = Template_ScrollMenuItems.bind({});
LeftSideInNavyAndWhite.args = {
  id: 'left-scroll-menu-items-in-navy-and-white-colour-id',
  menuBarColour: 'navy-and-white',
  side: 'left',
};

export const RightSideInRed = Template_ScrollMenuItems.bind({});
RightSideInRed.args = {
  id: 'right-scroll-menu-items-in-red-colour-id',
  menuBarColour: 'red',
  side: 'right',
};

export const LeftSideWithCustomOnClick = Template_ScrollMenuItems.bind({});
LeftSideWithCustomOnClick.args = {
  id: 'left-scroll-menu-items-with-custom-on-click-id',
  onClick: () => { alert('Clicked the "View previous menu items" button') },
  side: 'left',
};

export const RightSideWithCustomOnClick = Template_ScrollMenuItems.bind({});
RightSideWithCustomOnClick.args = {
  id: 'right-scroll-menu-items-with-custom-on-click-id',
  onClick: () => { alert('Clicked the "View next menu items" button') },
  side: 'right',
};
