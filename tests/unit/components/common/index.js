/**
 * Developed by Anthony Cox in 2024
 */
import { PageTemplateConfig } from '../../../../src/components/common';
import { storybookCssClasses } from '../../../../src/components/data/storybook';

describe('Commonly used functionality', () => {
  /* CSS classes used for test verifications */
  const ajcBodyDefaultCss = 'ajc-body-default';

  describe('PageTemplateConfig.setupDocumentBodyCss - non-Storybook deployment, document body not at 100% width', () => {
    let documentActiveElementBlurSpy;

    beforeAll(() => {
      /* Set up the spy for the active elements blur functionality */
      documentActiveElementBlurSpy = jest
        .spyOn(global.document.activeElement, 'blur')
        .mockImplementation(() => {});

      /* Execute the function being tested */
      PageTemplateConfig.setupDocumentBodyCss();
    });

    afterAll(() => {
      /* Restore the original document body */
      document.body.classList.remove(ajcBodyDefaultCss);


      /* Restore all mock spy functionality */
      documentActiveElementBlurSpy.mockRestore();
    });

    it('verifies that the "sb-show-main" class is not assigned to the document body', () => {
      expect(document.body.classList.contains(storybookCssClasses.sbShowMain)).toBeFalsy();
    });

    it('verifies that the "sb-main-padded" class is not assigned to the document body', () => {
      expect(document.body.classList.contains(storybookCssClasses.sbMainPadded)).toBeFalsy();
    });

    it('verifies that the "ajc-body-default" class is assigned to the document body', () => {
      expect(document.body.classList.contains(ajcBodyDefaultCss)).toBeTruthy();
    });

    it('verifies that the blur functionality for the currently active DOM element is called as expected', () => {
      expect(documentActiveElementBlurSpy.mock.calls).toHaveLength(1);
    });
  });

  describe('PageTemplateConfig.setupDocumentBodyCss - Storybook deployment, document body already set to 100% width', () => {
    let documentActiveElementBlurSpy;

    beforeAll(() => {
      /* Set up the spy for the active elements blur functionality */
      documentActiveElementBlurSpy = jest
        .spyOn(global.document.activeElement, 'blur')
        .mockImplementation(() => {});
      
      /* Set up the document body for the test */
      document.body.classList.add(storybookCssClasses.sbShowMain);
      document.body.classList.add(storybookCssClasses.sbMainPadded);
      document.body.classList.add(ajcBodyDefaultCss);

      /* Execute the function being tested */
      PageTemplateConfig.setupDocumentBodyCss();
    });

    afterAll(() => {
      /* Restore the original document body */
      document.body.classList.remove(ajcBodyDefaultCss);

      /* Restore all mock spy functionality */
      documentActiveElementBlurSpy.mockRestore();
    });

    it('verifies that the "sb-show-main" class is not assigned to the document body', () => {
      expect(document.body.classList.contains(storybookCssClasses.sbShowMain)).toBeFalsy();
    });

    it('verifies that the "sb-main-padded" class is not assigned to the document body', () => {
      expect(document.body.classList.contains(storybookCssClasses.sbMainPadded)).toBeFalsy();
    });

    it('verifies that the "ajc-body-default" class is assigned to the document body', () => {
      expect(document.body.classList.contains(ajcBodyDefaultCss)).toBeTruthy();
    });

    it('verifies that the blur functionality for the currently active DOM element is not called', () => {
      expect(documentActiveElementBlurSpy.mock.calls).toHaveLength(0);
    });
  });
});
