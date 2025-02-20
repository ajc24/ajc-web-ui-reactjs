/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { HeaderSubtitleText } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Header Subtitle Text', () => {
  /* Set the data for the tests */
  const testComponentId = 'test-component-id';

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

  describe('Default standalone component, left alignment, no title text rendered, black text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
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
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} alignment="left" textColour="black">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Default standalone component, centre alignment, no title text rendered, white text colour, marked as hidden', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
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
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} alignment="centre" textColour="white">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component rendered inside Header, default alignment, with title text rendered, default text colour, marked as visible', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementation(() => { return { right: 0 } });
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderSubtitleText id={testComponentId} headerTitleTextId="test-header-title-text-id" parentHeaderId="test-parent-header-id">
            Header subtitle text component text content.
          </HeaderSubtitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
