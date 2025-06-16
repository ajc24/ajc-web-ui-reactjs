/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderTallLogo, MenuBar } from '../../../src';
import tullowhillCavaliersLogo from './images/tullowhill-cavaliers-logo.png';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/Tullowhill Cavaliers/Home Page',
};

const menuBarItemsList = [
  {
    href: '#',
    id: 'menu-bar-item-1',
    title: 'Item 1',
  },
  {
    href: '#',
    id: 'menu-bar-item-2',
    title: 'Item 2',
  },
  {
    href: '#',
    id: 'menu-bar-item-3',
    title: 'Item 3',
  }
];

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
    <MenuBar backgroundColour="navy-and-gold" id="tullowhill-cavaliers" menuBarItemsList={menuBarItemsList} />
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
