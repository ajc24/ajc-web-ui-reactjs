/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
// import { TestDev } from 'ajc-testing-code';
import { Header } from '../../../src';
// import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
// import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-id';

  describe('Default (small) Header, with custom content, no logo image, no title text, no subtitle text', () => {
    const testData = [];

    beforeAll(() => {
      /* Mount the component */
      const { unmount } = render(
        <React.Fragment>
          <Header id={testComponentId}>
            Header component text content.
          </Header>
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const outerContent_bgColour = document.querySelector(`header[id="${testComponentId}--header-base"] > div[class*="background-white"]`);
      const outerContent_bgImage = document.querySelector(`header[id="${testComponentId}--header-base"] > div`).dataset.bgimage;
      const outerContent_topBorder = document.querySelector(`header[id="${testComponentId}--header-base"] > div[class*="header-border-top-"]`);
      const innerContent_children = document.querySelector(`header[id="${testComponentId}--header-base"] > div > div`).textContent;
      const innerContent_size = document.querySelector(`header[id="${testComponentId}--header-base"] > div > div[class*="header-small-height-no-border"]`);

      /* Verifies that the default background colour (white) is set to the outer content element */
      testData.push(outerContent_bgColour);

      /* Verifies that no background image is rendered in the outer content element */
      testData.push(outerContent_bgImage);

      /* Verifies that no top border is rendered in the outer content element */
      testData.push(outerContent_topBorder);

      /* Verifies that the custom content is rendered within the inner content element */
      testData.push(innerContent_children);

      /* Verifies that the default size (small) is set to the inner content element */
      testData.push(innerContent_size);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the default background colour (white) is set to the outer content element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that no background image is rendered in the outer content element', () => {
      expect(testData[1]).toBe('false');
    });

    it('verifies that no top border is rendered in the outer content element', () => {
      expect(testData[2]).toBeNull();
    });

    it('verifies that the custom content is rendered within the inner content element', () => {
      expect(testData[3]).toBe('Header component text content.');
    });

    it('verifies that the default size (small) is set to the inner content element', () => {
      expect(testData[4]).not.toBeNull();
    });
  });
});
