/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HeaderSubtitleText from '../../../src/components/base/HeaderSubtitleText';

describe('Header Subtitle Text', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-subtitle-text-id';

  describe('Component with undefined / default header element type, default text colour, element marked as visible', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      componentDidMountSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"] > p`);

      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(containerElement);

      /* Verifies that the "title-or-subtitle-text-container-small-header" class is set to the container element */
      /* Verifies that the "title-or-subtitle-text-container-tall-header" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "title-text-font-black" class is set to the paragraph element */
      /* Verifies that the "title-text-font-white" class is not set to the paragraph element */
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
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the id attribute is set correctly to the container element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "title-or-subtitle-text-container-small-header" class is set to the container element', () => {
      expect(testData[1].contains('title-or-subtitle-text-container-small-header')).toBeTruthy();
    });

    it('verifies that the "title-or-subtitle-text-container-tall-header" class is not set to the container element', () => {
      expect(testData[1].contains('title-or-subtitle-text-container-tall-header')).toBeFalsy();
    });

    it('verifies that the "title-text-font-black" class is set to the paragraph element', () => {
      expect(testData[2].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title-text-font-white" class is not set to the paragraph element', () => {
      expect(testData[2].contains('title-text-font-white')).toBeFalsy();
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

  describe('Component with small header element type, default text colour, element marked as hidden', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    const testContainerRightPos = 1250;
    const testData = [];
    const testParagraphRightPos = 1900;

    beforeAll(() => {
      /* Create the spies necessary to mark the subtitle text element as hidden */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return {
            getBoundingClientRect: () => {
              return { right: testContainerRightPos };
            },
          };
        });

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="default">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"] > p`);

      /* Verifies that the "title-or-subtitle-text-container-small-header" class is set to the container element */
      /* Verifies that the "title-or-subtitle-text-container-tall-header" class is not set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "title-text-font-black" class is set to the paragraph element */
      /* Verifies that the "title-text-font-white" class is not set to the paragraph element */
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

    it('verifies that the "title-or-subtitle-text-container-small-header" class is set to the container element', () => {
      expect(testData[0].contains('title-or-subtitle-text-container-small-header')).toBeTruthy();
    });

    it('verifies that the "title-or-subtitle-text-container-tall-header" class is not set to the container element', () => {
      expect(testData[0].contains('title-or-subtitle-text-container-tall-header')).toBeFalsy();
    });

    it('verifies that the "title-text-font-black" class is set to the paragraph element', () => {
      expect(testData[1].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title-text-font-white" class is not set to the paragraph element', () => {
      expect(testData[1].contains('title-text-font-white')).toBeFalsy();
    });

    it('verifies that the "hidden" class is set to the paragraph element', () => {
      expect(testData[1].contains('hidden')).toBeTruthy();
    });

    it('verifies that the aria-hidden attribute set to the paragraph element indicates that the element is hidden', () => {
      expect(testData[2]).toBe('true');
    });
  });

  describe('Component with tall header element type, black text colour', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      componentDidMountSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={true} textColour="black">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const containerElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"]`);
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"] > p`);

      /* Verifies that the "title-or-subtitle-text-container-small-header" class is not set to the container element */
      /* Verifies that the "title-or-subtitle-text-container-tall-header" class is set to the container element */
      testData.push(containerElement.classList);

      /* Verifies that the "title-text-font-black" class is set to the paragraph element */
      /* Verifies that the "title-text-font-white" class is not set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "title-or-subtitle-text-container-small-header" class is not set to the container element', () => {
      expect(testData[0].contains('title-or-subtitle-text-container-small-header')).toBeFalsy();
    });

    it('verifies that the "title-or-subtitle-text-container-tall-header" class is set to the container element', () => {
      expect(testData[0].contains('title-or-subtitle-text-container-tall-header')).toBeTruthy();
    });

    it('verifies that the "title-text-font-black" class is set to the paragraph element', () => {
      expect(testData[1].contains('title-text-font-black')).toBeTruthy();
    });

    it('verifies that the "title-text-font-white" class is not set to the paragraph element', () => {
      expect(testData[1].contains('title-text-font-white')).toBeFalsy();
    });
  });

  describe('Component with small header element type, white text colour', () => {
    let componentDidMountSpy;
    const testData = [];

    beforeAll(() => {
      /* Create the spies for this component test */
      componentDidMountSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'componentDidMount')
        .mockImplementation(() => {});

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="white">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const paragraphElement = document.querySelector(`div[id="${testComponentId}--subtitle-text"] > p`);

      /* Verifies that the "title-text-font-black" class is not set to the paragraph element */
      /* Verifies that the "title-text-font-white" class is set to the paragraph element */
      testData.push(paragraphElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "title-text-font-black" class is not set to the paragraph element', () => {
      expect(testData[0].contains('title-text-font-black')).toBeFalsy();
    });

    it('verifies that the "title-text-font-white" class is set to the paragraph element', () => {
      expect(testData[0].contains('title-text-font-white')).toBeTruthy();
    });
  });

  describe('Component with no title text element rendered, no screen resizing - paragraph element fits within screen width', () => {
    let getBoundingClientRectSpy;
    let handleVisibilitySpy;
    let querySelectorSpy;
    let setHeaderTitleTextIdSpy;
    let setIsHiddenSpy;
    let setIsResizingEndSpy;
    let setIsResizingStartSpy;
    let setRightmostSubtitleTextPositionSpy;
    let setStateSpy;
    const testContainerRightPos = 1000;
    const testData = [];
    const testParagraphRightPos = 900;

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - set containerRightPos */
          return { right: testContainerRightPos };
        });
      handleVisibilitySpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'handleVisibility');
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector');
      setHeaderTitleTextIdSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setHeaderTitleTextId');
      setIsHiddenSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsHidden');
      setIsResizingEndSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingEnd');
      setIsResizingStartSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingStart');
      setRightmostSubtitleTextPositionSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingStart');
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Verifies that the setHeaderTitleTextId functionality is invoked */
      testData.push(setHeaderTitleTextIdSpy.mock.calls.length);

      /* Verifies that the correct header title text id is provided as a parameter to the setHeaderTitleTextId functionality */
      testData.push(setStateSpy.mock.calls[0][0].headerTitleTextId);

      /* Verifies that the setRightmostSubtitleTextPosition functionality is invoked */
      testData.push(setRightmostSubtitleTextPositionSpy.mock.calls.length);

      /* Verifies that the initial paragraph right position is set correctly by the setRightmostSubtitleTextPosition functionality */
      testData.push(setStateSpy.mock.calls[1][0].paragraphRightPos);

      /* Verifies that the setIsResizingStart functionality is invoked */
      testData.push(setIsResizingStartSpy.mock.calls.length);

      /* Verifies that the is resizing switch is correctly enabled by the setIsResizingStart functionality */
      testData.push(setStateSpy.mock.calls[2][0].isResizing);

      /* Verifies that the handleVisibility functionality is invoked */
      testData.push(handleVisibilitySpy.mock.calls.length);

      /* Verifies that the querySelector functionality is invoked twice */
      testData.push(querySelectorSpy.mock.calls.length);

      /* Verifies that the querySelector functionality is used to search for the subtitle text element in the DOM */
      testData.push(querySelectorSpy.mock.calls[0][0]);

      /* Verifies that the querySelector functionality is used to search for the title text element in the DOM */
      testData.push(querySelectorSpy.mock.calls[1][0]);

      /* Verifies that the setIsHidden functionality is invoked */
      testData.push(setIsHiddenSpy.mock.calls.length);

      /* Verifies that the setIsHidden functionality did not invoke the setState functionality since the subtitle text element remains visible */
      testData.push(setStateSpy.mock.calls[setStateSpy.mock.calls.length - 2][0].isHidden);

      /* Verifies that the setIsResizingEnd functionality is invoked */
      testData.push(setIsResizingEndSpy.mock.calls.length);

      /* Verifies that the is resizing switch is correctly disabled by the setIsResizingEnd functionality */
      testData.push(setStateSpy.mock.calls[3][0].isResizing);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      handleVisibilitySpy.mockRestore();
      querySelectorSpy.mockRestore();
      setHeaderTitleTextIdSpy.mockRestore();
      setIsHiddenSpy.mockRestore();
      setIsResizingEndSpy.mockRestore();
      setIsResizingStartSpy.mockRestore();
      setRightmostSubtitleTextPositionSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the setHeaderTitleTextId functionality is invoked', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the correct header title text id is provided as a parameter to the setHeaderTitleTextId functionality', () => {
      expect(testData[1]).toBe(testComponentId);
    });

    it('verifies that the setRightmostSubtitleTextPosition functionality is invoked', () => {
      expect(testData[2]).toBe(1);
    });

    it('verifies that the initial paragraph right position is set correctly by the setRightmostSubtitleTextPosition functionality', () => {
      expect(testData[3]).toBe(testParagraphRightPos);
    });

    it('verifies that the setIsResizingStart functionality is invoked', () => {
      expect(testData[4]).toBe(1);
    });

    it('verifies that the is resizing switch is correctly enabled by the setIsResizingStart functionality', () => {
      expect(testData[5]).toBeTruthy();
    });

    it('verifies that the handleVisibility functionality is invoked', () => {
      expect(testData[6]).toBe(1);
    });

    it('verifies that the querySelector functionality is invoked twice', () => {
      expect(testData[7]).toBe(2);
    });

    it('verifies that the querySelector functionality is used to search for the subtitle text element in the DOM', () => {
      expect(testData[8].indexOf(`[id="${testComponentId}--subtitle-text"]`)).toBeGreaterThan(-1);
    });

    it('verifies that the querySelector functionality is used to search for the title text element in the DOM', () => {
      expect(testData[9].indexOf(`[id="${testComponentId}--title-text"]`)).toBeGreaterThan(-1);
    });

    it('verifies that the setIsHidden functionality is invoked', () => {
      expect(testData[10]).toBe(1);
    });

    it('verifies that the setIsHidden functionality did not invoke the setState functionality since the subtitle text element remains visible', () => {
      expect(testData[11]).toBeUndefined();
    });

    it('verifies that the setIsResizingEnd functionality is invoked', () => {
      expect(testData[12]).toBe(1);
    });

    it('verifies that the is resizing switch is correctly disabled by the setIsResizingEnd functionality', () => {
      expect(testData[13]).toBeFalsy();
    });
  });

  describe('Component with no title text element rendered, no screen resizing - paragraph and container element right positions are zero', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setStateSpy;
    const testContainerRightPos = 0;
    const testData = [];
    const testParagraphRightPos = 0;

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - set containerRightPos */
          return { right: testContainerRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector');
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Verifies that the querySelector functionality is only invoked once */
      testData.push(querySelectorSpy.mock.calls.length);

      /* Verifies that the querySelector functionality is used to search for the subtitle text element in the DOM */
      testData.push(querySelectorSpy.mock.calls[0][0]);

      /* Verifies that the setIsHidden functionality did not invoke the setState functionality since both elements returned right position values of zero */
      testData.push(setStateSpy.mock.calls[setStateSpy.mock.calls.length - 2][0].isHidden);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the querySelector functionality is only invoked once', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the querySelector functionality is used to search for the subtitle text element in the DOM', () => {
      expect(testData[1].indexOf(`[id="${testComponentId}--subtitle-text"]`)).toBeGreaterThan(-1);
    });

    it('verifies that the setIsHidden functionality did not invoke the setState functionality since both elements returned right position values of zero', () => {
      expect(testData[2]).toBeUndefined();
    });
  });

  describe('Component with no title text element rendered, no screen resizing - container element is null', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setStateSpy;
    const testContainerRightPos = 750;
    const testData = [];
    const testParagraphRightPos = 750;

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - set containerRightPos */
          return { right: testContainerRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return null;
        });
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Verifies that the setIsHidden functionality did not invoke the setState functionality since the container element was found to be a null element */
      testData.push(setStateSpy.mock.calls[setStateSpy.mock.calls.length - 2][0].isHidden);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the setIsHidden functionality did not invoke the setState functionality since the container element was found to be a null element', () => {
      expect(testData[0]).toBeUndefined();
    });
  });

  describe('Component with title text element, with screen resizing - title element text is wrapped', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setIsResizingEndSpy;
    let setStateSpy;
    const testContainerRightPos = 750;
    const testData = [];
    const testParagraphRightPos = 750;

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return {
            getBoundingClientRect: () => {
              return { right: testContainerRightPos };
            },
          };
        })
        .mockImplementationOnce(() => {
          /* handleVisibility - set headerTitleTextElement   */
          return {
            dataset: {
              wrap: 'true',
            },
          };
        });
      setIsResizingEndSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingEnd');
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Verifies that the setIsHidden functionality correctly sets the subtitle text element as hidden */
      testData.push(setStateSpy.mock.calls[setStateSpy.mock.calls.length - 2][0].isHidden);

      /* Verifies that the setIsResizingEnd functionality is invoked */
      testData.push(setIsResizingEndSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setIsResizingEndSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the setIsHidden functionality correctly sets the subtitle text element as hidden', () => {
      expect(testData[0]).toBeTruthy();
    });

    it('verifies that the setIsResizingEnd functionality is invoked', () => {
      expect(testData[1]).toBe(1);
    });
  });

  describe('Component with title text element, with screen resizing - subtitle element exceeds screen width', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setStateSpy;
    const testContainerRightPos = 1199;
    const testData = [];
    const testParagraphRightPos = 1200;

    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return {
            getBoundingClientRect: () => {
              return { right: testContainerRightPos };
            },
          };
        });
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Verifies that the setIsHidden functionality correctly sets the subtitle text element as hidden */
      testData.push(setStateSpy.mock.calls[setStateSpy.mock.calls.length - 2][0].isHidden);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the setIsHidden functionality correctly sets the subtitle text element as hidden', () => {
      expect(testData[0]).toBeTruthy();
    });
  });

  describe('setRightmostSubtitleTextPosition functionality (invoked by window resize) - subtitle text element already hidden', () => {
    let consoleErrorSpy;
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let setIsResizingStartSpy;
    let setRightmostSubtitleTextPositionSpy;
    let setStateSpy;
    const testContainerRightPos = 1000;
    const testData = [];
    const testParagraphRightPos = 1200;

    beforeAll(() => {
      /* Create the spies necessary to mark the subtitle text element as hidden */
      consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {});
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* setRightmostSubtitleTextPosition - setState paragraphRightPos */
          return { right: testParagraphRightPos };
        });
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleVisibility - set subtitleContainerElement  */
          return {
            getBoundingClientRect: () => {
              return { right: testContainerRightPos };
            },
          };
        });
      
      /* Create the spies for required this component test */
      setIsResizingStartSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setIsResizingStart');
      setRightmostSubtitleTextPositionSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setRightmostSubtitleTextPosition');
      setStateSpy = jest
        .spyOn(HeaderSubtitleText.prototype, 'setState');

      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
      /* Ensure all relevant spies are starting from a clear slate */
      setIsResizingStartSpy.mockClear();
      setRightmostSubtitleTextPositionSpy.mockClear();
      setStateSpy.mockClear();

      /* Fire a resize event on the document window */
      window.dispatchEvent(new Event('resize'));

      /* Verifies that the setRightmostSubtitleTextPosition functionality is invoked after firing the window resize event */
      testData.push(setRightmostSubtitleTextPositionSpy.mock.calls.length);

      /* Verifies that the setState functionality to set the subtitle text element right position is not invoked since the subtitle text element is hidden */
      testData.push(setStateSpy.mock.calls[0][0].paragraphRightPos);

       /* Verifies that the setIsResizingStart functionality is invoked */
       testData.push(setIsResizingStartSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      consoleErrorSpy.mockRestore();
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
      setIsResizingStartSpy.mockRestore();
      setRightmostSubtitleTextPositionSpy.mockRestore();
      setStateSpy.mockRestore();
    });

    it('verifies that the setRightmostSubtitleTextPosition functionality is invoked after firing the window resize event', () => {
      expect(testData[0]).toBe(1);
    });

    it('verifies that the setState functionality to set the subtitle text element right position is not invoked since the subtitle text element is hidden', () => {
      expect(testData[1]).toBeUndefined();
    });

    it('verifies that the setIsResizingStart functionality is invoked', () => {
      expect(testData[2]).toBe(1);
    });
  });
});
