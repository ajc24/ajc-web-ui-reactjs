/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { MenuBarTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Menu Bar Type A', () => {
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Menu Bar Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-menu-bar-bg-default';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <MenuBarTypeA id={testComponentId}>
            Menu bar text content.
          </MenuBarTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Type A: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Menu Bar Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-menu-bar-bg-grey';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <MenuBarTypeA id={testComponentId} backgroundColour="grey">
            Menu bar text content.
          </MenuBarTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Type A: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Menu Bar Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-menu-bar-bg-red';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <MenuBarTypeA id={testComponentId} backgroundColour="red">
            Menu bar text content.
          </MenuBarTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Type A: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
