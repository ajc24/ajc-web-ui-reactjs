/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { HeaderBase, HeaderSubtitleText, HeaderTitleText } from '../../src';

export default {
  title: 'Header Components/Header Subtitle Text',
  component: HeaderSubtitleText,
  tags: ['autodocs'],
};

/**
 * Header Subtitle Text component template, rendered outside all / any header components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderSubtitleText = args => {
  return <React.Fragment>
    <HeaderSubtitleText {...args} />
  </React.Fragment>;
}

/**
 * Header Subtitle Text component template, rendered inside the Header Base component
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderSubtitleTextInHeaderBase = args => {
  return <React.Fragment>
    <HeaderBase id={args.headerBaseId || 'base-id'}>
      <HeaderSubtitleText {...args} />
    </HeaderBase>
  </React.Fragment>;
}

/**
 * Header Subtitle Text component template, rendered standalone and alongside a Header Title Text component
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderSubtitleText_WithHeaderTitleText = args => {
  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <HeaderTitleText alignment={args.alignment || undefined} id="storybook-id">
      Header Title Text Which Will Wrap And Hide The Subtitle
    </HeaderTitleText>
    <HeaderSubtitleText {...args} />
  </div>;
}

/**
 * Header Subtitle Text component template, rendered inside the Header Base component
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_HeaderSubtitleText_InHeaderBaseWithHeaderTitleText = args => {
  return <React.Fragment>
    <HeaderBase id={args.headerBaseId || 'base-id'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <HeaderTitleText alignment={args.alignment || undefined} id="storybook-id">
          Header Title Text Which Will Wrap And Hide The Subtitle
        </HeaderTitleText>
        <HeaderSubtitleText {...args} />
      </div>
    </HeaderBase>
  </React.Fragment>;
}

export const Default = Template_HeaderSubtitleText.bind({});
Default.args = {
  children: 'Header Subtitle Text',
  id: 'default-id',
};

export const WithVeryLongTextContent = Template_HeaderSubtitleText.bind({});
WithVeryLongTextContent.args = {
  children: 'This Text Will Be Hidden On The Smallest Viewports',
  id: 'with-very-long-text-content-id',
};

export const WithLeftAlignment = Template_HeaderSubtitleText.bind({});
WithLeftAlignment.args = {
  alignment: 'left',
  children: 'Header Subtitle Text (Left Alignment)',
  id: 'with-left-alignment-id',
};

export const WithCentreAlignment = Template_HeaderSubtitleText.bind({});
WithCentreAlignment.args = {
  alignment: 'centre',
  children: 'Header Subtitle Text (Centre Alignment)',
  id: 'with-centre-alignment-id',
};

export const InHeaderBaseLeftAligned = Template_HeaderSubtitleTextInHeaderBase.bind({});
InHeaderBaseLeftAligned.args = {
  alignment: 'left',
  children: 'In Header Base Component (Left Alignment)',
  headerBaseId: 'base-id-1',
  id: 'in-header-base-left-alignment-id',
  parentHeaderId: 'base-id-1',
};

export const InHeaderBaseCentreAligned = Template_HeaderSubtitleTextInHeaderBase.bind({});
InHeaderBaseCentreAligned.args = {
  alignment: 'centre',
  children: 'In Header Base Component (Centre Alignment)',
  headerBaseId: 'base-id-2',
  id: 'in-header-base-centre-alignment-id',
  parentHeaderId: 'base-id-2',
};

export const StandaloneWithHeaderTitleText = Template_HeaderSubtitleText_WithHeaderTitleText.bind({});
StandaloneWithHeaderTitleText.args = {
  children: 'Subtitle Text With Header Title Text Component',
  headerTitleTextId: 'storybook-id',
  id: 'standalone-with-header-title-text-id',
};

export const StandaloneWithHeaderTitleTextAndCentreAligned = Template_HeaderSubtitleText_WithHeaderTitleText.bind({});
StandaloneWithHeaderTitleTextAndCentreAligned.args = {
  alignment: 'centre',
  children: 'Subtitle Text With Header Title Text Component',
  headerTitleTextId: 'storybook-id',
  id: 'standalone-with-header-title-centre-alignment-text-id',
};

export const InHeaderBaseWithHeaderTitleText = Template_HeaderSubtitleText_InHeaderBaseWithHeaderTitleText.bind({});
InHeaderBaseWithHeaderTitleText.args = {
  children: 'Subtitle Text With Header Title Text Component',
  headerBaseId: 'base-id-3',
  headerTitleTextId: 'storybook-id',
  id: 'in-header-base-with-header-title-text-id',
  parentHeaderId: 'base-id-3',
};

export const InHeaderBaseWithHeaderTitleTextAndCentreAligned = Template_HeaderSubtitleText_InHeaderBaseWithHeaderTitleText.bind({});
InHeaderBaseWithHeaderTitleTextAndCentreAligned.args = {
  alignment: 'centre',
  children: 'Subtitle Text With Header Title Text Component',
  headerBaseId: 'base-id-4',
  headerTitleTextId: 'storybook-id',
  id: 'in-header-base-with-header-title-text-centre-alignment-id',
  parentHeaderId: 'base-id-4',
};
