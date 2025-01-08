/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import HeaderBase from '../../src/components/base/HeaderBase';
import headerBgImage from '../images/files/header-bg-image.png';

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
export const Default = Template_HeaderBase.bind({});
Default.args = {
  id: 'default-header-base',
  size: 'default',
};

export const WithBackgroundImage = Template_HeaderBase.bind({});
WithBackgroundImage.args = {
  backgroundImageSrc: headerBgImage,
  id: 'header-base-with-background-image',
  size: 'default',
};
