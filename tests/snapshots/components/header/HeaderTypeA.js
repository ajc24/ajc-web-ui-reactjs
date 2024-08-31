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

  describe('Header with no top border and transparent background (Default Settings)', () => {
    let snapshot;
    const testComponentId = 'test-default-header-id';

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

  // describe('Transferred props and rendering - Header with grey top border and white background', () => {
  //   let jsonSnapshot;

  //   beforeAll(() => {
  //     jsonSnapshot = TestDev.createSnapshot(
  //       <React.Fragment>
  //         <Header id="test-header-with-top-border-id" renderTopBorder={true} topBorderColour="grey" backgroundColour="white">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //   });

  //   it('verifies the snapshot for the component', () => {
  //     expect(jsonSnapshot).toMatchSnapshot();
  //   });
  // });

  // describe('Transferred props and rendering - Header with red top border and image background', () => {
  //   let jsonSnapshot;

  //   beforeAll(() => {
  //     jsonSnapshot = TestDev.createSnapshot(
  //       <React.Fragment>
  //         <Header id="test-header-with-top-border-and-bg-image-id" renderTopBorder={true} topBorderColour="red" renderBackgroundImage={true} backgroundImageData={testImage}>
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //   });

  //   it('verifies the snapshot for the component', () => {
  //     expect(jsonSnapshot).toMatchSnapshot();
  //   });
  // });

  // describe('Transferred props and rendering - Header with no top border and grey background', () => {
  //   let jsonSnapshot;

  //   beforeAll(() => {
  //     jsonSnapshot = TestDev.createSnapshot(
  //       <React.Fragment>
  //         <Header id="test-header-with-no-top-border-id" renderTopBorder={false} backgroundColour="grey">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //   });

  //   it('verifies the snapshot for the component', () => {
  //     expect(jsonSnapshot).toMatchSnapshot();
  //   });
  // });

  // describe('Transferred props and rendering - Header with grey top border and yellow background', () => {
  //   let jsonSnapshot;

  //   beforeAll(() => {
  //     jsonSnapshot = TestDev.createSnapshot(
  //       <React.Fragment>
  //         <Header id="test-header-with-top-border-id" renderTopBorder={true} topBorderColour="grey" backgroundColour="yellow">
  //           Header text content.
  //         </Header>
  //       </React.Fragment>
  //     );
  //   });

  //   it('verifies the snapshot for the component', () => {
  //     expect(jsonSnapshot).toMatchSnapshot();
  //   });
  // });
});
