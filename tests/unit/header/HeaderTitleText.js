/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { HeaderTitleText } from '../../../src';

describe('Header Title Text', () => {
  /* Set the IDs and data for use in the tests */
  const maxFontSize = '3rem';
  const minFontSize = '2rem';
  const textAlignCentre = 'center';
  const testComponentId = 'test-header-title-text-id';
  const truncateTextHeightCutoff = 95;
  const whiteSpaceNormal = 'normal';
  const whiteSpaceNoWrap = 'nowrap';

  describe('Default standalone component, default alignment, default text colour, maximum font size, no text wrapping, no truncation', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the heading element rightmost position */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the container element rightmost position (pre-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the container element rightmost position (post-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting the heading element height */
          return { height: 70 }
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(containerElement);

      /* Verifies that the "page-template-container" class is set to the container element */
      /* Verifies that the "title-text-size-inside-header" class is not set to the container element */
      /* Verifies that the "title-text-alignment-centre" class is not set to the container element */
      /* Verifies that the "title-text-alignment-left" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "wrap" data attribute is set correctly to the container element */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the "title-text-font-black" class is set to the heading element */
      /* Verifies that the "title-text-font-white" class is not set to the heading element */
      testData.push(headingElement.classList);

      /* Verifies that the aria-label attribute set to the heading element includes the full title text content */
      testData.push(headingElement.getAttribute('aria-label'));

      /* Verifies that the maximum font size is set to the heading element */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the whiteSpace CSS property is set to not wrap the text content */
      testData.push(headingElement.style.whiteSpace);

      /* Verifies that the children components are rendered within the heading element */
      testData.push(headingElement.textContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "page-template-container" class is set to the container element', () => {
      expect(testData[1].contains('page-template-container')).toBeTruthy();
    });

    it('verifies that the "title-text-size-inside-header" class is not set to the container element', () => {
      expect(testData[1].contains('title-text-size-inside-header')).toBeFalsy();
    });

    it('verifies that the "title-text-alignment-centre" class is not set to the container element', () => {
      expect(testData[1].contains('title-text-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "title-text-alignment-left" class is set to the container element', () => {
      expect(testData[1].contains('title-text-alignment-left')).toBeTruthy();
    });

    it('verifies that the "wrap" data attribute is set correctly to the container element', () => {
      expect(testData[2]).toBe('false');
    });

    it('verifies that the "title-text-font-black" class is set to the heading element', () => {
      expect(testData[3].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title-text-font-white" class is not set to the heading element', () => {
      expect(testData[3].contains('title-text-font-white')).toBeFalsy();
    });

    it('verifies that the aria-label attribute set to the heading element includes the full title text content', () => {
      expect(testData[4]).toBe('Header title text component text content.');
    });

    it('verifies that the maximum font size is set to the heading element', () => {
      expect(testData[5]).toBe(maxFontSize);
    });

    it('verifies that the whiteSpace CSS property is set to not wrap the text content', () => {
      expect(testData[6]).toBe(whiteSpaceNoWrap);
    });

    it('verifies that the children components are rendered within the heading element', () => {
      expect(testData[7]).toBe('Header title text component text content.');
    });
  });

  describe('Component rendered inside Header, left alignment, black text colour, maximum font size, title text element is null', () => {
    let getBoundingClientRectSpy;
    let getContainerElementRightmostPositionSpy;
    let getHeadingElementHeightSpy;
    let getHeadingElementRightmostPositionSpy;
    let getTitleTextContentSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the heading element rightmost position */
          return { right: 249 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the container element rightmost position (pre-loop) */
          return { right: 250 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting the container element rightmost position (post-loop) */
          return { right: 250 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting the heading element height */
          return { height: truncateTextHeightCutoff }
        });
      getContainerElementRightmostPositionSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getContainerElementRightmostPosition');
      getHeadingElementHeightSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getHeadingElementHeight');
      getHeadingElementRightmostPositionSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getHeadingElementRightmostPosition');
      getTitleTextContentSpy = jest
        .spyOn(HeaderTitleText.prototype, 'getTitleTextContent');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} alignment="left" parentHeaderId="test-parent-header-id" textColour="black">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the "page-template-container" class is not set to the container element */
      /* Verifies that the "title-text-size-inside-header" class is set to the container element */
      /* Verifies that the "title-text-alignment-centre" class is not set to the container element */
      /* Verifies that the "title-text-alignment-left" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "title-text-font-black" class is set to the heading element */
      /* Verifies that the "title-text-font-white" class is not set to the heading element */
      testData.push(headingElement.classList);

      /* Verifies that the maximum font size is set to the heading element */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the whiteSpace CSS property is set to not wrap the text content */
      testData.push(headingElement.style.whiteSpace);

      /* Now that we have gathered the initial component parameters - mark the heading element as null */
      const querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementation(() => { return null });

      /* Clear the mocks for the functions being tested */
      getContainerElementRightmostPositionSpy.mockClear();
      getHeadingElementHeightSpy.mockClear();
      getHeadingElementRightmostPositionSpy.mockClear();
      getTitleTextContentSpy.mockClear();

      /* Fire a resize event on the document window to invoke the functionality being tested */
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      /* Verifies that the getContainerElementRightmostPosition() functionality is invoked */
      testData.push(getContainerElementRightmostPositionSpy.mock.calls.length);

      /* Verifies that when the heading element is null, a zero value is returned from the getContainerElementRightmostPosition() functionality */
      testData.push(
        getContainerElementRightmostPositionSpy.mock.results[0].value === 0 &&
        getContainerElementRightmostPositionSpy.mock.results[1].value === 0 &&
        getContainerElementRightmostPositionSpy.mock.results[2].value === 0
      );

      /* Verifies that the getHeadingElementHeight() functionality is invoked */
      testData.push(getHeadingElementHeightSpy.mock.calls.length);

      /* Verifies that when the heading element is null, a zero value is returned from the getHeadingElementHeight() functionality */
      testData.push(getHeadingElementHeightSpy.mock.results[0].value);

      /* Verifies that the getHeadingElementRightmostPosition() functionality is invoked */
      testData.push(getHeadingElementRightmostPositionSpy.mock.calls.length);

      /* Verifies that when the heading element is null, a zero value is returned from the getHeadingElementRightmostPosition() functionality */
      testData.push(
        getHeadingElementRightmostPositionSpy.mock.results[0].value === 0 &&
        getHeadingElementRightmostPositionSpy.mock.results[1].value === 0
      );

      /* Verifies that the getTitleTextContent() functionality is invoked */
      testData.push(getTitleTextContentSpy.mock.calls.length);

      /* Verifies that when the heading element is null, an empty string is returned from the getTitleTextContent() functionality */
      testData.push(
        getTitleTextContentSpy.mock.results[0].value === '' &&
        getTitleTextContentSpy.mock.results[1].value === ''
      );

      /* Restore the temporary mocks set up for this test */
      querySelectorSpy.mockRestore();

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      getContainerElementRightmostPositionSpy.mockRestore();
      getHeadingElementHeightSpy.mockRestore();
      getHeadingElementRightmostPositionSpy.mockRestore();
      getTitleTextContentSpy.mockRestore();
    });

    it('verifies that the "page-template-container" class is not set to the container element', () => {
      expect(testData[0].contains('page-template-container')).toBeFalsy();
    });

    it('verifies that the "title-text-size-inside-header" class is set to the container element', () => {
      expect(testData[0].contains('title-text-size-inside-header')).toBeTruthy();
    });

    it('verifies that the "title-text-alignment-centre" class is not set to the container element', () => {
      expect(testData[0].contains('title-text-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "title-text-alignment-left" class is set to the container element', () => {
      expect(testData[0].contains('title-text-alignment-left')).toBeTruthy();
    });

    it('verifies that the "title-text-font-black" class is set to the heading element', () => {
      expect(testData[1].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title-text-font-white" class is not set to the heading element', () => {
      expect(testData[1].contains('title-text-font-white')).toBeFalsy();
    });

    it('verifies that the maximum font size is set to the heading element', () => {
      expect(testData[2]).toBe(maxFontSize);
    });

    it('verifies that the whiteSpace CSS property is set to not wrap the text content', () => {
      expect(testData[3]).toBe(whiteSpaceNoWrap);
    });

    it('verifies that the getContainerElementRightmostPosition() functionality is invoked', () => {
      expect(testData[4]).toBe(3);
    });

    it('verifies that when the heading element is null, a zero value is returned from the getContainerElementRightmostPosition() functionality', () => {
      expect(testData[5]).toBeTruthy();
    });

    it('verifies that the getHeadingElementHeight() functionality is invoked', () => {
      expect(testData[6]).toBe(1);
    });

    it('verifies that when the heading element is null, a zero value is returned from the getHeadingElementHeight() functionality', () => {
      expect(testData[7]).toBe(0);
    });

    it('verifies that the getHeadingElementRightmostPosition() functionality is invoked', () => {
      expect(testData[8]).toBe(2);
    });

    it('verifies that when the heading element is null, a zero value is returned from the getHeadingElementRightmostPosition() functionality', () => {
      expect(testData[9]).toBeTruthy();
    });

    it('verifies that the getTitleTextContent() functionality is invoked', () => {
      expect(testData[10]).toBe(2);
    });

    it('verifies that when the heading element is null, an empty string is returned from the getTitleTextContent() functionality', () => {
      expect(testData[11]).toBeTruthy();
    });
  });

  describe('Standalone component, centre alignment, white text colour, minimum font size, no text wrapping, no truncation', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (pre-loop) */
          return { right: 501 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 0, font-size 3rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 1, font-size 2.9rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 2, font-size 2.8rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 3, font-size 2.7rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 4, font-size 2.6rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 5, font-size 2.5rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 6, font-size 2.4rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 7, font-size 2.3rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 8, font-size 2.2rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 9, font-size 2.1rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 10, font-size 2rem) */
          return { right: 501 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 501 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight */
          return { height: 75 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos  */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos */
          return { right: 500 }
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} alignment="centre" textColour="white">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the "title-text-alignment-centre" class is set to the container element */
      /* Verifies that the "title-text-alignment-left" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "wrap" data attribute is set correctly to the container element */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the "title-text-font-black" class is not set to the heading element */
      /* Verifies that the "title-text-font-white" class is set to the heading element */
      testData.push(headingElement.classList);

      /* Verifies that the minimum font size is set to the heading element */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the whiteSpace CSS property is set to not wrap the text content */
      testData.push(headingElement.style.whiteSpace);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the "title-text-alignment-centre" class is set to the container element', () => {
      expect(testData[0].contains('title-text-alignment-centre')).toBeTruthy();
    });

    it('verifies that the "title-text-alignment-left" class is not set to the container element', () => {
      expect(testData[0].contains('title-text-alignment-left')).toBeFalsy();
    });

    it('verifies that the "wrap" data attribute is set correctly to the container element', () => {
      expect(testData[1]).toBe('false');
    });

    it('verifies that the "title-text-font-black" class is not set to the heading element', () => {
      expect(testData[2].contains('title-text-font-black')).toBeFalsy();
    });

    it('verifies that the "title-text-font-white" class is set to the heading element', () => {
      expect(testData[2].contains('title-text-font-white')).toBeTruthy();
    });

    it('verifies that the minimum font size is set to the heading element', () => {
      expect(testData[3]).toBe(minFontSize);
    });

    it('verifies that the whiteSpace CSS property is set to not wrap the text content', () => {
      expect(testData[4]).toBe(whiteSpaceNoWrap);
    });
  });

  describe('Standalone component, default alignment, default text colour, minimum font size, with text wrapping, no truncation', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (pre-loop) */
          return { right: 101 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 0, font-size 3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 1, font-size 2.9rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 2, font-size 2.8rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 3, font-size 2.7rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 4, font-size 2.6rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 5, font-size 2.5rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 6, font-size 2.4rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 7, font-size 2.3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 8, font-size 2.2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 9, font-size 2.1rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 10, font-size 2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight */
          return { height: 75 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos  */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos */
          return { right: 100 }
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the "wrap" data attribute is set correctly to the container element */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the minimum font size is set to the heading element */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the textAlign CSS property is set to centre the text in the heading element */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the whiteSpace CSS property is set to wrap the text content */
      testData.push(headingElement.style.whiteSpace);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the "wrap" data attribute is set correctly to the container element', () => {
      expect(testData[0]).toBe('true');
    });

    it('verifies that the minimum font size is set to the heading element', () => {
      expect(testData[1]).toBe(minFontSize);
    });

    it('verifies that the textAlign CSS property is set to centre the text in the heading element', () => {
      expect(testData[2]).toBe(textAlignCentre);
    });

    it('verifies that the whiteSpace CSS property is set to wrap the text content', () => {
      expect(testData[3]).toBe(whiteSpaceNormal);
    });
  });

  describe('Standalone component, default alignment, default text colour, minimum font size, with text wrapping, with truncation (remove spaces only)', () => {
    let getBoundingClientRectSpy;
    let truncateTextByRemovingCharactersSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (pre-loop) */
          return { right: 101 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 0, font-size 3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 1, font-size 2.9rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 2, font-size 2.8rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 3, font-size 2.7rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 4, font-size 2.6rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 5, font-size 2.5rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 6, font-size 2.4rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 7, font-size 2.3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 8, font-size 2.2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 9, font-size 2.1rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 10, font-size 2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (pre-loop) */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 0, remove space between "text content") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 1, remove space between "component text") */
          return { height: truncateTextHeightCutoff - 1 };
        });
      truncateTextByRemovingCharactersSpy = jest
        .spyOn(HeaderTitleText.prototype, 'truncateTextByRemovingCharacters');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the aria-label attribute set to the heading element includes the full title text content */
      testData.push(headingElement.getAttribute('aria-label'));

      /* Verifies that the heading element text content has been correctly truncated by removing spaces */
      testData.push(headingElement.textContent);

      /* Verifies that the truncateTextByRemovingCharacters functionality is not invoked since removing spaces was adequate for truncation */
      testData.push(truncateTextByRemovingCharactersSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      truncateTextByRemovingCharactersSpy.mockRestore();
    });

    it('verifies that the aria-label attribute set to the heading element includes the full title text content', () => {
      expect(testData[0]).toBe('Header title text component text content.');
    });

    it('verifies that the heading element text content has been correctly truncated by removing spaces', () => {
      expect(testData[1]).toBe('Header title text component...');
    });

    it('verifies that the truncateTextByRemovingCharacters functionality is not invoked since removing spaces was adequate for truncation', () => {
      expect(testData[2]).toBe(0);
    });
  });

  describe('Standalone component, default alignment, default text colour, minimum font size, with text wrapping, with truncation (remove spaces and characters)', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (pre-loop) */
          return { right: 101 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 0, font-size 3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 1, font-size 2.9rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 2, font-size 2.8rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 3, font-size 2.7rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 4, font-size 2.6rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 5, font-size 2.5rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 6, font-size 2.4rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 7, font-size 2.3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 8, font-size 2.2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 9, font-size 2.1rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 10, font-size 2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (pre-loop) */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 0, remove space between "text content") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 1, remove space between "component text") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 2, remove space between "text component") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 3, remove space between "title text") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 4, remove space between "Header title") */
          return { height: truncateTextHeightCutoff };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (pre-loop) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos (pre-loop) */
          return { right: 100 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (in-loop - index 0, remove last character "r" from "Header") */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (in-loop - index 1, remove last character "e" from "Heade") */
          return { right: 100 };
        });

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--header-title-text"] > h1`);

      /* Verifies that the aria-label attribute set to the heading element includes the full title text content */
      testData.push(headingElement.getAttribute('aria-label'));

      /* Verifies that the heading element text content has been correctly truncated by removing spaces and characters */
      testData.push(headingElement.textContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the aria-label attribute set to the heading element includes the full title text content', () => {
      expect(testData[0]).toBe('Header title text component text content.');
    });

    it('verifies that the heading element text content has been correctly truncated by removing spaces and characters', () => {
      expect(testData[1]).toBe('Head...');
    });
  });
});
