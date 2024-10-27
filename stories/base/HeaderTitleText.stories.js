/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import HeaderTitleText from '../../src/components/base/HeaderTitleText';

export default {
  title: 'Base/Header Title Text',
  component: HeaderTitleText,
  tags: ['autodocs'],
};

/**
 * Header Title Text component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderTitleText = args => {
	return <React.Fragment>
		<HeaderTitleText {...args} />
	</React.Fragment>;
}
export const Default = Template_HeaderTitleText.bind({});
Default.args = {
	children: 'Header Title Text in Default State',
  id: 'default-id',
};

export const WithWhiteText = Template_HeaderTitleText.bind({});
WithWhiteText.args = {
	children: 'Header Title Text in White Colour',
  id: 'with-white-text-id',
	isTallHeader: false,
	textColour: 'white',
};

export const WithExtraLongTitle = Template_HeaderTitleText.bind({});
WithExtraLongTitle.args = {
	children: 'Really Long Title Text Content Which Will Be Wrapped And Truncated On Very Small Screens',
  id: 'with-extra-long-title-id',
	isTallHeader: false,
	textColour: 'black',
};
