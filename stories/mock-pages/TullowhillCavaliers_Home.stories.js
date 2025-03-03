/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, Header, MainBase, MenuBarBase } from '../../src';
import tullowhillCavaliersLogo from '../images/files/tullowhill-cavaliers-logo-larger.png';

export default {
  title: 'Mock Pages/Tullowhill Cavaliers (Home)',
  tags: ['autodocs'],
};

/**
 * Full page template for the Home page
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = args => {
  return <React.Fragment>
    <Header backgroundColour="grey" id="home-page" logoSrc={tullowhillCavaliersLogo} size="tall"  topBorder="navy" />
    <MenuBarBase backgroundColour="navy-and-gold">
      Menu Bar Content Will Be Rendered Here
    </MenuBarBase>
    <MainBase backgroundColour="grey" title="Tullowhill Cavaliers - Home Page">
      The main content for the current page will go here.
    </MainBase>
    <FooterBase backgroundColour="navy-and-gold">
      Footer Content Will Be Rendered Here
    </FooterBase>
  </React.Fragment>;
}

export const HomePage = Template_HomePage.bind({});
