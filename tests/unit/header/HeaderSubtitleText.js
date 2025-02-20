/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { HeaderSubtitleText } from '../../../src';

describe('Header Subtitle Text', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-subtitle-text-id';

  describe('Default standalone component, default alignment, no title text rendered, default text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 500,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 500,
          };
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"] > p`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(containerElement);

      /* Verifies that the "page-template-container" class is set to the container element */
      /* Verifies that the "subtitle-text-size-inside-header" class is not set to the container element */
      /* Verifies that the "subtitle-text-alignment-centre" class is not set to the container element */
      /* Verifies that the "subtitle-text-alignment-left" class is set to the container element */
      /* Verifies that the "subtitle-text-with-header-text" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "font-black" class is set to the paragraph element */
      /* Verifies that the "font-white" class is not set to the paragraph element */
      /* Verifies that the "hidden" class is not set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Verifies that the aria-hidden attribute set to the paragraph element indicates that the element is visible */
      testData.push(paragraphElement.getAttribute('aria-hidden'));

      /* Verifies that the children components are rendered within the paragraph element */
      testData.push(paragraphElement.textContent);

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

    it('verifies that the "subtitle-text-size-inside-header" class is not set to the container element', () => {
      expect(testData[1].contains('subtitle-text-size-inside-header')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-alignment-centre" class is not set to the container element', () => {
      expect(testData[1].contains('subtitle-text-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-alignment-left" class is set to the container element', () => {
      expect(testData[1].contains('subtitle-text-alignment-left')).toBeTruthy();
    });

    it('verifies that the "subtitle-text-with-header-text" class is not set to the container element', () => {
      expect(testData[1].contains('subtitle-text-with-header-text')).toBeFalsy();
    });

    it('verifies that the "font-black" class is set to the paragraph element', () => {
      expect(testData[2].contains('font-black')).toBeTruthy();
    });

    it('verifies that the "font-white" class is not set to the paragraph element', () => {
      expect(testData[2].contains('font-white')).toBeFalsy();
    });

    it('verifies that the "hidden" class is not set to the paragraph element', () => {
      expect(testData[2].contains('hidden')).toBeFalsy();
    });

    it('verifies that the aria-hidden attribute set to the paragraph element indicates that the element is visible', () => {
      expect(testData[3]).toBe('false');
    });

    it('verifies that the children components are rendered within the paragraph element', () => {
      expect(testData[4]).toBe('Header subtitle text component text content.');
    });
  });

  describe('Standalone component, left alignment, no title text rendered, black text colour, marked as hidden', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 501,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 500,
          };
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} alignment="left" textColour="black">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"] > p`);

      /* Verifies that the "page-template-container" class is set to the container element */
      /* Verifies that the "subtitle-text-size-inside-header" class is not set to the container element */
      /* Verifies that the "subtitle-text-alignment-centre" class is not set to the container element */
      /* Verifies that the "subtitle-text-alignment-left" class is set to the container element */
      /* Verifies that the "subtitle-text-with-header-text" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "font-black" class is set to the paragraph element */
      /* Verifies that the "font-white" class is not set to the paragraph element */
      /* Verifies that the "hidden" class is set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Verifies that the aria-hidden attribute set to the paragraph element indicates that the element is hidden */
      testData.push(paragraphElement.getAttribute('aria-hidden'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the "page-template-container" class is set to the container element', () => {
      expect(testData[0].contains('page-template-container')).toBeTruthy();
    });

    it('verifies that the "subtitle-text-size-inside-header" class is not set to the container element', () => {
      expect(testData[0].contains('subtitle-text-size-inside-header')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-alignment-centre" class is not set to the container element', () => {
      expect(testData[0].contains('subtitle-text-alignment-centre')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-alignment-left" class is set to the container element', () => {
      expect(testData[0].contains('subtitle-text-alignment-left')).toBeTruthy();
    });

    it('verifies that the "subtitle-text-with-header-text" class is not set to the container element', () => {
      expect(testData[0].contains('subtitle-text-with-header-text')).toBeFalsy();
    });

    it('verifies that the "font-black" class is set to the paragraph element', () => {
      expect(testData[1].contains('font-black')).toBeTruthy();
    });

    it('verifies that the "font-white" class is not set to the paragraph element', () => {
      expect(testData[1].contains('font-white')).toBeFalsy();
    });

    it('verifies that the "hidden" class is set to the paragraph element', () => {
      expect(testData[1].contains('hidden')).toBeTruthy();
    });

    it('verifies that the aria-hidden attribute set to the paragraph element indicates that the element is hidden', () => {
      expect(testData[2]).toBe('true');
    });
  });

  describe('Component rendered inside Header, centre alignment, with title text rendered (no wrapped text), white text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    const testData = [];
    const testHeaderTitleTextId = 'test-header-title-text-id';
    const testParentHeaderId = 'test-parent-header-id';

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 0,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 0,
          };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - setting subtitleContainerElement */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - setting headerTitleTextElement */
          return {
            dataset: {
              wrap: 'false',
            },
          };
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} alignment="centre" headerTitleTextId={testHeaderTitleTextId} parentHeaderId={testParentHeaderId} textColour="white">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"] > p`);

      /* Verifies that the "page-template-container" class is not set to the container element */
      /* Verifies that the "subtitle-text-size-inside-header" class is set to the container element */
      /* Verifies that the "subtitle-text-alignment-centre" class is set to the container element */
      /* Verifies that the "subtitle-text-alignment-left" class is not set to the container element */
      /* Verifies that the "subtitle-text-with-header-text" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "font-black" class is set to the paragraph element */
      /* Verifies that the "font-white" class is not set to the paragraph element */
      /* Verifies that the "hidden" class is not set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Verifies that the aria-hidden attribute set to the paragraph element indicates that the element is visible */
      testData.push(paragraphElement.getAttribute('aria-hidden'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the "page-template-container" class is not set to the container element', () => {
      expect(testData[0].contains('page-template-container')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-size-inside-header" class is set to the container element', () => {
      expect(testData[0].contains('subtitle-text-size-inside-header')).toBeTruthy();
    });

    it('verifies that the "subtitle-text-alignment-centre" class is set to the container element', () => {
      expect(testData[0].contains('subtitle-text-alignment-centre')).toBeTruthy();
    });

    it('verifies that the "subtitle-text-alignment-left" class is not set to the container element', () => {
      expect(testData[0].contains('subtitle-text-alignment-left')).toBeFalsy();
    });

    it('verifies that the "subtitle-text-with-header-text" class is set to the container element', () => {
      expect(testData[0].contains('subtitle-text-with-header-text')).toBeTruthy();
    });

    it('verifies that the "font-black" class is not set to the paragraph element', () => {
      expect(testData[1].contains('font-black')).toBeFalsy();
    });

    it('verifies that the "font-white" class is set to the paragraph element', () => {
      expect(testData[1].contains('font-white')).toBeTruthy();
    });

    it('verifies that the "hidden" class is not set to the paragraph element', () => {
      expect(testData[1].contains('hidden')).toBeFalsy();
    });

    it('verifies that the aria-hidden attribute set to the paragraph element indicates that the element is visible', () => {
      expect(testData[2]).toBe('false');
    });
  });

  describe('Standalone component, default alignment, with title text rendered (with wrapped text), default text colour, marked as hidden', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    const testData = [];
    const testHeaderTitleTextId = 'test-header-title-text-id';

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 100,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 100,
          };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - setting subtitleContainerElement */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - setting headerTitleTextElement */
          return {
            dataset: {
              wrap: 'true',
            },
          };
        });
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testHeaderTitleTextId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--header-subtitle-text"] > p`);

      /* Verifies that the "hidden" class is set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Verifies that the aria-hidden attribute set to the paragraph element indicates that the element is hidden */
      testData.push(paragraphElement.getAttribute('aria-hidden'));

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies that the "hidden" class is set to the paragraph element', () => {
      expect(testData[0].contains('hidden')).toBeTruthy();
    });

    it('verifies that the aria-hidden attribute set to the paragraph element indicates that the element is hidden', () => {
      expect(testData[1]).toBe('true');
    });
  });

  describe('handleVisibility() functionality - subtitle text is marked as visible when the subtitleContainerElement is null', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setIsHiddenSpy;
    const testData = [];
    let testIsHidden;
    
    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* First time render: setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 200,
          };
        })
        .mockImplementationOnce(() => {
          /* During test: setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 300,
          };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* First time render: handleVisibility() - setting subtitleContainerElement */
          return null;
        })
        .mockImplementationOnce(() => {
          /* During test: handleVisibility() - setting subtitleContainerElement */
          return null;
        });
      setIsHiddenSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsHidden')
        .mockImplementationOnce(() => {
          /* First time render: Do nothing */
        })
        .mockImplementationOnce(isHiddenValue => {
          /* During test: Store the value provided for isHidden */
          testIsHidden = isHiddenValue;
        });

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Clear any existing mocks before firing the resize event */
      getBoundingClientRectSpy.mockClear();

      /* Fire a resize event on the document window to invoke the functionality being tested */
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      /* Verifies that the getBoundingClientRect() functionality is not invoked (once would indicate that the subtitleContainerElement was not null) */
      testData.push(getBoundingClientRectSpy.mock.calls.length);

      /* Verifies that the setIsHidden() functionality is invoked */
      testData.push(setIsHiddenSpy.mock.calls.length);

      /* Verifies that a false value is passed to the setIsHidden() functionality */
      testData.push(testIsHidden);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setIsHiddenSpy.mockRestore();
    });

    it('verifies that the getBoundingClientRect() functionality is not invoked (once would indicate that the subtitleContainerElement was not null)', () => {
      expect(testData[0]).toBe(0);
    });

    it('verifies that the setIsHidden() functionality is invoked', () => {
      expect(testData[1]).toBe(1);
    });

    it('verifies that a false value is passed to the setIsHidden() functionality', () => {
      expect(testData[2]).toBeFalsy();
    });
  });

  describe('setRightmostSubtitleTextPosition() functionality - paragraphRightPos is not set if the subtitle text is hidden', () => {
    let getBoundingClientRectSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition() - setting paragraphRightPos */
          return {
            right: 501,
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility() - setting containerRightPos */
          return {
            right: 500,
          };
        });
      const setIsResizingStartSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingStart');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Restore and clear all necessary mocks */
      getBoundingClientRectSpy.mockRestore();
      setIsResizingStartSpy.mockClear();

      /* Create a new getBoundingClientRect() spy */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementation(() => { return { right: 0 }});
      
      /* Fire a resize event on the document window to invoke the functionality being tested */
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      /* Verifies that the getBoundingClientRect() functionality is only invoked once (twice would indicate that paragraphRightPos was set) */
      testData.push(getBoundingClientRectSpy.mock.calls.length);

      /* Verifies that the setIsResizingStart() functionality is invoked */
      testData.push(setIsResizingStartSpy.mock.calls.length);
      
      /* Restore all mocks used for the test */
      setIsResizingStartSpy.mockRestore();

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies that the getBoundingClientRect() functionality is only invoked once (twice would indicate that paragraphRightPos was set)', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the setIsResizingStart() functionality is invoked', () => {
      expect(testData[1]).toBe(1);
    });
  });
});
