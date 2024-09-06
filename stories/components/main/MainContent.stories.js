/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { MainContent } from '../../../src';

export default {
  title: 'Main/Main Content',
  component: MainContent,
  tags: ['autodocs'],
};

/**
 * Main Content component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_MainContent = args => {
	return <React.Fragment>
		<MainContent {...args} >
			This component is designed to act as the main content component for your web application.
		</MainContent>
	</React.Fragment>;
}

export const WithBackgroundColourDefaultTransparent = Template_MainContent.bind({});
WithBackgroundColourDefaultTransparent.args = {
  title: 'main-content--bg-default-transparent',
};

export const WithBackgroundColourWhite = Template_MainContent.bind({});
WithBackgroundColourWhite.args = {
  backgroundColour: 'white',
  title: 'main-content--bg-white',
};

export const WithBackgroundColourGrey = Template_MainContent.bind({});
WithBackgroundColourGrey.args = {
  backgroundColour: 'grey',
  title: 'main-content--bg-grey',
};

export const WithBackgroundColourYellow = Template_MainContent.bind({});
WithBackgroundColourYellow.args = {
  backgroundColour: 'yellow',
  title: 'main-content--bg-yellow',
};
