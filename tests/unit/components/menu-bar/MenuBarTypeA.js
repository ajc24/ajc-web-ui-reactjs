/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MenuBarTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Menu Bar Type A', () => {
  describe('Menu Bar Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-menu-bar-bg-default';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId}>
            Menu bar text content.
          </MenuBarTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const menuBarContainer = document.querySelector(`div[id="${testComponentId}--container"]`);
      const menuBarContent = document.querySelector(`div[id="${testComponentId}--content"]`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(menuBarContainer);

      /* Verifies that the "ajc-background-black" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is not assigned to the container element */
      /* Verifies that the "ajc-background-red" class is not assigned to the container element */
      testData.push(menuBarContainer.classList);

      /* Verifies that the id attribute is set correctly to the content element */
      /* Verifies that the children components are rendered within the content element */
      testData.push(menuBarContent);

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
      expect(testData[2].textContent).toBe('Menu bar text content.');
    });

    it('verifies that the page template config functionality is called as expected', () => {
      expect(setupDocumentBodyCssSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('Menu Bar Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-menu-bar-bg-grey';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId} backgroundColour="grey">
            Menu bar text content.
          </MenuBarTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const menuBarContainer = document.querySelector(`div[id="${testComponentId}--container"]`);

      /* Verifies that the "ajc-background-black" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is assigned to the container element */
      /* Verifies that the "ajc-background-red" class is not assigned to the container element */
      testData.push(menuBarContainer.classList);

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

  describe('Menu Bar Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-menu-bar-bg-red';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId} backgroundColour="red">
            Menu bar text content.
          </MenuBarTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const menuBarContainer = document.querySelector(`div[id="${testComponentId}--container"]`);

      /* Verifies that the "ajc-background-black" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-2" class is not assigned to the container element */
      /* Verifies that the "ajc-background-red" class is assigned to the container element */
      testData.push(menuBarContainer.classList);

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
