/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import {
  HeaderLogoTypeA,
  HeaderTypeA,
} from '../../../src';
import cuteBenji from '../images/logo-benji.png';

export default {
  title: 'Header/Header Logo Type A',
  component: HeaderLogoTypeA,
  tags: ['autodocs'],
};

/**
 * Header Logo Type A component template, rendered inside a header component with no border
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderLogoTypeA_NoBorder = () => {
	return <React.Fragment>
    <HeaderTypeA id="header-type-a--no-border" backgroundColour="grey-2" >
      <HeaderLogoTypeA id="header-logo-type-a--no-border" src={cuteBenji} />
    </HeaderTypeA>
	</React.Fragment>;
}

/**
 * Header Logo Type A component template, rendered inside a header component with no border
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderLogoTypeA_WithBorder = () => {
	return <React.Fragment>
    <HeaderTypeA id="header-type-a--no-border" backgroundColour="grey-2" showTopBorder={true} topBorderColour="bright-red" >
      <HeaderLogoTypeA id="header-logo-type-a--with-border" src={cuteBenji} />
    </HeaderTypeA>
	</React.Fragment>;
}

export const InsideHeaderTypeAWithNoBorder = Template_HeaderLogoTypeA_NoBorder.bind({});
export const InsideHeaderTypeAWithBorder = Template_HeaderLogoTypeA_WithBorder.bind({});
