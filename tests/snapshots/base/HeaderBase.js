/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import HeaderBase from '../../../src/components/base/HeaderBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Header Base', () => {
  describe('Header Base component with default id', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    
    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderBase>
            Header base text content.
          </HeaderBase>
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

  describe('Header Base component with custom id', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    
    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderBase id="custom-id">
            Header base text content.
          </HeaderBase>
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
