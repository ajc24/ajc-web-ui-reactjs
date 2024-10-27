/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { InformativeImage } from '../../src';
import benjiLogo from '../../src/components/images/files/logo-benji.png';

export default {
  title: 'Images/Informative Image',
  component: InformativeImage,
  tags: ['autodocs'],
};

/**
 * Informative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_InformativeImage = args => {
	return <React.Fragment>
		<InformativeImage {...args} />
	</React.Fragment>;
}
export const Default = Template_InformativeImage.bind({});
Default.args = {
  alt: 'A picture of Benji, our ruby Cavalier King Charles Spaniel. His photo acts as a logo.',
  id: 'default-image-id',
  src: benjiLogo,
};

export const AtACustomSize = Template_InformativeImage.bind({});
AtACustomSize.args = {
  alt: 'A picture of Benji, our ruby Cavalier King Charles Spaniel. His photo acts as a logo.',
  height: 350,
  id: 'custom-image-id',
  src: benjiLogo,
  width: 350,
};
