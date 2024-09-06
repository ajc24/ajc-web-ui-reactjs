/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { MainContent } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Main Content', () => {
  describe('Main Content with transparent background (default)', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testTitle = 'Main Content: Default';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContent title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Main Content with white background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testTitle = 'Main Content: White Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContent backgroundColour="white" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Main Content with grey background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testTitle = 'Main Content: Grey Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContent backgroundColour="grey" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Main Content with yellow background', () => {
    let documentTitle;
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testTitle = 'Main Content: Yellow Background';

    beforeAll(() => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <MainContent backgroundColour="yellow" title={testTitle}>
            Main content text content.
          </MainContent>
        </React.Fragment>
      );
    });

    afterAll(() => {
      document.title = documentTitle;
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
