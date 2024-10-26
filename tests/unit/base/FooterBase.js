/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import FooterBase from '../../../src/components/base/FooterBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Footer Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultFooterContainerId = 'default-id--footer-container';
  const customFooterContainerId = `${customId}--footer-container`;

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
          <FooterBase>
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${defaultFooterContainerId}"]`);
      const footerContentContainer = document.querySelector(`footer[id="${defaultFooterContainerId}"] > div`);
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(footerContainer);
      
      /* Verifies that the children components are rendered within the content container element */
      testData.push(footerContentContainer);

      /* Verifies that the "footer-container-size-small" class is set to the container element */
      /* Verifies that the "footer-container-size-tall" class is not set to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content container element', () => {
      expect(testData[1].textContent).toBe('Footer base text content.');
    });

    it('verifies that the "footer-container-size-small" class is set to the container element', () => {
      expect(testData[2].contains('footer-container-size-small')).toBeTruthy();
    });

    it('verifies that the "footer-container-size-tall" class is not set to the container element', () => {
      expect(testData[2].contains('footer-container-size-tall')).toBeFalsy();
    });
  });

  describe('Component with custom id', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <FooterBase id={customId}>
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${customFooterContainerId}"]`);
       
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(footerContainer);
      
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
          <FooterBase size="small">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${defaultFooterContainerId}"]`);
      
      /* Verifies that the "footer-container-size-small" class is set to the container element */
      /* Verifies that the "footer-container-size-tall" class is not set to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "footer-container-size-small" class is set to the container element', () => {
      expect(testData[0].contains('footer-container-size-small')).toBeTruthy();
    });

    it('verifies that the "footer-container-size-tall" class is not set to the container element', () => {
      expect(testData[0].contains('footer-container-size-tall')).toBeFalsy();
    });
  });

  describe('Component with tall size', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <FooterBase size="tall">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${defaultFooterContainerId}"]`);
      
      /* Verifies that the "footer-container-size-small" class is not set to the container element */
      /* Verifies that the "footer-container-size-tall" class is set to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "footer-container-size-small" class is not set to the container element', () => {
      expect(testData[0].contains('footer-container-size-small')).toBeFalsy();
    });

    it('verifies that the "footer-container-size-tall" class is set to the container element', () => {
      expect(testData[0].contains('footer-container-size-tall')).toBeTruthy();
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
          <FooterBase size="unsupported_value">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const footerContainer = document.querySelector(`footer[id="${defaultFooterContainerId}"]`);
      
      /* Verifies that the "footer-container-size-small" class is set to the container element */
      /* Verifies that the "footer-container-size-tall" class is not set to the container element */
      testData.push(footerContainer.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      consoleErrorSpy.mockRestore();
    });

    it('verifies that the "footer-container-size-small" class is set to the container element', () => {
      expect(testData[0].contains('footer-container-size-small')).toBeTruthy();
    });

    it('verifies that the "footer-container-size-tall" class is not set to the container element', () => {
      expect(testData[0].contains('footer-container-size-tall')).toBeFalsy();
    });
  });
});
