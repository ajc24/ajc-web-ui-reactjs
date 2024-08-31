/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { HeaderTypeA } from '../../../../src';
import { PageTemplateConfig } from '../../../../src/components/common';
import headerBackgroundTestImage from '../../../../stories/images/header-background-test.png';

describe('Header Type A', () => {
  describe('Header Type A with no top border (default), transparent background (default), left alignment (default)', () => {
    let componentDidMountSpy;
    let snapshot;
    const testComponentId = 'test-header-border-none-bg-default-align-default';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId}>
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Header Type A with black top border (default colour), transparent background, left alignment', () => {
    let componentDidMountSpy;
    let snapshot;
    const testComponentId = 'test-header-border-default-bg-transparent-align-left';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} backgroundColour="transparent" alignment="left">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Header Type A with grey top border, white background, center alignment', () => {
    let componentDidMountSpy;
    let snapshot;
    const testComponentId = 'test-header-border-grey-bg-white-align-center';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="grey" backgroundColour="white" alignment="center">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Header Type A with red top border, grey background, right alignment', () => {
    let componentDidMountSpy;
    let snapshot;
    const testComponentId = 'test-header-border-red-bg-grey-align-right';

    beforeAll(() => {
      componentDidMountSpy = jest
        .spyOn(HeaderTypeA.prototype, 'componentDidMount')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} topBorderColour="red" backgroundColour="grey" alignment="right">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });

    afterAll(() => {
      componentDidMountSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Header Type A with no top border (default), yellow background, background image assigned, left alignment (default)', () => {
    let setupDocumentBodyCssSpy;
    let snapshot;
    const testComponentId = 'test-header-border-none-bg-yellow-align-left--with-bg-image';

    beforeAll(() => {
      setupDocumentBodyCssSpy = jest
        .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
        .mockImplementation(() => {});
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} backgroundColour="yellow" backgroundImage={headerBackgroundTestImage}>
            Header text content.
          </HeaderTypeA>
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
