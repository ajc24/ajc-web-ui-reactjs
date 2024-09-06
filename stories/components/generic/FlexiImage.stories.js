/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { FlexiImage } from '../../../src';
import cuteBenji from '../images/logo-benji.png';

export default {
  title: 'General/Flexible Image',
  component: FlexiImage,
  tags: ['autodocs'],
};

/**
 * Flexible Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FlexiImage = args => {
	return <React.Fragment>
		<FlexiImage {...args} />
	</React.Fragment>;
}

export const Default = Template_FlexiImage.bind({});
Default.args = {
  alt: 'The logo image did not load as expected.',
  id: 'general-image--default',
  src: cuteBenji,
};

export const WithCustomHeightAndWidth = Template_FlexiImage.bind({});
WithCustomHeightAndWidth.args = {
  alt: 'The logo image did not load as expected.',
  height: 300,
  id: 'general-image--custom-size',
  src: cuteBenji,
  width: 300,
};

export const WithCustomOnClick = Template_FlexiImage.bind({});
WithCustomOnClick.args = {
  alt: 'The logo image did not load as expected.',
  id: 'general-image--custom-on-click',
  onClick: () => { alert('Clicked!'); },
  src: cuteBenji,
};
