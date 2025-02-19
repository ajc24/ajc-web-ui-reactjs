/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderBase, HeaderLogo } from '../../src';
import storybookLogo from './files/storybook-logo.svg';
import storybookLogoLong from './files/storybook-logo-long.svg';

export default {
  title: 'Images/Header Logo',
  component: HeaderLogo,
  tags: ['autodocs'],
};

/**
 * Header Logo component template to be used in all stories
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderLogo = args => {
  return <React.Fragment>
    <HeaderLogo {...args} />
  </React.Fragment>;
}

/**
 * Header Logo component template, rendered inside the Header Base component
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderLogoInHeaderBase = args => {
  return <React.Fragment>
    <HeaderBase id={args.headerBaseId || 'base-id'} backgroundColour="grey" size={args.headerSize || 'small'} topBorder={args.headerTopBorder || 'off'}>
      <HeaderLogo {...args} />
    </HeaderBase>
  </React.Fragment>;
}

export const Default = Template_HeaderLogo.bind({});
Default.args = {
  id: 'default-id',
  src: storybookLogo,
};

export const SquareImageLeftAligned = Template_HeaderLogo.bind({});
SquareImageLeftAligned.args = {
  alignment: 'left',
  id: 'square-image-left-aligned-id',
  logoType: 'square',
  src: storybookLogo,
};

export const SquareImageCentreAligned = Template_HeaderLogo.bind({});
SquareImageCentreAligned.args = {
  alignment: 'centre',
  id: 'square-image-centre-aligned-id',
  logoType: 'square',
  src: storybookLogo,
};

export const RectangleImageLeftAligned = Template_HeaderLogo.bind({});
RectangleImageLeftAligned.args = {
  alignment: 'left',
  id: 'rectangle-image-left-aligned-id',
  logoType: 'rectangle',
  src: storybookLogoLong,
};

export const RectangleImageCentreAligned = Template_HeaderLogo.bind({});
RectangleImageCentreAligned.args = {
  alignment: 'centre',
  id: 'rectangle-image-centre-aligned-id',
  logoType: 'rectangle',
  src: storybookLogoLong,
};

export const InSmallHeaderBaseSquareImageLeftAligned = Template_HeaderLogoInHeaderBase.bind({});
InSmallHeaderBaseSquareImageLeftAligned.args = {
  alignment: 'left',
  headerBaseId: 'base-id-1',
  id: 'in-small-header-base-square-image-left-aligned-id',
  logoType: 'square',
  parentHeaderId: 'base-id-1',
  src: storybookLogo,
};

export const InSmallHeaderBaseSquareImageCentreAligned = Template_HeaderLogoInHeaderBase.bind({});
InSmallHeaderBaseSquareImageCentreAligned.args = {
  alignment: 'centre',
  headerBaseId: 'base-id-2',
  id: 'in-small-header-base-square-image-centre-aligned-id',
  logoType: 'square',
  parentHeaderId: 'base-id-2',
  src: storybookLogo,
};

export const InSmallHeaderBaseRectangleImageLeftAligned = Template_HeaderLogoInHeaderBase.bind({});
InSmallHeaderBaseRectangleImageLeftAligned.args = {
  alignment: 'left',
  headerBaseId: 'base-id-3',
  id: 'in-small-header-base-rectangle-image-left-aligned-id',
  logoType: 'rectangle',
  parentHeaderId: 'base-id-3',
  src: storybookLogoLong,
};

export const InSmallHeaderBaseRectangleImageCentreAligned = Template_HeaderLogoInHeaderBase.bind({});
InSmallHeaderBaseRectangleImageCentreAligned.args = {
  alignment: 'centre',
  headerBaseId: 'base-id-4',
  id: 'in-small-header-base-rectangle-image-centre-aligned-id',
  logoType: 'rectangle',
  parentHeaderId: 'base-id-4',
  src: storybookLogoLong,
};

export const InTallHeaderBaseSquareImageLeftAligned = Template_HeaderLogoInHeaderBase.bind({});
InTallHeaderBaseSquareImageLeftAligned.args = {
  alignment: 'left',
  headerBaseId: 'base-id-5',
  headerSize: 'tall',
  id: 'in-tall-header-base-square-image-id',
  logoType: 'square',
  parentHeaderId: 'base-id-5',
  src: storybookLogo,
};

export const InTallHeaderBaseRectangleImageCentreAligned = Template_HeaderLogoInHeaderBase.bind({});
InTallHeaderBaseRectangleImageCentreAligned.args = {
  alignment: 'centre',
  headerBaseId: 'base-id-6',
  headerSize: 'tall',
  id: 'in-tall-header-base-rectangle-image-id',
  logoType: 'rectangle',
  parentHeaderId: 'base-id-6',
  src: storybookLogoLong,
};

export const InSmallHeaderBaseWithTopBorderSquareImageLeftAligned = Template_HeaderLogoInHeaderBase.bind({});
InSmallHeaderBaseWithTopBorderSquareImageLeftAligned.args = {
  alignment: 'left',
  headerBaseId: 'base-id-7',
  headerTopBorder: 'grey',
  id: 'in-small-header-base-with-top-border-square-image-left-aligned-id',
  logoType: 'square',
  parentHeaderId: 'base-id-7',
  src: storybookLogo,
};

export const InTallHeaderBaseWithTopBorderSquareImageLeftAligned = Template_HeaderLogoInHeaderBase.bind({});
InTallHeaderBaseWithTopBorderSquareImageLeftAligned.args = {
  alignment: 'left',
  headerBaseId: 'base-id-8',
  headerSize: 'tall',
  headerTopBorder: 'grey',
  id: 'in-tall-header-base-with-top-border-square-image-left-aligned-id',
  logoType: 'square',
  parentHeaderId: 'base-id-8',
  src: storybookLogo,
};
