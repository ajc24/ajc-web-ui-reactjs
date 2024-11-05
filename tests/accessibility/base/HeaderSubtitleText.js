/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import HeaderSubtitleText from '../../../src/components/base/HeaderSubtitleText';

describe('Header Subtitle Text', () => {
  const testComponentId = 'test-header-subtitle-text-id';
  const testTimeout = TestDev.getAxeTestTimeout();

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Component with undefined / default header element type, default text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with small header element type, default text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="default">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with tall header element type, black text colour', () => {
    let results;

    beforeAll(async () => {
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={true} textColour="black">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component with small header element type, white text colour, element marked as hidden', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let results;
    const testContainerRightPos = 1100;
    const testParagraphRightPos = 1200;

    beforeAll(async () => {
      /* Create the spies necessary to mark the subtitle text element as hidden */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return {
            getBoundingClientRect: () => {
              return { right: testContainerRightPos };
            },
          };
        });
      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="white">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
