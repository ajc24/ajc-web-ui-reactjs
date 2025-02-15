/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { FunctionalImage } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Functional Image', () => {
  describe('With default parameters', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FunctionalImage id="functional-image-1" src={storybookLogo} alt="Default functional component alt text" onClick={() => {}} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('With custom parameters', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FunctionalImage id="functional-image-2" src={storybookLogo} alt="Custom functional component alt text" onClick={() => {}} height={300} width={500} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
