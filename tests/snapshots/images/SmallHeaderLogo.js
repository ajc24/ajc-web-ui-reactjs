/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import SmallHeaderLogo from '../../../src/components/images/SmallHeaderLogo';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';

describe('Small Header Logo', () => {
  describe('Default logo image with left alignment, no header upper border rendered, square image', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <SmallHeaderLogo id="small-header-logo" src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Logo image with center alignment, with header upper border rendered, square image', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <SmallHeaderLogo id="small-header-logo-center-border-square" isTopBorderDisplayed={true} logoAlignment="center" logoType="square" src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Logo image with center alignment, with header upper border rendered, rectangle image', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <SmallHeaderLogo id="small-header-logo-center-border-rectangle" isTopBorderDisplayed={true} logoAlignment="center" logoType="rectangle" src={storybookLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
