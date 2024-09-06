/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MainContent } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Main Content', () => {
  describe('Main Content with transparent background (default)', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    const testData = [];
    const testTitle = 'Main Content: Default';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MainContent title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContent_Container = document.querySelector('main[id="main-content--container"]');
      const mainContent_Content = document.querySelector('div[id="main-content--content"]');
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(mainContent_Container);

      /* Verifies that the aria-label attribute is set correctly to the container element */
      testData.push(mainContent_Container.getAttribute('aria-label'));

      /* Verifies that the "ajc-background-transparent" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(mainContent_Container.classList);

      /* Verifies that the id attribute is set correctly to the content element */
      /* Verifies that the children components are rendered within the content element */
      testData.push(mainContent_Content);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the aria-label attribute is set correctly to the container element', () => {
      expect(testData[1]).toBe(testTitle);
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the container element', () => {
      expect(testData[2].contains('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[2].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[2].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[2].contains('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(testData[3]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content element', () => {
      expect(testData[3].textContent).toBe('Main content text content.');
    });

    it('verifies that the document title is set correctly', () => {
      expect(document.title).toBe(testTitle);
    });
  });

  describe('Main Content with transparent background (specified)', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    const testData = [];
    const testTitle = 'Main Content: Transparent Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MainContent backgroundColour="transparent" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContent_Container = document.querySelector('main[id="main-content--container"]');

      /* Verifies that the "ajc-background-transparent" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(mainContent_Container.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Main Content with white background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    const testData = [];
    const testTitle = 'Main Content: White Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MainContent backgroundColour="white" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContent_Container = document.querySelector('main[id="main-content--container"]');

      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(mainContent_Container.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeTruthy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Main Content with grey background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    const testData = [];
    const testTitle = 'Main Content: Grey Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MainContent backgroundColour="grey" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContent_Container = document.querySelector('main[id="main-content--container"]');

      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(mainContent_Container.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeTruthy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
    });
  });

  describe('Main Content with yellow background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    const testData = [];
    const testTitle = 'Main Content: Yellow Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MainContent backgroundColour="yellow" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContent_Container = document.querySelector('main[id="main-content--container"]');

      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is assigned to the container element */
      testData.push(mainContent_Container.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeTruthy();
    });
  });
});
