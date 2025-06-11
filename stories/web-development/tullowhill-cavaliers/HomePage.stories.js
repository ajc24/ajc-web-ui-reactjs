/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderTallLogo } from '../../../src';
import tullowhillCavaliersLogo from './images/tullowhill-cavaliers-logo.png';

export default {
  tags: ['!autodocs'],
  title: 'Web Development/Tullowhill Cavaliers/Home Page',
};

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
  </React.Fragment>;
};

export const HomePage = {
  render: Template_HomePage,
};
