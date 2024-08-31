/**
 * Developed by Anthony Cox in 2024
 */
// import 'jsdom-global/register';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HeaderTypeA } from '../../../../src';
import headerBackgroundTestImage from '../../../../stories/images/header-background-test.png';

describe('Header Type A', () => {
  describe('Header Type A with no top border (default), transparent background (default), left alignment (default)', () => {
    let componentDidMountSpy;
    const testComponentId = 'test-header-border-none-bg-default-align-default';
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId}>
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${testComponentId}--container"]`);
      const headerContentContainer = document.querySelector(`div[id="${testComponentId}--content-container"]`);
      const headerContent = document.querySelector(`div[id="${testComponentId}--content"]`);
      
      /* Verifies that the id attribute is set correctly to the container element */
      testData.push(headerContainer);

      /* Verifies that the "ajc-header-border-black" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-grey" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-red" class is not assigned to the container element */
      /* Verifies that the "ajc-background-transparent" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(headerContainer.classList);

      /* Verifies that the id attribute is set correctly to the content container element */
      testData.push(headerContentContainer);

      /* Verifies that the "ajc-header-content-container-with-border" class is not assigned to the content container element */
      /* Verifies that the "ajc-header-content-container-no-border" class is assigned to the content container element */
      testData.push(headerContentContainer.classList);

      /* Verifies that the id attribute is set correctly to the content element */
      /* Verifies that the children components are rendered within the content element */
      testData.push(headerContent);

      /* Verifies that the "ajc-header-content-alignment-left" class is assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element */
      testData.push(headerContent.classList);

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

    it('verifies that the "ajc-header-border-black" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-header-border-black')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[1].contains('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the id attribute is set correctly to the content container element', () => {
      expect(testData[2]).not.toBeNull();
    });

    it('verifies that the "ajc-header-content-container-with-border" class is not assigned to the content container element', () => {
      expect(testData[3].contains('ajc-header-content-container-with-border')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-container-no-border" class is assigned to the content container element', () => {
      expect(testData[3].contains('ajc-header-content-container-no-border')).toBeTruthy();
    });

    it('verifies that the id attribute is set correctly to the content element', () => {
      expect(testData[4]).not.toBeNull();
    });

    it('verifies that the children components are rendered within the content element', () => {
      expect(testData[4].textContent).toBe('Header text content.');
    });

    it('verifies that the "ajc-header-content-alignment-left" class is assigned to the content element', () => {
      expect(testData[5].contains('ajc-header-content-alignment-left')).toBeTruthy();
    });

    it('verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element', () => {
      expect(testData[5].contains('ajc-header-content-alignment-center')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element', () => {
      expect(testData[5].contains('ajc-header-content-alignment-right')).toBeFalsy();
    });
  });

  describe('Header Type A with black top border (default colour), transparent background, left alignment', () => {
    let componentDidMountSpy;
    const testComponentId = 'test-header-border-default-bg-transparent-align-left';
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} backgroundColour="transparent" alignment="left">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${testComponentId}--container"]`);
      const headerContentContainer = document.querySelector(`div[id="${testComponentId}--content-container"]`);
      const headerContent = document.querySelector(`div[id="${testComponentId}--content"]`);
      
      /* Verifies that the "ajc-header-border-black" class is assigned to the container element */
      /* Verifies that the "ajc-header-border-grey" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-red" class is not assigned to the container element */
      /* Verifies that the "ajc-background-transparent" class is assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(headerContainer.classList);

      /* Verifies that the "ajc-header-content-container-with-border" class is assigned to the content container element */
      /* Verifies that the "ajc-header-content-container-no-border" class is not assigned to the content container element */
      testData.push(headerContentContainer.classList);

      /* Verifies that the "ajc-header-content-alignment-left" class is assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element */
      testData.push(headerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-black" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-black')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeTruthy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-container-with-border" class is assigned to the content container element', () => {
      expect(testData[1].contains('ajc-header-content-container-with-border')).toBeTruthy();
    });

    it('verifies that the "ajc-header-content-container-no-border" class is not assigned to the content container element', () => {
      expect(testData[1].contains('ajc-header-content-container-no-border')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-left" class is assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-left')).toBeTruthy();
    });

    it('verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-center')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-right')).toBeFalsy();
    });
  });

  // describe('Transferred props and rendering - Header with grey top border and white background', () => {
  //   let componentDidMountSpy;
  //   const testComponentId = 'test-header-with-top-border-id';
  //   const testData = [];

  //   beforeAll(() => {
  //     componentDidMountSpy = jest
  //       .spyOn(Header.prototype, 'componentDidMount')
  //       .mockImplementation(() => {});
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={true} topBorderColour="grey" backgroundColour="white">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Build the DOM elements required for the tests */
  //     const headerRoot = document.querySelector(`header[id="${testComponentId}-root"]`);
      
  //     /* Verifies that the "ajc-header-border-grey" class is assigned to the root element */
  //     /* Verifies that the "ajc-header-border-red" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-transparent" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-grey-1" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-white" class is assigned to the root element */
  //     testData.push(headerRoot.classList);

  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   afterAll(() => {
  //     componentDidMountSpy.mockRestore();
  //   });

  //   it('verifies that the "ajc-header-border-grey" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-grey')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-red')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-white" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-white')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with red top border and image background', () => {
  //   let componentDidMountSpy;
  //   const testComponentId = 'test-header-with-top-border-and-bg-image-id';
  //   const testData = [];

  //   beforeAll(() => {
  //     componentDidMountSpy = jest
  //       .spyOn(Header.prototype, 'componentDidMount')
  //       .mockImplementation(() => {});
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={true} topBorderColour="red" renderBackgroundImage={true} backgroundImageData={testImage}>
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Build the DOM elements required for the tests */
  //     const headerRoot = document.querySelector(`header[id="${testComponentId}-root"]`);
      
  //     /* Verifies that the "ajc-header-border-grey" class is not assigned to the root element */
  //     /* Verifies that the "ajc-header-border-red" class is assigned to the root element */
  //     /* Verifies that the "ajc-background-transparent" class is assigned to the root element */
  //     /* Verifies that the "ajc-background-grey-1" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-white" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-yellow" class is not assigned to the root element */
  //     testData.push(headerRoot.classList);

  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   afterAll(() => {
  //     componentDidMountSpy.mockRestore();
  //   });

  //   it('verifies that the "ajc-header-border-grey" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-grey')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-header-border-red" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-red')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-background-transparent" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-transparent')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-white')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with no top border and grey background', () => {
  //   let componentDidMountSpy;
  //   const testComponentId = 'test-header-with-no-top-border-id';
  //   const testData = [];

  //   beforeAll(() => {
  //     componentDidMountSpy = jest
  //       .spyOn(Header.prototype, 'componentDidMount')
  //       .mockImplementation(() => {});
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={false} backgroundColour="grey">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Build the DOM elements required for the tests */
  //     const headerRoot = document.querySelector(`header[id="${testComponentId}-root"]`);
      
  //     /* Verifies that the "ajc-header-border-grey" class is not assigned to the root element */
  //     /* Verifies that the "ajc-header-border-red" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-transparent" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-grey-1" class is assigned to the root element */
  //     /* Verifies that the "ajc-background-white" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-yellow" class is not assigned to the root element */
  //     testData.push(headerRoot.classList);

  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   afterAll(() => {
  //     componentDidMountSpy.mockRestore();
  //   });
  
  //   it('verifies that the "ajc-header-border-grey" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-grey')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-red')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-grey-1" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-grey-1')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-white')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-yellow" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-yellow')).toBeFalsy();
  //   });
  // });

  // describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
  //   let componentDidMountSpy;
  //   const testComponentId = 'test-header-with-top-border-id';
  //   const testData = [];

  //   beforeAll(() => {
  //     componentDidMountSpy = jest
  //       .spyOn(Header.prototype, 'componentDidMount')
  //       .mockImplementation(() => {});
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={true} topBorderColour="grey" backgroundColour="yellow">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Build the DOM elements required for the tests */
  //     const headerRoot = document.querySelector(`header[id="${testComponentId}-root"]`);
      
  //     /* Verifies that the "ajc-header-border-grey" class is assigned to the root element */
  //     /* Verifies that the "ajc-header-border-red" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-transparent" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-grey-1" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-white" class is not assigned to the root element */
  //     /* Verifies that the "ajc-background-yellow" class is assigned to the root element */
  //     testData.push(headerRoot.classList);

  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   afterAll(() => {
  //     componentDidMountSpy.mockRestore();
  //   });

  //   it('verifies that the "ajc-header-border-grey" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-grey')).toBeTruthy();
  //   });

  //   it('verifies that the "ajc-header-border-red" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-header-border-red')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-transparent" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-grey-1" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-white" class is not assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-white')).toBeFalsy();
  //   });

  //   it('verifies that the "ajc-background-yellow" class is assigned to the root element', () => {
  //     expect(testData[0].contains('ajc-background-yellow')).toBeTruthy();
  //   });
  // });

  // describe('componentDidMount method behaviour - No image data set', () => {
  //   let documentQuerySelectorSpy;
  //   const testComponentId = 'test-component-did-mount-no-image-id';

  //   beforeAll(() => {
  //     documentQuerySelectorSpy = jest
  //       .spyOn(global.document, 'querySelector');
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={true} topBorderColour="red" backgroundColour="grey">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   afterAll(() => {
  //     documentQuerySelectorSpy.mockRestore();
  //   });

  //   it('verifies that the document query selector functionality is not invoked', () => {
  //     expect(documentQuerySelectorSpy.mock.calls).toHaveLength(0);
  //   });
  // });

  // describe('componentDidMount method behaviour - Image data set', () => {
  //   const testComponentId = 'test-component-did-mount-with-image-id';
  //   const testData = [];

  //   beforeAll(() => {
  //     const { unmount } = render(
  //       <React.Fragment>
  //         <Header id={testComponentId} renderTopBorder={true} topBorderColour="red" renderBackgroundImage={true} backgroundImageData={testImage}>
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //     /* Build the DOM elements required for the tests */
  //     const headerOuterChildElement = document.querySelector(`header[id="${testComponentId}-root"] > div`);

  //     /* Verifies that the background image of the header outer child element is set correctly */
  //     testData.push(headerOuterChildElement);

  //     /* Unmount the component and clean up the test */
  //     unmount();
  //     cleanup();
  //   });

  //   it('verifies that the background image of the header outer child element is set correctly', () => {
  //     expect(testData[0].style.backgroundImage).toBeDefined();
  //   });
  // });
});
