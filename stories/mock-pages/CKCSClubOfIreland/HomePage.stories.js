/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, Header, MainBase, MenuBar } from '../../../src';
import ckcscoiLogo from '../../images/files/ckcscoi-logo.png';

export default {
  title: 'Mock Pages/CKCS Club of Ireland (Home)',
  tags: ['autodocs'],
};

/* Data for use in the mock page */
const headerLogoAltText = 'Logo image for The Cavalier King Charles Spaniel Club of Ireland. Shows a blenheim cavalier surrounded by shamrock leaves which show the colours of the Irish flag.';
const menuBarData = [
  {
    href: '#',
    id: 'home-page',
    title: 'Home',
  },
  {
    href: '#',
    id: 'about-the-club',
    title: 'About The Club',
  },
  {
    href: '#',
    id: 'about-the-breed',
    title: 'About The Breed',
  },
  {
    href: '#',
    id: 'shows',
    title: 'Shows',
  },
  {
    href: '#',
    id: 'champions',
    title: 'Champions',
  },
  {
    href: '#',
    id: 'links',
    title: 'Links',
  },
  {
    href: '#',
    id: 'contact',
    title: 'Contact',
  },
];

/**
 * Full page template for the Home page
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = args => {
  return <React.Fragment>
    <Header backgroundColour="white" id="home-page" logoAlt={headerLogoAltText} logoSrc={ckcscoiLogo}
      size="tall"  topBorder="green-2" />
    <MenuBar id="home-page" backgroundColour="green-2" menuItemsList={menuBarData} />
    <MainBase backgroundColour="white" title="The Cavalier King Charles Spaniel Club of Ireland - Home Page">
      The main content for the current page will go here.
    </MainBase>
    <FooterBase backgroundColour="green-2">
      Footer Content Will Be Rendered Here
    </FooterBase>
  </React.Fragment>;
}

export const HomePage = Template_HomePage.bind({});
