/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import MainBase from '../../src/components/base/MainBase';

export default {
  title: 'Base/Main Base',
  component: MainBase,
  tags: ['autodocs'],
};

/**
 * Main Base component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MainBase = args => {
	return <React.Fragment>
		<MainBase {...args} >
			This component is designed to act as a baseline / template on which all main components can be developed.
		</MainBase>
	</React.Fragment>;
}
export const Default = Template_MainBase.bind({});
Default.args = {
  id: 'default-id--main-container',
  title: 'Menu Base Component (Storybook)',
};
