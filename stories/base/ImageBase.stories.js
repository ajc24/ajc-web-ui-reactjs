/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import ImageBase from '../../src/components/base/ImageBase';
import benjiLogo from '../../src/components/images/files/logo-benji.png';

export default {
  title: 'Base/Image Base',
  component: ImageBase,
  tags: ['autodocs'],
};

/**
 * Image Base component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_ImageBase = args => {
	return <React.Fragment>
		<ImageBase {...args} />
	</React.Fragment>;
}
export const Default = Template_ImageBase.bind({});
Default.args = {
  id: 'default-image-id',
  src: benjiLogo,
};

export const AtACustomSize = Template_ImageBase.bind({});
AtACustomSize.args = {
  alt: 'A picture of Benji, our ruby Cavalier King Charles Spaniel. His photo acts as a logo.',
  height: 350,
  id: 'custom-image-id',
  src: benjiLogo,
  width: 350,
};

export const WithCustomOnClick = Template_ImageBase.bind({});
WithCustomOnClick.args = {
  height: 250,
  id: 'image-with-custom-click-id',
  onClick: () => { alert('Clicked on the image.') },
  src: benjiLogo,
  width: 250,
};
