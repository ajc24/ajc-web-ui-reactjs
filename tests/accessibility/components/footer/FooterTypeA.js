/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { FooterTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Footer Type A', () => {
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Footer Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-footer-bg-default';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Accessibility Test</h1>
          </main>
          <FooterTypeA id={testComponentId}>
            Footer text content.
          </FooterTypeA>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Type A: Test 1');
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

  describe('Footer Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-footer-bg-grey';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Accessibility Test</h1>
          </main>
          <FooterTypeA id={testComponentId} backgroundColour="grey">
            Footer text content.
          </FooterTypeA>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Type A: Test 2');
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

  describe('Footer Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testComponentId = 'test-footer-bg-red';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <header role="banner">
            Header text content.
          </header>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Accessibility Test</h1>
          </main>
          <FooterTypeA id={testComponentId} backgroundColour="red">
            Footer text content.
          </FooterTypeA>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Type A: Test 3');
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
