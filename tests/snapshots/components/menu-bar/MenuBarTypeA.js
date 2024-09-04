/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { MenuBarTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Menu Bar Type A', () => {
  describe('Menu Bar Type A with black background (default)', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-menu-bar-bg-default';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId}>
            Menu bar text content.
          </MenuBarTypeA>
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

  describe('Menu Bar Type A with grey background', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-menu-bar-bg-grey';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId} backgroundColour="grey">
            Menu bar text content.
          </MenuBarTypeA>
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

  describe('Menu Bar Type A with red background', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-menu-bar-bg-red';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MenuBarTypeA id={testComponentId} backgroundColour="red">
            Menu bar text content.
          </MenuBarTypeA>
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
