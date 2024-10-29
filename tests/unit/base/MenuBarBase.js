/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import MenuBarBase from '../../../src/components/base/MenuBarBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Menu Bar Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultMenuBarContainerId = 'default-id--menu-bar-container';
  const customMenuBarContainerId = `${customId}--menu-bar-container`;

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
          <MenuBarBase>
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const menuBarContainer = document.querySelector(`nav[id="${defaultMenuBarContainerId}"]`);
      const menuBarContentContainer = document.querySelector(`nav[id="${defaultMenuBarContainerId}"] > div`);
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(menuBarContainer);
      
      /* Verifies that the children components are rendered within the content container element */
      testData.push(menuBarContentContainer);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content container element', () => {
      expect(testData[1].textContent).toBe('Menu bar base text content.');
    });
  });

  describe('Component with custom id', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase id={customId}>
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const menuBarContainer = document.querySelector(`nav[id="${customMenuBarContainerId}"]`);
       
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(menuBarContainer);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });
  });
});
