/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import HeaderSubtitleText from '../../src/components/base/HeaderSubtitleText';
import HeaderTitleText from '../../src/components/base/HeaderTitleText';

export default {
  title: 'Base/Header Subtitle Text',
  component: HeaderSubtitleText,
  tags: ['autodocs'],
};

/**
 * Header Subtitle Text component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderSubtitleText = args => {
	return <React.Fragment>
		<HeaderSubtitleText {...args} />
	</React.Fragment>;
};

const Template_HeaderTitleAndSubtitleText = args => {
  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <HeaderTitleText {...args.title} />
    <HeaderSubtitleText {...args.subtitle}/>
  </div>
};

export const Default = Template_HeaderSubtitleText.bind({});
Default.args = {
	children: 'Header Subtitle Text in Default State',
  headerTitleTextId: 'undefined',
  id: 'default-id',
};

export const WithWhiteText = Template_HeaderSubtitleText.bind({});
WithWhiteText.args = {
	children: 'Header Subtitle Text in White Colour',
  headerTitleTextId: 'undefined',
  id: 'with-white-text-id',
	isTallHeader: false,
	textColour: 'white',
};

// export const WithExtraLongTitle = Template_HeaderSubtitleText.bind({});
// WithExtraLongTitle.args = {
// 	children: 'Really Long Title Text Content Which Will Be Wrapped And Truncated On Very Small Screens',
//   id: 'with-extra-long-title-id',
// 	isTallHeader: false,
// 	textColour: 'black',
// };

// export const InTallHeader = Template_HeaderSubtitleText.bind({});
// InTallHeader.args = {
// 	children: 'Title Text Will Be Centered Inside A Tall Header Component',
// 	id: 'in-tall-header-id',
// 	isTallHeader: true,
// 	textColour: 'black',
// };
