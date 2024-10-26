/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import FooterBase from '../../src/components/base/FooterBase';

export default {
  title: 'Base/Footer Base',
  component: FooterBase,
  tags: ['autodocs'],
};

/**
 * Footer Base component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FooterBase = args => {
	return <React.Fragment>
		<FooterBase {...args} >
			This component is designed to act as a baseline / template on which all footer components can be developed.
		</FooterBase>
	</React.Fragment>;
}
export const Default = Template_FooterBase.bind({});
Default.args = {
  id: 'default-id--footer-container',
  size: 'default',
};
