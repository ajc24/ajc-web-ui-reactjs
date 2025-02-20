/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { FooterBase } from '../../../src';
import PageTemplateConfig from '../../../src/components/modules/PageTemplateConfig';

describe('Footer Base', () => {
  /* Set the spies for use in the tests */
  let setupDocumentBodyCssSpy;

  beforeAll(() => {
    setupDocumentBodyCssSpy = jest
      .spyOn(PageTemplateConfig, 'setupDocumentBodyCss')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    setupDocumentBodyCssSpy.mockRestore();
  });

  describe('Default component', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase>
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with custom id, gold background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase id="custom-id" backgroundColour="gold">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, green background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="green">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, green-2 background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="green-2">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, grey background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="grey">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, navy and gold background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="navy-and-gold">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, navy and white background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="navy-and-white">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, red background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="red">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component with default id, white background', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <FooterBase backgroundColour="white">
            Footer base text content.
          </FooterBase>
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
