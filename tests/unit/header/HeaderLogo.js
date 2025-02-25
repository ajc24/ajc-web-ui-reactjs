/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { HeaderLogo } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header Logo', () => {
  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  /* Set the custom and default data for use in the tests */
  const rectangleImageHeightSmallNoBorder = 144;
  const rectangleImageWidthSmall = 312;
  const squareImageHeightSmallNoBorder = 144;
  const squareImageWidthSmall = 140;

  describe('Standalone logo image, default alignment, default logo type', () => {
    const testData = [];

    beforeAll(() => {
      /* Enable fake timers to allow the setTimeout() functionality to be fired correctly */
      jest.useFakeTimers();

      /* Mount the component */
      const { rerender, unmount } = render(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} />
        </React.Fragment>
      );
      /* Run all timers */
      jest.runAllTimers();

      /* Re-render the component to ensure the setTimeout() functionality has been executed as expected */
      rerender(<React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} />
        </React.Fragment>
      );

      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`).parentNode;
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

      /* Verifies that the container element is correctly rendered */
      testData.push(containerElement);

      /* Verifies that the "page-template-container" class is set to the container element */
      /* Verifies that the "image-header-logo-inside-header" class is not set to the container element */
      /* Verifies that the "image-header-logo-alignment-centre" class is not set to the container element */
      /* Verifies that the "image-header-logo-alignment-left" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the id attribute is set correctly to the logo image element */
      testData.push(logoImageElement);
      
      /* Verifies that the src attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('src'));

      /* Verifies that the width attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the container element is correctly rendered', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "page-template-container" class is set to the container element', () => {
      expect(testData[1].contains('page-template-container')).toBeTruthy();
    });

    it('verifies that the "image-header-logo-inside-header" class is not set to the container element', () => {
      expect(testData[1].contains('image-header-logo-inside-header')).toBeFalsy();
    });

    it('verifies that the "image-header-logo-alignment-centre" class is not set to the container element', () => {
      expect(testData[1].contains('image-header-logo-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "image-header-logo-alignment-left" class is set to the container element', () => {
      expect(testData[1].contains('image-header-logo-alignment-left')).toBeTruthy();
    });

    it('verifies that the id attribute is set correctly to the logo image element', () => {
      expect(testData[2]).not.toBeNull();
    });

    it('verifies that the src attribute is set correctly to the logo image element', () => {
      expect(testData[3]).toBeDefined();
    });

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[4]).toBe(`${squareImageWidthSmall}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[5]).toBe(`${squareImageHeightSmallNoBorder}`);
    });
  });

  describe('Standalone logo image, left alignment, square logo type', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} alignment="left" logoType="square" />
        </React.Fragment>
      );
      
      /* Fire a resize event on the document window to invoke the functionality being tested */
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`).parentNode;
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

      /* Verifies that the "page-template-container" class is set to the container element */
      /* Verifies that the "image-header-logo-inside-header" class is not set to the container element */
      /* Verifies that the "image-header-logo-alignment-centre" class is not set to the container element */
      /* Verifies that the "image-header-logo-alignment-left" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the width attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "page-template-container" class is set to the container element', () => {
      expect(testData[0].contains('page-template-container')).toBeTruthy();
    });

    it('verifies that the "image-header-logo-inside-header" class is not set to the container element', () => {
      expect(testData[0].contains('image-header-logo-inside-header')).toBeFalsy();
    });

    it('verifies that the "image-header-logo-alignment-centre" class is not set to the container element', () => {
      expect(testData[0].contains('image-header-logo-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "image-header-logo-alignment-left" class is set to the container element', () => {
      expect(testData[0].contains('image-header-logo-alignment-left')).toBeTruthy();
    });

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${squareImageWidthSmall}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[2]).toBe(`${squareImageHeightSmallNoBorder}`);
    });
  });

  describe('Logo image in small size Header with no border, centre alignment, rectangle logo type', () => {
    let querySelectorSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} alignment="centre" logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );

      /* Fire a resize event on the document window to invoke the functionality being tested */
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`).parentNode;
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

      /* Verifies that the "page-template-container" class is not set to the container element */
      /* Verifies that the "image-header-logo-inside-header" class is set to the container element */
      /* Verifies that the "image-header-logo-alignment-centre" class is set to the container element */
      /* Verifies that the "image-header-logo-alignment-left" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the width attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the logo image element */
      testData.push(logoImageElement.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the "page-template-container" class is not set to the container element', () => {
      expect(testData[0].contains('page-template-container')).toBeFalsy();
    });

    it('verifies that the "image-header-logo-inside-header" class is set to the container element', () => {
      expect(testData[0].contains('image-header-logo-inside-header')).toBeTruthy();
    });

    it('verifies that the "image-header-logo-alignment-centre" class is set to the container element', () => {
      expect(testData[0].contains('image-header-logo-alignment-centre')).toBeTruthy();
    });

    it('verifies that the "image-header-logo-alignment-left" class is not set to the container element', () => {
      expect(testData[0].contains('image-header-logo-alignment-left')).toBeFalsy();
    });

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${rectangleImageWidthSmall}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[2]).toBe(`${rectangleImageHeightSmallNoBorder}`);
    });
  });
});
