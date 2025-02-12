/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MainBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Main Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultMainBaseId = 'default-id--main-base';
  const customMainBaseId = `${customId}--main-base`;

  /* Set the spies for use in the tests */
  let setupDocumentBodyCssSpy;

  beforeAll(() => {
    setupDocumentBodyCssSpy = jest
      .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
      .mockImplementation(() => {});
  });

  beforeEach(() => {
    /* Set a mock document title prior to mounting the component */
    document.title = 'Mock Title Which Will Be Changed By The Test';
  });

  afterAll(() => {
    setupDocumentBodyCssSpy.mockRestore();
  });

  afterEach(() => {
    document.title = '';
  });

  describe('Default component', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <MainBase title="Test Document Title 1">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const main = document.querySelector(`main[id="${defaultMainBaseId}"]`);
      const outerContent = document.querySelector(`main[id="${defaultMainBaseId}"] > div`);
      const innerContent = document.querySelector(`main[id="${defaultMainBaseId}"] > div > div`);
      
      /* Verifies that the id attribute is set correctly to the main element */
      testData.push(main);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that the children components are rendered within the inner content element */
      testData.push(innerContent.textContent);

      /* Verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once */
      testData.push(setupDocumentBodyCssSpy.mock.calls.length);

      /* Verifies that the document title is set to the same value as the components title property */
      testData.push(document.title);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the main element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeTruthy();
    });

    it('verifies that the children components are rendered within the inner content element', () => {
      expect(testData[2]).toBe('Main base text content.');
    });

    it('verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once', () => {
      expect(testData[3]).toBe(1);
    });

    it('verifies that the document title is set to the same value as the components title property', () => {
      expect(testData[4]).toBe('Test Document Title 1');
    });
  });

  describe('Component with custom id, invalid background colour', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <MainBase id={customId} title="Test Document Title 2">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const main = document.querySelector(`main[id="${customMainBaseId}"]`);
      const outerContent = document.querySelector(`main[id="${customMainBaseId}"] > div`);

      /* Verifies that the id attribute is set correctly to the main element */
      testData.push(main);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the main element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeTruthy();
    });
  });

  describe('Component with default id, white background colour', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <MainBase backgroundColour="white" title="Test Document Title 2">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`main[id="${defaultMainBaseId}"] > div`);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeTruthy();
    });
  });

  describe('Component with default id, grey background colour', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <MainBase backgroundColour="grey" title="Test Document Title 2">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`main[id="${defaultMainBaseId}"] > div`);

      /* Verifies that the "background-grey" class is set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      testData.push(outerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-grey" class is set to the outer content element', () => {
      expect(testData[0].contains('background-grey')).toBeTruthy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeFalsy();
    });
  });
});
