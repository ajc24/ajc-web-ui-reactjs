/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import {
  Footer,
  HeaderAll,
  Main,
  MenuBar,
} from '../../../src';
import smallHeaderBgImage from './images/small-header-bg-image.png';
import storybookLogoSquare from './images/storybook-logo-square.svg';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/AJC Gaming/Home Page',
};

/**
 * Home Page template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = () => {
  return <React.Fragment>
    <HeaderAll
      backgroundImageSrc={smallHeaderBgImage}
      id="ajc-gaming-header"
      logoImageSrc={storybookLogoSquare}
      subtitleTextContent="Fully independent gaming articles"
      titleTextContent="AJC Gaming"
    />
    <MenuBar backgroundColour="red" id="ajc-gaming-navigation" menuBarItemsList={[]} />
    <Main id="ajc-gaming-home-page" title="Home Page - AJC Gaming">
      Main content will go here when available.
    </Main>
    <Footer backgroundColour="red" id="ajc-gaming-footer" isBoldFont={true}>
      Website Designed and Developed by Anthony Cox in 2025
    </Footer>
  </React.Fragment>;
};

export const HomePage = {
  render: Template_HomePage,
};

export const MobilePhoneTest = {
  globals: {
    viewport: {
      isRotated: false,
      value: 'galaxys9',
    },
  },
  render: Template_HomePage,
};
