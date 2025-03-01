/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TestDev } from 'ajc-testing-code';
import { HeaderLogo } from '../../../src';
import storybookLogo from '../../../stories/images/files/storybook-logo.svg';
import storybookLogoLong from '../../../stories/images/files/storybook-logo-long.svg';

describe('Header Logo', () => {
  /* Set the data for the tests */
  const heightSubtitleTextElement = 35;
  const heightTitleTextElement_NoWrapping = 75;
  const heightTitleTextElement_WithWrapping = 95;
  const testComponentId = 'test-component-id';
  const testTimeout = TestDev.getAxeTestTimeout();
  
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  describe('Logo image in small size Header with no border, left alignment, square logo type', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogo} alignment="left" logoType="square" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 1');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in small size Header with border, centre alignment, square logo type', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogo} alignment="centre" logoType="square" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 2');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in small size Header with no border, left alignment, rectangle logo type', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="left" logoType="rectangle" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 3');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in small size Header with border, centre alignment, rectangle logo type', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="centre" logoType="rectangle" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 4');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in tall size Header with no border, left alignment, no title text, no subtitle text', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return null;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="left" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 5');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in tall size Header with border, centre alignment, no title text, no subtitle text', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return null;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} alignment="centre" parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 6');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in tall size Header with no border, default alignment, with title text (no text wrapping), no subtitle text', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return {
            dataset: {
              wrap: 'false',
            },
            getBoundingClientRect: () => {
              return {
                height: heightTitleTextElement_NoWrapping,
              };
            },
          };
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return null;
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 7');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in tall size Header with no border, default alignment, with title text (no text wrapping), with subtitle text (visible)', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return null;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return {
            dataset: {
              wrap: 'false',
            },
            getBoundingClientRect: () => {
              return {
                height: heightTitleTextElement_NoWrapping,
              };
            },
          };
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if subtitle text component is rendered */
          return {
            getBoundingClientRect: () => {
              return {
                height: heightSubtitleTextElement,
              };
            },
          };
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 8');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });

  describe('Logo image in tall size Header with border, default alignment, with title text (with text wrapping), with subtitle text (hidden)', () => {
    let querySelectorSpy;
    let results;

    beforeAll(async () => {
      /* Create the spies for the test */
      querySelectorSpy = jest
        .spyOn(global.document, 'querySelector')
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if tall header component is rendered */
          return document.createElement('div');
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if top border is set to the header */
          return true;
        })
        .mockImplementationOnce(() => {
          /* handleImageSize() functionality - determine if title text component is rendered */
          return {
            dataset: {
              wrap: 'true',
            },
            getBoundingClientRect: () => {
              return {
                height: heightTitleTextElement_WithWrapping,
              };
            },
          };
        });

      /* Mount the component being accessibility tested */
      const unmount = TestDev.render_UseFakeTimers(
        <div>
          <header role="banner">
            <HeaderLogo id={testComponentId} src={storybookLogoLong} parentHeaderId="test-parent-header-id" />
          </header>
          <div role="navigation">
            Menu bar component
          </div>
          <main id="main-content" aria-label="Accessibility test">
            <h1>Header Logo Accessibility Test</h1>
          </main>
          <footer role="contentinfo" id="footer">
            Footer component
          </footer>
        </div>
      );
      const html = TestDev.getComponentInHTMLTemplate('Header Logo: Test 9');
      unmount();
      /* Perform the accessibility checks on this component */
      results = await TestDev.runAxeCore(html);
    }, testTimeout);

    afterAll(() => {
      querySelectorSpy.mockRestore();
    });

    it('verifies the accessibility standards for the component', () => {
      expect(results).toBeTruthy();
    });
  });
});
