/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderSubtitleText } from '../../../src';

describe('Header Subtitle Text', () => {
  const testComponentId = 'test-component-id';
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Default standalone component, left alignment, no title text rendered, black text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementation(() => { return { right: 500 } });

      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} alignment="left" textColour="black">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Default standalone component, centre alignment, no title text rendered, white text colour, marked as hidden', () => {
    let getBoundingClientRectSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 501,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 500,
          };
        });

      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} alignment="centre" textColour="white">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Component rendered inside Header, default alignment, with title text rendered, default text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementation(() => { return { right: 0 } });

      /* Mount the component being accessibility tested */
      const { unmount } = render(
        <div>
          <header role="banner">
            <HeaderSubtitleText id={testComponentId} headerTitleTextId="test-header-title-text-id" parentHeaderId="test-parent-header-id">
              Header subtitle text component text content.
            </HeaderSubtitleText>
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Subtitle Text Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Subtitle Text: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
