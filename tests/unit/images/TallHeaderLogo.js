/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import TallHeaderLogo from '../../../src/components/images/TallHeaderLogo';
import storybookLogo from '../../../stories/images/files/storybook-logo-long-tall.svg';

describe('Tall Header Logo', () => {
  /* Set the image dimensions for use in the tests */
  const tallHeaderLogoDimensions = {
    height: {
      solo: {
        noUpperBorder: 304,
        withUpperBorder: 300,
      },
    },
    width: {
      default: 328,
    },
  };

  /* Set the IDs for use in the tests */
  const testHeaderTitleTextId = 'test-header-title-text-id';
  const testImageId = 'test-image-id';
  const testSubtitleTextId = 'test-subtitle-text-id';

  describe('Default logo image with no header upper border rendered', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

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

    it('verifies that the id attribute is set correctly to the image element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the src attribute is set correctly to the image element', () => {
      expect(testData[1]).toBeDefined();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[2]).toBe(`${tallHeaderLogoDimensions.width.default}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[3]).toBe(`${tallHeaderLogoDimensions.height.solo.noUpperBorder}`);
    });
  });

  describe('Tall header logo image with no header upper border rendered, no title text, no subtitle text', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={false} src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${tallHeaderLogoDimensions.width.default}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${tallHeaderLogoDimensions.height.solo.noUpperBorder}`);
    });
  });

  describe('Tall header logo image with header upper border rendered, no title text, no subtitle text', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={true} src={storybookLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${tallHeaderLogoDimensions.width.default}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${tallHeaderLogoDimensions.height.solo.withUpperBorder}`);
    });
  });

  describe('Tall header logo image with no header upper border rendered, with null title text element, no subtitle text', () => {
    let querySelectorSpy;
    const testData = [];
    let verifyHeight;

    beforeAll(() => {
      /* Set up the spies required for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the title text element is queried */
          if (selector.indexOf(`${testHeaderTitleTextId}--title-text`) >= 0) {
            return null;
          }
        });
      /* Mount the component being tested */
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={false} src={storybookLogo} headerTitleTextId={testHeaderTitleTextId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Determine the test height to be verified */
      verifyHeight = tallHeaderLogoDimensions.height.solo.noUpperBorder;

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${verifyHeight}`);
    });
  });

  describe('Tall header logo image with no header upper border rendered, with valid title text element, no subtitle text', () => {
    let querySelectorSpy;
    const testData = [];
    const testHeightTitleText = 100;
    let verifyHeight;

    beforeAll(() => {
      /* Set up the spies required for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the title text element is queried */
          if (selector.indexOf(`${testHeaderTitleTextId}--title-text`) >= 0) {
            return {
              getBoundingClientRect: () => {
                return {
                  height: testHeightTitleText,
                };
              },
            };
          }
        });
      /* Mount the component being tested */
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={false} src={storybookLogo} headerTitleTextId={testHeaderTitleTextId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Determine the test height to be verified */
      verifyHeight = tallHeaderLogoDimensions.height.solo.noUpperBorder - testHeightTitleText;

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${verifyHeight}`);
    });
  });

  describe('Tall header logo image with header upper border rendered, with valid title text element, with null subtitle text element', () => {
    let querySelectorSpy;
    const testData = [];
    const testHeightTitleText = 150;
    let verifyHeight;

    beforeAll(() => {
      /* Set up the spies required for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the title text element is queried */
          if (selector.indexOf(`${testHeaderTitleTextId}--title-text`) >= 0) {
            return {
              getBoundingClientRect: () => {
                return {
                  height: testHeightTitleText,
                };
              },
            };
          }
        })
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the subtitle text element is queried */
          if (selector.indexOf(`${testSubtitleTextId}--subtitle-text`) >= 0) {
            return null;
          }
        });
      /* Mount the component being tested */
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={true} src={storybookLogo} headerTitleTextId={testHeaderTitleTextId} subtitleTextId={testSubtitleTextId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Determine the test height to be verified */
      verifyHeight = tallHeaderLogoDimensions.height.solo.withUpperBorder - testHeightTitleText;

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${verifyHeight}`);
    });
  });

  describe('Tall header logo image with header upper border rendered, with valid title text element, with valid and hidden subtitle text element', () => {
    let querySelectorSpy;
    const testData = [];
    const testHeightTitleText = 125;
    let verifyHeight;

    beforeAll(() => {
      /* Set up the spies required for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the title text element is queried */
          if (selector.indexOf(`${testHeaderTitleTextId}--title-text`) >= 0) {
            return {
              getBoundingClientRect: () => {
                return {
                  height: testHeightTitleText,
                };
              },
            };
          }
        })
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the subtitle text element is queried */
          if (selector.indexOf(`${testSubtitleTextId}--subtitle-text`) >= 0) {
            return {
              getAttribute: attribute => {
                if (attribute === 'aria-hidden') {
                  return 'true';
                }
                return 'false';
              },
            };
          }
        });
      /* Mount the component being tested */
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={true} src={storybookLogo} headerTitleTextId={testHeaderTitleTextId} subtitleTextId={testSubtitleTextId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Determine the test height to be verified */
      verifyHeight = tallHeaderLogoDimensions.height.solo.withUpperBorder - testHeightTitleText;

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${verifyHeight}`);
    });
  });

  describe('Tall header logo image with no header upper border rendered, with valid title text element, with valid and visible subtitle text element', () => {
    let querySelectorSpy;
    const testData = [];
    const testHeightSubtitleText = 75;
    const testHeightTitleText = 115;
    let verifyHeight;

    beforeAll(() => {
      /* Set up the spies required for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the title text element is queried */
          if (selector.indexOf(`${testHeaderTitleTextId}--title-text`) >= 0) {
            return {
              getBoundingClientRect: () => {
                return {
                  height: testHeightTitleText,
                };
              },
            };
          }
        })
        .mockImplementationOnce(selector => {
          /* Mock the return value for when the subtitle text element is queried */
          if (selector.indexOf(`${testSubtitleTextId}--subtitle-text`) >= 0) {
            return {
              getAttribute: attribute => {
                if (attribute === 'aria-hidden') {
                  return 'false';
                }
                return 'true';
              },
              getBoundingClientRect: () => {
                return {
                  height: testHeightSubtitleText,
                };
              },
            };
          }
        });
      /* Mount the component being tested */
      const { unmount } = render(
        <React.Fragment>
          <TallHeaderLogo id={testImageId} isTopBorderDisplayed={false} src={storybookLogo} headerTitleTextId={testHeaderTitleTextId} subtitleTextId={testSubtitleTextId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`div[class] > img[id="${testImageId}--tall-header-logo--decorative-image"]`);

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Determine the test height to be verified */
      verifyHeight = tallHeaderLogoDimensions.height.solo.noUpperBorder - testHeightTitleText - testHeightSubtitleText;

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${verifyHeight}`);
    });
  });
});
