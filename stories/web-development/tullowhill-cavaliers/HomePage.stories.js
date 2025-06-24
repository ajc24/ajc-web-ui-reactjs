/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import {
  Footer,
  HeaderTallLogo,
  Main,
  MenuBar,
  PageTitleText,
  ThreePhotoCollage,
} from '../../../src';
import bbbAndOwitpPhoto from './images/bbb-and-owitp.jpg';
import bbbPhoto from './images/bbb.jpg';
import owitpPhoto from './images/owitp.jpg';
import tullowhillCavaliersLogo from './images/tullowhill-cavaliers-logo.png';
import { getMenuBarData } from './data';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/Tullowhill Cavaliers/Home Page',
};

const imageLowerData = {
  alt: 'A photo of Bannow Benjamin Black and Owencurra Walk In The Park playing together in the garden.',
  src: bbbAndOwitpPhoto,
};
const imageUpperLeftData = {
  alt: 'A picture of Bannow Benjamin Black, standing tall and proud in the garden.',
  src: bbbPhoto,
};
const imageUpperRightData = {
  alt: 'A picture of Owencurra Walk In The park eagerly awaiting his turn to enter the ring at Crufts 2025.',
  src: owitpPhoto,
};

/**
 * Home Page template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = () => {
  return <React.Fragment>
    <HeaderTallLogo
      alt="Logo image for Tullowhill Cavaliers showing two outlines of Bannow Benjamin Black, our ruby Cavalier dog with the Tullowhill Cavaliers title text below him."
      backgroundColour="grey" id="tullowhill-cavaliers-logo" src={tullowhillCavaliersLogo}
    />
    <MenuBar backgroundColour="navy-and-gold" id="tullowhill-cavaliers-navigation" menuBarItemsList={getMenuBarData()} />
    <Main backgroundColour="grey" id="tullowhill-cavaliers-home-page" title="Home Page - Tullowhill Cavaliers">
      <PageTitleText alignment="centre" id="tullowhill-cavaliers-home-page" underline={false}>
        Welcome to Tullowhill Cavaliers
      </PageTitleText>
      <ThreePhotoCollage borderColour="grey" id="tullowhill-cavaliers-dogs" imageLowerData={imageLowerData} imageUpperLeftData={imageUpperLeftData}
        imageUpperRightData={imageUpperRightData} />
    </Main>
    <Footer backgroundColour="navy-and-gold" id="tullowhill-cavaliers-footer" isBoldFont={true}>
      Website Designed and Developed by Anthony Cox and Susan Mitchell in 2025
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
