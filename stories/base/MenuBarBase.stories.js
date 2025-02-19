/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { MenuBarBase } from '../../src';

export default {
  title: 'Page Template/Menu Bar Base',
  component: MenuBarBase,
  tags: ['autodocs'],
};

/**
 * Menu Bar Base component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MenuBarBase = args => {
	return <React.Fragment>
		<MenuBarBase {...args} >
			This component is designed to act as a baseline / template on which all menu bar components can be developed.
		</MenuBarBase>
	</React.Fragment>;
}
export const Default = Template_MenuBarBase.bind({});
Default.args = {};

export const CustomIdWhiteBackground = Template_MenuBarBase.bind({});
CustomIdWhiteBackground.args = {
  backgroundColour: 'white',
  id: 'custom-id',
};

export const DefaultIdRedBackground = Template_MenuBarBase.bind({});
DefaultIdRedBackground.args = {
  backgroundColour: 'red',
};

export const DefaultIdGreyBackground = Template_MenuBarBase.bind({});
DefaultIdGreyBackground.args = {
  backgroundColour: 'grey',
};

export const DefaultIdGreenBackground = Template_MenuBarBase.bind({});
DefaultIdGreenBackground.args = {
  backgroundColour: 'green',
};

export const DefaultIdGreen2Background = Template_MenuBarBase.bind({});
DefaultIdGreen2Background.args = {
  backgroundColour: 'green-2',
};

export const DefaultIdGoldBackground = Template_MenuBarBase.bind({});
DefaultIdGoldBackground.args = {
  backgroundColour: 'gold',
};

export const DefaultIdNavyBackgroundGoldText = Template_MenuBarBase.bind({});
DefaultIdNavyBackgroundGoldText.args = {
  backgroundColour: 'navy-and-gold',
};

export const DefaultIdNavyBackgroundWhiteText = Template_MenuBarBase.bind({});
DefaultIdNavyBackgroundWhiteText.args = {
  backgroundColour: 'navy-and-white',
};
