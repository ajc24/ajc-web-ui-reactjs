/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderTitleText from '../../../src/components/base/HeaderTitleText';

describe('Header Title Text', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-title-text-id';

  /* Set the default CSS styling for the component */
  const defaultFontSize = '3rem';
  const defaultTextAlign = 'left';
  const defaultWhiteSpace = 'nowrap';

  /* Set the edited CSS styling for the component */
  const editedTextAlign = 'center';
  const editedWhiteSpace = 'normal';
  const minimumFontSize = '2rem';

  /* Set the default heights and widths for the component */
  const defaultHeaderHeight = 68;

  describe('Component with undefined text colour', () => {
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
      const containerElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(containerElement);

      /* Verifies that the "title-text-font-black" class is set to the heading element */
      /* Verifies that the "title text-font-white" class is not set to the heading element */
      testData.push(headingElement.classList);

      /* Verifies that the aria-label attribute is set correctly to the heading element */
      testData.push(headingElement.getAttribute('aria-label'));

      /* Verifies that the children components are rendered within the heading element */
      testData.push(headingElement.textContent);
  
      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "title-text-font-black" class is set to the heading element', () => {
      expect(testData[1].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title text-font-white" class is not set to the heading element', () => {
      expect(testData[1].contains('title-text-font-white')).toBeFalsy();
    });

    it('verifies that the aria-label attribute is set correctly to the heading element', () => {
      expect(testData[2]).toBe('Header title text component text content.');
    });

    it('verifies that the children components are rendered within the heading element', () => {
      expect(testData[3]).toBe('Header title text component text content.');
    });
  });

  describe('Component with black text colour', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} textColour="black">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Verifies that the "title-text-font-black" class is set to the heading element */
      /* Verifies that the "title text-font-white" class is not set to the heading element */
      testData.push(headingElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "title-text-font-black" class is set to the heading element', () => {
      expect(testData[0].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title text-font-white" class is not set to the heading element', () => {
      expect(testData[0].contains('title-text-font-white')).toBeFalsy();
    });
  });

  describe('Component with white text colour', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} textColour="white">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Verifies that the "title-text-font-black" class is not set to the heading element */
      /* Verifies that the "title text-font-white" class is set to the heading element */
      testData.push(headingElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "title-text-font-black" class is not set to the heading element', () => {
      expect(testData[0].contains('title-text-font-black')).toBeFalsy();
    });

    it('verifies that the "title text-font-white" class is set to the heading element', () => {
      expect(testData[0].contains('title-text-font-white')).toBeTruthy();
    });
  });

  describe('Component with undefined header type, no font size reduction, no text wrapping, no text truncation', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the data-wrap attribute of the container element indicates that text wrapping has not occurred */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the heading elements font size CSS property is set to its maximum, default value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the heading elements text alignment CSS property is set to its default value */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the heading elements white space CSS property is set to its default value */
      testData.push(headingElement.style.whiteSpace);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the data-wrap attribute of the container element indicates that text wrapping has not occurred', () => {
      expect(testData[0]).toBe('false');
    });

    it('verifies that the heading elements font size CSS property is set to its maximum, default value', () => {
      expect(testData[1]).toBe(defaultFontSize);
    });

    it('verifies that the heading elements text alignment CSS property is set to its default value', () => {
      expect(testData[2]).toBe(defaultTextAlign);
    });

    it('verifies that the heading elements white space CSS property is set to its default value', () => {
      expect(testData[3]).toBe(defaultWhiteSpace);
    });
  });

  describe('Component with small header type, with font size reduction, no text wrapping, no text truncation', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 1) */
          return { right: 795 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 2) */
          return { right: 790 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 3) */
          return { right: 785 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 4) */
          return { right: 780 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 5) */
          return { right: 775 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 6) */
          return { right: 770 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 7) */
          return { right: 765 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 8) */
          return { right: 760 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 9) */
          return { right: 755 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 10) */
          return { right: 755 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 11) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={false}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the data-wrap attribute of the container element indicates that text wrapping has not occurred */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the heading elements font size CSS property is set to its minimum value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the heading elements text alignment CSS property is set to its default value */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the heading elements white space CSS property is set to its default value */
      testData.push(headingElement.style.whiteSpace);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the data-wrap attribute of the container element indicates that text wrapping has not occurred', () => {
      expect(testData[0]).toBe('false');
    });

    it('verifies that the heading elements font size CSS property is set to its minimum value', () => {
      expect(testData[1]).toBe(minimumFontSize);
    });

    it('verifies that the heading elements text alignment CSS property is set to its default value', () => {
      expect(testData[2]).toBe(defaultTextAlign);
    });

    it('verifies that the heading elements white space CSS property is set to its default value', () => {
      expect(testData[3]).toBe(defaultWhiteSpace);
    });
  });

  describe('Component with small header type, with font size reduction, with text wrapping, no text truncation', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 1) */
          return { right: 790 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 2) */
          return { right: 780 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 3) */
          return { right: 770 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 4) */
          return { right: 760 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 5) */
          return { right: 755 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 6) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 740 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={false}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--title-text"]`);
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the data-wrap attribute of the container element indicates that text wrapping is occurring */
      testData.push(containerElement.dataset.wrap);

      /* Verifies that the heading elements font size CSS property is set to a lower value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the heading elements text alignment CSS property is set to a center value */
      testData.push(headingElement.style.textAlign);

      /* Verifies that the heading elements white space CSS property is set to a normal value */
      testData.push(headingElement.style.whiteSpace);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the data-wrap attribute of the container element indicates that text wrapping is occurring', () => {
      expect(testData[0]).toBe('true');
    });

    it('verifies that the heading elements font size CSS property is set to a lower value', () => {
      expect(testData[1]).toBe('2.5rem');
    });

    it('verifies that the heading elements text alignment CSS property is set to a center value', () => {
      expect(testData[2]).toBe(editedTextAlign);
    });

    it('verifies that the heading elements white space CSS property is set to a normal value', () => {
      expect(testData[3]).toBe(editedWhiteSpace);
    });
  });

  describe('Component with small header type, with font size reduction, with text wrapping, with text truncation by removing spaces only', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 1) */
          return { right: 785 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 2) */
          return { right: 770 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 3) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 740 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (pre loop) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 1) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 2) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 3) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 4) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 5) */
          return { height: defaultHeaderHeight };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={false}>
            Header title text component text content One Two Three Four Five
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the heading elements font size CSS property is set to a lower value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the heading elements text content has been truncated by removing spaces only */
      testData.push(headingElement.textContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the heading elements font size CSS property is set to a lower value', () => {
      expect(testData[0]).toBe('2.8rem');
    });

    it('verifies that the heading elements text content has been truncated by removing spaces only', () => {
      expect(testData[1]).toBe('Header title text component text content...');
    });
  });

  describe('Component with small header type, with font size reduction, with text wrapping, with text truncation by removing spaces and characters', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (in loop call 1) */
          return { right: 750 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 740 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (pre loop) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement (in loop call 1) */
          return { height: 96 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 700 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getWidthOfHeadingElement (pre loop) */
          return { right: 650 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (in loop call 1) */
          return { right: 690 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (in loop call 2) */
          return { right: 680 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (in loop call 3) */
          return { right: 670 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (in loop call 4) */
          return { right: 660 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingCharacters > getTitleTextContentRightmostPosition (in loop call 5) */
          return { right: 650 };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={false}>
            HeaderTitleTextComponentTextContent. One
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the heading elements font size CSS property is set to a lower value */
      testData.push(headingElement.style.fontSize);

      /* Verifies that the heading elements text content has been truncated by removing spaces and characters */
      testData.push(headingElement.textContent);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the heading elements font size CSS property is set to a lower value', () => {
      expect(testData[0]).toBe(defaultFontSize);
    });

    it('verifies that the heading elements text content has been truncated by removing both spaces and characters', () => {
      expect(testData[1]).toBe('HeaderTitleTextComponentTextCon...');
    });
  });

  describe('Component with tall header type, no font size reduction, no text wrapping, no text truncation', () => {
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      const getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* handleScreenWidth > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getTitleTextContentRightmostPosition (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (pre loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > reduceFontSizeAndWrapTextIfRequired > getWidthOfHeadingElement (after loop) */
          return { right: 800 };
        })
        .mockImplementationOnce(() => {
          /* handleScreenWidth > truncateTextByRemovingSpaces > getHeightOfHeadingElement */
          return { height: defaultHeaderHeight };
        });
      /* Mount the component*/
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={true}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headingElement = document.querySelector(`div[id="${testComponentId}--title-text"] > h1`);

      /* Restore the getBoundingClientRect functionality */
      getBoundingClientRectSpy.mockRestore();

      /* Verifies that the heading elements text alignment CSS property is set to a center value */
      testData.push(headingElement.style.textAlign);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the heading elements text alignment CSS property is set to a center value', () => {
      expect(testData[0]).toBe(editedTextAlign);
    });
  });

  describe('componentDidMount functionality - resize events will invoke the handleScreenWidth functionality', () => {
    let handleScreenWidthSpy;
    let setHeaderTypeSpy;
    const testData = [];

    beforeAll(() => {
      /* Set up the spies for the test */
      handleScreenWidthSpy = jest
        .spyOn(HeaderTitleText.prototype, 'handleScreenWidth')
        .mockImplementation(() => {});
      setHeaderTypeSpy = jest
        .spyOn(HeaderTitleText.prototype, 'setHeaderType')
        .mockImplementation(() => {});

      /* Mount the component under test */
      const { unmount } = render(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={true}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
      /* Reset the spy counter */
      handleScreenWidthSpy.mockClear();

      /* Fire a resize event on the document window */
      window.dispatchEvent(new Event('resize'));

      /* Verifies that the resize event invoked the handleScreenWidth functionality */
      testData.push(handleScreenWidthSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      handleScreenWidthSpy.mockRestore();
      setHeaderTypeSpy.mockRestore();
    });

    it('verifies that the resize event invoked the handleScreenWidth functionality', () => {
      expect(testData[0]).toBe(1);
    });
  });
});
