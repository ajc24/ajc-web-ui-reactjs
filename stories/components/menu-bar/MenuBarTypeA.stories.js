/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { MenuBarTypeA } from '../../../src';

export default {
  title: 'Menu Bar/Menu Bar Type A',
  component: MenuBarTypeA,
  tags: ['autodocs'],
};

/**
 * Menu Bar Type A component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MenuBarTypeA = args => {
	return <React.Fragment>
		<MenuBarTypeA {...args} >
			This component is designed to act as a menu bar component, handling navigation within your web application.
		</MenuBarTypeA>
	</React.Fragment>;
}

export const DefaultBlack = Template_MenuBarTypeA.bind({});
DefaultBlack.args = {
  id: 'menu-bar-type-a--default-black',
};

export const Grey = Template_MenuBarTypeA.bind({});
Grey.args = {
  backgroundColour: 'grey',
  id: 'menu-bar-type-a--grey',
};

export const Red = Template_MenuBarTypeA.bind({});
Red.args = {
  backgroundColour: 'red',
  id: 'menu-bar-type-a--red',
};
