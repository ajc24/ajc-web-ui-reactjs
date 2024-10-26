/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import MenuBarBase from '../../src/components/base/MenuBarBase';

export default {
  title: 'Base/Menu Bar Base',
  component: MenuBarBase,
  tags: ['autodocs'],
};

/**
 * Menu Bar Base component template to be used in all stories
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
Default.args = {
  id: 'default-id--menu-bar-container',
};
