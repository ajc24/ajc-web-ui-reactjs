/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { PageTitleText } from '../../src';

export default {
  title: 'Text/Page Title Text',
  component: PageTitleText,
};

/**
 * Page Title Text component template, rendered outside all / any header components
 * @param {JSON} args 
 * @returns {React.Component}
 */
const Template_PageTitleText = args => {
  return <PageTitleText {...args} />;
}

export const Default = {
  args: {
    children: 'Default Page Title Text',
    id: 'default',
  },
  render: Template_PageTitleText,
};

export const CentreAligned = {
  args: {
    alignment: 'centre',
    children: 'Centre Aligned Page Title Text',
    id: 'centre-aligned',
  },
  render: Template_PageTitleText,
};

export const UnderlinedTitleText = {
  args: {
    alignment: 'left',
    children: 'Underlined Page Title Text',
    id: 'underlined',
    underline: true,
  },
  render: Template_PageTitleText,
};

export const MobilePhoneTest = {
  args: {
    alignment: 'centre',
    children: 'Page Title Text Rendered At A Mobile Screen Size (360x800)',
    id: 'mobile-phone-test',
  },
  globals: {
    viewport: {
      isRotated: false,
      value: 'galaxys9',
    },
  },
  render: Template_PageTitleText,
};
