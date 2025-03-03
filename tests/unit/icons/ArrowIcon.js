/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ArrowIcon } from '../../../src';

describe('Arrow Icon', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-component-id';

  describe('Default arrow icon', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon id={testComponentId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-right"]`);

      /* Verifies that the id attribute is set correctly to the arrow icon element */
      testData.push(arrowIconElement);

      /* Verifies that the "arrow-icon-size-one" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-size-two" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-black" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the id attribute is set correctly to the arrow icon element', () => {
      expect(testData[0]).not.toBeNull();
    });

    it('verifies that the "arrow-icon-size-one" class is set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-size-one')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-size-two" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-size-two')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-black" class is set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-border-black')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-border-gold')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-white" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-border-white')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-direction-right')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[1].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with invalid size, with invalid colour, with invalid direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon colour="torquoise" direction="north" id={testComponentId} size="large" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-right"]`);

      /* Verifies that the "arrow-icon-size-one" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-size-two" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-black" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-size-one" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-one')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-size-two" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-two')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-black" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-black')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-gold')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-white" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-white')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with size 1, with default colour, with default direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon colour="default" direction="default" id={testComponentId} size="1" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-right"]`);

      /* Verifies that the "arrow-icon-size-one" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-size-two" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-black" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-size-one" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-one')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-size-two" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-two')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-black" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-black')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-gold')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-white" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-white')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with size 2, with black colour, with right direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon colour="black" direction="right" id={testComponentId} size="2" />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-right"]`);

      /* Verifies that the "arrow-icon-size-one" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-size-two" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-black" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-size-one" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-one')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-size-two" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-size-two')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-black" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-black')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-gold')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-white" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-white')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with default size, with gold colour, with down direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon colour="gold" direction="down" id={testComponentId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-down"]`);

      /* Verifies that the "arrow-icon-border-black" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-border-black" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-black')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-gold" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-gold')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-border-white" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-white')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-down" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with default size, with white colour, with left direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon colour="white" direction="left" id={testComponentId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-left"]`);

      /* Verifies that the "arrow-icon-border-black" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-border-white" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-border-black" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-black')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-gold" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-gold')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-border-white" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-border-white')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeTruthy();
    });

    it('verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-up" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeFalsy();
    });
  });

  describe('Arrow icon with default size, with default colour, with up direction', () => {
    const testData = [];

    beforeAll(() => {
      const { unmount } = render(
        <React.Fragment>
          <ArrowIcon direction="up" id={testComponentId} />
        </React.Fragment>
      );
      /* Build the DOM elements required for the tests */
      const arrowIconElement = document.querySelector(`div[id="${testComponentId}--arrow-icon-up"]`);

      /* Verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element */
      /* Verifies that the "arrow-icon-direction-up" class is set to the arrow icon element */
      testData.push(arrowIconElement.classList);

      /* Unmount the component and clean up the test */
      unmount();
      cleanup();
    });

    it('verifies that the "arrow-icon-direction-down" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-down')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-left" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-left')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-right" class is not set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-right')).toBeFalsy();
    });

    it('verifies that the "arrow-icon-direction-up" class is set to the arrow icon element', () => {
      expect(testData[0].contains('arrow-icon-direction-up')).toBeTruthy();
    });
  });
});
