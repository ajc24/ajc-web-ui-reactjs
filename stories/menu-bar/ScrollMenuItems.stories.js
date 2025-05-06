/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { ScrollMenuItems } from '../../src';
import Template_ScrollMenuItems from './template-components/Template_ScrollMenuItems';

export default {
  title: 'Menu Bar Components/Scroll Menu Items',
  component: ScrollMenuItems,
  tags: ['autodocs'],
};

/**
 * Scroll Menu Items component template to be used in all other stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const TemplateBasic_ScrollMenuItems = args => {
  return <React.Fragment>
    <ScrollMenuItems {...args} />
  </React.Fragment>;
}

/**
 * Scroll Menu Items component template which includes enabled / disabled test
 * and focus test
 * @param {JSON} args 
 * @returns {React.Component}
 */
const TemplateFull_ScrollMenuItems = args => {
  return <React.Fragment>
    <Template_ScrollMenuItems {...args} />
  </React.Fragment>;
}

export const Default = TemplateBasic_ScrollMenuItems.bind({});
Default.args = {
  id: 'default-scroll-menu-items-id',
  isDisabled: false,
};

export const LeftSide = TemplateBasic_ScrollMenuItems.bind({});
LeftSide.args = {
  id: 'left-scroll-menu-items-id',
  isDisabled: false,
  side: 'left',
};

export const RightSideInGold = TemplateBasic_ScrollMenuItems.bind({});
RightSideInGold.args = {
  id: 'right-scroll-menu-items-in-gold-colour-id',
  isDisabled: false,
  menuBarColour: 'gold',
  side: 'right',
};

export const LeftSideInGreen = TemplateBasic_ScrollMenuItems.bind({});
LeftSideInGreen.args = {
  id: 'left-scroll-menu-items-in-green-colour-id',
  isDisabled: false,
  menuBarColour: 'green',
  side: 'left',
};

export const RightSideInGreen2 = TemplateBasic_ScrollMenuItems.bind({});
RightSideInGreen2.args = {
  id: 'right-scroll-menu-items-in-green-2-colour-id',
  isDisabled: false,
  menuBarColour: 'green-2',
  side: 'right',
};

export const LeftSideInGrey = TemplateBasic_ScrollMenuItems.bind({});
LeftSideInGrey.args = {
  id: 'left-scroll-menu-items-in-grey-colour-id',
  isDisabled: false,
  menuBarColour: 'grey',
  side: 'left',
};

export const RightSideInNavyAndGold = TemplateBasic_ScrollMenuItems.bind({});
RightSideInNavyAndGold.args = {
  id: 'right-scroll-menu-items-in-navy-and-gold-colour-id',
  isDisabled: false,
  menuBarColour: 'navy-and-gold',
  side: 'right',
};

export const LeftSideInNavyAndWhite = TemplateBasic_ScrollMenuItems.bind({});
LeftSideInNavyAndWhite.args = {
  id: 'left-scroll-menu-items-in-navy-and-white-colour-id',
  isDisabled: false,
  menuBarColour: 'navy-and-white',
  side: 'left',
};

export const RightSideInRed = TemplateBasic_ScrollMenuItems.bind({});
RightSideInRed.args = {
  id: 'right-scroll-menu-items-in-red-colour-id',
  isDisabled: false,
  menuBarColour: 'red',
  side: 'right',
};

export const LeftSideWithCustomOnClick = TemplateBasic_ScrollMenuItems.bind({});
LeftSideWithCustomOnClick.args = {
  id: 'left-scroll-menu-items-with-custom-on-click-id',
  isDisabled: false,
  onClick: () => { alert('Clicked the "View previous menu items" button') },
  side: 'left',
};

export const RightSideWithCustomOnClick = TemplateBasic_ScrollMenuItems.bind({});
RightSideWithCustomOnClick.args = {
  id: 'right-scroll-menu-items-with-custom-on-click-id',
  isDisabled: false,
  onClick: () => { alert('Clicked the "View next menu items" button') },
  side: 'right',
};

export const EnabledAndFocusTest = TemplateFull_ScrollMenuItems.bind({});
EnabledAndFocusTest.args = {};
