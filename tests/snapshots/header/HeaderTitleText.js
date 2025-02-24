/**
 * Developed by Anthony Cox in 2025
 */
import 'jsdom-global/register';
import React from 'react';
import { TestDev } from 'ajc-testing-code';
import { HeaderTitleText } from '../../../src';

describe('Header Title Text', () => {
  const truncateTextHeightCutoff = 95;

  describe('Standalone component, left alignment, black text colour, maximum font size, no text wrapping, no truncation', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight */
          return { height: 70 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos */
          return { right: 500 }
        });
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id="standalone--left-alignment--black-font--no-wrapping--no-truncation" alignment="left" textColour="black">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Component rendered in Header, centre alignment, white text colour, maximum font size, no text wrapping, no truncation', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight */
          return { height: 70 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos */
          return { right: 500 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos */
          return { right: 500 }
        });
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id="in-header--centre-alignment--white-font--no-wrapping--no-truncation" alignment="centre" parentHeaderId="parent-header-id" textColour="white">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('Standalone component, default alignment, default text colour, minimum font size, with text wrapping, with truncation (remove spaces and characters)', () => {
    let getBoundingClientRectSpy;
    let snapshot;
    
    beforeAll(() => {
      /* Create the spies for this component test */
      getBoundingClientRectSpy = jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (pre-loop) */
          return { right: 101 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (pre-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 0, font-size 3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 1, font-size 2.9rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 2, font-size 2.8rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 3, font-size 2.7rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 4, font-size 2.6rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 5, font-size 2.5rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 6, font-size 2.4rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 7, font-size 2.3rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 8, font-size 2.2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 9, font-size 2.1rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting h1RightPos (in-loop - index 10, font-size 2rem) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* reduceFontSizeAndWrapTextIfRequired() - getting containerRightPos (post-loop) */
          return { right: 100 }
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (pre-loop) */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 0, remove space between "text content") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 1, remove space between "component text") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 2, remove space between "text component") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 3, remove space between "title text") */
          return { height: truncateTextHeightCutoff + 1 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingSpaces() - getting currentHeadingHeight (in-loop - index 4, remove space between "Header title") */
          return { height: truncateTextHeightCutoff };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (pre-loop) */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting containerRightPos (pre-loop) */
          return { right: 100 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (in-loop - index 0, remove last character "r" from "Header") */
          return { right: 101 };
        })
        .mockImplementationOnce(() => {
          /* truncateTextByRemovingCharacters() - getting h1RightPos (in-loop - index 1, remove last character "e" from "Heade") */
          return { right: 100 };
        });
      
      /* Generate the snapshot for the component */
      snapshot = TestDev.createSnapshot(
        <React.Fragment>
          <HeaderTitleText id="standalone--default-alignment--default-font--with-wrapping--with-full-truncation">
            Header title text component text content.
          </HeaderTitleText>
        </React.Fragment>
      );
    });

    afterAll(() => {
      getBoundingClientRectSpy.mockRestore();
    });

    it('verifies the snapshot for the component', () => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
