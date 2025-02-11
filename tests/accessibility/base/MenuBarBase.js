/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { MenuBarBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';
import headerBgImage from '../../../stories/images/files/header-bg-image.png';
import tallHeaderBgImage from '../../../stories/images/files/tall-header-bg-image.jpg';

describe('Menu Bar Base', () => {
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

  describe('Default component', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase>
            Menu Bar Base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with custom id, white background', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase id="custom-id" backgroundColour="white">
            Menu Bar Base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, green background', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase backgroundColour="green">
            Menu Bar Base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, grey background', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase backgroundColour="grey">
            Menu Bar Base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, red background', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            Header component
          </header>
          <MenuBarBase backgroundColour="red">
            Menu Bar Base text content.
          </MenuBarBase>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Menu Bar Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Menu Bar Base: Test 5');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
