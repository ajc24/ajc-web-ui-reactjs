/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { FunctionalImage } from '../../src';
import benjiLogo from '../../src/components/images/files/logo-benji.png';

export default {
  title: 'Images/Functional Image',
  component: FunctionalImage,
  tags: ['autodocs'],
};

/**
 * Informative Image component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_FunctionalImage = args => {
	return <React.Fragment>
		<FunctionalImage {...args} />
	</React.Fragment>;
}
export const Default = Template_FunctionalImage.bind({});
Default.args = {
  alt: 'A picture of Benji, our ruby Cavalier King Charles Spaniel. His photo acts as a logo.',
  id: 'default-image-id',
  onClick: () => { alert('You have successfully clicked the image.')},
  src: benjiLogo,
};

export const AtACustomSize = Template_FunctionalImage.bind({});
AtACustomSize.args = {
  alt: 'A picture of Benji, our ruby Cavalier King Charles Spaniel. His photo acts as a logo.',
  height: 350,
  id: 'custom-image-id',
  onClick: () => { alert('You have successfully clicked the image.')},
  src: benjiLogo,
  width: 350,
};
