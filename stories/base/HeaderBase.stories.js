/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderBase } from '../../src';
import headerBgImage from '../images/files/header-bg-image.png';
import tallHeaderBgImage from '../images/files/tall-header-bg-image.jpg';

export default {
  title: 'Page Template/Header Base',
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
      <p>This component is designed to act as a template component for a header.&nbsp;&nbsp;</p>
      <p>All other header components will be developed from this template.</p>
    </HeaderBase>
  </React.Fragment>;
}
export const Default = Template_HeaderBase.bind({});
Default.args = {};

export const DefaultSizeCustomIdBackgroundImage = Template_HeaderBase.bind({});
DefaultSizeCustomIdBackgroundImage.args = {
  backgroundImageSrc: headerBgImage,
  id: 'header-base-with-custom-id',
  size: 'default',
};

export const SmallSizeWhiteBackgroundGreyTopBorder = Template_HeaderBase.bind({});
SmallSizeWhiteBackgroundGreyTopBorder.args = {
  backgroundColour: 'white',
  size: 'small',
  topBorder: 'grey',
};

export const TallSizeGreyBackgroundRedTopBorder = Template_HeaderBase.bind({});
TallSizeGreyBackgroundRedTopBorder.args = {
  backgroundColour: 'grey',
  size: 'tall',
  topBorder: 'red',
};

export const DefaultSizeWhiteBackgroundGreenTopBorder = Template_HeaderBase.bind({});
DefaultSizeWhiteBackgroundGreenTopBorder.args = {
  backgroundColour: 'white',
  topBorder: 'green',
};

export const TallSizeBackgroundImage = Template_HeaderBase.bind({});
TallSizeBackgroundImage.args = {
  backgroundImageSrc: tallHeaderBgImage,
  size: 'tall',
};
