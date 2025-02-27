/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { HeaderLogo } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header Logo', () => {
  /* Set the data for the tests */
  const testComponentId = 'test-component-id';

  describe('Logo image in small size Header with no border, left alignment, square logo type', () => {
    let querySelectorSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        });

      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testComponentId} src={storybookLogo} alignment="left" logoType="square" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Logo image in small size Header with border, centre alignment, square logo type', () => {
    let querySelectorSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        });

      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testComponentId} src={storybookLogo} alignment="centre" logoType="square" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Logo image in small size Header with no border, left alignment, rectangle logo type', () => {
    let querySelectorSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        });

      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="left" logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Logo image in small size Header with border, centre alignment, rectangle logo type', () => {
    let querySelectorSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        });

      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="centre" logoType="rectangle" parentHeaderId="test-parent-header-id" />
        </React.Fragment>
      );
    });

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
