/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import MainBase from '../../../src/components/base/MainBase';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Main Base', () => {
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

  describe('Component with default id', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainBase>
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with custom id', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainBase id="custom-id">
            Main base text content.
          </MainBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
