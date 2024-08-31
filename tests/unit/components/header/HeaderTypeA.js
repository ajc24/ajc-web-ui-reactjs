/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HeaderTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';
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

  describe('Header Type A with grey top border, white background, center alignment', () => {
    let componentDidMountSpy;
    const testComponentId = 'test-header-border-grey-bg-white-align-center';
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="grey" backgroundColour="white" alignment="center">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${testComponentId}--container"]`);
      const headerContentContainer = document.querySelector(`div[id="${testComponentId}--content-container"]`);
      const headerContent = document.querySelector(`div[id="${testComponentId}--content"]`);
      
      /* Verifies that the "ajc-header-border-black" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-grey" class is assigned to the container element */
      /* Verifies that the "ajc-header-border-red" class is not assigned to the container element */
      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(headerContainer.classList);

      /* Verifies that the "ajc-header-content-container-with-border" class is assigned to the content container element */
      /* Verifies that the "ajc-header-content-container-no-border" class is not assigned to the content container element */
      testData.push(headerContentContainer.classList);

      /* Verifies that the "ajc-header-content-alignment-left" class is not assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-center" class is assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element */
      testData.push(headerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-black" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-black')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-grey" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-grey')).toBeTruthy();
    });

    it('verifies that the "ajc-header-border-red" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-red')).toBeFalsy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeTruthy();
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

    it('verifies that the "ajc-header-content-alignment-left" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-left')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-center" class is assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-center')).toBeTruthy();
    });

    it('verifies that the "ajc-header-content-alignment-right" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-right')).toBeFalsy();
    });
  });

  describe('Header Type A with red top border, grey background, right alignment', () => {
    let componentDidMountSpy;
    const testComponentId = 'test-header-border-red-bg-grey-align-right';
    const testData = [];

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="red" backgroundColour="grey" alignment="right">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${testComponentId}--container"]`);
      const headerContentContainer = document.querySelector(`div[id="${testComponentId}--content-container"]`);
      const headerContent = document.querySelector(`div[id="${testComponentId}--content"]`);
      
      /* Verifies that the "ajc-header-border-black" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-grey" class is not assigned to the container element */
      /* Verifies that the "ajc-header-border-red" class is assigned to the container element */
      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is not assigned to the container element */
      testData.push(headerContainer.classList);

      /* Verifies that the "ajc-header-content-container-with-border" class is assigned to the content container element */
      /* Verifies that the "ajc-header-content-container-no-border" class is not assigned to the content container element */
      testData.push(headerContentContainer.classList);

      /* Verifies that the "ajc-header-content-alignment-left" class is not assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element */
      /* Verifies that the "ajc-header-content-alignment-right" class is assigned to the content element */
      testData.push(headerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies that the "ajc-header-border-black" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-black')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-grey" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-grey')).toBeFalsy();
    });

    it('verifies that the "ajc-header-border-red" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-header-border-red')).toBeTruthy();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeTruthy();
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

    it('verifies that the "ajc-header-content-alignment-left" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-left')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-center" class is not assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-center')).toBeFalsy();
    });

    it('verifies that the "ajc-header-content-alignment-right" class is assigned to the content element', () => {
      expect(testData[2].contains('ajc-header-content-alignment-right')).toBeTruthy();
    });
  });

  describe('Header Type A with no top border (default), yellow background, background image assigned, left alignment (default)', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-header-border-none-bg-yellow-align-left--with-bg-image';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} backgroundColour="yellow" backgroundImage={headerBackgroundTestImage}>
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainer = document.querySelector(`header[id="${testComponentId}--container"]`);
      const headerContainerImage = document.querySelector(`div[id="${testComponentId}--container-image"]`);

      /* Verifies that the "ajc-background-transparent" class is not assigned to the container element */
      /* Verifies that the "ajc-background-grey-1" class is not assigned to the container element */
      /* Verifies that the "ajc-background-white" class is not assigned to the container element */
      /* Verifies that the "ajc-background-yellow" class is assigned to the container element */
      testData.push(headerContainer.classList);

      /* Verifies that the background image data is correctly assigned to the container image element */
      testData.push(headerContainerImage.dataset.bgImageLoaded);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that the "ajc-background-transparent" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-transparent')).toBeFalsy();
    });

    it('verifies that the "ajc-background-grey-1" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-grey-1')).toBeFalsy();
    });

    it('verifies that the "ajc-background-white" class is not assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-white')).toBeFalsy();
    });

    it('verifies that the "ajc-background-yellow" class is assigned to the container element', () => {
      expect(testData[0].contains('ajc-background-yellow')).toBeTruthy();
    });

    it('verifies that the background image data is correctly assigned to the container image element', () => {
      expect(testData[1]).toBe('true');
    });

    it('verifies that the page template config functionality is called as expected', () => {
      expect(setupDocumentBodyCssSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('Header Type A with no top border (default), transparent background (default), no background image assigned, left alignment (default)', () => {
    let setupDocumentBodyCssSpy;
    const testComponentId = 'test-header-border-none-bg-transparent-align-left--no-bg-image';
    const testData = [];

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <React.Fragment>
          <HeaderTypeA id={testComponentId}>
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const headerContainerImage = document.querySelector(`div[id="${testComponentId}--container-image"]`);

      /* Verifies that background image data is not assigned to the container image element */
      testData.push(headerContainerImage.dataset.bgImageLoaded);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });

    it('verifies that background image data is not assigned to the container image element', () => {
      expect(testData[0]).toBe('false');
    });

    it('verifies that the page template config functionality is called as expected', () => {
      expect(setupDocumentBodyCssSpy.mock.calls).toHaveLength(1);
    });
  });
});
