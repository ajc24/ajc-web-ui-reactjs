/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, Header, MainBase, MenuBar } from '../../../src';
import tullowhillCavaliersLogo from '../../images/files/tullowhill-cavaliers-logo-larger.png';

export default {
  title: 'Mock Pages/Tullowhill Cavaliers (Home)',
  tags: ['autodocs'],
};

/* Data for use in the mock page */
const headerLogoAltText = 'Logo image for Tullowhill Cavaliers showing two outlines of Benji, our ruby Cavalier dog and the Tullowhill Cavaliers title text below him.';
const menuBarData = [
  {
    href: '#',
    id: 'menu-item-link-1',
    title: 'Menu Item Link 1',
  },
  {
    href: '#',
    id: 'menu-item-link-2',
    title: 'Menu Item Link 2',
  },
  {
    href: '#',
    id: 'menu-item-link-3',
    title: 'Menu Item Link 3',
  },
  {
    href: '#',
    id: 'menu-item-link-4',
    title: 'Menu Item Link 4',
  },
  {
    href: '#',
    id: 'menu-item-link-5',
    title: 'Menu Item Link 5',
  },
  {
    href: '#',
    id: 'menu-item-link-6',
    title: 'Menu Item Link 6',
  },
  {
    href: '#',
    id: 'menu-item-link-7',
    title: 'Menu Item Link 7',
  },
  {
    href: '#',
    id: 'menu-item-link-8',
    title: 'Menu Item Link 8',
  },
  {
    href: '#',
    id: 'menu-item-link-9',
    title: 'Menu Item Link 9',
  },
  {
    href: '#',
    id: 'menu-item-link-10',
    title: 'Menu Item Link 10',
  },
];

/**
 * Full page template for the Home page
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = args => {
  return <React.Fragment>
    <Header backgroundColour="grey" id="home-page" logoAlt={headerLogoAltText} logoSrc={tullowhillCavaliersLogo} size="tall" topBorder="navy" />
    <MenuBar id="home-page" backgroundColour="navy-and-gold" menuItemsList={menuBarData} />
    <MainBase backgroundColour="grey" title="Tullowhill Cavaliers - Home Page">
      The main content for the current page will go here.
    </MainBase>
    <FooterBase backgroundColour="navy-and-gold">
      Footer Content Will Be Rendered Here
    </FooterBase>
  </React.Fragment>;
}

export const HomePage = Template_HomePage.bind({});
