/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderTitleText from '../../../src/components/base/HeaderTitleText';

describe('Header Title Text', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-title-text-id';

  /* Set the default CSS styling for the title text element */
  const defaultFontSize = '3rem';
  const defaultTextAlign = 'left';
  const defaultWhiteSpace = 'nowrap';

  /* Set the edited CSS styling for the title text element */
  const editedTextAlign = 'center';
  const editedWhiteSpace = 'normal';

  describe('componentDidMount functionality', () => {
    let handleScreenWidthSpy;
    const testData = [];

    beforeAll(() => {
      handleScreenWidthSpy = jest
        .spyOn(HeaderTitleText.prototype, 'handleScreenWidth')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Verifies that the handle screen width functionality is invoked by default on mounting the component */
      testData.push(handleScreenWidthSpy.mock.calls.length === 1);

      /* Fire a resize event on the document window */
      window.dispatchEvent(new Event('resize'));
      
      /* Verifies that window resize events correctly invoke the handle screen width functionality */
      testData.push(handleScreenWidthSpy.mock.calls.length === 2);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      handleScreenWidthSpy.mockRestore();
    });

    it('verifies that the handle screen width functionality is invoked by default on mounting the component', () => {
      expect(testData[0]).toBeTruthy();
    });

    it('verifies that window resize events correctly invoke the handle screen width functionality', () => {
      expect(testData[1]).toBeTruthy();
    });
  });

  describe('getHeightOfHeadingElement functionality - invalid title text element', () => {
    const testData = [];

    beforeAll(() => {
      /* Set the title text element reference to a null value */
      HeaderTitleText.prototype.textRef = { current: null };

      /* Invoke the function being tested */
      const elementHeight = HeaderTitleText.prototype.getHeightOfHeadingElement();

      /* Verifies that when the title text element is null, the element height is a zero value */
      testData.push(elementHeight);

      /* Clean up the test */
      cleanup();
    });

    it('verifies that when the title text element is null, the element height is a zero value', () => {
      expect(testData[0]).toBe(0);
    });
  });

  describe('getHeightOfHeadingElement functionality - valid title text element', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy;
    const testData = [];
    const testHeight = 250;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const titleTextElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Set a height for the title text element */
      getBoundingClientRectSpy = jest
        .spyOn(titleTextElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            height: testHeight,
          };
        });
    
      /* Invoke the function being tested */
      const elementHeight = HeaderTitleText.prototype.getHeightOfHeadingElement();

      /* Verifies that the correct height value for the title text element is returned */
      testData.push(elementHeight);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the correct height value for the title text element is returned', () => {
      expect(testData[0]).toBe(testHeight);
    });
  });

  describe('getTitleTextContent functionality - invalid title text element', () => {
    const testData = [];

    beforeAll(() => {
      /* Set the title text element reference to a null value */
      HeaderTitleText.prototype.textRef = { current: null };

      /* Invoke the function being tested */
      const elementTextContent = HeaderTitleText.prototype.getTitleTextContent();

      /* Verifies that when the title text element is null, the elements text content value is an empty string */
      testData.push(elementTextContent);

      /* Clean up the test */
      cleanup();
    });

    it('verifies that when the title text element is null, the elements text content value is an empty string', () => {
      expect(testData[0]).toBe('');
    });
  });

  describe('getTitleTextContent functionality - valid title text element', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };
  
      /* Invoke the function being tested */
      const elementTextContent = HeaderTitleText.prototype.getTitleTextContent();

      /* Verifies that the correct text content value for the title text element is returned */
      testData.push(elementTextContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the correct text content value for the title text element is returned', () => {
      expect(testData[0]).toBe('Header title text component text content.');
    });
  });

  describe('getTitleTextContentRightmostPosition functionality - invalid title text element', () => {
    const testData = [];

    beforeAll(() => {
      /* Set the title text element reference to a null value */
      HeaderTitleText.prototype.textRef = { current: null };

      /* Invoke the function being tested */
      const elementTextContent = HeaderTitleText.prototype.getTitleTextContentRightmostPosition();

      /* Verifies that when the title text element is null, the elements rightmost position is a zero value */
      testData.push(elementTextContent);

      /* Clean up the test */
      cleanup();
    });

    it('verifies that when the title text element is null, the elements rightmost position is a zero value', () => {
      expect(testData[0]).toBe(0);
    });
  });

  describe('getTitleTextContentRightmostPosition functionality - valid title text element', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy;
    const testData = [];
    const testRightmostPosition = 750;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Set a height for the title text element */
      getBoundingClientRectSpy = jest
        .spyOn(headingElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            right: testRightmostPosition,
          };
        });
    
      /* Invoke the function being tested */
      const elementRightmostPositiomn = HeaderTitleText.prototype.getTitleTextContentRightmostPosition();

      /* Verifies that the correct rightmost position value for the heading element is returned */
      testData.push(elementRightmostPositiomn);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the correct rightmost position value for the heading element is returned', () => {
      expect(testData[0]).toBe(testRightmostPosition);
    });
  });

  describe('getWidthOfHeadingElement functionality - invalid title text element', () => {
    const testData = [];

    beforeAll(() => {
      /* Set the title text element reference to a null value */
      HeaderTitleText.prototype.textRef = { current: null };

      /* Invoke the function being tested */
      const elementWidth = HeaderTitleText.prototype.getWidthOfHeadingElement();

      /* Verifies that when the title text element is null, the element width is a zero value */
      testData.push(elementWidth);

      /* Clean up the test */
      cleanup();
    });

    it('verifies that when the title text element is null, the element width is a zero value', () => {
      expect(testData[0]).toBe(0);
    });
  });

  describe('getWidthOfHeadingElement functionality - valid title text element', () => {
    let componentDidMountSpy;
    let getBoundingClientRectSpy;
    const testData = [];
    const testRight = 850;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const titleTextElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Set a height for the title text element */
      getBoundingClientRectSpy = jest
        .spyOn(titleTextElement, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            right: testRight,
          };
        });
    
      /* Invoke the function being tested */
      const elementWidth = HeaderTitleText.prototype.getWidthOfHeadingElement();

      /* Verifies that the correct width value for the title text element is returned */
      testData.push(elementWidth);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the correct width value for the title text element is returned', () => {
      expect(testData[0]).toBe(testRight);
    });
  });

  describe('handleScreenWidth functionality - title is truncated without the need to shorten the string character by character', () => {
    let getHeightOfHeadingElementSpy;
    let reduceFontSizeAndWrapTextIfRequiredSpy;
    let setTitleTextContentToFullTitleSpy;
    const testData = [];
    const testDefaultHeadingHeight = 78;
    let truncateTextByRemovingCharactersSpy;
    let truncateTextByRemovingSpacesSpy;

    beforeAll(() => {
      /* Create all of the spies for the functionality which will be invoked by the target function */
      setTitleTextContentToFullTitleSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setTitleTextContentToFullTitle')
        .mockImplementation(() => {});
      getHeightOfHeadingElementSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getHeightOfHeadingElement')
        .mockImplementation(() => { return testDefaultHeadingHeight });
      reduceFontSizeAndWrapTextIfRequiredSpy = jest
        .spyOn(HeaderTitleText.prototype, 'reduceFontSizeAndWrapTextIfRequired')
        .mockImplementation(() => {});
      truncateTextByRemovingSpacesSpy = jest
        .spyOn(HeaderTitleText.prototype, 'truncateTextByRemovingSpaces')
        .mockImplementation(defaultHeadingHeight => {
          if (defaultHeadingHeight === testDefaultHeadingHeight) {
            return true;
          }
          return false;
        });
      truncateTextByRemovingCharactersSpy = jest
        .spyOn(HeaderTitleText.prototype, 'truncateTextByRemovingCharacters');
      
      /* Invoke the function being tested */
      HeaderTitleText.prototype.handleScreenWidth();

      /* Verifies that the setTitleTextContentToFullTitle functionality is correctly invoked */
      testData.push(setTitleTextContentToFullTitleSpy.mock.calls.length);

      /* Verifies that the getHeightOfHeadingElement functionality is correctly invoked */
      testData.push(getHeightOfHeadingElementSpy.mock.calls.length);

      /* Verifies that the reduceFontSizeAndWrapTextIfRequired functionality is correctly invoked */
      testData.push(reduceFontSizeAndWrapTextIfRequiredSpy.mock.calls.length);

      /* Verifies that the truncateTextByRemovingSpaces functionality is correctly invoked */
      testData.push(truncateTextByRemovingSpacesSpy.mock.calls.length);

      /* Verifies that the truncateTextByRemovingCharacters functionality is not invoked */
      testData.push(truncateTextByRemovingCharactersSpy.mock.calls.length);

      /* Clean up the test */
      cleanup();
    });

    afterAll(() => {
      getHeightOfHeadingElementSpy.mockRestore();
      reduceFontSizeAndWrapTextIfRequiredSpy.mockRestore();
      setTitleTextContentToFullTitleSpy.mockRestore();
      truncateTextByRemovingSpacesSpy.mockRestore();
    });

    it('verifies that the setTitleTextContentToFullTitle functionality is correctly invoked', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the getHeightOfHeadingElement functionality is correctly invoked', () => {
      expect(testData[1]).toBe(1);
    });

    it('verifies that the reduceFontSizeAndWrapTextIfRequired functionality is correctly invoked', () => {
      expect(testData[2]).toBe(1);
    });

    it('verifies that the truncateTextByRemovingSpaces functionality is correctly invoked', () => {
      expect(testData[3]).toBe(1);
    });

    it('verifies that the truncateTextByRemovingCharacters functionality is not invoked', () => {
      expect(testData[4]).toBe(0);
    });
  });

  describe('handleScreenWidth functionality - title is truncated by shortening the string character by character', () => {
    let getHeightOfHeadingElementSpy;
    let reduceFontSizeAndWrapTextIfRequiredSpy;
    let setTitleTextContentToFullTitleSpy;
    const testData = [];
    const testDefaultHeadingHeight = 94;
    let truncateTextByRemovingCharactersSpy;
    let truncateTextByRemovingSpacesSpy;

    beforeAll(() => {
      /* Create all of the spies for the functionality which will be invoked by the target function */
      setTitleTextContentToFullTitleSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setTitleTextContentToFullTitle')
        .mockImplementation(() => {});
      getHeightOfHeadingElementSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getHeightOfHeadingElement')
        .mockImplementation(() => { return testDefaultHeadingHeight });
      reduceFontSizeAndWrapTextIfRequiredSpy = jest
        .spyOn(HeaderTitleText.prototype, 'reduceFontSizeAndWrapTextIfRequired')
        .mockImplementation(() => {});
      truncateTextByRemovingSpacesSpy = jest
        .spyOn(HeaderTitleText.prototype, 'truncateTextByRemovingSpaces')
        .mockImplementation(defaultHeadingHeight => {
          if (defaultHeadingHeight === testDefaultHeadingHeight) {
            return false;
          }
          return true;
        });
      truncateTextByRemovingCharactersSpy = jest
        .spyOn(HeaderTitleText.prototype, 'truncateTextByRemovingCharacters');
      
      /* Invoke the function being tested */
      HeaderTitleText.prototype.handleScreenWidth();

      /* Verifies that the truncateTextByRemovingCharacters functionality is correctly invoked */
      testData.push(truncateTextByRemovingCharactersSpy.mock.calls.length);

      /* Clean up the test */
      cleanup();
    });

    afterAll(() => {
      getHeightOfHeadingElementSpy.mockRestore();
      reduceFontSizeAndWrapTextIfRequiredSpy.mockRestore();
      setTitleTextContentToFullTitleSpy.mockRestore();
      truncateTextByRemovingSpacesSpy.mockRestore();
    });

    it('verifies that the truncateTextByRemovingCharacters functionality is correctly invoked', () => {
      expect(testData[0]).toBe(1);
    });
  });

  describe('reduceFontSizeAndWrapTextIfRequired functionality - screen resized, no font size reduction, no text wrapping', () => {
    let componentDidMountSpy;
    let getTitleTextContentRightmostPositionSpy;
    let getWidthOfHeadingElementSpy;
    let setIsWrappedSpy;
    const testData = [];
    let testIsWrapped = false;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the default CSS styling data for the heading element */
      headingElement.style.fontSize = defaultFontSize;
      headingElement.style.textAlign = defaultTextAlign;
      headingElement.style.whiteSpace = defaultWhiteSpace;

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Create all of the spies for the functionality which will be invoked by the target function */
      getTitleTextContentRightmostPositionSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getTitleTextContentRightmostPosition')
        .mockImplementation(() => {
          return 750;
        });
      getWidthOfHeadingElementSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getWidthOfHeadingElement')
        .mockImplementation(() => {
          return 750;
        });
      setIsWrappedSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setIsWrapped')
        .mockImplementation(newIsWrapped => {
          testIsWrapped = newIsWrapped;
        });

      /* Invoke the function being tested */
      HeaderTitleText.prototype.reduceFontSizeAndWrapTextIfRequired();

      /* Verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked only once */
      testData.push(getTitleTextContentRightmostPositionSpy.mock.calls.length);

      /* Verifies that the getWidthOfHeadingElement functionality is correctly invoked twice */
      testData.push(getWidthOfHeadingElementSpy.mock.calls.length);

      /* Verifies that the font size CSS styling for the heading element remains at its default value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the text align CSS styling for the heading element remains at its default value */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the white space CSS styling for the heading element remains at its default value */
      testData.push(headingElement.style.whiteSpace);

      /* Verifies that the setIsWrapped functionality is not invoked */
      testData.push(setIsWrappedSpy.mock.calls.length);

      /* Verifies that the value for whether the title text has been wrapped remains at its default value */
      testData.push(testIsWrapped);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getTitleTextContentRightmostPositionSpy.mockRestore();
      getWidthOfHeadingElementSpy.mockRestore();
      setIsWrappedSpy.mockRestore();
    });

    it('verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked only once', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the getWidthOfHeadingElement functionality is correctly invoked twice', () => {
      expect(testData[1]).toBe(2);
    });

    it('verifies that the font size CSS styling for the heading element remains at its default value', () => {
      expect(testData[2]).toBe(defaultFontSize);
    });

    it('verifies that the text align CSS styling for the heading element remains at its default value', () => {
      expect(testData[3]).toBe(defaultTextAlign);
    });

    it('verifies that the white space CSS styling for the heading element remains at its default value', () => {
      expect(testData[4]).toBe(defaultWhiteSpace);
    });

    it('verifies that the setIsWrapped functionality is not invoked', () => {
      expect(testData[5]).toBe(0);
    });

    it('verifies that the value for whether the title text has been wrapped remains at its default value', () => {
      expect(testData[6]).toBeFalsy();
    });
  });

  describe('reduceFontSizeAndWrapTextIfRequired functionality - screen resized, with font size reduction, no text wrapping', () => {
    let componentDidMountSpy;
    const editedFontSize = '2.5rem';
    let getTitleTextContentRightmostPositionSpy;
    let getWidthOfHeadingElementSpy;
    let setIsWrappedSpy;
    const testData = [];
    let testIsWrapped = false;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the default CSS styling data for the heading element */
      headingElement.style.fontSize = defaultFontSize;
      headingElement.style.textAlign = defaultTextAlign;
      headingElement.style.whiteSpace = defaultWhiteSpace;

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Create all of the spies for the functionality which will be invoked by the target function */
      getTitleTextContentRightmostPositionSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getTitleTextContentRightmostPosition')
        .mockImplementationOnce(() => {
          /* Initial call to trigger font size reduction */
          return 760;
        })
        .mockImplementationOnce(() => {
          /* At rem size 3 */
          return 750;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.9 */
          return 740;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.8 */
          return 730;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.7 */
          return 720;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.6 */
          return 710;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.5 */
          return 700;
        });
      getWidthOfHeadingElementSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getWidthOfHeadingElement')
        .mockImplementation(() => {
          return 700;
        });
      setIsWrappedSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setIsWrapped')
        .mockImplementation(newIsWrapped => {
          testIsWrapped = newIsWrapped;
        });

      /* Invoke the function being tested */
      HeaderTitleText.prototype.reduceFontSizeAndWrapTextIfRequired();

      /* Verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked multiple times */
      testData.push(getTitleTextContentRightmostPositionSpy.mock.calls.length);

      /* Verifies that the font size CSS styling for the heading element is correctly reduced */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the text align CSS styling for the heading element remains at its default value */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the white space CSS styling for the heading element remains at its default value */
      testData.push(headingElement.style.whiteSpace);

      /* Verifies that the setIsWrapped functionality is not invoked */
      testData.push(setIsWrappedSpy.mock.calls.length);

      /* Verifies that the value for whether the title text has been wrapped remains at its default value */
      testData.push(testIsWrapped);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getTitleTextContentRightmostPositionSpy.mockRestore();
      getWidthOfHeadingElementSpy.mockRestore();
      setIsWrappedSpy.mockRestore();
    });

    it('verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked multiple times', () => {
      expect(testData[0]).toBe(7);
    });

    it('verifies that the font size CSS styling for the heading element is correctly reduced', () => {
      expect(testData[1]).toBe(editedFontSize);
    });

    it('verifies that the text align CSS styling for the heading element remains at its default value', () => {
      expect(testData[2]).toBe(defaultTextAlign);
    });

    it('verifies that the white space CSS styling for the heading element remains at its default value', () => {
      expect(testData[3]).toBe(defaultWhiteSpace);
    });

    it('verifies that the setIsWrapped functionality is not invoked', () => {
      expect(testData[4]).toBe(0);
    });

    it('verifies that the value for whether the title text has been wrapped remains at its default value', () => {
      expect(testData[5]).toBeFalsy();
    });
  });

  describe('reduceFontSizeAndWrapTextIfRequired functionality - screen resized, with font size reduction, with text wrapping', () => {
    let componentDidMountSpy;
    const editedFontSize = '2rem';
    let getTitleTextContentRightmostPositionSpy;
    let getWidthOfHeadingElementSpy;
    let setIsWrappedSpy;
    const testData = [];
    let testIsWrapped = false;

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the default CSS styling data for the heading element */
      headingElement.style.fontSize = defaultFontSize;
      headingElement.style.textAlign = defaultTextAlign;
      headingElement.style.whiteSpace = defaultWhiteSpace;

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Create all of the spies for the functionality which will be invoked by the target function */
      getTitleTextContentRightmostPositionSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getTitleTextContentRightmostPosition')
        .mockImplementationOnce(() => {
          /* Initial call to trigger font size reduction */
          return 760;
        })
        .mockImplementationOnce(() => {
          /* At rem size 3 */
          return 750;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.9 */
          return 740;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.8 */
          return 730;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.7 */
          return 720;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.6 */
          return 710;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.5 */
          return 700;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.4 */
          return 690;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.3 */
          return 680;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.2 */
          return 670;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2.1 */
          return 660;
        })
        .mockImplementationOnce(() => {
          /* At rem size 2 */
          return 650;
        });
      getWidthOfHeadingElementSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getWidthOfHeadingElement')
        .mockImplementation(() => {
          return 640;
        });
      setIsWrappedSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setIsWrapped')
        .mockImplementation(newIsWrapped => {
          testIsWrapped = newIsWrapped;
        });

      /* Invoke the function being tested */
      HeaderTitleText.prototype.reduceFontSizeAndWrapTextIfRequired();

      /* Verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked multiple times */
      testData.push(getTitleTextContentRightmostPositionSpy.mock.calls.length);

      /* Verifies that the font size CSS styling for the heading element is correctly reduced */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the text align CSS styling for the heading element is correctly changed to center alignment */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the white space CSS styling for the heading element is correctly changed to enable word wrapping */
      testData.push(headingElement.style.whiteSpace);

      /* Verifies that the setIsWrapped functionality is correctly invoked */
      testData.push(setIsWrappedSpy.mock.calls.length);

      /* Verifies that the value for whether the title text has been wrapped indicates that wrapping is enabled */
      testData.push(testIsWrapped);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      getTitleTextContentRightmostPositionSpy.mockRestore();
      getWidthOfHeadingElementSpy.mockRestore();
      setIsWrappedSpy.mockRestore();
    });

    it('verifies that the getTitleTextContentRightmostPosition functionality is correctly invoked multiple times', () => {
      expect(testData[0]).toBe(12);
    });

    it('verifies that the font size CSS styling for the heading element is correctly reduced', () => {
      expect(testData[1]).toBe(editedFontSize);
    });

    it('verifies that the text align CSS styling for the heading element is correctly changed to center alignment', () => {
      expect(testData[2]).toBe(editedTextAlign);
    });

    it('verifies that the white space CSS styling for the heading element is correctly changed to enable word wrapping', () => {
      expect(testData[3]).toBe(editedWhiteSpace);
    });

    it('verifies that the setIsWrapped functionality is correctly invoked', () => {
      expect(testData[4]).toBe(1);
    });

    it('verifies that the value for whether the title text has been wrapped indicates that wrapping is enabled', () => {
      expect(testData[5]).toBeTruthy();
    });
  });

  describe('setIsWrapped functionality', () => {
    let setStateSpy;
    const testData = [];
    let testIsWrapped;

    beforeAll(() => {
      setStateSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setState')
        .mockImplementation(newState => {
          testIsWrapped = newState.isWrapped;
        });

      /* Invoke the function being tested */
      HeaderTitleText.prototype.setIsWrapped(false);

      /* Verifies that the component state is correctly updated to disable text wrapping */
      testData.push(testIsWrapped);

      /* Invoke the function being tested again */
      HeaderTitleText.prototype.setIsWrapped(true);

      /* Verifies that the component state is correctly updated to enable text wrapping */
      testData.push(testIsWrapped);

      /* Clean up the test */
      cleanup();
    });

    afterAll(() => {
      setStateSpy.mockRestore();
    });

    it('verifies that the component state is correctly updated to disable text wrapping', () => {
      expect(testData[0]).toBeFalsy();
    });

    it('verifies that the component state is correctly updated to enable text wrapping', () => {
      expect(testData[1]).toBeTruthy();
    });
  });

  describe('setTitleTextContent functionality', () => {
    let componentDidMountSpy;
    const testData = [];
    const updatedTextContent = 'Updated heading element text content';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Verifies the text content of the heading element before invoking the function */
      testData.push(headingElement.textContent);

      /* Invoke the function being tested */
      HeaderTitleText.prototype.setTitleTextContent(updatedTextContent);

      /* Verifies the text content of the heading element after invoking the function */
      testData.push(headingElement.textContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the text content of the heading element before invoking the function', () => {
      expect(testData[0]).toBe('Header title text component text content.');
    });

    it('verifies the text content of the heading element after invoking the function', () => {
      expect(testData[1]).toBe(updatedTextContent);
    });
  });

  describe('setTitleTextContentToFullTitle functionality - invalid title text element', () => {
    let setIsWrappedSpy;

    beforeAll(() => {
      setIsWrappedSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setIsWrapped')
        .mockImplementation(() => {});

      /* Set the title text element reference to a null value */
      HeaderTitleText.prototype.textRef = { current: null };

      /* Invoke the function being tested */
      HeaderTitleText.prototype.setTitleTextContentToFullTitle();

      /* Clean up the test */
      cleanup();
    });

    afterAll(() => {
      setIsWrappedSpy.mockRestore();
    });

    it('verifies that the setIsWrapped functionality is not invoked', () => {
      expect(setIsWrappedSpy.mock.calls).toHaveLength(0);
    });
  });

  describe('setTitleTextContentToFullTitle functionality - valid title text element, small header component', () => {
    let componentDidMountSpy;
    const editedFontSize = '2rem';
    let setIsWrappedSpy;
    const testData = [];
    let testIsWrapped;
    const testTitle = 'Test-related title attribute text content';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      setIsWrappedSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setIsWrapped')
        .mockImplementation(newIsWrapped => {
          testIsWrapped = newIsWrapped;
        });
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Set a test value for the title attribute of the heading element */
      headingElement.setAttribute('title', testTitle);

      /* Set the edited CSS styling data for the heading element */
      headingElement.style.fontSize = editedFontSize;
      headingElement.style.textAlign = editedTextAlign;
      headingElement.style.whiteSpace = editedWhiteSpace;

      /* Set the text reference element for this test */
      HeaderTitleText.prototype.textRef = {
        current: headingElement,
      };

      /* Set the header type for this test */
      HeaderTitleText.prototype.state = {
        headerType: 'small',
      };

      /* Invoke the function being tested */
      HeaderTitleText.prototype.setTitleTextContentToFullTitle();

      /* Verifies that the text content of the heading element is set to match that of its title attribute */
      testData.push(headingElement.textContent);

      /* Verifies that the font size CSS property of the heading element is restored to its default value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the white space CSS property of the heading element is restored to its default value */
      testData.push(headingElement.style.whiteSpace);

      /* Verifies that the value for whether the title text has been wrapped indicates that wrapping is disabled */
      testData.push(testIsWrapped);

      /* Verifies that the text align CSS property of the heading element is restored to its default value */
      testData.push(headingElement.style.textAlign);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
      setIsWrappedSpy.mockRestore();
    });

    it('verifies that the text content of the heading element is set to match that of its title attribute', () => {
      expect(testData[0]).toBe(testTitle);
    });

    it('verifies that the font size CSS property of the heading element is restored to its default value', () => {
      expect(testData[1]).toBe(defaultFontSize);
    });

    it('verifies that the white space CSS property of the heading element is restored to its default value', () => {
      expect(testData[2]).toBe(defaultWhiteSpace);
    });

    it('verifies that the setIsWrapped functionality is invoked', () => {
      expect(setIsWrappedSpy.mock.calls).toHaveLength(1);
    });

    it('verifies that the value for whether the title text has been wrapped indicates that wrapping is disabled', () => {
      expect(testData[3]).toBeFalsy();
    });

    it('verifies that the text align CSS property of the heading element is restored to its default value', () => {
      expect(testData[4]).toBe(defaultTextAlign);
    });
  });
});
