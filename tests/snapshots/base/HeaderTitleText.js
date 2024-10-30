/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import HeaderTitleText from '../../../src/components/base/HeaderTitleText';

describe('Header Title Text', () => {
  const testComponentId = 'test-header-title-text-id';

  describe('Component with undefined header type and undefined text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id={testComponentId}>
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with small header type and black text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={false} textColour="black">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with tall header type and white text colour', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id={testComponentId} isTallHeader={true} textColour="white">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
