/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import {
  HeaderTallLogo,
  MenuBar,
} from '../../../src';
import ckcscoiLogo from './images/ckcscoi-logo.png';
import { getMenuBarData } from './data';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/CKCS Club Of Ireland/Home Page',
};

/**
 * Home Page template
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = () => {
  return <React.Fragment>
    <HeaderTallLogo
      alt="Logo image for The Cavalier King Charles Spaniel Club of Ireland. Shows a blenheim cavalier surrounded by shamrock leaves which are in the colours of the Irish flag."
      backgroundColour="white" id="ckcscoi-logo" src={ckcscoiLogo}
    />
    <MenuBar backgroundColour="green" id="ckcscoi-navigation" menuBarItemsList={getMenuBarData()} />
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
