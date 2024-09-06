/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import {
  FooterTypeA,
  HeaderLogoTypeA,
  HeaderTypeA,
  MainContent,
  MenuBarTypeA,
} from '../../src';
import benjiLogo from '../components/images/logo-benji.png';

export default {
  title: 'Page Templates/Populated Template 1',
  tags: ['autodocs'],
};

/**
 * Blank Template Type A page template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BlankTemplateTypeA = () => {
	return <React.Fragment>
    <HeaderTypeA id="blank-template-type-a-header" showTopBorder={true} topBorderColour="bright-red" backgroundColour="grey-2">
      <HeaderLogoTypeA id="header-logo-benji" src={benjiLogo} />
    </HeaderTypeA>
    <MenuBarTypeA id="blank-template-type-a-menu-bar" backgroundColour="bright-red">
			Menu Bar Type A
		</MenuBarTypeA>
    <MainContent backgroundColour="grey-2" title="Blank Page Template Type A">
      Main Content
    </MainContent>
		<FooterTypeA id="blank-template-type-a-footer" backgroundColour="bright-red">
			Footer Type A
		</FooterTypeA>
	</React.Fragment>;
}

export const Default = Template_BlankTemplateTypeA.bind({});
