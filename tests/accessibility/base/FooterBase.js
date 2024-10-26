/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import FooterBase from '../../../src/components/base/FooterBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Footer Base', () => {
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
          <header role="banner">
            Header component
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Base Accessibility Test</h1>
          </main>
          <FooterBase>
            Footer Base text content.
          </FooterBase>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Base: Test 1');
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
          <header role="banner">
            Header component
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Base Accessibility Test</h1>
          </main>
          <FooterBase id="custom-id" size="small">
            Footer Base text content.
          </FooterBase>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Base: Test 2');
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
          <header role="banner">
            Header component
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Footer Base Accessibility Test</h1>
          </main>
          <FooterBase size="tall">
            Footer Base text content.
          </FooterBase>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Footer Base: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
