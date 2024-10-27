/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ImageBase from '../../../src/components/base/ImageBase';
import benjiLogo from '../../../src/components/images/files/logo-benji.png';

describe('Image Base', () => {
  /* Set the IDs for use in the tests */
  const testImageId = 'test-image-id';

  /* Set the custom and default data for use in the tests */
  const customImageAlt = 'Custom alt text for the image';
  const customImageHeight = 250;
  const customImageWidth = 400;
  const defaultImageAlt = '';
  const defaultImageHeight = 100;
  const defaultImageWidth = 100;

  describe('Default image', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(ImageBase.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Verifies that the id attribute is set correctly to the image element */
      testData.push(image);
      
      /* Verifies that the src attribute is set correctly to the image element */
      testData.push(image.getAttribute('src'));

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Verifies that the alt attribute is set correctly to that of a decorative image element */
      testData.push(image.getAttribute('alt'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
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

    it('verifies that the alt attribute is set correctly to that of a decorative image element', () => {
      expect(testData[4]).toBe(defaultImageAlt);
    });
  });

  describe('Default image - invalid parameters provided', () => {
    let componentDidMountSpy;
    let consoleErrorSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(ImageBase.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height="hello" width="world" alt={12345} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Verifies that the alt attribute is set correctly to that of a decorative image element */
      testData.push(image.getAttribute('alt'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${defaultImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${defaultImageHeight}`);
    });

    it('verifies that the alt attribute is set correctly to that of a decorative image element', () => {
      expect(testData[2]).toBe(defaultImageAlt);
    });
  });

  describe('Decorative image - default width and height', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(ImageBase.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} alt="" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Verifies that the alt attribute is set correctly to that of a decorative image element */
      testData.push(image.getAttribute('alt'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the alt attribute is set correctly to that of a decorative image element', () => {
      expect(testData[0]).toBe(defaultImageAlt);
    });
  });

  describe('Informative image - custom height and width', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(ImageBase.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Verifies that the width attribute is set correctly to the image element */
      testData.push(image.getAttribute('width'));

      /* Verifies that the height attribute is set correctly to the image element */
      testData.push(image.getAttribute('height'));

      /* Verifies that the alt attribute is set correctly to that of an informative image element */
      testData.push(image.getAttribute('alt'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the width attribute is set correctly to the image element', () => {
      expect(testData[0]).toBe(`${customImageWidth}`);
    });

    it('verifies that the height attribute is set correctly to the image element', () => {
      expect(testData[1]).toBe(`${customImageHeight}`);
    });

    it('verifies that the alt attribute is set correctly to that of an informative image element', () => {
      expect(testData[2]).toBe(customImageAlt);
    });
  });

  describe('onLoadSetImageOpacityToVisible functionality', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the load event on the image */
      image.dispatchEvent(new Event('load'));

      /* Get the CSS styling for the element after the load event has been fired */
      const imageStyle = window.getComputedStyle(image);

      /* Verifies that the opacity of the image is set to visible after the image is loaded */
      testData.push(imageStyle.getPropertyValue('opacity'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the opacity of the image is set to visible after the image is loaded', () => {
      expect(testData[0]).toBe('1');
    });
  });

  describe('mouseDownDisableLeftAndCenterClickEvents functionality - left click event on the image', () => {
    let eventPreventDefaultSpy;
    const mockPreventDefault = jest.fn();

    beforeAll(() => {
      eventPreventDefaultSpy = jest
        .spyOn(Event.prototype, 'preventDefault')
        .mockImplementation(() => mockPreventDefault());
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      eventPreventDefaultSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableAllEvents functionality is correctly invoked after clicking on the image', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(1);
    });
  });

  describe('mouseDownDisableLeftAndCenterClickEvents functionality - middle / auxiliary click event on the image', () => {
    let eventPreventDefaultSpy;
    const mockPreventDefault = jest.fn();

    beforeAll(() => {
      eventPreventDefaultSpy = jest
        .spyOn(Event.prototype, 'preventDefault')
        .mockImplementation(() => mockPreventDefault());
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 1 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      eventPreventDefaultSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableAllEvents functionality is correctly invoked after clicking on the image', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(1);
    });
  });

  describe('mouseDownDisableLeftAndCenterClickEvents functionality - right click event on the image', () => {
    let eventPreventDefaultSpy;
    const mockPreventDefault = jest.fn();

    beforeAll(() => {
      eventPreventDefaultSpy = jest
        .spyOn(Event.prototype, 'preventDefault')
        .mockImplementation(() => mockPreventDefault());
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} height={customImageHeight} width={customImageWidth} alt={customImageAlt} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 2 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      eventPreventDefaultSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableAllEvents functionality is not invoked after clicking on the image', () => {
      expect(mockPreventDefault.mock.calls).toHaveLength(0);
    });
  });

  describe('mouseDownCustomFunction functionality - left click event on the image', () => {
    const customOnClick = jest.fn();
    let mouseDownDisableLeftAndCenterClickEventsSpy;

    beforeAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy = jest
        .spyOn(ImageBase.prototype, 'mouseDownDisableLeftAndCenterClickEvents');
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} onClick={customOnClick} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableLeftAndCenterClickEvents functionality is correctly invoked after clicking on the image', () => {
      expect(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the custom functionality is correctly invoked after clicking on the image', () => {
      expect(customOnClick.mock.calls).toHaveLength(1);
    });
  });

  describe('mouseDownCustomFunction functionality - middle / auxiliary click event on the image', () => {
    const customOnClick = jest.fn();
    let mouseDownDisableLeftAndCenterClickEventsSpy;

    beforeAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy = jest
        .spyOn(ImageBase.prototype, 'mouseDownDisableLeftAndCenterClickEvents');
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} onClick={customOnClick} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 1 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableLeftAndCenterClickEvents functionality is correctly invoked after clicking on the image', () => {
      expect(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the custom functionality is not invoked after clicking on the image', () => {
      expect(customOnClick.mock.calls).toHaveLength(0);
    });
  });

  describe('mouseDownCustomFunction functionality - right click event on the image', () => {
    const customOnClick = jest.fn();
    let mouseDownDisableLeftAndCenterClickEventsSpy;

    beforeAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy = jest
        .spyOn(ImageBase.prototype, 'mouseDownDisableLeftAndCenterClickEvents');
      const { unmount } = render(
        <React.Fragment>
          <ImageBase id={testImageId} src={benjiLogo} onClick={customOnClick} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const image = document.querySelector(`img[id="${testImageId}"]`);

      /* Fire the click event on the image */
      image.dispatchEvent(new MouseEvent('mousedown', { button: 2 }));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      mouseDownDisableLeftAndCenterClickEventsSpy.mockRestore();
    });

    it('verifies that the mouseDownDisableLeftAndCenterClickEvents functionality is correctly invoked after clicking on the image', () => {
      expect(mouseDownDisableLeftAndCenterClickEventsSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the custom functionality is not invoked after clicking on the image', () => {
      expect(customOnClick.mock.calls).toHaveLength(0);
    });
  });
});
