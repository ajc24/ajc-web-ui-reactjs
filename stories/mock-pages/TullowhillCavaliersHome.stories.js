/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { SmallHeader, TallHeader } from '../../src';
import benjiLogo1 from '../images/files/logo-benji.png';
import benjiLogo2 from '../images/files/logo-benji-2.png';

export default {
  title: 'Mock Pages/Tullowhill Cavaliers',
  tags: ['autodocs'],
};

/**
 * Small Header component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HomePage = args => {
  return <React.Fragment>
    {
      args.headerType === "small" &&
        <SmallHeader backgroundColour="grey" headerTitleTextId="home-page-small-header" id="home-page-small-header" logoSrc={benjiLogo1}
          titleText="Tullowhill Cavaliers" titleTextColour="black" />
    }
    {
      args.headerType === "tall" &&
        <TallHeader backgroundColour="grey" headerTitleTextId="home-page-small-header" id="home-page-small-header" logoSrc={benjiLogo2}
          titleText="Tullowhill Cavaliers" titleTextColour="black"/>
    }
  </React.Fragment>;
}

export const HomePageWithSmallHeader = Template_HomePage.bind({});
HomePageWithSmallHeader.args = {
  headerType: "small",
};

export const HomePageWithTallHeader = Template_HomePage.bind({});
HomePageWithTallHeader.args = {
  headerType: "tall",
};
