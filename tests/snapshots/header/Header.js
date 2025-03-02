/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { Header } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header', () => {
  /* Set the IDs for use in the tests */
  const testComponentId = 'test-header-id';

  describe('Default (small) Header, with custom content, no logo image, no title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <Header id={testComponentId}>
            Header component text content.
          </Header>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Small Header, with square logo image, no title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} logoSrc={storybookLogo} logoType="square" size="small" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Small Header, with rectangle logo image, no title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} logoSrc={storybookLogoLong} logoType="rectangle" size="small" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Tall Header, with logo image, no title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} logoSrc={storybookLogoLong} size="tall" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Small Header, no logo image, with title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} size="small" titleTextColour="black" titleTextContent="Header Title Text Content" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Small Header, no logo image, with title text, with subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} size="small" subtitleTextContent="Subtitle text content" titleTextContent="Header Title Text Content" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Tall Header, no logo image, with title text, no subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} size="tall" titleTextColour="black" titleTextContent="Header Title Text Content" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Tall Header, no logo image, with title text, with subtitle text', () => {
    let snapshot;
    
    beforeAll(() => {
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot_UseFakeTimers(
        <React.Fragment>
          <Header id={testComponentId} size="tall" subtitleTextContent="Subtitle text content" titleTextContent="Header Title Text Content" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
