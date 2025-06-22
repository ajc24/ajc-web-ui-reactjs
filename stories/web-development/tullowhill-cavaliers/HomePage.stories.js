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

const menuBarItemsListData = [
  {
    href: '#',
    id: 'home-page',
    title: 'Home',
  },
  {
    dropdownMenuBarItemsList: [
      {
        href: '#',
        id: 'crate-training-page',
        title: 'Crate Training',
      },
      {
        href: '#',
        id: 'toilet-training-page',
        title: 'Toilet Training',
      },
      {
        href: '#',
        id: 'feeding-page',
        title: 'Feeding Guidelines',
      },
    ],
    id: 'puppy-care-menu',
    title: 'Puppy Care',
  },
  {
    href: '#',
    id: 'dog-showing-page',
    title: 'Dog Showing',
  },
  {
    href: '#',
    id: 'about-us-page',
    title: 'About Us',
  },
  {
    href: '#',
    id: 'contact-us-page',
    title: 'Contact Us',
  },
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
    <MenuBar backgroundColour="navy-and-gold" id="tullowhill-cavaliers-navigation" menuBarItemsList={menuBarItemsListData} />
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
