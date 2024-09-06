/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { HeaderTypeA } from '../../../src';
import headerBackgroundTestImage from '../images/header-background-test.png';

export default {
  title: 'Header/Header Type A',
  component: HeaderTypeA,
  tags: ['autodocs'],
};

/**
 * Header Type A component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderTypeA = args => {
	return <React.Fragment>
		<HeaderTypeA {...args} >
			This component is designed to act as a header component for your web application.
		</HeaderTypeA>
	</React.Fragment>;
}

export const Default = Template_HeaderTypeA.bind({});
Default.args = {
  id: 'header-type-a--default',
};

export const WithBackgroundColourDefaultTransparent = Template_HeaderTypeA.bind({});
WithBackgroundColourDefaultTransparent.args = {
  backgroundColour: 'transparent',
  id: 'header-type-a--with-background-colour-transparent',
};

export const WithBackgroundColourWhite = Template_HeaderTypeA.bind({});
WithBackgroundColourWhite.args = {
  backgroundColour: 'white',
  id: 'header-type-a--with-background-colour-white',
};

export const WithBackgroundColourGrey = Template_HeaderTypeA.bind({});
WithBackgroundColourGrey.args = {
  backgroundColour: 'grey',
  id: 'header-type-a--with-background-colour-grey',
};

export const WithBackgroundColourYellow = Template_HeaderTypeA.bind({});
WithBackgroundColourYellow.args = {
  backgroundColour: 'yellow',
  id: 'header-type-a--with-background-colour-yellow',
};

export const WithBackgroundImage = Template_HeaderTypeA.bind({});
WithBackgroundImage.args = {
  backgroundColour: 'white',
  backgroundImage: headerBackgroundTestImage,
  id: 'header-type-a--with-background-image',
};

export const WithBorderDefaultBlack = Template_HeaderTypeA.bind({});
WithBorderDefaultBlack.args = {
  backgroundColour: 'grey',
  id: 'header-type-a--with-border-default',
  showTopBorder: true,
};

export const WithBorderGrey = Template_HeaderTypeA.bind({});
WithBorderGrey.args = {
  backgroundColour: 'grey',
  id: 'header-type-a--with-border-grey',
  showTopBorder: true,
  topBorderColour: 'grey',
};

export const WithBorderRed = Template_HeaderTypeA.bind({});
WithBorderRed.args = {
  backgroundColour: 'grey',
  id: 'header-type-a--with-border-red',
  showTopBorder: true,
  topBorderColour: 'red',
};

export const WithAlignmentDefaultLeft = Template_HeaderTypeA.bind({});
WithAlignmentDefaultLeft.args = {
  alignment: 'left',
  backgroundColour: 'grey',
  id: 'header-type-a--with-alignment-left',
};

export const WithAlignmentCenter = Template_HeaderTypeA.bind({});
WithAlignmentCenter.args = {
  alignment: 'center',
  backgroundColour: 'grey',
  id: 'header-type-a--with-alignment-center',
};

export const WithAlignmentRight = Template_HeaderTypeA.bind({});
WithAlignmentRight.args = {
  alignment: 'right',
  backgroundColour: 'grey',
  id: 'header-type-a--with-alignment-right',
};
