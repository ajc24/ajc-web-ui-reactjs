/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { ArrowIcon } from '../../../src';

describe('Arrow Icon', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-component-id';

  describe('Arrow icon with size 1, with black colour, with down direction', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ArrowIcon colour="black" direction="down" id={testComponentId} size="1" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Arrow icon with size 2, with gold colour, with left direction', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ArrowIcon colour="gold" direction="left" id={testComponentId} size="2" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Arrow icon with default size, with white colour, with right direction', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ArrowIcon colour="white" direction="right" id={testComponentId} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Arrow icon with default size, with default colour, with up direction', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ArrowIcon direction="up" id={testComponentId} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
