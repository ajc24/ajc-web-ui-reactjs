/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import MainBase from '../../../src/components/base/MainBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Main Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultMainContainerId = 'default-id--main-container';
  const customMainContainerId = `${customId}--main-container`;

  /* Set the spies for use in the tests */
  let setupDocumentBodyCssSpy;

  beforeAll(() => {
    setupDocumentBodyCssSpy = jest
      .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    setupDocumentBodyCssSpy.mockRestore();
  });

  describe('Component with default id', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MainBase title="Component with default id">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContainer = document.querySelector(`main[id="${defaultMainContainerId}"]`);
      const mainContentContainer = document.querySelector(`main[id="${defaultMainContainerId}"] > div`);
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(mainContainer);
      
      /* Verifies that the children components are rendered within the content container element */
      testData.push(mainContentContainer);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content container element', () => {
      expect(testData[1].textContent).toBe('Main base text content.');
    });
  });

  describe('Component with custom id', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MainBase id={customId} title="Component with custom id">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const mainContainer = document.querySelector(`main[id="${customMainContainerId}"]`);
       
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(mainContainer);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });
  });
});
