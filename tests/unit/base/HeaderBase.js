/**
 * Developed by Anthony Cox in 2025
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HeaderBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';
import headerBgImage from '../../../stories/images/files/header-bg-image.png';

describe('Header Base', () => {
  /* Set the IDs for use in the tests */
  const customId = 'custom-id';
  const defaultHeaderBaseId = 'default-id--header-base';
  const customHeaderBaseId = `${customId}--header-base`;

  /* Set the spies for use in the tests */
  let setupDocumentBodyCssSpy;

  beforeAll(() => {
    setupDocumentBodyCssSpy = jest
      .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    setupDocumentBodyCssSpy.mockRestore();
  });

  describe('Default component', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase>
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const header = document.querySelector(`header[id="${defaultHeaderBaseId}"]`);
      const outerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div`);
      const innerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div > div`);
      
      /* Verifies that the id attribute is set correctly to the header element */
      testData.push(header);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      /* Verifies that the "header-border-top-grey" class is not set to the outer content element */
      /* Verifies that the "header-border-top-red" class is not set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that no background image is rendered in the outer content element */
      testData.push(outerContent.dataset.bgimage);
      
      /* Verifies that the "header-tall-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-tall-height-no-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-no-border" class is set to the inner content element */
      testData.push(innerContent.classList);

      /* Verifies that the children components are rendered within the inner content element */
      testData.push(innerContent.textContent);

      /* Verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once */
      testData.push(setupDocumentBodyCssSpy.mock.calls.length);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the header element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeTruthy();
    });

    it('verifies that the "header-border-top-grey" class is not set to the outer content element', () => {
      expect(testData[1].contains('header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "header-border-top-red" class is not set to the outer content element', () => {
      expect(testData[1].contains('header-border-top-red')).toBeFalsy();
    });

    it('verifies that no background image is rendered in the outer content element', () => {
      expect(testData[2]).toBe('false');
    });

    it('verifies that the "header-tall-height-with-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-tall-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-with-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-small-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-tall-height-no-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-tall-height-no-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-no-border" class is set to the inner content element', () => {
      expect(testData[3].contains('header-small-height-no-border')).toBeTruthy();
    });

    it('verifies that the children components are rendered within the inner content element', () => {
      expect(testData[4]).toBe('Header base text content.');
    });

    it('verifies that by default the PageTemplateConfig.setupDocumentBodyCss functionality is invoked once', () => {
      expect(testData[5]).toBe(1);
    });
  });

  describe('Component with custom id, invalid size, no background image, grey background, invalid top border', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase id={customId} size="invalid" backgroundImageSrc={undefined} backgroundColour="grey" topBorder="invalid">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const header = document.querySelector(`header[id="${customHeaderBaseId}"]`);
      const outerContent = document.querySelector(`header[id="${customHeaderBaseId}"] > div`);
      const innerContent = document.querySelector(`header[id="${customHeaderBaseId}"] > div > div`);

      /* Verifies that the id attribute is set correctly to the header element */
      testData.push(header);

      /* Verifies that the "background-grey" class is set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      /* Verifies that the "header-border-top-grey" class is not set to the outer content element */
      /* Verifies that the "header-border-top-red" class is not set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that no background image is rendered in the outer content element */
      testData.push(outerContent.dataset.bgimage);

      /* Verifies that the "header-tall-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-tall-height-no-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-no-border" class is set to the inner content element */
      testData.push(innerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the header element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "background-grey" class is set to the outer content element', () => {
      expect(testData[1].contains('background-grey')).toBeTruthy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[1].contains('background-white')).toBeFalsy();
    });

    it('verifies that the "header-border-top-grey" class is not set to the outer content element', () => {
      expect(testData[1].contains('header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "header-border-top-red" class is not set to the outer content element', () => {
      expect(testData[1].contains('header-border-top-red')).toBeFalsy();
    });

    it('verifies that no background image is rendered in the outer content element', () => {
      expect(testData[2]).toBe('false');
    });

    it('verifies that the "header-tall-height-with-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-tall-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-with-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-small-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-tall-height-no-border" class is not set to the inner content element', () => {
      expect(testData[3].contains('header-tall-height-no-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-no-border" class is set to the inner content element', () => {
      expect(testData[3].contains('header-small-height-no-border')).toBeTruthy();
    });
  });

  describe('Component with default id, small size, no background image, white background, grey top border', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="small" backgroundImageSrc={undefined} backgroundColour="white" topBorder="grey">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div`);
      const innerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div > div`);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is set to the outer content element */
      /* Verifies that the "header-border-top-grey" class is set to the outer content element */
      /* Verifies that the "header-border-top-red" class is not set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that no background image is rendered in the outer content element */
      testData.push(outerContent.dataset.bgimage);

      /* Verifies that the "header-tall-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-with-border" class is set to the inner content element */
      /* Verifies that the "header-tall-height-no-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-no-border" class is not set to the inner content element */
      testData.push(innerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeTruthy();
    });

    it('verifies that the "header-border-top-grey" class is set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-grey')).toBeTruthy();
    });

    it('verifies that the "header-border-top-red" class is not set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-red')).toBeFalsy();
    });

    it('verifies that no background image is rendered in the outer content element', () => {
      expect(testData[1]).toBe('false');
    });

    it('verifies that the "header-tall-height-with-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-with-border" class is set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-with-border')).toBeTruthy();
    });

    it('verifies that the "header-tall-height-no-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-no-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-no-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-no-border')).toBeFalsy();
    });
  });

  describe('Component with default id, tall size, no background image, default background, red top border', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="tall" backgroundImageSrc={undefined} topBorder="red">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div`);
      const innerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div > div`);

      /* Verifies that the "header-border-top-grey" class is not set to the outer content element */
      /* Verifies that the "header-border-top-red" class is set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that no background image is rendered in the outer content element */
      testData.push(outerContent.dataset.bgimage);

      /* Verifies that the "header-tall-height-with-border" class is set to the inner content element */
      /* Verifies that the "header-small-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-tall-height-no-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-no-border" class is not set to the inner content element */
      testData.push(innerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "header-border-top-grey" class is not set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "header-border-top-red" class is set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-red')).toBeTruthy();
    });

    it('verifies that no background image is rendered in the outer content element', () => {
      expect(testData[1]).toBe('false');
    });

    it('verifies that the "header-tall-height-with-border" class is set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-with-border')).toBeTruthy();
    });

    it('verifies that the "header-small-height-with-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-tall-height-no-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-no-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-no-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-no-border')).toBeFalsy();
    });
  });

  describe('Component with default id, tall size, with background image, default background, no top border', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <HeaderBase size="tall" backgroundImageSrc={headerBgImage} topBorder="off">
            Header base text content.
          </HeaderBase>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div`);
      const innerContent = document.querySelector(`header[id="${defaultHeaderBaseId}"] > div > div`);

      /* Verifies that the "background-grey" class is not set to the outer content element */
      /* Verifies that the "background-white" class is not set to the outer content element */
      /* Verifies that the "header-border-top-grey" class is not set to the outer content element */
      /* Verifies that the "header-border-top-red" class is not set to the outer content element */
      testData.push(outerContent.classList);

      /* Verifies that a background image is correctly rendered in the outer content element */
      testData.push(outerContent.dataset.bgimage);

      /* Verifies that the "header-tall-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-small-height-with-border" class is not set to the inner content element */
      /* Verifies that the "header-tall-height-no-border" class is set to the inner content element */
      /* Verifies that the "header-small-height-no-border" class is not set to the inner content element */
      testData.push(innerContent.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "background-grey" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-grey')).toBeFalsy();
    });

    it('verifies that the "background-white" class is not set to the outer content element', () => {
      expect(testData[0].contains('background-white')).toBeFalsy();
    });

    it('verifies that the "header-border-top-grey" class is not set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-grey')).toBeFalsy();
    });

    it('verifies that the "header-border-top-red" class is not set to the outer content element', () => {
      expect(testData[0].contains('header-border-top-red')).toBeFalsy();
    });

    it('verifies that a background image is correctly rendered in the outer content element', () => {
      expect(testData[1]).toBe('true');
    });

    it('verifies that the "header-tall-height-with-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-small-height-with-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-with-border')).toBeFalsy();
    });

    it('verifies that the "header-tall-height-no-border" class is set to the inner content element', () => {
      expect(testData[2].contains('header-tall-height-no-border')).toBeTruthy();
    });

    it('verifies that the "header-small-height-no-border" class is not set to the inner content element', () => {
      expect(testData[2].contains('header-small-height-no-border')).toBeFalsy();
    });
  });
});
