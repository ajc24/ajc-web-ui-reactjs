/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SmallHeaderLogo from '../../../src/components/images/SmallHeaderLogo';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Small Header Logo', () => {
  /* Set the image dimensions for use in the tests */
  const smallHeaderLogoDimensions = {
    height: {
      noUpperBorder: 144,
      withUpperBorder: 140,
    },
    width: {
      noUpperBorder: 144,
      rectangle: 328,
      withUpperBorder: 140,
    },
  };

  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  describe('Default logo image with left alignment, no header upper border rendered, square image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <SmallHeaderLogo id={testImageId} src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const container = document.querySelector('div[class]');
      const image = document.querySelector(`div[class] > img[id="${testImageId}--small-header-logo--decorative-image"]`);

      /* Verifies that the "image-small-header-logo-alignment-center" class is not set to the container element */
      /* Verifies that the "image-small-header-logo-alignment-left" class is set to the container element */
      testData.push(container.classList);

      /* Verifies that the id attribute is set correctly to the image element */
      testData.push(image);
      
      /* Verifies that the src attribute is set correctly to the image element */
      testData.push(image.getAttribute('src'));

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "image-small-header-logo-alignment-center" class is not set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-center')).toBeFalsy();
    });

    it('verifies that the "image-small-header-logo-alignment-left" class is set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-left')).toBeTruthy();
    });

    it('verifies that the id attribute is set correctly to the image element', () => {
      expect(testData[1]).not.toBeNull();
    });

    it('verifies that the src attribute is set correctly to the image element', () => {
      expect(testData[2]).toBeDefined();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[3]).toBe(`${smallHeaderLogoDimensions.width.noUpperBorder}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[4]).toBe(`${smallHeaderLogoDimensions.height.noUpperBorder}`);
    });
  });

  describe('Logo image with left alignment, no header upper border rendered, square image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <SmallHeaderLogo id={testImageId} isTopBorderDisplayed={false} logoAlignment="left" logoType="square" src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const container = document.querySelector('div[class]');
      const image = document.querySelector(`div[class] > img[id="${testImageId}--small-header-logo--decorative-image"]`);

      /* Verifies that the "image-small-header-logo-alignment-center" class is not set to the container element */
      /* Verifies that the "image-small-header-logo-alignment-left" class is set to the container element */
      testData.push(container.classList);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "image-small-header-logo-alignment-center" class is not set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-center')).toBeFalsy();
    });

    it('verifies that the "image-small-header-logo-alignment-left" class is set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-left')).toBeTruthy();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${smallHeaderLogoDimensions.width.noUpperBorder}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[2]).toBe(`${smallHeaderLogoDimensions.height.noUpperBorder}`);
    });
  });

  describe('Logo image with center alignment, with header upper border rendered, square image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <SmallHeaderLogo id={testImageId} isTopBorderDisplayed={true} logoAlignment="center" logoType="square" src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const container = document.querySelector('div[class]');
      const image = document.querySelector(`div[class] > img[id="${testImageId}--small-header-logo--decorative-image"]`);

      /* Verifies that the "image-small-header-logo-alignment-center" class is set to the container element */
      /* Verifies that the "image-small-header-logo-alignment-left" class is not set to the container element */
      testData.push(container.classList);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "image-small-header-logo-alignment-center" class is set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-center')).toBeTruthy();
    });

    it('verifies that the "image-small-header-logo-alignment-left" class is not set to the container element', () => {
      expect(testData[0].contains('image-small-header-logo-alignment-left')).toBeFalsy();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${smallHeaderLogoDimensions.width.withUpperBorder}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[2]).toBe(`${smallHeaderLogoDimensions.height.withUpperBorder}`);
    });
  });

  describe('Logo image with center alignment, with header upper border rendered, rectangle image', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <SmallHeaderLogo id={testImageId} isTopBorderDisplayed={true} logoAlignment="center" logoType="rectangle" src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--small-header-logo--decorative-image"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${smallHeaderLogoDimensions.width.rectangle}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${smallHeaderLogoDimensions.height.withUpperBorder}`);
    });
  });
});
