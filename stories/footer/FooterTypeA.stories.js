/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { FooterTypeA } from '../../src';

export default {
  title: 'Footer/Footer Type A',
  component: FooterTypeA,
  tags: ['autodocs'],
};

/**
 * Footer Type A component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FooterTypeA = args => {
	return <React.Fragment>
		<FooterTypeA {...args} >
			This component is designed to act as a footer component for your web application.
		</FooterTypeA>
	</React.Fragment>;
}

export const DefaultBlack = Template_FooterTypeA.bind({});
DefaultBlack.args = {
  id: 'footer-type-a--default-black',
};

export const Grey = Template_FooterTypeA.bind({});
Grey.args = {
  backgroundColour: 'grey',
  id: 'footer-type-a--grey',
};

export const Red = Template_FooterTypeA.bind({});
Red.args = {
  backgroundColour: 'red',
  id: 'footer-type-a--red',
};
