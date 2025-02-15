/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { FunctionalImage, ImageBase } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Functional Image', () => {
  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  /* Set the custom and default data for use in the tests */
  const customImageAlt = 'Custom functional image alt text';
  const customImageHeight = 250;
  const customImageWidth = 400;
  const defaultImageHeight = 100;
  const defaultImageWidth = 100;

  describe('Default image and mouse events including all click types', () => {
    const mockOnClick = jest.fn();
    let mouseDownCustomFunctionSpy;
    const testData = [];

    beforeAll(() => {
      mouseDownCustomFunctionSpy = jest
        .spyOn(ImageBase.prototype, 'mouseDownCustomFunction')
      const { unmount } = render(
        <React.Fragment>
          <FunctionalImage id={testImageId} src={storybookLogo} alt={customImageAlt} onClick={mockOnClick} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}--functional-image"]`);

      /* Verifies that the id attribute is set correctly to the image element */
      testData.push(image);
      
      /* Verifies that the src attribute is set correctly to the image element */
      testData.push(image.getAttribute('src'));

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Verifies that the alt attribute is set correctly to the image element */
      testData.push(image.getAttribute('alt'));

      /* Fire a left click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

      /* Verifies that the left click event invoked the mouseDownCustomFunction functionality */
      testData.push(mouseDownCustomFunctionSpy.mock.calls.length === 1);

      /* Verifies that the left click event invoked the custom onClick functionality */
      testData.push(mockOnClick.mock.calls.length === 1);

      /* Fire an auxiliary / scroll wheel click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 1 }));

      /* Verifies that the auxiliary / scroll wheel click event invoked the mouseDownCustomFunction functionality */
      testData.push(mouseDownCustomFunctionSpy.mock.calls.length === 2);

      /* Verifies that the auxiliary / scroll wheel click event did not invoke the custom onClick functionality */
      testData.push(mockOnClick.mock.calls.length === 1);

      /* Fire a right click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 2 }));

      /* Verifies that the right click event invoked the mouseDownCustomFunction functionality */
      testData.push(mouseDownCustomFunctionSpy.mock.calls.length === 3);

      /* Verifies that the right click event did not invoke the custom onClick functionality */
      testData.push(mockOnClick.mock.calls.length === 1);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      mouseDownCustomFunctionSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the image element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the src attribute is set correctly to the image element', () => {
      expect(testData[1]).toBeDefined();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[2]).toBe(`${defaultImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[3]).toBe(`${defaultImageHeight}`);
    });

    it('verifies that the alt attribute is set correctly to the image element', () => {
      expect(testData[4]).toBe(customImageAlt);
    });

    it('verifies that the left click event invoked the mouseDownCustomFunction functionality', () => {
      expect(testData[5]).toBeTruthy();
    });

    it('verifies that the left click event invoked the custom onClick functionality', () => {
      expect(testData[6]).toBeTruthy();
    });

    it('verifies that the auxiliary / scroll wheel click event invoked the mouseDownCustomFunction functionality', () => {
      expect(testData[7]).toBeTruthy();
    });

    it('verifies that the auxiliary / scroll wheel click event did not invoke the custom onClick functionality', () => {
      expect(testData[8]).toBeTruthy();
    });

    it('verifies that the right click event invoked the mouseDownCustomFunction functionality', () => {
      expect(testData[9]).toBeTruthy();
    });

    it('verifies that the right click event did not invoke the custom onClick functionality', () => {
      expect(testData[10]).toBeTruthy();
    });
  });

  describe('Image with custom height and width parameters', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <FunctionalImage id={testImageId} src={storybookLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} onClick={() => {}} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}--functional-image"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${customImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${customImageHeight}`);
    });
  });
});
