/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { ArrowIcon } from '../../src';

export default {
  title: 'Icons/Arrow Icon',
  component: ArrowIcon,
  tags: ['autodocs'],
};

/**
 * Arrow Icon component template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_ArrowIcon = args => {
	return <React.Fragment>
		<ArrowIcon {...args} />
	</React.Fragment>;
}

export const Default = Template_ArrowIcon.bind({});
Default.args = {
  id: 'default-arrow-icon',
};

export const UpArrowIconSize1 = Template_ArrowIcon.bind({});
UpArrowIconSize1.args = {
  direction: 'up',
  id: 'up-arrow-icon-size-1',
};

export const DownArrowIconSize1 = Template_ArrowIcon.bind({});
DownArrowIconSize1.args = {
  direction: 'down',
  id: 'down-arrow-icon-size-1',
};

export const LeftArrowIconSize1 = Template_ArrowIcon.bind({});
LeftArrowIconSize1.args = {
  direction: 'left',
  id: 'left-arrow-icon-size-1',
};

export const RightArrowIconSize1 = Template_ArrowIcon.bind({});
RightArrowIconSize1.args = {
  direction: 'right',
  id: 'right-arrow-icon-size-1',
};

export const ArrowIconInGoldColourSize2 = Template_ArrowIcon.bind({});
ArrowIconInGoldColourSize2.args = {
  colour: 'gold',
  direction: 'right',
  id: 'arrow-icon-in-gold-size-2',
  size: '2',
};
