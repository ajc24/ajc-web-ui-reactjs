/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { FunctionalImage } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Functional Image', () => {
  const testTimeout = TestDev.getAxeTestTimeout();

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('With default parameters', () => {
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
            <h1>Functional Image Accessibility Test</h1>
            <FunctionalImage id="functional-image-1" src={storybookLogo} alt="Default functional component alt text" onClick={() => {}} />
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Functional Image: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('With custom parameters', () => {
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
            <h1>Functional Image Accessibility Test</h1>
            <FunctionalImage id="functional-image-2" src={storybookLogo} alt="Custom functional component alt text" onClick={() => {}} height={300} width={500} />
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Functional Image: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
