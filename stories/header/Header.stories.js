/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { Header } from '../../src';
// import headerBgImage from '../images/files/header-bg-image.png';
import storybookLogo from '../images/files/storybook-logo.svg';
import storybookLogoLong from '../images/files/storybook-logo-long.svg';

export default {
  title: 'Header Components/Header',
  component: Header,
  tags: ['autodocs'],
};

/**
 * Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_Header = args => {
  return <React.Fragment>
    <Header {...args} >
      <p>This component is designed to act as a header component in a web application.</p>
      <p>This version of the header component is rendering custom developer content.</p>
    </Header>
  </React.Fragment>;
}
export const DefaultWithCustomContent = Template_Header.bind({});
DefaultWithCustomContent.args = {
  id: 'default-with-custom-content',
};

export const SmallHeaderWithSquareLogoImageOnly = Template_Header.bind({});
SmallHeaderWithSquareLogoImageOnly.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-square-logo-image-only',
  logoSrc: storybookLogo,
  logoType: 'square',
  size: 'small',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: undefined,
  titleTextContent: undefined,
};

export const SmallHeaderWithRectangleLogoImageOnly = Template_Header.bind({});
SmallHeaderWithRectangleLogoImageOnly.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-rectangle-logo-image-only',
  logoSrc: storybookLogoLong,
  logoType: 'rectangle',
  size: 'small',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: undefined,
  titleTextContent: undefined,
};

export const TallHeaderWithLogoImageOnly = Template_Header.bind({});
TallHeaderWithLogoImageOnly.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'tall-with-logo-image-only',
  logoSrc: storybookLogoLong,
  logoType: undefined,
  size: 'tall',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: undefined,
  titleTextContent: undefined,
};

export const SmallHeaderWithTitleTextOnly = Template_Header.bind({});
SmallHeaderWithTitleTextOnly.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-title-text-only',
  logoSrc: undefined,
  logoType: undefined,
  size: 'small',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};

export const SmallHeaderWithTitleTextAndSubtitleText = Template_Header.bind({});
SmallHeaderWithTitleTextAndSubtitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-title-text-and-subtitle-text',
  logoSrc: undefined,
  logoType: undefined,
  size: 'small',
  subtitleTextColour: 'black',
  subtitleTextContent: 'Subtitle text content',
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};

export const TallHeaderWithTitleTextOnly = Template_Header.bind({});
TallHeaderWithTitleTextOnly.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'tall-with-title-text-only',
  logoSrc: undefined,
  logoType: undefined,
  size: 'tall',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Tall Header Title Text Content',
};

export const TallHeaderWithTitleTextAndSubtitleText = Template_Header.bind({});
TallHeaderWithTitleTextAndSubtitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'tall-with-title-text-and-subtitle-text',
  logoSrc: undefined,
  logoType: undefined,
  size: 'tall',
  subtitleTextColour: 'black',
  subtitleTextContent: 'Subtitle text content',
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Tall Header Title Text Content',
};

export const SmallHeaderWithLogoImageAndTitleText = Template_Header.bind({});
SmallHeaderWithLogoImageAndTitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-logo-image-and-title-text',
  logoSrc: storybookLogo,
  logoType: undefined,
  size: 'small',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};

export const SmallHeaderWithLogoImageAndTitleTextAndSubtitleText = Template_Header.bind({});
SmallHeaderWithLogoImageAndTitleTextAndSubtitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'small-with-logo-image-and-title-text-and-subtitle-text',
  logoSrc: storybookLogo,
  logoType: undefined,
  size: 'small',
  subtitleTextColour: 'black',
  subtitleTextContent: 'Subtitle text content',
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};

export const TallHeaderWithLogoImageAndTitleText = Template_Header.bind({});
TallHeaderWithLogoImageAndTitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'tall-with-logo-image-and-title-text',
  logoSrc: storybookLogoLong,
  logoType: undefined,
  size: 'tall',
  subtitleTextColour: undefined,
  subtitleTextContent: undefined,
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};

export const TallHeaderWithLogoImageAndTitleTextAndSubtitleText = Template_Header.bind({});
TallHeaderWithLogoImageAndTitleTextAndSubtitleText.args = {
  backgroundColour: 'grey',
  backgroundImageSrc: undefined,
  id: 'tall-with-logo-image-and-title-text-and-subtitle-text',
  logoSrc: storybookLogoLong,
  logoType: undefined,
  size: 'tall',
  subtitleTextColour: 'black',
  subtitleTextContent: 'Subtitle text content',
  topBorder: 'off',
  titleTextColour: 'black',
  titleTextContent: 'Small Header Title Text Content',
};
