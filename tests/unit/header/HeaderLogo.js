/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderLogo } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header Logo', () => {
  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  /* Set the custom and default data for use in the tests */
  const rectangleImageHeightSmallNoBorder = 144;
  const rectangleImageHeightSmallWithBorder = 140;
  const rectangleImageWidthSmall = 312;
  const squareImageHeightSmallNoBorder = 144;
  const squareImageHeightSmallWithBorder = 140;
  const squareImageWidthSmall = 140;
  const tallImageHeightNoBorder = 304;
  const tallImageHeightWithBorder = 300;
  const tallImageWidth = 312;

  describe('Standalone logo image, default alignment, default logo type', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
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
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogoLong} alignment="centre" logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
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

  describe('Logo image in small size Header with border, default alignment, square logo type', () => {
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
          return true;
        });
      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} logoType="square" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

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

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[0]).toBe(`${squareImageWidthSmall}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${squareImageHeightSmallWithBorder}`);
    });
  });

  describe('Logo image in tall size Header with no border, default alignment, standard logo type, no title text, no subtitle text', () => {
    let querySelectorSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return true;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return null;
        });
      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

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

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[0]).toBe(`${tallImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${tallImageHeightNoBorder}`);
    });
  });

  describe('Logo image in tall size Header with border, default alignment, standard logo type, with title text (no text wrapping), with subtitle text (visible)', () => {
    const heightSubtitleTextElement = 35;
    const heightTitleTextElement = 75;
    let querySelectorSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return {
            dataset: {
              wrap: 'false',
            },
            getBoundingClientRect: () => {
              return {
                height: heightTitleTextElement,
              };
            },
          };
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return {
            getBoundingClientRect: () => {
              return {
                height: heightSubtitleTextElement,
              };
            },
          };
        });

      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

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

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[0]).toBe(`${tallImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${tallImageHeightWithBorder - (heightTitleTextElement + heightSubtitleTextElement)}`);
    });
  });

  describe('Logo image in tall size Header with no border, default alignment, standard logo type, with title text (with text wrapping), with subtitle text (hidden)', () => {
    const heightTitleTextElement = 95;
    let querySelectorSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return {
            dataset: {
              wrap: 'true',
            },
            getBoundingClientRect: () => {
              return {
                height: heightTitleTextElement,
              };
            },
          };
        });

      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} logoType="square" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

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

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[0]).toBe(`${tallImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${tallImageHeightNoBorder - heightTitleTextElement}`);
    });
  });

  describe('Logo image in small size Header with border, default alignment, rectangle logo type', () => {
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
          return true;
        });
      /* Mount the component */
      const unmount = TestDev.render_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testImageId} src={storybookLogo} logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const logoImageElement = document.querySelector(`img[id="${testImageId}--header-logo--decorative-image"]`);

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

    it('verifies that the width attribute is set correctly to the logo image element', () => {
      expect(testData[0]).toBe(`${rectangleImageWidthSmall}`);
    });

    it('verifies that the height attribute is set correctly to the logo image element', () => {
      expect(testData[1]).toBe(`${rectangleImageHeightSmallWithBorder}`);
    });
  });
});
