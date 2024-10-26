/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import MenuBarBase from '../../../src/components/base/MenuBarBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Menu Bar Base', () => {
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

  describe('Component with default id', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase>
            Menu bar base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with custom id', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase id="custom-id">
            Menu bar base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
