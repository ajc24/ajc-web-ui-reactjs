/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderBase from '../../../src/components/base/HeaderBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Header Base', () => {
  const customId = 'custom-id';
  const defaultHeaderContainerId = 'default-id--header-container';
  const customHeaderContainerId = `${customId}--header-container`;

  describe('Header Base component with default id', () => {
    let setupDocumentBodyCssSpy;
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase>
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"]`);
      const headerContentContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"] > div`);
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(headerContainer);
      
      /* Verifies that the children components are rendered within the content container element */
      testData.push(headerContentContainer);

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

    it('verifies that the children components are rendered within the content container element', () => {
      expect(testData[1].textContent).toBe('Header base text content.');
    });
  });

  describe('Header Base component with custom id', () => {
    let setupDocumentBodyCssSpy;
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase id={customId}>
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${customHeaderContainerId}"]`);
       
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(headerContainer);
      
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
  });
});
