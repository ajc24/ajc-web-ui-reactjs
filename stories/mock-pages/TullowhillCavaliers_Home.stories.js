/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, HeaderBase, HeaderLogo, MainBase, MenuBarBase } from '../../src';
import tullowhillCavaliersLogo from '../images/files/tullowhill-cavaliers-logo.png';

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
    <HeaderBase id="home-page" size="tall" backgroundColour="grey" topBorder="navy">
      <HeaderLogo alignment="centre" id="tullowhill-cavaliers-logo" logoType="rectangle" parentHeaderId="home-page" src={tullowhillCavaliersLogo} />
    </HeaderBase>
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
