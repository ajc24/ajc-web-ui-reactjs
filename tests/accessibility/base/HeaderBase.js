/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import HeaderBase from '../../../src/components/base/HeaderBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Header Base', () => {
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

  describe('Component with default id and default size', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase>
            Header base text content.
          </HeaderBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with custom id and small size', () => {
    let results;
    
    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase id="custom-id" size="small">
            Header base text content.
          </HeaderBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id and tall size', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase size="tall">
            Header base text content.
          </HeaderBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
