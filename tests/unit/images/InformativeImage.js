/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ImageBase, InformativeImage } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Informative Image', () => {
  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  /* Set the custom and default data for use in the tests */
  const customImageAlt = 'Custom informative image alt text';
  const customImageHeight = 250;
  const customImageWidth = 400;
  const defaultImageHeight = 100;
  const defaultImageWidth = 100;

  describe('Default image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <InformativeImage id={testImageId} src={storybookLogo} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}--informative-image"]`);

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

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
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
  });

  describe('Image with custom height and width parameters', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <InformativeImage id={testImageId} src={storybookLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}--informative-image"]`);

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

  describe('Mouse events on the informative image - all click types', () => {
    let mouseDownDisableLeftAndCenterClickEventsSpy;
    const testData = [];

    beforeAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy = jest
        .spyOn(ImageBase.prototype, 'mouseDownDisableLeftAndCenterClickEvents')
      const { unmount } = render(
        <React.Fragment>
          <InformativeImage id={testImageId} src={storybookLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}--informative-image"]`);

      /* Fire a left click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

      /* Verifies that the left click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality */
      testData.push(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls.length === 1);

      /* Fire an auxiliary / scroll wheel click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 1 }));

      /* Verifies that the auxiliary / scroll wheel click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality */
      testData.push(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls.length === 2);

      /* Fire a right click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 2 }));

      /* Verifies that the right click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality */
      testData.push(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls.length === 3);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy.mockRestore();
    });

    it('verifies that the left click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality', () => {
      expect(testData[0]).toBeTruthy();
    });

    it('verifies that the auxiliary / scroll wheel click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality', () => {
      expect(testData[1]).toBeTruthy();
    });

    it('verifies that the right click event invoked the mouseDownDisableLeftAndCenterClickEvents functionality', () => {
      expect(testData[2]).toBeTruthy();
    });
  });
});
