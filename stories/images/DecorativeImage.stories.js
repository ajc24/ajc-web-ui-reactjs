/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { DecorativeImage } from '../../src';
import benjiLogo from '../../src/components/images/files/logo-benji.png';

export default {
  title: 'Images/Decorative Image',
  component: DecorativeImage,
  tags: ['autodocs'],
};

/**
 * Decorative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_DecorativeImage = args => {
	return <React.Fragment>
		<DecorativeImage {...args} />
	</React.Fragment>;
}
export const Default = Template_DecorativeImage.bind({});
Default.args = {
  id: 'default-image-id',
  src: benjiLogo,
};

export const AtACustomSize = Template_DecorativeImage.bind({});
AtACustomSize.args = {
  height: 350,
  id: 'custom-image-id',
  src: benjiLogo,
  width: 350,
};
