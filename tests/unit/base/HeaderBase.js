/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderBase from '../../../src/components/base/HeaderBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';
import headerBgImage from '../../../stories/images/files/header-bg-image.png';

describe('Header Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultHeaderContainerId = 'default-id--header-container';
  const customHeaderContainerId = `${customId}--header-container`;

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

      /* Verifies that the "header-container-size-small" class is set to the container element */
      /* Verifies that the "header-container-size-tall" class is not set to the container element */
      testData.push(headerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content container element', () => {
      expect(testData[1].textContent).toBe('Header base text content.');
    });

    it('verifies that the "header-container-size-small" class is set to the container element', () => {
      expect(testData[2].contains('header-container-size-small')).toBeTruthy();
    });

    it('verifies that the "header-container-size-tall" class is not set to the container element', () => {
      expect(testData[2].contains('header-container-size-tall')).toBeFalsy();
    });
  });

  describe('Component with custom id', () => {
    const testData = [];

    beforeAll(() => {
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

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });
  });

  describe('Component with small size', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="small">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"]`);
      
      /* Verifies that the "header-container-size-small" class is set to the container element */
      /* Verifies that the "header-container-size-tall" class is not set to the container element */
      testData.push(headerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "header-container-size-small" class is set to the container element', () => {
      expect(testData[0].contains('header-container-size-small')).toBeTruthy();
    });

    it('verifies that the "header-container-size-tall" class is not set to the container element', () => {
      expect(testData[0].contains('header-container-size-tall')).toBeFalsy();
    });
  });

  describe('Component with tall size', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="tall">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"]`);
      
      /* Verifies that the "header-container-size-small" class is not set to the container element */
      /* Verifies that the "header-container-size-tall" class is set to the container element */
      testData.push(headerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "header-container-size-small" class is not set to the container element', () => {
      expect(testData[0].contains('header-container-size-small')).toBeFalsy();
    });

    it('verifies that the "header-container-size-tall" class is set to the container element', () => {
      expect(testData[0].contains('header-container-size-tall')).toBeTruthy();
    });
  });

  describe('Component with invalid size', () => {
    let consoleErrorSpy;
    const testData = [];

    beforeAll(() => {
      consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="unsupported_value">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"]`);
      
      /* Verifies that the "header-container-size-small" class is set to the container element */
      /* Verifies that the "header-container-size-tall" class is not set to the container element */
      testData.push(headerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      consoleErrorSpy.mockRestore();
    });

    it('verifies that the "header-container-size-small" class is set to the container element', () => {
      expect(testData[0].contains('header-container-size-small')).toBeTruthy();
    });

    it('verifies that the "header-container-size-tall" class is not set to the container element', () => {
      expect(testData[0].contains('header-container-size-tall')).toBeFalsy();
    });
  });

  describe('Component with background image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase backgroundImageSrc={headerBgImage}>
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContentContainer = document.querySelector(`header[id="${defaultHeaderContainerId}"] > div`);
      
      /* Verifies that the background image of the content container element is set correctly */
      testData.push(headerContentContainer.style.backgroundImage);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the background image of the content container element is set correctly', () => {
      expect(testData[0]).toBeDefined();
    });
  });
});
