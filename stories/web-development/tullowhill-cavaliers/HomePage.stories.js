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
  },
  {
    href: '#',
    id: 'menu-bar-item-4',
    title: 'Item 4',
  },
  {
    href: '#',
    id: 'menu-bar-item-5',
    title: 'Item 5',
  },
  {
    href: '#',
    id: 'menu-bar-item-6',
    title: 'Item 6',
  },
  {
    href: '#',
    id: 'menu-bar-item-7',
    title: 'Item 7',
  },
  {
    href: '#',
    id: 'menu-bar-item-8',
    title: 'Item 8',
  },
  {
    href: '#',
    id: 'menu-bar-item-9',
    title: 'Item 9',
  },
  {
    href: '#',
    id: 'menu-bar-item-10',
    title: 'Item 10',
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
