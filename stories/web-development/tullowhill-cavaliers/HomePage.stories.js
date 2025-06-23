/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import {
  Footer,
  HeaderTallLogo,
  Main,
  MenuBar,
  ThreePhotoCollage,
} from '../../../src';
import benjiAndFreddiePhoto from './images/benji-and-freddie.jpg';
import benjiPhoto from './images/benji.jpg';
import freddiePhoto from './images/freddie.jpg';
import tullowhillCavaliersLogo from './images/tullowhill-cavaliers-logo.png';
import { getMenuBarData } from './data';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/Tullowhill Cavaliers/Home Page',
};

const imageLowerData = {
  alt: 'A photo of Benji and Freddie playing together in the garden.',
  src: benjiAndFreddiePhoto,
};
const imageUpperLeftData = {
  alt: 'A picture of Benji, standing tall and proud in the garden.',
  src: benjiPhoto,
};
const imageUpperRightData = {
  alt: 'A picture of Freddie eagerly awaiting his turn to enter the ring at Crufts 2025.',
  src: freddiePhoto,
};

/**
 * Home Page template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = () => {
  return <React.Fragment>
    <HeaderTallLogo
      alt="Logo image for Tullowhill Cavaliers showing two outlines of Benji, our ruby Cavalier dog and the Tullowhill Cavaliers title text below him."
      backgroundColour="grey" id="tullowhill-cavaliers-logo" src={tullowhillCavaliersLogo}
    />
    <MenuBar backgroundColour="navy-and-gold" id="tullowhill-cavaliers-navigation" menuBarItemsList={getMenuBarData()} />
    <Main backgroundColour="grey" id="tullowhill-cavaliers-home-page" title="Home Page - Tullowhill Cavaliers">
      <ThreePhotoCollage id="tullowhill-cavaliers-dogs" imageLowerData={imageLowerData} imageUpperLeftData={imageUpperLeftData} imageUpperRightData={imageUpperRightData} />
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
