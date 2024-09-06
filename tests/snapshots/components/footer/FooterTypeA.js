/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { FooterTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Footer Type A', () => {
  describe('Footer Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-footer-bg-default';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterTypeA id={testComponentId}>
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Footer Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-footer-bg-grey';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterTypeA id={testComponentId} backgroundColour="grey">
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Footer Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-footer-bg-red';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterTypeA id={testComponentId} backgroundColour="red">
            Footer text content.
          </FooterTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
