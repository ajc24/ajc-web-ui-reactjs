/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { FooterTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Footer Type A', () => {
  describe('Footer Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-footer-bg-default';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <FooterTypeA id={testComponentId}>
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${testComponentId}--container"]`);
      const footerContent = document.querySelector(`div[id="${testComponentId}--content"]`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(footerContainer);

      /* Verifies that the "ajc-background-black" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is not assigned to the container element */
      /* Verifies that the "ajc-background-red" class is not assigned to the container element */
      testData.push(footerContainer.classList);

      /* Verifies that the id attribute is set correctly to the content element */
      /* Verifies that the children components are rendered within the content element */
      testData.push(footerContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "ajc-background-black" class is assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-black')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-red')).toBeFalsy();
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(testData[2]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content element', () => {
      expect(testData[2].textContent).toBe('Footer text content.');
    });

    it('verifies that the page template config functionality is called as expected', () => {
      expect(setupDocumentBodyCssSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('Footer Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-footer-bg-grey';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <FooterTypeA id={testComponentId} backgroundColour="grey">
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${testComponentId}--container"]`);

      /* Verifies that the "ajc-background-black" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is assigned to the container element */
      /* Verifies that the "ajc-background-red" class is not assigned to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-black" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-black')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-2" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-2')).toBeTruthy();
    });

    it('verifies that the "ajc-background-red" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-red')).toBeFalsy();
    });
  });

  describe('Footer Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-footer-bg-red';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <FooterTypeA id={testComponentId} backgroundColour="red">
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${testComponentId}--container"]`);

      /* Verifies that the "ajc-background-black" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is not assigned to the container element */
      /* Verifies that the "ajc-background-red" class is assigned to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-black" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-black')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-2" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-2')).toBeFalsy();
    });

    it('verifies that the "ajc-background-red" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-red')).toBeTruthy();
    });
  });
});
