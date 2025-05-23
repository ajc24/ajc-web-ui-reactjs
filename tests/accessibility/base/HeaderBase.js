/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';
import headerBgImage from '../../../stories/images/files/header-bg-image.png';
import tallHeaderBgImage from '../../../stories/images/files/tall-header-bg-image.png';

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

  describe('Default component', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase>
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with custom id, small size, no background image, white background, gold top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase id="custom-id" size="small" backgroundColour="white" topBorder="gold">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, small size, no background image, grey background, green top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase size="small" backgroundColour="grey" topBorder="green">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, small size, with background image, default background, top border switched off', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase size="small" backgroundImageSrc={headerBgImage} topBorder="off">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, tall size, with background image, default background, green-2 top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase size="tall" backgroundImageSrc={tallHeaderBgImage} topBorder="green-2">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 5');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, tall size, no background image, default background, grey top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase size="tall" topBorder="grey">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 6');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, default size, no background image, default background, navy top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase topBorder="navy">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 7');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with default id, default size, no background image, default background, red top border', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <HeaderBase topBorder="red">
            Header base text content.
          </HeaderBase>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Base Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Base: Test 8');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
