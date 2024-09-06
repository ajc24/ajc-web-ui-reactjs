/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { MainContent } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';

describe('Main Content', () => {
  let documentTitle;
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
    document.title = documentTitle;
  });

  describe('Main Content with transparent background (default)', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testTitle = 'Main Content: Default';

    beforeAll(async () => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <MainContent title={testTitle}>
            <h1>Main content text content.</h1>
          </MainContent>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Main Content: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Main Content with white background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testTitle = 'Main Content: White Background';

    beforeAll(async () => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <MainContent backgroundColour="white" title={testTitle}>
            <h1>Main content text content.</h1>
          </MainContent>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Main Content: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Main Content with grey background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testTitle = 'Main Content: Grey Background';

    beforeAll(async () => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <MainContent backgroundColour="grey" title={testTitle}>
            <h1>Main content text content.</h1>
          </MainContent>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Main Content: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Main Content with yellow background', () => {
    let setupDocumentBodyCssSpy;
    let results;
    const testTitle = 'Main Content: Yellow Background';

    beforeAll(async () => {
      documentTitle = document.title;
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      const { unmount } = render(
        <div>
          <MainContent backgroundColour="yellow" title={testTitle}>
            <h1>Main content text content.</h1>
          </MainContent>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Main Content: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      setupDocumentBodyCssSpy.mockRestore();
    });
    
    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
