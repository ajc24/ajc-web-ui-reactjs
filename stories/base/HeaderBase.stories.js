/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import HeaderBase from '../../src/components/base/HeaderBase';

export default {
  title: 'Base/Header Base',
  component: HeaderBase,
  tags: ['autodocs'],
};

/**
 * Header Base component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderBase = args => {
	return <React.Fragment>
		<HeaderBase {...args} >
			This component is designed to act as a baseline / template on which all header components can be developed.
		</HeaderBase>
	</React.Fragment>;
}

export const WithDefaultId = Template_HeaderBase.bind({});

export const WithCustomId = Template_HeaderBase.bind({});
WithCustomId.args = {
  id: 'custom-id',
};
