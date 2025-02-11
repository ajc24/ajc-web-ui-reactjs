/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MenuBarBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Menu Bar Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultMenuBarBaseId = 'default-id--menu-bar-base';
  const customMenuBarBaseId = `${customId}--menu-bar-base`;

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

  describe('Default component', () => {
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
      const nav = document.querySelector(`nav[id="${defaultMenuBarBaseId}"]`);
      const outerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div`);
      const innerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div > div`);
      
      /* Verifies that the id attribute is set correctly to the navigation element */
      testData.push(nav);

      /* Verifies that the "background-green" class is not set to the outer content element */
      /* Verifies that the "background-grey-2" class is not set to the outer content element */
      /* Verifies that the "background-red" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Verifies that the children components are rendered within the inner content element */
      testData.push(innerContent.textContent);

      /* Verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once */
      testData.push(setupDocumentBodyCssSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the navigation element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-green" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-green')).toBeFalsy();
    });

    it('verifies that the "background-grey-2" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-grey-2')).toBeFalsy();
    });

    it('verifies that the "background-red" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-red')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeTruthy();
    });

    it('verifies that the children components are rendered within the inner content element', () => {
      expect(testData[2]).toBe('Menu bar base text content.');
    });

    it('verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once', () => {
      expect(testData[3]).toBe(1);
    });
  });

  describe('Component with custom id, invalid background colour', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase id={customId} backgroundColour="invalid">
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const nav = document.querySelector(`nav[id="${customMenuBarBaseId}"]`);
      const outerContent = document.querySelector(`nav[id="${customMenuBarBaseId}"] > div`);
      
      /* Verifies that the id attribute is set correctly to the navigation element */
      testData.push(nav);

      /* Verifies that the "background-green" class is not set to the outer content element */
      /* Verifies that the "background-grey-2" class is not set to the outer content element */
      /* Verifies that the "background-red" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the navigation element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-green" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-green')).toBeFalsy();
    });

    it('verifies that the "background-grey-2" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-grey-2')).toBeFalsy();
    });

    it('verifies that the "background-red" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-red')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeTruthy();
    });
  });

  describe('Component with default id, white background colour', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase backgroundColour="white">
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div`);
      
      /* Verifies that the "background-green" class is not set to the outer content element */
      /* Verifies that the "background-grey-2" class is not set to the outer content element */
      /* Verifies that the "background-red" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-green" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-green')).toBeFalsy();
    });

    it('verifies that the "background-grey-2" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey-2')).toBeFalsy();
    });

    it('verifies that the "background-red" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-red')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeTruthy();
    });
  });

  describe('Component with default id, green background colour', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase backgroundColour="green">
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div`);
      
      /* Verifies that the "background-green" class is set to the outer content element */
      /* Verifies that the "background-grey-2" class is not set to the outer content element */
      /* Verifies that the "background-red" class is not set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-green" class is set to the outer content element', () => {
      expect(testData[0].contains('background-green')).toBeTruthy();
    });

    it('verifies that the "background-grey-2" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey-2')).toBeFalsy();
    });

    it('verifies that the "background-red" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-red')).toBeFalsy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeFalsy();
    });
  });

  describe('Component with default id, grey background colour', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase backgroundColour="grey">
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div`);
      
      /* Verifies that the "background-green" class is not set to the outer content element */
      /* Verifies that the "background-grey-2" class is set to the outer content element */
      /* Verifies that the "background-red" class is not set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-green" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-green')).toBeFalsy();
    });

    it('verifies that the "background-grey-2" class is set to the outer content element', () => {
      expect(testData[0].contains('background-grey-2')).toBeTruthy();
    });

    it('verifies that the "background-red" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-red')).toBeFalsy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeFalsy();
    });
  });

  describe('Component with default id, red background colour', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <MenuBarBase backgroundColour="red">
            Menu bar base text content.
          </MenuBarBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`nav[id="${defaultMenuBarBaseId}"] > div`);
      
      /* Verifies that the "background-green" class is not set to the outer content element */
      /* Verifies that the "background-grey-2" class is not set to the outer content element */
      /* Verifies that the "background-red" class is set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      testData.push(outerContent.classList);
      
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-green" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-green')).toBeFalsy();
    });

    it('verifies that the "background-grey-2" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey-2')).toBeFalsy();
    });

    it('verifies that the "background-red" class is set to the outer content element', () => {
      expect(testData[0].contains('background-red')).toBeTruthy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeFalsy();
    });
  });
});
