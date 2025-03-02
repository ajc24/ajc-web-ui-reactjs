/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { Header } from '../../../src';

describe('Header', () => {
  const testComponentId = 'test-header-id';
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Default (small) Header, with custom content, no logo image, no title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId}>
            Header component text content.
          </Header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
