/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import TallHeaderLogo from '../../../src/components/images/TallHeaderLogo';
import storybookLogo from '../../../stories/images/files/storybook-logo-long-tall.svg';

describe('Tall Header Logo', () => {
  describe('Default logo image with no header upper border rendered', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <TallHeaderLogo id="tall-header-logo" src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Tall header logo image with no header upper border rendered', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <TallHeaderLogo id="tall-header-logo" isTopBorderDisplayed={false} src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Tall header logo image with header upper border rendered', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <TallHeaderLogo id="tall-header-logo" isTopBorderDisplayed={true} src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
