/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { HeaderTypeA } from '../../../../src';
import headerBackgroundTestImage from '../../../../stories/images/header-background-test.png';

describe('Header Type A', () => {
  let componentDidMountSpy;

  beforeAll(() => {
    componentDidMountSpy = jest
      .spyOn(HeaderTypeA.prototype, 'componentDidMount')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    componentDidMountSpy.mockRestore();
  });

  describe('Header Type A with no top border (default), transparent background (default), left alignment (default)', () => {
    let snapshot;
    const testComponentId = 'test-header-border-none-bg-default-align-default';

    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId}>
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });
    
    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Header Type A with black top border (default colour), transparent background, left alignment', () => {
    let snapshot;
    const testComponentId = 'test-header-border-default-bg-transparent-align-left';

    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTypeA id={testComponentId} showTopBorder={true} backgroundColour="transparent" alignment="left">
            Header text content.
          </HeaderTypeA>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
