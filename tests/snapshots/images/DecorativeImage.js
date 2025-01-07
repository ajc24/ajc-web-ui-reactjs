/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { DecorativeImage } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Decorative Image', () => {
  describe('With default parameters', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <DecorativeImage id="decorative-image-1" src={storybookLogo} />
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
          <DecorativeImage id="decorative-image-2" src={storybookLogo} height={300} width={500} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
