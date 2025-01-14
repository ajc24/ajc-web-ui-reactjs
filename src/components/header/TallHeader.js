/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderBase from '../base/HeaderBase';
import HeaderSubtitleText from '../base/HeaderSubtitleText';
import HeaderTitleText from '../base/HeaderTitleText';
import TallHeaderLogo from '../images/TallHeaderLogo';
import '../css/common.css';
import './css/header.css';

/**
 * Tall Header component which will render any combination of a logo, title and subtitle text. It can be rendered with a 4px upper border or without the border.
 * The border colours range from grey to red. This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most
 * commonly used desktop sizes (1920x1080). The height of the component is 320px.
 */
const TallHeader = props => {
  const backgroundImageSrc = props.backgroundImageSrc || undefined;
  let isTopBorderDisplayed = false;

  /* Set the CSS styling for the content container element */
  let contentCss = 'header-content';
  if (backgroundImageSrc === undefined) {
    if (props.backgroundColour === 'grey') {
      /* Set the background colour to grey */
      contentCss += ' background-grey';
    } else {
      /* By default choose a white background */
      contentCss += ' background-white';
    }
  }
  /* Set all relevant styling for a tall header */
  contentCss += ' header-content-tall-size';
  if (props.logoSrc !== undefined) {
    /* Set the relevant alignment for when an image has been specified */
    contentCss += ' header-content-tall-size-alignment-bottom';
  } else {
    /* Set the relevant alignment for whether a top, middle or bottom setting has been requested */
    if (props.titleTextAlignment === 'bottom') {
      contentCss += ' header-content-tall-size-alignment-bottom';
    } else if (props.titleTextAlignment === 'middle') {
      contentCss += ' header-content-tall-size-alignment-center';
    } else {
      contentCss += ' header-content-tall-size-alignment-top';
    }
  }
  if (props.topBorder === 'grey' || props.topBorder === 'red') {
    /* Enable and render the upper border for the header in the specified colour */
    contentCss += ` header-border-top-${props.topBorder}`;
    isTopBorderDisplayed = true;
  }
  /* Set the CSS styling for the title and subtitle container element */
  let titleAndSubtitleContainerCss = 'header-content-title-subtitle-text-container';
  if (props.logoSrc !== undefined && props.titleText !== undefined) {
    /* Ensure correct title text alignment if rendered with a logo */
    titleAndSubtitleContainerCss += ' header-content-title-subtitle-text-container-tall-size-with-logo';
  } else {
    /* Correct alignment for all other circumstances */
    titleAndSubtitleContainerCss += ' header-content-title-subtitle-text-container-tall-size';
  }
  return (
    <HeaderBase id={props.id} size="tall" backgroundImageSrc={backgroundImageSrc}>
      <div id={`${props.id}--header-content`} className={contentCss}>
        {
          props.logoSrc === undefined && props.titleText === undefined &&
            /* No logo or title text has been specified - render custom content as provided by the developer */
            <React.Fragment>
              {props.children}
            </React.Fragment>
        }
        {
          props.logoSrc !== undefined && props.titleText === undefined &&
            /* Render only a header logo without any title text */
            <React.Fragment>
              <TallHeaderLogo id={props.id} isTopBorderDisplayed={isTopBorderDisplayed} src={props.logoSrc} />
            </React.Fragment>
        }
        {
          props.logoSrc !== undefined && props.titleText !== undefined && props.subtitleText === undefined &&
            /* Render a header logo component with only a title text component alongside it */
            <React.Fragment>
              <TallHeaderLogo headerTitleTextId={props.id} id={props.id} isTopBorderDisplayed={isTopBorderDisplayed} src={props.logoSrc} />
              <div className={titleAndSubtitleContainerCss}>
                <HeaderTitleText id={props.id} titleTextColour={props.titleTextColour || 'black'} isTallHeader={true}>
                  {props.titleText}
                </HeaderTitleText>
              </div>
            </React.Fragment>
        }
        {
          props.logoSrc !== undefined && props.titleText !== undefined && props.subtitleText !== undefined &&
            /* Render a header logo component with both title text and subtitle text components alongside it */
            <React.Fragment>
              <TallHeaderLogo headerTitleTextId={props.id} id={props.id} isTopBorderDisplayed={isTopBorderDisplayed} src={props.logoSrc}
                subtitleTextId={props.id} />
              <div className={titleAndSubtitleContainerCss}>
                <HeaderTitleText id={props.id} titleTextColour={props.titleTextColour || 'black'} isTallHeader={true}>
                  {props.titleText}
                </HeaderTitleText>
                <HeaderSubtitleText id={props.id} headerTitleTextId={props.id} subtitleTextColour={props.subtitleTextColour || 'black'} isTallHeader={true}>
                  {props.subtitleText}
                </HeaderSubtitleText>
              </div>
            </React.Fragment>
        }
        {
          props.logoSrc === undefined && props.titleText !== undefined && props.subtitleText === undefined &&
            /* Render only a title text component */
            <div className={titleAndSubtitleContainerCss}>
              <HeaderTitleText id={props.id} titleTextColour={props.titleTextColour || 'black'} isTallHeader={true}>
                {props.titleText}
              </HeaderTitleText>
            </div>
        }
        {
          props.logoSrc === undefined && props.titleText !== undefined && props.subtitleText !== undefined &&
            /* Render both title text and subtitle text components */
            <div className={titleAndSubtitleContainerCss}>
              <HeaderTitleText id={props.id} titleTextColour={props.titleTextColour || 'black'} isTallHeader={true}>
                {props.titleText}
              </HeaderTitleText>
              <HeaderSubtitleText id={props.id} headerTitleTextId={props.id} subtitleTextColour={props.subtitleTextColour || 'black'} isTallHeader={true}>
                {props.subtitleText}
              </HeaderSubtitleText>
            </div>
        }
      </div>
    </HeaderBase>
  );
}
TallHeader.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The background image data to be displayed. For best results, the image you choose should be 1920px wide and 320px high. */
  backgroundImageSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** The custom content to be displayed inside the header. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The header logo image data to be displayed. For best results, the logo you choose should be at most 328px wide and 304px high.*/
  logoSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** 
   * The text content to be displayed as the subtitle text.
   * 
   * Subtitle text may not appear on smaller screens if its content exceeds the screen width.
   * It is also automatically hidden if the title text content wraps to a new line.
   */
  subtitleText: PropTypes.string,
  /** The colour of the subtitle text, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  subtitleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /**
   * The text content to be displayed as the title text.
   * 
   * The text will appear at a maximum size of 3rem which will be reduced down to 2rem to fit within the width of the
   * screen if necessary. If font size reduction is not enough for the text to fit on smaller screens, the text will also be wrapped. Finally if both font size reduction
   * and text wrapping are not sufficient then the text will also be truncated.
   * 
   * The title text will always be center aligned horizontally and can also be aligned vertically to the top, middle or bottom of the header component. If the title text
   * is displayed with a logo in a tall header component then the title text will always be rendered underneath the logo.
   */
  titleText: PropTypes.string,
  /* The alignment for the title text, either rendering at the top, middle or bottom of the header. By default, top alignment is pre-selected. */
  titleTextAlignment: PropTypes.oneOf([ 'top', 'middle', 'bottom' ]),
  /** The colour of the title text, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  titleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: PropTypes.oneOf([ 'off', 'grey', 'red' ]),
};
export default TallHeader;
