/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import HeaderTitleText from '../../../src/components/base/HeaderTitleText';

describe('Header Title Text', () => {
  const testComponentId = 'test-header-title-text-id';
  const testTimeout = TestDev.getAxeTestTimeout();

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Component with undefined header type and undefined text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderTitleText id={testComponentId}>
              Header title text component text content.
            </HeaderTitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Title Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Title Text: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with small header type and black text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderTitleText id={testComponentId} isTallHeader={false} textColour="black">
              Header title text component text content.
            </HeaderTitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Title Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Title Text: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with tall header type and white text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderTitleText id={testComponentId} isTallHeader={true} textColour="white">
              Header title text component text content.
            </HeaderTitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Title Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Title Text: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
