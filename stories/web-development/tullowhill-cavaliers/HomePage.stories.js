/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import {
  HeaderTallLogo,
  MenuBar,
} from '../../../src';
import tullowhillCavaliersLogo from './images/tullowhill-cavaliers-logo.png';
import { getMenuBarData } from './data';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/Tullowhill Cavaliers/Home Page',
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
