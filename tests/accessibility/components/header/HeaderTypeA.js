/**
 * Developed by Anthony Cox in 2024
 */
// import 'jsdom-global/register';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';
import headerBackgroundTestImage from '../../../../stories/images/header-background-test.png';

describe('Header Type A', () => {
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Header Type A with no top border (default), transparent background (default), left alignment (default)', () => {
    let componentDidMountSpy;
    let results;
    const testComponentId = 'test-header-border-none-bg-default-align-default';

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id={testComponentId}>
            Header text content.
          </HeaderTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Header Type A with black top border (default colour), transparent background, left alignment', () => {
    let componentDidMountSpy;
    let results;
    const testComponentId = 'test-header-border-default-bg-transparent-align-left';

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id={testComponentId} showTopBorder={true} backgroundColour="transparent" alignment="left">
            Header text content.
          </HeaderTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Header Type A with grey top border, white background, center alignment', () => {
    let componentDidMountSpy;
    let results;
    const testComponentId = 'test-header-border-grey-bg-white-align-center';

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="grey" backgroundColour="white" alignment="center">
            Header text content.
          </HeaderTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Header Type A with red top border, grey background, right alignment', () => {
    let componentDidMountSpy;
    let results;
    const testComponentId = 'test-header-border-red-bg-grey-align-right';

    beforeAll(async () => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="red" backgroundColour="grey" alignment="right">
            Header text content.
          </HeaderTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Header Type A with no top border (default), yellow background, background image assigned, left alignment (default)', () => {
    let results;
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-header-border-none-bg-yellow-align-left--with-bg-image';

    beforeAll(async () => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <HeaderTypeA id={testComponentId} backgroundColour="yellow" backgroundImage={headerBackgroundTestImage}>
            Header text content.
          </HeaderTypeA>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Accessibility Test</h1>
          </main>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Type A: Test 5');
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
