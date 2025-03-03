/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { FooterBase, Header, MainBase, MenuBarBase } from '../../../src';
import ckcscoiLogo from '../../images/files/ckcscoi-logo.png';

export default {
  title: 'Mock Pages/CKCS Club of Ireland (Home)',
  tags: ['autodocs'],
};

/**
 * Full page template for the Home page
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = args => {
  return <React.Fragment>
    <Header backgroundColour="white" id="home-page" logoSrc={ckcscoiLogo} size="tall"  topBorder="green-2" />
    <MenuBarBase backgroundColour="green-2">
      Menu Bar Content Will Be Rendered Here
    </MenuBarBase>
    <MainBase backgroundColour="white" title="The Cavalier King Charles Spaniel Club of Ireland - Home Page">
      The main content for the current page will go here.
    </MainBase>
    <FooterBase backgroundColour="green-2">
      Footer Content Will Be Rendered Here
    </FooterBase>
  </React.Fragment>;
}

export const HomePage = Template_HomePage.bind({});
