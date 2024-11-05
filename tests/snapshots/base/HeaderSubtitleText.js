/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import HeaderSubtitleText from '../../../src/components/base/HeaderSubtitleText';

describe('Header Subtitle Text', () => {
  const testComponentId = 'test-header-subtitle-text-id';

  describe('Component with undefined / default header element type, default text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId}>
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with small header element type, default text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="default">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with tall header element type, black text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={true} textColour="black">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with small header element type, white text colour, element marked as hidden', () => {
    let getBoundingClientRectSpy;
    let querySelectorSpy;
    let snapshot;
    const testContainerRightPos = 1000;
    const testParagraphRightPos = 1500;

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
      /* Generate the snapshot for this component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId={testComponentId} isTallHeader={false} textColour="white">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
