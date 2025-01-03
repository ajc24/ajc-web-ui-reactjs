/**
 * Developed by Anthony Cox in 2024
 */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderBase from '../base/HeaderBase';
import HeaderSubtitleText from '../base/HeaderSubtitleText';
import HeaderTitleText from '../base/HeaderTitleText';
import SmallHeaderLogo from '../images/SmallHeaderLogo';
import '../css/common.css';
import './css/header.css';

/**
 * Small Header component which will render any combination of a logo, title and subtitle text. It can be rendered with a 4px upper border or without the border.
 * The border colours range from grey to red. This component auto-handles screen widths from the most commonly used mobile screen sizes (360x800) to the most
 * commonly used desktop sizes (1920x1080). The height of the component is 160px.
 */
class SmallHeader extends React.Component {
  /**
   * Initialises the Header component
   * @param {any} props 
   */
  constructor(props) {
    super(props);
  }

  render() {
    let isTopBorderDisplayed = false;

    /* Set the CSS styling for the content container element */
    let contentContainerCss = 'header-content';
    if (this.props.backgroundColour === 'grey') {
      /* Set the background colour to grey */
      contentContainerCss += ' background-grey';
    } else {
      /* By default choose a white background */
      contentContainerCss += ' background-white';
    }
    contentContainerCss += ' header-content-small-size';
    if (this.props.topBorder === 'grey' || this.props.topBorder === 'red') {
      /* Enable and render the upper border for the header in the specified colour */
      contentContainerCss += ` header-border-top-${this.props.topBorder}`;
      isTopBorderDisplayed = true;
    }

    /* Set the CSS styling for the title and subtitle container element */
    const titleAndSubtitleContainerCss = 'header-content-title-subtitle-text-container header-content-title-subtitle-text-container-small-size';
    return (
      <HeaderBase id={this.props.id} size="small">
        <div id={`${this.props.id}--header-content`} className={contentContainerCss}>
          {
            this.props.logoSrc === undefined && this.props.titleText === undefined &&
              /* No logo or title text has been specified - render custom content as provided by the developer */
              <React.Fragment>
                {this.props.children}
              </React.Fragment>
          }
          {
            this.props.logoSrc !== undefined && this.props.titleText === undefined &&
              /* Render only a header logo without any title text */
              <React.Fragment>
                <SmallHeaderLogo id={this.props.id} isTopBorderDisplayed={isTopBorderDisplayed} logoAlignment="center" src={this.props.logoSrc} />
              </React.Fragment>
          }
          {
            this.props.logoSrc === undefined && this.props.titleText !== undefined && this.props.subtitleText === undefined &&
              /* Render only a title text component */
              <div className={titleAndSubtitleContainerCss}>
                <HeaderTitleText id={this.props.id} titleTextColour={this.props.titleTextColour || 'black'} isTallHeader={false}>
                  {this.props.titleText}
                </HeaderTitleText>
              </div>
          }
          {
            this.props.logoSrc === undefined && this.props.titleText !== undefined && this.props.subtitleText !== undefined &&
              /* Render both title text and subtitle text components */
              <div className={titleAndSubtitleContainerCss}>
                <HeaderTitleText id={this.props.id} titleTextColour={this.props.titleTextColour || 'black'} isTallHeader={false}>
                  {this.props.titleText}
                </HeaderTitleText>
                <HeaderSubtitleText id={this.props.id} headerTitleTextId={this.props.id} subtitleTextColour={this.props.subtitleTextColour || 'black'} isTallHeader={false}>
                  {this.props.subtitleText}
                </HeaderSubtitleText>
              </div>
          }
        </div>
      </HeaderBase>
    );
  }
}
SmallHeader.propTypes = {
  /** The background colour for the header. The default colour for the background is white. */
  backgroundColour: PropTypes.oneOf([ 'white', 'grey' ]),
  /** The custom content to be displayed inside the header. */
  children: PropTypes.any,
  /** The unique identifier for this component. */
  id: PropTypes.string.isRequired,
  /** The header logo image data to be displayed. */
  logoSrc: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /** 
   * The text content to be displayed as the subtitle text.
   * 
   * Subtitle text may not appear on smaller screens if its content exceeds the screen width. It is also automatically hidden if the title text content wraps to a new line.
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
   * The title text content will appear left aligned on larger screens and will automatically appear center aligned horizontally on smaller screens whenever text wrapping
   * is necessary. If displayed with a logo, the logo will appear to the left of the title text on larger screens. On smaller screens the logo will be moved to a position
   * above the title text, with the title text rendering at the bottom of the header.
   */
  titleText: PropTypes.string,
  /** The colour of the title text, either that of black with a white outline or white with a black outline. By default, black with a while outline is pre-selected */
  titleTextColour: PropTypes.oneOf([ 'black', 'default', 'white' ]),
  /** Whether to enable the headers upper / top border and the colour at which the border is to be rendered if enabled. The default setting for the border is off. */
  topBorder: PropTypes.oneOf([ 'off', 'grey', 'red' ]),
};
export default SmallHeader;
