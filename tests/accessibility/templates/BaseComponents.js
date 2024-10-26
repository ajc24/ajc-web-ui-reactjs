/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import FooterBase from '../../../src/components/base/FooterBase';
import HeaderBase from '../../../src/components/base/HeaderBase';
import MainBase from '../../../src/components/base/MainBase';
import MenuBarBase from '../../../src/components/base/MenuBarBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Page Templates: Base Components', () => {
  let setupDocumentBodyCssSpy;
  const testTimeout = TestDev.getAxeTestTimeout();

  beforeEach(() => {
    setupDocumentBodyCssSpy = jest
      .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
    setupDocumentBodyCssSpy.mockRestore();
  });

  describe('Basic Template Using All Base Components', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase id="custom-header-id">
            Header base component
          </HeaderBase>
          <MenuBarBase id="custom-menu-bar-id">
            Menu bar base component
          </MenuBarBase>
          <MainBase id="custom-main-id" title="Page Template: Base Components">
            <h1>Page Template: Base Components Accessibility Test</h1>
          </MainBase>
          <FooterBase>
            Footer base component.
          </FooterBase>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Page Template: Base Components');
      unmount();
      /* Perform the accessibility checks on this page template */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the page template', () => {
      expect(results).toBeTruthy();
    });
  });
});
