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

  describe('Header with no top border and transparent background (Default Settings)', () => {
    let results;
    const testComponentId = 'test-default-header-id';

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
      const html = TestDev.getComponentInHTMLTemplate('Header default');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  // describe('Transferred props and rendering - Header with grey top border and white background', () => {
  //   let results;

  //   beforeAll(async () => {
  //     const { unmount } = render(
  //       <div>
  //         <Header id="test-header-with-top-border-id" renderTopBorder={true} topBorderColour="grey" backgroundColour="white">
  //           Header text content.
  //         </Header>
  //         <main id="main-content" aria-label="Accessibility test">
  //           <h1>Header Accessibility Test</h1>
  //         </main>
  //       </div>
  //     );
  //     const html = TestDev.getComponentInHTMLTemplate('Header with top border and background colour');
  //     /* Unmount the component now that the html string has been generated */
  //     unmount();
  //     results = await AccessibilityDev.runAxeCore(html);
  //   }, testTimeout);
    
  //   it('verifies the accessibility standards for the component', () => {
  //     expect(results).toBeTruthy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with red top border and image background', () => {
  //   let results;

  //   beforeAll(async () => {
  //     const { unmount } = render(
  //       <div>
  //         <Header id="test-header-with-top-border-and-bg-image-id" renderTopBorder={true} topBorderColour="red" renderBackgroundImage={true} backgroundImageData={testImage}>
  //           Header text content.
  //         </Header>
  //         <main id="main-content" aria-label="Accessibility test">
  //           <h1>Header Accessibility Test</h1>
  //         </main>
  //       </div>
  //     );
  //     const html = TestDev.getComponentInHTMLTemplate('Header with top border and image');
  //     /* Unmount the component now that the html string has been generated */
  //     unmount();
  //     results = await AccessibilityDev.runAxeCore(html);
  //   }, testTimeout);

  //   it('verifies the accessibility standards for the component', () => {
  //     expect(results).toBeTruthy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with no top border and grey background', () => {
  //   let results;

  //   beforeAll(async () => {
  //     const { unmount } = render(
  //       <div>
  //         <Header id="test-header-with-no-top-border-id" renderTopBorder={false} backgroundColour="grey">
  //           Header text content.
  //         </Header>
  //         <main id="main-content" aria-label="Accessibility test">
  //           <h1>Header Accessibility Test</h1>
  //         </main>
  //       </div>
  //     );
  //     const html = TestDev.getComponentInHTMLTemplate('Header with background colour and no border');
  //     /* Unmount the component now that the html string has been generated */
  //     unmount();
  //     results = await AccessibilityDev.runAxeCore(html);
  //   }, testTimeout);

  //   it('verifies the accessibility standards for the component', () => {
  //     expect(results).toBeTruthy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
  //   let results;

  //   beforeAll(async () => {
  //     const { unmount } = render(
  //       <div>
  //         <Header id="test-header-with-top-border-id" renderTopBorder={true} topBorderColour="grey" backgroundColour="yellow">
  //           Header text content.
  //         </Header>
  //         <main id="main-content" aria-label="Accessibility test">
  //           <h1>Header Accessibility Test</h1>
  //         </main>
  //       </div>
  //     );
  //     const html = TestDev.getComponentInHTMLTemplate('Header with top border and background colour');
  //     /* Unmount the component now that the html string has been generated */
  //     unmount();
  //     results = await AccessibilityDev.runAxeCore(html);
  //   }, testTimeout);

  //   it('verifies the accessibility standards for the component', () => {
  //     expect(results).toBeTruthy();
  //   });
  // });
});
