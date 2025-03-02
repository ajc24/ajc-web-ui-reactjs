/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { Header } from '../../../src';

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
});
