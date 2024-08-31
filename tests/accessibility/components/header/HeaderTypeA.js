/**
 * Developed by Anthony Cox in 2024
 */
// import 'jsdom-global/register';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderTypeA } from '../../../../src';
import headerBackgroundTestImage from '../../../../stories/images/header-background-test.png';

describe('Header Type A', () => {
  /* Create the test data for the component */
  let componentDidMountSpy;
  const testTimeout = TestDev.getAxeTestTimeout();
  
  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(HeaderTypeA.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Header Type A with no top border (default), transparent background (default), left alignment (default)', () => {
    let results;
    const testComponentId = 'test-header-border-none-bg-default-align-default';

    beforeAll(async () => {
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
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Header Type A with black top border (default colour), transparent background, left alignment', () => {
    let results;
    const testComponentId = 'test-header-border-default-bg-transparent-align-left';

    beforeAll(async () => {
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
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
