/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import TallHeaderLogo from '../../../src/components/images/TallHeaderLogo';
import storybookLogo from '../../../stories/images/files/storybook-logo-long-tall.svg';

describe('Tall Header Logo', () => {
  const testTimeout = TestDev.getAxeTestTimeout();

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Default logo image with no header upper border rendered', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <TallHeaderLogo id="tall-header-logo" src={storybookLogo} />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Tall Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Tall Header Logo: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Tall header logo image with no header upper border rendered', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <TallHeaderLogo id="tall-header-logo" isTopBorderDisplayed={false} src={storybookLogo} />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Tall Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Tall Header Logo: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Tall header logo image with header upper border rendered', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <TallHeaderLogo id="tall-header-logo" isTopBorderDisplayed={true} src={storybookLogo} />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Tall Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Tall Header Logo: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
