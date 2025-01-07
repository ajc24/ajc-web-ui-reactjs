/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { DecorativeImage } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Decorative Image', () => {
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
            <h1>Decorative Image Accessibility Test</h1>
            <DecorativeImage id="decorative-image-1" src={storybookLogo} />
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Decorative Image: Test 1');
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
            <h1>Decorative Image Accessibility Test</h1>
            <DecorativeImage id="decorative-image-2" src={storybookLogo} height={300} width={500} />
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Decorative Image: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
