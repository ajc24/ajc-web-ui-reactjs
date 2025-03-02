/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { Header } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

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

  describe('Small Header, with square logo image, no title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} logoSrc={storybookLogo} logoType="square" size="small" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Small Header, with rectangle logo image, no title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} logoSrc={storybookLogoLong} logoType="rectangle" size="small" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Tall Header, with logo image, no title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} logoSrc={storybookLogoLong} size="tall" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Small Header, no logo image, with title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} size="small" titleTextColour="black" titleTextContent="Header Title Text Content" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 5');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Small Header, no logo image, with title text, with subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} size="small" subtitleTextContent="Subtitle text content" titleTextContent="Header Title Text Content" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 6');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Tall Header, no logo image, with title text, no subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} size="tall" titleTextColour="black" titleTextContent="Header Title Text Content" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 7');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Tall Header, no logo image, with title text, with subtitle text', () => {
    let results;

    beforeAll(async () => {
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <Header id={testComponentId} size="tall" subtitleTextContent="Subtitle text content" titleTextContent="Header Title Text Content" />
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
      const html = TestDev.getComponentInHTMLTemplate('Header: Test 8');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
