/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import {
  FooterTypeA,
  HeaderTypeA,
  MainContent,
  MenuBarTypeA,
} from '../../../src';
import { PageTemplateConfig } from '../../../src/components/common';

describe('Blank Template Type A', () => {
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Blank Template Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    let results;

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id="blank-template-type-a-header" showTopBorder={true} topBorderColour="red" backgroundColour="grey">
            Header Type A
          </HeaderTypeA>
          <MenuBarTypeA id="blank-template-type-a-menu-bar" backgroundColour="red">
            Menu Bar Type A
          </MenuBarTypeA>
          <MainContent backgroundColour="grey" title="Blank Page Template Type A">
            <h1>Main Content</h1>
          </MainContent>
          <FooterTypeA id="blank-template-type-a-footer" backgroundColour="red">
            Footer Type A
          </FooterTypeA>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Blank Template Type A: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies the accessibility standards for the page template', () => {
      expect(results).toBeTruthy();
    });
  });
});
