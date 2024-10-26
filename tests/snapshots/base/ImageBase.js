/**
 * Developed by Anthony Cox in 2024
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import ImageBase from '../../../src/components/base/ImageBase';
import benjiLogo from '../../../src/components/images/files/logo-benji.png';

describe('Image Base', () => {
  describe('Decorative image with default parameters', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ImageBase id="decorative-image-1" src={benjiLogo} />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Informative image with custom parameters', () => {
    let snapshot;
    
    beforeAll(() => {
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <ImageBase id="informative-image-1" src={benjiLogo} height={500} width={300} alt="Informative image alt text" />
        </React.Fragment>
      );
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
