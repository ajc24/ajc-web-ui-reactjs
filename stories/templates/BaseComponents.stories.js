/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import FooterBase from '../../src/components/base/FooterBase';
import HeaderBase from '../../src/components/base/HeaderBase';
import MainBase from '../../src/components/base/MainBase';
import MenuBarBase from '../../src/components/base/MenuBarBase';

export default {
  title: 'Page Templates/Base Components',
  tags: ['autodocs'],
};

/**
 * Footer Base component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_BaseComponents = args => {
	return <React.Fragment>
		<HeaderBase id="custom-header-id">
      This is a HeaderBase component.
    </HeaderBase>
    <MenuBarBase id="custom-menu-bar-id">
      This is a MenuBarBase component.
    </MenuBarBase>
    <MainBase id="custom-main-id" title="Page Template: Base Components">
      This is a MainBase component.
    </MainBase>
    <FooterBase>
      This is a FooterBase component.
    </FooterBase>
	</React.Fragment>;
}
export const Default = Template_BaseComponents.bind({});
