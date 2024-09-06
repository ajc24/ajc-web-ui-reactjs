/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import {
  FooterTypeA,
  HeaderTypeA,
  MainContent,
  MenuBarTypeA,
} from '../../src';

export default {
  title: 'Page Templates/Blank Template Type A',
  tags: ['autodocs'],
};

/**
 * Blank Template Type A page template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BlankTemplateTypeA = () => {
	return <React.Fragment>
    <HeaderTypeA id="blank-template-type-a-header" showTopBorder={true} topBorderColour="red" backgroundColour="grey">
      Header Type A
    </HeaderTypeA>
    <MenuBarTypeA id="blank-template-type-a-menu-bar" backgroundColour="red">
			Menu Bar Type A
		</MenuBarTypeA>
    <MainContent backgroundColour="grey" title="Blank Page Template Type A">
      Main Content
    </MainContent>
		<FooterTypeA id="blank-template-type-a-footer" backgroundColour="red">
			Footer Type A
		</FooterTypeA>
	</React.Fragment>;
}

export const Default = Template_BlankTemplateTypeA.bind({});
